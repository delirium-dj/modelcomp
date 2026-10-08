# Pareto 26.10 Preview — findings by GLM 5.3

- Source: Unbiased / Circuit & Chisel (`pareto`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended model — one API call runs several frontier and open-source engines and keeps the best answer (explicitly not a router; cache-safe). Preview release aimed at research, coding and agents at open-source-ish pricing.
- **Provider / access:** Unbiased AI platform, model string `pareto` (Chat Completions, `https://platform.unbiased.ai`, POST /v1/chat/completions); subscriptions from $10/month plus pay-as-you-go credits. Project meta lists Zen ID `opencode/pareto-26.10-preview` (absent from the live Zen models list when re-checked 2026-10-08).
- **Release / knowledge:** preview benchmark runs dated 2026-10-01; results explicitly preliminary and may change before final publication. Knowledge cutoff not disclosed.
- **IDs:** `opencode/pareto-26.10-preview` (project meta); `pareto` (Unbiased platform). No Free ID.
- **Context window:** 1,000,000 in / 131,000 max output (project meta / Unbiased docs; not independently benchmarked).
- **Modalities:** text and image in (vendor model card: "Pareto accepts text and image inputs"); text out; reasoning yes; tool calls yes (Terminal-Bench 4.0 agentic results); JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.80 in / $3.20 out per 1M, cached input $0.03 (Unbiased model card); preliminary task costs $0.24 (DeepSWE), $0.48 (TB 4.0), $0.008 (HLE), $0.004 (GPQA-D). Zero-retention claims pending per data policy — confirm before sending sensitive data.
- **Architecture:** proprietary composite — several underlying models run per request, best answer kept; engine composition undisclosed. Sibling/previous release: Pareto 26.9.

### Raw benchmarks found

> All Pareto numbers are vendor-run preliminary results (October 1, 2026 runs, published on the Unbiased model card and tracked by BenchLM); the vendor itself labels them "may change before final publication". Competitor figures cited below are transcribed from third-party sources and use different harnesses — not a controlled head-to-head.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (Unbiased preliminary results; for scale: Claude Sonnet 5.5 published 70.6%, GPT 6 Astra 59.6%, GPT 6 Luna 12.6%)
- GDPval-AA / Tau3 / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA-Diamond: **92.4%** (Unbiased preliminary; for scale: GPT-6.1 Sol 95.4%, GPT 6 Luna 90.5%)
- HLE (text-only): **49.9%** (Unbiased preliminary; for scale: Fable 5.1 59.1%, Claude Sonnet 5.5 55.0%)
- Artificial Analysis Intelligence Index: **no verified public score found** (no AA page for this model)
- LCR / MLCR / CritPt / Omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **69.9%** at **$0.24/task** (Unbiased preliminary; Fable 5 published 70.0% at $13.50/task, Pareto 26.9 70.0% at $0.29/task on a 30-task slice)
- Terminal-Bench 4.0 (coding-side view): **50.8%**
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Multimodal:

- **no verified public score found** for any image benchmark (image input is claimed, not benchmarked publicly)

Long context:

- 1M window per vendor docs/project meta; no MRCR/RULER/LCR retrieval score published — no long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 4.0 50.8% is the only agentic measurement — mid-field on that harness (between GPT 6 Astra 59.6 and DeepSeek 4.1 Flash 26.8); capped hard by the absence of Tau3/GDPval/tool-call benchmarks and the preliminary, vendor-run nature of the single number.
- **Reasoning: 84/100.** GPQA-Diamond 92.4% clears the 90% frontier bar and HLE text-only 49.9% beats the 40% reference; capped by preliminary vendor-run status, no independent harness, and no long-context or reliability (hallucination) data.
- **Context window: 95/100.** 1M input / 131K output per vendor docs — top tier; not 100 because no retrieval-quality measurement exists.
- **Multimodal: 65/100.** Text+image input claimed by the vendor but zero verified image benchmarks; text-only output — bottom of the image-in band.
- **Coding: 74/100.** DeepSWE v1.1 69.9% sits just under the 74% frontier reference at a fraction of competitors' task cost, with TB 4.0 50.8% supporting; capped by no SWE-bench Verified/LiveCodeBench evidence and preliminary 30-task-slice methodology on comparators.
- **Cost efficiency: 90/100.** $0.80/$3.20 per 1M sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) classes; the per-task economics ($0.24 DeepSWE task vs $13.50 for a comparable published score) are exceptional, but subscription rate limits and preview status temper it.
- **Overall Score: 75/100.** (58 + 84 + 95 + 65 + 74) / 5 = 75.2 → 75. Best-fit recommendation: cost-efficient frontier-adjacent coding and expert reasoning where per-task spend matters more than harness diversity; verify tool-heavy and multimodal workloads yourself — the public evidence there is thin and preliminary.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Unbiased model card + homepage preliminary results, BenchLM tracking); scores are normalized 1–100 interpretations, not official vendor scores. All Pareto numbers are vendor-run preliminary benchmarks — treat as provisional pending final publication.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
