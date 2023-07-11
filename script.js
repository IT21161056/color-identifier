'use scrict'

const openBtn = document.getElementById('start-button');
const inputFile = document.getElementById('file-input');

inputFile.addEventListener('change', function (e) {
    console.log(inputFile.value);
    console.log(URL.createObjectURL(e.target.files[0]))
    const url = URL.createObjectURL(e.target.files[0]);
    document.getElementById('image-holder').style.backgroundImage = `url('${url}')`
    document.getElementById('image').src = `${url}`;
})

openBtn.addEventListener('click', function () {
    const resultElement = document.getElementById('result');
    const hexCode = document.querySelector('.hex-code');

    if(!window.EyeDropper){
        resultElement.textContent = 'Your browser does not support the EyeDropper API';
    }

    const eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
        // this.style.boxShadow = `0 0.35rem 1.5rem ${result.sRGBHex}`
        hexCode.textContent = result.sRGBHex;
        resultElement.style.background = `${result.sRGBHex}`;
    })
    console.log(eyeDropper);
})
