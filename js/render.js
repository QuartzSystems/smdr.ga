(function() {
    var smdr = new Smdr();
    if(smdr.getState.empty) location.assign("/");
    var documentText = smdr.getDocument();
    var renderedText = new Markdown.getSanitizingConverter().makeHtml(documentText);
    var $rendered = $('#rendered');
    $rendered.html(renderedText);
})();