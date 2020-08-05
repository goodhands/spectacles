// implements nodejs wrappers for HTMLCanvasElement, HTMLImageElement, ImageData
// import * as canvas from 'canvas';

import * as faceapi from 'face-api.js';

// patch nodejs environment, we need to provide an implementation of
// // HTMLCanvasElement and HTMLImageElement
// const { Canvas, Image, ImageData } = canvas
// faceapi.env.monkeyPatch({ Canvas, Image, ImageData })

class FaceDetection{

    constructor(){

        const model = '/models';
        Promise.all([
            faceapi.nets.faceLandmark68Net.loadFromUri(model),
            faceapi.nets.faceRecognitionNet.loadFromUri(model),
            faceapi.nets.ssdMobilenetv1.loadFromUri(model)
        ])
    }

    async run(){
        
        const videoStream = document.querySelector("#streamOutput");
        
        const detection = await faceapi.detectSingleFace(videoStream).withFaceLandmarks()

        // const displaySize = { width: 100, height:60 }
        // // resize the overlay canvas to the input dimensions
        // const canvas = document.getElementById('overlay');

        // faceapi.matchDimensions(canvas, displaySize)

        // const resizedDetections = faceapi.resizeResults(detection, displaySize)
        // // draw detections into the canvas
        // faceapi.draw.drawDetections(canvas, resizedDetections)
        return detection;
    }


}

export default FaceDetection;