# Muse Wonder 1.0 — findings by Beam

- Source: Meta (`meta/muse-wonder`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta Superintelligence Labs' frontier multimodal reasoning model for personal and professional agentic tasks, built on Muse Spark. Released 2026-10-12 with a material jump in intelligence over Muse Spark 1.3 (AA Index 48 → 52).
- **Provider / access:** Meta Model API (`meta/muse-wonder`); OpenAI-compatible. Chat Completions.
- **Release / knowledge:** 2026-10-12 release (Meta). Knowledge cutoff not publicly disclosed.
- **IDs:** `meta/muse-wonder` (paid; no Free ID on Zen).
- **Context window:** 1,048,576 tokens total; 944,000 max output (Puter / LLM Stats).
- **Modalities:** Text, image, video, audio, PDF input; text output. Tool calls yes; structured output yes; configurable reasoning effort.
- **Pricing (as of 2026-10-22):** $4.00 / 1M input, $0.20 / 1M cached input, $20.00 / 1M output. Paid only.
- **Architecture:** Proprietary (Meta Superintelligence Labs; Muse Spark lineage; MoE details not publicly disclosed for Wonder).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **52.4** (AA, measured, max effort)
- Terminal-Bench 4.0: **52%** (AA, measured, Muse Wonder max)
- JobBench: **70.5%** (benchgap, measured)
- AA AutomationBench: **39.1%** (benchgap, measured)
- AA Tau3 Banking: **51.1%** (benchgap, estimated ±3.7pp)
- Toolathlon / MCP-Atlas: MCP-Atlas **84.5%** (benchgap, estimated ±4.7pp)
- GDPval-AA v2.1: no verified public score found for Muse Wonder (Muse Wonder Full variant: 1,857 Elo)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- AA-HLE (Humanity's Last Exam): **50.1%** (AA, measured)
- HLE (w/o tools): **43.8%** (benchgap, estimated ±9.3pp)
- HLE (w/ tools): **55.7%** (benchgap, estimated ±4.8pp)
- GPQA Diamond: **94.6%** (benchgap, estimated ±1.0pp)
- AA-SciCode: **60.3%** (AA, measured)
- CritPt: **28.3%** (benchgap, measured)
- AA-Omniscience Accuracy: **41.1%** (benchgap, measured)
- AA-LCR (long-context reasoning): **80.7%** (AA, measured)
- MMLU-Pro: **83.4%** (benchgap, estimated ±6.3pp)

Coding:

- DeepSWE: **78.8%** (benchgap, measured)
- SWE-Marathon: **53.1%** (benchgap, measured)
- SWE-bench Verified: **96.7%** (benchgap, estimated ±4.6pp)
- SWE-bench Pro: **75.3%** (benchgap, estimated ±6.6pp)
- LiveCodeBench v6: **100.0%** (benchgap, estimated ±4.9pp)
- SciCode: **59.8%** (benchgap, estimated ±3.1pp)
- Vibe Code Bench: no verified public score found

Long context:

- 1,048,576 token context window; AA-LCR 80.7% (measured) — strong but below the 98% retrieval bar for top-tier context score.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong agentic performance (Terminal-Bench 4.0 52%, JobBench 70.5%, DeepSWE 78.8%, MCP-Atlas 84.5% estimated). Capped by mid-tier TB 4.0 score and no verified GDPval-AA Elo for this variant.
- **Reasoning: 86/100.** Strong graduate reasoning (AA-HLE 50.1%, AA-SciCode 60.3%, GPQA Diamond 94.6% estimated, CritPt 28.3%). Capped by Knowledge remaining a relative weakness (Omniscience 41.1) and hallucination rate.
- **Context window: 90/100.** 1M window with 80.7% LCR — top tier by size, scored below 100 because retrieval is not ≥98% at 512K+.
- **Multimodal: 90/100.** Text + image + video + audio + PDF in, text out — full multimodal input coverage. Capped at text-out only.
- **Coding: 88/100.** Strong coding (DeepSWE 78.8%, SWE-Marathon 53.1%, SWE-bench Pro 75.3% estimated, SciCode 60.3%). Capped by estimated (not measured) SWE-bench figures.
- **Cost efficiency: 60/100.** Premium pricing ($4 / $20 per 1M) with high input token use; AA cost per task $4.52. Paid only.
- **Overall Score: 87/100.** Mean of five non-cost dims (82 + 86 + 90 + 90 + 88) / 5 = 87.2 → 87. Best fit for multimodal agentic work and long-context document tasks where input coverage matters.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-22
- Method: public internet research (Meta/AA Muse Wonder article 2026-10-12, Puter model card, LLM Stats, benchgap measured/estimated scores); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.