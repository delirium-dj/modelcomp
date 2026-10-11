# Claude Sonnet 5 — findings by Kimi K3

- Source: Anthropic / Claude Sonnet 5 (`claude-sonnet-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's mid-tier Sonnet of the Claude 5 generation — balanced coding/agentic model with a strong CharXiv chart-understanding score and first-rate hallucination control for the price class.
- **Provider / access:** Claude API (`claude-sonnet-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** Released 2026-06-30 (OpenCode Data, newly verified — my 2026-09-24 pass had "exact date not verified"); knowledge cutoff 2026-01-31 (OpenCode Data, new).
- **IDs:** `anthropic/claude-sonnet-5` (catalog-listed on OpenCode Data; no Free-tier ID verified on Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; CharXiv, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2/M input, $10/M output, cached input $0.20/M, cache write $2.50/M (OpenCode Data catalog — verified now; classic Sonnet-tier below Opus's $5/$25).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (official anthropic.com/news/claude-sonnet-5 via OpenCode Data; matches benchlm.ai; Vals 74.5%); Terminal-Bench 3.0: **14.6%**
- GDPval-AA: **1603 Elo** (47.5% normalized) (benchlm.ai)
- BrowseComp: **84.7%** (official; matches benchlm.ai); OSWorld-Verified: **81.2%** (official; matches benchlm.ai); HLE w/ tools: **57.4%** (benchlm.ai)
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

- SWE-bench Verified: **85.2%** (official anthropic.com/news/claude-sonnet-5 via OpenCode Data; matches benchlm.ai); SWE-bench Pro: **63.2%** (official; matches); SWE Multilingual: **78.3%** (official; matches); SWE Multimodal: **28.1%**; SWE-bench (Vals): **79.6%** (benchlm.ai)
- FrontierCode (pass rate): **38.8%** (official page via OpenCode Data — new this pass)
- LiveCodeBench (Vals): **82.4%** (benchlm.ai)
- AA-SciCode: **54.3%**; AA Coding Index: **71.5** (benchlm.ai)
- CursorBench 3.2: **61.5%** / 4.0: **34.1%**; VulcanBench CII: **89.2%**; Terminal-Bench 2.1: **80.4%** (benchlm.ai)

Long context:

- AA-LCR 82.0% at the 1M window (benchlm.ai); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **88.3%** (tools); 77.0% (no tools); AA-MMMU-Pro: **77.3%**; Design Arena Website: **1286 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 83/100.** Unchanged: TB 2.1 80.4%, OSWorld-Verified 81.2%, BrowseComp 84.7% (all official-confirmed), GDPval-AA 1603; capped by TB 3.0 14.6% and ApprenticeBench 16%.
- **Reasoning: 81/100.** Unchanged: HLE 57.4% w/ tools, GPQA 91.1%, LCR 82.0%, best-in-tier hallucination control (39.4%); capped by CritPt 16.9% and AA Index 38.2.
- **Context window: 86/100.** Unchanged: 1M window with LCR 82.0%; 128K output now verified; capped by missing max-window retrieval probes.
- **Multimodal: 82/100.** Unchanged: CharXiv 88.3% excellent; MMMU-Pro 77.3%; text-only output caps it.
- **Coding: 84/100.** Unchanged: SWE-bench Verified 85.2% (official-confirmed), LiveCodeBench 82.4%, VulcanBench CII 89.2%; capped by SWE Multimodal 28.1% and CursorBench 4.0 34.1%.
- **Cost efficiency: 72/100.** Verified now: $2/$10 with $0.20 cached reads — textbook Sonnet-tier value, held by the same band as provisionally scored.
- **Overall Score: 83/100.** Mean of the five quality dims (83+81+86+82+84)/5 = 83.2 → 83. Best fit: high-volume coding/agentic work where Opus-class cost is unjustified; the sensible Claude default for most teams.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official anthropic.com/news/claude-sonnet-5 table transcribed by OpenCode Data `anthropic/claude-sonnet-5` incl. pricing/release facts; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date (2026-06-30), cutoff (2026-01-31), 128K max output and $2/$10 pricing; added the official FrontierCode row. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
