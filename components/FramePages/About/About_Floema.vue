<template>
  <div ref="container" data-background="#B2B8C3" data-color="#37384C">
    <Menu/>
    <div class="about" >
      <div class="about__wrapper"
        v-if="aboutData"
      >
        <template
          v-for="frame,index in aboutData"
        >
        <Gallery
          :key="`frame-${index}`"
          v-if="isGallery(frame.frameContent)"
          :content="frame" />

        <Description
          :key="`frame-${index}`"
          v-if="isDescription(frame.frameContent)"
          :content="frame" />

        <Highlight
          :key="`frame-${index}`"
          v-if="isHighlight(frame.frameContent)"
          :content="frame" />
          
        </template>       

        <!-- <footer class="about__footer">
          <div class="about__footer__copyright">about.data.footer_copyright</div>
          <div class="about__footer__credits">
            PrismicDOM.RichText.asHtml(about.data.footer_credits)
          </div>
        </footer> -->
      </div>
    </div>
  </div>
</template>

<script>

import Menu from "@/components/Menus/Navigation_Floema";
import Gallery from "@/components/Images/Galleries/Carousel_Floema";
import Description from "@/components/Images/Description/Description_Floema";
import Highlight from "@/components/Images/Highlight/Highlight_Floema";
import animation from '../../../mixins/animation.js'

import axios from 'axios'

export default {
  name:'About',
  mixins:[animation],
  data() {
    return {
      aboutData: null,
    };
  },
  components:{
    Gallery,
    Description,
    Highlight,
    Menu
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.aboutData = this.content.content.content
  },
  fetch(){
  },
  mounted(){
    this.show(this.$refs.container)
  },
  methods: {
		requestApiData(url, type, data = '') {
			return new Promise(resolve => {
				axios({
					method: type,
					url: `https://proxy.ulisite.com/api${url}`,
					data: data,
				}).then(response => {
					resolve(response.data)
				}).catch(error => {
					resolve(error)
				})
			});
		},
    async requestAbout(){
      const url = "/site/4287/post/367472"
      const about = await this.requestApiData(url, 'get')
      this.aboutData = about.content.content
    },
    verifyType(content){
      let checkType = {
        gallery : false,
        title : false,
        description : false
      }
      content.forEach(item => {
        if(item.frameType == "gallery" && item.frameContent.items.length > 0){
          checkType.gallery = true
        }else if(item.frameType == "container"){
          item.frameContent.forEach(itemContent => {
            if(itemContent.frameType == "title" && itemContent.frameContent){
              checkType.title = true
            }
            else if(itemContent.frameType == "text" && itemContent.frameContent){
              checkType.description = true
            }
          });
        }
      });
      return checkType
    },
    isGallery(content){
      const checkType = this.verifyType(content);
      if(checkType.gallery == true && checkType.title == false && checkType.description == false){
        return true
      }else{
        return false
      }
    },
    isDescription(content){
      const checkType = this.verifyType(content);
      if(checkType.gallery == true && checkType.title == true && checkType.description == true){
        return true
      }else{
        return false
      }
    },
    isHighlight(content){
      const checkType = this.verifyType(content);
      if(checkType.gallery == true && checkType.title == true && checkType.description == false){
        return true
      }else{
        return false
      }
    },
  }
};
</script>

<style>
.about {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.about__footer__credits a{
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}

.about__footer__credits a:after {
  background: currentColor;
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
}

.about__footer__credits a:hover:after{
  transform: scaleX(1);
  transform-origin: left center;
}

.about__footer__credits a:after {
  transform: scaleX(0);
  transform-origin: right center;
}


.about__footer__credits a{
  display: inline-block;
}
.about {
  /* opacity: 0; */
  /* visibility: hidden; */
  z-index: 2;
}
.about--active {
  opacity: 1;
  visibility: visible;
}

.about__wrapper {
  padding-top: 10rem;
}
.about__footer {
  bottom: 4rem;
  display: flex;
  justify-content: space-between;
  left: 4rem;
  position: absolute;
  right: 4rem;
  text-transform: uppercase;
}
.about__footer__credits a:first-child {
  margin-right: 1rem;
}
.about__footer__credits a:last-child {
  margin-left: 1rem;
}

</style>

<style scoped>
/* 
.about__content {
  display: flex;
  justify-content: center;
  margin: 20rem auto;
  position: relative;
}
.about__content:first-child {
  margin-top: 0;
}
.about__content:last-child {
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
}
@media (max-width: 767px) {
  .about__content:nth-child(5) {
    justify-content: flex-end;
  }
  .about__content:nth-child(8) {
    justify-content: flex-start;
  }
}
.about__content__wrapper {
  display: flex;
}
.about__content--right .about__content__wrapper {
  flex-direction: row-reverse;
}
@media (max-width: 767px) {
  .about__content:nth-child(3) .about__content__wrapper {
    flex-direction: column-reverse;
  }
  .about__content:nth-child(5) .about__content__wrapper {
    flex-direction: column;
  }
  .about__content:nth-child(8) .about__content__wrapper {
    flex-direction: column-reverse;
  }
  .about__content:nth-child(9) .about__content__wrapper {
    flex-direction: column-reverse;
  }
}
.about__content__box {
  display: flex;
}
@media (max-width: 768px) {
  .about__content__box {
    margin: auto;
    width: 60.9rem;
  }
  .about__content:nth-child(3) .about__content__box {
    margin-top: 10rem;
  }
  .about__content:nth-child(5) .about__content__box {
    margin-bottom: 10rem;
  }
  .about__content:nth-child(8) .about__content__box {
    margin-top: 10rem;
  }
  .about__content:nth-child(9) .about__content__box {
    margin-top: 10rem;
  }
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
.about__content:nth-child(3) .about__content__media {
  height: 80.8rem;
  margin-left: 18rem;
  width: 53.8rem;
}
.about__content:nth-child(5) .about__content__media {
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
}
@media (max-width: 768px) {
  .about__content:nth-child(3) .about__content__media {
    height: 91.4rem;
    margin-left: 0;
    width: 60.9rem;
  }
  .about__content:nth-child(5) .about__content__media {
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
  }
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
} */
</style>

<style scoped>
/* .about__highlight__media__image{
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
} */
</style>