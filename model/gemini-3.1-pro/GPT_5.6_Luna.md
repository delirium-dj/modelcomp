# Gemini 3.1 Pro — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.1 Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's natively multimodal reasoning model for complex tasks, agentic use, advanced coding, and long-context analysis.
- **Provider / access:** Gemini API, Google AI Studio, Vertex AI, Gemini Enterprise, Gemini App, and Google Antigravity.
- **Release / knowledge:** 2026-02-19 release; knowledge cutoff not stated in the model card.
- **IDs:** Google Gemini 3.1 Pro / preview API identifier not independently verified in the reviewed sources.
- **Context window:** Up to 1,000,000 tokens; 64K output.
- **Modalities:** Text, image, audio, and video input; text output; reasoning and tool-use evaluation documented.
- **Pricing (as of 2026-10-04):** Public secondary pricing listings report approximately $2 input / $12 output per 1M tokens, but the exact current Google tier was not verified in an official pricing page during this run.
- **Architecture:** Proprietary; based on Gemini 3 Pro, with parameter details undisclosed.

## Raw benchmarks found

Agent / tool use:

- APEX-Agents: **33.5%** (Google DeepMind model card).
- GDPval-AA: **1317 Elo** (Google DeepMind model card).
- τ2-bench Retail: **90.8%**; Telecom: **99.3%** (Google DeepMind model card).
- MCP Atlas: **69.2%** (Google DeepMind model card).
- BrowseComp: **85.9%** (Google DeepMind model card).

Reasoning / knowledge:

- Humanity's Last Exam: **44.4%** no tools; **51.4%** search + code (Google DeepMind model card).
- GPQA Diamond: **94.3%** (Google DeepMind model card).

Coding:

- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness, Google DeepMind model card).
- SWE-Bench Verified: **80.6%** (single attempt, Google DeepMind model card).
- SWE-Bench Pro: **54.2%** (single attempt, Google DeepMind model card).
- LiveCodeBench Pro: **2887 Elo** (Google DeepMind model card).
- SciCode: **59%** (Google DeepMind model card).

Long context:

- MRCR v2 8-needle at 128K: **84.9%**; at 1M pointwise: **26.3%** (Google DeepMind model card).

Multimodal:

- ARC-AGI-2: **77.1%** (ARC Prize Verified, Google DeepMind model card).
- MMMU-Pro: **80.5%** (Google DeepMind model card).
- MMMLU: **92.6%** (Google DeepMind model card).

## Normalized scores (1–100)

- **Tool use: 94/100.** τ2-bench, MCP Atlas, BrowseComp, and agentic evaluations are strong, though GDPval-AA and APEX-Agents are less dominant.
- **Reasoning: 95/100.** GPQA 94.3% and HLE 44.4%/51.4% are frontier-level; the score is capped because HLE and the model-card results are vendor-reported.
- **Context window: 92/100.** The nominal 1M window is excellent, but MRCR falls to 26.3% at 1M, so usable retrieval is materially weaker than the advertised size.
- **Multimodal: 96/100.** Officially supports text, image, audio, and video input, with strong ARC-AGI-2, MMMU-Pro, and MMMLU results; text-only output caps the score.
- **Coding: 91/100.** SWE-Bench Verified 80.6% and LiveCodeBench 2887 are excellent, while Terminal-Bench 68.5% and SWE-Bench Pro 54.2% limit the ceiling.
- **Cost efficiency: 83/100.** Reported $2/$12 pricing is competitive for a frontier multimodal model, but the exact current Google tier was not officially verified here.
- **Overall Score: 93.6/100.** Best fit: multimodal research, coding, and tool-using workflows that benefit from broad input coverage; test long-context retrieval at the actual target length.

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Google DeepMind's model card and benchmark tables; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
