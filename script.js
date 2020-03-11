
const h1=document.querySelector('#increment-count');
const lowBtn=document.querySelectorAll('#lower-btn');
const highBtn=document.querySelectorAll('#higher-btn');
let counter=0;



lowBtn.forEach((btn)=>{
    btn.addEventListener('click',function(e){

        
        e.preventDefault();

        if(counter<=0){

            h1.innerHTML=counter;

           h1.style.color='red';
           counter=counter-1;
       } else{

        

        

        h1.innerHTML=counter;
        h1.style.color='green';
        counter=counter-1;
   
       } 
    })
});



highBtn.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        e.preventDefault();

        if(counter<0){

            h1.innerHTML=counter;

           h1.style.color='red';
           counter=counter+1;
       }else{

        

        h1.innerHTML=counter;
        h1.style.color='green';
        counter=counter+1; 
       }
        
 
    })
})

