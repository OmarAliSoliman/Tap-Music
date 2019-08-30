window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];
    
    //let sounds play when click on div
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    //make puple go up when sound play 
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s linear";
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});



// for(let i=0; ;i++){
//     pads[i].addEventListener('click', function(){
//         sounds[i].currentTime=0;
//         sounds[i].play();
//     })
// }



