var baseURL;

var CarsModelsBuilder = {
    
make: function() {
    baseURL = Constants.baseURL()
    var jsonURL = baseURL + 'resources/LamborghiniModels.json'
    Loading.show()
    this.getDocument(jsonURL)
},
    
getDocument: function(url) {
    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() { CarsModelsBuilder.parseJson(templateXHR.responseText);}, false);
    templateXHR.open("GET", url, true);
    templateXHR.send();
},
    
parseJson: function parseJson(information) {
    var results = JSON.parse(information);
    let parsedTemplate = this.templateDocument()
    navigationDocument.pushDocument(parsedTemplate)
    
    let shelf = parsedTemplate.getElementsByTagName("shelf").item(0)
    let section = shelf.getElementsByTagName("section").item(0)
    
    //create an empty data item for the section
    section.dataItem = new DataItem()
    
    //create data items from objects
    let newItems = results.map((result) => {
                               let objectItem = new DataItem(result.type, result.ID);
                               objectItem.url = baseURL + result.url;
                               console.log(result.url)
                               objectItem.title = result.title;
                               return objectItem;
                               });
    
    //add the data items to the section's data item; 'images' relates to the binding name in the protoype where items:{images} is all of the newItems being added to the sections' data item;
    section.dataItem.setPropertyPath("images", newItems)
    return results
},

templateDocument: function() {
    let template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <stackTemplate>
    <banner>
    <title>JSON Shelf</title>
    </banner>
    <collectionList>
    <shelf>
    <prototypes>
    <lockup prototype="artwork">
    <img binding="@src:{url};" width="200" height="300"/>
    <title binding="textContent:{title};" />
    </lockup>
    </prototypes>
    <section binding="items:{images};" />
    </shelf>
    </collectionList>
    </stackTemplate>
    </document>`;
    return new DOMParser().parseFromString(template, "application/xml");
},
    
}
