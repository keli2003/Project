<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- 用户的表单信息 -->
      <el-form
        ref="form"
        :rules="relus"
        :inline="true"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="form.gender" placeholder="请选择">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" prop="brith">
          <el-date-picker
            v-model="form.brith"
            type="date"
            placeholder="请选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input placeholder="请输入地址" v-model="form.address"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="btn">
      <el-button type="primary" @click="dialogVisible = true">
        + 新增
      </el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getUser } from "../api";
export default {
  name: "User",

  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        gender: "",
        brith: "",
        address: "",
      },
      relus: {
        name: [
          {
            required: true,
            message: "请输入姓名",
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
          },
        ],
        gender: [
          {
            required: true,
            message: "请选择性别",
          },
        ],
        brith: [
          {
            required: true,
            message: "请选择出生日期",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
          },
        ],
      },
      tableData: [],
      // from: [
      //   {
      //     model: "name",
      //     label: "姓名",
      //     type: "input",
      //   },
      //   {
      //     model: "age",
      //     label: "年龄",
      //     type: "input",
      //   },
      //   {
      //     model: "gender",
      //     label: "性别",
      //     type: "select",
      //     opts: [
      //       {
      //         label: "男",
      //         value: 1,
      //       },
      //       {
      //         label: "女",
      //         value: 0,
      //       },
      //     ],
      //   },
      //   {
      //     model: "birth",
      //     label: "出生日期",
      //     type: "date",
      //   },
      //   {
      //     model: "address",
      //     label: "地址",
      //     type: "input",
      //   },
      // ],
    };
  },
  methods: {
    // 提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        // console.log(valid);
        if (valid) {
          //当校验通过的时候，后续对表单数据的处理
          console.log(this.form, "form");

          //关闭弹窗之前先清除表单里面的数据
          this.$refs.form.resetFields();

          // 关闭弹窗
          this.dialogVisible = false;
        }
      });
    },
    handleClose() {
      // 弹窗关闭的时候会触发
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      // 点击取消按钮的时候
      this.handleClose();
    },
  },
  mounted() {
    // 获取列表的数据
    getUser().then(({ data }) => {
      console.log(data);
    });
  },
};
</script>

<style>
</style>