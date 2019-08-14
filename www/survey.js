$.afui.useOSThemes=false;
    $.afui.loadDefaultHash=true;
    $.afui.autoLaunch=false;

    //check search
    var search=document.location.search.toLowerCase().replace("?","");
    if(search.length>0)
    {

       $.afui.useOSThemes=true;
        if(search=="win8")
            $.os.ie=true;
        else if(search=="firefox")
            $.os.fennec="true"
        $.afui.ready(function(){
            $(document.body).get(0).className=(search);
        });
    }

/******** jahangirEditedStart16Feb apipath *****************/

//var  apipath ='http://127.0.0.1:8000/acme/medSearch/'

var  apipath ='http://a007.yeapps.com/acme/medSearch/'
//var  apipath ='http://127.0.0.1:8000/acme/medSearch/'
/******** jahangirEditedEnd16 apipath *****************/



    $(document).ready(function(){
        $.afui.launch();
		//localStorage.prProdID_Str='';
		//alert('Local : '+ localStorage.prProdID_Str);
		
		localStorage.location_error=''
		$("#wait_image_login").hide();
		$('#menu_lv').empty()
		$('#menu_lv').append(localStorage.menu_list);
		
		$("#wait_image_login").hide();
		$("#loginButton").show();
		
		$("#wait_image_schedule_date").hide();		
		$("#btn_schedule_date").show();
		
		$("#wait_image_schedule_ret").hide();		
		$("#btn_schedule_ret").show();
		
		$("#wait_image_unschedule_market").hide();		
		$("#btn_unschedule_market").show();
		
		$("#wait_image_ret").hide();	
		$("#wait_image_unschedule_market_ret").hide();		
		$("#btn_unschedule_market_ret").show();
		
		$("#wait_image_visit_submit").hide();		
		$("#visit_submit").show();
		
		$("#wait_image_delivery_submit").hide();		
		$("#btn_delivery_submit").show();
		
		$("#wait_image_delivery_dealer").hide();		
		$("#btn_delivery_dealer").show();
		
		$("#wait_image_profile_market").hide();		
		$("#btn_profile_market").show();
		
		$("#wait_image_profile_market_ret").hide();		
		$("#btn_profile_market_ret").show();
		
		$("#wait_image_profile_update").hide();		
		$("#btn_profile_update").show();
		
		$("#wait_image_visit_plan_market").hide();		
		$("#btn_visit_plan_market").show();
		
		$("#wait_image_visit_plan_submit").hide();		
		$("#btn_visit_plan_submit").show();
		
		$("#wait_image_visit_report").hide();
		
		$("#wait_image_complain_submit").hide();
		$("#btn_complain_submit").show();	
		
		$("#wait_image_region_report").hide();
		
		//$("#visit_location_doc").show();
		$("#visit_submit_doc").show();	
		$("#checkLocation_doc").html('');
		$("#wait_image_visit_submit_doc").hide('');
		
		$("#order_load").hide();
		
		$("#wait_image_stock").hide();
		$("#wait_image_outstanding").show();
		
		if (localStorage.rx_show=='YES'){$("#rx_button").show();}else{$("#rx_button").hide();}
		
		getLocationInfo_ready();
		
		//$("#se_mpo").val(localStorage.user_id);

		//alert (localStorage.unschedule_market_cmb_id)
		$('#market_combo_id_lv').empty();
		$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
		$('#item_combo_id_lv').empty()
		$('#item_combo_id_lv').append(localStorage.product_tbl_str);
		
		
		$("#item_combo_id").val('A')
		searchProduct()
		//bonusCombo()
		 page_stock()
		
		
		$('#campaign_combo_id_lv').empty();
		$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
		$('#sample_combo_id_lv').empty();
		$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);
		$('#gift_combo_id_lv').empty();
		$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
		//alert (localStorage.product_tbl_doc_sample)
		$('#ppm_combo_id_lv').empty();
		$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
		

		$('#visit_submit').hide();
		
		if (localStorage.user_type=='sup'){
		 checkRequest()
		}
		checkInbox();
		
		if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){
		
			campaign_show_1=localStorage.campaign_show_1;
			gift_show_1=localStorage.gift_show_1;
			sample_show_1=localStorage.sample_show_1;
			
			ppm_show_1=localStorage.ppm_show_1;
			
			//alert (localStorage.sample_show_1);
			
			
			if  ((campaign_show_1.length > 0 ) & (campaign_show_1.indexOf('undefined')==-1 )){
				$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");
			}
			if  ((gift_show_1.length > 0 ) & (gift_show_1.indexOf('undefined')==-1 )){
				$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	
			}
			if  ((ppm_show_1.length > 0 ) & (ppm_show_1.indexOf('undefined')==-1 )){
				$("#doc_ppm").html("</br>"+localStorage.ppm_show_1+"</br>");	
			}
			if  ((sample_show_1.length > 0 ) & (sample_show_1.indexOf('undefined')==-1 )){
				$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");
			}
	
			$(".market").html(localStorage.visit_market_show);
			$(".visit_client").html(localStorage.visit_client_show.split('|')[0]);
			
			
			
			//var url = "#page_visit_doc";
	//		$.mobile.navigate(url);	
		}
		
		//================== Redirect to visit page
		
		else if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
			$("#sch_date").val(localStorage.scheduled_date);
			
			$(".market").html(localStorage.visit_market_show);
			$(".visit_distributor").html(localStorage.visit_distributor_nameid);
			$(".visit_type").html(localStorage.visit_type);								
			$(".s_date").html(localStorage.scheduled_date);
			$(".visit_client").html(localStorage.visit_client_show);
			mobile_off_flag=1;
			
			//var url = "#page_visit ";
	//		$.mobile.navigate(url);	
			getOrder_load();	
		}
		
		
			//first_page();
			
	
		if (localStorage.visit_location_flag!='YES'){
				$("#visit_location").hide();
				$("#visit_submit").show();
		}
		if (localStorage.delivery_date_flag=='YES'){
			$("#delivery_date_div").show();
		}
		else{
			$("#delivery_date_div").hide();
		}
		if (localStorage.collection_date_flag=='YES'){
			$("#collection_date_div").show();
		}
		else{
			$("#collection_date_div").hide();
		}
		if (localStorage.payment_date_flag=='YES'){
			$("#payment_date_div").show();
		}
		else{
			$("#payment_date_div").hide();
		}
		if (localStorage.payment_mode_flag=='YES'){
			localStorage.payment_mode='Cash'
			$("#payment_mode_div").show();
		}
		else{
			$("#payment_mode_div").hide();
		}
		
		//reports();
	//===============SetPR=================
	for (j=0; j < 10; j++){
		var picNo=parseInt(j)+1 
		var imageDiv="myImage"+picNo
		var imageText="prPhoto"+picNo
		var imageSource=''
		
		
		if (picNo==1){
			imageSource=localStorage.prPhoto1
		}
		if (picNo==2){
			imageSource=localStorage.prPhoto2
		}
		if (picNo==3){
			imageSource=localStorage.prPhoto3
		}
		if (picNo==4){
			imageSource=localStorage.prPhoto4
		}
		if (picNo==5){
			imageSource=localStorage.prPhoto5
		}
		if (picNo==6){
			imageSource=localStorage.prPhoto6
		}
		if (picNo==7){
			imageSource=localStorage.prPhoto7
		}
		if (picNo==8){
			imageSource=localStorage.prPhoto8
		}
		if (picNo==9){
			imageSource=localStorage.prPhoto9
		}
		if (picNo==10){
			imageSource=localStorage.prPhoto10
		}
		
		
		
		
		//alert (imageSource)
		var image = document.getElementById(imageDiv);
		image.src = imageSource;
		imagePath = imageSource;
		$("#"+imageText).val(imagePath);
		
	}

	
	
//	===========================================
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	$('#doctor_report_button').empty();
	$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');
	
	$('#prescription_report_button').empty();
	$('#prescription_report_button').append(localStorage.prescription_report_button).trigger('create');
	
	$('#doctor_report_button_tr').empty();
	$('#doctor_report_button_tr').append(localStorage.doctor_report_button_tr).trigger('create');doctor_report_button_tr
	
	$('#client_report_button_tr').empty();
	$('#client_report_button_tr').append(localStorage.report_button_tr).trigger('create');
	
	$('#report_others_tr').empty();
	$('#report_others_tr').append(localStorage.report_others_tr).trigger('create');
	
	
	//set doctor
	$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
		
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);	
	
	$('#with_whom').empty();
	$('#with_whom').html(localStorage.with_whomShow);
	
	
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;
							
							
	
		//currentDate=2016-03-11
		//localStorage.synced=''
		//alert (today);
		//alert (localStorage.synced);
		if (localStorage.synced=='YES'){
			$("#cid").val(localStorage.cid);
			$("#user_id").val(localStorage.user_id);
			$("#user_pass").val(localStorage.user_pass);
			//if (localStorage.user_type=='sup'){
//			$("#chemisVDiv").hide();
//			$("#chSaveDiv").hide();
//			
//			
//			}
//			else{
//				$("#chemisVDiv").show();
//				$("#chSaveDiv").show();
//			}
			//alert (localStorage.synced)
			$.afui.loadContent("#pageHome",true,true,'right');
			
		}
		//if ((localStorage.synced=='YES') & (localStorage.sync_date==today)){
		//if (localStorage.synced=='YES') {
//			$.afui.loadContent("#pageHome",true,true,'right');
//		}
		
		
    });

    //if($.os.ios)
        $.afui.animateHeader(true);
	//	getLocation()









var mobile_off_flag=0;
//function homePage_refresh() {
//	$("#error_login").html('');
//	//location.reload();
//	$.afui.loadContent("#pageHome",true,true,'right');
//	
//}
function page_tour_pending() {;									
	$.afui.loadContent("#page_tour_pending",true,true,'right');
}
function page_tour_market() {;									
	$.afui.loadContent("#page_tour_market",true,true,'right');
}
function page_cancel_pending() {;									
	$.afui.loadContent("#page_cancel_pending",true,true,'right');
}

function page_doc_back(){
	if (localStorage.docPage==1){
		$.afui.loadContent("#page_market_ret",true,true,'right');
	}
	else{
		page_saved_Doc();
	}
}
function page_saved_Doc() {
	localStorage.docPage=0
	localStorage.scheduleDocFlag=1
	var docSaveData=localStorage.docSaveData
	//alert (docSaveData)
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=''
	docSaveStr=docSaveStr+' <table bordercolor="#009999" style="color:#000091" height="30px" width="100%" border="1" cellpadding="0" cellspacing="0" style="border-radius:5px;">'
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	
	
	for ( i=0; i < docSaveDataListLength-1; i++){	
		var singleDoc=docSaveDataList[i]
		var docShowList=singleDoc.split('<d>');
		var day_get=docShowList[4].split('-')[2]
		
		//alert (parseInt(day)+'           '+parseInt(day_get))
		//if (parseInt(today)==parseInt(docShowList[4])){
		if (parseInt(day)==parseInt(day_get)){
			docSaveStr=docSaveStr+' <tr onClick="saved_Doc_set(\''+i+'\');"><td  height="30px" >'+docShowList[0]+'</td><td align="center" style="background-color:#006464; color:#FFF; font-size:20px; border-right:hidden"> >></td></tr>'
		}
		else{
			docSaveStr=docSaveStr+' <tr><td style="color:#900;" height="30px" >'+docShowList[0] +' [Tomorrow]'+'</td><td align="center" style=" border-left:hidden"></td></tr>'
		}
	}
	docSaveStr=docSaveStr+'</table>'
	$('#saved_visit_doc').empty()
	$('#saved_visit_doc').append(docSaveStr);									
	$.afui.loadContent("#page_saved_Doc",true,true,'right');
}
function saveDelete_doc(i) {
	var docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var replaceStr=docSaveDataList[i]+'<doc>'
	docSaveData=docSaveData.replace(replaceStr,'')
	localStorage.docSaveData=docSaveData
	
	
	docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=''
	docSaveStr=docSaveStr+' <table bordercolor="#009999" style="color:#000091" height="30px" width="100%" border="1" cellpadding="0" cellspacing="0" style="border-radius:5px;">'
	for ( i=0; i < docSaveDataListLength-1; i++){	
		var singleDoc=docSaveDataList[i]
		var docShowList=singleDoc.split('<d>');
		
		//alert (singleDoc)
		//docSaveStr=docSaveStr+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" > <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr><td onClick="saved_Doc_set(\''+i+'\');">'+docShowList[0]+'</td><td width="60px"><input  type="submit" onClick="saveDelete_doc(\''+i+'\');"   style=" background-color:#09C; color:#FFF; font-size:12px; width:50px; ;  " value=" OK "    /></td></tr></table></li>'
		
		docSaveStr=docSaveStr+'<tr><td onClick="saved_Doc_set(\''+i+'\');">'+docShowList[0]+'</td></tr>'
	}
	docSaveStr=docSaveStr+'</table>'
	$('#saved_visit_doc').empty()
	$('#saved_visit_doc').append(docSaveStr);				
	
}


function saved_Doc_set(i) {
	$("#errorChkVSubmit_doc").html("")
	
	var docSaveData=localStorage.docSaveData
	var docSaveDataList = docSaveData.split('<doc>');	
	var docSaveDataListLength=docSaveDataList.length
	var docSaveStr=docSaveDataList[i]
	var docShowList=docSaveStr.split('<d>');
	//docSaveData+localStorage.visit_client+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>'	
	//DR A B M JAMAL|DHK67947<d>Manikganj|17-46002<d>DHK67947<d>Unscheduled<d><d><d><d><d><d><d>23.7600728<d>90.3578388<d>|MSO|undefined<d>17-46002<d><doc>
	
	var visitClientId=docShowList[2]
	var visit_type=docShowList[3]
	var scheduled_date=docShowList[4]
	var productSampleStr=docShowList[5]
	var productGiftStr=docShowList[6]
	var campaign_doc_str=docShowList[7]
	var productppmStr=docShowList[8]
	var notes=docShowList[9]
	var lat=docShowList[10]
	var longitude=docShowList[11]
	var v_with=docShowList[12]
	var market_Id=docShowList[13]
	var doc_others=docShowList[14]
	var v_shift=docShowList[15]
	
	
	//alert ('sadasf')
	localStorage.visit_client=docShowList[15]
	//alert (localStorage.visit_client)
	localStorage.visit_type=visit_type
	localStorage.scheduled_date=scheduled_date
	localStorage.campaign_doc_str=campaign_doc_str
	localStorage.productGiftStr=productGiftStr
	localStorage.productSampleStr=productSampleStr
	localStorage.productppmStr=productppmStr
	//alert (v_with.split('|')[1])
	if (v_with.split('|')[0]!=''){$("#v_with_AM").prop('checked', true);}
	if (v_with.split('|')[1]!=''){$("#v_with_MPO").prop('checked', true)}
	if (v_with.split('|')[2]!=''){$("#v_with_RSM").prop('checked', true);}
	if (v_with.split('|')[3]!=''){$("#v_with_ATS").prop('checked', true);}
	if (v_with.split('|')[4]!=''){$("#v_with_VTS").prop('checked', true);}
	

	if (v_shift='Morning'){$("#v_shift_M").prop('checked', true);}
	if (v_shift='Evening'){$("#v_shift_E").prop('checked', true);}
	
	$("#doc_feedback").val(notes)
	$("#doc_others").val(doc_others);
	
	$(".visit_client").html(docShowList[0]);
	$(".market").html(docShowList[1]);
	
	
	getDocCampaignData();
	//getDocSampleData();
	getDocGiftDataPlan();
	getDocppmDataPlan();
	localStorage.saveSubmitDocFlag=1;
	localStorage.saveSubmitDocI=i;
	$("#visit_submit_doc").show();
	$("#visit_submit_save_doc").hide();					
	//$.afui.loadContent("#page_visit_doc",true,true,'right');
}





function homePage() {
	var currentDate = new Date()
	var day = currentDate.getDate();if(parseInt(day)<9)	{day="0" + day};
	var month = currentDate.getMonth() + 1;if(parseInt(month)<9){month="0" +month};
	var year = currentDate.getFullYear()
	//alert (parseInt(day))
	var today=  year + "-" + month + "-" + day
	localStorage.today=today;						

	//if ((localStorage.synced=='YES') & (localStorage.sync_date==today)){
	if (localStorage.synced=='YES'){
		//if (localStorage.user_type=='sup'){
//			$("#chemisVDiv").hide();
//			$("#chSaveDiv").hide();
//		}
//		else{
//			$("#chemisVDiv").show();
//			$("#chSaveDiv").show();
//		}
		
		$.afui.loadContent("#pageHome",true,true,'right');
	}
	
	//$("#error_login").html('');
	//$.afui.loadContent("#pageHome",true,true,'right');
}
function page_market() {
	//alert (localStorage.tourFlag)
	if (localStorage.tourFlag==1){
		addMarketListTour();
		
	}
	else if (localStorage.doctor_plan_flag==1){
		doctor_visit_plan();
	}
	else{
		
		if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {
			addMarketListCteam();}
		else{
			
			addMarketList();}
	}
	//$.afui.loadContent("#page_market",true,true,'right');
}
function page_market_ret() {
	
	if (localStorage.doctor_flag==1) {addMarketList();}else{addMarketList();}
	if (localStorage.doctor_flag==1){
		$("#addDocanc").show();
		$("#blankAnc").hide();
	}
	else{
		$("#addDocanc").hide();
		$("#blankAnc").show();
	}
	$.afui.loadContent("#page_market_ret",true,true,'right');
}
function page_market_ret_doc() {
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$.afui.loadContent("#page_market_ret",true,true,'right');
}
function page_visit() {
	addMarketList();
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');
}
function page_visit_doc() {
	
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#wait_image_visit_submit_doc").hide();
	//alert (localStorage.doctor_plan_flag)
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_doc").hide();
		$("#visit_submit_save_doc").show();
			
		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$("#errorChkVSubmit_doc").val("");
	
	$.afui.loadContent("#page_visit_doc",true,true,'right');
}
function page_reports_dcr() {
	//$("#order_load").hide();
	$.afui.loadContent("#page_reports_dcr",true,true,'right');
}

function page_login() {
	//$("#order_load").hide();
	$.afui.loadContent("#login",true,true,'right');
}
function page_inbox() {
	$("#error_inbox").html('');
	$("#error_inboxTxt").val(localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
			//alert (localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
			$.ajax(localStorage.report_url+'infoInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								headers: { 'Authorization' : 'token my-token' },
								method: 'POST',
								data:{
								  "name": "new-repos",
								  "description" : "New-repos",
								  "auto_init": true, 
								  "private": false,
							
								},
								processData: false,
								error: function(xhr) {
								
								$("#error_inbox").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_inbox").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_inbox").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#inbox").html(result_string);
								
							}else{	
								$("#error_inbox").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
			 
	$.afui.loadContent("#page_inbox",true,true,'right');
}
function page_promo_refresh() {
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var promoDate=localStorage.promoDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	var flag=''
	var d2 = new Date();
	if (promoDate.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(promoDate);
	}
    var d1 = new Date(promoDate);
	var sec_time=(((d2-d1)/1000))/60;
	$("#error_promo").html('');
	//alert (parseInt(sec_time))
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
		localStorage.promo_str_report=''
		page_promo()
	}
	else{
		$("#error_promo").html('Please try later');
		$("#wait_image_promo").hide();
		$("#promo").html(localStorage.promo_str_report);
	}
	
	
}


function page_promo_main(){

	page_promo()
	$.afui.loadContent("#page_promo",true,true,'right');
}
function page_promo() {
	// ajax-------	
	$("#wait_image_promo").show();
	
	$("#error_promo").html('');
	$("#error_promoTxt").val(localStorage.report_url+'infoPromo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
	
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var promoDate=localStorage.promoDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	//alert ('Nadira')
	var d2 = new Date();
    var flag=''
	var d2 = new Date();
	if (promoDate.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(promoDate);
	}
    var d1 = new Date(promoDate);
	var sec_time=(((d2-d1)/1000))/60;
	
	
	
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
			if (localStorage.promo_str_report==''){
					$.ajax(localStorage.report_url+'infoPromo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
											$("#wait_image_promo").hide();
											$("#error_promo").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											 $("#wait_image_promo").hide();
											 if (status!='success'){
												$("#error_promo").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#error_promo").text(resultArray[0]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var dt = new Date();
										var hour=dt.getHours();if(hour>12){hour=hour-12};
										var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
										var day = dt.getDate();if(day.length==1)	{day="0" +day};
										var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
										var year = dt.getFullYear()
										var today=  year + "-" + month + "-" + day +' '+time
										if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
										localStorage.promoDate=today
										result_string='<font style="color:#8A0045; font-size:18px">'+'Updated on:'+localStorage.promoDate+'</font><br>'+result_string
										$("#promo").html(result_string);
										
										localStorage.promo_str_report=result_string
									}else{	
										$("#wait_image_promo").hide();
										$("#error_promo").html('Network Timeout. Please check your Internet connection.');
										}
								}
							  }
					 });//end ajax
			}
			else{
				$("#wait_image_promo").hide();
				$("#promo").html(localStorage.promo_str_report);
			}
	
	}else{
		$("#error_promo").html('Please try later');
		$("#wait_image_promo").hide();
		$("#promo").html(localStorage.promo_str_report);
	}
}
function page_kpi() {
	
	$.ajax(localStorage.report_url+'infoKpi?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								
								$("#error_kpi").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_kpi").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_kpi").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#kpi").html(result_string);
								
							}else{	
								$("#error_kpi").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	$.afui.loadContent("#page_kpi",true,true,'right');
}
function page_help() {
	$.ajax(localStorage.report_url+'infoHelp?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								
								$("#error_help").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 
									 if (status!='success'){
										$("#error_help").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_help").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								var result_string=resultArray[1];
								$("#help").html(result_string);
								
							}else{	
								$("#error_help").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	$.afui.loadContent("#page_help",true,true,'right');
}







function reload_function() {
	location.reload();
}


function getLocationInfo() { //location
	$("#lat").val(0);
	$("#longitude").val(0);
	
	
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#visit_location").hide();
	
	
	
	
	$("#wait_image_visit_submit_doc").hide()
	$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
	$("#checkLocation_doc").html('');
	
	
	
	$("#errorChkVSubmit").html('');
	//$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:15000};
	//var options = { enableHighAccuracy: true, timeout:1000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
}

function onSuccess(position) {
	
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	//$("#lat_p").val(position.coords.latitude);
	//$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	
	
	
	$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	//$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
	localStorage.location_error=''
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
	
	
	
	
} 
function onError(error) {
	
	localStorage.location_error=error.code
	
	
	
	//alert (localStorage.location_error)
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	//$("#lat_p").val(0);
	//$("#long_p").val(0);

	if (localStorage.location_error==2){
		$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		//$("#checkLocationProfileUpdate").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
		$("#checkLocation_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');

	}else{
		$("#checkLocation").html('Location can not be found. Last Location will be submitted.');
		//$("#checkLocationProfileUpdate").html('Location can not be found. Last Location will be submitted.');
		$("#checkLocation_doc").html('Location can not be found. Last Location will be submitted.');
	}
	
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#visit_location_doc").hide();
}


//==Reload Location
function getLocationInfo_ready() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation").html(''); 
	//$("#checkLocationProfileUpdate").html('');
	
	
	$("#wait_image_visit_submit_doc").hide()
	//$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
	
	$("#checkLocation_doc").html('');
	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess_ready, onError_ready, options);
}

// onSuccess Geolocationshom

function onSuccess_ready(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	//$("#lat_p").val(position.coords.latitude);
	//$("#long_p").val(position.coords.longitude);
	
	
	localStorage.latitude=position.coords.latitude
	localStorage.longitude=position.coords.longitude
	
	
	
	$("#errorChkVSubmit").html('');
	//$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	
	$("#checkLocation").html('Location Confirmed'); 
	//$("#checkLocationProfileUpdate").html('Location Confirmed');
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	//$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
	//alert (position.coords.longitude)
	geocoder = new google.maps.Geocoder();
	codeLatLng(position.coords.latitude, position.coords.longitude)
	
	
} 
function onError_ready(error) {
	
	//alert (error);
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	//$("#lat_p").val(0);
	//$("#long_p").val(0);
	//localStorage.location_detail='';
	
	//$("#checkLocation").html('Location not found. Last Location will submit.');
	//$("#checkLocationProfileUpdate").html('Location not found. Last Location will submit.');
	
	
	$("#checkLocation").html(''); 
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#visit_location").hide();
	
    $("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide();
	alert ("Please on your GPS")
	//$("#visit_submit_doc").show();
	//$("#visit_location_doc").hide();
}






//========================================

function codeLatLng(lat, lng) {
	
    var geocoder;
	//alert ('sdfds')
	geocoder = new google.maps.Geocoder();
	
	var latlng = new google.maps.LatLng(lat, lng);
	//alert (latlng)
	geocoder.geocode(
		{'latLng': latlng}, 
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
						
						var add= results[0].formatted_address ;
						var add1= results[1].formatted_address ;
						var add2= results[2].formatted_address ;
						//alert (add2)
						//alert (add1)
						var  value=add.split(",");
						var  value1=add1.split(",");
						var  value2=add2.split(",");
						
						state=value2[1];
						city=value2[0];
						area=value1[0];
						road=value[0];
						localStorage.location_detail=state+','+city+','+area+','+road;
						//alert (localStorage.location_detail)
					}
					else  {
						alert("address not found");
					}
			}
			 else {
				alert("Geocoder failed due to: " + status);
			}
		}
	);
  }

//====================================
//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#visit_location").show();
	
	
	//$("#lat").val(0);
	//$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	//$("#visit_location_doc").show();
	$("#checkLocation_doc").html('');
	
	
}
// -------------- If Not synced, Show login
function first_page(){
	//localStorage.synced=''
	//alert (localStorage.synced)
	if ((localStorage.synced!='YES')){
		
		$.afui.loadContent("#login",true,true,'right');	
		//$.afui.loadContent("#pageHome",true,true,'right');
	}
	else{	
		$.afui.loadContent("#pageHome",true,true,'right');
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	//$("#btn_visit_submit").hide();
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1=""
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str=''
	localStorage.productSampleStr=''
	localStorage.productppmStr='';

	$(".visit_client").html('');
	
	
	set_doc_all();
	
	$.afui.loadContent("#pageHome",true,true,'right');


	
}
function set_doc_all(){
	// $('#doctor_campaign_list_tbl :checkbox').each(function () {    
//		 $(this).attr('checked', false);  //This will uncheck the current checkbox            
//	 });
	$('#doc_campaign').html('');
	$('#doc_gift').html('');
	$('#doc_ppm').html('');
	$('#doc_sample').html('');
	
	 
	 $(".docCampaign").attr('checked', false);
	 $(".docSample").val('');
	 $(".docGift").val('');
	 $(".docPpm").val('');
	 
	 $('#doc_feedback').val('');
	 $('#doc_others').val('');
	 
	 $('#campaign_combo_id').val('');
	 $('#gift_combo_id').val('');
	 $('#ppm_combo_id').val('');
	 $('#sample_combo_id').val('');
	 
	 
	 
	//$("#visit_location_doc").show();
	$("#visit_submit_doc").show();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	 
}
//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_marketlist_comboCteam=''
		localStorage.cTeam=0
		localStorage.tourFlag=0;
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		
		localStorage.report_button='';	
		localStorage.market_client=''
		localStorage.menu='';
		localStorage.ppm_string='';
		localStorage.user_type='';
		localStorage.market_doctor='';
		
		
		localStorage.saved_data_submit = 0;
		localStorage.visit_save = '';
		localStorage.saved_data_show = '';
		
		localStorage.payment_mode_get='';
		
		localStorage.location_detail=''
		
		$.afui.loadContent("#login",true,true,'right');

	};
}
function get_login() {
	$.afui.loadContent("#login",true,true,'right');

	}
function afterSync(){
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		
		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_marketlist_comboCteam=''
		localStorage.cTeam=0
		localStorage.tourFlag=0;
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		localStorage.visit_page=""
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		localStorage.productppmtStr='';
		
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		localStorage.market_doctor='';
		localStorage.report_button='';
		localStorage.doctorreport_button='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		
		
		
		localStorage.visit_save=''; //Saved visit data
		localStorage.save_visit_limit=0;
		localStorage.saved_data_submit = 0;
		
		
		localStorage.delivery_date='';
		localStorage.payment_date='';
		localStorage.payment_mode='';
		
		localStorage.payment_mode_get='';
		
		localStorage.visit_location_flag='';
													
		localStorage.delivery_date_flag='';
		localStorage.payment_date_flag='';
		localStorage.payment_mode_flag='';
		localStorage.collection_date_flag='';
		
		localStorage.doctor_report_button='';
		localStorage.prescription_report_button='';
		localStorage.location_detail=''
		
		
		localStorage.stock_str='';
		localStorage.result_itemStock=''
		localStorage.stockDate=''
		
		localStorage.promo_str=''
		localStorage.promo_str_report=''
		localStorage.promoDate=''
		localStorage.tour_doc_str=''
		localStorage.tour_route_str=''
		localStorage.docSaveData=''
		
		localStorage.marketStrDoc=''
		localStorage.marketTourStr=''
		localStorage.docTThisMonthRow=''
		localStorage.docMarketComb=''
		localStorage.prProdID_Str=''
		localStorage.opProdID_Str=''
		localStorage.market_doctorVisit=''
		localStorage.tourSubmitStr=''
		
		localStorage.picFlag=0;
		
		localStorage.prPhoto1=''
		localStorage.prPhoto2=''
		localStorage.prPhoto3=''
		localStorage.prPhoto4=''
		localStorage.prPhoto5=''
		localStorage.prPhoto6=''
		localStorage.prPhoto7=''
		localStorage.prPhoto8=''
		localStorage.prPhoto9=''
		localStorage.prPhoto10=''
		
		
		//Oppertunuty
		localStorage.op_A=''
		localStorage.op_B=''
		localStorage.op_C=''
		localStorage.op_D=''
		localStorage.op_E=''
		localStorage.op_F=''
		localStorage.op_G=''
		localStorage.op_H=''
		localStorage.op_I=''
		localStorage.op_J=''
		localStorage.op_K=''
		localStorage.op_L=''
		localStorage.op_M=''
		localStorage.op_N=''
		localStorage.op_O=''
		localStorage.op_P=''
		localStorage.op_Q=''
		localStorage.op_R=''
		localStorage.op_S=''
		localStorage.op_T=''
		localStorage.op_U=''
		localStorage.op_V=''
		localStorage.op_W=''
		localStorage.op_X=''
		localStorage.op_Y=''
		localStorage.op_Z=''
		localStorage.opProductStr=''
}


function test(){
	$.ajax({

    url: "http://w02.yeapps.com/welcome/default/index",
    headers: { 'Authorization' : 'token my-token' },
    method: 'POST',
    data:{
      "name": "new-repos",
      "description" : "New-repos",
      "auto_init": true, 
      "private": false,

    },
    processData: false,
    success: function (data, textStatus, request) {
  	 alert ('Test')
    },
    error: function(xhr, status, error) {

   alert ('Test11111')
}
});
	
}







function check_user() {	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	
	//Main

	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/demo/syncmobile_417_new_ibn/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	//var  apipath_base_photo_dm ='http://127.0.0.1:8000/acme/syncmobile_417_new/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	//var  apipath_base_photo_dm='http://a007.yeapps.com/acme/syncmobile_417_new/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'



   var apipath_base_photo_dm ='http://w03.yeapps.com/skfah/syncmobile_417_new/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
 //var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_new_tour/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
 
 //alert ('http://e2.businesssolutionapps.com/welcome/dmpath_live_new_tour/get_path?CID='+cid +'&HTTPPASS=e99business321cba')
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	//alert (apipath_base_photo_dm)
		//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
			
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#doctorButton").hide();
		$("#wait_image_login").show();
		$("#error_logintext").val(apipath_base_photo_dm);
		$.ajax(apipath_base_photo_dm,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
			headers: { 'Authorization' : 'token my-token' },
			method: 'POST',
			data:{
			  "name": "new-repos",
			  "description" : "New-repos",
			  "auto_init": true, 
			  "private": false,
		
			},
			processData: false,
			//processData: false,
			//timeout: 30000,
			error: function(xhr) {
			$("#wait_image_login").hide();
			$("#loginButton").show();
			//alert (xhr)
			$("#error_login").html('Network Timeout. Please check your Internet connection..1aa');
													},
			success:function(data, status,xhr){
		//$.post(apipath_base_photo_dm,{ },
//    	function(data, status){
			
			if (status=='success'){
				localStorage.base_url='';
				
				var dtaStr=data.replace('<start>','').replace('<end>','')
				var resultArray = dtaStr.split('<fd>');		
				
					if(resultArray.length>3){
						var base_url=resultArray[0];
						var photo_url=resultArray[1];
						var photo_submit_url=resultArray[2];
						var report_url=resultArray[3];
						
						var tour_url=resultArray[4];
						
						
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#doctorButton").show();
							$("#error_login").html('Base URL not available');	
						}
						else{
							localStorage.base_url='';
							localStorage.photo_url='';
							localStorage.photo_submit_url='';
							
							
//							--------------------------
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							localStorage.report_url=report_url;
							localStorage.tour_url=tour_url;
							//alert (localStorage.photo_submit_url)
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
							
							
							var currentDate = new Date()
							var day = currentDate.getDate();if(day.length==1)	{day="0" +day};
							var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
							var year = currentDate.getFullYear()
							var today=  year + "-" + month + "-" + day
							
							//alert (currentDate)
							localStorage.sync_date=today;
							
							//alert (localStorage.sync_date)
							
							//alert (localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
							//$("#error_logintext").val(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
							$.ajax(localStorage.base_url+'check_user_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								headers: { 'Authorization' : 'token my-token' },
								method: 'POST',
								data:{
								  "name": "new-repos",
								  "description" : "New-repos",
								  "auto_init": true, 
								  "private": false,
							
								},
								//processData: false,
								//timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_login").hide();
								$("#loginButton").show();
								$("#error_login").html('Network Timeout. Please check your Internet connection..2');
													},
								success:function(data, status,xhr){	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#wait_image_login").hide();
											$("#loginButton").show();								
											$("#error_login").html(resultArray[1]);
										}
										else if (resultArray[0]=='SUCCESS'){
													afterSync()
													
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													//alert (localStorage.market_doctor)
													//$("#error_logintext").val(localStorage.market_doctor)
													localStorage.save_visit_limit=resultArray[18];
													//alert (localStorage.save_visit_limit)
													localStorage.visit_location_flag=resultArray[19];
													
													localStorage.delivery_date_flag=resultArray[20];
													localStorage.payment_date_flag=resultArray[21];
													localStorage.payment_mode_flag=resultArray[22];
													localStorage.collection_date_flag=resultArray[23];
													
													localStorage.promo_str=resultArray[24];
													
													
													localStorage.client_depot=resultArray[25];
													localStorage.client_depot_name=resultArray[26];
													
													localStorage.catStr=resultArray[27];
													localStorage.spcStr=resultArray[28];
													localStorage.marketListStrCteam=resultArray[29];
													localStorage.cTeam=resultArray[30]
													localStorage.marketStrDoc=resultArray[31]
													localStorage.marketTourStr=resultArray[32]
													localStorage.docTThisMonthRow=resultArray[33]
													localStorage.prProductStr=resultArray[34]
													localStorage.with_whom=resultArray[35]
													localStorage.rx_show=resultArray[36]
													localStorage.linkStr=resultArray[37]
													
													
													//===============================================
													var linkStrList = localStorage.linkStr.split('<rd>');							
													var linkStr_combo=''
													
													for (var l=0; l < linkStrList.length; l++){
														linkStrListArray = linkStrList[l].split('<fd>');
														var pathName=linkStrListArray[0];
														var path_value=linkStrListArray[1];
														var check=linkStrListArray[2];
														
														if (check=='Check'){
															//alert ('1')
														 var linkPath="window.open('"+path_value+"cid="+localStorage.cid+"&rep_id="+localStorage.user_id+"&rep_pass="+localStorage.user_pass	+"', '_system');"
														}
														else{
															//alert ('2')
															 var linkPath="window.open('"+path_value+"', '_system');"
														}
														
														//alert (linkPath);
														if(path_value!=''){
															linkStr_combo+='<li style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr><td><a href="#" onclick="'+linkPath+'">'+pathName+'</a></td></tr></table></li>';
															
															
															}
													}
													
																		
													localStorage.linkStr_combo=linkStr_combo;	
													//alert (localStorage.linkStr_combo)								
													$('#page_link_lv').empty();
													$('#page_link_lv').append(localStorage.linkStr_combo);									

													
													
													
													//================================================
													//alert (localStorage.marketStrDoc)
													
													//alert (localStorage.menu)
													//alert (localStorage.cTeam)
													
													//localStorage.clie nt_depot_name=resultArray[27];
													
													if (localStorage.rx_show=='YES'){$("#rx_button").show();}else{$("#rx_button").hide();}
													if (localStorage.visit_location_flag!='YES'){
														//alert (localStorage.visit_location);
														$("#visit_location").hide();
														$("#visit_submit").show();
														
													}
													if (localStorage.delivery_date_flag=='YES'){
														$("#delivery_date_div").show();
													}
													else{
														$("#delivery_date_div").hide();
													}
													if (localStorage.collection_date_flag=='YES'){
														$("#collection_date_div").show();
													}
													else{
														$("#collection_date_div").hide();
													}
													if (localStorage.payment_date_flag=='YES'){
														$("#payment_date_div").show();
													}
													else{
														$("#payment_date_div").hide();
													}
													if (localStorage.payment_mode_flag=='YES'){
														localStorage.payment_mode='Cash'
														$("#payment_mode_div").show();
													}
													else{
														$("#payment_mode_div").hide();
													}
													//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=' '
												var order_report="No"
												var doctor_report="No"
												var prescription_report="No"
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
//															 //alert (s_key);	
															 menu_str=menu_str+'<li  align="center" onClick="'+s_key+'()"  style="width:100%; background-color:#09C; " ><img style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="'+s_key+'.png"></li>'
															menu_str=menu_str+'<div style="height:2px"></div>'							

														if (s_key=="chemist_visit"){
															 order_report="Yes"
															
														}
														if (s_key=="doctor_visit"){
															 doctor_report="Yes"
															
														}
														if (s_key=="prescription_report"){
															 prescription_report="Yes"
															
														}
//														
//														
													} //end yes
												} //end for
												menu_str=menu_str;
												localStorage.menu_list=menu_str;
												//alert (localStorage.menu_list)
												$('#menu_lv').empty()
												$('#menu_lv').append(localStorage.menu_list);

												
//												alert (localStorage.menu_list);
												//=============set menu end================
											//	===================CtStr, Spciality=========
												
												var dCategory=localStorage.catStr											
												catList=dCategory.split(',')
												$('#dCategoryAdd').empty();
												
												for (var j=0; j < catList.length-1; j++){
													var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
													
													 $('#dCategoryAdd').append(opt);
												}
												
												var dSpaciality=localStorage.spcStr
												spacialityList=dSpaciality.split(',')
												
												$('#dSpacialityAdd').empty();
												for (var s=0; s < spacialityList.length-1; s++){
													var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
													 $('#dSpacialityAdd').append(opt);
													
												}
											//=================================================	
												
												//===========Market===========================
												//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													var unscheduleMarketComb_tr=''
													
													//Nazma Azam 2019-06-18 start
													
													var unscheduleFarmComb_tr=''

													//Nazma Azam 2019-06-18 end
													
													
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')"><font class="name" style="font-size:18; font-weight:bold">'+marketNameID+'</a></font></li>';
															
															visitPlanMarketComb+='<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;height=15px" onClick="check_boxTourTrue(\''+marketID+'\')"> '+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocTour_keyup(\''+marketID+'\')" name="doc_tour'+marketID+'" value="checkbox" id="doc_tour'+marketID+'"><label for="doc_camp'+marketID+'"></br></label></td><td  style="text-align:left;">'+'</br><font id="'+ marketID +'" onClick="check_boxTourTrue(\''+marketID+'\')" class="name" >'+ marketNameID+'</font></td></tr>'+'</table>'+'</li>';
															
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;height:15px"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')"><font class="name" style="font-size:12; font-weight:bold; color:#306161">'+marketNameID+'</font></a></li>';
															
															unscheduleMarketComb_tr+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="summary_report_doctor_tr(\''+marketNameID+'\')"><font class="name" style="font-size:18; font-weight:bold">'+marketNameID+'</a></font></li>';
															
															
															//	Nazma Azam 2019-06-18 start														
															
														   unscheduleFarmComb_tr+='<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+marketNameID+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+marketNameID+'</font></option>'														
															
															//Nazma Azam 2019-06-18 end

															}
													}
													
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
													localStorage.market_cmb_list_cp=profileMarketComb;							


													localStorage.visit_plan_marketlist_combo_tr=unscheduleMarketComb_tr;
													$('#market_combo_id_lv_tr').empty();
													$('#market_combo_id_lv_tr').append(localStorage.visit_plan_marketlist_combo_tr);	
													
													
													//Nazma Azam 2019-06-18 start
													//alert (unscheduleFarmComb_tr)
													localStorage.visit_plan_farmlist_combo_tr=unscheduleFarmComb_tr;
													$('#farm_combo_id_lv_tr').empty();
													$('#farm_combo_id_lv_tr').append(localStorage.visit_plan_farmlist_combo_tr);	
													//alert(localStorage.visit_plan_farmlist_combo_tr)
											
											//Nazma Azam 2019-06-18 end						
													
													
													//alert (localStorage.unschedule_market_cmb_id)
													$('#market_combo_id_lv').empty();
													$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
													
													$('#tour_market_combo_id_lv').empty();
													$('#tour_market_combo_id_lv').append(localStorage.visit_plan_marketlist_combo);
													
													
										//==========================TourDoc=======================		
										
										//===========Market===========================
												//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													//alert (localStorage.marketStrDoc);
													if (localStorage.marketStrDoc!=''){
														var docMarketList = localStorage.marketStrDoc.split('<rd>');
														var docMarketListShowLength=docMarketList.length	
														var docMarketComb=''
														var currentDate = new Date()
														var day = currentDate.getDate();if(day<10)	{day="0" +day};
														var month = currentDate.getMonth() + 1;if(month<10)	{month="0" +month};
														var year = currentDate.getFullYear()
														var CDate=  year + "-" + month + "-" + day
														//alert (day.length)
														//var CDate =yyyy+'-'+mm+'-'+dd	
														var todayFlag=0
														var tomorrowFlag=0		
														//alert (docMarketListShowLength)			
														for (var k=0; k < docMarketListShowLength; k++){
															var docMarketValueArray = docMarketList[k].split('<fd>');
															docMarketID=docMarketValueArray[0];
															docMarketName=docMarketValueArray[1];
															docMarketDate=docMarketValueArray[2];
															var docmarketNameID=docMarketName+'|'+docMarketID;
															
													//alert (CDate)
													//alert (docMarketDate)
													
													if ((docMarketDate!=CDate) &&(tomorrowFlag==0) && (docMarketDate.length > 5)) {
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Tomorrow</font></li>';
																tomorrowFlag=1
															}
															if ((docMarketDate==CDate) &&(todayFlag==0)) {
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Today</font></li>';
																todayFlag=1
															}
															if (docMarketID!=''){
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="setScheduleDate(\''+docMarketDate+'\');marketNextLV(\''+docmarketNameID+'\');"><font class="name" style="font-size:18; font-weight:bold">'+docMarketName+'</a></font></li>';
															//alert (docMarketComb)	
																}
														}
														
																					
														localStorage.docMarketComb=docMarketComb;								
													}
													
													//$('#tour_market_combo_id_lv').empty();
//													$('#tour_market_combo_id_lv').append(localStorage.visit_plan_marketlist_combo);
													
										
										
										
												
												
										//===================		

									var planMarketListCteam = localStorage.marketListStrCteam.split('<rd>');
									var planMarketListShowLengthCteam=planMarketListCteam.length	
									var visitPlanMarketCombCteam=''	
									
									for (var c=0; c < planMarketListShowLengthCteam; c++){
											var planMarketValueArrayCteam = planMarketListCteam[c].split('<fd>');
											planMarketIDCteam=planMarketValueArrayCteam[0];
											planMarketNameCteam=planMarketValueArrayCteam[1];
											
											marketIDCteam=planMarketIDCteam
											marketNameCteam=planMarketNameCteam
											var marketNameIDCteam=planMarketNameCteam+'|'+planMarketIDCteam;
											
											if(planMarketIDCteam!='' && localStorage.cTeam==1){
												visitPlanMarketCombCteam+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameIDCteam+'\')"><font class="name" style="font-size:18; font-weight:bold">'+marketNameIDCteam+'</a></font></li>';

														}
													}	
													
													localStorage.visit_plan_marketlist_comboCteam=visitPlanMarketCombCteam;
													
												//==================================	
													
												
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													//alert (localStorage.productListStr)
													//------------ Order Item list								
													
													if (order_report=="Yes"){
														
localStorage.report_button=' <input type="submit" id="loginButton" onClick="s_order_summary_report();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    Sales Call and Order Count     "   /></br><input type="submit" id="loginButton" onClick="s_order_detail_report();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    Sales Call and Order Detail     "   />'

localStorage.report_button_tr='<input type="submit" id="loginButton" onClick="s_order_summary_report_tr_next();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    Order Summary     "   />'
//localStorage.report_button='<a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Report</a>'
														}
														$('#order_report_button').empty();
														$('#order_report_button').append(localStorage.report_button).trigger('create');
//														
//															 
//															
//														
//									//	alert (localStorage.doctor_report_button);	
//										
													if (doctor_report=="Yes"){
														
										localStorage.doctor_report_button='<input type="submit" id="loginButton" onClick="summary_report_doctor();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    DCR Count     "   /></br><input type="submit" id="loginButton" onClick="detail_report_doctor();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    DCR Detail     "   />'
	
										localStorage.doctor_report_button_tr='<input type="submit" id="loginButton" onClick=" summary_report_doctor_tr_next();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="    DCR Summary     "   />'
										
										//localStorage.doctor_report_button='<a data-role="button" onClick="detail_report_doctor()" >DCR Report</a>'
										
	localStorage.prescription_report_button='<input type="submit" id="loginButton" onClick="summary_report_prescription();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Prescription Count     "   /></br><input type="submit" id="loginButton" onClick="detail_report_prescription();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Prescription Detail     "   />'
	
	if (localStorage.rx_show!='YES'){localStorage.prescription_report_button=''}
	
	localStorage.report_others_tr	='<input type="submit" id="loginButton" onClick="pay_tr_next ();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Pay Slip      "   /></br><input type="submit" id="loginButton" onClick="expense_tr_next();"  style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="   Expense Slip     "   />'
										
										//localStorage.prescription_report_button=''
													}	
													
													$('#doctor_report_button').empty();
													$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');

													
													$('#prescription_report_button').empty();
													$('#prescription_report_button').append(localStorage.				prescription_report_button).trigger('create');
													
													$('#doctor_report_button_tr').empty();
													$('#doctor_report_button_tr').append(localStorage.doctor_report_button_tr).trigger('create');
													
													$('#client_report_button_tr').empty();
													$('#client_report_button_tr').append(localStorage.report_button_tr).trigger('create');
													
													
													$('#report_others_tr').empty();
													$('#report_others_tr').append(localStorage.report_others_tr).trigger('create');
														
										// alert (localStorage.doctor_report_button);						 
															
														
													
													
													var product_tbl_doc_campaign='';
													var product_tbl_doc_sample='';
//													
//													
//													
													var product_tbl_order=''
													//alert (productLength)
													for (j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														var product_str=productArray2[3];
														var vat=productArray2[4];
														
														
														var product_qty='';																		
														
														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_item(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"  ><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onChange="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_vat'+product_id2+'" value="'+vat+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ><input type="hidden" id="order_promo'+product_id2.toUpperCase()+'" value="'+product_str+'" placeholder="qty" ></td><td>&nbsp;&nbsp;</td><td  style="text-align:left; color:#306161" >'+'<font class="name" id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font> | '+'<font class="itemCode">'+ product_id2.toUpperCase()+' | '+product_price+'</font><span id="stockShow'+product_id2.toUpperCase()+'" style="color:#600"></span></br> <span style="background-color:#FFFF53; color:#F00" id="promoShow'+product_id2.toUpperCase()+'" style="font-size:12px">'+product_str+'</span></td></tr>'+'</table>'+'</li>';
														//------------ Doctor Campaign Item list
														$("#error_login").html('Processing Product List....');
														
														
														product_tbl_doc_campaign=product_tbl_doc_campaign+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="check_boxTrue(\''+product_id2+'\')"> '+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><label for="doc_camp'+product_id2+'"></br></label><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'</br><font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" class="name" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														$("#error_login").html('Processing Product List....');	
														//-------------Sample----------
														
														product_tbl_doc_sample=product_tbl_doc_sample+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_sample(\''+product_id2+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;"><input class="docSample" maxlength="4" onChange="getSampleData_keyup(\''+product_id2+'\')" type="number" id="sample_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="sample_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="sample_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="sample_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">&nbsp;&nbsp;<font  class="name" >'+product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														
														
													
													}
													//product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													//product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
													//product_tbl_doc_sample=product_tbl_doc_sample+'</ul>';
													 
													
													localStorage.product_tbl_str=product_tbl_order	;	

													localStorage.product_tbl_str_doc_campaign=product_tbl_doc_campaign;
													localStorage.product_tbl_str_doc_sample=product_tbl_doc_sample;
													
												
										$('#item_combo_id_lv').empty()
										$('#item_combo_id_lv').append(localStorage.product_tbl_str);
										$("#item_combo_id").val('A')
										searchProduct()
										
										
										//bonusCombo()
										
										$('#campaign_combo_id_lv').empty();
										$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
										$('#sample_combo_id_lv').empty();
										$('#sample_combo_id_lv').append(localStorage.product_tbl_str_doc_sample);

													
													

													//------------ Gift Item list								
//	
													
													
										if (localStorage.gift_string.length > 5 ){
										
											var giftList=localStorage.gift_string.split('<rd>');
											var giftLength=giftList.length;

											
											var gift_tbl_doc='';
											for (j=0; j < giftLength; j++){
												var gifttArray = giftList[j].split('<fd>');
												var gift_id=gifttArray[0];	
												var gift_name=gifttArray[1];
												var gift_qty='0';
												
												
												
												
												//------------ Doctor Gift Item list
												
												gift_tbl_doc=gift_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_gift(\''+gift_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="gift_id'+gift_id+'" value="'+gift_id+'" ><input class="docGift" maxlength="4" onChange="getGiftData_keyup(\''+gift_id+'\')" type="number" id="gift_qty'+gift_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_gift_name'+gift_id.toUpperCase()+'" value="'+gift_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'&nbsp;&nbsp;<font id="'+ gift_name +'" onClick="tr_item_doc_campaign(\''+gift_id+'\')" class="name" >'+ gift_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
												
												
												
												
								
											}
											
											//gift_tbl_doc=gift_tbl_doc+'</ul>';//+'</table>'
										
											localStorage.gift_tbl_doc=gift_tbl_doc;
											//$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
											$('#gift_combo_id_lv').empty();
											$('#gift_combo_id_lv').append(localStorage.gift_tbl_doc);
											
										
										
										}
													
													
//													========================PPM Start========
													if (localStorage.ppm_string.length > 5 ){
													
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														

														
														var ppm_tbl_doc='';
														for (j=0; j < ppmLength; j++){
															var ppmArray = ppmList[j].split('<fd>');
															var ppm_id=ppmArray[0];	
															var ppm_name=ppmArray[1];
															var ppm_qty='0';
															
															
															
															
															//------------ Doctor ppm Item list
															
															ppm_tbl_doc=ppm_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_ppm(\''+ppm_id+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="ppm_id'+ppm_id+'" value="'+ppm_id+'" ><input class="docPpm" maxlength="4" onChange="getppmData_keyup(\''+ppm_id+'\')" type="number" id="ppm_qty'+ppm_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_ppm_name'+ppm_id.toUpperCase()+'" value="'+ppm_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'&nbsp;&nbsp;<font id="'+ ppm_name +'" onClick="tr_item_doc_campaign(\''+ppm_id+'\')" class="name">'+ ppm_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
													
														localStorage.ppm_tbl_doc=ppm_tbl_doc;
														$('#ppm_combo_id_lv').empty();
														$('#ppm_combo_id_lv').append(localStorage.ppm_tbl_doc);
													
													} 


//													===========================ppm end===============

//											=================prItemStart
														
											localStorage.pr_A=''
											localStorage.pr_B=''
											localStorage.pr_C=''
											localStorage.pr_D=''
											localStorage.pr_E=''
											localStorage.pr_F=''
											localStorage.pr_G=''
											localStorage.pr_H=''
											localStorage.pr_I=''
											localStorage.pr_J=''
											localStorage.pr_K=''
											localStorage.pr_L=''
											localStorage.pr_M=''
											localStorage.pr_N=''
											localStorage.pr_O=''
											localStorage.pr_P=''
											localStorage.pr_Q=''
											localStorage.pr_R=''
											localStorage.pr_S=''
											localStorage.pr_T=''
											localStorage.pr_U=''
											localStorage.pr_V=''
											localStorage.pr_W=''
											localStorage.pr_X=''
											localStorage.pr_Y=''
											localStorage.pr_Z=''
											
											
											var pr_A=localStorage.prProductStr.split('<AEND>')[0].replace('<ASTART>','');
											var pr_after_A=localStorage.prProductStr.split('<AEND>')[1]
										
											var pr_B=pr_after_A.split('<BEND>')[0].replace('<BSTART>','');
											var pr_after_B=pr_after_A.split('<BEND>')[1]
											
											var pr_C=pr_after_B.split('<CEND>')[0].replace('<CSTART>','');
											var pr_after_C=pr_after_B.split('<CEND>')[1]
											
											var pr_D=pr_after_C.split('<DEND>')[0].replace('<DSTART>','');
											var pr_after_D=pr_after_C.split('<DEND>')[1]
											
											var pr_E=pr_after_D.split('<EEND>')[0].replace('<ESTART>','');
											var pr_after_E=pr_after_D.split('<EEND>')[1]
											
											var pr_F=pr_after_E.split('<FEND>')[0].replace('<FSTART>','');
											var pr_after_F=pr_after_E.split('<FEND>')[1]
											
											var pr_G=pr_after_F.split('<GEND>')[0].replace('<GSTART>','');
											var pr_after_G=pr_after_F.split('<GEND>')[1]
											
											var pr_H=pr_after_G.split('<HEND>')[0].replace('<HSTART>','');
											var pr_after_H=pr_after_G.split('<HEND>')[1]
											
											var pr_I=pr_after_H.split('<IEND>')[0].replace('<ISTART>','');
											var pr_after_I=pr_after_H.split('<IEND>')[1]
											
											var pr_J=pr_after_I.split('<JEND>')[0].replace('<JSTART>','');
											var pr_after_J=pr_after_I.split('<JEND>')[1]
											
											var pr_K=pr_after_J.split('<KEND>')[0].replace('<KSTART>','');
											var pr_after_K=pr_after_J.split('<KEND>')[1]
											
											var pr_L=pr_after_K.split('<LEND>')[0].replace('<LSTART>','');
											var pr_after_L=pr_after_K.split('<LEND>')[1]
											
											var pr_M=pr_after_L.split('<MEND>')[0].replace('<MSTART>','');
											var pr_after_M=pr_after_L.split('<MEND>')[1]
											
											var pr_N=pr_after_M.split('<NEND>')[0].replace('<NSTART>','');
											var pr_after_N=pr_after_M.split('<NEND>')[1]
											
											var pr_O=pr_after_N.split('<OEND>')[0].replace('<OSTART>','');
											var pr_after_O=pr_after_N.split('<OEND>')[1]
											
											var pr_P=pr_after_O.split('<PEND>')[0].replace('<PSTART>','');
											var pr_after_P=pr_after_O.split('<PEND>')[1]
											
											var pr_Q=pr_after_P.split('<QEND>')[0].replace('<QSTART>','');
											var pr_after_Q=pr_after_P.split('<QEND>')[1]
											
											var pr_R=pr_after_Q.split('<REND>')[0].replace('<RSTART>','');
											var pr_after_R=pr_after_Q.split('<REND>')[1]
											//alert (pr_after_R)
											var pr_S=pr_after_R.split('<SEND>')[0].replace('<SSTART>','');
											var pr_after_S=pr_after_R.split('<SEND>')[1]
											//alert ('fsdg')
											var pr_T=pr_after_S.split('<TEND>')[0].replace('<TSTART>','');
											var pr_after_T=pr_after_S.split('<TEND>')[1]
											
											var pr_U=pr_after_T.split('<UEND>')[0].replace('<USTART>','');
											var pr_after_U=pr_after_T.split('<UEND>')[1]
											
											var pr_V=pr_after_U.split('<VEND>')[0].replace('<VSTART>','');
											var pr_after_V=pr_after_U.split('<VEND>')[1]
											
											var pr_W=pr_after_V.split('<WEND>')[0].replace('<WSTART>','');
											var pr_after_W=pr_after_V.split('<WEND>')[1]
											
											var pr_X=pr_after_W.split('<XEND>')[0].replace('<XSTART>','');
											var pr_after_X=pr_after_W.split('<XEND>')[1]
											
											var pr_Y=pr_after_X.split('<YEND>')[0].replace('<YSTART>','');
											var pr_after_Y=pr_after_X.split('<YEND>')[1]
											
											var pr_Z=pr_after_Y.split('<ZEND>')[0].replace('<ZSTART>','');
											//var productListStr_after_E=productListStr_after_D.split('</Z>')[1]
											
											
											
											localStorage.pr_A=pr_A
											localStorage.pr_B=pr_B
											localStorage.pr_C=pr_C
											localStorage.pr_D=pr_D
											localStorage.pr_E=pr_E
											localStorage.pr_F=pr_F
											localStorage.pr_G=pr_G
											localStorage.pr_H=pr_H
											localStorage.pr_I=pr_I
											localStorage.pr_J=pr_J
											localStorage.pr_K=pr_K
											localStorage.pr_L=pr_L
											localStorage.pr_M=pr_M
											localStorage.pr_N=pr_N
											localStorage.pr_O=pr_O
											localStorage.pr_P=pr_P
											localStorage.pr_Q=pr_Q
											localStorage.pr_R=pr_R											
											localStorage.pr_S=pr_S
											localStorage.pr_T=pr_T
											localStorage.pr_U=pr_U
											localStorage.pr_V=pr_V
											localStorage.pr_W=pr_W
											localStorage.pr_X=pr_X
											localStorage.pr_Y=pr_Y
											localStorage.pr_Z=pr_Z

											$("#pr_id_lv").empty()
											
											setPrProduct()


//				=========================================prend==============

													localStorage.visit_page=""
													$("#se_mpo").val(localStorage.user_id);

													localStorage.synced='YES';
													
													
													
													//$("#error_login").html('Synced Successfully');
													
													//$("#wait_image_login").hide();
//													$("#loginButton").show();
													//$("#doctorButton").show();
													if (localStorage.user_type=='sup'){
													 checkRequest()
													}
													checkInbox();
													//if (localStorage.user_type=='sup'){
//														$("#chemisVDiv").hide();
//														$("#chSaveDiv").hide();
//													}
//													else{
//														$("#chemisVDiv").show();
//														$("#chSaveDiv").show();
//													}
												//	$.afui.loadContent("#pageHome",true,true,'right');
													
													
													
													
													if (localStorage.with_whom!=''){
													var with_whom='<table width="100%" border="0" cellpadding="0" cellspacing="0"> <tr>'
														
														with_whomList=localStorage.with_whom.split('<fdfd>');
														
														for (j=0; j < with_whomList.length; j++){
														if (j==0){checkName='v_with_AM'}
														if (j==1){checkName='v_with_RSM'}
														if (j==2){checkName='v_with_MPO'}
														if (j==3){checkName='v_with_ATS'}
														if (j==4){checkName='v_with_VTS'}
														
														
														with_whom=with_whom+'<td ><input type="checkbox" name="'+checkName+'" value="'+with_whomList[j]+'" id="'+checkName+'" >  <label for="'+checkName+'"><font style=" font-size:10px">'+with_whomList[j]+'</font></label></td>'
															
														}
														with_whom=with_whom+' </tr></table>'
														localStorage.with_whomShow=with_whom
														//alert (localStorage.with_whomShow)
														
													}
												
												//alert (with_whom)
												$('#with_whom').empty();
												$('#with_whom').html(localStorage.with_whomShow);
													
													
												$("#error_login").html('Basic Sync Completed Successfully');
												$("#error_login").html('Doctor Sync Processing...');
												doctor_sync()
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html("Doctor Synced Successfully");
												$.afui.loadContent("#pageHome",true,true,'right');
													
												set_doc_all();
													
													
													

										  }//else failed
	
								}// success
							});	//Second Hit
		
		
						}			  
												
					}
						
					
				}

		}
     
    });			
}
		
		
		
		
}//Function

function setScheduleDate(scheduleDate){
	localStorage.scheduled_date=scheduleDate;
	//alert (localStorage.scheduled_date)
}
//=================Bonus Combo==========
//function bonusCombo(){
//	var promo_str=localStorage.promo_str;
//	var bonusComboList=promo_str.split('<rd>');
//	$('#bonus_combo').empty();
//	$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="0"><font style="font-size:12px; color:#306161; background-color:#ECECFF">N/A</font></option>')
//	for (j=0; j < bonusComboList.length; j++){
//		var single_promo=bonusComboList[j].split('<fd>');
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+single_promo[2]+' ('+single_promo[0]+')'+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+single_promo[2]+'('+single_promo[0]+')'+'</font></option>');
//	}
//	
//}


//==================Menu function=====================
function chemist_visit() {
	
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	//$("#doc_start").html('Visit > Market > Chemist');
	
	
	$("#visit_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	
	
	localStorage.doctor_flag=0;
	localStorage.tourFlag=0;
	localStorage.doctor_plan_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	localStorage.saved_data_submit=0;
	localStorage.save_submit=0;
	//alert ('sadsafdsff')
	//bonusCombo();
	
	$("#addDocanc").hide();
	$("#blankAnc").show();
	
	$("#dPending").hide();
	$("#dBlank").show();
	
}
function saved_visit() {
	
	//$("#doc_start").html('Visit > Market > Chemist');
	localStorage.saved_data_submit=0;
	$.afui.loadContent("#page_saved_visit",true,true,'right');

	getvisitSave_data();
	
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	//$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	
	
	localStorage.saved_data_submit=0;
	//addMarketListCp();
	
	
}



function doctor_visit_plan() {
	
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#doc_start").html('Visit > Market > Doctor');
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=1;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;
	localStorage.doctor_pr=0;
	localStorage.visit_page="NO";
	localStorage.scheduleDocFlag=1
	//addMarketList();
	
	//alert (localStorage.base_url+'schedule_sync?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	$.ajax(localStorage.base_url+'schedule_sync?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								
								$("#d_visit").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#d_visit").html('Network Timeout. Please check your Internet connection..');
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#d_visit").html("Approved route not available");	
											
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											localStorage.marketStrDoc=resultArray[1];
											if (localStorage.marketStrDoc!=''){
														var docMarketList = localStorage.marketStrDoc.split('<rd>');
														var docMarketListShowLength=docMarketList.length	
														var docMarketComb=''
														var currentDate = new Date()
														var day = currentDate.getDate();if(day<10)	{day="0" +day};
														var month = currentDate.getMonth() + 1;if(month<10)	{month="0" +month};
														var year = currentDate.getFullYear()
														var CDate=  year + "-" + month + "-" + day
														//alert (day.length)
														//var CDate =yyyy+'-'+mm+'-'+dd	
														var todayFlag=0
														var tomorrowFlag=0		
														//alert (docMarketListShowLength)			
														for (var k=0; k < docMarketListShowLength; k++){
															var docMarketValueArray = docMarketList[k].split('<fd>');
															docMarketID=docMarketValueArray[0];
															docMarketName=docMarketValueArray[1];
															docMarketDate=docMarketValueArray[2];
															var docmarketNameID=docMarketName+'|'+docMarketID;
															
													//alert (CDate)
													//alert (docMarketDate)
													
													if ((docMarketDate!=CDate) &&(tomorrowFlag==0) && (docMarketDate.length > 5)) {
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Tomorrow</font></li>';
																tomorrowFlag=1
															}
															if ((docMarketDate==CDate) &&(todayFlag==0)) {
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin;background-color:#EDFBFE"><font  style="font-size:24; font-weight:bold;color:#009">Today</font></li>';
																todayFlag=1
															}
															if (docMarketID!=''){
																docMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="setScheduleDate(\''+docMarketDate+'\');marketNextLV(\''+docmarketNameID+'\');"><font class="name" style="font-size:18; font-weight:bold">'+docMarketName+'</a></font></li>';
															//alert (docMarketComb)	
																}
														}
														
																					
														localStorage.docMarketComb=docMarketComb;								
													}
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
				 
	addMarketListDoctor()
	$("#addDocanc").hide();
	$("#blankAnc").hide();
	$("#dPending").hide();
	$("#dBlank").show();				 
	
}
function doctor_visit() {
	
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#doc_start").html('Visit > Market > Doctor');
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=0;
	localStorage.doctor_pr=0;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;
	localStorage.visit_page="NO";
	localStorage.scheduleDocFlag=0
	//addMarketList();
	//if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	addMarketList();
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#dPending").show();
	$("#dBlank").hide();
	
}

function doctor_visitPr() {
	
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#doc_start").html('Visit > Market > Doctor');
	//localStorage.doctor_flag=1;
//	localStorage.doctor_plan_flag=0;
//	
//	localStorage.saved_data_submit=0;
//	localStorage.doctor_pr=1;
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=0;
	localStorage.doctor_pr=1;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;
	//alert (localStorage.doctor_pr)
	localStorage.visit_page="NO";
	//addMarketList();
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#addDocanc").show();
	$("#blankAnc").hide();
	$("#dPending").show();
	$("#dBlank").hide();
	
}
function doctor_profile() {
	if (localStorage.doctor_flag==1 && localStorage.cTeam==1) {addMarketListCteam();}else{addMarketList();}
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	//$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Doctor</font>');
	
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=1;
	localStorage.visit_page="NO";
	//addMarketListCp();
	
}

function feedback() {
	localStorage.saved_data_submit=0;
	getComplain();
	//var url = "#page_complain";	
//	$.mobile.navigate(url);
}

function tour(){
	//alert ('aaaaaaaaaa')
	localStorage.tourFlag=1;
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=0;
	localStorage.tour_doc_str=''
	//alert (localStorage.user_type)
	//if (localStorage.user_type=='rep'){
		//showSubmitDocShow()
		
		addMarketListTour()
	
	$("#err_marketTour").html('');
}
function team(){
	
	localStorage.tourFlag=1;
	localStorage.saved_data_submit=0;
	localStorage.doctor_flag=0;
	localStorage.tour_doc_str=''

	page_pending()
	//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
}



function page_pending(){
	$("#err_pendingTour").html('')
	$("#err_pendingTour").show();
	$("#wait_image_pendingTour").show();
	//alert (localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	//$("#tourpendingTxt").text(localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	
	$.ajax(localStorage.base_url+'tourPending?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_pendingTour").hide();
								$("#err_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_pendingTour").text("Approved route not available");	
											$("#wait_image_pendingTour").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_pendingTour").hide();
											localStorage.repPending=resultArray[1];
											
											
											//$('#tour_pending_combo_id_lv').empty()
											//$('#tour_pending_combo_id_lv').append(localStorage.repPending);
											$('#tour_pending_combo_id_lv').html(localStorage.repPending);
											//$('#tour_pending_combo_id_lv').append(localStorage.repPending);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			if (localStorage.user_type=='sup'){
				$("#cReqShow").html('<a onClick="repCancelReqShow_sup()" style="font-size:18px; color:#FFF; " >PendingApproved</a> ');
			}
			else{
				$("#cReqShow").html('<a id="blankAnc" name="blankAnc" onClick="homePage()"  ></a> ');
			}
			$.afui.loadContent("#page_tour_pending",true,true,'right');	 
	
	
}

function repCancelReqShow_sup(){
	
	$("#err_cancel_pendingTour").html('');
	//alert (localStorage.base_url+'repPendingCancel?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)

	
	$.ajax(localStorage.base_url+'repPendingCancel?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_canccel_pendingTour").hide();
								$("#err_cancel_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_canccel_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_cancel_pendingTour").text("Cancel request not available");	
											$("#wait_image_canccel_pendingTour").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_canccel_pendingTour").hide();
											
										
											
											$('#tour_cancel_pending_combo_id_lv').empty()
											$('#tour_cancel_pending_combo_id_lv').append(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_cancel_pending",true,true,'right');	 
	
	
}
function repCancelReq_sup(rep_id){

	
	$("#wait_image_tourCancelSup").show();
	$("#err_tourCancelSup").html('');
	//alert (localStorage.base_url+'repCancelReq_sup?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)

	
	$.ajax(localStorage.base_url+'repCancelReq_sup?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancelSup").hide();
								$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancelSup").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancelSup").text("Approved route not available");	
											$("#wait_image_tourCancelSup").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											localStorage.repPendingSup=rep_id;
											
											var repIdShow=$("#sup_"+rep_id).html();
											localStorage.repshowSup=repIdShow;
											$("#wait_image_tourCancelSup").hide();
											$("#tourCancelShowRepName").html(localStorage.repshowSup);
											$('#tourCancelShowSup').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_repCancelReq_sup",true,true,'right');	 
	
	
}
function tourCReq_done(id){
	
	
	$("#wait_image_tourCancelSup").show();
	$("#err_tourCancelSup").html('');
	
	//alert (localStorage.base_url+'tourCReq_done?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id)

	
	$.ajax(localStorage.base_url+'tourCReq_done?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancelSup").hide();
								$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancelSup").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancelSup").text("Approved route not available");	
											$("#wait_image_tourCancelSup").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_tourCancelSup").hide();
											$('#tourCancelShowSup').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
		//	$.afui.loadContent("#page_repCancelReq_sup",true,true,'right');	 
	
	
}
function tourCReq_reject(id){
	
	
	$("#wait_image_tourCancelSup").show();
	$("#err_tourCancelSup").html('');
	
	//alert (localStorage.base_url+'tourCReq_reject?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id)

	
	$.ajax(localStorage.base_url+'tourCReq_reject?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+localStorage.repPendingSup+'&rowId='+id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancelSup").hide();
								$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_tourCancelSup").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancelSup").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancelSup").text("Approved route not available");	
											$("#wait_image_tourCancelSup").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_tourCancelSup").hide();
											$('#tourCancelShowSup').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
		//	$.afui.loadContent("#page_repCancelReq_sup",true,true,'right');	 
	
	
}

function tourRepInfo(repId){
	
	
	$("#err_repInfo").show();
	$("#err_repInfo").html('');
	
	//alert (localStorage.base_url+'lastThreeVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+repId)

	
	$.ajax(localStorage.base_url+'lastThreeVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+repId,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_repInfo").hide();
								$("#err_repInfo").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#err_repInfo").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_repInfo").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_repInfo").text(resultArray[1]);	
											$("#wait_image_repInfo").hide();		
											
										}
										
										else if (resultArray[0]=='SUCCESS'){
											
											$("#wait_image_repInfo").hide();
											
											$('#repInfoRepName').html(resultArray[2])
											$('#repInfo').html(resultArray[1]);
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			$.afui.loadContent("#page_repInfo",true,true,'right');	 
	
	
}
function repPendingDoc(rep_id){
	
	localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	$("#err_pendingRouteTour").html('');
	$('#repPendingShow').html('')
	$("#pendingRepShow").html('');
	
	//alert (localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)
	

	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
										
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_pendingRouteTour").html(resultArray[1]);	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
											localStorage.repDocPending=resultArray[1];
											
											
											
											var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
											var d = new Date();
											var month = d.getMonth()+2;
											var day = d.getDate();
											var year =d.getFullYear();
											
											var monthThis=''
											
											if (month==1){monthThisShow='January'+'  '+year;}
											if (month==2){monthThisShow='February'+'  '+year;}
											if (month==3){monthThisShow='March'+'  '+year;}
											if (month==4){monthThisShow='April'+'  '+year;}
											if (month==5){monthThisShow='May'+'  '+year;}
											if (month==6){monthThisShow='June'+'  '+year;}
											if (month==7){monthThisShow='July'+'  '+year;}
											if (month==8){monthThisShow='August'+'  '+year;}
											if (month==9){monthThisShow='September'+'  '+year;}
											if (month==10){monthThisShow='October'+'  '+year;}
											if (month==11){monthThisShow='November'+'  '+year;}
											if (month==12){monthThisShow='December'+'  '+year;}
											if (month==13){year=year+1;month=1;monthThisShow='January'+'  '+year;}
										
											var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
											//alert (monthThisShow)
											//var thisMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
											var thisMonthTable='<table width="100%" border="0">  <tr style="font-size:24px; color:#039">    <td >'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right" style="font-size:16px; color:#039">Submitted</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
											
											docTThisMonthRow=localStorage.repDocPending
											//alert (docTThisMonthRow)
											for (var i=0; i < days; i++){
												var dayShow=i+1
												var fulDate=year+'-'+month+'-'+day
												
												var a = new Date(month+'/'+dayShow+'/'+year);
												var dayName=weekday[a.getDay()];
												var monthCheck=''
												var dayCheck=''
												
												if (month<10){monthCheck='0'+month}else{monthCheck=month}
												if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
												var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
												
												
												
													
												//thisMonthTable=thisMonthTable+'<tr ><td width="50px" >'+dayName+'</td><td width="30px">'+dayShow+'</td><td width="40%">'
												
												thisMonthTable=thisMonthTable+'<tr ><td width="10%">'+dayShow+'&nbsp;&nbsp;'+dayName+'</font></td>'
												thisMonthTable=thisMonthTable+'<td style="border-color:#096;background-color:#E7F5FE ">'
				
												//'Bashndhara<br> Nadda<br>'
												var dayRoute=''
												if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
													var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
													//if (dayShow==21){alert (dateRouteSingle)}
													var marketStrListThisMonth=dateRouteSingle.split('<rd>')
													
													for (var m=0; m < marketStrListThisMonth.length; m++){
														var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
														var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
														var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
														var marketIdShow='['+marketIdThisMonth+']'
														if (marketNameThisMonth==''){ marketIdShow=''}

														
														if (dayRoute==''){
															dayRoute=marketNameThisMonth
														}
														else{
															dayRoute=dayRoute+', '+marketNameThisMonth//+marketIdShow
														}
													}

												}
												
												thisMonthTable=thisMonthTable+'<font>'+dayRoute+'</font>'
												thisMonthTable=thisMonthTable+'</td></tr>'
											}
																						
											
											thisMonthTable=thisMonthTable+'</td></tr></table>'	
											$('#repPendingShow').html(thisMonthTable)
											
											
											
											
											
											$("#err_rep_pendingTour").text("");	
											$("#wait_image_rep_pendingTour").hide();
											if (localStorage.user_type=='rep'){
												$("#tourButton").hide();
											}
											else{
												$("#tourButton").show();
											}
											//alert (rep_id)
											var repIdName=$("#"+rep_id).html();	
											localStorage.repIdName=repIdName
											$("#pendingRepShow").html(localStorage.repIdName);	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();
			//alert (rep_id_pending)	 
//			$("#pendingRepShow").html(rep_id_pending);	
			$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}





function reports() {
	var str_report_rep='<table width="100%" border="0">'+
					 '<tr><td>ID: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" readonly="true" placeholder="Rep">'+
					  '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>'+
					   '<tr><td>BaseCode: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market"  ></td></tr></table>'
	var str_report_sup='<table width="100%" border="0">'+
					   '<tr><td>ID: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" placeholder="Rep">'+
					   '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>	'+
					   '<tr><td>BaseCode: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market/level"  ></td></tr></table>'	
	
	if (localStorage.user_type=='rep'){
		localStorage.str_report=str_report_rep;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	if (localStorage.user_type=='sup'){
		localStorage.str_report=str_report_sup;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	$.afui.loadContent("#page_reports_dcr",true,true,'right');
	//var url = "#page_reports_dcr";
//	$.mobile.navigate(url);
}



//==================Menu function end=================
function addMarketList() {
	//alert (localStorage.unschedule_market_cmb_id);
	$("#market_combo_id_lv").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//alert (unschedule_market_combo_list)
	$('#market_combo_id_lv').empty();
	$('#market_combo_id_lv').append(unschedule_market_combo_list);
	
	//$('#market_combo_id_lv').empty();
//	$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
	//alert (unschedule_market_combo_list)
	$.afui.loadContent("#page_market",true,true,'right');

}

function addMarketListDoctor() {
	//alert (localStorage.docMarketComb);
	$("#market_combo_id_lv").val('');
	var unschedule_market_combo_list=localStorage.docMarketComb;
	//alert (unschedule_market_combo_list)
	$('#market_combo_id_lv').empty();
	$('#market_combo_id_lv').append(unschedule_market_combo_list);
	
	//$('#market_combo_id_lv').empty();
//	$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);
	//alert (unschedule_market_combo_list)
	
	$.afui.loadContent("#page_market",true,true,'right');

}

//==========================Show Submit Doctor=======================
function showSubmitDocShow(){
	//localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	//alert (localStorage.base_url+'repPendingDocShow?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	

	$.ajax(localStorage.base_url+'repPendingDocShow?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").text("Retailer not available");	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#schedule_show').html(resultArray[1]);
										
										uncheckAll('tourErep') 
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			//$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}


function repCancelReqShow(i){
	$("#wait_image_tourCancel").hide();
	$("#err_tourCancel").html('')
	var editday=$("#"+i+"editday").html()
	var editdayName=$("#"+i+"editdayName").html()
	var editinfo=$("#"+i+"editinfo").html()
	var monthShow=$("#thisMonthShow").html()
	$("#tourMonth").val('This')
	//alert (editinfo)
	if (editinfo==undefined){
		editinfo=''
		}
	$("#dayNameedit").html(editdayName)
	//$("#dayNumdit").html(editday)
	$("#dayNumdit").html(editday+' '+monthShow)
	$("#infoEdit").html(editinfo)
	
	var selectCombo='</br>&nbsp;&nbsp;&nbsp;<select id="othersAll" style=" width:100px" data-native-menu="false"  >'
	selectCombo=selectCombo+'<option value="" >Select</option>'
	selectCombo=selectCombo+'<option value="HOLIDAY" >HOLIDAY</option>'
	selectCombo=selectCombo+'<option value="MEETING" >MEETING</option>'
	selectCombo=selectCombo+'<option value="LEAVE" >LEAVE</option>'
	selectCombo=selectCombo+'<option value="OTHERS" >OTHERS</option>'
	selectCombo=selectCombo+'</select>'
	
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var amndTable=''	
	for (var m=0; m < marketList.length; m++){
		
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=m+'_'+marketId+'_amnd'
		var marketIdShow='['+marketId+']'
		if (marketName==''){marketIdShow=marketId}
		if (marketId!=''){
		amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'"></br></label></td><td  style="text-align:left;"></br>'+marketName+'</br></td></tr></table>'
		}
		else{
			amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"></br></td></tr></table>'
		}
		
	}
	//amndLeave='<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="amndOthers" value="checkbox" id="amndOthers" ><label for="amndOthers"></br></label></td><td  style="text-align:left;"></br>Office Work / Training</br></br></td></tr></table>'
	//amndLeave=amndLeave+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="amndleav" value="checkbox" id="amndleav" ><label for="amndleav"></br></label></td><td  style="text-align:left;"></br>Leave</br></br></td></tr></table>'
	amndTable=amndTable+selectCombo
	$("#amndReq").html(amndTable)
	$('#tourCancelShow').html('');
	$.afui.loadContent("#page_tour_cancel",true,true,'right');

}
function repCancelReqShowNext(i){
	$("#wait_image_tourCancel").hide();
	$("#err_tourCancel").html('')
	var editday=$("#"+i+"editdayNext").html()
	var editdayName=$("#"+i+"editdayNameNext").html()
	var editinfo=$("#"+i+"editinfoNext").html()
	var monthShow=$("#nextMonthShow").html()
	$("#tourMonth").val('Next')
	//alert (editinfo)
	if (editinfo==undefined){
		editinfo=''
		}
	$("#dayNameedit").html(editdayName)
	$("#dayNumdit").html(editday+' '+monthShow)
	$("#infoEdit").html(editinfo)

	
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var amndTable=''	
	for (var m=0; m < marketList.length; m++){
		
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=m+'_'+marketId+'_amnd'
		var marketIdShow='['+marketId+']'
		if (marketName==''){marketIdShow=marketId}
		if (marketId!=''){
		amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'"></br></label></td><td  style="text-align:left;"></br>'+marketName+marketIdShow+'</br></br></td></tr></table>'
		}
		else{
			amndTable=amndTable+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"></br></td></tr></table>'
		}
		
	}
	//amndLeave='<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="amndOthers" value="checkbox" id="amndOthers" ><label for="amndOthers"></br></label></td><td  style="text-align:left;"></br>Office Work / Training</br></br></td></tr></table>'
	//amndLeave=amndLeave+'<table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="amndleav" value="checkbox" id="amndleav" ><label for="amndleav"></br></label></td><td  style="text-align:left;"></br>Leave</br></br></td></tr></table>'
	$("#amndReq").html(amndTable)
	//$("#amndLeave").html(amndLeave)
	$.afui.loadContent("#page_tour_cancel",true,true,'right');

}
function repCancelReqSubmit(){
	
	$("#err_tourCancel").html('')
	var dayNameedit=$("#dayNameedit").html()
	var dayNumdit=$("#dayNumdit").html()
	var monthGet=$("#tourMonth").val()
	var d = new Date();
	var month =''
	var month=''
	if (monthGet =='This'){
		month = d.getMonth()+1;
	}
	if (monthGet =='Next'){
		month = d.getMonth()+2;
	}
	var year =d.getFullYear();
	var schDate=year+'-'+month+'-'+dayNameedit
	
	
	comboValue= $("#othersAll").val();
	if (comboValue!=''){
		uncheckAll('amndReq')
		if (submitStr==''){
			submitStr=comboValue+'<fd>'+comboValue
		}
		else{
			submitStr=submitStr+'<rd>'+comboValue+'<fd>'+comboValue
		}
		
	}
	//alert (month)
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var submitStr=''	
	for (var m=0; m < marketList.length; m++){
		
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=m+'_'+marketId+'_amnd'
		
		check = $("#"+checkId).prop("checked");
		if (check==true){
			if (submitStr==''){
				submitStr=marketId+'<fd>'+marketName
			}
			else{
				submitStr=submitStr+'<rd>'+marketId+'<fd>'+marketName
			}
		}
		
		
	}
	
	
	
	
	submitStr=schDate+'<date>'+submitStr
	//checkLeave = $("#amndleav").prop("checked");
	//checkOthers = $("#amndOthers").prop("checked");


	//alert (localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr))
	

	$.ajax(localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr),{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancel").hide();
								$("#err_tourCancel").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_tourCancel").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancel").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancel").text("Retailer not available");	
											$("#wait_image_tourCancel").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#tourCancelShow').html(resultArray[1]);
										$("#wait_image_tourCancel").hide();
										//$.afui.loadContent("#page_tour_cancel",true,true,'right');
										
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}

function tourCReq_doc(i){
	
	var reson  = $("#R_opt_"+i).val().toUpperCase();
	
	//alert (localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rowId='+i+'&reson='+reson)
	
	
	$.ajax(localStorage.base_url+'tourCReq_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rowId='+i+'&reson='+reson,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_tourCancel").hide();
								$("#err_tourCancel").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_tourCancel").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_tourCancel").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_tourCancel").text("Retailer not available");	
											$("#wait_image_tourCancel").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
																			
										//$('#tour_rep_pending_show_lv').empty()
										$('#tourCancelShow').html(resultArray[1]);
										$("#wait_image_tourCancel").hide();
										//$.afui.loadContent("#page_tour_cancel",true,true,'right');
										
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax

	
}
//========================================================
function tourCheckFirst(){
	$("#wait_image_retTour").show();	
	$("#err_marketTour").html('');
	//$("#wait_image_refresh").show();
	
	//showSubmitDocShow()
//===================================================================
	//alert (localStorage.base_url+'check_this_n_next_month?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	localStorage.darftValue=''
	
	$.ajax(localStorage.base_url+'check_this_n_next_month?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
			type: 'POST',
			timeout: 30000,
			error: function(xhr) {
			//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
			$("#wait_image_retTour").hide();
			$("#err_marketTour").html('Network Timeout. Please check your Internet connection..1');
								},
			success:function(data, status,xhr){	
				
				 if (status!='success'){
					$("#err_marketTour").html('Network Timeout. Please check your Internet connection...');
					$("#wait_image_tourCancel").hide();
				 }
				 else{	
					var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
					//alert (data)	
					if (resultArray[0]=='FAILED'){
						$("#err_marketTour").text("Retailer not available");	
						localStorage.docTThisMonthRow="";
					}
					else if (resultArray[0]=='SUCCESS'){
						localStorage.docTThisMonthRow=resultArray[3];
						localStorage.marketTourStr=resultArray[2];
						localStorage.docNextMonthRow=resultArray[4];
						
						localStorage.appFlag=resultArray[5];
						localStorage.darftValue=resultArray[6];
						//$('#thisMonth').html('')
						//$('#nextMonth').html('')
						//alert (localStorage.appFlag)
						
						
					}
				//------- 
		} //else
	
	$("#wait_image_retTour").hide();
	
	var NextStatus='Draft'
	
//	====================================================
	//var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var d = new Date();
	var month = d.getMonth()+1;
	var day = d.getDate();
	var year =d.getFullYear();

	var monthThis=''
	
	if (month==1){monthThisShow='January'+'  '+year;}
	if (month==2){monthThisShow='February'+'  '+year;}
	if (month==3){monthThisShow='March'+'  '+year;}
	if (month==4){monthThisShow='April'+'  '+year;}
	if (month==5){monthThisShow='May'+'  '+year;}
	if (month==6){monthThisShow='June'+'  '+year;}
	if (month==7){monthThisShow='July'+'  '+year;}
	if (month==8){monthThisShow='August'+'  '+year;}
	if (month==9){monthThisShow='September'+'  '+year;}
	if (month==10){monthThisShow='October'+'  '+year;}
	if (month==11){monthThisShow='November'+'  '+year;}
	if (month==12){monthThisShow='December'+'  '+year;}

	var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
	//alert (monthThisShow)
	var thisMonthTable='<table width="100%" border="0">  <tr style="font-size:24px; color:#039">    <td id="thisMonthShow">'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right" style="font-size:16px; color:#039">Approved</td>  </tr></table><table style="border-color:#096;background-color:#EDFEED; border-style:hidden" width="100%" border="1" cellspacing="0">'
	
	docTThisMonthRow=localStorage.docTThisMonthRow
	for (var i=0; i < days; i++){
		var dayShow=i+1
		var fulDate=year+'-'+month+'-'+day
		
		var a = new Date(month+'/'+dayShow+'/'+year);
		var dayName=weekday[a.getDay()];
		var monthCheck=''
		var dayCheck=''
		
		if (month<10){monthCheck='0'+month}else{monthCheck=month}
		if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
		var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
		
		//alert (dayCheckFinal)		
		thisMonthTable=thisMonthTable+'<tr ><td width="10%">'+'<font id="'+i+'editdayName">'+dayShow+'</font>'+'&nbsp;&nbsp;'+'<font id="'+i+'editday">'+dayName+'</font></td><td  style="border-left:hidden; "><table style="border-color:#096;background-color:#E7F5FE " width="100%" border="0" cellspacing="0"  ><tr><td >'
		//'Bashndhara<br> Nadda<br>'
		if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
			var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
			//if (dayShow==21){alert (dateRouteSingle)}
			var marketStrListThisMonth=dateRouteSingle.split('<rd>')
			var dayRoute=''
			for (var m=0; m < marketStrListThisMonth.length; m++){
				var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
				var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
				var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
				//+' ['+marketIdThisMonth+']'+'<br>'
				//dayRoute=dayRoute+marketNameThisMonth+'['+marketIdThisMonth+']'+'  '+marketStatusThisMonth+'<br>'
				//alert (checkId)
				if (dayRoute==''){
					dayRoute=marketNameThisMonth
				}
				else{
					dayRoute=dayRoute+', '+marketNameThisMonth
				}
			}
			thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+dayRoute+'</font>'

		}
		//alert (parseInt(day))
		if (parseInt(dayShow) > parseInt(day)){
			
		thisMonthTable=thisMonthTable+'<div align="right"><img  style="width:30px; height:30px" onClick="repCancelReqShow('+i+');"  src="editProfile.png" alt=""></div></td></tr>'
		//alert (thisMonthTable)
		}
		else{
			//alert ('2')
			thisMonthTable=thisMonthTable+' </td></tr>'
		}
		//thisMonthTable=thisMonthTable+'</td></tr><tr><td style="border-style:hidden" width="8%" align="right"><img  style="width:30px; height:30px" onClick="repCancelReqShow('+i+');"  src="editProfile.png" alt=""></td> </tr>'
		thisMonthTable=thisMonthTable+'</table>'
	}
	thisMonthTable=thisMonthTable+'</td></tr></table><br><br><br>'
	$('#thisMonth').html(thisMonthTable)
	
	
//	====================================================
	var d = new Date();
	var monthNextGet = d.getMonth()+2;
	var dayNext = d.getDate();
	var yearNext =d.getFullYear();
	
	var monthThis=''
	
	if (monthNextGet==1){monthNext='January'+'  '+year;}
	if (monthNextGet==2){monthNext='February'+'  '+year;}
	if (monthNextGet==3){monthNext='March'+'  '+year;}
	if (monthNextGet==4){monthNext='April'+'  '+year;}
	if (monthNextGet==5){monthNext='May'+'  '+year;}
	if (monthNextGet==6){monthNext='June'+'  '+year;}
	if (monthNextGet==7){monthNext='July'+'  '+year;}
	if (monthNextGet==8){monthNext='August'+'  '+year;}
	if (monthNextGet==9){monthNext='September'+'  '+year;}
	if (monthNextGet==10){monthNext='October'+'  '+year;}
	if (monthNextGet==11){monthNext='November'+'  '+year;}
	if (monthNextGet==12){monthNext='December'+'  '+year;}
	if (monthNextGet==13){year=year+1;yearNext=yearNext+1;monthNextGet=1;monthNext='January'+'  '+year;}

	var daysNext = Math.round(((new Date(yearNext, monthNextGet))-(new Date(yearNext, monthNextGet-1)))/86400000);
	//alert (localStorage.docNextMonthRow)
	var MvalueFlag=0
	//alert (localStorage.darftValue)
	//alert (localStorage.appFlag)
	if (localStorage.darftValue!='' & localStorage.appFlag==2){
		NextStatus='Draft'
		localStorage.tourSubmitStr=localStorage.darftValue
		MvalueFlag=1
	}
	
	
	if  (localStorage.docNextMonthRow=='') {MvalueFlag=1}
	var nextMonthTable=''
	if (MvalueFlag==1){
			//alert (localStorage.tourSubmitStr)
			if (localStorage.tourSubmitStr!=''){
				var tourSubmitStr=localStorage.tourSubmitStr
			}
			nextMonthTable='<table width="100%" border="0">  <tr style="font-size:24px; color:#039">    <td >'+monthNext+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right" style="font-size:16px; color:#039">'+NextStatus+'</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
			
			for (var i=0; i < daysNext; i++){
				var dayShow=i+1
				var aNext = new Date(monthNextGet+'/'+dayShow+'/'+yearNext);
				//alert (aNext)
				var dayNameNext=weekday[aNext.getDay()];
				var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;
				//alert (dateNextMonth)
				
				nextMonthTable=nextMonthTable+'<tr ><td onClick="toggleDivNext('+i+')" width="50px" height="14px"> '+'<font >'+dayShow+'</font>'+'&nbsp;&nbsp;'+'<font >'+dayNameNext+'</font>'+'<input type="hidden" id="'+i+'_date" value="'+dateNextMonth+'"  /></td>'
				nextMonthTable=nextMonthTable+'<td>'
		
				var marketList=(localStorage.marketTourStr).split('<rd>')
				nextMonthTable=nextMonthTable+'<div id="nextShow'+i+'"></div>'
				for (var m=0; m < marketList.length; m++){
					
					var marketId=marketList[m].split('<fd>')[0]
					var marketName=marketList[m].split('<fd>')[1]
					var checkId=i+'n'+m+'_'+marketId
					var marketIdShow='['+marketId+']'
					if (marketName==''){ marketIdShow=''+marketId}
					if (marketId!=''){
					nextMonthTable=nextMonthTable+'<div id="next_'+i+'"><table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'"></br></label></td><td align="left"></br>'+marketName+'</br></td></tr></table>'
				//	nextMonthTable=nextMonthTable+'<div id="next_'+i+'"><table width="100%" border="0"  cellpadding="0" cellspacing="0" style="border-radius:5px;"><tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox"  name="'+checkId+'" value="checkbox" id="'+checkId+'"><label for="'+checkId+'">'+marketName+'</label></td></tr></table>'
					
					//alert (checkId)
					}
					var selectCombo='</br><select id="othersAll'+i+'" style="font-size:12px; width:100px; height:40px" data-native-menu="false"  >'
						selectCombo=selectCombo+'<option value="" >Select</option>'
                        selectCombo=selectCombo+'<option value="HOLIDAY" >HOLIDAY</option>'
						selectCombo=selectCombo+'<option value="MEETING" >MEETING</option>'
						selectCombo=selectCombo+'<option value="LEAVE" >LEAVE</option>'
						selectCombo=selectCombo+'<option value="OTHERS" >OTHERS</option>'
                        selectCombo=selectCombo+'</select>'
					
						
				}		 
				
				
				
			nextMonthTable=nextMonthTable+selectCombo+'</br></br><input type="submit"  value="   OK   " onClick="setDiv('+i+')" /><br><br></div></td></tr>'
			
			
			
			}
			
			nextMonthTable=nextMonthTable+'</table></br></br><input type="submit" id="nextMonthSubmitButton"  onClick="tourSubmit_doc();"   style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="     Submit      "   /></br></br><input type="submit" id="nextMonthSubmitButton"  onClick="tourSave_doc();"   style="width:100%; height:50px; background-color:#09C; color:#FFF; font-size:20px" value="     Save      "   /><br><br>'
			//alert (nextMonthTable)
			
	}
	else{
		NextStatus='Submitted'
		if (localStorage.appFlag==1){NextStatus='Approved'}
		
		nextMonthTable='<table width="100%" border="0">  <tr style="font-size:24px; color:#039">    <td id="nextMonthShow">'+monthNext+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right" style="font-size:16px; color:#039">'+NextStatus+'</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
			var docNextMonthRow=localStorage.docNextMonthRow
			
			for (var i=0; i < daysNext; i++){
				var dayShow=i+1
				var aNext = new Date(monthNextGet+'/'+dayShow+'/'+yearNext);
				//alert (aNext)
				var dayNameNext=weekday[aNext.getDay()];
				var monthNextCheck=''
				var dayShowNextCheck=''
				if (monthNextGet<10){monthNextCheck='0'+monthNextGet}else{monthNextCheck=monthNextGet}
				if (dayShow<10){dayShowNextCheck='0'+dayShow}else{dayShowNextCheck=dayShow}
				var dateNextMonth = yearNext+'-'+monthNextCheck+'-'+dayShowNextCheck;
				//alert (dateNextMonth)
				nextMonthTable=nextMonthTable+'<tr ><td width="10%">'+'<font id="'+i+'editdayNameNext">'+dayShow+'</font>'+'&nbsp;&nbsp;'+'<font id="'+i+'editdayNext">'+dayNameNext+'</font></td>'
				nextMonthTable=nextMonthTable+'<td style="border-color:#096;background-color:#E7F5FE ">'
		//'Bashndhara<br> Nadda<br>'
					//alert (dateNextMonth)
					//alert (docNextMonthRow.indexOf('<'+dateNextMonth+'>'))
				if (docNextMonthRow.indexOf('<'+dateNextMonth+'>')!=-1){
					var dateRouteSingleNext=docNextMonthRow.split('<'+dateNextMonth+'>')[1].split('</'+dateNextMonth+'>')[0]
					//if (dayShow==21){alert (dateRouteSingle)}
					var marketStrListNextMonth=dateRouteSingleNext.split('<rd>')
					var dayRouteNext=''
					for (var m=0; m < marketStrListNextMonth.length; m++){
						var marketIdNextMonth=marketStrListNextMonth[m].split('<fd>')[0]
						var marketNameNextMonth=marketStrListNextMonth[m].split('<fd>')[1]
						var marketStatusNextMonth=marketStrListNextMonth[m].split('<fd>')[2]
						var marketIdShowNext='['+marketIdNextMonth+']'
						if (marketName==''){ marketIdShowNext=''}
						if (dayRouteNext==''){
							dayRouteNext=marketNameNextMonth
						}
						else{
							dayRouteNext=dayRouteNext+', '+marketNameNextMonth
						}
						
						//dayRouteNext=dayRouteNext+marketNameNextMonth+marketIdShowNext+'<br>'
						//dayRoute=dayRoute+marketNameThisMonth+'['+marketIdThisMonth+']'+'  '+marketStatusThisMonth+'<br>'
						//alert (checkId)
					}
					nextMonthTable=nextMonthTable+'<font id="'+i+'editinfoNext">'+dayRouteNext+'</font>'
					

		}
		nextMonthTable=nextMonthTable+'</td></tr>'
		//nextMonthTable=nextMonthTable+'<div align="right"><img  style="width:30px; height:30px" onClick="repCancelReqShowNext('+i+');"  src="editProfile.png" alt=""></div></td></tr>'
		nextMonthTable=nextMonthTable+'</td></tr>'	
		//thisMonthTable=thisMonthTable+'</td></tr><tr><td style="border-style:hidden" width="8%" align="right"><img  style="width:30px; height:30px" onClick="repCancelReqShow('+i+');"  src="editProfile.png" alt=""></td> </tr>'
		//nextMonthTable=nextMonthTable+'</table>'
	}
	nextMonthTable=nextMonthTable+'</td></tr></table><br><br><br>'
	}
	//alert (nextMonthTable)
	$('#nextMonth').html(nextMonthTable)
	
	//alert (localStorage.tourSubmitStr)
	if (localStorage.tourSubmitStr != '' ){
		for (var i=0; i < daysNext; i++){
					tourStrGet=''
					var dayShow=i+1
					var aNext = new Date(monthNextGet+'/'+dayShow+'/'+yearNext);
					//alert (aNext)
					var dayNameNext=weekday[aNext.getDay()];
					var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;
					var checkStr=dateNextMonth+'<fd>'+marketId+'<fd>'+marketName
					for (var m=0; m < marketList.length; m++){
						var marketId=marketList[m].split('<fd>')[0]
						var marketName=marketList[m].split('<fd>')[1]
						var checkId=i+'n'+m+'_'+marketId
						//alert (dateNextMonth)
						var checkStr=dateNextMonth+'<fd>'+marketId+'<fd>'+marketName
						var checkStrHOLIDAY=dateNextMonth+'<fd>HOLIDAY<fd>HOLIDAY'
						var checkStrMEETING=dateNextMonth+'<fd>MEETING<fd>MEETING'
						var checkStrLEAVE=dateNextMonth+'<fd>LEAVE<fd>LEAVE'
						var checkStrOTHERS=dateNextMonth+'<fd>OTHERS<fd>OTHERS'
						
						if (tourSubmitStr.indexOf(checkStr)!=-1) {
								var checkIdget='#'+i+'n'+m+'_'+marketId
								$(checkIdget).attr("checked", true);	
						  }
						else if (tourSubmitStr.indexOf(checkStrHOLIDAY)!=-1) {
								$('#othersAll'+i).val('HOLIDAY').attr("selected", "selected");
							} 
						else if (tourSubmitStr.indexOf(checkStrMEETING)!=-1) {
								$('#othersAll'+i).val('MEETING').attr("selected", "selected");
							} 
						else if (tourSubmitStr.indexOf(checkStrLEAVE)!=-1) {
								//alert ('#othersAll'+i)
								$('#othersAll'+i).val('LEAVE').attr("selected", "selected");
							} 
						else if (tourSubmitStr.indexOf(checkStrOTHERS)!=-1) {
								$('#othersAll'+i).val('OTHERS').attr("selected", "selected");
							}
	
					}
				}		 
	
	}
	
	  
	if (localStorage.docNextMonthRow==''){
		for (var i=0; i < daysNext; i++){
			$("#next_"+i).hide();
		}
		
	}
  }//Strat
});//end ajax
	}
function setDiv(i){
	var marketList=(localStorage.marketTourStr).split('<rd>')
	var comboValue=''
	var submitStr=''
	comboValue= $("#othersAll"+i).val();
	
	for (var m=0; m < marketList.length; m++){
		var marketId=marketList[m].split('<fd>')[0]
		var marketName=marketList[m].split('<fd>')[1]
		var checkId=i+'n'+m+"_"+marketId
		check = $("#"+checkId).prop("checked");
		
			if(check) {
				if (submitStr==''){
					submitStr=marketName
				}
				else{
					submitStr=submitStr+','+marketName
				}
			}
		
		
	}
	if (comboValue!=''){
		submitStr=comboValue	
		uncheckAll("next_"+i)
	}
	$("#nextShow"+i).html(submitStr)
	$("#next_"+i).hide();
	$("#nextShow"+i).Show();
}
	
function toggleDivNext(i){
	$("#next_"+i).toggle();
	
	$("#nextShow"+i).Show();
	//alert ("#nextShow"+i)
}
function addMarketListTour() {
	$("#wait_image_refresh").hide();
	$.afui.loadContent("#page_tour_market",true,true,'right');
	tourCheckFirst()
	// nextCh
	//-----------------------------------------------------------
	nextMShow()
	
}
function addMarketListTourRefresh() {
	
	$("#wait_image_refresh").show();
	
	$("#refresh_white").hide()
	//alert ('1')
	tourCheckFirst()
	//-----------------------------------------------------------
	nextMShow()
	
	$("#wait_image_refresh").hide()
	$("#refresh_white").show()
	//$.afui.loadContent("#page_tour_market",true,true,'right');
}

function addMarketListCteam() {
	$("#market_combo_id_lv").val('');
	//var unschedule_market_combo_listCteam=localStorage.visit_plan_marketlist_comboCteam;
	
	//var unschedule_market_combo_listCteam=localStorage.docMarketComb;
	$('#market_combo_id_lv').empty();
	//alert (unschedule_market_combo_listCteam)
	$('#market_combo_id_lv').append(unschedule_market_combo_listCteam);
	
	$.afui.loadContent("#page_market",true,true,'right');

}

function marketNextLV(lvalue) {
	$("#unschedule_market_combo_id").val(lvalue);
	
	
	//getLocationInfo();
	getLocationInfo_ready()
	//alert (localStorage.doctor_flag)
	if (localStorage.doctor_flag==1){
		
		marketNext_doc();
	}
	else{
		if (localStorage.user_type=='rep'){
			marketNext();	
		}
		else{
			
			marketNext_sup();	
		}
	}	
}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	
	localStorage.path_value_report='http://w03.yeapps.com/skfah/order_invoice_custom_mobile/'
				var linkPath="window.open('"+localStorage.path_value_report+"index?"+"cid="+localStorage.cid+"&rep_id="+localStorage.user_id+"&rep_pass="+localStorage.user_pass	+"', '_system');"
			var tour_combo='<a style="font-size:14px;" onclick="'+linkPath+'">Approve Customize Order</a>';
			$('#order_invoice_approve').empty()
			$('#order_invoice_approve').append(tour_combo)
			//alert (linkPath)
			
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			//var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					//var resultArray = market_list.split('</'+market_Id+'>');			
//					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							
							if(mClientID!=''){

									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'| </font>'+mClientID+'</font></a></li>';
							}
						 }
					
					
					//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					
					
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					
					
					
					
					//var url = "#page_market_ret";	
					//$.mobile.navigate(url);
					
					$.afui.loadContent("#page_market_ret",true,true,'right');
					
					
				}
			}//end else

			//============================Get market client list end===============================
		}			
}
function marketNext_sup() {
	localStorage.path_value_report='http://w03.yeapps.com/skfah/order_invoice_custom_mobile/'
				var linkPath="window.open('"+localStorage.path_value_report+"index?"+"cid="+localStorage.cid+"&rep_id="+localStorage.user_id+"&rep_pass="+localStorage.user_pass	+"', '_system');"
			var tour_combo='<a style="font-size:14px;" onclick="'+linkPath+'">Approve Customize Order</a>';
			$('#order_invoice_approve').empty()
			$('#order_invoice_approve').append(tour_combo)
			
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
				
				
				//===========================Get market client list Start============================
				
				
				//$("#err_market_next").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType);
				//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
				
	//			//// ajax-------
	
	$.ajax(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
								$("#error_login").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
								
								
	//$.post(localStorage.base_url+'getMarketClientList?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,market_id:market_Id,catType:catType},
    						 
								
							//	 function(data, status){
									 if (status!='success'){
										$("#err_retailer_next").html('Network Timeout. Please check your Internet connection...');
										$("#btn_schedule_ret").show();
										$("#wait_image_schedule_ret").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
										if (resultArray[0]=='FAILED'){
											$("#err_market_next").text("Retailer not available");	
											$("#wait_image_unschedule_market").hide();		
											$("#btn_unschedule_market").show();
										}
										
										
										
	
	
								else if (resultArray[0]=='SUCCESS'){
									
									localStorage.market_client=resultArray[1];
									
									//alert (resultArray[1])
									
								var	m_client_string=localStorage.market_client;
				
									var visit_type="Unscheduled";
									var scheduled_date="";
											
						//					-----------------------------------
														
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length	
									
								
								var unscheduled_m_client_list=''
								//alert (mClientListShowLength);
								for (var i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'| </font>'+mClientID+'</font></a></li>'	
										//unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								
								



							
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
								
								unscheduled_m_client_combo_ob.empty()
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
//								--------------------------


								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 

								$.afui.loadContent("#page_market_ret",true,true,'right');
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			
			

					

//			//============================Get market client list end===============================

		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//getLocationInfo();
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}
	
function marketRetailerNext() {
	
	//$("#lat").val(0);
	//$("#longitude").val(0);
	//localStorage.location_detail=''
	$("#err_m_retailer_next").text("");
	var visit_client=$("#unscheduled_m_client_combo_id").val();		
	//alert(visit_client); 	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			//$("#btn_unschedule_market_ret").hide();
//			$("#wait_image_unschedule_market_ret").show();	
			
			
			visitClientId_list=visit_client.split('|')
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
		localStorage.path_value_report='http://w03.yeapps.com/skfah/order_invoice_custom_mobile/'
		var linkPath="window.open('"+localStorage.path_value_report+"index?"+"cid="+localStorage.cid+"&rep_id="+localStorage.user_id+"&rep_pass="+localStorage.user_pass	+"&custID="+visitClientID+"', '_system');"
		
			


			var tour_combo='<a style="font-size:14px;" onclick="'+linkPath+'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customize Order</a>';
			$('#order_invoice_custom_mobile').empty();
			$('#order_invoice_custom_mobile').append(tour_combo);	
			
			if (localStorage.visit_client !=visitClientID ){
				cancel_cart();
			}
			else {
				$("#wait_image_visit_submit").hide();
				$.afui.loadContent("#page_visit",true,true,'right');
			}
			//alert (visitClientID);
			$(".visit_client").html(visit_client.split('|')[0]);
				
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();
			
			var lat_show= $("#lat").val();
			 //alert (localStorage.latitude)
			 //alert (localStorage.visit_location_flag)
			
			if  ((localStorage.latitud==0) && (localStorage.visit_location_flag=='YES')){
				//alert (localStorage.visit_location);
				$("#visit_location").show();
				$("#visit_submit").hide();
				
			}
			
			
			
			if (localStorage.visit_location_flag!='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").hide();
				$("#visit_submit").show();
				
			}
			
			
			if (localStorage.delivery_date_flag=='YES'){
				$("#delivery_date_div").show();
			}
			else{
				$("#delivery_date_div").hide();
			}
			if (localStorage.collection_date_flag=='YES'){
				$("#collection_date_div").show();
			}
			else{
				$("#collection_date_div").hide();
			}
			if (localStorage.payment_date_flag=='YES'){
				$("#payment_date_div").show();
			}
			else{
				$("#payment_date_div").hide();
			}
			//alert (localStorage.payment_mode_flag)
			if (localStorage.payment_mode_flag=='YES'){
				localStorage.payment_mode='Cash'
				$("#payment_mode_div").show();
			}
			else{
				$("#payment_mode_div").hide();
			}
			
			
			
			$("#errorChkVSubmit").html('');
			$("#errorConfiProfileUpdate").html('');
			$("#errorChkVSubmit_doc").html('');
			
			//$("#wait_image_visit_submit").hide();
			//$.afui.loadContent("#page_visit",true,true,'right');

			
								
			
		}
}


//--------------------------------- Order: Show order from home

function getOrder_load(){
	//bonusCombo();	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	
	var orderTotal=0
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];	
			$("#order_qty"+orderProductId).val(orderProductQty);
			var product_price=$("#order_price"+orderProductId).val(); 
			var tPrice= parseFloat(product_price)* parseFloat(orderProductQty);
			orderTotal=orderTotal+tPrice
		}		
	}
	localStorage.orderTotal=orderTotal.toFixed(2)
	
	
	
	
	$("#orderTotalShow").html(localStorage.orderTotal+' TK');
	
}
function getOrder(){	
	$("#order_load").show();
	//alert (localStorage.product_tbl_str)
	//$('#item_combo_id_lv').empty()
	//$('#item_combo_id_lv').append(localStorage.product_tbl_str);
	
	getOrderData()
	$("#err_order_item").html('')
	//$.afui.loadContent("#page_order",true,true,'right');
}

//--------------------------------- Order: Set Order data

function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	
	var price= $("#order_price"+orderProductId).val()
	var Productprice=price*pqty
	
	
	//var orderT=localStorage.orderTotal
	
	
	
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
				
				
				
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
				
			}	
			
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
							
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
							
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	localStorage.orderTotal=0
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
		var orderTotal=0
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];	
			
			var product_price=$("#order_price"+orderProductId).val(); 
			var tPrice= parseFloat(product_price)* parseFloat(orderProductQty);
			orderTotal=orderTotal+tPrice
		}		
	}
	localStorage.orderTotal=orderTotal.toFixed(2)
		
		$("#orderTotalShow").html(localStorage.orderTotal+ ' TK');

		
	}
function getOrderData(){	
	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		//alert ('aa');
		$("#err_order_item").html('');
		$.afui.loadContent("#page_cart",true,true,'right');
		$("#order_load").hide();
	}
	else{
		
		$("#err_order_item").html('Please select minimum one product');
		$("#errorChkVSubmit").html('');
		//$("#errorConfiProfileUpdate").html('');
		$("#errorChkVSubmit_doc").html('');
		

		//alert (localStorage.product_tbl_str)
		//location.reload()
		getOrder_load()
		$.afui.loadContent("#page_order",false,true,'right');
		$("#order_load").hide();
		//alert ('aaa');
	}
}
	
//--------------------cart Start----------------
function cart_data() {	
	//alert (localStorage.productOrderStr)
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='';
		var total_value=0
		var total_without_promo=0
		var total_tp=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var product_vat=$("#order_vat"+orderProductId).val(); 
				var totalPrice= parseFloat(product_price)* parseFloat(orderProductQty);
				var total= (parseFloat(product_price)-parseFloat(product_vat))* parseFloat(orderProductQty);
				
				var promo_str_cart=$('#order_promo'+orderProductId).val();
				var stock_str_cart=$('#stockShow'+orderProductId).text(); 
				
				var prom_flag=1
				//alert (promo_str_cart.length)
				
				
				if (promo_str_cart.length < 5){
					total_without_promo=total_without_promo+total
					prom_flag=0
				}
				//alert (parseFloat(total_without_promo))
				total_value=total_value+totalPrice;
				total_tp=total_tp+total
				//product_tbl_cart_str=product'_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'</li>'
				//alert (product_name)
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin" onClick="tr_item_cart(\''+orderProductId+'\')">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td>&nbsp;</td><td  style="text-align:left;">'+ product_name.toUpperCase()+' | '+orderProductId+' | '+product_price+' '+'<span style="color:#600">'+stock_str_cart+'</span>'+'</br> <span style="background-color:#FFFF53; color:#F00;font-size:12px">'+promo_str_cart+'</span>'+'<input  type="hidden" id="cart_vat'+orderProductId+'"  value="'+prom_flag+'" >'+'</td></tr>'+'</table>'+'</li>'
				
				}
		
		}
		
		product_tbl_cart_str=product_tbl_cart_str;		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		localStorage.total_tp=total_tp.toFixed(2);
		
		$('#item_combo_id_lv_cart').empty();
		$('#item_combo_id_lv_cart').append(localStorage.product_tbl_cart);
		
		
		//var total_without_promo_vat=(17.39/100)*(parseFloat(total_without_promo))
		var total_without_promo_vat=total_without_promo
		var total_without_promo_show=total_without_promo
		
		//var total_without_promo_show=parseFloat(total_without_promo)-parseFloat(total_without_promo_vat)
		
		
		var show_total="Total Order Amount CPP: "+localStorage.total_value + " TK <font style='font-size:11px'>TP:"+localStorage.total_tp+" TK" +"</font></br> <font style='font-size:11px'> Regular Discount Applicable on TP : "+total_without_promo_show.toFixed(2) + " TK </font>" 
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		$.afui.loadContent("#page_order",true,true,'right');

	}
	
	
	
	
}


//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		//cart_data()
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		var tp_total=0
		var total_tp_all=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var vat_flag=$("#cart_vat"+orderProductId).val();
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				var vat=$("#order_vat"+orderProductId).val(); 
				var tp=(parseFloat(product_price)-parseFloat(vat))*orderProductQty
				total_tp_all=total_tp_all+tp
				//alert (total_value)
				if (vat_flag==0){
					tp_total=tp_total+tp
				}
				
				
				}
		
		}
		
		
		
		var show_total="Total Order Amount CPP: "+total_value.toFixed(2) + " TK <font style='font-size:11px'>TP: "+total_tp_all.toFixed(2) +"</font></br> <font style='font-size:11px'> Regular Discount Applicable on TP: "+tp_total.toFixed(2) + " TK </font>" 
		
		
		//localStorage.total_value=show_total//total_value.toFixed(2);
		
		localStorage.show_total=show_total;
		
		//alert (show_total)
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
		//$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " TK");
		//$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " TK");

	}
		
		
//		==================================
	}



function payment_mode(){
	var payment_mode='CASH'
	payment_mode=($("input:radio[name='payment_mode']:checked").val())
	$("#wait_image_visit_submit").hide();
	//$.afui.loadContent("#page_visit",true,true,'right');
	localStorage.payment_mode=payment_mode
	//alert (localStorage.payment_mode)
}
function cart_ok(){
	
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');
	//localStorage.payment_mode=payment_mode
	//alert (localStorage.payment_mode)
}
function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	$("#wait_image_visit_submit").hide();
	$.afui.loadContent("#page_visit",true,true,'right');

}

//-----VISIT SUBMIT
function visitSubmit(){	
//alert (localStorage.doctor_flag)
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		
		lscVisitSubmit();	
	}	

}

//==============================Visit Submit============
function replace_special_char(string_value){
	//var chemist_feedback=$("#chemist_feedback").val();
	//var doc_feedback=$("#doc_feedback").val();
	//chemist_feedback=chemist_feedback.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}

function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	$("#visit_save_div").hide();
	
	//alert (localStorage.location_detail)
	var visitClientId=localStorage.visit_client
	var visit_type=localStorage.visit_type
	var scheduled_date=localStorage.scheduled_date
	
	var marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	var productOrderStr=localStorage.productOrderStr
	var marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	var campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	//alert ('asdfsdf')
	//----------------------- marchandizing status check
	marchandizingInfoStr=''
	
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	
	var delivery_date=$("#delivery_date").val();
	var collection_date=$("#collection_date").val();
	var OShift=$("#OShift").val();
	
	//var bonus_combo=$("#bonus_combo").val();
	var bonus_combo=($("input:radio[name='bonus_combo']:checked").val())
	//alert (bonus_combo)

	//localStorage.payment_mode=$("#payment_mode").val();
	
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	localStorage.payment_mode=payment_mode
	
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	}
	
	
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	
	if (localStorage.delivery_date_flag!='YES'){
		delivery_date=today_1;
	}
	//else{
//		$("#errorChkVSubmit").html('Please enter delivery date');
//		$("#visit_save_div").show();
//	}
	if (localStorage.collection_date_flag!='YES'){
		collection_date=today_1
	}
	//else{
//		$("#errorChkVSubmit").html('Please enter collection date');
//		$("#visit_save_div").show();
//	}
	
	if  (localStorage.sync_date!=today_1){
		$("#errorChkVSubmit").html('Please sync first');
		$("#visit_save_div").show()
		}
		else{
				//alert (delivery_date)
				if  ((delivery_date.length < 8) || (collection_date.length < 8)){
					$("#errorChkVSubmit").html('Please enter collection and delivery date');
					$("#visit_save_div").show()
				}
				else{
					
					var currentDate = new Date()
					var day = currentDate.getDate();if(day.length==1)	{day="0" +month};
					var month = currentDate.getMonth() + 1;if(month.length==1)	{month="0" +month};
					var year = currentDate.getFullYear()
					var today=  year + "/" + month + "/" + day
					var delivery_date_check=delivery_date.replace('-','/')
					var collection_date_check=collection_date.replace('-','/')
					var delivery_year=delivery_date.split('-')[0]
					var collection_year=collection_date.split('-')[0]
			
					var date1 = new Date(today);
					var date2 = new Date(delivery_date_check);
					var date3 = new Date(collection_date_check);
			 
					var diffDays_delivery = date2- date1; 
					var diffDays_collection = date3 - date1; 
					var d_chacke=86400000*7
					//alert (d_chacke)
					if  ((diffDays_delivery < 0 ) || (diffDays_delivery > d_chacke ) || (diffDays_collection < 0 )){
						//alert (diffDays_delivery )
						$("#errorChkVSubmit").html('Invalid collection and delivery date');
						$("#visit_save_div").show();
					}
					
					else{
								//alert (photoRequired)	
			//					if (photoRequired=='Yes' && lscPhoto==''){
			//						$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
			//					}else{
			//						var imageName=localStorage.user_id+'_'+now+'.jpg';						
									if (visitClientId=='' || visitClientId==undefined){
										
										$("#errorChkVSubmit").html('Invalid Client');		
									}else{
										if(visit_type=='' || visit_type==undefined){
											$("#errorChkVSubmit").html('Invalid Visit Type');
										}else{
											//alert (localStorage.location_error)
											if ( localStorage.location_error==2){
													
													$("#checkLocation").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
													$("#visit_submit").show();
													$("#visit_save_div").show();
												}
												else {
														$("#visit_submit").hide();
														$("#wait_image_visit_submit").show();	
														$("#visit_save_div").hide();
														if (bonus_combo=='YES'){bonus_combo=1;}	else{bonus_combo=0;}
														var imageName=localStorage.user_id+'_'+now+'.jpg';
																		//alert (localStorage.productOrderStr);
																		$("#errorChkVSubmitTxt").val(localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&bonus_combo='+bonus_combo+'&OShift='+OShift+'&version=p1')
																		
			//alert (localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&bonus_combo='+bonus_combo+'&OShift='+OShift+'&version=p1')															
																		// ajax-------
																		//alert (localStorage.payment_mode);
														$.ajax(localStorage.base_url+'visitSubmit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&location_detail='+localStorage.location_detail+'&bonus_combo='+bonus_combo+'&OShift='+OShift+'&version=p1',{
														// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
														type: 'POST',
														timeout: 30000,
														error: function(xhr) {
														//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();
														$("#visit_save_div").show();
														$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection..');
																			},
														success:function(data, status,xhr){	
														
																	
															 
															 if (status!='success'){
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																$("#visit_save_div").show();
																$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection...');
															 }
															 else{		
															
															 var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');					
								
															if (resultArray[0]=='FAILED'){						
																$("#errorChkVSubmit").html(resultArray[1]);
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																$("#visit_save_div").show();	
															}else if (resultArray[0]=='SUCCESS'){
																							
														//		-----------
																localStorage.visit_client=''
																localStorage.marchandizingStr=''
																
																localStorage.marketInfoLSCStr=''
																
																localStorage.marketInfoStr='';
																localStorage.marketInfoSubmitStr='';
																
																localStorage.productOrderStr='';
																localStorage.marchandizingInfoStr='';
																localStorage.visit_camp_list_str='';
																localStorage.visit_camp_submit_str='';
																visitCampaginTempArray=[];
																visitCampaginArray=[];
																
																localStorage.visit_page="";																
																localStorage.show_total="";
																
																$("#chemist_feedback").val('')
																
																
						
																//-------------
																// Clear localStorage
																	
																localStorage.productOrderStr='';
																cancel_cart();
																//bonusCombo();	
						
																//--------------------------------------------------------
																$(".visit_client").html('');
																
																$("#errorChkVSubmit").html('');
																$("#lat").val('');
																$("#longitude").val('');
																$("#lscPhoto").val('');
																document.getElementById('myImage').src = '';
																
																$("#lat_p").val('');
																$("#long_p").val('');								
																
																$("#checkLocation").html('');
																//$("#checkLocationProfileUpdate").html('');
																
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();
																
																$("#product_total_last").html('');
																$("#product_list_tbl_cart").html('');
																$("#product_total_cart").html('');
																$("#item_combo_id").val('Search');
																
																
																
																//--
																$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
																
																
																//saved data remove
																
																if (localStorage.saved_data_submit==1){
																	var visit_save=localStorage.visit_save
																	var saved_data_show=localStorage.saved_data_show;
																	var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
								
																	localStorage.visit_save=visit_save_data
																	//after_save_data();
																	
																}
																
																
																$("#visit_location").show();	
																$("#visit_submit").hide();
																$("#checkLocation").hide('');	
																
																$("#delivery_date").val('');
																$("#collection_date").val('');
																
								
								
																$("#checkLocation_doc").html('');
																$("#wait_image_visit_submit_doc").hide('');
																
																$("#visit_save_div").show();
																
			 												 $.afui.loadContent("#page_confirm_visit_success",true,true,'right');			
																										
															}
															else{						
																$("#errorChkVSubmit").html('Network Timeout. Please check your Internet connection.');
																$("#visit_save_div").show();
																$("#wait_image_visit_submit").hide();
																$("#visit_submit").show();								
																}
						
																  }
																  
													}//success
											});//end post	
												 
											 
								}//Locatio internet else
							}//if 
			
						}
					}//end collection and delivery date future
				
				}//end collection and delivery date check
		}//sync date check
}

//==============================End Visit Submit========



//============================Doct Start===========================

function marketNext_doc() {
	//alert ("Nadira")
	localStorage.location_detail=''
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Scheduled";
			var scheduled_date=localStorage.scheduled_date;
			var currentDate = new Date()
			var day = currentDate.getDate();if(parseInt(day) > 9)	{day="0" +day};
			var month = currentDate.getMonth() + 1;if(parseInt(month) > 9)	{month="0" +month};
			var year = currentDate.getFullYear()
			var today=  year + "-" + month + "-" + day
			
			if (localStorage.scheduleDocFlag==0){
				scheduled_date=today
				visit_type='Unschedule'
				
			}
			//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
//			unscheduled_m_client_combo_ob.empty()
		
			if (localStorage.doctor_plan_flag==1){
				result=localStorage.market_doctorVisit
				}
			else{
				//alert (localStorage.market_doctor)
				result=localStorage.market_doctor
			}
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
				$.afui.loadContent("#page_market_ret",true,true,'right');
				unscheduled_m_client_combo_ob.listview("refresh");
			}else{					
				
			
				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						$.afui.loadContent("#page_market_ret",true,true,'right');
						unscheduled_m_client_combo_ob.listview("refresh");
						
					}
					else{
					
						
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if (mClientID!=''){
								if ((localStorage.doctor_flag==1) & (localStorage.doctor_plan_flag==0) & (localStorage.doctor_pr==0)){
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table><tr><td><img onClick="page_doctor_profile(\''+mClientName+'|'+mClientID+'\')" style="height:20px; width:20px" src="editProfile.png">&nbsp;&nbsp;&nbsp;&nbsp;</td><td><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'|'+mClientID+'</font></a></td></tr></table></li>';
								}
								else{
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+mClientName+'|'+mClientID+'</font></a></li>';
								}
							}								
						}
									
									
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						localStorage.visit_type=visit_type
						localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
								//alert (localStorage.scheduled_date)
									$.afui.loadContent("#page_market_ret",true,true,'right');
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}





//==============================Doctor==========

function marketRetailerNext_doc() {
		localStorage.docPage=1
		localStorage.saveSubmitDocFlag=0;
		localStorage.saveSubmitDocI=''
		$("#err_m_retailer_next").text("");
		visit_client=$("#unscheduled_m_client_combo_id").val();		
		
		if(visit_client=='' || visit_client==0){
				$("#err_m_retailer_next").text("Retailer required");
				
		}else{
			$("#btn_unschedule_market_ret").hide();
			$("#unscheduled_m_client_combo_id_lv").hide();
			
			//alert ('nn');
			$("#wait_image_ret").show();		
			
			
			$(".visit_client").html(visit_client.split('|')[0]);
			
			localStorage.visit_client_show=visit_client
			if (visit_client!=localStorage.visit_client){
				
				localStorage.productGiftStr=''
				localStorage.campaign_doc_str=''
				localStorage.productSampleStr=''
				
				localStorage.productppmStr='';
				
				localStorage.campaign_show_1='';
				localStorage.gift_show_1='';
				localStorage.sample_show_1='';
				localStorage.ppm_show_1='';
				
				//alert (localStorage.productGiftStr='');
	//			alert (localStorage.gift_show_1);
	//			==========================
	
			
			
			set_doc_all();
			
	
	//			===============================
			}
			
				
			localStorage.visit_client=visit_client
	
			localStorage.visit_page="YES"
			
			//--------
			$("#wait_image_unschedule_market_ret").hide();		
			
			$("#unscheduled_m_client_combo_id_lv").show();
			$("#wait_image_ret").hide();
			
			$("#errorChkVSubmit").html('');
			$("#errorConfiProfileUpdate").html('');
			$("#errorChkVSubmit_doc").html('');
			
			$("#wait_image_visit_submit_doc").hide();
			
			if (localStorage.doctor_pr==1){
				$("#wait_image_prescription").hide();
				
				$.afui.loadContent("#page_prescription",true,true,'right');
			}
	
			else if (localStorage.doctor_plan_flag==1){
				$("#visit_submit_doc").hide();
				$("#visit_submit_save_doc").show();	
				
				$.afui.loadContent("#page_visit_doc",true,true,'right');
				
			}
			else{
				$("#visit_submit_save_doc").hide();		
				$.afui.loadContent("#page_visit_doc",true,true,'right');
			}
			
			
			//location.reload();
								
				
		
		}
	}





//================Campaign=============

function getCampaign(){
	localStorage.campaign=1;

	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	$('#campaign_combo_id_lv').empty();
	$('#campaign_combo_id_lv').append(localStorage.product_tbl_str_doc_campaign);
	
	for (var j=0; j < campaign_showListLength; j++){	
		var camp_combo="#doc_camp"+campaign_showList[j]
		$(camp_combo).attr('checked', true);
	}
	$("#campaign_combo_id").val('A');
	searchCampaign()
	$.afui.loadContent("#page_doctor_campaign",true,true,'right');
	
}



//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	var camp_combo_val=$(camp_combo).is(":checked")
	
	
	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	
	
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
			}	
		}
		else{
			var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			var campaign_doc_strListLength=campaign_doc_strList.length;
			for (var j=0; j < orderProductLength; j++){
					var campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+campaign_docProductId
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		//alert ('3')
		var campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		var campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (var j=0; j < campaign_doc_strListLength; j++){
		var campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
					
					
					
				
			}
		}
	
		localStorage.campaign_doc_str=campaign_doc_str;
		
	}
		
	}
function campaign_remove(id){
	var campaign_show=localStorage.campaign_doc_str;
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	

	for (var j=0; j < campaign_showListLength; j++){

		if (j==0){
			campaign_show=campaign_show.replace(id,"");
		}
		else{
			campaign_show=campaign_show.replace("<rd>"+id,"");
		}


	}
	localStorage.campaign_doc_str=campaign_show;
	$('#'+id).remove();
	
	var camp_combo="#doc_camp"+id
	$(camp_combo).attr("checked", false);
	
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		var campaign= ($("#doc_campaign").html());
		localStorage.campaign_show_1=campaign;
	}
	
	//getDocCampaignData();
}	
	
	
function getDocCampaignData(){	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	var campaign_show_1='';
	
	for (var j=0; j < campaign_showListLength; j++){
		
			if (j==0){
				campaign_show_1=campaign_show_1+'<table width="100%" cellspacing="2" border="0" style="border:thin;  border-color:a;background-color:#F7F7F7">';
			}
			var pname=$("#doc_camp_name"+campaign_showList[j]).val();
			//alert (campaign_showList[j]);
			if (campaign_showList[j] != ''){
				campaign_show_1=campaign_show_1+' <tr height="30px" style="font-size:14px;background-color:#FBFDFF"  id="'+campaign_showList[j]+'"><td>'+pname+'('+campaign_showList[j]+')'+' </td><td align=" center" style = "background-color:#E9F0FE; color:#009191;" 	 onClick="campaign_remove(\''+campaign_showList[j]+'\');">  X  </td></tr>'
			}
	}
	if (campaign_show_1!=''){
		campaign_show_1=campaign_show_1+'</table>';
	}
	localStorage.campaign_show_1=campaign_show_1;
	if  (campaign_show_1.length > 0 ){
		$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+'</br>');
	}
	
	campaign_as_sample();
		
	//$.afui.loadContent("#page_visit_doc",true,true,'right');
			
	}
//Set campaign as sample 
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}
function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
	}
	
function check_boxTourTrue(docID){	
	var camp_combo="#doc_tour"+docID
	var camp_combo_val=$(camp_combo).is(":checked")
	
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		
		getDocTour_keyup(docID)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocTour_keyup(docID)
	}
	}	
	
function check_boxTourRouteTrue(id){	
	var camp_combo="#route_tour"+id
	//alert (camp_combo)
	var camp_combo_val=$(camp_combo).is(":checked")
	
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		
		getRouteTour_keyup(id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getRouteTour_keyup(id)
	}
	}	
function getRouteTour_keyup(id){
	var doc_combo="#route_tour"+id
	var camp_combo_val=$(doc_combo).is(":checked")
	var tour_doc_str=localStorage.tour_route_str
	//alert (localStorage.tour_route_str)
	if (camp_combo_val == true ){
		if (tour_doc_str.indexOf(id)==-1){
			if (tour_doc_str==''){
				tour_doc_str=id				
			}else{
				tour_doc_str=tour_doc_str+'<rd>'+id
			}	
		}
		else{
			var tour_doc_strList=localStorage.tour_route_str.split('<rd>');
			var tour_doc_strtLength=tour_doc_strList.length;
			for (var j=0; j < tour_doc_strtLength; j++){
					var campaign_docId=tour_doc_strList[j];

					if (campaign_docId==id){
						tour_doc_str=tour_doc_str.replace(campaign_docId, "")
						
						
						if (tour_doc_str==''){
							tour_doc_str=id
						
						}else{
							tour_doc_str=tour_doc_str+'<rd>'+id
						
							}		
					}
			}
		}
		localStorage.tour_route_str=tour_doc_str;
		
		
	}
	else{
		var tour_doc_strList=localStorage.tour_route_str.split('<rd>');
		var tour_doc_strLength=tour_doc_strList.length;
		
		for (var j=0; j < tour_doc_strLength; j++){
		var campaign_docId=tour_doc_strList[j]
				
				doc_index=tour_doc_str.indexOf(campaign_docId)
				if (campaign_docId==id){
					if (tour_doc_strLength>1){
						if (doc_index==0){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j]+'<rd>', "")
						}
						if (doc_index > 0){
							tour_doc_str=tour_doc_str.replace('<rd>'+tour_doc_strList[j], "")
						}
					}
					if (tour_doc_strLength==1){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j], "")
						
					}

			}
		}
	
		localStorage.tour_route_str=tour_doc_str;
		
	}
		//alert (localStorage.tour_route_str)
	}	
		
function getDocTour_keyup(docID){
	var doc_combo="#doc_tour"+docID
	var camp_combo_val=$(doc_combo).is(":checked")
	var tour_doc_str=localStorage.tour_doc_str
	//alert (camp_combo_val)
	if (camp_combo_val == true ){
		if (tour_doc_str.indexOf(docID)==-1){
			if (tour_doc_str==''){
				tour_doc_str=docID				
			}else{
				tour_doc_str=tour_doc_str+'<rd>'+docID
			}	
		}
		else{
			var tour_doc_strList=localStorage.tour_doc_str.split('<rd>');
			var tour_doc_strtLength=tour_doc_strList.length;
			for (var j=0; j < tour_doc_strtLength; j++){
					var campaign_docId=tour_doc_strList[j];

					if (campaign_docId==docID){
						tour_doc_str=tour_doc_str.replace(campaign_docId, "")
						
						
						if (tour_doc_str==''){
							tour_doc_str=docID
						
						}else{
							tour_doc_str=tour_doc_str+'<rd>'+docID
						
							}		
					}
			}
		}
		localStorage.tour_doc_str=tour_doc_str;
		
		
	}
	else{
		var tour_doc_strList=localStorage.tour_doc_str.split('<rd>');
		var tour_doc_strLength=tour_doc_strList.length;
		
		for (var j=0; j < tour_doc_strLength; j++){
		var campaign_docId=tour_doc_strList[j]
				doc_index=tour_doc_str.indexOf(campaign_docId)
				//alert (doc_index)
				if (campaign_docId==docID){
					//alert (tour_doc_strLength)
					if (tour_doc_strLength>1){
						//alert (doc_index)
						if (doc_index==0){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							tour_doc_str=tour_doc_str.replace('<rd>'+tour_doc_strList[j], "")
						}
					}
					if (tour_doc_strLength==1){
							tour_doc_str=tour_doc_str.replace(tour_doc_strList[j], "")
						
					}

			}
		}
	
		localStorage.tour_doc_str=tour_doc_str;
		
	}
		//alert (localStorage.tour_doc_str)
	}	
	

function tourSave_doc(){	
$("#wait_image_retTour").show();	
$("#err_marketTour").html('');
	var d = new Date();
	var monthNextGet = d.getMonth()+2;
	var dayNext = d.getDate();
	var yearNext =d.getFullYear();
	var daysNext = Math.round(((new Date(yearNext, monthNextGet))-(new Date(yearNext, monthNextGet-1)))/86400000);
	var submitStr=''
	var errFlag=0
	//alert (daysNext)
	for (var i=0; i < daysNext; i++){
		var dayShow=i+1
		var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;
		var checkFlag=1

		var marketList=(localStorage.marketTourStr).split('<rd>')
		var comboValue=''
		comboValue= $("#othersAll"+i).val();
		//alert (comboValue)
			for (var m=0; m < marketList.length; m++){
				
				var dateGet=''
				
				var marketId=marketList[m].split('<fd>')[0]
				var marketName=marketList[m].split('<fd>')[1]
				var checkId=i+'n'+m+"_"+marketId
				var check = $("#"+checkId).prop("checked");
				//alert (check)
					if(check) {
						checkFlag=0
						dateGet=$("#"+i+"_date").val();
						if (submitStr==''){
							submitStr=dateGet+'<fd>'+marketId+'<fd>'+marketName
						}
						else{
							submitStr=submitStr+'<rd>'+dateGet+'<fd>'+marketId+'<fd>'+marketName
						}
					}
					 
				
				
			}
			if (comboValue!=''){
					dateGet=$("#"+i+"_date").val();
						if (submitStr==''){
							submitStr=dateGet+'<fd>'+comboValue+'<fd>'+comboValue
						}
						else{
							submitStr=submitStr+'<rd>'+dateGet+'<fd>'+comboValue+'<fd>'+comboValue
						}
					
				}
		
		
			
	}
	localStorage.tourSubmitStr=submitStr
	$("#wait_image_retTour").hide();
	$("#err_marketTour").html('Saved Successfully');
}

function tourSubmit_doc(){	
$("#wait_image_retTour").show();	
$("#err_marketTour").html('');
	var d = new Date();
	var monthNextGet = d.getMonth()+2;
	var dayNext = d.getDate();
	var yearNext =d.getFullYear();
	var daysNext = Math.round(((new Date(yearNext, monthNextGet))-(new Date(yearNext, monthNextGet-1)))/86400000);
	var submitStr=''
	var errFlag=0
	for (var i=0; i < daysNext; i++){
		var dayShow=i+1
		var dateNextMonth = yearNext+'-'+monthNextGet+'-'+dayShow;
		var checkFlag=1

		var marketList=(localStorage.marketTourStr).split('<rd>')
		var comboValue=''
		comboValue= $("#othersAll"+i).val();
		//alert (comboValue)
		
			for (var m=0; m < marketList.length; m++){
				
				var dateGet=''
				
				var marketId=marketList[m].split('<fd>')[0]
				var marketName=marketList[m].split('<fd>')[1]
				var checkId=i+'n'+m+"_"+marketId
				var check = $("#"+checkId).prop("checked");
				if (comboValue==''){
					if(check) {
						checkFlag=0
						dateGet=$("#"+i+"_date").val();
						if (submitStr==''){
							submitStr=dateGet+'<fd>'+marketId+'<fd>'+marketName
						}
						else{
							submitStr=submitStr+'<rd>'+dateGet+'<fd>'+marketId+'<fd>'+marketName
						}
					}
				}
				
				
			}
			if (comboValue!=''){
				dateGet=$("#"+i+"_date").val();
					if (submitStr==''){
						submitStr=dateGet+'<fd>'+comboValue+'<fd>'+comboValue
					}
					else{
						submitStr=submitStr+'<rd>'+dateGet+'<fd>'+comboValue+'<fd>'+comboValue
					}
				
			}
		//alert (checkFlag)
		if ((comboValue=='') && (checkFlag==1)){errFlag=1}
			
	}
	
	if (submitStr==''){
		//$("#err_marketTour").html('Select Market');
		errFlag=1
	}
	
	if (errFlag==1){
		$("#err_marketTour").html('Day Plan missing');
		$("#wait_image_retTour").hide();	

	}
		
		
	if (errFlag==0){
		//alert (localStorage.tour_url+'tourDocEntry?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr));		
				
			   $.ajax(localStorage.tour_url+'tourDocEntry?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&submitStr='+encodeURI(submitStr),{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										$("#wait_image_retTour").hide();	
										$("#err_marketTour").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											$("#wait_image_retTour").hide();
											 if (status!='success'){
												$("#err_marketTour").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
											
													 if (data=='SUCCESS'){
														 	//localStorage.marketTourStr='';
															localStorage.docNextMonthRow='';
															
															//localStorage.appFlag=''; 
															localStorage.tourSubmitStr=''
															$("#nextMonth").html('<div style="font-size:20px;color:#C00" > Submitted Successfully </div>');
															//$("#nextMonthSubmitButton").hide();
															
														 	//tourCheckFirst();
															
															
															//$("#err_marketTour").html("Submitted Successfully");
															localStorage.tour_doc_str=''
															showSubmitDocShow();
															
													 }
													 else{
															$("#err_marketTour").html(data);
															showSubmitDocShow();
															
													 }
		
											}
									}
							 
					 });//end ajax
					 
					 
				}//errorFlag

  }
function tourConfirm_doc(){	
	var pendingRep=localStorage.pendingRep
	
	$("#btn_confirm_tour").hide()
	
	
	if (pendingRep==''){
		$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
	}
	else{
		//alert (localStorage.base_url+'tourConfirm_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep);
		$.ajax(localStorage.base_url+'tourConfirm_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#btn_confirm_tour").show()
								$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#btn_confirm_tour").show();
									 if (status!='success'){
										$("#wait_image_route_pendingTour").hide(); 
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									
									 if (data=='SUCCESS'){
											$("#err_pendingRouteTour").html("Confirmed Successfully");
											$("#wait_image_route_pendingTour").hide();
											localStorage.tour_doc_str=''
											//alert (localStorage.pendingRep)
											repPendingDocShow(localStorage.pendingRep)
											repPendingDocView(pendingRep)
											
											
									 }
									 else{
											$("#err_pendingRouteTour").html(data);
											localStorage.tour_doc_str=''
									 }

							}
						}
					 
			 });//end ajax
		
		
		
	}//}//Sync date check
  }
function repPendingDocView(rep_id){
	
	//localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").show();
	//alert (localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id)
	

	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
										
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").text("Retailer not available");	
											$("#wait_image_rep_pendingTour").hide();
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
										localStorage.repDocPending=resultArray[1];
										
										
										
										var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
										var d = new Date();
										var month = d.getMonth()+2;
										var day = d.getDate();
										var year =d.getFullYear();
										
										var monthThis=''
										
										if (month==1){monthThisShow='January'+'  '+year;}
										if (month==2){monthThisShow='February'+'  '+year;}
										if (month==3){monthThisShow='March'+'  '+year;}
										if (month==4){monthThisShow='April'+'  '+year;}
										if (month==5){monthThisShow='May'+'  '+year;}
										if (month==6){monthThisShow='June'+'  '+year;}
										if (month==7){monthThisShow='July'+'  '+year;}
										if (month==8){monthThisShow='August'+'  '+year;}
										if (month==9){monthThisShow='September'+'  '+year;}
										if (month==10){monthThisShow='October'+'  '+year;}
										if (month==11){monthThisShow='November'+'  '+year;}
										if (month==12){monthThisShow='December'+'  '+year;}
									
										var days = Math.round(((new Date(year, month))-(new Date(year, month-1)))/86400000);
										//alert (monthThisShow)
										var thisMonthTable='<table width="100%" border="0">  <tr>    <td>'+monthThisShow+'</td><td>&nbsp;</td> <td>&nbsp;</td>    <td align="right">Approved</td>  </tr></table><table style="border-style:solid; border-width:thin; border-color:#096;background-color:#EDFEED" width="100%" border="1" cellspacing="0">'
										
										docTThisMonthRow=localStorage.repDocPending
										//alert (docTThisMonthRow)
										for (var i=0; i < days; i++){
											var dayShow=i+1
											var fulDate=year+'-'+month+'-'+day
											
											var a = new Date(month+'/'+dayShow+'/'+year);
											var dayName=weekday[a.getDay()];
											var monthCheck=''
											var dayCheck=''
											
											if (month<10){monthCheck='0'+month}else{monthCheck=month}
											if (dayShow<10){dayCheck='0'+dayShow}else{dayCheck=dayShow}
											var dayCheckFinal=year+'-'+monthCheck+'-'+dayCheck
											
											//alert (dayCheckFinal)

											thisMonthTable=thisMonthTable+'<tr ><td width="40px">'+dayName+'&nbsp;&nbsp;'+dayShow +'</td><td >'
											//'Bashndhara<br> Nadda<br>'
											if (docTThisMonthRow.indexOf('<'+dayCheckFinal+'>')!=-1){
												var dateRouteSingle=docTThisMonthRow.split('<'+dayCheckFinal+'>')[1].split('</'+dayCheckFinal+'>')[0]
												//if (dayShow==21){alert (dateRouteSingle)}
												var marketStrListThisMonth=dateRouteSingle.split('<rd>')
												var dayRoute=''
												for (var m=0; m < marketStrListThisMonth.length; m++){
													var marketIdThisMonth=marketStrListThisMonth[m].split('<fd>')[0]
													var marketNameThisMonth=marketStrListThisMonth[m].split('<fd>')[1]
													var marketStatusThisMonth=marketStrListThisMonth[m].split('<fd>')[2]
													if (dayRoute==''){
														dayRoute=marketNameThisMonth
													}
													else{
														dayRoute=dayRoute+', '+marketNameThisMonth
													}
													//dayRoute=dayRoute+'<font style="color:#900"> '+marketStatusThisMonth +'</font>'
													//alert (checkId)
												}
												thisMonthTable=thisMonthTable+dayRoute+'<br>'
												//thisMonthTable=thisMonthTable+'<font id="'+i+'editinfo">'+marketNameThisMonth+'['+marketIdThisMonth+']'+'----'+marketStatusThisMonth+'</font><br>'
												var marketName
												var status
												//alert (dateRouteSingle)
											}
											
											thisMonthTable=thisMonthTable+'</td> </tr>'
											
										}
										thisMonthTable=thisMonthTable+'</table><br><br><br>'
										$('#repPendingShow').html(thisMonthTable)
										
										
										
										
										
										$("#err_rep_pendingTour").text("");	
										$("#wait_image_rep_pendingTour").hide();
										if (localStorage.user_type=='rep'){
											$("#tourButton").hide();
										}
										else{
											$("#tourButton").show();
										}
										//alert (rep_id)
										var repIdName=$("#"+rep_id).html();	
										localStorage.repIdName=repIdName
										$("#pendingRepShow").html(localStorage.repIdName);	
										repPendingDocView(pendingRep)
										//$('#tour_rep_pending_lv').empty()
//										$('#tour_rep_pending_lv').append(localStorage.repDocPending);
										
										//tour_ob.listview("refresh");	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			$("#wait_image_route_pendingTour").hide();
			//alert (rep_id_pending)	 
//			$("#pendingRepShow").html(rep_id_pending);	
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}  
  
function tourCancel_doc(){	
	var pendingRep=localStorage.pendingRep
	
	if (pendingRep==''){
		$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
	}
	else{
		//alert (localStorage.base_url+'tourCancel_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep);
		$.ajax(localStorage.base_url+'tourCancel_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&pendingRep='+localStorage.pendingRep,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_route_pendingTour").hide();
								$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_route_pendingTour").hide();
									 if (status!='success'){
										$("#wait_image_route_pendingTour").hide(); 
										$("#err_pendingRouteTour").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									
									 if (data=='SUCCESS'){
											$("#err_pendingRouteTour").html("Cancelled Successfully");
											$("#wait_image_route_pendingTour").hide();
											localStorage.tour_doc_str=''
											repPendingDocShow(localStorage.pendingRep)
											
									 }
									 else{
											$("#err_pendingRouteTour").html(data);
											localStorage.tour_doc_str=''
									 }

							}
						}
					 
			 });//end ajax
		
		
		
	}//}//Sync date check
  
  }  
  
function repPendingDocShow(rep_id){
	
	localStorage.pendingRep=rep_id
	localStorage.tour_route_str=''
	$("#wait_image_rep_pendingTour").hide();
	$.ajax(localStorage.base_url+'repPendingDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_pending='+rep_id,{
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
								$("#wait_image_rep_pendingTour").hide();
								$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									
									 if (status!='success'){
										$("#err_rep_pendingTour").html('Network Timeout. Please check your Internet connection...');
										$("#wait_image_rep_pendingTour").hide();
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
										if (resultArray[0]=='FAILED'){
											$("#err_rep_pendingTour").html(resultArray[1]);	
											$("#wait_image_rep_pendingTour").hide();
											localStorage.repDocPending='';
											$('#tour_rep_pending_lv').empty()
											$('#tour_rep_pending_lv').append(localStorage.repDocPending);
;
										}
										
										else if (resultArray[0]=='SUCCESS'){
										
										//alert (resultArray[1])
										
										
										
										
										localStorage.repDocPending=resultArray[1];
										$("#err_rep_pendingTour").text("");	
										$("#wait_image_rep_pendingTour").hide();
										if (localStorage.user_type=='rep'){
											$("#tourButton").hide();
										}
										else{
											$("#tourButton").show();
										}
										
										$('#tour_rep_pending_lv').empty()
										$('#tour_rep_pending_lv').append(localStorage.repDocPending);
										
										//tour_ob.listview("refresh");	
										
									
										}
									//------- 
	
									
																
								 //else if
								
								
							} //else
							
						}
						  
				 });//end ajax
			checkRequest()	 
			$("#wait_image_route_pendingTour").hide();	 
			//$.afui.loadContent("#page_tour_rep_pending",true,true,'right');	
//	alert ('sdasf')
	
}
//==================================================================================	
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	var productSampleStr=localStorage.productSampleStr;
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (var j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}

//======================Sample=====================
//--------------------------------- Sample: Show Sample from home

function getDocSampleData(){	
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	//alert (localStorage.productSampleStr);
	var sample_show_1='<ul  data-role="listview">';
	for (var j=0; j < sampleProductLength; j++){
			if (sampleProductList[j] != ''){
				//alert (sampleProductList[j]);
				var sampleProductsingle=sampleProductList[j];
				var sampleProductsingleList=sampleProductsingle.split('<fd>');
	
				var pname=$("#sample_name"+sampleProductsingleList[0]).val();
				
				sample_show_1=sample_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td >'+pname+'('+sampleProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="s_cart_qty'+ sampleProductsingleList[0] +'"  onBlur="sampleCartData_keyup(\''+sampleProductsingleList[0] +'\');" value="'+sampleProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
			}
		}
		
		if (sample_show_1!=''){
				sample_show_1=sample_show_1+'</ul>';
		}
		
		localStorage.sample_show_1=sample_show_1;
		sample_show_1=sample_show_1.replace('undefined','')
		//alert (sample_show_1.indexOf('undefined'));
		if  (sample_show_1.indexOf('undefined')==-1 ){
			
			$('#doc_sample').empty();
			$('#doc_sample').append("</br>"+localStorage.sample_show_1+"</br>").trigger('create');
		}
		$("#wait_image_visit_submit_doc").hide();
		
		if (localStorage.doctor_plan_flag==1){
			$("#visit_submit_save_doc").show();		
			
		}
		else{
			$("#visit_submit_save_doc").hide();		
		}
		$.afui.loadContent("#page_visit_doc",true,true,'right');
		
		
	
	
}
function getDoctorSample(){	
	$("#myerror_doctor_sample").html('');
	if ((localStorage.productSampleStr==undefined) || (localStorage.productSampleStr=='undefined')){
		localStorage.productSampleStr='';
	}
	
	//  Set Sample Data==========
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	for (var j=0; j < sampleProductLength; j++){
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');
			
			
			$("#sample_qty"+sampleProductsingleList[0]).val(sampleProductsingleList[1]);

		
	}
	
	$("#sample_combo_id").val('A');
	searchSample()
	$.afui.loadContent("#page_doctor_sample",true,true,'right');
	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data
function getSampleData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#sample_qty"+product_id).val().replace('.','').substring(0,4);
	$("#sample_qty"+product_id).val(pqty);
	
	//alert (pqty)
	var productSampleStr=localStorage.productSampleStr
	
	
	var productSampleShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				productSampleShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			for (var j=0; j < sampleProductLength; j++){
			var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					if (sampleProductId==pid){
						productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							productSampleShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+sampleProductId+'<fd>'+pqty
							productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
							}		

					}
					
				}
			}
			
		}
		localStorage.productSampleStr=productSampleStr;
		//alert (localStorage.productSampleStr);
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=orderProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					}
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productSampleStr=productSampleStr
	}
	
	//	------------------------------------------------------
}
	
function sampleCartData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#s_cart_qty"+product_id).val();
	
	$("#sample_qty"+product_id).val(pqty);
	var productSampleStr=localStorage.productSampleStr
	
	//alert (productOrderStr)
	var sample_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var sampleProductList=localStorage.productSampleStr.split('<rd>');
			var sampleProductLength=sampleProductList.length;
			
			for (var j=0; j < sampleProductLength; j++){
				var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					var sampleProductId=sampleProductIdQtyList[0];
					var sampleProductQty=sampleProductIdQtyList[1];
					
					if (sampleProductId==pid){
						product_index=productSampleStr.indexOf(product_id)
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
						}else{
							productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productSampleStr=productSampleStr;
		//alert (productsampleStr)
		
	}
	else{
		var sampleProductList=localStorage.productSampleStr.split('<rd>');
		var sampleProductLength=sampleProductList.length;
		
		for (var j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				var sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					} //if (sampleProductLength>1){
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					} //if (sampleProductLength==1
				
				} //if (sampleProductId==pid)
					
					
					
				}//if(sampleProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productSampleStr=productSampleStr
		
		
		
		//getDocSampleData();

	}
//================Gift=========================
function getDoctorGift(){
	if ((localStorage.gift_tbl_doc==undefined) || (localStorage.gift_tbl_doc=='undefined')){
		localStorage.gift_tbl_doc='';
	}
	
	//  Set Gift Data==========
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		$('#gift_qty'+giftProductsingleList[0]).val(giftProductsingleList[1]);

	}
	$.afui.loadContent("#page_doctor_gift",true,true,'right');

	
}
//--------------------------------- Order: Set Order data
function getGiftData_keyup(product_id){
	//alert (product_id);
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#gift_qty"+product_id).val().replace('.','').substring(0,4);
	
	$("#gift_qty"+product_id).val(pqty);
	//alert (pqty)
	var productGiftStr=localStorage.productGiftStr
	var productGiftShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		//alert (productGiftStr.indexOf(product_id));
		if (productGiftStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				productGiftShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				productGiftShowStr=productGiftShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			for (var j=0; j < giftProductLength; j++){
			var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					if (giftProductId==pid){
						productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
						
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							productGiftShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+giftProductId+'<fd>'+giftProductQty
							productGiftShowStr=productGiftShowStr+', '+pname+'('+giftProductQty+')'
							}		
					}
					
				}
			}
			
		}
		localStorage.productGiftStr=productGiftStr;
		
		
	}
	else{		
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (orderProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					}
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productGiftStr=productGiftStr
	}
	//	------------------------------------------------------
}
function getDocGiftData(){	
	var gift_show=localStorage.productGiftStr;
	//alert (localStorage.productGiftStr)
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function giftCartData_keyup(product_id){
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
	
	$("#gift_qty"+product_id).val(pqty);
	var productGiftStr=localStorage.productGiftStr
	
	var gift_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productGiftStr.indexOf(product_id)==-1){
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var giftProductList=localStorage.productGiftStr.split('<rd>');
			var giftProductLength=giftProductList.length;
			//alert (giftProductLength);
			
			for (var j=0; j < giftProductLength; j++){
				var giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					var giftProductId=giftProductIdQtyList[0];
					var giftProductQty=giftProductIdQtyList[1];
					
					if (giftProductId==pid){
						product_index=productGiftStr.indexOf(product_id)
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
						}else{
							productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productGiftStr=productGiftStr;
		
	}
	else{
		var giftProductList=localStorage.productGiftStr.split('<rd>');
		var giftProductLength=giftProductList.length;
		
		for (var j=0; j < giftProductLength; j++){
		var giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				var giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (giftProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					} //if (giftProductLength>1){
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					} //if (giftProductLength==1
				
				} //if (giftProductId==pid)
					
					
					
				}//if(giftProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productGiftStr=productGiftStr
		//getDocGiftData();
		
//		==================================
	}


//===========================PPM Start=================

function getDoctorppm(){
	if ((localStorage.ppm_tbl_doc==undefined) || (localStorage.ppm_tbl_doc=='undefined')){
		localStorage.ppm_tbl_doc='';
	}
	
	//  Set ppm Data==========
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		$('#ppm_qty'+ppmProductsingleList[0]).val(ppmProductsingleList[1]);
	}
	$.afui.loadContent("#page_doctor_ppm",true,true,'right');

}
//--------------------------------- Order: Set Order data
function getppmData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#ppm_qty"+product_id).val().replace('.','').substring(0,4);
	$("#ppm_qty"+product_id).val(pqty)
	
	
	var productppmStr=localStorage.productppmStr
	var productppmShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productppmStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				productppmShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				productppmShowStr=productppmShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			for (var j=0; j < ppmProductLength; j++){
			var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					if (ppmProductId==pid){
						productppmStr=productppmStr.replace(ppmProductList[j], "")
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							productppmShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+ppmProductId+'<fd>'+ppmProductQty
							productppmShowStr=productppmShowStr+', '+pname+'('+ppmProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productppmStr=productppmStr;
		
		
	}
	else{		
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (orderProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					}
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productppmStr=productppmStr
	}
	//alert (localStorage.productppmStr)	
	//	------------------------------------------------------
}
function getDocppmData(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}







function ppmCartData_keyup(product_id){
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	

	
	$("#ppm_qty"+product_id).val(pqty);
	var productppmStr=localStorage.productppmStr
	
	var ppm_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productppmStr.indexOf(product_id)==-1){
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			var ppmProductList=localStorage.productppmStr.split('<rd>');
			var ppmProductLength=ppmProductList.length;
			
			for (var j=0; j < ppmProductLength; j++){
				var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					var ppmProductId=ppmProductIdQtyList[0];
					var ppmProductQty=ppmProductIdQtyList[1];
					
					if (ppmProductId==pid){
						product_index=productppmStr.indexOf(product_id)
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
						}else{
							productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productppmStr=productppmStr;
		
	}
	else{
		var ppmProductList=localStorage.productppmStr.split('<rd>');
		var ppmProductLength=ppmProductList.length;
		
		for (var j=0; j < ppmProductLength; j++){
		var ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				var ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (ppmProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					} //if (ppmProductLength>1){
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					} //if (ppmProductLength==1
				
				} //if (ppmProductId==pid)
					
					
					
				}//if(ppmProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productppmStr=productppmStr
		//getDocppmData();
		
		
	}




//============================ppm End===================
//----------------------Doctor visit submit
function visitSubmit_doc(){	
	$("#errorChkVSubmit").text("");
	
	var visitClientId=localStorage.visit_client.split('|')[1]	
	var visit_type="Schedule"
	if (localStorage.scheduleDocFlag==0){
		visit_type="Unschedule"
	}
	var scheduled_date=localStorage.scheduled_date
	
	
	var sample_doc_Str=localStorage.productSampleStr;
	var gift_doc_Str=localStorage.productGiftStr;
	var campaign_doc_str=localStorage.campaign_doc_str; 
	
	var ppm_doc_Str=localStorage.productppmStr;
	
	var notes= $("#doc_feedback").val();
	var doc_others= $("#doc_others").val();
	//alert (notes);
	notes=replace_special_char(notes);
	//alert (campaign_doc_str)
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for ( i=0; i < campaignListLength; i++){		
			
			var camp_name=''
			if (campaignList[i] !=''){
				 camp_name=$("#doc_camp_name"+campaignList[i]).val();
			}
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
			if (campaignList[i] !=''){
				campaign_submit=campaign_submit+'|'+camp_name
			}
			
		}
	}
	//alert (campaign_submit);
	//----------------------- Sample check
	//$("#errorChkVSubmit").html(sample_doc_Str);
	//alert (sample_doc_Str.indexOf('undefined'));
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		var sampleCount=0
		for ( i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			var sample_name=''
			if (sample_single_list[0] !=''){
				sample_name=$("#sample_name"+sample_single_list[0]).val();
				sampleCount=sampleCount+1
				if (sampleCount > 4){break;}
				$("#errorChkVSubmit_doc").html('First four sample will accept');
			}
			//sample_name=sample_name.replace('undefined','')
			
			if (sample_submit==''){
				sample_submit=sample_single_list[1]+','+sample_single_list[0]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[1]+','+sample_single_list[0]
			}
			if (sample_single_list[0] !=''){
				sample_submit=sample_submit+'|'+sample_name
			}
			
		}
	}
	
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for ( i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');
			 
			var gift_name=''
			if (gift_single_list[0] !=''){
				gift_name=$("#doc_gift_name"+sample_single_list[0]).val();
			}
			if (gift_submit==''){
				gift_submit=gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			if (gift_single_list[0] !=''){
				gift_submit=gift_submit+'|'+gift_name
			}
		}
	}
	//alert (gift_submit)
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		
		ppm_submit='';
		for ( i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');
			var doc_ppm_name=''
			if (ppm_single_list[0] !=''){
				doc_ppm_name=$("#doc_ppm_name"+ppm_single_list[0]).val();
			}
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
				
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
			}
			if (ppm_single_list[0] != ''){
					ppm_submit=ppm_submit+'|'+doc_ppm_name
			}
		}
	}
	//-------------------------------
	
	
	
	

	//------------------------
	campaign_submit=campaign_submit.replace('undefined','').replace(',.','');
	gift_submit=gift_submit.replace('undefined','').replace(',.','');
	
	sample_submit=sample_submit.replace('undefined','').replace(',.','');
	
	notes=notes.replace('undefined','').replace(',.','');
	ppm_submit=ppm_submit.replace('undefined','').replace(',.','');
	
	
	
	if (campaign_submit==','){
		campaign_submit='';
		
	}
	if (gift_submit==','){
		gift_submit='';
		
	}
	if (sample_submit==','){
		sample_submit='';
		
	}
	if (ppm_submit==','){
		ppm_submit='';
		
	}
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	
	var docVisitPhoto=$("#docVisitPhoto").val();
	
	//alert (docVisitPhoto)
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	var imageName=localStorage.user_id+'_'+now+'_docVisit.jpg';
	
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	var v_with_AM=$("input[name=v_with_AM]:checked").val(); if (v_with_AM==undefined){v_with_AM=''}
	var v_with_MPO=$("input[name=v_with_MPO]:checked").val(); if (v_with_MPO==undefined){v_with_MPO=''}
	var v_with_RSM=$("input[name=v_with_RSM]:checked").val(); if (v_with_RSM==undefined){v_with_RSM=''}
	
	var v_with_ATS=$("input[name=v_with_ATS]:checked").val(); if (v_with_ATS==undefined){v_with_ATS=''}
	var v_with_VTS=$("input[name=v_with_VTS]:checked").val(); if (v_with_VTS==undefined){v_with_VTS=''}
	
	//alert (v_with_AM)
	var v_with=v_with_AM+"|"+v_with_MPO+"|"+v_with_RSM+"|"+v_with_ATS+"|"+v_with_VTS
	//v_with=v_withGet.replace('undefined')
	//alert (v_with)
	
	var v_shift=$("input[name=v_shift]:checked").val()
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	
	//if  (localStorage.sync_date!=today_1){
//	$("#errorChkVSubmit_doc").html('Please sync first');
//	
//	}
//	else{
			if (v_with=='' || v_with==undefined || v_with=='undefined'){
				$("#errorChkVSubmit_doc").html('Visited with not selected');		
			}else{
				
				//if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
		//							
		//								lat=localStorage.latitude
		//								longitude=localStorage.latitude
		//								localStorage.location_detail="LastLocation-"+localStorage.location_detail;
		//								
		//						
		//							
		//							
		//							//$("#errorChkVSubmit").html('Location not Confirmed');	
		//							//$("#visit_location").show();	
		//							//$("#visit_submit").hide();	
		//		}else{
										
										if (visitClientId=='' || visitClientId==undefined){
											$("#errorChkVSubmit_doc").html('Invalid Client');		
										}else{
											if(visit_type=='' || visit_type==undefined){
												$("#errorChkVSubmit_doc").html('Invalid Visit Type');
											}else{
													
												//alert (localStorage.productOrderStr);
												var marketNameId=localStorage.visit_market_show.split('|');
												var market_Id=marketNameId[1];		
												
												
												//$("#errorChkVSubmit").html(msg1);
												
											// $("#errorChkVSubmit_doc_t").html(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others)
											// alert (localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'&imageName='+imageName+'&v_shift='+v_shift)
											 $("#errorChkVSubmit_doc_t").val(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'&imageName='+imageName+'&v_shift='+v_shift)
												// ajax-------
												//alert (localStorage.location_error);
											if ( localStorage.location_error==2){
												$("#errorChkVSubmit_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
											}
											else {	
												$("#visit_submit_doc").hide();
												$("#wait_image_visit_submit_doc").show();
												//alert (localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg=' +encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'imageName='+imageName)	
										$.ajax(localStorage.base_url+'doctor_visit_submit_pharma?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg=' +encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'&imageName='+imageName+'&v_shift='+v_shift,{
										// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
										$("#error_login").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
												//$.post(localStorage.base_url+'check_user?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,client_id:visitClientId,visit_type:visit_type,schedule_date:scheduled_date,msg:msg,lat:lat,long:longitude,v_with:v_with,route:market_Id,location_detail:localStorage.location_detail},
		//    						 
		//								
		//								 function(data, status){
											 if (status!='success'){
												$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection...');
												$("#wait_image_visit_submit_doc").hide();
												$("#visit_submit_doc").show();
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
												if (resultArray[0]=='FAILED'){
													$("#errorChkVSubmit_doc").html(resultArray[1]);
													$("#wait_image_visit_submit_doc").hide();
													$("#visit_submit_doc").show();	
												}
											  else if (resultArray[0]=='SUCCESS'){
												  
													uploadPhoto_docVisit(docVisitPhoto, imageName);				
													//-----------
													localStorage.visit_client=''
													localStorage.visit_page=""
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr=''
													
													localStorage.campaign_show_1='';
													localStorage.gift_show_1='';
													localStorage.sample_show_1='';
													localStorage.ppm_show_1='';
													
																	
													////-------------
													// Clear Campaign and sample
														
														//localStorage.productOrderStr='';
														var productList=localStorage.productListStr.split('<rd>');
														var productLength=productList.length;
														for ( i=0; i < productLength; i++){
															var productArray2 = productList[i].split('<fd>');
															var product_id2=productArray2[0];	
															var product_name2=productArray2[1];
															$("#sample_qty"+product_id2).val('');
															
															
															var camp_combo="#doc_camp"+product_id2
															$(camp_combo).attr('checked', false);
															//alert (product_id2);
														}	
													// Clear Gift
														
														//localStorage.productOrderStr='';
														var giftList=localStorage.gift_string.split('<rd>');
														var giftLength=giftList.length;
														for ( i=0; i < giftLength; i++){
															var giftArray2 = giftList[i].split('<fd>');
															var gift_id2=giftArray2[0];	
															//var product_name2=giftArray2[1];
															$("#gift_qty"+gift_id2).val('');
														}
														// Clear ppm
														
														//localStorage.productOrderStr='';
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														for ( i=0; i < ppmLength; i++){
															var ppmArray2 = ppmList[i].split('<fd>');
															var ppm_id2=ppmArray2[0];	
															//var product_name2=ppmArray2[1];
															$("#ppm_qty"+ppm_id2).val('');
															
			
														}	
															
															//====================================
														
														
														$("#doc_feedback").val('');
														$("#doc_others").val('');
														
														//$(".market").html('');
														$(".visit_client").html('');
														//--------------------------------------------------------
														$("#errorChkVSubmit").html('');
														$("#lat").val('');
														$("#longitude").val('');
														$("#lscPhoto").val('');
														document.getElementById('myImage').src = '';
														
														$("#lat_p").val('');
														$("#long_p").val('');								
				//										
														//$("#checkLocation").html('');
				//										$("#checkLocationProfileUpdate").html('');
														
														$("#v_with_AM").attr('checked', false);
														$("#v_with_MPO").attr('checked', false);
														$("#v_with_RSM").attr('checked', false);
														
														$("#v_with_ATS").attr('checked', false);
														$("#v_with_VTS").attr('checked', false);
														
														
														
														
														$("#errorChkVSubmit_doc").html('');
														$("#wait_image_visit_submit_doc").hide();
														$("#visit_submit_doc").show();	
														$("#checkLocation_doc").html('');
														//$("#visit_location_doc").show();
														
														
														
														//--
												//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
												
												$("#visit_success").html('</br></br>Submitted Successfully');
												
												if (localStorage.saveSubmitDocFlag==1){
													saveDelete_doc(localStorage.saveSubmitDocI)
												}
												localStorage.visit_page=''
												//saveDelete_doc(i)
												
												
												
												
												/// CANCEL ALLcancelVisitPage();
												
													localStorage.campaign_show_1="";
													localStorage.gift_show_1="";
													localStorage.ppm_show_1=""
													localStorage.sample_show_1="";
													
													
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr='';
													
													set_doc_all();
													$(".visit_client").html('');
												
												
												
												
												//var url = "#page_confirm_visit_success";	
												var image = document.getElementById('myImageDoc');
												image.src = "";
												imagePath = "";
												$("#docVisitPhoto").val(imagePath);
												$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
												//location.reload();
																											
									}else{						
										$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection.');
										$("#wait_image_visit_submit_doc").hide();
										$("#visit_submit_doc").show();								
										}
									}
								}
							 });//end post	
							}//error Location
						}
					}
				//  }//locaction check error
			}//Visited with check
	//}//Sync date check
  }
//  =======================Cancell doc visit============================
function cancellDocvisit(){	
	$("#errorChkVSubmit").text("");
	
	var visitClientId=localStorage.visit_client.split('|')[1]	
	var visit_type="Schedule"
	if (localStorage.scheduleDocFlag==0){
		visit_type="Unschedule"
	}
	var scheduled_date=localStorage.scheduled_date
	
	
	var sample_doc_Str=localStorage.productSampleStr;
	var gift_doc_Str=localStorage.productGiftStr;
	var campaign_doc_str=localStorage.campaign_doc_str; 
	
	var ppm_doc_Str=localStorage.productppmStr;
	
	var notes= $("#doc_feedback").val();
	var doc_others= $("#doc_others").val();
	//alert (notes);
	notes=replace_special_char(notes);
	var reason= $("#docVCancell_combo").val();
	//alert (reason)
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for ( i=0; i < campaignListLength; i++){		
			
			var camp_name=''
			if (campaignList[i] !=''){
				 camp_name=$("#doc_camp_name"+campaignList[i]).val();
			}
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
			if (campaignList[i] !=''){
				campaign_submit=campaign_submit+'|'+camp_name
			}
			
		}
	}
	//alert (campaign_submit);
	//----------------------- Sample check
	//$("#errorChkVSubmit").html(sample_doc_Str);
	//alert (sample_doc_Str.indexOf('undefined'));
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		var sampleCount=0
		for ( i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			var sample_name=''
			if (sample_single_list[0] !=''){
				sample_name=$("#sample_name"+sample_single_list[0]).val();
				sampleCount=sampleCount+1
				if (sampleCount > 4){break;}
				$("#errorChkVSubmit_doc").html('First four sample will accept');
			}
			//sample_name=sample_name.replace('undefined','')
			
			if (sample_submit==''){
				sample_submit=sample_single_list[1]+','+sample_single_list[0]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[1]+','+sample_single_list[0]
			}
			if (sample_single_list[0] !=''){
				sample_submit=sample_submit+'|'+sample_name
			}
			
		}
	}
	
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for ( i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');
			 
			var gift_name=''
			if (gift_single_list[0] !=''){
				gift_name=$("#doc_gift_name"+sample_single_list[0]).val();
			}
			if (gift_submit==''){
				gift_submit=gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[1]+','+gift_single_list[0]+'|'+gift_name
			}
			if (gift_single_list[0] !=''){
				gift_submit=gift_submit+'|'+gift_name
			}
		}
	}
	//alert (gift_submit)
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		
		ppm_submit='';
		for ( i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');
			var doc_ppm_name=''
			if (ppm_single_list[0] !=''){
				doc_ppm_name=$("#doc_ppm_name"+ppm_single_list[0]).val();
			}
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
				
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[1]+','+ppm_single_list[0]//+'|'+doc_ppm_name
			}
			if (ppm_single_list[0] != ''){
					ppm_submit=ppm_submit+'|'+doc_ppm_name
			}
		}
	}
	//-------------------------------
	
	
	
	

	//------------------------
	campaign_submit=campaign_submit.replace('undefined','').replace(',.','');
	gift_submit=gift_submit.replace('undefined','').replace(',.','');
	
	sample_submit=sample_submit.replace('undefined','').replace(',.','');
	
	notes=notes.replace('undefined','').replace(',.','');
	ppm_submit=ppm_submit.replace('undefined','').replace(',.','');
	
	
	
	if (campaign_submit==','){
		campaign_submit='';
		
	}
	if (gift_submit==','){
		gift_submit='';
		
	}
	if (sample_submit==','){
		sample_submit='';
		
	}
	if (ppm_submit==','){
		ppm_submit='';
		
	}
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	
	var docVisitPhoto=$("#docVisitPhoto").val();
	
	//alert (docVisitPhoto)
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	var imageName=localStorage.user_id+'_'+now+'_docVisit.jpg';
	
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	var v_with_AM=$("input[name=v_with_AM]:checked").val(); if (v_with_AM==undefined){v_with_AM=''}
	var v_with_MPO=$("input[name=v_with_MPO]:checked").val(); if (v_with_MPO==undefined){v_with_MPO=''}
	var v_with_RSM=$("input[name=v_with_RSM]:checked").val(); if (v_with_RSM==undefined){v_with_RSM=''}
	
	var v_with_ATS=$("input[name=v_with_ATS]:checked").val(); if (v_with_ATS==undefined){v_with_ATS=''}
	var v_with_VTS=$("input[name=v_with_VTS]:checked").val(); if (v_with_VTS==undefined){v_with_VTS=''}
	
	//alert (v_with_AM)
	var v_with=v_with_AM+"|"+v_with_MPO+"|"+v_with_RSM+"|"+v_with_ATS+"|"+v_with_VTS
	//v_with=v_withGet.replace('undefined')
	//alert (v_with)
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	
	//if  (localStorage.sync_date!=today_1){
//	$("#errorChkVSubmit_doc").html('Please sync first');
//	
//	}
//	else{
			if (reason==''){
				$("#errorChkVSubmit_doc").html('Please select a reason');		
			}else{					
				if (visitClientId=='' || visitClientId==undefined){
					$("#errorChkVSubmit_doc").html('Invalid Client');		
				}else{
					if(visit_type=='' || visit_type==undefined){
						$("#errorChkVSubmit_doc").html('Invalid Visit Type');
					}else{
						var marketNameId=localStorage.visit_market_show.split('|');
						var market_Id=marketNameId[1];		
					
							// ajax-------
							//alert (localStorage.location_error);
						if ( localStorage.location_error==2){
							$("#errorChkVSubmit_doc").html('<font style="color:#F00;">Please activate <font style="font-weight:bold">location </font> and <font style="font-weight:bold"> data </font></font>');
						}
						else {	
							$("#visit_submit_doc").hide();
							$("#wait_image_visit_submit_doc").show();
									//alert (localStorage.base_url+'cancellDocvisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg=' +encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'&imageName='+imageName+'&reason='+reason)	
							$.ajax(localStorage.base_url+'cancellDocvisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg=' +encodeURI(msg)+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id+'&doc_others='+doc_others+'&location_detail='+localStorage.location_detail+'&imageName='+imageName+'&reason='+reason,{
							// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
							type: 'POST',
							timeout: 30000,
							error: function(xhr) {
							//alert ('Error: ' + xhr.status + ' ' + xhr.statusText);
							$("#wait_image_visit_submit").hide();
							$("#visit_submit").show();	
							$("#error_login").html('Network Timeout. Please check your Internet connection..');
												},
										success:function(data, status,xhr){	
												//$.post(localStorage.base_url+'check_user?',{cid: localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,client_id:visitClientId,visit_type:visit_type,schedule_date:scheduled_date,msg:msg,lat:lat,long:longitude,v_with:v_with,route:market_Id,location_detail:localStorage.location_detail},
		//    						 
		//								
		//								 function(data, status){
											 if (status!='success'){
												$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection...');
												$("#wait_image_visit_submit_doc").hide();
												$("#visit_submit_doc").show();
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
												if (resultArray[0]=='FAILED'){
													$("#errorChkVSubmit_doc").html(resultArray[1]);
													$("#wait_image_visit_submit_doc").hide();
													$("#visit_submit_doc").show();	
												}
											  else if (resultArray[0]=='SUCCESS'){
												  
													//uploadPhoto_docVisit(docVisitPhoto, imageName);				
													//-----------
													localStorage.visit_client=''
													localStorage.visit_page=""
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr=''
													
													localStorage.campaign_show_1='';
													localStorage.gift_show_1='';
													localStorage.sample_show_1='';
													localStorage.ppm_show_1='';
													
																	
													////-------------
													// Clear Campaign and sample
														
														//localStorage.productOrderStr='';
														var productList=localStorage.productListStr.split('<rd>');
														var productLength=productList.length;
														for ( i=0; i < productLength; i++){
															var productArray2 = productList[i].split('<fd>');
															var product_id2=productArray2[0];	
															var product_name2=productArray2[1];
															$("#sample_qty"+product_id2).val('');
															
															
															var camp_combo="#doc_camp"+product_id2
															$(camp_combo).attr('checked', false);
															//alert (product_id2);
														}	
													// Clear Gift
														
														//localStorage.productOrderStr='';
														var giftList=localStorage.gift_string.split('<rd>');
														var giftLength=giftList.length;
														for ( i=0; i < giftLength; i++){
															var giftArray2 = giftList[i].split('<fd>');
															var gift_id2=giftArray2[0];	
															//var product_name2=giftArray2[1];
															$("#gift_qty"+gift_id2).val('');
														}
														// Clear ppm
														
														//localStorage.productOrderStr='';
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														for ( i=0; i < ppmLength; i++){
															var ppmArray2 = ppmList[i].split('<fd>');
															var ppm_id2=ppmArray2[0];	
															//var product_name2=ppmArray2[1];
															$("#ppm_qty"+ppm_id2).val('');
															
			
														}	
															
															//====================================
														
														
														$("#doc_feedback").val('');
														$("#doc_others").val('');
														
														//$(".market").html('');
														$(".visit_client").html('');
														//--------------------------------------------------------
														$("#errorChkVSubmit").html('');
														$("#lat").val('');
														$("#longitude").val('');
														$("#lscPhoto").val('');
														document.getElementById('myImage').src = '';
														
														$("#lat_p").val('');
														$("#long_p").val('');								
				//										
														//$("#checkLocation").html('');
				//										$("#checkLocationProfileUpdate").html('');
														
														$("#v_with_AM").attr('checked', false);
														$("#v_with_MPO").attr('checked', false);
														$("#v_with_RSM").attr('checked', false);
														
														$("#v_with_ATS").attr('checked', false);
														$("#v_with_VTS").attr('checked', false);
														
														
														
														$("#errorChkVSubmit_doc").html('');
														$("#wait_image_visit_submit_doc").hide();
														$("#visit_submit_doc").show();	
														$("#checkLocation_doc").html('');
														//$("#visit_location_doc").show();
														
														
														
														//--
												//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
												
												$("#visit_success").html('</br></br>Submitted Successfully');
												
												if (localStorage.saveSubmitDocFlag==1){
													saveDelete_doc(localStorage.saveSubmitDocI)
												}
												localStorage.visit_page=''
												//saveDelete_doc(i)
												
												
												
												
												/// CANCEL ALLcancelVisitPage();
												
													localStorage.campaign_show_1="";
													localStorage.gift_show_1="";
													localStorage.ppm_show_1=""
													localStorage.sample_show_1="";
													
													
													
													localStorage.productGiftStr='';
													localStorage.campaign_doc_str=''
													localStorage.productSampleStr=''
													localStorage.productppmStr='';
													
													set_doc_all();
													$(".visit_client").html('');
												
												
												
												
												//var url = "#page_confirm_visit_success";	
												var image = document.getElementById('myImageDoc');
												image.src = "";
												imagePath = "";
												$("#docVisitPhoto").val(imagePath);
												$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
												//location.reload();
																											
									}else{						
										$("#errorChkVSubmit_doc").html('Network Timeout. Please check your Internet connection.');
										$("#wait_image_visit_submit_doc").hide();
										$("#visit_submit_doc").show();								
										}
									}
								}
							 });//end post	
							}//error Location
						}
					}
				//  }//locaction check error
			}//Visited with check
	//}//Sync date check
  }
//==============Cancell Doctor=======================  
function cancellDoc(){	
	$("#myerror_doctor_prof").html('' )
	$("#wait_image_docProf").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var visitDocId=localStorage.visit_client.split('|')[1]	
	
	reason=$("#docC_combo").val()
	
	
	
	
	$("#doctor_prof").val(localStorage.report_url+'cancellDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&reason='+reason)
		$.ajax(localStorage.report_url+'cancellDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&reason='+reason,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_prof").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_doctor_prof").html(result_string)
									
								
							}else{	
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
  }
//==============================Doctor visit save===========================
function saveDocvisit(){	
	$("#errorChkVSubmit").text("");
	
	visitClientId=localStorage.visit_client.split('|')[1]	
	visitClientName=localStorage.visit_client.split('|')[0]
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	//alert (localStorage.scheduled_date)
	ppm_doc_Str=localStorage.productppmStr;

	notes= $("#doc_feedback").val();
	doc_others= $("#doc_others").val();
	
	notes=replace_special_char(notes);

	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	var currentDate_1 = new Date()
	var day_1 = currentDate_1.getDate();if(day_1.length==1)	{day_1="0" +day_1};
	var month_1 = currentDate_1.getMonth() + 1;if(month_1.length==1)	{month_1="0" +month_1};
	var year_1 = currentDate_1.getFullYear()
	var today_1=  year_1 + "-" + month_1 + "-" + day_1
	
	var v_with_AM=$("input[name=v_with_AM]:checked").val(); if (v_with_AM==undefined){v_with_AM=''}
	var v_with_MPO=$("input[name=v_with_MPO]:checked").val(); if (v_with_MPO==undefined){v_with_MPO=''}
	var v_with_RSM=$("input[name=v_with_RSM]:checked").val(); if (v_with_RSM==undefined){v_with_RSM=''}
	
	var v_with_ATS=$("input[name=v_with_ATS]:checked").val(); if (v_with_ATS==undefined){v_with_ATS=''}
	var v_with_VTS=$("input[name=v_with_VTS]:checked").val(); if (v_with_VTS==undefined){v_with_VTS=''}
	//alert (v_with_AM)
	var v_with=v_with_AM+"|"+v_with_MPO+"|"+v_with_RSM+"|"+v_with_ATS+"|"+v_with_VTS
	var v_shift=$("input[name=v_shift]:checked").val();
	if (lat=='' || lat==0 || longitude=='' || longitude==0 ){
							
		lat=localStorage.latitude
		longitude=localStorage.latitude
		localStorage.location_detail="LastLocation-"+localStorage.location_detail;
	
	}
	

			if (v_with=='' || v_with==undefined || v_with=='undefined'){
				$("#errorChkVSubmit_doc").html('Visited with not selected');		
			}else{				
					if (visitClientId=='' || visitClientId==undefined){
						$("#errorChkVSubmit_doc").html('Invalid Client');		
					}else{
						if(visit_type=='' || visit_type==undefined){
							$("#errorChkVSubmit_doc").html('Invalid Visit Type');
						}else{
								
							//alert (localStorage.productOrderStr);
							var marketNameId=localStorage.visit_market_show.split('|');
							var market_Id=marketNameId[1];		
						var  docSaveData=localStorage.docSaveData
						
						if (docSaveData.indexOf(localStorage.visit_client) !=-1){
							docSaveDataList = docSaveData.split('<doc>');
							//alert (docSaveDataList.length)	
							for ( i=0; i < docSaveDataList.length-1; i++){
								//alert (docSaveDataList[i])
								var visit_client = docSaveDataList[i].split('<d>')[15];
								//alert (visit_client+'     '+localStorage.visit_client+'-----------'+scheduled_date+'    '+localStorage.today)
								if ((visit_client==localStorage.visit_client) && (scheduled_date==localStorage.today)){
									var replaceStr=docSaveDataList[i]+'<doc>'
									docSaveData=docSaveData.replace(replaceStr,'')
									localStorage.docSaveData=docSaveData
								}
							}
						}
									
						// alert (docSaveData+visitClientName+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<d>'+localStorage.visit_client+'<doc>')
			
							//var docSaveData=localStorage.docSaveData
							//alert (localStorage.visit_client+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+encodeURI(msg)+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<doc>')
							//alert ('sdas')
							var doctor_visit_save=docSaveData+visitClientName+'<d>'+localStorage.visit_market_show+'<d>'+visitClientId+'<d>'+visit_type+'<d>'+scheduled_date+'<d>'+localStorage.productSampleStr+'<d>'+localStorage.productGiftStr+'<d>'+localStorage.campaign_doc_str+'<d>'+localStorage.productppmStr+'<d>'+notes+'<d>'+lat+'<d>'+longitude+'<d>'+v_with+'<d>'+market_Id+'<d>'+doc_others+'<d>'+localStorage.visit_client+'<d>'+v_shift+'<doc>'
							
							localStorage.docSaveData=doctor_visit_save
					//alert (localStorage.docSaveData)
								localStorage.visit_client=''
								localStorage.visit_page=""
								localStorage.productGiftStr='';
								localStorage.campaign_doc_str=''
								localStorage.productSampleStr=''
								localStorage.productppmStr=''
								
								localStorage.campaign_show_1='';
								localStorage.gift_show_1='';
								localStorage.sample_show_1='';
								localStorage.ppm_show_1='';
								
												
								////-------------
								// Clear Campaign and sample
									
									//localStorage.productOrderStr='';
									var productList=localStorage.productListStr.split('<rd>');
									var productLength=productList.length;
									for ( i=0; i < productLength; i++){
										var productArray2 = productList[i].split('<fd>');
										var product_id2=productArray2[0];	
										var product_name2=productArray2[1];
										$("#sample_qty"+product_id2).val('');
										
										
										var camp_combo="#doc_camp"+product_id2
										$(camp_combo).attr('checked', false);
										//alert (product_id2);
									}
								// Clear Gift
									
									//localStorage.productOrderStr='';
									var giftList=localStorage.gift_string.split('<rd>');
									var giftLength=giftList.length;
									for ( i=0; i < giftLength; i++){
										var giftArray2 = giftList[i].split('<fd>');
										var gift_id2=giftArray2[0];	
										//var product_name2=giftArray2[1];
										$("#gift_qty"+gift_id2).val('');
									}
									// Clear ppm
									
									//localStorage.productOrderStr='';
									var ppmList=localStorage.ppm_string.split('<rd>');
									var ppmLength=ppmList.length;
									for ( i=0; i < ppmLength; i++){
										var ppmArray2 = ppmList[i].split('<fd>');
										var ppm_id2=ppmArray2[0];	
										//var product_name2=ppmArray2[1];
										$("#ppm_qty"+ppm_id2).val('');
										

									}	
										
										//====================================
									
									
									$("#doc_feedback").val('');
									$("#doc_others").val('');
									
									//$(".market").html('');
									$(".visit_client").html('');
									//--------------------------------------------------------
									$("#errorChkVSubmit").html('');
									$("#lat").val('');
									$("#longitude").val('');
									$("#lscPhoto").val('');
									document.getElementById('myImageDoc').src = '';
									
									$("#lat_p").val('');
									$("#long_p").val('');								
											
									//alert (localStorage.docSaveData)
									$("#v_with_AM").attr('checked', false);
									$("#v_with_MPO").attr('checked', false);
									$("#v_with_RSM").attr('checked', false);
									
									$("#v_with_ATS").attr('checked', false);
									$("#v_with_VTS").attr('checked', false);
									
									
									$("#errorChkVSubmit_doc").html('Saved Successfully');
									$("#wait_image_visit_submit_doc").hide();
									$("#visit_submit_doc").hide();	
									$("#checkLocation_doc").html('');
									//$("#visit_location_doc").show();
									
									
									
									//--
							//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
							//$("#visit_success").html('</br></br>Submitted Successfully');
							localStorage.visit_page=''
							
							
							
							
							/// CANCEL ALLcancelVisitPage();
								image.src = "";
								imagePath = "";
								$("#docVisitPhoto").val(imagePath);
								
								localStorage.campaign_show_1="";
								localStorage.gift_show_1="";
								localStorage.ppm_show_1=""
								localStorage.sample_show_1="";
								
								
								
								localStorage.productGiftStr='';
								localStorage.campaign_doc_str=''
								localStorage.productSampleStr=''
								localStorage.productppmStr='';
								
								set_doc_all();
								$(".visit_client").html('');
												
												
												
												
																											
									
								
						
						}
					}
				//  }//locaction check error
			}//Visited with check
	//}//Sync date check
  }
//===================Save visit
//-----------------------------Visit Save Start
function visitSave(){
	// alert ("NNNN");
	$("#errorChkVSubmit").text("");
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');


	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
		marchandizingInfoStr=''

	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	var delivery_date_save=$("#delivery_date").val();
	var collection_date_save=$("#collection_date").val();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//var bonus_combo=$("#bonus_combo").val();
	
	var bonus_combo=($("input:radio[name='bonus_combo']:checked").val())
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	
	var OShift=$("#OShift").val();
	//alert (bonus_combo)
	
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	var imageName=localStorage.user_id+'_'+now+'.jpg';
		

			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					
					//$("#err_save_visit").text(visitClientId+'<fd>'+visit_type+'<fd>'+scheduled_date+'<fd>'+marketInfoStr+'<fd>'+productOrderStr+'<fd>'+marchandizingInfoStr+'<fd>'+campaign_str+'<fd>'+lat+'<fd>'+longitude+'<fd>'+imageName+'<fd>'+localStorage.payment_mode+'<fd>'+chemist_feedback+'<rd>')
				var dt = new Date();
				var hour=dt.getHours();if(hour>12){hour=hour-12};
				var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
				var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
				var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
				var year = dt.getFullYear()
				var today=  year + "-" + month + "-" + day +' '+time
				if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
					
													
				var save_data = localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+payment_mode+'<fdfd>'+chemist_feedback+'<fdfd>'+delivery_date_save+'<fdfd>'+collection_date_save+'<fdfd>'+bonus_combo+'<fdfd>'+today+'<fdfd>'+OShift+'<rdrd>';	
													//-----------
						
			// Save data edit========================
			if (localStorage.saved_data_submit==1){
				var visit_save=localStorage.visit_save;
				var saved_data_show=localStorage.saved_data_show;
				var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>",save_data)
				//localStorage.visit_save=visit_save_data;
				localStorage.visit_save=visit_save_data
				after_save_data();
				
			}
			else{
				if (saved_dataArray.length-1 < parseInt(localStorage.save_visit_limit) ){
					localStorage.visit_save=localStorage.visit_save+save_data
					after_save_data();
				}
				else{
					alert ("Your Saved limit is " +localStorage.save_visit_limit );
				}
			}
					
					$.afui.loadContent("#page_confirm_visit_save",true,true,'right');

													
																							
			
			
			}
		}
	

	
}

function after_save_data(){
	localStorage.visit_client=''
	localStorage.marchandizingStr=''
	
	localStorage.marketInfoLSCStr=''
	
	localStorage.marketInfoStr='';
	localStorage.marketInfoSubmitStr='';
	
	localStorage.productOrderStr='';
	localStorage.marchandizingInfoStr='';
	localStorage.visit_camp_list_str='';
	localStorage.visit_camp_submit_str='';
	visitCampaginTempArray=[];
	visitCampaginArray=[];
	
	localStorage.visit_page="";
	
	localStorage.show_total="";
	
	$("#chemist_feedback").val('')
							
							

	//-------------
	// Clear localStorage
		
	localStorage.productOrderStr='';
	cancel_cart();
		

	//--------------------------------------------------------
	$(".visit_client").html('');
	
	$("#errorChkVSubmit").html('');
	$("#lat").val('');
	$("#longitude").val('');
	$("#lscPhoto").val('');
	document.getElementById('myImage').src = '';
	
	$("#lat_p").val('');
	$("#long_p").val('');								
	
	$("#checkLocation").html('');
	//$("#checkLocationProfileUpdate").html('');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	
	$("#product_total_last").html('');
	$("#product_list_tbl_cart").html('');
	$("#product_total_cart").html('');
	$("#item_combo_id").val('Search');
	
	
	
	//--
	$("#visit_save").html('</br><font style="color:#942342;">Saved in your mobile. Please submit from saved order when you have good network. </font>');
	
	
	$("#visit_location").show();	
	$("#visit_submit").hide();
	$("#checkLocation").hide('');
	
}

//================== Show saved visit
function getvisitSave_data(){
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');
	
	var saved_data_list="";
	
	//alert (saved_dataArray.length)
	for (var i=0; i < saved_dataArray.length -1 ; i++){
		var visit_market_show = saved_dataArray[i].split('<fdfd>')[0];
		var visit_client_show = saved_dataArray[i].split('<fdfd>')[1];
		var visit_time_show = saved_dataArray[i].split('<fdfd>')[17];
		
		localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show
			
	   saved_data_list=saved_data_list+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table width="100%" border="0"><tr><td width="2%"></td><td width="80%" onClick="set_save_data('+i+')"  >'+'<font style="font-size:16px ;color:#306161"><b>'+visit_client_show+'</b></font>( '+visit_market_show+' )'+'</br><font style="color:#804040"> '+visit_time_show+'</font></td><td>' +'<input type="submit" style="width:100%; height:30px; width:40px; background-color:#09C; color:#FFF; font-size:15px" onClick="cancelSave('+i+')" value="X"  >' +'</font>' +'</td> </tr></table></li>'
	  // alert (client_id);
														
	}
	var saved_visit=$('#saved_visit');
	
	saved_visit.empty()
	saved_visit.append(saved_data_list);
	//saved_visit.listview("refresh");
	//alert (client_id)												
}


function cancelSave(i){
	var visit_save=localStorage.visit_save
	var saved_data_show=visit_save.split('<rdrd>')[i];
	var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")

	localStorage.visit_save=visit_save_data
	after_save_data()
	
	saved_visit()
}




function set_save_data(i){
	cancel_cart();
	var visit_save=localStorage.visit_save
	var saved_data_show =visit_save.split('<rdrd>')[i];
	localStorage.saved_data_show = saved_data_show;
	
	//alert (localStorage.saved_data_show)
	
	
	var saved_data_show_array=saved_data_show.split('<fdfd>')
	
	var market_name = saved_data_show_array[0];
	var visit_client = saved_data_show_array[1];
	
	var visitClientId = saved_data_show_array[2];
	var visit_type = saved_data_show_array[3];
	var scheduled_date = saved_data_show_array[4];
	var marketInfoStr = saved_data_show_array[5];
	var productOrderStr = saved_data_show_array[6];
	var marchandizingInfoStr = saved_data_show_array[7];
	var campaign_str = saved_data_show_array[8];
	var lat = saved_data_show_array[9];
	var longitude = saved_data_show_array[10];
	var imageName = saved_data_show_array[11];
	var payment_mode = saved_data_show_array[12];
	var chemist_feedback = saved_data_show_array[13];
	var delivery_date_show = saved_data_show_array[14];
	var collection_date_show = saved_data_show_array[15];
	var bonus_combo = saved_data_show_array[16];
	
	var OShift = saved_data_show_array[18];
	
	//alert (bonus_combo)
	//$('#bonus_combo').empty()
	
	
	//alert (payment_mode)
	//alert (delivery_date_show)
	//localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>'
	
	
	
	
	localStorage.visit_market_show=market_name
	var market_Id=market_name.split('|')[1];

	
	localStorage.visit_client_show=visit_client
	localStorage.visit_client=visitClientId
	
	localStorage.productOrderStr=productOrderStr
	$("#chemist_feedback").val(chemist_feedback);
	
	
	$(".market").html(market_name);								
	$(".visit_type").html(visit_type);								
	$(".s_date").html(scheduled_date);
	$(".visit_client").html(visit_client);
	
	getOrder_load();
	cart_data();
	
	$("#delivery_date").val(delivery_date_show);
	
	
	$("#collection_date").val(collection_date_show);
	$("#chemist_feedback").val(chemist_feedback);
	
	//alert (localStorage.visit_location_flag)
	if (localStorage.visit_location_flag=='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").show();
		$("#visit_submit").hide();
		
	}
	
	//$("#errorChkVSubmit").html('');
//	$("#errorConfiProfileUpdate").html('');
//	$("#errorChkVSubmit_doc").html('');
	$("#visit_submit").hide();
	$("#visit_location").show();
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag=='YES'){
		//alert (OShift)
		if (OShift=='Morning'){
			$('#OShift').empty();
			$('#OShift').append('<option value="Morning" >Morning</option>');
			$('#OShift').append('<option value="Evening" >Evening</option>');
		}
		if (OShift=='Evening'){
			$('#OShift').empty();
			$('#OShift').append('<option value="Evening" >Evening</option>');
			$('#OShift').append('<option value="Morning" >Morning</option>');
			
		}
	//var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
//	$('#dCategory').append(opt);
//	$("#OShift").val(OShift);
		$("#delivery_date_div").show();
		
	}
	else{
		$("#delivery_date_div").hide();
	}
	if (localStorage.collection_date_flag=='YES'){
		$("#collection_date_div").show();
	}
	else{
		$("#collection_date_div").hide();
	}
	if (localStorage.payment_date_flag=='YES'){
		$("#payment_date_div").show();
	}
	else{
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag=='YES'){
		localStorage.payment_mode='Cash'
		//alert (payment_mode)
		if (payment_mode=='Credit'){
			jQuery('input:radio[name="payment_mode"]').filter('[value="Credit"]').attr('checked', true);
			//document.getElementById("Credit").checked;
		}
		else{
			jQuery('input:radio[name="payment_mode"]').filter('[value="Cash"]').attr('checked', true);
			//document.getElementById("Cash").checked;
		}
		$("#payment_mode_div").show();
	}
	else{
		$("#payment_mode_div").hide();
	}
	
	//alert (bonus_combo)
	if (bonus_combo=='YES'){
		jQuery('input:radio[name="bonus_combo"]').filter('[value="YES"]').attr('checked', true);
		//document.getElementById("YES").checked;
	}
	else{
		//alert (bonus_combo)
		jQuery('input:radio[name="bonus_combo"]').filter('[value="NO"]').attr('checked', true);
		//document.getElementById("NO").checked;
	}
	
	//alert (bonus_combo);
//	if (bonus_combo!='0'){
//		//alert ('nnnn')
//		
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+bonus_combo+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+bonus_combo+'</font></option>');
//	}
//	$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="0"><font style="font-size:12px; color:#306161; background-color:#ECECFF">N/A</font></option>')
//	var promo_str=localStorage.promo_str;
//	var bonusComboList=promo_str.split('<rd>');
//	
//	for (j=0; j < bonusComboList.length; j++){
//		var single_promo=bonusComboList[j].split('<fd>');
//		$("#bonus_combo").append('<option style="font-size:12px; color:#306161; background-color:#ECECFF" value="'+single_promo[2]+' ('+single_promo[0]+')'+'"><font style="font-size:12px; color:#306161; background-color:#ECECFF">'+single_promo[2]+'('+single_promo[0]+')'+'</font></option>');
//	
//	}
		
	localStorage.saved_data_submit=1;
	localStorage.doctor_flag=0;
	if (localStorage.productOrderStr==""){
		//alert (localStorage.productOrderStr);
		$("#order_load").hide();
		$.afui.loadContent("#page_visit",true,true,'right');
		
	}
	else{
		$.afui.loadContent("#page_cart",true,true,'right');
		
	}
	
	
	
}





//-----------------------------Visit Save End

//-----------------Search---------------
function searchMarket() {
	var filter  = $("#unschedule_market_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("market_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}

function searchSubmitRoute() {
	var filter  = $("#tour_market_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_market_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function searchPendingRep() {
	var filter  = $("#tour_pending_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_pending_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function clearsearchPendingRep(){
	$("#tour_pending_combo_id").val("")
	$("#tour_pending_combo_id").focus()
	searchPendingRep()
	
}

//===========
function searchPendingR() {
	var filter  = $("#tour_pending_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("tour_rep_pending_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}
function clearSearchR(){
	$("#tour_pending_combo_id").val("")
	$("#tour_pending_combo_id").focus()
	searchPendingR()
	
}
//=========
function searchClient() {
	var filter  = $("#unscheduled_m_client_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("unscheduled_m_client_combo_id_lv").getElementsByTagName("li");
	if (localStorage.doctor_flag==1){
		//alert ('Nadira')
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.indexOf(filter) != -1) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	else{
		for (var i = 0; i < lis.length; i++) {
			var name = lis[i].getElementsByClassName('name')[0].innerHTML;
			//alert (name)
			if (name.toUpperCase().indexOf(filter) == 0) 
				lis[i].style.display = 'list-item';
			else
				lis[i].style.display = 'none';
		}
	}
	
}

function searchProduct() {
	var filter  = $("#item_combo_id").val().toUpperCase();
	//alert (filter);
	 var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");
	
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0)
			lis[i].style.display = 'list-item';
		
		else
			lis[i].style.display = 'none';
		
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	
	$("#item_codeSearch").val('');
}

function searchProductChar(char) {
	var filter  = char;
	
	var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#item_combo_id").val('');
	$("#item_combo_id").focus();
	
}

/*************** jahangirEditedStart20Feb searchPrChar ******************/
var searchLetterSet = '';
function searchPrChar(char) {
	// gochange
	searchLetterSet = char;
	var filter  = char;
	setPrProductA(filter);
	
	var lis =document.getElementById("pr_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#pritemSearch").val('');
	//$("#pritemSearch").focus();
	
}
/*************** jahangirEditedEnd20Feb searchPrChar ******************/

function searchOpChar(char) {
	var filter  = char;
	
	var lis =document.getElementById("op_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#opitemSearch").val('');
	//$("#opitemSearch").focus();
	
}
function searchCampaignChar(char) {
	var filter  = char;
	
	var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#campaign_combo_id").val('');
	$("#campaign_combo_id").focus();
	
}

function searchSampleChar(char) {
	var filter  = char;
	var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	//alert (filter);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#sample_combo_id").val('');
	$("#sample_combo_id").focus();
	
}

function tr_item(product_id){	
	//alert (product_id);
	var order_qty_text="#order_qty"+product_id
	$(order_qty_text).focus();

	}
function tr_item_cart(product_id){	
	//alert (product_id);
	var order_qty_text="#cart_qty"+product_id
	$(order_qty_text).focus();

	}

function check_boxTrue(product_id){	
	//alert (product_id);
	var camp_combo="#doc_camp"+product_id
	var camp_combo_val=$(camp_combo).is(":checked")
	if (camp_combo_val==false){
		$(camp_combo).prop('checked', true);
		getDocCampaignData_keyup(product_id)
	}
	else{
		$(camp_combo).prop('checked', false);
		getDocCampaignData_keyup(product_id)
	}
}

function searchCampaign() {

	var filter  = $("#campaign_combo_id").val().toUpperCase();

	 var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		//$("#campaign_combo_id_lv").find(lis[0]).first().focus()
	}
}
function comboSearchCampaign() {

	var filter  = $("#campaign_combo").val().toUpperCase();
	$("#campaign_combo_id").val(filter)
	
	 var lis =document.getElementById("campaign_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#campaign_combo_id_lv").find(lis[0]).first().focus()
	}
}
function searchSample() {

	var filter  = $("#sample_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#sample_combo_id_lv").find(lis[0]).first().focus()
	}
}
function comboSearchSample() {

	var filter  = $("#sample_combo").val().toUpperCase();
	$("#sample_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("sample_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#sample_combo_id_lv").find(lis[0]).first().focus()
	}
}
function tr_sample(product_id){	
	//alert (product_id);
	var order_qty_text="#sample_qty"+product_id
	$(order_qty_text).focus();

	}
	
function searchPpm() {

	var filter  = $("#ppm_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("ppm_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function comboSearchPpm() {

	var filter  = $("#ppm_combo").val().toUpperCase();
	$("#ppm_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("ppm_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_ppm(product_id){	
	//alert (product_id);
	var order_qty_text="#ppm_qty"+product_id
	$(order_qty_text).focus();

	}
function searchGift() {

	var filter  = $("#gift_combo_id").val().toUpperCase();
	//alert  (filter)
	 var lis =document.getElementById("gift_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function comboSearchGift() {

	var filter  = $("#gift_combo").val().toUpperCase();
	$("#gift_combo_id").val(filter);
	//alert  (filter)
	 var lis =document.getElementById("gift_combo_id_lv").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function tr_gift(product_id){	
	//alert (product_id);
	var order_qty_text="#gift_qty"+product_id
	$(order_qty_text).focus();

	}	
function comboSearch(){	
	var filter_value=$("#item_combo").val().toUpperCase();
	//alert (filter_value)
	$("#item_combo_id").val(filter_value)
	var filter  = filter_value
	//alert (filter);
	 var lis =document.getElementById("item_combo_id_lv").getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		//alert (name)
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
		$("#item_combo_id_lv").find(lis[0]).first().focus()
	}
	$("#item_codeSearch").val('');
	
	}	
function comboSearchOrder(){	
	$("#item_combo_id").val('A')
	searchProduct()
	
	}
function exit() {	
	navigator.app.exitApp();
}





//=====================Report============
function set_report_parameter_doctor() {	
	var date_from_doc=$("#date_from_doc").val();
	var date_to_doc=$("#date_to_doc").val();
	var rep_id_report_doc=$("#se_mpo_doc").val();
	var se_item_report_doc=$("#se_item_doc").val();
	var se_market_report_doc=$("#se_market_doc").val();
	
	if (se_market_report_doc==""){
		se_market_report_doc="All"
	}
	
	
	se_item_report="All"
	
	if (date_from_doc.length==0){
		date_from_show_doc="Today"
	}
	else{
		date_from_show_doc=date_from_doc
	}
	if (date_to_doc.length==0){
		date_to_show_doc="Today"
	}
	else{
		date_to_show_doc=date_to_doc
	}
	//alert (se_item_report);
	
	if (rep_id_report_doc.length==0){
		rep_id_report_doc=localStorage.user_id;
	}
	
	localStorage.date_from_doc=date_from_doc
	localStorage.date_to_doc=date_to_doc;
	localStorage.rep_id_report_doc=rep_id_report_doc;
	localStorage.se_item_report_doc=se_item_report_doc;
	localStorage.se_market_report_doc=se_market_report_doc;
	
	
	$("#report_market_doctor").html("BaseCode :"+localStorage.se_market_report_doc);
	$("#report_mpo_doctor").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f_doctor").html("DateFrom :"+date_from_show_doc);
	$("#date_t_doctor").html("DateTo :"+date_to_show_doc);
	
	$("#report_market_prescription").html("BaseCode :"+localStorage.se_market_report_doc);
	$("#report_mpo_prescription").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f_prescription").html("DateFrom :"+date_from_show_doc);
	$("#date_t_prescription").html("DateTo :"+date_to_show_doc);
	
	
	
	$("#report_market").html("BaseCode :"+localStorage.se_market_report_doc);
	$("#report_mpo").html("ID :"+localStorage.rep_id_report_doc);
	$("#date_f").html("DateFrom :"+date_from_show_doc);
	$("#date_t").html("DateTo :"+date_to_show_doc);
	

}
function summary_report_doctor() {
	$("#wait_image_doctor").show();		
	set_report_parameter_doctor();
	
	//Blank all div
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
	
	
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctortxt").val(localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			
			$.ajax(localStorage.report_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_doctor").hide();	
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_doctor").hide();
									 if (status!='success'){
										$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_doctor").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
											var result_string=resultArray[1];
											//----------------
											var resultList = result_string.split('<rd>');
											var visit_count=resultList[0];
											var visit_areawise=resultList[1];
											var visit_repwise=resultList[2];
										
											
											//-----------------
											$("#myerror_s_report_doctor").html("");
											
											$("#report_header_doc").text("DCR Count");
											$("#visit_count_doctor").html("<font style='font-size:15px; color:#666'>"+"visit Count:"+visit_count+"</font>");
											$("#visit_withAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
											$("#visit_withoutAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{		
								$("#wait_image_doctor").hide();				
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_doctor",true,true,'right');
	
}
//==============================
function pay_tr_next() {
		$("#wait_image_PaySlip_tr").show();		
		$("#myerror_s_report_PaySlip_tr").html("");
		
		var date_year=$("#date_year").val();
		var date_month=$("#date_month").val();	
		var se_market_doc_tr=''
	
	
		//alert (localStorage.base_url+'report_summary_PaySlip_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
				$.ajax(localStorage.base_url+'report_summary_PaySlip_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									$("#wait_image_PaySlip_tr").hide();	
									$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection..');
														},
									success:function(data, status,xhr){	
										$("#wait_image_PaySlip_tr").hide();
										 if (status!='success'){
											$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_s_report_PaySlip_tr").text(resultArray[0]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){
											
												//-----------------
												$("#myerror_s_report_PaySlip_tr").html(resultArray[1]);
	
	
									
								}else{		
									$("#wait_image_PaySlip_tr").hide();				
									$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection.');
									}
							}
						  }
				 });//end ajax
		$.afui.loadContent("#page_report_PaySlip_tr",true,true,'right');
	//$('#market_combo_id_lv_tr').empty();
//	$('#market_combo_id_lv_tr').append(localStorage.visit_plan_marketlist_combo_tr);
//	localStorage.reportD='PaySlip'
//	$.afui.loadContent("#page_market_tr",true,true,'right');
}
function expense_tr_next() {
	$("#wait_image_ExpenseSlip_tr").show();		
//	$("#myerror_s_report_ExpenseSlip_tr").html("");
//	
	var date_year=$("#date_year").val();
	var date_month=$("#date_month").val();	
	var se_market_doc_tr=''
	
	//alert ('AA')
		//alert (localStorage.base_url+'report_summary_ord_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
				$.ajax(localStorage.base_url+'report_summary_ExpenseSlip_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									$("#wait_image_ExpenseSlip_tr").hide();	
									$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection..');
														},
									success:function(data, status,xhr){	
										$("#wait_image_ExpenseSlip_tr").hide();
										 if (status!='success'){
											$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_s_report_ExpenseSlip_tr").text(resultArray[0]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){
											
												//-----------------
												$("#myerror_s_report_ExpenseSlip_tr").html(resultArray[1]);
	
	
									
								}else{		
									$("#wait_image_ExpenseSlip_tr").hide();				
									$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection.');
									}
							}
						  }
				 });//end ajax
		$.afui.loadContent("#page_report_ExpenseSlip_tr",true,true,'right');
	//$('#market_combo_id_lv_tr').empty();
//	$('#market_combo_id_lv_tr').append(localStorage.visit_plan_marketlist_combo_tr);
//	localStorage.reportD='ExpenseSlip'
//	$.afui.loadContent("#page_market_tr",true,true,'right');
}

function s_order_summary_report_tr_next() {
	$('#market_combo_id_lv_tr').empty();
	$('#market_combo_id_lv_tr').append(localStorage.visit_plan_marketlist_combo_tr);
	localStorage.reportD='OrdReport'
	$.afui.loadContent("#page_market_tr",true,true,'right');
}
function summary_report_doctor_tr_next() {
	$('#market_combo_id_lv_tr').empty();
	$('#market_combo_id_lv_tr').append(localStorage.visit_plan_marketlist_combo_tr);
	localStorage.reportD='DocReport'
	$.afui.loadContent("#page_market_tr",true,true,'right');
}

function summary_report_doctor_tr(marketIdName) {
	
	if  (localStorage.reportD=='DocReport'){
		//if localStorage.repotType
		$("#wait_image_doctor_tr").show();		
		$("#report_doctor_tr").html("");
		
		var date_year=$("#date_year").val();
		var date_month=$("#date_month").val();	
		var se_market_doc_tr=marketIdName.split('|')[1]	
	
	
		//alert (localStorage.base_url+'report_summary_doctor_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
				$.ajax(localStorage.base_url+'report_summary_doctor_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									$("#wait_image_doctor_tr").hide();	
									$("#myerror_s_report_doctor_tr").html('Network Timeout. Please check your Internet connection..');
														},
									success:function(data, status,xhr){	
										$("#wait_image_doctor_tr").hide();
										 if (status!='success'){
											$("#myerror_s_report_doctor_tr").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_s_report_doctor_tr").text(resultArray[0]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){
											
												//-----------------
												$("#myerror_s_report_doctor_tr").html(resultArray[1]);
	
	
									
								}else{		
									$("#wait_image_doctor_tr").hide();				
									$("#myerror_s_report_doctor_tr").html('Network Timeout. Please check your Internet connection.');
									}
							}
						  }
				 });//end ajax
		$.afui.loadContent("#page_report_doctor_tr",true,true,'right');
	}
	if  (localStorage.reportD=='OrdReport'){
		
		$("#wait_image_ord").show();		
		$("#myerror_s_report_ord_tr").html("");
		
		var date_year=$("#date_year").val();
		var date_month=$("#date_month").val();	
		var se_market_doc_tr=marketIdName.split('|')[1]	
	
	
		//alert (localStorage.base_url+'report_summary_ord_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
				$.ajax(localStorage.base_url+'report_summary_ord_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									$("#wait_image_ord_tr").hide();	
									$("#myerror_s_report_ord_tr").html('Network Timeout. Please check your Internet connection..');
														},
									success:function(data, status,xhr){	
										$("#wait_image_ord_tr").hide();
										 if (status!='success'){
											$("#myerror_s_report_ord_tr").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_s_report_ord_tr").text(resultArray[0]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){
											
												//-----------------
												$("#myerror_s_report_ord_tr").html(resultArray[1]);
	
	
									
								}else{		
									$("#wait_image_ord_tr").hide();				
									$("#myerror_s_report_ord_tr").html('Network Timeout. Please check your Internet connection.');
									}
							}
						  }
				 });//end ajax
		$.afui.loadContent("#page_report_ord_tr",true,true,'right');
	}
	//if  (localStorage.reportD=='PaySlip'){
		//
//		$("#wait_image_PaySlip_tr").show();		
//		$("#myerror_s_report_PaySlip_tr").html("");
//		
//		var date_year=$("#date_year").val();
//		var date_month=$("#date_month").val();	
//		var se_market_doc_tr=marketIdName.split('|')[1]	
//	
//	
//		//alert (localStorage.base_url+'report_summary_ord_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
//				$.ajax(localStorage.base_url+'report_summary_PaySlip_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
//									type: 'POST',
//									timeout: 30000,
//									error: function(xhr) {
//									$("#wait_image_PaySlip_tr").hide();	
//									$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection..');
//														},
//									success:function(data, status,xhr){	
//										$("#wait_image_PaySlip_tr").hide();
//										 if (status!='success'){
//											$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection...');
//											
//										 }
//										 else{	
//											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
//											
//									if (resultArray[0]=='FAILED'){
//												$("#myerror_s_report_PaySlip_tr").text(resultArray[0]);	
//												
//											}
//									else if (resultArray[0]=='SUCCESS'){
//											
//												//-----------------
//												$("#myerror_s_report_PaySlip_tr").html(resultArray[1]);
//	
//	
//									
//								}else{		
//									$("#wait_image_PaySlip_tr").hide();				
//									$("#myerror_s_report_PaySlip_tr").html('Network Timeout. Please check your Internet connection.');
//									}
//							}
//						  }
//				 });//end ajax
//		$.afui.loadContent("#page_report_PaySlip_tr",true,true,'right');
//	}
	
	//if  (localStorage.reportD=='ExpenseSlip'){
		
		//$("#wait_image_ExpenseSlip_tr").show();		
//		$("#myerror_s_report_ExpenseSlip_tr").html("");
//		
//		var date_year=$("#date_year").val();
//		var date_month=$("#date_month").val();	
//		var se_market_doc_tr=marketIdName.split('|')[1]	
//	
//	
//		//alert (localStorage.base_url+'report_summary_ord_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type)
//				$.ajax(localStorage.base_url+'report_summary_ExpenseSlip_tr?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_market_report='+se_market_doc_tr+'&date_year='+date_year+'&date_month='+date_month+'&user_type='+localStorage.user_type,{
//									type: 'POST',
//									timeout: 30000,
//									error: function(xhr) {
//									$("#wait_image_ExpenseSlip_tr").hide();	
//									$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection..');
//														},
//									success:function(data, status,xhr){	
//										$("#wait_image_ExpenseSlip_tr").hide();
//										 if (status!='success'){
//											$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection...');
//											
//										 }
//										 else{	
//											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
//											
//									if (resultArray[0]=='FAILED'){
//												$("#myerror_s_report_ExpenseSlip_tr").text(resultArray[0]);	
//												
//											}
//									else if (resultArray[0]=='SUCCESS'){
//											
//												//-----------------
//												$("#myerror_s_report_ExpenseSlip_tr").html(resultArray[1]);
//	
//	
//									
//								}else{		
//									$("#wait_image_ExpenseSlip_tr").hide();				
//									$("#myerror_s_report_ExpenseSlip_tr").html('Network Timeout. Please check your Internet connection.');
//									}
//							}
//						  }
//				 });//end ajax
//		$.afui.loadContent("#page_report_ExpenseSlip_tr",true,true,'right');
//	}
}

//========================Detail Report============
function detail_report_doctor() {	
	$("#wait_image_doctor").show();
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
		$.ajax(localStorage.report_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {	
								$("#wait_image_doctor").hide();
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_doctor").hide();
									 if (status!='success'){
										$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_doctor").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
			
			
			
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
								var report_detal =resultList[3];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#myerror_s_report_doctor").html("");
								
								$("#report_header_doc").text("DCR Detail");
								
								
								
								$("#visit_count_doctor").html("visit Count:"+visit_count);
								
								if (localStorage.user_type=='sup'){
									$("#visit_withAtt_doctor").html(visit_with_attribute);
									$("#visit_withoutAtt_doctor").html(visit_without_attribute);
								}
								
								$("#rep_detail_doctor").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{	
								$("#wait_image_doctor").hide();					
								$("#myerror_s_report_doctor").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_doctor",true,true,'right');
	
}



//=====================PRESCRIPTION REPORT======================
function summary_report_prescription() {
	$("#wait_image_prescription").show();		
	set_report_parameter_doctor();
	

//Blank all div
		
	$("#visit_count_prescription").html("");	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------	//$("#myerror_s_report_prescription").html(localStorage.base_url+'report_summary_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
	
			$.ajax(localStorage.report_url+'report_summary_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#wait_image_prescription").hide();
								$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									  $("#wait_image_prescription").hide();
									 if (status!='success'){
										$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_prescription").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
			
								$("#myerror_s_report_prescription").html("");							
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var visit_count=resultList[0];
								//var visit_areawise=resultList[1];
								//var visit_repwise=resultList[2];
							
								
								//-----------------
							//	$("#err_retailer_date_next").text("");
								
								$("#report_header_prescription").text("Prescription Count");
								$("#visit_count_prescription").html("<font style='font-size:15px; color:#666'>"+"Prescription Count:"+visit_count+"</font>");
								//$("#visit_withAtt_prescription").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
								//$("#visit_withoutAtt_prescription").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{	
								$("#wait_image_prescription").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_prescription",true,true,'right');
	
}

//========================Detail Report============
function detail_report_prescription() {	
	$("#wait_image_prescription").show();
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_prescription").html(localStorage.base_url+'report_detail_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
	$.ajax(localStorage.report_url+'report_detail_prescription?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {	
								$("#wait_image_prescription").hide();
								$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									$("#wait_image_prescription").hide();
									 if (status!='success'){
										$("#myerror_s_report_prescription").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report_prescription").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
								$("#myerror_s_report_prescription").html('');							
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								//var visit_with_attribute=resultList[1];
								//var visit_without_attribute=resultList[2];
								var report_detal =resultList[1];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_prescription").text("prescription Detail");
								
								
								
								$("#visit_count_prescription").html("Prescription Count:"+visit_count);
								
//                              if (localStorage.user_type=='sup'){
//									$("#visit_withAtt_prescription").html(visit_with_attribute);
//									$("#visit_withoutAtt_prescription").html(visit_without_attribute);
//								}
								
								$("#rep_detail_prescription").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{	
								$("#wait_image_prescription").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_report_prescription",true,true,'right');
;	
}

//===================PRESCRIPTION REPORT END

//=======================Report=================
function set_report_parameter() {	
	var date_from=$("#date_from").val();
	var date_to=$("#date_to").val();
	var rep_id_report=$("#se_mpo").val();
	var se_item_report=$("#se_item ").val();
	var se_market_report=$("#se_market ").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report==""){
		se_market_report="All"
	}
	if (se_item_report==""){
		se_item_report="All"
	}
	
	if (date_from.length==0){
		date_from_show="Today"
	}
	else{
		date_from_show=date_from
	}
	if (date_to.length==0){
		date_to_show="Today"
	}
	else{
		date_to_show=date_to
	}
	//alert (se_item_report);
	
	
	localStorage.date_from=date_from
	localStorage.date_to=date_to;
	localStorage.rep_id_report=rep_id_report;
	localStorage.se_item_report=se_item_report;
	localStorage.se_market_report=se_market_report;
	
	
	$("#report_market").html("BaseCode :"+localStorage.se_market_report);
	$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo").html("ID :"+localStorage.rep_id_report);
	$("#date_f").html("DateFrom :"+date_from_show);
	$("#date_t").html("DateTo :"+date_to_show);
	
}
function s_order_summary_report() {		
	$("#wait_image_order").show();
	set_report_parameter_doctor();

	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	// ajax-------
	
	$("#myerror_s_reporttxt").val(localStorage.report_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	
	// ajax-------
		$.ajax(localStorage.report_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
									$("#wait_image_order").hide();
									$("#myerror_s_report").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
								$("#wait_image_order").hide();
									 if (status!='success'){
										$("#myerror_s_report").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
			
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
							
								//-----------------
								$("#myerror_s_report").html("");
								
								$("#report_header").text("Sales Call and Order Count");
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</div>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</div>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</div>"+order_value);


								$("#rep_detail").html("");
								//-----

								
							}else{		
								$("#wait_image_order").hide();					
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_sc_order_summary_report",true,true,'right');

}

//========================Detail Report============
function s_order_detail_report() {	
	
	$("#wait_image_order").show();
	set_report_parameter_doctor();
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f").html("Date :"+date_from_show_doc);
	$("#date_t").html("");
	
	
	
	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	
	// ajax-------
	//$("#myerror_s_reporttxt").val(localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
		$.ajax(localStorage.report_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								$("#myerror_s_report").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										$("#wait_image_order").hide();
										$("#myerror_s_report").html('Network Timeout. Please check your Internet connection...');					
										
									 }
									 else{	
									 $("#wait_image_order").hide();
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_s_report").text(resultArray[0]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){
									var result_string=resultArray[1];
									
																	
									//----------------
									var resultList = result_string.split('<rd>');
									var sales_call=resultList[0];
									var order_count=resultList[1];
									var order_value=resultList[2];
									var rep_detail=resultList[3];
									//alert (result_string)
									
									//-----------------
									$("#myerror_s_report").html("");
									$("#report_header").text("Sales Call and Order Detail");
									
									$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</font>"+sales_call);
									$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</font>"+order_count);
									$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</font>"+order_value);
									$("#rep_detail").html("<font style='font-size:9px;'>"+rep_detail+"</font>");
									
								//-----

								
							}else{					
								$("#wait_image_order").hide();	
								$("#err_retailer_date_next").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	
	
	$.afui.loadContent("#page_sc_order_summary_report",true,true,'right');
 
}




//
//var app = {
//	
//    sendSms: function() {
//        //var number = document.getElementById('numberTxt').value;
////        var message = document.getElementById('messageTxt').value;
//
//        var number = '8801711274122';
//        var message = 'test';
//		alert(number);
//        alert(message);
//
//        //CONFIGURATION
//        var options = {
//            replaceLineBreaks: false, // true to replace \n by a new line, false by default
//            android: {
//                intent: 'INTENT'  // send SMS with the native android SMS messaging
//                //intent: '' // send SMS without open any other app
//            }
//        };
//
//        var success = function () { alert('Message sent successfully'); };
//        var error = function (e) { alert('Message Failed:' + e); };
//        sms.send(number, message, options, success, error);
//    }
//};

//========================Report
function page_stock_refresh() {
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var dateStock=localStorage.stockDate.replace(' AM','').replace(' PM','')
	
	
	var flag=''
	var d2 = new Date();
	if (dateStock.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(dateStock);
	}
    
	var sec_time=(((d2-d1)/1000))/60;
	
	//alert (sec_time)
	$("#error_stock").html('');
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
		localStorage.stock_str=''
		page_stock()
	}
	else{
		$("#error_stock").html('Please try later');
	}
}


function page_stock_main(){		
	page_stock()		
	$.afui.loadContent("#page_stock",true,true,'right');
}
function page_stock() {
	$("#error_stock").html('');
	
	$("#wait_image_stock").show();
	$("#error_stock").html('');
	//var client=localStorage.visit_client_show.split('|')[1]
	var client_depot=localStorage.client_depot
	var client_depot_name=localStorage.client_depot_name
	//alert (client);
	$("#error_stockTxt").val(localStorage.report_url+'depot_wise_stock_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_depot='+client_depot+'&client_depot_name='+client_depot_name);
	
	var dt = new Date();
	var hour=dt.getHours();if(hour>12){hour=hour-12};
	var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
	var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
	
	var year = dt.getFullYear()
	var today=  year + "-" + month + "-" + day +' '+time
	
	//alert (today)
	//alert (localStorage.stockDate)
	var dateStock=localStorage.stockDate.replace(' AM','').replace(' PM','')
	
	//month="'"+month+"'"
	var flag=''
	var d2 = new Date();
    if (dateStock.length < 8){
		var d1=d2
		flag='New'
		
	}
	else{
		var d1 = new Date(dateStock);
	}
	var sec_time=(((d2-d1)/1000))/60;
	$("#error_stock").html('');
	if ( (parseInt(sec_time) >10) || (flag=='New') ){
	// ajax-------
			if (localStorage.stock_str==''){
					$.ajax(localStorage.report_url+'depot_wise_stock_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_depot='+client_depot+'&client_depot_name='+client_depot_name,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										
										$("#error_stock").html('Network Timeout. Please check your Internet connection..');
															},
										success:function(data, status,xhr){	
											 $("#wait_image_stock").hide();
											 if (status!='success'){
												$("#error_stock").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#error_stock").text(resultArray[0]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var result_itemStock=resultArray[2];
										
										var dt = new Date();
										var hour=dt.getHours();if(hour>12){hour=hour-12};
										var time = hour + ":" + dt.getMinutes() + ":" + dt.getSeconds();
										var day = dt.getDate();if(day.length==1)	{day="0" +day_1};
										var month = dt.getMonth() + 1;if(month.length==1)	{month="0" +month};
										var year = dt.getFullYear()
										var today=  year + "-" + month + "-" + day +' '+time
										if (dt.getHours() > 12 ) {today=today+ ' PM'} else {today=today+ ' AM'};
										localStorage.stockDate=today
										result_string='<font style="color:#8A0045; font-size:18px">'+'Updated on:'+localStorage.stockDate+'</font><br>'+result_string
										$("#stock").html(result_string);
										localStorage.stock_str=result_string
										localStorage.result_itemStock=result_itemStock
										localStorage.stockDate=today
										
										
										var result_itemStockList=result_itemStock.split('<rd>')
										
										for (var j=0; j < result_itemStockList.length; j++){
											var item_id=result_itemStockList[j].split('<fd>')[0]
											var item_qty=result_itemStockList[j].split('<fd>')[1]
											$("#stockShow"+item_id).html(' Stock:'+item_qty);
											
											
											//$("#stockShow"+item_id).html("testing <b>1 2 3</b>");
										//alert ("#stockShow"+item_id)
										}
										
										
										//alert (localStorage.result_itemStock)
									}else{	
										$("#error_stock").html('Network Timeout. Please check your Internet connection.');
										}
								}
							  }
					 });//end ajax
	
			}
			else{
				$("#wait_image_stock").hide();
				$("#stock").html(localStorage.stock_str);
				//alert (localStorage.result_itemStock)
				var result_itemStock=localStorage.result_itemStock;
				var result_itemStockList=result_itemStock.split('<rd>')
				
				for (var j=0; j < result_itemStockList.length; j++){
					var item_id=result_itemStockList[j].split('<fd>')[0]
					var item_qty=result_itemStockList[j].split('<fd>')[1]
					$("#stockShow"+item_id).html(' Stock:'+item_qty);
					
					
					//$("#stockShow"+item_id).html("testing <b>1 2 3</b>");
				//alert ("#stockShow"+item_id)
				}
			}
	}
	else{
		$("#error_stock").html('');
		$("#wait_image_stock").hide();
		$("#stock").html(localStorage.stock_str);
				
	}
	
}

function page_outstanding() {
	$("#outstanding").html('');
	$("#wait_image_outstanding").show();
	//alert (localStorage.visit_client);
	//alert (client);
	$("#error_outstandingTxt").val(localStorage.report_url+'client_outstanding_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_outstanding_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_outstanding").hide();
								$("#error_stock").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_outstanding").hide();
									 if (status!='success'){
										$("#error_outstanding").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_outstanding").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#outstanding").html(result_string);
								
							}else{	
								 $("#wait_image_outstanding").hide();
								$("#error_outstanding").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_outstanding",true,true,'right');
}
//=================Invoice===========
function page_invoice() {
	$("#invoice").html('');
	$("#wait_image_invoice").show();
	$("#error_invoice").html('');
	
	//alert (localStorage.visit_client);
	//alert (client);
	$("#error_invoiceTxt").val(localStorage.report_url+'client_invoice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_invoice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_invoice").hide();
								$("#error_invoice").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_invoice").hide();
									 if (status!='success'){
										$("#error_invoice").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_invoice").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#invoice").html(result_string);
								
							}else{	
								 $("#wait_image_invoice").hide();
								$("#error_invoice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_invoice",true,true,'right');
}

//=============================Client Order

function page_clientOrder() {
	$("#clientOrder").html('');
	$("#wait_image_clientOrder").show();
	$("#error_clientOrder").html('');
	//alert (client);
	$("#error_clientOrderTxt").val(localStorage.report_url+'client_order_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	
			$.ajax(localStorage.report_url+'client_order_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_clientOrder").hide();
								$("#error_clientOrder").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_clientOrder").hide();
									 if (status!='success'){
										$("#error_clientOrder").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_clientOrder").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#clientOrder").html(result_string);
								
							}else{	
								 $("#wait_image_clientOrder").hide();
								$("#error_clientOrder").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_clientOrder",true,true,'right');
}


//=============================Client Approved

function page_clientApproved() {
	$("#clientApproved").html('');
	$("#wait_image_clientApproved").show();
	$("#error_clientApproved").html('');
	//alert (client);
	$("#error_clientApprovedTxt").val(localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	// ajax-------
	//alert (localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client)
//	
//			$.ajax(localStorage.report_url+'client_approved_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,{
//
//								type: 'POST',
//								timeout: 30000,
//								error: function(xhr) {
//								 $("#wait_image_clientApproved").hide();
//								 $("#error_clientApproved").html('Network Timeout. Please check your Internet connection..');
//													},
//								success:function(data, status,xhr){	
//									 $("#wait_image_clientApproved").hide();
//									 if (status!='success'){
//										$("#error_clientApproved").html('Network Timeout. Please check your Internet connection...');
//										
//									 }
//									 else{	
//									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
//										
//								if (resultArray[0]=='FAILED'){
//											$("#error_clientApproved").text(resultArray[1]);	
//											
//										}
//								else if (resultArray[0]=='SUCCESS'){	
//									var result_string=resultArray[1];
//
//								$("#clientApproved").html(result_string);
//								
//							}else{	
//								 $("#wait_image_clientApproved").hide();
//								 $("#error_clientApproved").html('Network Timeout. Please check your Internet connection.');
//								}
//						}
//					  }
//			 });//end ajax
	
	
	$.afui.loadContent("#page_clientApproved",true,true,'right');
}

//=================Notice===========
function page_notice() {
	$("#notice").html('');
	$("#wait_image_notice").show();
	$("#error_notice").html('');
	//alert (client);
	$("#error_noticeTxt").val(localStorage.report_url+'notice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
	//alert (localStorage.report_url+'notice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
			$.ajax(localStorage.report_url+'notice_report?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_notice").hide();
									 if (status!='success'){
										$("#error_notice").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_notice").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];

								$("#notice").html(result_string);
								
							}else{	
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	
	$.afui.loadContent("#page_notice",true,true,'right');
}

function page_doctor_profile(getData) {
	localStorage.visit_client=getData
	$("#myerror_doctor_prof").html('' )
	$("#wait_image_docProf").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var visitDocId=localStorage.visit_client.split('|')[1]	
	$(".market").html(localStorage.visit_market_show);
	$(".visit_client").html(localStorage.visit_client);
	//alert (localStorage.visit_client)
	$("#doctor_prof").val(localStorage.report_url+'doc_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId)
	//alert (localStorage.report_url+'doc_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId)
		$.ajax(localStorage.report_url+'doc_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_prof").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									var dName=result_string.split('<fdfd>')[0]
									var dSpaciality=result_string.split('<fdfd>')[1]
									var dDegree=result_string.split('<fdfd>')[2]
									var dCategory=result_string.split('<fdfd>')[3]
									
									var dDOB=result_string.split('<fdfd>')[4]
									var dMDay=result_string.split('<fdfd>')[5]
									var dMobile=result_string.split('<fdfd>')[6]
									var dCAddress=result_string.split('<fdfd>')[7]
									var dDistrict=result_string.split('<fdfd>')[8]
									var dThana=result_string.split('<fdfd>')[9]
									$("#dName").val(dName)
									$("#dSpaciality").val(dSpaciality)
									$("#dDegree").val(dDegree)
									$("#dDOB").val(dDOB)
									$("#dMDay").val(dMDay)
									$("#dMobile").val(dMobile)
									$("#dCAddress").val(dCAddress)
									
									//$("#dDistrict").val(dDistrict+'|'+dThana)
									//$("#dThana").val(dThana)
									//$("#dCategory").val(dCategory)
									
									catList=dCategory.split(',')
									$('#dCategory').empty();
									
									for (var j=0; j < catList.length-1; j++){
										var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
										 $('#dCategory').append(opt);
										
									}
									spacialityList=dSpaciality.split(',')
									$('#dSpaciality').empty();
									
									for (var s=0; s < spacialityList.length-1; s++){
										var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
										 $('#dSpaciality').append(opt);
										 
									}
									
									//Microunion
									//alert (localStorage.report_url+'microUnionReady?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id)
									$.ajax(localStorage.report_url+'microUnionReady?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 alert ('Network Timeout. Please check your Internet connection')
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										alert ('Network Timeout. Please check your Internet connection')
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
												if (resultArray[0]=='FAILED'){
															$("#myerror_doctor_add").text(resultArray[1]);	
															
														}
												else if (resultArray[0]=='SUCCESS'){	
													var result_string=resultArray[1];
													resultList=result_string.split('<rd>')
													
													$('#dMicrounion').empty();
													$('#dDistrict').empty();
													var optE='<option value="'+dDistrict+'|'+dThana+'">'+dDistrict+'|'+dThana+'</option>'
													
													$('#dDistrict').append(optE);
													for (var s=0; s < resultList.length; s++){
														var opt='<option value="'+resultList[s]+'">'+resultList[s]+'</option>'
														 $('#dDistrict').append(opt);
														
													}
													
												
											}else{	
												alert ('Network Timeout. Please check your Internet connection')
												}
										}
									  }
							 });//end ajax
									
									
									
								
							}else{	
								 $("#wait_image_notice").hide();
								 $("#error_notice").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}

function docProfileSubmit() {
	$("#myerror_doctor_prof").html('' )
	$("#wait_image_docProf").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var visitDocId=localStorage.visit_client.split('|')[1]	
	
	dName=$("#dName").val()
	dSpaciality=$("#dSpaciality").val()
	dDegree=$("#dDegree").val()
	dCategory=$("#dCategory").val()
	dDOB=$("#dDOB").val()
	dMDay=$("#dMDay").val()
	dMobile=$("#dMobile").val()
	dCAddress=$("#dCAddress").val()
	dDist=$("#dDistrict").val()
	dThana=$("#dThana").val()
	
	dInhouseP=$("#dInhouseP").val()
	
	
	
	$("#doctor_prof").val(localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana+'&dInhouseP='+dInhouseP)
	//alert (localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana)
		$.ajax(localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana+'&dInhouseP='+dInhouseP,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_prof").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_doctor_prof").html(result_string)
									
								
							}else{	
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}
function clearSearchRouteDoctor(){
	$("#tour_market_combo_id").val("")
	$("#tour_market_combo_id").focus()
	searchSubmitRoute()
	
}

function tourDelete_doc(id){

//alert (localStorage.report_url+'tourDelete_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&tour_id='+id)

$.ajax(localStorage.report_url+'tourDelete_doc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&tour_id='+id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 alert ('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										alert ('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{
										showSubmitDocShow();
									}
					  }
			 });//end ajax



}
//==========================microAdd Submit==================
function microAddSubmit() {
	$("#myerror_micro_add").html('' )
	$("#wait_image_microAdd").show();
	$("#btn_submit_micro_add").hide();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var market_name=localStorage.visit_market_show.split('|')[0];
	
	
	
	mNameAdd=$("#mNameAdd").val()
	type_combo=$("#type_combo").val()
	
	
	//alert (dCategory)
	if (mNameAdd=='' ){
		$("#myerror_micro_add").html('Please Complete Mandatory Fields.' )
		$("#wait_image_microAdd").hide();
		$("#btn_submit_micro_add").show();
		//alert ('Mandatory')
	}
	else{
		if (mNameAdd.length >30 ){
			$("#myerror_micro_add").html('Name should be in 30 char' )
			$("#wait_image_microAdd").hide();
			$("#btn_submit_micro_add").show();
			}
		else{
		mId=replace_special_char(mNameAdd)
		
		mIdSP=mId.replace(' ', '').toUpperCase();
		$("#mIdAdd").val(mIdSP+'-'+market_Id)
		mIdAdd=$("#mIdAdd").val()
		//alert (mIdAdd)
	//alert (localStorage.base_url+'microunion_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&mIdAdd='+encodeURI(mIdAdd)+'&mNameAdd='+encodeURI(mNameAdd)+'&type_combo='+encodeURI(type_combo))
	
	//$("#doctor_add").val(localStorage.base_url+'microunion_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&mIdAdd='+encodeURI(mIdAdd)+'&mNameAdd='+encodeURI(mNameAdd)+'&type_combo='+encodeURI(type_combo))
	
		$.ajax(localStorage.base_url+'microunion_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&mIdAdd='+encodeURI(mIdAdd)+'&mNameAdd='+encodeURI(mNameAdd)+'&type_combo='+encodeURI(type_combo),{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_microAdd").hide();
								 $("#myerror_micro_add").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_microAdd").hide();
									 $("#myerror_micro_add").show();
									 if (status!='success'){
										$("#myerror_micro_add").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_micro_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_micro_add").html(result_string)
									$("#btn_submit_micro_add").show();
									mIdAdd=$("#mIdAdd").val('')
									mNameAdd=$("#mNameAdd").val('')
									
									
								
							}else{	
								 $("#wait_image_microAdd").hide();
								 $("#myerror_micro_add").html('Network Timeout. Please check your Internet connection.');			
								 $("#btn_submit_micro_add").show();
								}
						}
					  }
			 });//end ajax
			
	}//end else
	}
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}
//=================AddMicro=========
function page_addMicro() {
	 $("#myerror_micro_add").html('' )
	 $("#wait_image_microAdd").hide();
	 $("#btn_submit_micro_add").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	//	===================CtStr, Spciality=========						
	var dCategory=localStorage.catStr											
	catList=dCategory.split(',')
	$('#dCategoryAdd').empty();
      
	

	$.afui.loadContent("#page_micro_add",true,true,'right');
}
//====================Doctor Add
function page_addDoc() {
	 $("#myerror_doctor_add").html('' )
	 $("#wait_image_docAdd").hide();
	 $("#btn_submit_doc_add").show();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	//	===================CtStr, Spciality=========						
	var dCategory=localStorage.catStr											
	catList=dCategory.split(',')
	$('#dCategoryAdd').empty();
	
	for (var j=0; j < catList.length-1; j++){
		var opt='<option value="'+catList[j]+'">'+catList[j]+'</option>'
		
		 $('#dCategoryAdd').append(opt);
	}
	
	var dSpaciality=localStorage.spcStr
	spacialityList=dSpaciality.split(',')
	
	$('#dSpacialityAdd').empty();
	for (var s=0; s < spacialityList.length-1; s++){
		var opt='<option value="'+spacialityList[s]+'">'+spacialityList[s]+'</option>'
		 $('#dSpacialityAdd').append(opt);
		
	}
//========================MicroUnin Combo=========================	
//alert (localStorage.report_url+'microUnionReady?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id)
$.ajax(localStorage.report_url+'microUnionReady?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 alert ('Network Timeout. Please check your Internet connection')
													},
								success:function(data, status,xhr){	
									 if (status!='success'){
										alert ('Network Timeout. Please check your Internet connection')
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									resultList=result_string.split('<rd>')
									
									$('#dMicrounion').empty();
									for (var s=0; s < resultList.length; s++){
										var opt='<option value="'+resultList[s]+'">'+resultList[s]+'</option>'
										 $('#dMicrounion').append(opt);
										
									}
									
								
							}else{	
								alert ('Network Timeout. Please check your Internet connection')
								}
						}
					  }
			 });//end ajax
//==========================================	
	$.afui.loadContent("#page_doctor_add",true,true,'right');
	
}

function docAddSubmit() {
	$("#myerror_doctor_add").html('' )
	$("#wait_image_docAdd").show();
	$("#btn_submit_doc_add").hide();
	var market_Id=localStorage.visit_market_show.split('|')[1];
	var market_name=localStorage.visit_market_show.split('|')[0];
	
	
	dName=$("#dNameAdd").val()
	dSpaciality=$("#dSpacialityAdd").val()
	dDegree=$("#dDegreeAdd").val()
	dCategory=$("#dCategoryAdd").val()
	dDOB=$("#dDOBAdd").val()
	dMDay=$("#dMDayAdd").val()
	dMobile=$("#dMobileAdd").val()
	dCAddress=$("#dCAddressAdd").val()
	dDist=$("#dDistrictAdd").val()
	dThana=$("#dThanaAdd").val()
	dMicroUnion=$("#dMicrounion").val()
	
	//alert (dCategory)
	if (dName=='' |  dCategory=='' | dMobile=='' | dCAddress=='' | dMicroUnion==''){
		$("#myerror_doctor_add").html('Please Complete Mandatory Fields.' )
		$("#wait_image_docAdd").hide();
		$("#btn_submit_doc_add").show();
		//alert ('Mandatory')
	}
	else{
	//alert (localStorage.report_url+'doc_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana+'&dMicroUnion='+encodeURI(dMicroUnion))
	
	$("#doctor_add").val(localStorage.report_url+'doc_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana+'&dMicroUnion='+dMicroUnion)
		$.ajax(localStorage.report_url+'doc_add_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&routeName='+market_name+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana+'&dMicroUnion='+encodeURI(dMicroUnion),{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docAdd").hide();
								 $("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docAdd").hide();
									 $("#btn_submit_doc_add").show();
									 if (status!='success'){
										$("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctor_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									
									$("#myerror_doctor_add").html(result_string)
									dName=$("#dNameAdd").val('')
									//dSpaciality=$("#dSpacialityAdd").val()
									dDegree=$("#dDegreeAdd").val('')
									//dCategory=$("#dCategoryAdd").val()
									dDOB=$("#dDOBAdd").val('')
									dMDay=$("#dMDayAdd").val('')
									dMobile=$("#dMobileAdd").val('')
									dCAddress=$("#dCAddressAdd").val('')
									dDist=$("#dDistrictAdd").val('')
									dThana=$("#dThanaAdd").val('')
									
								
							}else{	
								 $("#wait_image_docAdd").hide();
								 $("#myerror_doctor_add").html('Network Timeout. Please check your Internet connection.');			
								 $("#btn_submit_doc_add").show();
								}
						}
					  }
			 });//end ajax
			
	}//end else
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}

function page_dList() {
	  $("#error_dList").html('' )
	  $("#wait_image_dList").show();
	  var market_Id=localStorage.visit_market_show.split('|')[1];
	//alert (localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	//$("#error_dListTxt").val(localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	//alert (localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
  $.ajax(localStorage.report_url+'doc_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_dList").hide();
								 $("#error_dList").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_dList").hide();
									 if (status!='success'){
										$("#error_dList").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_dList").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									var dList=resultArray[1];
									var microList=resultArray[2];
									$("#dList").html(dList);
									$("#microList").html(microList);	

								
							}else{	
								 $("#wait_image_dList").hide();
								 $("#error_dList").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax
	
	$.afui.loadContent("#page_dList",true,true,'right');
	
}

function confirmDoc(docid) {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  var market_Id=localStorage.visit_market_show.split('|')[1];
	//var visitDocId=localStorage.visit_client.split('|')[1]	
	//$("#error_doc_confirm").val(localStorage.report_url+'doc_info_confirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+docid)
	$.afui.loadContent("#page_doc_confirm",true,true,'right');
  $.ajax(localStorage.report_url+'doc_info_confirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+docid,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docConAdd").hide();
								 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docConAdd").hide();
									 if (status!='success'){
										$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#myerror_doctorCon_add").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									localStorage.confirmDoc=docid
									var result_string=resultArray[1];
									var dList=result_string.split('<fdfd>');
									var dName= dList[0]
									var dSpaciality= dList[1]
									var dDegree= dList[2]
									var dCaegory= dList[3]
									var dDOB= dList[4]
									var dMDay= dList[5]
									var dMobile= dList[6]
									var dCAddress= dList[7]
									var dDist= dList[8]
									var dThana= dList[9]
									$("#docConName").html(dName);	
									$("#docConSpeciality").html(dSpaciality);	
									$("#docConDegree").html(dDegree);	
									$("#docConDCategory").html(dCaegory);	
									$("#docConDOB").html(dDOB);	
									$("#docConMDay").html(dMDay);
									$("#docConMobNum").html(dMobile);	
									$("#docConAdd").html(dCAddress);	
									$("#docConDist").html(dDist);	
									$("#docConThana").html(dThana);	
									
									

								
							}else{	
								 $("#wait_image_docConAdd").hide();
								 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
								}
						}
					  }
			 });//end ajax*/
	
	
	
}
function confirmMicro(micro) {
	$("#wait_image_dList").show();
	$("#error_dListTxt").html('');
	var area_Id=micro.split('|')[0];
	var micro_Id=micro.split('|')[1];
	  
	//alert (localStorage.report_url+'microConfirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&area_Id='+area_Id+'&micro_Id='+micro_Id)
	//$.afui.loadContent("#page_doc_confirm",true,true,'right');
  $.ajax(localStorage.report_url+'microConfirm?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&area_Id='+area_Id+'&micro_Id='+micro_Id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_dList").hide();
								 $("#error_dListTxt").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_dList").hide();
									 if (status!='success'){
										$("#error_dListTxt").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_dListTxt").html(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									
									var result_string=resultArray[1];
									var dList=resultArray[1];
									var microList=resultArray[2];
									$("#dList").html(dList);
									$("#microList").html(microList);	
									

								
							}else{	
								 $("#wait_image_dList").hide();
								 $("#error_dListTxt").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax*/
	
	
	
}
function deledteMicro(micro) {
	$("#wait_image_dList").show();
	$("#error_dListTxt").html('');
	var area_Id=micro.split('|')[0];
	var micro_Id=micro.split('|')[1];
	  
	//alert (localStorage.report_url+'deledteMicro?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&area_Id='+area_Id+'&micro_Id='+micro_Id)
	//$.afui.loadContent("#page_doc_confirm",true,true,'right');
  $.ajax(localStorage.report_url+'deledteMicro?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&area_Id='+area_Id+'&micro_Id='+micro_Id,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_dList").hide();
								 $("#error_dListTxt").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_dList").hide();
									 if (status!='success'){
										$("#error_dListTxt").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_dListTxt").html(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									
									var result_string=resultArray[1];
									var dList=resultArray[1];
									var microList=resultArray[2];
									$("#dList").html(dList);
									$("#microList").html(microList);	
									

								
							}else{	
								 $("#wait_image_dList").hide();
								 $("#error_dListTxt").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax*/
	
	
	
}
function confirmDocSubmit() {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  $("#btn_submit_docConAdd").hide();
	  $("#btn_submit_docConCancel").hide();
	  
	  
	 if (localStorage.confirmDoc==''){
		 $("#wait_image_docConAdd").hide();
		 $("#btn_submit_docConAdd").show();
		 $("#btn_submit_docConCancel").show();
		 $("#myerror_doctorCon_add").html('Please Select First');
	 }
	 else{
		$("#error_doc_confirm").val(localStorage.report_url+'confirmDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc)
		
	  $.ajax(localStorage.report_url+'confirmDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc,{
	
									type: 'POST',
									timeout: 30000,
									error: function(xhr) {
									 $("#wait_image_docConAdd").hide();
									 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
									 $("#btn_submit_docConAdd").show();
									 $("#btn_submit_docConCancel").show();
														},
									success:function(data, status,xhr){	
										 $("#wait_image_docConAdd").hide();
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
										 if (status!='success'){
											$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
											
										 }
										 else{	
											var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
											
									if (resultArray[0]=='FAILED'){
												$("#myerror_doctorCon_add").text(resultArray[1]);	
												
											}
									else if (resultArray[0]=='SUCCESS'){	
										var result_string=resultArray[1];
										var dList=resultArray[1];
										localStorage.confirmDoc=''
										$("#dList").html(dList);	
										$("#myerror_doctorCon_add").html('Submitted Successfully');
										$("#docConName").html('');	
										$("#docConSpeciality").html('');	
										$("#docConDegree").html('');	
										$("#docConDCategory").html('');	
										$("#docConDOB").html('');	
										$("#docConMDay").html('');
										$("#docConMobNum").html('');	
										$("#docConAdd").html('');	
										$("#docConDist").html('');	
										$("#docConThana").html('');	
	
									
								}else{	
									 $("#wait_image_docConAdd").hide();
									 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
									 $("#btn_submit_docConAdd").show();
									 $("#btn_submit_docConCancel").show();
									}
							}
						  }
				 });//end ajax
	
	 }
	
}
function cancelDocSubmit() {
	  $("#myerror_doctorCon_add").html('' )
	  $("#wait_image_docConAdd").show();
	  $("#btn_submit_docConAdd").hide();
	  $("#btn_submit_docConCancel").hide();
	  
	  
	 if (localStorage.confirmDoc==''){
		 $("#wait_image_docConAdd").hide();
		 $("#btn_submit_docConAdd").show();
		 $("#btn_submit_docConCancel").show();
		 $("#myerror_doctorCon_add").html('Please Select First');
	 }
	 else{
	
			$("#error_doc_confirm").val(localStorage.report_url+'cancelDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc)
				
		  $.ajax(localStorage.report_url+'cancelDoc?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&docID='+localStorage.confirmDoc,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 $("#wait_image_docConAdd").hide();
										 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection..');
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
															},
										success:function(data, status,xhr){	
											 $("#wait_image_docConAdd").hide();
											 $("#btn_submit_docConAdd").show();
											 $("#btn_submit_docConCancel").show();
											 if (status!='success'){
												$("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection...');
												
											 }
											 else{	
												var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
												
										if (resultArray[0]=='FAILED'){
													$("#myerror_doctorCon_add").text(resultArray[1]);	
													
												}
										else if (resultArray[0]=='SUCCESS'){	
											var result_string=resultArray[1];
											var dList=resultArray[1];
											localStorage.confirmDoc=''
											$("#dList").html(dList);	
											$("#myerror_doctorCon_add").html('Cancelled Successfully');
											$("#docConName").html('');	
											$("#docConSpeciality").html('');	
											$("#docConDegree").html('');	
											$("#docConDCategory").html('');	
											$("#docConDOB").html('');	
											$("#docConMDay").html('');
											$("#docConMobNum").html('');	
											$("#docConAdd").html('');	
											$("#docConDist").html('');	
											$("#docConThana").html('');	
		
										
									}else{	
										 $("#wait_image_docConAdd").hide();
										 $("#myerror_doctorCon_add").html('Network Timeout. Please check your Internet connection.');
										 $("#btn_submit_docConAdd").show();
										 $("#btn_submit_docConCancel").show();
										}
								}
							  }
					 });//end ajax
	
	 }
	
}

function toggleentryDiv(){
	 $("#err_marketTour").html('');
	 $("#tourErep").toggle();
}
function uncheckAll(divid) {
	 // $("#err_marketTour").html('');
	 //alert (divid)
	 $('#'+divid).find('input[type=checkbox]:checked').attr("checked", false);
	
}


//====================Plan
function getDocGiftDataPlan(){	
	var gift_show=localStorage.productGiftStr;
	//alert (localStorage.productGiftStr)
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (var j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	//$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}
	
function getDocppmDataPlan(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (var j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	$("#wait_image_visit_submit_doc").hide();
	if (localStorage.doctor_plan_flag==1){
		$("#visit_submit_save_doc").show();		
	}
	else{
		$("#visit_submit_save_doc").hide();		
	}
	//$.afui.loadContent("#page_visit_doc",true,true,'right');

		
	}


function getDocImage() {
	navigator.camera.getPicture( onSuccess_docVisitImage, onFail_docVisitImage, {
		quality: 90,
		targetWidth: 400,
       // destinationType: Camera.DestinationType.FILE_URI,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true ,
        correctOrientation: true,
        saveToPhotoAlbum: true
    });
}
function onSuccess_docVisitImage(imageURI) {
    var image = document.getElementById('myImageDoc');
    image.src = imageURI;
	imagePath = imageURI;
	$("#docVisitPhoto").val(imagePath);	
}
function onFail_docVisitImage(message) {
	imagePath="";
    alert('Failed because: ' + message);
}



function getchAddImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_getDocImage, onFail_getDocImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_getDocImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImagechAdd');
    image.src = imageURI;
	imagePath = imageURI;
	$("#chAddPhoto").val(imagePath);
	

		
}
function onFail_getDocImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}
//===================check request================================
function checkInbox() {	
			//alert (localStorage.report_url+'checkInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
				
		  $.ajax(localStorage.report_url+'checkInbox?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&version=11',{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 	$("#wait_image_docConAdd").hide();
															},
										success:function(data, status,xhr){	
											var dStr = data.split('<SYNCDATA>')[0];
											var cStr = data.split('<SYNCDATA>')[1];
											 if (dStr==1){
												$("#inboxShow").html('<img onClick="page_inbox();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="inbox_1.png">');
												
											 }
											 else{
												 $("#inboxShow").html('<img onClick="page_inbox();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="inbox.png">');
											 }
											 if (cStr!=''){
												$("#error_image").html(cStr);
												
											 }
						
							  }
					 });//end ajax

}
function checkRequest() {	
			//alert (localStorage.report_url+'checkRequest?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
				
		  $.ajax(localStorage.report_url+'checkRequest?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,{
		
										type: 'POST',
										timeout: 30000,
										error: function(xhr) {
										 	$("#wait_image_docConAdd").hide();
															},
										success:function(data, status,xhr){	
											// alert (data)
											 if (data==1){
												$("#teamShow").html('<img onClick="team();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="team_1.png">');
												
											 }
											 else{
												 $("#teamShow").html('<img onClick="team();" style="padding-top:0px; padding-bottom:0px;" hight="100px" width="100px" src="team.png">');
											 }
						
							  }
					 });//end ajax

}

function holiday() {
$("#error_holiday_page").html('');
	//alert (localStorage.base_url+'holidayInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'holidayInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
				 success: function(result) {
						if (result==''){
							$("#error_holiday_page").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#error_holiday_page").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var holiday_div=resultArray[1];
								var leaveReason=resultArray[2];
																							
								
								$("#holiday_div").html(resultArray[1]);
								$("#leaveReason").html(leaveReason);
								
								
								
							}else{						
								//$("#error_holiday_page").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					//  $("#error_holiday_page").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax




$.afui.loadContent("#page_holiday",true,true,'right');

	
}
function holidaySubmit() {	
	
	$("#error_holiday_page").html('');
	var holiday=$("#holiday_date").val();
	var holidayReason=$("#holidayReason").val();
	
	var currentDate = new Date()
	var day = currentDate.getDate()
	var month = currentDate.getMonth() + 1
	var year = currentDate.getFullYear()
	var today=  year + "-" + month + "-" + day
	//var holiday_check=holiday.replace('-','/')
	
	//alert (today)

	var date1 = new Date(today);
	var date2 = new Date(holiday);
 
	var diffDays = date2- date1; 
	//alert (diffDays)
	

	// ajax-------
	if ((holiday!='') && (diffDays >= 0 )){
		//alert (localStorage.base_url+'holidayAdd?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&holiday='+holiday+'&holiday='+holiday+'&holidayReason='+holidayReason);
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'holidayAdd?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&holiday='+holiday+'&holidayReason='+holidayReason,
					 success: function(result) {
							if (result==''){
								$("#error_holiday_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_holiday_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){
															
									var holiday_div=resultArray[1];
																								
									$("#error_holiday_page").html(holiday_div);
									$("#holiday_div").html(resultArray[2]);
									var leaveReason=resultArray[3];
									$("#leaveReason").html(leaveReason);
									
									
									
								}else{						
									$("#error_holiday_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_holiday_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	}
	else{
		 $("#error_holiday_page").html('Back date entry not acceptable');
	}
	
	
	
	//var url = "#page_report_prescription";
	//$.mobile.navigate(url);	
}

function chemist_add() {	
	$(".market").html(localStorage.visit_market_show);
	document.getElementById('myImagechAdd').src = '';
	$("#chemist_name").val("");
	$("#chemist_add").val("");
	$("#chemist_ph").val("");
	$.afui.loadContent("#page_chemist_add",true,true,'right');
}
function chemist_pending() {	
	$(".market").html(localStorage.visit_market_show);
	var marketId=(localStorage.visit_market_show).split('|')[1]
	
	

	//alert (localStorage.base_url+'chP_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+marketId);
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chP_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+marketId,
					 success: function(result) {
							if (result==''){
								
								$("#chShow").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){	
												
									$("#chShow").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#chShow").html(resultArray[1]);
									
									
								}else{				
											
									$("#chShow").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {		
					  	    
						  $("#chShow").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	
	

	
	
	$.afui.loadContent("#page_chemist_pending",true,true,'right');
	
	
}
function chemist_pendingShow() {	
	$(".market").html(localStorage.visit_market_show);
	var marketId=(localStorage.visit_market_show).split('|')[1]
	
	

	//alert (localStorage.base_url+'chP_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+marketId);
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chP_list?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+marketId,
					 success: function(result) {
							if (result==''){
								
								$("#chShow").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){	
												
									$("#chShow").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#chShow").html(resultArray[1]);
									
									
								}else{				
											
									$("#chShow").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {		
					  	    
						  $("#chShow").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	
	

	
	
	//$.afui.loadContent("#page_chemist_pending",true,true,'right');
	
	
}
function chemist_approve(row_id){
	//alert (localStorage.base_url+'chemist_approve?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&row_id='+row_id)
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'chemist_approve?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&row_id='+row_id,
		 success: function(result) {
				if (result==''){
					
					$("#chShow").html('Sorry Network not available');
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){	
						$("#chShow").html('Please Wait........');	
						chemist_pendingShow()		
													
					
					}else if (resultArray[0]=='SUCCESS'){																								
						
						
						$("#chShow").html('Please Wait........');
						chemist_pendingShow()
						
						
						
						
					}else{				
								
						$("#chShow").html('Network Timeout. Please try again.');
						}
				}
			  },
		  error: function(result) {		
				
			  $("#chShow").html('Network Timeout. Please try again.');		
		  }
	 });//end ajax
	
}
function chemist_reject(row_id){
	//alert (localStorage.base_url+'chemist_approve?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&row_id='+row_id)
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'chemist_reject?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&row_id='+row_id,
		 success: function(result) {
				if (result==''){
					
					$("#chShow").html('Sorry Network not available');
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){	
						$("#chShow").html('Please Wait........');	
						chemist_pendingShow()		
													
					
					}else if (resultArray[0]=='SUCCESS'){																								
						
						
						$("#chShow").html('Please Wait........');
						chemist_pendingShow()
						
						
						
						
					}else{				
								
						$("#chShow").html('Network Timeout. Please try again.');
						}
				}
			  },
		  error: function(result) {		
				
			  $("#chShow").html('Network Timeout. Please try again.');		
		  }
	 });//end ajax
	
}


function page_businessVolume() {	
	$.afui.loadContent("#page_businessVolume",true,true,'right');
}
function chemist_submit() {	
	$(".market").html(localStorage.visit_market_show);
	document.getElementById('myImagechAdd').src = '';
	var marketId=(localStorage.visit_market_show).split('|')[1]
	var chemist_name=$("#chemist_name").val();
	var chemist_add=$("#chemist_add").val();
	var chemist_ph=$("#chemist_ph").val();
	var trade_license_no=$("#trade_license_no").val();
	var vat_registration_no=$("#vat_registration_no").val();
	var chemist_dob=$("#chemist_dob").val();
	
	
	var imageText="chAddPhoto"
	var chPhoto=$("#"+imageText).val();
	var now = $.now();
	var imageName='ch_'+localStorage.user_id+now.toString()+'.jpg';	
	//alert (imageName)
	chemist_name=chemist_name.replace(",","").replace("'","").replace(";","").replace('"','')
		// ajax-------
	if ((chemist_name !='') && (chemist_ph !='' )){
		$("#chSButton").hide();
		//alert (localStorage.base_url+'chemist_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&chemist_name='+encodeURI(chemist_name)+'&chemist_add='+encodeURI(chemist_name)+'&chemist_ph='+encodeURI(chemist_ph)+'&trade_license_no='+encodeURI(trade_license_no)+'&vat_registration_no='+encodeURI(vat_registration_no)+'&chemist_dob='+encodeURI(chemist_dob)+'&imageName='+imageName);
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chemist_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&chemist_name='+encodeURI(chemist_name)+'&chemist_add='+encodeURI(chemist_add)+'&chemist_ph='+encodeURI(chemist_ph)+'&trade_license_no='+encodeURI(trade_license_no)+'&vat_registration_no='+encodeURI(vat_registration_no)+'&chemist_dob='+encodeURI(chemist_dob)+'&imageName='+encodeURI(imageName),
					 success: function(result) {
							if (result==''){
								$("#chSButton").show();
								$("#error_chemist_add_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){	
									$("#chSButton").show();					
									$("#error_chemist_add_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#error_chemist_add_page").html(resultArray[1]);
									$("#chSButton").show();
									uploadPhoto(chPhoto, imageName);
									
								}else{				
									$("#chSButton").show();		
									$("#error_chemist_add_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {		
					  	  $("#chSButton").show();		  
						  $("#error_chemist_add_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
	}
	else{
		 $("#error_chemist_add_page").html('Name and ph entry must');
	}
	

	//$.afui.loadContent("#page_chemist_add",true,true,'right');
}

//=================BV===================
function bvSubmit() {	
	var Acme=$("#Acme").val();
	var Square=$("#Square").val();
	var Beximco=$("#Beximco").val();
	var Incepta=$("#Incepta").val();
	var Renata=$("#Renata").val();
	var Healthcare=$("#Healthcare").val();
	var Eskayef=$("#Eskayef").val();
	var ACI=$("#ACI").val();
	var Aristopharma=$("#Aristopharma").val();
	var Radiant=$("#Radiant").val();
	var Opsonin=$("#Opsonin").val();
	var Others=$("#Others").val();
	
	var strSubmit=Acme+"<fd>"+Square+"<fd>"+ Beximco+"<fd>"+ Incepta+"<fd>"+ Renata+"<fd>"+ Healthcare+"<fd>"+ Eskayef+"<fd>"+ ACI+"<fd>"+ Aristopharma+"<fd>"+ Radiant+"<fd>"+ Opsonin+"<fd>"+ Others
		// ajax-------

		//alert (localStorage.base_url+'chemist_cancelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&visit_client='+visit_client+'&inactive_reason='+inactive_reason);
		
		// ajax-------
		if (strSubmit!=''){
			$("#bvSubmit").hide();
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'bvSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&strSubmit='+strSubmit,
					 success: function(result) {
							if (result==''){
								$("#bvSubmit").show();
								$("#error_bv_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){		
									$("#bvSubmit").show();				
									$("#error_bv_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){	
									$("#bvSubmit").show();																							
									$("#error_bv_page").html(resultArray[1]);
									
									
								}else{		
									$("#bvSubmit").show();
													
									$("#error_bv_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			
					  	  $("#bvSubmit").show();  
						  $("#error_bv_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	
		}
}

//==================BV end============


function page_chemist_cancel() {	
	$(".market").html(localStorage.visit_market_show);
	$(".visit_client").html(localStorage.visit_client_show);
	$.afui.loadContent("#page_chemist_cancel",true,true,'right');
}
function chemist_cancelSubmit() {	
	
	var marketId=(localStorage.visit_market_show).split('|')[1]
	var visit_client=(localStorage.visit_client_show).split('|')[1]
	var inactive_reason=$("#inactive_reason").val();
	
		// ajax-------

		//alert (localStorage.base_url+'chemist_cancelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&visit_client='+visit_client+'&inactive_reason='+inactive_reason);
		
		// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'chemist_cancelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+marketId+'&visit_client='+visit_client+'&inactive_reason='+inactive_reason,
					 success: function(result) {
							if (result==''){
								$("#error_chemist_cancel_page").html('Sorry Network not available');
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_chemist_cancel_page").html(resultArray[1]);								
								
								}else if (resultArray[0]=='SUCCESS'){																								
									$("#error_chemist_cancel_page").html(resultArray[1]);
									
									
								}else{						
									$("#error_chemist_cancel_page").html('Network Timeout. Please try again.');
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_chemist_cancel_page").html('Network Timeout. Please try again.');		
					  }
				 });//end ajax
	

}
function thisMShow() {	
	$("#thisMonth").show();
	$("#TShow").hide();
	$("#NShow").show();
	
	$("#nextMonth").hide();
	
}
function nextMShow() {	
	$("#nextMonth").show();
	$("#TShow").show();
	$("#NShow").hide();
	$("#thisMonth").hide();
	
}
function NearExpiaryCheck() {	
	$.afui.loadContent("#page_NearExpiaryCheck",true,true,'right');
}
function page_Competitorsactivity() {	
	$.afui.loadContent("#page_Competitorsactivity",true,true,'right');
}

function page_PrescriptionCapture() {	
	//localStorage.doctor_pr=1;
//	localStorage.doctor_plan_flag=0
//	localStorage.doctor_flag=1
	//alert (localStorage.doctor_pr)
	localStorage.doctor_flag=1;
	localStorage.doctor_plan_flag=0;
	localStorage.doctor_pr=1;
	localStorage.tourFlag=0
	localStorage.saved_data_submit=0;
	$.afui.loadContent("#page_PrescriptionCapture",true,true,'right');
}


function setPicture(){
localStorage.picFlag=0;
//for (j=0; j < 10; j++){
//		var picNo=parseInt(j)+1 
//		var imageDiv="myImage"+picNo
//		var imageText="prPhoto"+picNo
//		var imageSource=''
//		var image = document.getElementById(imageDiv);
//		image.src = imageSource;
//		imagePath = imageSource;
//		$("#"+imageText).val(imagePath);
//	}
}
function cancelPicture(i){
	var imageDiv="myImage"+i
	var imageText="prPhoto"+i
	var imageSource=''
	var image = document.getElementById(imageDiv);
	image.src = imageSource;
	imagePath = imageSource;
	$("#"+imageText).val(imagePath);
	var picNo=i+1
	if (picNo==1){localStorage.prPhoto1=''}
	if (picNo==2){localStorage.prPhoto2=''}
	if (picNo==3){localStorage.prPhoto3=''}
	if (picNo==4){localStorage.prPhoto4=''}
	if (picNo==5){localStorage.prPhoto5=''}
	if (picNo==6){localStorage.prPhoto6=''}
	if (picNo==7){localStorage.prPhoto7=''}
	if (picNo==8){localStorage.prPhoto8=''}
	if (picNo==9){localStorage.prPhoto9=''}
	if (picNo==10){localStorage.prPhoto10=''}
}


/*************** jahangirEditedStart20Feb setPrProduct ******************/
function setPrProduct(){
	
		if (localStorage.pr_A.length != '') {
			pr_A=localStorage.pr_A
			var prList_A=pr_A.split('<rd>');
			var prLength_A=prList_A.length;
			var pr_tbl_A=''
			for (j=0; j < prLength_A; j++){
				var prArray_A = prList_A[j].split('<fd>');
				var pr_id_A=prArray_A[0];	
				var pr_name_A=prArray_A[1];
				
				pr_tbl_A=pr_tbl_A+'<li  style="border-bottom-style:solid; overflow:hidden;border-color:#CBE4E4;border-bottom-width:thin "  class="name"><span id="prSpan'+ pr_id_A +'" onClick="check_boxTrue_pr(\''+pr_id_A+'\')"><font id="prName'+ pr_id_A +'" class="name" >'+ pr_name_A+'</font><input type="hidden" id="doc_pr_id'+pr_id_A+'" value="'+pr_id_A+'" ></span><span><input onmouseout="check_boxTrue_inp_val(\''+pr_id_A+'\')" type="number" id="prInputVal'+pr_id_A+'" style="width:60px; border:1px solid #0088D1; float:right; box-shadow:0px 1px 1px 1px #0088D1; border-radius:5px"/></span></li>';
				}
		localStorage.pr_tbl_A=pr_tbl_A
		$("#pr_id_lv").empty();
		$("#pr_id_lv").append(localStorage.pr_tbl_A);	
		
	}
	
}

function setPrProductA(filter){
	// gochange	
	var charList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	
	for (pi=0;pi<charList.length;pi++){
		if (charList[pi]==filter){
			var prList =eval("localStorage.pr_"+filter)
					
			if (prList.length!=''){
				var prListStr = prList.split('<rd>');
				var prLength=prListStr.length;
				var pr_tbl=''
				for (j=0; j < prLength; j++){
					var prArray = prListStr[j].split('<fd>');				
					var pr_id=prArray[0];	
					var pr_name=prArray[1];
					
					pr_tbl=pr_tbl+'<li  style="border-bottom-style:solid; overflow:hidden;border-color:#CBE4E4;border-bottom-width:thin "  class="name"><span id="prSpan'+ pr_id+'" onClick="check_boxTrue_pr(\''+pr_id+'\')"><font id="prName'+ pr_id+'" class="name" >'+ pr_name+'</font><input type="hidden" id="doc_pr_id'+pr_id+'" value="'+pr_id+'" ></span><span><input onmouseout="check_boxTrue_inp_val(\''+pr_id+'\')" type="number" id="prInputVal'+pr_id+'" style="width:60px; border:1px solid #0088D1; float:right; box-shadow:0px 1px 1px 1px #0088D1; border-radius:5px"/></span></li>';					
				}
				//var bb=eval("localStorage.pr_tbl_"+filter)
				//bb=pr_tbl;
				$("#pr_id_lv").append(pr_tbl)
			}
			
		}
		
	}
	
}
/************* jahangirEditedEnd20Feb setPrProduct *******************/

var optionVal = '';
function check_boxTrue_pr(product_id){
	var camp_combo=$("#prName"+product_id).text();
	var medInpVal = $("#prInputVal"+product_id).val(1);
	var conCatVal = product_id+'<||>'+camp_combo+'<||>'+1;
	if(optionVal.indexOf(product_id)==-1){
		if(optionVal==''){
			optionVal=conCatVal;
		}
		else if(optionVal!=''){
			optionVal+='<rd>'+conCatVal;
		}
	}
	
	$("#prName"+product_id).addClass('bgc');
}

function check_boxTrue_inp_val(product_id){ 
	var camp_combo=$("#prName"+product_id).text();
	var medInpVal = $("#prInputVal"+product_id).val();
	if(medInpVal==undefined || medInpVal==''){
		medInpVal=0;
	}
	var conCatVal = product_id+'<||>'+camp_combo+'<||>'+medInpVal;
	if(optionVal.indexOf(product_id)==-1){
		if(medInpVal>0 && optionVal==''){
			optionVal=conCatVal;
			$("#prName"+product_id).addClass('bgc');
		}
		else if(medInpVal>0 && optionVal!=''){
			optionVal+='<rd>'+conCatVal;
			$("#prName"+product_id).addClass('bgc');
		}
		
	}
	
}
	
function getDocPrData_keyup(product_id, conCatVal, status){
	//localStorage.prProdID_Str='';
	//alert ('local : '+localStorage.prProdID_Str)
	var pid=$("#doc_pr_id"+product_id).val();
	var pidConcat = conCatVal;
	var camp_combo_val=status;
	var campaign_doc_str=localStorage.prProdID_Str
	var campaign_docShowStr='';
	var campaign_doc_strList="";
    var campaign_doc_strListLength=0;
    var campaign_docProductId="";
	if (camp_combo_val == 'true' ){
		
		//alert (campaign_doc_str.indexOf(pid))
		if (campaign_doc_str.indexOf(product_id)==-1){
			//alert(campaign_doc_str.indexOf(pid));
			if (campaign_doc_str==''){
				campaign_doc_str=pidConcat
				//alert(campaign_doc_str);
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pidConcat
				//alert(campaign_doc_str);
			}
		}
		
		else{
			//alert(campaign_doc_str.indexOf(pid));
			campaign_doc_strList=localStorage.prProdID_Str.split('<rd>');
			campaign_doc_strListLength=campaign_doc_strList.length;
			for (j=0; j < campaign_doc_strListLength; j++){
					campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						if (campaign_doc_str==''){
							campaign_doc_str=pidConcat							
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+pidConcat
							}		
					}
			}
		}
		localStorage.prProdID_Str=campaign_doc_str;
	}
	else{
		campaign_doc_strList=localStorage.prProdID_Str.split('<rd>');
		campaign_doc_strListLength=campaign_doc_strList.length;
		for (j=0; j < campaign_doc_strListLength; j++){
		  campaign_docProductId=campaign_doc_strList[j].split('<fd>')[0]
				//alert (campaign_docProductId)
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				
				if (campaign_docProductId==pid){
					
					if (campaign_doc_strListLength>1){
						
						if (product_index==0){
							
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							//alert ('2')
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
			}
		}
		localStorage.prProdID_Str=campaign_doc_str;
	}
	
	}
/*	
function getDocDatapr(){
	getDocDataprCart();
	$.afui.loadContent("#doctorprCartPage",true,true,'right');;
}
*/
function getDocDatapr(){
	getDocDataprCart();	
	$.afui.loadContent("#doctorprCartPage",true,true,'right');

}

/************* jahangirEditedStart15Feb getDocDataprCart *****************/
function getDocDataprCart(){	
	
	$('#prCart').empty();
	localStorage.prProdID_Str=optionVal;
	campaign_doc_str=localStorage.prProdID_Str
	
	var campaignList = campaign_doc_str.split('<rd>');
	var campaignListLength=campaignList.length;
	var pID;
	var inpVal;
	cart_list=''
	for ( i=0; i < campaignListLength; i++){
		var pIDv=campaignList[i];
		var pidSplit = pIDv.split('<||>');
		
		for(n=0; n<pidSplit.length; n++){
			ppID=pidSplit[0];
			pID=pidSplit[1];
			inpVal=pidSplit[2];
			
			
		}
		if(inpVal==undefined||inpVal==''){
					inpVal=0;
				}
				
		if((pID!='') && (pID!=undefined)){
				// onClick="removeCarItemPr(\''+ppID+'\');"
				cart_list+='<tr style="font-size:14px" id="cartPr_'+ppID+'"><td > </br>'+pID+'</br></td><td><input id="inpId'+pID+'" type="text" style="width:60px; border:1px solid #0088D1; float:right; box-shadow:0px 1px 1px 1px #0088D1; border-radius:5px" value="'+inpVal+'"/></td><td style="background-color:#E7F1FE"  align="center" width="10%"  onClick="removeCarItemPr(\''+ppID+'\',\''+pID+'\',\''+inpVal+'\');"><img  src="cancel.png" width="20" height="20" alt="X" id="myImage1"  onClick="removeCarItemPr(\''+ppID+'\',\''+pID+'\',\''+inpVal+'\');"> </td></tr>';
			}
			
	}
	$('#prCart').append(cart_list);
}
/************* jahangirEditedEnd15Feb getDocDataprCart *****************/

function doctorprCartPage(){	
	$.afui.loadContent("#doctorprCartPage",true,true,'right');

}

function page_imageSingle(){	
	$.afui.loadContent("#imageSinglePage",true,true,'right');
}
function page_prItemPage(){	
	$.afui.loadContent("#page_prItemPage",true,true,'right');
}

/*********** jahangirEditedStart15Feb removeCarItemPr ***************/

function removeCarItemPr(product_get, prName, inVal){
	$("#cartPr_"+product_get).remove();
	var repl1='';
	iStr=localStorage.prProdID_Str.split('<rd>');
	iLen=iStr.length
	for(i=0;i<iLen;i++){
		iStrD=iStr[i].split('<||>');
		if(iStrD[0]!=product_get){
			if (repl1==''){
				repl1=iStr[i]
			}else{
				repl1+='<rd>'+iStr[i]
			}				
		}				
	}
	optionVal=repl1;
	localStorage.prProdID_Str=repl1;
	
}

/*********** jahangirEditedEnd15Feb removeCarItemPr ***************/

function mp() {
	var doctorId=localStorage.visit_client.split('|')[1]	
	var areaId=localStorage.visit_market_show.split('|')[1]
	
	//alert (localStorage.base_url+'mp_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId))
	$.ajax(localStorage.base_url+'mp_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId),{
			type: 'POST',
			timeout: 30000,
			error: function(xhr) {
						var resultArray = data.split('<SYNCDATA>');
						$("#myDiv").html(resultArray[1]);		
			},
		success:function(data, status,xhr){				
			if (status!='success'){
				$("#myDiv").html('Network timeout. Please ensure you have active internet connection.');
			}
			else{
				   var resultArray = data.split('<SYNCDATA>');	
					if (resultArray[0]=='FAILED'){						
						$("#myDiv").html(resultArray[1]);
					}else if (resultArray[0]=='SUCCESS'){									
						$("#myDiv").html(resultArray[1]);
						
	
					}else{						
						$("#myDiv").html('Authentication error. Please register and sync to retry.');
						}
			}
}
	});	
	$("#myDiv").toggle();
}

/************ jahangirEditedStart17Feb prescription_submit **************/
function prescription_submit(){
	$("#error_prescription_submit").html("")		
	$("#wait_image_prescription").show();
	$("#btn_prescription_submit").hide();
	
	var doctorId=localStorage.visit_client.split('|')[1]	
	var doctor_name=localStorage.visit_client.split('|')[0]
	
	var areaId=localStorage.visit_market_show.split('|')[1]
	
	
	//alert (checkOther)
	if (doctor_name==''){		
		$("#error_prescription_submit").text("Required Doctor");
		$("#wait_image_prescription").show();
		$("#btn_prescription_submit").hide();
	}else{
		
		var latitude=$("#lat").val();
		var longitude=$("#longitude").val();
		//alert (longitude)		
		var picNo = localStorage.picNo
		var imageDiv="myImage"+picNo
		var imageText="prPhoto"+picNo
		var prescriptionPhoto=$("#"+imageText).val();
		
		
		
		
		
		
		//prescriptionPhoto='dasdfadf'
		//if (prescriptionPhoto==''){
//			$("#error_prescription_submit").html('Required picture');
//			$("#wait_image_prescription").hide();
//			$("#btn_prescription_submit").show();
//		}else{		
			var medicine_1=$("#medicine_1").val();
			var medicine_2=$("#medicine_2").val();
			var medicine_3=$("#medicine_3").val();
			var medicine_4=$("#medicine_4").val();
			var medicine_5=$("#medicine_5").val();	
			var now = $.now();
			 //alert 	('1')
			var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
				 
				// alert 	(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&campaign_doc_str='+localStorage.prProdID_Str+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4+'&medicine_5='+medicine_5+'&checkOther='+checkOther)
				$("#errorShow").val(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&campaign_doc_str='+localStorage.prProdID_Str+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4+'&medicine_5='+medicine_5+'&checkOther='+checkOther)
				 $.ajax(localStorage.base_url+'prescription_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode+'&areaId='+areaId+'&doctor_id='+encodeURIComponent(doctorId)+'&doctor_name='+encodeURIComponent(doctor_name)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName+'&campaign_doc_str='+localStorage.prProdID_Str+'&opProdID_Str='+localStorage.opProdID_Str+'&medicine_1='+medicine_1+'&medicine_2='+medicine_2+'&medicine_3='+medicine_3+'&medicine_4='+medicine_4+'&medicine_5='+medicine_5+'&checkOther='+checkOther,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
											//alert (data)
											var resultArray = data.split('<SYNCDATA>');
											$("#error_prescription_submit").html(resultArray[1]);
											$("#wait_image_prescription").hide();
											$("#btn_prescription_submit").show();
											
								},
							success:function(data, status,xhr){				
						//alert (status)
								if (status!='success'){
									
									$("#error_prescription_submit").html('Network timeout. Please ensure you have active internet connection.');
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").show();
								}
								else{
									//alert (data)
									   var resultArray = data.split('<SYNCDATA>');	
										if (resultArray[0]=='FAILED'){						
											$("#error_prescription_submit").html(resultArray[1]);
											$("#wait_image_prescription").hide();
											$("#btn_prescription_submit").show();
										}else if (resultArray[0]=='SUCCESS'){									
											//var result_string=resultArray[1];
											
											
											localStorage.opProdID_Str='';
											localStorage.prProdID_Str='';
											oprtunityVal='';
											optionVal='';
											//alert (result_string)
										
											//image upload function	
											//alert (prescriptionPhoto +'  ,  '+ imageName)								
											uploadPhoto(prescriptionPhoto, imageName);
											//var picNo=parseInt(localStorage.picFlag)+1 
											
										
											imageSource=''
											var image = document.getElementById(imageDiv);
											image.src = imageSource;
											imagePath = imageSource;
											$("#"+imageText).val(imagePath);
											if (picNo==1){localStorage.prPhoto1=''}
											if (picNo==2){localStorage.prPhoto2=''}
											if (picNo==3){localStorage.prPhoto3=''}
											if (picNo==4){localStorage.prPhoto4=''}
											if (picNo==5){localStorage.prPhoto5=''}
											if (picNo==6){localStorage.prPhoto6=''}
											if (picNo==7){localStorage.prPhoto7=''}
											if (picNo==8){localStorage.prPhoto8=''}
											if (picNo==9){localStorage.prPhoto9=''}
											if (picNo==10){localStorage.prPhoto10=''}

				
											
											 
											$('#market_combo_id_lv').empty();
											$('#market_combo_id_lv').append(localStorage.unschedule_market_cmb_id);

											
											//alert ('aaaa')
											$("#lat").val("");
											$("#long").val("");
											//alert ('1')
											//$("#prescriptionPhoto").val("");
											
											$(checkOther).prop('checked', false);
											$("#medicine_1").val('');
											$("#medicine_2").val('');
											$("#medicine_3").val('');
											$("#medicine_4").val('');
											$("#medicine_5").val('');
											$("#wait_image_prescription").hide();
											$("#btn_prescription_submit").show();
											
											getDocDataprCart()
											getDocDataopCart()
											$("#pr_id_lv").empty()
											setPrProduct()
											$("#op_id_lv").empty()
											setOpProduct()

											//--------------------------
											//if (picNo==1){localStorage.prPhoto1=''}
//											if (picNo==2){localStorage.prPhoto2=''}
//											if (picNo==3){localStorage.prPhoto3=''}
//											if (picNo==4){localStorage.prPhoto4=''}
//											if (picNo==5){localStorage.prPhoto5=''}
//											if (picNo==6){localStorage.prPhoto6=''}
//											if (picNo==7){localStorage.prPhoto7=''}
//											if (picNo==8){localStorage.prPhoto8=''}
//											if (picNo==9){localStorage.prPhoto9=''}
//											if (picNo==10){localStorage.prPhoto10=''}
//											for (j=0; j < 10; j++){
//												var picNoGet=parseInt(j)+1 
//												var imageDiv="myImage"+picNoGet
//												var imageText="prPhoto"+picNoGet
//												var imageSource=''
//												if (picNoGet==1){imageSource=localStorage.prPhoto1}
//												if (picNoGet==2){imageSource=localStorage.prPhoto2}
//												if (picNoGet==3){imageSource=localStorage.prPhoto3}
//												if (picNoGet==4){imageSource=localStorage.prPhoto4}
//												if (picNoGet==5){imageSource=localStorage.prPhoto5}
//												if (picNoGet==6){imageSource=localStorage.prPhoto6}
//												if (picNoGet==7){imageSource=localStorage.prPhoto7}
//												if (picNoGet==8){imageSource=localStorage.prPhoto8}
//												if (picNoGet==9){imageSource=localStorage.prPhoto9}
//												if (picNoGet==10){imageSource=localStorage.prPhoto10}
//												
//												var image = document.getElementById(imageDiv);
//												image.src = imageSource;
//												imagePath = imageSource;
//												$("#"+imageText).val(imagePath);
//											}

											$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
											
											
										}else{						
											$("#error_prescription_submit").html('Authentication error. Please register and sync to retry.');
											$("#wait_image_prescription").hide();
											$("#btn_prescription_submit").show();
											}
								}
}
						});			 
				
						
//		}pic else
	}
//$.afui.loadContent("#page_confirm_visit_success",true,true,'right');
}

/************ jahangirEditedEnd17Feb prescription_submit **************/


/************ jahangirEditedStart20Feb prsearchItem **************/
function prsearchItem() {
	$("#pr_id_lv").empty();
	//alert ('aaaaaaaaa ')		
	//var filter = input.value.toUpperCase();
	var filter  = $("#pritemSearch").val().toUpperCase();
	//alert(filter.charAt(0));
	//alert (filter)
	setPrProductA(filter.charAt(0));
	//var lis = document.getElementsById('mylist');
	
	 var lis =document.getElementById("pr_id_lv").getElementsByTagName("li");
	//var lis = document.getElementsByTagName('ul>li');
	//alert(lis.length);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
/************ jahangirEditedEnd20Feb prsearchItem **************/

function prcancelSearch() {
	$("#pritemSearch").val('')
	var filter  = $("#pritemSearch").val().toUpperCase();
	//alert (filter)
	//var lis = document.getElementsById('mylist');
	 var lis =document.getElementById("pr_id_lv").getElementsByTagName("li");
	//var lis = document.getElementsByTagName('ul>li');
	//alert(lis.length);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
//==========================================
//==============================Opportunity===============

function opsearchItem() {
	//alert ('aaaaaaaaa ')		
	//var filter = input.value.toUpperCase();
	var filter  = $("#opitemSearch").val().toUpperCase();
	//alert (filter)
	//var lis = document.getElementsById('mylist');
	 var lis =document.getElementById("op_id_lv").getElementsByTagName("li");
	//var lis = document.getElementsByTagName('ul>li');
	//alert(lis.length);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}
function opcancelSearch() {
	$("#opitemSearch").val('')
	var filter  = $("#opitemSearch").val().toUpperCase();
	//alert (filter)
	//var lis = document.getElementsById('mylist');
	 var lis =document.getElementById("op_id_lv").getElementsByTagName("li");
	//var lis = document.getElementsByTagName('ul>li');
	//alert(lis.length);
	for (var i = 0; i < lis.length; i++) {
		var name = lis[i].getElementsByClassName('name')[0].innerHTML;
		
		if (name.toUpperCase().indexOf(filter) == 0) 
			lis[i].style.display = 'list-item';
		else
			lis[i].style.display = 'none';
	}
}

function setOpProduct(){
	opProdID_Str=''
	//alert (localStorage.op_A)
		if (localStorage.op_A.length != '') {
			op_A=localStorage.op_A
			var opList_A=op_A.split('<rd>');
			var opLength_A=opList_A.length;
			var op_tbl_A=''
			for (j=0; j < opLength_A; j++){
				var opArray_A = opList_A[j].split('<fd>');
				var op_id_A=opArray_A[0];	
				var op_name_A=opArray_A[1];
				
				op_tbl_A=op_tbl_A+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_A+'\')"  class="name"><font id="opName'+ op_id_A +'" class="name" >'+ op_name_A+'</font><input type="hidden" id="doc_op_id'+op_id_A+'" value="'+op_id_A+'" > '+'</li>';		
				
				}
		localStorage.op_tbl_A=op_tbl_A		
		$("#op_id_lv").append(localStorage.op_tbl_A);	
		
	}
	
	
	if (localStorage.op_B.length != '') {
			op_B=localStorage.op_B
			var opList_B=op_B.split('<rd>');
			var opLength_B=opList_B.length;
			var op_tbl_B=''
			for (j=0; j < opLength_B; j++){
				var opArray_B = opList_B[j].split('<fd>');
				var op_id_B=opArray_B[0];	
				var op_name_B=opArray_B[1];
				
				op_tbl_B=op_tbl_B+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_B+'\')"  class="name"><font id="opName'+ op_id_B +'" class="name" >'+ op_name_B+'</font><input type="hidden" id="doc_op_id'+op_id_B+'" value="'+op_id_B+'" > '+'</li>';		
				
				}
		localStorage.op_tbl_B=op_tbl_B		
		$("#op_id_lv").append(localStorage.op_tbl_B);	
	}
	
	
	if (localStorage.op_C.length != '') {
			op_C=localStorage.op_C
			var opList_C=op_C.split('<rd>');
			var opLength_C=opList_C.length;
			var op_tbl_C=''
			for (j=0; j < opLength_C; j++){
				var opArray_C = opList_C[j].split('<fd>');
				var op_id_C=opArray_C[0];	
				var op_name_C=opArray_C[1];
				
				op_tbl_C=op_tbl_C+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_C+'\')"  class="name"><font id="opName'+ op_id_C +'" class="name" >'+ op_name_C+'</font><input type="hidden" id="doc_op_id'+op_id_C+'" value="'+op_id_C+'" > '+'</li>';		
				//var pName=$("#opName"+op_id_C).html();
				
				}
		localStorage.op_tbl_C=op_tbl_C		
		$("#op_id_lv").append(localStorage.op_tbl_C);	
	}
	
	
	if (localStorage.op_D.length != '') {
			op_D=localStorage.op_D
			var opList_D=op_D.split('<rd>');
			var opLength_D=opList_D.length;
			var op_tbl_D=''
			for (j=0; j < opLength_D; j++){
				var opArray_D = opList_D[j].split('<fd>');
				var op_id_D=opArray_D[0];	
				var op_name_D=opArray_D[1];
				op_tbl_D=op_tbl_D+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_D+'\')"  class="name"><font id="opName'+ op_id_D +'" class="name" >'+ op_name_D+'</font><input type="hidden" id="doc_op_id'+op_id_D+'" value="'+op_id_D+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_D+'<rd>'
				}
		localStorage.op_tbl_D=op_tbl_D		
		$("#op_id_lv").append(localStorage.op_tbl_D);	
	}
	
	
	if (localStorage.op_E.length != '') {
			op_E=localStorage.op_E
			var opList_E=op_E.split('<rd>');
			var opLength_E=opList_E.length;
			var op_tbl_E=''
			for (j=0; j < opLength_E; j++){
				var opArray_E = opList_E[j].split('<fd>');
				var op_id_E=opArray_E[0];	
				var op_name_E=opArray_E[1];
				op_tbl_E=op_tbl_E+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_E+'\')"  class="name"><font id="opName'+ op_id_E +'" class="name" >'+ op_name_E+'</font><input type="hidden" id="doc_op_id'+op_id_E+'" value="'+op_id_E+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_E+'<rd>'	
				}
		localStorage.op_tbl_E=op_tbl_E		
		$("#op_id_lv").append(localStorage.op_tbl_E);	
	}
	
	
		if (localStorage.op_F.length != '') {
			op_F=localStorage.op_F
			var opList_F=op_F.split('<rd>');
			var opLength_F=opList_F.length;
			var op_tbl_F=''
			for (j=0; j < opLength_F; j++){
				var opArray_F = opList_F[j].split('<fd>');
				var op_id_F=opArray_F[0];	
				var op_name_F=opArray_F[1];
				op_tbl_F=op_tbl_F+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_F+'\')"  class="name"><font id="opName'+ op_id_F +'" class="name" >'+ op_name_F+'</font><input type="hidden" id="doc_op_id'+op_id_F+'" value="'+op_id_F+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_F+'<rd>'
				}
		localStorage.op_tbl_F=op_tbl_F		
		$("#op_id_lv").append(localStorage.op_tbl_F);	
	}
	
	if (localStorage.op_G.length != '') {
			op_G=localStorage.op_G
			var opList_G=op_G.split('<rd>');
			var opLength_G=opList_G.length;
			var op_tbl_G=''
			for (j=0; j < opLength_G; j++){
				var opArray_G = opList_G[j].split('<fd>');
				var op_id_G=opArray_G[0];	
				var op_name_G=opArray_G[1];
				op_tbl_G=op_tbl_G+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_G+'\')"  class="name"><font id="opName'+ op_id_G +'" class="name" >'+ op_name_G+'</font><input type="hidden" id="doc_op_id'+op_id_G+'" value="'+op_id_G+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_G+'<rd>'
				}
		localStorage.op_tbl_G=op_tbl_G		
		$("#op_id_lv").append(localStorage.op_tbl_G);	
	}
	
	
	if (localStorage.op_H.length != '') {
			op_H=localStorage.op_H
			var opList_H=op_H.split('<rd>');
			var opLength_H=opList_H.length;
			var op_tbl_H=''
			for (j=0; j < opLength_H; j++){
				var opArray_H = opList_H[j].split('<fd>');
				var op_id_H=opArray_H[0];	
				var op_name_H=opArray_H[1];
				op_tbl_H=op_tbl_H+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_H+'\')"  class="name"><font id="opName'+ op_id_H +'" class="name" >'+ op_name_H+'</font><input type="hidden" id="doc_op_id'+op_id_H+'" value="'+op_id_H+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_H+'<rd>'
				}
		localStorage.op_tbl_H=op_tbl_H		
		$("#op_id_lv").append(localStorage.op_tbl_H);	
	}
	
	
	
	if (localStorage.op_I.length != '') {
			op_I=localStorage.op_I
			var opList_I=op_I.split('<rd>');
			var opLength_I=opList_I.length;
			var op_tbl_I=''
			for (j=0; j < opLength_I; j++){
				var opArray_I = opList_I[j].split('<fd>');
				var op_id_I=opArray_I[0];	
				var op_name_I=opArray_I[1];
				op_tbl_I=op_tbl_I+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_I+'\')"  class="name"><font id="opName'+ op_id_I +'" class="name" >'+ op_name_I+'</font><input type="hidden" id="doc_op_id'+op_id_I+'" value="'+op_id_I+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_I+'<rd>'	
				}
		localStorage.op_tbl_I=op_tbl_I		
		$("#op_id_lv").append(localStorage.op_tbl_I);	
	}
	
	
	if (localStorage.op_J.length != '') {
			op_J=localStorage.op_J
			var opList_J=op_J.split('<rd>');
			var opLength_J=opList_J.length;
			var op_tbl_J=''
			for (j=0; j < opLength_j; j++){
				var opArray_J = opList_J[j].split('<fd>');
				var op_id_J=opArray_J[0];	
				var op_name_J=opArray_J[1];
				op_tbl_J=op_tbl_J+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_J+'\')"  class="name"><font id="opName'+ op_id_J +'" class="name" >'+ op_name_J+'</font><input type="hidden" id="doc_op_id'+op_id_J+'" value="'+op_id_J+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_J+'<rd>'	
				}
		localStorage.op_tbl_J=op_tbl_J		
		$("#op_id_lv").append(localStorage.op_tbl_J);	
	}
	
	
	if (localStorage.op_K.length != '') {
			op_K=localStorage.op_K
			var opList_K=op_K.split('<rd>');
			var opLength_K=opList_K.length;
			var op_tbl_K=''
			for (j=0; j < opLength_K; j++){
				var opArray_K = opList_K[j].split('<fd>');
				var op_id_K=opArray_K[0];	
				var op_name_K=opArray_K[1];
				op_tbl_K=op_tbl_K+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_K+'\')"  class="name"><font id="opName'+ op_id_K +'" class="name" >'+ op_name_K+'</font><input type="hidden" id="doc_op_id'+op_id_K+'" value="'+op_id_K+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_K+'<rd>'	
				}
		localStorage.op_tbl_K=op_tbl_K		
		$("#op_id_lv").append(localStorage.op_tbl_K);	
	}
	
	
	if (localStorage.op_L.length != '') {
			op_L=localStorage.op_L
			var opList_L=op_L.split('<rd>');
			var opLength_L=opList_L.length;
			var op_tbl_L=''
			for (j=0; j < opLength_L; j++){
				var opArray_L = opList_L[j].split('<fd>');
				var op_id_L=opArray_L[0];	
				var op_name_L=opArray_L[1];
				op_tbl_L=op_tbl_L+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_L+'\')"  class="name"><font id="opName'+ op_id_L +'" class="name" >'+ op_name_L+'</font><input type="hidden" id="doc_op_id'+op_id_L+'" value="'+op_id_L+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_L+'<rd>'	
				}
		localStorage.op_tbl_L=op_tbl_L	
		$("#op_id_lv").append(localStorage.op_tbl_L);	
	}
	
	if (localStorage.op_M.length != '') {
			op_M=localStorage.op_M
			var opList_M=op_M.split('<rd>');
			var opLength_M=opList_M.length;
			var op_tbl_M=''
			for (j=0; j < opLength_M; j++){
				var opArray_M = opList_M[j].split('<fd>');
				var op_id_M=opArray_M[0];	
				var op_name_M=opArray_M[1];
				op_tbl_M=op_tbl_M+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_M+'\')"  class="name"><font id="opName'+ op_id_M +'" class="name" >'+ op_name_M+'</font><input type="hidden" id="doc_op_id'+op_id_M+'" value="'+op_id_M+'" > '+'</li>';		
				opProdID_Str=opProdID_Str+op_id_M+'<rd>'
				}
		localStorage.op_tbl_M=op_tbl_M	
		$("#op_id_lv").append(localStorage.op_tbl_M);	
	}
	
	
	if (localStorage.op_N.length != '') {
			op_N=localStorage.op_N
			var opList_N=op_N.split('<rd>');
			var opLength_N=opList_N.length;
			var op_tbl_N=''
			for (j=0; j < opLength_N; j++){
				var opArray_N = opList_N[j].split('<fd>');
				var op_id_N=opArray_N[0];	
				var op_name_N=opArray_N[1];
				op_tbl_N=op_tbl_N+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_N+'\')"  class="name"><font id="opName'+ op_id_N +'" class="name" >'+ op_name_N+'</font><input type="hidden" id="doc_op_id'+op_id_N+'" value="'+op_id_N+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_N+'<rd>'	
				}
		localStorage.op_tbl_N=op_tbl_N	
		$("#op_id_lv").append(localStorage.op_tbl_N);	
	}
	
	if (localStorage.op_O.length != '') {
			op_O=localStorage.op_O
			var opList_O=op_O.split('<rd>');
			var opLength_O=opList_O.length;
			var op_tbl_O=''
			for (j=0; j < opLength_O; j++){
				var opArray_O = opList_O[j].split('<fd>');
				var op_id_O=opArray_O[0];	
				var op_name_O=opArray_O[1];
				op_tbl_O=op_tbl_O+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_O+'\')"  class="name"><font id="opName'+ op_id_O +'" class="name" >'+ op_name_O+'</font><input type="hidden" id="doc_op_id'+op_id_O+'" value="'+op_id_O+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_O+'<rd>'
				}
		localStorage.op_tbl_O=op_tbl_O
		$("#op_id_lv").append(localStorage.op_tbl_O);	
	}
	
	if (localStorage.op_P.length != '') {
			op_P=localStorage.op_P
			var opList_P=op_P.split('<rd>');
			var opLength_P=opList_P.length;
			var op_tbl_P=''
			for (j=0; j < opLength_P; j++){
				var opArray_P = opList_P[j].split('<fd>');

				var op_id_P=opArray_P[0];	
				var op_name_P=opArray_P[1];
				op_tbl_P=op_tbl_P+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_P+'\')"  class="name"><font id="opName'+ op_id_P +'" class="name" >'+ op_name_P+'</font><input type="hidden" id="doc_op_id'+op_id_P+'" value="'+op_id_P+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_P+'<rd>'	
				}
		localStorage.op_tbl_P=op_tbl_P
		$("#op_id_lv").append(localStorage.op_tbl_P);	
	}
	
	if (localStorage.op_Q.length != '') {
			op_Q=localStorage.op_Q
			var opList_Q=op_Q.split('<rd>');
			var opLength_Q=opList_Q.length;
			var op_tbl_Q=''
			for (j=0; j < opLength_Q; j++){
				var opArray_Q = opList_Q[j].split('<fd>');
				var op_id_Q=opArray_Q[0];	
				var op_name_Q=opArray_Q[1];
				op_tbl_Q=op_tbl_Q+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_Q+'\')"  class="name"><font id="opName'+ op_id_Q +'" class="name" >'+ op_name_Q+'</font><input type="hidden" id="doc_op_id'+op_id_Q+'" value="'+op_id_Q+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_Q+'<rd>'	
				}
		localStorage.op_tbl_Q=op_tbl_Q
		$("#op_id_lv").append(localStorage.op_tbl_Q);	
	}
	
	if (localStorage.op_R.length != '') {
			op_R=localStorage.op_R
			var opList_R=op_R.split('<rd>');
			var opLength_R=opList_R.length;
			var op_tbl_R=''
			for (j=0; j < opLength_R; j++){
				var opArray_R = opList_R[j].split('<fd>');
				var op_id_R=opArray_R[0];	
				var op_name_R=opArray_R[1];
				op_tbl_R=op_tbl_R+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_R+'\')"  class="name"><font id="opName'+ op_id_R +'" class="name" >'+ op_name_R+'</font><input type="hidden" id="doc_op_id'+op_id_R+'" value="'+op_id_R+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_R+'<rd>'
				}
		localStorage.op_tbl_R=op_tbl_R
		$("#op_id_lv").append(localStorage.op_tbl_R);	
	}
	
	if (localStorage.op_S.length != '') {
			op_S=localStorage.op_S
			var opList_S=op_S.split('<rd>');
			var opLength_S=opList_S.length;
			var op_tbl_S=''
			for (j=0; j < opLength_S; j++){
				var opArray_S = opList_S[j].split('<fd>');
				var op_id_S=opArray_S[0];	
				var op_name_S=opArray_S[1];
				op_tbl_S=op_tbl_S+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_S+'\')"  class="name"><font id="opName'+ op_id_S +'" class="name" >'+ op_name_S+'</font><input type="hidden" id="doc_op_id'+op_id_S+'" value="'+op_id_S+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_S+'<rd>'	
				}
		localStorage.op_tbl_S=op_tbl_S
		$("#op_id_lv").append(localStorage.op_tbl_S);	
	}
	
	if (localStorage.op_T.length != '') {
			op_T=localStorage.op_T
			var opList_T=op_T.split('<rd>');
			var opLength_T=opList_T.length;
			var op_tbl_T=''
			for (j=0; j < opLength_T; j++){
				var opArray_T = opList_T[j].split('<fd>');
				var op_id_T=opArray_T[0];	
				var op_name_T=opArray_T[1];
				op_tbl_T=op_tbl_T+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_T+'\')"  class="name"><font id="opName'+ op_id_T +'" class="name" >'+ op_name_T+'</font><input type="hidden" id="doc_op_id'+op_id_T+'" value="'+op_id_T+'" > '+'</li>';		
				//opProdID_Str=opProdID_Str+op_id_T+'<rd>'
				}
		localStorage.op_tbl_T=op_tbl_T
		$("#op_id_lv").append(localStorage.op_tbl_T);	
	}
	
	if (localStorage.op_U.length != '') {
			op_U=localStorage.op_U
			var opList_U=op_U.split('<rd>');
			var opLength_U=opList_U.length;
			var op_tbl_U=''
			for (j=0; j < opLength_U; j++){
				var opArray_U = opList_U[j].split('<fd>');
				var op_id_U=opArray_U[0];	
				var op_name_U=opArray_U[1];
				op_tbl_U=op_tbl_U+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_U+'\')"  class="name"><font id="opName'+ op_id_U +'" class="name" >'+ op_name_U+'</font><input type="hidden" id="doc_op_id'+op_id_U+'" value="'+op_id_U+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_U+'<rd>'	
				}
		localStorage.op_tbl_U=op_tbl_U
		$("#op_id_lv").append(localStorage.op_tbl_U);	
	}
	
	if (localStorage.op_V.length != '') {
			op_V=localStorage.op_V
			var opList_V=op_V.split('<rd>');
			var opLength_V=opList_V.length;
			var op_tbl_V=''
			for (j=0; j < opLength_V; j++){
				var opArray_V = opList_V[j].split('<fd>');
				var op_id_V=opArray_V[0];	
				var op_name_V=opArray_V[1];
				op_tbl_V=op_tbl_V+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_V+'\')"  class="name"><font id="opName'+ op_id_V +'" class="name" >'+ op_name_V+'</font><input type="hidden" id="doc_op_id'+op_id_V+'" value="'+op_id_V+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_V+'<rd>'	
				}
		localStorage.op_tbl_V=op_tbl_V
		$("#op_id_lv").append(localStorage.op_tbl_V);	
	}
	
	if (localStorage.op_W.length != '') {
			op_W=localStorage.op_W
			var opList_W=op_W.split('<rd>');
			var opLength_W=opList_W.length;
			var op_tbl_W=''
			for (j=0; j < opLength_W; j++){
				var opArray_W = opList_W[j].split('<fd>');
				var op_id_W=opArray_W[0];	
				var op_name_W=opArray_W[1];
				op_tbl_W=op_tbl_W+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_W+'\')"  class="name"><font id="opName'+ op_id_W +'" class="name" >'+ op_name_W+'</font><input type="hidden" id="doc_op_id'+op_id_W+'" value="'+op_id_W+'" > '+'</li>';	
				opProdID_Str=opProdID_Str+op_id_W+'<rd>'	
				}
		localStorage.op_tbl_W=op_tbl_W
		$("#op_id_lv").append(localStorage.op_tbl_W);	
	}

	
	if (localStorage.op_X.length != '') {
			op_X=localStorage.op_X
			var opList_X=op_X.split('<rd>');
			var opLength_X=opList_X.length;
			var op_tbl_X=''
			for (j=0; j < opLength_X; j++){
				var opArray_X = opList_X[j].split('<fd>');
				var op_id_X=opArray_X[0];	
				var op_name_X=opArray_X[1];
				op_tbl_X=op_tbl_X+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_X+'\')"  class="name"><font id="opName'+ op_id_X +'" class="name" >'+ op_name_X+'</font><input type="hidden" id="doc_op_id'+op_id_X+'" value="'+op_id_X+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_X+'<rd>'	
				}
		localStorage.op_tbl_X=op_tbl_X
		$("#op_id_lv").append(localStorage.op_tbl_Y);	
	}

	
	if (localStorage.op_Y.length != '') {
			op_Y=localStorage.op_Y
			var opList_Y=op_Y.split('<rd>');
			var opLength_Y=opList_Y.length;
			var op_tbl_Y=''
			for (j=0; j < opLength_Y; j++){
				var opArray_Y = opList_Y[j].split('<fd>');
				var op_id_Y=opArray_Y[0];	
				var op_name_Y=opArray_Y[1];
				op_tbl_Y=op_tbl_Y+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_Y+'\')"  class="name"><font id="opName'+ op_id_Y +'" class="name" >'+ op_name_Y+'</font><input type="hidden" id="doc_op_id'+op_id_Y+'" value="'+op_id_Y+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_Y+'<rd>'	
				}
		localStorage.op_tbl_Y=op_tbl_Y
		$("#op_id_lv").append(localStorage.op_tbl_Y);	
	}
	
	if (localStorage.op_Z.length != '') {
			op_Z=localStorage.op_Z
			var opList_Z=op_Z.split('<rd>');
			var opLength_Z=opList_Z.length;
			var op_tbl_Z=''
			for (j=0; j < opLength_Z; j++){
				var opArray_Z = opList_Z[j].split('<fd>');
				var op_id_Z=opArray_Z[0];	
				var op_name_Z=opArray_Z[1];
				op_tbl_Z=op_tbl_Z+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin "  onClick="check_boxTrue_op(\''+op_id_Z+'\')"  class="name"><font id="opName'+ op_id_Z +'" class="name" >'+ op_name_Z+'</font><input type="hidden" id="doc_op_id'+op_id_Z+'" value="'+op_id_Z+'" > '+'</li>';	
				//opProdID_Str=opProdID_Str+op_id_Z+'<rd>'	
				}
		localStorage.op_tbl_Z=op_tbl_Z
		$("#op_id_lv").append(localStorage.op_tbl_Z);	
	}
	//localStorage.prProdID_Str=prProdID_Str;
}
//=================================
function check_boxTrue_op(product_id){	
	//alert (product_id)
	var camp_combo="#doc_op_id"+product_id
	getDocOpData_keyup(product_id,'true')
	$('li').click(function(){
		$(this).css('color','red');	
	});

	}
	
	
function getDocOpData_keyup(product_id,status){
	//alert (status)
	var pid=$("#doc_op_id"+product_id).val();
	var camp_combo_val=status
	
	
	var campaign_doc_str=localStorage.opProdID_Str
	var campaign_docShowStr='';
	var campaign_doc_strList="";
	var campaign_doc_strListLength=0;
	var campaign_docProductId="";
	//alert (camp_combo_val)
	if (camp_combo_val == 'true' ){
		//alert (campaign_doc_str.indexOf(pid))
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
			}	
		}
		else{
			campaign_doc_strList=localStorage.opProdID_Str.split('<rd>');
			campaign_doc_strListLength=campaign_doc_strList.length;
			for (j=0; j < orderProductLength; j++){
					campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						if (campaign_doc_str==''){
							campaign_doc_str=pid							
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+pid
							}		
					}
			}
		}
		localStorage.opProdID_Str=campaign_doc_str;
		
		
	}
	else{
		campaign_doc_strList=localStorage.opProdID_Str.split('<rd>');
		campaign_doc_strListLength=campaign_doc_strList.length;
		for (j=0; j < campaign_doc_strListLength; j++){
		  campaign_docProductId=campaign_doc_strList[j].split('<fd>')[0]
				//alert (campaign_docProductId)
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				
				if (campaign_docProductId==pid){
					
					if (campaign_doc_strListLength>1){
						
						if (product_index==0){
							
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							//alert ('2')
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
			}
		}
		localStorage.opProdID_Str=campaign_doc_str;
		//alert (localStorage.campaign_doc_str)
	}
	//alert (localStorage.prProdID_Str)
	}
	
function getDocDataop(){
	getDocDataopCart();
	
	$.afui.loadContent("#doctoropCartPage",true,true,'right');;
}

/******* jahangirEditedStart16Feb getDocDataopCart **************/
function getDocDataopCart(){	
	//alert (localStorage.prProdID_Str)
	$('#opCart').empty();
	localStorage.opProdID_Str = oprtunityVal;
	campaign_doc_str=localStorage.opProdID_Str
	
	var campaignList = campaign_doc_str.split('||');
	var campaignListLength=campaignList.length;
	var medId='';
	var medName='';
	var medVal='';
	cart_list=''
	
	for ( i=0; i < campaignListLength; i++){
		
		var pID=campaignList[i];
		var pIdSpilt = pID.split('|');
		
		for(n=0; n < pIdSpilt.length; n++){
			medId = pIdSpilt[0];
			medName = pIdSpilt[1];
			medVal = pIdSpilt[2];
		}
		/********* jahangirEditedStart18Feb inputType text to number *******/ 
		if(medId!=''){
			cart_list+='<tr style="font-size:14px" id="cartOp_'+medId+'"><td > </br>'+medName+'</br></td><td><input id="inpId'+medId+'" type="number" style="width:60px; border:1px solid #0088D1; float:right; box-shadow:0px 1px 1px 1px #0088D1; border-radius:5px" value="'+medVal+'"/></td><td style="background-color:#E7F1FE"  align="center" width="10%" onClick="removeCarItemOp(\''+medId+'\');"><img  src="cancel.png" width="20" height="20" alt="X" id="myImage1"  onClick="removeCarItemOp(\''+medId+'\');"> </td></tr>';
			
		}	
		/********* jahangirEditedEnd18Feb inputType text to number *******/ 	
	}
	//alert (cart_list)
	$('#opCart').append(cart_list);
}
/******* jahangirEditedEnd16 getDocDataopCart **************/
function getDocDataop(){	
	getDocDataopCart();
	$.afui.loadContent("#doctoropCartPage",true,true,'right');

}
function doctoropCartPage(){	
	$.afui.loadContent("#doctoropCartPage",true,true,'right');

}


/******* jahangirEditedStart16Start removeCarItemOp **************/
function removeCarItemOp(product_idGet){
	
	$("#cartOp_"+product_idGet).remove();
	var repl1='';
	
	//localStorage.opProdID_Str='';
	//alert(localStorage.opProdID_Str);
	iStr=localStorage.opProdID_Str.split('||');
	iLen=iStr.length
	for(i=0;i<iLen;i++){
		iStrD=iStr[i].split('|');
		//alert(iStrD[0]);
		if(iStrD[0]!=product_idGet){
			if (repl1==''){
				repl1=iStr[i]
			}else{
				repl1+='||'+iStr[i]
			}				
		}				
	}
	oprtunityVal = repl1;
	localStorage.opProdID_Str=repl1;
}
/******* jahangirEditedEnd16 removeCarItemOp **************/


//============================================
function gotoPic(picNo) {
	var imageDiv="myImage"+picNo
	var imageText="prPhoto"+picNo
	
	if (picNo!=localStorage.picNo){
		localStorage.prProdID_Str=''
		localStorage.opProdID_Str=''
		getDocDataprCart()
		$("#pr_id_lv").empty()
		setPrProduct()
		$("#op_id_lv").empty()
		setOpProduct()
	}
	localStorage.picNo=picNo
	
	var prPic=$("#"+imageText).val();
	
	var image_show = document.getElementById('myImagePrescription_show');
	image_show.src = prPic;
	$("#myImagePrescription_show").val(prPic)
	
	//alert (prPic)
	if (prPic!=''){		
	$.afui.loadContent("#imageSinglePage",true,true,'right');
	}
}

function page_prItemPage(){
	setPrProduct();
	$('font').removeClass('bgc');
	$('#pr_id_lv input').val('');
	$('#pritemSearch').val(''); 
	
	$.afui.loadContent("#page_prItemPage",true,true,'right');
}

function page_prItemPage2(){
	
	$.afui.loadContent("#page_prItemPage",true,true,'right');
}

/********** jahangirEditedStart19Feb page_opItemPage***********/
function page_opItemPage(){
	//setOpProduct();
	$("#opitemSearch").val('');
	$("#medicineList").empty();
	
	//localStorage.opProdID_Str='';
	$.afui.loadContent("#page_opItemPage",true,true,'right');
}
function page_opItemPage2(){
	$.afui.loadContent("#page_opItemPage",true,true,'right');
}
/********** jahangirEditedEnd19Feb page_opItemPage***********/

//==============================Sync Doctor=======================
function doctor_sync(){
	$("#wait_image_login").show();
	$("#doctorButton").hide();
	$("#loginButton").hide();
	//alert (localStorage.base_url+'doctor_sync?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode)							
$.ajax(localStorage.base_url+'doctor_sync?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.synccode,{
								// cid:localStorage.cid,rep_id:localStorage.user_id,rep_pass:localStorage.user_pass,synccode:localStorage.synccode,
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
									var resultArray = data.split('<SYNCDATA>');
									$("#error_login").html(resultArray[1]);
									$("#wait_image_login").hide();
									$("#doctorButton").show();
									$("#loginButton").show();
											
								},
							success:function(data, status,xhr){				
					
								if (status!='success'){
									
									$("#error_login").html('Network timeout. Please ensure you have active internet connection.');
									$("#wait_image_login").hide();
									$("#doctorButton").show();
									$("#loginButton").show();
								}
								else{
									   var resultArray = data.split('<SYNCDATA>');	
									   
										if (resultArray[0]=='FAILED'){						
											$("#wait_image_login").hide();
											$("#doctorButton").show();		
											$("#loginButton").show();						
											$("#error_login").html(resultArray[1]);
										}else if (resultArray[0]=='SUCCESS'){
											
											$("#error_login").html("Doctor Synced Successfully");
											$("#wait_image_login").hide();
											$("#doctorButton").show();		
											$("#loginButton").show();							
											localStorage.market_doctorVisit=resultArray[1];
											localStorage.opProductStr=resultArray[2];
											//alert (localStorage.opProductStr)
											var op_A=localStorage.opProductStr.split('<AEND>')[0].replace('<ASTART>','');
											var op_after_A=localStorage.opProductStr.split('<AEND>')[1]
											//alert (op_A)
											var op_B=op_after_A.split('<BEND>')[0].replace('<BSTART>','');
											var op_after_B=op_after_A.split('<BEND>')[1]
											//alert (op_B)
											var op_C=op_after_B.split('<CEND>')[0].replace('<CSTART>','');
											var op_after_C=op_after_B.split('<CEND>')[1]
											//alert (op_C)
											var op_D=op_after_C.split('<DEND>')[0].replace('<DSTART>','');
											var op_after_D=op_after_C.split('<DEND>')[1]
											//alert (op_D)
											var op_E=op_after_D.split('<EEND>')[0].replace('<ESTART>','');
											var op_after_E=op_after_D.split('<EEND>')[1]
											//alert (op_E)
											var op_F=op_after_E.split('<FEND>')[0].replace('<FSTART>','');
											var op_after_F=op_after_E.split('<FEND>')[1]
											//alert (op_F)
											var op_G=op_after_F.split('<GEND>')[0].replace('<GSTART>','');
											var op_after_G=op_after_F.split('<GEND>')[1]
											//alert (op_G)
											var op_H=op_after_G.split('<HEND>')[0].replace('<HSTART>','');
											var op_after_H=op_after_G.split('<HEND>')[1]
											//alert (op_H)
											var op_I=op_after_H.split('<IEND>')[0].replace('<ISTART>','');
											var op_after_I=op_after_H.split('<IEND>')[1]
											//alert (op_I)
											var op_J=op_after_I.split('<JEND>')[0].replace('<JSTART>','');
											var op_after_J=op_after_I.split('<JEND>')[1]
											//alert (op_J)
											var op_K=op_after_J.split('<KEND>')[0].replace('<KSTART>','');
											var op_after_K=op_after_J.split('<KEND>')[1]
											//alert (op_K)
											var op_L=op_after_K.split('<LEND>')[0].replace('<LSTART>','');
											var op_after_L=op_after_K.split('<LEND>')[1]
											//alert (op_L)
											var op_M=op_after_L.split('<MEND>')[0].replace('<MSTART>','');
											var op_after_M=op_after_L.split('<MEND>')[1]
											//alert (op_M)
											var op_N=op_after_M.split('<NEND>')[0].replace('<NSTART>','');
											var op_after_N=op_after_M.split('<NEND>')[1]
											//alert (op_N)
											var op_O=op_after_N.split('<OEND>')[0].replace('<OSTART>','');
											var op_after_O=op_after_N.split('<OEND>')[1]
											//alert (op_O)
											var op_P=op_after_O.split('<PEND>')[0].replace('<PSTART>','');
											var op_after_P=op_after_O.split('<PEND>')[1]
											//alert (op_P)
											var op_Q=op_after_P.split('<QEND>')[0].replace('<QSTART>','');
											var op_after_Q=op_after_P.split('<QEND>')[1]
											//alert (op_Q)
											var op_R=op_after_Q.split('<REND>')[0].replace('<RSTART>','');
											var op_after_R=op_after_Q.split('<REND>')[1]
											//alert (op_R)
											var op_S=op_after_R.split('<SEND>')[0].replace('<SSTART>','');
											var op_after_S=op_after_R.split('<SEND>')[1]
											//alert (op_S)
											var op_T=op_after_S.split('<TEND>')[0].replace('<TSTART>','');
											var op_after_T=op_after_S.split('<TEND>')[1]
											//alert (op_T)
											var op_U=op_after_T.split('<UEND>')[0].replace('<USTART>','');
											var op_after_U=op_after_T.split('<UEND>')[1]
											//alert (op_U)
											var op_V=op_after_U.split('<VEND>')[0].replace('<VSTART>','');
											var op_after_V=op_after_U.split('<VEND>')[1]
											//alert (op_V)
											var op_W=op_after_V.split('<WEND>')[0].replace('<WSTART>','');
											var op_after_W=op_after_V.split('<WEND>')[1]
											//alert (op_W)
											var op_X=op_after_W.split('<XEND>')[0].replace('<XSTART>','');
											var op_after_X=op_after_W.split('<XEND>')[1]
											//alert (op_X)
											var op_Y=op_after_X.split('<YEND>')[0].replace('<YSTART>','');
											var op_after_Y=op_after_X.split('<YEND>')[1]
											//alert (op_after_Y)
											var op_Z=op_after_Y.split('<ZEND>')[0].replace('<ZSTART>','');
											//var productListStr_after_E=productListStr_after_D.split('</Z>')[1]
											//alert (op_Z)
											localStorage.op_A=op_A
											//alert (localStorage.op_A)
											localStorage.op_B=op_B
											localStorage.op_C=op_C
											localStorage.op_D=op_D
											localStorage.op_E=op_E
											localStorage.op_F=op_F
											localStorage.op_G=op_G
											localStorage.op_H=op_H
											localStorage.op_I=op_I
											localStorage.op_J=op_J
											localStorage.op_K=op_K
											localStorage.op_L=op_L
											localStorage.op_M=op_M
											//alert ('1')
											localStorage.op_N=op_N
											localStorage.pr_O=op_O
											localStorage.op_P=op_P
											localStorage.op_Q=op_Q
											localStorage.op_R=op_R											
											localStorage.op_S=op_S
											localStorage.op_T=op_T
											//alert ('2')
											localStorage.op_U=op_U
											localStorage.op_V=op_V
											localStorage.op_W=op_W
											localStorage.op_X=op_X
											localStorage.op_Y=op_Y
											localStorage.op_Z=op_Z
											//alert (localStorage.op_Z)
									
											

										}else{						
											$("#error_login").html('Authentication error. Please register and sync to retry.');
											$("#wait_image_login").hide();
											$("#doctorButton").show();
											$("#loginButton").show();
											}
								}
}
						});			 

}
//========================================UploadImages================
function uploadPhoto_docVisit(imageURI, imageName) {
   // alert (localStorage.photo_submit_url)
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
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploader_docVisit/"),winProfile,failProfile,options);
	 
}

function winProfile(r) {
}

function failProfile(error) {
	//$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit');
}

function uploadPhoto(imageURI, imageName) {
   // alert (localStorage.photo_submit_url)
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
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderPrescription/"),winPr,failPr,options);
	 
}

function winPr(r) {
}

function failPr(error) {
	$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit');
}


function takePicture(){
navigator.camera.getPicture( cameraSuccess, cameraError, {
		quality: 90,
		targetWidth: 400,
       // destinationType: Camera.DestinationType.FILE_URI,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true ,
        correctOrientation: true,
        saveToPhotoAlbum: true
    }); 
	
}

function cameraSuccess(uri){  
	var picNo=parseInt(localStorage.picFlag)+1 
	var imageDiv="myImage"+picNo
	var imageText="prPhoto"+picNo
	localStorage.picFlag=picNo
	var image = document.getElementById(imageDiv);
	image.src = uri;
	imagePath = uri;
	if (picNo==1){
		localStorage.prPhoto1=uri
	}
	if (picNo==2){
		localStorage.prPhoto2=uri
	}
	if (picNo==3){
		localStorage.prPhoto3=uri
	}
	if (picNo==4){
		localStorage.prPhoto4=uri
	}
	if (picNo==5){
		localStorage.prPhoto5=uri
	}
	if (picNo==6){
		localStorage.prPhoto6=uri
	}
	if (picNo==7){
		localStorage.prPhoto7=uri
	}
	if (picNo==8){
		localStorage.prPhoto8=uri
	}
	if (picNo==9){
		localStorage.prPhoto9=uri
	}
	if (picNo==10){
		localStorage.prPhoto10=uri
	}
	//alert (uri)
	takePicture();
	
	
   
    
	$("#"+imageText).val(imagePath);
        
}

function cameraError(message){
	var a=''
    //alert("Canceled!"); 
	
}

/*************** jahangirEditedStart16Feb medicine search******************/
function searchMedicine(){
	// opitemSearch
	var searchValue = $("#opitemSearch").val();
	
	if(searchValue.length<3){
		$('#medicineList').html('<p>Type minimum 3 character <span style="color:red;"><sup>*</sup></span></p>');
	}
	else{
		//alert(apipath+'search_medicine?searchValue='+searchValue);
		$.ajax({
			  url: apipath+'search_medicine?searchValue='+searchValue,
			  success: function(resStr) {
				if (resStr!=""){
					keywordStr=resStr.split("||");
					  var keywordS='';
					  for (i=0;i<keywordStr.length;i++){
						  keywordLi=keywordStr[i].split("|")
						  var pID=keywordLi[0].trim();
						  var medName=keywordLi[1];
						  keywordS+='<li>'
						  keywordS+='<div  style="float:left; width:80%"  id="medId'+pID+'">'
						  keywordS+='<span onclick="medClickVal2(\''+pID+'\',\''+medName+'\')" style="margin-bottom:10px; " >'+medName+'</span>' 
						  keywordS+='</div>'
						  keywordS+='<div style="float:right; width:20%">'
						  /******* jahangirEditedStart20Feb medClickVal *********/
						  keywordS+='<input onmouseout="medClickVal(\''+pID+'\',\''+medName+'\')" id="inpId'+pID+'" type="number" style="width:56px; height:35px;" value=""/>'
						  /******* jahangirEditedEnd20Feb medClickVal *********/
						  keywordS+='</div>'
						  keywordS+='</li>'
					  }
					  
					$('#medicineList').empty();
					$('#medicineList').append(keywordS).trigger('create');
					 
					$(".error").text("");
					 
					  url="#page_opItemPage";					
					  $.mobile.navigate(url);
				
				
				}else{
					$(".error").text("Invalid keywords");
				}
			
			  }
			
		});
	}
}
/*********** jahangirEditedEnd16Feb medicine search *********/

/*********** jahangirEditedStart18Feb medClickVal *********/
var oprtunityVal='';
function medClickVal(pid, name){
	var inpVal = $("#inpId"+pid).val();
	
	if(inpVal!=0 && inpVal!=undefined){
		$("#medId"+pid).addClass('bgc');
		var inpVal = $("#inpId"+pid).val();
		if(inpVal==''||inpVal==undefined){
			inpVal=0;
		}
		var pConcat = pid+'|'+name+'|'+inpVal;
		
		if(oprtunityVal.indexOf(pid)==-1){
				if (oprtunityVal==''){
					oprtunityVal=pConcat
				}else{
					oprtunityVal+='||'+pConcat
				}
		}
	}
}

function medClickVal2(pid, name){
	var inpVal = $("#inpId"+pid).val(1);
	$("#medId"+pid).addClass('bgc');
	var pConcat = pid+'|'+name+'|'+1;
	
	if(oprtunityVal.indexOf(pid)==-1){
			if (oprtunityVal==''){
				oprtunityVal=pConcat
			}else{
				oprtunityVal+='||'+pConcat
			}
	}
}
/*********** jahangirEditedEnd18Feb medClickVal *********/

/*********** jahangirEditedStart16Feb medClick  *********/
function medClick2(pid, name){
	$("#medId"+pid).addClass('bgc');
	//alert(localStorage.opProdID_Str);
	var inpVal = $("#inpId"+pid).val();
	if(inpVal==''||inpVal==undefined){
		inpVal=0;
	}
	var pConcat = pid+'|'+name+'|'+inpVal;
	var campaign_doc_str=localStorage.opProdID_Str
	
	if(campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pConcat
			}else{
				campaign_doc_str+='||'+pConcat
			}
	}
	localStorage.opProdID_Str=campaign_doc_str;
	
}

/*********** jahangirEditedEnd16Feb medClick  *********/
$('#ThumbnailTest_buttonTakePhotosNow').click(function(){
    takePicture();
});


//=================================================================
  //Nazma Azam 2019-06-18 start
function page_farm_link() {
	//localStorage.farm_combo_val_tr=''
	$("#wait_img_farm").hide();
	$.afui.loadContent("#farm_Page",true,true,'right');
}


function poultry_next_page() {	
	
				   	$("#poultry_farm_id_text").val('0');
					$("#addPName").val('')
					$("#addPOName").val('')
					$("#AddressP").val('')
					$("#addCDOBp").val('')
					$("#anniversaryP").val('')
					$("#chemist_medicine_p").val('')
					$("#managerP").val('')
					$("#consultantP").val('')
					$("#birds_animal_p").val('')
	
	var farm_combo_area_list_p=localStorage.visit_plan_farmlist_combo_tr;

	$('#tr_poultry').empty();
	$('#tr_poultry').append(farm_combo_area_list_p);

	$('#error_poultry_add_page').html('');
	
	$('#wait_image_poultry').hide();
	
	$.afui.loadContent("#poultry_page",true,true,'right');
}



function cattle_next_page() {	
	
//	Nazma Azam 2019-02-01 start
	$("#farm_name").val('')
	$("#owner_name").val('')
	$("#address").val('')
	$("#add_dob").val('')
	$("#add_anniversary").val('')
	$("#che_medicine").val('')
	$("#farm_manager").val('')
	$("#farm_consultant").val('')
	$("#catbirds_animal").val('')
	$("#cattle_farm_id_text").val('0')

//	Nazma Azam 2019-02-01 end	
	// ===============2019-02-01 start novivo2019  start================

var farm_combo_area_list_c=localStorage.visit_plan_farmlist_combo_tr;

$('#tr_cattle').empty();
$('#tr_cattle').append(farm_combo_area_list_c);

// ===============2019-02-01 end novivo2019 end ================
	$('#wait_image_cattle').hide();
	
	$.afui.loadContent("#cattle_page",true,true,'right');
}


function aqua_next_page() {	
	//Nazma Azam 2019-02-01 start
				   	$("#aqua_farm_id_text").val('0');
					$("#addCNameA").val('')
					$("#addAOName").val('')
					$("#addressAq").val('')
					$("#addCDOBa").val('')
					$("#anniversaryA").val('')
					$("#chemist_medicine_a").val('')
					$("#managerA").val('')
					$("#consultantA").val('')
					$("#birds_animal_a").val('')
	
	
	//Nazma Azam 2019-02-01 end
		// ===============2019-02-01 novivo2019  start================

	var farm_combo_area_list_a=localStorage.visit_plan_farmlist_combo_tr;

	$('#tr_aqua').empty();
	$('#tr_aqua').append(farm_combo_area_list_a);

  // ===============2019-02-01 novivo2019 end ================
  	//alert ('aa')
	$('#wait_image_aqua').hide();
	$.afui.loadContent("#aqua_page",true,true,'right');
}


function farmList_page(){
	//Nazma Azam 2019-02-01 start
	var farm_combo_id_lv_tr=$("#farm_combo_id_lv_tr").val();
	localStorage.farm_combo_val_tr=farm_combo_id_lv_tr
	//alert(localStorage.farm_combo_val_tr)
	//alert(farm_combo_id_lv_tr);
	//alert (localStorage.base_url+'farmListData?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_combo_val='+localStorage.farm_combo_val_tr)
	
	//Nazma Azam 2019-02-01 end
	
	$("#wait_image_farmlist").show();
	$.ajax(localStorage.base_url+'farmListData?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_combo_val='+localStorage.farm_combo_val_tr,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_farmlist").hide();
								 $("#err_farmlist").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									//alert (data)
									 $("#wait_image_farmlist").hide();
									 if (status!='success'){
										$("#err_farmlist").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#err_farmlist").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
								
								//		========================
									//Nazma Azam 2019-02-01 start
									
									$("#err_farmlist").text('');	
									//Nazma Azam 2019-02-01 end
									
										var result_string=resultArray[1];
										
										localStorage.farmList=result_string
										var FarmList = result_string.split('<rd>');
										var FarmListLength=FarmList.length	
											
										
										var farmShow_list=''
										
										for (var i=0; i < FarmListLength-1; i++){
												var farmListArray = FarmList[i].split('<fd>');
												
												var farmID=farmListArray[0];
												var farm_name=farmListArray[1];
												
												farmShow_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><table><tr><td><img onClick="page_farm_profile(\''+farm_name+'|'+farmID+'\')" style="height:20px; width:20px" src="editProfile.png">    </td><td><a  onClick="farmVist(\''+farm_name+'|'+farmID+'\')"><font class="name" style="font-size:18; font-weight:600; color:#306161">'+farm_name+'| </font>'+farmID+'</font></a></td></tr></table></li>'	
												
											}
										
										



									
										var farm_combo_ob=$('#farmlist_combo_id_lv');
										
										farm_combo_ob.empty()
										farm_combo_ob.append(farmShow_list);
									//	=============================
									
									
									
								
							}else{	
								 $("#wait_image_farmlist").hide();
								 $("#err_farmlist").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
	$.afui.loadContent("#page_farmlist",true,true,'right');
}
//=========Insert farm
//=========Insert poultry


function poultry_submit() {
	$("#error_poultry_add_page").html('' )
	$("#wait_image_poultry").show();

		//Nazma Azam 2019-02-01 start
	var poultry_farm_id_text=$("#poultry_farm_id_text").val();
	//alert(poultry_farm_id_text)
	//Nazma Azam 2019-02-01 end
	addPName=$("#addPName").val()
	addPOName=$("#addPOName").val()
	// ===============2019-02-01 start novivo2019  start================

	var tr_poultry=$("#tr_poultry").val();
	var MobileP=$("#MobileP").val();

	// ===============2019-02-01 novivo2019 end ================
	
	AddressP=$("#AddressP").val()
	addCDOBp=$("#addCDOBp").val()
	anniversaryP=$("#anniversaryP").val()
	chemist_medicine_p=$("#chemist_medicine_p").val()
	managerP=$("#managerP").val()
	consultantP=$("#consultantP").val()
	addCCategoryP=$("#addCCategoryP").val();
	birds_animal_p=$("#birds_animal_p").val()
	rearingP=$("#rearingP").val()
	
	feedingP=$("#feedingP").val()
	wateringP=$("#wateringP").val()
	broodingP=$("#broodingP").val()
	addPondsP=$("#addPondsP").val();
	
	
	getLocationInfo_ready()
	
	var latitude= localStorage.latitude
	var  longitude=localStorage.longitude
	
		flag_lat_lon = 1
	
	    if (latitude==0 && longitude==0){
		flag_lat_lon = 0
		}
		
	flag_lat_lon=1
	if(flag_lat_lon == 1){
	//alert(localStorage.base_url+'poultry_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&addPName='+addPName+'&addPOName='+addPOName+'&tr_poultry='+tr_poultry+'&AddressP='+AddressP+'&MobileP='+MobileP+'&addCDOBp='+addCDOBp+'&anniversaryP='+anniversaryP+'&chemist_medicine_p='+chemist_medicine_p+'&managerP='+managerP+'&consultantP='+consultantP+'&addCCategoryP='+addCCategoryP+'&birds_animal_p='+birds_animal_p+'&rearingP='+rearingP+'&feedingP='+feedingP+'&wateringP='+wateringP+'&broodingP='+broodingP+'&addPondsP='+addPondsP+'&latitude='+latitude+'&longitude='+longitude+'&poultry_farm_id_text='+poultry_farm_id_text+'&image='+imageName)
//$("#doctor_prof").val(localStorage.base_url+'poultry_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&addPName='+addPName+'&addPOName='+addPOName+'&tr_poultry='+tr_poultry+'&AddressP='+AddressP+'&MobileP='+MobileP+'&addCDOBp='+addCDOBp+'&anniversaryP='+anniversaryP+'&chemist_medicine_p='+chemist_medicine_p+'&managerP='+managerP+'&consultantP='+consultantP+'&addCCategoryP='+addCCategoryP+'&birds_animal_p='+birds_animal_p+'&rearingP='+rearingP+'&feedingP='+feedingP+'&wateringP='+wateringP+'&broodingP='+broodingP+'&addPondsP='+addPondsP+'&latitude='+latitude+'&longitude='+longitude+'&poultry_farm_id_text='+poultry_farm_id_text+'&image='+imageName)
		// ===============2019-02-01 novivo2019 start ================
				//Nazma Azam 2019-02-01 start
		var now = $.now();		
		var imageName=localStorage.user_id+'P_'+now+'.jpg';
		$.ajax(localStorage.base_url+'poultry_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&addPName='+addPName+'&addPOName='+addPOName+'&tr_poultry='+tr_poultry+'&AddressP='+AddressP+'&MobileP='+MobileP+'&addCDOBp='+addCDOBp+'&anniversaryP='+anniversaryP+'&chemist_medicine_p='+chemist_medicine_p+'&managerP='+managerP+'&consultantP='+consultantP+'&addCCategoryP='+addCCategoryP+'&birds_animal_p='+birds_animal_p+'&rearingP='+rearingP+'&feedingP='+feedingP+'&wateringP='+wateringP+'&broodingP='+broodingP+'&addPondsP='+addPondsP+'&latitude='+latitude+'&longitude='+longitude+'&poultry_farm_id_text='+poultry_farm_id_text+'&image='+imageName,{
		//Nazma Azam 2019-02-01 end

									// ===============2019-02-01 novivo2019 end ================

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_poultry").hide();
								 $("#error_poultry_add_page").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_poultry").hide();
									 if (status!='success'){
										$("#error_poultry_add_page").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_poultry_add_page").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
								// ===============2019-02-01 novivo2019 start ================
									$("#addPName").val('');
								    $("#addPOName").val('');
								    $("#AddressP").val('');
								    $("#MobileP").val('');
								    $("#addCDOBp").val('');
								    $("#anniversaryP").val('');
								    $("#chemist_medicine_p").val('');
								    $("#managerP").val('');
								    $("#consultantP").val('');
								    // $("#addCCategoryP").val('');
								    $("#birds_animal_p").val('');
								    // $("#rearingP").val('');
								  
								    // $("#feedingP").val('');
								    // $("#wateringP").val('');
								    // $("#broodingP").val('');
								    // $("#addPondsP").val('');


								// ===============2019-02-01 novivo2019 end ================
									
									
									$("#error_poultry_add_page").html(result_string)
									
								
							}else{	
								 $("#wait_image_poultry").hide();
								 $("#error_poultry_add_page").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
	}
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}


function cattle_submit(){
  
  $("#wait_image_cattle").show(); 

  $("#error_cattle_page").html('' ); 
 
	//Nazma Azam 2019-02-01 start
	var cattle_farm_id_text=$("#cattle_farm_id_text").val();
	//Nazma Azam 2019-02-01 end

  var farm_name=$("#farm_name").val();
  var owner_name=$("#owner_name").val();
// ===============2019-02-01 novivo2019  start================

  var tr_cattle=$("#tr_cattle").val()
  var mobileC= $("#mobileC").val();

// ===============2019-02-01 novivo2019 end ================
	
  var address=$("#address").val();
  var add_dob=$("#add_dob").val();
  var anniversary=$("#add_anniversary").val();
  //alert(anniversary)
  var chemist_medicine=$("#che_medicine").val();
  
  var farm_manager=$("#farm_manager").val();
  
  var farm_consultant=$("#farm_consultant").val();

  var addCCategory=$("#catCategory").val();

  var birds_animal=$("#catbirds_animal").val();

  var rearing=$("#cat_rearing").val();
  var feeding=$("#cat_feeding").val();
  var watering=$("#cat_watering").val();
  var brooding=$("#cat_brooding").val();
  var ponds_bigha=$("#cat_ponds_bigha").val();
	
	//Nazma Azam 2019-02-01 start
  //var tr_cattle=$("#tr_cattle").val();
	//Nazma Azam 2019-02-01 start

  var imageText="chAddPhoto"
  var chPhoto=$("#"+imageText).val();
  var now = $.now();
  var imageName='ch_'+localStorage.user_id+now.toString()+'.jpg'; 
  if (chPhoto==''){imageName=''}

  latitude=localStorage.latitude
  longitude=localStorage.longitude

  //alert(localStorage.base_url+'cattleSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_name='+encodeURI(farm_name)+'&owner_name='+encodeURI(owner_name)+'&address='+address+'&add_dob='+add_dob+'&anniversary='+anniversary+'&chemist_medicine='+chemist_medicine+'&farm_manager='+farm_manager+'&farm_consultant='+farm_consultant+'&addCCategory='+addCCategory+'&birds_animal='+birds_animal+'&rearing='+rearing+'&feeding='+feeding+'&watering='+watering+'&brooding='+brooding+'&ponds_bigha='+ponds_bigha,+'&imageName='+encodeURI(imageName)+'&latitude='+localStorage.latitude+'&longitude='+localStorage.longitude)
  //alert(localStorage.base_url+'cattleSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_name='+encodeURI(farm_name)+'&owner_name='+encodeURI(owner_name)+'&address='+address+'&add_dob='+add_dob+'&anniversary='+anniversary+'&chemist_medicine='+chemist_medicine+'&farm_manager='+farm_manager+'&farm_consultant='+farm_consultant+'&addCCategory='+addCCategory+'&birds_animal='+birds_animal+'&rearing='+rearing+'&feeding='+feeding+'&watering='+watering+'&brooding='+brooding+'&ponds_bigha='+ponds_bigha)

	getLocationInfo_ready()
	
	var latitude= localStorage.latitude
	var  longitude=localStorage.longitude
	
		flag_lat_lon = 1
	
	    if (latitude==0 && longitude==0){
		flag_lat_lon = 0
		}
		
	flag_lat_lon=1
	if(flag_lat_lon == 1){
	//alert(localStorage.base_url+'cattleSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_name='+encodeURI(farm_name)+'&tr_cattle='+tr_cattle+'&owner_name='+encodeURI(owner_name)+'&address='+address+'&mobileC='+mobileC+'&add_dob='+add_dob+'&anniversary='+anniversary+'&chemist_medicine='+chemist_medicine+'&farm_manager='+farm_manager+'&farm_consultant='+farm_consultant+'&addCCategory='+addCCategory+'&birds_animal='+birds_animal+'&rearing='+rearing+'&feeding='+feeding+'&watering='+watering+'&brooding='+brooding+'&ponds_bigha='+ponds_bigha+'&cattle_farm_id_text='+cattle_farm_id_text)
		
		//Nazma Azam 2019-02-01 start
									// ===============2019-02-01 novivo2019  start================
  var now = $.now();		
 var imageName=localStorage.user_id+'C_'+now+'.jpg';
  $.ajax(localStorage.base_url+'cattleSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_name='+encodeURI(farm_name)+'&tr_cattle='+tr_cattle+'&owner_name='+encodeURI(owner_name)+'&address='+address+'&mobileC='+mobileC+'&add_dob='+add_dob+'&anniversary='+anniversary+'&chemist_medicine='+chemist_medicine+'&farm_manager='+farm_manager+'&farm_consultant='+farm_consultant+'&addCCategory='+addCCategory+'&birds_animal='+birds_animal+'&rearing='+rearing+'&feeding='+feeding+'&watering='+watering+'&brooding='+brooding+'&ponds_bigha='+ponds_bigha+'&cattle_farm_id_text='+cattle_farm_id_text+'&image='+imageName,{
								
									// ===============2019-02-01 novivo2019 end ================
	  
	  //Nazma Azam 2019-02-01 end
								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_cattle").hide();
								 $("#error_cattle_page").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_cattle").hide();
									 if (status!='success'){
										$("#error_cattle_page").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_cattle_page").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
									// ===============2019-02-01 novivo2019 start================

									$("#farm_name").val('');
									$("#owner_name").val('');
									$("#address").val('');
									$("#mobileC").val('');
									$("#add_dob").val('');
									$("#add_anniversary").val('');
									$("#che_medicine").val('');
									$("#farm_manager").val('');
									$("#farm_consultant").val('');
									// $("#catCategory").val('');
									$("#catbirds_animal").val('');
									// $("#cat_rearing").val('');
									// $("#cat_feeding").val(''); 
									// $("#cat_watering").val('');
									// $("#cat_brooding").val('');
									$("#cat_ponds_bigha").val('');

									// ===============2019-02-01 novivo2019 end ================
									$("#error_cattle_page").html(result_string)
									
								
							}else{	
								 $("#wait_image_cattle").hide();
								 $("#error_cattle_page").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }

  }); 
	}
}




function aqua_submit() {

//alert('ok')
	$("#error_aqua_page").html('' )
	$("#wait_image_aqua").show();
		//Nazma Azam 2019-02-01 start
	var aqua_farm_id_text=$("#aqua_farm_id_text").val();
	//Nazma Azam 2019-02-01 end
	
	addCNameA=$("#addCNameA").val()
	addAOName=$("#addAOName").val()

		// ===============2019-02-01 start novivo2019 start ================

	var tr_aqua=$("#tr_aqua").val()
	var mobileA=$("#mobileA").val()

	// ===============2019-02-01 end novivo2019 end ================

	
	addressAq=$("#addressAq").val()
	// alert(addressAq)
	addCDOBa=$("#addCDOBa").val()
	anniversaryA=$("#anniversaryA").val()
	chemist_medicine_a=$("#chemist_medicine_a").val()
	managerA=$("#managerA").val()
	consultantA=$("#consultantA").val()
	addCCategoryA=$("#addCCategoryA").val()
	birds_animal_a=$("#birds_animal_a").val()
	rearingA=$("#rearingA").val()
	// alert(rearingP)
	feedingA=$("#feedingA").val()
	wateringA=$("#wateringA").val()
	broodingA=$("#broodingA").val()
	addCPhoneA=$("#addCPhoneA").val()
	
	// getLocationInfo_ready()
	
	var latitude= localStorage.latitude
	var  longitude=localStorage.longitude
	
		flag_lat_lon = 1
	
	    if (latitude==0 && longitude==0){
		flag_lat_lon = 0
		}
		
	flag_lat_lon=1
	if(flag_lat_lon == 1){
	//alert(localStorage.base_url+'aqua_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&addCNameA='+addCNameA+'&addAOName='+addAOName+'&addressAq='+addressAq+'&addCDOBa='+addCDOBa+'&anniversaryA='+anniversaryA+'&chemist_medicine_a='+chemist_medicine_a+'&managerA='+managerA+'&consultantA='+consultantA+'&addCCategoryA='+addCCategoryA+'&birds_animal_a='+birds_animal_a+'&rearingA='+rearingA+'&feedingA='+feedingA+'&wateringA='+wateringA+'&broodingA='+broodingA+'&addCPhoneA='+addCPhoneA+'&latitude='+latitude+'&longitude='+longitude)
//	$("#doctor_prof").val(localStorage.report_url+'doc_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&route='+market_Id+'&docId='+visitDocId+'&dName='+dName+'&dSpaciality='+dSpaciality+'&dDegree='+dDegree+'&dDOB='+dDOB+'&dMDay='+dMDay+'&dMobile='+dMobile+'&dCAddress='+dCAddress+'&dCategory='+dCategory+'&dDist='+dDist+'&dThana='+dThana)
										// ===============2019-02-01 start novivo2019 start ================
		//Nazma Azam 2019-02-01 start
		var now = $.now();		
		var imageName=localStorage.user_id+'A_'+now+'.jpg';
		$.ajax(localStorage.base_url+'aqua_info_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&addCNameA='+addCNameA+'&addAOName='+addAOName+'&tr_aqua='+tr_aqua+'&addressAq='+addressAq+'&mobileA='+mobileA+'&addCDOBa='+addCDOBa+'&anniversaryA='+anniversaryA+'&chemist_medicine_a='+chemist_medicine_a+'&managerA='+managerA+'&consultantA='+consultantA+'&addCCategoryA='+addCCategoryA+'&birds_animal_a='+birds_animal_a+'&rearingA='+rearingA+'&feedingA='+feedingA+'&wateringA='+wateringA+'&broodingA='+broodingA+'&addCPhoneA='+addCPhoneA+'&latitude='+latitude+'&longitude='+longitude+'&aqua_farm_id_text='+aqua_farm_id_text+'&image='+imageName,{

			//Nazma Azam 2019-02-01 end
									// ===============2019-02-01 end novivo2019 end ================

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_aqua").hide();
								 $("#error_aqua_page").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_aqua").hide();
									 if (status!='success'){
										$("#error_aqua_page").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
								if (resultArray[0]=='FAILED'){
											$("#error_aqua_page").text(resultArray[1]);	
											
										}
								else if (resultArray[0]=='SUCCESS'){	
									var result_string=resultArray[1];
											// ===============2019-02-01 start novivo2019 start ================

								  $("#addCNameA").val('');
								  $("#addAOName").val('');
								  $("#addressAq").val('');
								  $("#mobileA").val('');
								  $("#addCDOBa").val('');
								  $("#anniversaryA").val('');
								  $("#chemist_medicine_a").val('');
								  $("#managerA").val('');
								  $("#consultantA").val('');
								  // $("#addCCategoryA").val('');
								  $("#birds_animal_a").val('');
								  // $("#rearingA").val('');
								  // $("#feedingA").val('');
								  // $("#wateringA").val('');
								  // $("#broodingA").val('');
								  $("#addCPhoneA").val('');

									// ===============2019-02-01 end novivo2019 end ================							
									$("#error_aqua_page").html(result_string)
									
								
							}else{	
								 $("#wait_image_aqua").hide();
								 $("#error_aqua_page").html('Network Timeout. Please check your Internet connection..');
								}
						}
					  }
			 });//end ajax
	}
	
	//$.afui.loadContent("#page_doctor_profile",true,true,'right');
	
}

//Nazma Azam 2019-06-23 start

//==============Farm Edit===========
function page_farm_profile(getData) {
	//alert(getData)
	localStorage.visit_farm_route=getData
	$("#myerror_doctor_prof").html('' )
	$("#wait_image_docProf").show();
	var farm_Id=localStorage.visit_farm_route.split('|')[1];
	var farm_name=localStorage.visit_farm_route.split('|')[0]
	

	//alert (localStorage.report_url+'farm_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_Id='+farm_Id+'&farm_combo_val_tr='+localStorage.farm_combo_val_tr)
		$.ajax(localStorage.report_url+'farm_info?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&farm_Id='+farm_Id+'&farm_combo_val_tr='+localStorage.farm_combo_val_tr,{

								type: 'POST',
								timeout: 30000,
								error: function(xhr) {
								 $("#wait_image_docProf").hide();
								 $("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection..');
													},
								success:function(data, status,xhr){	
									 $("#wait_image_docProf").hide();
									 if (status!='success'){
										$("#myerror_doctor_prof").html('Network Timeout. Please check your Internet connection...');
										
									 }
									 else{	
									 	var resultArray = data.replace('</START>','').replace('</END>','').split('<SYNCDATA>');	
										
											if (resultArray[0]=='FAILED'){
														$("#myerror_doctor_prof").text(resultArray[1]);	
														
													}
				else if (resultArray[0]=='SUCCESS'){	

				var result_string=resultArray[1];



               var farm_id =result_string.split('<fdfd>')[0]
               var farm_name =result_string.split('<fdfd>')[1]
               var route =result_string.split('<fdfd>')[2]
               var latitude =result_string.split('<fdfd>')[3]
               var longitude=result_string.split('<fdfd>')[4]
               var image=result_string.split('<fdfd>')[5]
               var farm_type =result_string.split('<fdfd>')[6]
               var owner_name =result_string.split('<fdfd>')[7]
               var address =result_string.split('<fdfd>')[8]
               var medicine =result_string.split('<fdfd>')[9]
               var manger_name =result_string.split('<fdfd>')[10]
               var consultant_name =result_string.split('<fdfd>')[11]
               var category =result_string.split('<fdfd>')[12]
               var birds_animal =result_string.split('<fdfd>')[13]
               var rearing_housing=result_string.split('<fdfd>')[14]


               var feeding =result_string.split('<fdfd>')[15]
               var watering =result_string.split('<fdfd>')[16]
               var brooding =result_string.split('<fdfd>')[17]
               var poandsSize =result_string.split('<fdfd>')[18]
               var status =result_string.split('<fdfd>')[19]
               var anniversary =result_string.split('<fdfd>')[20]
               var dob=result_string.split('<fdfd>')[21]
			   
			   var mobile_no=result_string.split('<fdfd>')[22]
			   
			   //alert(category)
			   if(farm_type=='POULTRY'){
				   	$("#poultry_farm_id_text").val(farm_Id);
					$("#addPName").val(farm_name)
					$("#addPOName").val(owner_name)
					$("#AddressP").val(address)
					$("#addCDOBp").val(dob)
					$("#anniversaryP").val(anniversary)
					$("#chemist_medicine_p").val(medicine)
					$("#managerP").val(manger_name)
					$("#consultantP").val(consultant_name)
					$("#birds_animal_p").val(birds_animal)


					$("#addCCategoryP").val(category)
					$("#feedingP").val(feeding)
					$("#addPondsP").val(poandsSize)
					//$("#tr_poultry").val(route)
					
					$("#MobileP").val(mobile_no)
		
					$.afui.loadContent("#poultry_page",true,true,'right'); 
				   
			   }
			   
			   if(farm_type=='CATTLE'){
				   	$("#cattle_farm_id_text").val(farm_Id);
					$("#farm_name").val(farm_name)
					$("#owner_name").val(owner_name)
					$("#address").val(address)
					$("#add_dob").val(dob)
					$("#add_anniversary").val(anniversary)
					$("#che_medicine").val(medicine)
					$("#farm_manager").val(manger_name)
					$("#farm_consultant").val(consultant_name)
					$("#catbirds_animal").val(birds_animal)
					
					$("#catCategory").val(category)
					$("#cat_feeding").val(feeding)
					$("#cat_ponds_bigha").val(poandsSize)
					//$("#tr_cattle").val(route)
					
					$("#mobileC").val(mobile_no)
					$.afui.loadContent("#cattle_page",true,true,'right'); 
				   
			   }
			   
												
			   if(farm_type=='AQUA'){
				   	$("#aqua_farm_id_text").val(farm_Id);
					$("#addCNameA").val(farm_name)
					$("#addAOName").val(owner_name)
					$("#addressAq").val(address)
					$("#addCDOBa").val(dob)
					$("#anniversaryA").val(anniversary)
					$("#chemist_medicine_a").val(medicine)
					$("#managerA").val(manger_name)
					$("#consultantA").val(consultant_name)
					$("#birds_animal_a").val(birds_animal)
					
					$("#addCCategoryA").val(category)
					$("#feedingA").val(feeding)
					$("#addCPhoneA").val(poandsSize)
					//$("#tr_aqua").val(route)
					
					$("#mobileA").val(mobile_no)
					$.afui.loadContent("#aqua_page",true,true,'right'); 
				   
			   }											
										

												
												
											}
									   }
									   }
							 });//end ajax
							
//							 
//							
								


	$("#myerror_chemist_prof").html('' )
	$("#wait_image_chemProf").hide();
	
	
}


 //Nazma Azam 2019-06-23 end






function back_page_farm() {	
	//localStorage.farm_combo_val_tr=''
	$.afui.loadContent("#farm_Page",true,true,'right');
}


//				Nazma Azam 2019-01-29 Poultry Insert End


function poultryImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_poultryImage, onFail_poultryImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_poultryImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImagepoultry');
    image.src = imageURI;
	imagePath = imageURI;
	$("#poultryPhoto").val(imagePath);
	

		
}
function onFail_poultryImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}

//====
function cattleImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_cattleImage, onFail_cattleImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_cattleImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImagecattle');
    image.src = imageURI;
	imagePath = imageURI;
	$("#cattlePhoto").val(imagePath);
	

		
}
function onFail_cattleImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}
//===

//====
function aquaImage() {
	//navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		//destinationType: Camera.DestinationType.FILE_URI });
   navigator.camera.getPicture(onSuccess_aquaImage, onFail_aquaImage, { quality: 90,
		targetWidth: 400,
		destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });
		
}
function onSuccess_aquaImage(imageURI) {
	//alert ('Success')
    var image = document.getElementById('myImageaqua');
    image.src = imageURI;
	imagePath = imageURI;
	$("#aquaPhoto").val(imagePath);
	

		
}
function onFail_aquaImage(message) {
	//alert ('Fail')
	imagePath="";
    alert('Failed because: ' + message);
}




function page_Link() {	
	
	
						
	//localStorage.linkStr_combo=linkStr_combo;	
	//alert (localStorage.linkStr_combo)								
	$('#page_link_lv').empty();
	$('#page_link_lv').append(localStorage.linkStr_combo);	
	
	
	$.afui.loadContent("#page_link",true,true,'right');
}


  //Nazma Azam 2019-06-18 end