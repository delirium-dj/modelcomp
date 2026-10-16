# Claude Opus 5.5 — findings by Cat Jam

- Source: Anthropic / Claude Opus 5.5 (`opencode/claude-opus-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's Opus-tier model for long-running agentic coding and knowledge work. Adaptive thinking always on (default medium), 1M context; ships with anti-distillation (preserved thinking) safeguards.
- **Provider / access:** Claude API (`claude-opus-5-5`), AWS Bedrock (`anthropic.claude-opus-5-5`), Google Cloud (`claude-opus-5-5`), Microsoft Foundry/Azure, Claude Platform on AWS. Responses/Messages APIs.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff Jun 2026; training data cutoff Jun 2026.
- **IDs:** `claude-opus-5-5` (Anthropic), `anthropic/claude-opus-5-5` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000 (300,000 via Batch API beta). Verified via Anthropic docs.
- **Modalities:** Text, image, PDF in; text out; vision; tool use; JSON mode; preserved thinking; no audio/video input.
- **Pricing (as of 2026-10-16):** $4 / $20 per 1M input/output; cache read $0.20; 5m cache write $5; 1h write $8; Batch API $2/$10. Fast mode $8/$40.
- **Architecture:** Proprietary closed-weight transformer; hybrid reasoning (adaptive thinking always on). No open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic vendor, xhigh) / AA 59.6% / Vals 65.15%
- GDPval-AA v2.1: **1866** (AA max) / 1846 (vendor) Elo — leader
- AutomationBench: **40.0%** (vendor) / AA 69.5% (AA-AutomationBench)
- CursorBench 4.0: **57.8%** (Cursor evals)
- FrontierCode 1.1 Main: **54.4%** (Anthropic)
- OSWorld: **81.8%** partial (vendor)
- TT-Bench 2.1: ~87.6% (benchlm)
- MCP/ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE w/ tools: **67.7%** (Anthropic) / w/o tools 64.4% / AA-HLE 61.4%
- AA Intelligence Index v4.3.2: **57.6** (AA measure); leaderboard top spot
- AA-GPQA Diamond: not officially published; benchgap estimate 96.2%
- SciCode: **66.9%** AA-SciCode / 66.1% SciCode
- CritPt: **31.7%** measured
- AA-LCR: **84.7%** measured
- AA-Omniscience Accuracy / Hallucination: **66.2% / 58.6%**
- AA-Briefcase: **1805** AA
- GDP.pdf: **26.2%**
- Terminal-Bench-Science 0.1: **58.7%**

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card, max effort)
- SWE Multilingual: **93.9%** (Anthropic)
- DeepSWE: **74.2%** (Anthropic)
- ProgramBench: **91.2%** (Anthropic)
- FrontierCode Extended: **63.6%**
- FrontierSWE v2: **62.3%**
- Bug Hunt Bench: 41.7 fixes
- LiveCodeBench: vendor not published (estimates ~90 Vals); no verified official score found

Long context:

- 1M context with preserved thinking blocks; compaction beta; task budgets (beta). MRCR/RULER official not published in collected data — no long-context retrieval score found beyond design docs.

### Normalized scores (1–100)

- **Tool use: 95/100.** GDPval-AA leader (1866 Elo), AutomationBench 40/69.5, OSWorld 81.8, CursorBench 57.8; TB4.0 66.4. Industry-leading agentic knowledge work. MRCR-style long-horizon tool use is strong.
- **Reasoning: 96/100.** HLE 64.4–67.7%, SciCode 66.9%, AA Index 57.6, LCR 85%, Omniscience 66%; CritPt 32 caps slightly. Consistently near-frontier reasoning.
- **Context window: 95/100.** Verified 1,000,000 tokens with preserved thinking and compaction. No independent MRCR number published caps from 100.
- **Multimodal: 80/100.** Text/image/PDF in; text out. Vision strong (charts/screenshots). No audio/video input, which caps multimodal breadth versus native-audio rivals.
- **Coding: 94/100.** SWE-bench Pro 89.9%, TB4.0 66.4%, DeepSWE 74.2%, ProgramBench 91.2%, SWE Multilingual 93.9%. Missing verified LiveCodeBench/verified SWE-bench lightly caps.
- **Cost efficiency: 80/100.** $4/$20 per 1M, cache read $0.20, batch $2/$10. ~40% cheaper to run than Opus 5; moderate value for Opus-tier paid API. No free tier.
- **Overall Score: 92/100.** Mean of (95 + 96 + 95 + 80 + 94) / 5 = 92.0. Best general-purpose coding/knowledge agent default at Opus tier price point.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public internet research (Anthropic platform/docs/system card, Artificial Analysis, benchlm, benchgap, Lounge.ai, Requesty, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
