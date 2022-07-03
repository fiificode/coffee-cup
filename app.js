// getting elements

const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

// Toggle Variable
let bool = true;

toggleBtn.addEventListener('click', ()=>{
    // Change Image and Text content with toggle variable
    if(bool === true) {
        // change image to light
        img.src = "cup-light.png";

        // Change text content
        toggleText.forEach(text =>{
            text.innerText = "White ";
        });

        bool = false;
    }else{
        //Change image to dark
        img.src = "cup-dark.png";

        //Change text content
        toggleText.forEach(text =>{
            text.innerText = "Blvck ";
        });
        bool = true;
    }
    //Toggle Theme
    document.body.classList.toggle('light-theme');

    //toggle Icon
    toggleBtn.firstElementChild.classList.toggle('fa-sun');
})