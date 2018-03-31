
$(document).ready(function() {

  //TRIGGER DIARY TEXT MODAL
  $(".middle").click((event)=> {
  	$(this).attr("id", "click-hex");
    let popupText = $("#click-hex").text();
    console.log(popupText);
  	$("#hex-modal").modal();
  	$("#selected-entry").text(popupText);
  });

  //ACCEPT PHONE NUMBER
  $("#phone-login-btn").click((event) => {
  	event.preventDefault();
    $(".center-test").hide();
  	console.log("Clicked!");
		let phoneNumber = $("#insert-phone").val().trim();
		console.log(typeof phoneNumber);
		let from = "+1";
  	if (typeof phoneNumber === "string" && phoneNumber.toString().length === 10) {
  		from += phoneNumber;
  		console.log(from);
  		$("html, body").animate({
	        scrollTop: $("#first_row").offset().top
	    }, 1000);
      $.ajax({
        method: "GET",
        url: "/api/from_" + from
      }).then((res) => {
        console.log(res);
        for (let i=0; i<16 && i<res.length; i++){
            let hexText = res[i].comBody;
            const id = `#middle_${i}`;
            $(id).text(hexText);
        }
      });
  	}
  	else {
  		console.log("Not a valid phone number.");
  		$("#wrongNumModal").modal("toggle");
  	}
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
// module.exports = someVar;


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
