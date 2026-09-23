# Gemini 3.8 Flash — findings by GPT-6 Sol

- Source: Google DeepMind/Gemini 3.8 Flash (`gemini-3.8-flash`).
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (Google Gemini API Free tier; paid on OpenCode Zen).
- **Short description:** Google DeepMind’s proprietary multimodal model for long-horizon software engineering, agents, and knowledge workflows. The _high_ reasoning setting used for several scores below is not a separate model ID; Flash Cyber and Flash TTS are different variants.
- **Provider / access:** Google Gemini API, model code `gemini-3.8-flash`, via native `generateContent`; OpenCode Zen, `opencode/gemini-3.8-flash`, via its native Google-model endpoint and `@ai-sdk/google`. Zen lists it under neither Chat Completions nor Responses API.
- **Release / knowledge:** 2026-09-02; stated knowledge cutoff March 2026, with some domains potentially limited to January 2025.
- **IDs:** `google/gemini-3.8-flash` (provider-prefixed notation; Google’s API code is `gemini-3.8-flash`); `opencode/gemini-3.8-flash`. **No Free ID exists on Zen’s published model list.**
- **Context window:** 1,048,576-token advertised input/context limit; separate 65,536-token output limit. Verified against Google’s API specification, **not** by a published full-window retrieval test.
- **Modalities:** Text, image, audio, video, and PDF input; text output only. Reasoning: yes, with low/medium/high settings. Function/tool calls, code execution, and structured JSON output: supported; audio and image generation: not supported by this ID.
- **Pricing (as of 2026-09-23):** Per 1M tokens, Google API Free tier: **$0 input / $0 output / $0 cached**; Google paid Standard: **$0.75 input / $3.75 output / $0.075 cached read**, introductory through 2026-12-31; Zen paid: **$1.50 / $7.50 / $0.15 cached read**. Google says Free-tier content is used to improve its products; its paid tier is not. Zen lists no Free tier for this model.
- **Architecture:** Proprietary, closed weights, based on Gemini 3.7 Flash. Total/active parameter counts and MoE details are not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Google model-card evaluation of agentic terminal coding; BenchmarkList rank **#2/182**).
- Tau3-Banking / Tau2-Bench: **45.8%** (τ³-Banking pass@1, Artificial Analysis result catalogued by BenchmarkList; **#9/174**).
- GDPval-AA: **1545 Elo** (Google-reported GDPVal-AA **v2**; BenchmarkList **#21/340**). The distinct, independently run AA **v2.1** reports **1412 Elo** at high reasoning; the versions must not be conflated.
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (Artificial Analysis result catalogued by BenchmarkList; accuracy, **#2/464**).
- HLE: **48%** (Artificial Analysis, high reasoning, Humanity’s Last Exam). Google separately reports **54.9%** on _HLE-Verified_; these are different evaluations.
- LCR / MLCR: **81%** (Artificial Analysis AA-LCR **v1.1**, high reasoning; evaluated window length not stated).
- CritPt: **18%** (Artificial Analysis, high reasoning; displayed rounded).
- Artificial Analysis Intelligence Index / BenchLM overall: **41 / #40 of 212** (Artificial Analysis **v4.3.2**, high reasoning; rank is within its comparison class). AA’s launch article reported **59** on an earlier index version, not a directly comparable current score.
- Omniscience Accuracy / Hallucination Rate: no verified public score found / no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **57%** (Artificial Analysis SciCode, high reasoning; displayed rounded).
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **73.7%** (Google model card, DeepSWE **v1.1**; evaluation harness not specified in the card).

Long context:

- AA-LCR v1.1: **81%** (Artificial Analysis, high reasoning; window length unspecified). No verified MRCR, RULER, or GraphWalks retrieval score at a specified long window was found.

### Normalized scores (1-100)

- **Tool use: 88/100.** Terminal-Bench 2.1 is strong, but τ³-Banking and GDPval-AA fall short of the stated frontier bands; Google also reports **19.1%** on the harder Terminal-Bench 4.0.
- **Reasoning: 91/100.** GPQA and HLE support the frontier tier; CritPt and the version-specific current AA Index temper the score.
- **Context window: 97/100.** The documented limit qualifies for the ≥1M tier; no qualifying full-window retrieval result supports 100.
- **Multimodal: 94/100.** Audio, video, PDF, and image input are supported, but output from this ID is text-only.
- **Coding: 92/100.** DeepSWE, Terminal-Bench 2.1, and SciCode are near or within the stated frontier bands; missing verified SWE-bench/LiveCodeBench results and weaker Terminal-Bench 4.0 performance cap confidence.
- **Cost efficiency: 100/100.** Scored on Google’s **$0 Free tier** for the same API ID, not Zen’s paid tier; free-tier data-use terms and limits apply.
- **Overall Score: 92.4/100.** Half-up rounded mean of the five non-cost dimensions; best fit: cost-sensitive multimodal coding and agent workflows with human review of consequential outputs.

---

## Signature

- Provided by: **ChatGPT (openai/gpt-6-sol)** — 2026-09-23
- Method: Fresh public research of Google’s model card, API and pricing documentation, Artificial Analysis, BenchmarkList, and OpenCode Zen; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
