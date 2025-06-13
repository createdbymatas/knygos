// function myFunction() {

// }
// setTimeout(() => {
//     document.getElementById("createdByMatas").style.opacity = "1";
// }, 100);
// setTimeout(() => {
//     document.getElementById("raide14").style.opacity = "0";
// }, 1600);
// setTimeout(() => {
//     document.getElementById("raide13").style.opacity = "0";
// }, 1700);
// setTimeout(() => {
//     document.getElementById("raide12").style.opacity = "0";
// }, 1800);
// setTimeout(() => {
//     document.getElementById("raide11").style.opacity = "0";
// }, 1900);
// setTimeout(() => {
//     document.getElementById("raide10").style.opacity = "0";
// }, 2000);
// setTimeout(() => {
//     document.getElementById("raide9").style.opacity = "0";
// }, 2100);
// setTimeout(() => {
//     document.getElementById("raide8").style.opacity = "0";
// }, 2200);
// setTimeout(() => {
//     document.getElementById("raide7").style.opacity = "0";
// }, 2300);
// setTimeout(() => {
//     document.getElementById("raide6").style.opacity = "0";
// }, 2400);
// setTimeout(() => {
//     document.getElementById("raide5").style.opacity = "0";
// }, 2500);
// setTimeout(() => {
//     document.getElementById("raide4").style.opacity = "0";
// }, 2600);
// setTimeout(() => {
//     document.getElementById("raide3").style.opacity = "0";
// }, 2700);
// setTimeout(() => {
//     document.getElementById("raide2").style.opacity = "0";
// }, 2800);
// setTimeout(() => {
//     document.getElementById("raide1").style.opacity = "0";
// }, 2900);
// setTimeout(() => {
//     document.getElementById("loading").style.opacity = "0";
//     document.getElementById("createdByMatas").style.display = "none";
// }, 3000);
// setTimeout(() => {
//     document.getElementById("loading").style.display = "none";
// }, 3300);

function showLoadImage() {
    document.getElementById("loadImage").style.opacity = "1";
}



