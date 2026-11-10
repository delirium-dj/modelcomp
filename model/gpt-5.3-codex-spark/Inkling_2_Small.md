# GPT-5.3 Codex Spark — findings by Inkling 2 Small

- Source: OpenAI (`gpt-5.3-codex-spark`; Cerebras WSE-3 serving)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark (hyphenated vendor style)
- **Short description:** OpenAI's ultra-low-latency research-preview coding model, released 2026-02-12 as a smaller sibling of GPT-5.3-Codex and the first OpenAI model served on Cerebras Wafer-Scale Engine 3 — built for near-instant interactive coding loops, not deep agentic work. Superseded in practice by GPT-5.6 family; API availability never shipped.
- **Provider / access:** ChatGPT Pro subscribers only (Codex app, Codex CLI, VS Code extension, Codex web) — select `gpt-5.3-codex-spark`; usage governed by a separate demand-sensitive limit; **not available in the API** (no per-token price published). Third-party observation: OpenAI's February 2026 announcement and The Rundown (reviewed 2026-08-28) still list it as an active Pro research preview; Atlas reports it was retired from Codex on 2026-09-14 — single-source claim, no OpenAI deprecation notice found (checked OpenAI docs changelog 2026-11-11); treat status as "preview, Pro-only, possibly retired."
- **Release / knowledge:** 2026-02-12 (research preview); knowledge cutoff not reported.
- **IDs:** `gpt-5.3-codex-spark` (Codex clients only; Zen route `opencode/gpt-5.3-codex-spark` listed at $1.75/$14.00 per folder metadata, $0.175 cached read)
- **Context window:** 128,000 total; 32,000 max output (folder metadata); Atlas/apxml agree on 131K-class; OpenAI docs confirm 128K
- **Modalities:** Text in, text out only — no image input; reasoning yes (lightweight, speed-tuned); tool calling via Codex harness
- **Pricing (as of 2026-11-11):** ChatGPT Pro (5x, $100/mo; 20x, $200/mo) — no separate token price; no API access; Zen route $1.75/$14.00/$0.175 cached (third-party).
- **Architecture:** Proprietary; pruned/distilled smaller sibling of GPT-5.3-Codex co-designed with Cerebras WSE-3 (wafer-scale, on-chip SRAM, ~1,000+ tokens/s vendor-claimed throughput; ~15× faster than GPT-5.3-Codex); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- SlopCodeBench — Problems Solved (official SlopCodeBench leaderboard, 2026-04-24): **0.0/100** — rank 2/15 (Atlas)
- SlopCodeBench — Erosion Mean (2026-04-24): **58.6/100** — rank 5/15 (Atlas)
- SlopCodeBench — % Cloned (2026-04-24): **8.6/100** — rank 6/15 (Atlas)
- SlopCodeBench — Verbosity Mean (2026-04-24): **35.7/100** — rank 13/15 (Atlas)
- SlopCodeBench — % AST-Grep (2026-04-24): **34.0/100** — rank 13/15 (Atlas)
- Terminal-Bench 2.0: no published score for this exact model — the circulating **77.3% is GPT-5.3-Codex's score** (OpenAI launch comparison; folder metadata and independent analysis agree); one analysis estimate **~58.4%** for Spark is reported but unverified against a primary leaderboard

Reasoning / knowledge:

- BuseyBench SVG (independent, 2026-11-10 snapshot): **3.0/10** — weak (Atlas)
- HLE / GPQA / MMLU-Pro: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (Atlas: too few in-capability benchmarks to estimate; unranked)

Coding:

- SWE-bench Pro: no published score for this model (the **75.1%** figure belongs to GPT-5.3-Codex)
- MazeBench (ASCII mode, 2026-07-19): **0.0%** (benchlm, one row)
- SlopCodeBench suite (independent, above): weak on solve rate, mid-pack on code hygiene

Long context:

- No MRCR/RULER retrieval measurement found; 128K vendor-documented

### Normalized scores (1–100)

- **Tool use: 34/100.** Codex-harness tool use exists, but SlopCodeBench shows ~0 solved problems (2/15) — the independent evidence points to weak end-to-end agentic completion, speed notwithstanding.
- **Reasoning: 36/100.** No GPQA/HLE/AA-Index data; BuseyBench SVG 3.0/10 is near the floor; the model is deliberately lightweight reasoning for latency.
- **Context window: 45/100.** 128K — adequate for single-file Codex work; no independent retrieval evidence; max 32K out is tight.
- **Multimodal: 15/100.** Text-only — floor per methodology.
- **Coding: 36/100.** Independent SlopCodeBench paints a weak picture (0.0 solved, best-in-class nothing), BuseyBench SVG 3.0/10; vendor "matches Codex at 15× speed" claim is contradicted by independent solve-rate data.
- **Cost efficiency: 38/100.** No API price; Pro-subscription-gated; unofficial Zen route $1.75/$14.00. Retired/qualifying use is narrow.
- **Overall Score: 33/100.** Mean of (34 + 36 + 45 + 15 + 36) / 5 = 166/5 = 33.2 → 33. A speed-first, near-instant inline-editing preview that independent benchmarks show is far weaker than the circulating launch numbers imply — use only for latency-critical small edits inside Codex with Pro; not a system-of-record coding tool.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-11
- Method: public internet research (OpenAI launch post/docs, independent SlopCodeBench + BuseyBench via Benchmark Atlas, trackers); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: latency-critical bounded inline edits in ChatGPT Pro; not for multi-file agentic work or API production.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.3-Codex-Spark (release post, 2026-02-12)](https://openai.com/index/introducing-gpt-5-3-codex-spark/)
  - [Benchmark Atlas — GPT-5.3-Codex-Spark (SlopCodeBench 0.0/100, BuseyBench 3.0/10)](https://atlas.kevinhu.io/models/gpt-5-3-codex-spark)
  - [CometAPI — GPT-5.3-Codex-Spark analysis (~58.4% TB estimate, 77.3% is GPT-5.3-Codex)](https://www.cometapi.com/gpt%E2%80%915-3-codex-spark-vs-gpt%E2%80%915-3-codex/)
  - [The Rundown AI — GPT-5.3-Codex-Spark review (Pro-only, no API, reviewed 2026-08-28)](https://www.therundown.ai/tools/gpt-5-3-codex-spark)
  - [apxml — GPT-5.3-Codex-Spark specs](https://apxml.com/models/gpt-53-codex-spark)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
