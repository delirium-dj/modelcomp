# GPT-5.6 Luna — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget tier of the GPT-5.6 family, released 2026-07-09 (launch post: openai.com/index/gpt-5-6/). $0.20/$1.20 per 1M tokens — the July budget flagship, now sandwiched between GPT-6 Luna (2026-09-22, $0.10/$0.50 — half its price) below and everything else above. Its defining measured trait: extreme speed (TTFT p95 ~0.00s, output p5 233 c/s — the fastest tracked in this session's dataset by an order of magnitude).
- **Provider / access:** OpenAI API (1 provider tracked by LLM Stats); playground mode chat.
- **Release / knowledge:** 2026-07-09; knowledge cutoff February 2026 (family-wide).
- **IDs:** `openai/gpt-5.6-luna`. Siblings: GPT-5.6 Sol ($5/$30), GPT-5.6 Terra ($2/$12). Successor: GPT-6 Luna at $0.10/$0.50 with a larger 1.1M context and May-2026 cutoff.
- **Context window:** 1.1M tokens in / 128K out (LLM Stats) — same class as the whole 5.6 family.
- **Modalities:** text + image input; text out.
- **Pricing (as of 2026-10-09):** $0.20 input / $1.20 output / $0.02 cached per 1M tokens (LLM Stats). TTFT p95 0.00s; output p5 233 c/s.
- **Architecture:** proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

> No public benchmark table for 5.6 Luna surfaced this session: it appears in none of the Sept-2026 vendor launch tables (Google/Anthropic/xAI/OpenAI all baseline Sol or Terra), and LLM Stats dataset tables are JS-gated. Only spec/latency data verified; nothing invented.

Agent / tool use:

- No verified public agent benchmark score found this session.

Reasoning / knowledge:

- No verified reasoning benchmark score found this session.
- LLM Stats most-compared list (GLM-5.1, Gemini 3 Pro, Qwen3.7 Max, GPT-5, MiMo-V2.5, Kimi K2.5) positions it against open-weights mid-tier models — comparison inference only, logged as context, not scored.

Coding:

- No verified coding benchmark score found this session.

Long context:

- 1.1M / 128K out (LLM Stats). No MRCR/RULER score — no retrieval score found.

Latency (the one measured differentiator):

- TTFT p95 **0.00s** and output p5 **233 c/s** via OpenAI over trailing 7 days (LLM Stats) — vs Sol 5.76s/26 c/s, Terra 4.37s/33 c/s, Claude Opus 5.5 8.47s/11 c/s.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Capability dims are conservative placements from verified specs, family positioning, and peer-set inference — flagged low-confidence pending any real benchmark row; a future findings file should replace them.

- **Tool use: 55/100 (low confidence).** Budget tier implies sub-Terra agency (Terra itself scores TB 4.0 23.6%); 1.1M context supports long agent loops; no verified rows — placed below the flash-class floor.
- **Reasoning: 58/100 (low confidence).** Feb-2026 cutoff is now two generations stale; GLM-5.1/Kimi-K2.5-class peer set implies mid-tier reasoning; no verified rows.
- **Context window: 100/100.** 1.1M / 128K verified — full top tier; no retrieval score published.
- **Multimodal: 65/100.** Text + image in, text out (+image band).
- **Coding: 55/100 (low confidence).** Budget-tier placement implies flash-baseline coding; no verified rows.
- **Cost efficiency: 97/100.** $0.20/$1.20/$0.02-cached is second-cheapest tracked frontier-lab pricing (only GPT-6 Luna and Haiku 5.5 at $0.10/$0.50 beat it); near-instant TTFT and 233 c/s make it the cheapest *fast* option for high-volume streaming workloads; docked for successor GPT-6 Luna halving its price.
- **Overall Score: 67/100.** (55 + 58 + 100 + 65 + 55) / 5 = 66.6 → 67. Best-fit (provisional): latency-critical, high-volume production (streaming UIs, classification, routing) where 233 c/s and 1.1M context matter more than peak capability; GPT-6 Luna supersedes it on price, so migrate unless the model ID is pinned.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats GPT-5.6 Luna page sole verified source: price/context/cutoff/latency/modality); scores are normalized 1–100 interpretations, not official vendor scores — capability dims explicitly low-confidence (no benchmark rows surfaced anywhere this session); revise when OpenAI launch-table data or an AA profile becomes readable.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.