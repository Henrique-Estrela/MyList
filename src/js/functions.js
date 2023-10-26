export function newlist() {
    if (letter.charCodeAt(0) <= 'R'.charCodeAt(0)) {
        var btn = document.createElement("button");
        btn.textContent = letter;
        btn.className = "btn addelement";

        btn.addEventListener("click", function() {
            var textoBotao = btn.textContent;
            var input = document.getElementById("operations");
            input.value += textoBotao;
        });

        document.getElementById("containerbtn").appendChild(btn);
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);

    } else {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'O limite de Variáveis é 3p!',
            showConfirmButton: false,
            color: '#c501e2',
            iconColor: '#c501e2',
            background: '#19191a',
            timer: 2500
        });
    }
}

export function teste(){
    console.log("Foi")
}