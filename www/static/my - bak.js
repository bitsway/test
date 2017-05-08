
var imageName = "";
var imageName2 = "";
var imageName3 = "";
var imageName4 = "";
var imageName5 = "";

var imagePath1A="";
var imagePath2A="";
var imagePath3A="";
var imagePath4A="";
var imagePath5A="";


var image1="";
var image2="";
var image3="";
var image4="";
var image5="";

var picType1="";
var picType2="";
var picType3="";
var picType4="";
var picType5="";


var latitude="";
var longitude="";



function getLocationInfoAch() {		
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("অবস্হান নিশ্চিত করা হচ্ছে । অপেক্ষা করুন..");
}
// onSuccess Geolocation
function onSuccess(position) {	
	$("#ach_lat").val(position.coords.latitude);
	$("#ach_long").val(position.coords.longitude);
	$(".errorChk").html("অবস্হান নিশ্চিত করা হয়েছে ।");
}
// onError Callback receives a PositionError object
function onError(error) {
   $("#ach_lat").val(0);
   $("#ach_long").val(0);
   $(".errorChk").html("অবস্হান নিশ্চিত করা যায়নি ।");
}
/*********************************/
//---- online 
//var apipath="http://a006.yeapps.com/lged/syncmobile/";

//--- local
var apipath="http://127.0.0.1:8000/lged/syncmobile/";
/*********************************/

url ="";

var stuList='';
var stuIDList='';
var stuCount=1;
$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
		}else{			
			
			var p='';
			var a='';
			var b='';
			var stuPre=''
			var pre='';
			var abc='';
			var ap='';
			
					
			$("#btnAdd").click(function(){				
			var stu3Id=$("#stu3Id").val().replace(/\./g, '');
			stuPre=$("#stuPre").val();
			lcProSt=$("#lcProSt").val();
					
			var pre_for_student ="";
			if ($("input[name='preForStu1']:checked").val()=="1"){pre_for_student = "1"} else {pre_for_student="0"}
			//alert(pre_for_student);
			if ($("input[name='preForStu2']:checked").val()=="1"){pre_for_student = pre_for_student + "1"} else {pre_for_student=pre_for_student +"0"}
			if ($("input[name='preForStu3']:checked").val()=="1"){pre_for_student = pre_for_student + "1"} else {pre_for_student=pre_for_student +"0"}
			if ($("input[name='preForStu4']:checked").val()=="1"){pre_for_student = pre_for_student + "1"} else {pre_for_student=pre_for_student +"0"}
			
			preForStu="1"+pre_for_student;
			
			
			/*var abs_for_student ="";
			if ($("input[name='absForStu1']:checked").val()=="1"){abs_for_student = "1"} else {abs_for_student="0"}
			if ($("input[name='absForStu2']:checked").val()=="1"){abs_for_student = abs_for_student + "1"} else {abs_for_student=abs_for_student +"0"}
			if ($("input[name='absForStu3']:checked").val()=="1"){abs_for_student = abs_for_student + "1"} else {abs_for_student=abs_for_student +"0"}
			if ($("input[name='absForStu4']:checked").val()=="1"){abs_for_student = abs_for_student + "1"} else {abs_for_student=abs_for_student +"0"}
			if ($("input[name='absForStu5']:checked").val()=="1"){abs_for_student = abs_for_student + "1"} else {abs_for_student=abs_for_student +"0"}
			if ($("input[name='absForStu6']:checked").val()=="1"){abs_for_student = abs_for_student + "1"} else {abs_for_student=abs_for_student +"0"}
			
			absForStu="1"+abs_for_student;*/
			
			absForStu=$("#absForStu1").val();
			//alert(absForStu);
			
			
			if(stuPre==1){
				pre=preForStu
			}else{
				abc=absForStu
			}
			//present
			if (pre.substring(1,2)=='1'){
				p ='১-ছবির সাথে মিল আছে কি , '
			}else{
				p=''
			}	
			if(pre.substring(2,3)=='1'){
				p +='২-পোষাক পরিহিত আছে কি , '
			}else{
				p +=''
			}	
			if(pre.substring(3,4)=='1'){
				p +='৩-শিক্ষাভাতা পেয়েছে কি , '
			}else{
				p +=''
			}
			if(pre.substring(4,5)=='1'){
				p +='৪-অন্য স্কুলে পরে কি , '
			}else{
				p +=''
			}
			
			//absent
			if(absForStu==1){
				a ='১-বাতিল '
			}else if(absForStu==2){
				a ='২-অন্যত্র চলে গেছে '
			}else if(absForStu==3){
				a ='৩-অসুস্থ '
			}else if(absForStu==4){
				a ='৪-অন্য স্কুলে পরে '
			}else if(absForStu==5){
				a ='৫-শিক্ষক অবগত নয় '
			}else{
				a ='৬-অন্যান্য '
			}
			/*if (abc.substring(1,2)=='1'){
				a ='১-বাতিল , '
			}else{
				a=''
			}	
			if (abc.substring(2,3)=='1'){
				a +='২-অন্যত্র চলে গেছে , '
			}else{
				a +=''
			}
			if (abc.substring(3,4)=='1'){
				a +='৩-অসুস্থ , '
			}else{
				a +=''
			}
			if (abc.substring(4,5)=='1'){
				a +='৪-অন্য স্কুলে পরে , '
			}else{
				a +=''
			}
			if (abc.substring(5,6)=='1'){
				a +='৫-শিক্ষক অবগত নয় , '
			}else{
				a +=''
			}
			if (abc.substring(6,7)=='1'){
				a +='৬-অন্যান্য , '
			}else{
				a +=''
			}*/
			
			
			var stuAP='';
			if(stuPre==1){
				stuAP='১-শিক্ষার্থী উপস্থিত'
				ap=p
			}else{
				stuAP='২-শিক্ষার্থী অনুপস্থিত'
				ap=a
			}
			
			if (stu3Id.length==1){
				stu3Id='00'+stu3Id;
			}else if(stu3Id.length==2){
				stu3Id='0'+stu3Id;
			}else{
				stu3Id=stu3Id
			}
			
			var i="<tr id='"+stu3Id+"'><td>"+stu3Id+"</td><td>"+stuAP+"</td><td>"+ap+"</td><td>"+'<input style="background-color:#99dfff;" type="button" onclick="stuRemove(\''+stu3Id+'\')" value="X">'+"</td></tr>"
			
			
			//if( stuList.indexOf(stu3Id) >0 ){
			if( stuIDList.indexOf(stu3Id) >-1 ){
				$(".errorChk").text("শিক্ষার্থীর আইডি আগে থেকেই আছে");
			}else{
				if(stuCount > lcProSt){
					$(".errorChk").text(" প্রশ্ন ৩৬.১. অনুযায়ী শিক্ষার্থী সংখ্যা ");
				}else{
					$("#stuTable").append(i);
					stuCount+=1;
					$(".errorChk").text("");
					
					var stuPreAbs='';
					if(stuPre==1){
						stuPreAbs=preForStu
					}else{
						stuPreAbs=absForStu
					}
					
					if(stuList=="" ){
						stuList=stu3Id+","+stuPre+","+stuPreAbs;
					}else{
						stuList +="||"+stu3Id+","+stuPre+","+stuPreAbs;
					}
					if(stuIDList=="" ){
						stuIDList=stu3Id;
					}else{
						stuIDList +="||"+stu3Id;
					}
					
									
					
				}
				
			}
			
						
		  });	
		  
			url = "#homePage";		
		}
	$.mobile.navigate(url);
	
});

function stuRemove(stu3Id){
	
	//alert(stu3Id)	
	$("#"+stu3Id).remove();	
	stuCount-=1;
	var repl1='';
	iStr=stuIDList.split('||');
	iLen=iStr.length
	for(i=0;i<iLen;i++){
		iStrD=iStr[i].split(',');
		
		if(iStrD[0]!=stu3Id){
			if (repl1==''){
				repl1=iStr[i]
			}else{
				repl1+='||'+iStr[i]
			}	
		}		
	}
	
	stuIDList=repl1
	
}
/*function stuRemove(stu3Id){	
	$("#"+stu3Id).remove();	
	//alert(stuList);
	var sd=stuList.split("||");
		
	
	//sd.splice(stuList.indexOf(stu3Id),1);
	
	for (i=0;i<sd.length;i++){					
		sdTotal=sd[i];
		//alert(sdTotal);
		//alert(sd.splice(sdTotal.indexOf(stu3Id),1));
		sd.splice(sdTotal.indexOf(stu3Id),1);
		stuList=sd;
		stuCount-=1;
	}
}*/
function stuPreAbs(){
	var stuPre=$("#stuPre").val();
	if(stuPre==1){
		$("#stuPresent").show();
		$("#stuAbsent").hide();
	}else if(stuPre==2){
		$("#stuAbsent").show();
		$("#stuPresent").hide();
	}else{
		$("#stuPresent").hide();
		$("#stuAbsent").hide();
	}
}

function syncBasic() {
					
		var mobile=$("#mobile").val() ;
	 	var password=$("#password").val() ;
		
		if (mobile=="" || password==""){
			 $(".errorMsg").html("অবশ্যক মোবাইল নম্বর এবং পাসওয়ার্ড");	
		 }else{	
			 $('#syncBasic').hide();			 
			 $(".errorMsg").html("অপেক্ষা করুন ...");
			if(localStorage.sync_code==undefined || localStorage.sync_code==""){
					localStorage.sync_code=0
				}
		
		 	//alert(apipath+'passwordCheck?cid=LGED&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
			$.ajax({
			  url:apipath+'passwordCheck?cid=LGED&mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
			  success: function(result) {
				syncResult=result
				var syncResultArray = syncResult.split('rdrd');
					localStorage.synced=syncResultArray[0];
					if (localStorage.synced=='YES'){	
						localStorage.sync_code=syncResultArray[1];
						localStorage.ffID=syncResultArray[2];
						localStorage.schoolList=syncResultArray[3];	
						localStorage.mobile_no=mobile;
						
						//alert(localStorage.schoolList);	
					/*	var totalSchoolList=localStorage.schoolList.split('||');					
						var sch_list=totalSchoolList[0].split('-');
						var sc_name=sch_list[0];
						var sc_code=sch_list[1];
						var div_code=sch_list[2];
						var div_name=sch_list[3];
						var dis_code=sch_list[4];
						var dis_name=sch_list[5];
						var up_code=sch_list[6];
						var up_name=sch_list[7];						
						
						$("#division").val(div_name);
						$("#district").val(dis_name);
						$("#upzila").val(up_name);
						//$("#ff_id").val(localStorage.ffID);
						$("#school_id").val(sc_code);
						$("#school_name").val(sc_name);*/
						
						/*schList="";
						for (i=0;i<totalSchoolList.length;i++){					
							schListTotal=totalSchoolList[i].split(',');
							schList+="<option value="+encodeURIComponent(schListTotal[1])+">"+schListTotal[0]+-+schListTotal[1]+"</option>";
								
						}				
						var rpt_rep_ob=$("#school_list");						
						rpt_rep_ob.empty();		
						rpt_rep_ob.append(schList);
						rpt_rep_ob.selectmenu("refresh");*/
						
																	
						
						$(".errorMsg").html("সফল ভাবে প্রবেশ করেছেন ।");						
						$('#syncBasic').show();
						
						url = "#homePage";
						$.mobile.navigate(url);

					}else{
						
						$(".errorMsg").html("প্রবেশ করতে ব্যর্থ হয়েছেন নেটওয়ার্ক সমস্যা ।");
						$('#syncBasic').show();
					}
				
			  }//----/success f
			});//------/ajax
			
		 }//-----/field
			
	}



function menuClick(){
		$(".errorChk").text("");
		$(".sucChk").text("");
		
		$("#btn_take_pic").show();
		$("#btn_ach_lat_long").show();
		
		$('#up_list_search').val('');
		
		url = "#homePage";
		$.mobile.navigate(url);
	
	}
//----------------back button
function backClick(){
	$(".errorChk").text("");
	}


	
//---------------------------lged data page 
var ruralData1="";
var ruralData2="";
var ruralData3="";
var ruralData4="";
var ruralData5=""
var ruralData6="";


function ruralV(){
	if(localStorage.sync_code==undefined || localStorage.sync_code==""){
		$(".errorChk").text("Required Sync");
	}else{
		/*						
		var totalSchoolList=localStorage.schoolList.split('||');
		
		schList=""	
		for (i=0;i<totalSchoolList.length;i++){					
			schListTotal=totalSchoolList[i].split(',')
			schList+="<option value="+encodeURIComponent(schListTotal[1])+">"+schListTotal[0]+"</option>";
		}							
		var rpt_rep_ob=$("#school_list");						
		rpt_rep_ob.empty();
		rpt_rep_ob.append(schList);
		rpt_rep_ob.selectmenu("refresh");
		*/				
		
		//alert(apipath+'get_school_list?cid=LGED&sync_code='+localStorage.sync_code);
		$.ajax({
			  url:apipath+'get_school_list?cid=LGED&sync_code='+localStorage.sync_code,
			  success: function(schStr) {
					  schoolList=schStr.split("||");
					  schList="";
					  for (i=0;i<schoolList.length;i++){					
							schListTotal=schoolList[i].split(',')
							schList+="<option value="+encodeURIComponent(schoolList[i])+">"+schListTotal[0]+"-"+schListTotal[1]+"</option>";
							//schList+="<option value="+encodeURIComponent(schoolList[i])+">"+schListTotal[0].slice(-3)+"-"+schListTotal[1]+"</option>";
						}							
						var rpt_rep_ob=$("#school_list");						
						rpt_rep_ob.empty();
						rpt_rep_ob.append(schList);
						rpt_rep_ob.selectmenu("refresh");
						
						//getLocationInfoAch();			  
					 									  
				  }		  
			});	 		
		$(".sucChk").text("");
		$(".error").text("");
		url="#page1";					
		$.mobile.navigate(url);	
		}
			
}

