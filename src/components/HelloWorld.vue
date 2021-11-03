<template>
  <div>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
          <a-menu-item key="index" @click="handleTo('index','/')">
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="check" @click="handleTo('check','/check')">
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
            <span>
              <span>User</span>
            </span>
            </template>
            <a-menu-item key="tom" @click="handleTo('tom','/tom')">Tom</a-menu-item>
            <a-menu-item key="bill" @click="handleTo('bill','/bill')">Bill</a-menu-item>
            <a-menu-item key="alex" @click="handleTo('alex','/alex')">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
            <span>
              <span>Team</span>
            </span>
            </template>
            <a-menu-item key="development" @click="handleTo('development','/development')">开发部</a-menu-item>
            <a-menu-item key="testing" @click="handleTo('testing','/testing')">测试部</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="file" @click="handleTo('file','/file')">
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header @click="openNotification" style="background: #fff;padding-right: 20px;display: flex;justify-content: flex-end;" >
          hello someone!
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '740px' }">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>

</template>

<script setup>
import { h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { notification } from 'ant-design-vue';
import { SmileOutlined } from '@ant-design/icons-vue';
import axios from 'axios';
let collapsed = ref(false)


const router = useRouter()
const route = useRoute()

let selectedKeys = ref(['index'])

  const handleTo = (name,path) => {
    router.push({ path })
  }

  const openNotification = () => {
    notification.open({
      message: '世上会有很多出人意料的事，比如，你以为我会举个例子。',
      icon: h(SmileOutlined, { style: 'color: #108ee9' }),
    });
  }
</script>

<style scoped>
  .header {

  }
  #components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  .site-layout-background {
    background: #fff;
  }
</style>
