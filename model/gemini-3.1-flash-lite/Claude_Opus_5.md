# Gemini 3.1 Flash-Lite — findings by Claude Opus 5

- Source: Google / Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite
- **Short description:** Google's explicitly-stated **"most cost-efficient Gemini model"**, optimised for low latency on high-volume, cost-sensitive traffic — and the first Flash-Lite in the Gemini 3 series. Google's positioning is unusually precise about the target: a "significant quality increase over Gemini 2.5 Flash-Lite, **matching Gemini 2.5 Flash performance** across key capability areas", with four named improvements — response quality, instruction following, **audio-input quality for ASR**, and expanded thinking support ([Google Cloud model reference](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/3-1-flash-lite); [DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)). Distinct model with its own ID — **not** a variant of the non-existent base "Gemini 3.1 Flash", and not the voice model Gemini 3.1 Flash Live or the speech model Gemini 3.1 Flash TTS, both of which are separate.
- **Provider / access:** Gemini API / Google AI Studio and the Gemini Enterprise Agent Platform (Vertex AI) as `gemini-3.1-flash-lite`; the benchmarked snapshot on independent leaderboards is `gemini-3.1-flash-lite-preview`. **Not listed on OpenCode Zen**, whose Flash-Lite entry is Gemini 3.5 Flash Lite at $0.30/$2.50 ([Zen docs](https://opencode.ai/docs/zen/)). Supports **Provisioned Throughput** as well as pay-as-you-go.
- **Release / knowledge:** Released in preview via the Gemini API on **2026-03-03** ([Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/); [winbuzzer](https://winbuzzer.com/2026/03/03/google-gemini-31-flash-lite-enterprise-scale-xcxwbn/); corroborated by Google DeepMind's launch post the same day). One secondary tracker (magica.com) states 2026-05-07; the 2026-03-03 date is carried by Google's own blog and multiple same-day reports, so I take it as correct and record the discrepancy. Knowledge cutoff: no verified public date found.
- **IDs:** `gemini-3.1-flash-lite` (Gemini API / Agent Platform), `gemini-3.1-flash-lite-preview` (benchmarked snapshot). A free route exists via the Google AI Studio free tier; there is no free Zen ID.
- **Context window:** **1,048,576 tokens**, with **65,536 maximum output tokens** — both stated directly in Google's model reference. The 64K output ceiling is worth noting: double Kimi K2.7's 32K but half the 128K that Anthropic's and OpenAI's current tiers offer. **Implicit *and* explicit context caching** are both supported, which materially changes the economics of repeated long prompts.
- **Modalities:** **Text in and out; image, audio and video input only** — Google's capability matrix is explicit about the direction of each modality. Audio input was a named focus area of this release (ASR quality). No generated media. Reasoning: **yes, with four discrete thinking levels — minimal, low, medium, high** — which Google frames as a quality/speed dial. Tools supported: **Grounding (Google Search, Parallel Web Search, Exa Web Search), Code execution, Function calling, URL context**, structured output, system instructions, Count Tokens, RAG Engine, Chat Completions compatibility, and supervised/continuous tuning with checkpoints. **Explicitly NOT supported: Computer use, Gemini Live API, and agentic video understanding** — three absences that bound its agentic ceiling and that I weight directly below.
- **Pricing (as of 2026-10-08):** **$0.25 / MTok input, $1.50 / MTok output** ([llm-stats](https://llm-stats.com/models/gemini-3.1-flash-lite-preview); [designforonline](https://designforonline.com/ai-models/google-gemini-3-1-flash-lite-preview/); [win-tk](https://win-tk.org/en/technology/google-gemini-3-1-flash-lite-faster-cheaper-ai-2026/)). Secondary reporting also credits it with **~2.5× faster time-to-first-answer-token and ~381 tokens/second output** versus the prior generation — labelled as secondary because I could not confirm those two figures in a Google source.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and distillation method undisclosed. Google describes it as part of the "Gemini 3 series of highly-capable, **natively multimodal**, reasoning models". BenchLM labels the tracked row **Non-Reasoning**, which is a harness-configuration artefact — thinking is a documented, four-level feature of this model.

### Raw benchmarks found

> Thin but mostly independent. Google published three figures; Vals AI measured five on the `-preview` snapshot. **Artificial Analysis has no entry for this model at all**, so there is no AA Intelligence Index, no CritPt, no AA-HLE and — importantly — **no hallucination-rate measurement**, which is a real gap given how poorly the rest of the Gemini line scores on Omniscience.

Agent / tool use:

- Terminal-Bench 2.1: **34.1%** ([Vals AI](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview))
- Gert Labs rankings: **38.46%** ([Gert Labs](https://gertlabs.com/rankings))
- τ²-bench, GDPval-AA, OSWorld, MCP-Atlas, Toolathlon, BrowseComp, Claw-Eval: **no verified public score found**
- Hard capability limits, vendor-documented rather than inferred: **Computer use — not supported. Gemini Live API — not supported. Agentic video understanding — not supported.**

Reasoning / knowledge:

- **GPQA Diamond: 86.9%** ([Google blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite/)); independently **81.1%** ([Vals AI](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)) — a **5.8-point** vendor premium
- MMLU-Pro: **86.2%** (Vals AI) — strong, and independently measured
- **Arena.ai Elo: 1432** (Google blog) — a live preference ranking, though self-reported
- JevBench 1.4: **14.26**; JevBench 1.5: **19.58** ([JevBench v1.4.2.2 results](https://github.com/fstandhartinger/jevbench/blob/5b405e7e4efff2cfbbb2fe67db9b0cbad0704b8d/results/v1.4.2.2/jevbench-v1.4.2.2-results.json); [v1.5.4](https://benchmarkheaven.com/api/jevbench/v1.5.4))
- BenchLM overall: **48.06/100, rank #103 of 889** ([BenchLM](https://benchlm.ai/models/gemini-3-1-flash-lite), only 10 of 625 benchmarks, flagged conservative)
- **HLE, CritPt, AA-LCR, AA-IFBench, Artificial Analysis Intelligence Index, AA-Omniscience accuracy and hallucination rate: no verified public score found**

Coding:

- LiveCodeBench: **80.1%** ([Vals AI](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)) — genuinely high for a Lite tier
- SWE-bench Verified: **62.8%** (Vals AI)
- **Vibe Code Bench: 0.00%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — a literal zero on the agentic coding harness. The same harness returned 0.00–4.06% for the Grok family and 0.40% for Gemini 2.5 Pro, so I read it as a scaffold incompatibility rather than a capability measurement, and flag rather than average it.
- SWE-bench Pro, SciCode, FrontierCode: no verified public score found

Multimodal:

- **MMMU-Pro: 76.8%** (Google blog) — Google notes this "even surpass[es] larger Gemini models from prior generations like 2.5 Flash"
- **CharXiv: 73.2%** ([DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/))
- No Video-MME, OmniDocBench, MathVision, OCR or GUI-grounding number found
- No audio-understanding benchmark found — notable, since **improved ASR-grade audio input was one of four named release goals**, and it has no public measurement at all

Long context:

- **No MRCR, RULER, LongBench, AA-LCR or needle-retrieval number at any depth.** The 1,048,576-token window is entirely unvalidated by public retrieval measurement. The one mitigating structural fact is that both implicit and explicit context caching are supported, which is a real engineering commitment to long reused prompts.

### Normalized scores (1–100)

- **Tool use: 54/100.** The tool *surface* is genuinely broad for a cheap model — Google Search, Parallel Web Search and Exa grounding, code execution, function calling, URL context, structured output — but the measured performance is weak (Terminal-Bench 2.1 **34.1%**, Gert Labs 38.46%) and the hard limits are vendor-stated rather than inferred: **no computer use, no Live API, no agentic video understanding**. For a tier whose job is high-volume classification and extraction those absences are reasonable design choices, but they cap the dimension, and there is no τ²-bench, GDPval or MCP figure to argue otherwise.
- **Reasoning: 70/100.** Respectable for the price point: MMLU-Pro **86.2%** is independently measured and strong, and the four-level thinking control (minimal/low/medium/high) is a real quality lever. Capped by a **5.8-point gap between Google's GPQA Diamond of 86.9% and Vals AI's 81.1%** — I score nearer the independent figure — and more fundamentally by the **absence of any HLE, CritPt or hallucination measurement whatsoever**. Given that every other Gemini model I assessed in this pass posts a hallucination rate between 90.9% and 93.0%, the lack of data here is a risk, not a neutral blank.
- **Context window: 84/100.** 1,048,576 tokens with a 65,536-token output ceiling, both vendor-documented, plus **implicit and explicit context caching** and Provisioned Throughput — the supporting infrastructure for actually using a million-token window at scale is better here than in most entries. Held below the high 80s because the window has **zero public retrieval validation** and because the 64K output ceiling is half what the current Anthropic and OpenAI tiers offer.
- **Multimodal: 78/100.** Four-way input (text, image, audio, video) on Google's cheapest model is a real differentiator, and the two hard numbers are good — **MMMU-Pro 76.8%** and **CharXiv 73.2%**, with Google claiming it beats Gemini 2.5 Flash on the former. Capped by text-only output, by **agentic video understanding being explicitly unsupported** (video is ingestible but not actionable), and by the fact that the audio pathway — one of four named release priorities — has **no public benchmark at all**.
- **Coding: 64/100.** **LiveCodeBench 80.1%** is a genuinely impressive independent result for a Lite-tier model, and SWE-bench Verified 62.8% is usable for routine repair work. Capped by the absence of SWE-bench Pro, SciCode and FrontierCode, by Terminal-Bench 2.1 at 34.1% showing it cannot drive a terminal loop, and by the **0.00% Vibe Code Bench** result — which even read charitably as a harness failure leaves agentic coding entirely unevidenced.
- **Cost efficiency: 88/100.** $0.25 in / $1.50 out per MTok is Google's cheapest Gemini rate, and the comparison that matters is internal: it **undercuts Gemini 2.5 Flash's $0.30 / $2.50 on both lines while scoring higher on BenchLM (48.06 vs 42.21)** — cheaper and better from the same vendor, which is exactly what a cost-efficiency score should reward. Add implicit + explicit caching, Provisioned Throughput for committed volume, a Google AI Studio free tier, and secondary reports of ~2.5× faster time-to-first-token and ~381 tok/s. Short of the low 90s because there is no free developer ID, no Zen route, and the headline 1M window is unvalidated — you are paying for capacity whose quality nobody has measured.
- **Overall Score: 70/100.** Mean of the five non-cost dims (54 + 70 + 84 + 78 + 64) / 5 = 70.0. Best fit: exactly Google's stated target — high-volume, latency-sensitive classification, extraction, translation, summarisation and Search-grounded Q&A, with mixed image/audio/video input and long cached prompts, at the lowest Gemini rate available. Do not build agents on it (no computer use, no Live API, Terminal-Bench 34%), do not rely on it for agentic coding, and be aware that its factual-abstention behaviour is completely unmeasured in public.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Google Cloud's Gemini Enterprise Agent Platform model reference for `gemini-3.1-flash-lite` (model ID, the per-modality input/output matrix, 1,048,576-token context and 65,536-token output limits, the full capability and tool matrices including the explicit *not supported* entries for computer use, Live API and agentic video understanding, context-caching modes, tuning support and Provisioned Throughput), the DeepMind model card, Google's launch blog post and same-day press coverage for the 2026-03-03 release date, GPQA Diamond, MMMU-Pro and the Arena.ai Elo, BenchLM's aggregated page, and Vals AI's independent leaderboards for the `-preview` snapshot. Pricing and the latency/throughput figures come from secondary trackers and are labelled as such; a conflicting 2026-05-07 release date from one tracker is recorded and rejected in favour of Google's own dating. Artificial Analysis has no entry for this model, so the absence of HLE, CritPt and hallucination data is reported as a scoring risk rather than silently proxied from sibling models. The 0.00% Vibe Code Bench result is flagged as a probable harness incompatibility rather than averaged in. No data was imported from `gemini-3.1-pro`, `gemini-3.5-flash-lite` or the parked voice/TTS variants. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
