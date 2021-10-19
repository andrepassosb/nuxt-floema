<template>
  <div class="collections__gallery">
    <div class="collections__gallery__wrapper">
      <template
        v-for="media,index in gallery"
      >
        <a
          :key="`link-${index}`"
          class="collections__gallery__link"
          data-index="index"
          href="Link(product.products_product)"
        >
        <figure
          :key="`media-${index}`"
          class="collections__gallery__media">
          <img 
            class="collections__gallery__media__image" 
            :alt="media.image.alt"
            :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
            :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
            data-model-src="product.products_product.data.model.url">
        </figure></a>
      </template>
    </div>
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

<style>
.collections__gallery__media__image, .collections__gallery {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.collections__gallery {
  /* visibility: hidden; */
  z-index: 1;
}

.collections__gallery__wrapper {
  align-items: center;
  display: flex;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-22.35rem, -50%);
}

.collections__gallery__link {
  display: block;
  padding: 0 5.3rem;
}
.collections__gallery__link:first-child {
  padding-left: 0;
}
.collections__gallery__link:last-child {
  padding-right: 0;
}

.collections__gallery__media {
  height: 50.48rem;
  position: relative;
  /* visibility: hidden; */
  width: 35.76rem;
}

.collections__gallery__media__image {
  object-fit: cover;
}

</style>