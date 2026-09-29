# Claude Opus 4.8 — findings by Kimi K3

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's final Opus-4-generation flagship (released 2026-05-28) — an exceptionally well-rounded reasoning model (USAMO 96.7%, SWE-bench Verified 88.6%, GPQA Diamond 93.6%); now a legacy model behind Claude Opus 5 / 5.5.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS.
- **Release / knowledge:** released May 28, 2026 (Anthropic announcement); reliable knowledge cutoff Jan 2026, training data cutoff Jan 2026 (platform.claude.com model page).
- **IDs:** `claude-opus-4-8` (Claude API, pinned dateless snapshot; also Bedrock `anthropic.claude-opus-4-8`, Vertex/Foundry `claude-opus-4-8`). Status: Active (legacy); retirement not sooner than May 28, 2027.
- **Context window:** 1M tokens; max output 128K tokens (300K via Batch API beta header `output-300k-2026-03-24`) (platform.claude.com).
- **Modalities:** text/image in, text out; adaptive thinking (default effort `high`); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $5 / MTok input, $25 / MTok output (unchanged from Opus 4.7); optional 2.5× fast mode $10/$50 (Anthropic announcement + platform.claude.com pricing).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic launch, via llm-stats); Terminal-Bench 3.0: **21.1%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **94.4%** (benchlm.ai)
- GDPval-AA: **1890 Elo** (Anthropic launch, via llm-stats/codersera); benchlm.ai reports 1593 Elo on its own run
- MCP Atlas: **82.2%**; Toolathlon: **59.9%**; DeepSearchQA: **93.1%**; BrowseComp: **84.3%** (single-agent; 88.5% multi-agent); OSWorld-Verified: **83.4%** (updated harness); Finance Agent v2: **53.9%**; AA Agentic Index: **42.6%** (benchlm.ai; launch deltas via llm-stats)
- Claw-track: ResearchClawBench **21.1%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic launch, via llm-stats; AA 92.0%; Vals 92.4%)
- HLE: **57.9%** (w/ tools); 49.8% (no tools); AA-HLE 48.7% (benchlm.ai)
- AA-LCR: **77.7%**; CritPt: **20.9%** (benchlm.ai)
- ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **41.8**; BenchLM overall **70.46/100, #14 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **48.8% / 39.3%** (benchlm.ai)
- USAMO 2026: **96.7%**; FrontierMath v2 T1–3: **47.2%**, T4: **31.3%**; MMLU-Pro (Vals): **89.6%** (benchlm.ai)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic launch, via llm-stats); SWE-bench Pro: **69.2%**; SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (benchlm.ai)
- LiveCodeBench (Vals): **87.8%** (benchlm.ai)
- AA-SciCode: **54.4%**; AA Coding Index: **74.3** (benchlm.ai)
- CursorBench 3.2: **62.3%**; FrontierCode 1.1 Main: **46.5%** (benchlm.ai)

Long context:

- AA-LCR 77.7% at the 1M window (benchlm.ai); GraphWalks BFS: **68.1%** (1M) / **85.9%** (256K); GraphWalks Parents: **83.3%** (1M) / **99.3%** (256K) (Anthropic system card figures via llm-stats); no MRCR/RULER public score found.

Multimodal:

- CharXiv: **89.9%** (tools); 80.5% (no tools); ScreenSpot Pro: **87.9%**; OfficeQA Pro: **66.2%**; Design Arena Website: **1266 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 94.4%, MCP Atlas 82.2%, Terminal-Bench 2.1 74.6%, DeepSearchQA 93.1%, OSWorld-Verified 83.4%; capped by OSWorld 2.0 (20.6%) and TB 3.0 (21.1%).
- **Reasoning: 92/100.** USAMO 96.7%, GPQA Diamond 93.6%, HLE 57.9% (tools), ARC-AGI-2 72.1%; GPQA near the top of the 88–93 band; capped by CritPt 20.9% and ARC-AGI-3 1.5%.
- **Context window: 95/100.** 1M-token window (band floor 95) with usable but degraded retrieval at the edge (GraphWalks 1M 68.1–83.3%, LCR 77.7%).
- **Multimodal: 75/100.** CharXiv 89.9% + ScreenSpot Pro 87.9% is elite vision grounding, but image-in/text-out caps the band at ~75.
- **Coding: 90/100.** SWE-bench Verified 88.6% (above the 70–80% → 85–93 band midpoint), SWE-bench Pro 69.2%, LiveCodeBench 87.8%; capped by SWE Multimodal 38.4% and CursorBench 3.2 62.3%.
- **Cost efficiency: 45/100.** Verified $5/$25 per MTok → band ~45; fast mode doubles rate ($10/$50).
- **Overall Score: 87/100.** Mean of the five quality dims (85+92+95+75+90)/5 = 87.4 → 87. Best fit: proven, well-rounded Opus quality for teams not yet migrated to Opus 5.5 — nearly frontier capability at the old $5/$25 price until retirement (not sooner than 2027-05-28).

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (Anthropic announcement + platform.claude.com specs + benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified release 2026-05-28, $5/$25 pricing, 1M ctx / 128K out (300K batch beta), legacy status behind Opus 5.5 (retirement ≥ 2027-05-28); added GDPval 1890 Elo and GraphWalks figures; renormalized Reasoning/Context/Multimodal/Coding/Cost to band rules (was 86/84/85/86/58).
- Future sources: add a new file next to this one using the same headings.
