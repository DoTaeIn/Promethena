---
product: Chronos
updated: "2026-08-15"
verifiedAgainstBuild: "2026-08-15"
---

## 1. Summary

**Chronos does not collect personal information.** No data is sent to any server we operate, and
settings stay inside your browser. This document describes exactly what the extension does so you
can verify that claim.

## 2. What is stored

Chronos stores exactly **one** item.

| Item | Contents | Where |
|---|---|---|
| Reaction time | The result of the click calibration test (a single number in milliseconds) | `chrome.storage.local` — your browser |

This value does not identify you and never leaves your browser. It is removed when you uninstall
the extension, and you can overwrite it by running the calibration again.

Estimated server time, round-trip time (RTT), and jitter are **not stored.** They exist in memory
only while displayed and disappear when the tab is closed.

## 3. Network requests

Chronos makes exactly **one kind** of request.

- A `HEAD` request to the address of the page you are currently viewing.
- Its purpose is to read the HTTP `Date` response header and calculate the difference between the
  server clock and your browser clock.
- This request goes only to **the site you are already visiting.** It includes that site's cookies
  the same way your browser normally would, and is not sent anywhere else.

We operate no server. The extension uses no analytics, advertising SDKs, or crash reporters.

## 4. Permissions and why they are needed

| Permission | Used for |
|---|---|
| `activeTab` | Running only in the tab where you clicked the extension icon |
| `scripting` | Drawing the countdown widget in that tab |
| `storage` | Saving the single reaction-time value in your browser |

Chronos requests no `host_permissions`. It therefore **does nothing on pages where you have not
clicked the icon**, and it does not read your browsing history or observe other tabs.

## 5. What it does not do

- It does not click registration buttons or submit forms for you.
- It does not send repeated requests or bypass CAPTCHAs or queue systems.
- It does not read or store page contents, form input, or login credentials.
- Since nothing is collected, there is nothing to sell or share with third parties.

## 6. Chrome Web Store policy

Chronos complies with the **Limited Use** requirements of the Chrome Web Store User Data Policy.
The information the extension touches is limited to what is described in sections 2 and 3, and it
is not used for any purpose beyond providing the stated features. No data is transmitted or sold.

## 7. Children under 14

Chronos is not directed at children under 14. As no personal data is collected, nothing is stored
regardless of the user's age.

## 8. Changes

If a future version transmits data to an external server or requests additional permissions, this
document will be updated **before that version ships.** Changes take effect when published.
