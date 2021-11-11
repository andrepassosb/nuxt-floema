<template>
  <div ref="container" class="home" data-background="#C97164" data-color="#F9F1E7">
     <Menu/>
    <div class="home__wrapper">
      <template
        v-for="frame,index in homeData"
      >

      <VerticalTitle
        :key="`frame-${index}`"
        v-if="frame.frameType == 'title' && frame.frameContent"
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
import Menu from "@/components/Menus/Navigation_Floema";
import Gallery from "@/components/Images/Galleries/Gallery_Floema";
import VerticalTitle from "@/components/Text/Title/Vertical_Floema";
import Button from "@/components/Buttons/Button_Floema";
import { mapGetters, mapState } from "vuex";

import animation from '../../../mixins/animation.js'

export default {
  mixins:[animation],
  data() {
    return {
      homeData: null,
    };
  },
  components:{
    Gallery,
    VerticalTitle,
    Button,
    Menu
  },
  props:{
    content:{
      required: true
    },
  },
  computed: {
    ...mapState( {
      totalPost: (state) => state.totalPost,
    }),
    ...mapGetters( ["activePostContent"]),
  },
  created(){
   this.homeData = this.content.content.content[0].frameContent
  },
  mounted(){
    this.show(this.$refs.container)
  },
  methods: {
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
  visibility: hidden;
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
.home__titles__label{
  font-size: 1.2rem;
}
@media (max-width: 767px) {
  .home__titles__label{
    font-size: 3rem;
  }
}
</style>