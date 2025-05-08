---
date: 2022-04-14
authors: [dkulik]
description: >
  Changes made in 2022
---

!!! info "20 June 2022":"
    GEM-Selektor version 3.9.5 (rev. 9f3dc56.6dae7a9) code package, built using Qt6.2 LTS, is now available for downloading from the GEM-Selektor web page. This is a bugfix release, with several reported bugs corrected such as: deviations of Pitzer activity coefficients of aqueous species (tested against the salt solubility data and PHREEQC calculations in the same system); crash when opening a project with some ReacDC records containing "empty" (not recalculated inconsistent) data, e.g. in ClaySorMo and ClaySorIll projects (hint: replace these test projects in your Library/GEMS3/projects copying them from gems3-app Resources/projects); default number of displayed digits 8 sometimes caused ugly rendering such as 1.2600001, and was changed to 7 in "Preferences" to avoid such artifacts. This bugfix update is recommended for all users, especially those working with brines and applying the Pitzer activity model.

!!! info "14 April 2022"
    GEM-Selektor version 3.9.4 (rev. 58a7959.1e0be4a) code package, built using Qt6.2 LTS, is now available for downloading from the GEM-Selektor web page. This is a bugfix release, with several reported bugs corrected such as wrong calculations of standard enthalpies of aqueous species from DComp data in MTParm and RTParm (this also affected export of enthalpies into GEMS3K I/O files). This recommended update is a "must do" for all users working with enthalpies and heat effects e.g. in process or reactive transport simulations.

