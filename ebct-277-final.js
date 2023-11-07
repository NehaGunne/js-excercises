//page1
/* CUSTOM CODE */
if(window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD){
    scrollToPosition();
  }
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }
  function scrollToPosition() {
    const scrollPositiony = getCookie("scrollPositionyPage1");
    if (scrollPositiony) {
        setTimeout(function () {
          window.scrollTo(+0, +scrollPositiony);
          document.cookie="scrollPositionyPage1=null; expires="+new Date().toUTCString();
          console.log("scrolled to", +scrollPositiony);
        }, 2000);
      }
  }
  function setScrollPosition(element) {
    const position = element.getBoundingClientRect();
    const y = position.top + window.scrollY - 50;
    const date=new Date();
    date.setTime(date.getTime()+(5*60*1000));
    const expires="; expires="+date.toUTCString();
    document.cookie = "scrollPositionyPage1=" + y + expires;
  }
  function addHyperLinkImgDiv(element, href) {
    const innercontent=element.innerHTML;
    element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
    const imgDiv = element.querySelector("div");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", href);
    anchor.classList.add("anchor-class");
    anchor.innerHTML = imgDiv.innerHTML;
    imgDiv.innerHTML = "";
    imgDiv.appendChild(anchor);
  }
  function addHyperLinksMobile(element) {
    if(element.querySelectorAll("a").length===1){
    const MainDiv = element.querySelector("div");
    MainDiv.onclick=function(){
      setScrollPosition(MainDiv);
    };
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
     const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
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
  }
  function addHyperLinksDesktop(element) {
     if(element.querySelectorAll("a").length===1){
    const mainDiv = element.querySelector("div");
     mainDiv.onclick=function(e){
         setScrollPosition(mainDiv);
       };
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
    const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
      img.onload = function () {
        addHyperLinkImgDiv(rightDiv, href);
      };
    } else {
      addHyperLinkImgDiv(rightDiv, href);
    }
    }
   }
  function getProductCards(){
  if (window.matchMedia("(max-width: 785px)").matches) {
      const productsListPage1Mobile = document.querySelectorAll(".css-14j8s9l > div >div");
      for (let i = 0; i < productsListPage1Mobile.length; i++) {
        addHyperLinksMobile(productsListPage1Mobile[i]);
      }
    } else {
      const productsListPage1Desktop = document.querySelectorAll(
        ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
      );
      for (let i = 0; i < productsListPage1Desktop.length; i++) {
        addHyperLinksDesktop(productsListPage1Desktop[i]);
      }
    }
  }
  setTimeout(()=>{
    getProductCards();
  },1500);

//page2
/* CUSTOM CODE */
if(window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD){
    scrollToPosition();
  }
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    console.log(document.cookie);
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    console.log(res);
    return res;
  }
  function scrollToPosition() {
    const scrollPositiony = getCookie("scrollPositionyPage2");
    if (scrollPositiony) {
        setTimeout(function () {
          window.scrollTo(+0, +scrollPositiony);
          document.cookie="scrollPositionyPage2=null; expires="+new Date().toUTCString();
          console.log("scrolled to", +scrollPositiony);
        }, 2000);
      }
  }
  function setScrollPosition(element) {
    const position = element.getBoundingClientRect();
    const y = position.top+ window.scrollY - 50;
    const date=new Date()
    date.setTime(date.getTime()+(5*60*1000));
    const expires="; expires="+date.toGMTString();
    document.cookie = "scrollPositionyPage2=" + y + expires;
  }
  function addHyperLinkImgDiv(element, href) {
    const innercontent=element.innerHTML;
    element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
    const imgDiv = element.querySelector("div");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", href);
    anchor.classList.add("anchor-class");
    anchor.innerHTML = imgDiv.innerHTML;
    imgDiv.innerHTML = "";
    imgDiv.appendChild(anchor);
  }
  function addHyperLinksMobile(element) {
    if(element.querySelectorAll("a").length===1){
    const MainDiv = element.querySelector("div");
    MainDiv.onclick=function(){
      setScrollPosition(MainDiv);
    };
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
     const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
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
  }
  function addHyperLinksDesktop(element) {
     if(element.querySelectorAll("a").length===1){
    const mainDiv = element.querySelector("div");
     mainDiv.onclick=function(e){
         setScrollPosition(mainDiv);
       };
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
    const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
      img.onload = function () {
        addHyperLinkImgDiv(rightDiv, href);
      };
    } else {
      addHyperLinkImgDiv(rightDiv, href);
    }
    }
   }
  function getProductCards(){
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
  setTimeout(()=>{
    getProductCards();
  },1000)
//page3
/* CUSTOM CODE */
if(window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD){
    scrollToPosition();
  }
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    console.log(document.cookie);
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    console.log(res);
    return res;
  }
  function scrollToPosition() {
    const scrollPositiony = getCookie("scrollPositionyPage3");
    if (scrollPositiony) {
        setTimeout(function () {
          window.scrollTo(+0, +scrollPositiony);
          document.cookie="scrollPositionyPage3=null; expires="+new Date().toUTCString();
          console.log("scrolled to", +scrollPositiony);
        }, 2000);
      }
  }
  function setScrollPosition(element) {
    const position = element.getBoundingClientRect();
    const y = position.top+ window.scrollY - 50;
    const date=new Date()
    date.setTime(date.getTime()+(5*60*1000));
    const expires="; expires="+date.toGMTString();
    document.cookie = "scrollPositionyPage3=" + y + expires;
  }
  function addHyperLinkImgDiv(element, href) {
    const innercontent=element.innerHTML;
    element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
    const imgDiv = element.querySelector("div");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", href);
    anchor.classList.add("anchor-class");
    anchor.innerHTML = imgDiv.innerHTML;
    imgDiv.innerHTML = "";
    imgDiv.appendChild(anchor);
  }
  function addHyperLinksMobile(element) {
    if(element.querySelectorAll("a").length===1){
    const MainDiv = element.querySelector("div");
    MainDiv.onclick=function(){
      setScrollPosition(MainDiv);
    };
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
     const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
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
  }
  function addHyperLinksDesktop(element) {
     if(element.querySelectorAll("a").length===1){
    const mainDiv = element.querySelector("div");
     mainDiv.onclick=function(e){
         setScrollPosition(mainDiv);
       };
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
    const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
      img.onload = function () {
        addHyperLinkImgDiv(rightDiv, href);
      };
    } else {
      addHyperLinkImgDiv(rightDiv, href);
    }
    }
   }
  function getProductCards(){
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
        addHyperLinksDesktop(productsListPage4Desktop[i]);
      }
    }
  }
  setTimeout(()=>{
    getProductCards();
  },1000)
