var translatebtn = document.querySelector("#x");
// var englishtxt = document.querySelector("translateurtxt");
// var piratetxt = document.querySelector("urtranslatedtxt");
var translatedTxt = document.getElementById("urtranslatedtxt");
var url = "https://api.funtranslations.com/translate/minion.json?text=";
function getMinionLang(inputtxt)
{
    return url+inputtxt;
}
function getTranslatedText()
{
    var inputtxt = document.getElementById("translateurtxt").value;
    fetch(getMinionLang(inputtxt))
    .then(response=>response.json())
    .then(result=>
    {
        console.log(result)
        translatedTxt.value = result.contents.translated;
    })
}
translatebtn.addEventListener("click", function(){
    getTranslatedText();
});
