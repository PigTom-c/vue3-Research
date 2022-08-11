<script lang="tsx">
  import type { PropType } from 'vue';
  import { Result, Button } from 'ant-design-vue';
  import { defineComponent, ref, computed, unref } from 'vue';
  import { ExceptionEnum } from '/@/enums/exceptionEnum';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';

  interface Fn<T = any, R = T> {
    (...arg: T[]): R;
  }

  interface MapValue {
    title: string;
    subTitle: string;
    btnText?: string;
    icon?: string;
    handler?: Fn;
    status?: string;
  }

  export default defineComponent({
    name: 'ErrorPage',
    props: {
      // 状态码
      status: {
        type: Number as PropType<number>,
        default: ExceptionEnum.PAGE_NOT_FOUND,
      },

      title: {
        type: String as PropType<string>,
        default: '',
      },

      subTitle: {
        type: String as PropType<string>,
        default: '',
      },

      full: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props) {
      const statusMapRef = ref(new Map<string | number | undefined, MapValue>());

      const { query } = useRoute();
      const go = useGo();

      const getStatus = computed(() => {
        const { status: routeStatus } = query;
        const { status } = props;
        return Number(routeStatus) || status;
      });

      const getMapValue = computed((): MapValue => {
        return unref(statusMapRef).get(unref(getStatus)) as MapValue;
      });

      const backHomeI18n: string = '返回首页';

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_ACCESS, {
        title: '403',
        status: `${ExceptionEnum.PAGE_NOT_ACCESS}`,
        subTitle: '抱歉，您无权访问此页面。',
        btnText: backHomeI18n,
      });

      unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_FOUND, {
        title: '404',
        status: `${ExceptionEnum.PAGE_NOT_FOUND}`,
        subTitle: '抱歉，您访问的页面不存在。',
        btnText: backHomeI18n,
        handler: () => go(),
      });

      unref(statusMapRef).set(ExceptionEnum.ERROR, {
        title: '500',
        status: `${ExceptionEnum.ERROR}`,
        subTitle: '抱歉，服务器报告错误。',
        btnText: backHomeI18n,
      });

      return () => {
        const { title, subTitle, btnText, icon, handler, status } = unref(getMapValue) || {};
        return (
          <Result
            status={status as any}
            title={props.title || title}
            sub-title={props.subTitle || subTitle}
          >
            {{
              extra: () =>
                btnText && (
                  <Button type="primary" onClick={handler}>
                    {() => btnText}
                  </Button>
                ),
              icon: () => (icon ? <img src={icon} /> : null),
            }}
          </Result>
        );
      };
    },
  });
</script>
<style></style>
