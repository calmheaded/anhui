	//下面切到一个js文件里 然后引入 
	 	// 左侧菜单显示隐藏
		 $(function(){
		 	if($(window).width()>1350){
		 		$('#sidebar').animate({'left':0},0,function(){
				});

		 	}
		 	
		 	else if($(window).width()>1530){
		 		$('#sidebar').animate({'left':0},0,function(){
				});
		 	}
		 	else if($(window).width()>1850){
		 		$('#sidebar').animate({'left':0},0,function(){
				});
		 	}
		 	$(window).on('resize',function(){
			if($(window).width()>1350){
				$('#sidebar').animate({'left':0},0,function(){
				});

			}
					 		
		 	});	 

		 		// 
		 	$('#show-sidebar').on('click',function(){								
				$('#sidebar').animate({'left':0},300,function(){
				});
			});
			$('.mask').on('click',function(){
				$('.mask').fadeOut();
				$('#sidebar').animate({'left':-300},300,function(){					 
				});
			});
			$('#sidebar span').on('click',function(){
				$('.mask').fadeOut();
				$('#sidebar').animate({'left':-300},300,function(){					 
				});
			});


		 });

		

	$(function(){


	// 创建一级菜单函数
	function createMenu(arrMenu){
		 	var oUl= document.getElementById('ul1');
			var aA= oUl.getElementsByTagName('a');
			var html = '';
			for(var i = 0;i<arrMenu[0]['name'].length;i++){
				html+='<li><a  javascript:; >'+arrMenu[0]['name'][i]+'</a></li>';
			}			
			oUl.innerHTML =html;
		 }
		 createMenu(arrOne);//默认首页二级菜单



	// 创建tab分类菜单函数  固定数目
	function createLi(arrMenu,num){
			// var onOFf =true;
			if(true){
				var tabUl= document.getElementById('tabul'); 
				var oFrag= document.createDocumentFragment();
				for(var i=0;i<arrMenu[2]['tabTitle'][num].length;i++){
					var aLi = document.createElement('li');	
					oFrag.appendChild(aLi);		
					aLi.innerHTML=arrMenu[2]['tabTitle'][num][i];
				}				
				tabUl.appendChild(oFrag);	
				// onOff= false;
			}
			$('#tabul li:first').addClass('active');//每次创建默认给第一个添加选中状态
			
		}

// 



$('#sidebar li').each(function(){
	 $(this).click(function(index){
	 	 $('#sidebar li.active').removeClass('active');
	 	  $(this).addClass('active');
	 	  //一级点击后                                下面可以封装一下
				 if($(this).index()==1){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	 $('#ul1').html(createMenu(arrOne,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[0]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//时间按钮回到第一个
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(3).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrOne,3);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//

						 });
					});
					$('#ul1 li').eq(4).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrOne,4);

						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});				
					$('#ul1 li').eq(6).click(function(){						
								 $('#tabul').html('');
								 createLi(arrOne,6);
								 $('#moreul ul').html('');//清空更多列表
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	
					$('#ul1 li').eq(8).click(function(){						
								 $('#tabul').html('');
								 createLi(arrOne,8);
								 $('#moreul ul').html('');//清空更多列表
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	

				 }//if


				 	

				  //2级点击后
				 if($(this).index()==2){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	 $('#ul1').html(createMenu(arrTwo,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[1]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(1).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrTwo,1);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					$('#ul1 li').eq(2).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrTwo,2);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});	
					$('#ul1 li').eq(4).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrTwo,4);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});		
				$('#ul1 li').eq(5).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrTwo,5);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});							
				$('#ul1 li').eq(9).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrTwo,9);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});		

				 }//if2

				 //3级点击后
				 if($(this).index()==3){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	 $('#ul1').html(createMenu(arrThree,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[2]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });
				 	 // 更多部分************************特殊部分 可以去掉  换成一个页面
				 function createMOre(){
									var tabUl= document.getElementById('tabul'); 
									var oFrag= document.createDocumentFragment();
									var aSpan = document.createElement('span');
									aSpan.innerHTML='更多';	
									oFrag.appendChild(aSpan);											
									tabUl.appendChild(oFrag);														
						}
						
				
				  $('#ul1 li').eq(1).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrThree,1);
						 createMOre();
						 // 更多点击部分
						
						 function createMore(){
						 	var oFrag=document.createDocumentFragment();
							for(var i =0;i<morearr.length;i++){
								var oLi=document.createElement('li');
								oLi.innerHTML=morearr[i];
								oFrag.appendChild(oLi);
							}
							$('#moreul ul').html('');
							$('#moreul ul').get(0).appendChild(oFrag);

						 }
						$('#tabul span').click(function(){
							createMore();
							$('#moreul ul').slideToggle();
							
							
						});
						


						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});  
				 $('#ul1 li').eq(2).click(function(){
						 $('#tabul').html('');
						 createLi(arrThree,2);
						 $('#moreul ul').html('');//清空更多列表
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					$('#ul1 li').eq(3).click(function(){
						 $('#tabul').html('');
						 createLi(arrThree,3);
						 $('#moreul ul').html('');//清空更多列表
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});				
					$('#ul1 li').eq(4).click(function(){						
								 $('#tabul').html('');
								 createLi(arrThree,6);
								 $('#moreul ul').html('');//清空更多列表
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	
					$('#ul1 li').eq(5).click(function(){						
								 $('#tabul').html('');
								 createLi(arrThree,5);
								 $('#moreul ul').html('');//清空更多列表
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	
					$('#ul1 li').eq(6).click(function(){						
								 $('#tabul').html('');
								 createLi(arrThree,6);
								 $('#moreul ul').html('');//清空更多列表
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	

				 }//if3

			//4级点击后
				 if($(this).index()==4){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	 $('#ul1').html(createMenu(arrforw,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[3]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(1).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrforw,1);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					$('#ul1 li').eq(2).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrforw,2);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});				
					$('#ul1 li').eq(3).click(function(){						
								 $('#tabul').html('');
								 $('#moreul ul').html('');//清空更多列表
								 createLi(arrforw,3);
								 $('#tabul li').click(function(){
								 	$(this).addClass('active').siblings('li').removeClass('active');
								 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
								 });
							});	
					
				 }//if4

				 //5级点击后
				 if($(this).index()==5){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	 createLi(arrfive,0);
				 	 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 });
				 	 $('#ul1').html(createMenu(arrfive,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[4]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(0).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrfive,0);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					
					
				 }//if5

				  //6级点击后
				 if($(this).index()==6){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	createLi(arrsix,0);
				 	$('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');//给点击换色
						 }); 
				 	 $('#ul1').html(createMenu(arrsix,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[5]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(0).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrsix,0);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					
					
				 }//if6
				  //7级点击后
				 if($(this).index()==7){
				 	$('#moreul ul').html('');//清空更多列表
				 	$('#tabul').html('');//清空tabLi 列表
				 	 createLi(arrSeven,0);
				 	 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 });
				 	 $('#ul1').html(createMenu(arrSeven,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[6]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(0).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrSeven,0);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					
					
				 }//if7
				  //8级点击后
				 if($(this).index()==8){
				 	$('#tabul').html('');//清空tabLi 列表
				 	$('#moreul ul').html('');//清空更多列表
				 	createLi(arrEight,0);
				 	$('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
				 	//加载时点击初始化			 	
				 	 $('#ul1').html(createMenu(arrEight,0,'name'));//创建tabLi 列表
				 	 $('#header title').text(arrTitle[7]); //头部title
				 	 $('#ul1 li:first').addClass('active'); //二级第一个菜单增加选中状态
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//每一次点击时间回到其实位置
				 	 $('#ul1 li').click(function(){   
						 $('#tabul').html('');
						 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
					});
				 	  $('#ul1 li').each(function(){       //没一个点击增加选中状态
						$(this).click(function(){							 
							  $('#ul1 li.active').removeClass('active');
							  $(this).addClass('active');
						});
				  				 				
				     });


				 $('#ul1 li').eq(0).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,0);
						 $('#tabul li').click(function(){

						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
				 $('#ul1 li').eq(1).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,1);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
				  $('#ul1 li').eq(2).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,2);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
				   $('#ul1 li').eq(3).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,3);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
				    $('#ul1 li').eq(4).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,4);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					 $('#ul1 li').eq(5).click(function(){
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrEight,5);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					  $('#ul1 li').eq(6).click(function(){
						 $('#tabul').html('');
						 createLi(arrEight,6);
						 $('#moreul ul').html('');//清空更多列表
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});
					
				 }//if8

	 });//click
});//each



