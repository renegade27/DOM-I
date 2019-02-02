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

function setupNav(object) {
  let navanchors = document.querySelector('nav').querySelectorAll('a');
  for(var i = 1; i < 6; i++) {
    navanchors[i].textContent = object[`nav-item-${i}`];
    navanchors[i].style.color = 'green';
  }
}

function setupCta(object) {
  let cta = document.querySelector('.cta-text');
  cta.querySelector('h1').textContent = object['h1'];
  cta.querySelector('button').textContent = object['button'];
  document.getElementById('cta-img').setAttribute('src', object['img-src']);
}

function setupMainContent(object) {
  let main = document.querySelector('.main-content');
  let topcontent = main.querySelector('.top-content');
  let botcontent = main.querySelector('.bottom-content');
  // Setting up our top content
  topcontent.querySelectorAll('.text-content')[0].querySelector('h4').textContent = object['features-h4'];
  topcontent.querySelectorAll('.text-content')[0].querySelector('p').textContent = object['features-content'];
  topcontent.querySelectorAll('.text-content')[1].querySelector('h4').textContent = object['about-h4'];
  topcontent.querySelectorAll('.text-content')[1].querySelector('p').textContent = object['about-content'];
  // Setting up our img
  document.getElementById('middle-img').setAttribute('src', object['middle-img-src']);
  // Setting up our bottom content
  botcontent.querySelectorAll('.text-content')[0].querySelector('h4').textContent = object['services-h4'];
  botcontent.querySelectorAll('.text-content')[0].querySelector('p').textContent = object['services-content'];
  botcontent.querySelectorAll('.text-content')[1].querySelector('h4').textContent = object['product-h4'];
  botcontent.querySelectorAll('.text-content')[1].querySelector('p').textContent = object['product-content'];
  botcontent.querySelectorAll('.text-content')[2].querySelector('h4').textContent = object['vision-h4'];
  botcontent.querySelectorAll('.text-content')[2].querySelector('p').textContent = object['vision-content'];
}

function setupContact(object) {
  let contact = document.querySelector('.contact')
  contact.querySelector('h4').textContent = object['contact-h4'];
  contact.querySelectorAll('p')[0].textContent = object['address'];
  contact.querySelectorAll('p')[1].textContent = object['phone'];
  contact.querySelectorAll('p')[2].textContent = object['address'];
}

function setupFooter(object) {
  document.querySelector('footer').innerHTML = object['copyright'];
}

console.log(siteContent.nav[`nav-item-1`]);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
setupNav(siteContent.nav);
setupCta(siteContent.cta);
setupMainContent(siteContent['main-content']);
setupContact(siteContent.contact);
setupFooter(siteContent.footer);