# Kimi K2.5 — findings by GPT 6 Astra

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Kimi K2.5
- **Short description:** Open-weight visual reasoning and coding model; swarm execution is a separate system configuration.
- **Provider / access:** Moonshot Chat Completions; model `kimi-k2.5`. [Model card](https://huggingface.co/moonshotai/Kimi-K2.5)
- **Release / knowledge:** Released January 27, 2026; cutoff not verified. [Publisher](https://www.kimi.com/en/help/agent/agent-overview)
- **IDs:** `moonshotai/Kimi-K2.5` weights; `moonshotai/kimi-k2.5` OpenRouter. No verified free Zen ID.
- **Context window:** 256K; output cap not independently verified.
- **Modalities:** Text, image and video input; text output; thinking/instant modes and tools. JSON guarantees not verified.
- **Pricing (as of 2026-10-08):** OpenRouter lists paid $0.45 input / $2.25 output per million tokens; cache price not verified. Route-dependent, not a Moonshot direct quote. [Host pricing](https://openrouter.ai/compare/moonshotai/kimi-k2-thinking/moonshotai/kimi-k2.5)
- **Architecture:** MoE, 1T total / 32B active, 400M MoonViT encoder; modified MIT license. [Specifications](https://huggingface.co/moonshotai/Kimi-K2.5)

### Raw benchmarks found

Publisher results, not independent leaderboard ranks. [Evaluation table and harness notes](https://huggingface.co/moonshotai/Kimi-K2.5/raw/main/README.md):

- Agent/tool use: Terminal-Bench **2.0 50.8%**, non-thinking Terminus-2; BrowseComp **60.6%**, or **74.9%** with context management. Swarm results not used.
- Reasoning: GPQA Diamond **87.6%**, HLE-Full **30.1%** without tools / **50.2%** with tools; AA-LCR **70.0%**. GPQA uses eight runs and a 96K completion budget.
- Coding: SWE-bench Verified **76.8%**, SWE-Pro **50.7%**, internal agent; LiveCodeBench v6 **85.0%**, SciCode **48.7%**. Coding averages five runs.
- Vision: MMMU-Pro **78.5%**, VideoMMMU **86.6%**.
- Long context: LongBench v2 **61.0%** at approximately 128K.
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw, Toolathon, MCP-Atlas, SWE Atlas, MLCR, CritPt, Intelligence Index, Omniscience, Vibe Code Bench, DeepSWE and MRCR: no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 70/100.** Search evidence is useful; terminal performance and older benchmark versions limit confidence.
- **Reasoning: 84/100.** Strong science and long-document results, below the current frontier band.
- **Context window: 78/100.** Capacity fits the 200K–500K tier; full-window retrieval remains unverified.
- **Multimodal: 85/100.** Measured image and video understanding; no native audio/output generation verified.
- **Coding: 82/100.** Broad measured competence; internal scaffolding and modest terminal results cap the score.
- **Cost efficiency: 92/100.** Low paid routing prices; provider differences and reasoning token consumption matter.
- **Overall Score: 80/100.** Half-up mean: 399 / 5 = 79.8. Suitable for economical visual coding and research agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh public primary-source research; normalized scores are interpretations, not official vendor scores.
- Future sources: add separate signed files using the same headings.

