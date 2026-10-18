# Xing 4.0 29B-A4B — findings by DeepSeek 4.1 Flash

- Source: China Telecom AI (`XingChen-AGI/Xing4.0-29B-A4B`, hosted as `opencode/xing_4.0_29b_a4b`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom AI's open-weight agentic MoE (latest generation of the TeleChat/Xing line), open-sourced 2026-09-17. 29B total / 4B active parameters, text-only, built for coding and terminal agents; the first model of this scale trained entirely on Huawei Ascend 910C NPUs with MindSpore/MindFormers.
- **Provider / access:** Open weights (Hugging Face / ModelScope `XingChen-AGI/Xing4.0-29B-A4B`, plus FP8 and GGUF variants); served via vLLM / SGLang / KTransformers (OpenAI-compatible); free promotional OpenCode Zen route `opencode/xing_4.0_29b_a4b`.
- **Release / knowledge:** 2026-09-17; knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`, `opencode/xing_4.0_29b_a4b`.
- **Context window:** 256,000 native, extensible to 512,000 (YaRN); official serving commands use `--max-model-len 262144` (256K).
- **Modalities:** text in / text out only; tool calls, JSON mode, reasoning/chain-of-thought.
- **Pricing (as of 2026-10-18):** Apache 2.0 open weights (self-host free); free promotional OpenCode Zen tier. No official per-token rate card found.
- **Architecture:** 29B-parameter sparse MoE, 4B active per token (64 routed experts + 1 shared, 4 active), MLA attention, 40 layers, hidden size 3584, mHC + MLA + MTP (MTP used as speculative decoding). Apache 2.0; trained on Ascend 910C / MindSpore (~96% throughput uplift over out-of-the-box).

### Raw benchmarks found

> All figures are vendor-reported (China Telecom model card). No independent harness reproduction was found.

Agent / tool use:

- Terminal-Bench 2.1: **57.5%** (vendor; ahead of Qwen3.6-35B-A3B 51.5 and Gemma4-26B-A4B 30.0)
- Tau3-Bench (pass^1): **64.63%** (vendor; Qwen3.6 67.20, Gemma4 58.90)
- Claw-Eval: **76.55** (vendor; top of the three compared)
- DeepresearchBII (OpenCode harness + Exa MCP): **60.80%** (vendor)
- MCP-Atlas / Toolathon / GDPval-AA / OSWorld: no verified public score found

Reasoning / knowledge:

- AIME 2026: **90.0%** (vendor; Qwen3.6 92.70, Gemma4 88.30)
- IFBench (instruction following): **69.67%** (vendor)
- AA-LCR: **61.0%** (vendor; trails both Qwen3.6 62.0 and Gemma4 66.0)
- GPQA Diamond: no verified public score found; HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **75.0%** (vendor; Gemma4 53.0, Qwen3.6 76.0)
- SWE-bench Multilingual: **66.0%** (vendor; Qwen3.6 67.20, Gemma4 51.0)
- Terminal-Bench 2.1: **57.5%** (vendor); DeepSWE / LiveCodeBench / SciCode: no verified public score found

Long context:

- No MRCR/RULER/GraphWalks figure found; AA-LCR 61.0% (vendor) is the only long-context signal, and it is the model's weakest reported row.

### Normalized scores (1–100)

- **Tool use: 71/100.** Terminal-Bench 2.1 57.5%, Claw-Eval 76.55 and Tau3 64.63 show genuine agentic strength for a 4B-active model, but there is no MCP-Atlas/GDPval coverage and Claw-Eval is a vendor harness.
- **Reasoning: 66/100.** AIME 2026 90.0% is strong, but AA-LCR 61.0% and IFBench 69.67% are mid-tier and GPQA/HLE are unreported.
- **Context window: 74/100.** 256K native / 512K extensible lands in the 200K–500K band, above the 200K = 70 anchor.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 76/100.** SWE-bench Verified 75.0% and Multilingual 66.0% are strong for 4B active, just behind Qwen3.6-35B-A3B; no DeepSWE/LiveCodeBench and a vendor-only evidence base cap it.
- **Cost efficiency: 100/100.** Apache 2.0 weights self-host free, plus a free promotional Zen tier.
- **Overall Score: 60/100.** (71 + 66 + 74 + 15 + 76) / 5 = 60.4 → 60. Best fit: self-hosted, Ascend-friendly coding/terminal agents where a 4B-active footprint matters more than peak reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (China Telecom GitHub/Hugging Face model card, aimodeling.com, MindStudio, threatfrontier, localmodelwatch, TechCrunch/StreetInsider PR); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
