// ////1
$('.carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
// ////2
$('.carousel-slide').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})
// ////3
$('.carousel-shows').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverpause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
// NAVABR webside full color

var elBodyColor = document.querySelector('.bodyColor');

elBodyColor.addEventListener('click', function () {
    if (elBodyColor.value === 'dark') {
        document.body.classList.remove('theme-success');
        document.body.classList.add('theme-dark');
    }

    else if (elBodyColor.value === 'success') {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-success');
    }
});

// navbar
var elSiteNav = document.querySelector('.siteNav');

document.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        elSiteNav.classList.add('siteNav-fixed');
        document.body.style.marginTop = elSiteNav.scrollHeight + 'px';
    }
    else {
        elSiteNav.classList.remove('siteNav-fixed');
        document.body.style.marginTop = '0';
    }
})
// sticky tugmacha // // // // // //
var elButtonSticky = document.querySelector('.buttonSticky');

document.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        elButtonSticky.classList.add('sticky-show');

        var elstickyShow = document.querySelector('.sticky-show');
        elstickyShow.addEventListener('click', function () {
            // elButtonSticky.addEventListener('click',function(){
            document.documentElement.scrollTop = 0;
            //  document.body.scrollTop = 0;
        })
    }
    else {
        elButtonSticky.classList.remove('sticky-show');
    }
})
// random
var eladdInputCreat = document.querySelector('.addInputCreat');
var eladdButtonClick = document.querySelector('.addButtonClick');
var addrandomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
console.log(addrandomNumber);
eladdButtonClick.addEventListener('click', function () {
    eladdInputCreat.value=""; 
    if (eladdInputCreat.value) {
        if (addrandomNumber > eladdInputCreat.value) {
            alert('kichik son kiritildi');
        }
        else if (addrandomNumber < eladdInputCreat.value) {
            alert('katta son kiritildi');
        }
        else {
            alert('uraaaa topdiz');
        }
    }
    else {
        alert('iltimos son kiriting')
    }
});
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// regexP
// var words=prompt('Matn kiriting.');
// var regex = new RegExp('[.!?] ', 'gi');
// console.log( words.split(regex));


// var eldoubleInput = document.querySelector('.doubleInput');
// var elPushButton = document.querySelector('.PushButton');
// var eladdList = document.querySelector('.addList');

// var elIndexInput = document.querySelector('.IndexInput');
// var elDeleteButton = document.querySelector('.DeleteButton');

// var myList = [];

// // createElement // // // // // // // // // // // 

// // for (var i=0; i<5; i++){
// //    var elNewImage=document.createElement('img');
// //     elNewImage.src='image/1-2.jpg';

// //     eladdList.appendChild(elNewImage);
// // }

// //   push  //
// elPushButton.addEventListener('click', function () {
//     if (!eldoubleInput.value) {
//         alert('ruyxatga malumot kiriting');
//         return;
//     }
//     if (myList.indexOf(eldoubleInput.value) !== -1) {
//         alert('bu malumot ruyxatda mavjud');
//         return;
//     }

//     myList.push(eldoubleInput.value);

//     eladdList.innerHTML = myList.join('<li>');
//     eldoubleInput.value = '';


//     for (var i = 0; i < myList.length; i++) {
//         var elNewLi = document.createElement('li');
//         elNewLi.textContent = myList[i];
//         eladdList.appendChild(elNewLi);
//     }
// });

// // splice //

// elDeleteButton.addEventListener('click', function () {
//     if (!elIndexInput.value) {
//         alert('raqam kiriting');
//         return;
//     }
//     if (0 > elIndexInput.value && elIndexInput.value > 100) {
//         alert('1 bilan 100 oraliqdagi sonlarni kiriting');
//         return;
//     }
//     myList.splice((elIndexInput.value), 1);
//     eladdList.innerHTML = myList.join('<li>');
//     // elIndexInput.value = '';
// })


