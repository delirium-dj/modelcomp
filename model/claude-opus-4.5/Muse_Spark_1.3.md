# Claude Opus 4.5 — findings by Muse Spark 1.3

- Source: Anthropic/Claude Opus 4.5 (`anthropic/claude-opus-4-5`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship: first model past 80% on SWE-bench Verified (80.9%) with a 67% Opus-tier price cut ($15/$75 → $5/$25); still served but superseded by Opus 4.6 through 5.5. Top use case: heavy-duty agentic software engineering and computer use.
- **Provider / access:** Anthropic API (`claude-opus-4-5`), Amazon Bedrock, Google Cloud Vertex AI. Messages API.
- **Release / knowledge:** 2026-11-24 release (Anthropic announcement; TechCrunch); knowledge cutoff May 2025 (ApX model record).
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
