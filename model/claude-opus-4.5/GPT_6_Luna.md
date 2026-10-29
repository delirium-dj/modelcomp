# Claude Opus 4.5 — findings by GPT-6 Luna

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's proprietary frontier model for software engineering, agentic tasks, and computer use. Extended thinking is optional; the API's `effort` setting controls how much reasoning the model uses.
- **Provider / access:** Anthropic Claude API, Amazon Bedrock, Google Cloud, and Microsoft Foundry; also available through Claude apps and Claude Code. Model weights are not public.
- **Release / knowledge:** Released **November 24, 2025**. Anthropic documents a reliable knowledge cutoff of **May 2025** and a training-data cutoff of **August 2025**.
- **IDs:** Pinned Claude API snapshot `claude-opus-4-5-20251101`; API alias `claude-opus-4-5`. Cloud platform IDs vary; for example, Bedrock uses `anthropic.claude-opus-4-5-20251101-v1:0`.
- **Context window:** **200K tokens**, up to **64K output tokens** for synchronous Messages API requests. These are documented model limits, not evidence of reliable retrieval at the full window.
- **Modalities:** Text and image input; text output. Supports extended thinking, tool calls, and computer use. No audio or video input verified.
- **Pricing (as of 2026-10-29):** First-party API per 1M tokens: **$5 input / $25 output**; **$0.50 cache read**, **$6.25 5-minute cache write**, **$10 1-hour cache write**. Batch API input/output is 50% off. Partner-cloud prices may differ.
- **Architecture:** Proprietary closed-weight model; parameter count and architecture are undisclosed.

### Raw benchmarks found

