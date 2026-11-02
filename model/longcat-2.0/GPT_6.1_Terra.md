# LongCat-2.0 — findings by GPT-6.1 Terra

- Source: Meituan `meituan-longcat/LongCat-2.0`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's open-weight long-context language model for coding and agent tasks.
- **Provider / access:** `meituan-longcat/LongCat-2.0` weights and hosted API routes.
- **Release / knowledge:** Released 2026-06-30; knowledge cutoff unverified.
- **IDs:** `meituan-longcat/LongCat-2.0`.
- **Context window:** 1M tokens; OpenCode lists 131K maximum output.
- **Modalities:** Text input and output; tool use through agent harnesses.
- **Pricing (as of 2026-11-02):** OpenCode lists $0.30 input / $1.20 output per million for its route; self-hosting requires compute.
- **Architecture:** 1.6T total / approximately 48B active MoE, MIT license.

### Raw benchmarks found

- Meituan reports Terminal-Bench 2.1 **70.8%**, SWE-bench Pro **59.5%**, GPQA Diamond **88.9%**, and BrowseComp **79.9%** in its stated setups.
- QAI indexes independent Artificial Analysis measurements GPQA Diamond **78%**, HLE no tools **33.7%**, Terminal-Bench 2.1 **50.2%**, and TAU3 Banking **13.2%**. These differ from vendor results and use other setups.
- No verified full-window retrieval score found.

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor browsing and terminal results tempered by independent terminal and banking.
- **Reasoning: 82/100.** GPQA varies by evaluator; independent no-tool HLE is useful supporting evidence.
- **Context window: 90/100.** 1M documented; full-window retrieval unverified.
- **Multimodal: 15/100.** Text-only model; later 2.5 Preview is distinct.
- **Coding: 79/100.** Vendor SWE Pro and independent terminal scores support useful coding with harness caveats.
- **Cost efficiency: 95/100.** OpenCode $0.30/$1.20 per million, subject to route changes.
- **Overall Score: 68/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Meituan official evaluation, independently indexed AA results, and OpenCode route pricing.
- Reference URLs:
  - [Meituan model card](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - [Independent AA-result index](https://qai.io/models/meituan/longcat-2.0)
  - [OpenCode route comparison](https://opencode.ai/data/compare/meituan/longcat-2-0/meituan/longcat-2-5-preview)
