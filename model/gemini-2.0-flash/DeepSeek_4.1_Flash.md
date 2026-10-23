# Gemini 2.0 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 2.0 Flash (`google/gemini-2.0-flash`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-27); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gemini-2-0-flash`, 5 rows) assigns **no overall score** (unranked); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against Artificial Analysis (https://artificialanalysis.ai/models/gemini-2-0-flash), BenchmarkList (https://benchmarklist.com/models/google-gemini-2.0-flash/), evals.report (https://evals.report/models/google-gemini-2-0-flash), RankedAGI (https://rankedagi.com/models/gemini-2.0-flash), LLM Stats (https://llm-stats.com/models/gemini-2.0-flash), LLM Decision Hub (https://llmleaderboard.ai/model/gemini-2-0-flash/) and Bing/DuckDuckGo aggregate searches. The prior 2.0-generation picture holds: still a cheap, 1M-window, natively multimodal Flash workhorse, no longer a live endpoint, mid-tier reasoning, weak agentic/coding. New independent numbers broadly confirm the old ranges (τ²-bench 29.5%, Terminal-Bench Hard 3.8%, MMLU-Pro 77.4–77.9%, Aider Polyglot 22.2%, ARC-AGI-2 1.3%) but several conflicts were surfaced: GPQA Diamond ranges 60.1–65.2% across trackers; LiveCodeBench splits 33.4% (evals.report) vs 43.6% (BenchmarkList/vals); MATH-500 88.0% here vs 93.0% in the prior Sophon note; AIME 2025 21.7% vs 27.5%; knowledge cutoff is given as Jun 1 2024 (Artificial Analysis) vs Aug 2024 (LLM Stats, RankedAGI). No dimension score changed; the Overall is unchanged at 66.2.

## Model card

