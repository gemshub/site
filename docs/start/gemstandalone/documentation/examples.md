# <img style="float: center; height: 6%; width: 6%;" src="../../../../img/gems1.png"> GEM-Standalone: Examples

## xGEMS

* Run the demo examples in your browser (no installation required) [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/gemshub/xgems-jupyter/main?urlpath=lab/tree/how-to-use-xgems-examples.ipynb)

* Checkout the [xgems-jupyter](https://github.com/gemshub/xgems-jupyter) repository of examples using xgems in jupyter notebooks 

*  Examples both in C++ and Python can be found in the [code repository](https://github.com/gemshub/xgems/tree/master/demos). *  Examples both in C++ and Python can be found in the [code repository](https://github.com/gemshub/xgems/tree/master/demos). 

The **GEMS3K I/O files** used in the `gemcalc` and `node-gem` test examples were **exported using GEM-Selektor v.3** from the **CalcDolo** modeling project (included in the GEM-Selektor installer). This small, simple project demonstrates GEMS3K I/O file structures. 

#### Reactive Transport in a Calcite Column (xGEMS in Python)

A demo reactive transport modeling of **the calcite–dolomite benchmark**[@Yapparova2017;@SHAO2009] using xGEMS can be found in the [repository](https://github.com/gemshub/xgems/tree/master/demosdemo_reactive_transport.py)

![GEMS-CSMP](../calcite-dolomite.png){ width="400" }
![GEMS-OpenGeoSys](../calcite-dolomite2.png){ width="400" }

## GEMS3K

#### Batch equilibrium calculations

  - See [**`standalone/gemcalc/main.cpp`**](https://github.com/gemshub/GEMS3K/blob/master/gemcalc/main.cpp) for an example using **DCH, IPM, and DBR** input files.  
  - Results are stored in **DBR files** or optionally in a **text dump file**.  


#### Reactive Transport in a Calcite Column (GEMS3K TNode in C++)

Coupling with transport codes

  - See [**`standalone/node-gem/main.cpp`**](https://github.com/gemshub/GEMS3K/blob/master/node-gem/main.cpp) for an example of integrating GEMS3K with a **multi-node mass transport solver**.  
  - Chemical data and parameters are exchanged dynamically in memory.  

This example models a **hypothetical porous column** filled with an inert material containing **small amounts of reactive calcite**. A **Ca-poor MgCl₂ solution** enters one end of the column as an infinite source, while the opposite end serves as an infinite sink. As fluid flows through the column (assuming instantaneous mineral-water reactions), two key **reaction fronts** develop:  

1. **Calcite dissolves**, and **dolomite precipitates**.  
2. **Dolomite dissolves**, leaving no reactive minerals in the column.  

To define this system, only two **initial chemical states** are required:  

- **Initial column composition**: Stable calcite with trace amounts of Mg and Cl.  
- **Source composition**: MgCl₂ solution.  

Both are provided in the **CalcDolo** project.  

**Initial Column Composition**  

The **CalcDolo:G:CalcColumn:0001:0:1:25:0** `SysEq` record represents the initial column chemistry (excluding inert material).  

**Bulk Composition**

```txt
Property    Name    Quantity    Units  
bi_         C       0.00035     M  
bi_         Ca      0.00025     M  
bi_         Cl      2e-07       M  
bi_         H       110.684     M  
bi_         Mg      1e-07       M  
bi_         O       55.3428     M  
```

**Equilibrium Speciation**  

At **1 bar** and **25°C**, equilibrium calculations produce the following speciation:  

![Screen-Calcite-Column-0001.png](../Screen-Calcite-Column-0001.png){ width="400" }

Here, **partial calcite dissolution** (isolated from atmospheric air) results in a **slightly alkaline**, low-ionic-strength solution.  

**Source Solution Composition**  

The **CalcDolo:G:CalcColumn:0000:0:1:25:0** `SysEq` record defines the **MgCl₂ source solution**:  

**Bulk Composition**  

```txt
Property    Name    Quantity    Units  
bi_         C       0.0001001   M  
bi_         Ca      1e-07       M  
bi_         Cl      0.016       M  
bi_         H       110.684     M  
bi_         Mg      0.008       M  
bi_         O       55.3421     M  
```

**Equilibrium Speciation**  

At **1 bar** and **25°C**, equilibrium calculations produce:  

![Screen-Calcite-Col-BC-0000.png](../Screen-Calcite-Col-BC-0000.png){ width="400" }

Here, **calcite and dolomite are both strongly undersaturated**, the solution is **weakly acidic**, and it has a **significant ionic strength (0.024 m)**.  

**File Export and Location**

- The **initial column composition** was exported as:  
  - `CalcColumn-dch.dat`  
  - `CalcColumn-ipm.dat`  
  - `CalcColumn-dbr-0-0001.dat`  

- The **source solution composition** was exported as:  
  - `CalcColumn-dbr-0-0000.dat`  
  - (DCH and IPM files remain unchanged, as only the bulk composition differs.)  

All exported files can be found in:  
- `tp_test/` subfolder of **`standalone/gemcalc-build/`**  
- `tp_test/` subfolder of **`standalone/node-gem-build/`**  

!!!note " "
    
    In `gemcalc-build`, files contain **comments and all data fields**, while in `node-gem-build`, files are optimized for performance.  


<!-- Description of examples in node, xgems repository - link to the repository 

think about jupyter examples with mybinder -->