//-----------------
function schoolSearch(){
	
	var school_list=$("#school_list").val();

	if(school_list==""){
		$(".error").text("অবশ্যক স্কুল ");
	}else{		
		//alert(apipath+'search_school?cid=LGED&school='+school_list);
		$.ajax({
			url:apipath+'search_school?cid=LGED&school='+school_list,
			success: function(result) {				  
				resultStr=result.split("<fd>");	  	
				 if (resultStr[0]=="Success"){
					  var schoolNameStr=resultStr[1].split("fdfd");	
					  var div_name=schoolNameStr[0];
					  var dist_name=schoolNameStr[1];
					  var up_name=schoolNameStr[2];		
					  localStorage.school_code=schoolNameStr[3];
					  var school_code_short=schoolNameStr[4];
					  localStorage.school_name=schoolNameStr[5];
					  var cohort=schoolNameStr[6];
					  
					  $("#division").val(div_name);
					  $("#district").val(dist_name);
					  $("#upzila").val(up_name);
					  $("#ff_id").val(localStorage.ffID);
					  $("#school_id").val(localStorage.school_code);
					  $("#school_id_short").val(school_code_short);
					  $("#school_name").val(localStorage.school_name);
					  $("#school_installation_year").val(cohort);
					  
					  $("#schoolSelected").html(localStorage.school_code+"-"+localStorage.school_name)
					  
					  url="#school_select_page";					
					  $.mobile.navigate(url);
					  
					}else if (resultStr[0]=="Failed"){
						$(".errorChk").text("Audit report already submitted for this school . Please contact with admin if you think this school in incorrectly flagged.");
											
					} 
				
			  }
		});
	
	
	url="#school_select_page";					
	$.mobile.navigate(url);	
}
}

function schoolSelect(){
	$(".error").text("");
	/*var school_list=$("#school_list").val();

	if(school_list==""){
		$(".error").text("Required School");
	}else{		
		//alert(apipath+'search_school?cid=LGED&school='+school_list);
		$.ajax({
			url:apipath+'search_school?cid=LGED&school='+school_list,
			success: function(result) {				  
				resultStr=result.split("<fd>");	  	
				 if (resultStr[0]=="Success"){
					  var schoolNameStr=resultStr[1].split("fdfd");	
					  var div_name=schoolNameStr[0];
					  var dist_name=schoolNameStr[1];
					  var up_name=schoolNameStr[2];		
					  localStorage.school_code=schoolNameStr[3];
					  localStorage.school_name=schoolNameStr[4];
					  var cohort=schoolNameStr[5];
					 // alert(cohort);
					  $("#division").val(div_name);
					  $("#district").val(dist_name);
					  $("#upzila").val(up_name);
					  $("#ff_id").val(localStorage.ffID);
					  $("#school_id").val(localStorage.school_code);
					  $("#school_name").val(localStorage.school_name);
					  $("#school_installation_year").val(cohort);
					  
					  url="#page2";					
					  $.mobile.navigate(url);
					  
					}else if (resultStr[0]=="Failed"){
						$(".errorChk").text("Audit report already submitted for this school . Please contact with admin if you think this school in incorrectly flagged.");
											
					} 
				
			  }
		});*/
		
		url="#page2";					
		$.mobile.navigate(url);
	//}
		
}




function ruralData1Next(){	
		var d = new Date();
		localStorage.date= d.getFullYear();
		
		var division=$("#division").val();
		var district=$("#district").val();
		var upzila=$("#upzila").val();
		var ff_id=$("#ff_id").val();
		var semister=$("#semister").val();
		var school_id=$("#school_id").val();
		var school_id_short=$("#school_id_short").val();
		var school_name=$("#school_name").val();
		var daily_from_time=$("#daily_from_time").val();
		var daily_to_time=$("#daily_to_time").val();
		var total_hour=$("#total_hour").val();
		var visit_date=$("#visit_date").val();
		var school_condition=$("#school_condition").val();
		var close_school=$("#close_school").val();
		var close_school_others=$("#close_school_others").val();
		
		var next_visit=$("#next_visit").val();
		var visit_date_second=$("#visit_date_second").val();
		var school_condition_second=$("#school_condition_second").val();
		var close_school_second=$("#close_school_second").val();
		var close_school_others_second=$("#close_school_others_second").val();
		
		if (division==""){
			$(".errorChk").text("অবশ্যক- বিভাগ");
		}else if(district==""){
			$(".errorChk").text("অবশ্যক- জেলা");
		}else if(upzila==""){
			$(".errorChk").text("অবশ্যক- উপজেলা");
		}else if(ff_id==""){
			$(".errorChk").text("অবশ্যক- ভ্যালিডেশন অফিসারের আইডি ");
		}else if(semister=="" || semister==0){
			$(".errorChk").text("অবশ্যক- সেমিস্টার");
		}else if(school_id==""){
			$(".errorChk").text("অবশ্যক- আনন্দ স্কুল আইডি");		
		}else if(school_name==""){
			$(".errorChk").text("অবশ্যক- আনন্দ স্কুলের নাম ");
		}else if(daily_from_time==""){
			$(".errorChk").text("অবশ্যক- শুরু সময়");
		}else if(daily_to_time==""){
			$(".errorChk").text("অবশ্যক- শেষ সময়");	
		}else if(total_hour==""){
			$(".errorChk").text("অবশ্যক- মোট সময় ");		
		}else{
		 if(visit_date=="" && visit_date_second==""){
			$(".errorChk").text("অবশ্যক- পরিদর্শনের তথ্য ");	
		}else if(visit_date!="" && school_condition==0){
			$(".errorChk").text("অবশ্যক- স্কুলটির অবস্থা ");		
		}else if(visit_date!="" && (school_condition==2 || school_condition==3) && close_school==0){
			$(".errorChk").text("অবশ্যক- স্কুলটি বন্ধ হলে, বন্ধের কারণ কী");
		}else if(visit_date!="" && close_school==4 && close_school_others=="" && school_condition !=1){
			$(".errorChk").text("উল্লেখ করুন");
		}else if(visit_date!="" && next_visit==0){
			$(".errorChk").text("অবশ্যক- পরবর্তী পরিদর্শনের প্রয়োজন আছে কি");			
		
		}else if(visit_date_second!="" && school_condition_second==0){
			$(".errorChk").text("অবশ্যক- স্কুলটির অবস্থা ");	
		}else if(visit_date_second!="" && (school_condition_second==2 || school_condition_second==3) && close_school_second==0){
			$(".errorChk").text("অবশ্যক- স্কুলটি বন্ধ হলে, বন্ধের কারণ কী");
		}else if(visit_date_second!="" && close_school_second==4 && close_school_others_second=="" && school_condition_second !=1 ){
			$(".errorChk").text("উল্লেখ করুন");
				
		}else{
						
			ruralData1="||division="+division+"||district="+district+"||upzila="+upzila+"||ff_id="+ff_id+"||semister="+semister+"||LCVisitYr="+localStorage.date+"||school_id="+school_id+"||school_id_short="+school_id_short+"||school_name="+school_name+"||daily_from_time="+daily_from_time+"||daily_to_time="+daily_to_time+"||total_hour="+total_hour+"||visit_date="+visit_date+"||school_condition="+school_condition+"||close_school="+close_school+"||close_school_others="+close_school_others+"||next_visit="+next_visit+"||visit_date_second="+visit_date_second+"||school_condition_second="+school_condition_second+"||close_school_second="+close_school_second+"||close_school_others_second="+close_school_others_second;
		
		//alert(ruralData1);
		$(".errorChk").text("");
		
		if(school_condition==1 || school_condition_second==1){
			url="#page3";
		}else{
			url="#page8";
			blank_data();		
		}
		$.mobile.navigate(url);	
		}
}
}

/*}}else if(visit_date_second==""){
			$(".errorChk").text("অবশ্যক- পরিদর্শনের তারিখ ");	
		}else if(school_condition_second=="" || school_condition_second==0){
			$(".errorChk").text("অবশ্যক- স্কুলটির অবস্থা ");
		}else if(close_school_second==""){
			$(".errorChk").text("অবশ্যক- স্কুলটি বন্ধ হলে, বন্ধের কারণ কী");	
		}else if(close_school_others_second==""){
			$(".errorChk").text("অবশ্যক- উল্লেখ করুন");	*/	


function depend_semister(){
	var semister=$("#semister").val();
	if(semister==1){
		$("#depends_on_semister2").show();
		$("#depends_on_semister1").hide();
	}else{		
		$("#depends_on_semister1").show();
		$("#depends_on_semister2").hide();
	}	
}

function condition_school(){
	var school_condition=$("#school_condition").val();
	if(school_condition==0){
		$("#cloSchool").hide();
		$("#school_close_others").hide();
	}else  if(school_condition==1){
		$("#cloSchool").hide();
		$("#school_close_others").hide();
	}else{
		$("#cloSchool").show();
	}		
}

function condition_school_second(){
	var school_condition_second=$("#school_condition_second").val();
	if(school_condition_second==0){
		$("#cloSchoolSecond").hide();
		$("#school_close_sesond_others").hide();
	}else  if(school_condition_second==1){
		$("#cloSchoolSecond").hide();
		$("#school_close_sesond_others").hide();
	}else{
		$("#cloSchoolSecond").show();
	}		
}
/*function totalTime(){
	var daily_from_time=$("#daily_from_time").val();
	var daily_to_time=$("#daily_to_time").val();
	if(daily_from_time==""){
		daily_from_time=0;
	}
	if(daily_to_time==""){
		daily_to_time=0;
	}
	var total_time=eval(daily_from_time)+eval(daily_to_time)
	
	$("#total_hour").val(total_time);	
}*/

function school_close(){
	var close_school=$("#close_school").val();	
	if(close_school==4){
		$("#school_close_others").show();
	}else{
		$("#school_close_others").hide();
	}	
}


function school_close_second(){
	var close_school_second=$("#close_school_second").val();	
	if(close_school_second==4){
		$("#school_close_sesond_others").show();
	}else{
		$("#school_close_sesond_others").hide();
	}	
}

