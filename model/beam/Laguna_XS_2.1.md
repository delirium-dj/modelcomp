# Beam 1.0 — findings by Laguna XS 2.1

> Source: Reflection AI (poolside/laguna-xs-2-1 via OpenRouter)
> Date: 2026-11-06 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 — Reflection AI's open-weight MoE, 501B total / 23B active per token, Apache 2.0 license
- **Short description:** Frontier-weight open-text coding model with 1M context, served free on OpenCode Zen as Beam-Free. SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1%.
- **Provider / access:** OpenCode Zen (`opencode/beam-free`) Chat Completions API; Reflection API public beta (`platform.reflection.ai`); self-host with Apache 2.0 weights
- **Release / knowledge:** Reflection AI's first open-weight LLM; released 2026-10-24 after stealth reveal as Cat Jam
- **IDs:** `opencode/beam-free`; HF `reflection/Beam-1.0-501B-A23B`; OpenRouter `reflection/beam-1.0-501b-a23b`
- **Context window:** 1,048,576 tokens total; 131,072 max output
- **Modalities:** Text in/out only — no image, audio, video, or PDF input
- **Pricing (as of 2026-11-06):** Free on OpenCode Zen ($0/$0); self-host $0; hosted options $0.25-$1.30 in / $1.00-$4.30 out

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.1%** (vendor HF model family page)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- MCP-Atlas: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **81.6%** (primary anchor)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- DeepSWE / Coding Index: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER: no standalone retrieval-at-length result found (native 1M window)

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 80.1% is strong; lacks harder benchmark variants (TB 4.0) and other agentic test suites, capped by the missing broader tool use data.
- **Reasoning: 65/100.** No standalone GPQA/HLE/independence reasoning benchmark surfaced; SWE-bench Verified 81.6% and Terminal-Bench 80.1% suggest solid reasoning, but capped by absence of explicit reasoning evaluation.
- **Context window: 95/100.** Native 1M token window (948,576) exceeds 512K tier threshold; no ≥98%-at-512K+ retrieval evidence lowers from 100.
- **Multimodal: 10/100.** Text-only architecture; no image/audio/video input or output.
- **Coding: 82/100.** SWE-bench Verified 81.6% anchors a solid Tier-C+ score; missing LiveCodeBench/DeepSWE data caps potential higher placement.
- **Cost efficiency: 100/100.** $0 free tier on OpenCode Zen with 30-day retention policy; self-host $0; temporary revocation risk noted but instantaneous price axis is $0.
- **Overall Score: 66/100.** Mean of (80 + 65 + 95 + 10 + 82) / 5 = 66.4 → 66.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-11-06
- Method: public-internet research (HF model card, OpenCode Zen docs, OpenRouter listing); scores normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [HuggingFace `reflection/Beam-1.0-501B-A23B`](https://huggingface.co/reflection/Beam-1.0-501B-A23B)
  - [OpenCode Zen Beam model card](https://opencode.ai/docs/zen)
  - [OpenRouter `reflection/beam-1.0-501b-a23b`](https://openrouter.ai/reflection/beam-1.0-501b-a23b)
- Future sources: add a new file next to this one, e.g. `Laguna_XS_2.1_V2.md`.