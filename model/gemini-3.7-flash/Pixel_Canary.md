# Gemini 3.7 Flash — findings by Pixel Canary

- Source: Google / Gemini 3.7 Flash (`google/gemini-3.7-flash`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash — Google's high-capability 3.7 Flash tier for coding and agent applications, sitting below Gemini 3.8 Flash and above 3.6 Flash.
- **Short description:** The multimodal long-context value play of the Flash line: text, image, video, audio and PDF input, a 1M window with *measured* 97.00% MRCR retrieval, and $0.75 / $3.75 pricing - while its terminal/agentic coding numbers stay weak.
- **Provider / access:** Google API (`gemini-3.7-flash`) with a free tier on Google AI Studio and OpenCode Zen; 23 tracked offerings incl. Cortecs (cheapest third-party, $0.75 / $3.75), Opper, Tempr, Venice AI (`gemini-3-7-flash`, $0.9375 / $4.69) and OpenCode Zen ($1.50 / $7.50).
- **Release / knowledge:** released 2026-08-13; knowledge cutoff 2026-03-31 (LLMBoard specification block).
- **IDs:** `google/gemini-3.7-flash`, `gemini-3.7-flash`, `gemini-3-7-flash` (Venice). Free tier: Google AI Studio + OpenCode Zen (standard rate limits).
- **Context window:** 1,048,576 (1M) input tokens; **65,536 max output** per the Google runtime row and the model FAQ. Note: LLMBoard's specification table also prints "Max output 1M", which conflicts with both - the 65,536 figure is the one corroborated by two places on the same page, so it is used here.
- **Modalities:** text, image, audio, video and PDF in; text out. Tool use/function calling supported; no image, audio or video generation.
- **Pricing (as of 2026-09-27):** official Google $0.75 / 1M input, $3.75 / 1M output; Venice AI $0.9375 / $4.69; OpenCode Zen $1.50 / $7.50; cheapest third-party route $0.75 / $3.75 (Cortecs). Cache-read and batch rates are not published on the pages consulted (no verified public figure). Free tier available.
- **Architecture:** proprietary, parameters undisclosed, open weights no.

### Raw benchmarks found

> LLMBoard profile (evaluations 2026-09-27 unless noted): 30 of 37 rows published, coverage **80% / 15 benchmark families**; "#x/y" = rank among models with a published score on that benchmark. Composite: LLMBoard **80.4**.

Agent / tool use:

- GDPval-AA (real-world knowledge work): **1525.00 points** (#9/12)
- GDP.pdf (document-grounded work): **34.00%** (#3/7); LABBench2 **82.10%** (#2/2); Harvey LAB-AA (legal) **90.70%** (#1/1, single-entry field)
- Terminal-Bench 3.0: **14.90%** (#4/4) - the weakest agentic-terminal result in its field
- OSWorld 2.0, τ²-Bench / Tau3, DeepSWE, SWE-Marathon, Claw-Eval, Toolathon, MCP-Atlas: no verified public score found

Reasoning / knowledge:

- AA GPQA Diamond: **94.55%** (#4/199)
- Artificial Analysis Intelligence Index: **56** (#3/8 in the tracker's AA pool)
- AA HLE (text, no tools): **47.87%** (#8/200); HLE-Verified **53.60%** (#2/3); AA Omniscience Accuracy **55.32%** (#8/201)
- LiveBench instruction (2026-06-25): **79.93** score (#2/41)
- BioMysteryBench: **43.50%** (#6/6)
- MMLU-Pro / AIME / CritPt for this ID: no verified public score found

Coding:

- FrontierCode 1.1: **43.60%** (#8/20)
- AA SciCode Subtasks: **59.84%** (#3/89)
- WebDev Arena: **1588.00 points** (#1/1 — single-entry field, treat cautiously)
- SWE-bench Verified / SWE-Bench Pro / LiveCodeBench / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8-needle): **97.00%** (#2/25) — a measured, near-perfect multi-needle retrieval result inside the 1M window.

Runtime: **41.74 tok/s** with **10.09 s** catalog latency on Google; Max Input 1M, Max Output 65.5K.
