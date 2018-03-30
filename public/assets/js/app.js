//FOR RELOADING LOCATION TO UPDATE PAGE
// $(function () {
// 	$("#hexmodal").click((event) => {
// 		event.preventDefault();
// 		var id = $(this).attr("click-hex");
// 		$.ajax(somestuff, {
// 			//...
// 		}).then(function () {
// 			location.reload();
// 		});
// 	});
// });

//TRIGGER DIARY TEXT MODAL
$(document).ready(function(){
  $("#hex-modal").click((event)=> {
  	$(this).attr("click-hex");
  	$("click-hex").modal();
  });
});
