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
























