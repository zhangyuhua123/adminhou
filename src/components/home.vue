<template>
    <div class="home" style="background:#f4f4f4">
        <div class="nav">
            <div class='layout'>
                <div class="left">
                    <img src="../assets/images/login.png" alt="" class='log'>
                    <span>企业管理员中心</span>
                </div>
                <div class="ce">
                    <!-- <a href="">企业账号</a> -->
                    <router-link to='/home' class="router-link-active">企业账号</router-link>
                    <!-- <a href="">员工账号管理</a> -->
                    <router-link to='/step1' >员工账号管理</router-link>
                </div>
                <div class="right">
                    <!-- <a href="">退出</a> -->
                    <router-link to='/login'>退出</router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="form-horizontal layout " style="margin-top:30px;">
                <fieldset id="basicInformation" style="position:relative">
                    <div id="legend" style="margin-left: 10px;">
                        <span class="basicinformation">企业基本信息</span>
                        <div style="display:inline-block" class="modification">
                            <span class="btn btn-default" @click="changepassword"> 修改密码</span>
                            <span class="btn btn-default" @click="showziliao"> 修改资料</span>
                        </div>
                        <hr>
                    </div>
                    <table id="tab" style="width: 110%">
                        <tr>
                            <th>客户名称：</th>
                            <Td>外联出国</Td>
                            <th>客户账号：</th>
                            <Td>99999878@vipabc.corporate.com</Td>
                        </tr>
                        <tr>
                            <th>企业全称：</th>
                            <Td>外联出国</Td>
                            <th>客户编号:</th>
                            <Td>99999878 </Td>
    
                        </tr>
                        <tr>
                            <th>企业联系人：</th>
                            <Td>Angela Chen</Td>
                            <th>tutorabc顾问:</th>
                            <Td> ylene</Td>
                        </tr>
                        <tr>
                            <th>联系人电话：</th>
                            <Td>3300</Td>
                            <th>顾问电话：</th>
                            <Td>77788898989898</Td>
                        </tr>
                    </table>   
                </fieldset>
                <fieldset class="contractinformation" style="margin-top:30px;background:#fff;position:relative">
                    <div id="legend" style="margin-left: 10px;">
                        <span class="basicinformation">企业合约信息 1</span>
                        <hr>
                    </div>
                    <div class="progressbar">
                        <el-progress type="circle" :percentage="60"></el-progress>
                        <table style="width: 100%" class="circleth">
                            <tr>
                                <th>合约总堂数:</th>
                                <Td>90</Td>
                            </tr>
                            <tr>
                                <th>已经开通学员数:</th>
                                <Td>12</Td>
                            </tr>   
                        </table>
                    </div>
                    <table id="tab" style="width: 50% ;margin-left:40%">
                        <tr style="position:relative">
                            <th >主合约编号:<span class='icont' @click='showcolum'><div class='detail' v-if='isdetail'><p>课程类型</p><span>1对1、1对2、1对3、1对4、小班制、大讲堂45分钟</span></div></span></th>
                            <Td>50385178</Td>
                            <th>创建时间：</th>
                            <Td> 2017/7/17</Td>
                        </tr>
                        <tr>
                            <th>合约类型：</th>
                            <Td>公司合约</Td>
                            <th>起始时间：</th>
                            <Td>2018/1/17</Td>
                        </tr>
                        <tr>
                            <th>合约状态：</th>
                            <Td>已开通</Td>
                            <th>结束时间：</th>
                            <Td>2018/1/17</Td>
                        </tr>
                        <tr>
                            <th>付款类型：</th>
                            <Td>全额</Td>
                        </tr>
                        <tr>
                            <th>合约总金额：</th>
                            <Td>3300元</Td>
                            <th>实际付款金额：</th>
                            <Td>3300元</Td>
                        </tr>
                    </table>
                </fieldset>
                 <fieldset class="contractinformation" style="margin-top:30px;background:#fff;position:relative">
                    <div id="legend" style="margin-left: 10px;">
                        <span class="basicinformation">企业合约信息 2</span>
                        <hr>
                    </div>
                    <div class="progressbar">
                       <el-progress type="circle" :percentage="0"></el-progress>
                        <table style="width: 100%" class="circleth">
                            <tr>
                                <th>合约总堂数:</th>
                                <Td>90</Td>
                            </tr>
                            <tr>
                                <th>已经开通学员数:</th>
                                <Td>12</Td>
                            </tr>   
                        </table>
                    </div>
                    <table id="tab" style="width: 50% ;margin-left:40%">
                        <tr style="position:relative">
                            <th >主合约编号: <span class='icont' @click='showcolum2'><div class='detail' v-if='isdetail1'><p>课程类型</p><span>1对1、1对2、1对3、1对4、小班制、大讲堂45分钟</span></div></span></th>
                            <Td>50385178</Td>
                            <th>创建时间：</th>
                            <Td> 2017/7/17</Td>
                        </tr>
                        <tr>
                            <th>合约类型：</th>
                            <Td>公司合约</Td>
                            <th>起始时间：</th>
                            <Td>2018/1/17</Td>
                        </tr>
                        <tr>
                            <th>合约状态：</th>
                            <Td>已开通</Td>
                            <th>结束时间：</th>
                            <Td>2018/1/17</Td>
                        </tr>
                        <tr>
                            <th>付款类型：</th>
                            <Td>全额</Td>
                        </tr>
                        <tr>
                            <th>合约总金额：</th>
                            <Td>3300元</Td>
                            <th>实际付款金额：</th>
                            <Td> 3300元</Td>
                        </tr>
                    </table>
                </fieldset>           
            </div>    
        </div>
    <div class="for5 layer-anim layui-layer" v-show='ispassword'>
      <div class="el-message-box__header">
        <div class="el-message-box__title">修改密码</div>
        <button type="button" aria-label="Close" class="el-message-box__headerbtn" @click="showclose">
          <i class="el-message-box__close el-icon-close"></i>
        </button>
      </div>
      <div class="el-message-box__content">
        <p>
          <span>原密码:</span>
          <input type="text" v-model='oldpassword' style="width:200px;height:20px;">
        </p>
        <p>
          <span>新密码:</span>
          <input type="text" v-model='newpassword' style="width:200px;height:20px;">
        </p>
        <p>
          <span>确认密码:</span>
          <input type="text" v-model='confirmpassword' style="width:200px;height:20px;">
        </p>
      </div>
	   <div style="width:410px;height:1px;margin:0px auto;padding:0px;background-color:#D5D5D5;overflow:hidden;"></div>
	   <div class='warin_text2'>
	    <p> 注意事项:</p>
        <p>• 密码仅能使用6-14位数字或英文，字母区分大小写，避免使用空格与特殊符号(例如：~ @ ^等)。</p>
        <p>• 请避免使用生日、身份证字号或是易于被猜中的连续数字。</p>
        <p>• 请牢记您变更的密码。</p>

	   </div>
  
      <div class="el-message-box__btns">
        <input type="button" class="el-button" value="取消" @click="cancel">
        <input type="button" value="确定" class="el-button el-button--default el-button--primary " @click='confirm'>
      </div>
    </div>
  
    <div class="layui-layer layui-layer-page layer-anim" v-show='isziliao' id="layui-layer1" type="page" times="1" showtime="0" contype="string" style="z-index: 19891015; width: 390px; height: 200px; top: 375px; left: 492px;">
        <div class="layui-layer-title" style="cursor: move;">修改资料</div>
        <div id="LAY_layuipro" class="layui-layer-content" style="height: 105px;">
            <div id="changepassword">
                <p>
                    <span> 企业联系人:</span>
                    <input type="text">
                </p>
                <p>
                    <span> 企业联系人号码:</span>
                    <input type="text">
                </p>
            </div>
        </div>
        <span class="layui-layer-setwin">
            <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="showclose"></a>
        </span>
        <div class="layui-layer-btn layui-layer-btn-">
            <a class="layui-layer-btn0" @click="cancel">取消</a>
            <a class="layui-layer-btn1" @click='confirm'>修改</a>
        </div>
    </div>

   
    </div>        
