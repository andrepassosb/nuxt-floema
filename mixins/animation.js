import GSAP from 'gsap'

export default{
  methods:{
    show(element){
      GSAP.set(document.documentElement, {
        backgroundColor: element.getAttribute('data-background'),
        color: element.getAttribute('data-color')
      })
        // GSAP.from(element,{
        //   autoAlpha: 0,
        //   delay:0.5
        // })
    },
    onLoaded(text,element){
      console.log('aqui1')
      const vm = this
      this.animateOut = GSAP.timeline({
        delay:1,
        onComplete() {
          vm.$emit('loaded')
        }
      })
      this.animateOut.to(text,{
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
      },'-=1')
      this.animateOut.call(_ => {
        vm.$emit('loaded')
      })
    },

  }
}
