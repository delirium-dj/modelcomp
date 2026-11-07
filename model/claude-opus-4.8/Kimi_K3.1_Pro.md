# Claude Opus 4.8 — findings by Kimi K3.1 Pro

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's adaptive-reasoning model for agentic coding, computer use, and professional knowledge work. It improved on Opus 4.7 at launch and is now an active legacy model rather than the recommended current Opus release.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS; also exposed through third-party gateways. Anthropic lists it as active (legacy), while Artificial Analysis labels its own benchmark entry deprecated and tests it less frequently.
- **Release / knowledge:** Released 2026-05-28; reliable knowledge and training-data cutoffs are January 2026. Official retirement is not sooner than 2027-05-28 on Anthropic-operated platforms.
- **IDs:** Claude API `claude-opus-4-8`; Amazon Bedrock `anthropic.claude-opus-4-8`; Google Cloud, Microsoft Foundry, and Claude Platform on AWS use `claude-opus-4-8`. OpenRouter uses `anthropic/claude-opus-4.8`.
- **Context window:** 1M tokens; 128K maximum synchronous output. Message Batches support up to 300K output with the `output-300k-2026-03-24` beta header.
- **Modalities:** Text and image input; text output. Adaptive thinking with default `high` effort; `xhigh` and `max` are documented for harder or longer-running work. Tool use, vision, multilingual operation, and Claude Code dynamic workflows are supported.
- **Pricing (as of 2026-11-07):** Standard $5 input / $25 output per million tokens; five-minute cache writes $6.25, one-hour writes $10, cache reads $0.50, and Batch API 50% off input/output. Fast mode is $10/$50 and advertised at 2.5× speed; it is a separate serving mode, not a distinct model.
- **Architecture:** Proprietary; parameter count and detailed architecture are undisclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **83.4%** (Anthropic launch table; Anthropic revised its evaluation procedure for this release).
- Online-Mind2Web: **84.0%** (BrowserBase early-tester result quoted by Anthropic).
- BrowseComp: **84.3% single-agent** and **88.5% multi-agent** (Anthropic launch results).
- GDPval-AA: **1,890 Elo**, max effort, at launch (Artificial Analysis independent measurement; approximately 67% implied win rate against GPT-5.5 xhigh in that run).
- MCP Atlas: **82.2%** (Scale AI published-board record via Benchmark Heaven).
- Toolathlon-Verified: **76.2%** on the 2026-06-30 set; MCPMark Verified: **76.4%** (independent published-board records via Benchmark Heaven).
- τ²-Bench Telecom: **94.4%**; τ³-Banking: **34.2%**; AutomationBench-AA v1.0.6: **45.6%**; EnterpriseOps-Gym-AA: **44.0%** (Artificial Analysis records via Benchmark Heaven).
- Scale HiL-Bench: **35.33 ± 5.57**, tied for 23rd on the fetched leaderboard (independent common-harness evaluation of asking for help and completing blocked tasks).
- Finance Agent v2: **53.9%** (Anthropic launch result; also present in the Vals Index v2 record via Benchmark Heaven).
- Vals Index v2: **60.9%**, with a published **$12.67 cost per test** (independent aggregate via Benchmark Heaven).

Reasoning / knowledge:

- GPQA Diamond: **93.6%** in Anthropic's launch table versus **92.0%** in Artificial Analysis and **91.0%** in Epoch AI's Inspect run. Different harnesses/runs are preserved rather than averaged.
- Humanity's Last Exam: **49.8% without tools** and **57.9% with tools** in Anthropic's launch table; Artificial Analysis separately reports **48.7% on its text-only subset**.
- USAMO 2026: **96.7%** (Anthropic launch result).
- CritPt: **20.9%** with Python, symbolic, and numerical answers (Artificial Analysis record via Benchmark Heaven).
- AA-Omniscience: **27.4 index points**, **46.6% accuracy**, and **35.9% hallucination rate** in Artificial Analysis's launch article; a later source-labeled record reports **28.8 index points**. These snapshots are not blended.
- Artificial Analysis Intelligence Index: **61.4 at launch**, then leader on the pre-v4.1 ten-evaluation scale; **42 on v4.3.2** in a 2026-09-24 snapshot transcribed by Fello AI. The current v5.0.1 model page shows **N/A**, not a measured current score. None of these values is directly comparable across index versions.
- FrontierMath v2: **56.1% Tier 4** and **80.0% Tiers 1–3** (Epoch AI private-set runs via Benchmark Heaven); AIME 2026: **100%** (MathArena record via Benchmark Heaven).
- SimpleQA Verified: **53.0%** (Epoch AI run via Benchmark Heaven).

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench Pro: **69.2%**; SWE-bench Multilingual: **84.4%** (Anthropic launch/self-reported results).
- Terminal-Bench 2.1: **74.6%** in Anthropic's Terminus-2 launch run versus **84.6%** in Artificial Analysis's later v2.1/Terminus-2 record. Artificial Analysis also reports **58.3% on its pinned 44-task Hard subset**.
- Terminal-Bench 4.0: **21.7%** in Artificial Analysis's mini-SWE-agent v2.4.6 run versus **23.6%** in the Claude Code developer-claim record; these are different harnesses from Terminal-Bench 2.1.
- DeepSWE: **59.0%** with mini-SWE-agent (Datacurve via Epoch AI/Benchmark Heaven).
- SciCode: **54.4%** on Artificial Analysis's subproblem protocol (via Benchmark Heaven).
- Artificial Analysis Coding Agent Index v1.4: **62.1%** with Claude Code; frozen AA Coding Index v4.x: **74.3** on 2026-10-27. These composites are version-specific and are not averaged.
- Vibe Code Bench: **82.7%**; Code Migration: **46.9%** (Vals Index v2 records via Benchmark Heaven).
- SWE-bench Multimodal: **38.4%** (Anthropic self-reported result via Benchmark Heaven).

