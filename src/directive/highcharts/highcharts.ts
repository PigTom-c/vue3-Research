import { h, ref, Ref, toRefs, watch, onMounted, onUnmounted, defineComponent } from 'vue';
import Highcharts, { Chart, Options } from 'highcharts';

const vueHighcharts = defineComponent({
  name: 'VueHighcharts',
  props: {
    type: {
      type: String as PropType<keyof typeof Highcharts>,
      default: 'chart',
    },
    options: {
      type: Object as PropType<Options>,
      required: true,
    },
    redrawOnUpdate: {
      type: Boolean,
      default: true,
    },
    oneToOneUpdate: {
      type: Boolean,
      default: true,
    },
    animateOnUpdate: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const chartRef = ref(null);
    const chart: Ref<Chart | null> = ref(null);
    const { options } = toRefs(props);
    if (options?.value) {
      watch(
        options,
        (newValue) => {
          if (chart.value === null) {
            (chart.value as unknown as Ref<Chart>).value.update(
              newValue,
              props.redrawOnUpdate,
              props.oneToOneUpdate,
              props.animateOnUpdate
            );
            emit('updated');
          }
        },
        { deep: true }
      );

      onMounted(() => {
        // 1. chart不是一个ref
        // 2. chart(ref) = Highcharts.chart('container', {options} )
        // 3. 回调 证明此时此刻的表格已经渲染完成
        chart.value = (Highcharts as any)[props.type](chartRef.value, options.value, () => {
          emit('rendered');
        });
      });
      onUnmounted(() => {
        if (chart?.value) {
          (<Ref<Chart>>(chart as unknown)).value.destroy();
        }
        emit('destroyed');
      });
    } else {
      console.error('请传递渲染函数组件必须的参数');
    }
    return { chartRef, chart };
  },
  render() {
    return h('div', { class: 'vue-highcharts', ref: 'chartRef' });
  },
});

export default vueHighcharts;
