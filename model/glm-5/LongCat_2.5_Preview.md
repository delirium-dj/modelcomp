# GLM 5 — findings by LongCat 2.5 Preview

- Source: Z.ai (Zhipu AI)/GLM-5
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.ai (Zhipu AI)'s open-weight (MIT) 744B total / 40B active MoE (Feb 2026) that started the GLM-5.x line — a text-only agentic-engineering model with DeepSeek Sparse Attention and a 200K window. Superseded by GLM-5.1, 5.2 and 5.3.
- **Provider / access:** Open weights on Hugging Face `zai-org/GLM-5`; hosted via OpenCode Zen `opencode/glm-5`, Z.ai API, OpenRouter. OpenAI-compatible Chat Completions.
- **Release / knowledge:** Released Feb 2026 (blog 2026-02-17); knowledge cutoff not published.
- **IDs:** `opencode/glm-5` (Zen); `zai-org/GLM-5` (Hugging Face); `glm-5` (Z.ai API). No Free ID.
- **Context window:** 200,000 total (202,752); 128,000 max output.
- **Modalities:** text in / text out only. Reasoning and tool calling.
- **Pricing (as of 2026-10-21):** $1.00 in / $3.20 out per 1M, $0.20 cached read (Zen price = Z.ai list price); self-host $0 (MIT weights).
- **Architecture:** Mixture-of-Experts, 744B total / 40B active, 256 experts with 8 activated (5.9% sparsity), 78 layers, DeepSeek Sparse Attention (DSA), Multi-Token Prediction (MTP); trained on Huawei Ascend; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (GLM-5 technical report / model card)
- Tau2-Bench: **89.7%** (CodeSOTA / Z.ai)
- BrowseComp: **62.0%** (GLM-5 report); MCP-Atlas: **leads open-source models** (Z.ai; exact figure not published)
- Vending Bench 2: **leads open-source models** (Z.ai)
- CC-Bench-V2 (internal): **98%** frontend build success, **74.8%** end-to-end correctness
- Claw-Eval / ClawProBench / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (GLM-5 report)
- HLE (text subset): **30.5%**; LongBench v2: **64.5%**
- AIME 2026: **92.7%**; IMO-AnswerBench: **82.5%**
- LMArena Text Arena: **Elo 1452** (#11 overall, #1 open at release)
- Artificial Analysis: **#1 open-weight model at release** (index figure not pinned in sourced snippets)

Coding:

- SWE-bench Verified: **77.8%** (GLM-5 report, OpenHands scaffold)
- SWE-bench Multilingual: **73.3%** (GLM-5 report)
- React Native Evals: navigation **86.7%**, requirement **74.2%**, async-state **73.8%**, animation **66.0%**
- SWE-bench Pro / DeepSWE / LiveCodeBench: not reported for GLM-5 itself (GLM-5.1 = SWE-Pro 58.4%)

Multimodal:

- None — text-in / text-out model.

Long context:

- LongBench v2: **64.5%**; 200K window via DSA; no RULER/MRCR figure reported.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2-Bench 89.7% is frontier-class and MCP-Atlas/Vending Bench 2 lead open-source models, with Terminal-Bench 2.0 56.2% and BrowseComp 62.0% above the mid band; capped by the absence of GDPval-AA Elo and Claw-Eval.
- **Reasoning: 78/100.** GPQA 86.0% and AIME 2026 92.7% are strong, HLE 30.5% is above mid, and LongBench v2 64.5% is best-in-class among open models at release — but GPQA stays under the 90% frontier anchor.
- **Context window: 70/100.** 200,000-token window sits exactly on the methodology's 200K = 70 anchor; DSA keeps it efficient but no long-context retrieval accuracy is published.
- **Multimodal: 15/100.** Text-only input and output — fixed at 15 per the methodology's text-only band (10–20).
- **Coding: 78/100.** SWE-bench Verified 77.8% and SWE-bench Multilingual 73.3% are strong for open weights, and React Native Evals are high; capped by SWE-bench Pro not being reported for the base model and all figures being vendor-published.
- **Cost efficiency: 88/100.** MIT open weights (self-host $0) with a $1.00/$3.20 per 1M hosted route — right at the methodology's ~$1.25/$4.25 (~88) anchor.
- **Overall Score: 64/100.** Half-up mean of Tool use (78), Reasoning (78), Context window (70), Multimodal (15), Coding (78) = 319/5 = 63.8 → 64. Best fit: a frontier-class open agentic coder for text-only work; the text-only multimodal floor and 200K window cap its Overall.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (GLM-5 technical report arXiv:2602.15763, Hugging Face `zai-org/GLM-5` + mlabonne analysis, Z.ai blog, CodeSOTA, OpenRouter, docs.z.ai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
