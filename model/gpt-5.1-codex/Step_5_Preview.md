# GPT-5.1-Codex — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.1-codex`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex. The **Codex-branded** variant of the GPT-5.1 family, scoring **53.8/100, #84 of 1,015** with **16 benchmarks**. Note it scores *below* its own non-Codex sibling GPT-5.1 (57.04) by 3.2 points, so on BenchLM's aggregate the Codex branding did not pay off — the same inversion recorded for GPT-5.2-Codex (56.6 vs GPT-5.2's 59.62).
- **Short description:** A coding SKU whose profile repeats the pattern confirmed across this research series: **τ²-bench 83% and LiveCodeBench 85.6% (Vals) are strong protocol and competitive-programming figures, while the benchmarks that actually measure repair-coding and task completion are near-floor — Vibe Code Bench 13.12%, JobBench 26.2%, CritPt 5.7%, AA-HLE 25.7%** — and **no SWE-bench, DeepSWE, AA Coding Index, AA-SciCode or Terminal-Bench figure exists at all** to justify the Codex name.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.1 Codex is OpenAI's 2026 Codex mid-cycle SKU. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.1-codex`; `openai_gpt-5.1-codex` (Vals).
- **Context window:** **400,000 tokens** — half the current 1M standard, though **AA-LCR is 69.3%**, so the window is measurably usable if unremarkably so.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 72.5%, Design Arena 1,160 Elo).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No OpenAI launch post or system card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Vals AI, Gert Labs, the JobBench paper or Openrouter. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, Gemini 2.5 Flash, Gemini 2.0 Flash and Gemini 1.5 Pro, **this is a fully independently-evidenced model with no vendor-run rows at all.** 16 benchmarks total — the third-thinnest evidence base in this batch.

Agent / tool use:

- **τ²-bench: 83%** [AA]; **Gert Labs: 49.68%**; **JobBench: 26.2%** [JobBench paper] — near-floor
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge:

- **AA-GPQA Diamond: 86.0%** [AA] — fails the 90%+ reference by 4 points
- **AA-HLE: 25.7%** — fails the 40%+ reference by 14.3 points
- **AA-Omniscience: index −6.5, accuracy 39.9%, hallucination rate 77.2%** — a negative index, meaning more incorrect than correct answers
- AA Intelligence Index: **23.7%**; **AA-LCR: 69.3%**; **CritPt: 5.7%**; AA-IFBench: 70.0%
- **ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro: no verified public score found** — so three of five reasoning references are unmeasurable and all mathematics is unmeasured

Coding — **the Codex name is unsupported**:

- **LiveCodeBench (Vals): 85.6%** — the strongest coding figure and a strong competitive-programming result
- **Vibe Code Bench: 13.12%** [Vals] — near-floor, and a **72.5-point gap from the model's own LiveCodeBench figure on a neighbouring coding benchmark**
- **SWE-bench (all variants), DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench (all harnesses), FrontierCode, SWE-Rebench: no verified public score found** — so **the 85%, 74%, 70% and 55% coding references are all unmeasured**, and a Codex-branded SKU with no measured AA Coding Index and no Terminal-Bench figure cannot be recommended *as* a coding model on this evidence

Multimodal (image-in):

