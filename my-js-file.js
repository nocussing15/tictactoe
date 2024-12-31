//function to create game board

function createBoard(){
    const container = document.querySelector("#container");

    for (let i=1; i<10; i++){
        let div= document.createElement("div");
        div.setAttribute("id",`square ${i}`);
        div.textContent="I am a square";  
        container.appendChild(div); 
    }
}

createBoard()