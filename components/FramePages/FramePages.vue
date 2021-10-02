<template>
  <div>
    <AboutFloema
      v-if="content.content.route == '/about-floema'"
      :content="content"
    />
    <CollectionsFloema
      v-if="content.content.route == '/20210919366952'"
      :content="content"
    />
    <HomeFloema
      v-if="content.content.route == '/20211002366938'"
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
