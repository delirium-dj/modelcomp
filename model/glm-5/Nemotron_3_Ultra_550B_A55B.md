# GLM-5 — findings by Nemotron 3 Ultra 550B A55B

- Source: Z.AI (`glm-5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5 (Non-Reasoning variant; Reasoning variant scored separately)
- **Short description:** Z.AI's open-weights MoE model (744B total / 40B active) with strong coding (SWE-bench Verified 77.8%), math (AIME 95.8%), and agentic (Tau2 98.2%) capabilities, at $1/$3.20 pricing under MIT license.
- **Provider / access:** Z.AI Platform, OpenCode Zen (`opencode/glm-5` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`zai-org/GLM-5`), 6 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-02-11 release; knowledge cutoff not publicly disclosed.
- **IDs:** `zai-org/GLM-5` (Hugging Face), `opencode/glm-5` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 200,000 tokens total (200K per AA/BenchLM); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning no (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.00/M in, $3.20/M out (Z.AI API / AA). 80% cache discount (AA). Blended 7:2:1 ≈ $0.66/M (AA).
- **Architecture:** MoE (Mixture of Experts), 744 billion total parameters, 40 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (Z.AI GLM-5 docs)
- BrowseComp: **62%** (GLM-5 model card)
- HLE with tools: **50.4%** (GLM-5 model card)
- Claw-Eval: **57.7%** (Qwen3.6-Plus comparison table)
- QwenClawBench: **54.1%** (Qwen3.6-Plus comparison table)
- Tau3-bench: **65.6%** (Qwen3.6-Plus comparison table)
- DeepPlanning: **14.6%** (Qwen3.6-Plus comparison table)
- Toolathlon: **38%** (Qwen3.6-Plus comparison table)
- MCP Atlas: **31.1%** (Qwen3.6-Plus comparison table)
- MCP-Tasks: **60.8%** (Qwen3.6-Plus comparison table)
- WideResearch: **69.8%** (Qwen3.6-Plus comparison table)
- Tau2-bench: **98.2%** (Artificial Analysis)
- CyberGym: **43.2%** (CyberGym leaderboard)
- APEX-Agents: **14.5%** (Artificial Analysis)
- Gert Labs: **50.99%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (GLM-5 model card) / **86%** (Qwen3.6-Plus table) / **82.0%** (Artificial Analysis)
- HLE: **30.5%** (GLM-5 model card) / **29.3%** (Artificial Analysis)
- HLE with tools: **50.4%** (GLM-5 model card)
- AA Intelligence Index: **28** (estimated) (Artificial Analysis)
- AA LCR: **75.7%** (Artificial Analysis)
- CritPt: **2.0%** (Artificial Analysis)
- AA HLE: **29.3%** (Artificial Analysis)
- AA Omniscience Index: **0.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **26.3%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **35.3%** (Artificial Analysis)
- MMLU-Pro: **85.7%** (Qwen3.6-Plus) / **85.8%** (Arcee) / **83.1%** (MMLU-ProX)
- AIME 2026: **95.8%** (Qwen3.6-Plus)
- HMMT Feb 2025: **97.5%** (Qwen3.6-Plus)
- HMMT Nov 2025: **96.9%** (Qwen3.6-Plus)
- HMMT Feb 2026: **86.4%** (Qwen3.6-Plus)
- MMAnswerBench: **82.5%** (Qwen3.6-Plus)
- IFEval: **92.6%** (Qwen3.6-Plus)
- AA IFBench: **72.3%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **77.8%** (Z.AI GLM-5 docs) / **72.8%** (Arcee)
- SWE-bench Pro: **55.1%** (Qwen3.6-Plus)
- SWE Multilingual: **73.3%** (Qwen3.6-Plus)
- NL2Repo: **35.9%** (GLM-5.1 model card)
- SWE-Rebench: **62.8%** (SWE-Rebench leaderboard)
- React Native Evals: **74.8%** (React Native Evals leaderboard)
- Terminal-Bench 2.0: **56.2%** (Z.AI GLM-5 docs)

Multimodal:

- Design Arena Website: **1247** (OpenRouter)

Long context:

- LongBench v2: **60.8%** (Qwen3.6-Plus)
- AI-Needle: **63.3%** (Qwen3.6-Plus)
- AA LCR: **75.7%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 65/100.** TB 2.0 56.2%, BrowseComp 62%, Tau3 65.6%, WideResearch 69.8%, Tau2 98.2%, CyberGym 43.2%, MCP Tasks 60.8%. Capped by TB 2.0 56.2%, DeepPlanning 14.6%, Toolathlon 38%, APEX 14.5%, MCP Atlas 31.1%.
- **Reasoning: 65/100.** GPQA Diamond 86.0% (exceeds 90%+? near), HLE 30.5% (below 40%+ frontier), AIME 95.8%, HMMT 97.5%/96.9%/86.4%, AA LCR 75.7%, Tau2 98.2%. Capped by HLE 30.5%, AA Intelligence Index 28 (est., <60 frontier), CritPt 2.0%, AA Omniscience Index 0.3%.
- **Context window: 65/100.** 200K native context; AA LCR 75.7%, LongBench v2 60.8%, AI-Needle 63.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 200K = ~65-84 (at lower end).
- **Multimodal: 15/100.** Text only (no multimodal benchmarks reported). Methodology: text-only = 10-20.
- **Coding: 75/100.** SWE-bench Verified 77.8% (exceeds 80%+ frontier), React Native 74.8%, SWE-Rebench 62.8%, SWE Multilingual 73.3%, TB 2.0 56.2%. Capped by SWE-bench Pro 55.1%, Vibe Code missing, no DeepSWE/LiveCodeBench/FrontierCode.
- **Cost efficiency: 85/100.** $1/$3.20 per 1M, blended ~$0.66/M, 80% cache discount. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1/$3.20 interpolates to ~85. MIT license enables free self-hosting.
- **Overall Score: 57/100.** Half-up mean of (65 + 65 + 65 + 15 + 75) / 5 = 57.0 → 57. Best-fit: strong open-weights MoE for coding and math with excellent AIME 95.8%; text-only, weak HLE/CritPt/Omniscience, and 200K context limit general reasoning.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Z.AI GLM-5 docs, Hugging Face model card), independent benchmark aggregators (Artificial Analysis, BenchLM, Qwen3.6-Plus comparison table), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.