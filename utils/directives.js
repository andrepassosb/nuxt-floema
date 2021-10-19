import Vue from 'vue'
import { split } from '../utils/text'

Vue.directive('observer', {
  inserted: (el,binding) => {
    let observer = new IntersectionObserver(([entry]) => {
        const text = el.textContent.replace(/&nbsp;/g,"<br/>")
        const titleSpans = split({
            append: true,
            element: el,
            expression: '&nbsp;'
            });
        const animateIn = binding.value[0]
        if (entry && entry.isIntersecting) {
            animateIn(titleSpans,el)
            console.log('animateIn')
        }
        else{
            console.log('animateOut')
        }
      });
      observer.observe(el);
  }
})