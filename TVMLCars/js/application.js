//# sourceURL=application.js

//
//  application.js
//  TVMLCars
//
//  Created by Hellen Soloviy on 3/6/18.
//  Copyright © 2018 Hellen Soloviy. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is
 * configured in the AppDelegate of the TVML application. Note that  the various
 * javascript functions here are referenced by name in the AppDelegate. This skeletal
 * implementation shows the basic entry points that you will want to handle
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript
 * has been parsed into a JavaScript context. The handler is passed an object
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents
 * the URL that was used to retrieve the application JavaScript.
 */

var resourceLoader;

App.onLaunch = function(options) {
    var javascriptFiles = [
                           `${options.BASEURL}/ResourceLoader.js`,
                           `${options.BASEURL}/Presenter.js`,
                           `${options.BASEURL}/DialogManager.js`
                           ];
    evaluateScripts(javascriptFiles, function(success) {
                    if(success) {
                    resourceLoader = new ResourceLoader(options.BASEURL);
                    resourceLoader.loadResource(`${options.BASEURL}/templates/CarsParade.xml.js`, function(resource) {
                                                var doc = Presenter.makeDocument(resource);
                                                    Presenter.pushDocument(doc);
                                                });
                    } else {
                        var errorTitle = "Evaluate Scripts Error";
                        var errorMessage = "Error attempting to evaluate external JavaScript files."
                        var alert = DialogManager.makeDialog(errorTitle, errorMessage);
                        navigationDocument.presentModal(alert)
                    }
                });
}

App.onWillResignActive = function() {
    
}

App.onDidEnterBackground = function() {
    
}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}

App.onWillTerminate = function() {
    
}
