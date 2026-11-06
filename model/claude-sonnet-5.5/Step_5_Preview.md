# Claude Sonnet 5.5 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5. Anthropic's own positioning is "the best combination of speed and intelligence" in the lineup, with **Fast** comparative latency (between Opus 5.5's Moderate and Haiku 5.5's Fastest).
- **Short description:** The mid-tier Anthropic workhorse — and on the current evidence the **best value-per-quality model in the Claude lineup**. BenchLM scores it 81.84/100, #6 of 1009, only 4.45 points behind Opus 5.5 (86.29) at **one-fifth of Opus 5.5's per-token price**, while beating it on the agentic benchmarks that matter most for coding agents.
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud (Google managed and Anthropic managed), Microsoft Foundry, Claude Platform on AWS, and OpenCode Zen (`opencode/claude-sonnet-5-5` at $2/$10/$0.10).
- **Release / knowledge:** the cache-read price was cut **50% on October 7, 2026** (from $0.20 to $0.10) in the Haiku 5.5 announcement. Reliable knowledge cutoff and training data cutoff both **Jun 2026**.
- **IDs:** `claude-sonnet-5-5` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens**, and critically — per Anthropic's own pricing note — **the 1M window is included at standard pricing with no long-context surcharge**. Max output 128K synchronous, 300K on Batches with the `output-300k-2026-03-24` beta header.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement). Adaptive thinking is on by default but — unlike Opus 5.5 and Fable 5.1 — the Models API reports `thinking.types.disabled.supported = false`, i.e. thinking **cannot** be turned off; default effort `high`.
- **Pricing (as of 2026-11-05):** **$2 input / $0.10 cached input / $10 output per MTok**; 5m cache write $2.50, 1h cache write $4; **Batch API $1 input / $5 output** (50% off). Cache reads are 5% of base — half the 2.5% Fable 5.1 rate in absolute terms but a *worse* ratio; the absolute $0.10 is what matters for long-prompt agentic work.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

BenchLM's 77-row catalog is the index; most numbers come from Anthropic's Sonnet 5.5 system card and launch post, with Artificial Analysis, Vals, ARC, Epoch, Cognition, Cursor, Collinear, Nous Research and LlamaIndex supplying the independent rows. Vendor and AA runs are shown separately where both exist.

Agent / tool use — **the strongest agentic profile in this batch**:

- **Terminal-Bench 4.0: 70.6%** (Anthropic) / **63.6%** (AA) — the highest Terminal-Bench 4.0 figure measured in this research series
- **GDPval-AA: 1,844 Elo** / **66.9%** normalized (AA) — clears the 1,750 frontier reference
- **AA Harvey LAB v1.0: 93.1%**; AA Briefcase: **1,811 Elo**; DRACO: 87.0%
- Toolathlon-Verified: **77.8%** (Pass@3 85.2%, Pass³ 68.5%, mean 31.6 turns)
- AA AutomationBench: **71.8%**; OSWorld 2.1: **80.1%**; OSWorld 2.1 Offline: **83.9%**
- AA-AnalystAgent: 57.5%; Hermes Bench: 73.5%; Terminal-Bench-Science 0.1: **59.9%**
- AutomationBench (Zapier 1.0.6): 44.7%; GDP.pdf: 25.8%; **MazeBench: 8%**
- LAB (Harvey held-out): criterion-pass **93.1%** but all-pass only **10.0%** — the all-pass metric is where legal agentic work actually fails
- **τ³-Banking: no verified public score found**; **Terminal-Bench 2.1: no verified public score found**; **Claw-Eval: no verified public score found**

Reasoning / knowledge:

- AA Intelligence Index: **54.2** — the highest of any Anthropic model measured here (Opus 5.5 58.4, Fable 5.1 49.0)
- HLE with tools: **64.5%**; HLE without tools: **56.9%**; AA-HLE: **55.0%**
- **MLCR-AA: 41.7%** — by far the best long-context medical reasoning in this batch (Opus 5.5 27.8%, Fable 5.1 15.6%)
- FrontierMath v2 Tier 4: **80.5%**; Tiers 1–3: **88.8%** (Epoch AI); ArXivMath 86.8% no-tools / **95.2%** with tools
- AA-LCR: **82.7%**; CritPt: **31.4%**
- GMMLU: 92.1%; MILU: 91.6%; AA-Omniscience: index 30.5, accuracy 51.5%, hallucination rate **43.3%** (the best Anthropic hallucination figure here)
- **GPQA Diamond: no verified public score found**; **ARC-AGI: no verified public score found**; **MRCR: no verified public score found** — three frontier-reference benchmarks simply absent

Coding:

- **SWE-bench Pro: 81.3%**; SWE Multilingual: **90.3%**; ProgramBench: **79.7%**
- DeepSWE: **71.0%** — 3 points under the 74% frontier reference
- AA-SciCode: **61.0%** (clears the 55% reference)
- FrontierCode 1.1 Main 46.2% / Extended 59.1%; **FrontierCode 2.0: 41.0%**; FrontierSWE v2: 61.9%; CursorBench 4.0: 55.5%; Bug Hunt Bench: 51.3 fixes
- SWE-bench Verified: **no verified public score found**; no AA Coding Index figure recorded

Multimodal (image-in only):

