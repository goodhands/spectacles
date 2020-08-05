<template>
    <div>
        <h4 class="text-white m-0">Align your face in the box.</h4>
        <img :src="glasses" id="glasses" alt="" height="100" width="100">

        <button @click="run">Run</button>
        <main class="frame-container container d-flex justify-content-center">
            <div class="border-white col-md-6 frame p-0">
                <video id="streamOutput" autoplay></video>   
                <canvas id="overlay"></canvas>
            </div>
        </main>
    </div>
</template>

<script>
import FaceDetection from '../service/FaceDetection'
export default {
    data() {
        return {
            glasses: require('../assets/img/Words_art_sunglasses.png'),
            videoOptions: {
                video: {
                    width: 320, 
                    height: 360,
                },
            },
            video: '',
            FaceAPI: new FaceDetection()
        }
    },
    mounted() {
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            // alert("Let's get this party started")
            navigator.mediaDevices.getUserMedia(this.videoOptions);

            this.startStream(this.videoOptions);

            this.video = document.querySelector("video");
        }
    },  

    methods: {
        handleStream(stream){
            this.video.srcObject = stream;
        },

        async startStream(constraints){
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.handleStream(stream);
        },

        async run(){
            const detection = await this.FaceAPI.run();
            
            console.log(detection);

            const glasses = document.querySelector("#glasses");

            console.log("Eye area: ");
            console.log( detection.landmarks.getNose() );
            
            glasses.style.zIndex = "99";
            // glasses.style.transform = `translate3d( ${}, ${} )`;
            glasses.style.position = "absolute";
            glasses.style.left = detection.detection.box.left;
            glasses.style.right = detection.detection.box.right;
        }
    },
}
</script>

<style>
    
</style>