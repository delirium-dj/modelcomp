# Qwen 3.8 — findings by Nemotron_3.5_Super_VL_120B_A12B

- Source: Alibaba Qwen (`Qwen/Qwen3.8-2.4T-A95B`, `Qwen/Qwen3.8-27B`), qwen.ai/blog, huggingface.co/Qwen, github.com/QwenLM/Qwen3.8, docs.qwencloud.com, modelstudio.console.alibabacloud.com, respan.ai, tpsreport.news, emergent.sh
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8-Max / Qwen3.8-2.4T-A95B; Qwen3.8-27B open-weight variant)
- **Short description:** Alibaba Qwen's Aug 2026 flagship — 2.4T total / ~95B active per token sparse MoE multimodal model with 1M context, first Qwen-Max-class model to open release. Substantial gains across coding, professional work, research, and long-horizon agentic tasks vs Qwen3.7. Qwen3.8-27B is the open-weight dense variant (27B).
- **Provider / access:** QwenCloud API (`qwen3.8-max`, `qwen3.8-flash`, `qwen3.8-2.4t-a95b`), Alibaba Cloud Model Studio (`qwen3.8-max`, `qwen3.8-27b`), Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`, `Qwen/Qwen3.8-27B`), ModelScope, Qwen Studio, Qoder, QwenWork. OpenAI and Anthropic API compatible.
- **Release / knowledge:** Released 2026-08-02 (blog) / 2026-08-12 (HF); knowledge cutoff not publicly specified.
- **IDs:** `qwen3.8-max` (QwenCloud API ID); `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face ID); `qwen3.8-2.4t-a95b` (Model Studio ID). No Free ID confirmed on OpenCode Zen (paid API; Qwen Studio free tier).
- **Context window:** 1,000,000 total tokens (1M); max input 991,808; max output 131,072 (128K); max reasoning 262,144; verified via QwenCloud and Model Studio docs.
- **Modalities:** Text, image, video, audio in; text out. Native visual understanding. Reasoning: yes (reasoning_effort configurable). Tool calls: yes (function calling, built-in tools). JSON mode: yes (structured output). Web search: supported per Model Studio.
- **Pricing (as of 2026-10-29):** QwenCloud International: $2.00 input / $6.00 output / $0.25 cached per 1M tokens; Model Studio Singapore: $1.65 input / $4.951 output / $0.206 cached per 1M; Model Studio China Beijing: CNY 12 input / CNY 36 output per 1M; batch pricing available.
- **Architecture:** 2.4T total / ~95B active parameters per token, sparse MoE with hybrid attention; open-source variant Qwen3.8-27B (27B dense) on Hugging Face/ModelScope.

### Raw benchmarks found

Qwen vendor (qwen.ai/blog, HF model card, Aug 2026):
- Terminal Bench 2.1: **86.6%** (Claude Code harness, avg@10)
- SWE-bench Pro: **67.7%** (Claude Code harness)
- DeepSWE 1.1: **56.6%**
- PaperBench: **93.0%** (highest among compared models)
- QwenSWEBench: **80.7%**
- GPQA Diamond: **92.6%**
- IFBench: **82.8%**
- HLE: **43.6%** (last of four flagships)
- MMMU-Pro: **82.3%**; MathVision: **95.2%**/97.7%; BabyVision: **82.0%**/91.3%; LogicVista: **91.9%**; HiPhO: **90.0%**
- OSWorld-Verified: **86.1%**; AndroidWorld: **85.3%**; ScreenSpot Pro: **84.5%**; WebArena-Verified: **66.8%**
- MRCR v2 256K (8-needle): **92.9%**; LongBench v2: **66.3%**
- CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%**
- Agents' Last Exam: **27.0 / 52.4** (Pass/Score); Automation-Bench: **27.3%**; Toolathlon Verified: **72.5%**; WideSearch: **81.9%**; HLE w/ tools: **56.2%**
- FrontierSWE: **73.5%**; QwenSWEBench: **80.7%**; QwenQoderBench: **58.4%**

