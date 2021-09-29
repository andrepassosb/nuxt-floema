<template>
  <div class="home" data-background="#C97164" data-color="#F9F1E7">
    <div class="home__wrapper">
      <template
        v-for="frame,index in homeData"
      >

      <VerticalTitle
        :key="`frame-${index}`"
        v-if="frame.frameType == 'title'"
        :content="frame" />

      <Gallery
        :key="`frame-${index}`"
        v-if="frame.frameType == 'gallery'"
        :content="frame" />

      <Button
        :key="`frame-${index}`"
        v-if="frame.frameType == 'button'"
        :content="frame" />
      </template>

    </div>
  </div>
</template>

<script>
import Gallery from "@/components/Images/Galleries/Gallery_Floema";
import VerticalTitle from "@/components/Text/Title/Vertical_Floema";
import Button from "@/components/Buttons/Button_Floema";
import { mapGetters, mapState } from "vuex";

import axios from 'axios'

export default {
  data() {
    return {
      homeData: null,
    };
  },
  components:{
    Gallery,
    VerticalTitle,
    Button
  },
  computed: {
    ...mapState( {
      totalPost: (state) => state.totalPost,
    }),
    ...mapGetters( ["activePostContent"]),
  },
  created(){
    console.log(this.totalPost)
   this.homeData = this.totalPost[0].content.content[0].frameContent
   console.log(this.homeData)
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
      this.homeData = about.content.content
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
.home {
  /* opacity: 0;
  visibility: hidden; */
  z-index: 2;
} 
.home--active {
  opacity: 1;
  visibility: visible;
}
.home__titles__title {
  font-family: "George X";
  font-size: 20rem;
}
.home__titles {
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
}
.home__titles__label {
  height: 16rem;
  letter-spacing: 0.1rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}
@media (max-width: 767px) {
  .home__titles__label {
    font-size: 1.2rem;
  }
}
.home__titles__label__text {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 10rem;
}
.home__titles__title:nth-child(2) {
  height: 28.6rem;
}
.home__titles__title:nth-child(4) {
  height: 45.1rem;
}
.home__titles__title:nth-child(6) {
  height: 53.1rem;
}
.home__titles__title:nth-child(8) {
  height: 28.8rem;
}
.home__titles__title__text {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  white-space: nowrap;
}
.home {
  overflow: hidden;
  text-align: center;
}
.home__wrapper:before,
.home__wrapper:after {
  content: "";
  height: 35rem;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.home__wrapper:before {
  background: linear-gradient(
    to bottom,
    #c97164 15%,
    rgba(201, 113, 100, 0) 100%
  );
  top: 0;
}
.home__wrapper:after {
  background: linear-gradient(to top, #c97164 15%, rgba(201, 113, 100, 0) 100%);
  bottom: 0;
}
.home__gallery {
  display: flex;
  flex-wrap: wrap;
  left: 50%;
  padding: 0 2.5rem;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 100%;
  /* visibility: hidden; */
}
@media (max-width: 768px) {
  .home__gallery {
    padding: 0 1.5rem;
  }
}
.home__gallery__media {
  padding: 2.5rem;
  width: 20%;
}
.home__gallery__media--2 {
  transform: translateY(10rem);
}
.home__gallery__media--3 {
  transform: translateY(30rem);
}
.home__gallery__media--4 {
  transform: translateY(20rem);
}
.home__gallery__media--5 {
  transform: translateY(40rem);
}
@media (max-width: 768px) {
  .home__gallery__media {
    padding: 1.5rem;
    width: 50%;
  }
  .home__gallery__media--2,
  .home__gallery__media--3,
  .home__gallery__media--4,
  .home__gallery__media--5 {
    transform: translateY(0);
  }
}
.home__gallery__media__image {
  display: block;
  width: 100%;
}
.home__link {
  align-items: center;
  bottom: 5rem;
  display: flex;
  height: 6rem;
  justify-content: center;
  left: 50%;
  letter-spacing: 0.05rem;
  position: absolute;
  text-transform: uppercase;
  transform: translateX(-50%);
  width: 28.8rem;
  z-index: 2;
}
.home__link span {
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
@media (max-width: 767px) {
  .home__link {
    bottom: 7.5rem;
    height: 13.7rem;
    width: 55rem;
  }
}
.home__link__icon,
.home__wrapper,
.home {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.home {
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>