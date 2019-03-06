var Loading = {
    
show: function() {
    var template = '<document><loadingTemplate><activityIndicator><text>Loading</text></activityIndicator></loadingTemplate></document>';
    var templateParser = new DOMParser();
    var parsedTemplate = templateParser.parseFromString(template, "application/xml");
    navigationDocument.pushDocument(parsedTemplate);
},
    
}
