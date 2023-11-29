# FAQ

## <span id="jump-1">Installing Ballance</span>

There are various installation method here. You can choose the most suit one for you freely. We also provide a guideline to help you choose the best one. See following content to know how to choose.  
All resources referred in installation steps can be found in our [official network disk](#jump-9). All of them are located in `Installer` folder.

* **[Beginner Installation](#jump-1-1): The most common installer suit for almost Ballance player, especially beginner. We HIGHLY SUGGEST you choose this method.**
* [Vanilla Installation](#jump-1-2): If you just need a vanilla Ballance and also have some Ballance experience, choose this.

### <span id="jump-1-1">Beginner Installation</span>

First, Download `Ballance-13levels-bbugdistro-high.exe`. This is a 7z self extractor. Run it and choose your preferred location to store decompressed files.

Then, enter decompressed folder `Ballance`, double click `install.bat` and run it. Windows may pop a window to acquire administrator permission. Don't worry, just allow it anyway. The installation may take a while, just calm down and wait until it finished.

Now, the installation has finished. This distro has included BML and New Player. So you don't need install BML or New Player anymore. Double click created `Ballance` in desktop to run game.

??? question "Is this batch file harmful? Why it need administrator permission?"
    If you entirely sure that this UAC window is raised by your self, or more exactly, raised by this batch file, just relax yourself. It is definitely harmless for your PC.  
    This batch file need administrator permission to modify Windows Registry which is essential for Ballance installation. It also need this permission to create desktop shortcuts and etc.  
    This installer also is an open source project. Visit [Xenapte/BallanceSetupTools](https://github.com/Xenapte/BallanceSetupTools) to review its source code if you need.

??? info "How to uninstall?"
    Run `uninstall.bat`.

### <span id="jump-1-2">Vanilla Installation</span>

!!! info "What is Vanilla? Who need it?"
    Vanilla means the base game, without any modifications.  
    This method only suit for some Ballance players with some experience. It is **not** suit for beginner of Ballance especially. Additionally, if you just want a pure vanilla Ballance and don't want BML and etc. This installation method may be also suit for you.

0. Download `Ballance-12levels-vanilla.iso`. This ISO file is no modification installer published by Atari. Load it as a virtual CD and run its installer. This operation will installer a 12 levels Ballance for you.
0. 12 levels Ballance is not the common Ballance we played. We need patch it with official patch and transform it into 13 levels Ballance. Download `Sudu-BallanceLevel13.zip`. A patch manual has placed in zip file. See [Installing Level 13 chapter](#jump-6) for more detail.
0. If you need some extra things, such as BML and etc. See corresponding section to know how to install them.

## <span id="jump-2">Installing Custom Maps</span>

There are 2 method to install custom map. Normal method is suit for everyone. And if you have installed [the new version of BML (2020 version)](#jump-10), you can use BML method to install custom map.

### BML Method

!!! warning "Version warning"
    If you are running BML with lower version than 0.3.28, this method may cause game crash. Please update to the latest version of BML.
    If you use BML+, no need to worry about this warning.

1. Place map files in the `Ballance/ModLoader/Maps` Folder.
1. Launch game and go to Start menu.
1. A triangular button should appear right to the level selection menu; click to choose the custom map you wish to play. You can also search by typing its name.

### Normal Method

1. Locate `Ballance/3D Entities/Level`
1. Replace one of the default levels (named Level_01.NMO to Level_13.NMO) with your custom map (Don't forget to make backups of your original files)
1. Launch the game and go to the matching level to play it

## <span id="jump-3">Running Ballance on Windows 10 / 11</span>

We **highly recommand** that install [New Player](#jump-15) to solve any compatibility issues.

If you really do not want to install it, you also can go to Ballance's root folder and right-click Startup.exe, select `Properties`. Select the `Compatibility` tab, then check the box next to `Run this program in compatibility mode for:`. Follow this order to set the version of Windows: `Windows 7` -> `Windows Vista SP2` -> `Windows XP SP3` -> `Windows XP SP2` -> `Windows 95` until the game can run normally.

## <span id="jump-4">Running Ballance on Linux or macOS</span>

Wine or Valve Proton may help you to run Ballance on Linux or macOS (use `Bin/Player.exe` to start the game).  
You also can install a virtual machine with Windows 7 to play Ballance if Wine or Proton are not working. Do not install Windows XP virtual machine, because BML and various plugins do not support Windows XP.

## <span id="jump-5">Enable Debug Mode / Cheat Mode</span>

!!! warning "Install BML First"
    You must have BML installed to enable Cheat Mode.
    If you use [Beginner Installation](#jump-1-1), no need to worry about this warning.

1. Click on the `/` key on your keyboard in the game window and you will see a translucent black input box appear at the bottom of the game screen.
1. Type `/cheat` in it (`/` is automatically typed, no need to type it again) and press Enter on your keyboard.
1. If you see the `Cheat Mode Enabled` label at the bottom of your game, you have Debug Mode enabled.
1. Type `/cheat` again to disable Debug Mode.

## <span id="jump-6">Installing Level 13 / Twilight Zone / SuDu</span>

If you are using the original CD version of Ballance, this tutorial will introduce how to install the official SuDu plugin (Level 13 plugin).

1. Go to our [official network disk](#jump-9) to download the plugin which is located in the `Installer` folder, called `SuDu-BallanceLevel13.zip`.
1. Use a compression software, such as Winzip or 7z to decompress it.
1. Go to the `SuDu_BallanceLv13` folder.
1. You will see a file called `SuDu_ReadMe.txt`. Open it and follow its instruction to install this plugin.

## <span id="jump-7">How to Get Custom Maps</span>

There are various ways to download custom maps.

### Network Disk

1. Go to [**pseudoacetyl/BallanceCustomMaps**](https://github.com/pseudoacetyl/BallanceCustomMaps/blob/main/CustomMapList.md) to find your map first.
1. Go to [**pseudoacetyl Map Network Disk**](https://mega.nz/folder/ARR3RRBL#kvoVNZVOxbUmpDBUqLUccg) to download it.

!!! info "How to Find Map"
    **pseudoacetyl/BallanceCustomMaps** is an index file that contains most of the maps. It includes:

    * Map author, release date, original name and translated name (a lot better than machine translations).
    * Map type and difficulty.
    * Map post ID and LucaS video ID (convenient for the players coming from LucaS videos).
    * Related videos for previewing maps.
    * etc...

    For example if you know its Chinese name, then you can search for that name directly in the web page. Or if you are coming from a LucaS video, then you can just look up the LucaS video number.

### Map Pack

Map Pack contains lots of high-quality custom maps. However, the map pack may only be updated every few years. So if you need some latest custom maps, try other methods.

[**Click Here to Download Ballance Map Pack (Version 7.6)**](http://www.mediafire.com/folder/vyzo7893i0oln/Ballance_Map_Packs)

### Discord

You can find recent custom maps in `#new`. You also can search `#new` with file limitation to get what you need.  
However, this Discord server was established in 2018, so obviously some custom maps can not be found in our Discord server channels. In this case, try using other methods.

## <span id="jump-8">Recording Ballance Videos</span>

Download OBS Studio: https://obsproject.com/  
It supports MP4, youtube, and more.

Tutorial video: https://www.youtube.com/watch?v=XllRHuCe07A

You also can upload your video to [streamable](https://streamable.com/) if you don't want to send your videos to YouTube.

??? question "Any recommended Video Bitrate settings?"
    For 856x480 resolution: Change the Video Bitrate to 1000.  
    For 1280x720 resolution: Change the Video Bitrate to 1500.  

??? question "Where is the video I recorded?"
    Videos are located in File / Show Recordings.

??? question "Is there another way to start recording other than manually touching the "Start Recording" button?"
    Yes. Go to Files, Settings, and then Hotkeys. You can set up your hotkeys according to your own preferences, but you can use these:  

    - Start Recording: F1  
    - Stop Recording: F2  

??? question "How do I know what size of the video will be?"
    There is an Option called Replay Buffer. If you use 1280x720 with 1500 Bitrate, it will take up more memory.   
    (e.g: With 856x480, 5 minutes is 36MB. With 1280x720 it is 52MB.)

??? question "How do I capture the video?"
    When you open OBS, you will see a small window called "Sources".  
    Click the `+`, and select Game Capture.  
    When you have done it, click OK.  
    You must name the Game Capture, of course.  
    Then, a window will pop up.  
    If you have created a Game Capture named "Ballance", you can set it to capture any fullscreen application, but if you want to, click Mode and then put it on "Capture Specific Window".  
    It will give you an option of what window to put. If the window is correct, then start the game and start recording.  
    If you want the audio to be recorded, try setting it on one of the speaker options.

## <span id="jump-9">Ballance Resources</span>

[**Click to go to our official network disk**](https://mega.nz/#F!CV5SyapR!LbduTW51xmkDO4EDxMfH9w)

Resources included:

* Ballance v1.13
* Virtools 3.5
* Some mapping tools
* etc...

## <span id="jump-10">Installing Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance.

!!! info "Depracted BML"
    Gamepiaynmo created old BML (has `Debug_Mode.nmo` one) and BML (show `Ballance Mod Loader` at title) are depracted now. We are using doyaGu created BML+ (show `BML PLus` on title) now. We do not distinguish BML and BML+ in this FAQ. All BML is BML+. If you are still using Gamepiaynmo's BML, we highly suggest you uninstall them first and use BML+ instead.

!!! warning "Version Warning"
    I am highly recommend keeping your BML at the latest version. Some BML mod required the latest version of BML and the the latest version fix more bugs and will improve your game experience.

First, you should download it from [the release page of BallanceModLoaderPlus GitHub project](https://github.com/yyc12345/BallanceModLoader/releases/). In this release page, please download the latest build. Do **not** download the dev package (filename ending with `-dev`). Download **another** zip file is OK.

Then, extract and merge the downloaded files with the Ballance folder.

If you are using compatibility modes to run the game, it should be set to Windows XP or above (since BML removed the system check that Ballance performs when booting the game, compatibility issues should disappear while using BML).

A "BML Plus" mark at the top of the screen indicates that BML is installed correctly.

## <span id="jump-11">Ballance Multiplayer Service</span>

Ballance Massively Multiplayer Online (BMMO) allows a player to play Ballance with other players with low latency via a deployed central BMMO server.  
Since Feb 9, 2023, BMMO service is available for all Discord server members.  
You can now play with your friends in Ballance.  

See the Server Rules page for more information regarding the BMMO-related channels.  
This is a free non-profit service, so you don't have to pay anything.

## <span id="jump-12">Creating Custom Map</span>

There are two methods of mapping, **We highly recommend using the Blender workflow for mapping** as it does not require the installation of older softwares and has better tutorials.

All the resources you need can be downloaded from our [official network disk](#jump-9). They are located in the `Mapping` folder and are divided into two subfolders according to Blender workflow and 3ds Max workflow.  
In any workflow, Virtools is essential. You should install Virtools 3.5 first.

Also, mapping can be a tough work, especially for beginners. You may face many questions during the mapping process, and these questions will take a long discussion to answer.  
Give it a try and then consider whether to continue. Once you decide, stick with it.

### <span id="jump-12-1">Blender Workflow</span>

Blender workflow are the easiest, fastest, and most understandable way to create Ballance maps today!

Watch this video to learn how to create custom map with Blender: https://www.youtube.com/watch?v=UiMHlVFBR3U  
The language of the video is Chinese, you can use YouTube's automatic translation function to watch the video.  
More tutorials related to Blender workflow can be viewed in the collection which the video above located.

!!! info "Confirm Blender Version"
    Blender Workflow now require Blender LTS 3.6.  
    You may notice that the video tutorial says we need to use Blender LTS 3.3. This is mainly because at the time of making the video, the latest Blender LTS version was 3.3. Please refer to the version marked here or in the `README` of [yyc12345/BallanceBlenderHelper](https://github.com/yyc12345/BallanceBlenderHelper).  
    LTS means Long Term Support. Choosing a long term supported version of Blender will make it easier to create our mapping plugin to minimize the amount of work required to migrate versions.

??? info "How to install BallanceBlenderHelper?"
    See the `README` of [yyc12345/BallanceBlenderHelper](https://github.com/yyc12345/BallanceBlenderHelper).

??? info "Why is there no Testing plugin tab? Where is my plugin?"
    After upgrading to Blender LTS 3.6, the Testing plugin category is no longer available due to decisions made by the Blender team. Please look for BallanceBlenderHelper from the Cummunity tab.

### <span id="jump-12-2">3ds Max Workflow</span>

We do not recommend using 3ds Max for custom map creation, but if you dislike Blender or are more familiar with 3ds Max, you can continue to use 3ds Max for mapping.

There are video tutorials for 3ds max workflow, but they are still in Chinese with no subtitles. If you insist on watching them, please visit: https://www.bilibili.com/video/BV1gb411r7ob

3ds Max workflow has some text tutorials, they are located in the `Tutorials` folder of our [official network disk](#jump-9), they are

* `3ds max in Ballance Mapping - BallanceBug.pdf`
* `Virtools Mapping. Ver 2 - GEColdStar.doc`

These tutorials are written in Chinese and you will need a suitable translator to read them.

!!! info "Install Outdated 3ds Max Please"
    The 3ds Max workflow can only be used with 32-bit 3ds Max 9, 2010, 2012 (2010 version recommended). Any incorrect version will result in not being able to install the NMO export plugin, which will result in not being able to create custom map.

## <span id="jump-13">Switch Ballance Between Fullscreen and Windowed</span>

Open `Bin/Player.ini` and modify entry `FullScreen`. Set it to `0` for windowed or `1` for fullscreen. For more configurations in this INI file, please browse `Bin/README.pdf` or [this URL](https://github.com/doyaGu/BallancePlayer).

If you can't find `Bin/Player.ini`, it mean that you are using old Ballance distribution. We highly suggest you install our distribution because it is more suit for contempory computer. However if you still stick to your Ballance. Please open Windows Registry Editor, then try navigating to any matched entries list following from top to bottom.

* `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Ballance\Settings`
* `HKEY_CURRENT_USER\SOFTWARE\Classes\VirtualStore\MACHINE\SOFTWARE\WOW6432Node\Ballance\Settings`

Then, modify key `FullScreen`. Set it to `0` for windowed or `1` for fullscreen.

## <span id="jump-14">Finding and Installing Mods</span>

1. Go to [**pseudoacetyl Mod Network Disk**](https://mega.nz/folder/wEB11B5D#FhU0JpzqomuFCAkMuBePWA) to download it.
1. Put downloaded mods in `ModLoader/Mods`. Please do not put any zip file in this folder except the mod self is zip file.

You may confused with how these mods does and how to find your wanted mods. There is a brief list introducing each mods does.

|Mods|Description|
|:---|:---|
|AdvancedTravelCam|Advanced Travel Camera is an improved version for the built-in TravelCam mod of Ballance Mod Loader. Usually used by BMMO commentator.|
|BallanceOptiFine|-|
|BallSticky|-|
|BaseCmoCfg|-|
|Blackout|Give you darkness more than Level 12.|
|BMLModuls|-|
|Coredump|-|
|CursorClipper|-|
|DeformedWB|-|
|DualBallControl|-|
|DynamicFov|-|
|ExtraSector|Support more than 8 sectors in Ballance.|
|FontCraft|Change game used font.|
|FreeViewRotation|-|
|Interference|-|
|LanternFader|Optimize the render of latern to increase game frame rate.|
|MapScripts|-|
|NewSpawn|-|
|PhysicsEditor|Control the gravity force in Ballance.|
|PositionViewer|-|
|RealTimeMeter|-|
|ScreenCapturer|-|
|Segment|Show your SR score for each sector and keep the best one like LiveSplit.|
|SpeedrunShortcuts|-|
|SpiritTrail|-|
|SysInfoDisplay|-|
|TASSupport|-|
|WatchYourTime|-|

## <span id="jump-15">Installing New Player</span>

New Player is a brand-new Ballance Player developed by doyaGu. New Player is based on the reversed code of original Ballance Player application. New Player perform better than old Player in any aspects and also it is open source.

??? info "What is Player?"
    Player is the executable application of Ballance. It is not the core of Ballance, but it is essential to start Ballance. It is located in `Ballance/Bin/Player.exe`

1. First, you should download it from [the release page of BallancePlayer GitHub project](https://github.com/yyc12345/BallancePlayer/releases/). In this release page, please download the latest build (file name like `NewPlayer-vx.y.z.zip`).
1. Extract and merge the downloaded files with `Ballance/Bin` folder (Important, not the root folder, it is Bin folder located in Ballance root folder).

If you are using compatibility modes to run the game, such as Windows 95, Run as Administrator, dgVoodoo, etc. You should remove them because New Player can run perfectly on contempory computer without any compatibility settings.

New Player also support more customizable configurations and command line. Please browse `Bin/README.pdf` for more infomations.
