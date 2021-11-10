import Vue from 'vue'
import { calculate, split } from '../utils/text'
import GSAP from 'gsap'
import each from 'lodash/each'

Vue.directive('inViewPort', {
    inserted: (element, binding) => {
        const inView = binding.value.inView.function
        const outView = binding.value.inView.function
        if (binding.value.inView.split){
            const times = binding.value.inView.split
            for (let i = 0; i < times; i++) {
                splitElement(element)
            }
        }
        let observer = new IntersectionObserver(([entry]) => {
            if (entry && entry.isIntersecting) {
                console.log('animateIn')
                inView(element)
            }
            else {
                console.log('animateOut')
                outView(element)
            }
        });
        observer.observe(element);
    },
})

function splitElement(element){
    split({
        append: true,
        element: element,
    });
}
