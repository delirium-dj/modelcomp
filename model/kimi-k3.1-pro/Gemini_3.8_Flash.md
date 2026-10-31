# Kimi K3.1 Pro — findings by Gemini 3.8 Flash

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-10-31
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship ~2.8T MoE reasoning model with 1M context, featuring state-of-the-art terminal and agentic execution capabilities.
- **Provider / access:** Moonshot AI API (`https://api.moonshot.cn/v1`), compatible with Chat Completions API, Responses API, and Messages API; model ID `kimi-k3.1-pro` (serving profile `kimi-k3.1-pro-highspeed`).
- **Release / knowledge:** 2026-10-23 release; knowledge cutoff mid-2026.
- **IDs:** `moonshotai/kimi-k3.1-pro`, `opencode/kimi-k3.1-pro`
- **Context window:** 1,048,576 tokens total (~1M tokens); verified via official Moonshot platform documentation and independent benchmarks.
- **Modalities:** Text, image, and video input; text output; native thinking/reasoning with configurable reasoning effort (`low`, `high`, `max`); function calling / tool use; JSON mode.
- **Pricing (as of 2026-10):** $2.00 / 1M input tokens, $10.00 / 1M output tokens, $0.20 / 1M cached input tokens (90% cache discount); paid API.
- **Architecture:** Mixture of Experts (MoE), ~2.8T total parameters, 104B active parameters per forward pass; proprietary weights (open-weights publication announced).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67%** (Artificial Analysis, Rank #1 overall, ahead of Claude Sonnet 5.5 at 64% and Kimi K3 at 13%)
- AutomationBench-AA: **73%** (Artificial Analysis, SaaS agent workflows, up from 58% on Kimi K3)
- GDPval-AA: **1,846 Elo** (Artificial Analysis v2.1, Rank #3, behind Claude Opus 5.5 at 1866 and Muse Wonder Full at 1857)
- AA-Briefcase v1.1: **1,678 Elo** (Artificial Analysis agentic knowledge work)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55 / #4** (Max effort; 46 at median / standard effort)
- HLE-Diamond / Humanity's Last Exam: **52%** (Artificial Analysis, up from 47% on Kimi K3)
- CritPt: **25%** (Hard physics subset, up from 23% on Kimi K3)
- Omniscience Accuracy / Hallucination Rate: **51% / 44%** (Artificial Analysis AA-Omniscience v1.1, Net Index 30)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- Terminal-Bench 4.0 (Coding & Terminal): **67%** (Artificial Analysis)
- SciCode / AA-SciCode: **61%** (Artificial Analysis, up from 59% on Kimi K3)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M token effective context window with needle retrieval verified in evaluation suite; no separate MRCR / GraphWalks figure reported.

### Normalized scores (1–100)

- **Tool use: 95/100.** Achieves #1 rank on Terminal-Bench 4.0 (67%) and 73% on AutomationBench-AA, capped only by frontier multi-modal tool environments.
- **Reasoning: 90/100.** Strong HLE score of 52% and AA Intelligence Index of 55, capped by remaining hallucinations (44% rate) compared to top tier frontier models.
- **Context window: 96/100.** Full 1M (1,048,576) token context window supported natively across all APIs.
- **Multimodal: 90/100.** Supports high-resolution text, image, and video input with strong document analysis, lacking audio/video generation.
- **Coding: 91/100.** Exceptional terminal and repository-level agent coding performance shown by 67% Terminal-Bench 4.0 and 61% SciCode.
- **Cost efficiency: 85/100.** At $2/$10 per 1M tokens with 90% caching discount, provides outstanding value for a 2.8T-class reasoning model.
- **Overall Score: 92/100.** Half-up mean of five quality dimensions (95 + 90 + 96 + 90 + 91) / 5 = 92.4 -> 92; exceptional agentic reasoning and terminal execution model.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-31
- Method: Public internet research verifying Moonshot AI documentation, Hugging Face repository, and Artificial Analysis independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
