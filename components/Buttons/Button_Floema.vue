<template>
  <a class="home__link" data-animation="button" :href="link">
    <span> {{ text }} </span>
    <svg class="home_link_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 60">
      <path stroke="#fff" opacity="0.4" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"></path>
      <path stroke="#fff" fill="none" d="M144,0.5c79.25,0,143.5,13.21,143.5,29.5S223.25,59.5,144,59.5S0.5,46.29,0.5,30S64.75,0.5,144,0.5z"></path>
    </svg>
  </a>
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