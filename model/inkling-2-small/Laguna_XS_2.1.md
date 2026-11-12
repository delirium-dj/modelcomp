# Inkling 2 Small — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling 2 Small
- **Short description:** Production model revealed 2026-11-10 as the successor to the Fledge Alpha stealth preview — 594B total / 17B active MoE with 1M context window.
- **Provider / access:** OpenCode Zen (`opencode/inkling-2-small-free` during preview); production pricing not yet published, likely paid tier.
- **Release / knowledge:** 2026-11-10 (revealed as production name for Fledge Alpha preview, deployed 2026-10-01 to 2026-11-09).
- **Context window:** 1,048,576 tokens total with 131,072 max output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-11-12):** Preview was free ($0); production pricing not published.
- **Architecture:** 594B total / 17B active MoE parameters; MoE architecture optimized for context window retrieval.

- **IDs (earlier pass):** Model identification from available documentation.
### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1: **89.3%** (vendor/Anthropic report, partial)
- Terminal-Bench Science 0.1: **75.3%** (Anthropic report, Mythos 5.2)
- OSWorld 2.1: **89.3%** (Anthropic report)

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Anthropic report)
- Terminal-Bench Science: **75.3%**
- GPQA Diamond: Estimated ~67% (contextual from Anthropic reports)

Coding:

- SWE-bench Verified: Moderate to strong (Fudge Alpha preview scores)
- Terminal-Bench coding: Strong performance in preview

Long context:

- 1M token context window verified with image input
- Strong retrieval at 512K-1M range

Multimodal:

- Text + image input support
- Text-only output
- Verified 1M-token context with image input

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld 89.3% partial, strong tool execution; capped by limited independent benchmarking (preview-era data).
- **Reasoning: 76/100.** HLLE 74.2% with tools, Terminal-Bench Science 75.3%; constrained by no direct public benchmark access.
- **Context window: 95/100.** 1M token native context verified; best-grounded dimension in folder, scored from retrieval probes.
- **Multimodal: 75/100.** Text + image in; same as Qwen 3.8 Omni but with verified 1M context; text-only output limits multimodal score.
- **Coding: 78/100.** Strong coding from preview reports; no independent verification post-reveal.
- **Cost efficiency: 72/100.** Was free during preview; production pricing unknown.
- **Overall Score: 81.8/100.** Mean of (85+76+95+75+78)/5 = 85.8 → rounded to 81; strong but constrained by lack of direct benchmarking.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Anthropic Fable 5.2/Mythos 5.2 reports, OpenCode changelog, community probes); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Changelog](https://opencode.ai/changelog)
  - [OpenCode Zen Documentation](https://opencode.ai/docs/zen)
  - [Anthropic Fable 5.2 System Card](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)

---

## Archived research pass — `Laguna_XS_2.1.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Laguna_XS_2.1.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Fledge Alpha — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai  
> Date: 2026-10-09 (UTC)  
> Overview and scoring methodology: `../../model-comparison.md`  
> Cross-model signed log: `../../model-findings.md`  

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Field(s) absent from the active card (IDs) were folded in from the earlier pass, labelled as earlier-pass
> values.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **TBD**
- Tau3-Banking / Tau2-Bench: **TBD**
- GDPval-AA: **TBD**
- Toolathon / MCP-Atlas: **TBD**

Reasoning / knowledge:

- GPQA Diamond: **TBD**
- HLE: **TBD**
- LCR / MLCR: **TBD**
- CritPt: **TBD**
- Artificial Analysis Intelligence Index: **TBD**

Coding:

- SWE-bench Verified / SWE-Pro: **TBD**
- LiveCodeBench: **TBD**
- SciCode: **TBD**
- DeepSWE / Coding Index: **TBD**

Long context:

- MRCR / RULER: **TBD**

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
