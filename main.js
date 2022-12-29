const Timer = setInterval(RdmRot, 10000);
function RdmRot() {
    let randomAngel = Math.floor(Math.random() * 180);
    console.log(randomAngel);
    const ball1 = document.getElementById("ca").style.rotate = `${randomAngel}deg`;
    setTimeout(b2,2000);
    function b2(){
        randomAngel = Math.floor(Math.random() * 180);
        const ball2 = document.getElementById("cb").style.rotate = `${randomAngel}deg`;
    }
    setTimeout(b3,4000);
    function b3(){ 
        randomAngel = Math.floor(Math.random() * 180);
        const ball3 = document.getElementById("cc").style.rotate = `${randomAngel}deg`;
    }
}