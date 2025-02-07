let ratingValue = localStorage.ratingValue ? JSON.parse(localStorage.ratingValue) : null;

function render(){
    container.innerHTML = "";
    root.innerHTML = "";

    container.innerHTML += `
        <img src="/assets/img/Heart.png" alt="Heart icon for rating" loading="lazy">
        <h1 class = "container-headline" >How did we do?</h1>
        <p class = "container-text" >Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul class = "rating-buttons ">
            <li data-value = "1">1</li>
            <li data-value = "2">2</li>
            <li data-value = "3">3</li>
            <li data-value = "4">4</li>
            <li data-value = "5">5</li>
        </ul>
        <button type="button" onclick="document.getElementById('root').style.display='block'" class= "submit-button" >SUBMIT</button>
    `;
     root.innerHTML += `
        <img src="/assets/img/illustration-thank-you.svg" alt="Thank you illustration" loading="lazy">
        <p class="information-text">You selected ${ratingValue} out of 5</p>
        <h1 class = "root-headline">Thank you!</h1>
        <p class="last-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>

    ` 
    bindElements();
}




function bindElements(){
    const ratingButtons = document.querySelectorAll(".rating-buttons li");
    const submitButton = document.querySelector(".submit-button");
    const informationText = document.querySelector(".information-text");

   for (const ratingButton of ratingButtons) {
       
       ratingButton.addEventListener("click", function (){
            ratingValue = Number(ratingButton.getAttribute("data-value"));
           
            localStorage.ratingValue = JSON.stringify(ratingValue);
            render(); 
            console.log(`Seçilen puan: ${ratingValue}`);
    })
   }

     submitButton.addEventListener("click", function () {
        // const container = document.querySelector("#container");
        container.classList.add("hidden");
        console.log("Gönderilen puan:", ratingValue);


    });
}

render();




