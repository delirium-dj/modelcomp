# Ling-2.6-flash — findings by Ernie 5.5 Flash

- Source: inclusionAI / Ant Group (`Ling-2.6-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash (Ling 2.6 Flash; anonymous beta was "Elephant Alpha")
- **Short description:** Ant Ling's efficiency-first instruct model: 104B total / 7.4B active MoE with hybrid linear attention (MLA + Lightning Linear, 1:7), tuned for agentic tool calling, multi-step planning and high token efficiency rather than peak reasoning depth. Unveiled after a week as OpenRouter's anonymous "Elephant Alpha".
- **Provider / access:** Ant Ling platform (`chat.ant-ling.com`), OpenRouter `inclusionai/ling-2.6-flash` (+ `:free`), Hugging Face `inclusionAI/Ling-2.6-flash`, vLLM recipes; works in Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw.
- **Release / knowledge:** 2026-04-22/23 (open beta as Elephant Alpha ~2026-04-15); knowledge cutoff not published.
- **IDs:** `inclusionai/ling-2.6-flash` (OpenRouter), `inclusionAI/Ling-2.6-flash` (HF)
- **Context window:** 131,072 tokens (vLLM recipe: 128K), with long-context mid-training in the base checkpoint; no extended window claimed.
- **Modalities:** text in / text out (instruct model, no vision). Tool calling, structured output, reasoning mode optional in agent harnesses.
- **Pricing (as of 2026-11-12):** $0.10 / 1M input, $0.30 / 1M output, $0.02 / 1M cache hits (OpenRouter, post-trial); Ant platform gives 500,000 free tokens/day, then ¥0.6/¥1.8 per 1M.
- **Architecture:** 104B total / 7.4B active MoE (BailingMoeV2_5), hybrid linear attention (MLA + Lightning Linear 1:7) inherited from Ling 2.5/2.0, BF16/FP8/INT4 checkpoints; open weights promised.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **reported as at/near SOTA for its size** (Ant release post, chart-only — no number printed)
- TAU2-bench: **reported competitive** (official v1.0.0 harness, GPT-5.2 as user agent; chart-only, no number printed)
- Claw-Eval: **reported competitive** (official leaderboard, 2026-03-25 version; chart-only, no number printed)
- PinchBench: **reported competitive** (official leaderboard 2026-04-20; chart-only, no number printed)
- Terminal-Bench 2.1 / GDPval-AA / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (Ant release post, AA comparison chart), reached with only 15M output tokens vs ~110M for Nemotron-3-Super
- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** (charts only)
- AA output speed: **215 tokens/s** at its parameter scale (vendor-measured); 340 tokens/s on 4×H20 in Ant's internal test
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **reported competitive/SOTA at size** (chart-only, no number printed)
- LiveCodeBench / SciCode / DeepSWE / SWE-Pro: **no verified public score found**

Long context:

- No MRCR / RULER / GraphWalks figures; the 128K window comes from the vLLM recipe and long-context mid-training is claimed without a retrieval table.

### Normalized scores (1–100)

- **Tool use: 62/100.** Ant claims BFCL-V4, TAU2, Claw-Eval and PinchBench results at or near SOTA for the size, and the model is explicitly RL-tuned for tool calling and multi-step execution — but no numeric row is published, so the score stays in the low 60s.
- **Reasoning: 55/100.** AA Intelligence Index 26 is a modest mid-band result, consistent with the vendor's stated trade-off (concise output over long consideration) and its acknowledged tool hallucination in complex scenarios; no GPQA/HLE figures exist.
- **Context window: 58/100.** 131,072 tokens places it in the 100K–200K band (50–64); no retrieval measurement is published.
- **Multimodal: 15/100.** Text-only instruct model — no image, video or audio input.
- **Coding: 60/100.** SWE-bench Verified is claimed competitive at its size and the model is demonstrated in Kilo Code/Claude Code workflows, but with no printed number the score is a cautious read of the vendor claim.
- **Cost efficiency: 97/100.** $0.10/$0.30 per 1M plus a 500K-token daily free quota on Ant's platform is near-bottom-tier pricing; not counted toward Overall.
- **Overall Score: 50/100.** Mean of tool use 62, reasoning 55, context 58, multimodal 15, coding 60. Best fit: high-frequency agent execution where token cost and latency dominate (extraction, tool loops, rapid prototypes, long-form drafting); not a deep-reasoning or multimodal model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12 UTC
- Method: public internet research (Ant Ling release blog as primary source, OpenRouter listing, vLLM recipe, Hugging Face base card); scores are normalized 1–100 interpretations, not official vendor scores. Ant's benchmark comparisons are chart-only and were not numerically verified.
- Reference URLs:
  - [Ant Ling — Ling-2.6-flash release (benchmarks, architecture, pricing)](https://developer.ant-ling.com/en/blogs/ling-2.6-flash-release)
  - [OpenRouter — inclusionai/ling-2.6-flash](https://openrouter.ai/inclusionai/ling-2.6-flash)
  - [vLLM Recipes — inclusionAI/Ling-2.6-flash (128K context)](https://recipes.vllm.ai/inclusionAI/Ling-2.6-flash)
  - [Hugging Face — inclusionAI/Ling-2.6-flash-base](https://huggingface.co/inclusionAI/Ling-2.6-flash-base)
  - [BusinessWire — Ant Group unveils Ling-2.6-Flash](https://www.businesswire.com/news/home/20260422256825/en/Ant-Group-Unveils-Ling-2.6-Flash-A-Major-Leap-in-AI-Efficiency)