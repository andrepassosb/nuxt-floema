<template>
  <FramePages
    v-if="pageContent"
    :content="pageContent"/>
</template>

<script>
import FramePages from "@/components/FramePages/FramePages.vue";
import db_section from "../static/db_section.json";
import axios from 'axios'
import { mapGetters, mapState } from "vuex";

export default {
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  },
    data() {
    return {
      sections: [],
      pageId: null,
      posts: [],
      pageContent: null
    };
  },
  components:{
    FramePages
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
  mounted(){
    this.sections = db_section.section.content
    this.populatePageContent();
  },
  computed: {
    ...mapState( {
      totalPost: (state) => state.totalPost,
    }),
    ...mapGetters( ["activePostContent"]),
  },
  methods:{
    searchForId(){
      this.sections.forEach(section => {
        if(`/${this.slug}` == section.route){
          this.pageId = section.id
        }
      });
    },
    populatePageContent(){
      this.searchForId()
      this.totalPost.forEach(page => {
        if(page.content.postId == this.pageId){
          this.pageContent = page
        }
      });
    },
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