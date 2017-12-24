$(function(){
	var type = ''  //时间类型

	isSelect()

	$('.select-item').on('click', function(){
		$(this).children('.sbg').addClass('active').parent('.select-item').siblings().children('.sbg').removeClass('active')
		isSelect()
		type = $(this).data('type')
	})

	//提交订单
	$('.submit').on('click', function(){
		// console.log(type)
		setTimeout(function(){
			$('.popup-select').show()
		}, 1000)
	})

	// 知道了
	$('.know').on('click', function(){
		$('.popup-select').hide()
	})

})

function isSelect(){
	if($('.select-item').children('div').hasClass('active')){
		$('.submit').removeClass('disabled').removeAttr('disabled')
	}
}