const arr=[1,1,2,2];
// const arr2=new Set()  创建一个新集合
const  arr2=[...new Set(arr)];  
// 上面是去重  因为返回一个数组 所以是[]用ES6的set类
const set =new Set(arr);
const has=set.has(1);//判断是否在集合中;


//求交集
const set2= new Set([2,3]);
const set3=new Set ([...set].filter(item=>set2.has(item)));
// filter是筛选  item--本身  set2.has--set2也有的 set3是交集的集合