const TEAM_STORE='quiz-scoreboard-teams';
const SCORE_STORE='quiz-scoreboard-scores';
let teams=[],scores={};
try{teams=JSON.parse(localStorage.getItem(TEAM_STORE)||'[]');scores=JSON.parse(localStorage.getItem(SCORE_STORE)||'{}')}catch{}
const list=document.querySelector('#team-list');
const form=document.querySelector('#add-team');
const input=document.querySelector('#team-name');
const error=document.querySelector('#form-error');

function save(){localStorage.setItem(TEAM_STORE,JSON.stringify(teams));localStorage.setItem(SCORE_STORE,JSON.stringify(scores))}
function render(){
  const ranked=teams.map(name=>({name,score:scores[name]||0})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
  document.querySelector('#team-count').textContent=teams.length;
  document.querySelector('#top-score').textContent=ranked[0]?.score||0;
  list.innerHTML=ranked.length?'':'<div class="empty">No teams added yet. Add your first team above.</div>';
  ranked.forEach((team,index)=>{
    const card=document.createElement('article');card.className=`team ${index===0&&team.score>0?'leader':''}`;
    card.innerHTML=`<div class="rank">${index+1}</div><div class="name"><h2></h2><p>${team.score===1?'1 correct answer':`${team.score} correct answers`}</p></div><div class="controls"><button aria-label="Remove one point">−</button><output class="score">${team.score}</output><button class="add" aria-label="Add one point">+</button><button class="delete" aria-label="Delete team">×</button></div>`;
    card.querySelector('h2').textContent=team.name;
    const buttons=card.querySelectorAll('button');
    buttons[0].onclick=()=>change(team.name,-1);
    buttons[1].onclick=()=>change(team.name,1);
    buttons[2].onclick=()=>removeTeam(team.name);
    list.append(card);
  });
}
function change(name,amount){scores[name]=Math.max(0,(scores[name]||0)+amount);save();render()}
function removeTeam(name){if(confirm(`Remove "${name}" from the scoreboard?`)){teams=teams.filter(team=>team!==name);delete scores[name];save();render()}}
form.onsubmit=event=>{
  event.preventDefault();const name=input.value.trim();error.textContent='';
  if(teams.some(team=>team.toLowerCase()===name.toLowerCase())){error.textContent='That team is already on the scoreboard.';return}
  teams.push(name);scores[name]=0;save();input.value='';render();input.focus();
};
document.querySelector('#reset').onclick=()=>{if(confirm('Reset every team score to zero?')){scores={};teams.forEach(team=>scores[team]=0);save();render()}};
render();
