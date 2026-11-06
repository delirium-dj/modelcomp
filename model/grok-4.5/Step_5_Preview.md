# Grok 4.5 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5. Sandwiched between Grok 4.6 (66.69) and Grok 4.3 (52.89), and **the only Grok whose BenchLM overall (63.03, #40 of 1,015) exceeds both its neighbours' ranks** — i.e. the 4.5→4.6 step was the smallest generational gain in the family.
- **Short description:** A Grok 4.5-generation model with a **strong knowledge-and-reasoning profile for its rank** (AA-GPQA Diamond 93.1%, AA-LCR 79.3%, FrontierMath Tier 4 24.4%) and a **solid coding record** (AA Coding Index 72.5%, SWE-bench 86.6% Vals, VulcanBench v3 89.9%), set against a **500K window** and a **Terminal-Bench 2.1 split** (83.3% vendor / 81.6% AA / 67.8% Vals — a 15.5-point spread, the largest in this batch).
- **Provider / access:** xAI's own API, Cursor (which co-published the launch), Vercel AI Gateway, OpenRouter, and OpenCode Zen (`xai/grok-4.5`). No Free ID.
- **Release / knowledge:** release date not restated; Grok 4.5 sits mid-way through xAI's 2026 4.x line. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.5` (xAI, Zen); `x-ai/grok-4.5` (Openrouter).
- **Context window:** **500,000 tokens** — half the current 1M standard, shared with the whole 4.x line.
- **Modalities:** **text and image in; text out**.
- **Pricing (as of 2026-11-05):** **$2.00 input / $6.00 output per 1M with $0.50 cached reads below 200K**, and a >200K tier at $4/$12/$1 — the same card as Grok 4.6, so 4.6 offers no price advantage for its higher rank. Methodology anchors put $2/$6 near ≈88.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

xAI's Grok 4.5 launch post is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor, Kaggle, LlamaIndex, VulcanBench's technical report, PostTrain Bench and Openrouter supplying independent rows. 37 benchmarks total.

Agent / tool use:

- **Terminal-Bench 2.1: 83.3%** (vendor) / **81.6%** [AA] / **67.8%** [Vals] — a **15.5-point spread**, and the Vals figure is 20 points under the 88%+ reference
- GDPval-AA: **1,430 Elo** [AA] / 44.2% normalized — under the 1,750 reference
- **AA Tau3 Banking: 42.1%** — 7.9 points under the 50% reference
- **AA Agentic Index: 42.1%**; AA EnterpriseOps-Gym: 40.8%
- **Terminal-Bench 3.0: 15.7%** — near-floor on the newer harness
- **MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 93.1%** / GPQA Diamond 92.9% (Vals) — clears the 90%+ frontier reference on both
- AA-HLE: **42.7%** — clears the 40%+ reference
- **AA-LCR: 79.3%**; FrontierMath v2 Tiers 1–3: **57.2%**; Tier 4: **24.4%**
- AA Intelligence Index: **38.8%**; **CritPt: 15.4%**
- ARC-AGI-1: **85.7%**; ARC-AGI-2: **52.6%**; **ARC-AGI-3: 0.3%**
- **AA-Omniscience: index 25.3, accuracy 51.6%, hallucination rate 54.1%** — mid-pack reliability, worse than Grok 4.6's 34.3% and Grok 4.7's 20.0%
- MMLU-Pro (Vals): 89.2%
- **MRCR: no verified public score found**

Coding — the strongest dimension:

- **AA Coding Index: 72.5%** — clears the 70%+ frontier reference
- SWE-bench (Vals): **86.6%**; SWE-bench Pro: 64.7% (vendor); SWE Multilingual: 78.0%
- LiveCodeBench (Vals): **87.4%**; **VulcanBench v3: 89.9%**; CursorBench 3.2: 66.7%
- **AA-SciCode: 55.0%** — exactly at the 55% reference
- deepSwe: **53.0%** — 21 points under the 74% reference; PostTrainBench v1.1: 23.4%
- **SWE-bench Verified, FrontierCode, Vibe Code Bench, Terminal-Bench 4.0: no verified public score found**

Multimodal (image-in):

