# GPT-5.2-Codex — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.2-codex`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex. The **Codex-branded** variant of the GPT-5.2 family — sibling to GPT-5.2 (59.62) and GPT-5.2 Pro (66.28) — scoring **56.6/100, #61 of 1,015** with **16 benchmarks**. Note it scores *below* its own non-Codex sibling GPT-5.2 (59.62) by 3 points, so on BenchLM's aggregate the Codex branding did not pay off.
- **Short description:** A coding SKU with a genuinely strong protocol and long-context profile — **τ²-bench 92.1% [AA], AA-LCR 82.3%, AA-IFBench 77.6%, AA-GPQA Diamond 89.9%** — paired with a **near-total absence of the benchmarks that would justify the Codex name**: no SWE-bench Verified, no DeepSWE, no AA Coding Index, no AA-SciCode, no Terminal-Bench and no FrontierCode. Coding rests on three rows, two of them Vals.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.2 Codex is OpenAI's 2026 Codex mid-cycle SKU. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.2-codex`; `openai_gpt-5.2-codex` (Vals).
- **Context window:** **400,000 tokens** (BenchLM) — half the current 1M standard, though **AA-LCR is 82.3%**, so the window is demonstrably usable rather than merely large.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 76.3% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No OpenAI launch post or system card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Vals AI, Gert Labs, the JobBench paper or Openrouter. So, as with Grok 4.3, GPT-5.1 and Grok 4.1 Fast, **this is a fully independently-evidenced model with no vendor-run rows at all.** 16 benchmarks total — the third-thinnest evidence base in this batch.

Agent / tool use:

- **τ²-bench: 92.1%** [AA] — the strongest agentic figure here
- **Gert Labs: 51.79%**; **JobBench: 26.0%** [JobBench paper] — near-floor
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **solid mid-tier**:

- **AA-GPQA Diamond: 89.9%** [AA] — 0.1 points under the 90%+ reference, the narrowest miss in this batch
- **AA-HLE: 35.7%** — 4.3 points under the 40%+ reference
- **AA-LCR: 82.3%** — solid long-context reasoning; **CritPt: 8.7%**
- AA Intelligence Index: **28.5%**
- **AA-Omniscience: index −2.2, accuracy 41.1%, hallucination rate 73.4%** — a mildly negative index, meaning slightly more incorrect than correct answers
- **AA-IFBench: 77.6%** — strong instruction following
- **ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro: no verified public score found** — so three of five reasoning references are unmeasurable and all mathematics is unmeasured

Coding — **thin, and the Codex name is unsupported**:

- **LiveCodeBench (Vals): 88.0%** — the strongest coding figure
- **SWE-bench (Vals): 72.4%** — 12.6 points under the 85%+ terminal reference
- **Vibe Code Bench: 37.91%** [Vals] — near-floor
- **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench (all harnesses), FrontierCode, SWE-Rebench: no verified public score found** — so **the 85%, 74%, 70% and 55% coding references are all unmeasured**, and the Codex specialisation has no supporting evidence in this catalog

Multimodal (image-in):

