# Claude Sonnet 5 — findings by Step 5 Preview

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5. The predecessor of Claude Sonnet 5.5, and now **two generations behind** in a lineup where Sonnet 5.5 (BenchLM 81.84, #6) scores 17.6 points higher. Anthropic's models overview lists it under "Legacy models (still available)". BenchLM scores it 64.25/100, **#36 of 1,010**.
- **Short description:** A legacy Sonnet with a notably **low hallucination rate (39.4% — among the lowest measured in this research series, behind only Gemini 4 Argon's 4.3%, Muse Wonder Full's 23% and Muse Spark 1.2's 33.3%)** and a solid coding record (SWE-bench Verified 85.2%, AA Coding Index 71.5%, VulcanBench CII 89.2%). Its weaknesses are concentrated in the newest agentic harnesses (Terminal-Bench 3.0 14.6%, MazeBench 0%, CursorBench 4.0 34.1%) and deep reasoning (CritPt 16.9%, FrontierMath Tier 4 29.3%).
- **Provider / access:** Claude API, Amazon Bedrock, Claude Models on Google Cloud, Microsoft Foundry, and OpenCode Zen (`opencode/claude-sonnet-5`) — Zen's current model list carries Sonnet 5.5 but **not Sonnet 5**, consistent with its legacy status.
- **Release / knowledge:** release date not restated for this legacy SKU. **Knowledge cutoff not restated by Anthropic** — the models-overview cutoff row covers only the current lineup (Jun 2026).
- **IDs:** `claude-sonnet-5` (all platforms use the same dateless pinned ID).
- **Context window:** **1M tokens** (BenchLM). Max output not restated for this SKU, and it **is** in the 300K Batch extended-output list, so 300K output is available via Batches.
- **Modalities:** **text and images in → text out** (Anthropic's lineup-wide statement).
- **Pricing (as of 2026-11-05):** **$2 input / $0.10 cached / $10 output per 1M** — the same card as Sonnet 5.5, which scores 17.6 BenchLM points higher. Methodology anchors put $2/$10 between ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60). Batch API 50% off.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Claude Sonnet 5 system card is the primary source (so most rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, VulcanBench, NeoCognition and Google's Gemini 3.8 Flash card supplying independent rows.

Agent / tool use — **mid-pack and generational-split**:

- **BrowseComp: 84.7%** (vendor) — the best browsing figure in this batch
- **OSWorld-Verified: 81.2%** (vendor); aaTerminalBench21: 80.5% (AA)
- **Terminal-Bench 2.1: 80.4%** (system card) / **80.5%** (AA) / **74.5%** (Vals) — a 6.0-point spread, all under the 88%+ reference
- **GDPval-AA: 1,603 Elo** / 48.2% normalized — under the 1,750+ frontier reference
- HLE with tools: 57.4%; AA Agentic Index: 44.3%; AA-AnalystAgent: 46.3%; AA EnterpriseOps-Gym: 44.7%; OSWorld 2.1: 57.0%
- **AA Tau3 Banking: 37.3%** — 12.7 points under the 50% reference
- **Terminal-Bench 3.0: 14.6%**; **MazeBench: 0%**; ApprenticeBench: 16%
- **MCP-Atlas, Toolathlon, Claw-Eval, ALE: no verified public score found**

Reasoning / knowledge:

- **AA-GPQA Diamond: 91.1%** / **88.9%** (Vals) — clears the 90%+ reference only on the AA run
- **HLE: 57.4%** (vendor) / HLE without tools 43.2% / AA-HLE 41.3% — clears the 40%+ reference on all three
- **AA-Omniscience: index 16.5, accuracy 40.1%, hallucination rate 39.4%** — among the lowest hallucination rates measured in this research series
- AA-LCR: **82.0%**; AA Intelligence Index: **38.2**; **CritPt: 16.9%**
- FrontierMath v2 Tiers 1–3: **65.6%**; Tier 4: **29.3%**; LABBench2: 80.1%; HLE-Verified: 31.0%; MMLU-Pro (Vals): 87.5%
- **MRCR, ARC-AGI: no verified public score found**

Coding:

- **SWE-bench Verified: 85.2%** (vendor) / **79.6%** (Vals) — a 5.6-point gap
- **AA Coding Index: 71.5%** — clears the 70%+ frontier reference
- LiveCodeBench (Vals): **82.4%**; SWE Multilingual: 78.3%; SWE-bench Pro: 63.2%
- **AA-SciCode: 54.3%** — 0.7 points under the 55% reference; **VulcanBench CII v1: 89.2%**
- CursorBench 3.2: 61.5% / **4.0: 34.1%**; FrontierCode 1.1 Main: 42.7%; SWE Multimodal: 28.1%
- **DeepSWE: no verified public score found**

Multimodal (image-in):

- **CharXiv: 88.3%** (77.0% without tools); **AA-MMMU-Pro: 77.3%**; ParseBench: 61.16%; Design Arena: 1,273 Elo

### Normalized scores (1–100)

- **Tool use: 70/100.** Mid-band. BrowseComp 84.7% and OSWorld-Verified 81.2% are the strongest figures, with aaTerminalBench21 80.5% and HLE-with-tools 57.4% supporting. Capped because GDPval-AA is 1,603 Elo against 1,750, AA Tau3 Banking is 37.3% against 50%, Terminal-Bench 2.1 tops out at 80.5% against 88%, and **MCP-Atlas, Toolathlon and Claw-Eval are entirely absent**. Terminal-Bench 3.0 14.6%, MazeBench 0% and CursorBench 4.0 34.1% show the newest agentic harnesses fail badly.
- **Reasoning: 78/100.** Mid-band. AA-GPQA Diamond 91.1% clears the 90% reference and HLE 41.3–57.4% clears the 40%+ reference on three harnesses, with AA-LCR 82.0% and the **best hallucination rate in this research series (39.4%)** — a real asset. Capped by an AA Intelligence Index of 38.2, CritPt 16.9%, FrontierMath Tier 4 29.3%, HLE-Verified 31.0%, and no MRCR or ARC-AGI figure.
- **Context window: 97/100.** 1M-token tier with **300K Batch extended output available** (this SKU is in Anthropic's beta list, unlike Fable 5.1 and Mythos 5.1) and AA-LCR 82.0%. Held just under 100 because no MRCR retrieval run exists and AA-LCR is mid-tier for the tier.
- **Multimodal: 76/100.** Text + image in with text out. Scored above the methodology's "+image in" 60–70 band because the document tier is explicitly measured and strong — **CharXiv 88.3%** — with AA-MMMU-Pro 77.3% supporting it. Held at 76 because there is no video or audio input and ParseBench is only 61.16%.
- **Coding: 78/100.** AA Coding Index 71.5% clears the 70% reference, AA-SciCode 54.3% is 0.7 points under the 55% reference, and SWE-bench Verified 85.2% / LiveCodeBench 82.4% (Vals) / VulcanBench CII 89.2% are all solid. Capped by Terminal-Bench 2.1 80.5% (under the 85% reference), CursorBench 4.0 34.1%, FrontierCode 1.1 Main 42.7%, SWE Multimodal 28.1%, and no DeepSWE figure.
- **Cost efficiency: 84/100.** $2/$0.10/$10 per 1M with 1M context at standard pricing (no long-context surcharge, unlike GPT-6 Astra) and 300K Batch output. Held at 84 rather than 88 because **Sonnet 5.5 sits on the identical rate card and scores 17.6 BenchLM points higher** — so within its own family this is strictly the inferior buy at equal price. No free tier.
- **Overall Score: 80/100.** (70 + 78 + 97 + 76 + 78) / 5 = 79.8 → **80** → **80**. Recommendation: a competent legacy workhorse with the research series' **best reliability (39.4% hallucination)** and full-price access to a 1M window with 300K Batch output. But it is dominated by its own successor: **Sonnet 5.5 scores 17.6 BenchLM points higher at the same $2/$10**, and Sonnet 5.5 also clears AA-GPQA, AA-SciCode and Terminal-Bench more comfortably. Migrate unless pinned to `claude-sonnet-5`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Anthropic's Claude Sonnet 5 system card as the primary source (so most rows are vendor-run and labelled as such), cross-checked against BenchLM's 50-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cognition, Cursor, Kaggle, LlamaIndex, VulcanBench, NeoCognition and Google's Gemini 3.8 Flash card) and Anthropic's models-overview page for legacy status and Batch-output eligibility. The series-best 39.4% hallucination rate is recorded with its provenance attached, and the 5.6-point SWE-bench vendor-vs-Vals gap (85.2% vs 79.6%) is listed side by side. Missing benchmarks (MCP-Atlas, Toolathlon, Claw-Eval, ALE, DeepSWE, MRCR, ARC-AGI) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Sonnet 5 system card (primary benchmark source)](https://www.anthropic.com/claude-sonnet-5-system-card)
  - [Anthropic — Models overview (legacy status, 300K Batch listing, lineup modality statement)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [BenchLM — Claude Sonnet 5 benchmark scores (50 rows, 64.25/100, #36/1010)](https://benchlm.ai/models/claude-sonnet-5)
  - [Artificial Analysis — Claude Sonnet 5](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Vals AI — Claude Sonnet 5 leaderboard results](https://www.vals.ai/models/anthropic_claude-sonnet-5)
  - [VulcanBench CII v1 frontier results (source of the 89.2% figure)](https://github.com/morganlinton/VulcanBench/blob/main/docs/results/cii-v1-2026-08/README.md)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
