var txt1 = document.querySelector("#text-area1")
var txt2 = document.querySelector("#text-area2")
var btn2 = document.querySelector("#btn1")
var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function setUrl(text) {
    return url + "?" + "text=" + text;
}

function trans() {
    var inputTex = txt1.value
    // var url1=setUrl(inputTex)
    fetch(setUrl(inputTex))
        .then(response => response.json())
        .then(json => {
            // console.log(json.contents.translated);
            txt2.innerText = json.contents.translated;
        })
}

btn2.addEventListener("click", trans)