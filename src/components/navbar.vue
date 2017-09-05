<template>
  <div class="tanchukuang">
    <div class='alert'>
      <div class="for2">
        <div class="el-message-box__header">
          <div class="el-message-box__title">学员信息</div>
          <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="showclose">
            <i class="el-message-box__close el-icon-close"></i>
          </button>
        </div>
        <div class="el-message-box__content">
          <p>
            <span>手机号:</span>
            <input type="text" value='1111' style="width:200px;height:35px;">
          </p>
          <p>
            <span>邮箱:</span>
            <input type="email" value='1032@qq' style="width:200px;height:35px;">
          </p>
          <p>
            <span>中文名:</span>
            <input type="text" value='臧天朔' style="width:200px;height:35px;">
          </p>
          <p>
            <span>性别:</span>
            <input type="radio" style='height:13px' value='男' name='ss'>男
            <input type="radio" style='height:13px' value='女' name='ss'>女
          </p>
          <div style="width:410px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
          <div>
            <input type="checkbox" name="" id="">新建合约</div>
        </div>
  
      </div>
      <div class="for3">
        <div class="el-message-box__content">
          <p>
            <span>主合约:</span>
            <el-select v-model="value" placeholder="请选择合约">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </p>
  
          <p>
            <span>冲堂课数:</span>
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
          </p>
          <p class="block">
            <span class="demonstration">合约开始</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
            </el-date-picker>
          </p>
          <p class="block">
            <span class="demonstration">合约结束</span>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
            </el-date-picker>
          </p>
          
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      options: [{
        value: '选项1',
        label: '主合约'
      }, {
        value: '选项2',
        label: '次合约'
      }],

      value: '',
      value1: '',

    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    showclose() {

    }
  }
}
</script>
<style>
.alert {
  box-shadow: 0px 10px 5px #000;
}

.for2 {
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  width: 414px;
  border-radius: 3px;
  height: 310px;
  font-size: 16px;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: fixed;
  top: 30%;
  left: 40%;
  z-index: 99;
  /* box-shadow:0px 10px 5px #000; */
}

.for2 p input {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  color: #1f2d3d;
  font-size: inherit;
  height: 36px;
  line-height: 1;
  outline: 0;
  padding: 3px 10px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1)
}

.for3 {
  text-align: left;
  display: inline-block;
  vertical-align: middle;
  background-color: #fff;
  width: 414px;
  border-radius: 3px;
  height: 310px;
  font-size: 16px;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: fixed;
  top: 60%;
  left: 40%;
  z-index: 99;
}

.el-message-box__title {
  text-align: center;
  font-size: 18px;
  color: #e84c4b;
  font-weight: 300;
}

.for2 p {
  margin-left: 20px;
  margin-bottom: 20px;
}

.for2 span {
  display: inline-block;
  text-align: right;
  width: 80px;
}

.el-table_1_column_2 .el-button--small {
  background: #fff;
  color: #696969;
}

.for3 span {
  display: inline-block;
  text-align: right;
  width: 80px;
}

.for3 p {
  margin-left: 20px;
  margin-bottom: 20px;
}

.for3 .el-input__inner {
  width: 204px;
  height: 35px;
}

.el-message-box__content {
  padding: 22px 20px;
  color: #48576a;
  font-size: 14px;
  position: relative;
}
</style>

