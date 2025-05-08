# <img style="float: center; height: 6%; width: 6%;" src="../../../img/gems2.png"> GEM-Selektor: Databases

## GEMS Default Thermodynamic Database (TDB)

The GEMS default Thermodynamic Database (TDB) is included with the GEMS installation for broader applicability.

- [x] The TDB includes the PSI-Nagra chemical thermodynamic database, converted into GEMS DComp/ReacDC formats.
- [x] It also includes the SUPCRT92 (Slop98.dat) dataset, imported into GEMS DComp format.  
- [x] Third-party TDBs for specific applications (e.g., cement chemistry, nuclear engineering, saline systems, ore petrology) are available.  
- [x] In GEM-Selektor, the thermodynamic data for DComp/ReacDC are automatically corrected for the temperature and pressure of interest.  
- [x] Thermodynamic data over a wide range of T,P conditions can be exported into [GEM-Standalone](/../../start/gemstandalone) chemical system files and subsequently into coupled reactive transport codes.

## Location

The database files used when creating a new modeling project are stored in the `gems3-app/Resources/DB.default/` folder, containing `*.pdb` and `*.ndx` files. Third-party databases can be copied into `DB.default/` to make them available for new projects. If new database files or projects are added to the project folder, **restart GEMS** for the changes to take effect.

!!! warning "Files in the default database folder (`/DB.default/`) are write-protected"

    This measure prevents unintentional data loss or corruption and ensures backward compatibility across different modeling projects. More technical details can be found in the GEM-Selektor help pages.

!!! info "GEMS supports thermodynamic data for substances and reactions"

    **GEM-Selektor employs a unique "hybrid" structure for thermodynamic databases, integrating the DComp and ReacDC formats.**
    - DComp format stores 'thermochemical' and/or 'equation of state' data for Dependent Components (DComp).
    - ReacDC format defines a DComp’s thermodynamic properties via reactions with other DComps with known properties.
    - Dedicated modules in GEM-Selektor provide tools for internally consistent extensions of project thermodynamic databases.

!!! info "Data from other sources"

    GEM-Selektor itself is neither application- nor database-specific. However, its applicability depends on the availability of internally consistent thermodynamic data. These datasets can be compiled by external sources, converted into GEM-Selektor format, and distributed as third-party chemical thermodynamic databases.

!!! info "Your own data"

    Once a new project is created, **GEMS copies data for substances, reactions, phases, etc., from the default database to the project folder**, making the project database independent from the default one. This allows users to edit, extend, or modify the project database as needed. Users can also create custom databases, copy them into `/DB.default/`, and use them for new projects.

## Databases in GEM-Selektor

GEM-Selektor v.3 is distributed with a default chemical thermodynamic database consisting of three parts:

1. **PSI-Nagra Database** ("psi-nagra")
2. **SUPCRT Dataset** ("supcrt")
3. **Third-party Databases** ("3rd-party")

These components can be selected individually or together when creating a new modeling project in the GEMS "Elements" dialog.

### (i) PSI-Nagra Database ("psi-nagra")

This dataset is derived from the [PSI/Nagra 12/07 chemical thermodynamic database](https://www.psi.ch/en/les/database), which updates the previous **Nagra-PSI 01/01 database**. It supports geochemical modeling, particularly for nuclear waste disposal. To enhance usability at elevated temperatures and pressures, this database has been merged with a subset of the "supcrt" database.

For further reference, see:
> **Download: [TM-44-03-04 (web version)](../TM-44-03-04-web.pdf)**  
> *Unpublished PSI Technical Report TM-44-03-04 on the GEMS version of the Nagra/PSI database 01/01 (updated to 12/07 in 2017).*

### (ii) SUPCRT Dataset ("supcrt")

This widely used dataset (Slop98.dat[@SHOCK1997]) enables equilibrium calculations at temperatures up to **1000°C** and pressures up to **5 kbar**. It covers a broad range of species and elements, including those not available in "psi-nagra". 

The **SUPCRT dataset** is built on:

  - The **SUPCRT92 code**[@JOHNSON1992] a widely accepted standard in geochemistry and is included in various codes such as ChemApp, EQ3/6, GIBBS/Hch, and Selektor-C/W.
  - The **Revised Helgeson-Kirkham-Flowers (HKF) Equation of State**[@Tanger1988] a thermodynamic model used to calculate the properties of aqueous species under varying temperatures and pressures.

### (iii) Third-party Databases ("3rd-party")

These optional databases support specialized applications, including:

- **[CEMDATA](https://www.empa.ch/web/s308/thermodynamic-data)** – Cement chemistry modeling
- **[Mines DB](https://geoinfo.nmt.edu/mines-tdb/)** – Hydrothermal ore petrology
- **[HERACLES](https://www.psi.ch/en/heracles/gems-specific-heracles-database)** – Nuclear fuel modeling
<!-- - **[THEREDA](../../../community/saline)** – Saline systems using the Pitzer model -->
- **[Aq17](https://www.researchgate.net/publication/325402295_TDB_Miron_etal_2017_GEM-Selektor)** – Hydrothermal geochemistry
- **Others** – users maintain databases for different applications

Users can download these files and place them in `gems3-app/Resources/DB.default/` to make them available for new projects.

