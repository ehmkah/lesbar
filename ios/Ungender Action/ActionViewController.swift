//
//  ActionViewController.swift
//  Ungender Action
//
//  Created by alex2 on 8/14/18.
//  Copyright © 2018 de.ungender. All rights reserved.
//

import UIKit
import MobileCoreServices
import WebKit

class ActionViewController: UIViewController, WKNavigationDelegate {

    @IBOutlet weak var webView: WKWebView!

    let michasScript = """
                        var script = document.createElement('script');
                        script.onload = function () {
                            transform();
                        };
                        script.src = "https://rawgit.com/ehmkah/lesbar/master/ios/callScript.js";
                        document.head.appendChild(script);
                       """

    override func viewDidLoad() {
        super.viewDidLoad()
        webView.navigationDelegate = self

        for item in self.extensionContext!.inputItems as! [NSExtensionItem] {
            for provider in item.attachments! as! [NSItemProvider] {
                if provider.hasItemConformingToTypeIdentifier(kUTTypeURL as String) {
                    provider.loadItem(forTypeIdentifier: kUTTypeURL as String, options: nil) { (siteUrl, _) in
                        if let url = siteUrl as? URL {
                            self.webView.load(URLRequest(url: url))
                        }
                    }
                }
            }
        }
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        webView.evaluateJavaScript(michasScript) { (_, _) in
            print("finished script")
        }
    }

    @IBAction func done() {
        // Return any edited content to the host app.
        // This template doesn't do anything, so we just echo the passed in items.
        self.extensionContext!.completeRequest(
            returningItems: self.extensionContext!.inputItems,
            completionHandler: nil)
    }

}
