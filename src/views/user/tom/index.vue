<template>
  <div>
    <div class="flex flex-row w-full">
      <div class="w-1/6">
        <Card title="需求池">
          <template #extra><Tag color="blue">月</Tag></template>
          <draggable class="list-group" :list="state.list1" group="people" itemKey="name">
            <template #item="{ element, index }">
              <div class="list-group-item cursor-move">
                <Tag color="blue">需求</Tag>
                {{ element.name }} {{ index }}
                <Divider />
              </div>
            </template>
          </draggable>
        </Card>
      </div>

      <div class="w-1/6 ml-10">
        <Card title="开发中">
          <template #extra><Tag color="blue">月</Tag></template>
          <draggable class="list-group" :list="state.list2" group="people" itemKey="name">
            <template #item="{ element, index }">
              <div class="list-group-item cursor-move">
                <Tag color="orange">开发中</Tag>
                {{ element.name }} {{ index }}
                <Divider />
              </div>
            </template>
          </draggable>
        </Card>
      </div>
      <div class="w-1/6 ml-10">
        <Card title="已完成">
          <template #extra><Tag color="blue">月</Tag></template>
          <draggable class="list-group" :list="state.list3" group="people" itemKey="name">
            <template #item="{ element, index }">
              <div class="list-group-item cursor-move">
                <Tag color="red">已完成</Tag>
                {{ element.name }} {{ index }}
                <Divider />
              </div>
            </template>
          </draggable>
        </Card>
      </div>
      <div class="w-1/6 ml-10">
        <Card title="已验收">
          <template #extra><Tag color="blue">月</Tag></template>
          <draggable class="list-group" :list="state.list4" group="people" itemKey="name">
            <template #item="{ element, index }">
              <div class="list-group-item cursor-move">
                <Tag color="green">已验收</Tag>
                {{ element.name }} {{ index }}
                <Divider />
              </div>
            </template>
          </draggable>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { Divider, Card, Tag } from 'ant-design-vue';
  import draggable from 'vuedraggable';

  const state = reactive({
    list1: [
      { name: '预约表单页面，能填写预约相关信息', id: 1 },
      { name: '促销活动页面，包含促销广告展示', id: 2 },
      { name: '商品列表，需要一个到货提醒功能', id: 3 },
      { name: '商品需要一个评价功能', id: 4 },
    ],
    list2: [
      { name: '商品图片需要提供放大镜', id: 5 },
      { name: '订单需要提供删除到回收站', id: 6 },
      { name: '用户头像上传，需要支持裁剪', id: 7 },
    ],
    list3: [
      { name: '据说Vue3.2发布了，setup啥时候支持？', id: 12 },
      { name: '采集管理-编目管理-:添加任务资料页面', id: 22 },
      { name: '采集管理-采集看板-离线采集统计:页面（按日，周，月，季，年）', id: 32 },
      { name: '采集管理-编目管理-:展示页面', id: 42 },
    ],
    list4: [
      { name: '采集管理-编目管理-:编辑和新增子目录', id: 52 },
      { name: '采集管理-编目管理-:删除子目录（做二次校验）', id: 62 },
    ],
  });
</script>

<style scoped></style>
