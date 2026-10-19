# DeepSeek V4.1 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (Max effort tier)
- **Short description:** DeepSeek's cost-efficient open-weights MoE model (552B total / 16B active) with strong coding (DeepSWE 77%, Terminal-Bench 2.1 90.6%), fast 232 tok/s output, and ultra-low $0.30/$1.20 pricing under MIT license.
- **Provider / access:** DeepSeek Platform, OpenCode Zen (`opencode/deepseek-v4.1-flash` via `https://opencode.ai/inference/openai/v1/chat/completions`), Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`), 26 API providers. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-09-10 release; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash` (Hugging Face), `opencode/deepseek-v4.1-flash` (OpenCode Zen). Open weights available for self-hosting (MIT license).
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (chain-of-thought); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.30/M in, $1.20/M out (DeepSeek API / AA). 98% cache discount (AA). Blended 7:2:1 ≈ $0.18/M (AA). Cost per Intelligence Index task: $0.49 (AA). Free tier on OpenCode Zen (`deepseek-v4.1-flash-free`).
- **Architecture:** MoE (Mixture of Experts), 552 billion total parameters, 16 billion active parameters per token; open weights (MIT license).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek model card) / **74.5%** (Vals AI)
- Terminal-Bench 4.0: **42.3%** (DeepSeek model card)
- Terminal-Bench 3: **30%** (DeepSeek model card)
- CyberGym: **88.1%** (DeepSeek model card)
- ExploitGym: **15.3%** (DeepSeek model card)
- HLE with tools: **63.9%** (DeepSeek model card)
- AutomationBench: **60.5%** (DeepSeek model card)
- Agents' Last Exam: **35.4%** (DeepSeek model card)
- GDPval-AA v2 normalized: **55.0%** (Artificial Analysis)
- AA AutomationBench: **68.9%** (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): **74.5%** (Vals AI leaderboard)
- AA ITBench: **46.9%** (Artificial Analysis)
- CWE-bench v1: **55.0%** (Collinear leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek model card) / **90.9%** (DeepSeek model card)
- HLE: **42.6%** (DeepSeek model card)
- AA Intelligence Index: **39** (rank #10/121 open weights) (Artificial Analysis)
- AA LCR: **84.0%** (Artificial Analysis)
- CritPt: **14.3%** (Artificial Analysis)
- STEMBench: **2.49** (Ulam audit)
- JevBench 1.4: **4.77** (JevBench)
- JevBench 1.5: **6.65** (JevBench)
- AA HLE: **39.2%** (Artificial Analysis)
- AA Omniscience Index: **-5.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **46.4%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **96.5%** (Artificial Analysis)
- Apex: **65.6%** (DeepSeek model card)
- FrontierMath v2 Tiers 1-3: **67.368%** (Epoch AI)
- FrontierMath v2 Tier 4: **26.829%** (Epoch AI)

Coding:

- Codeforces: **3471.0** (DeepSeek model card)
- DeepSWE: **77.0%** (DeepSeek model card)
- ProgramBench: **29.1%** (DeepSeek model card)
- NL2Repo: **68.2%** (DeepSeek model card)
- AA-SciCode: **51.9%** (Artificial Analysis)
- OpenHarmony Bench: **60.3%** (OpenHarmony Bench leaderboard)
- Terminal-Bench 2.1: **90.6%** (DeepSeek model card)
- Terminal-Bench 3: **30%** (DeepSeek model card)
- Bug Hunt Bench: **39.1 fixes** (public data)

Multimodal:

- Chartography (tools): **83.0%** (DeepSeek model card)
- BabyVision with Python: **92.5%** (DeepSeek model card)
- ZeroBench with Python: **51.0%** (DeepSeek model card)
- AA MMMU-Pro: **77.0%** (Artificial Analysis)
- Design Arena Website: **1323** (OpenRouter)

Long context:

- AA LCR: **84.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 82/100.** TB 2.1 90.6% (exceeds 88%+ frontier), CyberGym 88.1%, AutomationBench 60.5%, HLE with tools 63.9%, GDPval 55.0% normalized, AA AutomationBench 68.9%, TB 2.1 Vals 74.5%. Capped by TB 4.0 42.3%, TB 3 30%, ExploitGym 15.3%, Agents' Last Exam 35.4%.
- **Reasoning: 70/100.** GPQA Diamond 90.9% (exceeds 90%+ frontier), HLE 42.6% (exceeds 40%+ frontier), AA LCR 84.0%, Apex 65.6%, FrontierMath Tiers 1-3 67.4%. Capped by AA Intelligence Index 39 (<60 frontier), CritPt 14.3%, AA Omniscience Index -5.3% (negative), Hallucination Rate 96.5%, FrontierMath Tier 4 26.8%.
- **Context window: 95/100.** 1M native context; AA LCR 84.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 60/100.** Text + image input only; Chartography 83.0%, BabyVision 92.5% with Python, AA MMMU-Pro 77.0%, ZeroBench 51.0% with Python. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 85/100.** DeepSWE 77.0% (exceeds 74%+ frontier), TB 2.1 90.6% (exceeds 85%+), Codeforces 3471, NL2Repo 68.2%, OpenHarmony 60.3%, AA-SciCode 51.9% (near 55%+), Bug Hunt 39.1 fixes. Capped by ProgramBench 29.1%, TB 3 30%.
- **Cost efficiency: 97/100.** $0.30/$1.20 per 1M, blended ~$0.18/M, 98% cache discount, cost/task $0.49, free tier on OpenCode Zen. Methodology: ~$0.10/$0.20 = 97-99; ultra-low open-weights pricing with free tier → 97.
- **Overall Score: 78/100.** Half-up mean of (82 + 70 + 95 + 60 + 85) / 5 = 78.4 → 78. Best-fit: exceptional value open-weights MoE for coding and agentic tasks; DeepSWE 77%, TB 2.1 90.6%, and $0.30/$1.20 pricing with free tier are unmatched; reasoning depth (CritPt, Omniscience) and multimodal lag proprietary.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official model cards (DeepSeek Hugging Face), independent benchmark aggregators (Artificial Analysis, BenchLM, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.