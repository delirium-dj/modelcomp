# Qwen3.7 Max — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.7-max`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max (Proprietary)
- **Short description:** Alibaba's proprietary Qwen3.7 Max reasoning model with 1M context, strong coding (SWE-bench Verified 80.4%, LiveCodeBench v6 91.6%), solid HLE 41.4%, and MRCR v2 90.4%. Qwen Cloud / Alibaba Cloud access.
- **Provider / access:** Qwen Cloud (`qwen3.7-max`), Alibaba Cloud Model Studio, OpenCode Zen (`opencode/qwen-3.7-max`). Proprietary, not on Hugging Face.
- **Release / knowledge:** 2026 release (Qwen3.7 blog); knowledge cutoff not explicitly stated.
- **IDs:** `qwen3.7-max` (Qwen Cloud / OpenCode Zen). No public free tier.
- **Context window:** 1,000,000 tokens; max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** Qwen Cloud proprietary pricing not publicly listed; estimated competitive with Max tier (~$1–$3/M in, $3–$10/M out). No public blended rate.
- **Architecture:** Proprietary (Alibaba); likely MoE similar to Qwen3.8 family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (Qwen blog)
- QwenClawBench: **64.3%** (Qwen blog)
- QwenWebBench: **1568 Elo** (Qwen blog)
- Claw-Eval: **65.2%** (Qwen blog)
- BFCL v4: **75.0%** (Qwen blog)
- MCP Atlas: **76.4%** (Qwen blog)
- VITA-Bench: **47.9%** (Qwen blog)
- HLE w/ tools: **53.5%** (Qwen blog)
- Tau2-bench: **94.7%** (Artificial Analysis)
- GDPval-AA normalized: **31.4%** (AA) / Elo **1190** (AA)
- Gert Labs: **64.27%** (Gert Labs)
- ResearchClawBench: **18.7%** (ResearchClawBench)
- TB 2.1 (Vals): **61.0%** (Vals AI)
- AA Agentic Index: **23.9%** (AA)

Reasoning / knowledge:

- MRCR v2: **90.4%** (Qwen blog)
- CritPt: **13.4%** (Qwen blog)
- AA LCR: **79.0%** (AA)
- GPQA: **92.4%** / **GPQA-D: 92.4%** (Qwen blog)
- HLE: **41.4%** (Qwen blog)
- MMLU-Pro: **89.6%** (Qwen blog) / **89.3%** (Vals)
- MMLU-Redux: **95%** (Qwen blog)
- SuperGPQA: **73.6%** (Qwen blog)
- MMMLU: **90.3%** (Qwen blog)
- AA Intelligence Index: **29.5%** (AA)
- AA GPQA Diamond: **92.3%** (AA)
- AA HLE: **40.5%** (AA)
- AA Omniscience Index: **13.5%** (AA)
- AA Omniscience Accuracy: **31.1%** (AA)
- AA Omniscience Hallucination Rate: **25.6%** (AA)
- GPQA Diamond (Vals): **90.2%** (Vals AI)
- HMMT Feb 2026: **97.1%** (Qwen blog)
- IMOAnswerBench: **90.0%** (Qwen blog)
- Apex: **44.5%** (Qwen blog)
- FrontierMath v2 Tiers 1-3: **64.561%** (Epoch AI)
- FrontierMath v2 Tier 4: **34.146%** (Epoch AI)

Coding:

- SWE-bench Verified: **80.4%** (Qwen blog)
- SWE-bench Pro: **60.6%** (Qwen blog)
- SWE Multilingual: **78.3%** (Qwen blog)
- NL2Repo: **47.2%** (Qwen blog)
- SciCode: **53.5%** (Qwen blog)
- LiveCodeBench v6: **91.6%** (Qwen blog)
- Terminal-Bench 2.0: **69.7%** (Qwen blog)
- AA SciCode: **49.5%** (AA)
- OpenHarmony Bench: **53.4%** (official)
- LiveCodeBench (Vals): **87.1%** (Vals AI leaderboard)
- SWE-bench (Vals): **68.8%** (Vals AI leaderboard)
- AA Coding Index: **66.0%** (AA)

Multimodal:

- Design Arena Website: **1274 Elo** (OpenRouter)

Long context:

- MRCR v2: **90.4%** (Qwen blog)
- CritPt: **13.4%** (Qwen blog)
- AA LCR: **79.0%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 72/100.** TB 2.0 69.7%, MCP Atlas 76.4%, BFCL v4 75.0%, Tau2 94.7% (exceeds 85%+ frontier), HLE w/ tools 53.5%. Capped by TB 2.0 (vs TB 2.1 frontier), AA Agentic Index 23.9%, GDPval 31.4%, ResearchClawBench 18.7%.
- **Reasoning: 78/100.** MRCR v2 90.4% (exceeds 90%+), GPQA 92.4%, MMLU-Pro 89.6%, HLE 41.4% (exceeds 40%+), AA LCR 79.0%, AA HLE 40.5%. Capped by AA Intelligence Index 29.5% (<60), CritPt 13.4%, AA Omniscience Index 13.5%, FrontierMath Tier 4 34.1%.
- **Context window: 90/100.** 1M native; MRCR v2 90.4%, AA LCR 79.0%. Methodology: ≥1M = 95-100 but no MRCR ≥98% at 512K+ for 100.
- **Multimodal: 65/100.** Text + image only; Design Arena 1274 Elo. No video/audio/PDF benchmarks for 3.7 Max. Methodology: +image in = 60-70.
- **Coding: 85/100.** LiveCodeBench v6 91.6% (exceeds 80%+ frontier), SWE-bench Verified 80.4% (exceeds 80%+), LiveCodeBench 87.1% (Vals), SWE Multilingual 78.3%, TB 2.0 69.7%. Capped by SWE-bench Pro 60.6%, NL2Repo 47.2%, AA Coding Index 66.0% (<70%+).
- **Cost efficiency: 55/100.** Proprietary Max tier, no public pricing; estimated ~$2-5/M in, $6-15/M out. Methodology: proprietary Max ≈ 50-60.
- **Overall Score: 78/100.** Half-up mean of (72 + 78 + 90 + 65 + 85) / 5 = 78 → 78. Using six incl. cost: (72+78+90+65+85+55)/6 = 445/6 = 74.2 → 74. Model-queue says 82.5; discrepancy reduced. Best-fit: exceptional coding (LiveCodeBench v6 91.6%) and long-context (MRCR 90.4%); proprietary access limits verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across official pages (Qwen blog), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter, Gert Labs, ResearchClawBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.