// var scanner = 1;
// for (var i = 1; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(scanner + ' -toq son: ' + i);
//         scanner++;
//     }
// }

// for (var i = 0; i < 500; i++) {
//     if (i % 5 === 0) {
//         console.log(i);

//     }

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



//// LocalStorage ///////
//  oti = prompt('otingni ayt:');
//  localStorage.setItem('foydalanuvchi',oti);






// console.log(oti);




//// fragment ////////////// 
var Phone = [
    {
        company: 'Artel',
        batary: 1000000,
        foto: 'image/xiomi.jpg',
        model: 'artel',
        memory: '64GB',
        prace: 900,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'huawei',
        batary: 77700,
        foto: 'image/samsung.jpg',
        model: 'redmi',
        memory: '64GB',
        prace: 200,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'readmi',
        batary: 5000,
        foto: 'image/iphone.jpg',
        model: 'readmi',
        memory: '64GB',
        prace: 100,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'Xiomi',
        batary: 1212000,
        foto: 'image/xiomi.jpg',
        model: 'redmi',
        memory: '64GB',
        prace: 200,
        color: 'blue',
        camera: '64 MP',
        operative: 4
    },
    {
        company: 'Iphone',
        batary: 4000,
        foto: 'image/iphone.jpg',
        model: 'Iphone X',
        memory: '128 GB',
        prace: 1000,
        color: 'dark',
        camera: '48 MP',
        operative: 6
    },
    {
        company: 'Samsung',
        batary: 100000,
        foto: 'image/samsung.jpg',
        model: 'A51',
        memory: '32 GB',
        prace: 300,
        color: 'black',
        camera: '32 MP',
        operative: 4
    }];

// fragment

// var elclickBtn = document.querySelector('.clickBtn2');
// var eladdBox = document.querySelector('.addBox2');

// elclickBtn.addEventListener('click', function() {
//     eladdBox.textContent='';

//     var eladdFrangment1 = document.createDocumentFragment();
//         for (var i = 0; i < Phone.length; i++) {

//         var eladdTitle = document.createElement('h2');
//         eladdTitle.textContent = Phone[i].company;
//         // 
//         var eladdModel = document.createElement('p');
//         eladdModel.textContent = Phone[i].model;
//         // 
//         var eladdLink = document.createElement('a');
//         eladdLink.href = '#';
//         eladdLink.textContent = 'zakaz berish';
//         // 
//         var eladdLi = document.createElement('li');
//         eladdLi.classList.add('col-12', 'bg-light', 'm-3', 'rounded', 'border', 'd-block', 'text-center', 'w-25');
//         // 
//         eladdLi.appendChild(eladdTitle);
//         // eladdLi.appendChild(eladdImage);
//         eladdLi.appendChild(eladdModel);
//         eladdLi.appendChild(eladdLink);
//         eladdFrangment1.appendChild(eladdLi);
//     };
//     eladdBox.appendChild(eladdFrangment1);
// })


// fragmentsiz <<\/>>
// eladdBox.appendChild(eladdLi);
// ///////  function  ///////
// //  var Name=function(ism){
// //      console.log('assalomu alekum'+ism);
// //  }
// // Name(' Bexruz');


// // var kopaytir=function(x,y){
// //     return x*y;
// // }
// // console.log(kopaytir(5,10));


// // function sanoq(i){
// //     return Phone[i].company+' - '+Phone[i].model+' - '+Phone[i].prace;
// // }
// // // console//
// // console.log(sanoq(1));

// // ///html
// // eladdBox.textContent=sanoq(1); 

// // Phone.forEach(function(Phone,i){
// //     console.log(i+'=>'+Phone.company+' '+i);
// // });


////////  RegExp   ///////

var elnewName = document.querySelector('.newName');
var elNewButton = document.querySelector('.NewButton');
var elCreateResult = document.querySelector('.CreateResult');

