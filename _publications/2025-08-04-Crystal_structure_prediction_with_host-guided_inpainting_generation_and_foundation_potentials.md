---
title: "Crystal structure prediction with host-guided inpainting generation and foundation potentials"
collection: publications
permalink: /publication/2025-08-04-Crystal_structure_prediction_with_host-guided_inpainting_generation_and_foundation_potentials
excerpt: 'This paper introduces a generative inpainting framework (CHGGen) that enables intercalation-based materials design by conditionally generating atomic positions within host crystal structures.'
date: 2025-08-04
venue: 'Materials Horizons'
paperurl: 'https://pubs-rsc-org.proxy.library.cornell.edu/en/content/articlelanding/2025/mh/d5mh00774g/unauth'
citation: 'Zhong, P., Dai, X., Deng, B., Ceder, G., Persson, K., Crystal structure prediction with host-guided inpainting generation and foundation potentials. Materials Horizons (2025)'
---
This study develops the **Crystal Host-Guided Generation (CHGGen)** framework, which applies inpainting methods from computer vision to crystal structure prediction. Instead of generating complete structures unconditionally, CHGGen optimizes atomic positions within **predefined, symmetrized host lattices**, thereby improving long-range crystallographic order.

The model is integrated with a **foundation potential** for structure relaxation, enabling both structure discovery and structural modification of systems with partial occupancy or intercalation chemistry. Benchmarking on **ZnS–P₂S₅** and **Li–Si** chemical systems shows that CHGGen produces a higher fraction of symmetric structures than unconditional diffusion models.

This conditional generative approach provides a versatile, modular tool for **accelerating materials discovery**, particularly in domains like **battery materials**.


This study applies an SE(3)-equivariant diffusion model, pre-trained on the Materials Project database, to efficiently predict intercalant positions in host structures for energy storage materials design using the inpainting method.

<div align=center><img src="../images/chggen.png" width="max-width:100%"/></div>

- Introduced CHGGen, a host-guided inpainting framework for crystal structure generation.
- Overcame the locality bias of graph neural network diffusion models by enforcing host-symmetry constraints.
- Achieved higher success in generating symmetric and chemically plausible structures for complex polyanion systems.
- Demonstrated versatility for structural modification in partial occupancy and intercalation contexts.
- Integrated with foundation potentials (e.g., CHGNet) to validate structural stability with low interatomic forces and minimal energy deviation.

[Download paper here](https://pubs-rsc-org.proxy.library.cornell.edu/en/content/articlelanding/2025/mh/d5mh00774g/unauth)

