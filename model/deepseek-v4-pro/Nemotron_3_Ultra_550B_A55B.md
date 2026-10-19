# DeepSeek V4 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro 0813 (Max effort tier)
- **Short description:** DeepSeek's flagship open-weights MoE model (1.6T total / 49B active) with exceptional coding (Codeforces 3206, SWE-bench 96.4% Vals), strong reasoning (MRCR 1M 83.5%), and 1M context at $1.32/$3.96 pricing under MIT license.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro` via `https://api.deepseek.com`), OpenCode Zen (`opencode/deepseek-v4-pro` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`deepseek-ai/DeepSeek-V4-Pro-0813`), 10 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-08-13 release; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V4-Pro-0813` (Hugging Face), `opencode/deepseek-v4-pro` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.32/M in, $3.96/M out (DeepSeek API / AA). 97% cache discount (AA). Blended 7:2:1 ≈ $0.69/M (AA). Cost per Intelligence Index task: $0.67 (AA).
- **Architecture:** MoE (Mixture of Experts), 1.6 trillion total parameters, 49 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **67.9%** (DeepSeek technical report)
- Terminal-Bench 2.1: **87.9%** (DeepSeek API update) / **54.7%** (Vals AI)
- BrowseComp: **83.4%** (DeepSeek technical report)
- HLE with tools: **60.0%** (DeepSeek API update)
- MCP Atlas: **73.6%** (DeepSeek technical report)
- GDPval-AA v2: **1306 Elo** (DeepSeek technical report) / **54.5%** normalized (Artificial Analysis)
- Toolathlon: **51.8%** (DeepSeek technical report)
- Toolathlon Verified: **74.1%** (DeepSeek API update)
- CyberGym: **83.3%** (DeepSeek API update)
- AA Agentic Index: **49.6%** (Artificial Analysis)
- APEX-Agents: **24.3%** (Artificial Analysis)
- Tau2-bench: **96.2%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **49.6%** (Artificial Analysis)
- Agents' Last Exam: **25.7%** (DeepSeek API update)
- AutomationBench: **31.8%** (DeepSeek API update)
- Terminal-Bench 2.1 (Vals): **54.7%** (Vals AI leaderboard)

Reasoning / knowledge:

- MRCR 1M: **83.5%** (DeepSeek technical report)
- CorpusQA 1M: **62.0%** (DeepSeek technical report)
- AA LCR: **80.3%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- ARC-AGI-1: **90.00%** (ARC Prize semi-private)
- ARC-AGI-2: **61.3%** (ARC Prize semi-private)
- MMLU-Pro: **87.5%** (DeepSeek technical report) / **87.0%** (Vals AI)
- GPQA Diamond: **90.1%** (DeepSeek technical report) / **92.8%** (Artificial Analysis) / **92.4%** (Vals AI)
- HLE: **42.7%** (DeepSeek API update) / **41.0%** (Artificial Analysis)
- AA Intelligence Index: **36** (rank #13/121 open weights) (Artificial Analysis)
- AA HLE: **41.0%** (Artificial Analysis)
- AA Omniscience Index: **0.8%** (Artificial Analysis)
- AA Omniscience Accuracy: **49.1%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **94.1%** (Artificial Analysis)
- HMMT Feb 2026: **95.2%** (DeepSeek technical report)
- IMOAnswerBench: **89.8%** (DeepSeek technical report)
- Apex: **38.3%** / Shortlist: **90.2%** (DeepSeek technical report)
- AA IFBench: **76.5%** (Artificial Analysis)

Coding:

- Codeforces: **3206.0** (DeepSeek technical report)
- LiveCodeBench Pass@1-COT: **93.5%** (DeepSeek technical report)
- SWE-bench Verified: **80.6%** (DeepSeek technical report)
- SWE-bench Pro: **55.4%** (DeepSeek technical report)
- SWE Multilingual: **76.2%** (DeepSeek technical report)
- SWE-bench (Vals): **96.4%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **87.5%** (Vals AI leaderboard)
- DeepSWE: **62.7%** (DeepSeek API update)
- NL2Repo: **61.5%** (DeepSeek API update)
- DSBench-FullStack: **71.1%** (DeepSeek API update)
- DSBench-Hard: **67.2%** (DeepSeek API update)
- OpenHarmony Bench: **59.0%** (OpenHarmony Bench leaderboard)
- Vibe Code Bench: **49.93%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- AA-SciCode: **51.0%** (Artificial Analysis)

Multimodal:

- Design Arena Website: **1258** (OpenRouter)

Long context:

- MRCR 1M: **83.5%** (DeepSeek technical report)
- CorpusQA 1M: **62.0%** (DeepSeek technical report)
- AA LCR: **80.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 78/100.** TB 2.1 87.9% (near 88%+ frontier), BrowseComp 83.4%, MCP Atlas 73.6%, Toolathlon Verified 74.1%, CyberGym 83.3%, Tau2 96.2%, GDPval 1306 Elo (below 1750+ frontier), AA Agentic Index 49.6%. Capped by TB 2.0 67.9%, TB 2.1 Vals 54.7%, AutomationBench 31.8%, APEX 24.3%.
- **Reasoning: 72/100.** MRCR 1M 83.5%, CorpusQA 1M 62.0%, GPQA Diamond 90.1% (meets 90%+ frontier), HLE 42.7% (exceeds 40%+ frontier), ARC-AGI-1 90% / ARC-AGI-2 61.3%, AA LCR 80.3%, AA IFBench 76.5%, MMLU-Pro 87.5%. Capped by AA Intelligence Index 36 (<60 frontier), CritPt 18.0%, AA Omniscience Index 0.8%, Hallucination Rate 94.1%.
- **Context window: 95/100.** 1M native context; MRCR 1M 83.5%, CorpusQA 1M 62%, AA LCR 80.3% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 15/100.** Text only (no image/video/audio input per AA and DeepSeek API). Methodology: text-only = 10-20.
- **Coding: 85/100.** SWE-bench 96.4% (Vals, exceeds 80%+ frontier), LiveCodeBench 93.5% (DeepSeek) / 87.5% (Vals), Codeforces 3206, DeepSWE 62.7% (near 74%+ frontier), AA Coding Index 68.8% (near 70%+), NL2Repo 61.5%, DSBench 71.1%. Capped by SWE-bench Pro 55.4%, DeepSWE 62.7%, Vibe Code 49.9%.
- **Cost efficiency: 90/100.** $1.32/$3.96 per 1M, blended ~$0.69/M, 97% cache discount, cost/task $0.67. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.32/$3.96 interpolates to ~90. MIT license enables free self-hosting.
- **Overall Score: 69/100.** Half-up mean of (78 + 72 + 95 + 15 + 85) / 5 = 69.0 → 69. Best-fit: exceptional open-weights coding model at competitive pricing; SWE-bench 96.4% Vals and Codeforces 3206 are standout; text-only and weak Omniscience limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (DeepSeek technical report, API docs), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Vals AI, OpenHarmony), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.