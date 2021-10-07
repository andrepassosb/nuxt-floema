<template>
  <div class="preloader">
    <p class="preloader__text">
      The surprise of what is possible to make with a simple and thin thread.
    </p>
    <div class="preloader__number">
      <div class="preloader__number__text"> {{ percentage }} % </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    percentage:{
      required: false
    }
  },
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