Long context:

- AA-LCR v1.1: **77.7%**; MLCR-AA: **45.6%** (Artificial Analysis records via Benchmark Heaven).
- Context Arena MRCR v2, eight-needle: **90.5%**, averaged over 8K–128K contexts (published-board record via Benchmark Heaven). This does not independently validate retrieval across the full 1M window.
- GDP.pdf: **22.8%** in Artificial Analysis's long-document evaluation (via Benchmark Heaven).

Multimodal:

- SWE-bench Multimodal: **38.4%** (Anthropic self-reported).
- Chartography: **15.9%** on the 100-task professional-chart set; Furniture Assembly Benchmark: **42.5%** (independent published-board records via Benchmark Heaven).
- A separate 100-task GDP.pdf record reports **24.0%**, close to but not silently merged with Artificial Analysis's **22.8%** record.
- No exact-model audio or video capability is documented; the verified surface is text/image input and text output.

Operational measurements:

- Artificial Analysis currently reports **85 output tokens/s** and **42.50 seconds to first answer token** on Anthropic's API. The launch analysis measured approximately **110M output tokens** over the then-current Intelligence Index and a **$4,685.85 total evaluation cost**; these historical harness measurements are not permanent specifications.

### Normalized scores (1–100)

> Overall = half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding. Cost efficiency is excluded.

- **Tool use: 93/100.** OSWorld 83.4%, strong browsing, MCP Atlas 82.2%, and GDPval-AA leadership at launch demonstrate excellent agency; τ³-Banking 34.2%, AutomationBench 45.6%, and HiL-Bench 35.33 reveal substantial reliability gaps in constrained or ambiguous workflows.
- **Reasoning: 92/100.** Strong HLE, GPQA, USAMO, and FrontierMath results support frontier reasoning; CritPt 20.9%, SimpleQA 53.0%, and material harness/version variation prevent a higher score.
- **Context window: 93/100.** A verified 1M window, 128K synchronous/300K batch output, AA-LCR 77.7%, and MRCR 90.5% are strong; MLCR 45.6%, weak long-PDF results, and no independent full-window retrieval measurement cap it.
- **Multimodal: 82/100.** Image input and useful document/GUI workflows are verified, but text-only output, no audio/video input, SWE-bench Multimodal 38.4%, and weak professional-chart results keep it below broader multimodal leaders.
- **Coding: 92/100.** SWE-bench Verified 88.6%, Pro 69.2%, and Multilingual 84.4% are excellent launch results; independent DeepSWE 59.0%, Terminal-Bench 4.0 21.7%, and Code Migration 46.9% show that performance is highly task- and harness-dependent.
- **Cost efficiency: 54/100.** Cache reads and half-price Batch help, but $5/$25 base pricing, doubled fast-mode rates, verbose max-effort runs, and cheaper newer successors make standard deployment expensive.
- **Overall Score: 90.4/100.** Half-up mean of 93, 92, 93, 82, and 92; best fit for pinned legacy deployments requiring strong agentic coding, computer use, and professional reasoning, while new cost-sensitive projects should compare current successors.

---

## Signature

- Provided by: **Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)** — 2026-11-07
- Method: Fresh public internet research across Anthropic's official launch, model reference, and system-card materials; Artificial Analysis; Scale; Vals; Epoch/MathArena and other published-board records transcribed by Benchmark Heaven; and an independent launch-table transcription. Scores are normalized 1–100 interpretations, not official vendor scores. Exact `claude-opus-4-8` evidence is kept separate from Opus 4.7, Opus 5, and later Claude models; index versions, efforts, and harnesses are preserved rather than blended.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Platform — Opus 4.8 model reference](https://platform.claude.com/docs/en/models/opus-4-8/overview)
  - [Claude Platform — Models overview](https://platform.claude.com/docs/en/models/overview)
  - [Anthropic — Claude Opus 4.8 System Card](https://www-cdn.anthropic.com/0b4915911bb0d19eca5b5ee635c80fef830a37ea.pdf)
  - [Artificial Analysis — Opus 4.8 launch analysis](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks)
  - [Artificial Analysis — Opus 4.8 current model page](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Artificial Analysis — Intelligence Index methodology](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Benchmark Heaven — Opus 4.8 source-labeled benchmark records](https://benchmarkheaven.com/models/claude-opus-4.8%3A%3Amax)
  - [Scale Labs — HiL-Bench](https://labs.scale.com/leaderboard/hil)
  - [Vals AI — SWE-bench Verified methodology](https://www.vals.ai/benchmarks/swebench)
  - [Fello AI — independent Opus 4.8 launch-table transcription](https://felloai.com/anthropic-claude-opus-4-8/)
  - [OpenRouter — Claude Opus 4.8](https://openrouter.ai/anthropic/claude-opus-4.8)
- Future sources: add a new file next to this one using the same headings; do not overwrite this report.
