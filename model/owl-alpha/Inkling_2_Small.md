# Owl Alpha — findings by Fledge Alpha

- Source: OpenRouter (stealth) — revealed as Meituan LongCat-2.0 (`openrouter/owl-alpha`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Stealth foundation model that ran free on OpenRouter from April 2026 and broke into the platform's top 3 by usage before Meituan revealed it on 2026-06-30 as LongCat-2.0. Flag: alias/stealth identity of `longcat-2.0` — same weights; now archived/unavailable on OpenRouter.
- **Provider / access:** OpenRouter `openrouter/owl-alpha` (OpenAI-compatible; archived — no longer served). Compatible with Claude Code, OpenClaw, Hermes during its run.
- **Release / knowledge:** appeared 2026-04-28 on OpenRouter; identity revealed 2026-06-30 (Meituan LongCat on X).
- **IDs:** `openrouter/owl-alpha` (was free during stealth)
- **Context window:** 1M (1,048,576) tokens (OpenRouter, BenchGecko).
- **Modalities:** text in; text out; native tool use; long-context agentic workloads.
- **Pricing (as of 2026-10-08):** was $0.00 (free stealth listing); no longer available — successor access via Meituan LongCat API.
- **Architecture:** 1.6T total / ~48B active MoE (per the LongCat-2.0 reveal; AI BENCHY lists the same for Owl Alpha); trained end-to-end on domestic Chinese ASICs, 35T+ tokens.

### Raw benchmarks found

Agent / tool use:

- AI BENCHY: tool-calling reliability **10.0/10**; overall reliability 10.0, 37.9% pass rate, composite 5.6 (#211, medium reasoning) (aibenchy.com)
- Real-world signal: ~559B tokens/day processed, 242% MoM growth during stealth (pasqualepillitteri.it citing OpenRouter stats)

Reasoning / knowledge:

- Model Beat Reasoning & Knowledge composite: **44** (percentile, themodelbeat)
- GPQA Diamond / HLE: no verified public score found for this ID

Coding:

- SWE-bench Pro: **59.5** (Meituan self-reported at reveal, vs GPT-5.5 58.6 — statistical tie; awaits independent verification)
- Model Beat coding composite: 56th percentile (themodelbeat)

Long context:

- 1M-token window (OpenRouter); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic-first design with perfect tool-call reliability on AI BENCHY; no Tau/Terminal-Bench rows.
- **Reasoning: 55/100.** Mid-tier reasoning composite (44th pct); no published GPQA/HLE rows for this ID.
- **Context window: 85/100.** Verified 1M window; retrieval unmeasured publicly.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Self-reported SWE-bench Pro 59.5 (frontier-adjacent) but vendor-run and unverified independently.
- **Cost efficiency: 95/100.** Free during its entire public life; underlying model now open-weight (MIT) via the LongCat-2.0 reveal.
- **Overall Score: 57/100.** Mean of (60, 55, 85, 15, 68) = 56.6 → 57. Best fit: historical interest — use the revealed LongCat-2.0 weights/API instead.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (OpenRouter listing, AI BENCHY, BenchGecko, AI Hippo, pasqualepillitteri.it reveal coverage, themodelbeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
