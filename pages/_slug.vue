<template>
  <FramePages
    v-if="dataPost && !loading"
    :content="dataPost"/>
</template>

<script>
import FramePages from "@/components/FramePages/FramePages.vue";
import db_section from "../static/db_section.json";

export default {
    data() {
    return {
      sections: [],
      pageId: null,
      posts: [],
      loading:true,
    };
  },
  components:{
    FramePages
  },
  async asyncData ({ $axios, params, store } ) {
      const slug = params.slug
      const route = `/${slug}`
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
  created(){
    this.loading=false
  },
}
</script>