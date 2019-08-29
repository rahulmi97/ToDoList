window.addEventListener("load",init);
function init(){
    counter();
  incrCount();
  bindEvents();
  document.querySelector("#name").focus();
    document.querySelector("#list").className="hide";
    document.querySelector("#inp").className="show";
   
}
function bindEvents(){
    document.querySelector("#add").addEventListener('click',add);
    document.querySelector("#delete").addEventListener('click',Delete);
    document.querySelector("#edit").addEventListener('click',Edit);
    document.querySelector("#i").addEventListener('click',search);
    document.querySelector("#search").addEventListener("click",show);
    document.querySelector("#save").addEventListener('click',save);
}
let fn=count();
const incrCount=()=>document.querySelector("#id").innerText=fn();
function add(){
    // document.querySelector("#work").className="hide";
    document.querySelector("#list").className="show";
    var workObj= new work();
    for(let key in workObj){
        if(key=="flag"){
            continue;
        }
        if(key=="id"){
          workObj[key]=  document.querySelector("#"+key).innerText;
            continue;
        }
        
         workObj[key]=document.querySelector("#"+key).value;
    }
works.add(workObj);
 print(workObj);
 incrCount();
 clear(workObj)
 counter();
//  sort();

}
function sort(){
    document.querySelector("#body").innerHTML='';
   var sort= works.sort();
   console.log("sort is...",sort);
   for(let key of sort){
       print(key);
   }
}
const counter=()=>document.querySelector("#counter").innerText=works.totalWork();
function clear(obj){
    var count;
for(let key in obj){
    if(key=='id'){
        count=1+works.totalWork();
        document.querySelector("#"+key).innerText=count;
    }
    if(key=='flag'){
        continue;
    }
    document.querySelector("#name").focus();
    document.querySelector("#"+key).value='';
    
}
    
}
function count(){
    var counter=1;
    function incrCount(){
       return counter++
    }
    return incrCount;
}
function print(workObj){
    var tbody=document.querySelector("#body");
    var tr=tbody.insertRow();
    var  td=tr.insertCell();
    td.appendChild(creatIcon(workObj.id));
    for(let key in workObj){
        if(key=="flag"){
            continue;
        }
      tr.insertCell().innerText=workObj[key];
    }

 }
function creatIcon(id){
 var i=document.createElement("input");
 i.setAttribute("id",id); 
 i.type="checkbox";
 i.addEventListener("click",icon);
 
 return i;
}
function icon(){
    var id = this.getAttribute('id');
    works.toggleObj(id);
    var tr=this.parentNode.parentNode;
    tr.classList.toggle('bg');
    }
function Edit(){
    var obj=works.id();    
    for(let key of obj){
        for(let objct in key){
            if(objct=='flag'){
                continue;
            }
            if(objct=='id'){
            document.querySelector("#"+objct).innerText= key[objct];  
                continue; 
            }
           document.querySelector("#"+objct).value=key[objct];
          
           }
}

}
function save(){ 
    var index;
var workObj= new work();
for(let key in workObj){
    if(key=="flag"){
        continue;
    }
    if(key=="id"){
        workObj[key]=  document.querySelector("#"+key).innerText;
        id=workObj[key];
      index=works.findIndex(id);
    //   works.toggleObj(id);
console.log("index inside func",index)
        continue;
    }
    
     workObj[key]=document.querySelector("#"+key).value;
}
document.querySelector("#body").innerHTML='';
var push=works.push(index,workObj);

for(let keys of push){
    console.log("keys in save ",keys);
    
    print(keys);    
}
clear(workObj);
}
function Delete(){
    document.querySelector("#body").innerHTML='';
    var obj=works.delete();
    console.log("objects",obj);
    for(let key of obj){
        print(key);
    }
}
function search(){
    
    var id=document.querySelector("#find").value;
    var sear= works.searchById(id);
    document.querySelector("#body").innerHTML='';
    print(sear);
    // document.querySelector("#find").value='';
    // sort();
    
    //    console.log("search is",sear);
}
function show(){
    document.querySelector("#inp").className="show";
}

// console.log("objjjj is",obj);