# Grok 4.1 Fast — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.1-fast`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast. **The lowest-ranked Grok carrying a BenchLM score in this research series** — 36.36/100, **#158 of 1,015**, below Grok Code Fast 1 (33.93) is false — in fact *above* Grok Code Fast 1 but below Grok 3 Beta (40.76) and Grok 3 Mini (44.20). BenchLM classifies it **Non-Reasoning**, the ninth such model in this corpus. It has a separately-tracked `Grok 4.1 Fast (Reasoning)` sibling at 45.53, which scores 9.2 points higher.
- **Short description:** A model whose measured record is **weak on essentially every axis**, and which holds **the worst AA-Omniscience index measured anywhere in this research series: −50.9, with 82.3% hallucination on 17.2% accuracy.** Its surviving assets are a **1M context window** and τ²-bench 63.7%. Everything else is at or near floor: **CritPt 0.0%, AA-HLE 5.1%, AA-GPQA Diamond 63.7%, AA-LCR 31.3%, AA-MMMU-Pro 48.4%, AA-IFBench 36.5%.**
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Grok 4.1 is xAI's 2026 4.1 line. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.1-fast`; `grok-4-1-fast` (BenchLM canonical); `x-ai/grok-4.1-fast` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — a genuine advantage, and the reason this model is not ranked lower than it is.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 48.4% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No xAI launch post or model card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis or Gert Labs. So, as with Grok 4.3 and GPT-5.1, **this is a fully independently-evidenced model with no vendor-run rows at all.** 12 benchmarks total — the thinnest evidence base in this batch, tied with nothing; it is the thinnest here.

Agent / tool use:

- **τ²-bench: 63.7%** [AA]; Gert Labs: 47.32%
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists at all**

Reasoning / knowledge — **the worst reliability profile in this research series**:

- **AA-Omniscience: index −50.9, accuracy 17.2%, hallucination rate 82.3%** — **the worst AA-Omniscience index measured anywhere in this research series**, by a very wide margin; the next-worst is DeepSeek V4.1 Flash 1017's −5.3
- **CritPt: 0.0%** [AA] — **the lowest CritPt measured in this batch, tying GPT-5 (medium) and Gemini 3.5 Flash-Lite, and within 0.3 points of Claude Opus 4.5's series-lowest 0.3%**
- **AA-HLE: 5.1%** — **the lowest AA-HLE measured in this batch**, and among the lowest in this research series
- **AA-GPQA Diamond: 63.7%** — 26.3 points under the 90%+ reference
- **AA Intelligence Index: 11.3%** — the second-lowest composite in this batch
- **AA-LCR: 31.3%** — **the weakest AA-LCR measured in this batch**, and among the weakest in this research series
- **AA-IFBench: 36.5%** — weak instruction following
- **ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro: no verified public score found**

Coding:

- **No coding benchmark of any kind is published** — no SWE-bench, no LiveCodeBench, no DeepSWE, no AA Coding Index, no AA-SciCode, no Vibe Code Bench, no Terminal-Bench

Multimodal (image-in):

- **AA-MMMU-Pro: 48.4%** — the only visual row, and weak
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the methodology's mid band, and the weakest dimension alongside reasoning. τ²-bench 63.7% and Gert Labs 47.32% are the only two agentic figures in the entire evidence base, and both are weak. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite agentic figure exists.
- **Reasoning: 25/100.** Below the methodology's low band, and the weakest measured reasoning score in this batch. **AA-HLE 5.1% is the lowest in this batch and among the lowest in this research series; CritPt 0.0% ties the batch low; AA-GPQA Diamond 63.7% fails the 90% reference by 26.3 points; the AA Intelligence Index is 11.3%; and AA-Omniscience index −50.9 with 82.3% hallucination on 17.2% accuracy is the worst reliability profile measured anywhere in this corpus** — by an enormous margin over the next-worst (−5.3). The one mitigating figure is **AA-LCR 31.3%**, which is the weakest in this batch but at least non-zero, and the **1M window** that carries it. Scored at 25 rather than lower purely because a 1M window with AA-LCR 31.3% is a real, if poor, capability.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — and for this model the window is effectively its *only* genuine asset, since a Flash-class SKU with a full 1M window is unusual. Held at 92 rather than 95+ because **AA-LCR is 31.3%, the weakest measured in this batch**, so the window is demonstrably the least usable at depth of any 1M model here, and no MRCR or GraphWalks figure exists.
- **Multimodal: 55/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **AA-MMMU-Pro 48.4% is the only visual figure and it is weak**, and **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** There is no coding benchmark of any kind for this model — no SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Vibe Code Bench or Terminal-Bench. Scored at 50 rather than below because the "Fast" tier's historical positioning implies a coding/throughput role, but it is not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.
- **Cost efficiency: 76/100.** **No rate card is published in any source checked**, so the score rests on positioning rather than a price: the **"Fast" tier is xAI's efficiency line** and is historically the cheapest current xAI route, which is the one directional signal. Scored at 76, between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. **Explicitly a positioning-based inference, not a measurement** — held below 88 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 53/100.** (45 + 25 + 92 + 55 + 50) / 5 = 53.4 → **53**. Recommendation: **not a model to select for any purpose.** Its one genuine asset is a 1M window at Flash tier, and every measured capability figure is at or near the floor of this research series — including **the worst AA-Omniscience index measured anywhere here (−50.9)**, a **CritPt of 0.0%**, an **AA-HLE of 5.1%**, an **AA-LCR of 31.3%**, and **zero published coding benchmarks**. BenchLM's **Non-Reasoning** classification is consistent with this profile. The 1M window is the only reason to consider it at all, and **Grok 4.1 Fast (Reasoning) — the separately-tracked sibling at 45.53 on BenchLM but with the same window and, presumably, the same rate card — scores 9.2 points higher**, so prefer the Reasoning variant unless the lower price is decisive. Migrate otherwise.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3 and GPT-5.1, **the central provenance finding is structural: BenchLM attributes all 12 of this model's rows to independent sources (Artificial Analysis, Gert Labs) with no xAI launch post or model card anywhere**, making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways — the measurements are trustworthy and the model's own claims are absent entirely. **The thinnest evidence base in this batch (12 rows) is stated plainly rather than hedged**, and the three series-lows this model holds — **AA-Omniscience index −50.9 (the worst measured anywhere in this research series, by a very wide margin over the next-worst −5.3), CritPt 0.0%, and AA-HLE 5.1%** — are attributed explicitly rather than presented bare, as is the batch-weakest AA-LCR (31.3%). The total absence of any coding benchmark is stated as the coding dimension's defining limitation rather than left implicit. A sibling note is recorded: the separately-tracked `Grok 4.1 Fast (Reasoning)` at 45.53 is **not** the same identity, and this report does not merge their rows. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro, and the entire coding suite) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok 4.1 Fast benchmark scores (12 rows, 36.36/100, #158/1015)](https://benchlm.ai/models/grok-4-1-fast)
  - [Artificial Analysis — Grok 4.1 Fast (primary independent source)](https://artificialanalysis.ai/models/grok-4-1-fast)
  - [Artificial Analysis — omniscience leaderboard (source of the series-worst −50.9)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — artificial-analysis-long-context-reasoning leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — Grok 4.1 Fast benchmarks](https://openrouter.ai/x-ai/grok-4.1-fast/benchmarks)
  - See also: [`model/grok-4.1-fast-reasoning/`](grok-4.1-fast-reasoning.md) — the separately-tracked Reasoning sibling (45.53), the report's recommended upgrade; [`model/grok-4/`](grok-4.md) (51.56) — the next Grok up the line
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
