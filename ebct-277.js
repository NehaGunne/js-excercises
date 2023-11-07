/* CUSTOM CODE */


function addHyperLinkImgDiv(element, href) {
  const innercontent=element.innerHTML;
  element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
  const imgDiv = element.querySelector("div");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", href);
  anchor.innerHTML = imgDiv.innerHTML;
  imgDiv.innerHTML = "";
  imgDiv.appendChild(anchor);
}
function addHyperLinksMobile(element) {
  const MainDiv = element.querySelector("div");
  const leftDiv = MainDiv.querySelector("div");
  const readMoreElement = element.querySelector("a");
  const href = readMoreElement.getAttribute("href");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", href);
  anchor.classList.add("anchor-class");
  anchor.innerHTML = leftDiv.innerHTML;
  leftDiv.innerHTML = "";
  leftDiv.appendChild(anchor);
  const rightDiv = leftDiv.nextElementSibling;
  const img = rightDiv.querySelector("img");
  if (!img.src.startsWith("https:/")) {
    img.onload = function () {
      addHyperLinkImgDiv(rightDiv, href);
    };
  } else {
    addHyperLinkImgDiv(rightDiv, href);
  }
  const para = element.querySelector("p");
  const newPara = para.cloneNode(true);
  const anchor3 = document.createElement("a");
  anchor3.setAttribute("href", href);
  anchor3.classList.add("anchor-class");
  anchor3.appendChild(newPara);
  para.replaceWith(anchor3);
}
function addHyperLinksDesktop(element) {
  const mainDiv = element.querySelector("div");
  if(mainDiv.querySelectorAll("a").length===1){
    console.log('a is 1',mainDiv);
    const leftDiv = mainDiv.querySelector("div");
  const readMoreElement = mainDiv.querySelector("a");
  const href = readMoreElement.getAttribute("href");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", href);
  anchor.classList.add("anchor-class");
  anchor.innerHTML = leftDiv.innerHTML;
  leftDiv.innerHTML = "";
  leftDiv.appendChild(anchor);
  const rightDiv = leftDiv.nextElementSibling;
  const img = rightDiv.querySelector("img");
  if (!img.src.startsWith("https:/")) {
    img.onload = function () {
      addHyperLinkImgDiv(rightDiv, href);
    };
  } else {
    addHyperLinkImgDiv(rightDiv, href);
  }
  }else{
    console.log("a already exist",element);
  }
  
}
function addHyperLinksInPage(){
  console.log("main fun called");
  if (window.location.href === "https://www.blu.com/fr-FR/e-liquide-recharge") {
    console.log("https://www.blu.com/fr-FR/e-liquide-recharge page")
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsListPage1Mobile = document.querySelectorAll(".css-14j8s9l > div >div");
    for (let i = 0; i < productsListPage1Mobile.length; i++) {
      addHyperLinksMobile(productsListPage1Mobile[i]);
    }
  } else {
    const productsListPage1Desktop = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    console.log(productsListPage1Desktop)
    for (let i = 0; i < productsListPage1Desktop.length; i++) {
      addHyperLinksDesktop(productsListPage1Desktop[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/e-liquide-recharge/capsules-blu-2-0"
) {
  console.log("https://www.blu.com/fr-FR/e-liquide-recharge/capsules-blu-2-0 page")
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsListPage2Mobile = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsListPage2Mobile.length; i++) {
      addHyperLinksMobile(productsListPage2Mobile[i]);
    }
  } else {
    const productsListPage2Desktop = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    console.log(productsListPage2Desktop)
    for (let i = 0; i < productsListPage2Desktop.length; i++) {
       console.log(productsListPage2Desktop[i])
      addHyperLinksDesktop(productsListPage2Desktop[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/eliquide-capsules-myblu/capsules-myblu"
) {
  console.log("https://www.blu.com/fr-FR/eliquide-capsules-myblu/capsules-myblu")
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsListPage3Mobile = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsListPage3Mobile.length; i++) {
       console.log(productsListPage3Mobile[i])
      addHyperLinksMobile(productsListPage3Mobile[i]);
    }
  } else {
    const productsListPage3Desktop = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div "
    );
    for (let i = 0; i < productsListPage3Desktop.length; i++) {
       console.log(productsListPage3Desktop[i])
      addHyperLinksDesktop(productsListPage3Desktop[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/e-liquide-recharge/blu-pro"
) {
  console.log("https://www.blu.com/fr-FR/e-liquide-recharge/blu-pro")
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsListPage4Mobile = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsListPage4Mobile.length; i++) {
      addHyperLinksMobile(productsListPage4Mobile[i]);
    }
  } else {
    const productsListPage4Desktop = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    for (let i = 0; i < productsListPage4Desktop.length; i++) {
       console.log(productsListPage4Desktop[i])
      addHyperLinksDesktop(productsListPage4Desktop[i]);
    }
  }
}
if (window.location.href === "https://www.blu.com/fr-FR/accessoires") {
  console.log("https://www.blu.com/fr-FR/accessoires page")
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsListPage5Mobile = document.querySelectorAll(".css-14j8s9l > div >div");
    for (let i = 0; i < productsListPage5Mobile.length; i++) {
      addHyperLinksMobile(productsListPage5Mobile[i]);
    }
  } else {
    const productsListPage5Desktop = document.querySelectorAll(".css-159pqie > div > div");
    for (let i = 0; i < productsListPage5Desktop.length; i++) {
      console.log(productsListPage5Desktop[i])
      addHyperLinksDesktop(productsListPage5Desktop[i]);
    }
  }
}
}
addHyperLinksInPage();

.anchor-class{
  display:block;
  height:100%;
  width:100%;
  text-decoration:none;
  color:inherit;
}
.img-div > div{
  float:right;
}