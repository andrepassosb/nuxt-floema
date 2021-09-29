<template>
<section :id="`gallery-${content.frameId}`">
  <div class="about__gallery">
    <div class="about__gallery__wrapper"
    >
      <figure 
        v-for="media in gallery"
        :key="media.id"
        class="about__gallery__media">
        <img
          class="about__gallery__media__image"
          :alt="media.image.alt"
          :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
          :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/300x300/${media.image.url}`"
        />
      </figure>
    </div>
  </div>
    <h2 class="about__title" data-animation="paragraph">
      {{ title }}
    </h2>
    </section>
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
      this.content.frameContent.forEach(item => {
        if(item.frameType == "gallery"){
          this.title = item.frameContent.text
          this.gallery = item.frameContent.items
        }
      });
    }
  }
}
</script>

<style>
.about__gallery {
  height: 58.6rem;
  margin: 15rem 0;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  /* visibility: hidden; */
}
.about__gallery:first-child {
  margin-top: 0;
}
.about__gallery:last-child {
  margin-bottom: 0;
}
.about__gallery__media__image {
  object-fit: cover;
}
.about__gallery__media {
  height: 43.7rem;
  margin: 0 4rem;
  position: relative;
  width: 30.9rem;
}
.about__gallery__media__image {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.about__gallery__wrapper {
  align-items: center;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.about__title {
  font-family: "George X";
  font-size: 11rem;
  line-height: 1.1;

}
@media (max-width: 767px) {
  .about__title {
    font-size: 12rem;
  }
}
.about__title {
  margin: auto;
  margin-bottom: 20rem;
  max-width: 140rem;
  text-align: center;
}
@media (max-width: 767px) {
  .about__title {
    max-width: 67.7rem;
  }
}
</style>