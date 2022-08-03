let move = 1;

function handler(event) {

    if (event.clientY >=95) {

    if (event.clientX >= 368 ) {
        ++move;
        if (move > 6) {
            move = 1;
        }
    }
    else {
        --move;
        if (move < 1) {
            move = 6;
        }
    }
    document.body.style.background = `url('./img${move}.jpg') no-repeat center/cover`;
    console.log(event);
}
}

function click1() {
    document.body.style.background = `url('./img1.jpg') no-repeat center/cover`;
    
}
function click2() {
    document.body.style.background = `url('./img2.jpg') no-repeat center/cover`;
    
}
function click3() {
    document.body.style.background = `url('./img3.jpg') no-repeat center/cover`;
    
}
function click4() {
    document.body.style.background = `url('./img4.jpg') no-repeat center/cover`;
    
}
function click5() {
    document.body.style.background = `url('./img5.jpg') no-repeat center/cover`;
    
}
function click6() {
    document.body.style.background = `url('./img6.jpg') no-repeat center/cover`;
    
}
