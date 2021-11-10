import GSAP from 'gsap'
import each from 'lodash/each'
import { calculate, split } from '../utils/text'

export default {
    methods: {
        show(element) {
            GSAP.set(document.documentElement, {
                backgroundColor: element.getAttribute('data-background'),
                color: element.getAttribute('data-color')
            })
            GSAP.from(element, {
                autoAlpha: 0,
                delay: 0.5
            })
        },
        onLoaded(text, element) {

            const vm = this
            let animateOut = GSAP.timeline()
            animateOut.to(text, {
                autoAlpha: 0,
                duration: 1.5,
                ease: 'back.inOut',
                stagger: 0.1,
                y: '100%'
            })
                .to(element, {
                    duration: 1.5,
                    ease: 'expo.out',
                    scaleY: 0,
                    transformOrigin: '100% 100%'
                })
                .call(_ => {
                    console.log('foi')
                    vm.$emit('loaded')
                })
        },

        // Animação dos Titulos quando esta na view port
        titleAnimateIn(element) {
            const elementLinesSpan = element.querySelectorAll('span span')
            const elementLines = calculate(elementLinesSpan)
            let timeline = GSAP.timeline({
                delay: 0.5
            })
            console.log('element',element)
            // console.log('elementLines',elementLines)
            // console.log('elementLinesSpan',elementLinesSpan)
            timeline.set(element, {
                autoAlpha: 1
            })
            each(elementLines, (line, index) => {
                timeline.fromTo(line, {
                    y: '100%'
                }, {
                    delay: index * 0.2,
                    duration: 1.5,
                    stagger: 0.2,
                    y: '0%'
                }, 0)
            })
        },
        titleAnimateOut(element) {
            GSAP.set(element, {
                autoAlpha: 0
            })
        },
        // Animação dos paragrafos quando esta na view port
        ParagraphAnimateIn(element) {
            const elementLinesSpan = element.querySelectorAll('span')
            const elementLines = calculate(elementLinesSpan)
            let timeline = GSAP.timeline({
                delay: 0.5
            })
            timeline.set(element, {
                autoAlpha: 1
            })
            each(elementLines, (line, index) => {
                timeline.fromTo(line, {
                    autoAlpha: 0,
                    y: '100%'
                }, {
                    autoAlpha: 1,
                    delay: index * 0.2,
                    duration: 1.5,
                    ease: 'expo.out',
                    y: '0%'
                }, 0)
            })
        },
        ParagraphAnimateOut(element) {
            GSAP.set(element, {
                autoAlpha: 0
            })
        },
        HighlightAnimateIn(element){
            let timeline = GSAP.timeline({
                delay: 0.5
            })
            timeline.set(element, {
                autoAlpha: 1
            })
            timeline.fromTo(element, {
                autoAlpha: 0,
                scale:1.5
            }, {
                autoAlpha:1,
                duration:1.5,
                ease: 'expo.out',
                scale:1
            }, 0)
            // let timelineIn = GSAP.timeline({
            //     delay:0.5
            // })
            // timelineIn.fromTo(element,{
            //     autoAlpha:0,
            //     scale:1.5
            // }),{
            //     autoAlpha:1,
            //     duration:1.5,
            //     ease: 'expo.out',
            //     scale:1
            // }
        },
        HighlightAnimateOut(element) {
            GSAP.set(element, {
                autoAlpha: 0
            })
        },
    }
}