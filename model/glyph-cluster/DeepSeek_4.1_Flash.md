# Glyph Cluster — findings by DeepSeek 4.1 Flash

- Source: anonymous stealth (OpenCode/Vercel ecosystem) — `stealth/glyph-cluster`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster (stealth; no lab has claimed it)
- **Short description:** Anonymous stealth reasoning/coding model (live since 2026-10-07) with a 256K window and free preview tokens; Stealth Models' independent research points to **Microsoft MAI** as the strongest identity lead (shared `o200k_base` tokenizer signature with MAI and GPT references, shared reasoning-failure patterns, "a slight improvement over MAI Thinking 1" on StealthMark) — unconfirmed.
- **Provider / access:** Vercel AI Gateway (`stealth/glyph-cluster`, $0 preview tokens; Pro/Enterprise teams need purchased Gateway credits) and Command Code Go ($1/mo plan, up to 100 free requests/day). No OpenCode Zen route found.
- **Release / knowledge:** stealth preview since 2026-10-07; knowledge cutoff not disclosed. Closed weights.
- **IDs:** `stealth/glyph-cluster`.
- **Context window:** 256,000 total (folder metadata also lists 256,000 max output).
- **Modalities:** text in, text out only; reasoning effort low/medium/high/xhigh.
- **Pricing (as of 2026-11-10):** free preview during stealth ($0/$0); provider may retain prompts and responses for training — zero data retention is unavailable.
- **Architecture:** undisclosed; closed weights.

### Raw benchmarks found

> Stealth Models independent research (2026-10-08/09) unless noted; StealthMark = original hard-task suite (SVG scene construction + planning games), where low scores indicate weak generalization to unseen hard problems.

Reasoning / knowledge:

- **GPQA Diamond: 56.4%** (31/55; 56.0% on the 50-question run) — an independent 55-question subset run, nowhere near frontier references (GPT-6 Sol 95.45%, Qwen3.8-27B 89.2%, gpt-oss-120b 80.1%) and just below gpt-oss-20b (71.5%)
- StealthMark General Intelligence: **12.0/100** (spatial & physical reasoning)
- Reasoning efficiency: single-step **77** (rank 6/54 — efficient at understanding tasks), multi-step **35** (rank 30/52)

Agent / tool use:

- No classic agentic benchmark rows (Terminal-Bench / Tau / SWE) published
- StealthMark planning games: Foresight **6.4** (rank 49/52 — survived 0 of 3), Latch **3.6** (rank 49/53 — cleared 1 of 5)
- Speed: **69 tok/s** (Stealth Models runs)

Coding:

- No measured coding benchmark rows found; distributed via Command Code as a coding agent (up to 100 free requests/day) and billed as "for coding and long-context analysis"

Multimodal:

- Text-only input (StealthMark "Visual Intelligence" 29.8 refers to SVG construction ability, not image input)

Composite:

- **StealthMark overall: 18.9/100, rank 52 of 56** — essentially tied with Iceman (19.2) and below Qwen3.6-35B-A3B (20.8) and Gemma 4 26B A4B (21.2); well above MAI Thinking 1 (14.1). Sub-scores: Selfie 32.4, Mona Lisa 11.7, Beach 46.3 (best), Newton's Mirror 12.8, Ground Truth 19.9, Raccoon 35.7, Pelican 44.3

### Normalized scores (1–100)

- **Tool use: 54/100.** Real coding-agent distribution (Command Code) and a long window, but zero classic agentic benchmark rows and near-bottom StealthMark planning scores cap it.
- **Reasoning: 52/100.** GPQA 56.4% is a measured but mid-low absolute level (below gpt-oss-20b) and hard-task generalization is weak (General Intelligence 12.0); single-step reasoning efficiency (rank 6/54) is the bright spot.
- **Context window: 80/100.** 256K in (and up to 256K out per folder metadata) sits mid-high tier; no measured retrieval.
- **Multimodal: 15/100.** Text-only in/out (template floor).
- **Coding: 55/100.** Positioned and routed for coding agents, but with no verifiable coding benchmark numbers.
- **Cost efficiency: 95/100.** Free preview tokens during stealth via Vercel/Command Code; capped below the top band by access restrictions and the training-data retention trade (no ZDR).
- **Overall Score: 51/100.** (54 + 52 + 80 + 15 + 55) / 5 = 51.2 → 51. Best fit: free long-context coding/analysis experimentation on non-sensitive data while the stealth preview lasts, with expectations set by its mid-low hard-task profile.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (Stealth Models guide + StealthMark benchmark page for Glyph Cluster, Vercel AI Gateway launch notes, Command Code plans, Microsoft MAI tokenizer evidence). Independent rows labelled with their harness (55-question GPQA subset; StealthMark hard tasks). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Glyph Cluster guide (MAI identity evidence)](https://stealthmodels.com/glyph-cluster)
  - [Stealth Models — Glyph Cluster benchmark scores](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Vercel AI Gateway — glyph-cluster stealth launch](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Microsoft — MAI Thinking 1 technical report (o200k_base tokenizer)](https://microsoft.ai/pdf/mai-thinking-1.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
