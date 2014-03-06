$(function() {
	$(".isdelete").popover({
		"html": true,
		"title": "确定要删除这个活动吗",
		"placement": "left",
		"content": function() {
			var $dv = $('<div class="row">' + '<div class="col-md-3 col-md-offset-1"><button type="button" class="btn btn-primary btn-sm">确定</button></div>' + '<div class="col-md-3"><button type="button" class="btn btn-default btn-sm" style="margin-left:10px">取消</button></div>' + '</div>');
			$dv.children().eq(1).click(function(){
				$(".isdelete").popover('hide');
			})
			return $dv;
			// var $div = $('<p/>');
			// var $true = ('');
			// var $cancel = ('');
			// $div.append($true).append($cancel);
			// return $div;
		}
	})
})