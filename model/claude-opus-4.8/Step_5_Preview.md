# Claude Opus 4.8 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8. Now **two generations behind** the current lineup: Opus 5.5 (#1, 86.29) → Opus 5 (#10, 79.68) → Opus 4.8 (#16, 69.63) on BenchLM. Anthropic's models overview lists Opus 4.8 under "Legacy models (still available)".
- **Short description:** The 4.8-generation Opus flagship — still a genuinely capable agentic and coding model (SWE-bench Verified 88.6%, DeepSearchQA 93.1%, MCP Atlas 82.2%, AA Coding Index 74.3%) with the **second-best hallucination rate measured in this batch (39.3%)**. Its weak spots are concentrated in the newest agentic harnesses (Terminal-Bench 3.0 21.1%, OSWorld 2.0 20.6%, MazeBench 0%, ARC-AGI-3 1.5%).
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS, and OpenCode Zen (`opencode/claude-opus-4-8`) at **$5/$25/$0.50**.
- **Release / knowledge:** release date not restated for this legacy SKU; the 4.8 generation is the immediate predecessor of Opus 5. **Knowledge cutoff not restated by Anthropic** — the models-overview cutoff row covers only the current lineup (Jun 2026).
- **IDs:** `claude-opus-4-8` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens** (BenchLM). Max output not restated for this SKU; it is **not** in the 300K Batch extended-output list, so output is capped at 128K.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). Reasoning model.
- **Pricing (as of 2026-11-05):** **$5 input / $0.50 cached / $25 output per 1M** on Zen — the same rate card as Opus 5, which scores 10 BenchLM points higher. Batch API 50% off.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Opus 4.8 system card is the primary source (so most rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, PostTrainBench, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench, the OSWorld 2.0 paper and OpenRouter supplying independent rows.

Agent / tool use — **split between classic and new harnesses**:

- **Terminal-Bench 2.1: 84.6%** (AA) / **74.6%** (Anthropic system card) / **71.9%** (Vals) — a 12.7-point spread across harnesses, none reaching the 88% reference
- **BrowseComp: 84.3%**; **DeepSearchQA: 93.1%**; **MCP Atlas: 82.2%**; **OSWorld-Verified: 83.4%**; τ²-bench: **94.4%**
- **GDPval-AA: 1,593 Elo** / 47.7% normalized — under the 1,750 frontier reference
- Toolathlon: 59.9%; Gert Labs: 72.97%; terminalBenchHard: 58.3%; Finance Agent v2: 53.9%; AA-AnalystAgent: 45.0%; AA EnterpriseOps-Gym: 44.0%; AA Agentic Index: 42.6%
- **Terminal-Bench 3.0: 21.1%**; **OSWorld 2.0: 20.6%**; **MazeBench: 0%**; ResearchClawBench: 21.1% — the four worst agentic figures in this batch
- **τ³-Banking, Claw-Eval: no verified public score found**

Reasoning / knowledge:

- **GPQA: 93.6%** (system card) / **92.0%** (AA) / **92.4%** (Vals) — clears the 90%+ frontier reference on all three
- **HLE: 57.9%** (system card) / 49.8% without tools / AA-HLE 48.7% — clears the 40%+ reference
- **USAMO 2026: 96.7%** — the second-highest math-competition figure in this batch
- **ARC-AGI-1: 92.5%**; ARC-AGI-2: 72.1%; **ARC-AGI-3: 1.5%**
- FrontierMath v2 Tiers 1–3: **80.0%**; Tier 4: **56.1%**; AA-LCR: **77.7%**; CritPt: 20.9%
- **AA-Omniscience: index 28.8, accuracy 48.8%, hallucination rate 39.3%** — the second-best reliability profile in this batch, behind GPT-6.1 Sol's 51.9% only on index
- Artificial Analysis Intelligence Index: **41.8**; MMLU-Pro (Vals): 89.6%; INCLUDE: 87.6%; AA-IFBench: 62.2%
- **MRCR: no verified public score found**

Coding:

- **SWE-bench Verified: 88.6%** (system card and Vals agree exactly)
- **AA Coding Index: 74.3%** — clears the 70% frontier reference
- LiveCodeBench (Vals): **87.8%**; SWE Multilingual: 84.4%; SWE-bench Pro: 69.2%
- **AA-SciCode: 54.4%** — 0.6 points under the 55% reference; Terminal-Bench 2.1 74.6–84.6%
- CursorBench 3.1 58.4% / 3.2 62.3%; FrontierCode 1.1 Main 46.5%; **FrontierCode 2.0: 14.7%**; PostTrainBench v1.1: 32.9%; Terminal-Bench 3.0: 21.1%
- **DeepSWE: no verified public score found**

Multimodal (image-in) — stronger than its generation suggests:

- **CharXiv: 89.9%** (80.5% without tools); **ScreenSpot Pro: 87.9%**; **ExtractBench: 87.09%**
- OfficeQA Pro: 66.2%; ParseBench: 62.27%; Design Arena: 1,257 Elo; SWE Multimodal: 38.4%

### Normalized scores (1–100)

- **Tool use: 72/100.** Genuinely two models in one. The classic agentic suite is good — BrowseComp 84.3%, DeepSearchQA 93.1%, MCP Atlas 82.2%, OSWorld-Verified 83.4%, τ²-bench 94.4% — while the *new* agentic suite collapses: Terminal-Bench 3.0 21.1%, OSWorld 2.0 20.6%, MazeBench 0%, ResearchClawBench 21.1%. Terminal-Bench 2.1 sits at 84.6% (AA) against the 88% reference, GDPval-AA is 1,593 Elo against 1,750, and **τ³-Banking and Claw-Eval are missing**. A model whose agentic skill has not transferred to the newer harnesses.
- **Reasoning: 82/100.** GPQA Diamond 92.0–93.6% and HLE 48.7–57.9% both clear their references, USAMO 2026 is 96.7%, ARC-AGI-1 is 92.5%, and the hallucination rate of 39.3% is the second-best in this batch. Capped by an AA Intelligence Index of 41.8, ARC-AGI-2 at 72.1% (20+ points behind successors), ARC-AGI-3 at 1.5%, FrontierMath Tier 4 at 56.1%, CritPt 20.9% and no MRCR figure.
- **Context window: 96/100.** 1M-token tier with AA-LCR 77.7%. Held just under the newer Anthropic models because no MRCR run exists, output is capped at 128K (the 300K Batch beta does not cover this SKU), and AA-LCR at 77.7% is mid-tier.
- **Multimodal: 78/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document/chart tier is explicitly measured and strong: CharXiv 89.9%, ScreenSpot Pro 87.9%, ExtractBench 87.09% — a better visual profile than GPT-6 Astra's on these specific harnesses. Held at 78 because there is no video or audio input and SWE Multimodal is only 38.4%.
- **Coding: 86/100.** AA Coding Index 74.3% clears the 70% reference, SWE-bench Verified 88.6% is solidly frontier, and LiveCodeBench 87.8% and SWE Multilingual 84.4% corroborate. Capped by AA-SciCode 54.4% (0.6 points under the 55% reference), Terminal-Bench 2.1 84.6% at best (under the 88% reference), FrontierCode 2.0 14.7%, Terminal-Bench 3.0 21.1%, and no DeepSWE figure.
- **Cost efficiency: 45/100.** $5/$25 per MTok sits between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors — the *same rate card as Opus 5*, which scores 10 BenchLM points higher, and 2.5x Claude Sonnet 5.5's $2/$10 for a lower BenchLM rank. No free tier, no published cost-per-task lead. Batch at 50% is the only mitigator.
- **Overall Score: 83/100.** (72 + 82 + 96 + 78 + 86) / 5 = 82.8 → **83** → 83. Recommendation: a competent, low-hallucination (39.3%) legacy workhorse — reasonable for repository repair (SWE-bench Verified 88.6%) and classic browsing/research agents (BrowseComp 84.3%, DeepSearchQA 93.1%, MCP Atlas 82.2%). But it is strictly dominated by its own successors: **Claude Sonnet 5.5 ranks higher (81.84 vs 69.63) at 2.5x lower per-token cost**, and Opus 5 scores higher at the *same* $5/$25 price. Migrate unless you are pinned to `claude-opus-4-8`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Opus 4.8 system card as the primary source (so most rows are vendor-run and labelled as such), cross-checked against BenchLM's 64-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cognition, Cursor, PostTrainBench, Kaggle, LlamaIndex, Gert Labs, ResearchClawBench, the OSWorld 2.0 paper and OpenRouter) and OpenCode Zen's pricing table. Vendor-vs-independent conflicts are listed side by side — Terminal-Bench 2.1 84.6% / 74.6% / 71.9% across three harnesses — rather than averaged. Missing benchmarks (τ³-Banking, Claw-Eval, MRCR, DeepSWE) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Opus 4.8 system card (primary benchmark source)](https://www.anthropic.com/claude-opus-4-8-system-card)
  - [Anthropic — Models overview (legacy status, lineup modality statement, 300K Batch list)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Opus 4.8 benchmark scores (64 rows, 69.63/100, #16/1009)](https://benchlm.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Claude Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Vals AI — Claude Opus 4.8 leaderboard results](https://www.vals.ai/models/anthropic_claude-opus-4-8)
  - [ARC Prize — published semi-private results](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
