# Claude Fable 5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Max effort tier with fallback)
- **Short description:** Anthropic's most capable generally available model (Fable 5.1/Mythos 5.1 family) for hardest coding and knowledge work, with research capabilities and 98% cache discount, at premium $10/$50 pricing.
- **Provider / access:** Anthropic API (`claude-fable-5-1` via `https://api.anthropic.com/v1/messages`), OpenCode Zen (`opencode/claude-fable-5-1` via `https://opencode.ai/inference/anthropic/v1/messages`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-fable-5-1` (Anthropic API), `opencode/claude-fable-5-1` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $10.00/M in, $0.25/M cache read, $50.00/M out (Anthropic API & OpenCode Zen). 98% cache discount (AA). Blended 7:2:1 ≈ $7.17/M (AA). Cost per Intelligence Index task: $7.63 (AA). US-only inference at 1.1x pricing.
- **Architecture:** Proprietary (Anthropic); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.0%** (Vals AI leaderboard)
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis)
- Terminal-Bench 4.0: **55.8%** (Anthropic System Card) / **52.0%** (Artificial Analysis)
- GDPval-AA v2: **1754 Elo** (Artificial Analysis) / **62.7%** normalized (Artificial Analysis)
- AA Briefcase Elo: **1672** (Artificial Analysis)
- AA Tau3 Banking: **47.2%** (Artificial Analysis)
- OSWorld 2.0: **41.7%** (Anthropic System Card)
- AutomationBench: **31.4%** (Anthropic System Card)
- AA AutomationBench: **59.4%** (Artificial Analysis)
- AA Agentic Index: **58.0%** (Artificial Analysis)
- Toolathlon Verified: **77.8%** (Anthropic System Card)
- Toolathlon Verified Pass@3: **81.5%** (Anthropic System Card)
- Toolathlon avg turns: **23.7** (Anthropic System Card)
- AA Harvey LAB v1.0: **93.0%** (Artificial Analysis)
- CWE-bench v1: **58.0%** (Collinear leaderboard)
- AA AnalystAgent: **57.5%** (Artificial Analysis)
- AA ITBench: **49.5%** (Artificial Analysis)
- GDP.pdf: **26.2%** (Artificial Analysis)
- ApprenticeBench: **72%** (NeoCognition)
- MazeBench: **10%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Artificial Analysis) / **93.4%** (Vals AI)
- HLE: **65%** (Anthropic System Card) / **60.9%** no tools (Anthropic System Card)
- AA HLE: **59.1%** (Artificial Analysis)
- AA Intelligence Index: **53** (rank #5/217) (Artificial Analysis)
- AA LCR: **85.3%** (Artificial Analysis)
- CritPt: **29.7%** (Artificial Analysis)
- ARC-AGI-1: **97.50%** (Anthropic System Card)
- ARC-AGI-2: **90%** (Anthropic System Card)
- MLCR-AA: **71.1%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **65.0%** (Google Gemini 4 Argon chart)
- AA Omniscience Index: **43.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **67.2%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **72.6%** (Artificial Analysis)
- MMLU-Pro (Vals): **92.4%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **90.175%** (Epoch AI)
- FrontierMath v2 Tier 4: **87.805%** (Epoch AI)
- Gray Swan IPI: **1.0%** (Google Gemini 4 Argon chart)

Coding:

- SWE-bench Pro: **81.2%** (Anthropic System Card)
- SWE Multilingual: **89.1%** (Anthropic System Card)
- SWE Multimodal: **54.7%** (Anthropic System Card)
- DeepSWE: **67.4%** (Anthropic System Card)
- FrontierSWE v2: **56.3%** (Proximal leaderboard)
- ProgramBench: **87.6%** (Anthropic System Card)
- CursorBench 3.2: **73.4%** (Cursor evals)
- CursorBench 4.0: **51.8%** (Cursor evals)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard)
- AA Coding Index: **81.6%** (Artificial Analysis)
- AA-SciCode: **63.1%** (Artificial Analysis)
- Bug Hunt Bench: **43.0 fixes** (public data)
- PostTrainBench v1.1: **40.2%** (Google Gemini 4 Argon chart)

Multimodal:

- Design Arena Website: **1314** (OpenRouter)

Long context:

- AA LCR: **85.3%** (Artificial Analysis)
- MLCR-AA: **71.1%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **65.0%** (Google chart)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 85/100.** TB 2.1 91.4% (AA) / 85.0% (Vals), GDPval 1754 Elo (frontier 1750+), TB 4.0 55.8%, Toolathlon 77.8%, AA Agentic Index 58.0%, ApprenticeBench 72%. Capped by TB 4.0 52.0% (AA), OSWorld 41.7%, AutomationBench 31.4%, MazeBench 10%.
- **Reasoning: 90/100.** GPQA Diamond 93.7% (exceeds 90%+ frontier), HLE 65% (exceeds 40%+ frontier), AA HLE 59.1%, AA LCR 85.3%, MLCR 71.1%, ARC-AGI-1 97.5% / ARC-AGI-2 90%, FrontierMath Tiers 1-3 90.2% / Tier 4 87.8% (exceptional). Capped by AA Intelligence Index 53 (<60 frontier), CritPt 29.7%.
- **Context window: 95/100.** 1M native context; AA LCR 85.3%, MLCR 71.1%, GraphWalks 65.0% at 256K-1M — no public MRCR ≥98% at 512K+ found for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only; Design Arena 1314. No video, audio, PDF input reported. Methodology: +image in = 60–70.
- **Coding: 92/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5% (Vals), AA Coding Index 81.6% (exceeds 70%+), AA-SciCode 63.1% (exceeds 55%+), ProgramBench 87.6%, CursorBench 3.2 73.4%, DeepSWE 67.4%. Capped by DeepSWE below 74%+ frontier, CursorBench 4.0 51.8%.
- **Cost efficiency: 25/100.** $10/$50 per 1M, blended ~$7.17/M, 98% cache discount, cost/task $7.63. Methodology: $10/$50 ≈ 30, $3/$15 ≈ 60 → premium pricing yields low score.
- **Overall Score: 86/100.** Half-up mean of (85 + 90 + 95 + 70 + 92) / 5 = 86.4 → 86. Best-fit: premier model for hardest research-grade coding and math; unmatched FrontierMath Tier 4 87.8% and GPQA 93.7%; cost limits to high-value workflows.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic Fable page, System Card), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.