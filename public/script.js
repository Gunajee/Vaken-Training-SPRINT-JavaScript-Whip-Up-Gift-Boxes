function createGrid() {
        const gridSize = document.getElementById("textBox").value;

        const gridContainer = document.getElementById("grid");
        clearSubTotal();
        gridContainer.innerHTML = "";
        var c=0;

        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("grid-cell");
            gridContainer.appendChild(cell);
            c++;
            if(c==12){
          gridContainer.appendChild(document.createElement("br"));
                c=0;
            }
        }
      };
      function clearSubTotal() {
        document.getElementById('textBox').value = '';
        };