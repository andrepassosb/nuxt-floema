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
          class="home__gallery__media__image" 
          :alt="media.image.alt" 
          :data-src="media.image.url"/>
      </figure>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery:[],
      title:""
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.populateGallery()
  },
  methods: {
    populateGallery(){
      if(this.content.frameType == "gallery"){
        this.title = this.content.frameContent.text
        this.gallery = this.content.frameContent.items
      }
    }
  }
}
</script>