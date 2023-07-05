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

movie.addEventListener('click',()=>{
window.open(
  'https://moobiedoobie.vercel.app/',
  '_blank' 
);
})
restcountries.addEventListener('click',()=>{
window.open(
  'https://frontend-mentor-rest-countries-api-with-color-theme-switcher-nu.vercel.app/',
  '_blank' 
);
})
linkshortener.addEventListener('click',()=>{
window.open(
  'https://linkshortbyarun.vercel.app/',
  '_blank' 
);
})
weather.addEventListener('click',()=>{
window.open(
  'https://errunlee.github.io/Weather-App-v2/',
  '_blank' 
);
})
notebook.addEventListener('click',()=>{
window.open(
  'https://notebookbyerrun.netlify.app/',
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