//page4
/* CUSTOM CODE */
if(window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD){
    scrollToPosition();
  }
  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    console.log(document.cookie);
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    console.log(res);
    return res;
  }
  function scrollToPosition() {
    const scrollPositiony = getCookie("scrollPositionyPage4");
    if (scrollPositiony) {
        setTimeout(function () {
          window.scrollTo(+0, +scrollPositiony);
          document.cookie="scrollPositionyPage4=null; expires="+new Date().toUTCString();
          console.log("scrolled to", +scrollPositiony);
        }, 2000);
      }
  }
  function setScrollPosition(element) {
    const position = element.getBoundingClientRect();
    const y = position.top+ window.scrollY - 50;
    const date=new Date()
    date.setTime(date.getTime()+(5*60*1000));
    const expires="; expires="+date.toGMTString();
    document.cookie = "scrollPositionyPage4=" + y + expires;
  }
  function addHyperLinkImgDiv(element, href) {
    const innercontent=element.innerHTML;
    element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
    const imgDiv = element.querySelector("div");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", href);
    anchor.classList.add("anchor-class");
    anchor.innerHTML = imgDiv.innerHTML;
    imgDiv.innerHTML = "";
    imgDiv.appendChild(anchor);
  }
  function addHyperLinksMobile(element) {
    if(element.querySelectorAll("a").length===1){
    const MainDiv = element.querySelector("div");
    MainDiv.onclick=function(){
      setScrollPosition(MainDiv);
    };
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
     const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
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
  }
  function addHyperLinksDesktop(element) {
     if(element.querySelectorAll("a").length===1){
    const mainDiv = element.querySelector("div");
     mainDiv.onclick=function(e){
         setScrollPosition(mainDiv);
       };
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
    const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
      img.onload = function () {
        addHyperLinkImgDiv(rightDiv, href);
      };
    } else {
      addHyperLinkImgDiv(rightDiv, href);
    }
    }
   }
  function getProductCards(){
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
  setTimeout(()=>{
    getProductCards();
  },1000)
//page5
/* CUSTOM CODE */
function addHyperLinkImgDiv(element, href) {
    const innercontent=element.innerHTML;
    element.innerHTML=`<a href=${href} class="anchor-class img-div"}>${innercontent}</a>`;
    const imgDiv = element.querySelector("div");
    const anchor = document.createElement("a");
    anchor.setAttribute("href", href);
     anchor.classList.add("anchor-class");
    anchor.innerHTML = imgDiv.innerHTML;
    imgDiv.innerHTML = "";
    imgDiv.appendChild(anchor);
  }
  function addHyperLinksMobile(element) {
    if(element.querySelectorAll("a").length===1){
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
     const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
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
  }
  function addHyperLinksDesktop(element) {
     if(element.querySelectorAll("a").length===1){
    const mainDiv = element.querySelector("div");
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
    const imgSrc=img.getAttribute("src");
    const trimmedSrc=imgSrc.trim();
    if (!trimmedSrc.startsWith("https:/")) {
      img.onload = function () {
        addHyperLinkImgDiv(rightDiv, href);
      };
    } else {
      addHyperLinkImgDiv(rightDiv, href);
    }
    }
   }
  function getProductCards(){
  if (window.matchMedia("(max-width: 785px)").matches) {
      const productsListPage5Mobile = document.querySelectorAll(".css-14j8s9l > div >div");
      for (let i = 0; i < productsListPage5Mobile.length; i++) {
        addHyperLinksMobile(productsListPage5Mobile[i]);
      }
    } else if(window.matchMedia("(min-width: 1200px)").matches) {
      const productsListPage5Desktop = document.querySelectorAll(".css-il6zc0> div > div");
       console.log(productsListPage5Desktop,'hey')
      for (let i = 0; i < productsListPage5Desktop.length; i++) {
        console.log(productsListPage5Desktop[i])
        addHyperLinksDesktop(productsListPage5Desktop[i]);
      }
    } else {
       const productsListPage5Desktop = document.querySelectorAll(".css-1atq8c8 > div:nth-of-type(2) > div > div ");
       console.log(productsListPage5Desktop,'hey')
      for (let i = 0; i < productsListPage5Desktop.length; i++) {
        console.log(productsListPage5Desktop[i])
        addHyperLinksDesktop(productsListPage5Desktop[i]);
    }
    }
  }
  setTimeout(()=>{
    getProductCards();
  },1000)
  