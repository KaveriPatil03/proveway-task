
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");

const dropDown1 = document.getElementsByClassName("outer-drop-down1");
const dropDown2 = document.getElementsByClassName("outer-drop-down2");
const dropDown3 = document.getElementsByClassName("outer-drop-down3");

container1.addEventListener("click", function (event) {
    dropDown1[0].style.display = "flex";
    dropDown1[1].style.display = "flex";

    dropDown2[0].style.display = "none";
    dropDown2[1].style.display = "none";

    dropDown3[0].style.display = "none";
    dropDown3[1].style.display = "none";

    container1.getElementsByTagName('input')[0].checked = true;
    container2.getElementsByTagName('input')[0].checked = false;
    container3.getElementsByTagName('input')[0].checked = false;

    container1.style.backgroundColor = "#e3ffe9";
    container1.style.border = "1px solid #02c92d";
    container2.style.backgroundColor = "#fff";
    container2.style.border = "1px solid #c9c7c7";
    container3.style.backgroundColor = "#fff";
    container3.style.border = "1px solid #c9c7c7";
})
container2.addEventListener("click", function (event) {
    dropDown2[0].style.display = "flex";
    dropDown2[1].style.display = "flex";

    dropDown1[0].style.display = "none";
    dropDown1[1].style.display = "none";

    dropDown3[0].style.display = "none";
    dropDown3[1].style.display = "none";

    container1.getElementsByTagName('input')[0].checked = false;
    container2.getElementsByTagName('input')[0].checked = true;
    container3.getElementsByTagName('input')[0].checked = false;

    container2.style.backgroundColor = "#e3ffe9";
    container2.style.border = "1px solid #02c92d";
    container1.style.backgroundColor = "#fff";
    container1.style.border = "1px solid #c9c7c7";
    container3.style.backgroundColor = "#fff";
    container3.style.border = "1px solid #c9c7c7";
})
container3.addEventListener("click", function (event) {
    dropDown3[0].style.display = "flex";
    dropDown3[1].style.display = "flex";
    
    dropDown1[0].style.display = "none";
    dropDown1[1].style.display = "none";

    dropDown2[0].style.display = "none";
    dropDown2[1].style.display = "none";

    container1.getElementsByTagName('input')[0].checked = false;
    container2.getElementsByTagName('input')[0].checked = false;
    container3.getElementsByTagName('input')[0].checked = true;

    container3.style.backgroundColor = "#e3ffe9";
    container3.style.border = "1px solid #02c92d";
    container1.style.backgroundColor = "#fff";
    container1.style.border = "1px solid #c9c7c7";
    container2.style.backgroundColor = "#fff";
    container2.style.border = "1px solid #c9c7c7";
})