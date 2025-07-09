const book = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response not working");
      }
      return response.json();
    })
    .then((books) => {
      console.log("BOOKS:", books);
      //primo libro
      const card = document.getElementById("thirdBook");
      const titleEl = card.querySelector(".card-title");
      titleEl.innerText = books[0].title;
      const priceEl = card.querySelector(".card-text");
      priceEl.innerText = `Prezzo: €${books[0].price.toFixed(2)}`;
      const imgEl = card.querySelector(".card-img-top");
      imgEl.src = books[0].img;
      imgEl.alt = books[0].title;
      //secondo libro
      const cardUno = document.getElementById("firstBook");
      const titleE2 = cardUno.querySelector(".card-title");
      titleE2.innerText = books[10].title;
      const priceE2 = cardUno.querySelector(".card-text");
      priceE2.innerText = `Prezzo: €${books[10].price.toFixed(2)}`;
      const imgE2 = cardUno.querySelector(".card-img-top");
      imgE2.src = books[10].img;
      imgE2.alt = books[10].title;

      //terzo libro
      const cardDue = document.getElementById("secondBook");
      const titleE3 = cardDue.querySelector(".card-title");
      titleE3.innerText = books[5].title;
      const priceE3 = cardDue.querySelector(".card-text");
      priceE3.innerText = `Prezzo: €${books[5].price.toFixed(2)}`;
      const imgE3 = cardDue.querySelector(".card-img-top");
      imgE3.src = books[5].img;
      imgE3.alt = books[5].title;

      //quarto librto

      const cardTre = document.getElementById("fourthBook");
      const titleE4 = cardTre.querySelector(".card-title");
      titleE4.innerText = books[25].title;
      const priceE4 = cardTre.querySelector(".card-text");
      priceE4.innerText = `Prezzo: €${books[25].price.toFixed(2)}`;
      const imgE4 = cardTre.querySelector(".card-img-top");
      imgE4.src = books[25].img;
      imgE4.alt = books[25].title;
    })

    .catch((error) => {
      console.error("Errore nella request:", error);
    });
};

book();

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const card = btn.closest(".card");
      if (card) {
        card.remove();
      }
    });
  });
});