// 选中状态 
		$('#ul1 li:first').addClass('active');		//二级菜单
		$('#ul1 li').each(function(){
				    //每个点击加选中状态样式
			 $(this).click(function(index){	
				 $('#ul1 li.active').removeClass('active');
				 $(this).addClass('active');							 				
				 });

		 });	

//每个按钮点击 清除tabli 
			$('#ul1 li').click(function(){   
				 $('#tabul').html('');
				 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
			});


// 页面加载时击创建tab菜单
		
			$('#ul1 li').eq(3).click(function(){
				$('#moreul ul').html('');//清空更多列表
				 $('#tabul').html('');
				 createLi(arrOne,3);
				 $('#tabul li').click(function(){
				 	$(this).addClass('active').siblings('li').removeClass('active');
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//

				 });
			});
			$('#ul1 li').eq(4).click(function(){
				$('#moreul ul').html('');//清空更多列表
				 $('#tabul').html('');
				 createLi(arrOne,4);
				 $('#tabul li').click(function(){
				 	$(this).addClass('active').siblings('li').removeClass('active');
				 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
				 });
			});				
			$('#ul1 li').eq(6).click(function(){						
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrOne,6);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});	
			$('#ul1 li').eq(8).click(function(){						
						 $('#tabul').html('');
						 $('#moreul ul').html('');//清空更多列表
						 createLi(arrOne,8);
						 $('#tabul li').click(function(){
						 	$(this).addClass('active').siblings('li').removeClass('active');
						 	 $('#timerlist li:first').addClass('active').siblings('li').removeClass('active');//
						 });
					});	
