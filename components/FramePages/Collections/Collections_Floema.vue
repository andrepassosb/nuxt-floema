<template>
  <div ref="container" class="collections" data-background="#BC978C" data-color="#F9F1E7">
    <Menu/>
    <div class="collections__wrapper">
      <template 
       v-for="dataframe in dataCollection">

        <template
          v-if="dataframe.frameContent[1].frameType == 'gallery'" >
          <template
            v-for="frame,index in dataframe.frameContent"
          >
            <VerticalTitle
              :key="`frame-${index}`"
              v-if="frame.frameType == 'title'"
              :content="frame" />
            <WaveGallery
            :key="`frame-${index}`"
            v-if="frame.frameType == 'gallery'"
            :content="frame" />
          </template>
        </template>

      </template>
    
        <div
          :key="`content-${index}`"
          class="collections__content">
          <template
          v-for="dataframe,index in dataCollection">
            <Article
              v-if="dataframe.frameContent[1].frameType == 'text'"
              :key="`article-${index}`"
              :content="dataframe"
              :index="index" />
          </template>
        </div>
          

      <!-- <div class="collections__mobile">
        <template data-each="collection, index in collections">
          <div class="collections_mobile_item">
            <div class="collections_mobileitem_label">
              {home.data.collection}<br />{Numbers(index)}
            </div>
            <div class="collections_mobileitem_title">
              collection.data.title
            </div>
          </div>
        </template>
      </div>
    </div> -->

   <!-- <template data-each="product in products">
      <article class="detail" data-background="#BC978C" data-color="#F9F1E7">
        <div class="detail__wrapper">
          <figure class="detail_media">
            <img
              class="detailmedia_image"
              alt="product.data.image.alt"
              data-src="product.data.image.url"
            />
          </figure>
          <div class="detail__information">
            <p class="detail_informationcollection">
              <span class="detailinformationcollection_text"
                >product.data.collection.data.title</span
              >
            </p>
            <h1 class="detail_information_title">
              product.data.title.replace(' ', '<br />')
            </h1>
            <div class="detail_information_content">
              <div class="detail_information_highlights">
                <template data-each="highlight in product.data.highlights">
                  <p class="detail_information_highlight">
                    <template
                      data-if="highlight.highlights_icon.toLowerCase() == 'arrow'"
                    >
                      <svg
                        class="
                          detail_informationhighlighticon
                          detailinformationhighlight_icon--arrow
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                      >
                        <path stroke="#fff" d="M14.84,25.46l11.31-11.31"></path>
                        <path
                          fill="#fff"
                          d="M30.75,9.55l-0.66,2.36l-0.05,2.59l-1.93-2.31l-2.31-1.93l2.59-0.05L30.75,9.55z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M10.25,30.05l0.66-2.36l0.05-2.59l1.93,2.31l2.31,1.93l-2.59,0.05L10.25,30.05z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fff"
                          d="M20,0.5c10.77,0,19.5,8.73,19.5,19.5S30.77,39.5,20,39.5S0.5,30.77,0.5,20S9.23,0.5,20,0.5z"
                        ></path>
                      </svg>
                    </template>
                    <template data-else="">
                      <svg
                        class="
                          detail_informationhighlighticon
                          detailinformationhighlight_icon--star
                        "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                      >
                        <path
                          fill="#fff"
                          d="M24.26,9.87l-2.76,8.6l8.72-2.63l-8.16,4.13l8.15,4.26l-8.71-2.82l2.82,8.91l-4.26-8.34l-4.14,8.15l2.63-8.72 l-8.6,2.75l8.15-4.2l-8.34-4.33l8.78,2.82l-2.82-8.78l4.33,8.34L24.26,9.87z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#fff"
                          d="M20,0.5c10.77,0,19.5,8.73,19.5,19.5S30.77,39.5,20,39.5S0.5,30.77,0.5,20S9.23,0.5,20,0.5z"
                        ></path>
                      </svg> </template
                    ><span class="detail_informationhighlight_text"
                      >highlight.highlights_text.replace(/ /, '<br />')</span
                    >
                  </p>
                </template>
              </div>
              <div class="detail_information_list">
                <template data-each="item in product.data.informations">
                  <p class="detail_informationitem">
                    <strong class="detailinformationitemtitle"
                      ><span class="detailinformationitemtitletext"
                        >item.informations_label</span
                      ></strong
                    ><span class="detailinformationitem_description"
                      >item.informations_description</span
                    >
                  </p>
                </template>
              </div>
              <footer class="detail_informationfooter">
                <a
                  class="detailinformation_link"
                  data-animation="link"
                  href="product.data.link_url.url"
                  target="_blank"
                  ><span>product.data.link_text</span></a
                >
              </footer>
            </div>
          </div>
        </div>
        <button class="detail__button" data-animation="button">
          <span>Close</span>
          <svg
            class="detail_button_icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 60"
          >
            <path
              fill="none"
              stroke="#fff"
              opacity="0.4"
              d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z"
            ></path>
            <path
              fill="none"
              stroke="#fff"
              d="M62,0.5c33.97,0,61.5,13.21,61.5,29.5S95.97,59.5,62,59.5S0.5,46.29,0.5,30S28.03,0.5,62,0.5z"
            ></path>
          </svg>
        </button>
      </article>
    </template> -->
    </div>
  </div>
