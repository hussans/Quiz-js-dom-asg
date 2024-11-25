let boxNumberInput = document.getElementById('boxNumber');
let colorInput = document.getElementById('changeColor');
let changeColorBtn = document.getElementById('changeColorBtn');
let resetBtn = document.getElementById('resetColorBtn');

changeColorBtn.addEventListener('click', () => {
    let boxNumber = boxNumberInput.value.trim();
    let color = colorInput.value.trim().toLowerCase();
    let box = document.getElementById(`box${boxNumber}`);
    if(box) {
        box.style.backgroundColor = color;
    } else {
        alert('Choose Boxes 1-8');
    }
});

resetBtn.addEventListener('click', () => {
    for(let i = 1; i <= 8; i++) {
    let box = document.getElementById(`box${i}`);
    if(box) {
        box.style.backgroundColor = '';
    }
  }
});