// 创建时间列表的
				function createTimer(){							
							var oTimer = $('#timerlist').get(0);
                            var oUlt =oTimer.getElementsByTagName('ul')[0]; 
                            var oFrag= document.createDocumentFragment();    
                            oUlt.innerHTML='';
                            for(var i=0;i<timers.length;i++){
                                var aLi = document.createElement('li');
                                // var str =obj[1][i].substring(3,5)+obj[1][i].substring(9,11); 
                                  var str =Number(timers[i].slice(8,10))+8+timers[i].slice(10,12); 
                                  // var str = timers[i];
                                aLi.innerHTML=str ;
                                oFrag.appendChild(aLi);

                              }

                        oUlt.appendChild(oFrag);
                         $('#timerlist li:first').addClass('active');
                        }
		 
		createTimer();		

 // 时间列表点击加样式
		$('#timerlist li').click(function(){
			$('#timerlist').find('li').attr('class','');
			$(this).addClass('active'); 
		});	



// 上一张下一张 功能
		$('.next').click(function(){
			var _index =$('#timerlist li').filter('.active').index();
			_index++;
			var len=$('#timerlist li').size();
			$('#timerlist li').attr('class','');
			$('#timerlist li').eq(_index).addClass('active');
	   		if(_index==len){			
			$('#timerlist li').eq(0).addClass('active');
			_index=0;		
			}
			// return false;
		});
		$('.prev').click(function(){
			var len=$('#timerlist li').size();
			var _index =$('#timerlist li').filter('.active').index();
			_index--;
			$('#timerlist li').attr('class','');
			$('#timerlist li').eq(_index).addClass('active');
			if(_index==0){					
				
			}
		});



	});
	