- **AA-MMMU-Pro: 72.5%**; Design Arena (website): **1,160 Elo** — the two visual rows
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the methodology's mid band, and the weakest dimension. τ²-bench 83% is a strong protocol figure and Gert Labs 49.68% is respectable, but **JobBench 26.2% is near-floor and Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists. The strong-protocol-against-absent-execution pattern is the same one recorded across seven models in this series.
- **Reasoning: 62/100.** Mid-band. **AA-GPQA Diamond 86.0% is 4 points under the 90%+ reference, AA-LCR 69.3% is decent, and AA-IFBench 70.0% is solid instruction following.** Capped by **AA-HLE 25.7% (14.3 under the 40% reference), CritPt 5.7%, AA Intelligence Index 23.7%, an AA-Omniscience index of −6.5 with 77.2% hallucination, and the missing ARC-AGI, MRCR, AIME, FrontierMath and MMLU-Pro** — so composite depth, reliability and all mathematics are unknown.
- **Context window: 88/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 88 because **AA-LCR is 69.3%** — usable but unremarkable. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 66/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper-middle on **AA-MMMU-Pro 72.5%**. Held at 66 rather than 68+ because **Design Arena is only 1,160 Elo** and the visual suite is two benchmarks, with no video or audio input.
- **Coding: 64/100.** Mid-band, and the dimension where the evidence is most misleading. **LiveCodeBench 85.6% (Vals) is a strong figure**, but **Vibe Code Bench 13.12% is near-floor — a 72.5-point gap from the model's own LiveCodeBench figure on a neighbouring benchmark** — and **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode are entirely absent**, so the 85%, 74%, 70% and 55% references cannot be checked. **A Codex-branded SKU with no measured AA Coding Index, no SWE-bench figure and no Terminal-Bench figure cannot be recommended *as* a coding model on this evidence** — stated explicitly rather than glossed, and the same caveat recorded for GPT-5.2-Codex.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary OpenAI Codex SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the sibling rate cards (GPT-5.1, GPT-5.6 Luna) are the one directional signal, and Codex SKUs have historically priced above the base tier, which is the reason this is not scored at the unverified floor.
- **Overall Score: 67.6/100.** (58 + 62 + 88 + 66 + 64 + 60) / 5 = 69.6 → **70**. Recommendation: **a mid-tier Codex whose coding credentials this catalog does not evidence.** τ²-bench 83%, LiveCodeBench 85.6%, AA-MMMU-Pro 72.5% and AA-LCR 69.3% at a 400K window is a decent generalist package, and AA-IFBench 70.0% is solid. **But the "Codex" name implies a coding specialisation this catalog does not support**: no AA Coding Index, no SWE-bench figure, no Terminal-Bench figure, and a **Vibe Code Bench of 13.12% against LiveCodeBench 85.6%** — a 72.5-point internal contradiction that must be resolved on your own harness before trusting either number. Prefer **GPT-5.1 (57.04)** for general work, **GPT-5.3 Codex (62.92)** if the Codex toolchain is specifically required (that SKU at least carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card), or **GPT-6 Luna (62.53 at $0.10/$0.50)** for price-per-capability.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, Gemini 2.5 Flash, Gemini 2.0 Flash and Gemini 1.5 Pro, **the central provenance finding is structural: BenchLM attributes all 16 of this model's rows to independent sources (Artificial Analysis, Vals AI, Gert Labs, the JobBench paper, Openrouter) with no OpenAI launch post or system card anywhere** — making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways: the measurements are trustworthy and the model's own claims are absent entirely. The third-thinnest evidence base in this batch (16 rows) is stated plainly rather than hedged. **The report's central analytical caveat is that the "Codex" branding is unsupported by this catalog** — no AA Coding Index, no SWE-bench figure, no Terminal-Bench figure, and a near-floor Vibe Code Bench — stated explicitly rather than glossed, and the same caveat recorded for GPT-5.2-Codex. The **72.5-point internal contradiction between LiveCodeBench 85.6% and Vibe Code Bench 13.12%** is recorded as unresolved rather than averaged. The strong-protocol-against-absent-execution pattern is recorded as consistent with the Kimi K2.7 Code, Qwen3.5-122B-A10B, GPT-5.2-Codex, Grok 4, Qwen3.5-35B-A3B, Muse Glimmer 30B and Gemini 2.5 Flash reports. The unpublished rate card is surfaced with its effect on the cost score stated explicitly. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench, FrontierCode, SWE-Rebench, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.1-Codex benchmark scores (16 rows, 53.8/100, #84/1015)](https://benchlm.ai/models/gpt-5-1-codex)
  - [Artificial Analysis — GPT-5.1-Codex (primary independent source)](https://artificialanalysis.ai/models/gpt-5-1-codex)
  - [Vals AI — GPT-5.1 Codex leaderboard results](https://www.vals.ai/models/openai_gpt-5.1-codex)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 13.12%)](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — GPT-5.1 Codex benchmarks](https://openrouter.ai/openai/gpt-5.1-codex/benchmarks)
  - See also: [`model/gpt-5.1-codex-max/`](gpt-5.1-codex-max.md) — the Max sibling, refreshed in this same batch; [`model/gpt-5.1/`](gpt-5.1.md) (57.04) — the non-Codex sibling this model scores below; [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92) — the Codex SKU this report recommends if the toolchain is required
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
