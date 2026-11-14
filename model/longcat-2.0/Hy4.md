- Source: Meituan/LongCat-2.0
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's 2026-06-30 open 1.6T-parameter MoE foundation model, fully trained and served on a 50,000-card domestic Chinese compute cluster. A distinct model; `longcat-2.5` is its successor. Per the project identity roster, the stealth name `owl-alpha` was merged into this folder (revealed-stealth rule) and must never be re-scaffolded.
- **Provider / access:** Open weights from 2026-07-06 in BF16 / FP8 / INT8 with domestic-accelerator-optimised inference; Huawei Ascend and other domestic chip Day-1 adaptations.
- **Release / knowledge:** preview 2026-04 (OpenRouter `Owl Alpha`), GA 2026-06-30, open-sourced 2026-07-06; knowledge cutoff: no verified public score found.
- **IDs:** `longcat-2.0`; stealth alias `owl-alpha` (revealed, never a folder). No free Zen ID verified.
- **Context window:** **1,000,000 tokens native**.
- **Modalities:** text and code in, text/code out (the 2.5 successor added native vision — lineage, not this model). No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** free open weights; no API rate card in the retrieved pages — no verified public price found.
- **Architecture:** MoE, **1.6T total / ~48B average active (33B–56B dynamic range)**; **>30T pretraining tokens** across Chinese/English/multilingual/code; ScMoE cross-layer shortcuts, zero-computation experts, LongCat Sparse Attention (LSA) and N-gram Embedding.

### Raw benchmarks found

Agent / tool use:

- Preview (as `Owl Alpha`) ranked top-3 globally in OpenRouter total call volume; #1 on Hermes, #2 on Claude Code, #3 on OpenClaw monthly call volume (adoption, not benchmarks)
- Terminal-Bench v2.1: **70.8** (reported as the predecessor baseline in the LongCat-2.5 W4A4 benchmark analysis — secondary, labelled as this ID)
- OpenClaw / LongCat-2.0 community test versions were reported near Claude Opus 4.6 (directional)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench v2.1 **70.8** (secondary) as above; strong code/task-agent positioning
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M native with LSA sparse attention and N-gram Embedding explicitly reducing long-context cost; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** Top-3 global OpenRouter call volume as the stealth preview, #1/#2/#3 on three agent platforms, and native long-horizon agent tooling; capped by adoption figures not being capability benchmarks.
- **Reasoning: 84/100.** 1.6T/48B MoE trained on >30T tokens with original architecture innovations; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 93/100.** 1M native with LSA explicitly compressing long-context cost; capped by no retrieval benchmark.
- **Multimodal: 72/100.** Scored conservatively: native vision arrived only in the 2.5 successor; this model is text/code.
- **Coding: 85/100.** 70.8 Terminal-Bench v2.1 (secondary) and a code-heavy pretraining mix; capped by no SWE-bench figure.
- **Cost efficiency: 95/100.** Free multi-precision open weights, 48B active params from 1.6T, domestic-compute deployment and LSA efficiency. Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 86, 84, 93, 72, 85 = 84.0 → 84. Best fit: self-hosted long-context agent and coding workloads on domestic hardware; superseded by LongCat-2.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike LongCat-2.0 article retrieved via public web search excerpt (release, 1.6T/48B with 33B–56B dynamic range, >30T tokens, 1M context, ScMoE / zero-compute experts / LSA / N-gram Embedding, domestic 50K-card cluster, open-source timeline, Owl Alpha stealth adoption), the Baidu Baike 美团大模型 excerpt, and secondary CNR / CSDN coverage for the 70.8 Terminal-Bench v2.1 predecessor baseline — labelled secondary. Identity handling follows the project's generated roster: `owl-alpha` is a revealed stealth alias merged into this folder and is never re-scaffolded; `longcat-2.5` is a separate successor. LongCat-2.5's 88.4 Terminal-Bench figure is NOT attributed here. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [LongCat-2.0 — 百度百科 (retrieved via search excerpt; architecture, 1M context, Owl Alpha)](https://baike.baidu.com/item/LongCat-2.0/68093056)
  - [LongCat-2.5-W4A4 基准测试报告 — CSDN (retrieved via search excerpt; 2.0's 70.8 baseline)](https://blog.csdn.net/gitblog_00312/article/details/170536829)
