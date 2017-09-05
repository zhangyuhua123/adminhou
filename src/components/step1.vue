<template>
  <div class='employer'>
    <div class="nav">
      <div class='layout'>
        <div class="left">
          <img src="../assets/images/login.png" alt="" class='log'>
          <span>企业管理员中心</span>
        </div>
        <div class="ce">
          <!-- <a href="">企业账号</a>
              <a href="">员工账号管理</a> -->
          <router-link to='/home' active-class="active">企业账号</router-link>
          <!-- <a href="">员工账号管理</a> -->
          <router-link to='/step1' active-class="active">员工账号管理</router-link>
        </div>
        <div class="right">
          <router-link to='/login'>退出</router-link>
        </div>
      </div>
    </div>
    <div class="banner">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="中文名">
          <el-input v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.moblie"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <button type="primary" @click="add1" class="btn1">新增学员</button>
        </el-form-item>
      </el-form>
    </div>
    <el-table ref="multipleTable" :data="tableData3" border tooltip-effect="dark" style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column label="中文姓名" width="120">
        <template scope="scope">
          <button  type="button" class="el-button "  @click='showstudentmessage'><!----><!----><span> {{ scope.row.name }}</span></button>
         <!-- <el-button type="text" size="small" @click='showstudentmessage'> {{ scope.row.name }}</el-button> -->
        </template>
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="mail" label="邮箱" width="120">
      </el-table-column>
      <el-table-column prop="contract" label="合约编号" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="maincontract" label="主合约编号" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="productname" label="产品名称" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="count" label="总堂数" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="used" label="已使用" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="surplus" label="剩余" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="constractstart" label="合约开始" show-overflow-tooltip>
      </el-table-column>
      <el-table-column prop="constractend" label="合约结束" show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="修改合约">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">修改合约</el-button>
        </template>
      </el-table-column>
    </el-table>
     <div class="block">
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div> 
     
    <!--学员信息  -->
    <div class="for1 layer-anim layui-layer" v-if='isshowstudentmessage'>
      <div class="el-message-box__header">
        <div class="el-message-box__title">学员信息</div>
        <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="showclose">
          <i class="el-message-box__close el-icon-close"></i>
        </button>
      </div>
      <div class="el-message-box__content">
        <p>
          <span>手机号:</span>
          <input type="text" value='1111' style="width:200px;height:20px;">
        </p>
        <p>
          <span>邮箱:</span>
          <input type="email" value='1032@qq' style="width:200px;height:20px;">
        </p>
        <p>
          <span>中文名:</span>
          <input type="text" value='臧天朔' style="width:200px;height:20px;">
        </p>
        <p>
          <span>性别:</span>
          <input type="radio" value='男' name='ss'>男
          <input type="radio" value='女' name='ss'>女</p>
      </div>
  
      <div class="el-message-box__btns">
        <input type="button" class="el-button" value="取消" @click="cancel">
        <input type="button" value="确定" class="el-button el-button--default el-button--primary " @click='confirm'>
      </div>
    </div>
    <!--新增学员  -->
    <div class='alert layer-anim layui-layer' v-if='isaddnewstudents'>
      <div class="for2">
        <div class="el-message-box__header">
          <div class="el-message-box__title">新增学员</div>
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
            <span>中文姓名:</span>
            <input type="text" value='臧天朔' style="width:200px;height:35px;">
          </p>
          <p>
            <span>性别:</span>
            <input type="radio" style='height:13px' value='男' name='ss' checked>男
            <input type="radio" style='height:13px' value='女' name='ss'>女
          </p>
          <div style="width:410px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
          <div>
            <input type="checkbox" name="" id="" v-model='checked'>新建合约</div>
        </div>
  
      </div>
      <div class="for3" v-show="show">
        <div class="el-message-box__content">
          <p>
            <span>主合约:</span>
            <el-select v-model="value" placeholder="请选择合约">
              <el-option v-for="item in options" :key="item.value" :label="item.label" v-model="item.value">
              </el-option>
            </el-select>
              <div class="description">类型:1对1  剩余堂数:30堂 </div>
          </p>
  
          <p>
            <span>冲堂课数:</span>
            <input id="min" name="" type="button" value="-" style="width:62px;" @click='min' class="el-input__inner" />
            <input id="text_box" name="goodnum" type="text" style="width:66px;" v-model="number" class="el-input__inner" />
            <input id="add" name="" type="button" value="+" style="width:62px;" @click='add2' class="el-input__inner" />
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
      <div class="el-message-box__btns">
        <input type="button" class="el-button" value="取消" @click="cancel">
        <input type="button" value="确定" class="el-button el-button--default el-button--primary " @click="confirm">
      </div>
    </div>
    <!--修改合约  -->
    <div class="for4 layer-anim layui-layer" v-show="iscontraction">
      <div class="el-message-box__header">
        <div class="el-message-box__title">修改合约</div>
        <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="showclose">
          <i class="el-message-box__close el-icon-close"></i>
        </button>
      </div>
      <div class="el-message-box__content">
        <p >
          <span>主合约:</span>
          <el-select v-model="value" placeholder="请选择合约">
            <el-option v-for="item in options" :key="item.value" :label="item.label" v-model="item.value">
            </el-option>
          </el-select>
          <div class="description">类型:1对1、1对2、1对3、1对4、小班制、大讲堂45分钟 </div>
          <div  class="description">剩余:30堂</div>
        </p>
  
        <p>
          <span>充堂课数:</span>
          <!-- <el-input-number v-model="num1" @change="handleChange" :min="0" :max="10"></el-input-number> -->
          <input id="min" name="" type="button" value="-" style="width:62px;" @click='min' class="el-input__inner" />
          <input id="text_box" name="goodnum" type="text" style="width:66px;" v-model="number" class="el-input__inner" />
          <input id="add" name="" type="button" value="+" style="width:62px;" @click='add2' class="el-input__inner" />
        </p>
        <p class="block">
          <span class="demonstration">合约开始</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
        </p>
        <p class="block">
          <span class="demonstration">合约结束</span>
          <el-date-picker v-model="value3" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
          </el-date-picker>
        </p>
  
      </div>
      <div class="el-message-box__btns">
        <input type="button" class="el-button" value="取消" @click="cancel">
        <input type="button" value="确定" class="el-button el-button--default el-button--primary " @click="confirm">
      </div>
    </div>
  
  </div>
