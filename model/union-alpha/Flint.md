# Union Alpha — findings by Flint

- Source: Unbiased / Circuit & Chisel (`union-alpha` — stealth alias of Pareto 26.9)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth alias of **Pareto 26.9**)
- **Short description:** Unbiased's (Circuit & Chisel) composite blend model for research, coding, and agentic workflows: per request it selects frontier and open models, runs them, checks their work, and synthesizes one answer behind a single model-like API. It is a blend/composite rather than a single checkpoint, and the composition can change between releases. It is filed under the `union-alpha` composite identity; the successor **Pareto 26.10** is a separate tracked model (`pareto-26.10-preview`).
- **Provider / access:** Developed and operated by Unbiased (Circuit & Chisel). Served via the Unbiased API (`https://api.unbiased.ai/v1`, OpenAI-compatible chat/completions endpoint, model id `pareto`; same key on the Anthropic-format `/v1/messages` endpoint), OpenRouter (`unbiased/pareto`, curated id `unbiased/pareto-26.9`; historical stealth id `stealth/union-alpha`), and during the free preview via OpenCode Zen (`opencode/union-alpha`) and Cloudflare. API surface: Chat Completions confirmed (Unbiased quickstart: `curl https://api.unbiased.ai/v1/chat/completions` with `{"model": "pareto", ...}`); Responses API not confirmed.
- **Release / knowledge:** Stealth listing on OpenRouter / OpenCode Zen / Cloudflare on 2026-09-16; revealed as **Pareto 26.9** on 2026-09-18; Unbiased model-card run dates: Pareto 26.9 (2026-09-20), Pareto 26.10 (2026-10-01). Knowledge cutoff: not disclosed in reviewed sources.
- **IDs:** `stealth/union-alpha` (OpenRouter stealth id, delisted after the free preview ended); `opencode/union-alpha` (OpenCode Zen, delisted); `unbiased/pareto` (OpenRouter canonical id; curated `unbiased/pareto-26.9`); `pareto` (Unbiased API model id).
- **Context window:** 262,144 tokens input / 131,072 tokens output (262K / 131K) — verified against the OpenRouter listing, the Unbiased model card, kingy.ai, Chase AI, Writingmate, and NanoGPT. Pareto 26.10 raised the window to 1,048,576 input / 131,072 output. Verification note: provider listings + model card; no independent composite-specific long-context retrieval figure.
- **Modalities:** Text in + image in → text out; reasoning via blend/synthesis; tool calls accepted (tool parameters accepted); audio / video / PDF input not documented; JSON mode not verified.
- **Pricing (as of 2026-10-28):** Free stealth preview via OpenCode Zen / OpenRouter (free window closed after demand surge); paid Pareto 26.9 route: $2.50/M input, $0.25/M cached input, $7.50/M output; successor Pareto 26.10: $0.80/M input, $0.03/M cached, $3.20/M output, 1M context; Unbiased personal $10/mo (50M tokens/week), Personal Max $100 (600M); pay-as-you-go credits for teams. Zero-data-retention applies to API traffic designated ZDR; OpenRouter and Cloudflare traffic ran on the ZDR tier during the preview; Chat / Personal plans are not ZDR.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **70.0%** (Pareto 26.9; Unbiased model card run 2026-09-20; 30-task slice; $0.29/task) — source: unbiased.ai/model-card. Attribution resolved: the widely circulated "Union Alpha ≈ 73–74% on DeepSWE" was a misattribution — **GPT-6 Astra = 74.0%** on that run; Pareto 26.9 = 70.0%, Pareto 26.10 = 69.9%.
- Terminal-Bench 4.0: **51.0%** (Pareto 26.9; Unbiased model card; ≈50.8% for 26.10) — source: unbiased.ai/model-card; OpenCode's launch chart ~52% (task-cost figure ~$1.60 unverified). GPT-6 Astra 59.6% (26.10).
- Claw-Eval / ClawProBench, GDPval-AA, OSWorld / AutomationBench, MCP-Atlas Codebase QnA, BFCL, Toolathlon: **no verified public score found** — neutral third-party harnesses (Artificial Analysis, Vals AI, Epoch AI, BenchLM) do not track opaque composites; AA has no `union-alpha` / `pareto-26.9` page (404); no Vals row; BenchLM marks Pareto unranked and blocklists it from weighted ranking.

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (Union Alpha preview snapshot, third-party tester report, 2026-09-17) / **92.4%** (Pareto 26.10, Unbiased model card, 2026-10-01; $0.004/task) — sources: unbiased.ai/model-card, third-party tester reports.
- Humanity's Last Exam (text-only, no tools): **49.0%** (Pareto 26.9; Unbiased) / **49.9%** (26.10) — source: unbiased.ai/model-card.
- ArXivMath: **88%** (Pareto 26.9; Unbiased) — source: unbiased.ai/model-card.
- MMMU-Pro: **78%** (Pareto 26.9; Unbiased; best verified comparator: Gemini 3.5 Flash 83.6%) — source: unbiased.ai/model-card / BenchLM.
- LiveBench: **76.1** (#26 / 58 evaluated entries) — Union Alpha preview snapshot, 2026-09-17 (third-party tester report); LiveBench 2.0 released 2026-10-14.
- ARI Bench (recursive AI improvement): **32/100** (Union Alpha preview, 1/3 seeds) — third-party tester report (aribench.com).

Coding:

- DeepSWE v1.1: **70.0%** (Pareto 26.9; Unbiased model card run 2026-09-20; 30-task slice; $0.29/task) — attribution resolved as above; GPT-6 Astra = 74.0% on the same run.
- SWE-bench Verified: **no verified public score found** for the composite ID.
- Terminal-Bench 4.0: **51.0%** (Pareto 26.9; Unbiased model card; ≈50.8% for 26.10).
- LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: **no verified public score found**.

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** for the composite.

### Normalized scores (1–100)

- **Tool use: 65/100.** DeepSWE v1.1 **70.0%** (agentic coding) + Terminal-Bench 4.0 **51.0%** (Unbiased, vendor-run) sit mid-band; the composite design (blend + self-check + escalate) targets tool loops, but the opaque blend and absence of independent tool-harness rows (Claw-Eval / GDPval-AA / OSWorld / MCP-Atlas / BFCL: no verified public score found) plus trailing GPT-6 Astra (TB 4.0 59.6%) cap below the 90–100 frontier band → **65**.
- **Reasoning: 72/100.** GPQA Diamond ~91–92.4% (strong) with HLE **49%** (text-only), ArXivMath **88%**, MMMU-Pro **78%**, LiveBench **76.1**; frontier anchors (GPQA 90%+) reached on GPQA, but HLE / ArXivMath / MMMU sit mid-band and no independent reasoning sweep exists for the composite → capped mid at **72**.
- **Context window: 75/100.** 262,144 in / 131,072 out falls in the 200K–500K tier mapping (65–84; 200K = 70) → **75** for 262K; max output 131,072 is convention-compliant. No composite-specific retrieval verification; note Pareto 26.10 raised the window to 1M.
- **Multimodal: 65/100.** Text + image in → text out fits the "+image in = 60–70" band → **65**; no audio / video / PDF; JSON mode not verified.
- **Coding: 68/100.** DeepSWE 70.0% (frontier ref DeepSWE 74%+ → just under; mid 65–75) + Terminal-Bench 4.0 51.0% (mid); trailing GPT-6 Astra (DeepSWE 74.0%); all vendor-run through a composite → conservative mid placement at **68**.

- **Cost efficiency: 100/100.** Evaluated tier was the free stealth preview ($0 in / out via OpenCode Zen / OpenRouter); paid route $2.50 / $7.50 per 1M (26.9) ≈ below-mid value; successor 26.10 $0.80 / $3.20 + 1M context. Free tier was time-limited + stealth terms → scored on the evaluated tier.

- **Overall Score: 69/100.** Mean of the five non-cost quality dims (Tool use 65 + Reasoning 72 + Context window 75 + Multimodal 65 + Coding 68) / 5 = **69.0** → **69** (half-up). Cost efficiency excluded per `model-comparison.md` v4.

---

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public internet research (official Unbiased / Circuit & Chisel pages, OpenRouter listings, Unbiased model card, Unbiased public pareto-evals harness, independent benchmark coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
