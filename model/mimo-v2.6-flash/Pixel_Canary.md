# MiMo V2.6 Flash — findings by Pixel Canary

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (Xiaomi; OpenCode ID `xiaomi/mimo-v2.6-flash`; the Zen free tier lives in the `mimo-v2.6-free` folder, not this ID)
- **Short description:** Xiaomi's MIT-licensed omnimodal sparse MoE (309B total / 15B active), released 2026-09-22: 1M context, text/image/video/audio input, tuned for long-horizon agentic coding at mid-tier pricing. BenchLM composite 64.06/100, rank #34 of 513 (partial coverage: 24 of 486).
- **Provider / access:** Xiaomi MiMo API (`xiaomi/mimo-v2.6-flash`) plus DeepInfra (`XiaomiMiMo/MiMo-V2.6-Flash`), nano-gpt, Empiriolabs and free bundled tiers (`nan`, `xiaomi-token-plan-cn`); OpenAI-compatible API with tool calling.
- **Release / knowledge:** 2026-09-22 (models.dev `release_date`); knowledge cutoff not published.
- **Context window:** 1,048,576 input / 131,072 max output (models.dev; BenchLM lists 1M).
- **Modalities:** Text, image, video and audio in; text out. Reasoning: yes (BenchLM "Reasoning"). Tool calling: yes (Toolathlon / AutomationBench rows exist).
- **Pricing (as of 2026-09-29):** $0.14 / 1M input, $0.28 / 1M output, $0.0028 cached input (Xiaomi API and DeepInfra identical); $0 inside Xiaomi token plans; MIT open weights for self-hosting.
- **Architecture:** 309B-parameter sparse MoE, ~15B active, MIT-licensed open weights on Hugging Face (`XiaomiMiMo`).

### Raw benchmarks found

Agentic / tool use (BenchLM, updated 2026-09-28): CyberGym **95.1%**; Terminal-Bench 2.1 **87.6%**; OSWorld-Verified **80.8%**; Toolathlon-Verified **73.6%**; JobBench **61.2%**; AutomationBench **52.3%**; GDPval-AA **55.0%** normalized; Agents' Last Exam **27.6%**; Terminal-Bench 4.0 **28.8%**; ExploitGym **6.0%**

Coding: DeepSWE **67.9%**; ProgramBench **26.0%**; Terminal-Bench 2.1 **87.6%**; AA-SciCode **51.3%**

Reasoning / knowledge / multimodal: AA Intelligence Index **37.9**; AA-HLE **35.1%**; AA-LCR **74.3%**; CritPt **12.0%**; AA-MMMU-Pro **73.1%**; AA-Omniscience Accuracy **27.0%** / Hallucination Rate **54.4%** / Index **−12.7**

Missing for this exact ID: SWE-bench Verified/Pro, LiveCodeBench, GPQA Diamond, tau-bench, MRCR/RULER, and any audio/video benchmark despite omnimodal input.

### Normalized scores (1–100)

- **Tool use: 78/100.** CyberGym 95.1% and OSWorld-Verified 80.8% are near-frontier, and Terminal-Bench 2.1 87.6% + Toolathlon 73.6% show dependable long tool chains; capped by hard agentic ceilings (Agents' Last Exam 27.6%, Terminal-Bench 4.0 28.8%, GDPval-AA 55.0%).
- **Reasoning: 58/100.** AA-HLE 35.1% and AA-LCR 74.3% are respectable, but AA Intelligence Index 37.9, CritPt 12.0% and an Omniscience pair of 27.0% accuracy against a 54.4% hallucination rate (Index −12.7) show it answers confidently when it should abstain.
- **Context window: 82/100.** 1M input with 131K output and AA-LCR 74.3% measured long-context reasoning; capped because no MRCR/RULER depth curve exists and few third-party hosts expose the full window.
- **Multimodal: 70/100.** Text+image+video+audio input is the widest modality set in its price class, but the only published quality row is AA-MMMU-Pro 73.1% — no video, audio or document benchmark validates the advertised input surface.
- **Coding: 76/100.** DeepSWE 67.9% and Terminal-Bench 2.1 87.6% are strong agentic-coding signals for a 15B-active model; capped because SWE-bench Verified/Pro and LiveCodeBench are unpublished and ProgramBench 26.0% / AA-SciCode 51.3% are mid-pack.
- **Cost efficiency: 94/100.** $0.14/$0.28 per 1M with $0.0028 cache reads is among the cheapest 1M-context omnimodal options, $0 inside Xiaomi token plans, and MIT weights allow free self-hosting; capped only because there is no OpenCode Zen Free ID for this exact slug.
- **Overall Score: 72.8/100.** (78 + 58 + 82 + 70 + 76) / 5 = 72.8 — a very cheap omnimodal agentic coder whose benchmark coverage still lags its advertised modality breadth.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `mimo-v2-6-flash` refreshed 2026-09-28, models.dev provider/pricing index, Xiaomi MiMo release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
