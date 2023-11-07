let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, {subtree: true, childList: true});
function onUrlChange() {
  addHyperLinksInPage();
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
  const scrollPositionx = getCookie("scrollPositionx");
  const scrollPositiony = getCookie("scrollPositiony");
  if (scrollPositionx && scrollPositiony) {
    if (
      window.location.href === "https://www.blu.com/fr-FR/e-liquide-recharge" ||
      window.location.href ===
        "https://www.blu.com/fr-FR/e-liquide-recharge/capsules-blu-2-0" ||
      window.location.href ===
        "https://www.blu.com/fr-FR/eliquide-capsules-myblu/capsules-myblu" ||
      window.location.href ===
        "https://www.blu.com/fr-FR/e-liquide-recharge/blu-pro" ||
      window.location.href === "https://www.blu.com/fr-FR/accessoires"
    ) {
      setTimeout(function () {
        window.scrollTo(+scrollPositionx, +scrollPositiony);
        console.log("scrolled to", typeof +scrollPositionx, +scrollPositiony);
      }, 5000);
    }
  }
}
window.onpopstate = function (event) {
  if (event) {
    console.log("onpopstate");
    scrollToPosition();
  }
};
window.onload = function () {
  console.log("onload ran");
  scrollToPosition();
};
function setScrollPosition(element) {
  const position = element.getBoundingClientRect();
  const x = position.left;
  const y = position.top;
  console.log(
    "setScrollPosition ran",
    "scrollPositionx=" + x,
    "scrollPositiony=" + y
  );
  document.cookie = "scrollPositionx=" + x;
  document.cookie = "scrollPositiony=" + y;
}
function addHyperLinkImgDiv(element, href) {
  const imgDiv = element.querySelector("div");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", href);
  anchor.innerHTML = imgDiv.innerHTML;
  imgDiv.innerHTML = "";
  imgDiv.appendChild(anchor);
}
function addHyperLinksMobile(element) {
  const MainDiv = element.querySelector("div");
  /*MainDiv.onclick=function(){
      setScrollPosition(MainDiv);
    };*/
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
  /* mainDiv.onclick=function(){
      setScrollPosition(mainDiv);
    };*/
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
}
if (window.location.href === "https://www.blu.com/fr-FR/e-liquide-recharge") {
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsList = document.querySelectorAll(".css-14j8s9l > div >div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksMobile(productsList[i]);
    }
  } else {
    const productsList = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksDesktop(productsList[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/e-liquide-recharge/capsules-blu-2-0"
) {
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsList = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksMobile(productsList[i]);
    }
  } else {
    const productsList = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksDesktop(productsList[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/eliquide-capsules-myblu/capsules-myblu"
) {
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsList = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksMobile(productsList[i]);
    }
  } else {
    const productsList = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div "
    );
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksDesktop(productsList[i]);
    }
  }
}
if (
  window.location.href ===
  "https://www.blu.com/fr-FR/e-liquide-recharge/blu-pro"
) {
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsList = document.querySelectorAll(".css-14j8s9l > div > div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksMobile(productsList[i]);
    }
  } else {
    const productsList = document.querySelectorAll(
      ".css-1u4k0mp > div:nth-of-type(1) > div > div > div"
    );
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksDesktop(productsList[i]);
    }
  }
}
if (window.location.href === "https://www.blu.com/fr-FR/accessoires") {
  if (window.matchMedia("(max-width: 785px)").matches) {
    const productsList = document.querySelectorAll(".css-14j8s9l > div >div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksMobile(productsList[i]);
    }
  } else {
    const productsList = document.querySelectorAll(".css-159pqie > div > div");
    for (let i = 0; i < productsList.length; i++) {
      addHyperLinksDesktop(productsList[i]);
    }
  }
}




