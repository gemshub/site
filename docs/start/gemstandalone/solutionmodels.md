# <img style="float: center; height: 6%; width: 6%;" src="../../../img/phasediagram.png"> GEM-Standalone: Solution Models 

## TSolMod C++ Class Library of Mixing Models in Phases-Solutions

Predicting the stability and thermodynamic properties of non-ideal solution phases over wide pressure and temperature ranges requires theoretically sound and sufficiently accurate equations of state and activity models. Within the generalized GEM framework, the diversity of such models calls for a novel, flexible, and computationally efficient code architecture. This need led to the development of the **TSolMod C++ class library**, ensuring broad applicability of GEM software, particularly in **GEM-Selektor v.3** and the standalone **GEMS3K** code.

### Key Features

- [x] Generic and flexible model parameter setup.
- [x] Computationally efficient data exchange with the GEM IPM equilibrium solver.
- [x] Open conceptual design allowing easy integration of new solution phase models.

The **current version** of TSolMod includes a comprehensive selection of fluid, gas, liquid, and solid solution models applicable to **geochemistry, petrology, materials science, and chemical engineering**.

> **Reference:**
> ```
> Wagner T., Kulik D.A., Hingerl F.F., Dmytrieva S.V. (2012). GEM-Selektor geochemical modeling package: 
> TSolMod C++ class library and data interface for multicomponent phase models. 
> Canadian Mineralogist 50, 1173-1195 (https://dx.doi.org/10.3749/canmin.50.5.1173).
> ```

---

## Implemented Activity and Equation of State Models

### **Multicomponent Fluids and Gases**

| Model Name &nbsp; &nbsp; &nbsp; | Description |
|-------------|----------------------------------------------|
| `TSRKcalc`  | Soave-Redlich-Kwong cubic equation of state with Van der Waals mixing rule (constant/T-dependent parameters). |
| `TPR78calc` | Peng-Robinson cubic equation of state with Van der Waals mixing rule (constant/T-dependent parameters). |
| `TPRSVcalc` | Peng-Robinson-Stryjek-Vera cubic equation of state with Van der Waals mixing rule (constant/T-dependent parameters). |
| `TCORKcalc` | Compensated Redlich-Kwong (CORK) hybrid cubic and virial equation of state with Van Laar mixing rule. |
| `TSTPcalc`  | Sterner-Pitzer Helmholtz energy-based equation of state for high-pressure systems with Van Laar mixing rule. |
| `TCGFcalc`  | Perturbation theory-based Churakov-Gottschalk equation of state with basic Van der Waals mixing rule. |

### **Liquid Multicomponent Non-Electrolyte Solutions**

| Model Name &nbsp; &nbsp; &nbsp; | Description |
|-------------|------------------------------------------------|
| `TWilson`   | Wilson local composition activity model with T-dependent non-randomness parameter. |
| `TNRTL`     | Non-random two-liquid (NRTL) local composition activity model with T-dependent non-randomness parameter. |

### **Multicomponent Solid Solutions**

| Model Name  &nbsp; &nbsp; &nbsp;   | Description |
|---------------|------------------------------------------------|
| `TIdeal`      | Ideal mixing model for fluids, gases, and solid solutions, supporting multisite ideal formalism. |
| `TBerman`     | Microscopic-interaction multisite model for solid solutions. |
| `TRegular`    | Regular activity model of mixing (symmetric formalism). |
| `TVanLaar`    | Van Laar activity model (asymmetric formalism). |
| `TRedlichKister` | Four-term Redlich-Kister activity model. |

### **Ternary and Binary Solid Solutions**

| Model Name    | Description |
|--------------|------------------------------------------------|
| `TMargules`  | Ternary regular Margules activity model. |
| `TSubregular` | Binary subregular Margules activity model. |
| `TGuggenheim` | Binary 3-term Redlich-Kister activity model. |

### **Multicomponent Aqueous Electrolyte Solutions (Ion-Association Models)**

| Model Name    &nbsp; &nbsp; &nbsp;     | Description |
|-------------------|------------------------------------------------|
| `TDebyeHueckel`  | Two-term Debye-Hückel equation model. |
| `TLimitingLaw`   | One-term Debye-Hückel limiting law. |
| `THelgeson`      | Extended Debye-Hückel equation with common constant or T-P-dependent extended term parameter, and common ion size. |
| `TKarpov`        | Extended Debye-Hückel equation with individual ion sizes and T-P-dependent parameters. |
| `TShvarov`       | Extended Debye-Hückel equation with common ion size and T-P-dependent parameters. |
| `TDavies`        | Davies equation form of the extended Debye-Hückel model. |

### **Multicomponent Aqueous Electrolyte Solutions (Specific Ion Interaction Models)**

| Model Name &nbsp; &nbsp; &nbsp; | Description |
|------------|------------------------------------------------|
| `TSIT`     | Two-term Specific Ion Interaction (SIT) model. |
| `TPitzer`  | Pitzer (Harvie-Moller-Weare) model with T-dependent binary and ternary interaction parameters. |
| `TEUNIQUAC` | Extended UNIQUAC (Thomsen) model with T-dependent binary interaction parameters. |

_(The library is continuously evolving and expanding.)_

For a **detailed description** of calculations performed in most **TSolMod library models**, refer to the [Activity-Coeffs.pdf](../gemselektor/documentation/doc/Activity-Coeffs.pdf) file from the GEM-Selektor documentation.
