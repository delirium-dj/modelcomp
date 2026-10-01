# GPT 6 Sol — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Sol (`opencode/gpt-6-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's GPT-6 "Sol" reasoning tier (with Luna) — a strong enterprise-agent model (OSWorld 2.0 60.5%, AA AutomationBench 61.6%, GDPval-AA 1487) with high CritPt and HLE, but thin published coding/multimodal coverage and a weak multi-document long-context read (MLCR-AA 16.1%).
- **Provider / access:** OpenAI API / ChatGPT (`gpt-6-sol`), also on OpenCode Zen (`opencode/gpt-6-sol`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (OpenAI "Introducing GPT-6 Sol and Luna"); knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-6-sol` / OpenAI `gpt-6-sol`.
- **Context window:** BenchLM and the OpenAI model doc list **1.05M**; curated `meta.json` says "128K total" — conflict, resolved in favour of the 1.05M figure.
- **Modalities:** image-in evidence (AA-MMMU-Pro) despite curated `meta.json` "Text in/out"; no audio/video rows. Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI GPT-6 class; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (30 of 618 rows; 79.16/100, #7 of 645), citing the OpenAI GPT-6 Sol/Luna launch post and Astra system card, Artificial Analysis (Briefcase, AutomationBench, ITBench, Terminal-Bench 4.0, MLCR), Collinear CWE-bench and Google Gemini 4 Argon charts (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- OSWorld 2.0 **60.5%**; Agents' Last Exam 56.4%; AA AutomationBench **61.6%**; AA ITBench 49.4%; CWE-bench v1 52.0%
- GDPval-AA **1487** (normalized 49.3%); AA Briefcase 1483; AA Terminal-Bench 4.0 43.9%; GDP.pdf 24.8%; ExploitGym 22.1%; AutomationBench 33.2%

Reasoning / knowledge:

- AA-HLE **47.9%** (clears the 40% bar); CritPt **30.9%** (strong); AA-LCR 83.7; Intelligence Index 47.5
- **MLCR-AA 16.1%** — weak multi-document long-context reasoning
- Omniscience Index 27.1 / Accuracy 54.5% / Hallucination 60.1%; HealthBench Professional 60.8 / Hard 30.1

Coding:

- DeepSWE **68.8%** (just under the 74 ref); AA-SciCode **57.6%** (clears the 55 ref); CWE-bench v1 52.0% (no SWE-bench Verified / LiveCodeBench / Coding-Index rows published)

Multimodal / long context:

- AA-MMMU-Pro **83.3%** (only image-grounded row published)
- 1.05M window (AA-LCR 83.7 supportive but **MLCR-AA 16.1** fails at length; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 86/100.** OSWorld 2.0 60.5%, AA AutomationBench 61.6%, Agents' Last Exam 56.4% and ITBench 49.4% are a genuine frontier enterprise-agent spread, but GDPval-AA 1487 sits under the 1750 ref, no Terminal-Bench 2.1 88% row is published and ExploitGym 22.1% / GDP.pdf 24.8% cap it below the 90 band.
- **Reasoning: 82/100.** AA-HLE 47.9% clearing the bar with CritPt 30.9% and AA-LCR 83.7 is strong, but Intelligence Index 47.5 is mid, **MLCR-AA 16.1%** and a 60.1% hallucination rate hold it under the 90 band.
- **Context window: 92/100.** A 1.05M-token window meets the ≥1M tier (curated meta conflicts at 128K), but the explicit MLCR-AA 16.1% long-context failure and no ≥98% MRCR proof pull it just below the floor.
- **Multimodal: 66/100.** The only published grounded row is image (AA-MMMU-Pro 83.3, strong), so a top-of-image band (60–70); no audio/video/PDF rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 78/100.** AA-SciCode 57.6% clears the ref and DeepSWE 68.8% is close, but both sit under the strongest bands and the coverage is thin (no SWE-bench Verified / LiveCodeBench / Coding-Index rows), so a conservative mid-high placement.
- **Cost efficiency: 65/100.** OpenAI GPT-6-class "standard pricing" is mid-tier; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 86, Reasoning 82, Context 92, Multimodal 66, Coding 78 = 80.8 → 81. Best fit: enterprise workflow automation and multi-tool agent tasks (its clearest strength) at a 1M window; for heavy vision/audio, keep a multimodal specialist in the loop, and don't rely on it for very-long multi-document retrieval (MLCR 16.1%) — GPT-6 Astra is the stronger sibling where breadth matters.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Sol/Luna launch post and Astra system card, plus Artificial Analysis, Collinear and Google charts); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
