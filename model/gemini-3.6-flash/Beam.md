# Gemini 3.6 Flash — findings by Beam

- Source: Google/Gemini 3.6 Flash, `google/gemini-3.6-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's Flash (Jul 21, 2026) with sustained frontier-level intelligence at higher speed/lower cost; reduced output tokens 17% vs 3.5 Flash; better coding/knowledge/multimodal; #1 on CyberBench Patch track.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-3.6-flash`; OpenRouter.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not stated.
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,048,576 tokens; max output 65,536.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes; tool calling yes; structured output yes; computer use (preview).
- **Pricing (as of 2026-10-17):** $1.50 / 1M input, $7.50 / 1M output; paid. (BenchLM lists $0.75/$3.75 — conflicting; Google docs $1.50/$7.50.)
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **47.5** (#48/128)
- Terminal-Bench 2.1 (Vals): **73.8%**
- OSWorld-Verified: **83%**
- GDM-MRCR v2: **54.0%** (improved from 60.1%? GIGAZINE says 60.1→72.2; conflicting)
- GDPval-AA v2: **1421** (from 1349)
- CyberBench Patch track: **84.75%** (#1)

Reasoning / knowledge:

- ARC-AGI-1: **91.20%**
- ARC-AGI-2: **60.4%**
- GPQA Diamond (Vals): **93.4%**
- MMLU-Pro (Vals): **89.3%**
- LiveCodeBench (Vals): **88.1%**
- MRCR v2 64K-128K: not reported (coming soon)

Coding:

- Coding public-lane (BenchLM): **51** (#42/150)
- DeepSWE: **49.0%**
- SWE-bench Verified: **79.60%** (Vals)
- LiveCodeBench (Vals): **88.1%**
- CursorBench 3.2: **53.5%**
- Vibe Code Bench: not reported for 3.6 (3.5 48.68%)

Long context:

- 1M window; GDM-MRCR v2 54.0% (GIGAZINE 72.2%); CharXiv w/tools 89.4%, w/o tools 85.2%.

Multimodal:

- CharXiv w/ tools: **89.4%**
- CharXiv w/o tools: **85.2%**
- MMMU-Pro: not reported (coming soon)

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #48/128 (47.5), Terminal-Bench 2.1 Vals 73.8%, OSWorld 83%, CyberBench Patch 84.75%; caps at GDM-MRCR 54.0%.
- **Reasoning: 76/100.** ARC-AGI-1 91.2%, ARC-AGI-2 60.4%, GPQA 93.4%, MMLU-Pro 89.3%; caps at no published HLE.
- **Context window: 78/100.** 1M window; GDM-MRCR v2 54.0-72.2% caps higher.
- **Multimodal: 86/100.** Text/image/video/audio/PDF in; CharXiv w/tools 89.4%, w/o tools 85.2%.
- **Coding: 70/100.** DeepSWE 49.0%, SWE-bench Verified 79.6%, LiveCodeBench Vals 88.1%, coding lane #42/150 (51).
- **Cost efficiency: 90/100.** Low pricing $0.75-$1.50 / 1M input.
- **Overall Score: 77/100.** Mean of five quality dims (BenchLM aggregate 62.77); best-fit for high-volume agentic + multimodal at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google docs, BenchLM, Vals AI, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores. Pricing conflict between Google docs ($1.50/$7.50) and BenchLM ($0.75/$3.75) noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.