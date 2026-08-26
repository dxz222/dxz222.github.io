---
title: Learning Local Structure in Monolayer Amorphous Carbon
description: Rotation-invariant representation learning for discovering interpretable local structural features in noisy atomic-resolution images.
year: 2024
status: Research
series: DeepSTEM
heroImage: /images/projects/deepstem/amorphous-latent-interpretation.jpg
---

## Overview

<p class="note"><strong>Context:</strong> Undergraduate thesis research at the University of Chinese Academy of Sciences, advised by Prof. Wu Zhou.</p>

Atomic-resolution STEM can provide the coordinates of atoms in two-dimensional amorphous materials, but coordinates alone do not reveal which local structural motifs are important or how those motifs vary across a sample. Conventional descriptors—such as radial distribution functions, ring statistics, bond lengths, and bond angles—capture selected properties but can miss relationships between different structural features.

This project explores a data-driven alternative: learning a compact, rotation-invariant representation directly from local microscopy image patches.

## Preparing experimental images

The preprocessing pipeline identifies atoms while separating the material from contamination and vacuum regions. Local patches are then centered on atoms or ring-like structural units so that the representation model receives comparable local environments.

<figure>
  <img src="/images/projects/deepstem/amorphous-preprocessing-workflow.png" alt="Workflow for preprocessing monolayer amorphous carbon STEM images">
  <figcaption>Preprocessing workflow for identifying atoms, contamination, and vacuum regions before extracting centered local image patches.</figcaption>
</figure>

<figure>
  <img src="/images/projects/deepstem/amorphous-atom-segmentation.jpg" alt="Atom segmentation in an amorphous carbon STEM image">
  <figcaption>Atom detection and segmentation across an experimental monolayer amorphous carbon image.</figcaption>
</figure>

<figure>
  <img src="/images/projects/deepstem/amorphous-contamination-segmentation.jpg" alt="Contamination segmentation in an amorphous carbon STEM image">
  <figcaption>Separating the material region from contamination and vacuum before local-patch extraction.</figcaption>
</figure>

## Building local-structure datasets

To test what information can be learned, the project constructed multiple datasets that vary how local patches are centered, masked, denoised, and cropped. This makes it possible to distinguish structural information from artifacts introduced by a particular preprocessing choice.

<figure>
  <img src="/images/projects/deepstem/amorphous-subimage-dataset.jpg" alt="Local image datasets for amorphous carbon structure learning">
  <figcaption>Representative local-patch datasets centered on different structural units and prepared with different image treatments.</figcaption>
</figure>

## Rotation-invariant representation learning

A rotation-invariant variational autoencoder (r-VAE) maps each local environment to a low-dimensional latent representation. Rotation invariance is important because a structural motif should retain the same physical meaning when the microscopy image is rotated.

<figure>
  <img src="/images/projects/deepstem/amorphous-latent-density.jpg" alt="Density maps of latent representations for local amorphous structures">
  <figcaption>Latent-space density maps learned from eight local-structure datasets.</figcaption>
</figure>

## Physical interpretation

The learned latent coordinates track interpretable changes in local structure, including carbon-ring type and size. Mapping these variables back to real space provides a spatial description of how local structural motifs vary across the amorphous network.

<figure>
  <img src="/images/projects/deepstem/amorphous-latent-interpretation.jpg" alt="Physical interpretation and spatial mapping of learned latent variables">
  <figcaption>Interpreting latent variables through reconstructed structures and mapping the learned structural parameters across the sample.</figcaption>
</figure>

## What I built

- Preprocessing for atom, contamination, and vacuum-region identification.
- Local-patch datasets designed to test the robustness of learned features.
- Rotation-invariant representation learning for noisy experimental images.
- Real-space maps connecting latent variables to physically meaningful local motifs.

This work forms the structural-discovery branch of the DeepSTEM research series.
