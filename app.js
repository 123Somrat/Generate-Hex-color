/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps

// Step 1 - create onload handler

window.onload = () => {
	main();
};


function main (){
  
    // Collect all necessary reference

    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    const output = document.getElementById("output");

    // Add Event listener

    btn.addEventListener("click",function(){
       //Generate bg color 
       const bgcolor = generateHEXcolor()
       // Change bg color 
       root.style.backgroundcolor= bgcolor;

    })
}

//Hex Decimel color generator function 

function generateHEXcolor(){
    const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

};