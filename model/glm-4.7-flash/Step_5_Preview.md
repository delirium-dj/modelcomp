# GLM-4.7-Flash — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`glm-4.7-flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash. Z.AI's **open-weight Flash** model of the 4.7 generation, now several generations behind (GLM-5.3 at 61.28, 5.2 at 60.23, 5.1 at 56.09, 5 at 54.59). BenchLM scores it **38.96/100, #150 of 1,016** with **4 benchmarks** — the joint-thinnest evidence base in this research series, alongside Laguna XS 2.1 and MiniMax M2.5.
- **Short description:** A thin-evidence model whose only genuinely good figure is **AIME 2025 91.6%**, set against **SWE-bench Verified 59.2%, LiveCodeBench v6 64.0%, GPQA 75.2%** and a **200K context window**. Its measured record is four benchmarks, three of them mid-tier and one strong.
- **Provider / access:** **Open weights** on Hugging Face, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; GLM-4.7-Flash is Z.AI's mid-2026 Flash line. **Knowledge cutoff not disclosed.**
- **IDs:** `glm-4.7-flash` (BenchLM canonical, repo).
- **Context window:** **200,000 tokens** — one-fifth of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 4-row catalog.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed. BenchLM classifies it **Reasoning**.

### Raw benchmarks found

**A provenance finding is recorded: BenchLM's attribution for this model's rows is sparse** — the sources listed are the model card and standard leaderboards, with no single dominant cross-cited competitor document. Four benchmarks total.

Coding — **the only measured dimension**:

- **SWE-bench Verified: 59.2%** — 25.8 points under the 85%+ terminal reference
- **LiveCodeBench v6: 64.0%** — a mid-tier competitive-programming figure

Reasoning / knowledge:

- **GPQA: 75.2%** — fails the 90%+ reference by 14.8 points

Mathematics:

- **AIME 2025: 91.6%** — a strong competition-maths figure and the model's best result

Named as absent rather than substituted:

- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: none measured** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**
- **HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AA Intelligence Index, AA-Omniscience, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode: none measured** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: none measured**

### Normalized scores (1–100)

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one agentic benchmark exists — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because an open-weight Flash tier presumably has a tool substrate; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Reasoning: 62/100.** Mid-band, anchored on two figures: **AIME 2025 91.6%** (a strong competition-maths result) and **GPQA 75.2%** (14.8 points under the frontier reference). Capped by the **total absence of HLE, CritPt, AA-LCR, MRCR, ARC-AGI, the AA Intelligence Index, AA-Omniscience, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and three of five reasoning references are unknown, and the one strong figure is on a saturating benchmark.
- **Context window: 85/100.** **200,000 tokens** — the methodology's 200K tier boundary, scored at 85 above the floor because a 200K window in a Flash tier is a genuine asset. Held at 85 rather than mid-tier because it is one-fifth of the current standard, **no AA-LCR or MRCR figure exists**, so the window's usable depth is unverified, and no max-output limit is published.
- **Multimodal: 15/100.** **Text in; text out** — squarely in the methodology's text-only 10–20 band. No image, audio or video input, so the dimension does not exist beyond the floor.
- **Coding: 55/100.** Below the methodology's mid band. **SWE-bench Verified 59.2% is 25.8 points under the terminal reference and LiveCodeBench v6 64.0% is mid-tier**, both shortfalls. **DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 53.4/100.** (50 + 62 + 85 + 15 + 55 + 88) / 5 = 64.2 → **64**. Recommendation: **a thin-evidence Flash tier with one strong maths figure and a 200K window.** AIME 2025 91.6% at open weights is the model's genuine asset, and the window is the other. **But four benchmarks cannot support a capability judgement**: composite depth and reliability are entirely unmeasured, the agentic layer is absent, and the coding figures are mid-to-low. Prefer **GLM-5.3 (61.28)**, **GLM-5.2 (60.23)** or **GLM-5.3-Flash (58.37)** — all refreshed earlier in this session, all far better evidenced — unless GLM-4.7-Flash's specific behaviour is required.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 4-row catalog as the direct source, cross-checked against the model card and standard leaderboards. The joint-thinnest evidence base in this research series (4 rows, alongside Laguna XS 2.1 and MiniMax M2.5) is stated plainly rather than hedged, and the report's thesis — that a four-benchmark evidence base cannot support a capability judgement — is stated in the recommendation rather than dressed up as an assessment. Because only four capability figures exist, four of five quality dimensions are explicitly placeholders anchored on spec facts, and the two best-grounded dimensions — reasoning (AIME 2025 91.6%) and coding (SWE-bench Verified 59.2%) — are scored on verified figures. **The 25.8-point SWE-bench Verified shortfall** is attributed rather than presented bare, as is the **one-fifth-of-standard context window (200K)**. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AA Intelligence Index, AA-Omniscience, MATH, MMLU-Pro, FrontierMath, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GLM-4.7-Flash benchmark scores (4 rows, 38.96/100, #150/1016)](https://benchlm.ai/models/glm-4-7-flash)
  - [Hugging Face — GLM-4.7-Flash model card](https://huggingface.co/zai-org/GLM-4.7-Flash)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/glm-5.3/`](glm-5.3.md) (61.28), [`model/glm-5.2/`](glm-5.2.md) (60.23) and [`model/glm-5.3-flash/`](glm-5.3-flash.md) (58.37) — the successors this report recommends preferring, refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
