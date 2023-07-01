# FAQ

## <span id="jump-1">Installing Ballance</span>

There are a few ways to install Ballance, each with its own pros and cons.  
All the resources referred in installation steps can be found in our [official network disk](#jump-9). All of them are located in the `Installer` folder.

* **[Beginner Installation Guide](#jump-1-1): The most common installer suitable for almost everyone, especially beginners. We HIGHLY SUGGEST you choose this method.**
* [Vanilla Installation Guide](#jump-1-2): If you just need vanilla Ballance and is experienced with it, choose this.
* <span style="opacity:0.3">[Old Installation Guide](#jump-1-3): The old installer which was used before May 2023. This method is deprecated; don't use it.</span>

### <span id="jump-1-1">Beginner Installation Guide</span>

First, Download `Ballance-13levels-bbugdistro-high.exe`. This is a 7z self extractor. Run it and choose a directory to store the installer files.

???+ danger "Don't move files!"
    After running the installer, the decompressed files CANNOT be moved easily.  
    It is highly recommended to place the decompressed files in a folder where you won't regret it later on.

After decompressing, go to the aforementioned folder which contains the decompressed files, then run `install.bat`. When Windows asks for administrator privileges, just press Yes. The installation may take a while, so be patient.

??? question "Is this batch file harmful? Why it need admin privileges?"
    If you're entirely sure that this User Account Control window was triggered by this installer, then no need to worry; it is harmless for your PC.  
    This batch file needs admin privileges to modify some registry keys which is essential for Ballance installation.  
    This installer is open source, by the way; [here's the source code.](https://github.com/Xenapte/BallanceSetupTools)

Note that if you install Ballance with this method, you don't need to install BML as this comes pre-installed.  
To run Ballance, double-click the desktop shortcut named `Ballance Player`.  

???+ question "Why are there 2 shortcuts on my desktop? Which one is real?"
    After the installation, you may see 2 new shortcuts on your desktop. Both of these can launch Ballance, but they're different.  
    `Ballance` points to `Startup.exe`, which is the launcher for Ballance. Meanwhile, `Ballance Player` points to `bin\Player.exe`, which just opens the game directly. We suggest using the `Ballance Player` shortcut as this is faster than using the `Ballance` shortcut.  

??? info "How do I toggle fullscreen mode"
    By default, Ballance runs in fullscreen. If you want to toggle that, run `switch fullscreen.bat`. It may also need administrator privileges.

??? info "How do I uninstall Ballance?"
    Run `uninstall.bat`.

### <span id="jump-1-2">Vanilla Installation Guide</span>

!!! info "What is Vanilla? Who need it?"
    Vanilla means the base game, without any modifications.  
    **This method is only recommended for experienced Ballance players and players who want an unmodded game.**

1. Download `Ballance-12levels-vanilla.iso`. This `.iso` file is the original installer published by Atari. Mount the `.iso` file, go to the new CD drive that pops up, and run the installer. This will install the original 12-level version of Ballance.
    - For Windows 7 and earlier players, you may need a tool such as [WinCDEmu](https://wincdemu.sysprogs.org/download/) to mount the `.iso` file.
2. If you want the official Level 13 DLC, download `Sudu-BallanceLevel13.zip`. There is a manual in the zip file. See [the guide on installing the Level 13 DLC](#jump-6) for more details.
3. If you need some extra things (such as BML), see the corresponding section for the installation guide.

### <span id="jump-1-3">[Deprecated] Old Installation Guide</span>

!!! warning "Deprecated Installer"
    This installation method is deprecated. See Beginner Installation for the latest install method.  
    This section only serves as an archive.

<span style="opacity:0.3">
Download `Ballance-13levels-cndistro-low.exe` and run it to install Ballance.
Note that this installer is in Chinese; just click the Next button a few times, and enter in the installation directory when it asks you to.
</span>

## <span id="jump-2">Installing Custom Maps</span>

There are 2 ways to install custom maps. The vanilla method is only for players without BML; if you have BML then it is highly recommended to use the BML method.  

### BML Method

!!! warning "Version warning"
    If you are running BML 0.3.27 or lower, this method may cause the game to crash. In that case, please update to the latest version of BML.

1. Place the map files in the `Ballance\ModLoader\Maps` folder.
2. Launch the game and press Start.
3. A triangular button should appear to the right of level selection menu. Click on it to go to the custom maps menu.
4. Once you're in the custom maps menu, choose the custom map you want to play. You can also search for custom maps by typing its name.

### Normal Method

!!! warning "Backup your files!"
    Don't forget to make a backup of the default levels (Level_01.NMO to Level_13.NMO).

1. Go to `Ballance\3D Entities\Level`
2. Replace one of the default levels (named Level_01.NMO to Level_13.NMO) with your custom map.
3. Launch the game and go to the matching level to play it.

## <span id="jump-3">Running Ballance on Windows 10 / Windows 11</span>

We **highly recommand** to install [Ballance Mod Loader](#jump-10) to solve any compatibility issues.

If you really do not want to install it, you also can go to Ballance's root folder and right-click Startup.exe, select `Properties`. Select the `Compatibility` tab, then check the box next to `Run this program in compatibility mode for:`. Follow this order to set the version of Windows: `Windows 7` -> `Windows Vista SP2` -> `Windows XP SP3` -> `Windows XP SP2` -> `Windows 95` until the game can run normally.

## <span id="jump-4">Running Ballance on Linux or macOS</span>

[Wine](https://wiki.winehq.org/Download) or [Valve Proton](https://github.com/ValveSoftware/Proton/releases/latest) may help you to run Ballance on Linux or macOS (use `Bin/Player.exe` to start the game).  
You also can use a VM with Windows 7 to play Ballance if Wine or Proton are not working. Do not use a Windows XP virtual machine, because BML and several plugins do not support Windows XP.

## <span id="jump-5">[Deprecated] Installing Debug Mode</span>

!!! warning "Outdated Content Warning"
    This method is only suitable for the installation of the old version of Ballance Mod Loader (from 2015), which is no longer supported. Please go to [the chapter of installing BML](#jump-10) for details.

<span style="opacity:0.3">
If you want to use debug mode, you need to install the **old BallanceModLoader** (from 2015) first. See the [section of Installing BML](#jump-10) to learn how to install.
</span>

<span style="opacity:0.3">
You can get the Debug Mode file from our [official network disk](#jump-9). Open the `Plugin` directory and download `Debug_Mode.nmo`.
</span>

<span style="opacity:0.3">
Once you have installed BallanceModLoader successfully, you can install `Debug_Mode.nmo`. Navigate to your Ballance installation directory, put `Debug_Mode.nmo` to `ModLoader/Mod`. Now launch the game. If you see some words displayed at the top of the game, congratulations! You have installed Debug mode successfully.
</span>

## <span id="jump-6">Installing the Level 13 / Twilight Zone / SuDu DLC</span>

1. Go to our [official network disk](#jump-9) to download the plugin which is located in the `Installer` folder, called `SuDu-BallanceLevel13.zip`.
2. Extract the `.zip` file. On Windows, you do this by right-clicking on the `.zip` file and pressing `Extract All...`.
3. Go to the `SuDu_BallanceLv13` folder.
4. You will see a file called `SuDu_ReadMe.txt`. Open it and follow the instructions in the text file to install this plugin.

## <span id="jump-7">Getting Custom Maps</span>

There are a few ways to obtain custom maps.

!!! info "I Can't Read Map's Name in Chinese!"
    You may notice that most custom maps have a Chinese name. This is because most of the Ballance community is Chinese.  
    But fear not, as Pseudoacetyl has made a table listing the following:
    
    * Map author, release date, original name and translated name (a lot better than machine translations).
    * Map type and difficulty.
    * Map post ID and LucaS video ID (convenient for the players coming from LucaS videos).
    * Related videos for previewing maps.
    * etc...

    **See [pseudoacetyl/BallanceCustomMaps](https://github.com/pseudoacetyl/BallanceCustomMaps/blob/main/CustomMapList.md) for more infomation.**
    Huge shoutouts to Pseudoacetyl for the enormous amount of effort spent making the aforementioned table!

### Map Pack

The Ballance Map Pack contains lots of high-quality custom maps. However, the map pack's update are very few and far between, so if you want some new custom maps, try the other methods.

__[**Click here to download the Ballance Map Pack (Version 7.6)**](http://www.mediafire.com/folder/vyzo7893i0oln/Ballance_Map_Packs)__

### Discord

You can find recent custom maps in `#news`. You also can search in `#news` with the `has:file` filter to narrow down search results.  
However, this Discord server was established in 2018, so obviously some custom maps aren't included in our Discord server channels. In this case, try using other methods.

### Chinese Network Disk

Our Chinese network disk allows you download custom maps individually.  
It also contains some of the oldest and the latest custom maps.  
However, this network disk is hosted by the Chinese Ballance Forum, and we currently lack translators.

__[**Click here to visit the Chinese network disk**](http://ballancemaps.ys168.com)__

## <span id="jump-8">Recording Ballance Videos</span>

[Download OBS Studio.](https://obsproject.com/)  

It supports MP4, YouTube, and more.  

Tutorial video: https://m.youtube.com/watch?v=XllRHuCe07A  

- For 856x480 resolution: Change the Video Bitrate to 1000.  
- For 1280x720 resolution: Change the Video Bitrate to 1500.  

Don't want to send your videos to YouTube? You can upload your video to streamable: https://streamable.com/  

Videos are located in File / Show Recordings.


???+ question "How do I capture the video?"
    When you open OBS, you will see a small window called "Sources".  
    Click the `+`, and select Game Capture.  
    When you have done it, click OK.  
    You must name the Game Capture, of course.  
    Then, a window will pop up.  
    If you have created a Game Capture named "Ballance", you can set it to capture any fullscreen application, but if you want to, click Mode and then put it on "Capture Specific Window".  
    It will give you an option of what window to put. If the window is correct, then start the game and start recording.  
    If you want the audio to be recorded, try setting it on one of the speaker options.

??? question "How do I know what size of the video will be?"
    There is an Option called Replay Buffer. If you use 1280x720 with 1500 Bitrate, it will take up more memory.
    (e.g: With 856x480, 5 minutes is 36MB. With 1280x720 it is 52MB.)

??? question "Is there another way to start recording other than manually touching the "Start Recording" button?"
    Yes. Go to Files, Settings, and then Hotkeys. You can set up your hotkeys according to your own preferences, but you can use these:  
    - Start Recording: F1  
    - Stop Recording: F2  


## <span id="jump-9">Ballance Resources</span>

__[**Click here to go to our official network disk**](https://mega.nz/#F!CV5SyapR!LbduTW51xmkDO4EDxMfH9w).  

The network disk includes:

* Ballance v1.13
* Virtools 3.5
* Some mapping tools
* And more!

## <span id="jump-10">Installing Ballance Mod Loader</span>

Ballance Mod Loader (BML) is a free open-source API to expand the original content of Ballance. BML is divided into two versions, old (2015) and new (2020).

!!! warning "Choose the Correct Ballance Mod Loader"
    We **highly recommend** using BML 2020 version. The old 2015 version is deprecated, and therefore, not supported.

<span style="opacity:0.3">The old version of BML can be downloaded on our [Mega network disk](#jump-9). The old version (2015 version) is named as `BallanceModLoader-Gamepiaynmo-Old(2015).msi`.</span>  
For the **new version (2020 version)**, you should download it from [the release page of BallanceModLoader GitHub project](https://github.com/yyc12345/BallanceModLoader/releases/latest).  
In this release page, please download the latest build. Do **not** download the dev package (filename ending with `-dev`). Download the file that looks like `BML-0.1.23.zip`.

For different versions, different methods of installation should be used.

### New Version

!!! info "Info for people with old BML versions"
    For users with the old BML version, for example, those who have the "Debug Mode" mod installed, please remove that BML version.  
    If you are unsure about how to remove it, consider uninstalling and re-installing Ballance itself.

!!! warning "Don't forget to update!"
    It is highly recommended to always keep BML updated to the latest version.    
    Some BML mods require the latest version of BML to function.

First, extract and merge the downloaded files with the Ballance folder.

If you are using Compatibility Mode to run the game, it should be set to Windows XP or above, since BML removes the system check that Ballance performs when booting the game.  
This means that compatibility issues should disappear while using BML.

A "Ballance Mod Loader" mark at the top of the screen indicates that BML is installed correctly.

### Old Version

<span style="opacity:0.3">
Once you have it downloaded, the BallanceModLoader installer is presented as an MSI file and can be double-clicked to install.  
Unfortunately, the installer is only available in Chinese.  
The most important thing during installation is to select the correct Ballance root folder (Which contains database.tdb).
</span>

## <span id="jump-11">Ballance Multiplayer Service/Ballance Massively Multiplayer Online (BMMO)</span>

Ballance Massively Multiplayer Online (BMMO) allows a player to play Ballance with other players with low latency via a deployed central BMMO server.  
Since Feb 9, 2023, BMMO service is available for all Discord server members.  
You can now play with your friends in Ballance.  

See the Server Rules page for more information regarding the BMMO-related channels.  
This is a free non-profit service, so you don't have to pay anything.
