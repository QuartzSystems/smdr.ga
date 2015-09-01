(function() {
    //LIB
    var Smdr = function() {   
        this.getSession = function() {
            return localStorage.getItem("smdr-sessionData") ? JSON.parse(localStorage.getItem("smdr-sessionData")) : {
                empty: true
            };
        };
        var state = this.getSession();
        this.setSession = function(obj) {
            localStorage.setItem("smdr-sessionData", (JSON.stringify(obj) != "" ? JSON.stringify(obj) : "{}"));
            return this;
        };
        this.save = function() {
            return this.setSession(state);
        };
        this.setState = function(obj) {
            state = obj;
            return this;
        };
        this.clearSession = function() {
            this.setState({empty: true});
            this.save();
        };
        this.getState = function() {
            return state;
        }
        this.getDocument = function() {
            return this.getState().document.text;
        }
        this.setDocument = function(text) {
            state.document.text = text;
            return this;
        };
    };
    window.Smdr = Smdr;
})();