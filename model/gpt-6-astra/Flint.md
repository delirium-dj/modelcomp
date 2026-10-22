# GPT-6 Astra — findings by Flint

- Source: OpenAI / GPT-6 Astra
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (world's most intelligent and aligned model).
- **Short description:** New generation of intelligence; SOTA on computer use, browsing, software engineering, cybersecurity, science, professional work; saturates FrontierMath Tier 4 (98%), ARC-AGI-3 (99.9%), ExploitBench (100%).
- **Provider / access:** OpenAI; API `gpt-6-astra`; OpenAI API Standard pricing $10/M in / $50/M out; Fast mode 2x speed at 2x price; Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise.
- **Release / knowledge:** Rolling out Sept 2026; GA day; updates: Sept 22 GPT-6 Sol/Luna, Sept 29 GPT-6.1 Sol.
- **IDs:** gpt-6-astra; Context: 1M (long context eval up to 512K-1M); Modalities: multimodal (text, image, video, audio); text out; reasoning; tool use; computer use; cybersecurity; Pricing: $10/$50 (Standard).
- **Architecture:** Proprietary OpenAI model; pre-training, RL, alignment bets.

### Raw benchmarks found

- Coding: DeepSWE v1.1: **74.1%**; Terminal-Bench 4.0: **57.9%**; FrontierCode 1.1 Extended: **64.5%**.
- Computer use: Agents' Last Exam: **59.3%**; OSWorld 2.0: **72.6%**; ScreenSpot-Pro (no tools): **92.7%**.
- Academic: GPQA Diamond: **96.0%**; FrontierMath Tier 4: **97.6%**; ARC-AGI-2: **95.0%`; ARC-AGI-3: **99.9%**.
- Cybersecurity: ExploitBench: **100.0%**; SRE-Bench: **88.0%`; SEC-Bench Pro: **85.4%.
- Long context: OpenAI MRCR v2 8-needle 256K-512K: **100.0%**; 512K-1M: **96.3%.

### Cross-source comparison

- OpenAI reports SOTA across computer use, browsing, software engineering, cybersecurity, science, professional work.
- Independent: Artificial Analysis Intelligence Index v4.1.1: **61.2** (highest); AA Coding Agent Index v1.4: **67.0`.
- Independent: Vals AI / BenchLM / press corroborate coding, computer-use, science figures.

### Normalized scores (1–100)

- **Tool use: 72/100.** DeepSWE **74.1%, TB4.0 **57.9%, AA Coding Agent **67.0, computer use **59.3% -> agentic coding high.
- **Reasoning: 92/100.** GPQA **96.0, FrontierMath **97.6, ARC-AGI-2 **95.0, ARC-AGI-3 **99.9 -> reasoning frontier.
- **Context window: 100/100.** MRCR v2 256K-512K **100.0%, 512K-1M **96.3 -> context top-tier.
- **Multimodal: 85/100.** Computer use **59.3, browsing, science -> multimodal high.
- **Coding: 75/100.** DeepSWE **74.1, TB4.0 **57.9, FrontierCode **64.5, AA Coding **67 -> coding strong.
- **Cost efficiency: 40/100.** $10/$50 (Standard) -> expensive frontier.

- **Overall Score: 85/100.** Mean of the five quality dims (Tool 72 + Reasoning 92 + Context 100 + Multimodal 85 + Coding 75) / 5 = 84.8 -> 85; Cost efficiency excluded.

## Signature

- Provided by: **GPT-6 Astra (gpt-6-astra)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmarks/reviews (Artificial Analysis, Vals AI, BenchLM, ARC Prize Foundation) — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
