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
          ref="media_gallery"
          :alt="media.image.alt"
          :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
          :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`">
      </figure>
    </template>
  </div>
</template>

<script>
import * as THREE from 'three';
import map from 'lodash/map'

export default {
  data() {
    return {
      gallery:[],
      title:"",
      renderer: null,
      gl: null,
      camera: null,
      scene: null,
      geometry: null,
      texture: null,
      group: null,
      mesh: null,
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
    // this.createCanvas()
    // this.createMediaGallery()
    // this.createGallery()
    // console.log(this.$refs.media_gallery[0].getAttribute('data-src'))
    this.exemplo()
  },
  methods: {
    exemplo(){
      const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
    },
    populateGallery(){
      if(this.content.frameType == "gallery"){
        this.title = this.content.frameContent.text
        this.gallery = this.content.frameContent.items
      }
    },
    load(index){
      console.log(`${index/this.gallery.length*100}%`)
    },
    createCanvas(){
      this.createRenderer();
      this.createCamera();
      window.addEventListener( 'resize', this.resize(), false );
    },
    createGallery(){
      this.createScene()

      this.createMesh()
      this.createGroup()
      this.group.add(this.mesh)
    },
    createMediaGallery(){
      map(this.$refs.media_gallery, (element, index) => {
        const texture = this.createTexture(element)
        // return new Media({
        //   element,
        //   geometry: this.geometry,
        //   index,
        //   scene: this.group
        // })
      })
    },
    createRenderer () {
      this.renderer = new THREE.WebGLRenderer()
      this.gl = this.renderer.domElement
      document.body.appendChild(this.gl)
    },
    createCamera () {
      this.camera = new THREE.PerspectiveCamera(this.gl);
      this.camera.position.z = 5;
    },
    resize() {
      this.camera.aspect = this.gl.width / this.gl.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );
    },
    createScene(){
      this.scene = new THREE.Scene();
    },
    createGroup(){
      this.group = new THREE.Scene();
      this.group.attach(this.scene)
    },
    createGeometry(){
      console.log("createGeometry",1)
      this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32)
      console.log("createGeometry",1)
    },
    createTexture(element){
      this.texture = new THREE.TextureLoader().load(element.getAttribute('data-src'));
    },
    createMaterial(){
        this.material = new THREE.ShaderMaterial({
          vertexShader: `
            uniform vec2 uOffset;
            varying vec2 vUv;
      
            void main() {
              vUv = uv;
              vec3 newPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
            }
          `,
          fragmentShader: `
            uniform sampler2D uTexture;
            uniform float uAlpha;
            varying vec2 vUv;
      
            void main() {
              vec3 color = texture2D(uTexture,vUv).rgb;
              gl_FragColor = vec4(color,1.0);
            }
          `,
          uniforms: {
            uAlpha: { value: 0 },
            uSpeed: { value: 0 },
            //uViewportSizes: { value: [this.sizes.width, this.sizes.height] },
            tMap: { value: this.texture }
          }
        }
        )
        return true
    },
    createMesh(){
      console.log("createMesh",2)
      this.createMaterial()
      this.createGeometry()
      console.log('geometry',this.geometry,'material',this.material)
      this.mesh = new THREE.Mesh( this.geometry, this.material );
      console.log("createMesh",2)
    }
  }
}
</script>