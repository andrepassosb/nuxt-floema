<template>
  <div class="collections" data-background="#BC978C" data-color="#F9F1E7">
     <Menu/>
    <div class="collections__wrapper">
        <template
          v-for="frame,index in dataCollection"
        >
          <VerticalTitle
            :key="`frame-${index}`"
            v-if="frame.frameType == 'title'"
            :content="frame" />
      </template>
          <WaveGallery/>
          
      <div class="collections__content">
        <template data-each="collection, index in collections">
          <article
            class="
              collections_article
              {index
              ===
              0
              ?
              'collections_article--active'
              :
              ''}
            "
          >
            <h2 class="collections_articletitle">
              <span class="collectionsarticletitle_text">texte</span>
            </h2>
            <p class="collections_article_description">
              collection.data.description.replace(/ /g, '&lt;br&gt;')
            </p>
          </article>
        </template>
      </div>
      <div class="collections__mobile">
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
    </div>
    <template data-each="product in products">
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
    </template>
  </div>
</template>


<script>

import Menu from "@/components/Menus/Navigation_Floema";
import Gallery from "@/components/Images/Galleries/Gallery_Floema";
import VerticalTitle from "@/components/Text/Title/Vertical_Floema";
import Button from "@/components/Buttons/Button_Floema";

export default {
  data() {
    return {
      dataCollection: null,
    };
  },
  components:{
    Menu,
    Gallery,
    VerticalTitle,
    Button
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
    this.dataCollection = this.content.content.content[0].frameContent
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