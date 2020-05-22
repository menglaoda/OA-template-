var vm = new Vue({
    el: '#app',
    data: {
	   	/*第二块*/
	    w2:400,
	    conference:"表彰大会",
	    english:"You are invited to the meeting",
	    conference2:"~ 年度优秀员工表彰大会 ~",
	    companyname:"深圳市深蓝软件南宁分公司",
	    mytime:"2020.05.22",
	    /*第三块*/
	    w3:400,
	    conference3:"表彰通知",
	    name3:"公司各部门及全体员工：",
   		w3p1:"***等同志入职以来工作兢兢业业、认真负责，并且吃苦耐劳，能克服工作中的遇到的困难，深受领导和其他同事的好评。积极的工作态度体现了专业职业素养和极高的执行力。",
   		w3p2:"经公司研究决定，特提出表扬，并对以上人员进行嘉奖！",
   		w3p3:"希望公司全体员工以他们为榜样，努力进取、团结协作，为公司的发展贡献自己的最大力量！",
   		companyname3:"中网易企秀科技有限公司",
   		mytime3:"2019.04.25",
    },
    methods:{
  	    fn2:function(){
	  		//容器宽度
	  		$(".boxfirst").css('width',vm.w2);
	  		//大标题内容：
	  		$(".conference").html(vm.conference);
	  		//英文内容：
	  		$(".english").html(vm.english);
	  		//小标题
	  		$(".conference2").html(vm.conference2);
	  		//公司名称
	  		$(".companyname").html(vm.companyname);
	  		//时间
	  		$(".mytime").html(vm.mytime);
  		},
	  	fn3:function(){
	  		//容器宽度
	  		$(".w3").css('width',vm.w3);
	  		//大标题内容：
	  		$(".conference3").html(vm.conference3);
	  		//称呼：
	  		$(".name3").html(vm.name3);
	  		//段落1
	  		$(".w3p1").html(vm.w3p1);
	  		//段落2
	  		$(".w3p2").html(vm.w3p2);
	  		//段落3
	  		$(".w3p3").html(vm.w3p3);
	  		//公司
	  		$(".companyname3").html(vm.companyname3);
	  		//时间
	  		$(".mytime3").html(vm.mytime3);
	  	}
  }
  
})