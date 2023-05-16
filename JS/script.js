// Variable declaration for dice-1 random number generator
var x = 0;
var y = 0;
var z = 0;

// Main code for random number generator dice-1
x = Math.random();
y = (x * 6) + 1;
z = Math.floor(y);
console.log(z);

// Variable Declaration for dice-2 random number generator
var a = 0;
var b = 0;
var c = 0;

// Main code for random number generator dice-2
a = Math.random();
b = (a * 6) + 1;
c = Math.floor(b);
console.log(c);


// Displaying numbers based on the random number generated
switch (z) {
    case 1:
        document.getElementById('dice-1-row-4').style.paddingTop = "3.6rem";
        document.getElementById('c4').style.display = "block";
        break;

    case 2:
        document.getElementById('dice-1-row').style.paddingTop = "4rem";
        document.getElementById('c1').style.display = "block";
        document.getElementById('c6').style.display = "block";
        break;

    case 3:
        document.getElementById('c4').style.display = "block";
        document.getElementById('c1').style.display = "block";
        document.getElementById('c6').style.display = "block";
        break;

    case 4:
        document.getElementById('dice-1-row').style.paddingTop = "4rem";
        document.getElementById('c1').style.display = "block";
        document.getElementById('c2').style.display = "block";
        document.getElementById('c5').style.display = "block";
        document.getElementById('c6').style.display = "block";
        break;

    case 5:
        document.getElementById('c4').style.display = "block";
        document.getElementById('c1').style.display = "block";
        document.getElementById('c6').style.display = "block";
        document.getElementById('c5').style.display = "block";
        document.getElementById('c2').style.display = "block";
        break;

    case 6:
        document.getElementById('c1').style.display = "block";
        document.getElementById('c6').style.display = "block";
        document.getElementById('c5').style.display = "block";
        document.getElementById('c2').style.display = "block";
        document.getElementById('c3').style.display = "block";
        document.getElementById('c7').style.display = "block";
        break;
    default:

        break;
}

switch (c) {
    case 1:
        document.getElementById('dice-2-row-4').style.paddingTop = "3.6rem";
        document.getElementById('d4').style.display = "block";
        break;

    case 2:
        document.getElementById('dice-2-row').style.paddingTop = "4rem";
        document.getElementById('d1').style.display = "block";
        document.getElementById('d6').style.display = "block";
        break;

    case 3:
        document.getElementById('d4').style.display = "block";
        document.getElementById('d1').style.display = "block";
        document.getElementById('d6').style.display = "block";
        break;

    case 4:
        document.getElementById('dice-2-row').style.paddingTop = "4rem";
        document.getElementById('d1').style.display = "block";
        document.getElementById('d6').style.display = "block";
        document.getElementById('d5').style.display = "block";
        document.getElementById('d2').style.display = "block";
        break;

    case 5:
        document.getElementById('d4').style.display = "block";
        document.getElementById('d1').style.display = "block";
        document.getElementById('d6').style.display = "block";
        document.getElementById('d5').style.display = "block";
        document.getElementById('d2').style.display = "block";
        break;

    case 6:
        document.getElementById('d1').style.display = "block";
        document.getElementById('d6').style.display = "block";
        document.getElementById('d5').style.display = "block";
        document.getElementById('d2').style.display = "block";
        document.getElementById('d3').style.display = "block";
        document.getElementById('d7').style.display = "block";
        break;
    default:

        break;
}

if (z > c) {
    document.querySelector('h1').innerHTML = "Player-1 Wins!!";
}
else if(c > z){
    document.querySelector('h1').innerHTML = "Player-2 Wins!!";
}
else{
    document.querySelector('h1').innerHTML = "Game Draw!";
}