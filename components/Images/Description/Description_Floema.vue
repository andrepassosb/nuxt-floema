<template>
  <section
    :class="`about__content about__content--${direction}`"
  >
    <div class="about__content__wrapper">

      <div class="about__content__box">
        <p class="about__content__label" data-animation="paragraph">
          {{ label }}
        </p>
        <div
          v-html="text"
          class="about__content__description"
          data-animation="paragraph"
        >
        </div>
      </div>
      <figure 
        class="about__content__media"
        :style="calcSize(media)"
        data-animation="parallax">
        <img
          class="about__content__media__image"
          :alt="media.image.alt"
          :data-src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/600x0/${media.image.url}`"
          :src="`https://dxemhjekrc4z1.cloudfront.net/fit-in/600x0/${media.image.url}`"
        />
      </figure>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      media: "",
      label: "",
      text: "",
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.populateDescription()
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
    populateDescription(){
      this.content.frameContent.forEach(item => {
        if(item.frameType == "gallery"){
          this.media = item.frameContent.items[0]
        }
        if(item.frameType == "container"){
          item.frameContent.forEach(element => {
            if(element.frameType == "title"){
              this.label = element.frameContent
            }
            else if (element.frameType == "text"){
              this.text = element.frameContent
            }
          });
        }
      });
    },
    convertToRem(px){
      let rem = px / 16
      return rem
    },
    calcSize(media){
      let height = this.convertToRem(media.image.height) 
      let width = this.convertToRem(media.image.width)
      if(height > width){
        width = 85 * width / height
        height = 85;
      }
      else{
        height = 85 * height / width
        width = 85;
      }
      return `height:${height}rem; width: ${width}rem;`
    }
  }
}
</script>

<style >
.about__content {
  display: flex;
  justify-content: center;
  margin: 20rem auto;
  position: relative;
}
.about__content{
  margin-top: 0;
}
/* .about__content:last-child {
  margin-bottom: 0;
}
.about__content:nth-child(3) {
  margin-top: 30rem;
}
.about__content:nth-child(5) {
  justify-content: flex-end;
}
.about__content:nth-child(8) {
  justify-content: flex-start;
}
.about__content:nth-child(9) {
  margin-top: 40rem;
} */
@media (max-width: 767px) {
  .about__content {
    justify-content: flex-end;
  }
  /* .about__content:nth-child(8) {
    justify-content: flex-start;
  } */
}
.about__content__wrapper {
  display: flex;
}
.about__content--right .about__content__wrapper {
  flex-direction: row-reverse;
}
@media (max-width: 767px) {
  .about__content .about__content__wrapper {
    flex-direction: column-reverse;
  }
  /* .about__content:nth-child(5) .about__content__wrapper {
    flex-direction: column;
  }
  .about__content:nth-child(8) .about__content__wrapper {
    flex-direction: column-reverse;
  }
  .about__content:nth-child(9) .about__content__wrapper {
    flex-direction: column-reverse;
  } */
}
.about__content__box {
  display: flex;
}
@media (max-width: 768px) {
  .about__content__box {
    margin: auto;
    width: 60.9rem;
  }
  .about__content .about__content__box {
    margin-top: 10rem;
  }
  /* .about__content:nth-child(5) .about__content__box {
    margin-bottom: 10rem;
  }
  .about__content:nth-child(8) .about__content__box {
    margin-top: 10rem;
  }
  .about__content:nth-child(9) .about__content__box {
    margin-top: 10rem;
  } */
}
.about__content__label {
  font-size: 1.2rem;
  letter-spacing: 0.032rem;
  line-height: 2;
  text-transform: uppercase;
  width: 18rem;
}
@media (max-width: 768px) {
  .about__content__label {
    font-size: 2.4rem;
    line-height: 1.5;
    padding-right: 2.5rem;
    width: 15rem;
  }
}
.about__content__description a {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}
.about__content__description a:after {
  background: currentColor;
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
}
.about__content__description a:after {
  transform: scaleX(1);
  transform-origin: left center;
}
.about__content__description a:hover:after {
  transform: scaleX(0);
  transform-origin: right center;
}
.about__content__description a {
  display: inline-block;
}
.about__content__media {
  overflow: hidden;
  position: relative;
}
 .about__content__media {
  margin-left: 18rem;
}
/* .about__content:nth-child(5) .about__content__media {
  height: 60rem;
  margin-left: 18rem;
  width: 96rem;
}
.about__content:nth-child(8) .about__content__media {
  height: 52rem;
  margin-right: 12rem;
  width: 84.2rem;
}
.about__content:nth-child(9) .about__content__media {
  height: 85.8rem;
  margin-left: 22rem;
  width: 60.8rem;
} */
@media (max-width: 768px) {
  .about__content .about__content__media {
    height: 91.4rem;
    margin-left: 0;
    width: 60.9rem;
  }
  /* .about__content:nth-child(5) .about__content__media {
    height: 50rem;
    margin-left: 0;
    width: 100vw;
  }
  .about__content:nth-child(8) .about__content__media {
    height: 52rem;
    margin-right: 0;
    width: 100vw;
  }
  .about__content:nth-child(9) .about__content__media {
    height: 85.8rem;
    margin-left: 0;
    width: 60.8rem;
  } */
}
.about__content__media__image {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.about__content__media__image {
  object-fit: cover;
}
.about__content__description {
  width: 36.2rem;
}
.about__content__description a {
  color: #fff;
}
.about__content__description a:after {
  bottom: 0.3rem;
}
.about__content__description p:not(:first-child) {
  margin-top: 2.5rem;
}
@media (max-width: 768px) {
  .about__content__description {
    width: calc(100% - 15rem);
  }
}
</style>