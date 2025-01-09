This is a Firefox extension that removes text blocks that contain words from a list. Stop seeing news about a topic that you want nothing to do with!

## How to Load this Extension in Firefox

1. Zip or keep the folder as is. Make sure it has the manifest.json at the top level.
2. In Firefox, go to `about:debugging#/runtime/this-firefox`.
3. Click “Load Temporary Add-on…” (or “Load Temporary Extension” in newer versions).
4. Select the `manifest.json` file from the `firefox-text-remover/` directory.

Your extension should now be active. If you navigate to a page containing any of the default blacklisted words ("badword", "example") in plain text, those words should be replaced with `"[REMOVED]"`. You can open the Options page from the extension’s listing to update the blacklist.
