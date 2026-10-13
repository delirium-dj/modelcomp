# GPT-6.1 Sol — findings by GPT 6 Sol

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's newer Sol checkpoint combining GPT-6-class reasoning, professional documents and coding at substantially less cost than Astra. The vendor specifies a distinct `gpt-6.1-sol` API ID, not a suffix added to an Astra request ([official launch](https://openai.com/index/introducing-gpt-6-1-sol/)).
- **Provider / access:** [OpenAI API](https://developers.openai.com/api/docs/models/gpt-6.1-sol) `gpt-6.1-sol` on Responses for tools; Chat Completions is supported **without tool calling**. [OpenCode Zen](https://pi.dev/models/opencode/gpt-6-1-sol) offers paid `opencode/gpt-6.1-sol` via Responses at `https://opencode.ai/zen/v1`.
- **Release / knowledge:** September 29, 2026 per [Vals](https://www.vals.ai/models/openai_gpt-6.1-sol) and [ARC Prize](https://arcprize.org/results/openai-gpt-6-1-sol); April 30, 2026 cutoff ([OpenAI spec](https://developers.openai.com/api/docs/models/gpt-6.1-sol)).
- **IDs:** `gpt-6.1-sol` (first-party); `opencode/gpt-6.1-sol` (Zen). No current free Zen route verified.
- **Context window:** 1,050,000 combined, 922,000 maximum input and 128,000 max output ([OpenAI model spec](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [Zen](https://pi.dev/models/opencode/gpt-6-1-sol)).
- **Modalities:** Native text/image input, text output. OpenAI explicitly lists audio/video unsupported; Responses tools include file/web search, computer use, hosted shell, MCP and structured outputs ([official spec](https://developers.openai.com/api/docs/models/gpt-6.1-sol)).
- **Pricing (as of 2026-10-12):** $2 input / $10 output / $0.10 cached input / $2.50 cache write per 1M. **Above 272K input, $4/$15/$0.20/$5 applies to the full request**; Fast 2×, Batch/Flex half, Ultrafast 6× ([OpenAI](https://developers.openai.com/api/docs/models/gpt-6.1-sol), [Zen](https://pi.dev/models/opencode/gpt-6-1-sol)).
- **Architecture:** Proprietary, size/weights undisclosed ([AA](https://artificialanalysis.ai/models/gpt-6-1-sol)).

### Raw benchmarks found

Cross-checked [OpenAI's launch](https://openai.com/index/introducing-gpt-6-1-sol/) and API limits against independent [Vals](https://www.vals.ai/models/openai_gpt-6.1-sol), [AA](https://artificialanalysis.ai/models/gpt-6-1-sol), [ARC Prize](https://arcprize.org/results/openai-gpt-6-1-sol) and [Surge GDP.pdf](https://surgehq.ai/benchmarks/gdp-pdf). [BenchLM](https://benchlm.ai/models/gpt-6-1-sol) links individual underlying sources, not an extra experimental replication. Tool/harness and reasoning effort are part of each measurement.

Agent / tool use:

- [OpenAI AutomationBench **36.1%**, Terminal-Bench Science 0.1 **57.0%**](https://benchlm.ai/models/gpt-6-1-sol) as launch-linked max-effort results; independent [Vals Science **52.86% ±6.01**, TB4.0 **55.05% ±1.82**, SRE Bench **50.76%**](https://www.vals.ai/models/openai_gpt-6.1-sol), [AA TB4 **56.1%** and AutomationBench-AA **64.9%**](https://benchlm.ai/models/gpt-6-1-sol). Zapier and AA automation versions are different harnesses.
- [Vals Index **61.15% ±1.01**](https://www.vals.ai/models/openai_gpt-6.1-sol) (#9/47 displayed), Code Migration **65.12%**, but CyberBench **39.29%**, Finance Agent v2 **52.03%** and Harvey LAB **5.42%**. [AA GDPval-AA **1592 Elo**](https://benchlm.ai/models/gpt-6-1-sol); [Surge GDP.pdf **35%**](https://surgehq.ai/benchmarks/gdp-pdf) on professionally complex PDFs, versus AA-linked GDP.pdf **31%** under a separate reporting snapshot/harness.
- Exact-model Terminal-Bench **2.1**, Tau3-Banking and Claw-Eval: no verified public score found; don't substitute predecessor or Astra TB2.1.

Reasoning / knowledge:

- [ARC Prize verified ARC-AGI-2 **94.2% max**, ARC-AGI-3 **52.73% max Standard harness** versus **96.37% xhigh Provider Adapter**](https://arcprize.org/results/openai-gpt-6-1-sol). The adapter preserves reasoning state and compacts history; its headline is not the standard-harness result.
- [AA Index v4.3.2 **52**, HLE **52.9%**, CritPt **31.7%**, Omniscience Index **41.5%**](https://benchlm.ai/models/gpt-6-1-sol); [Vals ProofBench v1.1 **99%**, IOI **96.89%**](https://www.vals.ai/models/openai_gpt-6.1-sol). Exact version GPQA Diamond: no verified public score in consulted primary results.

Coding:

- [OpenAI DeepSWE v1.1 **71.9%**](https://benchlm.ai/models/gpt-6-1-sol) and independent [Vals TB4 **55.05%**, Vibe Code **88.93%**, Code Migration **65.12%**](https://www.vals.ai/models/openai_gpt-6.1-sol). [AA SciCode **54.2%**](https://benchlm.ai/models/gpt-6-1-sol)); [Surge sudo L7 **31.7%**](https://surgehq.ai/benchmarks/gdp-pdf) on highly judgment-dependent agent coding.
- Exact-version SWE-bench Verified/Pro and LiveCodeBench: no verified public score in the consulted primary leaderboards; do not transfer GPT-6 Sol or Astra scores.

Long context / multimodal:

- 1.05M total/922K input verified, [AA-LCR **83.0%**](https://benchlm.ai/models/gpt-6-1-sol) measures reasoning over long contexts; no verified ≥98% MRCR near 1M found.
- [AA MMMU-Pro **86.0%**](https://benchlm.ai/models/gpt-6-1-sol), [Surge GDP.pdf **35%**](https://surgehq.ai/benchmarks/gdp-pdf) support image/document tasks; documents are tool/file inputs, not evidence of native video/audio input.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4 ~55–56%, SRE 50.76% and independent agent suites are strong; weaker finance/cyber/legal and missing exact TB2.1 cap universal claims.
- **Reasoning: 95/100.** ARC-AGI-2 94.2%, ARC-AGI-3 52.73% standard and AA Index 52 show frontier performance; adapter-assisted ARC 96.37% and missing GPQA cannot justify 100.
- **Context window: 96/100.** Verified 1.05M/922K in, 128K out reach top capacity tier; no near-window 98% retrieval proof.
- **Multimodal: 68/100.** Excellent image/document reasoning, yet native API is text/image input and text output only.
- **Coding: 92/100.** DeepSWE 71.9%, Vibe Code 88.93%, TB4 55% and Code Migration 65% support demanding engineering; missing exact SWE Verified and sudo L7 31.7% temper top tier.
- **Cost efficiency: 80/100.** $2/$10 with 95%-discounted cached inputs is strong for this class, although >272K requests pay $4/$15 across all tokens and Ultrafast costs extra.
- **Overall Score: 88/100.** (90 + 95 + 96 + 68 + 92) / 5 = 88.2, half-up 88; effective for agentic engineering and documents at moderate token prices when effort/harness are stated.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh OpenAI model/launch documentation cross-checked with AA, Vals, ARC Prize and Surge benchmark pages; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
