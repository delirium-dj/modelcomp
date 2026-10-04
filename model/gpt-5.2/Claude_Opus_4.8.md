# GPT 5.2 — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** OpenAI's GPT-5.2 (thinking) — a prior-generation reasoning model with strong math/coding. Top use case: general reasoning and coding where a frontier model isn't required.
- **Provider / access:** OpenAI API (`gpt-5.2`); OpenCode Zen `opencode/gpt-5.2`.
- **Release / knowledge:** GPT-5.2 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.2`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 400K and AA-LCR runs long — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 79.5% evidences image input — **meta.json modality likely understated; flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **65.8%**; OSWorld-Verified **47.3%**; τ²-bench **84.8%**; JobBench **34.3%**; Gert Labs **46.54%**

Reasoning / knowledge:

- GPQA **92.4%** (AA-GPQA-D 90.3%); AA Intelligence Index **30.4**; HLE/AA-HLE **37.7%**
- ARC-AGI-2 **52.9%**; AA-LCR **82.7%**; AA AIME 2025 **99.0%**; CritPt **11.6%**; AA-Omniscience Hallucination Rate 81.2%

Coding:

- SWE-bench Verified **80%**; SWE-bench Pro **55.6%**; Vibe Code Bench **53.5%**

Multimodal:

- MMMU-Pro **79.5%**; MathVision **83.0%**; CharXiv **82.1%**; V* **75.9%**

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 84.8% is solid, but BrowseComp 65.8%, OSWorld-Verified 47.3% and JobBench 34.3% are mid-tier agentics.
- **Reasoning: 78/100.** Strong GPQA 92.4% and AIME 2025 99%, but frontier reasoning lags (AA Index 30.4, ARC-AGI-2 52.9%, CritPt 11.6%).
- **Context window: 80/100.** 400K (BenchLM) with AA-LCR 82.7%; the 200K–500K tier.
- **Multimodal: 64/100.** Image-in (MMMU-Pro 79.5%), text-only out — image-input tier.
- **Coding: 79/100.** SWE-bench Verified 80%, SWE-bench Pro 55.6%, Vibe Code 53.5%.
- **Cost efficiency: 62/100.** No verified public price; scored provisionally at the standard tier.
- **Overall Score: 74.6/100.** Half-up mean of the five quality dims (72/78/80/64/79). A capable older reasoning/coding model; superseded by GPT-5.4+; `meta.json` context/modality fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.2 launch, BenchLM, Artificial Analysis, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
