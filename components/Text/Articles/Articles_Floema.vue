<template>
    <article
      class="collections__article"
      :class="index === 1 ? 'collections__article--active' : 'collections__article--disable'"
    >
      <!-- <article
        :class="'collections__article' [index === 0 ? 'collections_article--active' : '']"
      > -->
      <h2
        class="collections__article__title">
        <span
          v-html="title"
          class="collections__article__title__text"> 
      </span>
      </h2>
      <p 
        class="collections__article__description"
        v-html="text" >
      </p>
    </article>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      title: ""
    };
  },
  props:{
    content:{
      required: true
    },
    index:{
      type: Number,
      required: true
    }
  },
  created(){
    console.log(this.content)
    this.populateGallery()
  },
  methods: {
    populateGallery(){
      this.content.frameContent.forEach(item => {
        if(item.frameType == "title"){
          this.title = item.frameContent
        }
        if(item.frameType == "text"){
          this.text = item.frameContent
        }
      });
    }
  }
}
</script>

<style scope>
.collections__article__description {
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;
}
@media (max-width: 767px) {
  .collections__article__description {
    font-size: 2.8rem;
  }
}
.collections__article__title {
  font-family: "George X";
  font-size: 6rem;
}

.collections__article {
  width: 50rem;
  bottom: 8rem;
  left: 8rem;
  position: absolute;
}

.collections__article__title {
  line-height: 1;
  margin-bottom: 1.5rem;
  overflow: hidden;
}

.collections__article__title__text {
  display: inline-block;
  transform: translateY(100%);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.collections__article--active .collections__article__title__text {
  transform: translateY(0);
  transition-delay: 1s;
}
.collections__article--disable  {
    visibility: hidden;
    opacity: 0;
}

.collections__article__description span {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}
.collections__article__description span span {
  transform: translateY(100%);
  transition: transform 1s cubic-bezier(0.77, 0, 0.175, 1);
}
.collections__article--active .collections__article__description span span {
  transform: translateY(0);
}
.collections__article--active .collections__article__description span {
  transition-delay: 1.05s;
}

</style>