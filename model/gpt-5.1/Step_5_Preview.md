# GPT-5.1 — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-5.1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (the **base** variant; BenchLM also tracks a separate `GPT-5 (medium)` at 46.06). Now **many generations behind**: GPT-6 Astra (86.04) → GPT-6.1 Sol (85.28) → GPT-6.1 Terra (80.79) → GPT-6 Sol (78.03) → GPT-5.6 Sol (74.88) … and this at **57.04, #59 of 1,015** with **23 benchmarks** — the second-thinnest evidence base in this batch.
- **Short description:** A mid-cycle GPT whose most striking property is **a 200K context window — the smallest in this batch and one-fifth of the current 1M standard**. Its measured profile is thin and mostly mid-tier: τ²-bench 81.9%, AA-LCR 80.0%, AA AIME 2025 94.0%, AA MMLU-Pro 87.0%, against **CritPt 4.9% (the lowest measured in this batch), GDPval-AA 930 Elo / 16.3% normalized, AA Coding Index 49.4% and Vibe Code Bench 24.61%**.
- **Provider / access:** OpenAI API, Microsoft Azure, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.1 is OpenAI's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.1`; `openai_gpt-5.1` (ARC Prize, Vals).
- **Context window:** **200,000 tokens** (BenchLM) — the smallest in this batch and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 75.5%, Design Arena 1,185 Elo).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No OpenAI launch post or system card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Vals AI, ARC Prize, Gert Labs or OpenRouter. So, as with Grok 4.3, **this is a fully independently-evidenced model with no vendor-run rows at all.** 23 benchmarks total.

Agent / tool use — **very thin and mostly weak**:

- τ²-bench: **81.9%** [AA]; terminalBenchHard: 45.5% [AA]; Gert Labs: 41.24%
- **GDPval-AA: 930 Elo** [AA] / **16.3% normalized** — the second-lowest GDPval normalized figure in this batch
- **Terminal-Bench (all harnesses), τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, APEX-Agents-AA: no verified public score found** — so all three of the methodology's agentic frontier references are unmeasured and no composite exists

Reasoning / knowledge:

- **AA-GPQA Diamond: 87.3%** — fails the 90%+ reference by 2.7 points
- **AA-HLE: 28.5%** — fails the 40%+ reference by 11.5 points
- **AA-Omniscience: index 5.4, accuracy 37.7%, hallucination rate 51.9%** — a mildly positive index
- AA Intelligence Index: **24.7%** — low; **AA-LCR: 80.0%**; **CritPt: 4.9% — the lowest measured in this batch**
- **ARC-AGI-1: 72.83%** [ARC Prize] — notably low for the ARC family; AA MMLU-Pro: 87.0%; AA-IFBench: 72.9%; AA Global-MMLU-Lite: 90.6%
- **AA AIME 2025: 94.0%** [AA] — the strongest figure in this report
- **ARC-AGI-2, MRCR, FrontierMath: no verified public score found**

Coding — **weak**:

