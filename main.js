// ////1
$('.carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverpause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// ////2
$('.carousel-slide').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverpause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
// ////3
$('.carousel-shows').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverpause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
// regexP
// var words=prompt('Matn kiriting.');
// var regex = new RegExp('[.!?] ', 'gi');
// console.log( words.split(regex));

// xatooo
// var elBtnWhite = document.querySelector('.btn btn-white');
// var elCollapse = document.querySelector('.collapse');
// elBtnWhite.addEventListener('click', function(){
//     document.body.classList.toggle('collapse');
// })
  

// random
var eladdInputCreat = document.querySelector('.addInputCreat');
var eladdButtonClick = document.querySelector('.addButtonClick');
var addrandomNumber=Math.floor(Math.random() * (100 - 1)) + 1;
console.log(addrandomNumber); 
eladdButtonClick.addEventListener('click',function(){
   if( eladdInputCreat.value){
        if(addrandomNumber>eladdInputCreat.value){
            alert('kichik son kiritildi');
        }
        else if(addrandomNumber<eladdInputCreat.value){
            alert('katta son kiritildi');
        }
        else{
            alert('uraaaa topdiz');
        }
    }
   else{
       alert('iltimos son kiriting')
   }
});           

var  eldoubleInput = document.querySelector('.doubleInput');  
var  elPushButton = document.querySelector('.PushButton');

var  elIndexInput = document.querySelector('.IndexInput');
var  elDeleteButton = document.querySelector('.DeleteButton');

var eladdList = document.querySelector('.addList');
var myList=[]; 

// createElement // // // // // // // // // // // 

// for (var i=0; i<5; i++){
//    var elNewImage=document.createElement('img');
//     elNewImage.src='image/1-2.jpg';

//     eladdList.appendChild(elNewImage);
// }




//   push  //
elPushButton.addEventListener('click', function(){
    if(!eldoubleInput.value){
        alert('ruyxatga malumot kiriting');
        return;
}   
    if(myList.indexOf(eldoubleInput.value)!==-1){
        alert('bu malumot ruyxatda mavjud');
        return;
    }
    
        myList.push(eldoubleInput.value);
            
        eladdList.innerHTML = myList.join('<li>');
        eldoubleInput.value='';
        
        eladdList.innerHTML='';
        for(var i=0; i<myList.length; i++){
            var elNewLi=document.createElement('li');
            elNewLi.textContent = myList[i];
            eladdList.appendChild(elNewLi);
        }
        
        elIndexInput.focus();
});
 
// splice //

elDeleteButton.addEventListener('click',function(){
    if(!elIndexInput.value){
        alert('raqam kiriting');
        return;
        }
    if(0>elIndexInput.value && elIndexInput.value>100){
        alert('1 bilan 100 oraliqdagi sonlarni kiriting');
        return;
    }
        myList.splice((elIndexInput.value),1);
        eladdList.innerHTML = myList.join('<li>');
        elIndexInput.value='';
})


// var scanner = 1;
// for (var i=1; i<100; i++){
//     if( i % 2 ===  1){
//         console.log(scanner+' -toq son: '+i);
//         scanner++;
//     }
// }




// for(var i=0; i<500; i++){

//         if(i%5===0){
    
//             console.log(i);
    
//         }

// }



// funciton //
 
// function scanner(x , y){
// return x*y;
// }
// console.log(scanner(5,10));


// var double=function(numb1, numb2 ){
//     return numb1+numb2;
// }
// console.log(double(2,15));


// for(var i=0;i<Phone.length;i++){
//     alert(Phone[i].batary);
// }



// var eladdList=document.querySelector('.addList');
// var newLi=document.createElement('li');
// newLi.textContent='salom';
// var elImage=document.createElement('img');

// elImage.src='image/PLANTSY.png';

// eladdList.appendChild(elImage);
// eladdList.appendChild(newLi);




// var animals = [
// {name:'bobik',   type:'it'},
// {name:'amon',   type:'mol'},
// {name:'arabi',type:'qochqor'},
// {name:'nar',    type:'mol'},
// {name:'moda',    type:'mol'},
// {name:'chempion', type:'qochqor'}
// ];
//     for(var i=0 ; i < animals.length; i++){
//     console.log(animals[i].name);
// }

// var ListDogs=[];
// for(var i=0;i<animals.length;i++){
//     if(animals[i].type==='mol'){
//             console.log(ListDogs);
// }}






//// fragment ////////////// 
var Phone=[ 
 {
     company:'Artel',
     foto:'image/xiomi.jpg',
     model:'artel',
     memory:'64GB',
     batary:5000,
     prace:'200 $',
     color:'blue',
     camera:'64 MP',
     operative:4
 },
 {
    company:'huawei',
    foto:'image/samsung.jpg',
    model:'redmi',
    memory:'64GB',
    batary:5000,
    prace:'200 $',
    color:'blue',
    camera:'64 MP',
    operative:4
},
{
    company:'readmi',
    foto:'image/iphone.jpg',
    model:'readmi',
    memory:'64GB',
    batary:5000,
    prace:200,
    color:'blue',
    camera:'64 MP',
    operative:4
},
{
    company:'Xiomi',
    foto:'image/xiomi.jpg',
    model:'redmi',
    memory:'64GB',
    batary:5000,
    prace:200,
    color:'blue',
    camera:'64 MP',
    operative:4
},
{
    company:'Iphone',
    foto:'image/iphone.jpg',
    model:'Iphone X',
    memory:'128 GB',
    batary:4000,
    prace:1000,
    color:'dark',
    camera:'48 MP',
    operative:6
},
{
    company:'Samsung',
    foto:'image/samsung.jpg',
    model:'A51',
    memory:'32 GB',
    batary:5000,
    prace:300,
    color:'black',
    camera:'32 MP',
    operative:4
}];
var elclickBtn = document.querySelector('.clickBtn');
var eladdBox = document.querySelector('.addBox');
    elclickBtn.addEventListener('click', function(){
        var eladdFrangment=document.createDocumentFragment();
        for(var i=0; i<Phone.length; i++){
            
            
            var eladdTitle=document.createElement('h2');
            eladdTitle.textContent=Phone[i].company;
            // 
            var eladdImage=document.createElement('img');
            eladdImage.src=Phone[i].foto;
            //
            var eladdModel=document.createElement('p');
            eladdModel.textContent=Phone[i].model;
            // 
            var eladdLink=document.createElement('a');
            eladdLink.href='#';
            eladdLink.textContent='zakaz berish';
            // 
            var eladdLi=document.createElement('li');
            eladdLi.classList.add('col-4','bg-light','m-3','rounded','border','d-block','text-center','w-25');
            // 
            eladdLi.appendChild(eladdTitle);
            eladdLi.appendChild(eladdImage);
            eladdLi.appendChild(eladdModel);
            eladdLi.appendChild(eladdLink);
        //
            eladdFrangment.appendChild(eladdLi);

            // fragmentsiz <<\/>>
            // eladdBox.appendChild(eladdLi);
    };
    eladdBox.appendChild(eladdFrangment);
}) 


///////  function  ///////
//  var Name=function(ism){
//      console.log('assalomu alekum'+ism);
//  }
// Name(' Bexruz');


// var kopaytir=function(x,y){
//     return x*y;
// }
// console.log(kopaytir(5,10));


// function sanoq(i){
//     return Phone[i].company+' - '+Phone[i].model+' - '+Phone[i].prace;
// }
// // console//
// console.log(sanoq(1));

// ///html
// eladdBox.textContent=sanoq(1); 

// Phone.forEach(function(Phone,i){
//     console.log(i+'=>'+Phone.company+' '+i);
// });

var eladdPhoneInput = document.querySelector('.addPhoneInput');
var eladdPhoneBtn = document.querySelector('.addPhoneBtn');
var eladdPhoneList = document.querySelector('.addPhoneList');
eladdPhoneBtn.addEventListener('click', function(){
    if(!eladdPhoneInput.value){
        alert('telefon nomini kiriting');
        return;
    }
    var eladdNewRegex=new RegExp(eladdPhoneInput.value,'gi');
    
  var  res = Phone.filter(function(telefon){
        return telefon.color.match(eladdNewRegex);
        });
// console.log(eladdPhoneList);
    var eladdNewFragment=document.createDocumentFragment();
    res.forEach(function(telefon){

        var eladdNewLi=document.createElement('li');

            var eladdPhoneTitle=document.createElement('h2');
            eladdPhoneTitle.textContent=telefon.model;

            var eladdNewPhoto=document.createElement('img');
            eladdNewPhoto.src=telefon.foto;

            eladdNewLi.appendChild(eladdPhoneTitle);
            eladdNewLi.appendChild(eladdNewPhoto);

        eladdNewFragment.appendChild(eladdNewLi);
});
    // eladdPhoneList.innerHTML=eladdNewFragment.join('<br>');

        eladdPhoneList.appendChild(eladdNewFragment); 
    });