<template>
  <NuxtLink class="home__link" data-animation="button" to="/colletions">
    <span> {{ text }} </span>
    <svg class="home__link__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 60">
      <path stroke="#fff" opacity="0.4" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"></path>
      <path stroke="#fff" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"></path>
    </svg>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      link: ''
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.text = this.content.frameContent.text
    this.link = this.content.frameContent.ref
  },
  methods: {

  }
}
</script>

<style scoped>
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
.home__link__icon {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.home__link {
  font-size: 1.4rem;
}
@media (max-width: 767px) {
  .home__link {
    font-size: 3rem;
  }
}
</style>