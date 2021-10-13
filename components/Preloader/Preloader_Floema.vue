<template>
  <div class="preloader" ref="preloader">
    <p class="preloader__text" ref="preloaderText">
      The surprise of what is <br> possible to make with a simple <br> and thin thread.
    </p>
    <div class="preloader__number">
      <div class="preloader__number__text"> {{ percentage }} % </div>
    </div>
  </div>
</template>

<script>
import { split } from '../../utils/text'
import animation from '../../mixins/animation'

export default {
  name:'Preloader',
  mixins:[animation],
  data() {
    return {
      titleSpans: null,
    };
  },
  props:{
    percentage:{
      required: false
    },
    animate:{
     required: false
    }
  },
  mounted(){
    this.titleSpans = split({
    append: true,
    element: this.$refs.preloaderText,
    expression: '<br>'
    });
    //this.onLoaded(this.titleSpans);
    //this.onLoadedHide(this.$refs.preloader)
  },
  watch:{
    animate(){
      if(this.animate){
        this.onLoaded(this.titleSpans,this.$refs.preloader)
      }
    }
  },
  beforeDestroy(){
    //this.onLoadedHide(this.$refs.preloader)
    //console.log('acabou')
  }
}
</script>

<style >
.preloader {
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
.preloader__number {
  font-size: 1.4rem;
}
@media (max-width: 767px) {
.preloader__number {
    font-size: 3rem;
  }
}

.preloader__text span span, .preloader__text {
  font-family: "George X";
  font-size: 5.3rem;
  line-height: 1;
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
</style>