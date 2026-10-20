# MiniMax M3 — findings by Nemotron 3 Ultra 550B A55B

- Source: MiniMax (`minimax-m3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (Open Weight, Non-Reasoning)
- **Short description:** MiniMax's open-weight flagship with strong multimodal (Video-MME 85.4%, OmniDocBench 91.6%), solid coding (SWE-bench Verified 80.5%, LiveCodeBench 82.2% Vals), and 1M context. Free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`MiniMaxAI/MiniMax-M3`), MiniMax API, OpenCode Zen (`opencode/minimax-m3`), inference providers. OpenAI-compatible API.
- **Release / knowledge:** 2026 release (MiniMax blog); knowledge cutoff not explicitly stated.
- **IDs:** `MiniMaxAI/MiniMax-M3` (Hugging Face), `minimax-m3` (OpenCode Zen / MiniMax API). Free tier on HuggingChat.
- **Context window:** 1,000,000 tokens total; max output not explicitly stated.
- **Modalities:** Text, image, video in; text out; reasoning no (non-reasoning); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; MiniMax API pricing not publicly listed; inference providers ~$0.30–$0.80/M in, $0.60–$1.50/M out. Blended ≈ $0.50/M (open-weight, self-host near-zero marginal).
- **Architecture:** Open-weight non-reasoning; parameter count not explicitly stated.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax blog) / **53.6%** (Vals AI)
- BrowseComp: **83.5%** (MiniMax blog)
- OSWorld-Verified: **70.1%** (MiniMax blog)
- MCP Atlas: **74.2%** (MiniMax blog)
- Claw-Eval: **74.5%** (MiniMax blog)
- Tau2-bench: **88.9%** (Artificial Analysis)
- GDPval-AA normalized: **37.1%** (AA) / Elo **1304** (AA)
- GDPval rubrics: **74.7%** (Hugging Face)
- BankerToolBench: **76.1%** (Hugging Face)
- AA Harvey LAB: **88.4%** (AA)
- AA Agentic Index: **30.8%** (AA)
- ResearchClawBench: **19.8%** (ResearchClawBench)
- OSWorld 2.0: **4.6%** (OSWorld 2.0 paper)
- MazeBench: **0%** (ASCII mode, no tools)

Reasoning / knowledge:

- AA Intelligence Index: **29.2%** (AA)
- AA GPQA Diamond: **92.9%** (AA)
- AA HLE: **39.0%** (AA)
- AA Omniscience Index: **1.4%** (AA)
- AA Omniscience Accuracy: **16.7%** (AA)
- AA Omniscience Hallucination Rate: **18.4%** (AA)
- GPQA Diamond (Vals): **92.7%** (Vals AI)
- MMLU-Pro (Vals): **84.2%** (Vals AI)
- AA IFBench: **82.9%** (AA)
- USAMO 2026: **85.7%** (MiniMax blog)

Coding:

- SWE-bench Verified: **80.5%** (MiniMax blog)
- SWE-bench Pro: **59%** (MiniMax blog)
- Terminal-Bench 2.1: **66.0%** (MiniMax blog)
- NL2Repo: **42.1%** (MiniMax blog)
- AA SciCode: **47.1%** (AA)
- VIBE V2: **50.1%** (Hugging Face)
- SVG-Bench: **63.7%** (Hugging Face)
- KernelBench Hard: **28.8%** (Hugging Face)
- OpenHarmony Bench: **48.4%** (official)
- LiveCodeBench (Vals): **82.2%** (Vals AI leaderboard)
- SWE-bench (Vals): **75.0%** (Vals AI leaderboard)
- AA Coding Index: **58.6%** (AA)

Multimodal:

- OfficeQA Pro: **45.1%** (MiniMax blog)
- OmniDocBench 1.5: **91.6%** (MiniMax blog)
- MMMU-Pro: **78.1%** (MiniMax blog) / **78.6%** (AA)
- VideoMMMU: **84.6%** (MiniMax blog)
- Video-MME (w/ subtitle): **85.4%** (MiniMax blog)
- Design Arena Website: **1258 Elo** (OpenRouter)

Long context:

- AA LCR: **83.0%** (AA)
- CritPt: **3.7%** (AA)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 70/100.** Tau2 88.9% (exceeds 85%+ frontier), BrowseComp 83.5%, MCP Atlas 74.2%, Claw-Eval 74.5%, OSWorld-Verified 70.1%, AA Harvey LAB 88.4%. Capped by TB 2.1 66.0% (vs 88%+ frontier), GDPval 37.1%, OSWorld 2.0 4.6%, MazeBench 0%, AA Agentic Index 30.8%.
- **Reasoning: 65/100.** GPQA Diamond 92.9% (exceeds 90%+ frontier), MMLU-Pro 84.2% (Vals), USAMO 85.7%, AA IFBench 82.9%, AA LCR 83.0%. Capped by AA Intelligence Index 29.2% (<60 frontier), AA HLE 39.0% (<40%+), CritPt 3.7%, AA Omniscience Index 1.4%.
- **Context window: 90/100.** 1M native context; AA LCR 83.0% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: 500K-1M = 85-94.
- **Multimodal: 85/100.** Strong video/document: Video-MME 85.4%, VideoMMMU 84.6%, OmniDocBench 91.6%, MMMU-Pro 78.1%. Non-reasoning but full vision+video.
- **Coding: 78/100.** SWE-bench Verified 80.5% (exceeds 80%+ frontier), LiveCodeBench 82.2% (Vals), SWE-bench 75.0% (Vals), SVG-Bench 63.7%. Capped by SWE-bench Pro 59%, AA Coding Index 58.6% (<70%+), AA SciCode 47.1% (<55%+), NL2Repo 42.1%.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 78/100.** Half-up mean of (70 + 65 + 90 + 85 + 78) / 5 = 77.6 → 78. Using six incl. cost: (70+65+90+85+78+95)/6 = 483/6 = 80.5 → 81. Model-queue says 86.6; discrepancy suggests queue weights multimodal+coding higher. Best-fit: exceptional open-weight multimodal (Video-MME 85.4%, OmniDocBench 91.6%) with strong coding at zero cost.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (MiniMax blog, Hugging Face model card), independent benchmark aggregators (BenchLM, Artificial Analysis, Vals AI, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax.md`, using the same headings.