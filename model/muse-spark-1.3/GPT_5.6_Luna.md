# Muse Spark 1.3 — findings by GPT 5.6 Luna

- Source: Meta/Muse Spark 1.3
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's flagship agentic and coding model, designed for long-horizon tool use, software engineering, and long-context work. Contributor/standard/max are access or reasoning tiers of the same model, not separate weights.
- **Provider / access:** Meta Model API and Muse Code; exact API route is documented as `meta/muse-spark-1.3` by independent model listings. Chat-completions-compatible access is reported; endpoint-specific Responses support was not verified.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly verified.
- **IDs:** `meta/muse-spark-1.3` (no verified Zen Free ID).
- **Context window:** 1,000,000 tokens; reported by DataCamp's launch analysis and Meta pricing comparison.
- **Modalities:** Text in/out, reasoning modes, tool calls, and JSON-oriented developer access are reported. Image/audio/video support was not verified in the sources reviewed; multimodal score is therefore capped.
- **Pricing (as of 2026-10-04):** Contributor $0.10 input / $0.20 output per 1M tokens, cached $0.002 input; Standard xhigh $1.25 input / $4.25 output, cached $0.15. Contributor prompts and completions may be used to improve Meta products; Standard is described as privacy-preserving. Max pricing was not verified.
- **Architecture:** Proprietary closed model; parameter count and MoE details were not publicly verified.

## Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1754 Elo** (DataCamp table reporting Meta's comparison; max tier).
- JobBench: **64.9%** (DataCamp; max tier).
- OSWorld 2.0: **66.9%** (DataCamp; max tier).
- AutomationBench: **49.4%** (DataCamp; max tier).
- Agentic IF Index: **57.8%** (DataCamp; max tier).
- Tau3-Bench Banking: **52%** (Artificial Analysis comparison summarized by Awaited; max tier).

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (The Model Gap, Artificial Analysis max-tier tracking; comparison marked saturated/tainted).
- Humanity's Last Exam: **48.7%** (The Model Gap, Artificial Analysis max-tier tracking).
- Artificial Analysis Intelligence Index: **61 xhigh / 62 max** (DataCamp; max was initially limited preview and xhigh was the generally callable tier).
- DeepSearchQA: **89.4%** (DataCamp; max tier).

Coding:

- DeepSWE v1.1: **75.4%** (DataCamp, Meta-reported comparison harness; independent confirmation unavailable).
- SWEAtlas CodeBase QnA: **59.4%** (DataCamp, Meta-reported comparison harness).
- Terminal-Bench 2.1: **88.8%** (DataCamp, Meta comparison); an independent Vals AI run reported **72.28%**, showing substantial harness sensitivity.
- LiveBench: **81.6%** (The Model Gap, independent tracking, xHigh effort).

Long context:

- MRCR 256K–512K: **98.5%** (DataCamp, Meta comparison; max tier).
- MRCR 512K–1M: **98.1%** (DataCamp, Meta comparison; max tier).

## Normalized scores (1–100)

- **Tool use: 86/100.** Strong GDPval, JobBench, OSWorld, and automation results support high agent capability, but the mixed harness provenance and middling Agentic IF score cap confidence.
- **Reasoning: 86/100.** GPQA 93.5%, HLE 48.7%, and Intelligence Index 61–62 indicate frontier-level reasoning, while HLE is not dominant and the max/xhigh comparison is not uniform.
- **Context window: 99/100.** The 1M-token window and MRCR scores of 98.5% and 98.1% at 512K–1M are unusually strong; the score is capped below 100 because independent retrieval coverage is limited.
- **Multimodal: 70/100.** Text reasoning and tool workflows are verified, but broad image/audio/video input-output support was not verified publicly.
- **Coding: 90/100.** DeepSWE 75.4, SWEAtlas 59.4, and Meta's Terminal-Bench 88.8 are excellent, though the independent Terminal-Bench result of 72.28 and lack of independent DeepSWE confirmation cap the score.
- **Cost efficiency: 96/100.** Contributor pricing is exceptionally low and Standard remains far below comparable frontier output pricing, with a privacy/data-use tradeoff on Contributor.
- **Overall Score: 86.2/100.** Best fit: high-volume coding and long-context agents where low cost and retrieval reliability matter; validate performance on the target harness before relying on Meta's best-case coding figures.

### Deep-research addendum (2026-10-09)

- Meta’s launch material confirms Muse Spark 1.3 is an update focused on coding and agentic tasks and is available through Muse Code and Meta’s API.
- The project’s tier rule applies: Contributor/Free/Max are access or effort tiers of the same model, not separate checkpoints.
- Source: https://research.meta.ai/blog/introducing-muse-spark-1-3

### Multi-source deep-research addendum (2026-10-09)

- Meta’s official release identifies Muse Spark 1.3 as a coding/agent update available through Muse Code and Meta’s API.
- Meta-reported scores, echoed by multiple secondary analyses, include DeepSWE v1.1 **75.4%**, Terminal-Bench 2.1 **88.8%** (tied with GPT-5.6 Sol), and AutomationBench **49.4%**. These are vendor-harness results and should not be conflated with independent harnesses.
- Independent reporting is materially lower on some setups: Vals AI Terminal-Bench 2.1 is reported at **72.28%**, while Artificial Analysis tracks a result around **85.4%**. The spread is likely harness/effort dependent.
- An independent ToneBench placement puts the thinking configuration at **#83/181**, a reminder that coding/agent strength does not imply writing-leaderboard leadership.
- **Assessment:** retain the strong coding/tool profile but cap confidence in the overall score because the benchmark spread is large and most headline numbers originate from Meta’s own evaluation stack.
- Sources: https://research.meta.ai/blog/introducing-muse-spark-1-3 ; https://www.datacamp.com/blog/muse-spark-1-3 ; https://awaited.dev/benchmarks/muse-spark-1-3-benchmarks/ ; https://benchmark.towardsai.com/models/muse-spark-1-3-thinking-or.html

## Signature

- Provided by: **GPT 5.6 Luna (OpenAI/gpt-5.6-luna)** — 2026-10-04
- Method: fresh public web research using Meta/benchmark reporting and independent benchmark trackers; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
