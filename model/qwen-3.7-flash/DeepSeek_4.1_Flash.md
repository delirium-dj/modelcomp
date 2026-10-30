# Qwen 3.7 Flash — findings by DeepSeek 4.1 Flash

- Source: Alibaba/Qwen3.7-Flash (`qwen3.7-flash` / `qwen/qwen3.7-flash`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-research note: the prior self-exclusion (2026-10-23) recorded zero verified
> numbers for this ID. Independent harnesses have since published scored rows
> (GPQA Diamond, OTIS Mock AIME, FrontierMath v2, BenchGecko composite), so this
> file replaces that `.md.excluded` twin with real normalized scores.

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's low-cost, high-throughput vision-language tier of the Qwen 3.7 family (Jul 2026) — a proprietary multimodal reasoning model for agents, visual coding, search and computer interaction, accepting text, image and video input across a 1M-token window.
- **Provider / access:** Alibaba Cloud Model Studio / Bailian; 15 gateway routes per models.dev, incl. OpenRouter `qwen/qwen3.7-flash` and Vercel AI Gateway `alibaba/qwen3.7-flash`. OpenAI-compatible Chat Completions.
- **Release / knowledge:** Release 2026-07-15 (models.dev) / Jul 27, 2026 (Benchable); API snapshot `qwen3.7-flash-20260727`. Knowledge cutoff not disclosed.
- **IDs:** `qwen3.7-flash` (Alibaba), `qwen/qwen3.7-flash` (OpenRouter), `alibaba/qwen3.7-flash` (Vercel).
- **Context window:** 1,000,000 total; output limit 131,072 (models.dev) — several gateways cap output at 64–65K. Verified from models.dev + Alibaba.
- **Modalities:** text, image, video in; text out. Reasoning (thinking), tool calls, structured output, temperature.
- **Pricing (as of 2026-10-30):** $0.03 in / $0.13 out per 1M; cache read $0.006, cache write $0.038. Some Gateways list $0.20/$0.80 (Charm Hyper). Paid; no free tier found.
- **Architecture:** proprietary, closed weights; Benchable lists "3.7B (Rumoured)" parameters (unverified — not a confirmed spec).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Benchable "Email Classification (Baseline)": **99.0%** accuracy (86th pct), with **100%** success/reliability across Benches; cost 63rd pct, speed 25th pct (Benchable, OpenRouter/Alibaba endpoint).
- No Terminal-Bench / Tau / GDPval / SWE-Atlas row found for this ID.

Reasoning / knowledge:

- GPQA Diamond: **79.6%** (BenchGecko, knowledge category).
- OTIS Mock AIME 2024–2025: **86.7%** (BenchGecko, math).
- FrontierMath v2 (Tiers 1–3, private): **19.3%** (Epoch AI via BenchLM, 19.298%) vs **20.3%** (BenchGecko) — harness/snapshot gap.
- Chess Puzzles: **19.0%**; Mystery Game Puzzles: **6.4%** (BenchGecko).
- BenchGecko composite: **44.1 / 100, rank #186 of 323** (math 53.5, knowledge 49.3, general 6.4).
- No HLE / MMLU-Pro / AA Intelligence Index row found for this exact ID.

Coding:

- no verified public score found (no SWE-bench / LiveCodeBench / SciCode / Terminal-Bench row for `qwen3.7-flash`).

Long context:

- No MRCR / RULER / AA-LCR result at the advertised 1M window found; capacity only.

### Normalized scores (1–100)

- **Tool use: 60/100.** Function calling, structured output and reasoning are supported with an unusually clean execution record (Benchable 100% success, 99.0% email-classification accuracy), but there is no agentic harness row (no TB/Tau/GDPval), which caps it firmly in the mid band.
- **Reasoning: 66/100.** GPQA Diamond 79.6% sits at the top of the 60–80% mid band and OTIS Mock AIME 86.7% is strong; capped by FrontierMath v2 only ~19–20% and weak Chess/Mystery results (19.0 / 6.4).
- **Context window: 95/100.** A true 1,000,000-token window reaches the top tier; capped below 100 by a 131K (often 64K) output ceiling and no published retrieval-at-length measurement.
- **Multimodal: 82/100.** Native text + image + video input with text output lands in the video/PDF band (the family is built for visual coding and computer interaction); no audio input and no non-text generation.
- **Coding: 56/100.** No verified coding benchmark exists for this ID; scored conservatively as a small Flash tier with no SWE/LiveCodeBench evidence and no coding-specific claims.
- **Cost efficiency: 96/100.** $0.03/$0.13 per 1M — among the cheapest multimodal routes — fits the ~$0.10/$0.20 = 97–99 band; not 100 because it is a slow tier (speed 25th pct) and higher-context pricing rises on some gateways.
- **Overall Score: 72/100.** Half-up mean of (60 + 66 + 95 + 82 + 56) / 5 = 71.8 → 72. Best-fit: high-volume multimodal classification/search-and-vision agents where cost and 1M context matter far more than hard coding or frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-30
- Method: public internet research (models.dev, BenchLM, BenchGecko, Benchable, Alibaba Cloud Model Studio, CloudPrice/LMMarketCap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Sources

- models.dev — alibaba/qwen3.7-flash (1,000,000 ctx / 131,072 out, release 2026-07-15, 15 providers, $0.03/$0.13) — https://models.dev/models/alibaba/qwen3.7-flash/
- BenchLM — qwen3-7-flash (47.33 #114/1004; FrontierMath v2 Tiers 1–3 19.298%) — https://benchlm.ai/models/qwen3-7-flash
- BenchGecko — Qwen3.7 Flash (44.1 #186/323; GPQA 79.6, Mock AIME 86.7, FrontierMath 20.3, Chess 19.0, Mystery 6.4) — https://www.benchgecko.ai/model/qwen3-7-flash
- Benchable — Qwen: Qwen3.7 Flash (99.0% email classification, 100% reliability, cache $0.006/$0.038) — https://benchable.ai/models/qwen/qwen3.7-flash-20260727
- Alibaba Cloud Model Studio — qwen3.7-flash (native vision-language Flash series) — https://www.alibabacloud.com/help/en/model-studio/qwen3-7-flash
- LMMarketCap — Qwen3.7 Flash (Capabilities 83 / Pricing 100 / Context 95; composite 40) — https://lmmarketcap.com/model/qwen-qwen3-7-flash
