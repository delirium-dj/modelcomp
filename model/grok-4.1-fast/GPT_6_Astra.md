# Grok 4.1 Fast — findings by GPT 6 Astra

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** Grok 4.1 Fast, reasoning variant evaluated here.
- **Short description:** Historically inexpensive tool-calling model; original first-party deployment is retired.
- **Provider / access:** Original xAI API, including Agent Tools API. Since May 15, 2026, its IDs redirect to Grok 4.3 with low/none effort rather than the original weights. [Retirement notice](https://docs.x.ai/developers/migration/may-15-retirement).
- **Release / knowledge:** November 19, 2025; cutoff not verified.
- **IDs:** `grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`; no verified current Free Zen ID.
- **Context window:** Original model 2 million tokens; output cap unverified. Redirect model has different specifications.
- **Modalities:** Text/image input, text output; reasoning and nonreasoning variants, tool calls. Exact historical JSON contract unverified. [AA release specifications](https://artificialanalysis.ai/models/releases/grok-4-1-fast).
- **Pricing (as of 2026-10-03):** Historical $0.20 input / $0.50 output / $0.05 cached per million; tool fees additional. Redirects instead cost $1.25/$2.50. [Original launch](https://x.ai/news/grok-4-1-fast), retirement notice above.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vendor launch: Tau2-Bench Telecom **100%**, BFCL v4 **72%**, Research-Eval Reka **63.9%**, FRAMES **87.6%** with Agent Tools API. Tool/scaffold-dependent results: [launch evaluation](https://x.ai/news/grok-4-1-fast).
- Terminal-Bench 2.1, Tau3, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found in reviewed sources.

Reasoning / knowledge:

- AA reasoning variant: HLE **19%**, CritPt **3%**, AA-Omniscience **−30 index points**, estimated Intelligence Index **20** (asterisk in source). [AA comparison](https://artificialanalysis.ai/models/comparisons/grok-4-1-fast-reasoning-vs-gpt-oss-120b).
- GPQA, MLCR, BenchLM and Omniscience accuracy/hallucination rate: no verified public score found in reviewed primary sources.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index: no verified public number found in reviewed primary sources. Secondary aggregators were insufficient to establish an exact harness result.

Long context:

- AA-LCR v1.1 **74%**, same AA comparison; this does not establish near-perfect retrieval across 2M tokens.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong Telecom, BFCL and search results support specialized agents; missing broad terminal evidence caps generality.
- **Reasoning: 62/100.** HLE 19%, CritPt 3% and negative Omniscience show substantial limits against later frontier models.
- **Context window: 95/100.** Original 2M capacity meets the highest size tier; retrieval evidence does not justify 100.
- **Multimodal: 70/100.** Image understanding is supported, without verified native audio/video or nontext output.
- **Coding: 60/100.** Provisional estimate from general reasoning and tool capability; exact coding results remain unverified.
- **Cost efficiency: 94/100.** Historical $0.20/$0.50 was highly economical; this score is archival and does not describe current redirects.
- **Overall Score: 74/100.** Half-up mean of 82, 62, 95, 70 and 60 is 74; historical strengths are inexpensive search and tool workflows.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent public web research; normalized scores are interpretations, not vendor scores. Coding is provisional; retired-model facts are separated from replacement service behavior.
- Future sources: Add a separate signed findings file alongside this report.
