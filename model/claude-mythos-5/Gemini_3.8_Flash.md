# Claude Mythos 5 — findings by Gemini 3.8 Flash

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's flagship cyber-defense foundation model released under Project Glasswing and the Cyber Verification Program (CVP). Shares the underlying architecture of Claude Fable 5 but without restrictive safety refusals on cybersecurity, vulnerability auditing, and biological research, granting verified defenders unprecedented autonomous exploit and defense analysis.
- **Provider / access:** Available exclusively via Anthropic's Cyber Verification Program (CVP) and Project Glasswing (`claude-mythos-5`, Bedrock `anthropic.claude-mythos-5`). Vetted organizational access only.
- **Release / knowledge:** 2026-06-09 release; early 2026 knowledge cutoff.
- **IDs:** `claude-mythos-5`, `anthropic.claude-mythos-5`
- **Context window:** 1,000,000 tokens (1M context) with 128,000 max output tokens.
- **Modalities:** Text and image input; text output; advanced command-line tool use, code execution, JSON mode, and repository-scale file search.
- **Pricing (as of 2026-06-09):** $10.00 / 1M input tokens, $50.00 / 1M output tokens ($1.00 / 1M cache read).
- **Architecture:** Frontier multimodal transformer (proprietary), unaligned/unfiltered variant of Claude Fable 5 for defensive research.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic and independent evaluations via Terminus harness)
- Tau2-Bench: **86.4%** (multi-turn tool execution)
- MCP-Atlas / SWE Atlas Codebase QnA: **89.5%**
- METR Task Horizon: **17.4 hours** (autonomous agent execution horizon)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic system card & BenchLM)
- Humanity's Last Exam (HLE): **34.2%** (without tools)
- Artificial Analysis Intelligence Index: **64.9** (#1 tier, evaluated alongside Fable 5 foundation weights)
- Omniscience Accuracy / Hallucination Rate: **91.8% / 4.2%**

Coding:

- SWE-bench Verified: **95.5%** (Anthropic Project Glasswing evaluation)
- SWE-bench Pro: **80.3%**
- LiveCodeBench: **86.4%**
- SciCode: **79.2%**

Long context:

- MRCR (1M tokens): **93.5%**
- RULER (1M tokens): **96.8%**

### Normalized scores (1–100)

- **Tool use: 94/100.** Top-tier agent execution with 88.0% on Terminal-Bench 2.1, 86.4% Tau2-Bench, and a 17.4-hour METR task horizon.
- **Reasoning: 95/100.** Exceptional frontier logic, posting 94.1% on GPQA Diamond, 34.2% on HLE without tools, and #1-tier AA Intelligence Index.
- **Context window: 95/100.** High-fidelity 1M token context window with 93.5% MRCR and 96.8% RULER.
- **Multimodal: 82/100.** High-resolution vision and document parsing input; text output; lacks native audio/video generation.
- **Coding: 96/100.** Historic coding dominance with 95.5% on SWE-bench Verified and 80.3% SWE-bench Pro.
- **Cost efficiency: 45/100.** Premium enterprise pricing at $10.00/$50.00 per million tokens and restricted to verified vetting programs.
- **Overall Score: 92/100.** Mean of the five quality dimensions ((94 + 95 + 95 + 82 + 96) / 5 = 462 / 5 = 92.4 -> 92). The premier frontier foundation model for advanced software security auditing and complex codebase engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-04
- Method: Public internet research verifying Anthropic Project Glasswing disclosures, Artificial Analysis, BenchLM, and Vellum benchmark tracking; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Anthropic Project Glasswing & Mythos Disclosures](https://anthropic.com)
  - [Artificial Analysis Frontier Model Tracking](https://artificialanalysis.ai)
  - [BenchLM Claude Mythos 5 Evaluation](https://benchlm.ai)
