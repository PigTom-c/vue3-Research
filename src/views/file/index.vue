<template>
  <div>
    <a-modal
      v-model:visible="state.visible"
      :title="state.title"
      @ok="onSubmit"
      @cancel="resetFields"
      destroyOnClose
    >
      <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="Name" v-bind="validateInfos.name">
          <a-input v-model:value="modalRef.name" />
        </a-form-item>
        <a-form-item label="Age" v-bind="validateInfos.age">
          <a-input v-model:value="modalRef.age" />
        </a-form-item>
      </a-form>
    </a-modal>
    <a-button class="mb-5" @click="handleAdd">Add</a-button>
    <a-table :dataSource="state.list" :columns="state.columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span @click="handleEdit(record)">
            <a>Edit</a>
          </span>
          <a-divider type="vertical" />
          <a-popconfirm title="Sure to delete?" @confirm="onDelete(record.id)">
            <span>
              <a>Delete</a>
            </span>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import { Form, message } from 'ant-design-vue';
  import { db, Friend } from './dexie/index';

  type List = Friend;

  interface State extends List {
    list: Friend[];
    columns: [];
    visible: boolean;
    title: string;
  }

  const modalRef = reactive({
    name: '',
    age: 18,
  });

  const state: State = reactive({
    list: [],
    columns: [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        sorter: {
          compare: (a, b) => a.id - b.id,
        },
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
      {
        title: 'Action',
        key: 'action',
      },
    ],
    visible: false,
    title: '',
  });

  onMounted(() => {
    initList();
  });

  const labelCol = { span: 4 };
  const wrapperCol = { span: 14 };
  const useForm = Form.useForm;
  const { resetFields, validate, validateInfos } = useForm(
    modalRef,
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
        if (state.title === '新增') {
          // Add the new friend!
          await db.friends.add({
            name: modalRef.name,
            age: modalRef.age,
          });
        } else {
          await onEdit(<number>state.id);
        }
        reset();
        state.visible = false;
      } catch (error) {
        console.log(error);
      }
    });
  };
  const reset = () => {
    resetFields();
    initList();
  };

  const initList = async () => {
    state.list = await db.friends.toArray();
  };

  const handleAdd = () => {
    state.visible = true;
    state.title = '新增';
  };

  const handleEdit = (record: Recordable) => {
    state.visible = true;
    state.title = '编辑';
    state.id = record.id;
    modalRef.name = record.name;
    modalRef.age = record.age;
  };

  const onEdit = async (id: number) => {
    await db.friends.update(id, { name: modalRef.name, age: modalRef.age });
  };

  const onDelete = async (id:number) => {
    await db.friends.delete(id);
    message.success('删除成功!');
    initList();
  };
</script>

<style scoped></style>
