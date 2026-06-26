const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const phone = document.getElementById("phone").value;

    const city = document.getElementById("city").value;

    const project = document.getElementById("project").value;

    const budget = document.getElementById("budget").value;

    const message = document.getElementById("message").value;

    const text =

`🏡 *HOM LIVIN Consultation*

👤 Name : ${name}

📞 Phone : ${phone}

📍 City : ${city}

🏠 Project : ${project}

💰 Budget : ${budget}

📝 Message :

${message}`;

    window.open(

`https://wa.me/919600715209?text=${encodeURIComponent(text)}`,

"_blank"

);

});