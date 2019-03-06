
/**
 * This funnction returns an alert template, which can be used to present errors to the user.
 * Here is only one button with default dismiss action
 */
var DialogManager = {

makeDefaultDialog: function(title, description) {
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
    
    ///This actions is for default dissmiss by tapping "OK" button
    alertDoc.addEventListener("select", function() {
                              navigationDocument.dismissModal()
                              })
    return alertDoc
},
    
}


