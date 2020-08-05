<template>
  <div id="app">
    <div class="main-content d-flex">
      <div class="col-md-9">
        <div class="container">
          <h2 class="font-weight-bold pt-4 text-left title text-white">Spectacles</h2>
          <Frame />
        </div>
      </div>
      <div class="col-md-3 bg-white">
        <div class="container">
          <div class="d-flex pt-4">
            <p class="col-md-6 font-weight-bolder text-left">Pick your favourtie glasses</p>
            <button class="nav-control">
                <span class="hr hr-short"></span>
                <span class="hr hr-long"></span>
            </button>
          </div>
          <Sidebar />

          <div class="costume-section d-block">
            <div class="align-content-between col-md-12 d-flex flex-row flex-wrap justify-content-between">
              <button class="col-md-6 custume-btn btn"></button>
              <button class="col-md-6 custume-btn btn"></button>
              <button class="col-md-6 custume-btn btn"></button>
              <button class="col-md-6 custume-btn btn"></button>
            </div>
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
  border: 2.7px solid #fff;
  min-height: 350px;
  max-height: 400px;
}

.frame-container{
  align-items: center;
  min-height: 80vh;
}

.costume-section.d-block {
    position: absolute;
    bottom: 33px;
    left: 0;
    right: 0;
}

button.col-md-6.custume-btn.btn {
    box-shadow: 0px 0px 2px 1px rgb(0 0 0 / 8%);
    border-radius: 3px;
    min-height: 60px;
    margin-top: 10px;
}
</style>
