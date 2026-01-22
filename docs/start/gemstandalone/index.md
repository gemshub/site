# <img style="float: center; height: 6%; width: 6%;" src="../../img/gems1.png"> GEM-Standalone

**Standalone Solver of Chemical Equilibria for Coupled Simulation Codes**

 Codes can be coupled to GEM-Standalone through its C/C++ and Python interfaces ([xGEMS](#gems3k-interface-c), [GEMS3K](#xgems-interface-cpython)). GEM-Standalone is a powerful and flexible tool for geochemical modeling, enabling high-precision equilibrium calculations in diverse applications.

- [x] Equilibrium solver capable of modeling complex (geo)chemical systems with many non-ideal solutions.
- [x] Supports variable temperature and pressure with substantial improvements in Gibbs Energy Minimization algorithms.
- [x] Fast, accurate, and ensures excellent mass balance precision.
- [x] Written in C/C++, open-source, and fully parallelizable on HPC architectures.
- [x] Python interface available via `xGEMS` (installable from `conda-forge`).
- [x] Serves as the numerical kernel of the GEM-Selektor geochemical modeling package.
- [x] GEM-Selektor can export input files for GEMS3K with a simple mouse click.
- [x] Used in developing coupled reactive mass transport simulation codes, such as OpenGeoSys-GEM.
- [x] Integrated into parameter fitting frameworks like [GEMSFITS](../gemsfits).

## Code Interfaces

### xGEMS Interface (C++/Python)

The `xGEMS`is a modern interface (`ChemicalEngine`) accessible from C/C++ amd Python. Python module enables seamless integration of GEMS3K into Python workflows, allowing researchers to leverage its capabilities in data analysis and machine learning applications.

[:octicons-arrow-right-24: Documentation xGEMS](documentation#xgems-interface)

[:octicons-arrow-right-24: Download xGEMS](download#xgems) 

[:octicons-arrow-right-24: Examples xGEMS](documentation/examples#xgems) 

### GEMS3K Interface (C++)

GEMS3K (formerly GEMIPM2K) is a standalone C/C++ code implementing the efficient numerical kernel [IPM-3](#gems-standalone-gems3k "more information in doc/html/theory_gem.html help file") of the GEM-Selektor v.3 package. It enables geochemical thermodynamic modeling of local/partial equilibria in complex heterogeneous multicomponent-multiphase systems. The code includes the TSolMod library, which provides built-in phase models of non-ideal mixing for a broad range of geochemical applications ([more...](solutionmodels)). GEMS3K employs fast and efficient linear algebra solvers from the [JAMA C++ TNT package](http://math.nist.gov/tnt/download.html) (NIST).

GEMS3K is released under the [Lesser GPL](http://www.gnu.org/licenses/lgpl.html) v.3 license, promoting broad applications in hydro(thermal)- and waste geochemistry research. The code is provided for implementation of various reactive-mass-transport and other coupled codes, where massive, chemically plausible computations of local/partial equilibrium states are necessary, including HPC codes.  

GEMS3K runs under Windows, Mac OSX and Linux desktop PCs, as well as on various parallel architectures. 

GEMS3K provides a flexible `TNode` C/C++ interface for data exchange in coupled simulations.

[:octicons-arrow-right-24: Documentation GEMS3K](documentation#gems3k-interface)

[:octicons-arrow-right-24: Download GEMS3K](download#gems3k) 

[:octicons-arrow-right-24: Examples GEMS3K](documentation/examples#gems3k) 

## Coupled Codes

GEMS3K can be integrated into high-performance computing (HPC) frameworks, enabling coupling with reactive mass transport codes such as:

Input files (text format) for GEMS3K can be exported from GEM-Selektor or manually prepared using any text editor. Runtime data exchange within coupled codes can be implemented in computer memory via the `TNode` class functions.

- **[OpenGeoSys](http://www.opengeosys.net)-GEMS[@KOSAKOWSKI2014]**: Reactive transport modeling.
- **[COMSOL](https://www.comsol.com/comsol-multiphysics)-GEMS[@AZAD2016]**: Coupling with multiphysics simulations.
- **[CSMP++](https://mineralsystems.ethz.ch/software/csmp.html)-GEMS[@YAPPAROVA2019]**: Computational simulations of multiphase processes.
- **[NLOpt](https://nlopt.readthedocs.io/en/latest/)-GEMS[@Miron2015]**: GEMSFITS parameter optimization tool.

## Authors
The development of GEMS3K stems from advancements in convex programming Gibbs energy minimization algorithms since 2000. It has been continuously improved with contributions from:

- **[Dmitrii A. Kulik](https://www.researchgate.net/profile/Dmitrii-Kulik)** (Paul Scherrer Institut, retired 2024) – Lead developer of GEM IPM algorithm and GEMS3K.
- **[Svitlana V. Dmytrieva](mailto:svitlana.dmitrieva@psi.ch)** (Institute of Environmental Geochemistry, Kyiv, Ukraine) – GEM Software engineer, C++ re-implementation of GEM-Selektor.
- **[Thomas Wagner](http://www.helsinki.fi/geo/staff/wagner/index.html)** (ETH Zurich, University of Helsinki) – Co-developer of GEM algorithms and TSolMod.
- **[Georg Kosakowski](http://people.web.psi.ch/kosakowski/)** (Paul Scherrer Institut) – Developed data exchange interfaces for coupled reactive transport simulations.
- **Ferdinand Franziskus Hingerl** (PSI, now at [Stanford University](https://pangea.stanford.edu/departments/ere/)) – Extended TSolMod with Pitzer, Extended UNIQUAC, and rEUNIQUAC models.
- **[Konstantin V. Chudnenko](http://www.igc.irk.ru/Labs/labs28-2.html)** (Institute of Geochemistry, Irkutsk, Russia) – Creator of SELEKTOR codes, contributor to GEM IPM algorithms.

## Contributors

- **[Frieder Enzmann](http://www.staff.uni-mainz.de/enzmann/)** (JOGU Mainz, Germany) – Improved `TNodeArray` example for GEM2MT module.
- **[Sergey Churakov](http://people.web.psi.ch/churakov)** (Paul Scherrer Institute) – Provided Churakov-Gottschalk EoS implementation.

## Publications

1. **Kulik D.A., et al. (2012).** "GEM-Selektor geochemical modeling package: Numerical kernel GEMS3K for coupled simulation codes." *Computational Geosciences.* [DOI](http://dx.doi.org/10.1007/s10596-012-9310-6)
2. **Wagner T., et al. (2012).** "GEM-Selektor geochemical modeling package: TSolMod library and data interface for multicomponent phase models." *Canadian Mineralogist*, 50, 1173-1195. [DOI](http://dx.doi.org/10.3749/canmin.50.5.1173)
3. **Shao H., et al. (2009).** "Modeling reactive transport in non-ideal aqueous–solid solution systems." *Applied Geochemistry*, 24, 1287-1300.
4. **Kulik D.A. (2006).** "Dual-thermodynamic estimation of stoichiometry and stability of solid solution end-members in aqueous–solid solution systems." *Chemical Geology*, 225(2-3), 189–212.
5. **Karpov I.K., et al. (2002).** "Convex programming minimization of thermodynamic potentials other than Gibbs energy in geochemical modeling." *American Journal of Science*, 302, 281-311.
6. **Karpov I.K., et al. (2001).** "Minimization of Gibbs free energy in geochemical systems by convex programming." *Geochemistry International*, 39(11).
7. **Karpov I.K., et al. (1997).** "Modeling chemical mass-transfer in geochemical processes: Thermodynamic relations, equilibrium conditions, and numerical algorithms." *American Journal of Science*, 297, 767-806. 

## Licensing

The GEMS Sandalone package is open-source, distributed under the [Lesser GPL v.3 license](http://www.gnu.org/copyleft/lesser.html).
It is available free of charge for developers affiliated with non-profit educational and research institutions for educational and research purposes only, subject to the [Terms and Conditions of Use](../citingterms) of GEM Software.









