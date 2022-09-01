<template>
  <div id="app">
    <div id="PlayerWrapper">
      <h3>
        H.265 Player <b>在线播放器Demo1</b
        ><em class="demo1" id="Demo1">DEMO</em>
      </h3>
      <div class="play-container"></div>
    </div>
    <br clear="all" />
    <br />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    let win = window;
    let doc = document;
    const Config = {
      get basePath() {
        let path = win.location.origin;
        let pathname = win.location.pathname;
        let demoIdx = pathname.lastIndexOf("/demo/");
        return path + pathname.substr(0, demoIdx);
      },
      get buildPath() {
        return this.basePath + "/dist/";
      },
      get libPath() {
        return this.buildPath + "lib/";
      },
      get src() {
        return this.basePath + "/data/video2/playlist.m3u8";
      },
    };
    let el = doc.querySelector(".play-container");
    let player = new GoldPlay(el, {
      sourceURL: Config.src,
      type: "HLS",
      libPath: Config.libPath,
      playBackRate: 1,
      controlBarAutoHide: true,
    });
    // player.destroy()
  },
};
</script>

<style>
.goldplay__screen--canvas {
  top: 120px !important;
  left: 0 !important;
}
.goldplay__screen--bigplay{
    top: 0 !important;
  left: 0 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.play-container {
  width: 800px;
  height: 600px;
  /* background-color: #000; */
  margin: 20px 0 0 100px;
  float: left;
}

.inline {
  display: inline-block;
  width: 50px;
}
</style>
