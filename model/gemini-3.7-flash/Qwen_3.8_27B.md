# Gemini 3.7 Flash — findings by Qwen 3.8 27B

- Source: Google (`google/gemini-3.7-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-capability 3.7 Flash model (OpenCode Zen metadata), a fast proprietary reasoning model from Google positioned as the high-capability member of its Flash line. Superseded on Artificial Analysis by Gemini 3.8 Flash (high), which AA now recommends.
- **Provider / access:** Google first-party (Google AI Studio, Vertex/Cloud API via OpenCode Zen `google/gemini-3.7-flash`; Artificial Analysis lists 4 API providers). Standard chat/completions-style provider API on Zen.
- **Release / knowledge:** Released 2026-08-13 per Artificial Analysis model page ("About Gemini 3.7 Flash"); knowledge cutoff not stated in the sources captured.
- **IDs:** `google/gemini-3.7-flash` (Free tier exists on Google AI Studio and OpenCode Zen with standard rate limits).
- **Context window:** 1,048,576 (1M) total, per curated metadata; corroborated by Artificial Analysis (1M context) and BenchLM (1M). Input/max-output split not separately stated in captured sources.
- **Modalities:** Text, image, audio, PDF in; text out (curated metadata). Artificial Analysis describes the input set as text, image, speech, and video with text output — the two sources agree on audio input and differ on PDF vs video; either variant sits in the same 75–90 normalization tier. Reasoning: yes (AA "Reasoning: yes"). Tool calls / JSON mode: not separately itemized in captured sources.
- **Pricing (as of 2026-09-24):** Free tier available (Google AI Studio and OpenCode Zen). Artificial Analysis captured paid API pricing for the (high) variant: $0.75 / $3.75 per 1M input/output tokens, 90% cache discount (blended ~$0.58; ~$0.93 per Intelligence Index task).
- **Architecture:** Proprietary (Artificial Analysis; parameter counts not disclosed in captured sources).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**Coding/agent suite**): **85.8%** (BenchLM, as of 2026-09-23)
- Terminal-Bench 2.1 (Vals) (**Vals mirror**): **77.5%** (BenchLM)
- Terminal-Bench 3.0 (**harder TB generation**): **14.9%** (BenchLM)
- AutomationBench (**agent**): **30.4%** (BenchLM)
- OSWorld 2.0 (**computer use**): **47.9%** (BenchLM)
- Agents' Last Exam (**agentic reasoning**): **26.3%** (BenchLM)
- GDPval-AA (**work economics Elo**): **1525** (normalized 43.6%; BenchLM)
- AA Harvey LAB (**legal agent pass@1**): **90.7%** (BenchLM)
- AA Agentic Index: **36.4%** (BenchLM)
- AA-AnalystAgent: **60.0%** (BenchLM)
- ApprenticeBench: **16%** (BenchLM)
- Tau3-Banking / Tau2-Bench: no verified public score found (not present in the BenchLM agentic table captured for this model)

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA-GPQA, BenchLM); 93.9% (GPQA Diamond Vals, BenchLM)
- HLE: **53.6%** (HLE-Verified, BenchLM); 47.9% (AA-HLE, BenchLM)
- LCR / MLCR: **81.7%** (AA-LCR, BenchLM)
- CritPt: **14.3%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **39 / #50 – 210** (AA, 4/4 units captured); BenchLM overall **65.31/100, #26 of 507** (coverage 40 of 482 benchmarks, last updated 2026-09-23); AA II on BenchLM 39.1
- Omniscience Accuracy / Hallucination Rate: Omniscience index **26.5** (accuracy 55.3%, hallucination rate 64.5%; BenchLM)
- MMLU-Pro Vals: **90.1%** (BenchLM)
- LABBench2: **82.1%** (BenchLM); BioMystery **87.1% / 43.5%** (two-condition raw, BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Vals **80.8%** (BenchLM); no SWE-Pro verified public score found
- LiveCodeBench: **88.7%** (LiveCodeBench Vals, BenchLM)
- SciCode / AA-SciCode: **57.2%** (BenchLM)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **65.3%** (BenchLM); AA Coding Index **76.1%** (BenchLM); FrontierSWE v2 **20.3%** (BenchLM); FrontierCode 1.1 Main **43.6%** (BenchLM); Terminal-Bench 2.1 **85.8%** (BenchLM, mirrored under Coding)

Multimodal:

- CharXiv: **88.7%** (84.5% without reasoning; BenchLM)
- LVBench (video): **85.4%** (BenchLM)
- AA-MMMU-Pro: **85.5%** (BenchLM)
- Design Arena Website (creative Elo): **1313** (Artificial Analysis, rank #12 / 233 captured)

Long context:

- MRCR v2: **97%** at 64K–128K context (BenchLM); 1M window declared by metadata/AA/BenchLM. No 512K+ MRCR value captured for this model.

Speed / cost (supplementary, not scored):

- Output speed: **287.7 tok/s**, rank #2 / 210 (AA, as of 2026-09-23)
- Time to first token (10k input): **10.90s** (AA)
- Verbosity: **100M** output tokens from Intelligence Index workload, rank #59 / 210 (AA)
- Price per II task: **$0.93**, rank #38 / 210 (AA)

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 85.8% sits just under the 88% frontier line and GDPval-AA 1525 is above the ~1200 mid anchor but below the 1750 frontier line, while AA Harvey LAB 90.7% and AnalystAgent 60.0% confirm strong specialized agent work; capped by OSWorld 2.0 47.9%, AutomationBench 30.4%, and TB3.0 14.9%.
- **Reasoning: 83/100.** Frontier-class GPQA 94.5%, HLE-Verified 53.6% (>40%), AA-LCR 81.7%, and 97% MRCR v2 at 64K–128K; capped by a 39 Intelligence Index (below the >60 frontier reference), CritPt 14.3%, and a 64.5% omniscience hallucination rate.
- **Context window: 95/100.** Declared 1M context (metadata + AA + BenchLM) with verified 97% MRCR v2 at 64K–128K; no 512K+ retrieval figure was found, which keeps it at the bottom of the 95–100 tier.
- **Multimodal: 85/100.** Wide input coverage (text, image, audio, PDF per metadata; text, image, speech, video per AA) with text-only output and strong verified scores (CharXiv 88.7%, LVBench 85.4%, MMMU-Pro 85.5%); placed in the 75–90 video/PDF tier, capped by text-only output and thin BenchLM coverage (40/482).
- **Coding: 84/100.** Terminal-Bench 2.1 85.8% (meets the >85% frontier line), SciCode 57.2% (>55%), and Coding Index 76.1% (>70%) plus LiveCodeBench 88.7%; capped by DeepSWE 65.3% below the 74% frontier line and FrontierSWE v2 20.3%, with no Vibe Code Bench data.
- **Cost efficiency: 97/100.** Paid API at $0.75 / $3.75 per 1M with 90% cache discount — below the ~$1.25 / $4.25 ≈ 88 anchor — plus a free tier on Google AI Studio and OpenCode Zen; only the nonzero paid price keeps it off the $0 = 100 anchor.
- **Overall Score: 85/100.** Mean of the five non-cost dims ((78+83+95+85+84)/5 = 85.0); best fit: a very fast (287.7 tok/s, #2/210), cheap, broadly multimodal daily-driver model with solid (not frontier) agentic and coding depth.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (Artificial Analysis model page and BenchLM model page, cross-checked against curated `meta.json`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.