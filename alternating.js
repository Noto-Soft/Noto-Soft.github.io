$(".alternating").each(function(index) {
    var originalText = $( this ).text();
    var newText = "";
    for(var i = 0; i < originalText.length; i++) {
        if (i < originalText.length - 1) {
            if (i % 2 === 0)
                newText += "<span class='a'>" + originalText.charAt(i) + "</span>";  
            else
                newText += "<span class='b'>" + originalText.charAt(i) + "</span>";
        } else {
            newText += "<span class='c'>" + originalText.charAt(i) + "</span>";
        }
    }
    $(this).html(newText);
});