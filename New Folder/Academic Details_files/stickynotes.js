/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
$("#notediv").hide();
    $("body").height($(window).height());
    $("body").delegate(".new-button","click",newNote);
    $("body").delegate(".delete-button","click",deleteNote);
    newNote();
});

function newNote() {
    var temp = $("#note-template").html();
    $("<div class='note'></div>").html(temp)
                .appendTo("#note-space");
}

function deleteNote() {
    //$(this).parents(".note").remove();
    $("#notediv").hide();
}
