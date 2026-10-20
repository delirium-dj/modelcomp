# Gemini 3 Pro — findings by Step 5 Preview

- Source: Google (DeepMind) `gemini-3-pro`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (`gemini-3-pro` / `gemini-3-pro-preview`; thinking-high default)
- **Short description:** Google DeepMind's Gemini 3-generation Pro model (released 2025-11-18, the base of the Gemini 3 line). A frontier multimodal model with a 1M-token context, now superseded within Google's own lineup by Gemini 3.1 Pro, 3.5/3.6/3.7/3.8 Flash, and Gemini 4 Argon — the `gemini-3-pro-preview` endpoint was retired 2026-03-09 (replacement `gemini-3.1-pro-preview`), and Artificial Analysis flags the model deprecated (one tracked provider).
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI. Function calling + structured output + reasoning. No free API tier (free only in AI Studio web UI).
- **Release / knowledge:** Released 2025-11-18. Knowledge cutoff Jan 1, 2025 (per Artificial Analysis; not explicitly disclosed for this generation).
- **IDs:** `gemini-3-pro` / `gemini-3-pro-preview` (+ `-low`/`-high`). No free/contributor ID.
- **Context window:** 1,048,576 (1M) input (2M in some configs); 64K max output.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning yes (thinking-high); tool calls yes; JSON yes. No image/audio output.
- **Pricing (as of 2026-10-08):** $2.00/M in · $12.00/M out (per Artificial Analysis). No free API tier. AA today: same $2/$12 (median across its single tracked provider), 90% cache discount, blended (7:2:1) $1.74/M — unchanged.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced vectorwire.ai (194 results/129 benchmarks, 41 independent, capability profile) and Google's official DeepMind benchmark table (the "Gemini 3 Pro Thinking (High)" column). Independent runs noted where available.

- BenchLM composite (2026-10-19): **61.21/100** overall, #53 of 956 models, 41 of 644 benchmarks covered (partial coverage — conservative)

Agent / tool use:

- τ²-Bench Retail: **85.3%** / Telecom: **98.0%** (Google; AA Telecom run 87.13% high / 68.13% low)
- τ³-Bench (Sierra, independent — reported 2026-03-02): Telecom **91.0%**, Airline **80.5%**, Retail **75.9%**, Banking **18.0%** — strong retail/telecom tool use, weak banking
- MCP Atlas (multi-step MCP workflows): **54.1%** (Google) / **70.3%** (Scale AI, independent)
- BrowseComp (agentic search): **59.2%** (Google)
- Terminal-Bench 2.0 (Terminus-2 harness): **56.9%** (Google)
- Vibe Code Bench 1.1: **14.3%** (Vals AI, independent — reported 2026-10-06) — very weak real-world app-building
- APEX-Agents (long-horizon professional): **18.4%** (Google) — weak
- Vector Wire capability: **Agentic "Limited"** (−38.6% vs leader, 3/7) — its weakest area
- Gert Labs: **63.23%** (Gert Labs rankings via BenchLM, 2026-10-19); JobBench **11.4%** (paper via BenchLM) — long-horizon professional agentic work stays weak

Reasoning / knowledge:

