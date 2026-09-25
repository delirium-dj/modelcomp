# Grok 4.20 — findings by GLM 5.3

- Source: xAI / SpaceXAI (`grok-4.20` variants: `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Standard multi-agent configuration; Heavy tier scales to 16 agents)
- **Short description:** xAI's flagship multi-agent LLM (beta 2026-02-17, full release 2026-03-10): a native four-agent council — Grok (coordinator), Harper (research/X firehose), Benjamin (math/code), Lucas (synthesis/creativity) — debating in parallel on shared weights at inference time. Top use case: real-time-data long-context work (2M window, live X grounding) at flagship-leading throughput.
- **Provider / access:** xAI API; grok.com and Grok apps; OpenAI-compatible routes via gateways (AI/ML API `x-ai/grok-4-20-0309-*`); OpenRouter listings under xAI/SpaceXAI.
- **Release / knowledge:** beta 2026-02-17; GA + API 2026-03-10 (registry snapshots 0309; some aggregators date listings 2026-03-31); knowledge cutoff November 2024, extended in practice by live X data (~68M English posts/day at millisecond latency); weekly iterative updates (Beta 2, April 2026: better instruction following, LaTeX, multi-image, lower hallucination).
- **IDs:** `grok-4.20-0309-reasoning`, `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309` (Heavy = 16 agents).
- **Context window:** 2,000,000 tokens — the largest among current frontier flagships; all four agents share the window.
- **Modalities:** text and image input; text output (image generation handled by separate Grok Imagine); reasoning mode emits visible, billed chain-of-thought; non-reasoning mode for latency/throughput.
- **Pricing (as of 2026-09-25):** xAI direct from $1.25 in / $2.50 out per 1M (aggregator-listed; Multi-Agent variant same rates); gateway routes higher (AI/ML API: $2.60/$7.80); cached input ~85% off; server-side tools (web search, X search, code execution, file attachments) billed per call on top.
- **Architecture:** proprietary MoE, reported ~3 trillion total parameters (third-party report, not officially confirmed); pre-training-scale RL; shared-weight agent replicas with shared KV caching keeping multi-agent overhead at ~1.5–2.5× a single call. Output speed ~235 tok/s (fastest flagship per April 2026 data).

### Raw benchmarks found

> Mix of third-party review/aggregator data (xAI publishes no per-model benchmark table); Arena Elo and HLE are April-2026 snapshots.

Agent / tool use:

- Native 4-agent parallel inference with coordinator-synthesized debate (architecture verified across sources; overhead 1.5–2.5× a single call)
- Server-side tools: code interpreter, file search, web search, X search (billed per call)
- Alpha Arena stock-trading simulation: early checkpoint **topped the field with ~10–12% returns** using live X sentiment
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- HLE: **50.7%** — Grok 4 series leads the pack on Humanity's Last Exam (third-party comparison table)
- GPQA Diamond: **~88%** (vs GPT-5.4 92.8%, Claude Opus 4.6 91%+, Gemini 3.1 Pro 94.3%, DeepSeek V4 ~89%)
- Chatbot Arena Elo: **~1493** (April 2026; neck-and-neck with Gemini 3.1 Pro, below GPT-5.4 ~1510 and Opus 4.6 ~1504)
- LCR / MLCR / CritPt / AA Intelligence Index: no verified public score found
- Hallucination: "lowest hallucination rate on the market with strict prompt adherence" (vendor-adjacent claim; Beta 2 notes further reductions)

Coding:

- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: no verified public score found for this ID (reviewers note xAI has not published per-model coding benchmarks)
- Positioning: whole-repository refactoring via the 2M window with reviewable reasoning traces (qualitative use case, no measured row)

Long context:

- No long-context retrieval reported (no MRCR/RULER rows); 2M is a capacity spec — the largest among frontier flagships

### Normalized scores (1–100)

> Flagship with strong third-party coverage but no official per-model benchmark table; per-row provenance above.

- **Tool use: 75/100.** The native 4-agent council, server-side tool suite, and a first-place Alpha Arena trading finish are genuine agentic strengths; absence of Terminal-Bench/Tau3/GDPval rows keeps it below the top band.
- **Reasoning: 85/100.** HLE 50.7% (series-leading, well above the 40% frontier threshold) and GPQA ~88% just under frontier, with visible chain-of-thought for auditability; arena Elo 1493 is competitive but not #1.
- **Context window: 96/100.** 2,000,000 tokens = ≥1M tier, largest among current flagships; no measured retrieval quality, so not 100.
- **Multimodal: 65/100.** Text+image in, text out (60–70 band); multi-image improvements in Beta 2; no video/audio input.
- **Coding: 68/100.** Whole-repository analysis via 2M context and the Benjamin logic agent are real workflow strengths, but xAI publishes no SWE-bench/LiveCodeBench rows for this ID — mid-band provisional.
- **Cost efficiency: 88/100.** Direct rates from $1.25/$2.50 per 1M are cheap for the frontier tier (Grok 4.7 lists $2/$6; Sol $4/$20), with ~85% cached-input discounts and 235 tok/s throughput; gateway routes cost more.
- **Overall Score: 78/100.** (75 + 85 + 96 + 65 + 68) / 5 = 77.8 → 78. Best-fit: the long-context, live-data workhorse — real-time X-grounded analysis, whole-repo refactors, and throughput-sensitive flagship work at the cheapest frontier rates; pure coding-benchmark seekers should verify with their own evals.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (third-party reviews, aggregator listings, Arena snapshots); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
