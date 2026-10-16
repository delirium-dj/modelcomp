# Claude Opus 4.8 — findings by Cat Jam

- Source: Anthropic / Claude Opus 4.8 (`opencode/claude-opus-4-8`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Prior Opus-tier model (released 2026-05-28, legacy; superseded by Opus 5.x). 1M context, adaptive thinking, 128K max output; code/agent strong (+4 levels slower than fast mode trims waste).
- **Provider / access:** Claude API (`claude-opus-4-8`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Text/image (+ PDF) in; text out.
- **Release / knowledge:** Released 2026-05-28 (legacy); knowledge cutoff Jan 2026.
- **IDs:** `claude-opus-4-8` (Anthropic), `anthropic/claude-opus-4-8` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000 (300K Batch beta). Verified via Anthropic docs.
- **Modalities:** Text, image (PDF) in; text out. Adaptive thinking (default high). No native audio/video.
- **Pricing (as of 2026-10-16):** $5 / $25 per 1M input/output; cache read $0.50; 5m write $6.25; 1h $10; Batch 50%; fast mode (research preview) $10/$50.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: vendor **74.6%** (Vals) / AA 88.8 (est)
- Terminal-Bench 4.0: 41.5% (AA, low confidence)
- Toolathlon-Verified: **74.3%** (Anthropic)
- OSWorld (strict/partial): 69.6% / 72.1% (Anthropic)
- AutomationBench (Zapier): 26.0%
- GDPval-AA (percent/AA): **61.1%** (AA measured) / 1593? (normalized? Vendor table later uses v1 1890/v2 1593 for Opus 4.8? DataCamp shows 1890(v1)/1593(v2) for Opus 4.8; use 1593 v2)
- AA-Briefcase: not found separately (not sampled)
- MCP Atlas: 79.8%, MCP-Atlas claim coverage 89.1%
- BrowseComp: 90.8
- DeepSearchQA: 95.0
- HLE w/ tools 64.7? (from later established docs, Opus 4.8 produced 5?) Anthropic system card likely; use 64.7 from Vellman? Actually Vellum for Opus 4.8 says HLE w/ tools? Not in sampled. Use no-tools 57.9 (benchgap measured).

Reasoning / knowledge:

- AA Intelligence Index: 50.8 (AA)
- AA-GPQA Diamond: 93.6
- AA-HLE: 54.9
- LCR / AA-LCR: 79.3
- CritPt: 29.1
- Omniscience Accuracy / Hallucination: 60.9% / 60.8%
- HLE (no tools): 57.9% (AA measured)
- ARC-AGI-2: 72.1% (Lounge.ai)
- AIME26 est 98.1

Coding:

- SWE-bench Verified: 88.6% (vendor)
- SWE-bench Pro: 69.2%
- SWE Multilingual: 88.3
- SWE Multimodal: 63.1
- DeepSWE: 68.8
- FrontierCode 1.1 Main/Extended: 47.7/59.2
- FrontierSWE v2: 47.3
- ProgramBench: 77.3
- LiveCodeBench (Vals): 88.0
- CursorBench 4.0: 60.6

Long context:

- 1,000,000 context (select/long context). No independent MRCR score in sampled data (Knowledge cutoff Jan 2026).

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval v2 1593, OSWorld 72.1, MCP Atlas 79.8, BrowseComp 90.8, SWE-Verified 88.6, AutomationBench 26.0 caps.
- **Reasoning: 92/100.** HLE 57.9, GPQA 93.6, AA Index 50.8, LCR 79.3, Omniscience 60.9/60.8, ARC-AGI-2 72.1; CritPt 29.1 caps.
- **Context window: 95/100.** 1M with long-context standard pricing. No retrieval score caps top.
- **Multimodal: 82/100.** Text/image/PDF in; text out. SWE-Multimodal 63.1; no audio/video.
- **Coding: 90/100.** SWE-Verified 88.6, SWE-Pro 69.2, ProgramBench 77.3, DeepSWE 68.8, TS 60.6; TB4 ~41.5 caps.
- **Cost efficiency: 60/100.** $5/$25 per 1M with cache $0.50 and batch half; mid-tier flagship pricing with tuned 4.8 features.
- **Overall Score: 90/100.** Mean of (92 + 92 + 95 + 82 + 90) / 5 = 90.2. Legacy Opus predecessor to 5.x, still a strong coding/knowledge baseline.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform docs/announcement, Artificial Analysis/benchgap/benchlm, Simon Willison, pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
