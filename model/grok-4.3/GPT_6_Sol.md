# Grok 4.3 — findings by GPT 6 Sol

- Source: SpaceXAI/xAI (`grok-4.3`)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 2026 lower-latency, million-context reasoning model for text/image tool workflows, before later Grok 4.5/4.6 releases ([xAI model reference](https://docs.x.ai/developers/models/grok-4.3), [Vals](https://www.vals.ai/models/grok_grok-4.3)).
- **Provider / access:** xAI `grok-4.3` / alias `grok-4.3-latest` via xAI APIs; [model reference](https://docs.x.ai/developers/models/grok-4.3) lists functions, structured outputs and Batch. The current [OpenCode Console list](https://opencode.ai/docs/zen/) does **not** list `grok-4.3`, so the project's `opencode/grok-4.3` ID is not evidence of a current free or paid Zen route.
- **Release / knowledge:** April 30, 2026 per [Vals](https://www.vals.ai/models/grok_grok-4.3); cutoff not stated in the reviewed xAI model detail.
- **IDs:** `grok-4.3`; a `-latest` alias may move, so pin the base ID when reproducing benchmarks.
- **Context window:** [xAI](https://docs.x.ai/developers/models/grok-4.3) **1,000,000 total**; [Vals](https://www.vals.ai/models/grok_grok-4.3) configured max output 1M, but that is not proof of 1M simultaneously available output or full-window retrieval accuracy.
- **Modalities:** Text/image input → text output, reasoning none/low/medium/high/xhigh, functions and structured outputs ([xAI](https://docs.x.ai/developers/models/grok-4.3)); no native video/audio I/O.
- **Pricing (as of 2026-10-15):** [xAI model reference](https://docs.x.ai/developers/models/grok-4.3) **$1.25 input / $0.20 cached input / $2.50 output per 1M below 200K prompt**, **$2.50/$0.40/$5** at or above 200K, billed for **all tokens**; Batch 20% off. No verified Zen free API tier.
- **Architecture:** Proprietary; parameter count and weights unpublished ([xAI docs](https://docs.x.ai/developers/models/grok-4.3)).

### Raw benchmarks found

Independent [Vals high effort](https://www.vals.ai/models/grok_grok-4.3) reports current results with temperature 0.7, and [BenchLM](https://benchlm.ai/models/grok-4-3) attributes AA benchmarks. [AA](https://artificialanalysis.ai/models/grok-4-3) tracks a current Index, but revised index scores cannot be compared directly with Vals' earlier-cohort release-news rank. No later Grok 4.5 benchmarks assigned to this version.

Agent / tool use:

- [Vals Terminal-Bench 2.1 **41.95% ±2.62**, Finance Agent v2 **37.73% ±0.37**, Code Migration **6.79% ±1.20**, SAGE **19.74% ±2.65**, Harvey Legal Agent **0.42%**, SkillsBench **40.64% ±4.62**](https://www.vals.ai/models/grok_grok-4.3).
- [AA-attributed τ² **97.7%**, APEX-Agents-AA **17.0%**, Agentic Index **17.2%**, GDPval-AA **1018 Elo**](https://benchlm.ai/models/grok-4-3). High τ² in one harness does not imply good open-ended computer/terminal use. Exact OSWorld/MCP Atlas result **no verified public score found**.

Reasoning / knowledge:

- [Vals GPQA Diamond **91.41% ±1.41**, MMLU Pro **85.84% ±0.33**, MedScribe **74.40% ±2.02**](https://www.vals.ai/models/grok_grok-4.3); [AA GPQA **90.1%**, HLE **35–37.2%** under differing score displays, CritPt **8.0%**, AA IFBench **81.3%**](https://benchlm.ai/models/grok-4-3).

Coding:

- [Vals SWE-bench **71.40% ±2.02**, LiveCodeBench **84.49% ±1.02**, Vibe Code v1.1 **19.40% ±4.24**, ProgramBench **0.00%**, TB2.1 **41.95%**](https://www.vals.ai/models/grok_grok-4.3); [AA SciCode **48.3%**](https://benchlm.ai/models/grok-4-3). No verified SWE-bench Pro or DeepSWE under this exact ID found.

Long context / multimodal:

- [xAI 1M capacity](https://docs.x.ai/developers/models/grok-4.3) and [AA-LCR **64.3%**](https://benchlm.ai/models/grok-4-3) on a different reasoning task; no 1M MRCR/GraphWalks result independently verified.
- [AA MMMU-Pro **78.1%**](https://benchlm.ai/models/grok-4-3) and [Vals MMMU-Pro **83.06% ±0.90**](https://www.vals.ai/models/grok_grok-4.3) show image understanding; audio/video are not supported input modalities in the xAI specification.

### Normalized scores (1–100)

- **Tool use: 63/100.** TB2.1 41.95%, migration 6.79% and APEX 17% signal limits despite τ² 97.7%; no verified OSWorld.
- **Reasoning: 78/100.** GPQA ~90–91%, HLE ~35–37% and CritPt 8% support everyday science more than frontier abstract work.
- **Context window: 91/100.** 1M advertised, AA-LCR 64.3% and no full-window retrieval result; 200K billing cliff.
- **Multimodal: 66/100.** Text/image in and text out, MMMU ~78–83%; no native video/speech.
- **Coding: 70/100.** SWE 71.4% and LiveCodeBench 84.5%, with Vibe Code 19.4%, ProgramBench 0% and TB2.1 42% limiting hard agents.
- **Cost efficiency: 79/100.** $1.25/$2.50 with $0.20 cache and Batch discount at short prompts, tempered by 2× long-prompt rates.
- **Overall Score: 74/100.** (63 + 78 + 91 + 66 + 70) / 5 = 73.6, half-up 74; useful for affordable large-context image/text tasks rather than unattended multi-step engineering.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh xAI provider specs checked against independent Vals and AA-attributed exact-ID measurements; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
