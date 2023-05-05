//Add buttons and links for each new figures
function AddFigures() {
    const Buttons = document.querySelector(".buttons");
    const Head = document.querySelector("head");

    //Change names of buttons
    document.querySelector("#btnOne").innerHTML = "Carré";
    document.querySelector("#btnTwo").innerHTML = "Chat";
    document.querySelector("#btnThree").innerHTML = "Bateau";
    document.querySelector("#btnFour").innerHTML = "Chien";
    document.querySelector("#btnFive").innerHTML = "Ours";
    document.querySelector("#btnSix").innerHTML = "Cheval";
    document.querySelector("#btnSeven").innerHTML = "Papillon";


    // Turtle
    const newButton1 = document.createElement("button");
    Buttons.appendChild(newButton1);
    newButton1.setAttribute('id', 'btnHeight');
    newButton1.innerHTML = "Tortue";

    const newLink1 = document.createElement("link");
    Head.appendChild(newLink1);
    newLink1.setAttribute('rel', 'stylesheet');
    newLink1.setAttribute('href', 'css/figure8.css');


    // Secret
    const newButton2 = document.createElement("button");
    Buttons.appendChild(newButton2);
    newButton2.setAttribute('id', 'btnSecret');
    newButton2.innerHTML = "Kévin";

    const newLink2 = document.createElement("link");
    Head.appendChild(newLink2);
    newLink2.setAttribute('rel', 'stylesheet');
    newLink2.setAttribute('href', 'css/figure9.css');
}
AddFigures()


// CHANGE CLASS WHEN CLICK ON BUTTONS TO ACTIVATE THE FIGURE WANTED //

//Square Figure
function Square() {
    document.querySelector(".red").setAttribute('class', 'figure red square');
    document.querySelector(".green").setAttribute('class', 'figure green square');
    document.querySelector(".blue").setAttribute('class', 'figure blue square');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow square');
    document.querySelector(".purple").setAttribute('class', 'figure purple square');
    document.querySelector(".brown").setAttribute('class', 'figure brown square');
    document.querySelector(".orange").setAttribute('class', 'figure orange square');
    counter = 0;
}
document.getElementById("btnOne").addEventListener('click', Square)

//Cat Figure
function Cat() {
    document.querySelector(".red").setAttribute('class', 'figure red cat');
    document.querySelector(".green").setAttribute('class', 'figure green cat');
    document.querySelector(".blue").setAttribute('class', 'figure blue cat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cat');
    document.querySelector(".purple").setAttribute('class', 'figure purple cat');
    document.querySelector(".brown").setAttribute('class', 'figure brown cat');
    document.querySelector(".orange").setAttribute('class', 'figure orange cat');
    counter = 1;
}
document.getElementById("btnTwo").addEventListener('click', Cat)

//Boat Figure
function Boat() {
    document.querySelector(".red").setAttribute('class', 'figure red Boat');
    document.querySelector(".green").setAttribute('class', 'figure green Boat');
    document.querySelector(".blue").setAttribute('class', 'figure blue Boat');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow Boat');
    document.querySelector(".purple").setAttribute('class', 'figure purple Boat');
    document.querySelector(".brown").setAttribute('class', 'figure brown Boat');
    document.querySelector(".orange").setAttribute('class', 'figure orange Boat');
    counter = 2;
}
document.getElementById("btnThree").addEventListener('click', Boat)

//Dog Figure
function Dog() {
    document.querySelector(".red").setAttribute('class', 'figure red dog');
    document.querySelector(".green").setAttribute('class', 'figure green dog');
    document.querySelector(".blue").setAttribute('class', 'figure blue dog');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow dog');
    document.querySelector(".purple").setAttribute('class', 'figure purple dog');
    document.querySelector(".brown").setAttribute('class', 'figure brown dog');
    document.querySelector(".orange").setAttribute('class', 'figure orange dog');
    counter = 3;
}
document.getElementById("btnFour").addEventListener('click', Dog)

