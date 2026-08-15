---
product: Mnemosyne
updated: "2026-08-16"
verifiedAgainstBuild: "2026-08-16"
---

## 1. Summary

**Mnemosyne is a local desktop app: it does not create accounts or send the contents of learning materials to servers operated by us.** PDFs, recordings, OCR output, and search indexes are stored on your Windows computer.

## 2. What is stored

Mnemosyne stores the following information only on your computer to provide its features.

| Item | Contents | Location |
|---|---|---|
| Profile name or nickname | The display name you enter on first launch | `%LOCALAPPDATA%\Bookworm\profile.json` |
| Project information | Project name, course or term, color, and creation time | `%LOCALAPPDATA%\Bookworm\projects.json` |
| Imported material | Source PDFs or ZIP files, and pages or audio extracted from ZIP files | `%LOCALAPPDATA%\Bookworm\books\…` |
| Processing results | PDF text, OCR text, audio transcripts, search vectors, and the SQLite search index | `%LOCALAPPDATA%\Bookworm\books\…`, `index.sqlite3` |

This information is used only to provide the app's features. We do not view it or use it for advertising, analytics, or model training.

## 3. Network communication

Mnemosyne's user interface and processing engine communicate only through `127.0.0.1` (loopback) on the same computer. That traffic never leaves the device, and imported materials and search queries are not sent to servers operated by us.

The embedding model uses only files already available locally. If the speech-recognition model is not available on the device, the speech-recognition library may download its public model files. Your materials, recordings, and search queries are not sent with that download, but the model provider may process ordinary download connection data, such as an IP address. Once the model is available, OCR, transcription, and search run locally.

Mnemosyne uses no operator-run server, account authentication, analytics, advertising SDK, or crash-reporting service.

## 4. Retention and deletion

Data remains on your computer until you delete it.

- Choosing **Delete document** in the app removes that document's source file, extracted pages or audio, OCR or transcription output, and search data.
- Choosing **Delete project** removes every document in that project and their search data.
- Uninstalling the app may not automatically remove its user-data folder. To erase all local data, you may delete `%LOCALAPPDATA%\Bookworm` yourself.

Deletion applies to local storage on the current device. Mnemosyne maintains no remote copy of this data.

## 5. Third-party sharing and permissions

Mnemosyne does not sell or share personal information with third parties. It uses file access only to read files you choose and write processing results to its user-data folder. It does not access your camera, microphone, location, contacts, browsing history, or other account data.

## 6. Your choices and rights

You can delete documents and projects within the app, and you can inspect, change, or delete data directly in the storage location above. Since no user account or user data is stored on our servers, there is no separate account-deletion process.

## 7. Children under 14

Mnemosyne is not directed at children under 14. It has no account or remote personal-data collection features, but minors should use learning material in accordance with their guardian's and educational institution's guidance.

## 8. Changes

If a future version introduces server transmission, accounts, analytics, or additional permissions, this policy will be updated before that version ships. Changes take effect when published.

