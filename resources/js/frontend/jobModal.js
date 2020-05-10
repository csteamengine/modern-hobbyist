$('#jobHighlightModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var jobTitle = button.data('title'); // Extract info from data-* attributes
    var description = button.data('description');
    var image = button.data('image');
    var tenure = button.data('tenure');
    var company = button.data('company');
    var url = button.data('url');
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text(jobTitle);
    modal.find('.modal-body-content').html(description);
    modal.find('.modal-body-image').attr('src',image);
    modal.find('.modal-body-date').text(tenure);
    modal.find('.modal-body-company').html(company);

    console.log(url.search('http'));
    if (url.search("http") < 0){
        url = "//" + url;
    }
    modal.find('.modal-body-url').attr('href', url);
});
