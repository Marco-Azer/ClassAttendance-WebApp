$('form.insert-user').on('submt',function(){
	var action = $this.attr('action');
	var method = $this.attr('method');
	var data = {};

	$this.find('[name]').each(function(index, value){
		var name = $this.attr('name');
		var val = $this.val();

		data[name] = val;
	});
	
	$.ajax({
		url: action,
		type: method,
		data: data,
		success:function(response){
			
		}
	});

	return false;
});