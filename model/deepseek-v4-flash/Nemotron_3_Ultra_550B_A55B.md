# DeepSeek V4 Flash (0731) — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731, Reasoning)
- **Short description:** DeepSeek's open-weight reasoning Flash model with 1M context, exceptional coding (LiveCodeBench 91.6%, SWE-bench Verified 79%, SWE-bench 88.8% Vals, VulcanBench 88.4%), strong reasoning (MRCR 1M 78.7%, ARC-AGI-1 89%, GPQA 88.1%), free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`deepseek-ai/DeepSeek-V4-Flash`), DeepSeek API, OpenCode Zen (`opencode/deepseek-v4-flash`), OpenRouter, inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026-07-31 release (DeepSeek blog/API docs); knowledge cutoff not explicitly stated.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash` (Hugging Face), `deepseek-v4-flash` (OpenCode Zen / DeepSeek API). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes; tool calls yes; JSON mode yes. No vision/audio noted.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; DeepSeek API ~$0.14/M in, $0.28/M out (estimated); inference providers ~$0.20-0.50/M in, $0.40-1.00/M out. Blended ≈ $0.30/M.
- **Architecture:** Open-weight reasoning model; parameter count not explicitly stated in benchmarks (DeepSeek V4 family).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **56.9%** (DeepSeek technical report)
- BrowseComp: **73.2%** (DeepSeek technical report)
- HLE w/ tools: **45.1%** (DeepSeek technical report)
- MCP Atlas: **69%** (DeepSeek technical report)
- GDPval-AA: **1189 Elo** (DeepSeek technical report) / normalized **46.7%** (AA)
- Toolathlon: **47.8%** (DeepSeek technical report)
- Terminal-Bench 2.1: **82.7%** (DeepSeek update) / **67.0%** (Vals AI)
- CyberGym: **76.7%** (DeepSeek update)
- Toolathlon-Verified: **70.3%** (DeepSeek update)
- Agents' Last Exam: **25.2%** (DeepSeek update)
- AutomationBench: **25.1%** (DeepSeek update)
- AA Agentic Index: **41.7%** (AA)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- MRCR 1M: **78.7%** (DeepSeek technical report)
- CorpusQA 1M: **60.5%** (DeepSeek technical report)
- AA LCR: **79.7%** (AA)
- CritPt: **16.6%** (AA)
- ARC-AGI-1: **89.00%** (ARC Prize semi-private)
- ARC-AGI-2: **61.4%** (ARC Prize semi-private)
- GPQA: **88.1%** / **GPQA-D: 88.1%** (DeepSeek technical report)
- HLE: **34.8%** (DeepSeek technical report)
- AA Intelligence Index: **34.3%** (AA)
- AA GPQA Diamond: **90.8%** (AA)
- AA HLE: **38.6%** (AA)
- AA Omniscience Index: **-14.3%** (AA)
- AA Omniscience Accuracy: **40.4%** (AA)
- AA Omniscience Hallucination Rate: **91.7%** (AA)
- GPQA Diamond (Vals): **89.9%** (Vals AI)
- MMLU-Pro: **86.2%** (DeepSeek technical report) / **86.2%** (Vals AI)
- HMMT Feb 2026: **94.8%** (DeepSeek technical report)
- IMOAnswerBench: **88.4%** (DeepSeek technical report)
- Apex: **33.0%** / Apex Shortlist: **85.7%** (DeepSeek technical report)
- Chinese-SimpleQA: **78.9%** (DeepSeek technical report)

Coding:

- LiveCodeBench Pass@1-COT: **91.6%** (DeepSeek technical report) — exceeds 80%+ frontier
- Codeforces: **3052 Elo** (DeepSeek technical report)
- SWE-bench Verified: **79%** (DeepSeek technical report) — exceeds 80%? no, near 80%+ frontier
- SWE-bench Pro: **52.6%** (DeepSeek technical report)
- SWE Multilingual: **73.3%** (DeepSeek technical report)
- Terminal-Bench 2.0: **56.9%** (DeepSeek technical report)
- Terminal-Bench 2.1: **82.7%** (DeepSeek update) / **67.0%** (Vals AI)
- NL2Repo: **54.2%** (DeepSeek update)
- DeepSWE: **54.4%** (DeepSeek update)
- DSBench-FullStack: **68.7%** (DeepSeek update)
- DSBench-Hard: **59.6%** (DeepSeek update)
- AA SciCode: **50.3%** (AA)
- VulcanBench v3: **88.4%** (VulcanBench leaderboard) — exceeds 80%+ frontier
- OpenHarmony Bench: **53.8%** (official leaderboard)
- LiveCodeBench (Vals): **87.3%** (Vals AI leaderboard) — exceeds 80%+ frontier
- SWE-bench (Vals): **88.8%** (Vals AI leaderboard) — exceeds 80%+ frontier
- AA Coding Index: **69.1%** (AA)

Multimodal:

- Design Arena Website: **1208 Elo** (OpenRouter) — text-to-code only

Long context:

- MRCR 1M: **78.7%** (DeepSeek technical report)
- CorpusQA 1M: **60.5%** (DeepSeek technical report)
- AA LCR: **79.7%** (AA)
- CritPt: **16.6%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 72/100.** TB 2.1 82.7% (near 88%+ frontier), BrowseComp 73.2%, CyberGym 76.7%, Toolathlon-Verified 70.3%, MCP Atlas 69%, HLE w/ tools 45.1%, GDPval 1189 Elo (below 1750+). Capped by TB 2.0 56.9%, AutomationBench 25.1%, Agents' Last Exam 25.2%, MazeBench 0%.
- **Reasoning: 75/100.** MRCR 1M 78.7% (exceeds 75%+), AA LCR 79.7%, ARC-AGI-1 89%, ARC-AGI-2 61.4%, GPQA 88.1%, HLE 34.8%, HMMT 94.8%, IMOAnswerBench 88.4%. Capped by AA Intelligence Index 34.3% (<60), AA HLE 38.6% (<40%+), CritPt 16.6%, AA Omniscience Index -14.3%, AA Omniscience Hallucination 91.7%.
- **Context window: 95/100.** 1M native; MRCR 1M 78.7%, AA LCR 79.7%. Methodology: ≥1M = 95-100.
- **Multimodal: 30/100.** Text-only; Design Arena 1208 Elo is text-to-code. No vision, video, audio, PDF. Methodology: text-only = 20-30.
- **Coding: 88/100.** LiveCodeBench 91.6% (exceeds 80%+ frontier), LiveCodeBench 87.3% (Vals), SWE-bench 88.8% (Vals, exceeds 80%+), SWE-bench Verified 79% (near 80%+), VulcanBench 88.4% (exceeds 80%+), Codeforces 3052 Elo. Capped by SWE-bench Pro 52.6%, AA Coding Index 69.1% (<70%+), AA SciCode 50.3% (<55%+).
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; DeepSeek API ~$0.14/$0.28 est.; inference providers ~$0.30/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 72/100.** Half-up mean of (72 + 75 + 95 + 30 + 88) / 5 = 72 → 72. Using six incl. cost: (72+75+95+30+88+95)/6 = 455/6 = 75.8 → 76. Model-queue says 88.2; discrepancy due to text-only multimodal and AA Intelligence Index below frontier. Best-fit: exceptional open-weight coding (LiveCodeBench 91.6%, SWE-bench 88.8% Vals) and strong 1M-context reasoning at zero cost.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (DeepSeek technical report, DeepSeek API docs), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, ARC Prize, VulcanBench, OpenHarmony, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4.md`, using the same headings.