- **AA LiveCodeBench: 86.8%** — the strongest coding figure
- **AA Coding Index: 49.4%** — 20.6 points under the 70% reference
- **Vibe Code Bench: 24.61%** [Vals] — near-floor
- **SWE-bench (all variants), DeepSWE, AA-SciCode, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **AA-MMMU-Pro: 75.5%**; Design Arena (website): **1,185 Elo**
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the methodology's mid band. τ²-bench 81.9% is the one respectable figure; terminalBenchHard 45.5%, Gert Labs 41.24% and **GDPval-AA 930 Elo / 16.3% normalized** are all weak, and 16.3% normalized means it produced acceptable outputs on roughly one task in six. **Everything else is absent: Terminal-Bench on every harness, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index** — so all three frontier references are unmeasured and no composite agentic figure exists at all.
- **Reasoning: 62/100.** Mid-band. **AA AIME 2025 94.0% and AA MMLU-Pro 87.0% are solid**, AA-LCR 80.0% is good long-context reasoning, and AA Global-MMLU-Lite 90.6% is strong. Heavily capped by **AA-GPQA Diamond 87.3% (under 90%), AA-HLE 28.5% (11.5 under 40%), AA Intelligence Index 24.7%, ARC-AGI-1 72.83% (unusually low for the family), and CritPt 4.9% — the lowest measured in this batch** — plus the absence of ARC-AGI-2, MRCR and FrontierMath.
- **Context window: 70/100.** **200,000 tokens** places it exactly on the methodology's 200K tier boundary ("200K = 70"), and it is the only model in this batch without a ≥500K window. Held at the 70 floor rather than mid-tier because **AA-LCR is 80.0%**, which is genuinely decent long-context reasoning, but no MRCR retrieval figure exists, no max-output limit is published, and 200K is one-fifth of the current standard.
- **Multimodal: 62/100.** Text + image in with text out, at the lower end of the methodology's 60–70 band on AA-MMMU-Pro 75.5%. Held at 62 because the visual suite is **two benchmarks**, Design Arena is only 1,185 Elo (low), and there is no video or audio input.
- **Coding: 48/100.** Below the methodology's mid band. **AA LiveCodeBench 86.8% is the one strong figure**, but **AA Coding Index 49.4% is 20.6 points under the 70% reference and Vibe Code Bench 24.61% is near-floor**, and **SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, Terminal-Bench and FrontierCode are all unpublished** — so the 85%, 74% and 55% references cannot be checked at all.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary OpenAI SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the 200K window keeps prompt costs down without earning a premium, and GPT-5.1's historical price sat in the $1.25–$2 input range, which is the one directional signal and the reason this is not scored lower.
- **Overall Score: 58.8/100.** (52 + 62 + 70 + 62 + 48) / 5 = 58.8 → **59**. Recommendation: **a legacy mid-cycle GPT with no remaining reason to select it.** Its two genuine assets are a solid AA-LCR 80.0% and AA AIME 2025 94.0%, both of which are available cheaper and better in the 5.6 and 6 lines. Its defining limits are the **200K window (one-fifth of the current standard), the batch's lowest CritPt (4.9%), an AA Coding Index 20.6 points under frontier, and a GDPval-AA of 930 Elo with 16.3% normalized.** It is dominated on every axis by GPT-5.6 Luna (63.94, 54 benchmarks) at a similar price, and by GPT-5.4 (66.48). Migrate unless pinned to `openai/gpt-5.1`; note that its 23-benchmark evidence base makes even this assessment a floor rather than a ceiling.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, **the central provenance finding is structural: BenchLM attributes all 23 of this model's rows to independent sources (Artificial Analysis, Vals AI, ARC Prize, Gert Labs, OpenRouter) with no OpenAI launch post or system card anywhere**, making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways — the measurements are trustworthy and the model's own claims are absent entirely. The second-thinnest evidence base in this batch (23 rows) is stated plainly rather than hedged, and the batch's lowest CritPt (4.9%) and second-lowest GDPval normalized figure (16.3%) are attributed rather than presented bare. **A lookup note is recorded: the repo folder spelling `gpt-5` / `gpt-5-1` splits across BenchLM, which carries `gpt-5-1` here and a separate `gpt-5-medium` variant at 46.06 — this report covers the base `gpt-5.1` variant only and does not merge the two.** Missing benchmarks (Terminal-Bench on all harnesses, τ³-Banking, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, APEX-Agents-AA, ARC-AGI-2, MRCR, FrontierMath, SWE-bench Verified, SWE-bench Pro, DeepSWE, AA-SciCode, Terminal-Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.1 benchmark scores (23 rows, 57.04/100, #59/1015)](https://benchlm.ai/models/gpt-5-1)
  - [Artificial Analysis — GPT-5.1 (primary independent source)](https://artificialanalysis.ai/models/gpt-5-1)
  - [ARC Prize — GPT-5.1 (Thinking, High) verified results](https://arcprize.org/leaderboard)
  - [Vals AI — Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)
  - [Artificial Analysis — livecodebench leaderboard](https://artificialanalysis.ai/evaluations/livecodebench)
  - [Artificial Analysis — aime-2025 leaderboard](https://artificialanalysis.ai/evaluations/aime-2025)
  - [Artificial Analysis — mmlu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmlu-pro)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — GPT-5.1 benchmarks](https://openrouter.ai/openai/gpt-5.1/benchmarks)
  - See also: [`model/gpt-5-medium/`](gpt-5-medium.md) — the separately-tracked `GPT-5 (medium)` variant (BenchLM 46.06), not covered by this report
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
