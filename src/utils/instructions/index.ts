import type { App } from 'vue';

import { setupPreventClick } from './clickStatefrom'

export function setupGlobDirectives(app: App) {
    setupPreventClick(app)
}
