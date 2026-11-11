# Qwen3.8 — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.8-2.4T-A95B (`qwen-3.8`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (Qwen3.8-2.4T-A95B)
- **Short description:** Alibaba's open-weight Qwen3.8 flagship (released 2026-08-08/08-12): a 2.4T-total / 95B-active sparse MoE and the first Qwen-Max-class model released as open weights. Text-only language model — the vision and 1M-default-context extras ship in the hosted Qwen3.8-Max service.
- **Provider / access:** Self-hosted (Hugging Face `Qwen/Qwen3.8-2.4T-A95B`, FP8 variant), Qwen Cloud / Model Studio, OpenRouter, DeepInfra, GmiCloud, plus ~30 routes. Licence: `qwen3.8-max` (custom).
- **Release / knowledge:** 2026-08-08 (weights) / 2026-08-12 (listings); knowledge cutoff not published.
- **IDs:** `qwen-3.8`, `Qwen/Qwen3.8-2.4T-A95B`, `qwen/qwen3.8-2.4t-a95b`, `qwen3.8-max` (hosted service based on these weights).
- **Context window:** 1,000,000 tokens (declared for the model family; the open checkpoint's config follows the Qwen3.8 line).
- **Modalities:** text in / text out only — the open checkpoint is a language model; image input is a hosted-Max-only feature. Reasoning with `reasoning_effort` control and `preserve_thinking`; tool calls.
- **Pricing (as of 2026-11-11):** open weights are free to self-host; hosted Qwen3.8-Max-class routes run ~$2.00 / $6.00 per 1M input/output (Qwen3.8-Max listing), with cheaper third-party lanes.
- **Architecture:** sparse MoE, 2.4T total / 95B active (Qwen); built on the Qwen3.5 architecture with the Qwen3.8 post-training stack.

### Raw benchmarks found

> All figures below are Qwen's own table from the `Qwen/Qwen3.8-2.4T-A95B` model card, Qwen3.8-Max column (the hosted build of these weights), compared there against Opus 4.8, Fable 5, GPT-5.6 Sol (max) and Qwen3.7-Max.

Agent / tool use:

- Terminal-Bench 2.1: **86.6** (Opus 4.8 84.6, Fable 5 84.6, GPT-5.6 Sol max 88.8, Qwen3.7-Max 74.5)
- Toolathlon Verified (pass@1): **72.5**; CoWorkBench: **74.8**; WorkSpaceBench: **67.7**; JobBench: **53.4**; Automation-Bench (pass@1): **27.3**
- SkillsBench: **70.2**; AndroidBench: **75.1**; WideSearch: **81.9**
- Agents' Last Exam: **27.0 pass / 52.4 score**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows in this table

Reasoning / knowledge:

- GPQA Diamond: **92.6** (best-in-table, ahead of Opus 4.8-class)
- HLE with tools: **56.2**; HLE without tools: **43.6**; IFBench: **82.8**
- PaperBench: **93.0**; MLS-Bench-Lite: **41.0**; HealthBench: **60.2**
- $OneMillion-Bench (expert score): **52.5**; PLawBench: **73.2**; PRBench-Legal: **57.6**; PRBench-Finance: **58.3**

Coding:

- SWE-bench Pro: **67.7** (Fable 5 80.0, GPT-5.6 Sol max 64.6, Qwen3.7-Max 60.6)
- FrontierSWE: **73.5**; NL2Repo-Bench: **55.9**; DeepSWE 1.1: **56.6**; QwenSWEBench: **80.7**
- QwenQoderBench: **58.4**; QwenReactBench: **1724**; QwenSVGBench: **1713**

Long context:

- MRCR v2 256K (8-needle): **92.9**; LongBench v2: **66.3**

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 86.6 and Toolathlon 72.5 are strong, CoWorkBench 74.8 good; Automation-Bench 27.3 and Agents' Last Exam 27.0 pass are weak, and no Terminal-Bench 4.x row exists.
- **Reasoning: 85/100.** GPQA Diamond 92.6 is the headline (best in the vendor's comparison table), IFBench 82.8 strong, PaperBench 93.0 excellent; HLE 43.6 without tools and MLS-Bench-Lite 41.0 cap it.
- **Context window: 100/100.** 1,000,000 tokens with MRCR v2 92.9% at 256K — verified retrieval, not just a declared window.
- **Multimodal: 15/100.** The open checkpoint is text-only (vision input is a hosted-Max-only feature), so it scores at the text-only floor.
- **Coding: 82/100.** SWE-bench Pro 67.7 and FrontierSWE 73.5 are good, QwenSWEBench 80.7 strong; DeepSWE 1.1 56.6 and NL2Repo 55.9 are mid-pack.
- **Cost efficiency: 90/100.** Open weights (free to self-host) and a ~$2/$6 hosted rate — the cheapest path to 2.4T-class quality.
- **Overall Score: 72.8/100.** Best fit for self-hosted text reasoning at 1M context; the text-only checkpoint makes it unsuitable as a multimodal default (use `qwen-3.8-max` for that).

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.8-2.4T-A95B Hugging Face model card and its vendor benchmark table, Qwen3.8-Max overview, llm-stats/benchleader listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.8-2.4T-A95B — Hugging Face model card (benchmark table)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8-Max overview — Qwen](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen3.8-2.4T-A95B benchmarks — llm-stats](https://llm-stats.com/models/qwen3.8-2.4t-a95b)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_v2.md`, using the same headings.