//Bear Figure
function Bear() {
    document.querySelector(".red").setAttribute('class', 'figure red ours');
    document.querySelector(".green").setAttribute('class', 'figure green ours');
    document.querySelector(".blue").setAttribute('class', 'figure blue ours');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow ours');
    document.querySelector(".purple").setAttribute('class', 'figure purple ours');
    document.querySelector(".brown").setAttribute('class', 'figure brown ours');
    document.querySelector(".orange").setAttribute('class', 'figure orange ours');
    counter = 4;
}
document.getElementById("btnFive").addEventListener('click', Bear)

//Horse Figure
function Horse() {
    document.querySelector(".red").setAttribute('class', 'figure red cheval');
    document.querySelector(".green").setAttribute('class', 'figure green cheval');
    document.querySelector(".blue").setAttribute('class', 'figure blue cheval');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow cheval');
    document.querySelector(".purple").setAttribute('class', 'figure purple cheval');
    document.querySelector(".brown").setAttribute('class', 'figure brown cheval');
    document.querySelector(".orange").setAttribute('class', 'figure orange cheval');
    counter = 5;
}
document.getElementById("btnSix").addEventListener('click', Horse)

//Butterfly Figure
function Butterfly() {
    document.querySelector(".red").setAttribute('class', 'figure red butterfly');
    document.querySelector(".green").setAttribute('class', 'figure green butterfly');
    document.querySelector(".blue").setAttribute('class', 'figure blue butterfly');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow butterfly');
    document.querySelector(".purple").setAttribute('class', 'figure purple butterfly');
    document.querySelector(".brown").setAttribute('class', 'figure brown butterfly');
    document.querySelector(".orange").setAttribute('class', 'figure orange butterfly');
    counter = 6;
}
document.getElementById("btnSeven").addEventListener('click', Butterfly)

//Turtle Figure
function Turtle() {
    document.querySelector(".red").setAttribute('class', 'figure red turtle');
    document.querySelector(".green").setAttribute('class', 'figure green turtle');
    document.querySelector(".blue").setAttribute('class', 'figure blue turtle');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow turtle');
    document.querySelector(".purple").setAttribute('class', 'figure purple turtle');
    document.querySelector(".brown").setAttribute('class', 'figure brown turtle');
    document.querySelector(".orange").setAttribute('class', 'figure orange turtle');
    counter = 7;
}
document.getElementById("btnHeight").addEventListener('click', Turtle)

//Kévin Secret Figure
document.getElementById("btnSecret").addEventListener('click', function() {
    document.querySelector(".red").setAttribute('class', 'figure red kevin');
    document.querySelector(".green").setAttribute('class', 'figure green kevin');
    document.querySelector(".blue").setAttribute('class', 'figure blue kevin');
    document.querySelector(".yellow").setAttribute('class', 'figure yellow kevin');
    document.querySelector(".purple").setAttribute('class', 'figure purple kevin');
    document.querySelector(".brown").setAttribute('class', 'figure brown kevin');
    document.querySelector(".orange").setAttribute('class', 'figure orange kevin');
});


// TIMER TO AUTOMATICALLY CHANGE FIGURES //

//Define elements
const FiguresList = [Square, Cat, Boat, Dog, Bear, Horse, Butterfly, Turtle];
let counter = 0;

//Square Figure on load page
Square()

// The Timer //
let timerStatus = false;
let intervalId;

//Button to enable or disable Timer
document.getElementById("btnTimer").addEventListener("click", () => {
    //Activate the timer if variable on "false"
    if (!timerStatus) {
        intervalId = setInterval(() => {
            counter = (counter + 1);
            //If element to loop the Timer
            if (counter === 8) {
                counter = 0;
            }
            FiguresList[counter](); //Function to change the figures
                console.log(FiguresList[counter])
            }, 3000);
        timerStatus = true;
            console.log("Statut du Timer =", timerStatus)
    } 
    //Disable the timer if variable on "true"
    else {
        clearInterval(intervalId); //Stop the Timer
        timerStatus = false;
            console.log("Statut du Timer =", timerStatus)
    }
});