import GSAP from 'gsap'

export default{
  methods:{
    show(element){
      GSAP.set(document.documentElement, {
        backgroundColor: element.getAttribute('data-background'),
        color: element.getAttribute('data-color')
      })
        GSAP.from(element,{
          autoAlpha: 0,
          delay:0.5
        })
    }
  }
}