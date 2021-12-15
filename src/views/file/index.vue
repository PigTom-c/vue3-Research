<template>
  <div>
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Name" v-bind="validateInfos.name">
        <a-input v-model:value="state.name" />
      </a-form-item>
      <a-form-item label="Age" v-bind="validateInfos.age">
        <a-input v-model:value="state.age" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
        <a-button class="ml-5" @click="reset">Reset</a-button>
      </a-form-item>
    </a-form>
    <p>{{ state.status }}</p>
    <a-table :dataSource="state.list" :columns="state.columns" />
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import { Form } from 'ant-design-vue';
  import { db, Friend } from './dexie/index';

  type List = Friend
  interface Stete extends List{
    status: string,
    list: Friend[]
  }

  const state:Stete = reactive({
    status: '',
    name: '',
    age: 18,
    list: [],
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
    ],
  });

  onMounted(() => {
    initList()
  })

  const labelCol = { span: 4 };
  const wrapperCol = { span: 14 };
  const useForm = Form.useForm;
  const { resetFields, validate, validateInfos } = useForm(
    state,
    reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      age: [
        {
          required: true,
          message: 'Please input age',
        },
      ],
    })
  );

  const onSubmit = () => {
    validate().then(async (res) => {
      try {
        // Add the new friend!
        const id = await db.friends.add({
          name: state.name,
          age: state.age,
        });

        state.status = `Friend ${state.name}
          successfully added. Got id ${id}`;
        reset()
        initList()
      } catch (error) {
        state.status = `Failed to add
          ${state.name}: ${error}`;
      }
    });
  };
  const reset = () => {
    resetFields();
  };

  const initList = async() => {
    const data:List[] = await db.friends.toArray()
    state.list = data
  }
</script>

<style scoped>
  .skeleton-demo {
    border: 1px solid #f4f4f4;
  }
</style>
