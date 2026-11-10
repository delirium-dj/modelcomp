# Xing 4.0 29B-A4B — findings by Inkling 2 Small

- Source: China Telecom Artificial Intelligence Technology Co., Ltd. / XingChen-AGI (`xing_4.0_29b_a4b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom's next-gen agentic MoE (formerly the TeleChat line) — 29B total / 4B active, native 256K context extensible to 512K, trained end-to-end in-house (silicon to software) for long-context planning, tool calling and structured output. Apache 2.0 open weights. (Folder slug uses legacy underscore spelling; the findings stem in this file is my own.)
- **Provider / access:** Open weights on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`, FP8 + GGUF quants); ModelScope; Modelers; Tianyi AI Platform API (OpenAI-compatible); SGLang mainline (#39793), llama.cpp b12174+, vLLM out-of-tree plugin.
- **Release / knowledge:** 2026-09-16; knowledge cutoff not publicly stated.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (HF)
- **Context window:** 256,000 native (512K extensible); SWE-bench evaluated at 210K; Claw-Eval/Deepresearch at 256K.
- **Modalities:** text in → text out (no vision); reasoning yes (thinking via chat_template_kwargs); tool calls yes (Claw-Eval measured).
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights — self-host free; hosted pricing via Tianyi platform not publicly fixed.
- **Architecture:** MoE, 29B total / 4B active, 40 layers, mHC + MLA + MTP, 64 routed experts (4 active + 1 shared), MLA attention, 1.5T ZH/EN tokens.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **76.55** (official harness, avg of 3 runs; vendor card)
- Tau3-Bench: **64.63** (official harness, pass^1 avg of 4 runs; vendor card)
- Terminal-Bench 2.1: **57.5** (terminus-2, avg of 3 runs; vendor card)
- DeepresearchBII: **60.8** (OpenCode harness, Exa MCP; vendor card)
- IFBench: **69.67** (vendor card)

Reasoning / knowledge:

- AIME 2026: **90.0** (5 runs, max_tokens 131072; vendor card)
- AA.LCR: **61.0** (3 runs; vendor card)

Coding:

- SWE-bench Verified: **75.0** (SWE-agent, 210K ctx; vendor card)
- SWE-bench Multilingual: **66.0** (SWE-agent; vendor card)
- Terminal-Bench 2.1: **57.5** (vendor card)
- (Comparison anchors from the same card: Qwen3.6-35B-A3B SWE-V 76.0 / TB 51.5; Gemma4-26B-A4B 53.0 / 30.0)

Long context:

- AA.LCR: **61.0%** at 256K; native 256K window (512K extensible).

Multimodal:

- Text-only — score 15 by the text-only rule; no verified public multimodal evidence exists.

### Normalized scores (1–100)

- **Tool use: 68/100.** Claw-Eval 76.55 (SOTA in its comparison table) and Tau3 64.63 verify real tool agency; TB 2.1 57.5 and IFBench 69.67 consistent; capped by unpublished MCP/GDPval rows.
- **Reasoning: 68/100.** AIME 2026 90.0 is striking for 4B-active; AA.LCR 61.0 tempers — strong pattern-math, average long-context reasoning.
- **Context window: 78/100.** 256K native (512K extensible) — top-tier window for open MoE; AA.LCR 61.0 shows usable-but-not-perfect retrieval.
- **Multimodal: 15/100.** Text-only — the mandatory text-only floor.
- **Coding: 73/100.** SWE-bench Verified 75.0, Multilingual 66.0, TB 2.1 57.5 — genuinely agentic coding; approaching Qwen3.6-35B-A3B per vendor table; unverified externally.
- **Cost efficiency: 90/100.** Apache 2.0 open weights, 4B active, GGUF ~11–34 GB builds — outstanding self-host economics.
- **Overall Score: 60/100.** (68 + 68 + 78 + 15 + 73) / 5 = 60.4 → 60. Best fit: cheap open-weight agentic coding/tool-use at 256K context on domestic (China Telecom) or commodity clusters; text-only, verify externally.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (XingChen-AGI HF model card + GitHub, artifact read of the vendor benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xing4.0-29B-A4B — Hugging Face model card](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  - [Xing4.0-29B-A4B — GitHub](https://github.com/XingChen-AGI/Xing4.0-29B-A4B)
  - [Training Report of TeleChat3-MoE (arXiv:2512.24157)](https://arxiv.org/abs/2512.24157)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
