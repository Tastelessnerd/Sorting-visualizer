alert("JS Loaded");
let array=[];
function generateArray(){
array=[];
document.getElementById("array").innerHTML="";
for(let i=0;i<25;i++){
let value=Math.floor(Math.random()*250)+20;
array.push(value);
let bar=document.createElement("div");
bar.classList.add("bar");
bar.style.height=value+"px";
document.getElementById("array").appendChild(bar);
}
}
function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms));
}
async function bubbleSort(){
let bars=document.getElementsByClassName("bar");
for(let i=0;i<array.length;i++){
for(let j=0;j<array.length-i-1;j++){
if(array[j]>array[j+1]){
let temp=array[j];
array[j]=array[j+1];
array[j+1]=temp;
bars[j].style.height=array[j]+"px";
bars[j+1].style.height=array[j+1]+"px";
await sleep(50);
}
}
}
}
async function selectionSort(){
let bars=document.getElementsByClassName("bar");
for(let i=0;i<array.length;i++){
let min=i;
for(let j=i+1;j<array.length;j++){
if(array[j]<array[min]){
min=j;
}
}
let temp=array[i];
array[i]=array[min];
array[min]=temp;
bars[i].style.height=array[i]+"px";
bars[min].style.height=array[min]+"px";
await sleep(50);
}
}
async function insertionSort(){
let bars=document.getElementsByClassName("bar");
for(let i=1;i<array.length;i++){
let key=array[i];
let j=i-1;
while(j>=0 && array[j]>key){
array[j+1]=array[j];
bars[j+1].style.height=array[j+1]+"px";
j--;
await sleep(50);
}
array[j+1]=key;
bars[j+1].style.height=key+"px";
}
}
async function mergeSortStart(){
await mergeSort(0,array.length-1);
}
async function mergeSort(l,r){
if(l>=r) return;
let m=Math.floor((l+r)/2);
await mergeSort(l,m);
await mergeSort(m+1,r);
await merge(l,m,r);
}
async function merge(l,m,r){
let bars=document.getElementsByClassName("bar");
let left=array.slice(l,m+1);
let right=array.slice(m+1,r+1);
let i=0;
let j=0;
let k=l;
while(i<left.length && j<right.length){
if(left[i]<=right[j]){
array[k]=left[i];
i++;
}else{
array[k]=right[j];
j++;
}
bars[k].style.height=array[k]+"px";
k++;
await sleep(50);
}
while(i<left.length){
array[k]=left[i];
bars[k].style.height=array[k]+"px";
i++;
k++;
await sleep(50);
}
while(j<right.length){
array[k]=right[j];
bars[k].style.height=array[k]+"px";
j++;
k++;
await sleep(50);
}
}
async function quickSortStart(){
await quickSort(0,array.length-1);
}
async function quickSort(low,high){
if(low<high){
let pi=await partition(low,high);
await quickSort(low,pi-1);
await quickSort(pi+1,high);
}
}
async function partition(low,high){
let bars=document.getElementsByClassName("bar");
let pivot=array[high];
let i=low-1;
for(let j=low;j<high;j++){
if(array[j]<pivot){
i++;
let temp=array[i];
array[i]=array[j];
array[j]=temp;
bars[i].style.height=array[i]+"px";
bars[j].style.height=array[j]+"px";
await sleep(50);
}
}
let temp=array[i+1];
array[i+1]=array[high];
array[high]=temp;
bars[i+1].style.height=array[i+1]+"px";
bars[high].style.height=array[high]+"px";
return i+1;
  }
