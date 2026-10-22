# Gemini 3.1 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind / Gemini 3.1 Flash (requested tier; resolved to Gemini 3.1 Flash-Lite)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18

> **Re-verified 2026-10-18.** Still no standalone text model named exactly `gemini-3.1-flash` (BenchLM 404); the file continues to score `google/gemini-3.1-flash-lite` (BenchLM `gemini-3-1-flash-lite`, 46.98). No new material. **No score change** (Tool / Reasoning / Context 90 / Multimodal / Coding / Overall 66) — see the full record below.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> **Identity reconfirmed (important):** a standalone text model named exactly **"Gemini 3.1 Flash" (id `gemini-3.1-flash`) does not exist** in any live source — the official DeepMind model-card index, OpenRouter's Google registry and every canonical page either 404 or omit it, while adjacent variants (Flash-Lite, Flash Image/Audio/Live/TTS, Gemini 3 Flash) do exist. "Gemini 3.1 Flash" in news consistently means **voice/TTS/Live** products, not a text model. This file continues to score the closest GA text/agent SKU, **Gemini 3.1 Flash-Lite (`google/gemini-3.1-flash-lite`)**, and now adds its measured long-context rows: **GDM-MRCR v2 128k 60.1% but 1M only 12.3%**; HLE 16.0%, GPQA Diamond 86.9% (official) / 81.1% (Vals), MMMU-Pro 76.8%, CharXiv 73.2%, Video-MMMU 84.8%, LiveCodeBench 72.0% (official) / 80.1% (Vals), SWE-bench 62.8%, Terminal-Bench 2.1 34.1%, Vibe Code Bench 0.00%; official release **2026-03-03**, pricing **$0.25 in / $1.50 out**.
> **Conflicts surfaced:** (1) **GPQA Diamond** 86.9% (official) vs 81.1% (Vals/BenchLM). (2) **LiveCodeBench** 72.0% (official) vs 80.1% (Vals). (3) **Reasoning label** official "reasoning models" vs BenchLM "Non-Reasoning". (4) The prior file recorded no recall data; the full-window MRCR (12.3% at 1M) is now measured and weak.
> **Adjusted dimension:** Context 95→90 (**GDM-MRCR at 1M only 12.3%**); Overall 67 → **66**. If the intended tier were the voice-only Flash Live/TTS, no text evidence would exist and Tool/Reasoning/Coding could not be supported.
> Sources: https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/ · https://benchlm.ai/models/gemini-3-1-flash-lite · https://deepmind.google/models/model-cards/ · https://openrouter.ai/google

## Model card

- **Name:** Gemini 3.1 Flash — **requested-name resolution:** no GA model called exactly "Gemini 3.1 Flash" exists. This file scores the closest GA text/agent SKU, **Gemini 3.1 Flash-Lite**.
- **Short description:** Google's March 2026 "intelligence at scale" Flash-Lite tier: high-efficiency, natively multimodal, for low-latency high-volume workloads (subagent calls, document parsing, agentic search). Sits between Gemini 3 Flash (Dec 2025) and the 3.5/3.6/3.7/3.8 Flash line.
- **Provider / access:** Google — Gemini API, Google AI Studio, Vertex AI. Proprietary, closed, no open weights.
- **Release / knowledge:** GA 2026-03-03. Knowledge cutoff 2025-01.
- **IDs:** `google/gemini-3.1-flash-lite` (also `gemini-3.1-flash-lite`). No OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens; max output 64K.
- **Modalities:** text, image, video, audio and PDF input; text output; tool calls; structured/JSON output; reasoning yes (lightweight thinking).
- **Pricing (as of 2026-10-11):** **$0.25 / 1M in and $1.50 / 1M out**; prompt caching ≈50% off; batch ≈50% off-peak.
- **Architecture:** proprietary dense Transformer; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **34.1%** (Vals/BenchLM); Tau3-Banking 8.7%; APEX-Agents 25.0%; Vibe Code Bench 0.00%; JobBench/Gert Labs 38.46%
- GDPval-AA 651 Elo; MCP Atlas 57.1%; Agentic Skills Evaluation 71.4%
- Claw-Eval / ClawProBench / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9% (official) / 81.1% (Vals)**; MMLU-Pro 86.2% (Vals); HLE 16.0%; SimpleQA Verified 43.3%; MMMLU 88.9%
- Artificial Analysis Intelligence Index 25 (prior) / BenchLM overall 47.64 (#107/891); JevBench 1.4 = 14.26, 1.5 = 19.58
- CritPt / LCR: **no verified public score found**

Coding:

- LiveCodeBench: **72.0% (official) / 80.1% (Vals)**; SWE-bench 62.8% (Vals); Code Migration / SciCode 41.9%
- WebDev Arena 1254 Elo; SWE-bench Pro / DeepSWE: **no verified public score found**

Long context:

- **GDM-MRCR v2 8-needle 128k 60.1%; 1M 12.3%** (official) — the headline 1M window has very weak measured deep recall; no AA-LCR for this checkpoint.

Multimodal:

- MMMU-Pro 76.8%; CharXiv 73.2%; Video-MMMU 84.8%; text/image/video/audio/PDF in, text out.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 34.1%, Tau3-Banking 8.7% and APEX-Agents 25.0% make it a routing/subagent model rather than an autonomous agent.
- **Reasoning: 60/100.** GPQA Diamond 81.1–86.9% is respectable for a Lite tier, but HLE 16.0% and a modest composite index show the frontier-knowledge ceiling.
- **Context window: 90/100.** 1,048,576 tokens on a sub-$0.30 input tier is a strong buy, but the official GDM-MRCR at full 1M is only **12.3%** (60.1% at 128K), so it is lowered from 95 — large window, weak deep recall.
- **Multimodal: 82/100.** Text, image, video, audio and PDF input with text-only output — broad ingestion, no generation, vision below the full Flash tiers.
- **Coding: 58/100.** LiveCodeBench 72–80% and a 1254 WebDev Arena Elo are mid-pack; the absence of any SWE-bench Verified result rules it out of repository-level agentic coding.
- **Cost efficiency: 88/100.** $0.25 / $1.50 per 1M with ~50%-off caching and batch is cheap, but newer Flash-Lite tiers offer more capability at a similar rate.
- **Overall Score: 66/100.** Mean of the five quality dims (40+60+90+82+58)/5 = 66.0 → 66, scored against the resolved `gemini-3.1-flash-lite` proxy. If the intended tier were Gemini 3.1 Flash Live/TTS, no text-agent evidence exists and tool/reasoning/coding could not be supported at all.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (Google DeepMind model-card index + Gemini 3.1 Flash-Lite card, BenchLM, OpenRouter Google registry, SearchEngineJournal/eWeek for the voice-variant disambiguation). The absence of a standalone "Gemini 3.1 Flash" was reconfirmed; the newly published full-window MRCR corrected Context. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
