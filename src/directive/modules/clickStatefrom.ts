import { App } from 'vue';
import type { Directive, DirectiveBinding } from 'vue';

const preventClick: Directive = {
    beforeMount(el, binding: DirectiveBinding<any>) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, 1000)
            }
        })
    }
}

export default preventClick
