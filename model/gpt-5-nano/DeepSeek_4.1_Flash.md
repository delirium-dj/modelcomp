# GPT 5 Nano — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5 Nano (`openai/gpt-5-nano`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Re-checked against OpenAI official model docs (https://developers.openai.com/api/docs/models/gpt-5-nano), Artificial Analysis (https://artificialanalysis.ai/models/gpt-5-nano), LLM Stats (https://llm-stats.com/models/gpt-5-nano-2025-08-07), AI Release Tracker (https://aireleasetracker.com/model/openai/gpt-5-nano), BenchLM (https://benchlm.ai/models/gpt-5-nano) and OpenRouter (https://openrouter.ai/openai/gpt-5-nano) — six independent pages. **No dimension changed; the prior Overall (63) stands.** Corrections/conflicts surfaced: OpenAI docs publish max input **272K** and max output **128K** tokens (first pass said max output was "not separately published"); knowledge cutoff is **May 31 2024** per OpenAI vs **May 30 2024** per Artificial Analysis; Artificial Analysis now labels GPT-5 nano (High) **deprecated** and points to GPT-5.4 nano, and its live page shows only a composite Intelligence Index of **13 (estimated)** with per-benchmark figures no longer publicly displayed; BenchLM tracks the model but reports **0/626 benchmarks covered (unranked)**. Prices ($0.05 / $0.40 per 1M), the 400K window and the text+image→text modality are confirmed by every vendor/tracker checked.

## Model card

- **Name:** GPT 5 Nano
- **Short description:** The smallest and fastest variant in the GPT-5 system — built for developer tools, rapid interactions and ultra-low-latency environments; limited in reasoning depth but retaining GPT-5's instruction-following and safety features. Successor to GPT-4.1-nano (per OpenAI docs).
- **Provider / access:** OpenAI API, OpenRouter, Vercel AI Gateway (multi-provider). Not open weights (AI Release Tracker: closed).
- **Release / knowledge:** Released 2025-08-07 (snapshot `gpt-5-nano-2025-08-07`); knowledge cutoff May 31 2024 (OpenAI docs) / May 30 2024 (Artificial Analysis) — older than later GPT-5.x siblings.
- **IDs:** `gpt-5-nano` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5-nano`. No Zen Free ID. Snapshot `gpt-5-nano-2025-08-07`.
- **Context window:** 400K tokens (OpenAI docs, LLM Stats, BenchLM); max input 272K, max output 128K (OpenAI docs, LLM Stats).
- **Modalities:** text and image in; text out (OpenAI docs, LLM Stats, Artificial Analysis). Reasoning yes (minimal / medium / high effort), tool use, structured outputs.
- **Pricing (as of 2026-10-11):** **$0.05 / $0.40 per 1M** in/out ($0.005 cached input) — the cheapest tier in this dataset (OpenAI docs, LLM Stats, AI Release Tracker).
- **Architecture:** proprietary decoder-only, ultra-lightweight. Not released.

### Raw benchmarks found

Agent / tool use (Artificial Analysis via OpenRouter; no longer displayed on the live AA page):

- τ²-Bench Telecom: **36.5%** (high), 30.4% (medium), 25.7% (minimal); Terminal-Bench Hard: **17.4%** (medium), 12.1% (high)
- IFBench: **67.6%** (high), 65.9% (medium), 32.5% (minimal)
- GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**
- OpenAI docs confirm the tool surface (function_calling, web_search, file_search, code_interpreter, mcp) but publish no numeric agentic score (https://developers.openai.com/api/docs/models/gpt-5-nano)

Reasoning / knowledge (Artificial Analysis via OpenRouter unless noted):

- GPQA Diamond: **67.6%** (high), 67.0% (medium), 42.8% (minimal)
- HLE: **9.5%** (high), 8.7% (medium), 4.0% (minimal); CritPt: **0.0%** (medium)
- AA-Omniscience Accuracy **17.6%** / Non-Hallucination **47.4%** (medium)
- Artificial Analysis Intelligence Index: **13** (estimated, high) — #15/59 in AA's class, above the median of 8 (https://artificialanalysis.ai/models/gpt-5-nano). BenchLM: **no score** — 0/626 benchmarks covered, unranked (https://benchlm.ai/models/gpt-5-nano).

Coding:

- SWE-bench Verified / SciCode / LiveCodeBench / DeepSWE: **no verified public score found** (no coding benchmark captured for the nano variant; the low Terminal-Bench Hard figures signal a weak agentic-coder profile). OpenAI's launch page reports SWE-bench Verified 74.9% and Aider Polyglot 88% for the **GPT-5 flagship, not nano** — not attributable here (https://openai.com/index/introducing-gpt-5/).

Long context:

- 400K-token window (272K max input / 128K max output) documented (https://developers.openai.com/api/docs/models/gpt-5-nano); AA-LCR: **43.7%** (medium), 45.0% (high) — modest; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

Multimodal:

- Text and image input, text output documented (OpenAI docs, LLM Stats, Artificial Analysis); no audio/video documented; **no MMMU-Pro / image-reasoning numeric score published for nano** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 52/100.** τ²-Bench Telecom 36.5% and Terminal-Bench Hard 17.4% are weak-to-mid agentic results, partly offset by IFBench 67.6%; no GDPval/OSWorld figure (https://artificialanalysis.ai/models/gpt-5-nano).
- **Reasoning: 60/100.** GPQA 67.6% and IFBench 67.6% are decent for a nano tier, while HLE 9.5%, CritPt 0.0% and the composite AA Intelligence Index of 13 keep it in the mid band rather than above (https://artificialanalysis.ai/models/gpt-5-nano).
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85 → 400K ≈ 80) (https://developers.openai.com/api/docs/models/gpt-5-nano).
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); no audio/video documented (https://llm-stats.com/models/gpt-5-nano-2025-08-07).
- **Coding: 55/100.** No coding benchmark exists for the nano variant, and the weak Terminal-Bench Hard figures indicate a limited agentic-coder profile — scored provisionally in the low-mid band rather than as a capable coder (https://artificialanalysis.ai/models/gpt-5-nano).
- **Cost efficiency: 98/100.** $0.05 / $0.40 per 1M is the lowest price tier evaluated (https://aireleasetracker.com/model/openai/gpt-5-nano).
- **Overall Score: 63/100.** (52 + 60 + 80 + 68 + 55) / 5 = 63.0 → 63. Best fit: ultra-low-cost, latency-critical classification and tool-driven tasks where deep reasoning is not required. Note: AA marks this release deprecated in favor of GPT-5.4 nano.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research — OpenAI official model docs + GPT-5 launch page, Artificial Analysis, LLM Stats, AI Release Tracker, BenchLM, OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores; Coding is provisional where no benchmark exists.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
