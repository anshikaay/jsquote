let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');
const quotes=[
    {quote:"Life's not fair; why should I be?",
        person:"Margaret Atwood"},
        {quote:"We are all broken, that's how the light gets in.",
        person:"ERNEST HEMINGWAY "},
        {quote:"reap what you sow",
        person:"mastermind"},
        {quote:"Life is like riding a bicycle.",
        person:"albert einstein"},
        {quote:"Tomorrow we will run faster, stretch out our arms farther…. ",
        person:"F.SCOTT FITZGERALD "},
        {quote:"We stay,We slay",
        person:"Jen"},
        {quote:"if you’re always trying to be normal you will never know how amazing you can be.",
        person:"Maya Angelou"},
        {quote:"Integrity is doing the right thing, even when no one is watching.",
        person:"CS Lewis"},
        {quote:"We rise by lifting others.",
        person:"Henry Miller"},
        {quote:"The power of finding beauty in the humblest things makes home happy and life lovely.",
        person:"LOUISA MAY ALCOTT "},
        {quote:"Write what should not be forgotten.",
        person:"Isabel Allende"}
       
    
    
    


]
btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})