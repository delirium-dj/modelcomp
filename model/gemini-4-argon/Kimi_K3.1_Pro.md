# Gemini 4 Argon — findings by Kimi K3.1 Pro

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's proprietary frontier reasoning model for long-horizon software engineering, professional knowledge work, multimodal analysis and defensive cybersecurity. Initial access was limited to trusted Fairwind cyber defenders.
- **Provider / access:** Fairwind Program at launch, with paid API customers and Google AI Ultra subscribers planned next; no generally available API model ID was published in the launch material reviewed.
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not publicly verified.
- **IDs:** No public API ID verified; no OpenCode Zen Free ID verified.
- **Context window:** Google verifies a 1M-token maximum output, up from 64K. The input context window was not stated in the announcement; third-party claims of 1M input remain unconfirmed.
- **Modalities:** Text, image, document and long-video understanding with text output; advanced reasoning, tool calls and agentic coding. Exact audio support and JSON mode were not verified.
- **Pricing (as of 2026-11-01):** Announced introductory price $2 input / $10 output per 1M tokens, with cached input at 95% off ($0.10); announced standard price $4/$20 with $0.20 cached input. Introductory duration was not specified.
- **Architecture:** Proprietary; parameter count, architecture and weights not disclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (**business workflows**): **51.3%**, ranked #1 in Google's comparison (Google; Zapier benchmark).
- Terminal-Bench 4.0: **57.4%** vendor-reported; **57.1%** in Artificial Analysis's High-setting run (Google and independent result compiled by NeuralTrust).
- GDPval-AA: **no verified numeric score found**.
- Harvey's Legal Agent Benchmark: **19.6%** vendor-reported (Google table compiled by NeuralTrust).
- CWE-bench v1 (**defensive cyber remediation**): **68.0%**, tied for first (Google).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **52.6** for the High setting (independent result compiled by NeuralTrust).
- Humanity's Last Exam: **57.1%** in Artificial Analysis's evaluation (compiled by NeuralTrust).
- Vals Index: **68.9%**, ranked first of 41 in the cited evaluation (Google/NeuralTrust).
- GPQA Diamond: **no verified exact-model numeric score found**.
- LCR / MLCR: **no verified public score found**.
- CritPt: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **50% factual accuracy / 15% hallucination rate** reported by The Decoder and compiled by NeuralTrust; harness details were not available in the reviewed summary.

Coding:

- DeepSWE v1.1: **77.9%**, vendor-reported state of the art at announcement (Google).
- FrontierSWE v2: **55.0%** vendor-reported (Google table compiled by NeuralTrust).
- Terminal-Bench 4.0: **57.4%** vendor-reported and **57.1%** independently measured (Google/Artificial Analysis via NeuralTrust).
- SWE-bench Verified / SWE-Pro: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode / AA-SciCode: **no verified public score found**.
- Vibe Code Bench: **no verified public score found**.

Long context:

- GraphWalks 256K–1M: **84.2%** vendor-reported (Google table compiled by NeuralTrust).
- Maximum output: **1M tokens**, verified by Google; this is output capacity, not a retrieval score.

Multimodal:

- LVBench (**long-video understanding**): **91.7%**, vendor-reported state of the art (Google).

### Normalized scores (1–100)

- **Tool use: 94/100.** AutomationBench 51.3%, CWE-bench 68% and strong legal-agent results show excellent applied agency; Terminal-Bench trails the frontier leader and several standard tool benchmarks are missing.
- **Reasoning: 93/100.** AA Intelligence Index 52.6, HLE 57.1% and Vals Index 68.9% provide strong independent and domain evidence, though no verified GPQA or CritPt score was found.
- **Context window: 96/100.** GraphWalks 84.2% across 256K–1M and a unique verified 1M output limit support excellent long-trajectory work; the unconfirmed input-window specification prevents a higher score.
- **Multimodal: 96/100.** LVBench 91.7% gives direct evidence of state-of-the-art long-video understanding alongside document and chart analysis; text-only output and unverified audio support cap the score.
- **Coding: 94/100.** DeepSWE 77.9% is exceptional, but FrontierSWE 55.0% and Terminal-Bench 57.4% show that performance is uneven across coding harnesses.
- **Cost efficiency: 78/100.** Introductory $2/$10 pricing and 95% cache discounts are attractive for this capability class, but standard pricing doubles, token usage is high and public access was limited.
- **Overall Score: 94.6/100.** Half-up mean of 94, 93, 96, 96 and 94; best fit for very long coding trajectories, video/document research and enterprise agents once access is available.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three successful searches, Google's announcement and model-card page, plus NeuralTrust's sourced comparison of vendor and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Introducing Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Google DeepMind — Gemini 4 Argon model card](https://deepmind.google/models/model-cards/gemini-4-argon/)
  - [NeuralTrust — Gemini 4 Argon benchmarks, pricing and security](https://neuraltrust.ai/blog/gemini-4-argon)
  - [Artificial Analysis — Terminal-Bench 4.0](https://artificialanalysis.ai/evaluations/terminalbench-4-0)
- Future sources: add a new file next to this one using the same headings.
