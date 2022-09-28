/* ======================= Compulsory Task 20 ===================================
Date: 04-July-2022
Code Name/Summary:Capstone Project VI — JavaScript Fundamentals
================================================================================= */

// function to saves a clicked text element.
function storeText(element) {

    let parentId = $(element).parent().attr("id");
    let parent = document.getElementById(parentId);
    let parentContent = parent.textContent;

    sessionStorage.setItem(parentId, parentContent);
    length = sessionStorage.length;

    alert(`You have saved ${length} item(s)`);

    hideButton(element);
};

//function to save an image when clicked
function saveImage(element) {

    let id = $(element).attr("id");
    let src = $(element).attr("src");

    sessionStorage.setItem(id, src);
    length = sessionStorage.length;

    alert(`You have saved ${length} item(s)`);
    
};
//This function loops through everything in session storage
//If the value of a specific key ends in "jpg" then it saves the image
//Else, it saves the text

function showSavedText() {

    $("#savedContent").empty();

    let contentDiv = document.getElementById("savedContent");
    for (let i = 0; i < sessionStorage.length; i++) {

        const key = sessionStorage.key(i);
        let content = sessionStorage.getItem(key);
        let last3 = content.slice(-3);

        if (last3 === "jpg" ) {

            contentDiv.innerHTML += `
        
            <img class="savedImage" src=${content} alt="image not available"> 
    
            <div class="savedSpacer"></div>
            
            `
        }else {
        
            contentDiv.innerHTML += `
        
            <p>${content}</p>
    
            <div class="savedSpacer"></div>
            
            `
        }

    };

};
//function hides and  shows the save icon, to show the user that it's been clicked

function hideButton(element) {

    $(element).hide(200).show(200);

};

//function contains a chain of animations to indicate that the like button has been clicked

function like(element) {

    $(element).animate({height: "15px"}).animate({height: "40px"});

};
/*------------------------------------------------------------------------------------
 References:
1. Student Notes 2021 HyperionDev: examples: reading under task 18
2. https://forum.freecodecamp.org/t/jquery-click-event-but-with-multiple-targets/230687
3.https://www.youtube.com/playlist?list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_
4.https://www.w3schools.com/jquery/traversing_parent.asp
 -----------------------------------------------------------------------------------*/