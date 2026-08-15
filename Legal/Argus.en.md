---
product: Argus
updated: "2026-08-15"
---

## 1. Summary

Argus is a tool that lets website operators collect and analyse their own visitor data. This
document therefore covers two distinct kinds of information.

- **Argus account data** — information about the operator using Argus. We control this directly.
- **Visitor event data** — data from our customers' websites. **The customer is the controller
  of that data; we act as a processor on their instructions.**

## 2. Argus account data

| Item | Purpose | Retention |
|---|---|---|
| Email address | Login, essential notices | 30 days after deletion request |
| Name | Display | 30 days after deletion request |
| Password | Login | 30 days after deletion request |
| Session tokens | Keeping you logged in | Deleted on expiry |
| Access records | Statutory security obligations | 1 year |

Passwords are stored only as one-way hashes, never in plain text.

## 3. Visitor event data

When a customer installs the Argus SDK on their site, the following is sent to our servers.

| Item | Description |
|---|---|
| Anonymous ID | A random value assigned per browser |
| User ID | **Supplied by the customer.** We do not generate it |
| Session ID | Distinguishes one visit from another |
| Page URL and path | Which screen was viewed |
| Referrer, UTM parameters | Where the visit came from |
| Event name and properties | Actions defined by the customer |

**What we do not collect** — no IP addresses, no User-Agent strings, no screen resolution, no
browser language, no device fingerprinting. We do not supply data to ad networks, and we never
combine data across customers to track an individual. Data is isolated per project.

**Retention** — events older than 24 months are deleted.

**Relationship with customers** — requests to access, correct, or delete visitor data must be
directed to the operator of the website in question. We act on that customer's instructions, and
on contract termination we return or destroy the data.

## 4. Third parties

We do not sell collected data or share it for advertising. Being a first-party collection tool is
the entire point of this product.

## 5. Your rights

Argus account holders may request access to, correction of, or deletion of their data. For
visitor data, please see section 3.

## 6. Children under 14

Argus is not directed at children under 14.

## 7. Changes

If we start collecting additional items, this document is updated first. In particular, adding IP
address or User-Agent collection requires updating this document before deployment.
