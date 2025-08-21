//almost all in this script write by copilot

let audio= document.querySelector('#music');
let background = document.querySelector('#background');
const ctx = background.getContext('2d');

background.style.height = window.innerHeight;
background.style.width = window.innerWidth;


const audioCtx= new (window.AudioContext || window.webkitAudioContext)();
const analysator = audioCtx.createAnalyser();
const source = audioCtx.createMediaElementSource(audio);
source.connect(analysator);
analysator.connect(audioCtx.destination);
analysator.fftSize=64
const buffer = analysator.frequencyBinCount;
const dataArray = new Uint8Array(buffer);

function Draw(){
    analysator.getByteFrequencyData(dataArray);
    ctx.clearRect(0,0,background.width,background.height);
    const barWidth = (background.width/buffer);
    let x=0;
    for(i=0;i<buffer;i++){
        const barHeight = dataArray[i]*2;
        ctx.fillStyle = "lime";
        ctx.fillRect(x,background.height-barHeight,barWidth-2,barHeight);
        x+=barWidth;
    }   
    requestAnimationFrame(Draw);
}

audio.onplay = () =>{
    audioCtx.resume();
    Draw();
}