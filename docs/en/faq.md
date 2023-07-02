# FAQ

## <span id="jump-1">Installing Ballance</span>

You can install Ballance in many different ways. Choose one that suits you best. We generally recommend the recommended method.

All resources can be found in our [official network disk](#jump-9), which are located in the `Installer` folder.

* **[Recommended Installation](#jump-1-1): WE HIGHLY SUGGEST THIS METHOD.**
* [Vanilla Installation](#jump-1-2): Choose if you know what you're doing.
* <span style="opacity:0.3">[Old Installation](#jump-1-3): Archived section. Please do not use it.</span>

### <span id="jump-1-1">Recommended Installation</span>

1. Download `Ballance-13levels-bbugdistro-high.exe` and run it. This is a 7z self extractor.

1. Open the unzipped folder called `Ballance`, then execute `install.bat`. A pop up may ask for permission, allow it. Then sit back and relax.

1. Done. It's finished. By the way, BML installation has been included. Double click `Ballance Player`on the desktop to play.

???+ danger "Don't move files!"
    After running the batch file, do NOT move any decompressed files!
    Choose a good location to decompress your Ballance files in advance!

???+ info "Fullscreen toggle"
    By default, Ballance is run in fullscreen mode. You can change it by executing `switch fullscreen.bat`. Allow the permissions, if requested.

??? question "Why does it need administrator permissions?"
    This batch file is not harmful. Trust us.

    Administrator permission is needed to modify the “Windows Registry,”which is essential for Ballance installation. Eg desktop shortcuts.

    This installer is open source. Visit https://github.com/Xenapte/BallanceSetupTools if you need.

??? question "Why there are 2 shortcuts on my desktop?"
    You may see 2 shortcuts on your desktop after the installation.

    While both are capable of lauching the game, `Ballance Player` is suggested.

    `Ballance` points to `Startup.exe`, and `Ballance Player` points to `bin\Player.exe`. `Startup.exe` is a game launcher, and `bin\Player.exe` is the actual game. Hence our suggestion.

??? info "How to uninstall?"
    Run `uninstall.bat`.

### <span id="jump-1-2">Vanilla Installation</span>

!!! info "What's this?"
    Vanilla is the original game, without any modifications.

    This method is only suitable for those with experience, **not** for beginners! (Or those who just wants plain Ballance.)

1. Download `Ballance-12levels-vanilla.iso`. This ISO file is published by Atari; it is a virtual disc.

1. Done.

However, only 12 levels are included. To get the 13th level, a patch is required. Download `Sudu-BallanceLevel13.zip`. Read [Installing Level 13 chapter](#jump-6) for details.

### <span id="jump-1-3">Old Installation</span>

!!! warning "Deprecated"
    This method is deprecated and is only served for preserving old contents.

<span style="opacity:0.3">
Download `Ballance-13levels-cndistro-low.exe` and run it. 

Although this installer is in Chinese, you can still install it by clicking “enter.” We are finding better ways to install Ballance.
</span>

## <span id="jump-2">Installing Custom Maps</span>

2 methods are available. The “Normal method” works for everyone, and the “BML method” works for those who has [the new version of BML (2020 version)](#jump-10) installed.

### Normal Method

1. Locate `Ballance/3D Entities/Level`.

1. Replace one of the default levels (Level_X.NMO) with your custom map file. Don't forget to make backups!

1. Launch the game and go to the level.

### BML Method

!!! warning "Version warning"
    This method only works for versions higher than 0.3.28 or else the game will crash!

1. Place map files in the `Ballance/ModLoader/Maps` Folder.

1. Launch game and go to Start menu.

1. A triangular button should appear to the right of the level selection menu; click to choose the custom map you wish to play. You can also search by typing its name.

## <span id="jump-3">Running Ballance on Windows 10 and 11</span>

Install [BML (2020 version)](#jump-10) to solve any compatibility issues.

Or, If you do not want to install it, for any reason you might have, you can follow this long tutorial. Go to Ballance's root folder. Right-click Startup.exe. Select `Properties`. Open the `Compatibility` tab. Check the box next to `Run this program in compatibility mode for:`. Choose `Windows 7` and see if your game runs; if not, change it to `Windows Vista SP2`, then `Windows XP SP3`, then `Windows XP SP2`, then `Windows 95`.

## <span id="jump-4">Running Ballance on Linux or MacOS</span>

Wine or Valve Proton can be used to run Ballance on Linux or macOS (use `Bin/Player.exe` to start the game).

Or, install a virtual machine with Windows 7 to play Ballance. Do not install Windows XP since BML and various plugins are unsupported.

## <span id="jump-5">Installing Debug Mode</span>

!!! warning "Deprecated"
    This method is no longer supported. Please go to [the chapter of installing BML](#jump-10) for details.

<span style="opacity:0.3">
Install the **old BallanceModLoader** (2015 version) first. See the [section of Installing BML](#jump-10) to learn how.
</span>

<span style="opacity:0.3">
Go to [the official network disk](#jump-9). Open `Plugin` and download `Debug_Mode.nmo`.
</span>

<span style="opacity:0.3">
If BallanceModLoader is successfully installed, you may install `Debug_Mode.nmo`. Navigate to your Ballance installation directory. Move `Debug_Mode.nmo` to `ModLoader/Mod`. Launch the game. If you see some words displayed at the top of the game, congratulations, you have installed Debug mode!
</span>

## <span id="jump-6">Installing Level 13 (aka Twilight Zone or SuDu)</span>

If you are using the Vanilla Installation of Ballance, you can get Level 13 by following the instructions below.

1. Go to the [official network disk](#jump-9) and download`SuDu-BallanceLevel13.zip`, located in the `Installer` folder.

1. Decompress it.

1. Go to the `SuDu_BallanceLv13` folder.

1. Read and follow `SuDu_ReadMe.txt`.

## <span id="jump-7">Getting Custom Maps</span>

!!! info "I cannot read Simplified Chinese!"
    Most maps and named in Simplified Chinese. That's because the Ballance community in China is more active than any other communities.

    Don't worry, a friendly Ballance player ornagised a list including...
    
    * Author
    * Release date
    * Original and translated name
    * Type
    * Difficulty
    * Post ID and LucaS video ID (convenient for the those coming from LucaS videos)
    * Related videos
    * and more...

    **See [pseudoacetyl/BallanceCustomMaps](https://github.com/pseudoacetyl/BallanceCustomMaps/blob/main/CustomMapList.md) for more.** Thanks pseudoacetyl!

### Map Pack

Map Pack contains lots of high-quality custom maps.

However, it is not updated very often. For latest maps, try other methods.

__[**Click Here to Download Ballance Map Pack (Version 7.6)**](http://www.mediafire.com/folder/vyzo7893i0oln/Ballance_Map_Packs)__.

### Discord

You can find custom maps in `#new`. You may also search in the channel to find what you need.

Since this server is founded in 2018, maps before 2018 obviously does not exist. If that's what you needed, try other methods then.

### Network Disk

You can download custom maps individually in the Network Disk. You can find maps from the oldest to the latest.

However, this network disk is hosted by Chinese Ballance Forum.

[Click here to download separate map files at our Network disk](http://ballancemaps.ys168.com).

## <span id="jump-8">Recording Ballance Videos</span>

Download OBS Studio here: https://obsproject.com/ . It supports MP4, youtube, and more.

Tutorial video: https://m.youtube.com/watch?v=XllRHuCe07A

For 856x480 resolution, change the Video Bitrate to 1000.
For 1280x720 resolution, change the Video Bitrate to 1500.

YouTube alternative website, Streamable: https://streamable.com/ . Videos are located in `File / Show Recordings`.

To find out the size of the video, use the option “Replay Buffer.” 1280x720 with 1500 Bitrate takes up more memory. Eg for the same 5 minute video, using 856x480 results in smaller files than 1280x720 (36MB and 52MB, respectively).

Other ways to start recording (other than manually touching the “Start Recording” button):

Go to Files, Settings, and then Hotkeys. Then set
- Start Recording: F1
- Stop Recording: F2

To record your gameplay, open OBS. In a small window called “Sources,” click `+` and select “Game Capture” then hit OK. Name it.

A window will pop up. You can either record your entire screen or a specific app. Once done, start the game and start recording.

Try setting the speaker options for audio.

## <span id="jump-9">Ballance Resources</span>

__[**Click to go to our official network disk**](https://mega.nz/#F!CV5SyapR!LbduTW51xmkDO4EDxMfH9w)__

You can find:

* Ballance v1.13
* Virtools 3.5
* Some mapping tools
* and more...

## <span id="jump-10">Installing Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance.

There are 2 versions, old (2015) and new (2020).

!!! warning "Choose 2020"
    Version 2015 is no longer supported. **CHOOSE VERSION 2020!!!**

<span style="opacity:0.3">The old BML can be downloaded from [the Mega network disk](#jump-9). It is called `BallanceModLoader-Gamepiaynmo-Old(2015).msi`.</span>

**The new 2020 version of BML** can be found from [the release page of BallanceModLoader GitHub project](https://github.com/yyc12345/BallanceModLoader/releases/). Here, download the latest build, **not** the dev package, which is a (file with its name ending with `-dev`).

### New Version

!!! info "Removing Old Version"
    For users with the old BML version (like those who have the Debug Mode installed), please remove it. Re-install Ballance if you do not know how to only remove BML.

!!! warning "Version Warning"
    Please keep your BML at the latest version. Since most mods require the latest version and improves your gameplay experience by fixing bugs and more.

Extract and merge the downloaded files with the Ballance folder.

If you are using compatibility modes to run the game, set it to be Windows XP or above as new BML no longer checks for Windows version.

If a “Ballance Mod Loader” label appears on the top of the screen, your BML is installed correctly.

### Old Version

<span style="opacity:0.3">
Once downloaded, install the BallanceModLoader. The installer is only available in Simplified Chinese. Select the correct Ballance root folder, which contains database.tdb.
</span>

## <span id="jump-11">Ballance Multiplayer Service</span>

Ballance Multiplayer Service (BMMO) enables players to play Ballance with others with low latency via a deployed central BMMO server.

Starting from Feb 9, 2023, BMMO service is available for every server member.

Check Server Rules page to know more BMMO related channels.

This is a non-profit service; you don't have to pay anything.