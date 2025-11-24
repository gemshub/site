# <img style="float: center; height: 6%; width: 6%;" src="../../../img/gems1.png"> GEM-Standalone: Download

## xGEMS

xGEMS is a modern C++/Python interface built on top of GEMS3K.
The source code can be downloaded from the official [Git repository](https://github.com/gemshub/xgems). Follow the repository instructions to build it from source.

??? example "Expand to show the installation instructions"

    === "Windows"

        This guide explains how to set up and use **xGEMS** from **JupyterLab** on Windows using a Conda environment.

        ---

        1. Install Miniforge

        Go to the [Miniforge Releases Page](https://github.com/conda-forge/miniforge/releases)
        Download the appropriate installer for Windows.

        👉 Example:  
        [Miniforge3-Windows-x86_64.exe](https://github.com/conda-forge/miniforge/releases/download/25.3.0-2/Miniforge3-Windows-x86_64.exe)

        Run the installer and follow the prompts:
           - Install for **Just Me**
           - Tick **Create shortcuts** other options leave unticked

        If *"Windows protected your PC"* appears, click **More info** → **Run anyway**

        2. Start a Miniforge Terminal

        After installation, search for `miniforge` in the Start menu and open the **Miniforge Prompt**.

        3. Create the xGEMS Environment

        Navigate to your working directory, you have to create a directory where you will start Jupyter Lab, for example:

        ```bash
        mkdir C:\Users\MyUser\gemsworkshop
        cd C:\Users\MyUser\gemsworkshop # or any preferred location
        ```
        Once you start Jupyter Lab, you will be able to navigate inside this directory, you can copy here other files and notebooks.

        Create the environment and install required packages:

        ```bash
        conda create -n xgems python=3.14 xgems jupyter numpy scipy pandas matplotlib openpyxl
        ```

        Confirm with 'y' and then wait:

        ```
        Proceed ([y]/n)? y
        ```

        If you have blocked connection to anaconda repository. First remove the `defaults` channel and used only conda-forge by executing

        ```
        conda config --remove channels defaults
        ```

        Activate the environment:

        ```bash
        conda activate xgems
        ```

        Important!

        If you have installed xgems previously, you need to have the latest version. To be sure do

        ```bash
        conda update xgems
        ```

        To check that you have the lates version do

        ```bash
        conda list
        ```

        Find 'xgems' in the list and see if the installed version is

        [![xGEMS](https://img.shields.io/conda/vn/conda-forge/xgems?style=for-the-badge&logo=conda-forge)](https://anaconda.org/conda-forge/xgems)

        4. Launch JupyterLab

        ```bash
        jupyter lab
        ```

        This opens JupyterLab in your default browser.
        To close JupyterLab, use CTRL+C or close the Prompt window.

        5. Import xGEMS in a Notebook

        1. Create a new notebook using the `xgems` kernel by clicking File->New->Notebook or by clicking on the Python (ipykernel) icon in the launcher window 
        2. Add the following code to a cell:

        ```python
        import xgems
        ```

        To add a new cell use the + sign in the top notebook toolbar. Other functions to delete, run cell, restart notebook are found there.

        To run the cell click the 'play' / 'arrow to the right' button or simply press 'SHIFT+enter'. 

        If no error then Success!!

    === "Linux"

        This guide explains how to set up and use **xGEMS** from **JupyterLab** on Linux using a Conda environment.

        ---

        1. Open a Terminal

        Open your Linux terminal shell.

        2. Install Miniforge

        Download and install Miniforge:

        ```bash
        # Download the installer (adjust file name for your OS/architecture)
        wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh

        # Run the installer
        bash Miniforge3-Linux-x86_64.sh

        # Follow the prompts to complete installation. Activate the Conda shell and base environment with a command:
        eval "$(/home/parallels/miniforge3/bin/conda shell.bash hook)"

        ```

        3. Create the xGEMS work environment folder

        Navigate to your working directory, you have to create a directory where you will start Jupyter Lab, for example:

        ```bash
        mkdir ~/gemsworkshop
        cd ~/gemsworkshop  # or any preferred location
        ```

        Once you started Jupyter Lab, you will be able to navigate inside this directory, you can copy here other files and notebooks.

        Create the environment and install required packages:

        ```bash
        conda create -n xgems python=3.14 xgems jupyter numpy scipy pandas matplotlib openpyxl
        ```

        Confirm with:

        ```
        Proceed ([y]/n)? y
        ```

        If you have blocked connection to anaconda repository. First remove the `defaults` channel and used only conda-forge by executing

        ```
        conda config --remove channels defaults
        ```

        Activate the xgems working environment:

        ```bash
        conda activate xgems
        ```

        Important!

        If you have installed xgems previously, you need to have the latest version. To be sure do

        ```bash
        conda update xgems
        ```

        To check that you have the lates version, do

        ```bash
        conda list
        ```

        Find 'xgems' in the list and see if the installed version is

        [![xGEMS](https://img.shields.io/conda/vn/conda-forge/xgems?style=for-the-badge&logo=conda-forge)](https://anaconda.org/conda-forge/xgems)


        4. Launch JupyterLab

        ```bash
        jupyter lab
        ```

        This opens JupyterLab in your default browser.
        To close JupyterLab, use CTRL+C or close the Prompt window.

        5. Import xGEMS in a Notebook

        1. Create a new notebook using the `xgems` kernel by clicking File->New->Notebook or by clicking on the Python (ipykernel) icon in the launcher window 
        2. Add the following code to a cell:

        ```python
        import xgems
        ```

        To add a new cell use the + sign in the top notebook toolbar. Other functions to delete, run cell, restart notebook are found there.

        To run the cell click the 'play' / 'arrow to the right' button or simply press 'SHIFT+enter'. 

        If no error then Success!!


    === "macOS"

        This guide explains how to set up and use **xGEMS** from **JupyterLab** on macOS using a Conda environment.

        ---

        1. The easiest way to install such an environment is using Homebrew. 
        
        Open a terminal app and check if you have it installed: 

        ```bash

        brew help

        #If you have Homebrew, the output will be like this:
        Example usage:
          brew search TEXT|/REGEX/
          brew info [FORMULA|CASK...]
          brew install FORMULA|CASK...
          brew update
          brew upgrade [FORMULA|CASK...]
          brew uninstall FORMULA|CASK...
          brew list [FORMULA|CASK...]
        ...

        # Otherwise, 
        zsh: command not found: brew

        # In this case, install Homebrew as described in  https://brew.sh/ 

        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

        ```
        2. Install Miniforge or miniconda (from Terminal app)

        ```bash
        brew install miniforge

        # Follow the prompts to complete installation
        ```

        Note that if you have miniconda already installed (also in Homebrew), there will be an error message:

        ```bash

        Error: Cask 'miniforge' conflicts with 'miniconda'.

        ```

        In this case, simply proceed as described in section 3. below. 

        For owners of Mac M1, M2, M3, M4, using Miniforge is preferable. For that, you can brew uninstall miniconda and proceed with installing Miniforge. 

        3. Create the xGEMS Environment

        Navigate to your working directory, you have to create a directory where you will start Jupyter Lab, for example:

        ```bash
        mkdir ~/gemsworkshop
        cd ~/gemsworkshop  # or any preferred location
        ```

        Once you start Jupyter Lab you will be able to navigate inside this directory, you can copy here other files and notebooks.

        Create the xgems Conda environment and install required packages:

        ```bash
        conda create -n xgems python=3.10 xgems jupyter numpy scipy pandas matplotlib openpyxl
        ```

        If there are issues with arm Mac computers you can indicate that these are x64 apps by:
        
        ```bash
        CONDA_SUBDIR=osx-64 conda create -n xgems python=3.14 xgems jupyter numpy pandas matplotlib openpyxl
        ```

        Confirm with:

        ```
        Proceed ([y]/n)? y
        ```

        If you have blocked connection to anaconda repository. First remove the `defaults` channel and used only conda-forge by executing

        ```
        conda config --remove channels defaults
        ```

        Activate the environment:

        ```bash
        conda activate xgems
        ```

        Important!

        If you have installed xgems previously, you need to have the latest version. To be sure do

        ```bash
        conda update xgems
        ```

        To check that you have the latest version of xgems, do

        ```bash
        conda list
        ```

        Find 'xgems' in the list and see if the installed version is

        [![xGEMS](https://img.shields.io/conda/vn/conda-forge/xgems?style=for-the-badge&logo=conda-forge)](https://anaconda.org/conda-forge/xgems)

        4. Launch JupyterLab

        ```bash
        jupyter lab
        ```

        This opens JupyterLab in your default browser.
        To close JupyterLab, use CTRL+C or close the Prompt window.

        5. Import xGEMS in a Notebook

        1. Create a new notebook using the `xgems` kernel by clicking File->New->Notebook or by clicking on the Python (ipykernel) icon in the launcher window 
        2. Add the following code to a cell:

        ```python
        import xgems
        ```

        To add a new cell use the + sign in the top notebook toolbar. Other functions to delete, run cell, restart notebook are found there.

        To run the cell click the 'play' / 'arrow to the right' button or simply press 'SHIFT+enter'. 

        If no error then Success!!


Installing xGEMS via Conda

To install xGEMS on Windows, MacOS, and Linux, use:

```bash
conda install conda-forge::xgems
```
>Latest version

>[![Conda-Forge](https://img.shields.io/conda/vn/conda-forge/xgems?style=for-the-badge&logo=conda-forge)](https://anaconda.org/conda-forge/xgems)

<!-- ## pyGEMS

pyGEMS is included with xGEMS and provides a Pythonic alternative to the C++-like Python interface.
Unlike xGEMS, which follows a C++ like convention, pyGEMS enhances usability in geochemical calculations by using Python dictionaries for input/output data.

If you encountered an error, please [report an issue](../../../../community#report-issuesdiscussion) or [contact](/citingterms#contact-gems-development-team) the GEMS Development Team. -->

## GEMS3K

The **GEMS3K** source code can be downloaded from the official [Git repository](https://github.com/gemshub/GEMS3K). Follow the instructions in the repository to build the library from source.  

Installing GEMS3K via Conda  

The easiest way to install the **GEMS3K C++ library** on **Windows, MacOS, and Linux** is using [Conda/Miniconda](https://docs.conda.io/en/latest/miniconda.html):  

```bash
conda install conda-forge::gems3k
```

>Latest version

>[![Conda-Forge](https://img.shields.io/conda/vn/conda-forge/gems3k?style=for-the-badge&logo=conda-forge)](https://anaconda.org/conda-forge/gems3k)
