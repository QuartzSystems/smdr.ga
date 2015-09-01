(function() {
    var smdr = new Smdr();
    if(smdr.getState().empty) {
        smdr.setState({
            document: {
                text: ""
            }
        });
    }
    var documentText = smdr.getDocument();
    var $textField = $('#mainTextEntryField');
    var $goButton = $('#goButton');
    $textField.val(documentText);
    var resolveDocument = function() {
        smdr.setDocument($textField.val());
    };
    $textField.blur(function() {
        resolveDocument();
    })
    $textField.change(function() {
        resolveDocument();
    });
    $goButton.click(function() {
        resolveDocument();
        smdr.save();
        location.assign("/render");
    });
    setInterval(function() {
        resolveDocument();
        smdr.save()
    }, 500);
})();