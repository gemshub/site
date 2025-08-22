# <img style="float: center; height: 6%; width: 6%;" src="../../../../img/gems2.png"> GEM-Selektor: Download
Please, use an appropriate direct link below to download the actual version of the package, save the zip the file to disk.

<div class="grid cards" markdown>

- :material-microsoft-windows: [Download: GEMS Latest for Windows-x64 ](# "Fetching latest release...")
- :simple-macos: [Download: GEMS Latest for macOS-x64 ](# "Fetching latest release...")
- :fontawesome-brands-linux: [Download: GEMS Latest for Linux-x64 ](# "Fetching latest release...")

</div>

<script>
  const repo = "gemshub/GEMSGUI";
  const assetPatterns = {
    windows: /^windows-.*\.zip$/i,
    macos: /^macos-.*\.zip$/i,
    linux: /^linux-.*\.zip$/i
  };

  fetch(`https://api.github.com/repos/${repo}/releases`)
    .then(res => res.json())
    .then(releases => {
      const latest = releases.find(r => !r.draft);
      if (!latest) {
        console.warn("No non-draft releases found.");
        return;
      }

      const version = latest.tag_name;
      const assets = latest.assets;
      console.log(`Latest release: ${version}`);
      console.log("Available assets:");
      assets.forEach(a => console.log(`- ${a.name}: ${a.browser_download_url}`));

      const links = document.querySelectorAll('.grid.cards a');

      ["windows", "macos", "linux"].forEach((platform, i) => {
        const pattern = assetPatterns[platform];
        const asset = assets.find(a => pattern.test(a.name));
        if (asset) {
          console.log(`Matched ${platform}: ${asset.name}`);
          links[i].href = asset.browser_download_url;
          links[i].title = `Link to download ${version} for ${platform}`;
          links[i].innerHTML = `Download: GEMS ${version} for ${platform.charAt(0).toUpperCase() + platform.slice(1)}-x64 `;
        } else {
          console.warn(`No matching asset found for ${platform}`);
        }
      });
    })
    .catch(err => console.error("Error fetching release data:", err));
</script>

 If you encounter issues, errors with GEM-Selektor, please report them in the [:octicons-arrow-right-24: github issues](https://github.com/gemshub/GEMSGUI/issues) (github account necessary). Known issues are also found there. 

**Older versions**

You can find previous GEM-Selektor releases at the following links:

- Versions **after 3.10.0**: [Available here](https://github.com/gemshub/GEMSGUI/releases)
- Versions **prior to 3.10.0**: [Available here](../installpackold)

**Not supported systems**

For unsupported platforms (such as macOS M1/M2) and other operating systems where GEM-Selektor fails to start, it is still possible to easily compile GEM-Selektor from its source code as [documented :octicons-arrow-right-24: here.](https://github.com/gemshub/GEMSGUI?tab=readme-ov-file#building-using-conda)

## Installing GEM-Selektor

Unzip/extract at the desired location (recommended under your user directory).

Some useful operating system based hints are provided in the [technical information below](#technical-information).  

!!! note "GEMS projects"
    
    Several GEMS versions can be on one PC in separate folders of different version number GEMS<version>. When starting GEMS the program will look at the common Projects folder.

    The user projects folders are located in the **Library Gems3 projects** folder. This folder is created automatically during the first successful GEMS run and several test/example projects are copied there (also found in Gems3-app\Resources\projects). These folders/projects are not be affected by installing, removing or using a newer GEMS version. 

    Users are advised to regularly back up their modeling projects to prevent data loss.

### Technical Information

GEM-Selektor is a cross-platform tool that runs efficiently on various hardware configurations. 

=== "Windows" 

    **How to run GEM-Selektor**

    * To run GEM-Selektor application for the first time double click to execute `rungems3.bat`. After the first run you can always start GEM-Selektor using its shortcut or `gem-selektor.exe` from `Gems3-app\bin`.

    !!! warning

        ![Windows run anyway](selektor_run_anyway.png "Unknown Publisher message in Windows"){ width="200" align=left }
        
        * If windows will show you a warning message **Windows protected your PC**, click "More info" and **Run anyway**.

    !!! warning
        * If you get an error `The application was unable to start correctly` that VCRUNTIME140_1.dll is missing from your computer. You have to download and install the latest Microsoft Visual C++ Redistributable version for the appropriate architecture, e.g., X86_64 for Intel, AMD PCs. [Visual C++ Redistributable Download](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#latest-microsoft-visual-c-redistributable-version)

        After installing the latest Microsoft Visual C++ Redistributable, try launching GEMS again.  

    !!! info "Pin to taskbar / shortcut"
        Once GEMS is running you can pin the program to the Task bar by right-clicking on its icon (on the task bar) and chose pin to task bar. 
        
        After you close GEMS, the script should create a Start Menu and Desktop shortcut. 

    * Alternatively, open a windows terminal, change directory to the right path and execute:

    ```bash
    rungems3.bat
    ```

    * For more details about command line parameters, see into `rungems3.bat`. Edit the file `rungems3.bat` (with any simple text editor) in order to ensure that GEMS3 command line parameters point to correct locations of the program resources and of modeling projects.
    Then leave one of the launch commands (they all contain gem-selektor.exe) without "rem" at the beginning, and close other commands with "rem". Save the batch file. Now you can start GEM-Selektor by typing "rungems3.bat" in the command line. 

=== "Mac OS X"
    
    **How to run GEM-Selektor**

    * To run GEM-Selektor application, execute the the gem-selektor.app

    !!! warning "Unidentified developer"
    
        At the first attempt to start gem-selektor.app results in a security alert about **unidentified developer**, which requires to go in Settings Privacy & Security and give a special permission to run the program. Go to Settings / Privacy and Security, scroll down, and confirm to run gem-selektor.app 
    
    The next runs can be started by clicking on gem-selektor.app in Finder or its index in the dock. It may be necessary to go to Settings / Privacy and Security, scroll down, and confirm to run gem-selektor.app once. 
    
    * Alternatively you can launch a terminal (In the Finder , open the /Applications/Utilities folder, then double-click Terminal) and execute the following:
    
    ```sh
    ./rungems3-mac.sh
    ```
    
    * For more details about command line parameters, see into `rungems3.sh`. Edit the file `rungems3.sh` (with any simple text editor) in order to ensure that GEMS3 command line parameters point to correct locations of the program resources and of modeling projects.

    !!! note "Compatibility"  
        For unsupported platforms (such as macOS M1/M2), it is still possible to compile the program from source [documented :octicons-arrow-right-24: here.](https://github.com/gemshub/GEMSGUI?tab=readme-ov-file#building-using-conda)

        We would love to hear **feedback from users running GEM-Selektor on Mac M1/M2**—please let us know your experience!  

=== "Linux"

    **How to run GEM-Selektor**
    
    * To run GEM-Selektor application (Linux x86_64), open a terminal and execute the following:
    
    ```sh
    ./rungems3.sh
    ```

    Ensure that the file is executable by right-click -> Properties -> Permissions "Allow executing file as a program".
    
    * For more details about command line parameters, see into `rungems3.sh`. Edit the file `rungems3.sh` (with any simple text editor) in order to ensure that GEMS3 command line parameters point to correct locations of the program resources and of modeling projects.

    !!! warning "Error starting GEMS"
        If the program fails to start, ensure Qt5 is installed:
        
        ```sh
        sudo apt-get install qt5-default qttools5-dev libqt5svg5 libqt5help5
        ```
        
        The software may not run on some Linux distributions due to library incompatibilities. If you have issues with starting GEMS due to segmentation fault, conflicting Linux system libraries, unsupported distro, etc. it is recommended that you build GEM-Selektor from its source code as [documented :octicons-arrow-right-24: here.](https://github.com/gemshub/GEMSGUI?tab=readme-ov-file#building-using-conda)

    !!! note "Shortcut / add to application launcher"
    
        To add the icon for the GEM-Selector application to the launcher, edit the desktop entry file `./Gems3-app/share/applications/gem-selektor.desktop` that contains a description of the application that includes information about its icon. 
        
        Change the path to the actual location of gem-selektor executable (right-click the shortcut, select `Properties`, and update the path). 
        
        The files are typically executable and can be placed in specific directories like  `~/.local/share/applications`. Then copy the `share` folder `./Gems3-app/share` to  `~/.local`. You can also copy the `gem-selektor.desktop` file to `~/Desktop/`.

### Important folders 

When working with GEM-Selektor two folder locations are important: 

(**1**) **GEMS Program folder** containing the executable code, the default database files, and resources. Here you find the `DB.default` folder where you need to copy any third-party databases you plan to use to create new modeling projects.

(**2**) **GEMS Projects folder** containing test projects that come with the installation and all user projects. You can exchange projects with others by sending or receiving projects folders.


=== "Windows"
    | Folder Path  &nbsp; &nbsp; &nbsp;                                                 | Description                       |
    | ------------------------------------------------------------- | ------------------------------------    |
    | `C:\'your_user'\`</br>`GEMS<version>\Gems3-app\`                         | **Program folder** |
    | `C:\'your user'\`</br>`GEMS<version>\Gems3-app\Resources\`               | Resources folder, here you also have the doc folder with documentation **help files** `\doc\html\` |
    | `C:\'your user'\`</br>`GEMS<version>\Gems3-app\Resources\DB.default\`    | default databases, these are available when creating a new project. Copy here any third-party database (e.g., cemdata) and you will be able to use it for creating a new project |
    | `C:\'your user'\`</br>`Library\Gems3\Projects\`                      | **Projects Folder**: This is where the test and user projects are stored. To add a shared project, simply copy the project folder here, and it will appear in the Open/New projects list when you open GEM-Selektor. To share your project, zip the folder and send it to someone else. They will need to unzip and copy the project folder into their GEMS projects folder. |
=== "Mac OS X"  
    | Folder Path   &nbsp; &nbsp; &nbsp;                                                | Description                       |
    | ------------------------------------------------------- | ------------------------------------    |
    | `/Applications/`</br>`Gems3.app/Contents/`                          | **Program folder** |
    | `/Applications/`</br>`Gems3.app/Contents/Resources/`                         | Resources folder, here you also have the doc folder with documentation **help files** `/doc/html/` |
    | `/Applications/`</br>`Gems3.app/Contents/Resources/DB.default/`                         | default databases, these are available when creating a new project. Copy here any third-party database (e.g., cemdata) and you will be able to use it for creating a new project |
    | `/Library/`</br>`gems3/projects/`                          | **Projects Folder**: This is where the test and user projects are stored. To add a shared project, simply copy the project folder here, and it will appear in the Open/New projects list when you open GEM-Selektor. To share your project, zip the folder and send it to someone else. They will need to unzip and copy the project folder into their GEMS projects folder. |

=== "Linux"
    | Folder Path         &nbsp; &nbsp; &nbsp;                                          | Description                       |
    | ------------------------------------------------------- | ------------------------------------    |
    | `~/'your_user'/`</br>`GEMS<version>/Gems3-app/`                         | **Program folder** |
    | `~/'your user'/`</br>`GEMS<version>/Gems3-app/Resources/`               | Resources folder, here you also have the doc folder with documentation **help files** `/doc/html/` |
    | `~/'your user'/`</br>`GEMS<version>/Gems3-app/Resources/DB.default/`    | default databases, these are available when creating a new project. Copy here any third-party database (e.g., cemdata) and you will be able to use it for creating a new project |
    | `~/'your user'/`</br>`Library/Gems3/Projects/`                      | **Projects Folder**: This is where the test and user projects are stored. To add a shared project, simply copy the project folder here, and it will appear in the Open/New projects list when you open GEM-Selektor. To share your project, zip the folder and send it to someone else. They will need to unzip and copy the project folder into their GEMS projects folder. |

## Updating GEM-Selektor

Download the newer version and and extract it at the desired location.

💡 It's recommended to always use the most recent version for optimal performance. However, you're free to keep multiple versions and choose which one to run as needed.

📁 Note: The projects folder is shared across all versions, so your work remains accessible regardless of which version you use.

## Uninstalling GEM-Selektor

Delete the installation folder manually from your system.

Remove any desktop shortcuts or start menu entries.

✅ Your modeling projects are safe! They remain stored in Library\Gems3\projects\ and won't be affected by the uninstall process.

## Troubleshooting
If GEMS3 program does not start properly:

*   Check that the paths to executable and Resources are correct in the shortcut or in the command-line batch file.
    
*   Try again starting GEMS3 with -d command line key to re-initialize configuration files.
    
*   On Linux, check that you installed a compatible variant, e.g. 32-bit on 32-bit linux. Re-install, if necessary.
    
*   Only one instance of GEMS3 can run in the computer memory. Kill the previous instance and start GEMS again. 
    

If GEMS3 crashes when the user tries to open a modeling project:  

*   Restore two files with names containing `project` from the backup of project database folder.  


If this does not help, or you encountered an error, please [report an issue](../../../../community#report-issuesdiscussion).

[![Hits](https://hits.sh/gemshub.github.io/site/start/gemselektor/download/installpack.svg)](https://hits.sh/gemshub.github.io/site/start/gemselektor/download/installpack/)

<!-- 
        Another way to open a blocked app is to locate the app in a Finder window. 
    
        1. Open the Finder.
        2. Locate the app (it might be in the Applications folder, or it might still be in your downloads folder).
        3. Ctrl-click or right-click on the app.
        4. Select Open from the resultant menu and the app will be opened anyway, and an exception will be created for opening it normally (i.e. by double-clicking) in the future. 
-->

