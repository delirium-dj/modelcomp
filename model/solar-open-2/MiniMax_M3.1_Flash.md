# Solar Open 2 — findings by MiniMax M3.1 Flash

- Source: Upstage (Solar Open 2, 250B), `upstage/Solar-Open2-250B`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's July 2026 open-weight Korean-sovereignty model — a 250B/15B-active MoE with **1M context**, NoPE attention, 321 experts, English/Korean/Japanese support, LiveCodeBench v6 92.4% and SWE-bench Verified 70.4%, self-hostable on two quantized H200s.
- **Provider / access:** Hugging Face `upstage/Solar-Open2-250B` (**Upstage Solar License** — commercial use permitted, derivatives must be prefixed "Solar-" and carry "Built with Solar"), plus NotaAI INT4/NVFP4/INT4-GlobalPruned quants; local serving with Upstage's vLLM fork `v0.22.0-solar-open2` and Transformers fork `v5.14.1-solar-open2`; Anthropic-compatible endpoint usable from Claude Code. **No metered API price; not on OpenCode Zen.**
- **Release / knowledge:** **2026-07-22** (Upstage blog); technical report arXiv **2607.20062** (published 2026-07-24). Knowledge cutoff not published.
- **IDs:** `upstage/Solar-Open2-250B` (HF) — note `Solar-Open-2B` and `Solar-Open-2` do not exist.
- **Context window:** **1,000,000** tokens (model card, blog). `max_tokens` up to 256K in reasoning mode, 128K in direct mode; reasoning output capped at 131,072.
- **Modalities:** text in / text out; reasoning via `reasoning_effort` = none | high; temperature 1.0, top_p 1.0; official tool-call and reasoning parsers.
- **Pricing (as of 2026-10-20):** **open weights, no per-token price** — self-host on 4×H200 BF16 or **2×H200 quantized** (card table says minimum 4×H200 / recommended 8, quickstart assumes 8 GPUs — minor conflict, all cited).
- **Architecture:** MoE, **250,287,794,944 total / 15B active**, 48 layers, hidden 4096, hybrid attention `[Softmax, Linear×3] × 12`, **NoPE** (no rotary encoding), 320 routed + 1 shared experts with top-8, vocab 196,608, ~12T training tokens on NVIDIA B200 (2M GPU hours), initialised from Solar Open 100B via selective weight transfer (2.3% of weights carried over).

### Raw benchmarks found

> The model card's table, mirrored by BenchLM; Upstage's later Solar Pro 4 blog re-reports Solar Open 2 with different in-house numbers, which are flagged rather than merged.

Reasoning / knowledge:

- GPQA Diamond: **86.3%** (card) — Upstage's Solar Pro 4 blog re-reports **85.6%** in-house
- MMLU-Pro: **86.2%** · MMLU-ProX: **86.2%** · AIME 2026: **95.7%** · HMMT Feb 2026: **93.9%** · HLE (no tools): **28.8%** · IFBench: **80.0%** · AA-LCR: **62.3%**
- Korean: KMMLU-Pro **78.4%** · CLIcK **90.7%** · HAE-RAE v1.1 **73.8%** · Ko-AIME '25 **97.7%** · HRM8K **92.2%** · KBank-MMLU **80.8%** · KBL **75.5%** · Ko-GDPval **86.8%** — Korean average **85.43** (up from 66.95 for v1)
- APEX-Agents: **16.6%** · τ³-banking: **19.6%** · GDPval-AA v2 (Elo): **1128** (card) vs **31.4% normalised** (Solar Pro 4 blog)

Agent / tool use:

- Terminal-Bench Hard: **28.3%** · MCP-Atlas: **58.2%** · ArtifactsBench: **55.9%** · Multi-Challenge: **61.0%**
- The Solar Pro 4 blog re-reports Solar Open 2 at Terminal-Bench v2.1 **43.2%**, SWE-bench Verified 69.2% (OpenHands), BrowseComp 37.3%, GDPval-AA 31.4% — different harness, flagged
- No τ²-bench, OSWorld or AutomationBench figure published

Coding:

- LiveCodeBench v6: **92.4%** (card) · SWE-bench Verified: **70.4%** (card) · Codeforces / DeepSWE / SciCode: no verified public score found
- Version-over-version: vs Solar Open v1, LiveCodeBench 56.49 → 92.42 (+35.93p), GPQA 66.16 → 86.26, HMMT 68.94 → 93.94, IFBench 57.70 → 80.00

Long context:

- No MRCR / RULER measurement published for Solar Open 2.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench Hard 28.3%, MCP-Atlas 58.2%, APEX-Agents 16.6% and τ³-banking 19.6% are low-mid, with no Terminal-Bench 2.1, τ² or OSWorld figure to lift it.
- **Reasoning: 76/100.** GPQA 86.3%, MMLU-Pro 86.2%, AIME 2026 95.7%, HMMT 93.9%, IFBench 80.0% and a Korean average of 85.4 are strong, capped by HLE 28.8%, AA-LCR 62.3% and no independent measurement.
- **Context window: 88/100.** A documented 1M-token window (256K reasoning output), discounted because no long-context retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 78/100.** LiveCodeBench v6 92.4% is the standout number in this dataset and SWE-bench Verified 70.4% is solid, with no DeepSWE or SciCode figure to add.
- **Cost efficiency: 97/100.** Open weights with no per-token price; the only cost is your own 2–8 H200s.
- **Overall Score: 61/100.** Mean of the five quality dims = (48 + 76 + 88 + 15 + 78) / 5 = 61.0 → **61**. Best fit: Korean-language enterprise agents and self-hosted coding where 1M context and LiveCodeBench-class coding matter — but every number is vendor-published.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Upstage blog posts, Hugging Face model card and licence, arXiv technical report, BenchLM, models.dev, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Mini_4.md`, using the same headings.