window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
    {
        document.getElementById("pagrindinisText").style.opacity = "0";
        document.getElementById("bibliotekaText").style.opacity = "0";
        document.getElementById("paieskaText").style.opacity = "0";
        document.getElementById("topInformation").style.top = "0";
        document.getElementById("topInformation").style.boxShadow = "0 0 10px lightgrey";
        document.getElementById("iVirsu").style.right = "2.5%";
    }
    else
    {
        document.getElementById("pagrindinisText").style.opacity = "1";
        document.getElementById("bibliotekaText").style.opacity = "1";
        document.getElementById("paieskaText").style.opacity = "1";
        document.getElementById("topInformation").style.top = "-50px";
        document.getElementById("topInformation").style.boxShadow = "none";
        document.getElementById("iVirsu").style.right = "-100px";
    }
}
function pagrindinis() {
    setTimeout(() => {
        document.querySelector('#pageTopPagrindinis').scrollIntoView({
            behavior: 'auto'
        });
    }, 1);
    document.getElementById("pagrindinis").style.display = "block";
    document.getElementById("biblioteka").style.display = "none";
    document.getElementById("paieska").style.display = "none";
    document.getElementById("pagrLi").style.pointerEvents = "none";
    document.getElementById("biblLi").style.pointerEvents = "all";
    document.getElementById("paieLi").style.pointerEvents = "all";
    document.getElementById("pagrLi").style.color = "black";
    document.getElementById("biblLi").style.color = "darkgrey";
    document.getElementById("paieLi").style.color = "darkgrey";
    document.getElementById("topInformationTextPagrindinis").style.display = "block";
    document.getElementById("topInformationTextBiblioteka").style.display = "none";
    document.getElementById("topInformationTextPaieska").style.display = "none";
    document.getElementById("sortBy").style.display = "none";
    document.getElementById("topInformation").style.transition = "none";
    document.getElementById("pagrindinisText").style.transition = "none";
    document.getElementById("bibliotekaText").style.transition = "none";
    document.getElementById("paieskaText").style.transition = "none";
    document.getElementById("iVirsu").style.transition = "none";
    setTimeout(() => {
        document.getElementById("topInformation").style.transition = "0.3s";
        document.getElementById("pagrindinisText").style.transition = "0.3s";
        document.getElementById("bibliotekaText").style.transition = "0.3s";
        document.getElementById("paieskaText").style.transition = "0.3s";
        document.getElementById("iVirsu").style.transition = "0.3s";
    }, 50);
}
function biblioteka() {
    setTimeout(() => {
        document.querySelector('#pageTopBiblioteka').scrollIntoView({
            behavior: 'auto'
        });
    }, 1);
    document.getElementById("pagrindinis").style.display = "none";
    document.getElementById("biblioteka").style.display = "block";
    document.getElementById("paieska").style.display = "none";
    document.getElementById("pagrLi").style.pointerEvents = "all";
    document.getElementById("biblLi").style.pointerEvents = "none";
    document.getElementById("paieLi").style.pointerEvents = "all";
    document.getElementById("pagrLi").style.color = "darkgrey";
    document.getElementById("biblLi").style.color = "black";
    document.getElementById("paieLi").style.color = "darkgrey";
    document.getElementById("topInformationTextPagrindinis").style.display = "none";
    document.getElementById("topInformationTextBiblioteka").style.display = "block";
    document.getElementById("topInformationTextPaieska").style.display = "none";
    document.getElementById("sortBy").style.display = "flex";
    document.getElementById("topInformation").style.transition = "none";
    document.getElementById("pagrindinisText").style.transition = "none";
    document.getElementById("bibliotekaText").style.transition = "none";
    document.getElementById("paieskaText").style.transition = "none";
    document.getElementById("iVirsu").style.transition = "none";
    setTimeout(() => {
        document.getElementById("topInformation").style.transition = "0.3s";
        document.getElementById("pagrindinisText").style.transition = "0.3s";
        document.getElementById("bibliotekaText").style.transition = "0.3s";
        document.getElementById("paieskaText").style.transition = "0.3s";
        document.getElementById("iVirsu").style.transition = "0.3s";
    }, 50);
}
function paieska() {
    setTimeout(() => {
        document.querySelector('#pageTopPaieska').scrollIntoView({
            behavior: 'auto'
        });
    }, 1);
    document.getElementById("pagrindinis").style.display = "none";
    document.getElementById("biblioteka").style.display = "none";
    document.getElementById("paieska").style.display = "block";
    document.getElementById("pagrLi").style.pointerEvents = "all";
    document.getElementById("biblLi").style.pointerEvents = "all";
    document.getElementById("paieLi").style.pointerEvents = "none";
    document.getElementById("pagrLi").style.color = "darkgrey";
    document.getElementById("biblLi").style.color = "darkgrey";
    document.getElementById("paieLi").style.color = "black";
    document.getElementById("topInformationTextPagrindinis").style.display = "none";
    document.getElementById("topInformationTextBiblioteka").style.display = "none";
    document.getElementById("topInformationTextPaieska").style.display = "block";
    document.getElementById("sortBy").style.display = "none";
    document.getElementById("topInformation").style.transition = "none";
    document.getElementById("pagrindinisText").style.transition = "none";
    document.getElementById("bibliotekaText").style.transition = "none";
    document.getElementById("paieskaText").style.transition = "none";
    document.getElementById("iVirsu").style.transition = "none";
    setTimeout(() => {
        document.getElementById("topInformation").style.transition = "0.3s";
        document.getElementById("pagrindinisText").style.transition = "0.3s";
        document.getElementById("bibliotekaText").style.transition = "0.3s";
        document.getElementById("paieskaText").style.transition = "0.3s";
        document.getElementById("iVirsu").style.transition = "0.3s";
    }, 50);
}
function scrollToTop() {
    setTimeout(() => {
        document.querySelector('#pageTopPagrindinis').scrollIntoView({
            behavior: 'smooth'
        });
    }, 1);
    setTimeout(() => {
        document.querySelector('#pageTopBiblioteka').scrollIntoView({
            behavior: 'smooth'
        });
    }, 2);
    setTimeout(() => {
        document.querySelector('#pageTopPaieska').scrollIntoView({
            behavior: 'smooth'
        });
    }, 3);
}
function sortByMenu() {
    document.getElementById("selectSortBy").style.display = "block";
    document.getElementById("selectSortBy").style.pointerEvents = "all";
    document.getElementById("disableSortBy").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("selectSortBy").style.transform = "scale(1)";
        document.getElementById("selectSortBy").style.opacity = "1";
        document.getElementById("selectSortBy").style.top = "45px";
        document.getElementById("selectSortBy").style.right = "10px";
    }, 10);
}
function closeSortByMenu() {
    document.getElementById("selectSortBy").style.opacity = "0";
    document.getElementById("selectSortBy").style.pointerEvents = "none";
    document.getElementById("disableSortBy").style.display = "none";
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("selectSortBy").style.display = "none";
        document.getElementById("selectSortBy").style.transform = "scale(0.7)";
        document.getElementById("selectSortBy").style.top = "-20px";
        document.getElementById("selectSortBy").style.right = "-25px";
    }, 200);
}
document.getElementById('paieskosInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // prevent default behavior
    }
});
function paspaustiGerai() {
    document.getElementById("gerai").click();
}
function check(form) {
    if(form.paieskosInput.value == ''){
        document.getElementById("ieskotiPagal").style.display = "inline-block";
        document.getElementById("zanroPaieska").style.display = "inline-block";
        document.getElementById("metuPaieska").style.display = "inline-block";
        document.getElementById("puslapiuPaieska").style.display = "inline-block";
        document.getElementById("kalbosPaieska").style.display = "inline-block";
        document.getElementById("leidyklosPaieska").style.display = "inline-block";
        document.getElementById("knygosPaieskoje").style.display = "none";
    }
    else{
        document.getElementById("ieskotiPagal").style.display = "none";
        document.getElementById("zanroPaieska").style.display = "none";
        document.getElementById("metuPaieska").style.display = "none";
        document.getElementById("puslapiuPaieska").style.display = "none";
        document.getElementById("kalbosPaieska").style.display = "none";
        document.getElementById("leidyklosPaieska").style.display = "none";
        document.getElementById("knygosPaieskoje").style.display = "block";
    }
    // deklaruoti kintamuosius
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('paieskosInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("knygosPaieskoje");
    li = ul.getElementsByTagName('li');

    // patikrinti visus sąrašo elementus ir paslėpti tuos, kurie neatitinka paieškos frazės
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function atidaryti1Knyga() {
    document.getElementById("pilnaKnyga1").style.display = "block";
    document.getElementById("uzdaryti1").style.display = "flex";
    document.getElementById("seselis").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("pilnaKnyga1").style.transform = "scale(1)";
        document.getElementById("pilnaKnyga1").style.opacity = "1";
        document.getElementById("seselis").style.opacity = "1";
        document.getElementById("uzdaryti1").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("pilnaKnyga1").style.borderRadius = "0";
    }, 210);
}
function uzdaryti1Knyga() {
    document.getElementById("pilnaKnyga1").style.transform = "scale(0.7)";
    document.getElementById("pilnaKnyga1").style.borderRadius = "15px";
    document.getElementById("pilnaKnyga1").style.opacity = "0";
    document.getElementById("seselis").style.opacity = "0";
    document.getElementById("uzdaryti1").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("uzdaryti1").style.display = "none";
        document.getElementById("seselis").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
        document.getElementById("pilnaKnyga1").style.display = "none";
    }, 300);
}