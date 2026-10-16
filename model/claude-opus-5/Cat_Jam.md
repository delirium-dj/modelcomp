# Claude Opus 5 — findings by Cat Jam

- Source: Anthropic / Claude Opus 5 (`opencode/claude-opus-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's previous Opus-tier flagship (now legacy; superseded by Opus 5.5). Frontier model for long-horizon coding, knowledge work, and computer use; released July 24, 2026.
- **Provider / access:** Claude API (`claude-opus-5`), AWS Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Adaptive thinking; text and image in, text out.
- **Release / knowledge:** Released 2026-07-24 (legacy; retirement not before 2027-07-24); knowledge cutoff May 2026.
- **IDs:** `claude-opus-5` (Anthropic), `anthropic/claude-opus-5` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000 (300K via Batch API beta). Verified via Anthropic docs.
- **Modalities:** Text, image in; text out. Function calling, PDFs (vision), prompt caching. No native audio/video.
- **Pricing (as of 2026-10-16):** $5 / $25 per 1M input/output; cache read $0.50; 5m cache write $6.25; 1h $10; Batch API 50%.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 (Opus 5 max): **1861** Elo (AA) — leader at release
- AA-Briefcase v1.1: **1720** Elo (AA)
- OSWorld 2.0: **70.6%** (Anthropic)
- MCP Atlas: **85.8%** (Anthropic)
- BrowseComp: **90.8%** (Anthropic)
- SWE-bench Verified (Vals harness): **97.0%** (Vals)
- AutomationBench: **26.0%** (Anthropic)
- Terminal-Bench 2.1: **84.6%** (Vals) / AA TB2 88.8%

Reasoning / knowledge:

- AA Intelligence Index: **50.8** (AA)
- HLE w/ tools: **64.7%**; w/o tools 56.3% (Anthropic)
- GPQA Diamond (Vals): **93.4%**; AA-GPQA 93.2%
- AA-LCR v1.1: **79.3%**
- CritPt: **29.1%** (AA)
- Omniscience Accuracy / Hallucination: **60.9% / 60.8%**
- BrowseComp: 90.8%
- Terminal-Bench-Science? not reported; HLE-Verified maybe? 54.4% measured (benchgap)
- ARC-AGI-2: **90.4%** (Anthropic/DataCamp comparison)

Coding:

- SWE-bench Verified: **96.0%** (Anthropic)
- SWE-bench Pro: **79.2%** (Anthropic)
- SWE Multilingual: **89.5%**
- SWE Multimodal: **59.4%**
- DeepSWE v1.1: **68.8%** (Anthropic)
- ProgramBench: **93.0%** (ep 1: 83.0%)
- Terminal-Bench 2.1: **84.6%** (Vals)
- FrontierCode 1.1 Main/Extended: **53.4% / 63.6%**
- LiveCodeBench (Vals): **89.0%**
- Vals SWE-bench: 97.0%

Long context:

- 1,000,000 context with preserved thinking. No independently published MRCR/RULER score in sampled data.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval 1861, OSWorld 70.6, MCP Atlas 85.8, BrowseComp 90.8, SWE-bench Verified 96; AutomationBench 26 slightly caps.
- **Reasoning: 92/100.** HLE 64.7 (w/ tools), GPQA 93.2, AA Index 50.8, LCR 79.3, Omniscience 60.9/60.8; CritPt 29.1 caps; ARC-AGI-2 90.4 supports.
- **Context window: 95/100.** Verified 1M.
- **Multimodal: 80/100.** Text/image in, text out. No audio/video input; vision strong but narrower than native-audio rivals.
- **Coding: 90/100.** SWE-bench Verified 96, SWE-Pro 79.2, ProgramBench 93, DeepSWE 68.8, FrontierCode 63.6, CursorBench 4.0 46.6 caps.
- **Cost efficiency: 60/100.** $5/$25 per 1M, batch 50%; cache read $0.50. Mid-tier between cheap Flash and premium frontier.
- **Overall Score: 90/100.** Mean of (94 + 92 + 95 + 80 + 90) / 5 = 90.2. Legacy Opus flagship; superseded but still strong knowledge/coding workhorse.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform docs/model page, Artificial Analysis, benchgap, benchlm, vals.ai, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
