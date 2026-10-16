# Claude Fable 5.1 — findings by Cat Jam

- Source: Anthropic / Claude Fable 5.1 (`opencode/claude-fable-5-1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's most capable generally available frontier model (released 2026-09-01) for long-horizon agentic coding, knowledge work, and research; aliases to Mythos 5.1 under trusted access; carries domain safeguards with server-side fallback.
- **Provider / access:** Claude API (`claude-fable-5-1`), AWS Bedrock, Google Cloud, Microsoft Foundry, Cloudflare. Adaptive thinking always on (default high); (text/image in; text out; all text watermarked).
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff Jun 2026; retirement not sooner than 2027-09-01.
- **IDs:** `claude-fable-5-1` (Anthropic), `anthropic/claude-fable-5-1` (OpenRouter)
- **Context window:** 1,000,000 tokens; max output 128,000. Verified via Anthropic docs.
- **Modalities:** Text, image in; text out. Vision over dense filings/charts. No native audio/video. Tool use via server-side tools.
- **Pricing (as of 2026-10-16):** $10 / $50 per 1M input/output; cache read $0.25 (75% discount vs Fable 5); cache write $12.50; Batch $5/$25. Premium flagship.
- **Architecture:** Proprietary; adaptive thinking; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.4%** (AA max)
- Terminal-Bench 4.0: **52.0–57.9%** (AA/official, max effort)
- Toolathlon-Verified: **77.8%**
- OSWorld 2.0: **41.7%** (strict, with safeguards)
- AutomationBench: **31.4%** (vendor)
- GDPval-AA v2: **62.7%** / 1754 Elo (AA)
- AA-Briefcase v1.1: **1674** Elo
- AA-Agentic Index (max): **58.0%**
- τ³-Banking: **47.2%** (AA)

Reasoning / knowledge:

- HLE (no tools / w/ tools): **60.9% / 65.0%** (vendor) / AA-HLE 59.1%
- AA Intelligence Index (max): **53.3/53.4** (AA)
- GPQA Diamond (AA): **93.7%**
- LCR / AA-LCR: **85.3%**
- CritPt: **29.7%**
- Omniscience Accuracy / Hallucination: **67.2% / 72.6%**
- ARC-AGI-2: **90%** (lounge.ai)
- BioMysteryBench: human-difficult 51.6% (?; benchgap est)
- SWE-bench Verified (no vendor figure; est ~94.4)

Coding:

- SWE-bench Pro: **81.2%** (vendor max, avg 5 trials)
- DeepSWE v1.1: **67.4%** (vendor)
- ProgramBench: **87.6%**
- FrontierCode 1.1? FrontierSWE v2 56.3
- SciCode AA: **63.1%**
- Terminal-Bench-Science 0.1: **52.6%**
- LiveCodeBench (Vals): 90.5%
- AA Coding Agent Index (max): **62.2%**

Long context:

- 1,000,000 context with adaptive thinking. MRCR/RULER official long-context retrieval not in sampled data beyond MRCRv2 est 86.0% (benchgap).

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 91.4, TB4 55.8, Toolathlon 77.8, OSWorld 41.7, AutomationBench 31.4, GDPval 62.7/1754; τ³ 47.2 caps. Strong agentic terminal/computer-use-leader-class.
- **Reasoning: 96/100.** HLE 60.9–65.0, GPQA 93.7, AA Index 53.4, LCR 85.3, ARC-AGI-2 90; CritPt 29.7 caps. Top-tier reasoning/science.
- **Context window: 95/100.** Verified 1M; MRCRv2 est 86% caps from perfect.
- **Multimodal: 80/100.** Text/image in, text out; strong vision; no audio/video. SWE-multimodal 54.7.
- **Coding: 94/100.** SWE-Pro 81.2, PatternBench 87.6, DeepSWE 67.4, SciCode 63.1, Coding Index 62.2; frontier-class but Astra/Opus 5.5 edge on verified SWE.
- **Cost efficiency: 40/100.** $10/$50 premium, no free tier; 75% cache-read discount gives an estimated 25–45% savings on agentic workloads. Batch halves to $5/$25.
- **Overall Score: 91/100.** Mean of (92 + 96 + 95 + 80 + 94) / 5 = 91.4. Frontier default for demanding agentic coding/knowledge work at premium pricing.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Anthropic platform/docs/system card, Artificial Analysis, benchgap, benchlm, tokensortowers, ai-model-timeline, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
