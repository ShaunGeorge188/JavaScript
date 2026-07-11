function createGrid(size){
    const container = document.querySelector('#grid-container');

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${100 / size}%`;
        square.style.height = `${100 / size}%`;
        
        let hoverCount = 0;

        square.addEventListener('mouseover', () => {
            hoverCount++;
            let opacity = hoverCount * 0.1;
            if(opacity > 1) opacity = 1;
            
            square.style.backgroundColor = 'black';
            square.style.opacity = opacity;
        });

        container.appendChild(square);
    }
}

function clearGrid(){
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';
}

function promptGridSize(){
    let size = prompt('How many squares per side? (max 100)');
    size = Number(size);

    if(!size || size < 1){
        alert('Please enter a valid number.');
        return;
    }
    if(size > 100){
        alert('Max is 100 squares per side.');
        size = 100;
    }

    clearGrid();
    createGrid(size);
}

const resizebtn = document.querySelector('#resizebtn');
resizebtn.addEventListener('click', promptGridSize);