# GLM 5.2 — findings by Flint

- Source: Z.ai (Zhipu AI) / Hugging Face / Vals AI / Artificial Analysis / BenchLM / LMArena / Kilo Code / NVIDIA NIM / CrossModel / NIST CAISI / docs.z.ai
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2
- **Short description:** Z.ai's (Zhipu AI) open-weight flagship reasoning/coding model built for long-horizon tasks, with a stable 1M-token context; strongest open-source model on several coding and long-horizon benchmarks at release.
- **Provider / access:** Z.ai API (`glm-5.2`; reasoning_effort high/max; OpenAI-compatible + Anthropic protocols); open weights (MIT) on Hugging Face (`zai-org/GLM-5.2`); third-party routes via OpenRouter / NVIDIA NIM / Z.ai Coding Plan. Paid — no Free ID found on OpenCode Zen (closest: paid `opencode/glm-5.1`).
- **Release / knowledge:** Released 2026-11-06; knowledge cutoff not verified in sources found.
- **IDs:** `zai-org/GLM-5.2`; API tag `glm-5.2`.
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens (128K).
- **Modalities:** Text in; text out; reasoning yes (High / Max effort); tool calls yes (function calling, JSON mode, streaming tool calls); web search yes. Image/audio/video/file: not supported (text-only).
- **Pricing (as of 2026-11-06):** $1.40 input / $4.40 output / $0.275 cached input per 1M tokens (Z.ai API, Artificial Analysis, EmpirioLabs); web search $0.013/call; enterprise plans from $18/mo.
- **Architecture:** 753B-parameter MoE (753,329,940,480 params; ~40B active) with DSA (Dense-Sparse-Alternating) + IndexShare sparse attention; MTP with IndexShare/KVShare; MIT open weights.

### Raw benchmarks found

Official (Z.ai / HF / NVIDIA NIM / CrossModel):

- Terminal-Bench 2.1: GLM-5.2 **81.0** (vs GLM-5.1 63.5; within ~4 pts of Claude Opus 4.8 85.0; ahead of Gemini 3.1 Pro / GPT-5.5 on open tier).
- SWE-bench Pro: GLM-5.2 **62.1** (vs GLM-5.1 58.4; GPT-5.5 58.6; strongest open-source).
- FrontierSWE: **74.4** (Opus 4.8 75.1; GPT-5.5 72.6).
- SWE-Marathon: GLM-5.2 second only to Opus 4.8 (trailing by 13%).
- Reasoning: HLE 40.5; HLE w/ tools 54.7; CritPt 20.9; AIME 2026 99.2; HMMT Nov 2025 94.4; HMMT Feb 2026 92.5; GPQA-D 91.2 (GLM-5.1 86.2).

Independent (Vals AI, Artificial Analysis, BenchLM, LMArena, Kilo Code, NVIDIA, CrossModel, NIST):

- Vals AI: Context 1M; max out 131k; costs $1.40/$4.40; weights open; Vals Index accuracy 56.71%; SWE-bench 82.80% ±1.69 (18/88); Terminal-Bench 2.1 67.79% ±0.99 (33/75); Vibe Code Bench 63.96%; GPQA Diamond 85.61% ±1.77; LiveCodeBench 69.50% ±1.18; LegalBench 84.07%; Code Migration 37.87%.
- Artificial Analysis: Intelligence Index v4.1 **51** — leading open-weight model (ahead of MiniMax-M3 44, DeepSeek V4 Pro max 44, Kimi K2.6 43); GDPval-AA v2 **1524** (ahead of MiniMax-M3 1418, DeepSeek-V4-Pro max 1328; close to GPT-5.5 xhigh 1514); AA-LCR (Max) 78.3; AA Coding Index 68.8.
- BenchLM: overall **60.03/100**, rank #52/1004; coverage 49/724 (partial → conservative).
- LMArena: GLM-5.2 (Max) Overall **1464** (#35/374, 14,228 votes); Coding **1511** (#33/369); Math 1477 (#22/362); Hard Prompts 1487 (#32/374).
- NIST CAISI (2026-11-06): GLM-5.2 probably the most capable open-weight AI model at release; overall capabilities similar to GPT-5.2 (2025-12); cyber capabilities similar to Opus 4.6; safeguards mixed.
- Kilo Code / OpenClaw: PinchBench average **87.0%** (#13/50); OpenClaw agent benchmarks; Security from Enkrypt AI Safety Leaderboard (Oct 2026).
- VentureBeat / New Horizon: GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for ~1/6 cost.

### Cross-source comparison

- Vendor (Z.ai) vs independent (AA/Vals/BenchLM/LMArena) on scale: AA Intelligence Index 51, BenchLM 60.03, LMArena Elo 1464, Vals Index — different composite constructions.
- Coding: Z.ai TB2.1 81.0 vs Vals TB2.1 67.79% vs AA Coding Index 68.8 vs Vals SWE-bench 82.8% — same benchmark family, harness variance.
- GLM-5.2 vs GLM-5.1 improvements: context 200K→1M, TB2.1 63.5→81.0, SWE-bench Pro 58.4→62.1, Tool-Decathlon 40.7→48.2.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic: MCP-Atlas 76.8, Tool-Decathlon 48.2, FrontierSWE 74.4, TB2.1 81.0, GDPval-AA 1524 Elo. Cap: mid-frontier agentic (below GPT-5.5-class on GDPval-AA).
- **Reasoning: 70/100.** GPQA-D 91.2, AIME 2026 99.2, HMMT ~94, HLE 40.5, HLE w/ tools 54.7, LCR (AA, Max) 78.3, AA Intelligence Index 51, LMArena Math 1477. Cap: CritPt 20.9 adversarial; HLE ceiling.
- **Context window: 95/100.** 1,048,576 tokens natively (IndexShare), 131,072 max output; stable long-horizon use.
- **Multimodal: 15/100.** Text-only in/out (docs.z.ai, CrossModel, NVIDIA NIM, Vals, EmpirioLabs); GLM-5.3-Flash is the visual model; Design Arena entries are text-prompted code-gen.
- **Coding: 72/100.** TB2.1 81.0, SWE-bench Pro 62.1, FrontierSWE 74.4, Vals SWE-bench 82.8%, LiveCodeBench 69.5%, AA Coding Index 68.8. Cap: trailing Opus 4.8 (85.0) on TB2.1.
- **Cost efficiency: 70/100.** MIT open weights; hosted $1.40/$4.40 per 1M; enterprise from $18/mo; open-weight value moderate vs. price.

- **Overall Score: 64/100.** Mean of the five quality dims (68 + 70 + 95 + 15 + 72) / 5 = **64**; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Z.ai blog, docs.z.ai, Hugging Face, NVIDIA NIM) plus independent benchmarks/reviews (Vals AI, Artificial Analysis, BenchLM, LMArena, Kilo Code) — four independent web searches.
- Reference URLs:
  - [GLM-5.2: Built for Long-Horizon Tasks | Z.ai](https://z.ai/blog/glm-5.2)
  - [GLM 5.2 | Z.ai API docs](https://docs.z.ai/guides/llm/glm-5.2)
  - [GLM-5.2 | Hugging Face](https://huggingface.co/zai-org/GLM-5.2)
  - [GLM-5.2 is the new leading open weights model on the Artificial Analysis Intelligence Index](https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