//===================		
function ruralData2Next(){
		
		var school_installation_year=$("#school_installation_year").val();
		var school_address_house=$("#school_address_house").val();
		var school_address_vill=$("#school_address_vill").val();				
		var school_address_unionName=$("#school_address_unionName").val();
		var distance_school_near_GPS=$("#distance_school_near_GPS").val();
		var school_signboard=$("#school_signboard").val();
		var international_flag_size=$("#international_flag_size").val();
		var school_house=$("#school_house").val();
		var school_house_others=$("#school_house_others").val();
		var school_type=$("#school_type").val();
		//var par_abs_ano_guar=$("input[name='parrent_absen_another_guardian']:checked").val();
		var school_type_others=$("#school_type_others").val();
		var singing_national_anthem_before_cls_start=$("#singing_national_anthem_before_cls_start").val();		
		var classroom_aayaton_hight=$("#classroom_aayaton_hight").val();
		var classroom_aayaton_width=$("#classroom_aayaton_width").val();
		
		var huse_light_air=$("#huse_light_air").val();
		var classroom_windows=$("#classroom_windows").val();
		var classroom_doors=$("#classroom_doors").val();
		var arsenic_free_water=$("#arsenic_free_water").val();
		var water_distance=$("#water_distance").val();
		var student_useable_toilate=$("#student_useable_toilate").val();
		var benefit_electricity_cls=$("#benefit_electricity_cls").val();
		var seat_arragement_cls=$("#seat_arragement_cls").val();
		var cls_usable_board_draster=$("#cls_usable_board_draster").val();
		var all_student_textbook=$("#all_student_textbook").val();
		var all_student_pen=$("#all_student_pen").val();
		var management_school_calender=$("#management_school_calender").val();
		var management_school_cls_routin=$("#management_school_cls_routin").val();
		var cmc_metting_previous_semister=$("#cmc_metting_previous_semister").val();
		var last_cmc_metting_present_cmc_member=$("#last_cmc_metting_present_cmc_member").val();
		var cmc_selebrate_exchange_gardagin=$("#cmc_selebrate_exchange_gardagin").val();
		var previous_semister_school_anudan_time=$("#previous_semister_school_anudan_time").val();
		
		var deci=/^[-+]?[0-9]+\.[0-9]+$/;
		var decimal=/^\.[0-9]+$/;
		//alert(parseInt(classroom_windows))				
		if(school_installation_year==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১");
		}else if(distance_school_near_GPS==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩");
		}else if(distance_school_near_GPS.length >5){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩ সর্বাধিক ৫ সংখ্যা");
		}else if(school_signboard=="" || school_signboard==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪");
		}else if(international_flag_size=="" || international_flag_size==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৫");	
		}else if(school_house=="" || school_house==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৬");	
		}else if(school_house==5 && school_house_others==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৬ উল্লেখ করুন");	
		}else if(school_type=="" || school_type==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৭");	
		}else if(school_type==8 && school_type_others==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৭ উল্লেখ করুন");
		}else if(singing_national_anthem_before_cls_start=="" || singing_national_anthem_before_cls_start==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৮");
		}else if(classroom_aayaton_hight==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৯ দৈর্ঘ্য ");	
		}else if(classroom_aayaton_hight.length >5){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৯ দৈর্ঘ্য সর্বাধিক ৫ সংখ্যা");	
		}else if(classroom_aayaton_width==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৯ প্রস্থ");	
		}else if(classroom_aayaton_width.length >6){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৯ প্রস্থ সর্বাধিক ৫ সংখ্যা");		
		}else if(huse_light_air=="" || huse_light_air==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১০");	
		}else if(classroom_windows==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১১");
						
		}else if(classroom_windows.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১১ প্লিজ কারেক্ট ভালু" );
		}else if(classroom_windows.length > 2){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১১ সর্বাধিক ২ সংখ্যা");	
		}else if(classroom_doors==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১২");
		}else if(classroom_doors.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১২ প্লিজ কারেক্ট ভালু" );	
		}else if(classroom_doors.length > 2){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১২ সর্বাধিক ২ সংখ্যা");	
		}else if(arsenic_free_water=="" || arsenic_free_water==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৩");	
		}else if(arsenic_free_water==1 && water_distance==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৩.১");	
		}else if(student_useable_toilate=="" || student_useable_toilate==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৪");		
		}else if(benefit_electricity_cls=="" || benefit_electricity_cls==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৫");		
		}else if(seat_arragement_cls=="" || seat_arragement_cls==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৬");	
		}else if(cls_usable_board_draster=="" || cls_usable_board_draster==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৭");
		}else if(all_student_textbook=="" || all_student_textbook==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৮");
		}else if(all_student_pen=="" || all_student_pen==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-১৯");
		}else if(management_school_calender=="" || management_school_calender==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২০");	
		}else if(management_school_cls_routin=="" || management_school_cls_routin==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২১");		
		}else if(cmc_metting_previous_semister==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২২");
		}else if(cmc_metting_previous_semister.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২২ প্লিজ কারেক্ট ভালু" );	
		}else if(cmc_metting_previous_semister.length >2 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২২ সর্বাধিক ২ সংখ্যা");	
		}else if(last_cmc_metting_present_cmc_member==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৩");	
		}else if(last_cmc_metting_present_cmc_member.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৩ প্লিজ কারেক্ট ভালু");
		}else if(last_cmc_metting_present_cmc_member.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৩ প্লিজ কারেক্ট ভালু");	
		}else if(last_cmc_metting_present_cmc_member.length >3 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৩ সর্বাধিক ৩ সংখ্যা");	
		}else if(cmc_selebrate_exchange_gardagin=="" || cmc_selebrate_exchange_gardagin==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৪");			
		}else if(previous_semister_school_anudan_time=="" || previous_semister_school_anudan_time==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৫");	
		 
		}else{
				
				ruralData2="||school_installation_year="+school_installation_year+"||school_address_house="+school_address_house+"||school_address_vill="+school_address_vill+"||school_address_unionName="+school_address_unionName+"||distance_school_near_GPS="+distance_school_near_GPS+"||school_signboard="+school_signboard+"||international_flag_size="+international_flag_size+"||school_house="+school_house+"||school_house_others="+school_house_others+"||school_type="+school_type+"||school_type_others="+school_type_others+"||singing_national_anthem_before_cls_start="+singing_national_anthem_before_cls_start+"||classroom_aayaton_hight="+classroom_aayaton_hight+"||classroom_aayaton_width="+classroom_aayaton_width+"||huse_light_air="+huse_light_air+"||classroom_windows="+classroom_windows+"||classroom_doors="+classroom_doors+"||arsenic_free_water="+arsenic_free_water+"||water_distance="+water_distance+"||student_useable_toilate="+student_useable_toilate+"||benefit_electricity_cls="+benefit_electricity_cls+"||seat_arragement_cls="+seat_arragement_cls+"||cls_usable_board_draster="+cls_usable_board_draster+"||all_student_textbook="+all_student_textbook+"||all_student_pen="+all_student_pen+"||management_school_calender="+management_school_calender+"||management_school_cls_routin="+management_school_cls_routin+"||cmc_metting_previous_semister="+cmc_metting_previous_semister+"||last_cmc_metting_present_cmc_member="+last_cmc_metting_present_cmc_member+"||cmc_selebrate_exchange_gardagin="+cmc_selebrate_exchange_gardagin+"||previous_semister_school_anudan_time="+previous_semister_school_anudan_time;	
							
				
				//alert(ruralData2);
						
				$(".errorChk").text("");
				
				url="#page4"
				$.mobile.navigate(url);				
		}
	
	};

function house_school(){
	var school_house=$("#school_house").val();
	if(school_house==5){
		$("#house_school_others").show();
	}else{
		$("#house_school_others").hide();
	}	
}

function type_school(){
	var school_type=$("#school_type").val();
	if(school_type==8){
		$("#type_school_others").show();
	}else{
		$("#type_school_others").hide();
	}
}

function free_water_arsenic(){
	var arsenic_free_water=$("#arsenic_free_water").val();
	if(arsenic_free_water==1){
		$("#distance_water").show();
	}else{
		$("#distance_water").hide();
	}
}

