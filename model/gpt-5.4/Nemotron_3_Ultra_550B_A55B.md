# GPT-5.4 — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (Xhigh effort tier)
- **Short description:** OpenAI's GPT-5.4 reasoning model with strong long-context (MRCR 87.5% at 128K-256K), good coding (LiveCodeBench 87.5%), 1M+ context, at $2.50/$15 pricing.
- **Provider / access:** OpenAI API (`gpt-5.4` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.4` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI, 3 total providers. Responses API (not Chat Completions).
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff August 2025.
- **IDs:** `openai/gpt-5.4` (OpenAI API), `opencode/gpt-5.4` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,050,000 tokens total (1.05M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤272K tokens: $2.50/M in, $0.25/M cache read, $15.00/M out. >272K tokens: $5.00/M in, $0.50/M cache read, $22.50/M out (OpenAI API & OpenCode Zen). Blended 7:2:1 ≈ $2.17/M (AA).
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 blog)
- CyberGym: **79.0%** (OpenAI GPT-5.5 blog)
- BrowseComp: **82.7%** (OpenAI GPT-5.4 blog)
- OSWorld-Verified: **75%** (OpenAI GPT-5.4 blog)
- MCP Atlas: **70.6%** (OpenAI GPT-5.5 comparison table)
- Toolathlon: **54.6%** (OpenAI GPT-5.4 blog)
- Tau2-bench: **98.9%** (OpenAI GPT-5.4 mini/nano blog)
- Claw-Eval: **60.3%** (Claw-Eval leaderboard)
- DeepSearchQA: **73.6%** (Meta Muse Spark comparison chart)
- APEX-Agents: **33.3%** (Artificial Analysis)
- GDPval-AA v2: **1307 Elo** (Artificial Analysis) / **37.3%** normalized (Artificial Analysis)
- Gert Labs: **64.89%** (Gert Labs rankings)
- ResearchClawBench: **15.3%** (ResearchClawBench leaderboard)
- JobBench: **38.9%** (JobBench paper)
- ExploitGym: **6.0%** (ExploitGym paper)
- ApprenticeBench: **11%** (NeoCognition)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI GPT-5.4 blog) / **92.0%** (Artificial Analysis) / **92.8%** (Meta Muse Spark chart)
- HLE: **52.1%** (OpenAI GPT-5.5 comparison table) / **39.8%** without tools
- ARC-AGI-1: **93.67%** (ARC Prize verified)
- ARC-AGI-2: **74.0%** (ARC Prize official)
- ARC-AGI-3: **0.2%** (ARC Prize semi-private)
- AA Intelligence Index: **39** (estimated) (Artificial Analysis)
- AA LCR: **82.0%** (Artificial Analysis)
- CritPt: **23.4%** (Artificial Analysis)
- AA HLE: **43.7%** (Artificial Analysis)
- AA Omniscience Index: **5.8%** (Artificial Analysis)
- AA Omniscience Accuracy: **50.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **91.7%** (Artificial Analysis)
- HealthBench Professional: **48.1%** (HealthBench paper)
- HealthBench Hard: **40.1%** (Meta Muse Spark chart)
- MedXpertQA Text: **59.6%** (Meta Muse Spark chart)
- FrontierMath v2 Tiers 1-3: **78.596%** (Epoch AI)
- FrontierMath v2 Tier 4: **49.000%** (Epoch AI)
- AA IFBench: **73.9%** (Artificial Analysis)

Coding:

- LiveCodeBench Pro: **87.5%** (Meta Muse Spark chart)
- SWE-bench Pro: **57.7%** (OpenAI GPT-5.4 blog)
- React Native Evals: **85.3%** (React Native Evals leaderboard)
- Terminal-Bench 2.0: **75.1%** (OpenAI GPT-5.4 blog)
- Vibe Code Bench: **67.42%** (Vals AI)
- AA Coding Index: **71.0%** (Artificial Analysis)
- PostTrainBench v1.1: **19.0%** (PostTrainBench leaderboard)

Multimodal:

- MMMU-Pro: **81.2%** (OpenAI GPT-5.4 blog) / **82.1%** with Python / **78.4%** (Artificial Analysis)
- OfficeQA Pro: **53.2%** (OpenAI GPT-5.5 comparison table)
- CharXiv: **82.8%** (Meta Muse Spark chart)
- ERQA: **65.4%** (Meta Muse Spark chart)
- SimpleVQA: **61.1%** (Meta Muse Spark chart)
- ScreenSpot Pro: **85.4%** (Meta Muse Spark chart)
- ZeroBench: **41.0%** (Meta Muse Spark chart)
- MedXpertQA MM: **77.1%** (Meta Muse Spark chart)
- Design Arena Website: **1221** (OpenRouter)

Long context:

- MRCR v2 128K-256K: **87.5%** (OpenAI GPT-5.5 blog - same as GPT-5.5 family)
- AA LCR: **82.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** TB 2.0 75.1%, CyberGym 79.0%, BrowseComp 82.7%, OSWorld-Verified 75%, MCP Atlas 70.6%, Tau2 98.9%, Claw-Eval 60.3%, GDPval 1307 Elo (below 1750+ frontier), AA Agentic Index 37.3% (est.). Capped by OSWorld 2.0 13.0%, ExploitGym 6.0%, MazeBench 0%, no TB 2.1/4.0 direct scores.
- **Reasoning: 72/100.** GPQA Diamond 92.8% (exceeds 90%+ frontier), HLE 52.1% (exceeds 40%+ frontier), ARC-AGI-1 93.67% / ARC-AGI-2 74.0%, MRCR 87.5% at 128K-256K, AA LCR 82.0%, FrontierMath Tiers 1-3 78.6% / Tier 4 49.0%. Capped by AA Intelligence Index 39 (est., <60 frontier), CritPt 23.4%, ARC-AGI-3 0.2%, AA Omniscience Index 5.8%, Hallucination 91.7%.
- **Context window: 95/100.** 1.05M native context; MRCR 87.5% at 128K-256K, AA LCR 82.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 70/100.** Text + image input only; MMMU-Pro 81.2-82.1%, CharXiv 82.8%, ScreenSpot Pro 85.4%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 78/100.** LiveCodeBench Pro 87.5% (Meta), SWE-bench Pro 57.7%, React Native 85.3%, AA Coding Index 71.0% (exceeds 70%+), Vibe Code 67.42%, TB 2.0 75.1%. Capped by no SWE-bench Verified/DeepSWE/LiveCodeBench/FrontierCode/CursorBench, PostTrainBench 19.0%.
- **Cost efficiency: 70/100.** $2.50/$15 per 1M (≤272K), $5/$22.50 (>272K), blended ~$2.17/M. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2.50/$15 interpolates to ~70.
- **Overall Score: 77/100.** Half-up mean of (70 + 72 + 95 + 70 + 78) / 5 = 77.0 → 77. Best-fit: strong balanced model for reasoning and coding at mid-tier pricing; MRCR 87.5% and Tau2 98.9% are standout; succeeded by GPT-5.5/5.6.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (OpenAI GPT-5.4 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Meta Muse Spark chart), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.