- **AA-MMMU-Pro: 76.3%** — the only visual row
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, with one strong figure and broad absence. **τ²-bench 92.1% [AA] is a strong protocol result and Gert Labs 51.79% is respectable**, but **JobBench 26.0% is near-floor, and Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists. The strong protocol figure against absent execution data is the same pattern seen in Kimi K2.7 Code and Qwen3.5-122B-A10B, and it is recorded as such.
- **Reasoning: 72/100.** Mid-band and the strongest dimension. **AA-GPQA Diamond 89.9% misses the 90%+ reference by 0.1 points — the narrowest miss in this batch — AA-LCR 82.3% is solid long-context reasoning, and AA-IFBench 77.6% is strong instruction following.** Capped by **AA-HLE 35.7% (under 40%), CritPt 8.7%, AA Intelligence Index 28.5%, an AA-Omniscience index of −2.2 with 73.4% hallucination, and the missing ARC-AGI, MRCR, AIME, FrontierMath and MMLU-Pro** — so composite depth, reliability and all mathematics are unknown.
- **Context window: 90/100.** **400,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because **AA-LCR is 82.3%** among the better measured long-context reasoning figures in this batch — so the window is demonstrably usable rather than merely large. Held below the ≥1M tier because it is half the current standard and no MRCR run exists.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on **AA-MMMU-Pro 76.3%**. Held at 68 because the visual suite is **one benchmark** and there is no video or audio input.
- **Coding: 70/100.** Mid-band, and the dimension where the evidence is most misleading. **LiveCodeBench 88.0% (Vals) is strong and SWE-bench 72.4% (Vals) is solid mid-frontier**, but **Vibe Code Bench 37.91% is near-floor, and SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench and FrontierCode are entirely absent** — so the 85%, 74%, 70% and 55% references cannot be checked. Scored at 70 on the two respectable Vals rows, **explicitly noting that a "Codex"-branded SKU with no measured AA Coding Index and no Terminal-Bench figure is a thin basis for a coding recommendation** — the name implies a specialisation this catalog does not evidence.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary OpenAI Codex SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the sibling rate cards (GPT-5.2 at $1.75/$14 per the earlier GPT-5.2 report) are the one directional signal, and Codex SKUs have historically priced above the base tier, which is the reason this is not scored at the unverified floor.
- **Overall Score: 72.4/100.** (62 + 72 + 90 + 68 + 70 + 60) / 5 = 72.4 → **72**. Recommendation: **a solid generalist with an unsupported Codex name.** τ²-bench 92.1%, AA-LCR 82.3%, AA-IFBench 77.6% and AA-GPQA Diamond 89.9% at a 400K window is a genuinely good reasoning and instruction-following package, and AA-MMMU-Pro 76.3% rounds it out. **But the evidence does not support buying it *as* a coding model**: no AA Coding Index, no Terminal-Bench, no SWE-bench Verified and no FrontierCode figure exists, and Vibe Code Bench 37.91% is near-floor. Prefer **GPT-5.2 Pro (66.28)** or **GPT-5.6 Sol (74.88)** if capability is the goal, and prefer **GPT-5.3 Codex (62.92, refreshed earlier this session)** if the Codex toolchain is specifically required — that SKU at least carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card. The 16-benchmark evidence base makes even this assessment a floor rather than a ceiling.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1 and Grok 4.1 Fast, **the central provenance finding is structural: BenchLM attributes all 16 of this model's rows to independent sources (Artificial Analysis, Vals AI, Gert Labs, the JobBench paper, Openrouter) with no OpenAI launch post or system card anywhere**, making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways — the measurements are trustworthy and the model's own claims are absent entirely. The third-thinnest evidence base in this batch (16 rows) is stated plainly rather than hedged. **The report's central analytical caveat is that the "Codex" branding is unsupported by this catalog**: a coding-branded SKU with no AA Coding Index, no Terminal-Bench, no SWE-bench Verified and no FrontierCode figure, and a near-floor Vibe Code Bench, cannot be recommended *as* a coding model on this evidence — stated explicitly rather than glossed. The 0.1-point GPQA miss is attributed as the batch's narrowest. The strong-protocol-against-absent-execution pattern is recorded as consistent with the Kimi K2.7 Code and Qwen3.5-122B-A10B reports. The unpublished rate card is surfaced with its effect on the cost score stated explicitly. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, FrontierMath, MMLU-Pro, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode, SWE-Rebench, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.2-Codex benchmark scores (16 rows, 56.6/100, #61/1015)](https://benchlm.ai/models/gpt-5-2-codex)
  - [Artificial Analysis — GPT-5.2-Codex (primary independent source)](https://artificialanalysis.ai/models/gpt-5-2-codex)
  - [Vals AI — GPT-5.2 Codex leaderboard results](https://www.vals.ai/models/openai_gpt-5.2-codex)
  - [Vals AI — LiveCodeBench leaderboard (source of the 88.0%)](https://www.vals.ai/models/openai_gpt-5.2-codex)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — omniscience leaderboard](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [JobBench paper](https://arxiv.org/abs/2605.26329)
  - [Openrouter — GPT-5.2 Codex benchmarks](https://openrouter.ai/openai/gpt-5.2-codex/benchmarks)
  - See also: [`model/gpt-5.2/`](gpt-5.2.md) (59.62), [`model/gpt-5.2-pro/`](gpt-5.2-pro.md) (66.28, zero benchmark rows), [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92, refreshed earlier this session)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
