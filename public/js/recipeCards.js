///////////////////////////////////////////////
/////   Lower case are regular comments   /////
///////////////////////////////////////////////
/////      UPPER CASE ARE TO DO ITEMS     /////
///////////////////////////////////////////////


//Show results container
$(document).on("click", ".activate-results", showResults);
function showResults() {
    $('#results').removeClass("hide");

    // build results
    buildResults();

    //scroll to results
    var position = $('#results').offset().top;
    $("body, html").animate({
        scrollTop: position
    } /* speed */);
}
// Builds Results container and gets DB info
function buildResults() {
    $.ajax("/api/recipes", {
        type: "GET"
    }).then(function(data) {
        console.log(data)
        console.log("All recipes grabbed");
        for (var i in data){
            $(makeCard(data[i])).appendTo("#results-cards")
        }
    }); 
}
// Makes a single card with the given object
function makeCard(obj) {

    var a = $('<a>', { class: 'modal-trigger card-link', href: "#modal1", id: obj.recipe_id });
    var card = $('<div>', { class: 'card small left' }).appendTo(a);
    var cardIMG = $('<div>', { class: 'card-image' }).appendTo(card);
    $('<img>', { src: 'images/sample-1.jpg' }).appendTo(cardIMG);
    var content = $('<div>', { class: 'card-content' }).appendTo(card);
    $('<span>', { class: 'card-title' }).text(obj.name).appendTo(content);


    return a;
}


