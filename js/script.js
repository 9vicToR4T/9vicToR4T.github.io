window.onload = function () {

  let flag = document.querySelector('.iti__flag'),
    arrow = document.querySelector('.iti__arrow'),
    parrent = document.querySelector('.iti__selected-flag');
  flag.replaceWith(arrow);
  parrent.append(flag);
  let codCountry = document.querySelector('.code-country');
  if (window.innerWidth < 400) {
    codCountry.classList.add("code-country--change");
  } else if (window.innerWidth > 400) {
    codCountry.classList.remove("code-country--change");
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth < 500) {
      codCountry.classList.add("code-country--change");
    } else {
      codCountry.classList.remove("code-country--change");
    }
  });
  let myDiv = document.createElement('div');
  myDiv.className = "shadowBg";
  let fInp = document.querySelector('.firstInput');
  fInp.before(myDiv);




};