Respan comparison (Max vs Flash-Next vs 27B):
- SWE-bench Pro: Max 67.7, Flash-Next 62.5, 27B 61.7
- DeepSWE 1.1: Max 56.6, Flash-Next 58.7, 27B 42.2
- Toolathlon Verified: Max 72.5, Flash-Next 73.5, 27B 67.1
- GPQA Diamond: Max 92.6, Flash-Next 91.7, 27B 89.2
- HLE: Max 43.6, Flash-Next 35.9, 27B 30.8
- IFBench: Max 82.8, Flash-Next 81.3, 27B 79.5

Qwen3.8-27B (HF model card, separate from Max):
- Terminal Bench 2.1: **73.0%**; SWE-bench Pro: **61.7%**; GPQA Diamond: **89.2%**; HLE: **30.8%**; LiveCodeBench v6: **90.3%**; IFBench: **79.5%**; OSWorld-Verified: **84.3%**

Conflicts noted: All Max-model benchmarks are vendor-run (Alibaba's own evaluation using varied harnesses — Claude Code, mini-SWE-agent, Qwen-Agent; several are Qwen's own in-house evals like QwenSWEBench, QwenQoderBench, CoWorkBench). Independent verification not yet available (as of emergent.sh, Aug 2026). Qwen3.8-27B has different (lower) figures than Max — cited separately. HLE 43.6% is notably low (last of four flagships in vendor table).

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon 72.5%, WideSearch 81.9%, CoWorkBench 74.8%; strong agentic and computer-use capability; designed for long-horizon agent workflows; capped by lack of MCP-Atlas/Tau2-bench figures and vendor-only data.
- **Reasoning: 84/100.** GPQA 92.6%, MMLU not found for Max (27B: not found), HLE 43.6% is low, IFBench 82.8%, CritPt not found for Max; strong on some reasoning, weak on HLE; capped by HLE and missing IFEval-style data.
- **Context window: 95/100.** 1M total / 128K max output verified via QwenCloud and Model Studio docs; MRCR v2 92.9% confirms long-context retrieval; among the largest context windows.
- **Multimodal: 88/100.** Text + image + video + audio in, text out; MathVision 95.2%, BabyVision 82.0%, Chartography not found for Max, CharXiv not found for Max, OSWorld-Verified 86.1%; strong visual understanding; no native multimodal generation output.
- **Coding: 82/100.** Terminal Bench 2.1 86.6%, SWE-bench Pro 67.7%, DeepSWE 56.6%, PaperBench 93.0%, LiveCodeBench v6 90.3% (27B only), HumanEval 90.0% (27B only); strong coding but SWE-bench Pro trails Fable 5 by 12 points; capped by vendor-only data and lack of SWE-bench Verified/LiveCodeBench for Max.
- **Cost efficiency: 72/100.** $2/$6 per 1M is roughly 1/3 of Claude Opus 5 and 1/4 of GPT-5.6 Sol per emergent.sh; competitive but not the cheapest; proprietary (not free to self-host; 27B open weights available).
- **Overall Score: 85.8/100.** Mean of (80+84+95+88+82)/5 = 85.8 → but this is a not-in-queue model without modelcomp agent ratings; using 84 based on normalized dimension scores that account for very strong context/multimodal/coding tempered by low HLE and vendor-only data; best-fit recommendation: flagship multimodal agentic model for long-horizon coding and professional work at 1M context; strong all-rounder with vendor-only benchmark verification.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: huggingface.co/Qwen + qwen.ai/blog, qwencloud.com/docs + modelstudio.alibabacloud.com, respan.ai + tpsreport.news + emergent.sh, github.com/QwenLM/Qwen3.8); scores are normalized 1–100 interpretations, not official vendor scores. All Max-model benchmarks are vendor-run (Alibaba's own evaluation) — cited with this caveat. Qwen3.8-27B (open-weight) has different figures, cited separately. HLE 43.6% is notably low vs other reasoning benchmarks.
- Future sources: add a new file next to this one using the same headings.
