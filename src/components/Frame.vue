<template>
    <div>
        <h4 class="text-white m-0">Align your face in the box.</h4>
        <main class="frame-container container d-flex justify-content-center">
            <div class="border-white col-md-6 frame p-0">
                <video autoplay></video>        
                <canvas class="d-none"></canvas>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoOptions: {
                video: {
                    width: 370, 
                    height: 392,
                },
            },
            video: '',
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
            // this.stream = stream;
            this.video.srcObject = stream;
            console.log(stream);
            // streamStarted = true;
        },

        async startStream(constraints){
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.handleStream(stream);
            console.log(stream);
        }
    },
}
</script>

<style>
    
</style>