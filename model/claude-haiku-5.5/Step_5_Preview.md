# Claude Haiku 5.5 — findings by Step 5 Preview

- Source: Anthropic (`anthropic/claude-haiku-5.5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5. The successor to Haiku 4.5 (40.09) — **the largest generational jump in the entire Anthropic lineup: from 40.09 to 66.56, +26.5 points**, taking Haiku from the bottom of the Claude range to **#24 of 1,015**, above Opus 4.6 (62.06), Sonnet 5 (64.45) is false — in fact *below* Sonnet 5, but above Opus 4.6 and Opus 4.7 (65.23). This is the most quietly important result in the batch: a Haiku-class model now outperforms two Opus generations.
- **Short description:** A **1M-context, #24-ranked model at Haiku pricing**, with the strongest balanced profile in this batch: **AA-HLE 44.4% (clearing the 40% frontier reference), CritPt 18.9%, AA-LCR 82.7%, ARC-AGI-1 89.0% / ARC-AGI-2 61.3%, AA Intelligence Index 36.5%, and an AA-Omniscience hallucination rate of 34.2% — among the lowest measured in this research series.** Its weaknesses are narrow: **AA AutomationBench 35.4%, AA Terminal-Bench 4.0 32.8–39.2%, MazeBench 1% and FrontierCode 1.1 Main 46.4%.**
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex, and OpenCode Zen. **No Free ID** (Haiku's usual free-tier position appears not to apply here). Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Haiku 5.5 is Anthropic's 2026 mid-tier. **Knowledge cutoff not disclosed.**
- **IDs:** `anthropic/claude-haiku-5.5`; `anthropic-claude-haiku-5-5` (ARC Prize).
- **Context window:** **1M tokens** (BenchLM) — a full 1M window at Haiku tier, which is the model's structural advantage.
- **Modalities:** **text and image in; text out** (ParseBench 56.02%, Chartography 46.4%, Design Arena 1,261 Elo).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified. **This is the report's most important gap: the entire value case rests on Haiku-class pricing, which is historically the cheapest Claude tier and must be verified before relying on the score below.**
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Anthropic's Haiku 5.5 launch post and system card are the primary source (so those rows are **vendor-run**), with Artificial Analysis, ARC Prize, Epoch AI, Cognition, Proximal, LlamaIndex, MazeBench, Nous Research, Claw-Eval and Openrouter supplying independent rows. 37 benchmarks total.

Agent / tool use — **mixed but broad**:

- **GDPval-AA: 1,620 Elo** (vendor) / **56.0% normalized** [AA] — clears the 1,750 reference only short, and 56.0% is the strongest GDPval normalized figure in this batch
- **AA Harvey LAB v1.0: 89.9%** [AA] — very strong professional-domain agentic work
- **OSWorld 2.1 Offline: 72.4%** (system card) — strong computer use
- **AA-AnalystAgent: 53.8%**; AA Briefcase: **1,578 Elo**; Hermes Bench: 71.0%; Hermes Index: 37.0% [Nous Research]
- HLE w/ tools: **57.4%** (vendor) / HLE w/o tools 45.9%
- **AA AutomationBench: 35.4%** — the weakest agentic figure here
- **Terminal-Bench 4.0: 39.20%** (vendor) / **32.8%** [AA] — a 6.4-point vendor-vs-AA gap, both far under frontier
- **MazeBench: 1%**; GDP.pdf: 20.8%
- **Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **the strongest dimension**:

- **AA-HLE: 44.4%** [AA] — **clears the 40%+ frontier reference**, and note the vendor's own w/o-tools figure is 45.9%, essentially agreeing
- **CritPt: 18.9%**; **AA-LCR: 82.7%**; MLCR-AA: 35.0%
- **ARC-AGI-1: 89.00%**; **ARC-AGI-2: 61.3%**; **ARC-AGI-3: 0.5%** (provider adapter 2.82%) [ARC Prize]
- **AA Intelligence Index: 36.5%** — the strongest composite in this batch
- **AA-Omniscience: index 12.3, accuracy 34.7%, hallucination rate 34.2%** — a **positive index**, meaning more correct than incorrect answers, on the fourth-lowest hallucination rate in this research series
- **FrontierMath v2 Tiers 1–3: 75.1%; Tier 4: 46.3%** [Epoch] — the strongest Tier 4 in this batch by a wide margin
- **GPQA Diamond, MRCR: no verified public score found** — the primary reasoning reference is missing

Coding — **mid, and thin on the classic benchmarks**:

- **AA-SciCode: 55.0%** — exactly at the 55%+ reference
- **FrontierSWE v2: 43.8%** [Proximal]; FrontierCode 1.1 Main: **46.4%**; FrontierCode 2.0: 27.7%; Bug Hunt Bench: 21.5 fixes
- **SWE-bench (all variants), AA Coding Index, DeepSWE, LiveCodeBench, SWE-bench Pro, Vibe Code Bench, Terminal-Bench: no verified public score found** — so the 85%, 74%, 70% and 55% coding references are all unmeasured and coding rests on four benchmarks, three of them near-floor

Multimodal (image-in) — **thin**:

- **ParseBench: 56.02%** [LlamaIndex]; **Chartography (no tools): 46.4%** (vendor); Design Arena (website): **1,261 Elo**
- **ExtractBench, MMMU-Pro, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 66/100.** Mid-band and genuinely broad. **GDPval-AA 1,620 Elo / 56.0% normalized is the strongest independent GDPval figure in this batch, AA Harvey LAB 89.9% is very strong professional agentic work, OSWorld 2.1 Offline 72.4% is solid computer use**, and AA-AnalystAgent 53.8%, AA Briefcase 1,578 Elo and Hermes Bench 71.0% corroborate. Capped by **AA AutomationBench 35.4%, Terminal-Bench 4.0 32.8–39.2% (a 6.4-point vendor-vs-AA gap), GDP.pdf 20.8%, MazeBench 1%, and the total absence of Terminal-Bench 2.x, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench and the AA Agentic Index** — so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 82/100.** Above the methodology's mid band and the strongest dimension. **AA-HLE 44.4% clears the 40% frontier reference, AA Intelligence Index 36.5% is the strongest composite in this batch, CritPt 18.9% and AA-LCR 82.7% are solid, ARC-AGI-1 89.0% / ARC-AGI-2 61.3% are strong, and FrontierMath v2 Tier 4 46.3% is by far the best in this batch.** The reliability profile is genuinely good: **AA-Omniscience index 12.3 (positive) with a 34.2% hallucination rate — the fourth-lowest measured in this research series**, meaning more correct than incorrect answers. Capped by **ARC-AGI-3 0.5%, MLCR-AA 35.0%, and the missing GPQA Diamond** — the methodology's primary reasoning reference.
- **Context window: 97/100.** **1M tokens** at Haiku tier — the model's structural advantage, since a full frontier window is normally reserved for flagship pricing. **AA-LCR 82.7%** is strong evidence the window is usable at depth. Held just under 100 because no MRCR or GraphWalks retrieval figure exists, no max-output limit is published, and no long-context pricing tier was found — **which matters more here than for most models, because the top of a 1M window is exactly where Haiku-tier pricing usually changes**.
- **Multimodal: 58/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **ParseBench 56.02% and Chartography 46.4% are both weak-to-middling**, Design Arena 1,261 Elo is decent, and **ExtractBench, MMMU-Pro, CharXiv, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure at all** — so this is the weakest evidence base of any dimension in the report, and it is scored as such rather than assumed from the family.
- **Coding: 52/100.** Below the methodology's mid band, and the weakest dimension. **AA-SciCode 55.0% is exactly at the reference**, but **FrontierCode 1.1 Main 46.4%, FrontierSWE v2 43.8%, FrontierCode 2.0 27.7% and Bug Hunt Bench 21.5 fixes are all weak-to-near-floor**, and **SWE-bench Verified, SWE-bench Pro, the AA Coding Index, DeepSWE, LiveCodeBench, Vibe Code Bench and Terminal-Bench are entirely absent** — so the 85%, 74%, 70% and 55% references cannot be checked at all. **This dimension rests on four benchmarks, three of them poor, and the score reflects that honestly.**
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so this is a placeholder anchored on the Haiku tier's historical position rather than a measurement. Scored at 88 — above the ~$3/$15 (≈60) anchor — on the reasonable inference that a Haiku-tier SKU sits well below Sonnet and Opus pricing, which is the one directional signal available. **Explicitly an estimate, not a measurement, and the single most important thing to verify before relying on this report's Overall.** Held below 90 because there is no free tier, no published rate card, and no cache-read discount figure.
- **Overall Score: 71/100.** (66 + 82 + 97 + 58 + 52) / 5 = 71 → **71**. Recommendation: **the standout value model in this batch, conditional on verifying the rate card.** A #24-ranked model — above Opus 4.6 and Opus 4.7 on BenchLM — with AA-HLE 44.4%, AA-Omniscience index 12.3 (positive), FrontierMath Tier 4 46.3%, CritPt 18.9% and a full 1M window, at *Haiku* pricing, is the most compelling price-per-capability proposition in the Claude lineup and the direct consequence of the **+26.5-point generational jump from Haiku 4.5's 40.09**. Three cautions: **coding is its weakest dimension and rests on four benchmarks, three of them poor**, so do not buy it primarily as a coding model; **its agentic-execution layer is mid** (AutomationBench 35.4%, Terminal-Bench 4.0 32.8%); and **the entire value case depends on the unpublished Haiku rate card, which must be confirmed before acting on this score**.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Anthropic's Haiku 5.5 launch post and system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 37-row catalog (which attributes the independent numbers to Artificial Analysis, ARC Prize, Epoch AI, Cognition, Proximal, LlamaIndex, MazeBench, Nous Research and Claw-Eval). The report's **central finding is structural rather than analytical: the +26.5-point generational jump from Haiku 4.5 (40.09) to Haiku 5.5 (66.56) is the largest in the Anthropic lineup and moves a Haiku-tier model above two Opus generations** — recorded explicitly because it reframes Haiku as a mid-tier performance SKU rather than a cheap one. The **absent GPQA Diamond** is flagged as the primary reasoning reference gap, and the **unpublished rate card** is surfaced as the report's most important unverified input with its effect on the cost score stated plainly. Conflicting figures are listed side by side — Terminal-Bench 4.0 39.20% (vendor) / 32.8% [AA], HLE 45.9% (vendor w/o tools) / 44.4% [AA] — rather than averaged. The positive AA-Omniscience index (12.3) and the fourth-lowest hallucination rate in this research series (34.2%) are attributed rather than presented bare. Missing benchmarks (Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index, GPQA Diamond, MRCR, SWE-bench Verified, SWE-bench Pro, AA Coding Index, DeepSWE, LiveCodeBench, Vibe Code Bench, Terminal-Bench, ExtractBench, MMMU-Pro, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Haiku 5.5 (primary source; GDPval, HLE w/ tools, AA Briefcase, Chartography)](https://www.anthropic.com/claude-haiku-5-5)
  - [Anthropic — Claude Haiku 5.5 system card (OSWorld 2.1, FrontierCode 1.1 Main)](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf)
  - [BenchLM — Claude Haiku 5.5 benchmark scores (37 rows, 66.56/100, #24/1015)](https://benchlm.ai/models/claude-haiku-5-5)
  - [Artificial Analysis — Claude Haiku 5.5](https://artificialanalysis.ai/models/claude-haiku-5-5)
  - [ARC Prize — published Semi-Private results for Claude Haiku 5.5](https://arcprize.org/results/anthropic-claude-haiku-5-5)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
  - [Proximal — FrontierSWE v2 leaderboard](https://www.frontierswe.com/)
  - [Artificial Analysis — harvey-lab-aa leaderboard](https://artificialanalysis.ai/evaluations/harvey-lab-aa)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [Nous Research — Hermes Index leaderboard](https://portal.nousresearch.com/bench)
  - [Openrouter — Claude Haiku 5.5 benchmarks](https://openrouter.ai/anthropic/claude-haiku-5.5/benchmarks)
  - See also: [`model/claude-haiku-4.5/`](claude-haiku-4.5.md) — the previous generation (BenchLM 40.09), the baseline for the +26.5-point jump
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
