<template>
  <div class="home__titles">
    <template
      v-for="text,index in texts"
    >
      <div
        :key="`${index}-label`"
        class="home__titles__label">
        <div class="home__titleslabel__text"> {{ text.title }}</div>
      </div>
      <div
        :key="`${index}-title`"
        class="home__titles__title">
        <div class="home__titles title__text"> {{ text.label }}</div>
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