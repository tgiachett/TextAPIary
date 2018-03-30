
//TRIGGER DIARY TEXT MODAL
$(document).ready(function(){
  $("#hex-modal").click((event)=> {
  	$(this).attr("id", "click-hex");
  	$("click-hex").modal();
  	$("#home").hide();
  });

//ACCEPT PHONE NUMBER
  $("#phone-login-btn").click((event) => {
  	event.preventDefault();
 
		let phoneNumber = $("#insert-phone"); 
		let from;
  	if (typeof phoneNumber === "number" && phoneNumber.toString().length === 10) {
  		from = "+1" + phoneNumber;
  		$("html, body").animate({
	        scrollTop: $(".center-me").offset().top
	    }, 1000);
  	}
  	else {
  		console.log("Not a valid phone number.");
  		//USER VALIDATION HERE
  	}
  	$.ajax({
  		method: "GET",
  		url: "/api/from_" + from
  	}).then((err, res) => {
  		if (err) {
  			throw err;
  		} 
  		else {
  			let userEntries = res.body;
  			let hexEntries = [];
  			userEntries.forEach((entry)=> {
  				hexEntries.push(entry.comBody);
  			});
  		}
  	});
  });

//UPDATE METHOD
  $("#submit-edit").click((event) => {
  	event.preventDefault();
  	let updatedEntry = $("#inputText").val().trim();
		let id = $(this).id;
  	$.ajax({
  		method: "PUT",
			url: "/api/update", 
			data : {
				id: id,
				comBody: updatedEntry, 
			}
  	}).then(() => {
  		console.log("Entry updated!");
  		location.reload();
  	});
  });

//DELETE METHOD
  $("#delete-hex").click((event) => {
	 let id = $(this).id;
  	event.preventDefault();
  	$.ajax({
  		method: "DELETE",
  		url: "/api/entry_" + id
  	}).then(()=>{
  		console.log("Entry" + id +" has been deleted.");
  		location.reload();
  	});
  });

});

//reload page on home click
$("#home").click((event) => {
	event.preventDefault();
	location.reload();
});

// MOCHA CHAI TEST EXPORTS
// module.exports = clientJS;

// SAMPLE PUT using edit button
  // $("#submit-edit").click((event) => {
  // 	event.preventDefault();
  // 	let updatedEntry = $("#inputText").val().trim();
		// let id = $(this).id;
  // 	$.ajax("/api/", {
  // 		method: "PUT",
		// 	id: id, 
		// 	comBody: updatedEntry
  // 	}).then(() => {
  // 		console.log("Entry updated!");
  // 		location.reload();
  // 	});
  // });

// SAMPLE DELETE using delete button
	// $("#delete-hex").click((event) => {
	//  let id = $(this).id;
 //  	event.preventDefault();
 //  	$.ajax("/entry_:id", {"id": id})
 //  		.then(()=>{
 //  		console.log("Entry deleted.");
 //  		location.reload();
 //  	});
 //  });
