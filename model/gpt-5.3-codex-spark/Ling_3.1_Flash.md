# GPT-5.3-Codex-Spark — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / GPT-5.3-Codex-Spark
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE NOTE:** OpenAI published **no absolute benchmark percentages** for this variant — only relative claims ("strong performance" on SWE-Bench Pro and Terminal-Bench 2.0 "in a fraction of the time" vs GPT-5.3-Codex; "more capable responses than GPT-5.1-Codex-mini"). The report scores those claims and the spec sheet; the evidence gap is flagged throughout. Identity is fully verified (official OpenAI announcement).

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's smaller, speed-optimized version of GPT-5.3-Codex — its first model designed for real-time coding, served on Cerebras wafer-scale silicon at 1,000+ tokens/second.
- **Provider / access:** OpenAI — research preview 2026-02-12 for ChatGPT Pro ($200/mo) users in the Codex app, Codex CLI, and VS Code extension; limited design-partner API (access expanding "over the coming weeks"); governed by a separate rate limit during preview. **Exempted from OpenAI's June 2026 Codex deprecations** (which retired GPT-5.2-Codex and the full GPT-5.3-Codex) — remained available.
- **Release / knowledge:** 2026-02-12. Knowledge cutoff not published for the Spark variant.
- **IDs:** `gpt-5.3-codex-spark`; folder `gpt-5.3-codex-spark`.
- **Context window:** 128,000 tokens; max output 32,000 (per ModelPriceLab — not confirmed by OpenAI).
- **Modalities:** Text in, text out.
- **Pricing (as of 2026-10):** No official per-token price published at launch (ChatGPT Pro gate; design-partner API). ModelPriceLab lists $1.75 / $14.00 per 1M input/output — identical to the standard GPT-5.3-Codex pricing ($1.75 / $0.175 cached / $14.00), so it is likely inherited rather than Spark-specific; treated as unverified.
- **Architecture:** Smaller, speed-optimized variant of GPT-5.3-Codex (parameter count not disclosed); first OpenAI production model on **Cerebras Wafer-Scale Engine 3 (WSE-3)** — the first milestone of the multi-billion-dollar Cerebras partnership announced January 2026; OpenAI's first production deployment on non-Nvidia silicon.

### Raw benchmarks found

**Vendor-reported (OpenAI, 2026-02-12):**
- No absolute SWE-Bench Pro / Terminal-Bench 2.0 percentages published for Spark. Relative claims: "demonstrates strong performance" on both while "accomplishing the tasks in a fraction of the time compared to GPT-5.3-Codex"; "more capable responses than GPT-5.1-Codex-mini"; for heavy multi-step reasoning, the larger Codex models still win on absolute quality.
- Latency engineering: >1,000 tokens/second on ultra-low-latency hardware; ~15x faster code generation (ZDNet); 80% reduction in client/server roundtrip overhead; 30% per-token overhead reduction; 50% time-to-first-token reduction (session initialization + streaming).
- Reference points (standard GPT-5.3-Codex, published): Terminal-Bench 2.0 **77.3%**, SWE-Bench Pro **56.8%**, OSWorld 64.7%, GDPval wins/ties 70.9%.

**Independent (low quality, flagged):**
- One third-party analysis estimates Terminal-Bench **~58.4%** for Spark (vs 77.3% standard), citing "significant reductions in terminal reasoning accuracy on complex tasks" (CometAPI, community benchmarks — small-sample, unverified).
- ModelPriceLab: "No benchmark data available."

## Scores

- **Tool use: 56/100.** Built for Codex app/CLI/VS Code agentic loops, but no tool-use benchmark (Tau-bench/MCP-Atlas/Toolathlon) was captured for the variant.
- **Reasoning: 56/100.** Positioned as lighter in reasoning depth than the full Codex; no GPQA/HLE/AIME captured; the only third-party estimate (~58.4% TB) is unverified.
- **Context window: 66/100.** 128K tokens — a hard ceiling vs 256K-1M rivals; no long-context retrieval benchmark captured.
- **Multimodal: 15/100.** Text-only at launch per captured sources.
- **Coding: 63/100.** "Strong performance" on SWE-Bench Pro / TB 2.0 at a fraction of the time, more capable than GPT-5.1-Codex-mini — credited, but with no absolute numbers and the unverified ~58.4% TB estimate pointing below the standard Codex's 77.3%.
- **Cost efficiency: 57/100.** No official $/M; ChatGPT Pro $200/mo gate; the listed $1.75/$14.00 is likely inherited from standard Codex (unverified) — expensive for a "smaller" model if accurate.
- **Overall Score: 51.2/100.** Mean of Tool use 56, Reasoning 56, Context window 66, Multimodal 15, Coding 63 = 51.2.

> **Gap vs folder average (65.6): −14.4.** The peer set appears to credit the OpenAI lineage and the "fraction of the time" claims; this report can only score what was published — zero absolute benchmarks, no official price, 128K text-only, and lighter reasoning depth by design. If OpenAI publishes Spark's SWE-Bench Pro / TB 2.0 rows or a per-token price, the score should be revisited.

## Notes

- Verification trail: OpenAI announcement "Introducing GPT-5.3-Codex-Spark" (2026-02-12; relative claims; Cerebras partnership; preview access; separate rate limit), OpenAI API docs (GPT-5.3-Codex pricing $1.75/$0.175/$14.00; reasoning effort settings low/medium/high/xhigh for the standard model), ZDNet (15x faster; 80%/30%/50% latency reductions; Pro-tier gate), AI/TLDR (specs; WSE-3; June 2026 deprecation exemption; 128K; text-only), ModelPriceLab (128K/32K; $1.75/$14.00 — likely inherited; "no benchmark data"), CometAPI (standard Codex benchmark rows; unverified ~58.4% TB estimate for Spark).
- Known conflicts: pricing $1.75/$14.00 (ModelPriceLab, likely inherited) vs none published by OpenAI; max output 32K (ModelPriceLab, unverified).
- Open questions: absolute SWE-Bench Pro / TB 2.0 rows for Spark; official per-token price; parameter count; whether reasoning-effort settings apply to Spark.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: OpenAI-published Spark benchmark rows, official pricing, independent replications.
