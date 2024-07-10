let waves = [
    {
        y: 50,
        length: 0.01,
        amplitude: 20,
        frequency: 0.04,
        color: 'rgba(0,51,255,0.81)',
        baseAmplitude: 20,
        amplitudeFrequency: 2,
        increment: 0
    },
    {
        y: 50,
        length: 0.02,
        amplitude: 10,
        frequency: 0.05,
        color: 'rgba(0,140,255,0.5)',
        baseAmplitude: 10,
        amplitudeFrequency: 2.5,
        increment: 0
    }
]
let canvas;
let ctx;
let time = 0;
let wave = [];

function startSimpleWaves(canvasid, width, height, wavearray) {
    canvas = document.getElementById(canvasid);
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    if(!Array.isArray(wavearray) || wavearray.length === 0){
        for (let curwave in waves) {
            waves[curwave].y = canvas.height / 2;
        }
        animateSimpleWaves();
        return;
    }

    waves = wavearray;
    animateSimpleWaves();
}

function animateSimpleWaves() {
    requestAnimationFrame(animateSimpleWaves);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let curwave in waves) {
        wave = waves[curwave];
        let increment = wave.increment;
        wave.amplitude = wave.baseAmplitude + Math.sin(time * wave.amplitudeFrequency) * 20;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        ctx.lineTo(0, wave.y + Math.sin(increment) * wave.amplitude);

        for (let i = 0; i < canvas.width; i++) {
            ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();
        wave.increment += wave.frequency;
    }
    time += 0.01;
}

export function simpleWaves(canvasid, width, height, wavearray) {
    startSimpleWaves(canvasid, width, height, wavearray);
}
