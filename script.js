var nav = document.querySelector('nav');
let backtotop = document.querySelector('.back-to-top');

window.addEventListener('scroll', function(){
    if (window.pageYOffset > 300) {
        nav.classList.add('bg-dark', 'shadow');
        backtotop.classList.add('topActive');
    } else {
        nav.classList.remove('bg-dark','shadow');
        backtotop.classList.remove('topActive');
    }
});

function navdark(){

  nav.classList.add('bg-dark', 'shadow');
}


//auto collapse after clicking the link

// get all the navbar links
const navLinks = document.querySelectorAll('.navbar-nav a');

// add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // collapse the navbar when a link is clicked
    const navbar = document.querySelector('#myNavbar');
    const bsCollapse = new bootstrap.Collapse(navbar);
    bsCollapse.hide();
  });
});


// greetings

let hrs = new Date().getHours();

let greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.querySelector(".greeting").innerHTML = greet;




// landing page
const typed = document.querySelector('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
}

//form

let tosee = document.querySelector('.tosee');
let tohide = document.querySelector('.tohide');
let tohide2 = document.querySelector('.tohide2');

const scriptURL = 'https://script.google.com/macros/s/AKfycbwt9evIH-siIWnNR514U2X6w9QIyeIMUbFgdXynqiNPtsssHJGRP_LsJrWn2OtxPE5c/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    
    tosee.classList.remove('hide');
    tohide.classList.add('hide');
    tohide2.classList.add('hide');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
