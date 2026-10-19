# Claude Sonnet 4 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Sonnet 4 (`anthropic/claude-sonnet-4`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's May 2025 balanced Claude 4 model: flagship-level coding (SWE-bench Verified 72.7%, a hair above Opus 4's 72.5%) at one-fifth Opus pricing ($3/$15); legacy tier still served but superseded by Sonnet 4.5/4.6/5. Top use case: cost-efficient everyday coding assistance.
- **Provider / access:** Anthropic API (`claude-sonnet-4-20250514`), Bedrock, Vertex AI. Messages API.
- **Release / knowledge:** 2026-05-22 release (Anthropic launch; llm-stats); trained on data through Mar 2025 (system card).
- **IDs:** `anthropic/claude-sonnet-4` (no Free ID exists on Zen — paid only).
- **Context window:** 200K in / 64K out (Anthropic; Bedrock/Vertex allow up to 128K out — llm-stats provider table).
- **Modalities:** Text + image in (MMMU 74.4% visual reasoning); text out; hybrid reasoning (extended thinking optional); tool calls + computer use yes.
- **Pricing (as of launch):** $3 input / $15 output per 1M (Anthropic; llm-stats). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-bench: **35.5%** single-attempt / **41.3%** with parallel test-time compute (Anthropic Claude 4 launch appendix, May 2025)
- TAU-bench (extended thinking): **Retail 80.5% / Airline 60.0%** (Anthropic launch appendix)
- OSWorld: **38.6%** (AnotherWrapper benchmark table — aggregator, provisional weight)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.4%** single-attempt / **83.8%** with parallel compute (Anthropic appendix; 70.0% without extended thinking)
- MMMLU (multilingual): **86.5%** (Anthropic appendix; 85.4% w/o thinking)
- AIME 2025: **70.5%** / **85.0%** with parallel compute (Anthropic appendix)
- HLE: **7.8%** (AnotherWrapper benchmark table — aggregator, provisional weight)
- LCR / MLCR: **no verified public score found**
- CritPt: **0.3%** (AnotherWrapper table — near-floor aggregator signal, noted not weighted)
- Artificial Analysis Intelligence Index: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **72.7%** single-attempt / **80.2%** with parallel compute (Anthropic appendix — edged Opus 4's 72.5%)
- LiveCodeBench: **59.7%** (AnotherWrapper table — provisional weight)
- SciCode: **40.0%** (AnotherWrapper table — provisional weight)
- SWE-bench Pro: **74.8% aggregator-reported** (AnotherWrapper table — harness unconfirmed and inconsistent with later-generation official Pro scores, e.g. Opus 4.5's 52.0%; provisional weight only, not relied upon)
- Aider Polyglot: **56.4%** (AnotherWrapper table — provisional weight)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (200K window verified; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU Retail 80.5 / Airline 60.0 evidences solid 2025-era tool use, but Terminal-bench 35.5% is modest and no GDPval/Claw numbers exist; capped at 74.
- **Reasoning: 76/100.** GPQA-D 75.4 (83.8 boosted), MMMLU 86.5, AIME 70.5 is a balanced mid-upper profile; HLE 7.8% (aggregator) and no LCR/CritPt/Index numbers cap it at 76.
- **Context window: 70/100.** Verified 200K hits the 200K (= 70) anchor exactly; no retrieval evidence.
- **Multimodal: 65/100.** Text + image in with MMMU 74.4% visual reasoning, text-only out — mid-band of the image-in tier.
- **Coding: 76/100.** SWE-Verified 72.7% (flagship-level at launch) is the anchor; LiveCodeBench 59.7% and SciCode 40.0% are mid and no DeepSWE/Vibe numbers exist, so capped at 76 (aggregator SWE-Pro 74.8% excluded as harness-unconfirmed).
- **Cost efficiency: 60/100.** Paid-only $3/$15 sits exactly on the $3/$15 (≈60) reference point.
- **Overall Score: 72/100.** Mean of the five non-cost dims (74 + 76 + 70 + 65 + 76) / 5 = 72.2 → 72; best fit as a legacy value Sonnet where 200K suffices and frontier coding is not required.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Anthropic Claude 4 launch appendix + Opus 4/Sonnet 4 system card, llm-stats provider/pricing table, AnotherWrapper benchmark table for provisional rows, Clauder Navi generation comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Anthropic Claude 4 announcement 2025-05-22 (reconfirms SWE 72.7%, Opus 43.2% TB, $3/$15, Bedrock/Vertex, extended-thinking-with-tools), (2) BenchmarkList claude-sonnet-4 page (148 benchmarks: TB2.1 36.3%, Tau2-Telecom 64.6%, Tau3 16.7%, GDPval 877, Claw 97th pct, LiveCode 62.4%, SciCode 40.0%, Aider 61.3%, SWE-Lite 60.3% #1), (3) Anthropic assets index (system-card reference). Conflicting results compared below.

| Dimension | 2026-09-26 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 74 | 74 | hold — filed TAU 80.5/60.0 + TB 35.5% stand; new GDPval 877 + Tau2 64.6% + Tau3 16.7% + Claw 97th pct fill filed GDPval/Claw gaps consistent with cap; no crossing |
| Reasoning | 76 | 76 | hold — GPQA 75.4% + MMMLU 86.5% + AIME 70.5% stand; new HLE-band rows consistent; no LCR/Index absolute, no crossing |
| Context | 70 | 70 | hold — 200K reconfirmed; no retrieval curve |
| Multimodal | 65 | 65 | hold — text+image reconfirmed; SWE-Multimodal 35.6% deepens without moving band |
| Coding | 76 | 76 | hold — SWE-Ver 72.7% stands; new LiveCode 62.4% confirms filed 59.7% band, SciCode 40.0% confirms filed row, Aider 61.3% deepens; filed provisional SWE-Pro 74.8% stays excluded as harness-unconfirmed |
| Cost | 60 | 60 | hold — $3/$15 reconfirmed |
| Overall | 72 | 72 | hold — (74+76+70+65+76)/5 = 72.2 → 72 |

New verified rows this pass: GDPval-AA 877; Tau2-Telecom 64.6%; Tau3-Banking 16.7%; Claw Bench 97th pct; TB2.1 36.3% (confirms filed 35.5% band); LiveCode 62.4%; SWE-Lite 60.3% #1; SWE-Multimodal 35.6%; CORE-Bench Hard 46.7%. Scores hold; evidence deepens without crossing a band boundary.

Sources: https://www.anthropic.com/news/claude-4 · https://benchmarklist.com/models/anthropic-claude-sonnet-4/

