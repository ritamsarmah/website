---
title: FAQ
project: Textile
index: 2
---

<style>
  hr {
    background-color: white;
  }
</style>

# FAQ

## Getting Started

<details>
<summary>Where can I download Textile?</summary>

The full version of Textile can be downloaded from the [Mac App Store]() for a 14-day free trial. After the trial period expires, you can continue to use basic functionality or unlock Textile Pro with a one-time purchase.

</details>

<details>
<summary>How do I extract text using Textile?</summary>
Textile allows you to extract text from images, videos, and PDFs, including scanned documents, presentations, tutorials, screenshots, GIFs, and more. Here are some ways to use Textile:

- Drag and drop a file to Textile's start window or dock icon
- Open a file from your computer within Textile
- Copy text from web images in Safari using the Textile extension.
- Capture images and videos from your screen using macOS's Screenshot app. Drag and drop the thumbnail that appears in the bottom corner of your screen directly into Textile. The following keyboard shortcuts are useful ways to capture your screen:
  - ⇧ ⌘ 3: Save picture of entire screen
  - ⇧ ⌘ 4: Save picture of a selected area
  - ⇧ ⌘ 5: Open Screenshot with recording options

After opening a file in Textile, click the "Extract" button to extract text from the current view.

</details>

<details>
<summary>What features are available in the basic and pro versions?</summary>
The basic version of Textile allows you to use the following features for free:

- Text recognition for images and GIFs
- Automatic spelling correction
- Line grouping with whitespace detection
- Safari extension to copy text from web images

<br>
The pro version, unlocked with a one-time purchase, includes everything mentioned above, plus:

- Text recognition for videos and PDFs
- Paragraph grouping with column layout support
- Export to TXT
- More features to come...

</details>

<details>
<summary>How do I use Textile's Safari extension?</summary>
Textile includes a Safari extension for copying text directly from images on the web. Right-click any image on the webpage and select "Copy Image Text" to copy its text to the clipboard. You can also view this text or open the image in the main app by clicking on Textile's toolbar button in Safari.
</details>

<details>
<summary>Which languages are supported?</summary>
Textile uses Apple's Vision framework, which is integrated into macOS and runs locally on your computer. As a result, official language support is determined by your macOS version. Here are the currently supported versions and languages:

- **macOS Catalina 10.15:** English
- **macOS Big Sur 11.0:** English, French, Italian, German, Spanish, Portuguese, Chinese

Text extraction may work for additional languages that have similar characters to the official languages; however, the transcription might be less accurate, and features like spelling correction won't work properly.

</details>

<details>
<summary>What text recognition options can I configure in Textile?</summary>

Textile has many advanced features to optimize text recognition. Here is a list of all the available features with descriptions on how to use them.

#### Automatically correct spelling

Automatically fixes spelling errors in the extracted text. You can add custom words to the spell-checker's dictionary in Preferences > General.

#### Group text by line or paragraph

Textile intelligently groups text and approximates spacing based on the document layout. You can choose from two grouping methods, described below, each with their own options for configuration.

<br>

### Group by line

This method keeps words on the same baseline together.

#### Preserve whitespace around words

Approximates line indentation and spacing between words from original layout. Works best on left-aligned text, e.g., code snippets or essays.

<br>

### Group by paragraph

This method clusters text into paragraphs based on user-specified line spacing.

#### Organize paragraphs by column

Sort the paragraphs column-wise, starting from the left-most column. Useful for maintaining the reading order of text formatted into two or more columns.

#### Remove line breaks in paragraphs

By default, Textile will preserve line breaks within paragraphs to resemble the original layout. This option removes those line breaks, while maintaining the spacing between paragraphs.

#### Join words hyphenated at line breaks

Automatically join words that have been split by a hyphen across line breaks in a paragraph, e.g., "hel-lo" split across two lines would become "hello" in the transcript. This option is only available if "Remove line breaks in paragraphs" is enabled.

#### Line spacing

The approximate spacing between lines of text, as a percentage of the original document's height. This allows Textile to determine which lines of text belong in the same paragraph. Intuitively, larger values mean lines of text is more spaced out, while smaller values mean text is closer together.

</details>

<br>

## Troubleshooting Issues

<details>
<summary>Why is the text recognition sometimes inaccurate?</summary>
 While optical character recognition (OCR) technology has come a long way in the past few years, it is still prone to making errors. Textile works best on clear, uniform text; handwritten or misshapen text, complex layouts, and low resolution files may increase the likelihood of errors in the transcript.
</details>

<details>
<summary>Why isn't Textile's Safari extension enabled/working for me?</summary>
<ol>
  <li>Check that the extension is enabled by opening Safari's extension preferences: Safari > Preferences > Extensions. In the sidebar on the left, make sure the checkbox next to "Textile" is checked.
  <li>If Textile is already enabled, try unchecking the checkbox and restarting Safari. Once Safari re-opens, re-enable Textile.</li>
  <li>If it is still not working, try deleting and reinstalling.</li>
  <li>If you continue to have issues, feel free to <a href="mailto:hello@ritam.me">email me</a>.</li>
</ol>
</details>

<br>

## Miscellaneous

<details>
<summary>What if I have a different question or feedback?</summary>
Feel free to send me any other questions, comments, feedback, or bug reports via <a href="mailto:hello@ritam.me">email</a>.
</details>
