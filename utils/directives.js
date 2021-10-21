import Vue from 'vue'
import { calculate, split } from '../utils/text'
import GSAP from 'gsap'

Vue.directive('observer', {
    inserted: (element, binding) => {
        console.log(element)
        split({
            append: true,
            element: element,
        });
        split({
            append: true,
            element: element,
        });
        const elementLinesSpan = element.querySelectorAll('span span')
        const elementLines = calculate(elementLinesSpan)
        console.log(elementLines)
        let observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                GSAP.set(element, {
                    autoAlpha:1
                })
                GSAP.fromTo(elementLines, {
                    y:'100%'
                }, {
                    delay:0.5,
                    duration: 1.5,
                    stagger:0.2,
                    y:'0%'
                })
                console.log('animateIn')
            }
            else {
                GSAP.set(element, {
                    autoAlpha: 0
                })
                console.log('animateOut')
            }
        });
        observer.observe(element);
    }
})