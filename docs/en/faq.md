# FAQ

## <span id="jump-1">Installing Ballance</span>

Go to our [official network disk](#jump-9) to download the installer. Then, run it to install Ballance.

* `Ballance-13levels-origin-low.exe`: The common installer for the most players. Note that this installer is in Chinese. Install is just a click of Next button away. We are finding better way to distribute and install Ballance.
* `Ballance-12levels.iso`: The no modification installer published by Atari.
* `Sudu-BallanceLevel13.zip`: The patch of official 12 levels installed game. Patch game after installing `Ballance-12levels.iso` if you need. A patch manual has placed in zip file. See [Installing Level 13 chapter](#jump-6) for more detail.

## <span id="jump-2">Installing Custom Maps</span>

There are 2 method to install custom map. Normal method is suit for everyone. And if you have installed [the new version of BML (2020 version)](#jump-10), you can use BML method to install custom map.

### Normal Method

1. Locate `Ballance/3D Entities/Level`
1. Replace one of the default levels (named Level_01.NMO to Level_13.NMO) with your custom map (Don't forget to make backups of your original files)
1. Launch the game and go to the matching level to play it

### BML Method

!!! warning "Version warning"
    If you are running BML with lower version than 0.3.28, this method may cause game crash. Please update to the latest version of BML.

1. Place map files in the `Ballance/ModLoader/Maps` Folder.
1. Launch game and go to Start menu.
1. A triangular button should appear right to the level selection menu; click to choose the custom map you wish to play. You can also search by typing its name.

## <span id="jump-3">Running Ballance on Windows 10 / Windows 11</span>

We **highly recommand** that install [BML (2020 version)](#jump-10) to solve any compatibility issues.

If you really do not want to install it, you also can go to Ballance's root folder and right-click Startup.exe, select `Properties`. Select the `Compatibility` tab, then check the box next to `Run this program in compatibility mode for:`. Follow this order to set the version of Windows: `Windows 7` -> `Windows Vista SP2` -> `Windows XP SP3` -> `Windows XP SP2` -> `Windows 95` until the game can run normally.

## <span id="jump-4">Running Ballance on Linux or macOS</span>

Wine or Valve Proton may help you to run Ballance on Linux or macOS (use `Bin/Player.exe` to start the game).  
You also can install a virtual machine with Windows 7 to play Ballance if Wine or Proton are not working. Do not install Windows XP virtual machine, because BML and various plugins do not support Windows XP.

## <span id="jump-5">Installing Debug Mode</span>

!!! warning "Outdated Content Warning"
    This method is only suitable for the installation of the old version of BML (2015 version), which is no longer supported. Please go to [the chapter of installing BML](#jump-10) for details.

<span style="opacity:0.3">
If you want to use debug mode, you need to install the **old BallanceModLoader** (2015 version) first. See the [section of Installing BML](#jump-10) to learn how to install.
</span>

<span style="opacity:0.3">
Debug mode's download URL can be got from our [official network disk](#jump-9). Open the `Plugin` directory and download `Debug_Mode.nmo`.
</span>

<span style="opacity:0.3">
If you have installed BallanceModLoader successfully, you can install `Debug_Mode.nmo`. Navigate to your Ballance installation directory, put `Debug_Mode.nmo` to `ModLoader/Mod`. Now launch the game. If you see some words displayed at the top of the game, congratulations! You have installed Debug mode successfully.
</span>

## <span id="jump-6">Installing Level 13 / Twilight Zone / SuDu</span>

If you are using the original CD version of Ballance, this tutorial will introduce how to install the official SuDu plugin (Level 13 plugin).

1. Go to our [official network disk](#jump-9) to download the plugin which is located in the `Installer` folder, called `SuDu-BallanceLevel13.zip`.
1. Use a compression software, such as Winzip or 7z to decompress it.
1. Go to the `SuDu_BallanceLv13` folder.
1. You will see a file called `SuDu_ReadMe.txt`. Open it and follow its instruction to install this plugin.

## <span id="jump-7">How to Get Custom Maps</span>

Recent custom maps:  
You can find recent custom maps in `#new`. You can search `#new` with file limitation to get what you need.

__[Download Ballance Map Pack (Version 7.6)](http://www.mediafire.com/folder/vyzo7893i0oln/Ballance_Map_Packs)__
Map Pack contains lots of high-quality custom maps.

[Download separate map files at our Network disk (Hosted by Chinese Ballance Forum, translators needed)](http://ballancemaps.ys168.com)  

## <span id="jump-8">Recording Ballance Videos</span>

Want to record your ballance runs but don't know how to?

Well, don't worry, there is always a solution. Download OBS Studio here: https://obsproject.com/

It supports MP4, youtube, and more.

Tutorial video: https://m.youtube.com/watch?v=XllRHuCe07A

For 856x480 resolution: Change the Video Bitrate to 1000.
For 1280x720 resolution: Change the Video Bitrate to 1500.

Don't want to send your videos to youtube? You can upload your video to streamable: https://streamable.com/

Videos are located in File / Show Recordings.

How do I know what size of the video will be?

There is an Option called Replay Buffer. If you use 1280x720 with 1500 Bitrate, it will take up more memory.
(e.g: With 856x480, 5 minutes is 36MB. With 1280x720 it is 52MB.)

Is there another way to start recording other than manually touching the "Start Recording" button?

Yes. Go to Files, Settings, and then Hotkeys. I suggest you put it like these:
 - Start Recording: F1
 - Stop Recording: F2

How do I capture the video?

When you open OBS, you will see a small window called "Sources".

Click the `+`, and select Game Capture.
When you have done it, click OK.

You must name the Game Capture, of course.

Then, a window will pop up. If you have created a Game Capture named "Ballance", you can either put it to capture any fullscreen application, but if you want to, click Mode and then put it on "Capture Specific Window. It will give you an option of what window to put. If the window is correct, then start the game and record.

Want the audio to be recorded? Try setting it on one of the speaker options.

## <span id="jump-9">Ballance Resources</span>

_[Click to go to our official network disk](https://mega.nz/#F!CV5SyapR!LbduTW51xmkDO4EDxMfH9w)_

Resources included:

* Ballance v1.13
* Virtools 3.5
* Some mapping tools
* etc...

## <span id="jump-10">Installing Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance. BML is divided into two versions, old (2015) and new (2020).

!!! warning "Choose the Correct Ballance Mod Loader"
    We **highly recommend** use BML 2020 version. Do NOT use 2015 version anymore. 2015 version is no longer supported.

<span style="opacity:0.3">Old version of BML can be downloaded on our [Mega network disk](#jump-9). The old version (2015 version) is named as `BallanceModLoader-Gamepiaynmo-Old(2015).msi`.</span>  
But for the **new version (2020 version)**, you should download it from [the release page of BallanceModLoader GitHub project](https://github.com/yyc12345/BallanceModLoader/releases/). In this release page, please download the latest build. Do **not** download the dev package (filename ending with `-dev`). Download **another** zip file is OK.

For different versions, different methods of installation should be used.

### New Version

!!! info "Migrate Infomation"
    For users with the old BML version, for example, those who have the "Debug Mode" mod installed, please remove that BML version. If you are unsure about how to remove it, consider uninstalling and re-installing Ballance itself.

!!! warning "Version Warning"
    I am highly recommend keeping your BML at the latest version. Some BML mod required the latest version of BML and the the latest version fix more bugs and will improve your game experience.

First, extract and merge the downloaded files with the Ballance folder.

If you are using compatibility modes to run the game, it should be set to Windows XP or above (since BML removed the system check that Ballance performs when booting the game, compatibility issues should disappear while using BML).

A "Ballance Mod Loader" mark at the top of the screen indicates that BML is installed correctly.

### Old Version

<span style="opacity:0.3">
Once you have it downloaded, the BallanceModLoader installer is presented as an MSI file and can be double-clicked to install. Unfortunately, the installer is only available in Chinese. What the most important thing during installation is that selecting a correct Ballance root folder (Which contains database.tdb).
</span>

## <span id="jump-11">Ballance Multiplayer Service</span>

Ballance Multiplayer Service (aka. BMMO) allows a player to play Ballance with other players with low latency via a deployed central BMMO server. From Feb 9, 2023, BMMO service is available for all server members. You can play with your friends in Ballance now.

See Server Rules page to know more BMMO related channels.

This is a non-profit service, and you don't have to pay anything.
