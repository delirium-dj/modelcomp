# Kimi K2.7 Code — findings by Step 5 Preview

- Source: Moonshot AI (`moonshotai/Kimi-K2.7-Code`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code. The **code-specialised variant** of the K2.7 generation — sibling to K3 (69.46) and K2.6 (57.53) — scoring **53.75/100, #86 of 1,015** with **26 benchmarks**. Note it scores *below* both its generalist siblings, so the "Code" specialisation did not pay off on BenchLM's aggregate.
- **Short description:** A genuinely unusual profile: **MCP Mark Verified 81.1% and MCP Atlas 76.0% are among the strongest tool-protocol figures measured in this research series**, while **GDPval-AA 26.9% normalized and AA Agentic Index 22.5% are among the weakest** — the model speaks tool protocol fluently and cannot complete a multi-step task. Its coding is mid (SWE-bench 78.2% Vals, AA Coding Index 60.8%), against **CritPt 10.0% and FrontierMath Tier 4 12.2%.**
- **Provider / access:** **Open weights** on Hugging Face (`moonshotai/Kimi-K2.7-Code`), Moonshot's own API, and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** release date not restated; the K2.7 Code generation is Moonshot's 2026 code-specialist line. **Knowledge cutoff not disclosed.**
- **IDs:** `moonshotai/Kimi-K2.7-Code` (Hugging Face); `kimi-k2-7-code` (BenchLM canonical, Zen); `kimi_kimi-k2.7-code` (Vals).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out** — the multimodal table carries exactly one row (Design Arena 1,262 Elo) and no visual benchmark of any kind.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape**.
- **Architecture:** **open weight**; parameter count undisclosed. Note that a `kimi-k2.7-code-highspeed` serving profile was previously parked and deleted as a duplicate (same weights, same window, 2x API price).

### Raw benchmarks found

Moonshot's own Kimi K2.7 Code model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenHarmony and Openrouter supplying independent rows. **26 benchmarks total — the second-thinnest evidence base in this batch.**

Agent / tool use — **the model's defining contradiction**:

- **MCP Mark Verified: 81.1%** (vendor) — among the strongest MCP figures measured in this research series
- **MCP Atlas: 76.0%** (vendor); **τ²-bench: 90.1%** [AA] — the strongest independent agentic figure here
- **Kimi Claw 24/7: 46.9%** (vendor); terminalBenchHard: 44.7% [AA]
- **Terminal-Bench 2.1 (Vals): 67.0%** — 21 points under the 88%+ reference
- **GDPval-AA: 1,114 Elo / 26.9% normalized** [AA] — well under the 1,750 reference
- **AA Agentic Index: 22.5%** — among the weakest agentic composites in this research series
- **Terminal-Bench 2.0/4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite beyond AA Agentic Index exists

Reasoning / knowledge:

- **AA-GPQA Diamond: 89.6%** [AA] — 0.4 points under the 90%+ reference, the narrowest miss in this batch
- **AA-HLE: 35.0%** — 5.0 points under the 40%+ reference
- **AA-LCR: 79.3%**; **CritPt: 10.0%**; AA-IFBench: 63.1%
- **FrontierMath v2 Tiers 1–3: 54.0%; Tier 4: 12.2%** [Epoch]
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **mid, and the model's nominal speciality**:

- **SWE-bench (Vals): 78.2%** — the strongest coding figure
- **AA Coding Index: 60.8%** — 9.2 points under the 70% reference
- **Kimi Code Bench v2: 62.0%** (vendor); ProgramBench: 53.6% (vendor); CursorBench 3.2: 49.7%; OpenHarmony Bench: 52.1%
- **LiveCodeBench (Vals): 82.1%**; **AA-SciCode: 47.8%** — under 55%; MLS-Bench Lite: 35.1%
- **SWE-bench Verified, SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 85%, 74% and 55% references are unmeasured

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,262 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, and the model's most genuinely contradictory dimension. **MCP Mark Verified 81.1% and MCP Atlas 76.0% are among the strongest tool-protocol figures in this research series, and τ²-bench 90.1% [AA] is a strong independent protocol result.** Against that, **GDPval-AA 1,114 Elo / 26.9% normalized, AA Agentic Index 22.5%, Terminal-Bench 2.1 67.0% and terminalBenchHard 44.7%** all show the execution layer is not competitive. **Terminal-Bench 2.0/4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 62/100.** Mid-band. **AA-GPQA Diamond 89.6% misses the 90%+ reference by 0.4 points — the narrowest miss in this batch — AA-LCR 79.3% is solid, and AA-HLE 35.0% is only 5 points under the 40% reference.** Capped by **CritPt 10.0%, FrontierMath Tier 4 12.2%, AA-IFBench 63.1%, and the total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR and AIME** — so composite depth and reliability are entirely unmeasured. The profile is consistent with a **code-specialised generalist**: adequate protocol and exam reasoning, no depth.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 79.3%**, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 55/100.** **Text and image in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,262 Elo and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-only model with an unproven visual side, which is factually correct — this is a Code variant, and the K2.5/K2.6 generalist siblings carry the multimodal suite.
- **Coding: 70/100.** Mid-band, and the model's nominal speciality. **SWE-bench 78.2% (Vals) is solid mid-frontier repair, LiveCodeBench 82.1% (Vals) is strong, and Kimi Code Bench v2 62.0% plus SWE-bench-adjacent rows corroborate.** Capped by **AA Coding Index 60.8% (9.2 under the 70% reference), AA-SciCode 47.8% (under 55%), ProgramBench 53.6%, OpenHarmony Bench 52.1%, CursorBench 3.2 49.7%, and the absence of vendor SWE-bench Verified, DeepSWE, Vibe Code Bench and FrontierCode** — so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary-tier open-weight SKU with unverified pricing. **Explicitly an estimate, not a measurement** — **open weights provide the self-hosting escape**, which is the one directional signal and the reason this is not scored at the unverified floor. No Zen free tier is recorded.
- **Overall Score: 67/100.** (62 + 62 + 85 + 55 + 70) / 5 = 66.8 → **67**. Recommendation: **a tool-protocol specialist whose execution layer does not match its protocol fluency.** MCP Mark Verified 81.1%, MCP Atlas 76.0% and τ²-bench 90.1% [AA] make it one of the better models in this research series at *calling* tools correctly, while AA Agentic Index 22.5%, GDPval-AA 26.9% normalized and Terminal-Bench 2.1 67.0% show it does not reliably *complete* multi-step tasks. Use it for tool-calling-heavy work where the harness drives the plan and the model executes individual calls; do not use it as an autonomous agent. Two further cautions: **256K context is a quarter of the current standard**, and **CritPt 10.0% with FrontierMath Tier 4 12.2% and no measured reliability** makes it unsuitable as a factual or deep-reasoning assistant. Note it scores *below* its generalist siblings K2.6 (57.53) and K3 (69.46), so prefer those unless the MCP-protocol strength is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Moonshot's own Kimi K2.7 Code model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 26-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenHarmony and Openrouter). The report's central finding is a **contradiction rather than a level: MCP Mark Verified 81.1% and MCP Atlas 76.0% are among the strongest tool-protocol figures in this research series while AA Agentic Index 22.5% and GDPval-AA 26.9% normalized are among the weakest** — protocol fluency without execution reliability — stated explicitly and carried into the recommendation rather than averaged away. The 0.4-point GPQA miss is attributed as the batch's narrowest. **The multimodal dimension is scored as unmeasured rather than inherited**: this is a Code variant, and the K2.5/K2.6 generalist siblings carry the multimodal suite, so their visual scores are deliberately not imported. A related identity note is recorded: a `kimi-k2.7-code-highspeed` serving profile was previously parked and deleted as a duplicate (same weights, same window, 2x API price), and this report covers the base variant only. Missing benchmarks (Terminal-Bench 2.0/4.0, τ³-Banking, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, SWE-bench Verified, SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — moonshotai/Kimi-K2.7-Code model card (primary source)](https://huggingface.co/moonshotai/Kimi-K2.7-Code)
  - [BenchLM — Kimi K2.7 Code benchmark scores (26 rows, 53.75/100, #86/1015)](https://benchlm.ai/models/kimi-k2-7-code)
  - [Artificial Analysis — Kimi K2.7 Code](https://artificialanalysis.ai/models/kimi-k2-7-code)
  - [Vals AI — Kimi K2.7 Code leaderboard results](https://www.vals.ai/models/kimi_kimi-k2.7-code)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — terminalbench-hard leaderboard](https://artificialanalysis.ai/evaluations/terminalbench-hard)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cursor evals — CursorBench 3.2](https://cursor.com/cursorbench)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [Openrouter — Kimi K2.7 Code benchmarks](https://openrouter.ai/moonshotai/kimi-k2.7-code/benchmarks)
  - See also: [`model/kimi-k2.6/`](kimi-k2.6.md) (57.53) and [`model/kimi-k3/`](kimi-k3.md) (69.46) — the generalist siblings this report recommends preferring, both refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
