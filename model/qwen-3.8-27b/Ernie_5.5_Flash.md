# Qwen3.8 27B — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.8-27B (`qwen-3.8-27b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 27B
- **Short description:** Alibaba's open-weight 27B Qwen3.8 vision-language model (released 2026-08-14) for visual reasoning, documents and agent tasks — the small dense sibling of the 2.4T flagship.
- **Provider / access:** OpenRouter (`qwen/qwen3.8-27b`), Hugging Face (`Qwen/Qwen3.8-27B`), DeepInfra, AI/ML API, Empirio Labs, Munito, plus ~54 routes. Open weights.
- **Release / knowledge:** 2026-08-14 (models.dev); knowledge cutoff not published.
- **IDs:** `qwen-3.8-27b`, `Qwen/Qwen3.8-27B`, `qwen/qwen3.8-27b`.
- **Context window:** 1,048,575 tokens on OpenRouter (262,144 on DeepInfra/others); max output 235,929 (OpenRouter).
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.15 / $1.875 per 1M input/output on OpenRouter; cache read $0.0375. DeepInfra lists $0.20/$2.50.
- **Architecture:** open-weight dense/VL model, 27B parameters (Qwen); config in the Hugging Face repo.

### Raw benchmarks found

> All figures are Qwen's own table from the `Qwen/Qwen3.8-27B` model card, Qwen3.8-27B column (compared there with Qwen3.6-27B, Qwen3.7-Plus, Muse Glimmer-30B and Opus 4.6 Max).

Agent / tool use:

- OSWorld-Verified: **84.3** (best-in-table, ahead of Qwen3.7-Plus 73.3)
- AndroidWorld: **81.9**; Terminal Bench 2.1 (Terminus): **73.0**; WebArena-Verified: **64.8**
- CoWorkBench: **70.7**; JobBench: **33.4**; Agents' Last Exam: **pass@1 10.6 / score 27.3**
- ClawEval-MM: **pass@3 57.4 / average 56.9**; RecreationBench: **47.1**

Reasoning / knowledge:

- GPQA Diamond: **89.2** (best-in-table)
- HLE: **30.8**; IFBench: **79.5**
- BabyVision: **65.7** (without CI); CharXiv (RQ): **83.7**; ERQA: **65.5**
- CritPt / ARC-AGI: no rows in this table

Coding:

- LiveCodeBench v6: **90.3** (best-in-table)
- QwenSWEBench: **79.0**; SWE-bench Pro: **61.7**; NL2Repo-Bench: **42.3**; DeepSWE 1.1: **42.2**
- SWE-MM (multimodal software engineering): **38.6**; Vision2Web: **62.9**

Long context:

- 1M window on the OpenRouter route (262K elsewhere); no MRCR / RULER row in the vendor table

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 84.3% and AndroidWorld 81.9% are the best in Qwen's own table, TB2.1 73.0 and CoWorkBench 70.7 mid; JobBench 33.4 and Agents' Last Exam 27.3 are weak.
- **Reasoning: 78/100.** GPQA Diamond 89.2 is strong for a 27B model, IFBench 79.5 good; HLE 30.8 and BabyVision 65.7 show the small-model ceiling.
- **Context window: 100/100.** 1,048,575 tokens on the OpenRouter route (262K on most others).
- **Multimodal: 88/100.** Text, image and video in with MathVision 90.0, OmniDocBench 1.5 91.1, RealWorldQA 85.9 and CharXiv 83.7 — the strongest verified multimodal profile of any 27B-class model here.
- **Coding: 78/100.** LiveCodeBench v6 90.3% and QwenSWEBench 79.0 are excellent, but SWE-bench Pro 61.7%, DeepSWE 42.2% and SWE-MM 38.6% are mid.
- **Cost efficiency: 95/100.** $0.15/$1.875 per 1M with open weights — 27B-class pricing with 1M-context capability.
- **Overall Score: 85.2/100.** Best fit for self-hosted document/visual AI and cost-sensitive agent work; the best small open model for multimodal tasks in this dataset.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.8-27B Hugging Face model card and its vendor benchmark table, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.8-27B — Hugging Face model card (benchmark table)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Qwen3.8-27B — OpenRouter](https://openrouter.ai/qwen/qwen3.8-27b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_27B_v2.md`, using the same headings.