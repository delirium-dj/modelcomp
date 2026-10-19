# Claude Opus 4.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Opus 4.5 (`anthropic/claude-opus-4-5`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: release-year typo fixed + efficiency/integration notes added; scores hold 79)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship: first model past 80% on SWE-bench Verified (80.9%) with a 67% Opus-tier price cut ($15/$75 → $5/$25); still served but superseded by Opus 4.6 through 5.5. Top use case: heavy-duty agentic software engineering and computer use.
- **Provider / access:** Anthropic API (`claude-opus-4-5`), Amazon Bedrock, Google Cloud Vertex AI. Messages API.
- **Release / knowledge:** 2025-11-24 release (Anthropic announcement; TechCrunch); knowledge cutoff May 2025 (ApX model record).
- **IDs:** `anthropic/claude-opus-4-5` (no Free ID exists on Zen — paid only).
- **Context window:** 200K (Anthropic system-card methodology note; folder meta.json). Shipped with long-context memory/compression improvements ("endless chat") but the window stays 200K.
- **Modalities:** Text + image in; text out; reasoning yes (adjustable effort: low/medium/high, 64K thinking budget in evals); tool calls + computer use yes.
- **Pricing (as of launch):** $5 input / $25 output per 1M (Anthropic; ApX record). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (Anthropic Opus 4.5 system card Table 2.3.A, Nov 2025; vs Sonnet 4.5 50.0%, Opus 4.1 46.5%, Gemini 3 Pro 54.2%, GPT-5.1 47.6%)
- Tau2-bench / MCP Atlas: **state-of-the-art per Anthropic** (TechCrunch launch coverage, 2025-11-24 — qualitative claim, no published absolute number)
- BrowseComp-Plus: **significant jump over Sonnet 4.5** (Anthropic announcement — qualitative, no absolute number)
- Vending-Bench (long-horizon agency): **+29% vs Sonnet 4.5** (Anthropic announcement — relative only)
- OSWorld (computer use): **66.3%** (Claude 5 Hub compilation of Anthropic data, Nov 2025; vs Sonnet 4.5 61.4% — secondary source, provisional weight)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**
- Token efficiency: **76% fewer output tokens (medium, matched Sonnet 4.5 SWE-V) / 48% fewer (high, +4.3pp)**; Chrome + Excel integrations; lead-agent orchestration of Haiku sub-agents (Anthropic announcement — amended 2026-09-27)

Reasoning / knowledge:

- GPQA: **0.87** (ApX Claude 4.5 Opus model record)
- ARC-AGI-2: **SOTA-class per Anthropic** (TechCrunch launch coverage — qualitative, no absolute number)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **80.9% (no-thinking) / 80.6% (64K thinking)** (Anthropic system card Table 2.4.A — first model past 80%)
- SWE-bench Pro: **52.0% (no thinking) / 51.6% (64K thinking)** (Anthropic system card Table 2.4.A)
- SWE-bench Multilingual: **76.2%**, leading 7/8 languages (Anthropic system card + announcement)
- SWE-bench Verified, Opus 4.5 Thinking (Vals AI, by task difficulty): **88% / 75% / 40% / 0%** (Vals AI page, Sep 2026)
- Aider Polyglot: **+10.6% over Sonnet 4.5** (Anthropic announcement — relative only)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number; 200K window with memory improvements noted)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 59.3% (best of its generation) plus vendor-claimed tau2/MCP-Atlas leadership and +29% Vending-Bench evidence strong agency; capped by no public TB 2.1, GDPval, or absolute tau2/MCP numbers.
- **Reasoning: 86/100.** GPQA 0.87 and SOTA-class ARC-AGI-2 positioning support upper-tier reasoning; capped with no public HLE, LCR, or Index score.
- **Context window: 70/100.** Verified 200K hits the 200K (= 70) anchor exactly; memory/compression features are a workflow caveat, not extra window.
- **Multimodal: 65/100.** Text + image in (slides/spreadsheets/deep-research use highlighted at launch), text-only out — mid-band of the image-in tier.
- **Coding: 89/100.** SWE-bench Verified 80.9% (first past 80), SWE-Pro 52.0%, Multilingual 76.2% is a strong verified triple; capped below 90 for missing DeepSWE/LiveCodeBench/SciCode numbers.
- **Cost efficiency: 45/100.** Paid-only $5/$25 sits between the $3/$15 (≈60) and $10/$50 (≈30) references, closer to the former after its 67% generation-over-generation cut.
- **Overall Score: 79/100.** Mean of the five non-cost dims (86 + 86 + 70 + 65 + 89) / 5 = 79.2 → 79; best fit as a legacy-but-elite coding agent where 200K suffices.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Anthropic Opus 4.5 system card + announcement, TechCrunch launch coverage, ApX model record, Vals AI SWE-bench page, Claude 5 Hub compilation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Anthropic Opus 4.5 newsroom 2025-11-24 (reconfirms SWE SOTA positioning, $5/$25, 200K window, 64K thinking budget, TB +15% over Sonnet 4.5), (2) Artificial Analysis claude-opus-4-5 page (deprecated banner, Index 24 est., 200K, cutoff Aug 2025, successor 4.6), (3) benchgap lane (67 measured as of 2026-10-18). Conflicting results compared below.

| Dimension | 2026-09-26/27 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 86 | 86 | hold — TB2.0 59.3% measured confirms filed row; new Tau2 86.3% measured + Tau3 70.2% measured fill filed qualitative-only gaps consistent with SOTA claims; MCP Atlas 42.3% measured + OSWorld 66.3% measured deepen; no GDPval/Claw absolute |
| Reasoning | 86 | 86 | hold — GPQA ~87% (AA-GPQA 81.0% measured lane differs by harness, both listed); new HLE 30.8% measured + LCR 70.7% measured + MMLU-Pro 89.5% measured + Omni-acc 40.9% fill filed gaps consistent with band; Index 24 est. anchor consistent; CritPt 0.3% weak tail noted |
| Context | 70 | 70 | hold — 200K reconfirmed on all three sources; MRCRv2 ~77% est. only, no measured curve |
| Multimodal | 65 | 65 | hold — text+image reconfirmed; new MMMU 80.7% / MMMU-Pro 71.2% / CharXiv 68.5% / Video-MME ~81% measured deepen without moving band |
| Coding | 89 | 89 | hold — SWE-Ver 80.9% measured confirms filed row; new SWE-Pro 57.1% measured + Multilingual 77.5% measured + SWE-Rebench 61.8% + LiveCode v6 84.8% measured fill filed gaps; Vibe ~54% est. deepens; no crossing |
| Cost | 45 | 45 | hold — $5/$25 reconfirmed on all three sources |
| Overall | 79 | 79 | hold — (86+86+70+65+89)/5 = 79.2 → 79 |

New verified rows this pass: Tau2 86.3% / Tau3 70.2% measured (fill filed qualitative gaps); HLE 30.8% / LCR 70.7% / MMLU-Pro 89.5% / Omni-acc 40.9% measured (fill filed gaps); SWE-Pro 57.1% / Multilingual 77.5% / LiveCode 84.8% measured (fill filed gaps); Index 24 est. (first anchor). Scores hold; evidence deepens substantially without crossing a band boundary.

Sources: https://www.anthropic.com/news/claude-opus-4-5 · https://artificialanalysis.ai/models/claude-opus-4-5 · https://benchgap.net/model/claude-opus-4-5

