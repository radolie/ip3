$(document).ready(function () {
    $("#sub").click(function (event) {
        event.preventDefault();
        var Number = $("#number").val();
        console.log(Number);
        var num = [];
        for (var i = 1; i <= Number; i++) {
            if (i % 15 === 0) {
                num.push("pingpong");
            } else if (i % 5 === 0) {
                num.push("ping");
            } else if (i % 3 === 0) {
                num.push("pong");
            } else {
                num.push(i);
            }
        }
        for (i = 0; i <= num.length; i++) {
            $("#display").html("<ul>" + num + "</ul>");
        }

    });

});
