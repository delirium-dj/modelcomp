# Gemini 3.1 Pro — findings by Kimi K3.1 Pro

- Source: Google DeepMind/Gemini 3.1 Pro Preview (`gemini-3.1-pro-preview`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's proprietary multimodal reasoning model for complex coding, scientific reasoning and agentic work, with a 1M-token context window and strong cost efficiency for its frontier class.
- **Provider / access:** Gemini API and AI Studio model `gemini-3.1-pro-preview`, plus the Gemini app; tool calling, structured outputs and JSON mode are supported.
- **Release / knowledge:** Released 2026-02-19; knowledge cutoff not verified in the reviewed launch sources.
- **IDs:** `gemini-3.1-pro-preview`; no OpenCode Zen Free ID verified.
- **Context window:** Up to 1M tokens input and 64K output (Google model card/search documentation).
- **Modalities:** Text, image, video, audio and PDF in; text out; reasoning, tool calls, structured outputs and JSON mode.
- **Pricing (as of 2026-11-01):** $2 input / $12 output per 1M tokens for prompts up to 200K; $4/$18 for longer prompts. Artificial Analysis measured $892 to run its Intelligence Index.
- **Architecture:** Proprietary, based on Gemini 3 Pro; parameter count and weights not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **68.5%** with the Terminus-2 harness (Google).
- Terminal-Bench Hard: **54%**, the leading result in Artificial Analysis's 2026-02-18 evaluation.
- GDPval-AA: **1316 Elo**, over 100 points above Gemini 3 Pro Preview but behind several frontier contemporaries (Artificial Analysis).
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (Google benchmark reporting compiled in launch coverage); Artificial Analysis also places it first among its compared models.
- ARC-AGI-2: **77.1%** (Google/launch coverage).
- HLE: Artificial Analysis ranks Gemini 3.1 Pro Preview first in its 2026-02-18 comparison; **no numeric score was exposed in the accessible text**.
- CritPt: **18%** on unpublished research-level physics problems, over 5 percentage points ahead of the next model (Artificial Analysis).
- AA-Omniscience: **53% accuracy / 50% hallucination rate**; hallucination fell from 88% for Gemini 3 Pro Preview (Artificial Analysis).
- Artificial Analysis Intelligence Index: **ranked #1**, four points ahead of Claude Opus 4.6 in the 2026-02-18 index; the accessible article did not expose its absolute index number.
- LCR / MLCR: **no verified public score found**.

Coding:

- SWE-bench Verified: **80.6%** (Google/launch coverage).
- SWE-bench Pro Public: **54.2%**, single attempt (Google).
- LiveCodeBench Pro: **2887 Elo** (Google/launch coverage).
- SciCode: **59%**, the leading Artificial Analysis Coding Index component score.
- Terminal-Bench Hard: **54%** (Artificial Analysis).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE: **no verified public score found**.

Long context:

- Verified 1M-token input window; **no numeric MRCR/RULER/GraphWalks score was found** in the reviewed public sources.

Multimodal:

- MMMU-Pro: **ranked #1** by Artificial Analysis on 2026-02-18; **no numeric score was exposed in the accessible article**.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.0 68.5% and Terminal-Bench Hard 54% demonstrate strong terminal agency, while GDPval-AA 1316 Elo trails the best professional-work agents.
- **Reasoning: 95/100.** GPQA 94.3%, ARC-AGI-2 77.1%, CritPt 18% and leading HLE/Omniscience results show exceptional breadth; missing numeric HLE and long-context reasoning rows cap the score.
- **Context window: 92/100.** A verified 1M input window and 64K output support large tasks, but no public numeric long-context retrieval result was verified.
- **Multimodal: 95/100.** Broad text/image/audio/video/PDF input and the #1 MMMU-Pro rank establish excellent multimodal reasoning; text-only output and the unavailable absolute MMMU score cap it.
- **Coding: 94/100.** SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, SciCode 59% and leading terminal results provide consistent evidence across coding regimes.
- **Cost efficiency: 77/100.** At $2/$12 for ordinary contexts and less than half the measured index-run cost of key frontier rivals, it is efficient for its class, though long prompts cost more and open-weight alternatives can be cheaper.
- **Overall Score: 93.4/100.** Half-up mean of 91, 95, 92, 95 and 94; best fit for multimodal scientific reasoning, coding and long-document work with frontier quality at a comparatively controlled price.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-01
- Method: Independent public internet research using three successful searches, Google DeepMind model documentation and Artificial Analysis's pre-release evaluation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.1 Pro](https://deepmind.google/models/gemini/pro/)
  - [Google DeepMind — Gemini 3.1 Pro model card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [Artificial Analysis — Gemini 3.1 Pro Preview evaluation](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai)
  - [LLM Stats — Gemini 3.1 Pro pricing and context](https://llm-stats.com/models/gemini-3.1-pro-preview)
- Future sources: add a new file next to this one using the same headings.
