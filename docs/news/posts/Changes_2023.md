---
date: 2023-05-10
authors: [dkulik]
description: >
  Changes made in 2023
---

!!! info "27 June 2023"
    Attention (hotfix)! There were user reports that the latest GEM-Selektor v.3.9.6 package for Windows 10/11, when installed in a user directory for the first time, fails to start. Beginning from today, the installer for Windows is replaced by a newer installer containing a hot-fixed package expected to start normally in any case. The previous installer (from 20 May 2023) is still available for those who do not want to de- and re-install GEMS396 and would rather use the workaround now added to the Installation instructions (pdf) file, section 1.1A. We strongly recommend all GEMS for Windows users to update to this hotfix release. Similar issues with MacOS and Linux installations of GEM-Selektor have been found, and the installers replaced with hot-fixed ones.

!!! info "20 May 2023"
    GEM-Selektor version 3.9.6 hotfix (rev. 7f2d47b.9a8c970) code package is now available for downloading from the GEM-Selektor web page, replacing the installers of v.3.9.6 released on 10.May 2023. With this hotfix, all the output from the new logging of GEMS operation will be written into a "/logs" subfolder in the user's work folder, for instance, "C:\Users\<username>\Library\Gems3\logs" (where the user can easily check the logs). This update also fixes the temporary issue with MacOS installation mentioned below: now GEM-Selektor can be launched as usual, by clicking in Finder on "gems3.app" or by clicking on the "GEMS3" icon in the Dock. We strongly recommend all users to update to this hotfix release, also those who have already used the installer from 10.May 2023.

!!! info "10 May 2023"
    GEM-Selektor version 3.9.6 (rev. 78a6759.f9bc3d0) code package, built using Qt5.15 or Qt6.2 LTS, is now available for downloading from the GEM-Selektor web page. This is a bugfix interim release, with several reported bugs corrected such as uncaught math errors, memory leaks or crashes due to the use of new functionality such as the export to GEMS3K files with ThermoFun local JSON database and the new logging system using spdlog. This update is recommended for all users, especially on Linux where we use now a convenient AppImage bundle format. Note that on MacOS, temporarily the GEM-Selektor v.3.9.6 can only be started from terminal or from Finder by diving into gems3.app Contents => MacOS => clicking on gems3 executable file; this issue will hopefully be fixed until the next release.