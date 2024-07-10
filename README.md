## SimpleWaves

I needed a simple wave animation. Yes there are quite a few modules out there which are all
quite awesome. But most of them are quite overpowerd for my requirements. So I decided to
do it by myself with a little bit of inspiration from OpenAI. :-)

This is the outcome. A simple wave function to be useable as a NPM module.

# Installation

```bash
# npm install simple-waves
```

# Usage

### JavaScript NPM
```js
// main.js
import { simpleWaves } from 'simplewaves'

simpleWaves("waveHtmlCanvasElement", width, height);
```

`"waveHtmlCanvasElement"` is the id of the HTML element where the waves should be rendered.  
`width` The width of the canvas (mostlikely the same width as the html Element)  
`height` The height of the canvas (mostlikely the same height as the html Element)  

### HTML
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing My Awesome Package in a New Project</title>
</head>
<body>
<h1>Testing My Awesome Package in a New Project</h1>
<canvas id="waveHtmlCanvasElement" style="height: 500px; width: 750px;"></canvas>
<script src="./dist/bundle.js"></script>
</body>
</html>
```

The `bundle.js` is an example if you bundle you project with you JS files.

# Wave configuration

You can add as many waves as you want. Every wave has some configuration parameters as
follows:

```js
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
```

The above examples is the base default wave configuration if you don't set own waves.
This creates two waves with different speed and wave length also with slightly different
wave height animations.

You can use this array and remove/add waves with your respective parameters and set this
as the start parameter as follows:

```js
import { simpleWaves } from 'simplewaves'

simpleWaves(
    "waveHtmlElement",
    [
        {
            y: 50,
            length: 0.01,
            amplitude: 20,
            frequency: 0.04,
            color: 'rgba(0,51,255,0.81)',
            baseAmplitude: 20,
            amplitudeFrequency: 2,
            increment: 0
        }
    ]
);
```
