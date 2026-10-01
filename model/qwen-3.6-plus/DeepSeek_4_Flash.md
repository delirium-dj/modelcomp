# Qwen 3.6 Plus — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen (`opencode/qwen-3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba Cloud Model Studio's hosted production tier of the Qwen3.6 generation, the follow-up to Qwen3.5 that prioritizes agentic coding, frontend/repo-level reasoning, and thinking-preservation across turns. No Plus-specific model card is published, so this report uses the flagship open Qwen3.6 card as the closest verified public proxy.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.6-plus`; Alibaba Cloud Model Studio / QwenCloud (OpenAI-compatible Chat Completions).
- **Release / knowledge:** Qwen3.6 series opened 2026-04-16 (35B-A3B) / 2026-04-22 (27B); Plus is the hosted variant. Knowledge cutoff not stated.
- **IDs:** `opencode/qwen-3.6-plus`
- **Context window:** 262,144 native, extensible to ~1,010,000 tokens (Qwen3.6 model card); hosted Plus typically exposes a larger default window.
- **Modalities:** unified vision-language (image/video in; text out); thinking on by default with `preserve_thinking`; tool calls.
- **Pricing (as of 2026-10-02):** hosted pay-as-you-go tier; a Plus-specific per-1M-token rate was not verified this pass. No free Zen ID.
- **Architecture:** Qwen3.6 open variants are dense (27B) and MoE (35B-A3B) with Gated DeltaNet + Gated Attention; Apache-2.0 for the released sizes. Plus size undisclosed.

### Raw benchmarks found

> PROXY NOTE: no public benchmark page exists for "Qwen3.6-Plus" specifically; the numbers are Qwen3.6-27B's published card results (the flagship coding variant of the generation), used as the closest verified proxy and labelled provisional.

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Harbor/Terminus-2, avg of 5)
- Claw-Eval Avg: **72.4**; Claw-Eval Pass^3: **60.6**
- SkillsBench Avg@5: **48.2**
- QwenClawBench: **53.4**
- WildClawBench (HF leaderboard, overall): **43.2**
- TAU2-Bench / BFCL-V4 / MCP-Mark / Terminal-Bench 2.1: no verified public score found for 3.6-27B

Reasoning / knowledge:

- GPQA Diamond: **87.8%**
- MMLU-Pro: **86.2%**; MMLU-Redux: **93.5%**; SuperGPQA: **66.0%**; C-Eval: **91.4%**
- AIME26: **94.1%**; HMMT Feb 26: **84.3%**; IMOAnswerBench: **80.8%**
- HLE: **24.0%**
- LiveCodeBench v6: **83.9%**
- Artificial Analysis Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **77.2%**
- SWE-bench Pro: **53.5%**
- SWE-bench Multilingual: **71.3%**
- QwenWebBench (internal front-end, Elo): **1487**
- NL2Repo: **36.2%**
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- Native 262K, YaRN-extensible to ~1.01M. No published MRCR/RULER/AA-LCR figure for 3.6-27B.

Vision (unified model):

- MMMU-Pro: **75.8%**; MMMU: **82.9%**
- CharXiv RQ: **78.4%**; CC-OCR: **81.2%**; OCRBench: **89.4%**
- ERQA: **62.5%**; RefSpatialBench: **70.0%**
- VideoMME (w/ sub): **87.7%**; VideoMMMU: **84.4%**; MLVU: **86.6%**

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 59.3% and Claw-Eval 72.4 are strong for a 27B-class agent; capped by a middling SkillsBench 48.2 and no TAU2/MCP-Mark figures.
- **Reasoning: 84/100.** GPQA 87.8%, AIME26 94.1% and LiveCodeBench 83.9% are excellent; HLE 24.0% and no AA Intelligence Index keep it below the 90s.
- **Context window: 84/100.** 262K native with ~1.01M YaRN extension is mid-high; no published long-context retrieval measurement to justify more.
- **Multimodal: 82/100.** Strong image (MMMU-Pro 75.8%), OCR (89.4%) and video (87.7%) understanding in a 27B model; text output only, no audio.
- **Coding: 86/100.** SWE-bench Verified 77.2%, SWE-bench Pro 53.5% and Multilingual 71.3% put it at flagship-coding level for its size; internal-harness QwenWebBench Elo only.
- **Cost efficiency: 80/100.** Hosted pay-as-you-go Plus tier and an efficient hybrid architecture are cost-competitive, but the exact per-token rate was not verified (score provisional).
- **Overall Score: 84.0/100.** Half-up mean of the five quality dims (84+84+84+82+86)/5 = 84.0. Best-fit recommendation: cost-sensitive agentic coding and multimodal document/video work where a large context is useful.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Qwen3.6-27B Hugging Face model card used as the closest published proxy for the hosted Plus tier; Qwen3.6 release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
