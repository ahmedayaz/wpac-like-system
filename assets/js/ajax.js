function wpac_like_btn_ajax(postId,usrid) {
    
	var post_id = postId;
	var usr_ID = wpac_ajax_url.user_id;
	console.log(usr_ID);
		jQuery.ajax({
			url : wpac_ajax_url.ajax_url,
			type : 'post',
			data : {
				action : 'wpac_like_btn_ajax_action',
				pid : post_id,
				uid : usr_ID
			},
			success : function( response ) {
				jQuery("#wpacAjaxResponse").fadeIn();
				jQuery("#wpacAjaxResponse span").html(response);
				jQuery("#wpacAjaxResponse").delay(5000).fadeOut();
			}
		});
	
}

function wpac_dislike_btn_ajax(postId,usrid) {
    
	var post_id = postId;
	var usr_ID = wpac_ajax_url.user_id;
	jQuery.ajax({
		url : wpac_ajax_url.ajax_url,
		type : 'post',
		data : {
			action : 'wpac_dislike_btn_ajax_action',
			pid : post_id,
			uid : usr_ID
		},
		success : function( response ) {
			jQuery("#wpacAjaxResponse").fadeIn();
			jQuery("#wpacAjaxResponse span").html(response);
			jQuery("#wpacAjaxResponse").delay(5000).fadeOut();
		}
	});
	
}