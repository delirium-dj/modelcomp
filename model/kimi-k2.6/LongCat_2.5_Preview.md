# Kimi K2.6 — findings by LongCat 2.5 Preview

- Source: Moonshot AI/Kimi (`moonshotai/Kimi-K2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Open-weights 1T-parameter MoE (32B active) reasoning model from Moonshot AI, built for long-horizon coding, agentic tool use, and native multimodal (text/image/video) input.
- **Provider / access:** Moonshot AI platform API `https://platform.moonshot.ai` (OpenAI/Anthropic-compatible); open weights on Hugging Face `moonshotai/Kimi-K2.6` for self-hosting (vLLM, SGLang, KTransformers). Chat Completions API.
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff not formally disclosed.
- **IDs:** `moonshotai/Kimi-K2.6` (Hugging Face); Moonshot platform model ID `kimi-k2.6` (per official docs)
- **Context window:** 256K tokens (262,144 per official model card; verified via HF card and Artificial Analysis)
- **Modalities:** text, image, video in; text out; reasoning yes (thinking mode, preserve-thinking supported); tool calls yes (interleaved multi-step); JSON mode not explicitly documented
- **Pricing (as of 2026-09-29):** $0.95/1M input, $4.00/1M output, 83% cache discount (blended ~$0.70/1M); paid, not free. Open weights allow self-hosting at hardware cost only.
- **Architecture:** MoE, 1T total / 32B active, 384 experts (8 routed + 1 shared per token), 61 layers (1 dense), MLA attention, SwiGLU, MoonViT 400M vision encoder; Modified MIT license (open weights)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **66.7%** (official HF model card)
- Toolathlon: **50.0%** (official HF model card)
- MCPMark: **55.9%** (official HF model card)
- Claw Eval (pass@3): **80.9%** (official HF model card, v1.1)
- OSWorld-Verified: **73.1%** (official HF model card)
- BrowseComp: **83.2%** (official HF model card, with tools)
- APEX-Agents: **27.9%** (official HF model card, 452/480 public tasks)
- HLE-Full (w/ tools): **54.0%** (official HF model card)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA-Diamond: **90.5%** (official HF model card)
- HLE-Full: **34.7%** (official HF model card; text-only subset 36.4% without tools)
- AIME 2026: **96.4%** (official HF model card)
- HMMT 2026 (Feb): **92.7%** (official HF model card)
- IMO-AnswerBench: **86.0%** (official HF model card)
- Artificial Analysis Intelligence Index: **27 / #22 of 116** in class (artificialanalysis.ai, v4.3.2)
- AA-Omniscience Accuracy / Hallucination Rate: no standalone verified public score found (contributes to Index)

Coding:

- SWE-bench Verified: **80.2%** (official HF model card)
- SWE-bench Pro: **58.6%** (official HF model card)
- SWE-bench Multilingual: **76.7%** (official HF model card)
- LiveCodeBench (v6): **89.6%** (official HF model card)
- SciCode: **52.2%** (official HF model card)
- OJBench (python): **60.6%** (official HF model card)
- Terminal-Bench 2.0: **66.7%** (see tool use)

Long context:

- 256K context window; AA-LCR v1.1 contributes to Intelligence Index 27; no standalone MRCR/RULER retrieval score reported

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.0 66.7% plus Claw Eval pass@3 80.9%, OSWorld 73.1%, Toolathlon 50.0%, MCPMark 55.9% and BrowseComp 83.2% sit above the mid band but below frontier (TB 88%+); APEX-Agents 27.9% and missing Tau3/GDPval numbers cap the score.
- **Reasoning: 82/100.** GPQA-Diamond 90.5% is frontier-grade and AIME 96.4 / HMMT 92.7 are elite, but HLE-Full 34.7% and AA Intelligence Index 27 (mid band 20–35) keep it under the 90+ tier.
- **Context window: 73/100.** 256K tokens lands in the 200K–500K tier (65–84); no public long-context retrieval score (MRCR/RULER) to push it higher.
- **Multimodal: 82/100.** Text + image + video input with strong vision results (MMMU-Pro 79.4, MathVision 87.4, V* 96.9 w/ python) fits the 75–90 video-in tier; no audio input or non-text output.
- **Coding: 86/100.** SWE-bench Verified 80.2% + LiveCodeBench v6 89.6% + SciCode 52.2% are near-frontier; Terminal-Bench 66.7% and SWE-Pro 58.6% keep it short of the 90–100 tier.
- **Cost efficiency: 89/100.** $0.95/$4.00 per 1M (blended ~$0.70 with 83% cache discount) falls between the ~$0.60/$2.20 (92) and ~$1.25/$4.25 (88) reference tiers; open weights enable self-hosting.
- **Overall Score: 81/100.** Mean of (80 + 82 + 73 + 82 + 86) / 5 = 80.6 → 81. Best fit: strong open-weights all-rounder for coding and agentic work when self-hosted or at its mid-tier price.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-09-29
- Method: public internet research (official Hugging Face model card, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
