# Qwen 3.7 Max — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Qwen 3.7 Max
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Max (Qwen3.7-Max)
- **Short description:** Alibaba's May-2026 Qwen-Max flagship — a proprietary, text-only agent model for coding, office/productivity tasks and long-horizon autonomous execution (35-hour autonomy, 1,000+ tool calls claimed); superseded by Qwen3.8-Max on 2026-08-03.
- **Provider / access:** Alibaba — Alibaba Cloud Model Studio (QwenCloud), OpenRouter, Together AI; OpenAI- and Anthropic-compatible endpoints; explicit prompt caching supported.
- **Release / knowledge:** Released 2026-05-19/21 (Alibaba Cloud Summit); deprecated by Artificial Analysis (only the default 10K-input workload is still benchmarked). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/qwen-3.7-max` (repo meta.json); `qwen/qwen3.7-max` (OpenRouter).
- **Context window:** 1M tokens total (991,800 input non-thinking / 983,610 thinking); 131,072 max output.
- **Modalities:** Text in; text out; reasoning and tool calls. Pure text-only — no image/video/audio input.
- **Pricing (as of 2026-10):** $2.50 input / $7.50 output per 1M list (Alibaba; $0.50 implicit cache, $3.125 explicit cache write, $0.25 explicit cache read); OpenRouter $1.475/$4.425; 50% launch promo was $1.25/$3.75.
- **Architecture:** proprietary; closed weights (no open-weight release for the Max tier in this generation).

### Raw benchmarks found

Artificial Analysis (via OpenRouter) unless noted:

Agent / tool use:

- MCP-Atlas: **76.4%**.
- τ²-Bench Telecom: **94.7%**.
- Terminal-Bench 2.0 (Terminus): **69.7%** (AI/TLDR); Terminal-Bench Hard: **50.8%** (AA).
- AA-LCR: **79.0%**; CritPt: **13.4%**; GDPval-AA: **30.7** (as listed by AA); Agents Arena Elos: 1146–1294 (Design Arena).
- Tau3-Banking: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (AA) / 92.4% (AI/TLDR) / 90.9±2.0% (Epoch AI).
- HLE: **40.5%** (AA) / 41.4% (AI/TLDR).
- OTIS Mock AIME 2024–2025: **95.6±3.1%** (Epoch AI).
- FrontierMath Tiers 1–3: **64.6±2.8%**; Tier 4: **34.1±7.5%** (Epoch AI).
- SimpleQA Verified: **55.8±1.6%** (Epoch AI); AA-Omniscience Accuracy **31.1%** / Non-Hallucination Rate **74.4%**.
- AA Intelligence Index: **56.6** at launch (v4.0, #5 overall, highest-placed Chinese model then); **29** on AA's current page (Index version changed; model deprecated).

Coding:

- SWE-bench Verified: **80.4%** (AI/TLDR) / 77.3±1.9% (Epoch AI).
- SWE-bench Pro: **60.6%**.
- SciCode: **49.5%** (AA); AA Coding Index: **66.0**; AA Agentic Index: **22.5**.
- DeepSWE / LiveCodeBench / Vibe Code Bench: no verified public score found.

Long context:

- No MRCR/RULER/GraphWalks score found; 1M window with claimed 35-hour / 1,000+-tool-call autonomy.

Multimodal:

- None — text-only model (no image/video/audio input).

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP-Atlas 76.4% and τ²-Telecom 94.7% are frontier-tier, but Terminal-Bench Hard 50.8% is mid-band and CritPt 13.4% is weak; no τ³ evidence.
- **Reasoning: 77/100.** GPQA 92.3–92.4% and HLE 40.5–41.4% sit right on the frontier line, with AIME 95.6% strong; FrontierMath T4 34.1% and the deprecated/changed AA Index (56.6 → 29) cap it.
- **Context window: 95/100.** 1M tokens confirmed (991K usable input), at the ≥1M anchor.
- **Multimodal: 15/100.** Text-only model — no image, video, audio, or PDF input.
- **Coding: 75/100.** SWE-bench Verified 77.3–80.4% is frontier-tier and Terminal-Bench 2.0 69.7% is solid, but SWE-bench Pro 60.6% and SciCode 49.5% lag; no DeepSWE/LiveCodeBench scores.
- **Cost efficiency: 86/100.** $1.475/$4.425 per 1M (OpenRouter) undercuts the $3/$15 anchor substantially; list $2.50/$7.50 with $0.50 cached input.
- **Overall Score: 67.2/100.** Mean of the five quality dimensions; a strong text-only agent model whose frontier-grade reasoning and 1M context are offset by the text-only multimodal penalty and mid-tier hard-benchmark evidence.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