Three independent public searches were followed by checks of Anthropic's [November 24 release announcement](https://www.anthropic.com/news/claude-opus-4-5), the exact [model overview and API specification](https://platform.claude.com/docs/en/models/opus-4-5/overview), [current first-party pricing](https://platform.claude.com/docs/en/about-claude/pricing), and Anthropic's [system card (PDF)](https://www.anthropic.com/claude-opus-4-5-system-card). The system card was updated through **December 5, 2025**. Results below are vendor-reported unless marked as an independent evaluation; modes, budgets, trial counts, and harnesses are retained.

Agent / tool use:

- Terminal-Bench **2.0: 59.3%** with a 128K thinking budget (57.76% with a 64K budget), using Terminus-2 in Harbor; the 128K result used 1,335 trials. This is not Terminal-Bench 2.1.
- τ²-Bench: Retail **88.9%**, Telecom **98.2%**. The original Airline score is **70.1%**; Anthropic's corrected Airline variant is **87.8%** after changes to task setup/grading. The vendor cautions against treating Airline as a reliable cross-model comparison.
- OSWorld: **66.26%** (P@1, avg@5); MCP Atlas: **62.3%**. WebArena: **65.3%** using one policy model, general prompts, and the official grader; not directly comparable to multi-agent/site-specific systems.
- BrowseComp-Plus: **67.59%** with tool-result clearing and **72.89%** with clearing plus memory; adding a fetch tool and subagents raises reported results to **85.30%** in a separate internal configuration. Anthropic's internal multi-agent search evaluation reports **74.8%** single-agent, **87.0%** with Opus 4.5 orchestrating Haiku 4.5 subagents, and **92.3%** with Opus subagents; these are internal harness results.
- The benchmark transcription at [evals.report](https://evals.report/models/anthropic-claude-opus-4-5) lists GDPval at **1,452 Elo** (marked Official, dated Nov 24, 2025). It is a secondary transcription, not a score tabulated in the system card. No exact-model Tau3-Banking or Claw-Eval result verified.

Reasoning / knowledge:

- GPQA Diamond: **86.95%** (average of five trials); Humanity's Last Exam: **30.8%** in the reasoning-only, no-tools setup. Anthropic separately reports **43.2%** with search tools but without reasoning; this is not a same-mode comparison.
- ARC-AGI-2 Verified: **37.6%** with 64K thinking tokens on the ARC Prize Foundation's private validation set. Anthropic notes that Opus 4.5 had trained on the public ARC-AGI-1 data, but not specifically on ARC-AGI-2.
- AIME 2025: **92.77% without tools / 100% with Python tools**, averaged over five trials; Anthropic warns that benchmark contamination may have inflated the score.
- Independent Artificial Analysis results: Intelligence Index **70** (reasoning mode; #2 at the time of its Nov 25, 2025 analysis) and CritPt **5%**. Index results are that evaluator's measurements, not Anthropic scores.

Coding:

- SWE-bench Verified: **80.9% without extended thinking / 80.6% with a 64K thinking budget**, five trials. SWE-bench Pro: **52.0% / 51.6%**; SWE-bench Multilingual: **76.2%**. Anthropic used its own evaluation framework; Verified was run with thinking off and 200K context.
- Terminal-Bench 2.0: **59.3%** at 128K thinking budget / **57.76%** at 64K, as above. No exact-model DeepSWE or Terminal-Bench 2.1 result verified.
- The launch system card says its main capability-table results average five trials, use 64K thinking tokens and a 200K context, except where noted. Evals.report records lower launch-day transcriptions for SWE-bench Verified (**76.7%**), Pro (**45.89%**), Multilingual (**70.7%**), GPQA Diamond (**86.0%**), and HLE (**25.8%**), with those entries marked Official and dated Nov 24. The later, detailed Anthropic system card gives the settings and values listed above; the public records do not explain the differences, so they are retained here rather than silently combined.

Multimodal / vision:

- Anthropic's system card reports MMMU validation at **80.72%**. LAB-Bench FigQA is **54.9%** without tools/reasoning and **69.2%** with an image-crop tool and a 32,768-token reasoning budget.
- Official docs specify text-and-image input and text output. No video/audio capability or benchmark verified.

Long context:

- The documented context is 200K. Anthropic's card does not publish MRCR, RULER, or an equivalent 512K+ retrieval result. BrowseComp-Plus's 1M total-token multi-context setup is a benchmark-specific agent harness, not an expanded native context window.

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong results include Terminal-Bench 2.0 at 59.3%, MCP Atlas at 62.3%, OSWorld at 66.26%, τ²-Bench Telecom at 98.2%, and WebArena at 65.3%; caps reflect TB 2.0 rather than 2.1, benchmark-specific harnesses, and the policy-loophole caveat on τ² Airline.
- **Reasoning: 91/100.** AA Intelligence Index 70, ARC-AGI-2 at 37.6%, and GPQA Diamond at 86.95% are strong; HLE is 30.8% without tools, GPQA is below the rubric's 90% frontier reference, and AIME's 100% Python-aided score has a contamination caveat.
- **Context window: 70/100.** The verified 200K limit maps to 70 in the rubric; no long-context retrieval result supports a higher tier.
- **Multimodal: 66/100.** Image input is documented and MMMU/FigQA results show image reasoning; output is text-only, with no video or audio support verified.
- **Coding: 92/100.** SWE-bench Verified reaches 80.9%, SWE-bench Pro 52.0%, and Terminal-Bench 2.0 reaches 59.3%; custom settings/version differences, and the lower separate launch-day SWE transcription, are retained as caveats.
- **Cost efficiency: 52/100.** The $5/$25 per-million base rates are expensive against the rubric's $3/$15 reference; cache reads and the 50% Batch API discount improve effective cost, and Anthropic reports strong token efficiency, but no universal task-cost advantage is assumed.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions (91, 91, 70, 66, 92 = 82.0), excluding cost; best suited to demanding coding, tool-use, and computer-use tasks where the 200K context and premium per-token price are acceptable.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public searches, the exact first-party Anthropic model documentation and system card, plus independent Artificial Analysis and evals.report benchmark pages. Scores are normalized 1–100 interpretations, not official vendor scores; conflicting launch transcriptions, benchmark modes, harnesses, and missing results are preserved.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
