<template>
  <div>
    <Menu/>
    <HomeFloema/>
  </div>
</template>

<script>
import HomeFloema from "@/components/FramePages/Home/Home_Floema";
import Menu from "@/components/Menus/Navigation_Floema";
import db_section from'../static/db_section.json';

import axios from 'axios'
import { mapGetters, mapState } from "vuex";

export default {
  components:{
    HomeFloema,
    Menu
  },
  data() {
    return {
      sections: [],
      posts:[]
    };
  },
  async fetch() {
    if(this.totalPost.length == 0){
      this.sections = db_section.section.content
      for (let i = 0; i < this.sections.length; i++) {
        const section = this.sections[i];
        let post = await this.requestPage(section.id)
        this.posts.push(post)
      }
      this.$store.dispatch("getPostData", [this.posts]);
    }
  },
  fetchOnServer: true,
  computed: {
    ...mapState( {
      totalPost: (state) => state.totalPost,
    }),
    ...mapGetters( ["activePostContent"]),
  },
  methods:{
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
    async requestPage(id){
      const url = `/site/4287/post/${id}`
      const data = await this.requestApiData(url, 'get')
      return data
    },

  }
}
</script>

<style>
@charset "UTF-8";
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.detail__button__icon, .detail__media__image, .collections__content, .collections__gallery__media__image, .collections__gallery, .collections__wrapper, .navigation, .transition, .preloader, .content, body, html, .detail, .collections {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.preloader {
  align-items: center;
  display: flex;
  justify-content: center;
}

.dg.ac {
  z-index: 99999 !important;
}


.preloader__number {
  font-size: 1.4rem;
}
@media (max-width: 767px) {
.preloader__number {
    font-size: 3rem;
  }
}

 body {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;
}
@media (max-width: 767px) {
  body {
    font-size: 2.8rem;
  }
}



.preloader__text span span, .preloader__text {
  font-family: "George X";
  font-size: 5.3rem;
  line-height: 1;
}



/* @font-face {
  font-family: "George X";
  src: url(a4a8eb53627b3d1a420149a9a0252a81.woff2) format("woff2"), url(309bcc58a57b38d7fbf651525254f618.woff) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Suisse BP";
  src: url(0e6b7bf4aefb7473581614ed94e35a12.woff2) format("woff2"), url(65915d9417a4a6661e2708e3e4cc47d9.woff) format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Suisse BP";
  src: url(fa32cf40d8b3cb0a9a0ec0f1d0965971.woff2) format("woff2"), url(98ccc5d5390b7fe7a79ccba566e9262e.woff) format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Suisse BP";
  src: url(c186d81e6e7f1863599b17253569b058.woff2) format("woff2"), url(03ccdb4fca57bb51c559322aebd8db0e.woff) format("woff");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
} */
*,
*:after,
*:before {
  box-sizing: border-box;
  user-select: none;
}

html {
  background: #C97164;
  color: #F9F1E7;
  font-size: calc(100vw / 1920 * 10);
  line-height: 1;
  /* overflow: hidden;
  position: fixed; */
}
@media (max-width: 767px) {
  html {
    font-size: calc(100vw / 750 * 10);
  }
}

body {
  font-family: "Suisse BP";
  /* position: fixed; */
}

a {
  color: inherit;
  outline: none;
  text-decoration: none;
}

canvas {
  pointer-events: none;
  position: relative;
  z-index: 1;
}

button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  outline: none;
}

img {
  /* opacity: 0; */
  transition: opacity 0.4s ease;
  vertical-align: middle;
}
img.loaded {
  opacity: 1;
}
/* 
[data-animation=label] span,
[data-animation=paragraph] span,
[data-animation=title] span {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

[data-animation=button] {
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
[data-animation=button] span {
  display: inline-block;
  transform-origin: center center 0.5em;
  vertical-align: middle;
}

[data-animation=link] {
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
[data-animation=link] span {
  display: inline-block;
  transform-origin: center center 0.5em;
  vertical-align: middle;
} */

.preloader {
  background: #C97164;
  color: #F9F1E7;
  text-align: center;
  z-index: 5;
}

.preloader__text {
  max-width: 67rem;
  /* opacity: 0; */
}
.preloader__text span span {
  display: inline-block;
  transform-origin: center center 0.5em;
}

.preloader__number {
  bottom: 7.3rem;
  left: 50%;
  overflow: hidden;
  position: absolute;
  transform: translateX(-50%);
}
@media (max-width: 767px) {
  .preloader__number {
    font-size: 2.4rem;
  }
}

.preloader__number__text {
  display: inline-block;
}

.transition {
  z-index: 4;
}





</style>