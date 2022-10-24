// export { factory } from "./factory"
import webkitDep from '/@/views/test/data/webkit.json';

export const getPieOptions = () => {
  return {
    title: {
      text: 'Traffic Sources',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
      {
        name: 'Traffic Sources',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '60%'],
        data: [
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 234, name: 'Ad Networks' },
          { value: 135, name: 'Video Ads' },
          { value: 1548, name: 'Search Engines' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
};

export const getGraphOptions = () => {
  return {
    // grid: {
    //   bottom: '50%', //距离下边距
    // },
    legend: {
      type: 'scroll',
      data: [
        {
          name: 'kfc',
          icon: 'circle',
          textStyle: {
            color: 'red',
          },
        },
        'McDonalds',
        'apple',
        'coffee',
        'Other',
        'kfc18',
      ],
      align: 'left',
      itemGap: 30,
      itemWidth: 22,
      itemHeight: 22,
      padding: [
        0, // 上
        10, // 右
        5, // 下
        0, // 左
      ],
      lineStyle: {
        color: 'pink',
      },
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
          width: 500,
          // height: 100,
          color: 'white',
          shadowColor: 'rgba(88,177,255,0.5)',
          backgroundColor: 'rgba(4,46,101,0.7)',
          shadowBlur: 6,
          borderColor: 'rgba(16,71,134,0.7)',
          borderWidth: 1,
          borderRadius: 5,
          shadowOffsetY: 5,
          position: 'insideTopLeft',
          overflow: 'break',
          padding: [10, 10, 10, 10],
          formatter: '{b|{b}}' + '\n\n' + ' {c|{c}}',
          rich: {
            b: {
              color: 'white',
              fontSize: 16,
              lineHeight: 30,
              fontWeight: 600,
            },
            c: {
              color: 'white',
              lineHeight: 20,
            },
          },
        },
        draggable: true,
        data: webkitDep.nodes,
        categories: webkitDep.categories,
        force: {
          // 边的两个节点之间的距离
          edgeLength: 5,
          // 节点之间的斥力因子。
          repulsion: 20,
          // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
          gravity: 0.2,
        },
        edges: webkitDep.links,
      },
    ],
  };
};
