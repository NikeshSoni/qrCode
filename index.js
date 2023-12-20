// alert('hdh')

const generate = document.querySelector("#Generate-click");

const inputVal = document.querySelector(".input-val");

const wapper = document.querySelector('.qr-wapper');

const img = document.querySelector('.code-img');



generate.addEventListener("click" , function (e) {

    if (!inputVal.value) {
        alert("write a Text in Input")
    }

    e.preventDefault();

   const process = generate.textContent = 'Generateing...'

    const imagePro = img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputVal.value}`;

    console.log(imagePro);

    img.onload = () => {
          const process = generate.textContent = 'Generated';
          wapper.classList.add("show")
       }
})


function download() {
        fetch(img.src).then(responce => {
            return responce.blob()
        }).then(blob => {
            var imgUrl = URL.createObjectURL(blob);
          let a =   document.createElement('a');

          a.href = imgUrl;
          a.download = "qrCode";
          a.click();
        })


}