# GPT-5.3 Codex — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.3-Codex (`opencode/gpt-5.3-codex`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's February 2026 agentic coding model unifying GPT-5.2-Codex coding with GPT-5.2 reasoning for long-horizon tool-using engineering work. SWE-bench Verified 85% (OpenAI) / 78% (Vals) — among the highest reported. LiveCodeBench (Vals) 87.3%. τ²-bench 86%. Terminal-Bench 2.0 77.3%. AA-GPQA Diamond 91.5%. AA-HLE 42.5% (best-in-class for HLE among OpenAI models researched). AA-Omniscience Index 10.9% (positive — rare among models). However, 89.2% hallucination rate is very high. Text-only (no image/video input). 400K context / 128K out. $1.75/$14.00 per 1M.
- **Provider / access:** OpenAI API (`opencode/gpt-5.3-codex`). Proprietary model.
- **Release / knowledge:** Released February 2026. Knowledge cutoff not precisely documented.
- **IDs:** `opencode/gpt-5.3-codex` (OpenAI API); also available via OpenRouter and other providers.
- **Context window:** 400,000 tokens (400K); 128,000 output tokens (128K out). AA-LCR 83.3% confirms strong long-context reasoning.
- **Modalities:** Text in; text out. Text-only — no image, video, or audio input.
- **Pricing (as of 2026-10-11):** $1.75 per 1M input; $14.00 per 1M output; $0.175 cached (90% cache discount). Same pricing as GPT-5.2. Moderately priced input but expensive output.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **86%** (AA — strong agentic performance)
- Terminal-Bench 2.0: **77.3%** (OpenAI system card — strong terminal use)
- OSWorld-Verified: **64.7%** (OpenAI system card — moderate computer use)
- Gert Labs: **57.47%** (Gert Labs — moderate)
- JobBench: **33.7%** (JobBench paper — low)

Coding:

- SWE-bench Verified: **85%** (OpenAI system card — excellent)
- LiveCodeBench (Vals): **87.3%** (Vals AI — excellent)
- SWE-bench (Vals): **78.0%** (Vals AI — strong)
- Terminal-Bench 2.0: **77.3%** (OpenAI system card — strong)
- Vibe Code Bench (Vals): **61.77%** (Vals AI — moderate)
- SWE-Rebench: **58.2%** (SWE-Rebench — moderate)
- SWE-bench Pro: **56.8%** (OpenAI system card — moderate)

Multimodal:

- AA-MMMU-Pro: **78.5%** (AA — strong, despite text-only marketing)
- Design Arena Website: **1169** (OpenRouter — modest)

Reasoning / knowledge:

- AA-GPQA Diamond: **91.5%** (AA — strong)
- AA-LCR: **83.3%** (AA — strong long-context reasoning)
- AA-IFBench: **75.4%** (AA — strong instruction following)
- AA-HLE: **42.5%** (AA — moderate; best among OpenAI models in this research batch)
- CritPt: **16.9%** (AA — low-moderate)
- AA Intelligence Index: **32.5%** (AA — moderate)
- AA-Omniscience Index: **10.9%** (AA — POSITIVE; rare among models)
- AA-Omniscience Accuracy: **52.9%** (AA — moderate)
- AA-Omniscience Hallucination Rate: **89.2%** (AA — VERY HIGH)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 86% is strong. Terminal-Bench 2.0 77.3% is strong. OSWorld-Verified 64.7% is moderate (computer use). Gert Labs 57.47% is moderate. JobBench 33.7% is low. The model excels at conversational agentic tasks (τ²-bench) and terminal operations but is moderate on computer use and low on job-specific tasks.
- **Reasoning: 55/100.** AA-GPQA Diamond 91.5% is strong. AA-LCR 83.3% is strong. AA-IFBench 75.4% is strong. AA-HLE 42.5% is moderate (best among OpenAI models in this batch). CritPt 16.9% is low-moderate. AA-Omniscience Index 10.9% is positive (rare — most models are negative). However, AA-Omniscience Hallucination Rate 89.2% is very high. The reasoning profile is strong on structured knowledge with rare positive Omniscience, but the extreme hallucination rate undermines reliability.
- **Context window: 78/100.** 400K context with 128K output. AA-LCR 83.3% confirms strong long-context reasoning. The 400K window is large and competitive. 128K output is generous.
- **Multimodal: 35/100.** Text-only input/output. AA-MMMU-Pro 78.5% is reported (likely via text-based image descriptions or residual capability). However, the model is marketed as text-only with no native image/video input. The lack of multimodal input severely limits versatility.
- **Coding: 78/100.** SWE-bench Verified 85% is excellent (among highest reported). LiveCodeBench (Vals) 87.3% is excellent. SWE-bench (Vals) 78% is strong. Terminal-Bench 2.0 77.3% is strong. Vibe Code Bench 61.77% is moderate. SWE-Rebench 58.2% is moderate. SWE-bench Pro 56.8% is moderate. The coding profile is excellent for SWE-bench and live coding, strong for terminal operations, moderate for autonomous SWE and vibe coding.
- **Cost efficiency: 40/100.** $1.75/$14.00 per 1M ($0.175 cached). Input is moderate (median $2.00) but output is expensive (median $10.00). Same pricing as GPT-5.2, which scores similarly or higher on many benchmarks. The model is priced at a premium for its coding specialization.
- **Overall Score: 62.8/100.** Mean of five quality dims: (68 + 55 + 78 + 35 + 78) / 5 = 62.8. GPT-5.3 Codex is OpenAI's February 2026 agentic coding model. Key strengths: SWE-bench Verified 85% (excellent — among highest), LiveCodeBench (Vals) 87.3% (excellent), τ²-bench 86% (strong agentic), SWE-bench (Vals) 78% (strong), Terminal-Bench 2.0 77.3% (strong), AA-GPQA Diamond 91.5% (strong), AA-LCR 83.3% (strong long-context), AA-HLE 42.5% (moderate — best among OpenAI models in this batch), AA-Omniscience Index 10.9% (positive — rare), 400K context / 128K output, AA-IFBench 75.4% (strong instruction following). Key weaknesses: AA-Omniscience Hallucination Rate 89.2% (VERY HIGH), text-only (no multimodal input), AA-Omniscience Accuracy 52.9% (moderate), SWE-bench Pro 56.8% (moderate), Vibe Code Bench 61.77% (moderate), SWE-Rebench 58.2% (moderate), JobBench 33.7% (low), CritPt 16.9% (low-moderate), AA Intelligence Index 32.5% (moderate), expensive output ($14.00/1M), same pricing as GPT-5.2 which has broader capabilities. Best fit for: agentic software engineering (SWE-bench 85%, τ²-bench 86%), live coding assistance (LiveCodeBench 87.3%), terminal-based coding (Terminal-Bench 77.3%), long-horizon coding tasks (400K context, 128K output), knowledge work requiring positive Omniscience (10.9%), tasks requiring strong instruction following (IFBench 75.4%). Not ideal for: multimodal tasks (text-only), cost-sensitive deployments (expensive output), tasks requiring low hallucination (89.2% hallucination rate), vibe coding (Vibe Code Bench 61.77%), job-specific tasks (JobBench 33.7%).

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-11
- Method: public internet research across BenchLM, Artificial Analysis, OpenAI system card, Vals AI, Gert Labs, SWE-Rebench, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
