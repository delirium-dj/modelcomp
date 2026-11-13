# GPT-6.2 Astra — findings by Claude Sonnet 4.6

- Source: OpenAI (`openai/gpt-6.2-astra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Astra
- **Short description:** OpenAI's iterative update on GPT-6 Astra — a flagship multimodal reasoning and agentic model capable of computer use, long-horizon task execution, and advanced software engineering; 1.05 M token context with 128 K max output.
- **Provider / access:** OpenAI — API (paid tier); ChatGPT Plus/Pro/Enterprise; `openai/gpt-6.2-astra`
- **Release / knowledge:** Phased canary rollout, late 2026; builds on GPT-6 Astra (September 2026 public release)
- **IDs:** `openai/gpt-6.2-astra`
- **Context window:** 1,050,000 tokens total; 128,000 max output
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-11-13):** Paid API tier — see openai.com/api/pricing/
- **Architecture:** Dense transformer with deep reasoning, native computer-use / browser control, multi-step agentic planning, long-horizon task execution

### Raw benchmarks found

Agent / tool use:

- Computer use / browser agent: frontier-tier (native capability; no single public pass@1 figure)
- SWE-bench Verified: **55.0%** (GPT-6 Astra base; independent tracking via vibecoderjournal.com)
- Terminal-Bench / Tau3-bench: no verified public score found for 6.2 specifically

Reasoning / knowledge:

- GPQA Diamond: **~71%** (strict public snapshot, GPT-6 Astra base; askclash.ai / vibecoderjournal.com)
- FrontierMath: near-saturation (OpenAI internal evaluation)
- ARC-AGI-3: near-saturation (OpenAI internal evaluation)
- HLE: no verified standalone public score found
- MMLU-Pro: no verified standalone public score found

Coding:

- LiveCodeBench: **52.0%** (#1 tier uncontaminated at release; vibecoderjournal.com)
- SWE-bench Verified: **55.0%** (above)
- HumanEval: no verified public score found for 6.2 specifically

Long context:

- 1,050,000-token architectural window; no public MRCR or RULER retrieval score found for 6.2 variant

### Normalized scores (1–100)

- **Tool use: 80/100.** Native computer-use and browser control at flagship level; SWE-bench Verified 55% is strong but below top-tier (Anthropic/Google leaders). Agentic design with multi-step execution loops; minor-version 6.2 canary may exceed 55% (no independent score published yet).
- **Reasoning: 79/100.** GPQA Diamond ~71% on strict public snapshot; near-saturation on FrontierMath and ARC-AGI-3 per OpenAI evaluations. Broad scientific and mathematical reasoning at the frontier. Capped by limited independent HLE/MMLU-Pro numbers for 6.2 specifically.
- **Context window: 92/100.** 1,050,000-token window maps to the 1 M tier (score = 92).
- **Multimodal: 62/100.** Text + image input, text output — no audio or video input. Solid vision+text tier (60–65 range); GPT-6 Astra family known for high-quality image understanding, nudging to 62.
- **Coding: 75/100.** LiveCodeBench 52.0% at #1-tier release position; SWE-bench Verified 55.0%; frontier-class coding. GPT-6.2 canary improvements expected but unquantified — scored conservatively on published 6-Astra base figures.
- **Cost efficiency: 38/100.** Premium API tier pricing with no free access; among the more expensive frontier options. Exact per-token rates not disclosed; scored at the low end of cost efficiency.
- **Overall Score: 78/100.** Mean of Tool use (80) + Reasoning (79) + Context window (92) + Multimodal (62) + Coding (75) = 388 / 5 = 77.6 ≈ 78. Top-tier reasoning, massive context, and native computer-use make it a compelling frontier choice; image-only multimodal and premium pricing are the main constraints.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-6 Astra release](https://openai.com)
  - [OpenAI API pricing](https://openai.com/api/pricing/)
  - [vibecoderjournal.com — GPT-6 Astra benchmarks](https://vibecoderjournal.com)
  - [askclash.ai — GPQA cross-evaluation](https://askclash.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
