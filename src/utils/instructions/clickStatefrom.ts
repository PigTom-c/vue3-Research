import { App } from 'vue';
import type { Directive, DirectiveBinding } from 'vue';

const preventClick: Directive = {
    beforeMount(el, binding: DirectiveBinding<any>) {
        el.addEventListener('click', () => {
            console.log('111sss')
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, 1000)
            }
        })
    }
}

export function setupPreventClick(app: App) {
    app.directive('preventClick', preventClick);
}

// const preventClick = {
//     install(Vue) {
//         // 防止重复点击
//         Vue.directive('preventClick', {
//             inserted(el, binding) {
//                 el.addEventListener('click', () => {
//                     if (!el.disabled) {
//                         el.disabled = true
//                         setTimeout(() => {
//                             el.disabled = false
//                         }, 1000)
//                     }
//                 })
//             }
//         })
//     }
// }

export default preventClick
