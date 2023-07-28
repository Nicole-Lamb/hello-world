'use strict';

let userName = '';
let userInput = '';
let idString = '';

//Initial User Name prompt to then welcome them to the page
function getUserName() {
    userName = prompt("What's your name?");
    return userName;
}

//the welcome message that uses getUserName to personalize the page for the user
function welcomeMessage(userName) {
    document.write("Welcome to my garden, " + userName + "!");
}

//the coming soon function used in MyStory and PictureGallery
//TODO: Add functionality to each page and move this button to each page as applicable.
// function onButtonClick(idString) {
//     const comingSoonText = document.getElementById(idString);
//     comingSoonText.classList.remove('hidden');
// }

// Search function for the Tips & Tricks Section
function onTipsButtonClick() { 
    const outputInfo = document.getElementById('tips-section');
    userInput = searchInput();

    if (newParagraph) {
        outputInfo.removeChild(newParagraph);
        newParagraph = null;
    }
    if (nullParagraph) {
        outputInfo.removeChild(nullParagraph);
        nullParagraph = null;
        }
    
    if (userInput !== null && userInput !== ''){
        newParagraph = document.createElement('p');
        newParagraph.textContent = 'You searched for ' + userInput;

        outputInfo.appendChild(newParagraph);
    } else {
        nullParagraph = alert('Nothing was entered in your search.');
        if (confirm("Would you like to search again?")) {
            onTipsButtonClick();
        } else {
            nullParagraph = document.createElement('p');
            nullParagraph.textContent = 'Nothing Found';
            outputInfo.appendChild(nullParagraph);
        }
    }
}

//Taken out of the function onTipsButtonClick to be used separately. 
//TODO: The front end search function can actually search the site/section. 
function searchInput() {
    userInput = prompt("What would you like to search for?");
    return userInput;
}
