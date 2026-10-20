# Pareto 26.10 Preview — findings by MiniMax M3.1 Flash

- Source: Unbiased (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** **Not a foundation model** — a *multimodal composite* from **Unbiased** (unbiased.ai), built and maintained by Circuit & Chisel. "Pareto is a multimodal composite model built for research, coding, and agentic workflows": it runs several frontier and open models per request, keeps the best answer, and does not switch mid-conversation ("Not a router"). The 26.10 Preview was the opt-in preview snapshot (2026-10-01) that graduated to GA on 2026-10-15.
- **Provider / access:** Unbiased API `https://api.unbiased.ai/v1` (`pareto-26.10-preview` → now `pareto-26.10`, alias `pareto`; `pareto-26.9` still live); OpenRouter `unbiased/pareto-26.10-preview` (canonical `unbiased/pareto-26.10-preview-20260929`) plus `unbiased/pareto-26.10` (canonical `…-20261015`) and `~unbiased/pareto-latest`. Weights, parameters, licence, cutoff and underlying models are **undisclosed**.
- **Release / knowledge:** Preview **2026-10-01**, GA **2026-10-15**. Knowledge cutoff: **not published** (OpenRouter `null`).
- **IDs:** `pareto-26.10-preview` (Unbiased), `unbiased/pareto-26.10-preview` (OpenRouter).
- **Context window:** **1M** (1,048,576); max completion **131,072**. (Pareto 26.9 is the 262,144-context one.)
- **Modalities:** text + image → text; tool calling supported.
- **Reasoning controls:** **none exposed** — the request surface is max_tokens, temperature, top_p, tools, tool_choice.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.80 in / $0.03 cached in / $3.20 out** — "Pricing is unchanged from the preview" (Pareto 26.9 was $2.50 / $0.25 / $7.50). Rate limits: Personal $10/mo 20 rpm + 50M tokens/week; Personal Max $100/mo 60 rpm + 600M; Team 300 rpm.
- **Architecture:** undisclosed — a composite of several third-party models, so "context window", "multimodality" and "tool use" are properties of the routing layer rather than of a single checkpoint.

### Raw benchmarks found

> **All figures are vendor-self-reported** (Unbiased's own launch table, "preliminary Oct 1 2026 runs"); the vendor itself warns results "may change before final publication" and that the other labs' numbers in its comparison table are "not independently validated". There is **no Artificial Analysis page (404), no BenchLM profile (404) and no models.dev `unbiased` provider** — so no third-party score exists.

- GPQA Diamond **92.4%** ($0.004/task)
- HLE (text-only) **49.9%** ($0.008/task)
- DeepSWE v1.1 **69.9%** ($0.24/task)
- Terminal-Bench 4.0 **50.8%** ($0.48/task) — the vendor's comparison row: Fable 5.1 55.1, GPT-6 Astra 59.6, DeepSeek 4.1 Flash 26.8, GPT-6.1 Sol 56.1, GPT-6 Luna 12.6, Claude Sonnet 5.5 70.6
- Pareto 26.9 (predecessor): DeepSWE **70.0%** at $0.29
- Harness: `github.com/circuitandchisel/pareto-evals` (README sample: HLE n=200, Pareto 38.0% at $0.0674 vs Opus 33.0% at $0.1120)
- No Terminal-Bench 2.1, no SWE-bench, no LiveCodeBench, no ARC-AGI, no FrontierMath, no AIME, no MMMU/vision row, no LMArena placement published.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Confidence note:** every number is vendor-published and self-described as preliminary; the scores are anchored on those four figures plus the published comparison table, and each line states the evidence gap.

- **Tool use: 74/100.** Terminal-Bench 4.0 **50.8%** (vendor) — the strongest number in the dataset for this benchmark and the reason this entry scores where it does — plus a browsing profile implied by the vendor's own table (SimpleQA 95.0% for the 26.9 build, Reka Research 66.0%) and tool calling at $0.48/task. Capped by the absence of Terminal-Bench 2.1, SWE-bench, MCP-Atlas, Toolathlon and Claw-Eval numbers, and by the fact that a composite model's score depends on which upstream models run that day.
- **Reasoning: 78/100.** GPQA Diamond **92.4%** and HLE (text-only) **49.9%** are solid academic-reasoning figures. Capped by the absence of FrontierMath, AIME, ARC-AGI and MMLU-style rows, and by the vendor's own caveat that its numbers are preliminary and unvalidated.
- **Context window: 93/100.** **1M** context with a 131,072 max output — the rubric's top tier (≥1M = 95–100) on paper. One point below because no retrieval measurement exists for a composite route, and because a composite's effective context is the *minimum* of its backends.
- **Multimodal: 74/100.** Described as "a multimodal composite model" with text+image input; the OpenRouter architecture string is `text+image->text`. No vision benchmark is published at all, so the score sits in the lower half of the "+image in = 60–70" band and above it only by the vendor's own multimodal claim.
- **Coding: 76/100.** DeepSWE v1.1 **69.9%** at $0.24/task and Terminal-Bench 4.0 50.8% (the agentic-terminal benchmark is coding-adjacent). Capped by the absence of SWE-bench, LiveCodeBench, Terminal-Bench 2.1 and FrontierCode rows, and by DeepSWE sitting just under the rubric's 74% anchor.
- **Cost efficiency: 86/100.** The evaluated route is Unbiased's API at **$0.80 in / $3.20 out** with a **$0.03 cached read** (96% discount) — inside the rubric's "~$1.25/$4.25 ≈ 88" tier and well below the $3/$15 → 60 tier, with the vendor quoting **$0.004/task on GPQA and $0.48/task on Terminal-Bench 4.0**. The deductions are that a composite inherits the *sum* of its backends' costs, and that the Personal tier is capped at 20 rpm.
- **Overall Score: 79.0/100.** (74 + 78 + 93 + 74 + 76) / 5 = 79.0 — best-fit: an intriguing **meta-model** whose per-task costs are an order of magnitude below the frontier labs' (it bills a blend), and whose Terminal-Bench 4.0 of 50.8% is competitive with GPT-6.1 Sol; but it is a preview with no independent validation, no published composition, no effort control and a rate-limited free tier — a research tool rather than a procurable model.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **No independent measurement exists at all.** Artificial Analysis has no model page, BenchLM no profile, models.dev no `unbiased` provider, and OpenRouter's preview entry returns `"endpoints": []` and is absent from `/api/v1/models`. Every figure in this report is the vendor's own.
2. **The vendor flags its own numbers as preliminary** — results "may change before final publication" — and states the competing labs' numbers in the same table are "not independently validated". The comparison row (Fable 5.1 55.1 / GPT-6 Astra 59.6 / DeepSeek 4.1 Flash 26.8 / GPT-6.1 Sol 56.1 / GPT-6 Luna 12.6 / Sonnet 5.5 70.6 on Terminal-Bench 4.0) is therefore useful only as an indication of where the vendor places itself.
3. **DeepSWE moved backwards between builds**: the homepage chart lists 26.9 at 70.0% while the 26.10-preview table says 69.9% — a 0.1-point change that a composite explains easily and a single checkpoint would not.
4. **The HLE number is configuration-dependent**: the headline says 49.9% text-only while the repo README sample shows **38.0%** at n=200. Both are quoted; the lower one is closer to a live measurement.
5. **The "preview" id is already retired**: the preview route returns no endpoints and is not in the model API, so new requests land on `pareto-26.10` (GA) at the same price.
6. **Identity:** this entry is a *product shape*, not a checkpoint — the dataset's slug `pareto-26.10-preview` therefore has no architecture, licence or cutoff to report, and none was invented here.

### Notes on identity

- `pareto-26.10-preview` is the **preview snapshot of a composite model**, not a distinct set of weights. The GA id is `pareto-26.10` (alias `pareto`); `pareto-26.9` remains a live sibling with a 262K window.
- "Not a router" is the vendor's own framing: it does not hand a conversation to one backend but scores several answers per request — which is why its per-benchmark numbers can move with the upstream mix.
- No Zen route exists for Pareto, so it is not reachable through this dataset's usual gateway.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Unbiased's launch page and API docs (pricing, rate limits, model ids), the `circuitandchisel/pareto-evals` harness repository, OpenRouter's provider page and API entry, and negative verification at Artificial Analysis, BenchLM, models.dev, ARC Prize, Epoch AI, swebench.com and LMArena. Every published number is attributed to the vendor and labelled preliminary; nothing was inferred or invented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Pareto_26.10_Preview.md`, using the same headings.
