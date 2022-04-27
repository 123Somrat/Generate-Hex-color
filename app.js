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
    const output = document.getElementById