import Link from 'next/link';
import Image from 'next/image';
import {useEffect,useState} from 'react';
import {motion} from 'framer-motion';
import {ArrowRight,CalendarDays,Trophy,Users,ChevronDown} from 'lucide-react';

const target=process.env.NEXT_PUBLIC_EVENT_DATE||'2026-08-15T10:00:00+05:30';
function Countdown(){const [d,setD]=useState([0,0,0,0]);useEffect(()=>{const tick=()=>{const n=Math.max(0,new Date(target).getTime()-Date.now());setD([Math.floor(n/864e5),Math.floor(n/36e5)%24,Math.floor(n/6e4)%60,Math.floor(n/1e3)%60])};tick();const i=setInterval(tick,1000);return()=>clearInterval(i)},[]);return <div className="mt-8 flex gap-3">{d.map((v,i)=><div key={i} className="glass min-w-16 rounded-xl px-3 py-3 text-center"><div className="font-display text-2xl">{String(v).padStart(2,'0')}</div><div className="text-[9px] uppercase tracking-widest text-zinc-500">{['Days','Hours','Mins','Secs'][i]}</div></div>)}</div>}

export default function Home(){return <>
  <section className="relative min-h-[92vh] overflow-hidden px-5 pt-16">
    <Image src="/hero-city.png" alt="Crimson futuristic city" fill priority className="object-cover object-center"/>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/5"/><div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/20"/>
    <div className="relative mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center"><motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} className="max-w-3xl py-20">
      <div className="mb-5 inline-flex rounded-full border border-red/30 bg-red/10 px-4 py-2 text-xs font-bold uppercase tracking-[.22em] text-red">College quiz competition</div>
      <h1 className="font-display text-6xl leading-[.9] sm:text-8xl lg:text-[7.2rem]">SPIDER-MAN:<br/><span className="text-red">BRAND NEW DAY</span></h1>
      <p className="mt-5 text-xl font-semibold sm:text-2xl">Swing into the ultimate quiz. Win 2 free movie tickets.</p>
      <p className="mt-3 max-w-2xl text-zinc-300"><strong className="text-white">Presented by MuV PEC</strong><br/>College of Engineering Pathanapuram</p>
      <div className="mt-7 flex flex-wrap gap-3"><Link href="/register" className="btn-primary">Register your team <ArrowRight size={18}/></Link><Link href="/rules" className="btn-secondary">View the rules</Link></div><Countdown/>
    </motion.div></div>
  </section>
  <section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">{[[Trophy,'The prize','2 free movie tickets'],[Users,'The squad','2 members per team'],[CalendarDays,'Entry fee','₹0–₹40 with karma offer']].map(([I,t,c]:any)=><div key={t} className="glass rounded-2xl p-7"><I className="mb-5 text-red"/><div className="text-sm text-zinc-500">{t}</div><div className="mt-1 text-xl font-bold">{c}</div></div>)}</div></section>
  <section className="bg-navy/25 px-5 py-24"><div className="mx-auto max-w-5xl text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-red">The ultimate prize</p><h2 className="mt-3 font-display text-5xl sm:text-7xl">Your seat. Your screen. Your victory.</h2><p className="mx-auto mt-5 max-w-xl text-zinc-400">Finish on top and take home two tickets to Spider-Man: Brand New Day.</p><Link href="/prize" className="btn-secondary mt-8">Explore the prize <ArrowRight size={17}/></Link></div></section>
  <section className="px-5 py-24"><div className="mx-auto max-w-4xl"><div className="mb-10 text-center"><p className="text-xs font-bold uppercase tracking-[.3em] text-red">Need to know</p><h2 className="mt-2 font-display text-5xl">Frequently asked</h2></div>{[['Is the quiz online?','No. The entire quiz happens offline at the event venue. This website is for registration and payment only.'],['Can I register alone?','Teams require exactly two members. Find your trivia partner before registering.'],['How is payment verified?','Upload your UPI payment screenshot. The organizer will review it from the admin registration desk.'],['Can I get a refund?','Registration payments are non-refundable. Please review all details before submitting.']].map(([q,a])=><details key={q} className="group border-b border-white/10 py-5"><summary className="flex cursor-pointer list-none items-center justify-between font-semibold">{q}<ChevronDown className="transition group-open:rotate-180"/></summary><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">{a}</p></details>)}</div></section>
</>}
