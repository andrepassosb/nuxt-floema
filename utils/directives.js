import Vue from 'vue'
import { calculate, split } from '../utils/text'
import GSAP from 'gsap'
import each from 'lodash/each'

Vue.directive('inViewPort', {
    inserted: (element, binding) => {
        const inView = binding.value.inView

        let observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                console.log('animateIn')
                inView(element)
            }
            else {
                console.log('animateOut')
                inView(element)
            }
        });
        observer.observe(element);
    }
})