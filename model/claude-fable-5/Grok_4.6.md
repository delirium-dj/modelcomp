# Claude Fable 5 — findings by Grok 4.6

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic’s first public Mythos-class model for long-horizon agentic work and frontier coding. Shares weights with verified-access Claude Mythos 5, with extra public-safety guardrails and an Opus 4.8 fallback. Legacy as of Fable 5.1; still sold as `claude-fable-5`.
- **Provider / access:** Anthropic Messages / Claude API `claude-fable-5`; also Amazon Bedrock `anthropic.claude-fable-5`, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Adaptive thinking always on (default effort `high`). No verified OpenCode Zen Free ID found.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge / training-data cutoff January 2026. Retirement not sooner than 2026-06-09 + 1 year (2027-06-09).
- **IDs:** `claude-fable-5` (Claude API); no Free ID on Zen
- **Context window:** 1M tokens total, 128K max output (Anthropic model overview; same 1M window as Opus 4.8 per Artificial Analysis)
- **Modalities:** Text and images in → text out; adaptive reasoning; tool calling (programmatic tools, code execution, memory tool, compaction, vision). No official native audio/video I/O.
- **Pricing (as of 2026-10-09):** $10 / $50 per 1M input/output; 5m cache write $12.50, 1h cache write $20, cache read $1; Batch API 50% off. Paid; no $0 tier found.
- **Architecture:** Proprietary (closed weights). Same underlying model as Claude Mythos 5.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1932 Elo** (Artificial Analysis pre-release eval, adaptive max effort, Opus 4.8 fallback; #1 at launch; fallback on ~2% of GDPval-AA tasks)
- Terminal-Bench Hard: **62.9%** (Artificial Analysis / BenchmarkList; #1 of 326 at listing)
- Terminal-Bench 2.1: **84.6%** (BenchmarkList); **88.0%** best-reported harness (BenchmarkList)
- Terminal-Bench 3.0: **34.1%** (BenchmarkList; rank 3/20)
- Terminal-Bench 4.0: **42.4%** (BenchmarkList; rank 8/29)
- Tau2-Bench Telecom: **98.5%** (BenchmarkList; rank 3/332)
- Tau3-Banking: **38.1%** (BenchmarkList; rank 22/176)
- Toolathlon: **77.9%** (BenchmarkList; rank 5/41)
- MCP Atlas: **84.7%** (BenchmarkList; rank 7/48)
- ClawEval-MM: **81.2%** (BenchmarkList; rank 1/12)
- OSWorld-Verified: **86.0%** (BenchmarkList)
- AutomationBench: **68.7%** (BenchmarkList; note: Anthropic consumer page reports Fable 5 scored **0** on AutomationBench when production safeguards intervened)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (BenchmarkList; 97th percentile); **92.6%** on a second listing row
- HLE: **53%** (Artificial Analysis, with ~9% HLE tasks falling back to Opus 4.8); aggregator **63.8%** / tools **64.5%** (BenchmarkList — harness mix, not treated as AA-identical)
- Artificial Analysis Intelligence Index: **64.9** at launch (#1, 2026-06-09 article); later **50** on Index v4.3.2 with fallback (AA model page / v4.3 announcement, behind Fable 5.1 at 53)
- AA-Omniscience: **40** at launch (AA article); **43.3** (BenchmarkList AA-Omniscience row)
- AA-LCR: **82.3%** (BenchmarkList; rank 23/408)
- CritPt: no verified public score found as a standalone published number (present in Index v4.3 mix only)

Coding:

- SWE-bench Verified: **95.0%** (BenchmarkList; Anthropic/launch coverage)
- SWE-bench Pro: **80.4%** (BenchmarkList); **80.3%** in Anthropic-attributed launch coverage (SiliconReport notes vendor harness, not AA-listed)
- LiveCodeBench: **89.8%** (BenchmarkList)
- SciCode: **61.0%** (BenchmarkList)
- DeepSWE: **70.0%** (BenchmarkList)
- Vibe Code Bench v1.1: **90.4%** (BenchmarkList)
- SWE Atlas Codebase QnA: **39.0%** (BenchmarkList)
- Artificial Analysis Coding Agent Index: **77.2** (BenchmarkList)

Long context:

- AA-LCR **82.3%** at the 1M window (BenchmarkList). No verified MRCR ≥98% at 512K+ found for this exact ID.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA 1932 Elo and Terminal-Bench Hard 62.9% sit at the AA launch frontier; Tau2 Telecom 98.5% and Toolathlon 77.9% match. Capped by Tau3-Banking 38.1% (below the ~50% frontier ref) and TB 3.0/4.0 mid-30s–40s plus safeguard zeros on some computer-use evals.
- **Reasoning: 93/100.** GPQA Diamond ~93% and launch Index 64.9 / HLE 53% (AA) are frontier-class. Capped by later Index v4.3.2 at 50, ~8–9% scientific-task fallback to Opus 4.8, and HLE harness spread (53% vs aggregator 63.8%).
- **Context window: 96/100.** Official 1M / 128K out maps to the 95–100 tier; AA-LCR 82.3% is strong but not the ≥98% retrieval-at-512K+ bar for a 100.
- **Multimodal: 68/100.** Official I/O is image-in / text-out (60–70 band) with strong vision-arena / MMMU-Pro numbers. Capped by no native audio or video I/O on the model card.
- **Coding: 95/100.** SWE-bench Verified 95.0%, SWE-Pro ~80%, LiveCodeBench 89.8%, SciCode 61%, Vibe 90.4% sit at or above frontier refs. Capped by DeepSWE 70% (below the 74%+ ref) and SWE Atlas Codebase QnA 39%.
- **Cost efficiency: 30/100.** Paid $10 / $50 per 1M matches the methodology’s ~$10/$50 ≈ 30 band; cache reads at $1 help agents but do not change the evaluated list price.
- **Overall Score: 89/100.** Mean of 94, 93, 96, 68, 95 = 89.2 → 89. Best-fit: paid long-horizon coding/agent work when image-in is enough; migrate to Fable 5.1 for the current Fable stack, or a cheaper Opus/Sonnet line if the $10/$50 bill is the constraint.

---

## Signature

- Provided by: **Grok 4.6 (xai/grok-4.6)** — 2026-10-09
- Method: public internet research (Anthropic docs, Artificial Analysis, BenchmarkList, secondary launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