elNewButton.addEventListener('click', function () {
    if (!elnewName.value) {
        alert('telefon rangini kiriting');
        return;
    }


    var eladdNewRegExp = new RegExp(elnewName.value, 'gi');

    var result = Phone.filter(function (nomi) {
        return nomi.company.match(eladdNewRegExp);
    });
    elCreateResult.textContent = '';

    var eladdNewFragment = document.createDocumentFragment();
    result.forEach(function (nomi) {

        var elAddNewList = document.createElement('div');
        elAddNewList.classList.add('border', 'bg-dark', 'm-3', 'col-6', 'text-center', 'text-white');

        var eladdPhoneTitle1 = document.createElement('h2');
        eladdPhoneTitle1.textContent = nomi.model;

        var eladdNewPhoto1 = document.createElement('p');
        eladdNewPhoto1.textContent = nomi.operative;

        elAddNewList.appendChild(eladdPhoneTitle1);
        elAddNewList.appendChild(eladdNewPhoto1);

        // console.log(elAddNewList);
        eladdNewFragment.appendChild(elAddNewList);
    });
    // eladdPhoneList.innerHTML=eladdNewFragment.join ('<br>');
    elCreateResult.appendChild(eladdNewFragment);

});

// 
// // 

// var elnewNameTemp = document.querySelector('.newNameTemp');
// var elNewButtonTemp = document.querySelector('.NewButtonTemp');
// var elCreateResultTemp =document.querySelector('.CreateResultTemp');
// var elNewTemplate = document.querySelector('#Phone-template').content;

// elNewButtonTemp.addEventListener('click', function(){
//     if(!elnewNameTemp){
//         alert('nom kiriting');
//         return;
//     }
//     var elNewRegexpTemp = new RegExp(elnewNameTemp.value ,'gi');

//    var  natija=Phone.filter(function(temp){
//         return temp.company.match(elNewRegexpTemp);
//     })
//     // elCreateResultTemp.textContent='';
//         var elNewTempFragment = document.createDocumentFragment();
//          natija.forEach(function(temp){

//         var elNewTempClone = document.importNode(elNewTemplate, true);
//         elNewTempClone.querySelector('.sampler--name').textContent=temp.company; 
//         elNewTempClone.querySelector('.sampler--model').textContent=temp.model;
//         elNewTempClone.querySelector('.sampler--link').href='#'; 

//         // console.log(elNewTempClone);
//         elNewTempFragment.appendChild('elNewTempClone');



//         // var elTempContainer = document.createElement('div');
//         // elTempContainer.classList.add('container','bg-primary','m-auto');

//         // var elTempCamera = document.createElement('h2');
//         // elTempCamera.textContent = telephone.camera;


//         // elTempContainer.appendChild(elTempCamera);


//         // elNewTempFragment.appendChild(elTempContainer);

//     })
//         elCreateResultTemp.appendChild(elNewTempFragment);

// })


// var elCreateButton = document.querySelector('.createButton');
// var elCloseButton =document.querySelector('.closeButton');
// var elBox = document.querySelector('.box');

// elCreateButton.addEventListener('click', function(){
//     elBox.classList.add('box__show');
// })
// elCloseButton.addEventListener('click',function(){
//     elBox.classList.remove('box__show');
// })

// // // // // // // // // // // // // // // //
// var eladdCreateButton =document.querySelector('.addCreateButton');
// var eladdCloseButton =document.querySelector('.addCloseButton');
// var elcreateBox =document.querySelector('.createBox');


// eladdCreateButton.addEventListener('click',function(){
//      elcreateBox.classList.add('createBox-open');
//     // elcreateBox.classList.add('addCreateButton-none');
// })
// eladdCloseButton.addEventListener('click',function(){
//     elcreateBox.classList.remove('createBox-open');
// })

// // // // // // // // // // // // // // // // // // // // modal //
//     var elModalButton = document.querySelector('.modal-button');
//     var elModal = document.querySelector('.modal');
//     var elModalClose = document.querySelector('.modal-close');

