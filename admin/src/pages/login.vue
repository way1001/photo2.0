<template>
  <div class="login-wrap">
    <div class="left">
      <img src="../assets/images/login.jpg">
    </div>
    <div class="right">
      <h2>我想学摄影管理系统</h2>
      <ul class="form-wrap">
        <li>
          <el-input placeholder="请输入管理员账号" maxlength="16" v-model="account" clearable autofocus></el-input>
        </li>
        <li>
          <el-input placeholder="请输入管理员密码" type="password" v-model="password" maxlength="16" clearable></el-input>
        </li>
        <li class="btn">
          <el-button type="primary" @click="login" round>登录</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getKey, login } from "../api/admin";
import { aesEncrypt, aesDecrypt } from "@/utils/utils";

export default {
  data() {
    return {
      aesKey: "",
      account: "",
      password: ""
    };
  },
  created() {
    this.getKey();
    document.onkeydown = () => {
      var key = window.event.keyCode;
      if (key == 13) {
        this.login();
      }
    };
  },
  methods: {
    submit() {
      console.log(123);
    },
    // 获取加密key
    getKey() {
      getKey().then(res => {
        if (res.errno == 0) {
          this.aesKey = res.data;
        } else {
          console.log("获取加密key失败!");
        }
      });
    },
    // 登录
    login() {
      if (!this.account) {
        this.$message.error("账号不能为空");
        return;
      } else if (!this.password) {
        this.$message.error("密码不能为空");
        return;
      }
      let params = {
        account: this.account,
        password: aesEncrypt(this.password, this.aesKey, this.aesKey)
      };
      login(params).then(res => {
        if (res.errno == "0") {
          this.$message.success(res.errmsg);
          setTimeout(() => this.$router.go(-1), 500);
        } else {
          this.$message.error(res.errmsg);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .left {
    width: 500px;
    height: 320px;
    overflow: hidden;
    border-radius: 4px 0 0 4px;
    border: 10px solid #fff;
    img {
      max-width: 100%;
    }
  }
  .right {
    width: 360px;
    height: 320px;
    background: #fff;
    border-radius: 0 4px 4px 0;
    border: 10px solid #fff;
    h2 {
      text-align: center;
      font-size: 20px;
      padding: 20px 0;
      font-weight: bold;
    }
    .form-wrap {
      padding: 0 20px;
      li {
        margin: 20px 0;
        &.btn {
          text-align: right;
        }
      }
    }
  }
}
</style>
