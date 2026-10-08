# Claude Fable 5 — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available Mythos-class model — the tier above Opus, built for long-horizon agentic work and software engineering. Same weights as restricted Claude Mythos 5; Fable safeguards silently fall back to Opus 4.8 on flagged queries (<5% of sessions).
- **Provider / access:** Anthropic API + OpenCode Zen `opencode/claude-fable-5` (Zen gateway; native Anthropic Messages API at api.anthropic.com).
- **Release / knowledge:** 2026-06-09 release (Anthropic launch post); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-fable-5` (state explicitly: no Free ID exists on Zen — paid only).
- **Context window:** 1,000,000 total tokens; 128,000 max output — verified via repo meta.json and Artificial Analysis model page (same 1M window as Opus 4.8).
- **Modalities:** Text + image in; text out; reasoning yes (adaptive reasoning, max-effort mode); tool calls yes (agentic coding / computer use); JSON / structured output yes.
- **Pricing (as of 2026-10-08):** $10 input / $50 output per 1M tokens; cache write $12.50 / cache read $1.00 per 1M; 2x Opus 4.8 price. Paid only. Included in Pro/Max/Team/Enterprise only through 2026-06-22 (2x Opus usage), credits required after.
- **Architecture:** Proprietary (Anthropic Mythos-class; size undisclosed — AA notes accuracy/size correlation suggests larger than previous public Claude models).

### Raw benchmarks found

Agent / tool use:

- SWE-bench Pro (**agentic coding**): **80.3%** (Anthropic 2026-06-09 table via Vellum — top tested; vs Mythos Preview 77.8%, Opus 4.8 69.2%, GPT-5.5 58.6%, Gemini 3.1 Pro 54.2%)
- Terminal-Bench Hard (**agentic coding**): frontier/top-tier per Artificial Analysis Index write-up (exact pass rate not published — no verified public percentage found)
- Tau2-bench Telecom (**tool use**): frontier/top-tier per Artificial Analysis (exact percentage not published — no verified public percentage found)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **Elo 1932** (Artificial Analysis June 2026 — jump over prior leader Opus 4.8)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- GDP.pdf (**vision, no tools**): **29.8%** (Anthropic via Vellum — leads field; vs GPT-5.5 24.9%)
- Stripe field test: 50M-line Ruby migration in 1 day vs ~2 months by full team (Anthropic launch post)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (AA: ~8% of Index tasks, mostly GPQA / Omniscience / HLE science questions, fall back to Opus 4.8 — no standalone GPQA number)
- HLE: **53%** (Artificial Analysis with tools — 7+ pts ahead of Opus 4.8 max; 9% tasks fallback to Opus 4.8; full run ~$2.2k incl. fallback, highest of any model AA ran)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **64.9 / #1** (AA June 2026 — ~5 pts ahead of closest non-Anthropic GPT-5.5; top score on 5 of 10 sub-benchmarks; tested max effort + Opus 4.8 fallback)
- Omniscience Accuracy / Hallucination Rate: **score 40, accuracy-led** (AA Omniscience — +7 over prior leader Gemini 3.1 Pro Preview via accuracy; 9% fallback to Opus 4.8)
- Hebbia Finance Benchmark: highest of any model per Anthropic (exact number unpublished — lead in document reasoning, chart/table interpretation, problem solving)

Coding:

- SWE-bench Verified / SWE-Pro: **95.0% Verified (Vals via Kingy 2026-08-22) / 80.3% Pro (Anthropic)** — dual SOTA stack
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found** (qualitative: 10x faster drug design, corroborated novel hypothesis — Vellum launch summary)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **FrontierCode 29.3% Diamond** (Cognition via Anthropic — highest frontier, 2x Opus 4.8 13.4%, vs GPT-5.5 5.7%); **CursorBench 3.1 72.9% max effort** (via Kingy; Cursor team calls it SOTA)

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 1M total (same as Opus 4.8 per AA); memory anecdote: cleared Pokemon FireRed start-to-finish from raw screenshots, no maps (Anthropic via Vellum).

### Normalized scores (1–100)

- **Tool use: 95/100.** GDPval-AA Elo 1932 jump plus frontier Tau2/TB-Hard plus Stripe 50M-line migration; capped as exact Tau/TB-Hard pcts unpublished and 5–8pct sessions fall back to Opus 4.8.
- **Reasoning: 96/100.** HLE 53pct (+7), Omniscience 40 (+7 accuracy-led), Index 64.9 #1 with 5/10 leads; capped by 8–9pct science fallback and no standalone GPQA/CritPt.
- **Context window: 100/100.** 1M total / 128K output verified (top tier mapping).
- **Multimodal: 78/100.** Image-in vision near-SOTA (GDP.pdf 29.8pct lead, screenshot-only rebuild/game clear); capped at text-out only, no video/audio generation.
- **Coding: 97/100.** SWE-Pro 80.3pct SOTA, SWE-Verified 95.0pct, FrontierCode Diamond 29.3pct (2x Opus 4.8), CursorBench 72.9pct SOTA; capped only as LiveCodeBench/SciCode exacts unpublished.
- **Cost efficiency: 30/100.** $10/$50 paid-only (2x Opus 4.8, cache read $1), credits after 2026-06-22; HLE run ~$2.2k — elite capability at flagship price.
- **Overall Score: 93/100.** Mean of five non-cost dims (95+96+100+78+97)/5 = 93.2 → 93; best for long-horizon agentic coding where SWE-Pro/FrontierCode lead outweighs $10/$50 price.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (Anthropic launch post 2026-06-09, AA Index article + model page, Vellum breakdown, Kingy explainer with 2026-08-22 refresh); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