//         elModalButton.addEventListener('click', function () {
//              body.classList.add('modal-open');
// });

//         elModalClose.addEventListener('click',function(){
// //             elModal.classList.remove('modal-open');
// // });


// // var qosh=[];

// // ////////select ////////
// var elSelect = document.querySelector('select');
// var elSelectFragment = document.createDocumentFragment();

// Phone.forEach(function(add){
//     // if(Phone.indexOf(add)===-1){

//         var elOption =document.createElement('option');
//         elOption.textContent=add.company;

//         elSelectFragment.appendChild(elOption);
//     // }

// });
// elSelect.appendChild(elSelectFragment);

///////


// var nomi1 = function(){
//     var ism = 'bexruz';
//     console.log(ism);
// }();

// nomi1();

// (function (){
//     var nomi="Feruz";
//     console.log(nomi);
// })();

// // //  SORT // // // // //

// var yangi = pokemonlar.sort(function (a, b) {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     else {
//         return 0;
//     }

// })
// console.log(yangi);
// //////

// var sarala = function () {

//     var work = pokemonlar.map(function (item) {
//         return {
//             id: item.id,
//             nomi: item.name
//         }
//     }).sort(function (x, y) {
//         if (x.nomi > y.nomi) {
//             return 1;
//         }
//         if (x.nomi < y.nomi) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     });
//     console.log(work);
// };
// sarala();

// // // // 
// (function(){
//     var work = Phone.map(function(tel,index){
//         return{
//             id : index,
//             nomi : tel.company}  
//     })
//     console.log(work);
// })();

// var elQuti = document.querySelector('.quti'); 



// (function(){
// var elTekshiruvchi = document.querySelector('.tekshiruvchi');
// elTekshiruvchi.addEventListener('click',function(){
// console.log('ok');
// });
// })();


// /////
/////// Tasbex  ////

var elSana = document.querySelector('.sana');
var elQow = document.querySelector('.qow');
var elRestart = document.querySelector('.restart');
 
elQow.addEventListener('click',function(){
    elSana.value=parseInt(elSana.value)+1;
    // elSana.value++;
})

elRestart.addEventListener('click',function(){
    elSana.value=0;
})

// ///// calculator //// 
var elekran = document.querySelector('.ekran');
var eltd = document.querySelectorAll('td');
eltd.forEach(function(item){
    item.addEventListener('click',function(evt){
        if(evt.target.innerHTML == "C"){elekran.value =" ";}
       else if(evt.target.innerHTML =="="){elekran.value=eval(elekran.value);}
        else{elekran.value += evt.target.innerHTML;}});  });

// igra  //// 
var eldragon = document.querySelector('.dragon');
var elcactus = document.querySelector('.cactus');

window.addEventListener('click', function (){
    eldragon.classList.add('animation');    
    setTimeout(function(){
        eldragon.classList.remove('animation'); 
    },900)
})
// .........
// var checkdead = setInterval(function(){
//   var eldragonTop = parseInt(window.getComputedStyle(eldragon).getPropertyValue('top'));
//   var elcactusLeft = parseInt(window.getComputedStyle(elcactus).getPropertyValue('left'));
//   if(elcactusLeft < 50 && elcactusLeft > 0 || eldragonTop>=60){
//       alert('tugadi');
//   }
// },20)
// .........


// (function(){
//     var elonclick = document.querySelector('.onclick');

//     var showSite = function(ishladi){
//         console.log(ishladi);
//     }

//     var OnError = function(Error){
//         alert('tugadi!');
//     }


//     elonclick.addEventListener('click',function(){
//         window.load('https://api.npoint.io/e8e1e96c8d6b98a62e11', showSite, OnError)
//     });
// })();

// var sorov = new XMLHttpRequest();
// sorov.open('get','pokemon.json');
// sorov.send();
// sorov.onload = function(){
// var korish=JSON.parse(sorov.responseText);
// console.log(korish);
// }