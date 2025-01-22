function deleteBook(BookId,ButtonRef){
    if(ButtonRef!=null){
        //collect Data empty
        //Ajax call
        $.ajax({
            url :"Ajax/prwebStep2.json",
            method :"POST",
            data :{
                "bookID" : BookId,
            },
            success : function(theResult){
                // get current TR
                var ref = ButtonRef;
                while ((ref!== null) && (ref.tagName!== "TR")) {
                    ref = ref.parentElement;
                }
                if (ref!== null) {
                    ref.parentElement.removeChild(ref);
                }
            },
            error : function(theResult, theStatus, theError) {
                console.log("Error : "+theStatus+" - "+theResult);
            }
        });
    }
}

function returnBorrowSuccess(theResult, buttonRef) {
  if (buttonRef !== null) {
    // Get TD that owns the button
    var refTD = buttonRef.parentElement;
    if (refTD !== null) {
      // Remove button
      refTD.removeChild(buttonRef);
      // Set return date
      var currentDate = new Date(((Date)(theResult.returnedValue)));
      var currentDateStr = currentDate.toLocaleDateString();
      var text = document.createTextNode(currentDateStr);
      refTD.appendChild(text);
    }
  }
}

function returnBorrow(buttonRef, borrowId) {
  if (borrowId > 0) {
    // Collect data - empty

    // Ajax call
    $.ajax({
      url: "returnBorrow.do",
      method: "POST",
      data: {
        "id": borrowId,
      },
      success: function (theResult) {
        returnBorrowSuccess(theResult, buttonRef);
      },
      error: function (theResult, theStatus, theError) {
        console.log("Error : " + theStatus + " - " + theResult);
      }
    });
  }
}