
/**
 * This funnction returns an alert template, which can be used to present errors to the user.
 */
var DialogManager = {

makeDialog: function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <alertTemplate>
    <title>${title}</title>
    <description>${description}</description>
    <button>
    <text>OK</text>
    </button>
    </alertTemplate>
    </document>`
    
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    alertDoc.addEventListener("select", function() {
                              navigationDocument.dismissModal()
                              })
    return alertDoc
},
    
}


