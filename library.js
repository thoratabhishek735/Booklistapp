nas=JSON.parse(localStorage.getItem('name'))
document.getElementById('usname').innerHTML=name
var n=1
function showtime(){
    var date=new Date() 
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    
    var time = h +":"+m +":" + s
    document.getElementById('time').innerHTML= time
}
  setInterval(showtime,1000)
  if (localStorage.getItem('users') == null) {
    users=[]
    boo=[]
}
  else{
    boo = JSON.parse(localStorage.getItem('users'))
    users=boo
    boo.forEach(element => {
      
        tbody = document.getElementById('tbody')
        let mystr= ` <tr>
        <td>${n}</td>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        
         </tr>
        `
           tbody.innerHTML+=mystr
        n+=1
    });
 }
////////////////////////////////////////////////////////////////////////////////////////////////
function Book(name,author,type){
    this.name=name
    this.author=author
    this.type=type
    
}
function Books(name,author,type){
    this.name=name
    this.author=author
    this.type=type
    
}

function Display(){
    
}
Display.prototype.add= function(book){
    
     tbody = document.getElementById('tbody')
    
    let mystr= ` <tr>
    <td>${n}</td>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>

    

  </tr>
    `
    
    $("tbody").append(mystr)
    
    n+=1

}
Display.prototype.clear= function(){
    let libraryform= document.getElementById('libraryform')
    libraryform.reset()
}
Display.prototype.show= function(type,msg){
   let message = document.getElementById('message')
   message.innerHTML=`<div class="alert alert-success" role="alert">
   ${type} ${msg}
 </div>`
 setTimeout(() => {
     message.innerHTML=''
 }, 2000);
}
Display.prototype.shower= function(type,msg){
   let message = document.getElementById('message')
   message.innerHTML=`<div class="alert alert-danger" role="alert">
   ${type} ${msg}
 </div>`
 setTimeout(() => {
     message.innerHTML=''
 }, 3000);
}
Display.prototype.validate= function(book){
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}


//Add sumit event listeners
let libraryform= document.getElementById('libraryform')
libraryform.addEventListener('submit',libraryformsubmit)



 function libraryformsubmit(e){
    e.preventDefault();
     
    
    
     let name=document.getElementById('bookname').value
     let author=document.getElementById('authorname').value

     let fiction= document.getElementById('fiction')
     let biography= document.getElementById('biography')
     let cooking= document.getElementById('cooking')
     let type

     if(fiction.checked){
         type=fiction.value
         
     }
    else if(biography.checked){
         type=biography.value

     }
    else if(cooking.checked){
         type=cooking.value

     }
     
     let book = new Book(name,author,type)
     
     //localStorage.setItem('book',JSON.stringify(book))
     
let display=new Display()
    
     if(display.validate(book) == true){
        users.push(book)
        var books = JSON.stringify(users)
        localStorage.setItem('users',books)
     display.add(book)
     display.clear()
     display.show('SUCCESS!!!!!!!!!','       Book added successfully')
     
     }
     else{
          display.shower('ERROR!!!!!!','            Sorry you cannot add this book')
     }
    


    
 }



//*************************************************************************************** */
$('.rem').on('click',function(){
    
    let display=new Display()
    console.log('removing')
    console.log(boo)
    let name=document.getElementById('bookname').value
     let author=document.getElementById('authorname').value
     let fiction= document.getElementById('fiction')
     let biography= document.getElementById('biography')
     let cooking= document.getElementById('cooking')
     let type

     if(fiction.checked){
         type=fiction.value
         
     }
    else if(biography.checked){
         type=biography.value

     }
    else if(cooking.checked){
         type=cooking.value

     }
     let buks = new Books(name,author,type)
     console.log(buks)
     us1=boo
     us1.forEach(element => {
         if(element.name==buks.name && element.author==buks.author && element.type==buks.type){
             removeval=element
             us1=$.grep(us1,function(value){
                 return value!=removeval
             })

         }
        
    });
    
    console.log(us1)
    localStorage.setItem('users',JSON.stringify(us1))
    
    document.getElementById('tbody').innerHTML=""
    us1.forEach(element => {
        tbody = document.getElementById('tbody')
        let mystr= ` <tr>
        <td>${n}</td>
        <td>${element.name}</td>
        <td>${element.author}</td>
        <td>${element.type}</td>
        
         </tr>
        `
           tbody.innerHTML+=mystr
        n+=1
    });
    
    location.reload();
    
    
     
})
