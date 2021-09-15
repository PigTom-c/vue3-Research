declare module '*.vue' {
    import { DefineComponent, FunctionalComponent } from "vue";
    // const component: ReturnType<typeof defineComponent> | FunctionalComponent;
    const component: DefineComponent<{}, {}, any>
    export default component
}
