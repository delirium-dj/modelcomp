# Gemini 3.1 Pro — findings by GPT 5.6 Luna

- Source: Google DeepMind/Gemini 3.1 Pro
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's natively multimodal reasoning model for complex tasks, agentic use, advanced coding, and long-context analysis. It remains a preview model rather than a separately trained open-weights release.
- **Provider / access:** Gemini API in AI Studio, Vertex AI, Gemini CLI, Antigravity, Android Studio, Gemini Enterprise, the Gemini app, and NotebookLM; preview API model ID `gemini-3.1-pro-preview`.
- **Release / knowledge:** 2026-02-19 release; the model card does not state a knowledge cutoff.
- **IDs:** `google/gemini-3.1-pro-preview` (Google API); no verified OpenCode Zen Free ID.
- **Context window:** Up to 1,048,576 tokens with 64K maximum output, verified by Google's model card and current independent model listings.
- **Modalities:** Text, image, audio, and video input; text output; explicit reasoning/thinking and tool use. No native audio/video output was verified.
- **Pricing (as of 2026-11-02):** $2 input / $12 output per 1M tokens, with approximately 90% cache discount on the paid API route; Google AI Studio offers a limited free tier, while preview availability and quotas vary by product.
- **Architecture:** Proprietary; based on Gemini 3 Pro, with parameter details undisclosed.

## Raw benchmarks found

Agent / tool use:

- APEX-Agents: **33.5%** (Google DeepMind model card; long-horizon professional tasks).
- GDPval-AA: **1317 Elo** (Google DeepMind model card; expert work tasks).
- τ2-bench Retail: **90.8%**; Telecom: **99.3%** (Google DeepMind model card).
- MCP Atlas: **69.2%**; BrowseComp: **85.9%** (Google DeepMind model card).
- Claw-Eval: **57.8%**; Vals Terminal-Bench 2.1: **70.8%** (BenchLM, October 2026 snapshot; independent coverage).
- Artificial Analysis Intelligence Index v5: **not publicly scored on the current profile**; the profile still confirms reasoning mode, 1M context, and $2/$12 pricing (Artificial Analysis).

Reasoning / knowledge:

- Humanity's Last Exam: **44.4%** no tools; **51.4%** search + code (Google DeepMind model card).
- GPQA Diamond: **94.3%** (Google DeepMind model card); Vals independent run: **95.5% ±1.05** (Vals AI).
- ARC-AGI-2: **77.1%** verified (Google/ARC Prize).
- AA-LCR: **82.0%**; CritPt: **17.7%** (Artificial Analysis/BenchLM current rows).

Coding:

- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness, Google DeepMind model card).
- SWE-Bench Verified: **80.6%** (single attempt, Google DeepMind model card); Vals independent SWE-bench: **78.8%**.
- SWE-Bench Pro: **54.2%** (Google DeepMind model card).
- LiveCodeBench Pro: **2887 Elo** (Google DeepMind model card); Vals LiveCodeBench: **88.5%**.
- SciCode: **59%** (Google DeepMind model card); AA-SciCode: **58.7%** (BenchLM/Artificial Analysis).
- Vibe Code Bench: **32.03%** (Vals AI v1.1; a materially narrower and harsher coding lane).

Long context:

- MRCR v2 8-needle: **84.9% at 128K** and **26.3% pointwise at 1M** (Google DeepMind model card).
- Current listings verify a **1M-token** window, but the 1M retrieval result shows that advertised capacity is not equivalent to reliable full-window recall.

Multimodal:

- MMMU-Pro: **80.5%**; MMMLU: **92.6%** (Google DeepMind model card).
- Vals MMMU-Pro: **88.21% ±0.78** (independent run).
- ScreenSpot Pro: **84.4%**; CharXiv: **80.2%** (BenchLM current rows).

## Normalized scores (1–100)

- **Tool use: 94/100.** τ2-bench, MCP Atlas, BrowseComp, Claw-Eval, and independent Terminal-Bench evidence establish strong tool use, while APEX/GDPval and harness spread cap it.
- **Reasoning: 95/100.** GPQA 94.3–95.5%, HLE 44.4%/51.4%, ARC-AGI-2 77.1%, and AA-LCR 82% are frontier-level; vendor-led coverage and CritPt 17.7% cap confidence.
- **Context window: 92/100.** The verified 1M window is excellent, but MRCR falls from 84.9% at 128K to 26.3% at 1M, so usable retrieval is materially weaker than the advertised size.
- **Multimodal: 95/100.** Native text/image/audio/video input plus strong MMMU-Pro, MMMLU, and chart/screen results is unusually broad; text-only output caps it.
- **Coding: 91/100.** SWE-Bench Verified 80.6%, LiveCodeBench Pro 2887, and Terminal-Bench 68.5% are excellent, while SWE-Pro 54.2%, Vibe Code 32.03%, and harness spread limit the ceiling.
- **Cost efficiency: 84/100.** $2/$12 with a substantial cache discount and a limited free route is competitive for frontier multimodal reasoning, though output is pricier than Flash tiers.
- **Overall Score: 94/100.** Half-up mean of `(94 + 95 + 92 + 95 + 91) / 5 = 93.4`; best fit is multimodal research, coding, and tool-using workflows that can avoid relying on perfect 1M retrieval.

### Deep-research addendum (2026-10-09)

- Humanity’s Last Exam: **44.4%** without tools and **51.4%** with search/code; ARC-AGI-2 Verified: **77.1%**.
- Google makes the model available through Gemini API, Vertex AI, Gemini, and NotebookLM.
- Sources: https://deepmind.google/models/model-cards/gemini-3-1-pro ; https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/

### Multi-source deep-research addendum (2026-10-09)

- Google’s model card and evaluation PDF support the strong GPQA, SWE-Bench, multimodal, and agent results already recorded; the independent Android benchmark archive places the preview at 72.4, reinforcing that results vary materially by harness.
- Recalculation: **94/100**. Fresh BenchLM, Vals, and Artificial Analysis records preserve the strong quality profile while adding independent coding/multimodal coverage; the 1M MRCR collapse remains the key caveat.
- Sources: https://deepmind.google/models/model-cards/gemini-3-1-pro/ ; https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro ; https://www.androidcentral.com/apps-software/android-os/android-bench-2-0

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: fresh independent public-web research using Google's model card and launch material, Artificial Analysis, BenchLM, Vals AI, and ARC Prize; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind: Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro)
  - [Google: Gemini 3.1 Pro announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Artificial Analysis: Gemini 3.1 Pro Preview](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [BenchLM: Gemini 3.1 Pro benchmark scores](https://benchlm.ai/models/gemini-3-1-pro)
  - [Vals AI: Gemini 3.1 Pro Preview](https://www.vals.ai/models/google_gemini-3.1-pro-preview)