- GPQA Diamond: **91.9%** no tools (Google) / **92.6%** (Epoch AI harness, independent) / **91.7%** (Vals AI harness, independent) — near-ceiling, well-corroborated
- Humanity's Last Exam (no tools): **37.5%** (Google) — just below the 40% frontier bar
- ARC-AGI-2: **31.1%** (ARC Prize verified) — low for a Pro-tier model
- MMMLU (multilingual): **91.8%** (Google)
- Vector Wire capability: **Reasoning "Capable"** (−18.0% vs leader, 5/6); **Factuality "Capable"** (−23.2%); **Instruction Following "Capable"** (−21.6%)
- AA suite (2026-10-19): AA Intelligence Index **28** (estimated, #105/217, v4.3.2 scale), GPQA Diamond **90.8%**, HLE **39.7%**, MMLU-Pro **89.8%**, Global-MMLU-Lite **92.2%**, CritPt **9.1%**, AA-Omniscience accuracy **55.8%** / hallucination-rate metric **91.5%**, AA-IFBench **70.4%** — the independent AA suite corroborates near-ceiling GPQA and HLE just under the 40% bar
- ARC-AGI-1: **75.0%** (ARC Prize verified, 2026-10-19) — second ARC data point alongside the 31.1% ARC-AGI-2 result

Coding:

- SWE-bench Verified: **76.2%** (Google) — mid-tier (well behind Opus 5.5's 89.9%)
- SWE-bench Pro (Public): **43.3%** (Google) — mid-tier on the harder diverse suite
- LiveCodeBench Pro (Elo): **2,439** (Google)
- SciCode: **56%** (Google); AA-LiveCodeBench **91.7%** (Artificial Analysis, 2026-10-19)
- Vector Wire capability: **Coding "Limited"** (−26.4% vs leader, 7/10) — a clear weakness for a Pro-tier model

Multimodal:

- Text + image + audio + video + PDF in; text out.
- MMMU-Pro (no tools): **81.0%** (Google); MMMU **82%**
- Vector Wire: **Multimodal "Frontier"** (leads 5/6) — its standout capability
- Independent corroboration table (2026-10-19, via Qwen3.5/Qwen3.6 model-card comparisons): Video-MME **88.4%** w/ and **87.7%** w/o subtitles, VideoMMMU **87.6%**, MMMU **87.2%**, RealWorldQA **83.3%**, OmniDocBench 1.5 **88.5%**, AI2D **94.1%**, CountBench **97.3%**, MathVision **86.6%**, We-Math **86.9%**, DynaMath **85.1%**, V* **88.0%**, CC-OCR **79.0%**, MLVU **83.0%**; soft spots ODINW13 **46.3%**, SimpleVQA **73.2%**, MMLongBench-Doc **60.5%**; AA-MMMU-Pro **80.2%** corroborates Google's 81.0%; ScreenSpot Pro **72.7%** (DeepMind)

- **Tool use: 74/100.** τ²-Bench Retail 85.3% / Telecom 98.0% are strong, but MCP Atlas 54.1%, BrowseComp 59.2%, Terminal-Bench 2.0 56.9%, and APEX-Agents 18.4% are mid-to-weak, and Vector Wire rates Agentic "Limited" (−38.6% vs leader) — its weakest area. Strong retail/tool scores do not carry to long-horizon agentic work.
- **Reasoning: 84/100.** GPQA Diamond 91.9% is near-ceiling and MMMLU 91.8% is strong. Capped by HLE 37.5% (just under the 40% frontier bar), ARC-AGI-2 31.1% (low for a Pro-tier model), and Vector Wire's Reasoning "Capable" (−18.0%) with Factuality "Capable" (−23.2%) — solid but not frontier reasoning.
- **Context window: 88/100.** 1M input / 64K output with Long Context "Strong" (−8.6%), but MRCR retrieval collapses from 77.0% at 128K to 26.3% at 1M — a nominal 1M window with weak top-end retrieval. The 64K output cap is a further caveat.
- **Multimodal: 92/100.** Full input coverage (text/image/audio/video/PDF) with MMMU-Pro 81.0% and a Vector Wire Multimodal "Frontier" (leads 5/6) rating — its standout capability. Just under the ceiling because output is text-only.
- **Coding: 72/100.** SWE-bench Verified 76.2% and LiveCodeBench Pro Elo 2,439 are mid-tier, but SWE-bench Pro 43.3% is weak and Vector Wire rates Coding "Limited" (−26.4%, 7/10) — a clear weakness for a Pro-tier model. Well behind the current coding frontier (Opus 5.5 ~90%).
- **Cost efficiency: 78/100.** Paid-only at $2/$12 per 1M (between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors, weighted toward the cheaper end). No free API tier.
- **Overall Score: 82/100.** Mean of the five non-cost dims (74+84+88+92+72)/5 = 82.0. Best fit as a strong frontier multimodal model with a 1M context for image/video/document understanding; look elsewhere for the hardest agentic coding or long-horizon agent loops (both "Limited"), and note it is superseded within Google's lineup by 3.1 Pro and the newer Flash/Argon tiers.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis and BenchLM: AA flags the model deprecated (superseded by Gemini 3.1 Pro Preview), the Intelligence Index is an estimate (28, #105/217, v4.3.2 scale) served via one provider; BenchLM composite 61.21/100 (#53/956, 41/644 benchmarks) adding the AA suite (GPQA 90.8%, HLE 39.7%, MMLU-Pro 89.8%, CritPt 9.1%, IFBench 70.4%, AA-LCR 76.0%), AA-LiveCodeBench 91.7%, ARC-AGI-1 75.0%, Gert Labs 63.2%/JobBench 11.4% and an independent multimodal corroboration table — all consistent with the existing scores, no change warranted. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (26 primary-source results, updated 2026-10-07 — independent GPQA Epoch 92.6%/Vals 91.7%, τ³-bench Telecom 91.0%/Airline 80.5%/Retail 75.9%/Banking 18.0%, MCP Atlas 70.3%, Vibe Code 14.3%) — no score change warranted; the independent τ³-bench retail/telecom strength and weak Vibe Code/Banking are consistent with the existing Tool use 74. Prior pass (2026-10-08) used vectorwire.ai and Google's official DeepMind benchmark table.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

Long context:

- 1M input / 64K output. MRCR v2 8-needle 128k average: **77.0%**; 1M pointwise: **26.3%** (Google) — retrieval collapses at the top of the window
- Vector Wire: Long Context **"Strong"** (−8.6% vs leader, 3/3)
- AA-LCR: **76.0%** (Artificial Analysis long-context reasoning, 2026-10-19) — consistent with the mid-window strength / top-end collapse pattern
- Context conflict noted (2026-10-19): BenchLM lists a 2M window for this model; Artificial Analysis and Google's own docs say 1M input — official 1M used for scoring

### Normalized scores (1–100)
