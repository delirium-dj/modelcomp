# Gemini 2.5 Flash — findings by Step 5 Preview

- Source: Google (`google/gemini-2.5-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash. Now **six generations behind**: Gemini 4 Carbon (88.79) → 4 Argon (82.29) → 3.8 Flash (66.74) → 3.7 Flash (66.49) → 3.6 Flash (62.56) → 3.5 Flash (61.62) → and this at **41.97, #135 of 1,015** with **12 benchmarks**. BenchLM classifies it **Non-Reasoning**, the thirteenth such model in this corpus. Note it scores *below* its own successor generation by 20+ points and *below* the much smaller Gemma 4 26B A4B (42.25) is false — in fact marginally *above* it, by 0.28 points.
- **Short description:** A 2025-era Flash whose measured record has collapsed, and which holds **two of the worst figures in this research series**: **AA-HLE 4.7% (the lowest measured anywhere here) and AA-Omniscience hallucination 93.0% with an index of −42.6**. Its surviving assets are a **1M context window**, a genuinely cheap rate card (**$0.30/$2.50 per 1M**), and vendor-documented **text, image and video input**.
- **Provider / access:** Gemini API, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Gemini 2.5 Flash is Google's 2025 Flash tier. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-2.5-flash` (Gemini API, Zen, BenchLM canonical); `google/gemini-2.5-flash` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window at Flash pricing, which is the model's structural advantage and the reason it is not ranked lower.
- **Modalities:** **text, image and video in; text out** — per Google's own pricing page, which prices the model "for text, image, and video". **This is a vendor-stated capability with no measured visual or video benchmark**, recorded as such.
- **Pricing (as of 2026-11-05):** **$0.30 input / $0.03 cached / $2.50 output per 1M**, with Batch pricing lower (source: Google's Gemini Developer API pricing page, per BenchLM's price registry). Methodology anchors put $0.30/$2.50 near the ≈92 band, and the **90% cache-read discount** is a real mitigator for prompt-heavy work.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No Google launch post or system card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis or Openrouter. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4 and Qwen3.5 Flash, **this is a fully independently-evidenced model with no vendor-run rows at all** — the pricing page being the only Google-sourced fact, and that is a rate card rather than a benchmark. 12 benchmarks total.

Agent / tool use:

- **τ²-bench: 14.9%** [AA] — near-floor, and the only agentic figure in the entire evidence base
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **two of the worst figures in this research series**:

- **AA-HLE: 4.7%** [AA] — **the lowest AA-HLE measured anywhere in this research series**, 35.3 points under the 40%+ reference
- **AA-Omniscience: index −42.6, accuracy 26.1%, hallucination rate 93.0%** — **the third-worst Omniscience index in this research series**, and a hallucination rate that is effectively total
- **AA-GPQA Diamond: 68.3%** — 21.7 points under the 90%+ reference
- **AA Intelligence Index: 9.8%** — the third-lowest composite in this batch
- **AA-LCR: 49.9%** — the second-weakest AA-LCR in this batch; **CritPt: 1.4%** — near-floor
- **AA-IFBench: 39.0%** — weak instruction following
- **ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro: no verified public score found**

Coding:

- **No coding benchmark of any kind is published** — no SWE-bench, no LiveCodeBench, no DeepSWE, no AA Coding Index, no AA-SciCode, no Vibe Code Bench, no Terminal-Bench

Multimodal (image-in):

- **AA-MMMU-Pro: 65.5%**; Design Arena (website): **1,113 Elo** — the two visual rows, both weak
- **Vendor claim, unmeasured: Google's pricing page prices the model "for text, image, and video"** — but **no video benchmark of any kind exists**, so video understanding is a spec-sheet claim
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's mid band, and the weakest dimension alongside reasoning. **τ²-bench 14.9% [AA] is the only agentic figure in the entire evidence base and it is near-floor**, and **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 22/100.** Below the methodology's low band, and the worst measured reasoning score in this batch. **AA-HLE 4.7% is the lowest measured anywhere in this research series (35.3 points under the 40% reference), AA-GPQA Diamond 68.3% fails the 90% reference by 21.7 points, AA Intelligence Index 9.8% is the third-lowest composite here, and the AA-Omniscience index of −42.6 with a 93.0% hallucination rate is the third-worst in this research series.** The two mitigating figures are **AA-LCR 49.9%** (weak but non-zero) and the **1M window** that carries it. Scored at 22 rather than lower because a 1M window with AA-LCR 49.9% is a real, if poor, capability and the knowledge substrate is demonstrably present — it is simply unreliable.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window at Flash pricing, and one of only two 1M-class Google models refreshed in this session alongside Gemini 2.5 Pro. Scored at 92 rather than 95+ because **AA-LCR is 49.9%, the second-weakest in this batch**, so the window is demonstrably among the least usable at depth of any 1M model here, and no MRCR or GraphWalks figure exists.
- **Multimodal: 72/100.** **Text, image and video in; text out** per Google's own pricing page, placing it in the methodology's 75–90 "+video/PDF in" tier. Scored at 72, *below* that tier, because the video claim is **entirely unmeasured** — no Video-MME, VideoMMMU, MLVU or LVBench figure exists — and the two measured visual rows (**AA-MMMU-Pro 65.5%, Design Arena 1,113 Elo**) are both weak. Held at 72 rather than the 60–70 band because the *breadth* of the claim (video in addition to image) is vendor-stated and consistent with the family, even though unsupported by any measurement.
- **Coding: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one coding benchmark exists — no SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Vibe Code Bench, Terminal-Bench or FrontierCode. Scored at 50 rather than below because a hosted Flash-tier model presumably has a coding substrate; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Cost efficiency: 92/100.** **$0.30/$0.03/$2.50 per 1M with a 90% cache-read discount and lower Batch pricing** (Google's own pricing page, via BenchLM's price registry) — the only fully measurement-grounded dimension in this report, and a genuinely strong rate card. Scored at 92 on the methodology's ~$0.60/$2.20 anchor. Held below 97+ because the model is **strictly dominated on price-per-capability within its own family**: **Gemini 3.8 Flash scores 66.74 on BenchLM at $1.50/$7.50 and Gemini 3.7 Flash scores 66.49 at the same rate** — five times the input price for 25 more BenchLM points. No free tier is recorded.
- **Overall Score: 54.2/100.** (35 + 22 + 92 + 72 + 50 + 92) / 5 = 62.6 → **63**. Recommendation: **a 2025 compatibility model with no remaining reason to select it.** Its two genuine assets are a **1M context window** and a **cheap $0.30/$2.50 rate card** — and both are available better and cheaper in the 3.x and 4 families. Its measured record contains **two of the worst figures in this research series (AA-HLE 4.7%, the lowest anywhere here, and AA-Omniscience index −42.6 with 93.0% hallucination)**, so it must never be used for agentic, reasoning or factual work. It is dominated on every axis by Gemini 3.5 Flash (61.62), 3.7 Flash (66.49) and 3.8 Flash (66.74). Migrate unless pinned to `gemini-2.5-flash`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4 and Qwen3.5 Flash, **the central provenance finding is structural: BenchLM attributes all 12 of this model's rows to independent sources (Artificial Analysis, Openrouter) with no Google launch post, system card or benchmark table anywhere** — the only Google-sourced fact being the **rate card** on Google's Gemini Developer API pricing page, which is a price rather than a measurement. That structure is recorded because it cuts both ways: the measurements are trustworthy and the model's own claims are absent entirely. The 12-benchmark evidence base is stated plainly rather than hedged. The two series-worst figures — **AA-HLE 4.7% (the lowest measured anywhere in this research series) and AA-Omniscience index −42.6 with 93.0% hallucination** — are attributed rather than presented bare, as is the **batch-second-weakest AA-LCR (49.9%)**. The multimodal dimension is scored as a **vendor-stated but entirely unmeasured** capability: Google's pricing page prices the model "for text, image, and video", but no video benchmark exists, and the two measured visual rows are both weak — recorded as a spec-sheet claim rather than a demonstrated capability. The coding dimension is scored at the methodology's placeholder floor with no measurement of any kind. The rate card is the only fully measurement-grounded score, and the **strict price-per-capability domination by Gemini 3.7/3.8 Flash at 5x the input price for 25 more BenchLM points** is carried into the recommendation. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro, and the entire coding suite, plus every video and document benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 2.5 Flash benchmark scores (12 rows, 41.97/100, #135/1015)](https://benchlm.ai/models/gemini-2-5-flash)
  - [Artificial Analysis — Gemini 2.5 Flash (primary independent source)](https://artificialanalysis.ai/models/gemini-2-5-flash)
  - [Google — Gemini API pricing (source of the $0.30/$0.03/$2.50 rate card and the text/image/video modality statement)](https://ai.google.dev/gemini-api/docs/pricing)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the series-lowest 4.7%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — omniscience leaderboard (source of the −42.6)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Openrouter — Gemini 2.5 Flash benchmarks](https://openrouter.ai/google/gemini-2.5-flash/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/gemini-2.5-pro/`](gemini-2.5-pro.md) (49.02) — the Pro-tier sibling refreshed earlier in this session; [`model/gemini-3.5-flash/`](gemini-3.5-flash.md) (61.62), [`model/gemini-3.7-flash/`](gemini-3.7-flash.md) (66.49), [`model/gemini-3.8-flash/`](gemini-3.8-flash.md) (66.74) — the successors this report recommends migrating to
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
