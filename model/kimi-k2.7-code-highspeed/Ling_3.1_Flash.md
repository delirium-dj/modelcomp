# Kimi K2.7 Code Highspeed — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Kimi K2.7 Code Highspeed
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **IDENTITY NOTE (read first):** Kimi K2.7 Code Highspeed is the same model as Kimi K2.7 Code (identical open weights, `moonshotai/Kimi-K2.7-Code`, Modified MIT) served through Moonshot's Highspeed tier at exactly 2× the base price for roughly 180 tok/s (up to ~260 in short runs). Every quality benchmark is therefore identical to the `kimi-k2.7-code` folder's report; only pricing and throughput differ. This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing").

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Highspeed serving tier of Moonshot AI's open-source coding agentic model — same 1T/32B MoE weights as Kimi K2.7 Code, optimized for latency-sensitive interactive coding agents.
- **Provider / access:** Moonshot AI — pay-per-token API at platform.moonshot.ai (model id `kimi-k2.7-code-highspeed`); open weights self-hostable under Modified MIT (self-hosting removes the speed premium entirely).
- **Release / knowledge:** 2026-06-13 (same checkpoint as Kimi K2.7 Code). Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/kimi-k2.7-code-highspeed` (repo meta.json, stale stub); `kimi-k2.7-code-highspeed` (Moonshot API); `moonshotai/Kimi-K2.7-Code` (HF weights).
- **Context window:** 262,144 tokens (256K native).
- **Modalities:** Text, image, video in (video experimental, official API only); text out. Forced thinking with `preserve_thinking` always on; interleaved thinking and multi-step tool calls. 400M MoonViT vision encoder.
- **Pricing (as of 2026-10):** $1.90 input / $8.00 output per 1M, cache hit $0.38 — exactly double the standard tier ($0.95/$4.00, $0.19 cache) on every billed line; ~180 tok/s (up to ~260 short-context).
- **Architecture:** Sparse MoE — 1T total / 32B active, 61 layers (1 dense), 384 experts (8 selected per token + 1 shared), MLA attention, SwiGLU, 160K vocabulary; native INT4 quantization.

### Raw benchmarks found

Identical to Kimi K2.7 Code (same weights; vendor card runs via Kimi Code CLI, thinking enabled, temperature 1.0, top-p 0.95, 262,144-token context; GPT-5.5 in Codex xhigh; Claude Opus 4.8 in Claude Code xhigh):

Coding:

- Kimi Code Bench v2: **62.0%** (K2.6: 50.9%; GPT-5.5: 69.0%; Opus 4.8: 67.4%).
- Program Bench: **53.6%** (K2.6: 48.3%; GPT-5.5: 69.1%; Opus 4.8: 63.8%).
- MLS Bench Lite: **35.1%** (K2.6: 26.7%; GPT-5.5: 35.5%; Opus 4.8: 42.8%).

Agentic / tool use:

- Kimi Claw 24/7 Bench: **46.9%** (K2.6: 42.9%; GPT-5.5: 52.8%; Opus 4.8: 50.4%).
- MCP Atlas: **76.0%** (K2.6: 69.4%; GPT-5.5: 79.4%; Opus 4.8: 81.3%).
- MCP Mark Verified: **81.1%** (K2.6: 72.8%; GPT-5.5: 92.9%; Opus 4.8: 76.4%).

Third-party (Artificial Analysis via aggregator listings; not vendor-confirmed):

- GPQA Diamond (thinking, no tools): **89.6%**; HLE (thinking, no tools, text-only): **35.0%**; AA Intelligence Index **25.8**; Terminal-Bench **44.7%**; LiveCodeBench **82.1%**; SciCode **47.8%**.
- Full benchmark table, harness details and conflicting aggregator figures: see the `kimi-k2.7-code` folder's `Ling_3.1_Flash.md` (same model).

### Normalized scores (1–100)

- **Tool use: 71/100.** MCP Mark Verified 81.1% (beats Opus 4.8's 76.4%) and MCP Atlas 76.0% are near-frontier; Kimi Claw 24/7 46.9% and Terminal-Bench 44.7% sit mid-pack.
- **Reasoning: 68/100.** GPQA Diamond 89.6% (AA, no tools) is frontier-tier; HLE 35.0% (AA, no tools) trails the 40%+ frontier band.
- **Context window: 74/100.** 262,144-token native context; no published 256K-point retrieval figure.
- **Multimodal: 75/100.** Native text/image/video input via a 400M MoonViT encoder (video experimental); no public multimodal benchmark scores for this checkpoint.
- **Coding: 70/100.** Kimi Code Bench v2 62.0%, Program Bench 53.6% and MLS Bench Lite 35.1% all trail GPT-5.5 and Opus 4.8; aggregator-listed LiveCodeBench 82.1% is unverified by the vendor.
- **Cost efficiency: 82/100.** $1.90/$8.00 per 1M (cache $0.38) is a 2× premium over the base tier for the same weights — worth it only when latency is the bottleneck; self-hosting the open Modified MIT weights at base-tier economics is the zero-premium alternative.
- **Overall Score: 71.6/100.** Mean of the five quality dimensions — identical to Kimi K2.7 Code, as expected for a serving-tier variant of the same checkpoint.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
