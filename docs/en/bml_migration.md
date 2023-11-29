# Migrate to New Player and BML+

## Steps

This manual will introduce how to migrate your Ballance to our New Player and BML+ Ballance with all data preserved.  
We use re-installation method to upgrade your Ballance because it is easy to understand for almost players.

1. Create a backup folder outside of your Ballance installation. We need use it later.
2. Navigate to your Ballance installation path. If you can't find it, right click your Ballance shortcut - Properties - Open File Location to get it. You will see a file named `Database.tdb` in it if you were at correct location.
3. Backup following folders or files into your backup folder you created just a few seconds ago. If you don't see the folder, skip it.
    * `Database.tdb`: The high score list in game. Skip if you don't want preserve it.
    * `ModLoader/Config`: Your BML mods configurations.
    * `ModLoader/Map`: The custom maps storage of BML. Skip if folder is empty or you don't use BML to load custom maps.
    * `ModLoader/Mods`: Your BML mod list.
    * **Anything else you put in Ballance folder. The uninstaller will remove all files in Ballance folder and if you put some files in Ballance folder, they will disappear immediately. Entries listed above only are the common data backup. Don't forget your personal data. Think twice before entering next step.**
4. If you make sure all of your data has proper backups, run uninstaller of your Ballance.
    * Run `uninstaller.bat` with Admin privilege.
    * If you can't find `uninstaller.bat`, it mean that your Ballance installer is the super oldest one. Open Control Panel or Settings to uninstall it.
5. Follow Ballance installation manual to install a fresh new Ballance: todo
6. Restore following of your backups to your newly installed Ballance folder.
    * `Database.tdb`
    * `ModLoader/Config`
    * `ModLoader/Maps`
    * Any personal data you backuped previously.
7. Becasue BML mods can not be directly used in BML+, you need re-download your mods as BML+ format. Check every mods name of your `ModLoader/Mods` backup first. And see Mod Download section in FAQ page to download BML+ mods.
8. After all steps done, you can delete your backup folder.
9. Now you can experience Ballance again. If game crashed, or some issues raised. See FAQ section first, then send your problem in our Discord server if FAQ doesn't work.

## FAQ

### How to switch full screen or windowed? How to set game window size?

In game, you can use `Alt + Enter` to switch. For more keyboard shortcuts, please browser: https://github.com/doyaGu/BallancePlayer#hotkeys

Or if you want to change it permanently, open `Bin/Player.ini` and set `FullScreen` to 0 for windowed, 1 for full screen. Set `Widht` and `Height` to change the size of game window. For more settings in this INI file, please browser: https://github.com/doyaGu/BallancePlayer#ini-settings

### Should I set some compatibility settings for Ballance?

No. New Player can run perfectly without any compatibility settings. If you are still facing some launching game issues, please report it to us.

### Where is FramerateUnlocker? How to limit frame rate?

FramerateUnlocker is not available in BML+ because BML+ has already integrated it. You can see frame rate settings in menu Options  - Mods - BML - Misc.

Set entry `UnlockFrameRate`  to "Yes" to get unlimited frame rate. Or set it to "No" to limit frame rate. When `UnlockFrameRate` is "No", entry `SetMaxFrameRate` control the maximum value of frame rate. Set it to 0 to get VSync.

### My Ballance crashed. Can you help me?

First, find 2 log files, New Player log (`Bin/Player.log`) and BML+ log (`ModLoader/ModLoader.log`).

Then send your problem with these 2 log files to our Discors server. Or send them directly in New Player or BML+ repository issue page if you know which part cause your problem.

### Can I move my mod files directly?

No. BML+ is not compatible with BML at the API level. Therefore, BML+ uses `.bmodp` as its mod file extension, which is different from BML's `.bmod`. You can not use BML mod in BML+. But currently almost mod have both of BML and BML+ version. So you can easily find your favorite mod in BML+ format.
