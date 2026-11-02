# Claude Fable 5 — findings by GPT 5.6 Luna

- Source: Anthropic/Claude Fable 5
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Fable 5
- **Short description:** Anthropic frontier model for long-running agentic work.
- **Provider / access:** Anthropic API and Claude platform.
- **Release / knowledge:** Released June 9, 2026; the current platform reference does not state a knowledge cutoff.
- **IDs:** `anthropic/claude-fable-5` / `claude-fable-5`; no verified OpenCode Zen Free ID.
- **Context window:** 1M tokens; maximum output 128K, verified in Anthropic's platform reference.
- **Modalities:** Text/image input and text output, adaptive thinking, browser/computer use, and tool calls; no audio/video output was verified.
- **Pricing (as of 2026-11-02):** $10 input / $50 output per MTok; paid legacy model, with no verified free tier.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%**; OSWorld-Verified: **85%**; GDPval-AA: **1747** (Anthropic system-card rows mirrored by BenchLM).
- Tau²-bench: **98.5%**; AA Agentic Index: **51.0%** (Artificial Analysis/BenchLM listings; harnesses differ).
- BenchLM composite: **80.78/100**, rank **8/1004**, with 47/724 benchmarks covered; this is a partial third-party composite, not an official score.

Reasoning / knowledge:

- GPQA Diamond: **92.6%**; HLE: **55.5%**; AA Intelligence Index: **49.6%**; ARC-AGI-2: **89.2%** (BenchLM's cited Artificial Analysis, ARC Prize, and Anthropic-source rows).

Coding:

- SWE-bench Verified: **95%**; SWE-bench Pro: **80%**; LiveCodeBench (Vals): **89.8%**; FrontierCode 1.1 Main: **53.5%**; AA-SciCode: **61.0%** (BenchLM's cited leaderboards and model pages).

Multimodal / grounded:

- ParseBench: **69.79%**; OfficeQA Pro: **57.9%**; Blueprint-Bench 2: **38.6%** (BenchLM's October 2026 snapshot and Anthropic system-card rows).

Long context:

- Advertised **1M-token** window; no independently verified retrieval score at 512K+ was found.

### Normalized scores (1–100)
- **Tool use: 90/100.** TB2.1 84.3%, OSWorld 85%, and GDPval 1747 indicate frontier agent capability, while the lack of a broad independent tool suite caps confidence.
- **Reasoning: 92/100.** GPQA 92.6%, HLE 55.5%, and ARC-AGI-2 89.2% are strong; the AA Index remains below the highest frontier tier.
- **Context window: 96/100.** A verified 1M-token window earns the high tier, but no 512K+ retrieval result supports a 100.
- **Multimodal: 70/100.** Image input and grounded document evaluations are verified; no audio/video input or non-text output was verified.
- **Coding: 93/100.** SWE-bench Verified 95%, LiveCodeBench 89.8%, and AA-SciCode 61% are strong, though FrontierCode and TB2.1 are below the absolute frontier ceiling.
- **Cost efficiency: 30/100.** The verified $10/$50 price is expensive for a legacy frontier model.
- **Overall Score: 88.2/100.** Half-up mean of the five quality dimensions; best fit is high-quality coding and long-running knowledge work when price is secondary.

### Multi-source deep-research addendum (2026-10-09)

- Anthropic’s launch materials describe Fable 5 as the generally available safeguarded frontier model, with Mythos reserved for restricted sensitive-domain use. Independent biomedical and compliance studies find strong task performance, but also show that refusal handling and rubric choice materially affect measured accuracy.
- Recalculation: **retained 86.6/100 provisional**. The evidence improves the qualitative profile but still does not verify an exact context limit or stable public price, so the provisional score remains.
- Sources: https://www.anthropic.com/claude/fable ; https://arxiv.org/abs/2607.10849 ; https://arxiv.org/abs/2608.07776

### Current refresh (2026-11-02)

- Anthropic's platform documentation now verifies the legacy status, June 9 release, `claude-fable-5` ID, 1M context, 128K maximum output, and $10/$50 pricing. BenchLM's October 29 snapshot supplies the exact-model benchmark rows above and explicitly labels coverage as partial.
- Recalculation: **88.2/100**, replacing the earlier provisional score after the exact-model benchmark coverage and current pricing became verifiable.
- Sources: https://platform.claude.com/docs/en/models/fable-5/overview ; https://benchlm.ai/models/claude-fable ; https://artificialanalysis.ai/models/claude-fable-5

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: refreshed public web research using first-party Anthropic documentation plus BenchLM, Artificial Analysis, and Vals AI benchmark listings; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5 platform reference](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Anthropic Claude Fable page](https://www.anthropic.com/claude/fable)
  - [BenchLM Claude Fable 5 benchmarks](https://benchlm.ai/models/claude-fable)
  - [Artificial Analysis Claude Fable 5](https://artificialanalysis.ai/models/claude-fable-5)
  - [Vals AI Claude Fable 5 results](https://www.vals.ai/models/anthropic_claude-fable-5)
