# <img style="float: center; height: 6%; width: 6%;" src="../../../../img/gems2.png"> GEM-Selektor: Download
Please, download and read the [Installation instructions (pdf)](HowToInstallGEM-Selektor.pdf). Some useful hints may also be provided in the [Technical Info](#technical-information).  

Please, use an appropriate direct link below to download the actual revision of the package (save the file to disk):

<div class="grid cards" markdown>

- :material-microsoft-windows: [__Download:__ GEMS3.9.7hotfix for Windows-x64 (offline installer)](https://gems.web.psi.ch/GEMS3/downloads/reposit/win64/Gems3.9.7hotfix-4795504.6606501-win64-qt6-install.exe "Link to download the latest GEMS3.9.x for Windows")
- :simple-macos: [__Download:__ GEMS3.9.7 for MacOS-x64 (offline installer)](https://gems.web.psi.ch/GEMS3/downloads/reposit/MacOSX/Gems3.9.7-4d01df3.6606501-qt5-macos-x86-64-Ventura.dmg "Link to download the latest GEMS3.9.x for macOS")
- :fontawesome-brands-linux: [__Download:__ GEMS3.9.7hotfix for Linux-x64 (offline installer)](https://gems.web.psi.ch/GEMS3/downloads/reposit/linux/Gems3.9.7hotfix-4795504.6606501-qt5-linux-x86_64.AppImage "Link to download the latest GEMS3.9.x for Linux")

    [**Download:** GEMS3.9.7hotfix for Linux-x64 (tar.xz of AppImage)](https://gems.web.psi.ch/GEMS3/downloads/reposit/linux/Gems3.9.7hotfix-4795504.6606501-qt5-linux-x86_64.tar.xz "Link to download the latest GEMS3.9.x for Linux")

</div>

## Older versions

[Gems3.9.6](https://gems.web.psi.ch/GEMS3/downloads/reposit/win64/Gems3.9.6-2ed66a4.9a8c970-qt6-win64-install.exe "Link to download v.3.9.6 for Windows") for Windows.         [Gems3.9.6](https://gems.web.psi.ch/GEMS3/downloads/reposit/MacOSX/Gems3.9.6-2ed66a4.9a8c970-qt5-macos-x86-64.dmg "Link to download v.3.9.6 for Mac")  for MacOS.         [Gems3.9.6](https://gems.web.psi.ch/GEMS3/downloads/reposit/linux/Gems3.9.6-2ed66a4.9a8c970-qt5-linux-x86_64.AppImage "Link to download v.3.9.6 for linux (Ubuntu)") for Linux (AppImage).          [Gems3.9.6](https://gems.web.psi.ch/GEMS3/downloads/reposit/linux/Gems3.9.6-2ed66a4.9a8c970-qt5-linux-x86_64.tar.gz "Link to download v.3.9.6 for linux (Ubuntu)") for Linux (tar.gz).

In the unlikely case of unresolved issues with installation or use of GEM-Selektor v.3.9.6, you still can perform a fallback download and installation of previously released (in June 2022) GEM-Selektor v.3.9.5 packages using the links below.  

[Gems3.9.5](https://gems.web.psi.ch/GEMS3/downloads/reposit/win64/Gems3.9.5-9f3dc56.6dae7a9-win64-qt6install.exe "Link to download v.3.9.2 for Windows") for Windows.         [Gems3.9.5](https://gems.web.psi.ch/GEMS3/downloads/reposit/MacOSX/Gems3.9.5-9f3dc56.6dae7a9-qt6-macos-x86-64.dmg "Link to download v.3.9.2 for Mac")  for MacOS.         [Gems3.9.5](https://gems.web.psi.ch/GEMS3/downloads/reposit/linux/Gems3.9.5-9f3dc56.6dae7a9-linux-x64-qt5.tar.gz "Link to download v.3.9.2 for linux (Ubuntu)") for Linux.

Please, do not forget to let us know about the issues encountered during the installation of GEM-Selektor v.3.9.6 on your OS by emailing to gems2.support(at)psi.ch

<!--Some information about outdated versions of GEM-Selektor can be found in [this web page](/gems3/selpack-outdated).  -->

## Technical Information

=== "Windows" 
    GEM-Selektor is built using the Qt5.x toolkit, which includes the [MinGW](http://www.mingw.org) port of the GNU C++ compiler and linker. It is distributed as a self-extracting installer file:

    ```
    Gems<ver>-<revGUI>.<revG3K>-win32-install.sfx.exe
    ```

    where:
    - `<ver>` represents the version number (e.g., `3.6.0`),
    - `<revGUI>` is the revision tag for the GEMS-Vizor component,
    - `<revG3K>` is the revision tag for the GEMS3K core.

    The installer (~25 MB) is created using [7-zip SFX Maker](http://sourceforge.net/projects/sfx-maker/). It contains the compressed `Gems3-app` folder and related files (`INSTALL.windows.txt`, `rungems3.bat`, `Readme3.txt`).

    **Installation Steps:**

    1. **Download and Execute**: Download the installer (e.g., `Gems3.6.0-xxxxxx.yyyyyy-win32-install.sfx.exe`), place it in a temporary folder, and run it as Administrator (for Windows 7 and later). The installer does not modify Windows Registry entries.
    
    2. **Select Installation Location**:
        - By default, the installer suggests `C:\GEMS342\`, where the program will be located in `C:\GEMS342\Gems3-app\`.
        - Alternatively, you may specify another location (e.g., `D:\MyWork`).
    
    3. **First Launch and Project Setup**:
        - Upon first execution, the program creates a folder `C:\GEMS342\Library\Gems3\projects\` (or equivalent in a custom location) to store modeling projects. Some test projects are automatically copied.
    
    4. **Updating GEM-Selektor**:
        - Run the installer again and select the previous installation directory. Only `Gems3-app` files will be replaced, leaving your projects intact.
    
    5. **Uninstallation**:
        - Delete the installation folder manually.
        - Remove the desktop shortcut.
        - Your modeling projects remain in `Library\Gems3\projects\`.

    **System Requirements:**
    - Storage: ~60 MB (software) + up to 100 MB per project (minimum 1 GB free space recommended).
    - Processor: Intel or AMD (quad-core i7 or better recommended).
    - RAM: 4 GB or more for optimal performance.
    - Display: 1600 x 900 resolution or higher recommended.

    !!! note "Default Installation Locations"  
        Starting from GEM-Selektor v3.8.0, Windows installers are built using the Qt Installer Framework. To avoid permission issues in Windows 10/11, the recommended installation target is the user’s home folder:  
        - **Program location:** `C:\Users\<myuser>\GEMS3`  
        - **User projects:** `C:\Users\<myuser>\Library\Gems3\projects`  
    
        For macOS, default locations are structured similarly:  
        - **Program location:** `/Users/<myuser>/GEMS3/Gems3.app`  
        - **User projects:** `/Users/<myuser>/Library/Gems3/projects/`  
    
        These locations ensure that user projects persist even after upgrading or uninstalling GEM-Selektor using `C:\Users\<myuser>\GEMS3\MaintenanceTool.exe`.  

    !!! warning "Windows Installation Issue (v3.9.6)"  
        Some users reported that GEM-Selektor v3.9.6 for Windows-x64 fails to start when installed in a user directory for the first time. As of June 26, 2023, a hot-fixed installer has replaced the previous version to resolve this issue.  

        - Users who prefer not to reinstall can follow the workaround detailed in section 1.1A of the **[Installation Instructions (PDF)](HowToInstallGEM-Selektor.pdf)**.  

        This issue also affected macOS and Linux variants, and hot-fixed installers are now available for all platforms.  

    !!! note "Windows Unknown Program"  
        Because the installer package is not officially registered with Microsoft, a warning popup will appear when starting the installer: `Windows Protected Your PC`. To proceed with the installation, click **More Info**, then select **Run Anyway**.  

        ![Windows run anyway](selektor_run_anyway.png "Unknown Publisher message in Windows"){ width="400" align=left }  

    !!! note "Windows Security Warnings"  
        When launching the installer on Windows 10/11, you may encounter warnings from **Windows Defender** due to Microsoft’s increasing security restrictions.  

        This is normal and does **not** indicate a virus. However, due to limited manpower, the GEMS development team cannot always meet Microsoft’s strict certification requirements. We appreciate your trust and patience.  

    !!! warning "GEMS Fails to Start on Windows"  
        On some older or outdated versions of Windows, GEMS may fail to start due to missing dependencies. Common error messages include:  
        - `"The application was unable to start correctly"`  
        - Warnings about missing **Visual C++ runtime libraries**  

        **Solution:**  
        1. **Install the Microsoft Visual C++ Redistributable**  
        - Download it from [this link](https://aka.ms/vs/17/release/vc_redist.x64.exe) and install it manually.  
        2. **Enable Microsoft Visual C runtime files** during GEMS installation.  
        3. **Run the VC Redistributable manually** after installation:  
        - Navigate to `C:\Users\<myuser>\GEMS397\Gems3-app\`  
        - Run `vc_redist.x64.exe` to complete the installation  

        After completing these steps, try launching GEMS again.  

        ![VC Windows](gems_win_vc_redist.png "Install Visual C runtime files"){ width="600" align=left }  

=== "Mac OS X"  
    GEM-Selektor is built using Qt5.x, requiring the `clang` compiler and linker provided by Xcode. The software is distributed as a disk image:

    ```
    Gems<ver>-<revGUI>.<revG3K>-OSX-x86-64.dmg
    ```

    where `<ver>`, `<revGUI>`, and `<revG3K>` follow the same convention as in Windows.

    The installer (~30 MB) is prepared using `macdeployqt` and contains a standard macOS application bundle (`gems3.app`).

    **Installation Steps:**

    1. **Mount and Install**: Open the `.dmg` file (e.g., `Gems3.3.5-xxxxxx.yyyyyy-OSX-x86-64.dmg`) and drag `gems3.app` into `/Applications`.
    
    2. **First Launch and Project Setup**:
        - Open a terminal and run:
        
          ```sh
          exec /Applications/gems3.app/Contents/MacOS/gems3 -d
          ```
        
        - This initializes `~/Library/Gems3/projects/` with test projects.
    
    3. **Upgrading GEM-Selektor**:
        - Delete `gems3.app` from `/Applications` and install the new version.
        - Your projects in `~/Library/Gems3/projects/` remain unaffected.
    
    **System Requirements:**
    - Storage: ~65 MB (software) + up to 100 MB per project (minimum 1 GB free space recommended).
    - Processor: Intel (quad-core i7 or better recommended).
    - RAM: 4 GB or more for optimal performance.
    - Display: 1600 x 900 resolution or higher recommended.


    !!! note "macOS Installation"  
        To install GEMS on macOS:  
        1. Open the downloaded `.dmg` file (`Gems3.9.x-yyyyyyy.zzzzzzz-qt6-macos-x86-64.dmg`).  
        2. If macOS blocks the installation because it's not from the App Store:  
        - **Control + Right-click** the app icon and select **Open**.  
        - If prompted again, repeat **Right-click → Open** to bypass security settings (only needed once).  
        3. Follow the **[Installation Instructions (PDF)](/docs/HowToInstallGEM-Selektor.pdf)** for further guidance.  

        After installation, launch `gems3.app` from Finder or the Dock as usual.  

    !!! note "Compatibility"  
        The pre-built installer is expected to work **out of the box** on most systems, except for some rare or very new Linux distributions.  

        For unsupported platforms (such as macOS M1/M2), it is still possible to compile the program from source:  
        - **[Download the source code](https://bitbucket.org/gems4/gems3gui/src/trunk/ "GEM-Selektor Source Code")**  
        - Follow the build instructions on the repository page.  

        We would love to hear **feedback from users running GEM-Selektor on Mac M1/M2**—please let us know your experience!  

=== "Linux"
    GEM-Selektor is built using Qt5.x and compiled with the system's GNU C++ toolchain. It is distributed as a compressed archive:

    ```
    Gems<ver>-<revGUI>.<revG3K>-linux-x86-<bits>.tgz
    ```

    where `<ver>`, `<revGUI>`, `<revG3K>`, and `<bits>` (32 or 64) follow the same convention as in Windows and macOS.

    The installer (~16 MB) is created on Ubuntu 16.04 LTS and includes `Gems3-app/`, `Resources/`, executable binaries, Qt5 libraries, and launch scripts (`gems3.bash`, `gems3.sh`).

    **Installation Steps:**

    1. **Download and Extract**:
        - Download the archive (e.g., `Gems3.4.5-xxxxxx.yyyyyyy-linux-x86-64-noQt5.tgz`).
        - Extract it to your home directory (`~/`).
        - Move `Gems3-app/` into a dedicated directory (e.g., `~/MyGEMS/`).
    
    2. **First Launch and Project Setup**:
        - Open a terminal and navigate to the installation folder:
        
          ```sh
          cd ~/MyGEMS/Gems3-app/
          ./rungems3.sh -d
          ```
        
        - This initializes `~/Library/Gems3/projects/` with test projects.
    
    3. **Handling Missing Dependencies**:
        - If the program fails to start, ensure Qt5 is installed:
        
          ```sh
          sudo apt-get install qt5-default qttools5-dev libqt5svg5 libqt5help5
          ```
        
    4. **Upgrading GEM-Selektor**:
        - Replace the existing `Gems3-app/` directory with the new version.
        - Your projects remain in `~/Library/Gems3/projects/`.
    
    5. **Creating a Desktop Shortcut**:
        - Copy `GEMSv3.3.desktop` from `Gems3-App/ToDesktop/` to `~/Desktop/`.
        - Right-click the shortcut, select `Properties`, and update the icon path.

    **System Requirements:**
    - Storage: ~65 MB (software) + up to 100 MB per project (minimum 1 GB free space recommended).
    - Processor: Intel (quad-core i7 or better recommended).
    - RAM: 4 GB or more for optimal performance.
    - Display: 1600 x 900 resolution or higher recommended.

    **Additional Notes:**
    - The software may not run on some Linux distributions due to library incompatibilities.
    - Advanced users may clone and build from source: [Bitbucket Repository](https://bitbucket.org/gems4/gems3gui.git).

    !!! note "Linux AppImage Installation"  
        The AppImage bundle should work **out of the box**:  
        1. **Download the AppImage** to a location in your home directory, e.g., `~/home/<you>/GEMS396`.  
        2. **Make it executable** in the terminal:  
        ```bash
        chmod u+x ~/GEMS396/<filename>.AppImage
        ```  
        3. **Launch the application** by either:  
        - Double-clicking the `.AppImage` file in the file manager.  
        - Running in the terminal:  
        ```bash
         cd ~/GEMS396
         ./<filename>.AppImage
        ```  

        **Adding Custom Thermodynamic Databases**  
        If you need to add third-party thermodynamic database files:  
        1. **Unpack the AppImage** in the terminal:  
        ```bash
        ./<filename>.AppImage --appimage-extract
        ```  
        2. Navigate to `./squashfs-root/usr/bin/DB.default` to add the required files.  

        **Creating a Custom AppImage**
        To build an extended AppImage after modifications, use the `appimagetool` utility:  
        ```bash
        ./appimagetool-x86_64 AppImage ./squashfs-root
        ```  
        - **Download AppImageTool from the [official AppImageKit repository](https://github.com/AppImage/AppImageKit/releases/).  


GEM-Selektor is a cross-platform tool that runs efficiently on various hardware configurations. Users are advised to regularly back up their modeling projects to prevent data loss.

## Troubleshooting
If GEMS3 program does not start properly:

*   Check that the paths to executable and Resources are correct in the shortcut or in the command-line batch file.
    
*   Try again starting GEMS3 with -d command line key to re-initialize configuration files.
    
*   On Linux, check that you installed a compatible variant, e.g. 32-bit on 32-bit linux. Re-install, if necessary.
    
*   Only one instance of GEMS3 can run in the computer memory. Kill the previous instance and start GEMS again. 
    

If GEMS3 crashes when the user tries to open a modeling project:  

*   Restore two files with names containing `project` from the backup of project database folder.  


If this does not help, or you encountered an error, please [report an issue](../../../../community#report-issuesdiscussion) or [contact](/citingterms#contact-gems-development-team) the GEMS Development Team.

[![Hits](https://hits.sh/gemshub.github.io/site/start/gemselektor/download/installpack.svg)](https://hits.sh/gemshub.github.io/site/start/gemselektor/download/installpack/)

