<template>
  <div>
    <AboutFloema
      v-if="content.content.postId == 367472"
      :content="content"
    />
    <CollectionsFloema
      v-if="content.content.postId == 366952"
      :content="content"
    />
    <HomeFloema
      v-if="content.content.postId == 366938"
      :content="content"
    />
  </div>
</template>

<script>
import AboutFloema from "@/components/FramePages/About/About_Floema";
import CollectionsFloema from "@/components/FramePages/Collections/Collections_Floema";
import HomeFloema from "@/components/FramePages/Home/Home_Floema";

export default {
  data() {
    return {
      aboutData: null,
    };
  },
  components:{
    AboutFloema,
    CollectionsFloema,
    HomeFloema,
  },
  props:{
    content:{
      required: true
    }
  },
  created(){
  },
  methods:{
  }
}
</script>
