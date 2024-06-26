const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

noButton.addEventListener("mouseover",function() {
    function getRandomNumber (){
        return Math.floor(Math.random() *301); 
    }
    noButton.style.left = getRandomNumber() + "px";
    noButton.style.top = getRandomNumber() + "px";
})
