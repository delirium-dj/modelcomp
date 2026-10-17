# GPT-5.1 Codex — findings by Qwen 3.7 Plus

- Source: OpenAI (`gpt-5.1-codex`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's coding-specialized model from the GPT-5.1 generation, updated successor to GPT-5 Codex with a September 2025 knowledge cutoff. Released February 2026; retired from active API serving on July 23, 2026. Text-only, reasoning-capable, 400K context.
- **Provider / access:** OpenAI API `gpt-5.1-codex` (Chat Completions API); OpenRouter `openai/gpt-5.1-codex`. Retired July 23, 2026 — may no longer be available for new requests.
- **Release / knowledge:** February 2026 release; knowledge cutoff September 2025.
- **IDs:** `opencode/gpt-5.1-codex` (OpenCode Zen), `openai/gpt-5.1-codex` (OpenAI API / OpenRouter).
- **Context window:** 400,000 tokens total, 128,000 max output (per BenchLM and OpenAI model data).
- **Modalities:** Text in; text out; reasoning mode supported (explicit reasoning). No image, video, or audio input/output.
- **Pricing (as of retirement, 2026-07-23):** $1.25/1M input, $10.00/1M output (per anotherwrapper.com pricing comparison). 72% cheaper than GPT-4 Turbo at time of comparison.
- **Architecture:** Proprietary (closed weights, OpenAI). Coding-specialized variant of GPT-5.1.

### Raw benchmarks found

> Sources: BenchLM (benchlm.ai/models/gpt-5-1-codex, 2026-10-17), Artificial Analysis (via BenchLM), Benchgen (benchgen.com/models/openai/gpt-5-1-codex), Vals AI (vals.ai), SWE-bench leaderboard (swebench.com), llm-stats.com, OpenRouter benchmarks. Coverage note: BenchLM covers only 16 of 639 benchmarks — score is conservative.

Agent / tool use:

- tau2-bench: **83%** (Artificial Analysis via BenchLM — strong agentic tool-use performance)
- Gert Labs: **49.68%** (Gert Labs rankings)
- JobBench: **26.2%** (JobBench paper — weak on broad occupational tasks)
- IFBench: **70.0%** (Artificial Analysis via BenchLM — solid instruction following)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis via BenchLM — strong graduate-level science)
- AA-LCR: **69.3%** (Artificial Analysis via BenchLM — moderate long-context reasoning)
- HLE: **25.7%** (Artificial Analysis via BenchLM — low on frontier knowledge)
- CritPt: **5.7%** (Artificial Analysis via BenchLM — very weak on research-level physics)
- AA Intelligence Index: **23.7** (Artificial Analysis via BenchLM — low, but coverage is partial)
- AA-Omniscience Accuracy: **39.9%** (Artificial Analysis via BenchLM)
- AA-Omniscience Hallucination Rate: **77.2%** (Artificial Analysis via BenchLM — high = bad)

Coding:

- SWE-bench Verified: **73.7%** (Benchgen evaluation, 2026-02; also on SWE-bench leaderboard at 66.0% with mini-SWE-agent harness — methodology differs)
- LiveCodeBench (Vals): **85.6%** (Vals AI — strong competitive coding)
- Vibe Code Bench: **13.12%** (Vals AI — very weak on end-to-end software delivery)
- SWE-bench (swebench.com): **66.0%** (mini-SWE-agent harness, medium effort)
- SWE-Lancer: **66.3%** (llm-stats.com comparison)
- Terminal-Bench 2.0: **52.8%** (llm-stats.com comparison)

Multimodal & Grounded:

- AA-MMMU-Pro: **72.5%** (Artificial Analysis via BenchLM — text-only model, likely evaluated on text subset)
- Design Arena Website: **1163** (OpenRouter benchmarks — design/code generation Elo)

Long context:

- AA-LCR: **69.3%** at 400K context (Artificial Analysis via BenchLM)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Note: this model was retired July 23, 2026, and benchmark coverage is very partial (16 of 639). Scores reflect its coding specialization.

- **Tool use: 65/100.** tau2-bench 83% is excellent for agentic tool use. IFBench 70.0% is solid instruction following. However, JobBench 26.2% is very weak on broad occupational tasks, and Gert Labs 49.68% is moderate. Capped by narrow specialization — coding-focused model not optimized for general agent workflows.
- **Reasoning: 48/100.** GPQA Diamond 86.0% is strong for a coding model. However, CritPt 5.7% is extremely weak, HLE 25.7% is low, and AA Intelligence Index 23.7 reflects the narrow specialization. AA-LCR 69.3% is moderate for long-context reasoning. Capped by very low scores on non-coding reasoning benchmarks (CritPt, HLE).
- **Context window: 55/100.** 400K tokens is moderate by current standards (leaders offer 1M+). 128K max output is generous. AA-LCR 69.3% at 400K confirms functional but not exceptional long-context retrieval. Docked for smaller window vs 1M+ leaders and moderate AA-LCR.
- **Multimodal: 15/100.** Text-only input and output. No image, video, or audio support. MMMU-Pro 72.5% is likely evaluated on text subset only. The narrowest modality support of any model in the comparison.
- **Coding: 75/100.** SWE-bench Verified 73.7% is strong (competitive with frontier models at time of release). LiveCodeBench 85.6% (Vals) is outstanding for competitive coding. SWE-Lancer 66.3% and Terminal-Bench 2.0 52.8% are moderate. However, Vibe Code Bench 13.12% is extremely weak on end-to-end software delivery. The coding profile is highly asymmetric: strong on benchmark-style coding, weak on real-world delivery. Capped by Vibe Code Bench and Terminal-Bench gap.
- **Cost efficiency: 45/100.** $1.25/$10.00 per 1M is expensive for a coding-specialized model, especially one that has been retired. Output at $10.00/1M is among the highest in the dataset. Model retired July 23, 2026 — cost efficiency is moot for new deployments.
- **Overall Score: 52/100.** Mean of five non-cost dims: (65 + 48 + 55 + 15 + 75) / 5 = 51.6, half-up = 52. A highly specialized coding model with strong SWE-bench Verified (73.7%) and LiveCodeBench (85.6%) but very weak general reasoning, text-only modality, and retirement from active service. Best fit for: legacy coding agent deployments still running on GPT-5.1 Codex; not recommended for new deployments (superseded by GPT-5.2-Codex and later generations).

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-17
- Method: public internet research across BenchLM, Artificial Analysis, Benchgen, Vals AI, SWE-bench leaderboard, llm-stats.com, OpenRouter benchmarks, and anotherwrapper.com pricing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