- AA-MMMU-Pro: **80.4%**; Design Arena (website): **1,279 Elo**
- **CharXiv, ExtractBench, BabyVision, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 70/100.** Weakest dimension and mid-band. **Terminal-Bench 2.1 83.3% (vendor) and 81.6% (AA) are 5–7 points under the 88%+ reference, but Vals measures only 67.8%** — a 15.5-point spread that makes the favourable direction untrustworthy. GDPval-AA 1,430 Elo and AA Tau3 Banking 42.1% both miss their references, AA Agentic Index is 42.1%, Terminal-Bench 3.0 is 15.7%, and **MCP-Atlas, OSWorld, Toolathlon, Claw-Eval and MazeBench are entirely absent**.
- **Reasoning: 78/100.** Above the methodology's mid band and the strongest dimension. AA-GPQA Diamond 93.1% and AA-HLE 42.7% both clear their references, AA-LCR 79.3% is solid long-context reasoning, and FrontierMath Tier 4 24.4% is at least non-zero. Capped by an AA Intelligence Index of 38.8%, CritPt 15.4%, ARC-AGI-2 52.6%, ARC-AGI-3 0.3%, a **54.1% hallucination rate — materially worse than its own successors' 34.3% (4.6) and 20.0% (4.7)** — and no MRCR figure.
- **Context window: 85/100.** **500,000 tokens** places it in the methodology's 500K–1M tier at the floor, shared across the whole Grok 4.x line. Held at 85 rather than higher because AA-LCR is 79.3%, no MRCR figure exists, no max-output limit is published, and the >200K tier doubles input cost.
- **Multimodal: 76/100.** Text + image in with text out, scored above the methodology's 60–70 band on **AA-MMMU-Pro 80.4%** and a 1,279-Elo Design Arena. Held at 76 because the visual suite is two benchmarks — no CharXiv, ExtractBench, BabyVision or ZeroBench — and there is no video or audio input.
- **Coding: 86/100.** The strongest dimension and right at the frontier band's lower edge. **AA Coding Index 72.5% clears the 70% reference** and AA-SciCode 55.0% is exactly at the 55% reference, with SWE-bench 86.6% (Vals), LiveCodeBench 87.4% and VulcanBench v3 89.9% all strong. Capped by deepSwe 53.0% (21 points under the reference), FrontierMath-adjacent figures, PostTrainBench 23.4%, and the absence of SWE-bench Verified, FrontierCode and Vibe Code Bench.
- **Cost efficiency: 88/100.** **$2.00/$0.50/$6.00 per 1M** maps onto the ≈88 anchor with a 75% cache-read discount, and the 500K window is a genuine asset at that price. Held at exactly 88 because the **>200K tier doubles input cost**, there is no free tier, and **Grok 4.6 is sold on the identical card at a higher BenchLM rank** — so 4.5 has no price advantage over its successor.
- **Overall Score: 79/100.** (70 + 78 + 85 + 76 + 86) / 5 = 79.0 → **79**. Recommendation: a **solid mid-price coding model** — AA Coding Index 72.5%, SWE-bench 86.6%, VulcanBench v3 89.9% and LiveCodeBench 87.4% at $2/$6 — whose reliability (54.1% hallucination) is acceptable rather than good. Two cautions: the **15.5-point Terminal-Bench 2.1 vendor-vs-Vals spread** needs resolving on your own harness before trusting the favourable reading; and **Grok 4.6 sits on the identical rate card with a higher BenchLM rank, better hallucination (34.3% vs 54.1%) and a stronger agentic profile** — prefer 4.6 unless 4.5 is already deployed.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using xAI's Grok 4.5 launch post as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 37-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, Cursor, Kaggle, LlamaIndex, VulcanBench's technical report, PostTrain Bench and Openrouter) and Zen's pricing table. The batch's largest vendor-vs-independent spread — Terminal-Bench 2.1 at 83.3% (vendor) / 81.6% (AA) / 67.8% (Vals) — is listed side by side rather than averaged, and the reliability regression against both successors (4.6's 34.3% and 4.7's 20.0% hallucination) is attributed explicitly. Missing benchmarks (MCP-Atlas, OSWorld, Toolathlon, Claw-Eval, MazeBench, ALE, MRCR, SWE-bench Verified, FrontierCode, Vibe Code Bench, and all multimodal benchmarks except MMMU-Pro and Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.5 launch post (primary benchmark source)](https://x.ai/news/grok-4-5)
  - [Cursor — Grok 4.5 launch post (co-publisher; source of the SWE Multilingual row)](https://cursor.com/en-US/blog/grok-4-5)
  - [BenchLM — Grok 4.5 benchmark scores (37 rows, 63.03/100, #40/1015)](https://benchlm.ai/models/grok-4-5)
  - [Artificial Analysis — Grok 4.5](https://artificialanalysis.ai/models/grok-4-5)
  - [Vals AI — Grok 4.5 leaderboard results](https://www.vals.ai/models/grok_grok-4.5)
  - [ARC Prize — published semi-private results for Grok 4.5](https://arcprize.org/results/xai-grok-4-5)
  - [VulcanBench v3 Technical Report No. 4 (source of the 89.9% figure)](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/v3-3way-2026-07/model-card.md)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
