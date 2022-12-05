//fetch quote//
let theQuote = ''
let url = ('https://type.fit/api/quotes');
let fech=fetch(url)
fech.then((r)=>{
  return r.json();
}).then((val)=>{
  console.log(val)
 let random=Math.floor(Math.random()*500)
 quote.innerHTML=(val[random].text)
 author.innerHTML="By: "+(val[random].author)
})
//l

const parallex=document.querySelector('main');
window.addEventListener("scroll",()=>{
  let offset=window.pageYOffset;
  parallex.style.backgroundPositionY=offset*0.7+'px';
})
tictactoe.addEventListener('click',()=>{
window.open(
  'https://tic-tac-toe-multiplayer.aarun-khatri.repl.co/',
  '_blank' 
);
})
music.addEventListener('click',()=>{
window.open(
  'https://Music-Player.aarun-khatri.repl.co',
  '_blank' 
);
})
hangman.addEventListener('click',()=>{
window.open(
  'https://hangman-try2completed.aarun-khatri.repl.co',
  '_blank' 
);
})
calculator.addEventListener('click',()=>{
window.open(
  'https://calculator-final.aarun-khatri.repl.co',
  '_blank' 
);
})
let reveals = document.querySelectorAll('.reveal')
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;
    if(revealTop < (windowHeight - revealPoint))
    { 
      reveals[i].classList.add('active')
    } 
  }
})
