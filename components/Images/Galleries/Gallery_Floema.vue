<template>
  <div 
    class="home__gallery"
  >
    <template
      v-for="media,index in gallery"
    >
      <figure
        :key="`media-${index}`"
        :class="`home__gallery__media home__gallery__media--${Math.round(index % 5 + 1)}`">
        <img
          :onload="load(index)"
          class="home__gallery__media__image" 
          :alt="media.image.alt"
          :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
          :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`">
      </figure>
    </template>
  </div>
</template>

<script>
import * as THREE from 'three';

export default {
  data() {
    return {
      gallery:[],
      title:"",
      renderer: null,
      gl: null,
      camera: null
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.populateGallery();
  },
  mounted(){
    this.createGalery()
  },
  methods: {
    populateGallery(){
      if(this.content.frameType == "gallery"){
        this.title = this.content.frameContent.text
        this.gallery = this.content.frameContent.items
      }
    },
    load(index){
      console.log(`${index/this.gallery.length*100}%`)
    },
    async createGalery(){
      await this.createRenderer();
      await this.createCamera();
      window.addEventListener( 'resize', this.resize(), false );
    },
    createRenderer () {
      this.renderer = new THREE.WebGLRenderer()
      this.gl = this.renderer.domElement
      document.body.appendChild(this.gl)
    },
    createCamera () {
      this.camera = new THREE.PerspectiveCamera(this.renderer.domElemen);
      this.camera.position.z = 5;
    },
    resize() {
    this.camera.aspect = this.gl.width / this.gl.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    },
  }
}
</script>