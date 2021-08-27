//EDIT LINK INSIDE QUOTES TO CHANGE WHERE "GIVE BY CHECK OR STOCK LINK GOES
var giveByCheckOrStockLink = "https://google.com/test";
//////////////////////


var cbTmr;
function cb() {
    cbTmr = window.setTimeout(
        function () {
            cT();
        }, 100);
}
function wf() {
    var wFL = function () {
        try {
            if (typeof document.getElementById("donation-widget-div").getElementsByTagName("iframe")[0].contentDocument != "undefined") {
                $(document).ready(function () {
                    mFnC();
                });
            } else {
                window.setTimeout(wFL, 5);
            }
        } catch {
            window.setTimeout(wFL, 5);
        }
    };
    window.setTimeout(wFL, 5);
}
window.onload = wf;
var mainD = null;
var moott = null;
var dtsymb = null;
var amttxtsymb = null;
var otbtsymb = null;
var mbsymb = null;
var amElmsymb = null;
var dbSymbn = null;
var dbTsymbn = null;
var dNsymbnull = null;
var msistof = true;
function mFnC() {
    var mainBody = null;
    mainD = document.getElementById("donation-widget-div").getElementsByTagName("iframe")[0].contentDocument;
    moott = mainD.body.getElementsByClassName("amount-label")[0];
    dtsymb = mainD.createElement("p");
    dtsymb.innerHTML = "";
    amttxtsymb = mainD.getElementById("amount");
    otbtsymb = mainD.body.getElementsByClassName("frequency-label")[0];
    mbsymb = mainD.body.getElementsByClassName("frequency-label")[1];
    amElmsymb = mainD.getElementById("amount-element");
    dNsymbnull = amElmsymb.parentElement;
    dNsymbnull.appendChild(dtsymb);
    dbSymbn = mainD.body.getElementsByClassName("donate-btn")[0];
    dbTsymbn = dbSymbn.children[1];
    try {
        otbtsymb.addEventListener("click", function () {msistof = false; cT();});
    } catch {
        msistof = true;
    }
    try {
        mbsymb.addEventListener("click", function () {msistof = true; cT();});
    } catch {
        msistof = true;
    }
    $(amttxtsymb).on("change keyup paste click", function () {
        clearTimeout(cbTmr);
        cb();
    });
    var changeAmntBtns = mainD.body.getElementsByClassName("amount-option-btn");
    for (var i = 0; i < changeAmntBtns.length; i++) {
        changeAmntBtns[i].addEventListener('click', function () {cT();});
    }
    msistof = mbsymb != null ? $(mbsymb).hasClass("active") : true;
    cT();
}
function cT() {
    setTimeout(function () {realCheckText();}, 10);
}
function realCheckText() {
    var numString = amttxtsymb.value.length > 0 ? amttxtsymb.value.replace(/\D/g, '') : 0;
    var donationValue = BigInt(numString);
    if (msistof == true) {
        moott.innerHTML = "<p>Choose an amount to give per month</p>";
        dtsymb.innerHTML = "<center><p>" + calculateText(donationValue) + "</p></center>";
        dbTsymbn.innerText = "DONATE MONTHLY";
    } else {
        moott.innerHTML = "<p>Choose an amount to give</p>";
        dtsymb.innerHTML = "<center><a href='" + giveByCheckOrStockLink + "' target='_blank'>Give by check or stock</a></center>";
        dbTsymbn.innerText = "DONATE";
    }
}
function calculateText(donationAmount) {
    var kids = BigInt((msistof ? donationAmount * 12n : donationAmount) / 40n);
    if (donationAmount < 5n || donationAmount > 500000n) {
        return "Your monthly donation will change lives all year long.";
    }
    if (msistof) {
        return kids > 1 ? "Your <span style='text-decoration: underline; text-decoration-color:  rgb(255, 201, 16); text-decoration-thickness: 18%;'>$" + numberWithCommas(donationAmount) + "</span> monthly donation can give <span style='text-decoration: underline; text-decoration-color:  rgb(255, 201, 16); text-decoration-thickness: 18%;'>" + numberWithCommas(kids) + "</span> children education every year." : "Your <span style='text-decoration: underline; text-decoration-color:  rgb(10, 186, 180); text-decoration-thickness: 18%;'>$" + numberWithCommas(donationAmount) + "</span> monthly donation can give <span style='text-decoration: underline; text-decoration-color:  rgb(10, 186, 180); text-decoration-thickness: 18%;'>" + numberWithCommas(kids) + "</span> child education every year.";
    }
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
