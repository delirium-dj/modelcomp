# Muse Spark 1.3 Max — findings by Kimi K3

- Source: Meta (`muse-spark-1.3-max`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta's Max-reasoning configuration of the Muse Spark 1.3 family (Sep 2026) — proprietary agentic model with 1M context and 131K max output, tuned for long-horizon multi-workflow agent tasks and knowledge work. Per project tier identity, all 1.3 tier names (Contributor / Free / Standard / Max) are the same weights; only price and data policy differ.
- **Provider / access:** Meta Model API + Muse Code (`dev.meta.ai`), reasoning effort `max`; OpenCode Zen route `opencode/muse-spark-1.3-contributor` (Contributor tier, $0.10/$0.20).
- **Release / knowledge:** Released 2026-09-02 (official Meta AI Research blog "Introducing Muse Spark 1.3"); corrected from my 2026-10-01 report which listed 2026-09-05 from a third-party registry.
- **IDs:** `muse-spark-1.3-max` (Meta); `muse-spark-1.3-contributor` (Zen route). No Free ID per `meta.json`.
- **Context window:** 1M tokens; max output 131,072 (OpenCode Data model page, official blog).
- **Modalities:** Text + image + video + PDF + audio in; text out (OpenCode Data modality listing — audio input added vs my previous report); reasoning yes; tool calling yes.
- **Pricing (as of 2026-10-11):** Contributor tier $0.10 / $0.20 per MTok (cached in $0.002); Standard/Max list $1.25 / $4.25 per MTok (dev.meta.ai). Meta states ~20% fewer tool calls and ~25% fewer tokens than 1.2 on coding tasks.
- **Architecture:** Proprietary (private weights), Meta. Open weights release announced as roadmap item, not yet shipped (official blog).

### Raw benchmarks found

Official Meta numbers via the launch blog (research.meta.ai/blog/introducing-muse-spark-1-3, published 2026-09-02) as transcribed by OpenCode Data (independent aggregator, retrieved 2026-10-11); conflict with my 2026-10-01 Vals AI numbers is noted below.

Agent / tool use:

- GDPval-AA: **1754 Elo** (Meta blog via OpenCode Data)
- JobBench: **64.9** mean rubric score; Agentic IF Index: **57.8**
- AutomationBench: **49.6%** pass@1
- OSWorld: **66.9** mean partial / **32%** binary completion
- DeepSearchQA: **90.3** F1
- Terminal-Bench: **88.8%** pass@1 (official benchmark scorecard)
- Tau3-Banking / Claw-Eval: **no verified public score found**
- CONFLICT NOTE: my 2026-10-01 report cited Vals AI (Terminal-Bench 4.0 24.75%, Finance Agent 59.96%, Legal Research 55.29% rank #1). The Vals model page now returns 404 and the TB figure uses a different, harder harness version (4.0 vs official scorecard). Unverifiable now — superseded by official numbers on this pass.

Reasoning / knowledge:

- No GPQA Diamond / HLE published. DeepSearchQA 90.3 F1 and Agentic IF 57.8 are the closest verified knowledge/agent-following proxies (Meta blog via OpenCode Data).
- ProofBench / MysteryMechanism / IOI figures from my previous report were Vals-sourced and are no longer verifiable (page 404).

Coding:

- DeepSWE: **75.4%** pass@1 (Meta blog via OpenCode Data)
- SWE-Atlas Codebase QnA: **59.4%** pass@1
- Terminal-Bench: **88.8%** pass@1 (coding-agentic crossover)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- MRCR: **98.5 / 98.1** mean sequence-match ratio at long context (Meta blog via OpenCode Data) — quantified retrieval depth now exists.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA 1754 Elo plus leading agentic rows (Agentic IF 57.8, AutomationBench 49.6, TB 88.8, OSWorld partial 66.9) put it at the frontier of knowledge-work tooling; capped by unverifiable older third-party agent-suite ranks and OSWorld binary (32%) showing real computer-use headroom.
- **Reasoning: 68/100.** Strong verified proxies (DeepSearchQA 90.3 F1) but still no published GPQA/HLE-class frontier science scores — held below the flagship reasoning tier pending those numbers.
- **Context window: 95/100.** 1M window, 131K max output, and now-measured MRCR 98.5/98.1 retrieval depth — top of the 1M tier.
- **Multimodal: 90/100.** Text + image + video + PDF + audio input in one model; text-only output and no image/audio generation cap it at the input-rich band.
- **Coding: 90/100.** DeepSWE 75.4, TB 88.8, SWE-Atlas Codebase QnA 59.4, plus vendor-measured ~20% fewer tool calls / ~25% fewer tokens than 1.2 — a major upward correction from my Vals-based 70.
- **Cost efficiency: 88/100.** Unchanged: Standard/Max list $1.25/$4.25 maps to the ~88 reference point; Contributor tier ($0.10/$0.20) improves effective cost but is the same weights with training-data-use caveats.
- **Overall Score: 87/100.** Half-up mean of the five quality dims: (90 + 68 + 95 + 90 + 90) / 5 = 86.6 → 87. Best fit: long-horizon agentic knowledge work and coding with heavy multimodal inputs; weakest verified area remains frontier science reasoning (no GPQA/HLE).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: public internet research (official Meta AI Research launch blog 2026-09-02; OpenCode Data model page `meta/muse-spark-1.3-contributor` incl. usage + benchmark transcription; web search). Second pass over my 2026-10-01 file: replaced unverifiable Vals AI numbers with official Meta numbers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
