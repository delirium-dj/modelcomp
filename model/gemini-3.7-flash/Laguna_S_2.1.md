# Gemini 3.7 Flash — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Google DeepMind (`google/gemini-3.7-flash`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google DeepMind's August 2026 Gemini 3 Flash workhorse, a refinement of Gemini 3.6 Flash tuned for budget-conscious agentic coding and document-heavy enterprise workflows (free tier on Google AI Studio).
- **Provider / access:** Google Gemini API (`google/gemini-3.7-flash`), Google AI Studio (free tier), Vertex AI.
- **Release / knowledge:** Released August 13, 2026. Knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.7-flash`
- **Context window:** 1,048,576 (1M) in / 65,536 (64K) out
- **Modalities:** text, image, audio, video, pdf in; text, tool-calls out
- **Pricing (as of 2026-09-20):** Introductory $0.75 in / $3.75 out per 1M through end-2026; cached input $0.075/M (90% off); doubles to $1.50/$7.50 in January 2027. Free on Google AI Studio / unpaid quota.
- **Architecture:** Proprietary; described as algorithmic refinement of Gemini 3.6 Flash (no new pretraining); Mixture-of-Experts not confirmed; parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- WebDev Arena: **1588 Elo** (Google-reported, Aug 13 2026; ahead of Claude Sonnet 5 1541 and GPT-5.6 Terra 1523)
- AutomationBench: **30.4%** (Google-reported, Aug 13 2026; ahead of Claude Sonnet 5 10.7% and GPT-5.6 Terra 23.6%)
- GDP.pdf: **34.0%** (Google-reported, Aug 13 2026; up from Gemini 3.6 Flash's 22.0%)
- Terminal-Bench 2.1 / GDPval-AA / tau3-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **56** (Artificial Analysis, Aug 14 2026; ahead of Claude Sonnet 5 55, behind GPT-5.6 Terra / Muse Spark 1.2 at 57)
- GPQA Diamond / HLE / CritPt / LCR / MLCR / BenchLM overall / Omniscience: no verified public score found

Coding:

- DeepSWE v1.1: **65.3%** (Google-reported, Aug 13 2026; +16.7 pts vs Gemini 3.6 Flash's 49.0%)
- FrontierCode 1.1: **43.6%** (Google-reported, Aug 13 2026; up from 34.4%)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- GDM-MRCR v2 (128K depth): **97.0%** (Google-reported, Aug 13 2026 — recall holds deep into the 1M window)

### Normalized scores (1–100)

- **Tool use: 76/100.** AutomationBench 30.4% (leads Sol 23.6% and Sonnet 5 10.7%) and WebDev Arena 1588 Elo; capped by Terminal-Bench 2.1 / GDPval-AA not disclosed.
- **Reasoning: 78/100.** AA Intelligence Index 56 above the 55 peer median; GPQA/HLE/CritPt not disclosed.
- **Context window: 96/100.** 1M-token input window with GDM-MRCR v2 97.0% at 128K depth — usable, not nominal.
- **Multimodal: 92/100.** Text, image, audio, video and PDF input — the fullest modality mix of the Gemini Flash tier.
- **Coding: 82/100.** DeepSWE 65.3% (+16.7 pts YoY) and FrontierCode 43.6%; capped by no disclosed SWE-bench Verified / LiveCodeBench.
- **Cost efficiency: 95/100.** Free on Google AI Studio / unpaid quota, with a cheap paid intro ($0.75/$3.75/M).
- **Overall Score: 85/100.** Mean of the five quality dimensions; the cost-efficient coding/agentic Flash workhorse.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Google DeepMind model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.

---
