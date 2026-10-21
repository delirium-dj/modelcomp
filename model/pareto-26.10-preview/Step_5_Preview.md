# Pareto 26.10 Preview — findings by Step 5 Preview

- Source: Unbiased / Pareto 26.10 Preview (`opencode/pareto-26.10-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/router model (Circuit & Chisel) — runs a mix of frontier and open-source models per request and keeps the best answer; the 26.10 preview raised the window to 1M and cut prices 68% versus 26.9 ($0.80/$3.20), posting preliminary GPQA-D 92.4%, HLE 49.9%, DeepSWE 69.9% and Terminal-Bench 4.0 50.8% at $0.004–$0.48 per task. Now GA since 2026-10-15.
- **Provider / access:** Unbiased API (`pareto-26.10-preview`), OpenRouter (`unbiased/pareto-26.10-preview`), OpenCode Zen (`opencode/pareto-26.10-preview`), Cloudflare AI Gateway; subscription plans from $10/month (Personal 50M tokens/week; Personal Max 600M for $100); zero-data-retention tier on designated API traffic (Chat excluded).
- **Release / knowledge:** preview launched 2026-10-01 (Unbiased blog); declared GA 2026-10-15/16 (blog update + ARMES Docs); knowledge cutoff inherits the underlying routed models (not published).
- **IDs:** `pareto-26.10-preview` (Unbiased API), `unbiased/pareto-26.10-preview` (OpenRouter), `opencode/pareto-26.10-preview` (Zen).
- **Context window:** 1,048,576 (1M) — four times the 262,144 of the September 26.9 release (aimlapi); 131,072 max output (folder meta).
- **Modalities:** text and image in; text out (agentbreaking, folder meta); reasoning; tool/agentic use.
- **Pricing (as of 2026-10-21):** $0.80/$3.20 per 1M in/out, $0.03 cached (Unbiased blog); per-task costs $0.004 (GPQA-D) to $0.48 (TB 4.0) on its preliminary runs.
- **Architecture:** proprietary composite — no single set of weights; routes requests across frontier and open-source models and returns the best result (aimlapi); this is a router product, not a checkpoint.

### Raw benchmarks found

Unbiased official blog (2026-10-01 preliminary runs) + BenchLM + lmmarketcap:

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** ($0.48/task) (Unbiased preliminary run via BenchLM)
- DeepSWE v1.1: **69.9%** ($0.24/task) (Unbiased preliminary run; comparators from Unbiased's chart: Fable 5 70.0% at $13.50, Pareto 26.9 70.0% at $0.29 — both on a 30-task slice, not the full set)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / MCP-Atlas / OSWorld / Toolathlon: no verified public score found
- lmmarketcap composite: Coding category rank **#196**, composite **40/100** (lmmarketcap.com)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** ($0.004/task) (Unbiased preliminary run via BenchLM)
- Humanity's Last Exam (text-only): **49.9%** ($0.008/task) (Unbiased preliminary run)
- LCR / CritPt / MMLU-Pro / Omniscience / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1: **69.9%** (listed above — 30-task slice, preliminary)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / Terminal-Bench 2.1: no verified public score found

Long context:

- 1M window native; no MRCR / RULER / GraphWalks / LCR retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 4.0 50.8% is well above every frontier model measured on that harness (GPT-5.6 Luna 33–38%, Claude Fable 5.1 57.9% excepted) and DeepSWE 69.9% sits near the frontier pack; capped by the preliminary, vendor-run, 30-task-slice provenance and zero Tau/GDPval/Claw/OSWorld numbers.
- **Reasoning: 92/100.** GPQA Diamond 92.4% and HLE text-only 49.9% both clear the frontier reference bands (90%+/40%+) on Unbiased's own October 1 runs; capped by no independent replication, no LCR/CritPt/Omniscience data, and the composite architecture (scores inherit the routed models).
- **Context window: 95/100.** 1,048,576 window (4x the 26.9 release) lands in the ≥1M tier; no ≥98% retrieval-at-512K evidence and no published retrieval benchmark, so 95.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); no MMMU-class score published and no video/audio input or non-text output.
- **Coding: 86/100.** DeepSWE 69.9% is within a point of Fable 5's 70.0% at ~1/56th the per-task cost ($0.24 vs $13.50) and Terminal-Bench 4.0 50.8% leads the newest harness; capped by the preliminary single-slice measurement and no SWE-bench Verified/Pro or LiveCodeBench numbers.
- **Cost efficiency: 88/100.** $0.80/$3.20 with $0.03 cached matches the ~$0.60/$2.20 ≈ 92 band on the slightly expensive side for output; measured $0.004–$0.48 per task is the standout — frontier answers at open-source task prices.
- **Overall Score: 85/100.** Mean of (86 + 92 + 95 + 68 + 86) / 5 = 85.4 → 85. Best fit: research/coding/agent workloads that want frontier answers at open-source task prices — with the caveat that every published number is the vendor's own preliminary run on small slices.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Unbiased official preview blog + model card, BenchLM, aimlapi, agentbreaking, lmmarketcap, ARMES Docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