function ruralData3Next(){
				
		//var education_allowance_receipt=$("input[name='education_allowance_receipt']:checked").val();		
		var education_allowance_receipt=$("#education_allowance_receipt").val();		
		var education_allowance_receipt_date=$("#education_allowance_receipt_date").val();
		var education_allowance_not_receipt=$("#education_allowance_not_receipt").val();
		var education_allowance_receipt_delay=$("#education_allowance_receipt_delay").val();
		
		//var education_aundan_receipt=$("input[name='education_aundan_receipt']:checked").val();
		var education_aundan_receipt=$("#education_aundan_receipt").val();
		var education_aundan_receipt_date=$("#education_aundan_receipt_date").val();
		var education_aundan_not_receipt=$("#education_aundan_not_receipt").val();
		var education_aundan_receipt_delay=$("#education_aundan_receipt_delay").val();
		var school_necessary_rec_conservation_trank=$("#school_necessary_rec_conservation_trank").val();
		
		var cmc_metting_log_register=$("#cmc_metting_log_register").val();		
		var cash_register=$("#cash_register").val();
		var school_visit_register=$("#school_visit_register").val();
		var school_aundan_expense_cashMemo=$("#school_aundan_expense_cashMemo").val();
		var check_book=$("#check_book").val();
		var previous_semister_ACF=$("#previous_semister_ACF").val();
		var student_attendence_register=$("#student_attendence_register").val();
		//var repair_expense=$("#repair_expense").val();
		
		var repair_expense="";
		if ($("input[name='repair_expense1']:checked").val()=="1"){repair_expense = "1"} else {repair_expense="0"}
		if ($("input[name='repair_expense2']:checked").val()=="1"){repair_expense = repair_expense + "1"} else {repair_expense=repair_expense +"0"}
		if ($("input[name='repair_expense3']:checked").val()=="1"){repair_expense = repair_expense + "1"} else {repair_expense=repair_expense +"0"}
		if ($("input[name='repair_expense4']:checked").val()=="1"){repair_expense = repair_expense + "1"} else {repair_expense=repair_expense +"0"}
		
		repair_expense="1"+repair_expense
		
		//alert(repair_expense);
		
		var repair_expense_others=$("#repair_expense_others").val();
		var expense_prove=$("#expense_prove").val();
		
		var chief_executive_officer_month1=$("#chief_executive_officer_month1").val().replace(/\./g, '');
		var chief_executive_officer_month2=$("#chief_executive_officer_month2").val().replace(/\./g, '');
		var chief_executive_officer_month3=$("#chief_executive_officer_month3").val().replace(/\./g, '');
		var chief_executive_officer_month4=$("#chief_executive_officer_month4").val().replace(/\./g, '');
		var chief_executive_officer_month5=$("#chief_executive_officer_month5").val().replace(/\./g, '');
		var chief_executive_officer_month6=$("#chief_executive_officer_month6").val().replace(/\./g, '');
		
		var up_education_officer_month1=$("#up_education_officer_month1").val().replace(/\./g, '');
		var up_education_officer_month2=$("#up_education_officer_month2").val().replace(/\./g, '');
		var up_education_officer_month3=$("#up_education_officer_month3").val().replace(/\./g, '');
		var up_education_officer_month4=$("#up_education_officer_month4").val().replace(/\./g, '');
		var up_education_officer_month5=$("#up_education_officer_month5").val().replace(/\./g, '');
		var up_education_officer_month6=$("#up_education_officer_month6").val().replace(/\./g, '');
		
		var training_co_ordinator_month1=$("#training_co_ordinator_month1").val().replace(/\./g, '');
		var training_co_ordinator_month2=$("#training_co_ordinator_month2").val().replace(/\./g, '');
		var training_co_ordinator_month3=$("#training_co_ordinator_month3").val().replace(/\./g, '');
		var training_co_ordinator_month4=$("#training_co_ordinator_month4").val().replace(/\./g, '');
		var training_co_ordinator_month5=$("#training_co_ordinator_month5").val().replace(/\./g, '');
		var training_co_ordinator_month6=$("#training_co_ordinator_month6").val().replace(/\./g, '');
		
		var assistant_up_education_officer_month1=$("#assistant_up_education_officer_month1").val().replace(/\./g, '');
		var assistant_up_education_officer_month2=$("#assistant_up_education_officer_month2").val().replace(/\./g, '');
		var assistant_up_education_officer_month3=$("#assistant_up_education_officer_month3").val().replace(/\./g, '');
		var assistant_up_education_officer_month4=$("#assistant_up_education_officer_month4").val().replace(/\./g, '');
		var assistant_up_education_officer_month5=$("#assistant_up_education_officer_month5").val().replace(/\./g, '');
		var assistant_up_education_officer_month6=$("#assistant_up_education_officer_month6").val().replace(/\./g, '');
				
		var assistant_teacher_month1=$("#assistant_teacher_month1").val().replace(/\./g, '');
		var assistant_teacher_month2=$("#assistant_teacher_month2").val().replace(/\./g, '');
		var assistant_teacher_month3=$("#assistant_teacher_month3").val().replace(/\./g, '');
		var assistant_teacher_month4=$("#assistant_teacher_month4").val().replace(/\./g, '');
		var assistant_teacher_month5=$("#assistant_teacher_month5").val().replace(/\./g, '');
		var assistant_teacher_month6=$("#assistant_teacher_month6").val().replace(/\./g, '');
		
		var mobile_pool_teacher_month1=$("#mobile_pool_teacher_month1").val().replace(/\./g, '');
		var mobile_pool_teacher_month2=$("#mobile_pool_teacher_month2").val().replace(/\./g, '');
		var mobile_pool_teacher_month3=$("#mobile_pool_teacher_month3").val().replace(/\./g, '');
		var mobile_pool_teacher_month4=$("#mobile_pool_teacher_month4").val().replace(/\./g, '');
		var mobile_pool_teacher_month5=$("#mobile_pool_teacher_month5").val().replace(/\./g, '');
		var mobile_pool_teacher_month6=$("#mobile_pool_teacher_month6").val().replace(/\./g, '');
		
		var others_month1=$("#others_month1").val().replace(/\./g, '');
		var others_month2=$("#others_month2").val().replace(/\./g, '');
		var others_month3=$("#others_month3").val().replace(/\./g, '');
		var others_month4=$("#others_month4").val().replace(/\./g, '');
		var others_month5=$("#others_month5").val().replace(/\./g, '');
		var others_month6=$("#others_month6").val().replace(/\./g, '');
		
		var deci=/^[-+]?[0-9]+\.[0-9]+$/;
		var decimal=/^\.[0-9]+$/;
				
		if(education_allowance_receipt==""|| education_allowance_receipt==0){
			$(".errorChk").text("অবশ্যক শিক্ষা ভাতা");	
		}else if(education_allowance_receipt==1 && education_allowance_receipt_date==""){
			$(".errorChk").text("অবশ্যক- শিক্ষা ভাতা হ্যাঁ হলে, প্রাপ্তির তারিখ");
		}else if(education_allowance_receipt==2 && education_allowance_not_receipt==0){
			$(".errorChk").text("অবশ্যক- শিক্ষা ভাতা না হলে, কেন পাওয়া যায়নি ");	
		/*}else if(education_allowance_receipt_delay==""){
			$(".errorChk").text("অবশ্যক- শিক্ষা ভাতা প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে");*/
		}else if(education_allowance_receipt_delay.length >2 ){
			$(".errorChk").text("শিক্ষা ভাতা প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে সর্বাধিক ২ সংখ্যা");		
		}else if(education_allowance_receipt_delay.match(decimal)){
			$(".errorChk").text("শিক্ষা ভাতা প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে প্লিজ কারেক্ট ভালু");	
		}else if(education_allowance_receipt_delay.match(deci)){
			$(".errorChk").text("শিক্ষা ভাতা প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে প্লিজ কারেক্ট ভালু");		
		}else if(education_aundan_receipt=="" || education_aundan_receipt==0){
			$(".errorChk").text("অবশ্যক শিক্ষা অনুদান");		
		}else if(education_aundan_receipt==1 && education_aundan_receipt_date=="" ){
			$(".errorChk").text("অবশ্যক- শিক্ষা অনুদান হ্যাঁ হলে, প্রাপ্তির তারিখ");	
		}else if(education_aundan_receipt==2 && education_aundan_not_receipt==0 ){
			$(".errorChk").text("অবশ্যক- শিক্ষা অনুদান না হলে, কেন পাওয়া যায়নি ");	
		/*}else if(education_aundan_receipt_delay=="" ){
			$(".errorChk").text("অবশ্যক- শিক্ষা অনুদান প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে");	*/
		}else if(education_aundan_receipt_delay.length >2 ){
			$(".errorChk").text("শিক্ষা অনুদান প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে সর্বাধিক ২ সংখ্যা");	
		}else if(education_aundan_receipt_delay.match(decimal)){
			$(".errorChk").text("শিক্ষা অনুদান প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে প্লিজ কারেক্ট ভালু");	
		}else if(education_aundan_receipt_delay.match(deci)){
			$(".errorChk").text("শিক্ষা অনুদান প্রাপ্তিতে বিলম্ব হয়ে থাকলে কতদিন বিলম্ব হয়েছে প্লিজ কারেক্ট ভালু");	
		}else if(school_necessary_rec_conservation_trank==""|| school_necessary_rec_conservation_trank==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৭");
			
		}else if(cmc_metting_log_register==""|| cmc_metting_log_register==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (ক)");	
		}else if(cash_register==""|| cash_register==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (খ)");	
		}else if(school_visit_register==""|| school_visit_register==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (গ)");	
		}else if(school_aundan_expense_cashMemo==""|| school_aundan_expense_cashMemo==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (ঘ)");	
		}else if(check_book==""|| check_book==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (ঙ)");	
		}else if(previous_semister_ACF==""|| previous_semister_ACF==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (চ)");	
		}else if(student_attendence_register==""|| student_attendence_register==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৮ (ছ)");	
		}else if(repair_expense==10000 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৯");	
		}else if(repair_expense==10001 && repair_expense_others==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৯ উল্লেখ করুন");
		}else if(expense_prove=="" || expense_prove==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-২৯.১");	
			/*======================*/
		}else if(chief_executive_officer_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(chief_executive_officer_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(chief_executive_officer_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(chief_executive_officer_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(chief_executive_officer_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(chief_executive_officer_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা নির্বাহী অফিসার সর্বাধিক ২ সংখ্যা");
			
		}else if(up_education_officer_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(up_education_officer_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(up_education_officer_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(up_education_officer_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(up_education_officer_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(up_education_officer_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
			
		}else if(training_co_ordinator_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");		
		}else if(training_co_ordinator_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");	
		}else if(training_co_ordinator_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");	
		}else if(training_co_ordinator_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");	
		}else if(training_co_ordinator_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");	
		}else if(training_co_ordinator_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ ট্রেনিং কো-অর্ডিনেটর সর্বাধিক ২ সংখ্যা");		
			
		}else if(assistant_up_education_officer_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");		
		}else if(assistant_up_education_officer_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_up_education_officer_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");
		}else if(assistant_up_education_officer_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_up_education_officer_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_up_education_officer_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ সহকারী উপজেলা শিক্ষা অফিসার সর্বাধিক ২ সংখ্যা");	
			
		}else if(assistant_teacher_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_teacher_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_teacher_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_teacher_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_teacher_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(assistant_teacher_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান/ সহকারী শিক্ষক সর্বাধিক ২ সংখ্যা");	
			
		}else if(mobile_pool_teacher_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(mobile_pool_teacher_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(mobile_pool_teacher_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");	
		}else if(mobile_pool_teacher_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");		
		}else if(mobile_pool_teacher_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");		
		}else if(mobile_pool_teacher_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ মোবাইল পুল শিক্ষক সর্বাধিক ২ সংখ্যা");		
			
		}else if(others_month1.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");		
		}else if(others_month2.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");	
		}else if(others_month3.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");	
		}else if(others_month4.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");	
		}else if(others_month5.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");	
		}else if(others_month6.length > 2){
			$(".errorChk").text("প্রশ্ন ৩০ অন্যান্য সর্বাধিক ২ সংখ্যা");				
			/*========================*/
		
		}else{
					
			ruralData3="||education_allowance_receipt="+education_allowance_receipt+"||education_allowance_receipt_date="+education_allowance_receipt_date+"||education_allowance_not_receipt="+education_allowance_not_receipt+"||education_allowance_receipt_delay="+education_allowance_receipt_delay+"||education_aundan_receipt="+education_aundan_receipt+"||education_aundan_receipt_date="+education_aundan_receipt_date+"||education_aundan_not_receipt="+education_aundan_not_receipt+"||education_aundan_receipt_delay="+education_aundan_receipt_delay+"||school_necessary_rec_conservation_trank="+school_necessary_rec_conservation_trank+"||cmc_metting_log_register="+cmc_metting_log_register+"||cash_register="+cash_register+"||school_visit_register="+school_visit_register+"||school_aundan_expense_cashMemo="+school_aundan_expense_cashMemo+"||check_book="+check_book+"||previous_semister_ACF="+previous_semister_ACF+"||student_attendence_register="+student_attendence_register+"||repair_expense="+repair_expense+"||repair_expense_others="+repair_expense_others+"||expense_prove="+expense_prove+"||chief_executive_officer_month1="+chief_executive_officer_month1+"||chief_executive_officer_month2="+chief_executive_officer_month2+"||chief_executive_officer_month3="+chief_executive_officer_month3+"||chief_executive_officer_month4="+chief_executive_officer_month4+"||chief_executive_officer_month5="+chief_executive_officer_month5+"||chief_executive_officer_month6="+chief_executive_officer_month6+"||up_education_officer_month1="+up_education_officer_month1+"||up_education_officer_month2="+up_education_officer_month2+"||up_education_officer_month3="+up_education_officer_month3+"||up_education_officer_month4="+up_education_officer_month4+"||up_education_officer_month5="+up_education_officer_month5+"||up_education_officer_month6="+up_education_officer_month6+"||training_co_ordinator_month1="+training_co_ordinator_month1+"||training_co_ordinator_month2="+training_co_ordinator_month2+"||training_co_ordinator_month3="+training_co_ordinator_month3+"||training_co_ordinator_month4="+training_co_ordinator_month4+"||training_co_ordinator_month5="+training_co_ordinator_month5+"||training_co_ordinator_month6="+training_co_ordinator_month6+"||assistant_up_education_officer_month1="+assistant_up_education_officer_month1+"||assistant_up_education_officer_month2="+assistant_up_education_officer_month2+"||assistant_up_education_officer_month3="+assistant_up_education_officer_month3+"||assistant_up_education_officer_month4="+assistant_up_education_officer_month4+"||assistant_up_education_officer_month5="+assistant_up_education_officer_month5+"||assistant_up_education_officer_month6="+assistant_up_education_officer_month6+"||assistant_teacher_month1="+assistant_teacher_month1+"||assistant_teacher_month2="+assistant_teacher_month2+"||assistant_teacher_month3="+assistant_teacher_month3+"||assistant_teacher_month4="+assistant_teacher_month4+"||assistant_teacher_month5="+assistant_teacher_month5+"||assistant_teacher_month6="+assistant_teacher_month6+"||mobile_pool_teacher_month1="+mobile_pool_teacher_month1+"||mobile_pool_teacher_month2="+mobile_pool_teacher_month2+"||mobile_pool_teacher_month3="+mobile_pool_teacher_month3+"||mobile_pool_teacher_month4="+mobile_pool_teacher_month4+"||mobile_pool_teacher_month5="+mobile_pool_teacher_month5+"||mobile_pool_teacher_month6="+mobile_pool_teacher_month6+"||others_month1="+others_month1+"||others_month2="+others_month2+"||others_month3="+others_month3+"||others_month4="+others_month4+"||others_month5="+others_month5+"||others_month6="+others_month6;
			
			//alert(ruralData3);
				
			$(".errorChk").text("");
			url="#page5";
			$.mobile.navigate(url);
			
		 } 
		
}


function education_allowance(){
	var education_allowance_receipt=$('#education_allowance_receipt').val();	
	if(education_allowance_receipt==1){
		$('#education_allowance_receipt_date').show();
		$('#edu_allow_not_receipt').hide();
	}else if(education_allowance_receipt==2){
		$('#edu_allow_not_receipt').show();
		$('#education_allowance_receipt_date').hide();
	}else{
		$('#education_allowance_receipt_date').hide();
		$('#edu_allow_not_receipt').hide();;		
	}
}

function edu_aundan(){
	var education_aundan_receipt=$("#education_aundan_receipt").val();
	if(education_aundan_receipt==1){
		$('#education_aundan_receipt_date').show();
		$('#edu_anudan_not_receipt').hide();
	}else if(education_aundan_receipt==2){
		$('#edu_anudan_not_receipt').show();
		$('#education_aundan_receipt_date').hide();
	}else{
		$('#education_aundan_receipt_date').hide();
		$('#edu_anudan_not_receipt').hide();		
	}
}


function expense_repair(){
	var repair_expense4=$("input[name='repair_expense4']:checked").val();
	if(repair_expense4==1){
		$('#expense_repair_others').show();
	}else{
		$('#expense_repair_others').hide();
	}	
}

function ruralData4Next(){
	
		var v_LC_reg_tea_pre=$("#visit_LC_regu_teacher_present").val();//change
		var reg_tea_inst_tea_name=$("#regu_tea_instead_teacher_name").val();//change
		var reg_tea_inst_tea_type=$("#regu_tea_instead_teacher_type").val();//change
		var tea_rep_appo_office=$("#teacher_replaced_appointment_office").val();//change
		var v_dis_id_card_tea=$("#visit_display_id_card_teacher").val();//change
		var dis_tea_house_to_sch=$("#distance_teacher_house_to_school").val();//change
		var pre_semr_schl_tea_trai=$("#previous_semister_school_teacher_training").val();//change
		var cls_atte_stu=$("#class_attendence_students").val();//change
		var v_day_atte_stu_boys=$("#visit_day_attendence_students_boys").val();//change
		var v_day_atte_stu_girls=$("#visit_day_attendence_students_girls").val();//change
		var v_day_atte_stu_total=$("#visit_day_attendence_students_total").val();//change
		var pre_sem_total_sch=$("#previous_semister_total_school_dibos").val();//change
		
		var lcProStdent=$("#lcProSt").val();//change
		
		var deci=/^[-+]?[0-9]+\.[0-9]+$/;
		var decimal=/^\.[0-9]+$/;
		
		if(v_LC_reg_tea_pre=="" || v_LC_reg_tea_pre==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩১");			
		}else if(v_LC_reg_tea_pre!=1 && reg_tea_inst_tea_name=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩২.১");	
		}else if(v_LC_reg_tea_pre!=1 && reg_tea_inst_tea_type==0 && tea_rep_appo_office==0 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩২.২");		
		}else if(v_LC_reg_tea_pre!=1 && reg_tea_inst_tea_type==1 && tea_rep_appo_office==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩২.৩");		
		}else if(v_dis_id_card_tea=="" || v_dis_id_card_tea==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৩");		
		}else if(dis_tea_house_to_sch==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৪");	
		}else if(dis_tea_house_to_sch.length >5){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৪ সর্বাধিক ৫ সংখ্যা");	
		}else if(pre_semr_schl_tea_trai=="" || pre_semr_schl_tea_trai==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৫");	
		}else if(cls_atte_stu=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬");
		}else if(cls_atte_stu.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬ প্লিজ কারেক্ট ভালু");
		}else if(cls_atte_stu.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬ প্লিজ কারেক্ট ভালু");
		}else if(cls_atte_stu>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬ সর্বাধিক ৩ সংখ্যা");
		}else if(lcProStdent=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন ৩৬.১.");	
		}else if(lcProStdent.length >2 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন ৩৬.১. সর্বাধিক ২ সংখ্যা ");
		}else if(lcProStdent.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬.১. প্লিজ কারেক্ট ভালু");
		}else if(lcProStdent.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৬.১. প্লিজ কারেক্ট ভালু");
		}else if(v_day_atte_stu_boys=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালক");
		}else if(v_day_atte_stu_boys.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালক প্লিজ কারেক্ট ভালু");
		}else if(v_day_atte_stu_boys.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালক প্লিজ কারেক্ট ভালু");
		}else if(v_day_atte_stu_boys>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালক - সর্বাধিক ৩ সংখ্যা");
		}else if(v_day_atte_stu_girls=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালিকা");	
		}else if(v_day_atte_stu_girls.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালিকা প্লিজ কারেক্ট ভালু");
		}else if(v_day_atte_stu_girls.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালিকা প্লিজ কারেক্ট ভালু");
		}else if(v_day_atte_stu_girls>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ বালিকা - সর্বাধিক ৩ সংখ্যা");
		}else if(v_day_atte_stu_total=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ মোট");
		}else if(v_day_atte_stu_total>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৭ মোট - সর্বাধিক ৩ সংখ্যা");
		}else if(pre_sem_total_sch=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৮");
		}else if(pre_sem_total_sch.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৮ প্লিজ কারেক্ট ভালু");
		}else if(pre_sem_total_sch.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৮ প্লিজ কারেক্ট ভালু");
		}else if(pre_sem_total_sch>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৩৮ সর্বাধিক ৩ সংখ্যা");	
				
		}else{
			
			ruralData4="||v_LC_reg_tea_pre="+v_LC_reg_tea_pre+"||reg_tea_inst_tea_name="+reg_tea_inst_tea_name+"||reg_tea_inst_tea_type="+reg_tea_inst_tea_type+"||tea_rep_appo_office="+tea_rep_appo_office+"||v_dis_id_card_tea="+v_dis_id_card_tea+"||dis_tea_house_to_sch="+dis_tea_house_to_sch+"||pre_semr_schl_tea_trai="+pre_semr_schl_tea_trai+"||cls_atte_stu="+cls_atte_stu+"||v_day_atte_stu_boys="+v_day_atte_stu_boys+"||v_day_atte_stu_girls="+v_day_atte_stu_girls+"||v_day_atte_stu_total="+v_day_atte_stu_total+"||pre_sem_total_sch="+pre_sem_total_sch;
			
			//alert(ruralData4);
			
			$(".errorChk").text("");
							
			 url="#page6";	
			
			$.mobile.navigate(url);
				
		}	
	
}


function vLCReTeaPre(){
	var v_LC_reg_tea_pre=$("#visit_LC_regu_teacher_present").val();
	if(v_LC_reg_tea_pre==0){
		$("#regTeaInsTeaNam").hide();
		$("#regTeaInsTeaTyp").hide();
		$("#teaRepAppOff").hide();
	}else if(v_LC_reg_tea_pre==1){
		$("#regTeaInsTeaNam").hide();
		$("#regTeaInsTeaTyp").hide();
		$("#teaRepAppOff").hide();
	}else{
		$("#regTeaInsTeaNam").show();
		$("#regTeaInsTeaTyp").show();
		//$("#teaRepAppOff").show();	
	}
}

function regTInsTeaTyp(){
	var reg_tea_inst_tea_type=$("#regu_tea_instead_teacher_type").val();
	if(reg_tea_inst_tea_type==1){
		$("#teaRepAppOff").show();
	}else{
		$("#teaRepAppOff").hide();
	}	
}


function total_student(){	  
	var visit_day_attendence_students_boys=$("#visit_day_attendence_students_boys").val();
	var visit_day_attendence_students_girls=$("#visit_day_attendence_students_girls").val();
	
	if(visit_day_attendence_students_boys==''){
		visit_day_attendence_students_boys=0;
		}
	if(visit_day_attendence_students_girls==''){
		visit_day_attendence_students_girls=0;
		}	
				
	var total_stu=eval(visit_day_attendence_students_boys)+eval(visit_day_attendence_students_girls);	
	$("#visit_day_attendence_students_total").val(total_stu);	  
 }

function ruralData5Next(){		
			
		var lc_name_ot_match_stu=$("#lc_profile_name_not_match_student").val();//change
		var lc_image_not_match_st=$("#lc_profile_image_not_match_student").val();//change
		var pre_semi_exam_gov_pri_sch=$("#previous_semister_exam_gov_primary_school").val();//change
		var pre_sem_exam_reg_stu=$("#previous_semister_exam_register_student").val();//change
		var marriage_abandonment_boys=$("#marriage_abandonment_boys").val();
		var marriage_abandonment_girls=$("#marriage_abandonment_girls").val();
		var marriage_abandonment_total=$("#marriage_abandonment_total").val();
		
		var deci=/^[-+]?[0-9]+\.[0-9]+$/;
		var decimal=/^\.[0-9]+$/;
		
		if(lc_name_ot_match_stu==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪০");
		}else if(lc_name_ot_match_stu.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪০ প্লিজ কারেক্ট ভালু");	
		}else if(lc_name_ot_match_stu.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪০ প্লিজ কারেক্ট ভালু");					
		}else if(lc_name_ot_match_stu>999){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪০ সর্বাধিক ৩ সংখ্যা");
		}else if(lc_image_not_match_st==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪১");	
		}else if(lc_image_not_match_st.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪১ প্লিজ কারেক্ট ভালু");	
		}else if(lc_image_not_match_st.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪১ প্লিজ কারেক্ট ভালু");		
		}else if(lc_image_not_match_st>999){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪১ সর্বাধিক ৩ সংখ্যা");
		}else if(pre_semi_exam_gov_pri_sch=="" || pre_semi_exam_gov_pri_sch==0){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪২");
		}else if(pre_sem_exam_reg_stu=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৩");
		}else if(pre_sem_exam_reg_stu.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৩ প্লিজ কারেক্ট ভালু");
		}else if(pre_sem_exam_reg_stu.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৩ প্লিজ কারেক্ট ভালু");	
		}else if(pre_sem_exam_reg_stu>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৩ সর্বাধিক ৩ সংখ্যা");
		}else if(marriage_abandonment_boys=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালক");
		}else if(marriage_abandonment_boys.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালক প্লিজ কারেক্ট ভালু");	
		}else if(marriage_abandonment_boys.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালক প্লিজ কারেক্ট ভালু");	
		}else if(marriage_abandonment_boys>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালক সর্বাধিক ৩ সংখ্যা");	
		}else if(marriage_abandonment_girls=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালিকা");	
		}else if(marriage_abandonment_girls.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালিকা প্লিজ কারেক্ট ভালু");
		}else if(marriage_abandonment_girls.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালিকা প্লিজ কারেক্ট ভালু");	
		}else if(marriage_abandonment_girls>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ বালিকা সর্বাধিক ৩ সংখ্যা");
		}else if(marriage_abandonment_total=="" ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ মোট");	
		}else if(marriage_abandonment_total>999 ){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৪ মোট সর্বাধিক ৩ সংখ্যা");	
		}else{		
			
	
			
			ruralData5="||lc_name_ot_match_stu="+lc_name_ot_match_stu+"||lc_image_not_match_st="+lc_image_not_match_st+"||pre_semi_exam_gov_pri_sch="+pre_semi_exam_gov_pri_sch+"||pre_sem_exam_reg_stu="+pre_sem_exam_reg_stu+"||marriage_abandonment_boys="+marriage_abandonment_boys+"||marriage_abandonment_girls="+marriage_abandonment_girls+"||marriage_abandonment_total="+marriage_abandonment_total;
			
			//alert(ruralData5C);
			
			$(".errorChk").text("");
							
			 url="#page7";	
			
			$.mobile.navigate(url);
			
		  } 
	
	};
	

function marriage_total_stu(){
	var marriage_abandonment_boys=$("#marriage_abandonment_boys").val();
	var marriage_abandonment_girls=$("#marriage_abandonment_girls").val();
	
	if(marriage_abandonment_boys==''){
		marriage_abandonment_boys=0
	}
	if(marriage_abandonment_girls==''){
		marriage_abandonment_girls=0
	}
	marriage_total=eval(marriage_abandonment_boys)+eval(marriage_abandonment_girls)
	$("#marriage_abandonment_total").val(marriage_total);			
}


	
function ruralData6Next(){
			
		var headmaster_name=$("#headmaster_name").val();
		var headmaster_mobileNo=$("#headmaster_mobileNo").val();
		var headmaster_opinion=$("#headmaster_opinion").val();
		var mobile_pool_teacher_name=$("#mobile_pool_teacher_name").val();
		var mobile_pool_teacher_mobileNo=$("#mobile_pool_teacher_mobileNo").val();
		var mobile_pool_teacher_opinion=$("#mobile_pool_teacher_opinion").val();
		var school_teacher_name=$("#school_teacher_name").val();
		var school_teacher_mobileNo=$("#school_teacher_mobileNo").val();
		var school_teacher_opinion=$("#school_teacher_opinion").val();		
		var visitOfficierName=$("#VisitOfficierName").val();
		var visitOfficierContact=$("#VisitOfficierContact").val();
		var visitOfficerComments=$("#VisitOfficerComments").val();
		
		var deci=/^[-+]?[0-9]+\.[0-9]+$/;
		var decimal=/^\.[0-9]+$/;
		
		if(headmaster_name!="" && headmaster_mobileNo==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান শিক্ষক মোবাইল নম্বর ");
		}else if(headmaster_name!="" && headmaster_mobileNo.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");
		}else if(headmaster_name!="" && headmaster_mobileNo.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");		
		}else if(headmaster_name!="" && headmaster_opinion==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ নিকটবর্তী জিপিএস/ মাদার স্কুলের প্রধান শিক্ষক মতামত");
				
		}else if(mobile_pool_teacher_name!="" && mobile_pool_teacher_mobileNo==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল পুল শিক্ষক মোবাইল নম্বর ");
		}else if(mobile_pool_teacher_name!="" && mobile_pool_teacher_mobileNo.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");
		}else if(mobile_pool_teacher_name!="" && mobile_pool_teacher_mobileNo.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");		
		}else if(mobile_pool_teacher_name!="" && mobile_pool_teacher_opinion==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল পুল শিক্ষক মতামত");
		
		}else if(school_teacher_name!="" && school_teacher_mobileNo==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ আনন্দ স্কুল শিক্ষক মোবাইল নম্বর ");
		}else if(school_teacher_name!="" && school_teacher_mobileNo.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");
		}else if(school_teacher_name!="" && school_teacher_mobileNo.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");	
		}else if(school_teacher_name!="" && school_teacher_opinion==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ আনন্দ স্কুল শিক্ষক মতামত");
		
		}else if(visitOfficierName!="" && visitOfficierContact==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ পরিদর্শনকারী মোবাইল ভ্যালিডেশন অফিসার মোবাইল নম্বর ");
		}else if(visitOfficierName!="" && visitOfficierContact.match(deci)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");
		}else if(visitOfficierName!="" && visitOfficierContact.match(decimal)){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ মোবাইল নম্বর প্লিজ কারেক্ট ভালু");
		}else if(visitOfficierName!="" && visitOfficerComments==""){
			$(".errorChk").text("অবশ্যক- প্রশ্ন-৪৫ পরিদর্শনকারী মোবাইল ভ্যালিডেশন অফিসার মতামত");
			
		}else{
				
			ruralData6="||headmaster_name="+headmaster_name+"||headmaster_mobileNo="+headmaster_mobileNo+"||headmaster_opinion="+headmaster_opinion+"||mobile_pool_teacher_name="+mobile_pool_teacher_name+"||mobile_pool_teacher_mobileNo="+mobile_pool_teacher_mobileNo+"||mobile_pool_teacher_opinion="+mobile_pool_teacher_opinion+"||school_teacher_name="+school_teacher_name+"||school_teacher_mobileNo="+school_teacher_mobileNo+"||school_teacher_opinion="+school_teacher_opinion+"||VisitOfficierName="+visitOfficierName+"||VisitOfficierContact="+visitOfficierContact+"||VisitOfficerComments="+visitOfficerComments;
			
			//alert(ruralData6);
			
			$(".errorChk").text("");
							
			 url="#page8";	
			
			$.mobile.navigate(url);
			
		  } 
	
	};	
	
	
function imageUpload(){
	var d = new Date();	
	var get_time=d.getTime();			
	if(picture_upload==1){
		//winAchInfo();					
		if (imagePath1A!=""){							
			$(".errorChk").text("Syncing photo 1..");
			imageName = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";					
			uploadPhotoAch(imagePath1A, imageName);
		}			
	}else if(picture_upload==2){
		//winAchInfo2();		
		if (imagePath2A!=""){							
			$(".errorChk").text("Syncing photo 2..");
			imageName2 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto2Ach(imagePath2A, imageName2);		
		}			
	}else if(picture_upload==3){
		//winAchInfo3();
		if (imagePath3A!=""){							
			$(".errorChk").text("Syncing photo 3..");
			imageName3 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto3Ach(imagePath3A, imageName3);	
		}
	}else if(picture_upload==4){
		//winAchInfo4();	
		if (imagePath4A!=""){							
			$(".errorChk").text("Syncing photo 4..");
			imageName4 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto4Ach(imagePath4A, imageName4);	
		}
	}else if(picture_upload==5){
		//winAchInfo5();		
		if (imagePath5A!=""){							
			$(".errorChk").text("Syncing photo 5..");
			imageName5 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
			uploadPhoto5Ach(imagePath5A, imageName5);
		}
	}else{
		
			//alert('6');		
		syncData()
	}
}	


function saveImageUpload(){
	alert('image');
	var d = new Date();	
	var get_time=d.getTime();			
	if(picture_upload==1){
		//winAchInfo();					
		if (image1!=""){							
			$(".errorChk").text("Syncing photo 1..");
			imageName = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";					
			uploadPhotoAch(image1, imageName);
		}			
	}else if(picture_upload==2){
		//winAchInfo2();		
		if (image2!=""){							
			$(".errorChk").text("Syncing photo 2..");
			imageName2 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto2Ach(image2, imageName2);		
		}			
	}else if(picture_upload==3){
		//winAchInfo3();
		if (image3!=""){							
			$(".errorChk").text("Syncing photo 3..");
			imageName3 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto3Ach(image3, imageName3);	
		}
	}else if(picture_upload==4){
		//winAchInfo4();	
		if (image4!=""){							
			$(".errorChk").text("Syncing photo 4..");
			imageName4 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
					
			uploadPhoto4Ach(image4, imageName4);	
		}
	}else if(picture_upload==5){
		//winAchInfo5();		
		if (image5!=""){							
			$(".errorChk").text("Syncing photo 5..");
			imageName5 = localStorage.mobile_no+"_"+localStorage.school_code+"_"+get_time+".jpg";
			uploadPhoto5Ach(image5, imageName5);
		}
	}else{
		
			//alert('6');		
		syncData()
	}
}	
		

function ruralDataSubmit(){
		//$("#btn_rural_submit").hide();
		
		var d = new Date();	
		var get_time=d.getTime();		

		
		latitude=$("#ach_lat").val();
		longitude=$("#ach_long").val();
		
		image1=$("#image1").val();
		image2=$("#image2").val();
		image3=$("#image3").val();
		image4=$("#image4").val();
		image5=$("#image5").val();
		
		picType1=$("#picType1").val();
		picType2=$("#picType2").val();
		picType3=$("#picType3").val();
		picType4=$("#picType4").val();
		picType5=$("#picType5").val();
		 		
		if (latitude==undefined || latitude==''){
			latitude=0;
			}
		if (longitude==undefined || longitude==''){
			longitude=0;
			}
			
		
		//------------image 1					
		
		//picture_upload=1;
		//imageUpload();
		
		syncData();	
		}
	//}

function getAchivementImage1() {
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 90,
	targetWidth: 600,
	sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	imagePath1A = imageURI;	
	$("#image1").val(imagePath1A);
	
}

function onFailA(message) {
	imagePath1A="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch(imageURI, imageName) { 	
	//winAchInfoPmt();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/lged_image/syncmobile_lged/fileUploaderLged/"),winAchInfo,onfail,options);
	
}
//image1 end

//-----------------------image 2
function winAchInfo(r) {	
	//$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	picture_upload=2;
	imageUpload();
		
}

function onfail(r) {
	picture_upload=2;

	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_rural_submit").show();

}


function getAchivementImage2() { 
	navigator.camera.getPicture(onSuccess2A, onFail2A, { quality: 90,
	targetWidth: 600,
	sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A(imageURI) {	
    var image = document.getElementById('myImageB');
    image.src = imageURI;
	imagePath2A = imageURI;	
	$("#image2").val(imagePath2A);
	
}

function onFail2A(message) { 
	imagePath2A="";
    alert('Failed because: ' + message);
}


function uploadPhoto2Ach(imageURI, imageName2) { 	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/lged_image/syncmobile_lged/fileUploaderLged/"),winAchInfo2,onfail2,options);
	
}

//-----------------------image 3
function winAchInfo2(r) {	
	//$(".errorChk").text('Image 2 upload successfull. Syncing image 3...');
	picture_upload=3;
	imageUpload();
		
}

function onfail2(r) {
	picture_upload=3;
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_rural_submit").show();
}


function getAchivementImage3() { 
	navigator.camera.getPicture(onSuccess3A, onFail3A, { quality: 90,
	targetWidth: 600,
	sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess3A(imageURI) {	
    var image = document.getElementById('myImageC');
    image.src = imageURI;
	imagePath3A = imageURI;	
	$("#image3").val(imagePath3A);
	
}

function onFail3A(message) { 
	imagePath3A="";
    alert('Failed because: ' + message);
}


function uploadPhoto3Ach(imageURI, imageName3) { 	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName3;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/lged_image/syncmobile_lged/fileUploaderLged/"),winAchInfo3,onfail3,options);
	
}

//-----------------------image 4
function winAchInfo3(r) {	
	//$(".errorChk").text('Image 3 upload successfull. Syncing image 4 ...');
	picture_upload=4;
	imageUpload();
	
}

function onfail3(r) {
	picture_upload=4;
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_rural_submit").show();
}


function getAchivementImage4() { 
	navigator.camera.getPicture(onSuccess4A, onFail4A, { quality: 90,
	targetWidth: 600,
	sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess4A(imageURI) {	
    var image = document.getElementById('myImageD');
    image.src = imageURI;
	imagePath4A = imageURI;	
	$("#image4").val(imagePath4A);
	
}

function onFail4A(message) { 
	imagePath4A="";
    alert('Failed because: ' + message);
}


function uploadPhoto4Ach(imageURI, imageName4) { 	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName4;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/lged_image/syncmobile_lged/fileUploaderLged/"),winAchInfo4,onfail4,options);
	
}

//-----------------------image 5
function winAchInfo4(r) {	
	//$(".errorChk").text('Image 4 upload successfull. Syncing image 5 ...');
	picture_upload=5;
	imageUpload();
		
}

function onfail4(r) {
	picture_upload=5;
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_rural_submit").show();
}


function getAchivementImage5() { 
	navigator.camera.getPicture(onSuccess5A, onFail5A, { quality: 90,
	targetWidth: 600,
	sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess5A(imageURI) {	
    var image = document.getElementById('myImageE');
    image.src = imageURI;
	imagePath5A = imageURI;	
	$("#image5").val(imagePath5A);
	
}

function onFail5A(message) { 
	imagePath5A="";
    alert('Failed because: ' + message);
}


function uploadPhoto5Ach(imageURI, imageName5) { 	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName5;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://107.167.187.177/lged_image/syncmobile_lged/fileUploaderLged/"),winAchInfo5,onfail5,options);
	
}

function winAchInfo5(r) {
	/*$(".errorChk").text('Image 5 upload successfull. Syncing Data ...');
	syncData();*/
	picture_upload=6;
	imageUpload();
}

function onfail5(r) {
	/*$("#errorChk").text('Image upload Failed. Syncing Data...');
	syncData();*/
	picture_upload=6;
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_rural_submit").show();
}


function syncData(){	
			var school_id=$("#school_id").val();
			
			alert(apipath+"rural_data_submit?cid=LGED&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&school_id='+school_id+'&picType1='+picType1+'&image1='+imageName+'&picType2='+picType2+'&image2='+imageName2+'&picType3='+picType3+'&image3='+imageName3+'&picType4='+picType4+'&image4='+imageName4+'&picType5='+picType5+'&image5='+imageName5+'&latitude='+latitude+'&longitude='+longitude+"&ruralData1="+encodeURIComponent(ruralData1)+"&ruralData2="+encodeURIComponent(ruralData2)+"&ruralData3="+encodeURIComponent(ruralData3)+"&ruralData4="+encodeURIComponent(ruralData4)+"&ruralData5="+encodeURIComponent(ruralData5)+"&ruralData6="+encodeURIComponent(ruralData6));
			$.ajax({
					type: 'POST',
					url:apipath+"rural_data_submit?cid=LGED&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&school_id='+school_id+'&picType1='+picType1+'&image1='+imageName+'&picType2='+picType2+'&image2='+imageName2+'&picType3='+picType3+'&image3='+imageName3+'&picType4='+picType4+'&image4='+imageName4+'&picType5='+picType5+'&image5='+imageName5+'&latitude='+latitude+'&longitude='+longitude+"&ruralData1="+encodeURIComponent(ruralData1)+"&ruralData2="+encodeURIComponent(ruralData2)+"&ruralData3="+encodeURIComponent(ruralData3)+"&ruralData4="+encodeURIComponent(ruralData4)+"&ruralData5="+encodeURIComponent(ruralData5)+"&ruralData6="+encodeURIComponent(ruralData6),
					
					success: function(result) {
					   if(result!=''){
						   syncData_2(result)
						   }
					   
					   }});
						
		}

function syncData_2(sl){	
			var school_id=$("#school_id").val();
			alert(apipath+'rural_data_submit_2?&sl='+sl+'&school_id='+school_id+'&tempText1='+encodeURIComponent(stuList));
			$.ajax({
					type: 'POST',
					url:apipath+'rural_data_submit_2?&sl='+sl+'&school_id='+school_id+'&tempText1='+encodeURIComponent(stuList),
					   
					   success: function(result) {
					   if(result=='Success'){
						   
						   //--------------
							/*$("#division").val("");
							$("#district").val("");
							$("#upzila").val("");
							$("#ff_id").val("");
							$("#semister").val(0);
							$("#school_id").val("");
							$("#school_id_short").val("");
							$("#school_name").val("");
							$("#daily_from_time").val("");
							$("#daily_to_time").val("");
							$("#total_hour").val("");
							$("#visit_date").val("");
							$("#school_condition").val(0);
							$("#close_school").val(0);
							$("#close_school_others").val("");							
							$("#next_visit").val(0);
							$("#visit_date_second").val("");
							$("#school_condition_second").val(0);
							$("#close_school_second").val(0);
							$("#close_school_others_second").val("");
							
							$("#school_installation_year").val("");
							$("#school_address_house").val("");
							$("#school_address_vill").val("");				
							$("#school_address_unionName").val("");
							$("#distance_school_near_GPS").val("");
							$("#school_signboard").val(0);
							$("#international_flag_size").val(0);
							$("#school_house").val(0);
							$("#school_house_others").val("");
							$("#school_type").val(0);
							$("#school_type_others").val("");
							$("#singing_national_anthem_before_cls_start").val(0);		
							$("#classroom_aayaton_hight").val("");
							$("#classroom_aayaton_width").val("");							
							$("#huse_light_air").val(0);
							$("#classroom_windows").val("");
							$("#classroom_doors").val("");
							$("#arsenic_free_water").val(0);
							$("#water_distance").val(0);
							$("#student_useable_toilate").val(0);
							$("#benefit_electricity_cls").val(0);
							$("#seat_arragement_cls").val(0);
							$("#cls_usable_board_draster").val(0);
							$("#all_student_textbook").val(0);
							$("#all_student_pen").val(0);
							$("#management_school_calender").val(0);
							$("#management_school_cls_routin").val(0);
							$("#cmc_metting_previous_semister").val("");
							$("#last_cmc_metting_present_cmc_member").val("");
							$("#cmc_selebrate_exchange_gardagin").val(0);
							$("#previous_semister_school_anudan_time").val(0);
							
							$("#education_allowance_receipt").val(0);		
							$("#education_allowance_receipt_date").val("");
							$("#education_allowance_not_receipt").val(0);
							$("#education_allowance_receipt_delay").val("");							
							$("#education_aundan_receipt").val(0);
							$("#education_aundan_receipt_date").val("");
							$("#education_aundan_not_receipt").val(0);
							$("#education_aundan_receipt_delay").val("");
							$("#school_necessary_rec_conservation_trank").val(0);							
							$("#cmc_metting_log_register").val(0);		
							$("#cash_register").val(0);
							$("#school_visit_register").val(0);
							$("#school_aundan_expense_cashMemo").val(0);
							$("#check_book").val(0);
							$("#previous_semister_ACF").val(0);
							$("#student_attendence_register").val(0);
							$("#repair_expense").val(0);
							$("#repair_expense_others").val("");
							$("#expense_prove").val(0);							
							$("#chief_executive_officer_month1").val("");
							$("#chief_executive_officer_month2").val("");
							$("#chief_executive_officer_month3").val("");
							$("#chief_executive_officer_month4").val("");
							$("#chief_executive_officer_month5").val("");
							$("#chief_executive_officer_month6").val("");
							$("#up_education_officer_month1").val("");
							$("#up_education_officer_month2").val("");
							$("#up_education_officer_month3").val("");
							$("#up_education_officer_month4").val("");
							$("#up_education_officer_month5").val("");
							$("#up_education_officer_month6").val("");
							$("#training_co_ordinator_month1").val("");
							$("#training_co_ordinator_month2").val("");
							$("#training_co_ordinator_month3").val("");
							$("#training_co_ordinator_month4").val("");
							$("#training_co_ordinator_month5").val("");
							$("#training_co_ordinator_month6").val("");
							$("#assistant_up_education_officer_month1").val("");
							$("#assistant_up_education_officer_month2").val("");
							$("#assistant_up_education_officer_month3").val("");
							$("#assistant_up_education_officer_month4").val("");
							$("#assistant_up_education_officer_month5").val("");
							$("#assistant_up_education_officer_month6").val("");
							$("#assistant_teacher_month1").val("");
							$("#assistant_teacher_month2").val("");
							$("#assistant_teacher_month3").val("");
							$("#assistant_teacher_month4").val("");
							$("#assistant_teacher_month5").val("");
							$("#assistant_teacher_month6").val("");
							$("#mobile_pool_teacher_month1").val("");
							$("#mobile_pool_teacher_month2").val("");
							$("#mobile_pool_teacher_month3").val("");
							$("#mobile_pool_teacher_month4").val("");
							$("#mobile_pool_teacher_month5").val("");
							$("#mobile_pool_teacher_month6").val("");
							$("#others_month1").val("");
							$("#others_month2").val("");
							$("#others_month3").val("");
							$("#others_month4").val("");
							$("#others_month5").val("");
							$("#others_month6").val("");
							
							$("#visit_LC_regu_teacher_present").val(0);
							$("#regu_tea_instead_teacher_name").val("");
							$("#regu_tea_instead_teacher_type").val(0);
							$("#teacher_replaced_appointment_office").val(0);
							$("#visit_display_id_card_teacher").val(0);
							$("#distance_teacher_house_to_school").val("");
							$("#previous_semister_school_teacher_training").val(0);
							$("#class_attendence_students").val("");
							$("#visit_day_attendence_students_boys").val("");
							$("#visit_day_attendence_students_girls").val("");
							$("#visit_day_attendence_students_total").val("");
							$("#previous_semister_total_school_dibos").val("");
							
							$("#stu3Id").val("");	
							$("#stuPre").val(0);			
							
							$("#lc_profile_name_not_match_student").val("");
							$("#lc_profile_image_not_match_student").val("");
							$("#previous_semister_exam_gov_primary_school").val(0);
							$("#previous_semister_exam_register_student").val("");
							$("#marriage_abandonment_boys").val("");
							$("#marriage_abandonment_girls").val("");
							$("#marriage_abandonment_total").val("");
							
							
							$("#headmaster_name").val("");
							$("#headmaster_mobileNo").val("");
							$("#headmaster_opinion").val("");
							$("#mobile_pool_teacher_name").val("");
							$("#mobile_pool_teacher_mobileNo").val("");
							$("#mobile_pool_teacher_opinion").val("");
							$("#school_teacher_name").val("");
							$("#school_teacher_mobileNo").val("");
							$("#school_teacher_opinion").val("");		
							$("#VisitOfficierName").val("");
							$("#VisitOfficierContact").val("");
							$("#VisitOfficerComments").val("");
							
							$("#image1").val("");
							$("#image2").val("");
							$("#image3").val("");
							$("#image4").val("");
							$("#image5").val("");
							
							$("#picType1").val(0);
							$("#picType2").val(0);
							$("#picType3").val(0);
							$("#picType4").val(0);
							$("#picType5").val(0);
							
							$(".sucChk").text('সফল ভাবে সম্পন হয়েছে');
							stuList="";
							$(".errorChk").text("");
							$("#btn_rural_save").hide();
							$("#btn_rural_submit").hide();
							
							setTimeout(function(){
								window.location.reload(1);	
							},5000);*/
												
						}else{
							$(".errorChk").text('অসম্পন হয়েছে');																	
							$("#btn_rural_submit").show();
							$("#btn_rural_save").show();
							}
							
					 }//end result
						   
				});

}

schCount=0;
saveSchList="";
function ruralDataSave(){
	var school_id=$("#school_id").val();
	var school_name=$("#school_name").val();
	
	ruralData1=ruralData1
	ruralData2=ruralData2
	ruralData3=ruralData3
	ruralData4=ruralData4
	ruralData5=ruralData5
	ruralData6=ruralData6
	stuList=stuList
	
	latitude=$("#ach_lat").val();
	longitude=$("#ach_long").val();
	
	image1=$("#image1").val();
	image2=$("#image2").val();
	image3=$("#image3").val();
	image4=$("#image4").val();
	image5=$("#image5").val();
	
	picType1=$("#picType1").val();
	picType2=$("#picType2").val();
	picType3=$("#picType3").val();
	picType4=$("#picType4").val();
	picType5=$("#picType5").val();
				
	if (latitude==undefined || latitude==''){
		latitude=0;
		}
	if (longitude==undefined || longitude==''){
		longitude=0;
		}
	
	if(localStorage.sSchList==eval(undefined)){
		localStorage.sSchList +="<rd>"+school_id+"<fdfd>"+school_name+"<fdfd>"+latitude+"<fdfd>"+longitude+"<fdfd>"+image1+"<fdfd>"+image2+"<fdfd>"+image3+"<fdfd>"+image4+"<fdfd>"+image5+"<fdfd>"+picType1+"<fdfd>"+picType2+"<fdfd>"+picType3+"<fdfd>"+picType4+"<fdfd>"+picType5+"<fdfd>"+ruralData1+"<fdfd>"+ruralData2+"<fdfd>"+ruralData3+"<fdfd>"+ruralData4+"<fdfd>"+ruralData5+"<fdfd>"+ruralData6+"<fdfd>"+stuList;
		
		<!---->
			$("#division").val("");
			$("#district").val("");
			$("#upzila").val("");
			$("#ff_id").val("");
			$("#semister").val(0);
			$("#school_id").val("");
			$("#school_id_short").val("");
			$("#school_name").val("");
			$("#daily_from_time").val("");
			$("#daily_to_time").val("");
			$("#total_hour").val("");
			$("#visit_date").val("");
			$("#school_condition").val(0);
			$("#close_school").val(0);
			$("#close_school_others").val("");							
			$("#next_visit").val(0);
			$("#visit_date_second").val("");
			$("#school_condition_second").val(0);
			$("#close_school_second").val(0);
			$("#close_school_others_second").val("");
			
			$("#school_installation_year").val("");
			$("#school_address_house").val("");
			$("#school_address_vill").val("");				
			$("#school_address_unionName").val("");
			$("#distance_school_near_GPS").val("");
			$("#school_signboard").val(0);
			$("#international_flag_size").val(0);
			$("#school_house").val(0);
			$("#school_house_others").val("");
			$("#school_type").val(0);
			$("#school_type_others").val("");
			$("#singing_national_anthem_before_cls_start").val(0);		
			$("#classroom_aayaton_hight").val("");
			$("#classroom_aayaton_width").val("");							
			$("#huse_light_air").val(0);
			$("#classroom_windows").val("");
			$("#classroom_doors").val("");
			$("#arsenic_free_water").val(0);
			$("#water_distance").val(0);
			$("#student_useable_toilate").val(0);
			$("#benefit_electricity_cls").val(0);
			$("#seat_arragement_cls").val(0);
			$("#cls_usable_board_draster").val(0);
			$("#all_student_textbook").val(0);
			$("#all_student_pen").val(0);
			$("#management_school_calender").val(0);
			$("#management_school_cls_routin").val(0);
			$("#cmc_metting_previous_semister").val("");
			$("#last_cmc_metting_present_cmc_member").val("");
			$("#cmc_selebrate_exchange_gardagin").val(0);
			$("#previous_semister_school_anudan_time").val(0);
			
			$("#education_allowance_receipt").val(0);		
			$("#education_allowance_receipt_date").val("");
			$("#education_allowance_not_receipt").val(0);
			$("#education_allowance_receipt_delay").val("");							
			$("#education_aundan_receipt").val(0);
			$("#education_aundan_receipt_date").val("");
			$("#education_aundan_not_receipt").val(0);
			$("#education_aundan_receipt_delay").val("");
			$("#school_necessary_rec_conservation_trank").val(0);							
			$("#cmc_metting_log_register").val(0);		
			$("#cash_register").val(0);
			$("#school_visit_register").val(0);
			$("#school_aundan_expense_cashMemo").val(0);
			$("#check_book").val(0);
			$("#previous_semister_ACF").val(0);
			$("#student_attendence_register").val(0);
			$("#repair_expense").val(0);
			$("#repair_expense_others").val("");
			$("#expense_prove").val(0);							
			$("#chief_executive_officer_month1").val("");
			$("#chief_executive_officer_month2").val("");
			$("#chief_executive_officer_month3").val("");
			$("#chief_executive_officer_month4").val("");
			$("#chief_executive_officer_month5").val("");
			$("#chief_executive_officer_month6").val("");
			$("#up_education_officer_month1").val("");
			$("#up_education_officer_month2").val("");
			$("#up_education_officer_month3").val("");
			$("#up_education_officer_month4").val("");
			$("#up_education_officer_month5").val("");
			$("#up_education_officer_month6").val("");
			$("#training_co_ordinator_month1").val("");
			$("#training_co_ordinator_month2").val("");
			$("#training_co_ordinator_month3").val("");
			$("#training_co_ordinator_month4").val("");
			$("#training_co_ordinator_month5").val("");
			$("#training_co_ordinator_month6").val("");
			$("#assistant_up_education_officer_month1").val("");
			$("#assistant_up_education_officer_month2").val("");
			$("#assistant_up_education_officer_month3").val("");
			$("#assistant_up_education_officer_month4").val("");
			$("#assistant_up_education_officer_month5").val("");
			$("#assistant_up_education_officer_month6").val("");
			$("#assistant_teacher_month1").val("");
			$("#assistant_teacher_month2").val("");
			$("#assistant_teacher_month3").val("");
			$("#assistant_teacher_month4").val("");
			$("#assistant_teacher_month5").val("");
			$("#assistant_teacher_month6").val("");
			$("#mobile_pool_teacher_month1").val("");
			$("#mobile_pool_teacher_month2").val("");
			$("#mobile_pool_teacher_month3").val("");
			$("#mobile_pool_teacher_month4").val("");
			$("#mobile_pool_teacher_month5").val("");
			$("#mobile_pool_teacher_month6").val("");
			$("#others_month1").val("");
			$("#others_month2").val("");
			$("#others_month3").val("");
			$("#others_month4").val("");
			$("#others_month5").val("");
			$("#others_month6").val("");
			
			$("#visit_LC_regu_teacher_present").val(0);
			$("#regu_tea_instead_teacher_name").val("");
			$("#regu_tea_instead_teacher_type").val(0);
			$("#teacher_replaced_appointment_office").val(0);
			$("#visit_display_id_card_teacher").val(0);
			$("#distance_teacher_house_to_school").val("");
			$("#previous_semister_school_teacher_training").val(0);
			$("#class_attendence_students").val("");
			$("#visit_day_attendence_students_boys").val("");
			$("#visit_day_attendence_students_girls").val("");
			$("#visit_day_attendence_students_total").val("");
			$("#previous_semister_total_school_dibos").val("");
			
			$("#stu3Id").val("");	
			$("#stuPre").val(0);			
			
			$("#lc_profile_name_not_match_student").val("");
			$("#lc_profile_image_not_match_student").val("");
			$("#previous_semister_exam_gov_primary_school").val(0);
			$("#previous_semister_exam_register_student").val("");
			$("#marriage_abandonment_boys").val("");
			$("#marriage_abandonment_girls").val("");
			$("#marriage_abandonment_total").val("");
			
			
			$("#headmaster_name").val("");
			$("#headmaster_mobileNo").val("");
			$("#headmaster_opinion").val("");
			$("#mobile_pool_teacher_name").val("");
			$("#mobile_pool_teacher_mobileNo").val("");
			$("#mobile_pool_teacher_opinion").val("");
			$("#school_teacher_name").val("");
			$("#school_teacher_mobileNo").val("");
			$("#school_teacher_opinion").val("");		
			$("#VisitOfficierName").val("");
			$("#VisitOfficierContact").val("");
			$("#VisitOfficerComments").val("");
			
			$("#image1").val("");
			$("#image2").val("");
			$("#image3").val("");
			$("#image4").val("");
			$("#image5").val("");
			
			$("#picType1").val(0);
			$("#picType2").val(0);
			$("#picType3").val(0);
			$("#picType4").val(0);
			$("#picType5").val(0);
			
			stuList="";
			<!---->
			
			$(".sucChk").text('সফল ভাবে সংরক্ষণ করা হয়েছে');
			$("#btn_rural_save").hide();
			$("#btn_rural_submit").hide();
			
			setTimeout(function(){
				window.location.reload(1);	
			},5000);
		
	}else{
		
		sStrClk=localStorage.sSchList.split('<rd>');
		SlenC=sStrClk.length
		
		if(SlenC<21){
			localStorage.sSchList +="<rd>"+school_id+"<fdfd>"+school_name+"<fdfd>"+latitude+"<fdfd>"+longitude+"<fdfd>"+image1+"<fdfd>"+image2+"<fdfd>"+image3+"<fdfd>"+image4+"<fdfd>"+image5+"<fdfd>"+picType1+"<fdfd>"+picType2+"<fdfd>"+picType3+"<fdfd>"+picType4+"<fdfd>"+picType5+"<fdfd>"+ruralData1+"<fdfd>"+ruralData2+"<fdfd>"+ruralData3+"<fdfd>"+ruralData4+"<fdfd>"+ruralData5+"<fdfd>"+ruralData6+"<fdfd>"+stuList;
			
			<!---->
			$("#division").val("");
			$("#district").val("");
			$("#upzila").val("");
			$("#ff_id").val("");
			$("#semister").val(0);
			$("#school_id").val("");
			$("#school_id_short").val("");
			$("#school_name").val("");
			$("#daily_from_time").val("");
			$("#daily_to_time").val("");
			$("#total_hour").val("");
			$("#visit_date").val("");
			$("#school_condition").val(0);
			$("#close_school").val(0);
			$("#close_school_others").val("");							
			$("#next_visit").val(0);
			$("#visit_date_second").val("");
			$("#school_condition_second").val(0);
			$("#close_school_second").val(0);
			$("#close_school_others_second").val("");
			
			$("#school_installation_year").val("");
			$("#school_address_house").val("");
			$("#school_address_vill").val("");				
			$("#school_address_unionName").val("");
			$("#distance_school_near_GPS").val("");
			$("#school_signboard").val(0);
			$("#international_flag_size").val(0);
			$("#school_house").val(0);
			$("#school_house_others").val("");
			$("#school_type").val(0);
			$("#school_type_others").val("");
			$("#singing_national_anthem_before_cls_start").val(0);		
			$("#classroom_aayaton_hight").val("");
			$("#classroom_aayaton_width").val("");							
			$("#huse_light_air").val(0);
			$("#classroom_windows").val("");
			$("#classroom_doors").val("");
			$("#arsenic_free_water").val(0);
			$("#water_distance").val(0);
			$("#student_useable_toilate").val(0);
			$("#benefit_electricity_cls").val(0);
			$("#seat_arragement_cls").val(0);
			$("#cls_usable_board_draster").val(0);
			$("#all_student_textbook").val(0);
			$("#all_student_pen").val(0);
			$("#management_school_calender").val(0);
			$("#management_school_cls_routin").val(0);
			$("#cmc_metting_previous_semister").val("");
			$("#last_cmc_metting_present_cmc_member").val("");
			$("#cmc_selebrate_exchange_gardagin").val(0);
			$("#previous_semister_school_anudan_time").val(0);
			
			$("#education_allowance_receipt").val(0);		
			$("#education_allowance_receipt_date").val("");
			$("#education_allowance_not_receipt").val(0);
			$("#education_allowance_receipt_delay").val("");							
			$("#education_aundan_receipt").val(0);
			$("#education_aundan_receipt_date").val("");
			$("#education_aundan_not_receipt").val(0);
			$("#education_aundan_receipt_delay").val("");
			$("#school_necessary_rec_conservation_trank").val(0);							
			$("#cmc_metting_log_register").val(0);		
			$("#cash_register").val(0);
			$("#school_visit_register").val(0);
			$("#school_aundan_expense_cashMemo").val(0);
			$("#check_book").val(0);
			$("#previous_semister_ACF").val(0);
			$("#student_attendence_register").val(0);
			$("#repair_expense").val(0);
			$("#repair_expense_others").val("");
			$("#expense_prove").val(0);							
			$("#chief_executive_officer_month1").val("");
			$("#chief_executive_officer_month2").val("");
			$("#chief_executive_officer_month3").val("");
			$("#chief_executive_officer_month4").val("");
			$("#chief_executive_officer_month5").val("");
			$("#chief_executive_officer_month6").val("");
			$("#up_education_officer_month1").val("");
			$("#up_education_officer_month2").val("");
			$("#up_education_officer_month3").val("");
			$("#up_education_officer_month4").val("");
			$("#up_education_officer_month5").val("");
			$("#up_education_officer_month6").val("");
			$("#training_co_ordinator_month1").val("");
			$("#training_co_ordinator_month2").val("");
			$("#training_co_ordinator_month3").val("");
			$("#training_co_ordinator_month4").val("");
			$("#training_co_ordinator_month5").val("");
			$("#training_co_ordinator_month6").val("");
			$("#assistant_up_education_officer_month1").val("");
			$("#assistant_up_education_officer_month2").val("");
			$("#assistant_up_education_officer_month3").val("");
			$("#assistant_up_education_officer_month4").val("");
			$("#assistant_up_education_officer_month5").val("");
			$("#assistant_up_education_officer_month6").val("");
			$("#assistant_teacher_month1").val("");
			$("#assistant_teacher_month2").val("");
			$("#assistant_teacher_month3").val("");
			$("#assistant_teacher_month4").val("");
			$("#assistant_teacher_month5").val("");
			$("#assistant_teacher_month6").val("");
			$("#mobile_pool_teacher_month1").val("");
			$("#mobile_pool_teacher_month2").val("");
			$("#mobile_pool_teacher_month3").val("");
			$("#mobile_pool_teacher_month4").val("");
			$("#mobile_pool_teacher_month5").val("");
			$("#mobile_pool_teacher_month6").val("");
			$("#others_month1").val("");
			$("#others_month2").val("");
			$("#others_month3").val("");
			$("#others_month4").val("");
			$("#others_month5").val("");
			$("#others_month6").val("");
			
			$("#visit_LC_regu_teacher_present").val(0);
			$("#regu_tea_instead_teacher_name").val("");
			$("#regu_tea_instead_teacher_type").val(0);
			$("#teacher_replaced_appointment_office").val(0);
			$("#visit_display_id_card_teacher").val(0);
			$("#distance_teacher_house_to_school").val("");
			$("#previous_semister_school_teacher_training").val(0);
			$("#class_attendence_students").val("");
			$("#visit_day_attendence_students_boys").val("");
			$("#visit_day_attendence_students_girls").val("");
			$("#visit_day_attendence_students_total").val("");
			$("#previous_semister_total_school_dibos").val("");
			
			$("#stu3Id").val("");	
			$("#stuPre").val(0);			
			
			$("#lc_profile_name_not_match_student").val("");
			$("#lc_profile_image_not_match_student").val("");
			$("#previous_semister_exam_gov_primary_school").val(0);
			$("#previous_semister_exam_register_student").val("");
			$("#marriage_abandonment_boys").val("");
			$("#marriage_abandonment_girls").val("");
			$("#marriage_abandonment_total").val("");
			
			
			$("#headmaster_name").val("");
			$("#headmaster_mobileNo").val("");
			$("#headmaster_opinion").val("");
			$("#mobile_pool_teacher_name").val("");
			$("#mobile_pool_teacher_mobileNo").val("");
			$("#mobile_pool_teacher_opinion").val("");
			$("#school_teacher_name").val("");
			$("#school_teacher_mobileNo").val("");
			$("#school_teacher_opinion").val("");		
			$("#VisitOfficierName").val("");
			$("#VisitOfficierContact").val("");
			$("#VisitOfficerComments").val("");
			
			$("#image1").val("");
			$("#image2").val("");
			$("#image3").val("");
			$("#image4").val("");
			$("#image5").val("");
			
			$("#picType1").val(0);
			$("#picType2").val(0);
			$("#picType3").val(0);
			$("#picType4").val(0);
			$("#picType5").val(0);
			
			stuList="";
			<!---->
			
			$(".sucChk").text('সফল ভাবে সংরক্ষণ করা হয়েছে');
			$("#btn_rural_save").hide();
			$("#btn_rural_submit").hide();
			
			setTimeout(function(){
				window.location.reload(1);	
			},5000);
			
		}else{
			$(".errorChk").text('সর্বাধিক ৫ স্কুল সংরক্ষণ করা যাবে');			
		}
	}
	
	
	
	
}


schoolID='';
saveStuList='';
function saveDataSubmit(sSchLi){
	sStr=localStorage.sSchList.split('<rd>');
	iLen=sStr.length
	for(i=0;i<iLen;i++){
		sStrD=sStr[i].split('<fdfd>');
		if(sStrD[0]==sSchLi){
			schoolIDS=sStrD[0]
			schoolNameS=sStrD[1]
			latitudeS=sStrD[2]
			longitudeS=sStrD[3]
			image1S=sStrD[4]
			image2S=sStrD[5]
			image3S=sStrD[6]
			image4S=sStrD[7]
			image5S=sStrD[8]
			picType1S=sStrD[9]
			picType2S=sStrD[10]
			picType3S=sStrD[11]
			picType4S=sStrD[12]
			picType5S=sStrD[13]
			ruralData1S=sStrD[14]
			ruralData2S=sStrD[15]
			ruralData3S=sStrD[16]
			ruralData4S=sStrD[17]
			ruralData5S=sStrD[18]
			ruralData6S=sStrD[19]
			saveStuListS=sStrD[20]
		}
	}
	
	
	 picture_upload=1;
	 saveImageUpload();
	
	alert(apipath+"rural_data_submit?cid=LGED&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&school_id='+schoolIDS+'&picType1='+picType1S+'&image1='+image1S+'&picType2='+picType2S+'&image2='+image2S+'&picType3='+picType3S+'&image3='+image3S+'&picType4='+picType4S+'&image4='+image4S+'&picType5='+picType5S+'&image5='+image5S+'&latitude='+latitudeS+'&longitude='+longitudeS+"&ruralData1="+encodeURIComponent(ruralData1S)+"&ruralData2="+encodeURIComponent(ruralData2S)+"&ruralData3="+encodeURIComponent(ruralData3S)+"&ruralData4="+encodeURIComponent(ruralData4S)+"&ruralData5="+encodeURIComponent(ruralData5S)+"&ruralData6="+encodeURIComponent(ruralData6S));

	$.ajax({
		type: 'POST',
		url:apipath+"rural_data_submit?cid=LGED&mobile_no="+localStorage.mobile_no+"&syncCode="+localStorage.sync_code+'&school_id='+schoolIDS+'&picType1='+picType1S+'&image1='+image1S+'&picType2='+picType2S+'&image2='+image2S+'&picType3='+picType3S+'&image3='+image3S+'&picType4='+picType4S+'&image4='+image4S+'&picType5='+picType5S+'&image5='+image5S+'&latitude='+latitudeS+'&longitude='+longitudeS+"&ruralData1="+encodeURIComponent(ruralData1S)+"&ruralData2="+encodeURIComponent(ruralData2S)+"&ruralData3="+encodeURIComponent(ruralData3S)+"&ruralData4="+encodeURIComponent(ruralData4S)+"&ruralData5="+encodeURIComponent(ruralData5S)+"&ruralData6="+encodeURIComponent(ruralData6S),
		
		success: function(res) {
		   if(res!=''){
			  
			   saveDataSubmit_2(res)
			   }
		   
		   }});
				
	}

function saveDataSubmit_2(sl){	
		//alert(apipath+'rural_data_submit_2?&sl='+sl+'&school_id='+schoolIDS+'&tempText1='+encodeURIComponent(saveStuListS));
		$.ajax({
				type: 'POST',
				url:apipath+'rural_data_submit_2?&sl='+sl+'&school_id='+schoolIDS+'&tempText1='+encodeURIComponent(saveStuListS),
				   
				   success: function(res) {
				   if(res=='Success'){
					    sStrS=localStorage.sSchList.split('<rd>');
						iLenS=sStrS.length
						var rSsch='';
						for(i=0;i<iLenS;i++){
							sStrDS=sStrS[i].split('<fdfd>');
							if(parseInt(sStrDS[0])!=parseInt(schoolIDS)){
								if (rSsch==''){
									rSsch=sStrS[i]
								}else{
									rSsch+='<rd>'+sStrS[i]
								}				
						}
					}
					localStorage.sSchList=rSsch;
					review();
					
						
						
						$(".sucChk").text('সফল ভাবে সম্পন হয়েছে');
						$(".errorChk").text("");
																
					}else{
						$(".errorChk").text('অসম্পন হয়েছে');																	
						$("#btn_rural_submit").show();
						}
						
				 }//end result
					   
			});
	
	
}


function review(){
	$(".sucChk").text("");
	var sSchStr=localStorage.sSchList.split('<rd>');
	sSchDataList='';
	for (i=1;i<sSchStr.length;i++){
		sSchLi=sSchStr[i].split('<fdfd>');
		sSchDataList+='<tr><td><a>'+sSchLi[0]+'-'+sSchLi[1]+'</a></td><td><input class="ui-btn ui-input-btn ui-corner-all ui-shadow" type="submit" id="" name="" value="Submit" onclick="saveDataSubmit(\''+sSchLi[0]+'\')" /></td><td><input class="ui-btn ui-input-btn ui-corner-all ui-shadow" type="Submit" id="" name="" value="X" onclick="saveDataRemove(\''+sSchLi[0]+'\')" /></td></tr>' 
	}
	
	$("#sRuralData").empty();
	$("#sRuralData").append(sSchDataList);
	
	url="#review_page";
	$.mobile.navigate(url);	
}


function saveDataRemove(sSchLi){
	//$("#"+sSchLi).remove();			
	sStrR=localStorage.sSchList.split('<rd>');
	iLenSR=sStrR.length
	var srSR='';
	for(i=0;i<iLenSR;i++){
		sStrDR=sStrR[i].split('<fdfd>');
		if(parseInt(sStrDR[0])!=parseInt(sSchLi)){
			if (srSR==''){
				srSR=sStrR[i]
			}else{
				srSR+='<rd>'+sStrR[i]
			}				
	}
}
localStorage.sSchList=srSR;
	review()
}	



function blank_data() {

ruralData2="||school_installation_year=0||school_address_house=0||school_address_vill=0||school_address_unionName=0||distance_school_near_GPS=0||school_signboard=0||international_flag_size=0||school_house=0||school_house_others=0||school_type=0||school_type_others=0||singing_national_anthem_before_cls_start=0||classroom_aayaton_hight=0||classroom_aayaton_width=0||huse_light_air=0||classroom_windows=0||classroom_doors=0||arsenic_free_water=0||water_distance=0||student_useable_toilate=0||benefit_electricity_cls=0||seat_arragement_cls=0||cls_usable_board_draster=0||all_student_textbook=0||all_student_pen=0||management_school_calender=0||management_school_cls_routin=0||cmc_metting_previous_semister=0||last_cmc_metting_present_cmc_member=0||cmc_selebrate_exchange_gardagin=0||previous_semister_school_anudan_time=0";	


ruralData3="||education_allowance_receipt=0||education_allowance_receipt_date=0||education_allowance_not_receipt=0||education_allowance_receipt_delay=0||education_aundan_receipt=0||education_aundan_receipt_date=||education_aundan_not_receipt=0||education_aundan_receipt_delay=0||school_necessary_rec_conservation_trank=0||cmc_metting_log_register=0||cash_register=0||school_visit_register=0||school_aundan_expense_cashMemo=0||check_book=0||previous_semister_ACF=0||student_attendence_register=0||repair_expense=0||repair_expense_others=0||expense_prove=0||chief_executive_officer_month1=0||chief_executive_officer_month2=0||chief_executive_officer_month3=0||chief_executive_officer_month4=0||chief_executive_officer_month5=0||chief_executive_officer_month6=0||up_education_officer_month1=0||up_education_officer_month2=0||up_education_officer_month3=0||up_education_officer_month4=0||up_education_officer_month5=0||up_education_officer_month6=0||training_co_ordinator_month1=0||training_co_ordinator_month2=0||training_co_ordinator_month3=0||training_co_ordinator_month4=0||training_co_ordinator_month5=0||training_co_ordinator_month6=0||assistant_up_education_officer_month1=0||assistant_up_education_officer_month2=0||assistant_up_education_officer_month3=0||assistant_up_education_officer_month4=0||assistant_up_education_officer_month5=0||assistant_up_education_officer_month6=0||assistant_teacher_month1=0||assistant_teacher_month2=0||assistant_teacher_month3=0||assistant_teacher_month4=0||assistant_teacher_month5=0||assistant_teacher_month6=0||mobile_pool_teacher_month1=0||mobile_pool_teacher_month2=0||mobile_pool_teacher_month3=0||mobile_pool_teacher_month4=0||mobile_pool_teacher_month5=0||mobile_pool_teacher_month6=0||others_month1=0||others_month2=0||others_month3=0||others_month4=0||others_month5=0||others_month6=0";

ruralData4="||v_LC_reg_tea_pre=0||reg_tea_inst_tea_name=0||reg_tea_inst_tea_type=0||tea_rep_appo_office=0||v_dis_id_card_tea=0||dis_tea_house_to_sch=0||pre_semr_schl_tea_trai=0||cls_atte_stu=0||v_day_atte_stu_boys=0||v_day_atte_stu_girls=0||v_day_atte_stu_total=0||pre_sem_total_sch=0";

stuList='0,0,0';

ruralData5="||lc_name_ot_match_stu=0||lc_image_not_match_st=0||pre_semi_exam_gov_pri_sch=0||pre_sem_exam_reg_stu=0||marriage_abandonment_boys=0||marriage_abandonment_girls=0||marriage_abandonment_total=0";

ruralData6="||headmaster_name=0||headmaster_mobileNo=0||headmaster_opinion=0||mobile_pool_teacher_name=0||mobile_pool_teacher_mobileNo=0||mobile_pool_teacher_opinion=0||school_teacher_name=0||school_teacher_mobileNo=0||school_teacher_opinion=0||VisitOfficierName=0||VisitOfficierContact=0||VisitOfficerComments=0";

}


function exit() {
navigator.app.exitApp();
//navigator.device.exitApp();
}
