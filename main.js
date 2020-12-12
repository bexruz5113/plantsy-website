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
// var eladdInputCreat = document.querySelector('.addInputCreat');
// var eladdButtonClick = document.querySelector('.addButtonClick');
// var addrandomNumber=Math.floor(Math.random() * (100 - 1)) + 1;
// console.log(addrandomNumber); 
// eladdButtonClick.addEventListener('click',function(){
//    if( eladdInputCreat.value){
//         if(addrandomNumber>eladdInputCreat.value){
//             alert('kichik son kiritildi');
//         }
//         else if(addrandomNumber<eladdInputCreat.value){
//             alert('katta son kiritildi');
//         }
//         else{
//             alert('uraaaa topdiz');
//         }
//    }
//    else{
//        alert('iltimos son kiriting')
//    }
// });           

var  eldoubleInput = document.querySelector('.doubleInput');  
var  elPushButton = document.querySelector('.PushButton');

var  elIndexInput = document.querySelector('.IndexInput');
var  elDeleteButton = document.querySelector('.DeleteButton');

var eladdList = document.querySelector('.addList');
var myList=[];
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
        eladdList.innerHTML = myList.join('<br>');
        eldoubleInput.value='';
});

// slide //

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
        eladdList.innerHTML = myList.join('<br>');
        elIndexInput.value='';
})




























// for(var i=0; i<500; i++){

//         if(i%5===0){
    
//             console.log(i);
    
//         }

// }


//  var Phone1={
//      company:'Xiomi',
//      model:'redmi',
//      memory:'64GB',
//      batary:5000,
//      prace:200,
//      color:'blue',
//      camera:'64 MP',
//      operative:4
//  }
 
//  var Phone2={
//     company:'Iphone',
//     model:'Iphone X',
//     memory:'128 GB',
//     batary:4000,
//     prace:1000,
//     color:'dark',
//     camera:'48 MP',
//     operative:6
// }
// var Phone3={
//     company:'Samsung',
//     model:'A51',
//     memory:'32 GB',
//     batary:5000,
//     prace:300,
//     color:'black',
//     camera:'32 MP',
//     operative:4
// }
// console.log('Menda '+Phone2.company+ ' kompaniyaning '
//  +Phone2.model+' modelidagi telefoni bor.'+' Uning xotirasi '
//  + Phone2.memory + ' batareyasi  '+Phone2.batary+ ' narxi(USA) '
//  +Phone2.prace+ ' rangi '+Phone2.color+ ' kamera pikseli '
//  +Phone2.camera+ '  operativkasi esa '+Phone2.operative);