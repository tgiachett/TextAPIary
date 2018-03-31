
//TRIGGER DIARY TEXT MODAL
$(document).ready(function(){
  $("#hex-modal").click((event)=> {
    let popupText = $(this).val();
    $(this).attr("id", "click-hex");
    $("click-hex").modal();
    $("#home").hide();
    $("#selected-entry").text(popupText);
  });

//ACCEPT PHONE NUMBER
  $("#phone-login-btn").click((event) => {
  	event.preventDefault();
  	console.log("Clicked!");
		let phoneNumber = $("#insert-phone").val().trim();
		console.log(typeof phoneNumber);
		let from = "+1";
  	if (typeof phoneNumber === "string" && phoneNumber.toString().length === 10) {
  		from += phoneNumber;
  		console.log(from);
  		$("html, body").animate({
	        scrollTop: $("#home").offset().top
	    }, 1000);
  	}
  	else {
  		console.log("Not a valid phone number.");

  		//USER VALIDATION HERE
  	}
  	$.ajax({
  		method: "GET",
  		url: "/api/from_" + from
  	}).then((res) => {
        console.log(res);
        for (let i=0; i<16; i++){
          let hexText = res[i].comBody;
          const id = `#middle_${i}`;
          $(id).text("hello");
          // $(id).text(hexText);
        }
  			// let userEntries = res.body;
  			// let hexEntries = [];
  			// userEntries.forEach((entry)=> {
  			// 	hexEntries.push(entry.comBody);
  			// });
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
