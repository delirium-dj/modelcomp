# Claude Opus 5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 5
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5 (max effort evaluated)
- **Short description:** Proprietary reasoning model for coding and knowledge work, now a legacy offering.
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Foundry.
- **Release / knowledge:** July 24, 2026; May 2026 cutoff.
- **IDs:** `claude-opus-5`; Zen Free ID unverified.
- **Context window:** 1M; 128K output, 300K Batch beta.
- **Modalities:** Text/images in, text out; adaptive reasoning and tools.
- **Pricing (as of 2026-10-03):** $5 input, $25 output, $0.50 cache-read per million tokens.
- **Architecture:** Proprietary; parameters undisclosed. [Official specifications](https://platform.claude.com/docs/en/models/opus-5/overview)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1726 Elo; AA-Briefcase v1.1: 1662; AutomationBench-AA: 57%; Terminal-Bench 4.0: 49%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index: 51; HLE: 55%; CritPt: 29%; AA-Omniscience: 37 (index).
- GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode: 56%; terminal result above. SWE-bench / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found in reviewed sources.

Long context:

- AA-LCR v1.1: 79%; no verified full-window MRCR score.

All benchmark numbers: [AA max-versus-xhigh comparison](https://artificialanalysis.ai/models/comparisons/claude-opus-5-vs-claude-opus-5-xhigh), max column. New suite versions are not directly comparable to the methodology's historical raw anchors.

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong professional-task ratings; incomplete workflow success caps the score.
- **Reasoning: 92/100.** HLE supports frontier reasoning, with substantial remaining scientific errors.
- **Context window: 95/100.** 1M documented capacity; no retrieval bonus justified.
- **Multimodal: 70/100.** Image inputs supported; native audio/video not established.
- **Coding: 91/100.** Strong SciCode and terminal performance; repository coverage is incomplete here.
- **Cost efficiency: 50/100.** $5/$25 paid pricing sits below the methodology's $3/$15 value anchor.
- **Overall Score: 88/100.** Half-up mean (92 + 92 + 95 + 70 + 91) / 5 = 88; complex agentic work with a material price premium.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Fresh independent web research; normalized scores are interpretations, not official scores.
- Future sources: add a separate signed report with these headings.
