const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA image
let getStarted = document.querySelector("#cta-img");
getStarted.setAttribute('src', siteContent['cta'] ['img-src'])


// Dom is awesome h1
const secondHeading = document.querySelector('h1');
secondHeading.textContent = "Dom is awesome" ;
// Get Started button
const button = document.querySelector('button');
button.textContent = "get started";


// main site  
const mainContent = document.querySelector('.top-content');
mainContent.textContent = siteContent["main-content"]["about-content"]; 

const servHeader = document.querySelector('.bottom-content h4');
servHeader.textContent = siteContent['main-content'] ['services-h4'];

const servCont = document.querySelector('.bottom-content p');
servCont.textContent = siteContent['main-content'] ['services-content'];

const proHeader = document.querySelector('.bottom-content div:nth-child(2) h4');
proHeader.textContent = siteContent['main-content'] ['product-h4'];

const proCont = document.querySelector('.bottom-content div:nth-child(2) p');
proCont.textContent = siteContent['main-content'] ['product-content'];

const visHeader = document.querySelector('.bottom-content div:last-child h4');
visHeader.textContent = siteContent['main-content'] ['vision-h4'];

const visCont = document.querySelector('.bottom-content div:last-child p');
visCont.textContent = siteContent['main-content'] ['vision-content'];

const contHeader = document.querySelector('.contact h4');
contHeader.textContent = siteContent.contact['contact-h4'];

const contAddress = document.querySelector('.contact p:nth-of-type(1)');
contAddress.textContent = siteContent.contact.address;
console.log(contAddress);
const contPhone = document.querySelector('.contact p:nth-child(3)');
contPhone.textContent = siteContent.contact.phone;

const contEmail = document.querySelector('.contact p:last-child');
contEmail.textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;