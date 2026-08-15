---
name: Mnemosyne
tagline: A local-first lecture library for reading and searching course materials
kind: tool
status: beta
tags: [Windows desktop app, course materials, PDF search, OCR, local-first]
---

# Mnemosyne

Mnemosyne is a Windows desktop app that brings lecture PDFs and recordings into one searchable library on your computer—without an online account or server upload.

When you import material, Mnemosyne reads PDF pages and creates local OCR text and search indexes. Organize material by course project, then search across its PDFs and lecture audio together.

## Core features

- **Course-material import:** Add PDFs or ZIP files containing images and audio to a project.
- **Local OCR and search:** Combines text recognition with keyword and semantic search.
- **Lecture audio processing:** Add recordings and search their transcribed text.
- **Project organization:** Keep material by course or term and search across each project.
- **Evidence-first results:** Open a matching PDF page directly and view highlighted text.
- **Local-first privacy:** PDFs, recordings, OCR output, and search indexes are never sent to an external server.

## User flow

1. Launch Mnemosyne and enter a name or nickname.
2. Create a lecture project and add a PDF or ZIP file.
3. Wait for processing to finish.
4. Search for a concept, phrase, or topic within the project.
5. Open a result at its PDF page, or add lecture audio for additional search coverage.

## Privacy and storage

Mnemosyne does not require an account. By default, learning materials and their processed data are stored at `%LOCALAPPDATA%\Bookworm` on Windows. Deleting a document or project also removes its source material and search data.

## Beta status and limitations

The current version is a private beta for Windows 10/11. Initial processing can take time, and uploads are limited to 1 GB per file by default. ZIP imports support images and audio only; corrupted or excessively compressed archives are rejected for safety. Windows SmartScreen may appear until release builds are code-signed.

