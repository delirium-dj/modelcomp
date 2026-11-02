# Gemini 4 Argon — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 4 Argon
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's frontier model for long-horizon software engineering, enterprise knowledge work, visual document/video analysis, and defensive cybersecurity.
- **Provider / access:** Google Gemini API and trusted Fairwind cyber-defender access; the public API model ID is `gemini-4-argon`, although rollout remains gated by account and region.
- **Release / knowledge:** Announced 2026-09-30; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-4-argon`; no OpenCode Zen Free ID.
- **Context window:** Independent trackers list a 1M-token context; Google's launch article separately advertises an industry-leading 1M-token output ceiling, with actual limits varying by route/continuation mode.
- **Modalities:** Text, image, and video input with text output; tool/agent workflows and long-video understanding are documented. Audio was not verified.
- **Pricing (as of 2026-11-02):** Introductory $2 input / $10 output per 1M tokens, implicit cached input $0.10; standard pricing is scheduled to become $4/$20 from 2026-12-01. Paid/gated only.
- **Architecture:** Proprietary; parameters and architecture undisclosed.

## Raw benchmarks found

> Google publishes a broad launch table; Artificial Analysis and BenchLM independently transcribe or rerun several rows. The main conflict is that Argon leads DeepSWE/Vibe Code while sitting below Opus 5.5 on independent Terminal-Bench 4.0.

Agent / tool use:

- AutomationBench: **51.3%** (Google launch evaluation)
- Vals Finance Agent v2: **65.4%** (Google evaluation methodology)
- Agents' Last Exam: **39.5%** (Google evaluation methodology; BenchLM)
- OSWorld 2.0: **69.2%** (BenchLM/Google evaluation methodology)
- CWE-bench v1: **68.0%** (CWE-bench leaderboard; Google reports a tie for first)
- Artificial Analysis AutomationBench: **77.5%** (Artificial Analysis)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **50** (Artificial Analysis; high effort)
- AA-HLE: **57.1%** (Artificial Analysis)
- ARC-AGI-2: **91.3%** (ARC Prize published result)
- GraphWalks BFS 256K–1M: **84.2%** (Google evaluation methodology; BenchLM)
- CritPt: **27.1%** (Artificial Analysis hard physics subset)

Coding:

- DeepSWE v1.1: **77.9%** (Google launch evaluation)
- FrontierSWE v2: **55.0%** (FrontierSWE/BenchLM)
- Vibe Code Bench: **91.9%** (Google evaluation methodology)
- Terminal-Bench 4.0: **57.4%** (Google/BenchLM); Artificial Analysis reports **57.0%** in its own run
- Terminal-Bench-Science 0.1: **57.6%** (Google evaluation methodology)
- FrontierCode 2.0: **26.3%** (Cognition/BenchLM)

Multimodal:

- LVBench: **91.7%** (Google launch evaluation; long-video understanding)
- Chartography: **71.6%** (Google evaluation methodology)

Long context:

- **1M tokens** listed by independent trackers; GraphWalks is **99.7% at 128K** and **84.2% across 256K–1M**, but exact route-specific input/output partitioning remains unclear.

## Normalized scores (1–100)

- **Tool use: 92/100.** OSWorld 69.2%, AutomationBench 51.3%, Agents' Last Exam 39.5%, and CWE-bench 68% establish strong agentic breadth, while Terminal-Bench variance and gated access cap confidence.
- **Reasoning: 92/100.** AA Index 50, AA-HLE 57.1%, ARC-AGI-2 91.3%, and GraphWalks 84.2% support frontier reasoning, with CritPt 27.1% preventing a near-perfect score.
- **Context window: 100/100.** The 1M-token capability and measured 256K–1M GraphWalks result place Argon in the top context tier; route-specific limits are the only caveat.
- **Multimodal: 94/100.** Native image/video input, LVBench 91.7%, and Chartography 71.6% support unusually broad grounded work; no verified audio modality caps it.
- **Coding: 90/100.** DeepSWE 77.9% and Vibe Code 91.9% are excellent, but Terminal-Bench 4.0 around 57.4%, FrontierSWE 55%, and FrontierCode 26.3% show material harness variance.
- **Cost efficiency: 90/100.** Introductory $2/$10 pricing and $0.10 cached input are strong for this capability tier, but the December price increase and gated availability reduce durable value.
- **Overall Score: 94/100.** Half-up mean of `(92 + 92 + 100 + 94 + 90) / 5 = 93.6`; best fit is high-stakes long-horizon coding, visual research, and defensive cyber work where access is available.

### Deep-research addendum (2026-10-09)

- No authoritative public model card or exact benchmark table for the `gemini-4-argon` identity was found in this pass.
- The existing scores remain provisional; no score change is justified without exact-model evidence.

### Multi-source deep-research addendum (2026-10-09)

- Google’s launch material reports $2/$10 introductory pricing and a 95% cached-input discount. Independent reviews agree Argon is strong for document-heavy and sustained reasoning work, but show it behind Opus/Sonnet/Astra on some Terminal-Bench 4.0 rows despite leading selected coding tests.
- Recalculation: **94/100.** The new model card, Artificial Analysis, BenchLM, and ARC records support a material upward revision; the score reflects both Argon's standout DeepSWE/visual results and weaker independent terminal rows.
- Sources: https://blog.google/intl/en-in/products/gemini-4-argon-our-next-era-of-frontier-intelligence/ ; https://www.eesel.ai/blog/gemini-4-argon-review ; https://www.intueo.ai/blog/gemini-4-argon-review-benchmarks-and-access

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: fresh independent public-web research using Google's launch/evaluation materials, Artificial Analysis, BenchLM, ARC Prize, and benchmark leaderboards; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Gemini 4 Argon launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Google Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing)
  - [Artificial Analysis: Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [BenchLM: Gemini 4 Argon benchmark scores](https://benchlm.ai/models/gemini-4-argon)
  - [ARC Prize: Gemini 4 Argon results](https://arcprize.org/results/google-gemini-4-argon)
