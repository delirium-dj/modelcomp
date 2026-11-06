# GPT-5.2 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (the **thinking** variant). Now **five generations behind** — the current lineup is GPT-6.1 Sol (85.28) → GPT-6.1 Terra (80.79) → GPT-6 Sol (78.03) → GPT-5.6 Sol (74.88) → and this at **59.62, #55 of 1,015**. Note it scores *below* its own GPT-5.2 Pro sibling (66.28), which is unusual.
- **Short description:** A 5.2-generation thinking model whose strongest suit is genuinely unusual — **an exceptionally broad measured multimodal suite (19 benchmarks, Video-MME 86.0%, OmniDocBench 85.7%, VideoMMMU 85.9%)** — paired with **AIME 2025 at 100%** and a **near-zero AA-Omniscience index (−0.9, 81.2% hallucination)**. Its agentic layer is thin (OSWorld-Verified 47.3%, JobBench 34.3%) and its 400K window is half the current standard.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen (`opencode/gpt-5-2`) at **$1.75/$14 with a >272K tier at $3.50/$28**. No Free ID.
- **Release / knowledge:** release date not restated; the 5.2 generation is OpenAI's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5-2`; `opencode/gpt-5-2`.
- **Context window:** **400,000 tokens** (BenchLM) — half the 1M standard of the current frontier, and the primary constraint on this model's ranking.
- **Modalities:** **text and image in; text out** (OpenAI's lineup-wide statement), with an unusually deep measured visual suite behind it including video understanding.
- **Pricing (as of 2026-11-05):** **$1.75 input / $0.175 cached / $14 output per 1M**, with >272K at $3.50 / $0.35 / $28. Methodology anchors put $1.75/$14 between ~$3/$15 (≈60) and ~$1.25/$4.25 (≈88). Batch and Flex at 50%.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-5.2 launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, ARC Prize, the JobBench paper, Qwen's comparison charts and Openrouter supplying independent rows. 46 benchmarks total.

Agent / tool use — **thin**:

- τ²-bench: **84.8%**; BrowseComp: 65.8%; LifeVal: 49.3%; terminalBenchHard: 47.0%
- **OSWorld-Verified: 47.3%**; **JobBench: 34.3%**; Gert Labs: 46.54%
- **Terminal-Bench, τ³-Banking, GDPval-AA, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval: no verified public score found** — so two of three frontier references are entirely unmeasured, and none of the terminal/maze figures exist for this model

Reasoning / knowledge:

- **AIME 2025: 100%** (vendor) / **AA AIME 2025: 99.0%** — essentially saturated on both
- GPQA: **92.4%** (Qwen chart) / **AA-GPQA Diamond 90.3%** — clears the 90%+ reference on both
- **AA-HLE: 37.7%** — fails the 40%+ reference by 2.3 points
- **AA-Omniscience: index −0.9, accuracy 44.3%, hallucination rate 81.2%** — an index of −0.9 means almost exactly as many incorrect as correct answers
- AA Intelligence Index: **30.4%**; AA-LCR: **82.7%**; **CritPt: 11.6%**
- ARC-AGI-1: **86.2%**; ARC-AGI-2: **52.9%**
- FrontierMath v2 Tiers 1–3: **67.4%**; Tier 4: **31.7%**; MMLU-Pro (AA): 87.4%; AA-IFBench: 75.4%
- **MRCL: no verified public score found**

Coding — solid but not frontier:

- **SWE-bench Verified: 80.0%** (vendor) — clears neither the 85%+ terminal reference nor a DeepSWE figure
- SWE-bench Pro: **55.6%**; Vibe Code Bench: **53.5%**
- **AA-SciCode, DeepSWE, AA Coding Index, LiveCodeBench, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal — **the strongest dimension, and the broadest visual suite measured in this research series**:

- **Video-MME: 86.0% (with subtitle) / 85.8% (without)** — genuine video understanding
- **OmniDocBench 1.5: 85.7%**; **VideoMMMU: 85.9%**; **MLVU (M-Avg): 85.6%**; RealWorldQA: 83.3%
- **AI2D_TEST: 92.2%**; **CountBench: 91.9%**; MMMU: 86.7%; MathVision: 83.0%; DynaMath: 86.8%
- MMMU-Pro: 79.5% (vendor); CharXiv: 82.1%; We-Math: 79.0%; V*: 75.9%; CC-OCR: 70.3%; ERQA: 59.8%; SimpleVQA: 55.8%
- Design Arena (website): 1,193 Elo

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band. τ²-bench 84.8% and terminalBenchHard 47.0% are the only respectable figures; **OSWorld-Verified is 47.3%, JobBench 34.3% and LifeVal 49.3%**, and **Terminal-Bench, τ³-Banking, GDPval-AA, MCP-Atlas, Toolathlon, MazeBench, ALE and Claw-Eval have no measurement at all** — leaving two of three references unmeasured and the third effectively absent. BrowseComp 65.8% is the only browsing figure.
- **Reasoning: 72/100.** Mid-band. **AIME 2025 100% (vendor) / 99.0% (AA) and GPQA 90.3–92.4% both clear their references**, and AA-LCR 82.7% is solid long-context reasoning. Capped by **AA-HLE 37.7%** (2.3 points under the 40% reference), **CritPt 11.6%**, FrontierMath Tier 4 31.7%, an AA Intelligence Index of 30.4%, ARC-AGI-2 52.9%, an AA-Omniscience index of −0.9 with an 81.2% hallucination rate, and no MRCR figure.
- **Context window: 90/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the top of that band, and it is the only model in this batch with a window between 200K and 1M. Scored at 90 — above the nominal band — because **AA-LCR is 82.7%**, among the better measured long-context reasoning figures here, so the window is demonstrably usable rather than merely large. Held below the ≥1M tier (95+) because it is half the current standard and no MRCR run exists.
- **Multimodal: 90/100.** Text + image in with text out, but with the **broadest measured visual suite in this research series — 19 benchmarks — and genuine video understanding (Video-MME 86.0%, VideoMMMU 85.9%, MLVU 85.6%)**, plus OmniDocBench 85.7%, AI2D 92.2% and CountBench 91.9%. Scored at the top of the methodology's 75–90 "+video/PDF in" band because the coverage claim is unusually well-evidenced. Held at 90 rather than the 90–100 "audio in" tier because there is no audio input and output is text-only.
- **Coding: 68/100.** Mid-band. SWE-bench Verified 80.0% and SWE-bench Pro 55.6% are solid mid-frontier repair figures, and Vibe Code Bench 53.5% is respectable. Capped because **AA-SciCode, DeepSWE, the AA Coding Index, LiveCodeBench and FrontierCode are all unpublished** — so the 74%, 70% and 55% references cannot be checked at all, and this model has no terminal-bench figure either.
- **Cost efficiency: 82/100.** $1.75/$0.175/$14 per 1M sits between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors, and the 400K window is a genuine asset at that price. Held at 82 rather than 88 because the **>272K tier doubles input cost**, and because the model is **dominated on quality at a lower price by GPT-6.1 Sol ($2/$10, BenchLM 85.28) and roughly matched on price by GPT-5.4 ($2.50/$15, 66.48)** which scores 7 points higher. Batch/Flex at 50% is the mitigator.
- **Overall Score: 74/100.** (48 + 72 + 90 + 90 + 68) / 5 = 73.6 → **74** → **74**. Recommendation: a **strong multimodal document-and-vision model at a fair mid-range price** — the broadest measured visual suite in this research series (19 benchmarks including genuine video understanding), AIME 2025 99–100%, GPQA 90.3%+ and AA-LCR 82.7%, at $1.75/$14 with 400K context. Two cautions: **its agentic layer is thin** (OSWorld-Verified 47.3%, JobBench 34.3%, and no terminal-bench or GDPval figure at all), so it is not an agent; and **its AA-Omniscience index is −0.9 with an 81.2% hallucination rate**, so it is not a factual assistant either. Use it for document, chart, screenshot and video analysis.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.2 launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 46-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, ARC Prize, the JobBench paper, Qwen's Qwen3.5/Qwen3.5-397B-A17B/Qwen3.6-Plus comparison charts and Openrouter) and OpenCode Zen's pricing table. A provenance note worth flagging: **most of this model's multimodal rows are attributed to Qwen's third-party comparison tables rather than OpenAI's own measurements**, which is weaker provenance than the AA/Vals rows and is recorded at each figure rather than implied. The near-zero Omniscience index is attributed explicitly. Missing benchmarks (Terminal-Bench, τ³-Banking, GDPval-AA, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, AA-SciCode, DeepSWE, AA Coding Index, LiveCodeBench, FrontierCode, MRCR) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.2 (launch post; primary source)](https://openai.com/index/introducing-gpt-5-2/)
  - [BenchLM — GPT-5.2 benchmark scores (46 rows, 59.62/100, #55/1015)](https://benchlm.ai/models/gpt-5-2)
  - [Artificial Analysis — GPT-5.2](https://artificialanalysis.ai/models/gpt-5-2)
  - [ARC Prize — GPT-5.2 (XHigh) verified results](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Openrouter — GPT-5.2 benchmarks and pricing](https://openrouter.ai/openai/gpt-5.2/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
