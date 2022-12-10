// HackerRank - Very Big Sum
// https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function aVeryBigSum(ar) {
  // Write your code here
 let sum = 0;
 for (let index = 0; index < ar.length; index += 1) {
  sum = sum + ar[index];
 }
 return sum;
}