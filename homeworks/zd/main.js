const firstName = "Ania";
const age = 20;

console.log(`siema nazywam się ${firstName} i mam ${age} lat.`);
const heading= document.querySelector('.main__heading--js');
heading.innerHTML='Witaj Drogi Odwiedzający, nazywam  się ${firstName} i mam ${age} lat.';

function greetOld(age, firstName){
    console.log(
        'Witaj, nazywam się ${firstName} i mam ${age} lat.');
    }
    const greet=(age, firstName) => {
        console.log(
            'Witaj, nazywam się ${firstName} i mam ${age} lat.');
    }

    function calculateOld(myNumber){
        return myNumber*7;
    }

const calculate  = (myNumber) => myNumber*7
const myResult= calculateOld(7)
console.log(myResult)

    greet(20,'Ania');


const emptyParagraph = document.querySelector('.week-summary__description--js');
emptyParagraph.innerHTML= 'Nawet uzupełniłem treść javascriptem!';

function calculate(myNumber){
    console.log('Dostałam ${myNumber}');
    return myNumber*7;
}

const myResult= calculate(1);
console.log(myResult);

const deathStar= {
    diameter:120000,
    fire:(target) => {
        console.log('$(target) destroyed ')
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn:true,
    commander:{
        name:'Darth Vader',
        age:44
    }
}
 console.log(deathStar.name)
 console.log()

 if('Java'!='JavaScript') {
     console.log('Java to nie JavaScript!')
 }


 const button=document.querySelector('.action--js');
 console.log(button)
 
 button.addEventListener('mouseleave',() => {
     const heading= document.querySelector(".main__heading--js");
     heading.innerHTML='Witaj, nazywam się Ania';
     console.log();
 });
 const hamburger=document.querySelector('.hamburger--js');
 hamburger.addEventListener('click', () => {
     const nav= document.querySelector('.navigation-js');
     nav.classList.toggle('navigation--open');
 })
 