- **Name:** Gemini 2.0 Flash (historical entry; no Free-tier wording)
- **Short description:** Google's February 2025 second-generation workhorse: a natively multimodal Flash model with a 1M-token window, native tool use and a very low price. It has been shut down upstream and survives in this dataset as the 2.0-generation reference point.
- **Provider / access:** Google (Gemini API, AI Studio, Vertex AI). The vendor model list directs users to newer models; Artificial Analysis now labels the page "deprecated" and the repo's curated `meta.json` records a 2026-06-01 shutdown (https://artificialanalysis.ai/models/gemini-2-0-flash). Proprietary, no open weights.
- **Release / knowledge:** Released/GA 2025-02-05 (https://rankedagi.com/models/gemini-2.0-flash, https://artificialanalysis.ai/models/gemini-2-0-flash). Knowledge cutoff is reported inconsistently: Jun 1 2024 (Artificial Analysis) vs Aug 2024 (LLM Stats https://llm-stats.com/models/gemini-2.0-flash, RankedAGI).
- **IDs:** `google/gemini-2.0-flash`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens input (vendor) with an ~8K max output — the small output ceiling, not ingestion, is the practical limit for generation (https://llm-stats.com/models/gemini-2.0-flash).
- **Modalities:** text, image, audio and video input; text output plus experimental native image output at launch; native tool use; no reasoning-effort control. Confirmed by Artificial Analysis (text, image, speech, video in; text + image out) and the repo's `meta.json`.
- **Pricing (as of 2026-10-11):** historical Google AI Studio list $0.10 / 1M input, $0.40 / 1M output (audio input $0.70); Vertex AI $0.15 / $0.60. Confirmed at $0.10/$0.40 by LLM Stats, RankedAGI and BenchmarkList; the model is shut down, so these are reference rates rather than usable ones.
- **Architecture:** proprietary and undisclosed; a dense "Flash" workhorse of the 2.0 generation, one generation ahead of 2.0 Flash-Lite and two to three behind the current 3.x Flash line.

### Raw benchmarks found

Figures come from five independent consolidated sources this pass — Artificial Analysis, BenchmarkList (110 matched evals), evals.report (22 reported scores), RankedAGI and LLM Decision Hub — plus the prior Sophon/BenchGecko notes. Harness differs per tracker, so each number is quoted with its source.

Agent / tool use:

- Tau2-Bench Telecom: **29.5%** (BenchmarkList); Instrumental agentic picture remains weak
- Terminal-Bench Hard: **3.8%** (BenchmarkList); Data Agent Benchmark: **12.8%**; ScienceAgentBench (HAL): **12.8%** (BenchmarkList)
- GDPval-AA: **570 Elo** (BenchmarkList) / **569 Elo** (RankedAGI) — far below the 900–1200 mid band
- GAIA: **32.7%** (BenchmarkList) / **32.73%** (evals.report); Online Mind2Web: **29.0%** (BenchmarkList, evals.report); TAU-bench Airline (HAL): **22.0%** (BenchmarkList)
- BFCL-v3 tool use: **61.2%** (BenchmarkList)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **64.1%** (evals.report, Official) / **60.1%** (RankedAGI) / **63.6%** (BenchmarkList, Epoch run) / **65.2%** (BenchmarkList, vals run) — a 5-point tracker spread
- MMLU-Pro: **77.9%** (evals.report, BenchmarkList) / **77.6%** (RankedAGI) / **77.4%** (BenchmarkList vals)
- HLE: **5.3%** (BenchmarkList); HLE text-only **6.5%**; FrontierMath **1.72%** (evals.report)
- MATH-500: **88.0%** (BenchmarkList vals); AIME 2025: **21.7%** (BenchmarkList) / **27.5%** (RankedAGI); OTIS Mock AIME: **31.1%** (evals.report) / **57.8%** (BenchmarkList)
- ARC-AGI-2: **1.3%** (BenchmarkList); SuperGPQA: **47.7%** (BenchmarkList, evals.report); EnigmaEval: **0.63%** (evals.report)
- Artificial Analysis Intelligence Index: **12.27** (BenchmarkList, rank 243/427) vs **9** estimated on the older index (Artificial Analysis)
- LongBench v2: **51.1%** (BenchmarkList, evals.report); FACTS Grounding: **83.6%**; MASK honesty: **49.07** (evals.report); Text Arena Elo: **1357** (RankedAGI)
- MRCR / RULER / CritPt: **no verified public score found**

Multimodal:

- MMMU: **70.7%** (evals.report) / **71.7%** (RankedAGI); MMMU Pro: **69.8%** (BenchmarkList); MathVista: **73.1%** (evals.report, BenchmarkList)
- MMVU: **69.5**; MMAU (audio): **67.0%**; audio scene-understanding contextual reasoning: **73.3%** (BenchmarkList)
- Vendor-documented text, image, audio and video input plus image output at launch; vision/audio accuracy now measured but mid-range, not MMMU-leader class.

Coding:

- SWE-bench Verified: **44.2%** (prior Sophon, scaffolded agent run — not reconfirmed this pass); SWE-bench Verified Mini (HAL): **24.0%** (BenchmarkList)
- LiveCodeBench: **33.4%** (evals.report) vs **43.6%** (BenchmarkList vals — different harness); SciCode: **33.3%** (evals.report) / **34.0%** (BenchmarkList)
- Aider Polyglot: **22.2%** (evals.report); BigCodeBench: **33.8%** calibrated Pass@1 (evals.report); RankedAGI Coding: **35.4%**; LiveBench Coding (old): **53.9%** (RankedAGI); CodeLMArena: **1310** (LLM Decision Hub)
- DeepSWE / SWE-bench Pro / Vibe Code Bench / Terminal-Bench 2.1: **no verified public score found**

Long context:

- 1M input / 8K output confirmed (LLM Stats); retrieval quality is weak where measured: AA-LCR **31.3%** (BenchmarkList, rank 250/408) and LongBench v2 **51.1%**. No MRCR/RULER recall value exists for the full 1M window, so the score still reflects the documented window size more than measured retrieval.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 29.5% is mid-band-class, and BFCL-v3 61.2% shows real function-calling, but Terminal-Bench Hard 3.8%, GDPval-AA ~570 Elo (well under the 900–1200 mid band), DABstep-class data-agent 12.8% and ScienceAgentBench 12.8% put it firmly under the tool-use mid tier despite documented native tool calling — this was never an agent model. Unchanged from the prior pass.
- **Reasoning: 58/100.** GPQA Diamond 60.1–65.2% and MMLU-Pro 77.4–77.9% sit inside the mid band (GPQA 60–80%), but HLE 5.3%, FrontierMath 1.72%, ARC-AGI-2 1.3% and an Intelligence Index of 9–12 (below the 20–35 mid band) hold it at the bottom edge of that band rather than above it. Unchanged.
- **Context window: 95/100.** A 1M-token input window at $0.10 / 1M input is the headline capability of this generation; the ~8K output ceiling and weak measured recall (AA-LCR 31.3%, LongBench v2 51.1%) are why it is not at the 100 ceiling. Unchanged.
- **Multimodal: 88/100.** Text, image, audio and video input in one call plus image output at launch covers the broadest modality matrix of its generation; measured multimodal accuracy is real but mid-range (MMMU ~71%, MMMU Pro 69.8%, MathVista 73.1%, MMAU 67.0%), so it stays just below the 90+ audio/non-text-output band. Unchanged.
- **Coding: 45/100.** SWE-bench Verified 44.2% on a prior scaffolded run is respectable, but LiveCodeBench 33.4% (vals run 43.6%), SciCode ~34%, Aider Polyglot 22.2% and a coding index in the mid-30s show it cannot carry repo-scale work — fine for snippets and web tasks, not for agentic engineering. Unchanged.
- **Cost efficiency: 93/100.** $0.10 / 1M input and $0.40 / 1M output was aggressively cheap for a 1M-window multimodal model (the $0.10/$0.20 tier scores 97–99) and it would have gone higher if the endpoint were still live; the shutdown and the $0.70 audio-input rate cost it the rest. Unchanged.
- **Overall Score: 66.2/100.** (45 + 58 + 95 + 88 + 45) / 5 = 66.2. Best fit: a historical benchmark for cheap mass multimodal ingestion and translation; for new work the current Flash-Lite/Flash tier matches or beats it at the same price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research — independent consolidated trackers (Artificial Analysis, BenchmarkList, evals.report, RankedAGI, LLM Stats, LLM Decision Hub, plus Bing/DuckDuckGo aggregate search) cross-checked with the prior Sophon/BenchGecko notes, Google's deprecated-model status and repo `meta.json` for curated pricing/modality fields. **Re-verified 2026-10-11:** every dimension score held; the six independent sources confirm the old ranges within tracker noise. Conflicting numbers are listed rather than averaged (GPQA 60.1–65.2%; LiveCodeBench 33.4% vs 43.6%; MATH-500 88.0% vs 93.0%; AIME 2025 21.7% vs 27.5%; knowledge cutoff Jun vs Aug 2024). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