- **ExtractBench: 94.68%** (the highest document-extraction figure in this batch) and **Chartography 90.2% with tools** / 61.6% without
- BenchCAD Vision2Code: **0.963** with tools (marginally above Opus 5.5's 0.962); OfficeQA 76.9%; Design Arena **1,323 Elo**
- ExtractBench Pro: 32%; ParseBench: 69.26%; SWE Multimodal: 54.3%
- No MMMU-Pro figure recorded

Life sciences / professional: HealthBench Professional raw **77.1%**, BioMysteryBench 89.2% (human-solvable), de novo protein-binder design 82.3%, Medicinal chemistry 65.3%, Protocols 67.3%/66.6%, SingleCellBench 59.1%.

### Normalized scores (1–100)

- **Tool use: 93/100.** The strongest agentic model in this batch on measured evidence: Terminal-Bench 4.0 70.6%/63.6% is the highest such figure anywhere in this research series, GDPval-AA 1,844 Elo clears the 1,750 frontier reference, and AA Harvey LAB 93.1%, AA Briefcase 1,811, Toolathlon-Verified 77.8% and OSWorld 2.1 Offline 83.9% are all top-tier. Capped by three missing frontier-reference benchmarks (no τ³-Banking, no Terminal-Bench 2.1, no Claw-Eval), MazeBench 8%, GDP.pdf 25.8% and the LAB all-pass/criterion-pass gap (10.0% vs 93.1%).
- **Reasoning: 92/100.** AA Intelligence Index 54.2, HLE 55.0–64.5%, MLCR-AA 41.7% (2.7x Opus 5.5's), FrontierMath Tier 4 80.5% and ArXivMath 95.2% with tools are all strong, with the best hallucination rate in the Anthropic lineup (43.3%). Capped by the complete absence of GPQA Diamond, ARC-AGI and MRCR — three of the four methodology frontier references are simply unmeasurable for this model — plus CritPt 31.4%.
- **Context window: 97/100.** 1M-token tier with 128K synchronous and 300K Batch output, AA-LCR 82.7%, and the decisive commercial detail that **the 1M window is included at standard pricing with no long-context surcharge** (unlike GPT-6 Astra's 2x/1.5x step at 272K, or Gemini's >200K tier). Held under 100 because no MRCR retrieval run exists.
- **Multimodal: 70/100.** Text + image in with text out places it at the top of the methodology's "+image in" 60–70 band, and the depth justifies the ceiling: ExtractBench 94.68%, Chartography 90.2% with tools, BenchCAD 0.963, OfficeQA 76.9%. Not higher because there is no video or audio input and no MMMU-Pro figure to evidence general visual reasoning.
- **Coding: 87/100.** SWE-bench Pro 81.3%, SWE Multilingual 90.3%, ProgramBench 79.7% and AA-SciCode 61.0% (clears the 55% reference) are solid. Capped by DeepSWE 71.0% (3 points under the 74% reference), FrontierCode 2.0 41.0%, CursorBench 4.0 55.5%, and the fact that **SWE-bench Verified, Terminal-Bench 2.1 and the AA Coding Index are all unpublished** for this ID — so the two clearest coding frontier references cannot be checked.
- **Cost efficiency: 86/100.** $2/$10 with $0.10 cache reads and Batch at $1/$5 sits just below the methodology's ~$1.25/$4.25 (≈88) anchor, and two structural advantages push it up: the **1M context is unpriced** (no >200K or >272K tier), so long-context agentic work does not silently double the bill, and BenchLM reports only **3 of 111 other ranked models** with a published price cost the same or less while scoring higher. The best quality-per-dollar in the Claude lineup, though not as cheap per task as Muse Spark 1.3's $1.60.
- **Overall Score: 88/100.** (93 + 92 + 97 + 70 + 87) / 5 = 87.8 → **88** → 88. Recommendation: **the default pick for most work**, and the clearest value in the Anthropic lineup — 4.45 BenchLM points behind Opus 5.5 at a fifth of the price, with a higher measured Terminal-Bench 4.0 (70.6% vs 66.4%), a higher AA index (54.2 vs 58.4 is the one loss), better MLCR-AA and a lower hallucination rate. Reach for Opus 5.5 only when its extra effort headroom, 300K Batch output or ARC-AGI-2/GPQA-grade reasoning is genuinely required, and for Fable 5.1 only when Opus 5.5 at max effort still fails.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's official model documentation, pricing page and Sonnet 5.5 system card as the primary source, cross-checked against BenchLM's 77-row catalog (which attributes each number to Anthropic's system card and launch post, Artificial Analysis, Epoch AI, Cognition, Cursor, Collinear, Nous Research, Kaggle, LlamaIndex or OpenRouter) and OpenCode Zen's pricing table. Vendor-vs-independent conflicts are listed side by side — Terminal-Bench 4.0 70.6% vs 63.6% — and missing frontier-reference benchmarks (GPQA Diamond, ARC-AGI, MRCR, SWE-bench Verified, Terminal-Bench 2.1) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 5.5 model documentation](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Anthropic — Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)
  - [Anthropic — Claude Sonnet 5.5 system card](https://www.anthropic.com/claude-sonnet-5-5-system-card)
  - [Anthropic — Claude API pricing (1M context at standard pricing, cache and Batch rates)](https://platform.claude.com/docs/en/about-claude/pricing)
  - [BenchLM — Claude Sonnet 5.5 benchmark scores (77 rows, 81.84/100, #6/1009)](https://benchlm.ai/models/claude-sonnet-5-5)
  - [Artificial Analysis — Claude Sonnet 5.5](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
