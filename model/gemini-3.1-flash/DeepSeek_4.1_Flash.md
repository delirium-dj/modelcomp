# Gemini 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash (requested tier; resolved to Gemini 3.1 Flash-Lite)
- Date: 2026-10-01 (UTC) — refreshed second pass (previous Signature 2026-09-18)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash — **requested-name resolution:** no GA model called exactly "Gemini 3.1 Flash" was found. The 3.1 line ships Pro/Pro-Preview (Deep Think), **3.1 Flash-Lite** (GA) and specialised previews (3.1 Flash Live / TTS, which are speech products with no text-agent evidence). This file scores the closest GA text/agent SKU, **Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)**.
- **Short description:** Google's March 2026 "intelligence at scale" Flash-Lite tier: high-efficiency, natively multimodal, for low-latency high-volume workloads (subagent calls, document parsing, agentic search). Sits between Gemini 3 Flash (Dec 2025) and the 3.5/3.6/3.7/3.8 Flash line.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI. Proprietary, closed, no open weights.
- **Release / knowledge:** Catalogue release date 2026-05-07 (BenchmarkList); GA 2026-03-03. Knowledge cutoff listed 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` (also `gemini-3.1-flash-lite`). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output not published for the Lite tier.
- **Modalities:** text, image, video, audio and PDF input; text output; tool calls; structured/JSON output; reasoning yes (lightweight thinking).
- **Pricing (as of 2026-10-01):** $0.25–$0.28 / 1M in and $1.50–$1.65 / 1M out (after a 10% list-price rise on 2026-08-29); prompt caching ≈50% off; batch queue ≈50% off-peak.
- **Architecture:** proprietary dense Transformer, parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **31.1%** (rank 97 of 182); Tau3-Banking: **8.7%**; APEX-Agents: **25.0%** (BenchmarkList)
- GDPval-AA: **651 Elo**; MCP Atlas: **57.1%**; Agentic Skills Evaluation: **71.4%**
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **82.2%** (rank 108 of 464); HLE: **16.2%** (rank 124 of 466)
- Artificial Analysis Intelligence Index: **25.04** (68th percentile); AIIQ Composite IQ: 101
- MMLU-Pro / CritPt / LCR: **no verified public score found**

Coding:

- SciCode: **41.9%** (rank 91 of 458); SAKE (software-architecture knowledge): **93.7%**
- WebDev Arena: **1254 Elo** (Epoch AI); SWE-bench Verified / Pro / LiveCodeBench / DeepSWE: **no verified public score found**

Long context:

- no MRCR/RULER/GraphWalks recall value found for the 3.1 Lite tier; AA-LCR not published for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 31.1%, Tau3-Banking 8.7% and APEX-Agents 25.0% make it a routing/subagent model rather than an autonomous agent.
- **Reasoning: 60/100.** GPQA Diamond 82.2% and an AA Intelligence Index of 25.04 are respectable for a Lite tier, but HLE 16.2% shows the frontier-knowledge ceiling.
- **Context window: 95/100.** 1,048,576 tokens on a sub-$0.30 input tier is a strong buy; cache and batch discounts make long prefill affordable. No recall evidence at depth keeps it below maximum.
- **Multimodal: 82/100.** Text, image, video, audio and PDF input with text-only output — broad ingestion, no generation, vision below the full Flash tiers.
- **Coding: 58/100.** SciCode 41.9% and a 1254 WebDev Arena Elo are mid-pack; the absence of any SWE-bench-class result rules it out of repository-level agentic coding.
- **Cost efficiency: 88/100.** $0.25–$0.28 / $1.50–$1.65 per 1M with ~50%-off caching and batch is cheap, but the price rose 10% in August 2026 and newer Flash-Lite tiers offer more capability at a similar rate.
- **Overall Score: 67/100.** Mean of the five quality dims (40+60+95+82+58)/5 = 67.0 → 67, scored against the resolved `gemini-3.1-flash-lite` proxy. If the intended tier were Gemini 3.1 Flash Live/TTS Preview, no text-agent evidence exists and tool/reasoning/coding could not be supported at all.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-01
- Method: public internet research (BenchmarkList model page + per-eval results, Google DeepMind Gemini 3.1 Flash-Lite model card, Epoch AI figures via Model Beat); second-pass refresh of the 2026-09-18 report. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
