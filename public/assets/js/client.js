
$(document).ready(function() {

  //TRIGGER DIARY TEXT MODAL
  $(".middle").click(function(event) {
  	$(this).attr("id", "click-hex");
    let popupText = $(this).text();
  	$("#hex-modal").modal();
  	$("#selected-entry").text(popupText);

    // SAMPLE DELETE using delete button
    $("#delete-hex").click((event) => {
      event.preventDefault();
      const id = $("#click-hex").attr("textId");
      $.ajax({
        method: "DELETE",
        url: "/api/entry_" + id
      }).then(() => {
        console.log("Entry deleted.");
        location.reload();
      });
    });

    //UPDATE METHOD
    $("#submit-edit").click((event) => {
      event.preventDefault();
      let updatedEntry = $("#inputText").val().trim();
      const id = $("#click-hex").attr("textId");
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
      $(".center-test").hide();
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
            let hexTextId = res[i].id;
            const id = `#middle_${i}`;
            $(id).text(hexText);
            $(id).attr("textId", hexTextId);
        }
      });
  	}
  	else {
  		console.log("Not a valid phone number.");
  		$("#wrongNumModal").modal("toggle");
  	}
  });

});

//reload page on home click
$("#home").click((event) => {
	event.preventDefault();
	location.reload();
});


// MOCHA CHAI TEST EXPORTS
// module.exports = someVar;