</template>


<script>

import Menu from "@/components/Menus/Navigation_Floema";
import WaveGallery from "@/components/Images/Galleries/Wave_Floema";
import VerticalTitle from "@/components/Text/Title/Vertical_Floema";
import Article from "@/components/Text/Articles/Articles_Floema";
import Button from "@/components/Buttons/Button_Floema";

import animation from '../../../mixins/animation.js'

export default {
  name:'Collection',
  mixins:[animation],
  data() {
    return {
      dataCollection: null,
    };
  },
  components:{
    Article,
    Button,
    Menu,
    WaveGallery,
    VerticalTitle,
  },
  props:{
    content:{
      required: true
    },
  },
  created(){
  },
  fetch(){
  },
  mounted(){
    this.dataCollection = this.content.content.content
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
.detail__button__icon, .detail__media__image, .collections__content, .collections__wrapper, .content, .detail, .collections {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.detail {
  align-items: center;
  display: flex;
  justify-content: center;
}
.detail__information__item__title, .detail__information__collection, .home__titles__label, .collections__titles__label {
  font-size: 1.2rem;
}
@media (max-width: 767px) {
  .detail__information__item__title, .detail__information__collection, .home__titles__label, .collections__titles__label {
    font-size: 3rem;
  }
}
.detail__button {
  font-size: 1.4rem;
}
@media (max-width: 767px) {
  .detail__button {
    font-size: 3rem;
  }
}
.detail__information__item__description, .detail__information__highlight__text {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;
}
@media (max-width: 767px) {
  .detail__information__item__description, .detail__information__highlight__text {
    font-size: 2.8rem;
  }
}
.detail__information__link {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}
.detail__information__link:after{
  background: currentColor;
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
}
.detail__information__link:hover:after {
  transform: scaleX(1);
  transform-origin: left center;
}
.detail__information__link:after {
  transform: scaleX(0);
  transform-origin: right center;
}

.detail__information__link {
  display: inline-block;
}
.detail, .collections {
  /* opacity: 0;
  visibility: hidden; */
  z-index: 2;
}

.detail--active, .collections--active{
  opacity: 1;
  visibility: visible;
}

.detail__information__link {
  font-family: "George X";
  font-size: 3rem;
}
@media (max-width: 767px) {
  .detail__information__link {
    font-size: 5.2rem;
  }
}


.detail__information__title {
  font-family: "George X";
  font-size: 12rem;
  line-height: 0.82;
}
@media (max-width: 767px) {
  .detail__information__title {
    font-size: 18rem;
  }
}

.collections__titles__title {
  font-family: "George X";
  font-size: 20rem;
}
.collections__titles {
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
}

 .collections__titles__label {
  height: 16rem;
  letter-spacing: 0.1rem;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}
@media (max-width: 767px) {
 .collections__titles__label {
    font-size: 1.2rem;
  }
}

.collections__titles__label__text {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  width: 10rem;
}

.collections__titles__title {
  position: relative;
}
.collections__titles__title:nth-child(2) {
  height: 28.6rem;
}
.collections__titles__title:nth-child(4) {
  height: 45.1rem;
}
.collections__titles__title:nth-child(6) {
  height: 53.1rem;
}
.collections__titles__title:nth-child(8) {
  height: 28.8rem;
}

.collections__titles__title__text {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  white-space: nowrap;
}
.collections {
  z-index: 0;
}
.collections__wrapper {
  overflow: hidden;
  transition: opacity 0.5s 0.5s ease;
}
.collections--open .collections__wrapper {
  /* opacity: 0; */
  transition-delay: 0s;
}

.collections__titles__item:nth-child(1) .collections__titles__title {
  height: 28.6rem;
}
.collections__titles__item:nth-child(2) .collections__titles__title {
  height: 45.1rem;
}
.collections__titles__item:nth-child(3) .collections__titles__title {
  height: 53.1rem;
}
.collections__titles__item:nth-child(4) .collections__titles__title {
  height: 28.8rem;
}

@media (max-width: 767px) {
  .collections__content {
    display: none;
  }
}


.collections__mobile {
  bottom: 5rem;
  display: none;
  position: absolute;
}
@media (max-width: 767px) {
  .collections__mobile {
    display: flex;
  }
}

.collections__mobile__item {
  padding-left: 5rem;
  width: 100vw;
}

.collections__mobile__item__label {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.collections__mobile__item__title {
  font-family: "George X";
  font-size: 12rem;
}

.collections__button {
  height: 63.1rem;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 44.7rem;
}

.detail {
  transform: translateY(100%);
  transition: opacity 0.5s 0.5s ease, transform 0s 0.5s, visibility 0.5s 0.5s ease;
}
.detail--active {
  transform: translateY(0);
  transition-delay: 0;
}
@media (max-width: 767px) {
  .detail {
    height: auto;
  }
}

.detail__wrapper {
  align-items: center;
  display: flex;
  /* opacity: 0; */
  transition: opacity 0.4s ease;
}
.detail--active .detail__wrapper {
  opacity: 1;
}
@media (max-width: 767px) {
  .detail__wrapper {
    display: block;
    margin: auto;
    padding: 15rem 0 31.5rem;
    width: 66.1rem;
  }
}

.detail__media {
  height: 78.2rem;
  position: relative;
  /* visibility: hidden; */
  width: 55.4rem;
}
@media (max-width: 767px) {
  .detail__media {
    height: 93.4rem;
    margin: 0 auto 7.8rem;
    width: 100%;
  }
}

.detail__media__image {
  object-fit: cover;
}

.detail__information {
  padding-left: 8.2rem;
}
@media (max-width: 767px) {
  .detail__information {
    padding-left: 0;
  }
}

.detail__information__collection {
  margin-bottom: 4rem;
  overflow: hidden;
  text-transform: uppercase;
}

.detail__information__collection__text {
  display: block;
}

.detail__information__title {
  max-width: 60rem;
}

.detail__information__content {
  padding-left: 18rem;
}
@media (max-width: 767px) {
  .detail__information__content {
    padding-left: 0;
  }
}

.detail__information__highlights {
  margin-top: 6rem;
}

.detail__information__highlight {
  align-items: center;
  display: flex;
}
.detail__information__highlight:not(:first-child) {
  margin-top: 4rem;
}

.detail__information__highlight__icon {
  border-radius: 50%;
  height: 4rem;
  margin-right: 3.75rem;
  width: 4rem;
}
@media (max-width: 767px) {
  .detail__information__highlight__icon {
    height: 9.2rem;
    margin-right: 5.8rem;
    width: 9.2rem;
  }
}

.detail__information__highlight__text {
  overflow: hidden;
}
.detail__information__highlight__text span {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

.detail__information__list {
  margin-top: 4rem;
}

.detail__information__item {
  display: flex;
}
.detail__information__item:not(:first-child) {
  margin-top: 4rem;
}

.detail__information__item__title {
  line-height: 1;
  margin-bottom: auto;
  overflow: hidden;
  padding-right: 2.5rem;
  width: 15rem;
}
@media (max-width: 767px) {
  .detail__information__item__title {
    padding-right: 5rem;
  }
}

.detail__information__item__title__text {
  display: block;
}

.detail__information__item__description {
  letter-spacing: 0.03rem;
  max-width: 44rem;
}
.detail__information__item__description span {
  display: inline-block;
  line-height: 1;
  overflow: hidden;
  vertical-align: top;
}

.detail__information__footer {
  overflow: hidden;
}

.detail__information__link {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-right: auto;
  margin-top: 3rem;
  width: fit-content;
}
.detail__information__link:before {
  content: "↗";
  font-family: "Suisse BP";
  font-weight: 100;
  margin-left: 1rem;
  margin-top: -0.2rem;
}
.detail__button {
  align-items: center;
  bottom: 5rem;
  display: flex;
  height: 6rem;
  justify-content: center;
  left: 50%;
  opacity: 0;
  position: absolute;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: opacity 0.4s ease;
  width: 12.4rem;
  z-index: 2;
}
.detail__button span {
  display: inline-block;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}
.detail--active .detail__button {
  opacity: 1;
}
@media (max-width: 767px) {
  .detail__button {
    bottom: 12rem;
    height: 13rem;
    width: 26.8rem;
  }
}
</style>