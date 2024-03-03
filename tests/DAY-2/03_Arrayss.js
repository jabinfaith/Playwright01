const { brotliCompress } = require("zlib");

let browserName=[];
console.log(browserName);

browserName=['chrome','FF','edge'];
console.log(browserName);
console.log(browserName.length);
console.log(browserName[2]);
console.log(browserName[4]);

browserName[4]='IE';
console.log(browserName[4]);
console.log(browserName.length);
browserName[3]='OPERA';
console.log(browserName[3]);

browserName.push('HEADLESS');//add element at the end
console.log(browserName);

browserName.pop();//remove element from end
console.log(browserName);

browserName.unshift('IE');//add the element in first index
console.log(browserName);

browserName.pop();
console.log(browserName);

browserName.shift();//remove data from first index
console.log(browserName);

browserName.splice(1,2);//removes element from index number and no of elemnt to be removed
console.log(browserName);


let br=browserName.join("-");//convert array into string
console.log(br);

let brv=br.split("-");//convert array to string to array
console.log(brv);

let num=[2,6,3,1,9,7];
num.sort();
console.log(num);


let a1=[1,2,3,4];
let a2=[...a1,5,6,7,8];
console.log(a2);

let a3=[1,2,3,4];
let a4=[5,6,7,8];
let m=a3.concat(a4)
console.log(m);

//hetergenous
let mixArr=[1,2,3,'chrome','FF',true,[1,2,3,4],2.8];
console.log(mixArr.length)
console.log(mixArr[6][3])






