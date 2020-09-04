# FAQ

## <span id="jump-1">Install Ballance</span>

Go to our [official network disk](#jump-9) to download installer. Then, run it. (Note that the installer is in Chinese.)

## <span id="jump-2">Install custom map</span>

1. Locate `Ballance/3D Entities/Level`
1. Replace one of the default levels (named Level_01.NMO to Level_13.NMO) with your custom map (Don't forget to make backups of your original files)
1. Launch the game and go to matched level to play new map

## <span id="jump-3">Run Ballance on Windows 10</span>

Go to Ballance's root folder and right click Startup.exe, select `Properties`. Select the `Compatibility` tab, then check the box next to `Run this program in compatibility mode for:`. Follow this priority to set up the version of Windows: `Windows Vista SP2` -> `Windows XP SP3` -> `Windows XP SP2` -> `Windows 95`. You can also install a virtual machine to run Ballance if the above method is not work.

## <span id="jump-4">Run Ballance on Linux or macOS</span>

Use wine to run installer and everything will be OK (Use Bin/Player.exe to start game). You also can install a virtual machine with Windows XP to play Ballance if wine is not work.

## <span id="jump-5">Install Debug Mode</span>

!!! warning "Outdated content warning"
    This method is only suitable for the installation of the old version of BML(2015 version), and the old version of BML is no longer supported, please go to [the chapter of installing BML](#jump-10) for details.

If you want to use debug mode, you need to install **old BallanceModLoader**(2015 version) firstly. See the [section Installing BML](#jump-10) to learn how to install.

Debug mode's download url can be got from our [official network disk](#jump-9). Open the `Plugin` directory and download `Debug_Mode.nmo`.

If you install BallanceModLoader successfully, you can install `Debug_Mode.nmo`. Navigate to your Ballance installation, put `Debug_Mode.nmo` to `ModLoader/Mod`. Now launch the game. If you see some words is displayed at the top of the game, congratulation, you install Debug mode successfully.

## <span id="jump-6">Install Level 13 / Twilight Zone / SuDu</span>

If you are using original CD version of Ballance, this tutorial will introduce how to install official SuDu plugin (Level 13 plugin).

1. Go to our [official network disk](#jump-9) to download plugin which is located in `Installer` folder, called `SuDu-BallanceLevel13.zip`.
1. Use compress software, such as Winzip or 7z to decompress it.
1. Go to `SuDu_BallanceLv13` folder.
1. You will see a file called `SuDu_ReadMe.txt`. Open it and following its description to overlay some Ballance files to install this plugin.

## <span id="jump-7">How to get custom map</span>

Recent custom map:  
You can find recent custom map in `#new` . You can search `#new` with file limitaion to get what you need.

Ballance Map Pack (Version 7.5):  
https://www.mediafire.com/folder/eifg7yri7jrwt9g,68dr8ew27in3qsl  
Map Pack contains lots of high-quality custom maps.

Network disk (Hosted by Chinese Ballance Forum):  
http://ballancemaps.ys168.com/

## <span id="jump-8">Record my Ballance video</span>

Want to record your ballance runs but don't know how to?

Well, don't worry, there is always a solution. Download OBS Studio from here: https://obsproject.com/

It supports mp4, youtube and more.

Here's the tutorial video: https://m.youtube.com/watch?v=XllRHuCe07A

For 856x480 resolution: Change the Video Bitrate to 1000.
For 1280x720 resolution: Change the Video Bitrate to 1500.

Don't want to send your videos to youtube? You can upload your video to streamable: https://streamable.com/

Videos are located in File then Show Recordings.

How do I know what size of the video will be?

There is an Option called Replay Buffer. If you use 1280x720 with 1500 Bitrate, it will take up more memory.
(e.g: With 856x480, 5 minutes is 36MB. With 1280x720 it is 52MB.)

Is there another way to start recording other than manually touching the "Start Recording" button?

Yes. Go to Files, Settings and then Hotkeys. I suggest you put it like these:
 - Start Recording: F1
 - Stop Recording: F2

How do I capture the video?

When you open OBS (64bit), you will see a small window called "Sources".

Click the +, and you must select Game Capture.
When you do it, click OK.

You must name the Game Capture, of course.

Then, a window will pop up. If you create a Game Capture named "Ballance", you can either put it to capture any fullscreen application, but if you want to, click Mode and then put it on "Capture Specific Window. It will give you an option of what window to put. If the window is correct, then start the game, and start recording.

Want audio recorded? Try setting it on one of the speaker options.

## <span id="jump-9">Ballance resources</span>

Here you are, our official network disk: https://mega.nz/#F!CV5SyapR!LbduTW51xmkDO4EDxMfH9w

Included resources:

* Ballance v1.13
* Virtools 3.5
* Some mapping tools
* etc...

## <span id="jump-10">Install Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance. BML is divided into two versions, old and new. **The old version has been discontinued, so it is recommended to use the new version.**

You can download these two versions on our [Mega network disk](#jump-9). The old version(2015 version) is `BallanceModLoader-Gamepiaynmo-Old(2015).msi` and the new version(2020 version) is `BallanceModLoader-Gamepiaynmo-New(2020-0.3.24).zip`

For different versions, you need to use different methods to install it.

### New version

!!! info "Migrate infomation"
    For users with the old BML version, for example, those who installed the "Debug Mode" mod installed, please remove that BML version. If you are unsure about how to remove it, consider uninstalling and re-installing Ballance itself.

First, Extract and merge downloaded file with the Ballance folder.

If you are using compatibility mode to run the game, that should be set to Windows XP or above (since BML removed the system check that Ballance performs every time when booting the game, compatibility issues should disappear while using BML).

A "Ballance mod loader" mark at the top of the screen indicates that BML is installed correctly.

### Old version

Once you had it downloaded, BallanceModLoader installer is presented as an msi file, you can double-click on it to install. Unfortunately, BallanceModLoader installer is only available in Chinese. What the most important things during installation is that selecting a correct Ballance root folder (Which conatin database.tdb).