</template>
<style scoped>
@import "../assets/css/step1.css";
</style>

<script>
export default {
  data() {
    return {
      number: 3,
      iscontraction: 0,
      isaddnewstudents: 0,
      checked: '',
      isshowstudentmessage: 0,
      addstudent: 0,
      formInline: {
        user: '',
        moblie: ''
      },
      tableData3: [{
        name: '张三',
        phone: '1888888888',
        mail: '1024909699@qq.com',
        contract: '11111',
        maincontract: '33333',
        productname: '企业产品',
        count: '70',
        used: '44',
        surplus: '76',
        constractstart: '2017-9-1',
        constractend: '2017-9-1'

      },{
        name: '张三',
        phone: '1888888888',
        mail: '1024909699@qq.com',
        contract: '11111',
        maincontract: '33333',
        productname: '企业产品',
        count: '70',
        used: '44',
        surplus: '76',
        constractstart: '2017-9-1',
        constractend: '2017-9-1'

      }],
      multipleSelection: [],
      num1: 0,
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
      value3: ''

    }

  },
  computed: {
    show() {
      if (this.checked) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.iscontraction = 1;
    },
    add() { },
    showclose() {
      this.isshowstudentmessage = 0;
      this.isaddnewstudents = 0;
      this.iscontraction = 0;
      // this.isaddnewstudent=0
    },
    showstudentmessage() {
      // alert(1);
      this.isshowstudentmessage = 1;
    },

    cancel() {
      this.isshowstudentmessage = 0;
      this.isaddnewstudents = 0;
      this.iscontraction = 0;
    },

    confirm() {
      this.isshowstudentmessage = 0;
      this.isaddnewstudents = 0;
      this.iscontraction = 0;
    },

    handleChange(value) {
      console.log(value);
    },
    onSubmit() {

    },
    add1() {
      this.isaddnewstudents = 1;
      // 阻止默认事件
      event.preventDefault();
    },
    min() {
      this.number--;
      if (this.number < 0) {
        this.number = 0;

      }

    },
    add2() {
      this.number++;
    }
  }
}
</script>