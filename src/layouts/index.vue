<template>
  <div>
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu
          theme="dark"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          mode="inline"
        >
          <div v-for="item in menus" :key="item">
            <a-menu-item
              v-if="!item.children && !item.meta?.hideMenu"
              :key="item.name"
              @click="handleTo(item.name, `/${item.name}`)"
            >
              <span>{{ item.meta.title }}</span>
            </a-menu-item>
            <a-sub-menu v-if="item?.children?.length > 0 && !item.meta?.hideMenu" :key="item.meta.title">
              <template #title>
                <span>
                  <span>{{ item.meta.title }}</span>
                </span>
              </template>
              <a-menu-item
                :key="items.name"
                v-for="items in item.children"
                v-if="!item.meta.hideMenu"
                @click="handleTo(items.name, `/${items.name}`)"
              >
                {{ items.meta?.title }}
              </a-menu-item>
            </a-sub-menu>
          </div>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          @click="openNotification"
          style="background: #fff; padding-right: 20px; display: flex; justify-content: flex-end"
        >
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

<script setup lang="ts">
  import { h, ref, computed, unref, onMounted, reactive } from 'vue';
  import { useRoute, useRouter, RouteRecordRaw } from 'vue-router';
  import { notification } from 'ant-design-vue';
  import { SmileOutlined } from '@ant-design/icons-vue';
  import useStore from '/@/store/modules/user';

  let collapsed = ref(false);

  const router = useRouter();
  const route = useRoute();

  const menus = ref<readonly RouteRecordRaw[]>();

  onMounted(() => {
    console.log(route);
    console.log(router.options.routes);
    menus.value = router.options.routes;
  });

  const state = useStore();
  const currentPath = computed(() => state.getCurrentPath ?? 'index');

  let selectedKeys = ref([unref(currentPath)]);

  const openKeys = ref([]);

  const handleTo = (name: string, path: string) => {
    state.setCurrentPath(name);
    state.currentPath = name;
    router.push({ path });
  };

  const openNotification = () => {
    notification.open({
      message: '世上会有很多出人意料的事，比如，你以为我会举个例子。',
      icon: h(SmileOutlined, { style: 'color: #108ee9' }),
    });
  };
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
