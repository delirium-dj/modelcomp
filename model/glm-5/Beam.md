# GLM 5 — findings by Beam

- Source: Z.AI/GLM 5, `zai-org/glm-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5
- **Short description:** Z.AI's flagship MoE (Feb 11, 2026): 744B total / 40B active, 200K context. BenchLM 54.83 (#69 of 954). AA Intelligence Index 27.9 (#1 open-weight). SWE-bench Verified 77.8%. Open weights (MIT). $0.60/$1.92 per 1M (BenchGecko) or $1.00/$3.20 (BenchLM).
- **Provider / access:** Z.AI API `glm-5`; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-02-11; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5`
- **Context window:** 200,000 tokens; max output 128,000.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.60–$1.00 / 1M input, $1.92–$3.20 / 1M output; paid.
- **Architecture:** MoE, 744B total / 40B active, 200K context, DeepSeek Sparse Attention (DSA), MIT license. Trained on Huawei Ascend chips.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **41.5** (Estimated · #63/128)
- Terminal-Bench 2.0: **56.2%** (Z.AI) / **60.7%** (Claude Code harness)
- BrowseComp: **62%** (Z.AI) / **75.9%** (with context management)
- HLE w/ tools: **50.4%** (Z.AI)
- Claw-Eval: **57.7%** (Qwen3.6-Plus comparison)
- QwenClawBench: **54.1%** (Qwen3.6-Plus comparison)
- τ³-bench: **65.6%** (Qwen3.6-Plus comparison)
- CyberGym: **43.2%** (Z.AI)
- Vending Bench 2: **$4,432.12** (Z.AI, #1 open-source)
- AA Intelligence Index: **27.9%** (Artificial Analysis)
- AA-GPQA Diamond: **82.0%** (Artificial Analysis)
- AA-HLE: **29.3%** (Artificial Analysis)
- AA-Omniscience Index: **0.3%** (Artificial Analysis)
- AA-Omniscience Accuracy: **26.3%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **35.3%** (Artificial Analysis)
- AA-IFBench: **72.3%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **70.9** (Unranked · 4 rankable rows)
- GPQA: **86.0%** (Z.AI)
- MMLU-Pro: **85.7%** (Qwen3.6-Plus comparison)
- HLE: **30.5%** (Z.AI)
- AIME 2026: **92.7%** (Z.AI)
- HMMT Nov 2025: **96.9%** (Z.AI)
- HMMT Feb 2026: **86.4%** (Z.AI)
- MMAnswerBench: **82.5%** (Z.AI)
- AA Intelligence Index: **27.9%** (Artificial Analysis)
- AA-GPQA Diamond: **82.0%** (Artificial Analysis)
- AA-HLE: **29.3%** (Artificial Analysis)
- IFEval: **92.6%** (Qwen3.6-Plus comparison)
- MMLU-ProX: **83.1%** (Qwen3.6-Plus comparison)

Coding:

- Coding public-lane (BenchLM): **38** (Estimated · #70/150)
- SWE-bench Verified: **77.8%** (Z.AI)
- SWE-bench Multilingual: **73.3%** (Z.AI)
- Terminal-Bench 2.0: **56.2%** (Z.AI) / **60.7%** (Claude Code)
- LiveCodeBench v6: not reported for GLM-5
- CC-Bench-V2: 98% frontend build success, 74.8% end-to-end (Z.AI internal)

Long context:

- 200K window; MRCR: not reported. DSA for efficient long-context.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #63/128 (41.5), Terminal-Bench 2.0 56.2%/60.7%, BrowseComp 62%/75.9%, HLE w/ tools 50.4%, Vending Bench 2 $4,432, CyberGym 43.2%, AA Agentic not reported; caps at CyberGym 43.2%.
- **Reasoning: 70/100.** GPQA 86.0%, MMLU-Pro 85.7%, HLE 30.5%, AIME 92.7%, HMMT 86.4%, AA Intelligence 27.9%, IFEval 92.6%; caps at AA Intelligence 27.9%.
- **Context window: 66/100.** 200K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 68/100.** SWE-bench 77.8%, SWE-bench Multilingual 73.3%, Terminal-Bench 2.0 56.2%/60.7%, coding lane #70/150 (38); caps at Terminal-Bench 2.0 56.2%.
- **Cost efficiency: 88/100.** Cheap $0.60–$1.00 / $1.92–$3.20 per 1M.
- **Overall Score: 62/100.** Mean of five quality dims (BenchLM 54.83, AA Intelligence 27.9); best-fit for open-weight agentic coding at low cost. (Superseded by GLM-5.1/5.2/5.3.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Z.AI official blog, BenchLM, BenchGecko, DeepLearning.AI, Ollama, HuggingFace, arXiv); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GLM-5 is superseded by GLM-5.1, GLM-5.2, GLM-5.3. MIT license, open weights. Trained on Huawei Ascend chips.<|end|>>2>