const works={
 works:[],
 add(work){
this.works.push(work);
// console.log("works is",this.works)
 },
 totalWork(){
   return  this.delete().length;
 },
 searchById(id){
   return this.works.find(obj=>obj.id==id);
 },
 toggleObj(id){
   this.searchById(id).toggle(); 
  },
   delete(){
   return this.works.filter(obj=>obj.flag==false);
 },
 id(){
   return this.works.filter(obj=>obj.flag);
 },
 findIndex(id){
   return this.works.findIndex(obj=>obj.id==id)
 },
 push(index,ele){
  console.log("pushing object",this.works);
  this.works.splice(index,1,ele)
  return this.delete() ;

   
 },
 sort(){
  return this.works.sort((first,sec)=>first.id-sec.id);
 }
 
};