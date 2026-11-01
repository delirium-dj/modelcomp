# Claude Fable 5.1 — findings by GPT-6.1 Terra

- Source: Anthropic / Claude Fable 5.1
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's production-safeguarded reasoning model for demanding long-running coding and knowledge work. Some evaluations use fallback models after safeguard interventions.
- **Provider / access:** Anthropic Claude Messages API and supported cloud platforms; model ID `claude-fable-5-1` ([Anthropic](https://www.anthropic.com/claude/fable)).
- **Release / knowledge:** Released 2026-09-01 ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5-1)); knowledge cutoff June 2026 ([Anthropic docs](https://docs.anthropic.com/docs/en/models/fable-5/introducing-claude-fable-5-and-claude-mythos-5)).
- **IDs:** Anthropic `claude-fable-5-1`; OpenRouter `anthropic/claude-fable-5.1`. No free API route verified.
- **Context window:** 1M tokens, 128K maximum output ([Anthropic documentation](https://docs.anthropic.com/docs/en/models/fable-5-1/whats-new-fable-5-1)).
- **Modalities:** Text and image input, text output; adaptive thinking and tools supported.
- **Pricing (2026-11-01):** Anthropic $10 input / $0.25 cache read / $50 output per million tokens; cache write and batch rates differ ([Anthropic](https://docs.anthropic.com/docs/en/models/fable-5-1/whats-new-fable-5-1)).
- **Architecture:** Proprietary; parameter counts not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **55.8%**, Anthropic reported; GDPval-AA v2.1 **1735 Elo** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Vals Terminal-Bench 4.0 **58.08% ± 3.31**; Terminal-Bench 2.1 **85.02%** with fallbacks versus **79.03%** counting fallback-assisted tasks as failures ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5-1)). These are different benchmark versions.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in the sources used here.

Reasoning / knowledge:

- Anthropic HLE **65.6% with tools** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Vals GPQA Diamond **93.43% ± 1.86** and ProofBench v1.1 **100.00% ± 0.00** ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5-1)); fallback policy is relevant to affected domains.
- CritPt and general hallucination rate: no verified public score found in this research.

Coding:

- Anthropic FrontierCode v1.1 Main **50.3%** and CursorBench 4.0 **51.8%** ([Anthropic](https://www.anthropic.com/claude-opus-5-5)).
- Vals LiveCodeBench **90.52% ± 0.86**, Vibe Code Bench v1.1 **90.26% ± 1.57**, and Code Migration **54.61% ± 4.81** ([Vals](https://www.vals.ai/models/anthropic_claude-fable-5-1)).
- SWE-bench Verified / Pro and SciCode: no independently verified exact-deployment result found in the sources used here.

Long context:

- Anthropic documents 1M tokens; no exact-model MRCR or RULER retrieval percentage independently verified here.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong terminal and knowledge-work results support a high rating, tempered by documented fallback use.
- **Reasoning: 96/100.** HLE with tools, GPQA and ProofBench indicate strong reasoning; task settings and fallback affect interpretation.
- **Context window: 95/100.** A documented 1M window earns the top size tier; no qualifying 98%+ retrieval result was verified.
- **Multimodal: 75/100.** Image and document input are supported; audio/video input and non-text output are not credited.
- **Coding: 95/100.** Independent LiveCodeBench and Vibe Code results plus vendor FrontierCode are strong, with migration and fallback caveats.
- **Cost efficiency: 60/100.** $10/$50 rates are expensive despite low cache-read pricing.
- **Overall Score: 91/100.** (95 + 96 + 95 + 75 + 95) / 5 = 91.2, rounded to 91; suited to high-value agentic work when cost and safeguards fit.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Fallback-assisted results are not assumed to be pure Fable inference.
- Reference URLs:
  - [Anthropic Fable model page](https://www.anthropic.com/claude/fable)
  - [Anthropic API specifications and pricing](https://docs.anthropic.com/docs/en/models/fable-5-1/whats-new-fable-5-1)
  - [Anthropic benchmark comparison](https://www.anthropic.com/claude-opus-5-5)
  - [Vals independent evaluations and fallback notes](https://www.vals.ai/models/anthropic_claude-fable-5-1)
- Future sources: add a new file next to this one using the same headings.
