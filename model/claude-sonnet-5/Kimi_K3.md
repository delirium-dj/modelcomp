# Claude Sonnet 5 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's mid-tier Sonnet of the Claude 5 generation — balanced coding/agentic model with a strong CharXiv chart-understanding score and first-rate hallucination control for the price class. Now legacy: superseded by Claude Sonnet 5.5 (2026-09-28).
- **Provider / access:** Claude API (`claude-sonnet-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** Released 2026-06-30 (platform.claude.com docs); knowledge cutoff Jan 2026; retirement no sooner than 2027-06-30.
- **IDs:** `anthropic/claude-sonnet-5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens; max output 128K tokens (300K via Batch API `output-300k-2026-03-24` beta header) (platform.claude.com docs).
- **Modalities:** text/image in (CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $2/M input, $10/M output; cache reads $0.20/M; cache writes $2.50/M (5 min)/$4/M (1 h); Batch API 50% off (platform.claude.com docs).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (benchlm.ai; Vals 74.5%); Terminal-Bench 3.0: **14.6%**
- GDPval-AA: **1603 Elo** (47.5% normalized) (benchlm.ai)
- BrowseComp: **84.7%**; OSWorld-Verified: **81.2%**; HLE w/ tools: **57.4%** (benchlm.ai)
- AA Agentic Index: **44.3%**; AA-AnalystAgent: **46.3%**; ApprenticeBench: **16%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA); 88.9% (Vals) (benchlm.ai)
- HLE: **57.4%** (w/ tools); 43.2% (no tools); 31.0% (HLE-Verified); AA-HLE 41.3% (benchlm.ai)
- AA-LCR: **82.0%**; MLCR-AA: **55.0%**; CritPt: **16.9%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **38.2**; BenchLM overall **67.01/100, #20 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **40.1% / 39.4%** — notably low hallucination for the tier (benchlm.ai)
- LABBench2: **80.1%**; MMLU-Pro (Vals): **87.5%** (benchlm.ai)

Coding:

- SWE-bench Verified: **85.2%**; SWE-bench Pro: **63.2%**; SWE Multilingual: **78.3%**; SWE Multimodal: **28.1%**; SWE-bench (Vals): **79.6%** (benchlm.ai)
- LiveCodeBench (Vals): **82.4%** (benchlm.ai)
- AA-SciCode: **54.3%**; AA Coding Index: **71.5** (benchlm.ai)
- CursorBench 3.2: **61.5%** / 4.0: **34.1%**; VulcanBench CII: **89.2%**; Terminal-Bench 2.1: **80.4%** (benchlm.ai)

Long context:

- AA-LCR 82.0% at the 1M window (benchlm.ai); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **88.3%** (tools); 77.0% (no tools); AA-MMMU-Pro: **77.3%**; Design Arena Website: **1286 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 83/100.** TB 2.1 80.4%, OSWorld-Verified 81.2%, BrowseComp 84.7%, GDPval-AA 1603; capped by TB 3.0 14.6% and ApprenticeBench 16%.
- **Reasoning: 81/100.** HLE 57.4% w/ tools, GPQA 91.1%, LCR 82.0%, best-in-tier hallucination control (39.4%); capped by CritPt 16.9% and AA Index 38.2.
- **Context window: 86/100.** 1M window with LCR 82.0%; capped by missing max-window retrieval probes.
- **Multimodal: 82/100.** CharXiv 88.3% is excellent; MMMU-Pro 77.3%; text-only output caps it.
- **Coding: 84/100.** SWE-bench Verified 85.2%, LiveCodeBench 82.4%, VulcanBench CII 89.2%, Coding Index 71.5; capped by SWE Multimodal 28.1% and CursorBench 4.0 34.1%.
- **Cost efficiency: 72/100.** Verified $2/$10 per 1M (band ~70s) with $0.20 cache reads — the cheapest 1M-context Claude 5 family model; strong value.
- **Overall Score: 83/100.** Mean of the five quality dims (83+81+86+82+84)/5 = 83.2 → 83. Best fit: high-volume coding/agentic work where Opus-class cost is unjustified; the sensible Claude default for most teams.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release date confirmed (2026-06-30), Jan 2026 cutoff, 128K max output (300K Batch beta), and pricing ($2/$10, cache reads $0.20, batch 50% off) now verified via platform.claude.com docs; noted supersession by Claude Sonnet 5.5 (2026-09-28); scores unchanged (cost justification de-provisionalized).
- Future sources: add a new file next to this one using the same headings.
