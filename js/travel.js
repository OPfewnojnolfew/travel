$(function() {
	$(".isdelete").popover({
		"html": true,
		"title": "确定要删除吗",
		"placement": "left",
		"content": function() {
			var that = this;
			var $dv = $('<div class="row">' + '<div class="col-md-3 col-md-offset-1"><button type="button" class="btn btn-primary btn-sm">确定</button></div>' + '<div class="col-md-3"><button type="button" class="btn btn-default btn-sm" style="margin-left:10px">取消</button></div>' + '</div>');
			$dv.find("button").eq(1).unbind("click").bind("click", function() {
				$(that).popover("toggle");
			})
			return $dv;
		}
	});
})