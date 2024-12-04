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