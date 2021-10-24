<template >
  <section class="about__highlight">
    <div class="about__highlight__wrapper">
      <a
        class="about__highlight__link"
        href="section.primary.link.url"
        target="_blank"
      >
        <template v-if="label != ''">
          <p class="about__highlight__label" data-animation="paragraph" >
            {{ label }}
          </p>
        </template>
        <h3 class="about__highlight__title" data-animation="highlight" style="display:hidden">
          {{ title }}
        </h3>
      </a>
      <div class="about__highlight__medias">
        <figure
          v-for="media in gallery"
          :key="media.id"
          class="about__highlight__media"
          data-animation="parallax"
        >
          <img
            class="about__highlight__media__image"
            :alt="media.image.alt"
            :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/600x0/${media.image.url}`"
            :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/600x0/${media.image.url}`"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: [],
      title: "",
      label: "",
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.populateHighlight()
  },
  computed:{
    direction(){
      if(this.content.frameContent[0].frameType == "container"){
        return 'left'
      }
      return 'right'
    }
  },
  methods: {
    populateHighlight(){
      this.content.frameContent.forEach(item => {
        if(item.frameType == "gallery"){
          this.gallery = item.frameContent.items
        }
        if(item.frameType == "container"){
          item.frameContent.forEach(element => {
            if(element.frameType == "title"){
              this.title = element.frameContent
            }
            else if (element.frameType == "text"){
              this.label = element.frameContent
            }
          });
        }
      });
    }
  }
}
</script>

<style scoped>
.about__highlight__media__image{
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.about__highlight__label {
  font-size: 1.2rem;
}
@media (max-width: 767px) {
  .about__highlight__label {
    font-size: 3rem;
  }
}
.about__highlight__title {
  font-family: "George X";
  font-size: 20rem;
}
.about__highlight {
  margin: 20rem 0;
}
.about__highlight:first-child {
  margin-top: 0;
}
.about__highlight:last-child {
  margin-bottom: 0;
}
.about__highlight__wrapper {
  height: 104rem;
  margin: auto;
  position: relative;
  width: 144rem;
}
.about__highlight:nth-child(4) .about__highlight__wrapper {
  width: 104rem;
}
@media (max-width: 768px) {
  .about__highlight__wrapper {
    height: 316.2rem;
    width: 100%;
  }
  .about__highlight:nth-child(4) .about__highlight__wrapper {
    height: 119.3rem;
    width: 100%;
  }
}
.about__highlight__label {
  left: 50%;
  letter-spacing: 0.1rem;
  position: absolute;
  top: 9rem;
  transform: translateX(-50%);
  text-align: center;
  text-transform: uppercase;
  width: 9.6rem;
}
@media (max-width: 768px) {
  .about__highlight__label {
    font-size: 2.4rem;
    margin-top: 6.5rem;
    top: 90rem;
    width: 19rem;
  }
}
.about__highlight__link[href] {
  transition: color 0.4s ease;
}
.about__highlight__link[href]:hover {
  color: #fff;
}
.about__highlight__title {
  padding-bottom: 2rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
}
@media (max-width: 768px) {
  .about__highlight__title {
    font-size: 30rem;
    margin-top: 6.5rem;
  }
}
.about__highlight__media {
  height: 76rem;
  overflow: hidden;
  position: absolute;
  width: 54rem;
}
.about__highlight:nth-child(4) .about__highlight__media {
  height: 52.8rem;
  width: 36rem;
}
.about__highlight__media:first-child {
  left: 0;
  top: 0;
}
.about__highlight__media:last-child {
  bottom: 0;
  right: 0;
}
@media (max-width: 768px) {
  .about__highlight:last-child .about__highlight__media {
    height: 76rem;
    width: 54rem;
  }
  .about__highlight:last-child .about__highlight__media:first-child {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .about__highlight:last-child .about__highlight__media:last-child {
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
}
.about__highlight__media__image {
  object-fit: cover;
}
</style>