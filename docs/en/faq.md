# FAQ

## <span id="jump-1">Installing Ballance</span>

Please buy Ballance by Ziggurat from [Steam](https://store.steampowered.com/app/2000770/Ballance/) or [GOG](https://www.gog.com/game/ballance). As of January 5, 2023, this server no longer offers any illegal versions for download.

Sadly, however, Ziggurat's release of Ballance's faithfulness to the original does not fulfill the expectations of today's gamers for a re-release of a 20-year-old game. It lacks many essential features, some of which have actually been addressed by the Ballance community. So here we offer 3 patch packs for optimizing the Ziggurat release of Ballance.

* Level13DLC: This patch pack is a free Level 13 DLC released by the original production team.
* NewPlayerPatch: This patch package will replace Ballance's default executable program with a more modern version. It supports custom resolutions, widescreen, unlimited frame rates, and other features. See [New Player](#jump-15) section for details.
* BallanceModLoaderPlusPatch: This patch adds a Mod Loader to Ballance to allow Ballance to load user-written mods to enrich the gameplay experience.Ballance has a number of mods, including inline mods. See [Mod Loader](#jump-10) section for details on Mod Loader. For details on how to install mods, see [Finding and Installing Mods](#jump-14) section.

### Installing the Patches

The patches are available on our [official network disk](#jump-9), they are located in the `Installer` folder. You can patch as many patches as you like, but we recommend installing all of them to maintain the same gaming experience as most Ballance players. The patches are provided in ZIP format. Simply use compression software (such as Winzip or 7z) and extract the contents of the downloaded ZIP package to the root directory of Ballance. If the compression software suggests a folder conflict, please choose Merge (not Replace), if it suggests a file conflict, please choose Replace.

Ballance's root directory refers to the location where Ballance is installed, if you can find a file named `Database.tdb` in this folder, you are on the right track. For users installing Ballance from Steam, it is usually `xxx/steamapps/common/Ballance` (`xxx` is the location of your Steam repository)

### Uninstalling the Patches

We recommend that you uninstall all installed patches using the "Verify Game Integrity" feature provided by Steam. You can also manually remove patches if you know exactly which files they replace.

## <span id="jump-2">Installing Custom Maps</span>

There are 2 method to install custom map. Normal method is suit for everyone. And if you have installed [BML](#jump-10), you can use BML method to install custom map.

### BML Method

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
    You must have [BML](jump-10) installed to enable Cheat Mode.

1. Click on the `/` key on your keyboard in the game window and you will see a translucent black input box appear at the bottom of the game screen.
1. Type `/cheat` in it (`/` is automatically typed, no need to type it again) and press Enter on your keyboard.
1. If you see the `Cheat Mode Enabled` label at the bottom of your game, you have Debug Mode enabled.
1. Type `/cheat` again to disable Debug Mode.

## <span id="jump-6">Installing Level 13 / Twilight Zone / SuDu</span>

Just browse the [Installing Ballance](#jump-1) chapter and follow the instructions to install the Level13DLC.

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

* Patches for Steam Ballance
* Virtools 3.5
* Mapping Tools
* etc...

## <span id="jump-10">Installing Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance.

You can install Ballance ModLoaderPatch by navigating to the [Installing Ballance](#jump-1) chapter and following the instructions. A "BML Plus" mark at the top of the screen indicates that BML is installed correctly.

!!! info "Keep Up to Date"
    I am highly recommend keeping your BML at the latest version. Some BML mod required the latest version of BML and the the latest version fix more bugs and will improve your game experience.

    Simply download the new version of BML again as described above and install it in the same way. The new version file will automatically overwrite the old version file. If there is anything that requires special attention, it will be stated in the release. Note that some mods may no longer load after updating, so please update your mods at the same time!

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

## <span id="jump-13">Fullscreen and Windowed Ballance</span>

Open `Bin/Player.ini` and modify entry `FullScreen`. Set it to `0` for windowed or `1` for fullscreen. For more configurations in this INI file, please browse `Bin/README.pdf` or [this URL](https://github.com/doyaGu/BallancePlayer).

If you can't find `Bin/Player.ini`, it mean that you are using old Ballance distribution. We highly suggest you install our distribution because it is more suit for contempory computer. However if you still stick to your Ballance. Please open Windows Registry Editor, then try navigating to any matched entries list following from top to bottom.

* `HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Ballance\Settings`
* `HKEY_CURRENT_USER\SOFTWARE\Classes\VirtualStore\MACHINE\SOFTWARE\WOW6432Node\Ballance\Settings`

Then, modify key `FullScreen`. Set it to `0` for windowed or `1` for fullscreen.

## <span id="jump-14">Finding and Installing Mods</span>

1. Go to [**CN Ballance Community Resource Site**](http://ballancemaps.ysepan.com/)
1. Expand node to `Ballance自制模组(Mod) -> BML+` and find mods which you are looking for.
1. Put downloaded mods in `Ballance/ModLoader/Mods`. Please do not put any zip file in this folder except the mod self is zip file.

You may confused with how these mods does and how to find your wanted mods. There is a brief list introducing each mods does.

|Mods|Description|
|:---|:---|
|AdvancedTravelCam|Advanced Travel Camera is an improved version for the built-in TravelCam mod of Ballance Mod Loader. Usually used by BMMO commentator.|
|BallanceOptiFine|-|
|BallSticky|-|
|BaseCmoCfg|-|
|Blackout|Give you darkness more than Level 12.|
|BLinguist|Multi-languages mod|
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

??? info "What is Player?"
    Player is the executable application of Ballance. It is not the core of Ballance, but it is essential to start Ballance. It is located in `Ballance/Bin/Player.exe`

New Player is a brand-new Ballance Player developed by doyaGu. New Player is based on the reversed code of original Ballance Player application. New Player perform better than old Player in any aspects and also it is [open source](https://github.com/doyaGu/BallancePlayer).

Browse [Installing Ballance](#jump-1) chapter and apply NewPlayerPatch to install New Player.

If you are using compatibility modes to run the game, such as Windows 95, Run as Administrator, dgVoodoo, etc. You should remove them because New Player can run perfectly on contempory computer without any compatibility settings.

New Player also support more customizable configurations and command line, including more resolutions, wide screen support and unlimit frame rate. Please browse `Bin/README.pdf` for more infomations.

!!! info "Keep Up to Date"
    I am highly recommend keeping your New Player at the latest version.

    Simply download the new version of New Player again as described above and install it in the same way. The new version file will automatically overwrite the old version file. If there is anything that requires special attention, it will be stated in the release.

## <span id="jump-16">Frame Rate (FPS)</span>

The legacy Ballance frame rate is limited to a maximum of your screen refresh rate. However, we can lift this limitation by installing some patches. Since Ballance's input is tied to rendering, a faster frame rate means your input frame rate is faster too.

### Unlimited Frame Rate

1. Install [New Player](#jump-15) first.
1. Browse its configuration manual and keep eyes on its Unlock Framerate fields.

### Limit Frame Rate to Specific Value

1. Not only install [New Player](#jump-15), but also install [BML](#jump-10) first.
1. Launch game, navigate to menu `Options - Mods - BML - Misc`.
1. Set entry `UnlockFrameRate`  to "Yes" to get unlimited frame rate. Or set it to "No" to limit frame rate. When `UnlockFrameRate` is "No", entry `SetMaxFrameRate` control the maximum value of frame rate. Set it to 0 to get VSync.

For legacy Ballance player, you need find some softwares supporting frame rate clamping. We don't have any suggestions about this.

## <span id="jump-17">Full HD Ballance</span>

Install [New Player](#jump-15), browse its configuration manual and keep eyes on its Resolution and Wide Screen fields.

## <span id="jump-18">Germany UI Issue</span>

Install [New Player](#jump-15), browse its configuration manual and keep eyes on its Language fields.
