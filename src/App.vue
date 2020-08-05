<template>
  <div id="app">
    <div class="main-content d-flex">
      <div class="col-md-9">
        <div class="container">
          <h2 class="font-weight-bold pt-4 text-left title">Spectacles</h2>
          <Frame />
        </div>
      </div>
      <div class="col-md-3 bg-white">
        <div class="container">
          <div class="d-flex pt-4">
            <p>Pick your favourtie glasses</p>
            <Sidebar />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';
import Frame from './components/Frame';

export default {
  name: 'App',
  components: {
    Sidebar,
    Frame
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #D9DCE5;
  padding: 5%;
}

.main-content{
  background-color: #7FB68F;
  border-radius: 20px;
  min-height: 100vh;
  overflow: hidden;
}

.frame{
  border: 4px solid #fff;
  min-height: 350px;
  max-height: 400px;
}

.frame-container{
  align-items: center;
  min-height: 80vh;
}
</style>
