const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const totall = r + g + b;
    if (totall < 300) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }

    if(totall===765){
        btn.style.color = "black";
        btn.style.backgroundColor = "#e76f51";
    }
    else{
        btn.style.color = "black";
        btn.style.backgroundColor = "white";
    }
    return `rgb(${r},${g},${b})`;
}

btn.addEventListener('click',function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

