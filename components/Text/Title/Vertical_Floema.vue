<template>
  <div class="home__titles">
    <template
      v-for="text,index in texts"
    >
      <div
        :key="`${index}-label`"
        class="home__titles__label">
        <div class="home__titles__label__text" > {{ text.title }}</div>
      </div>
      <div
        :key="`${index}-title`"
        class="home__titles__title">
        <div class="home__titles__title__text"> {{ text.label }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: []
    };
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
    this.populateTitle()
  },
  methods: {
    populateTitle(){
      if(this.content.frameType == "title"){
        let arrayText = this.content.frameContent.split(',')
        for (let i = 0; i < arrayText.length; i++) {
          const element = arrayText[i];
          if(i % 2 === 0 ){
            this.texts.push(
              {label: element,
              title:arrayText[i+1]
              })
          }else{
          }
        }
      }
    }
  }
}
</script>

<style>
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
</style>