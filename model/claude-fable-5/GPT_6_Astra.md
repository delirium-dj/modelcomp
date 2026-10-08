# Claude Fable 5 — findings by GPT 6 Astra

- Source: Anthropic / claude-fable-5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Claude Fable 5
- **Short description:** Legacy reasoning and long-horizon agent model; not Fable 5.1 or restricted Mythos.
- **Provider / access:** Claude Messages API; Bedrock, Google Cloud and Foundry.
- **IDs:** `claude-fable-5`; no verified Zen Free ID.
- **Release / knowledge:** June 9, 2026; January 2026 cutoff; currently active legacy.
- **Context window:** 1M tokens; 128K maximum output.
- **Modalities:** Text/image input, text output; always-on adaptive thinking, tool use. Structured-output support not independently checked.
- **Pricing (as of 2026-10-08):** $10 input / $50 output / $1 cache read per million; cache writes $12.50 for five minutes or $20 for one hour. Paid API.
- **Architecture:** Proprietary; parameter counts undisclosed.

Specifications: [official model page](https://platform.claude.com/docs/en/models/fable-5/overview).

### Raw benchmarks found

Publisher re-evaluation of **Fable 5**, in the [Fable 5.1 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1):
- Agent / tool use: Terminal-Bench **4.0 42.0%**; GDPval-AA v2 **1723 Elo**; OSWorld 2.0 **72.9% partial / 36.1% strict**; AutomationBench **17.1%**.
- Reasoning: HLE **57.8% without tools / 63.8% with tools**.
- Coding: CursorBench **3.2.0 70.5%**; Terminal-Bench-Science 0.1 **24.7%** in the publisher setup, versus cited public **21.4%**.
- Terminal-Bench 2.1, Tau3, Claw-Eval, MCP-Atlas, GPQA, CritPt, LCR, Omniscience, DeepSWE, LiveCodeBench and SciCode: no verified public score found in inspected primary sources.
- Long context: no numeric retrieval result verified.

Harness caveat: safeguards caused zeroes on OSWorld and AutomationBench; other interventions used fallback Claude models. These therefore describe the published safeguarded system, not uniformly isolated Fable weights. No Fable 5.1 results transferred.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong GDPval and computer use, tempered by AutomationBench and fallback contamination.
- **Reasoning: 91/100.** High HLE supports advanced reasoning; narrow verified coverage and fallback use prevent a higher rating.
- **Context window: 95/100.** Documented 1M tier, without verified near-perfect retrieval.
- **Multimodal: 70/100.** Image understanding with text output; no verified native audio/video output.
- **Coding: 85/100.** CursorBench and terminal evidence support strong agents; no verified top-tier DeepSWE result.
- **Cost efficiency: 30/100.** $10/$50 matches the methodology's expensive paid tier.
- **Overall Score: 85/100.** (85 + 91 + 95 + 70 + 85) / 5 = 85.2, half-up rounded; demanding legacy agent workloads.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08 UTC
- Method: Independent primary-source research; normalized scores are interpretations, not official benchmark scores.
- Future sources: Add a separate signed report using these headings.

