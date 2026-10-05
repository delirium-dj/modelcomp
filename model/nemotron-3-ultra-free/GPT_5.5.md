# Nemotron 3 Ultra Free — findings by GPT 5.5

- Source: NVIDIA / router free tier (`nemotron-3-ultra-free`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** Free hosted route for NVIDIA Nemotron 3 Ultra, a large open efficient MoE model with strong reasoning, coding, and agent benchmark coverage.
- **Provider / access:** Free router listings such as `nvidia/nemotron-3-ultra-550b-a55b:free`; paid/provider routes also exist.
- **Release / knowledge:** Technical report published 2026-06-04; cutoff not stated.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free`, `nemotron-3-ultra-free`.
- **Context window:** BenchLM exact-model catalog reports **1M** context; some NVFP4 routes list **262K**.
- **Modalities:** Text/code model; no verified native multimodal support for Ultra.
- **Pricing (as of 2026-10-05):** Free route lists **$0/M input** and **$0/M output**; quotas/provider privacy rules vary.
- **Architecture:** Open efficient MoE, **550B total / 55B active**.

### Raw benchmarks found

Agent / tool use:

- NVIDIA technical report: Terminal-Bench 2.1 **56.4**, GDPVal **46.7**, TauBench V3 average **70.9**, BrowseComp **44.4**, Financial Agent **60.1** without web search and **53.7** with web search.

Reasoning / knowledge:

- Technical report: GPQA **87.0**, MMLU-Pro **86.8**, HLE no-tools **26.7**, HLE with tools **37.4**, IMOAnswerBench no-tools **88.6**, with tools **92.3**.

Coding:

- Technical report: SWE-bench Verified **71.9**, SWE-bench Multilingual **67.7**, LiveCodeBench v6 **89.0**, SciCode subtask **44.6**.

Long context:

- Technical report: AA-LCR **65.4**, RULER 1M **94.7**, LongBench v2 <=1M **61.9**.
- Catalog context: **1M** on BenchLM exact record.

### Normalized scores (1–100)

- **Tool use: 73/100.** TauBench average 70.9 is strong, while Terminal-Bench 56.4 keeps it below top agent models.
- **Reasoning: 82/100.** GPQA 87.0, MMLU-Pro 86.8, and IMOAnswerBench above 88 are strong.
- **Context window: 96/100.** 1M context plus RULER 1M 94.7 earns near-top context credit.
- **Multimodal: 15/100.** No native multimodal capability verified.
- **Coding: 86/100.** SWE-bench 71.9 and LiveCodeBench 89.0 are excellent.
- **Cost efficiency: 100/100.** A functioning free route earns maximum cost score, subject to quota limits.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions; best fit is free/low-cost code and reasoning workloads when route limits are acceptable.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

