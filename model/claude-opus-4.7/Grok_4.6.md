# Claude Opus 4.7 — findings by Grok 4.6

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 Opus successor to Opus 4.6, still on the API as an active legacy SKU; strongest public gains are agentic coding, high-resolution vision, and instruction-following. Anthropic now recommends migrating to Opus 5.5.
- **Provider / access:** Claude Messages API `claude-opus-4-7`; Amazon Bedrock `anthropic.claude-opus-4-7`; Google Cloud Vertex / Microsoft Foundry / Claude Platform on AWS `claude-opus-4-7`. Adaptive thinking; default effort `high`; extra `xhigh` effort between `high` and `max`.
- **Release / knowledge:** Released 2026-04-16; reliable knowledge / training-data cutoff Jan 2026. Status: active (legacy); retirement not sooner than 2026-04-16. Anthropic platform docs (verified 2026-10-20) advise migrating to Claude Opus 5.5.
- **IDs:** `claude-opus-4-7` (Claude API / Vertex / Foundry / Claude Platform on AWS); `anthropic.claude-opus-4-7` (Bedrock). No OpenCode Zen Free ID found.
- **Context window:** 1M tokens total; 128K max synchronous output; Message Batches API beta up to 300K output (`output-300k-2026-03-24`). Verified on Anthropic platform docs for Opus 4.7.
- **Modalities:** Text and images in; text out. Adaptive thinking, effort control, tool use. Images accepted up to 2,576 px long edge (~3.75 MP). No verified audio/video I/O.
- **Pricing (as of 2026-10-20):** $5 / $25 per 1M input/output; 5m cache write $6.25; 1h cache write $10; cache read $0.50; Batch API 50% off input and output. Same list price as Opus 4.6. Third-party summaries also cite $10 / $37.50 for prompts >200K — not restated on the current platform pricing table, so treated as unverified here.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas (**agent / tools**): **77.3** (Anthropic launch announcement, 2026-04-16; vs Opus 4.6 62.7 after Scale AI grading revision)
- Terminal-Bench 2.0: **69.4%** (Anthropic; Terminus-2 harness, thinking disabled, 1× guaranteed / 3× ceiling, 5 attempts)
- OSWorld-Verified: **78.0%** (Anthropic launch table vs Opus 4.6 72.7%)
- Finance Agent: **64.4%** (Anthropic; claimed SOTA at launch vs Opus 4.6 60.7%)
- GDPval-AA: **SOTA claimed, no numeric Elo published** on the announcement page (Anthropic, 2026-04-16)
- CursorBench (partner, Cursor): **70%** vs Opus 4.6 58% (Michael Truell quote on Anthropic announcement; not a public harness)
- BrowseComp: **79.3%** (Anthropic; regression vs Opus 4.6 84.0%)
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic launch)
- HLE (with tools): **54.7%** (Anthropic; vs Opus 4.6 53.1%)
- HLE (without tools): **46.9%** (Anthropic; vs Opus 4.6 40.0%)
- MMMLU: **91.5%** (Anthropic; vs Opus 4.6 91.1%)
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** for this exact ID
- CharXiv-R (with tools): **91.0%** (Anthropic; vs Opus 4.6 77.4%)
- LCR / MLCR / CritPt / Omniscience: **no verified public score found**

Coding:

- SWE-bench Verified: **87.6%** (Anthropic; memorization-screen note: margin vs Opus 4.6 80.8% holds after excluding flagged items)
- SWE-bench Pro: **64.3%** (Anthropic; vs Opus 4.6 53.4%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- 1M advertised window, 128K sync output (Anthropic platform docs). **no verified public MRCR / RULER / GraphWalks retrieval score found** at 512K+

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP-Atlas 77.3, OSWorld-Verified 78.0, and Terminal-Bench 2.0 69.4 are strong agent numbers, and partners report fewer tool errors. Capped because TB is 2.0 not 2.1, 69.4% is well below the ~88% TB2.1 frontier band, Tau3/Claw are unpublished, and BrowseComp regressed vs 4.6.
- **Reasoning: 93/100.** GPQA Diamond 94.2% and HLE 46.9% / 54.7% (no tools / tools) sit in the frontier GPQA 90%+ and HLE 40%+ band. Capped because Anthropic positions Mythos Preview above it and no independent Intelligence Index was found.
- **Context window: 96/100.** Documented 1M / 128K out maps to the ≥1M tier (95–100). Not 100: no ≥98% retrieval figure at 512K+ was published.
- **Multimodal: 68/100.** Image-in / text-out with a documented 3.3× resolution lift (2,576 px long edge) matches the +image-in 60–70 band. Capped by no video/audio/PDF-as-native-modality verification on the model card.
- **Coding: 90/100.** SWE-bench Verified 87.6% and SWE-Pro 64.3% are frontier-adjacent coding results; TB 2.0 69.4% and partner CursorBench 70% agree on a step-up from 4.6. Capped because TB 2.0 69.4% is below the ~85% TB2.1 coding frontier and LiveCodeBench / SciCode / DeepSWE are unpublished.
- **Cost efficiency: 48/100.** Paid $5 / $25 per 1M sits between the methodology anchors of ~60 at $3/$15 and ~30 at $10/$50. Cache reads at $0.50 help agents; no $0 tier.
- **Overall Score: 87/100.** Mean of 87 + 93 + 96 + 68 + 90 = 86.8 → 87 half-up. Best fit: paid agentic coding and long-running software work where 1M context and high-res screenshots matter; skip if you need a current non-legacy Opus SKU or cheap tokens.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Anthropic Opus 4.7 announcement, platform model docs, pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
