---
title: FAQ
project: Accelerate
index: 1
---

# FAQ

## Getting Started

<details>
<summary>How do I get started with Accelerate?</summary>
Accelerate allows you to control video playback primarily using keyboard shortcuts. The default controls are:

- **D**: Speed up
- **S**: Slow down
- **R**: Reset to default speed
- **A**: Toggle to your preferred speed
- **V**: Show current playback speed

These shortcuts can be modified in Accelerate's preferences, where you can create additional shortcuts. Accelerate currently supports adding shortcuts for play/pause, skip forward/backward, skip to the end of the video (e.g., for skipping ads), mute, and Picture-in-Picture. You can also right-click on a video to adjust playback speed or use the toolbar item to toggle to your preferred speed.

</details>

<details>
<summary>Which preferences can I configure in Accelerate?</summary>
You can access Accelerate's preferences by opening the Accelerate application; for example, from the Finder, Launchpad, or Spotlight. Here are the options configurable under the General tab:

- **Show controls in right-click menu** to speed up, slow down, or toggle preferred/default speed after right-clicking on a webpage with video.
- **Show notification for general playback shortcuts** after using Accelerate to play/pause, skip forward/backward, skip to the end, mute, and toggle Picture-in-Picture. This option does not affect notifications for changing playback speed.
- The **notification location** on the webpage after controlling video playback with Accelerate. You can also disable all notifications by setting this to "None".
- The **default playback speed** for videos to start playing at. Videos normally play at 1x speed by default.
- The **preferred playback speed** to switch to via keyboard shortcut, toolbar item, or right-click menu option.
- The **speed change interval** to change by when speeding up or slowing down playback.
- The **skip interval** (in seconds) to change by when skipping forward or skipping back.

After making changes to your preferences, refresh any currently open webpages to update.

</details>

<details>
<summary>How do I configure shortcuts in Accelerate?</summary>
Open up Accelerate's preferences and switch to the Shortcuts tab. Here you can configure two kinds of shortcuts to trigger each control option:

- **Single-key shortcuts**, which require a single key press on the keyboard. Configure these by typing the corresponding letter key in the textfield directly to the right of each option.
- **Modifier-key shortcuts**, which require pressing a combination of regular and modifier keys, like command (⌘) or control (⌃). Configure these by clicking "Record Shortcut" to the right of the textfields.

After making changes to your shortcuts, refresh any currently open webpages to update.

</details>

<details>
<summary>Which websites work with Accelerate?</summary>
Accelerate works on any website using HTML5 video, which includes most modern sites like YouTube, Netflix, Hulu, Apple TV+, Vimeo, and Facebook. Accelerate does not support Flash video.
</details>

<br>

## Troubleshooting Issues

<details>
<summary>Why aren't my updated keyboard shortcuts or preferences working?</summary>
After you make changes to any of Accelerate's preferences, refresh any currently open websites to see the updates. If the changes still aren't showing, try restarting Safari.
</details>

<details>
<summary>Why isn't Accelerate enabled/working for me?</summary>
<ol>
  <li>Check that the extension is enabled by opening Safari's extension preferences: Safari > Preferences > Extensions. In the sidebar on the left, make sure the checkbox next to "Accelerate" is checked.
  <li>If Accelerate is already enabled, try unchecking the checkbox and restarting Safari. Once Safari re-opens, re-enable Accelerate.</li>
  <li>If it is still not working, try deleting and reinstalling.</li>
  <li>If you continue to have issues, feel free to <a href="mailto:hello@ritam.me">email me</a>.</li>
</ol>
</details>

<details>
<summary>Why can't I use right-click controls on Netflix or some other site?</summary>
Netflix and certain other sites block users from accessing the right-click menu. There are some Safari extensions that can prevent sites from doing this, but otherwise you'll have to use the keyboard shortcuts or toolbar item for controls.
</details>

<details>
<summary>Why aren't playback controls working properly on Netflix or some other site?</summary>
The site is probably using a custom video player that modifies the standard playback control behavior. For example, the Netflix video player will sometimes freeze when skipping forward or backward using Accelerate. As a result, your own playback keyboard shortcuts might not work perfectly, and you'll have to use theirs to ensure a smooth experience.
</details>

<details>
<summary>Why does the video briefly lag after changing speed or skipping?</summary>
By default, videos in Safari pause for a split second anytime the user adjusts playback, such as when changing speed or skipping forward. You may notice this behavior on videos even without Accelerate; for example, when using a website's integrated controls for a video. Since this is a result of Safari's video processing, this issue currently cannot be fixed by Accelerate.
</details>

<details>
<summary>Why does the audio quality degrade at higher speeds?</summary>
This is unfortunately a limitation of Safari's pitch correction algorithm when processing videos. This issue can be observed when changing the video speed using other methods apart from Accelerate; for example, when using YouTube's built in settings for playback speed.
</details>

<br>

## Miscellaneous

<details>
<summary>Can I use Accelerate for Safari on iPhone or iPad?</summary>
Due to Apple's limitations on mobile Safari, it is not currently possible to bring Accelerate to these devices. If you're looking for a simple solution to change video speed on iPhone and iPad, you can use a bookmarklet, which is just a bookmark that runs JavaScript code when you "open" it. The following bookmarklet will show an alert allowing you to enter a new speed value. Create a new bookmark in Safari on any website, and replace the bookmark URL with the following code:
<br><br>
<code>
javascript:%20(function%20()%20%7B%20%C2%A0%20var%20videos%20=%20Array.from(document.getElementsByTagName('video'));%20%C2%A0%20var%20rate%20=%20prompt(%22Enter%20playback%20speed%20(default%20is%201)%22,%202);%20%C2%A0%20if%20(rate%20!=%20null)%20%7B%20%C2%A0%20%C2%A0%20%C2%A0%20videos.forEach(v%20=%3E%20v.playbackRate%20=%20rate);%20%C2%A0%20%7D%20%7D());
</code>

</details>

<details>
<summary>What if I have a different question or feedback?</summary>
Feel free to send me any other questions, comments, feedback, or bug reports via <a href="mailto:hello@ritam.me">email</a>.
</details>
