const Timer = setInterval(RdmRot, 10000);
function RdmRot() {
    let randomAngel = Math.floor(Math.random() * 180);
    console.log(randomAngel);
    const ball1 = document.getElementById("ca").style.rotate = `${randomAngel}deg`;
    setTimeout(b2, 2000);
    function b2() {
        randomAngel = Math.floor(Math.random() * 180);
        const ball2 = document.getElementById("cb").style.rotate = `${randomAngel}deg`;
    }
    setTimeout(b3, 4000);
    function b3() {
        randomAngel = Math.floor(Math.random() * 180);
        const ball3 = document.getElementById("cc").style.rotate = `${randomAngel}deg`;
    }
}


const mOver = () => {
    const ball3 = document.getElementById("cc")
    const ball2 = document.getElementById("cb")
    const ball1 = document.getElementById("ca")
    const tit = document.getElementById('tit');
    const body = document.body;
    const btn = document.getElementById('btn')
    const a = document.getElementById('a');
    ball1.style.backgroundColor = "green";
    ball2.style.backgroundColor = "red";
    ball3.style.backgroundColor = "orange";
    btn.style.borderColor = "white";
    a.style.color = "white";
    body.style.backgroundColor = "black";
}

const mLeave = () => {
    const ball3 = document.getElementById("cc")
    const ball2 = document.getElementById("cb")
    const ball1 = document.getElementById("ca")
    const tit = document.getElementById('tit');
    const body = document.body;
    const btn = document.getElementById('btn')
    const a = document.getElementById('a');
    ball1.style.backgroundColor = "red";
    ball2.style.backgroundColor = "green";
    ball3.style.backgroundColor = "blue";
    btn.style.borderColor = "black";
    a.style.color = "black";
    body.style.backgroundColor = "darksalmon";
}
tit.addEventListener('mouseover', mOver);
tit.addEventListener('mouseleave', mLeave);
