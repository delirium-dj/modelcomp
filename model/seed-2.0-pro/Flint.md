# ByteDance Seed 2.0 Pro - findings by Flint

- Source: ByteDance Superintelligence (ByteDance) / Seed 2.0 Pro (closed agent model; Seed 2.1 announced as successor)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (closed agent model; successor Seed 2.1 announced)
- **Short description:** ByteDance's closed agent model for reasoning + task execution with multimodal (image/video) input; vendor-reported SWE-bench Verified 76.5%.
- **Provider / access:** DeepInfra (`deepinfra/ByteDance/Seed-2.0-pro`), OpenRouter, BytePlus (`https://www.byteplus.com/en/product/modelark`); OpenAI-compatible chat completions.
- **Release / knowledge:** Release window 2026 (Seed 2.0 Pro lineage); knowledge cutoff not verified in sources found.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro`; `bytedance/seed-2.0-pro` (OpenRouter-style).
- **Context window:** 256K total / 65K max output (repo meta.json); multimodal vision path documented by DeepInfra.
- **Modalities:** Text, image, video in; text out (repo meta.json); DeepInfra vision docs confirm image input via URL/Base64; ByteDance model TOML lists image formats only.
- **Pricing (as of 2026-10-25):** Paid-tier (no Free ID); DeepInfra text $0.50 input / $3.00 output per 1M (cache read $0.10; >128K context -> $1.00 / $6.00).

- **Architecture:** Proprietary closed agent model (ByteDance Seed family); open-weight sibling Seed OSS 36B tracked separately.

### Raw benchmarks found

- Coding:
  - SWE-bench Verified: **76.5%** (ByteDance vendor; cross-rater cohort via generated evidence index).
  - SWE-bench Pro: **46.9%**.
  - LiveCodeBench: **87.8%**.
  - Terminal-Bench: **55.8%**.
- Reasoning / knowledge:
  - GPQA Diamond: **88.9%, AIME: **98.3%, HLE: **32.4%, BrowseComp: **77.3%, MMLU-Pro: **87%, MMMU: **85.4%, Tau2-bench: **90.4%, GDPval: **54.4 Elo, OSWorld: **78%, SciCode: **45%, ARC-AGI: **66.18%, CritPt: **3.7%, MMMU-Pro: **78.2%.

### Cross-source comparison

- Official vendor (ByteDance) vs independent trackers: SWE-bench Verified **76.5%** is single-source vendor; independent Flint cohorts (GPT-6.1 Sol, Gemini 3.6 Flash, GLM 5.3, etc.) corroborate strong ranges.

### Normalized scores (1-100)

- **Tool use: 72/100.** SWE-bench Verified **76.5%** (vendor) + LiveCodeBench **87.8%** -> strong agentic tool use; Terminal-Bench **55.8%** caps it.
- **Reasoning: 82/100.** GPQA **88.9%, AIME **98.3%, BrowseComp **77.3%, MMLU-Pro **87% -> high; HLE **32.4% is a low knowledge-recall datapoint.
- **Context window: 70/100.** Documented **256K** total / **65K** max output -> mid tier (200K-500K band ~70).
- **Multimodal: 65/100.** Image/video in claimed (meta) vs image-only formats in ByteDance TOML; text out.
- **Coding: 76/100.** SWE-bench Verified **76.5%, LiveCodeBench **87.8% -> strong coding; SWE-bench Pro **46.9% secondary.
- **Cost efficiency: 90/100.** Paid DeepInfra $0.50/$3.00 per 1M -> mid-high value tier.

- **Overall Score: 73/100.** Mean of the five quality dims (72 + 82 + 70 + 65 + 76) / 5 = 73; Cost efficiency excluded.

## Signature

- Provided by: **Flint (deepinfra/ByteDance/Seed-2.0-pro)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
