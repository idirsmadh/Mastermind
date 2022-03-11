let val1 = Math.floor(Math.random() * (9 - 0) + 0);
let val2 = Math.floor(Math.random() * (9 - 0) + 0);
let val3 = Math.floor(Math.random() * (9 - 0) + 0);
let val4 = Math.floor(Math.random() * (9 - 0) + 0);

let tour = 1;

console.log(val1, val2, val3, val4);

const valid = () => {
    if (tour < 9) {
        let reponse1 = "X";
        let reponse2 = "X";
        let reponse3 = "X";
        let reponse4 = "X";

        console.log("Valid");
        let answer1 = parseInt(document.querySelector(".answer1").value);
        let answer2 = parseInt(document.querySelector(".answer2").value);
        let answer3 = parseInt(document.querySelector(".answer3").value);
        let answer4 = parseInt(document.querySelector(".answer4").value);

        if (answer1 === val1) {
            reponse1 = "1";
        } else {
            if (answer1 === val2) {
                console.log("trouvé 2");
                reponse1 = ".";
            }
            if (answer1 === val3) {
                console.log("trouvé 3");
                reponse1 = ".";
            }
            if (answer1 === val4) {
                console.log("trouvé 4");
                reponse1 = ".";
            }
        }

        if (answer2 === val2) {
            reponse2 = "1";
        } else {
            if (answer2 === val1) {
                reponse2 = ".";
            }
            if (answer2 === val3) {
                reponse2 = ".";
            }
            if (answer2 === val4) {
                reponse2 = ".";
            }
        }

        if (answer3 === val3) {
            reponse3 = "1";
        } else {
            if (answer3 === val2) {
                reponse3 = ".";
            }
            if (answer3 === val1) {
                reponse3 = ".";
            }
            if (answer3 === val4) {
                reponse3 = ".";
            }
        }

        if (answer4 === val4) {
            reponse4 = "1";
        } else {
            if (answer4 === val2) {
                reponse4 = ".";
            }
            if (answer4 === val3) {
                reponse4 = ".";
            }
            if (answer4 === val1) {
                reponse4 = ".";
            }
        }

        console.log(reponse1, reponse2, reponse3, reponse4);

        let div = document.createElement("div");
        div.classList.add("reponse" + tour);
        div.innerHTML = answer1 +" - "+answer2+" - "+answer3 +" - "+answer4 +"<br />" +reponse1 +" - " +reponse2 +" - " +reponse3 +" - "+reponse4;
        document.querySelector(".reponses").appendChild(div);
        tour++;
        if (
            reponse1 == "1" &&
            reponse2 == "1" &&
            reponse3 == "1" &&
            reponse4 == "1"
        ) {
            alert("Partie gagné");
        }
    } else {
        alert("Partie Perdu ");
    }
};
