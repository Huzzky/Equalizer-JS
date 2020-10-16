// @ts-check
var audio, context, analyser, src, array, logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9;

logo = document.getElementById('logo').style;
logo1 = document.getElementById('logo1').style;
logo2 = document.getElementById('logo2').style;
logo3 = document.getElementById('logo3').style;
logo4 = document.getElementById('logo4').style;
logo5 = document.getElementById('logo5').style;
logo6 = document.getElementById('logo6').style;
logo7 = document.getElementById('logo7').style;
logo8 = document.getElementById('logo8').style;
logo9 = document.getElementById('logo9').style;

audio = document.getElementById('audio');

window.onclick = function() {
//     let audioContext;

//     try {
//       audioContext =
//         new (window.AudioContext || window.webkitAudioContext)();
//     } catch (error) {
//       window.alert(
//         `Извините, но ваш браузер не поддерживает Web Audio API!`
//       );
//     }
    
//     if (audioContext !== undefined) {
//         const oscillator = audioContext.createOscillator();
//         console.log(oscillator)
//         oscillator.connect(audioContext.destination);
//         oscillator.start();
//         oscillator
//   .frequency
//   .setValueAtTime(69, audioContext.currentTime);
//     }
    if (!context){
        preparation();
    }
    
    if(audio.paused){
        audio.play();
        
        loop();
    } else {
        audio.pause();
    }
    
}

function preparation() {
    context = new AudioContext();
    analyser = context.createAnalyser();
    console.log(context.createAnalyser());
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();

}

function loop() {
    if(!audio.paused){
        window.requestAnimationFrame(loop);
    }
    analyser.fftSize = 8192;
    array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(array);


    console.log(array)

    logo.minHeight = (array[1])+0+"px";
    logo.width = (array[1])+0+"px";

    logo1.minHeight = (array[100])-10+"px";
    logo1.width = (array[100])-10+"px";

    logo2.minHeight = (array[500])-20+"px";
    logo2.width = (array[500])-20+"px";

    logo3.minHeight = (array[1200])+0+"px";
    logo3.width = (array[1200])+0+"px";

    logo4.minHeight = (array[1430])-15+"px";
    logo4.width = (array[1430])-15+"px";

    logo5.minHeight = (array[1756])+0+"px";
    logo5.width = (array[1756])+0+"px";

    logo6.minHeight = (array[1830])+0+"px";
    logo6.width = (array[1830])+0+"px";

    logo7.minHeight = (array[1930])+0+"px";
    logo7.width = (array[1930])+0+"px";

    logo8.minHeight = (array[2030])+0+"px";
    logo8.width = (array[2030])+0+"px";

    logo9.minHeight = (array[2130])+0+"px";
    logo9.width = (array[2130])+0+"px";

}

