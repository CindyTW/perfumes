let contactUsForm= document.querySelector(".contact-us-form");

contactUsForm.addEventListener("submit", function(e){
    e.preventDefault();
    fetch("/contacts", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,  
            text: document.querySelector("#message").value
        })
    }).then((resp)=>resp.text()).then((data)=>console.log(data));
})