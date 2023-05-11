var qrCode = document.getElementById('img');
       var Ur_input = document.getElementById('input');
       var QrButton = document.getElementById('button');

        QrButton.addEventListener("click",()=>{
            var url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${Ur_input.value}`;
            qrCode.src = url;
        });
