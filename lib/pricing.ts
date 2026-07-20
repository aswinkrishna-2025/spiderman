export const KARMA_THRESHOLD=10000;
export function calculateFee(member1:any,member2:any){const qualified=[Number(member1)>=KARMA_THRESHOLD,Number(member2)>=KARMA_THRESHOLD].filter(Boolean).length;return qualified===2?0:qualified===1?20:40}
