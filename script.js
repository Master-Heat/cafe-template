function drink(){
    document.getElementById("eatmenu").style.display="none";
    document.getElementById("drinkmenu").style.display="block";
    document.getElementById("drinkbtn").style.backgroundColor="#616161";
    document.getElementById("drinkbtn").style.color="white";
     document.getElementById("eatbtn").style.backgroundColor="white";
    document.getElementById("eatbtn").style.color="#616161";

}
function eat(){
    document.getElementById("eatmenu").style.display="block";
    document.getElementById("drinkmenu").style.display="none";
     document.getElementById("drinkbtn").style.backgroundColor="white";
    document.getElementById("drinkbtn").style.color="#616161";
    document.getElementById("eatbtn").style.backgroundColor="#616161";
    document.getElementById("eatbtn").style.color="white";


}