

const arr=[1,2,3,4,5,6];
const [x,y,...array]=arr;
console.log(array)


const obj={
    firstName:"Jalol",
    lastName:"Yaxyoyev",
    age:21,
    job:"Student",
    city:"Shahrisabz"
}

const {job,...others}=obj;
console.log(others)

let sum=0;

let sumFunc=function (...sonlar){
    for (let i=0;i<sonlar.length;i++){
        sum=sum+sonlar[i]
    }
    console.log(sum)
}

sumFunc(1,2,3,4,5,6,7,8,9)