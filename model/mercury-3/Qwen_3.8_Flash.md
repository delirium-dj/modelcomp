# Mercury 3 — findings by Qwen 3.8 Flash

- Source: Inception Labs (`mercury-3`; curated id `opencode/mercury-3`), cross-checked against the Inception "Diffusion at Scale: Introducing Mercury 3" launch post (inceptionlabs.ai) and TheNextWeb coverage (2026-10-20)
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship **diffusion LLM (dLLM)** — billed as "the most capable diffusion LLM released to date," scaled >40× beyond Mercury 1 while keeping 1,000+ tokens/sec. It targets the **speed-optimized frontier tier**, benchmarked as on-par-or-better than **GPT-6 Luna** and **Claude Haiku 5.5** at 4–8× their speed. Not a top-of-leaderboard reasoning model; a fast/heavy-duty production dLLM.
- **Meta discrepancy flag:** the curated `model/mercury-3/meta.json` is **`scaffolded: true`** and asserts "128K total / Text in-out / Standard pricing." First-party evidence overrides this: **1M context**, and it is a real, shipping model — so this entry is scored, not excluded.
- **Provider / access:** Inception API Platform, OpenRouter, Baseten, Vercel; OpenAI-API compatible. Also anchors the Mercury Voice and Mercury Decide product line.
- **Release / knowledge:** 2026-10-19 (launch post; TNW coverage 2026-10-20).
- **IDs:** `inception/mercury-3`; siblings `mercury-2`, `mercury-2.5`.
- **Context window:** **1,000,000 tokens** (up from 260K in Mercury 2.5) — first-party launch spec.
- **Modalities:** **text in / text out**; reasoning yes; tool calls yes (browser/agent harness use). No native image/audio/video (Mercury **Voice** is a separate product SKU).
- **Pricing (as of 2026-11-03):** **$0.20/M input, $0.70/M output** (launch promo 50% off: $0.10/$0.35; cached input 90% off) — budget tier.
- **Architecture:** proprietary text-diffusion LLM, scaled >40× in parameters vs Mercury 1, running ~1,068 tok/s on NVIDIA GPUs.

### Raw benchmarks found

> First-party launch figures; independent Artificial Analysis row for `mercury-3` was **not yet published** as of the research date (model shipped 2026-10-19), so cross-vendor positioning is via Inception's stated head-to-heads.

Agent / tool use:

- Mind2Web (production web-agent harness, 50 live navigation tasks): **50% completed** — "significantly more than GPT-6.1-Sol" at equal token/step volume (Inception/TinyFish testimonial).

Reasoning / knowledge:

- Positioning: "on par or better than frontier speed-optimized models like **GPT-6 Luna** and **Claude Haiku 5.5**"; intelligence 3× Mercury 1 → Mercury 2 → 3 progression.
- GPQA / HLE / AA Intelligence Index absolute for `mercury-3`: **no verified independent row yet published**.

Coding:

- Data-engineering / coding use cases cited by partners; **no SWE-bench Verified row published** for this ID.

Long context:

- 1M-token window; **no MRCR/RULER retrieval score yet published**.

### Normalized scores (1–100)

- **Tool use: 55/100.** 50% on live Mind2Web browser tasks (beating GPT-6.1-Sol at matched cost) plus heavy agent/testimonials show real agentic competence for a fast-tier model; absent τ-bench/MCP absolutes and a top frontier agent index keep it mid-band.
- **Reasoning: 45/100.** "On par or better than GPT-6 Luna / Claude Haiku 5.5" places it in the competent speed-optimized tier, clearly above Mercury 2 (AA 11) but well below true frontier reasoning (94–96% GPQA leaders); no independent index row yet.
- **Context window: 85/100.** 1M tokens is top-tier raw capacity (up from 260K); scored below maximal because no long-context retrieval benchmark has been published for it.
- **Multimodal: 15/100.** Text-only dLLM in this SKU (voice is a separate product); the text-only floor applies.
- **Coding: 50/100.** Real coding/data-engineering production use and Luna-tier parity, but no SWE-bench/Terminal-Bench absolutes published for this exact ID; mid-band fast-tier coder.
- **Cost efficiency: 88/100.** $0.20/$0.70 per 1M (promo $0.10/$0.35, cached −90%) at 1,068 tok/s is exceptional price-performance.
- **Overall Score: 50.0/100.** Half-up mean of the five quality dims (55+45+85+15+50)/5 = 50.0. Best fit: high-throughput agents, real-time search/tutoring/support where 1M context and sub-second latency matter more than maximal reasoning depth; a large step up from Mercury 2.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03
- Method: public internet research — Inception Labs "Diffusion at Scale: Introducing Mercury 3" launch post (1M ctx from 260K, $0.20/$0.70 with 50%-off launch pricing, 1,068 tok/s, Mind2Web 50% vs GPT-6.1-Sol, parity vs GPT-6 Luna / Claude Haiku 5.5), TheNextWeb "Inception's Mercury 3 beats GPT-6 Luna and Haiku 5.5" (2026-10-20), and the Mercury-3 LinkedIn launch summary. Scores are normalized 1–100 interpretations, not official vendor scores. No independent Artificial Analysis `mercury-3` index row existed at research time, so quality dims are triangulated from first-party head-to-heads and flagged; the scaffolded `meta.json` (128K) was overridden with the first-party 1M spec.
- Revisit trigger: an Artificial Analysis / BenchLM Intelligence Index row or first-party GPQA/SWE-bench absolutes for `mercury-3`.
- Future sources: add a new file next to this one, e.g. `Mercury_Voice.md`, using the same headings.
