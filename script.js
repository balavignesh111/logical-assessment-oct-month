'use script';

// 1. Write a program that takes an array of elements and counts the occurrences of each element using a Map.

const firstQuestionEle = document.getElementById('first-question');

const arr1 = [1, 2, 3, 2, 1, 4, 5, 4];

let count = 1;
let originalArr =[];
const map = new Map();

// initialize function
const initialize = ()=>{
  count = 1;
}

const addData = (ele,count)=>{
  if(!(originalArr.includes(ele))){
    originalArr.push(ele);
    map.set(ele,count)
  }
}
const occurrence = (arr1)=>{
  for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
      if(!(originalArr.includes(arr1[i]))){
        if(arr1[i] == arr1[j]){
          count += 1;
        }
      }
    }
    addData(arr1[i],count);
    initialize();
  }
  console.log(map);
}
console.log(`The answer for first problem is\n\ninput-> ${arr1} `);
occurrence(arr1)
firstQuestionEle.innerText = `click on inspect mode to see the answer`

// 2. Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.

const arr = [1, 4, 20, 3, 10, 5];
const targetSum = 33;

const checkExistence = (arr,sum) =>{
  let total = 0;
  let flag = false;
  for(let i=0;i<arr.length;i++){
    total += arr[i];
    for(let j=i+1;j<arr.length;j++){
      total += arr[j];
      if(total > sum){
        total = 0;
        break;
      }else if(total == sum){
        flag = true;
        break;
      }
    }
    if(flag){
      break;
    }
  }
  return flag;
}

console.log(`The answer for second problem is ${checkExistence(arr,targetSum)}`);

// 3. Write a program that takes an array of strings and groups anagrams together using a Map.

const arrString = ['eat','tea','tan','ate','nat','bat'];

const anagram = ()=>{
  const [...copyArr] = arrString;
  const mapAnagram = new Map();

  copyArr.forEach((element,index)=>{
    copyArr[index] = element.split('').sort().join('');
  })

  // logic starts here!!!
  copyArr.forEach((ele,index)=>{
    if(!(mapAnagram.has(ele))){
      const arr = [];
      copyArr.forEach((secEle,secINdex)=>{
        if(ele == secEle){
          arr.push(arrString[secINdex]);
        }
      })
      mapAnagram.set(ele,arr);
    }
  })

  console.log(mapAnagram);
}

console.log(`The answer for third problem is\n`)
anagram();

// 4. Write a program that takes an array of strings and reverses each string in the array using the array methods.

const revArr = ["apple","banana","orange"];

const revArrStr = (revArr)=>{
  revArr = revArr.map((ele)=> ele.split('').reverse().join(''));
  return revArr;
}

console.log(`The answer for fourth problem is ${revArrStr(revArr)}`);

// 5. Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.

const squareNum = [1,2,4,7,9,16,25];

const perfectSquareNum = (arr)=>{
  let perfectSquareArr = [];
  arr.forEach((ele)=>{
    let num = Math.sqrt(ele);
    if(ele == (num*num)){
      perfectSquareArr.push(ele);
    }
  })
  console.log(perfectSquareArr);
}

console.log(`The answer for fifth problem is\n`);
perfectSquareNum(squareNum);

// 6. Write a program that takes two objects and merges them into a single object

const obj1 = {
  name:'john',
  age:30
}

const obj2 = {
  city:'New York',
  occupation:'Engineer'
}

const combinedObj = {...obj1,...obj2};
console.log(`The answer for sixth problem is\n`);
console.log(combinedObj);

// 7 Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().

const arrOfObj = [
  {key:"name",value:"John"},
  {key:"age",value:30},
  {key:"city",value:"New York"}
]

const targetObj = {};
arrOfObj.forEach((ele)=>{
  let arr = Object.entries(ele);
  let obj = {
    [arr[0][1]]:arr[1][1],
  }
  Object.assign(targetObj,obj);
})
console.log(`The answer for seventh problem is\n`);
console.log(targetObj);

// 8.Write a program that takes a function with an array parameter and destructure the array inside the function.