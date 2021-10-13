<template>
  <div>
    <Preloader 
      v-if="preloader"
      :percentage="percentage"
      :animate="animate"
      @loaded="preloader = false"/>
    <FramePages
      :content="dataPost"/>
  </div>
  <!-- dataPost && !preloader-->
</template>

<script>
import FramePages from "@/components/FramePages/FramePages.vue";
import Preloader from "@/components/Preloader/Preloader_Floema.vue";
import db_section from'../static/db_section.json';

export default {
  name:'HomePage',

  components:{
    FramePages,
    Preloader
  },
  data() {
    return {
      preloader:true,
      percentage:0,
      animate:false
    };
  },
    async asyncData ({ $axios, params, store } ) {
      const route = '/'
      const sections = db_section.section.content
      const totalPost = store.state.totalPost
      const site = 4287
      let dataPost = []
      let get = true
      let id = null
      sections.forEach(section => {
        if(section.route == route){
          id = section.id
          totalPost.forEach(element => {
            if(element.content.postId == id){
              get = false
              dataPost = element
            }
          });
        }
        return true
      });
      if(get){
        dataPost = await $axios.$get(`https://proxy.ulisite.com/api/site/${site}/post/${id}`)
        store.dispatch("pushPostData", dataPost)
      }
      return { dataPost }
  },
  mounted(){
    let time = 0
    let stopTime = 120
    let interval = setInterval(() => {
      time = time + 1
      this.percentage = Math.round(time/stopTime*100)
      if(time == stopTime){
        clearInterval(interval)
        this.animate = true
        //this.preloader = false
      }
    }, 10);
    
  },
}
</script>

