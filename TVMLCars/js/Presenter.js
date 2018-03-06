var Presenter = {

makeDocument: function(resource) {
    if (!Presenter.parser) {
        Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    doc.addEventListener("select", Presenter.load.bind(Presenter));
    return doc;
},
modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
},
    
pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
},
    
load: function(event) {
    var self = this,
    ele = event.target,
    id = ele.getAttribute("id")
    
    if (id == "Lamborghini") {
        var dialog = DialogManager.makeDialog('Lamborghini page!','There is no page for now but it will be here soon :)')
        this.modalDialogPresenter(dialog)
    } else {
        var dialog = DialogManager.makeDialog('404 Not Found!','No such page can be found. Maybe it is still in progress.')
        this.modalDialogPresenter(dialog)
    }
},

}
