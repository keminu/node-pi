var counter = 0;
var poll = function() {
    $.getJSON('/poll/' + counter, function(response) {
        counter = response.counte;
        var elem = $('#output');
        elem.text(elem.text() + response.append);
        poll();
    })
}
poll();
