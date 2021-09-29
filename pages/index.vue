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

.detail, .preloader {
  align-items: center;
  display: flex;
  justify-content: center;
}

.dg.ac {
  z-index: 99999 !important;
}

.detail__information__item__title, .detail__information__collection, .home__titles__label, .collections__titles__label {
  font-size: 1.2rem;
}
@media (max-width: 767px) {
  .detail__information__item__title, .detail__information__collection, .home__titles__label, .collections__titles__label {
    font-size: 3rem;
  }
}

.home__link, .detail__button, .preloader__number {
  font-size: 1.4rem;
}
@media (max-width: 767px) {
  .home__link, .detail__button, .preloader__number {
    font-size: 3rem;
  }
}

.detail__information__item__description, .detail__information__highlight__text, .collections__article__description, body {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;
}
@media (max-width: 767px) {
  .detail__information__item__description, .detail__information__highlight__text, .collections__article__description, body {
    font-size: 2.8rem;
  }
}

.detail__information__link, .navigation__list__link {
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
}

.detail__information__link:after, .navigation__list__link:after{
  background: currentColor;
  bottom: 0;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transition: transform 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  width: 100%;
}

.detail__information__link:hover:after, .navigation__list__link:hover:after {
  transform: scaleX(1);
  transform-origin: left center;
}

.detail__information__link:after, .navigation__list__link:after {
  transform: scaleX(0);
  transform-origin: right center;
}

.detail__information__link, .navigation__list__link {
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

.navigation__list__link {
  font-family: "George X";
  font-size: 2.4rem;
  letter-spacing: 0.1rem;
  line-height: 1;
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

.preloader__text span span, .preloader__text {
  font-family: "George X";
  font-size: 5.3rem;
  line-height: 1;
}

.collections__article__title {
  font-family: "George X";
  font-size: 6rem;
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
}

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

.navigation {
  color: #F9F1E7;
  pointer-events: none;
  position: fixed;
  z-index: 3;
}

.navigation__link {
  font-size: 0;
  height: 2rem;
  left: 4rem;
  pointer-events: auto;
  position: absolute;
  top: 4rem;
  transition: opacity 0.4s ease;
  width: 12.8rem;
}
.navigation__link:hover {
  opacity: 0.5;
}
@media (max-width: 767px) {
  .navigation__link {
    height: 4.3rem;
    left: 5rem;
    top: 5rem;
    width: 27.9rem;
  }
}

.navigation__link__icon {
  display: block;
}

.navigation__list__item {
  pointer-events: auto;
  position: absolute;
  right: 4rem;
  top: 4rem;
}

.navigation__list__link {
  display: block;
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

@media (max-width: 767px) {
  .collections__content {
    display: none;
  }
}

.collections__article {
  bottom: 8rem;
  left: 8rem;
  position: absolute;
}

.collections__article__title {
  line-height: 1;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.collections__article__title__text {
  display: inline-block;
  transform: translateY(100%);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.collections__article--active .collections__article__title__text {
  transform: translateY(0);
  transition-delay: 1s;
}

.collections__article__description span {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}
.collections__article__description span span {
  transform: translateY(100%);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.collections__article--active .collections__article__description span span {
  transform: translateY(0);
}
.collections__article--active .collections__article__description span:nth-of-type(1) span {
  transition-delay: 1.05s;
}
.collections__article--active .collections__article__description span:nth-of-type(2) span {
  transition-delay: 1.1s;
}
.collections__article--active .collections__article__description span:nth-of-type(3) span {
  transition-delay: 1.15s;
}
.collections__article--active .collections__article__description span:nth-of-type(4) span {
  transition-delay: 1.2s;
}
.collections__article--active .collections__article__description span:nth-of-type(5) span {
  transition-delay: 1.25s;
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