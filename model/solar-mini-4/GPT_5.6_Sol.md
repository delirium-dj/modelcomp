# Solar Mini 4 — findings by GPT 5.6 Sol

- Source: Upstage/Solar Mini 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's compact proprietary MoE for high-volume text agents, long context, and economical reasoning.
- **Provider / access:** Upstage API.
- **Release / knowledge:** Released 2026-09; knowledge cutoff 2026-02.
- **IDs:** `upstage/solar-mini4`
- **Context window:** 1,000,000 tokens according to Artificial Analysis.
- **Modalities:** Text input/output and reasoning; no native image/audio verified.
- **Pricing (as of 2026-10-09):** $0.10 input / $0.40 output per 1M tokens, with 90% cache discount.
- **Architecture:** Proprietary MoE, about 35B total / 3B active.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **28.6%**; Terminal-Bench v4 measured under AA's mini-SWE-agent harness, with an accessible Elo record of **870.83**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **24.1**.

Coding:

- AA SciCode: **47.6%**.

Long context:

- AA Long Context Reasoning: **83.3%** with a 1M-token window.

Sources: [Artificial Analysis](https://artificialanalysis.ai/models/solar-mini4), [Upstage release](https://www.upstage.ai/blog/en/solar-mini-4), [UnifyBench record](https://unifybench.ai/efforts?configuration=solar-mini4-260922--effort-reasoning&model=solar-mini4-260922).

### Normalized scores (1–100)

- **Tool use: 65/100.** GDPval and Terminal-Bench evidence exists, but overall agent performance is mid-tier.
- **Reasoning: 70/100.** AA Index 24.1 is strong for 3B active parameters, not frontier overall.
- **Context window: 94/100.** A 1M window plus 83.3 long-context reasoning is excellent.
- **Multimodal: 15/100.** The model is text-only.
- **Coding: 72/100.** SciCode 47.6 is good for its serving footprint.
- **Cost efficiency: 99/100.** Very low token prices and 3B active parameters offer standout economics.
- **Overall Score: 63/100.** The half-up mean of the five quality dimensions; best for cheap, high-volume long-context text workloads.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-09
- Method: Fresh public-internet research emphasizing independent Artificial Analysis data; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
