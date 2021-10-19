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
    },
    onLoaded(text,element){

      const vm = this
      let animateOut = GSAP.timeline()
      animateOut.to(text,{
        autoAlpha: 0,
        duration: 1.5,
        ease: 'back.inOut',
        stagger: 0.1,
        y: '100%'
      })
      .to(element,{
        duration : 1.5,
        ease : 'expo.out',
        scaleY  :0,
        transformOrigin: '100% 100%'
      })
      .call(_ => {
        console.log('foi')
        vm.$emit('loaded')
      })
    },
    titleAnimate(text,element){
      const vm = this
      let animateIn = GSAP.timeline( {opacity: 0})
      animateIn.to(text,{
        autoAlpha: 1,
        duration: 3,
        ease: 'back.inOut',
        stagger: 0.1,
        y: '100%'
      })
    }

  }
}