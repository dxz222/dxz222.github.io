---
title: AI-Assisted Chemical Mapping in Atomic-Resolution STEM
description: An end-to-end workflow for image restoration, atom localization, and intensity-based chemical assignment in complex two-dimensional materials.
year: 2024
status: Research
series: DeepSTEM
heroImage: /images/projects/deepstem/chemical-mapping-denoise-localization.jpg
---

## Overview

<p class="note"><strong>Context:</strong> Undergraduate thesis research at the University of Chinese Academy of Sciences, advised by Prof. Wu Zhou.</p>

Atomic-resolution STEM images contain rich structural and chemical information, but extracting it reliably is difficult when the data include shot noise, uneven backgrounds, contamination, and overlapping intensity distributions. This project develops an integrated analysis workflow that turns raw STEM contrast images into atom-resolved chemical maps.

The workflow combines image restoration, atom localization, and local-intensity analysis. Its purpose is to reduce manual intervention and make chemical characterization more consistent across large microscopy datasets.

## From raw images to atom positions

The first stage separates useful atomic contrast from noise and slowly varying background signals. Multiple restoration strategies—including learned background removal and self-supervised denoising—were evaluated before atomic sites were segmented and localized.

<figure>
  <img src="/images/projects/deepstem/chemical-mapping-denoise-localization.jpg" alt="Comparison of STEM image denoising and atomic localization results">
  <figcaption>Comparison of image-restoration strategies and the resulting atom-localization maps.</figcaption>
</figure>

## Chemical-assignment workflow

After locating atomic sites, the method measures local intensity distributions around each position. Peaks and valleys in these distributions provide candidates for assigning chemical species on anionic and cationic sublattices.

<figure>
  <img src="/images/projects/deepstem/chemical-mapping-workflow.jpg" alt="Workflow for STEM chemical characterization">
  <figcaption>The analysis pipeline links preprocessing, atom localization, and local-intensity-based chemical assignment.</figcaption>
</figure>

## Results

Applied to atomic-resolution images of compositionally complex two-dimensional materials, the workflow produces spatially resolved intensity maps and site-level chemical assignments. The combined pipeline makes it possible to inspect both the overall compositional distribution and local deviations associated with individual atomic sites.

<figure>
  <img src="/images/projects/deepstem/chemical-mapping-results.jpg" alt="Atomic chemical composition characterization results">
  <figcaption>Local intensity distributions and the corresponding atom-resolved chemical maps for anionic and cationic sites.</figcaption>
</figure>

## What I built

- A modular preprocessing workflow for noise and background suppression.
- Atom segmentation and localization methods for challenging experimental images.
- Local-intensity analysis for assigning candidate chemical species.
- Visualizations that connect statistical intensity distributions to spatial chemical maps.

This work forms the chemical-characterization branch of the DeepSTEM research series. It also provides image-analysis components that could support quality-aware and automated microscopy workflows.