</template>
<style >
@import "../assets/css/home.css";


.icont{
    width: 20px;
    height: 20px;
    background:url(../assets/images/copy2.png);
    position:absolute;
    left:62%;
}
.detail{
    width: 190px;
    height: 122px;
    background: url(../assets/images/bcg.png);
    z-index:1000;
    position: absolute;
    top:-120px;
    left:-30px;
}
#changepassword input {
    outline: none;
    border: 1px solid #eee;
    background: none;
    width: 220px;
    height: 30px;
    margin-top: 20px;
}
</style>
<script>
export default {
  data(){
      return {
         isziliao:0,
         ispassword:0,
         isdetail:0,
         isdetail1:0,
         oldpassword:'',
         newpassword:'',
         confirmpassword:''
      }
  },
   mounted() {
          //alert(1);
          var url ='http://corpmember.tutorabc.com.cn/Home/Index'
          this.$http.get(url).then((res)=>{
              console.log(res);
          }).catch((res)=>{
              console.log(res.status);
          })
      },
  methods:{
    showcolum(){
       // alert(1);
       this.isdetail=1;
    },
     showcolum2(){
       this.isdetail1=1;
    },
    showclose(){
         this.ispassword=0;
         this.isziliao=0;
    },
     cancel(){
       this.ispassword=0;
       this.isziliao=0
      },

      confirm(){
         this.isshowstudentmessage=0;
         this.isaddnewstudents=0;
          this.iscontraction=0;
           this.ispassword=0;
           this.isziliao=0;
           if(this.newpassword!=this. confirmpassword){
               alert('两次输入密码有误');
           }
      },
    showziliao(){
        this.isziliao=1;    
    },
    changepassword(){
        this.ispassword=1;
    }
  
  }
}
</script>


