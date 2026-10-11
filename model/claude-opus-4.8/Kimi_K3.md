# Claude Opus 4.8 — findings by Kimi K3

- Source: Anthropic / Claude Opus 4.8 (`claude-opus-4-8`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's final Opus-4-generation flagship before Opus 5 — an exceptionally well-rounded reasoning model (USAMO 96.7%, SWE-bench Verified 88.6%) that remained a top-15 model into late 2026.
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** Released 2026-05-28 (OpenCode Data, newly verified — my 2026-09-24 pass had "exact date not verified"); knowledge cutoff 2026-01 (OpenCode Data, new).
- **IDs:** `anthropic/claude-opus-4-8` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; CharXiv, ScreenSpot Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $5/M input, $25/M output, cached input $0.50/M, cache write $6.25/M (OpenCode Data — verified now; equals Opus 5's list price, no post-succession discount at catalog level).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (official anthropic.com/news/claude-opus-4-8 via OpenCode Data; Vals 71.9%; benchlm.ai); Terminal-Bench 3.0: **21.1%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **94.4%** (benchlm.ai)
- GDPval-AA: **1593 Elo** (46.9% normalized) (benchlm.ai)
- MCP Atlas: **82.2%**; Toolathlon: **59.9%**; DeepSearchQA: **93.1%**; BrowseComp: **84.3%** (benchlm.ai)
- OSWorld-Verified: **83.4%** (official anthropic.com/news/claude-fable-5-mythos-5 cross-card via OpenCode Data; matches benchlm.ai; note OSWorld 2.0: 20.6%); Finance Agent v2: **53.9%**; AA Agentic Index: **42.6%** (benchlm.ai)
- Claw-track: ResearchClawBench **21.1%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (GPQA-D; AA 92.0%; Vals 92.4%) (benchlm.ai)
- HLE: **57.9%** w/ tools; **49.8%** no tools (official Fable-5/Mythos-5 launch cross-card via OpenCode Data; benchlm.ai agrees; AA-HLE 48.7%)
- AA-LCR: **77.7%**; CritPt: **20.9%** (benchlm.ai)
- ARC-AGI-2: **72.1%**; ARC-AGI-3: **1.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **41.8**; BenchLM overall **70.46/100, #14 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **48.8% / 39.3%** (benchlm.ai)
- USAMO 2026: **96.7%**; FrontierMath v2 T1–3: **47.2%**, T4: **31.3%**; MMLU-Pro (Vals): **89.6%** (benchlm.ai)

Coding:

- SWE-bench Verified: **88.6%** (benchlm.ai / Anthropic news cross-card); SWE-bench Pro: **69.2%** (official anthropic.com/news/claude-opus-4-8 via OpenCode Data; matches benchlm.ai); SWE Multilingual: **84.4%**; SWE Multimodal: **38.4%** (benchlm.ai)
- LiveCodeBench (Vals): **87.8%** (benchlm.ai)
- AA-SciCode: **54.4%**; AA Coding Index: **74.3** (benchlm.ai)
- CursorBench 3.2: **62.3%** (benchlm.ai); FrontierCode (pass rate, official Fable-5 cross-card): **13.4%** — CONFLICT with benchlm.ai "FrontierCode 1.1 Main 46.5%": different metric/variant, both retained

Long context:

- AA-LCR 77.7% at the 1M window (benchlm.ai); no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **89.9%** (tools); 80.5% (no tools); ScreenSpot Pro: **87.9%**; OfficeQA Pro: **66.2%**; Design Arena Website: **1266 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: τ²-bench 94.4%, MCP Atlas 82.2%, DeepSearchQA 93.1%, OSWorld-Verified 83.4% (official-confirmed); capped by OSWorld 2.0 (20.6%) and TB 3.0 (21.1%).
- **Reasoning: 86/100.** Unchanged: USAMO 96.7%, GPQA ~93.6%, HLE 57.9% (official-confirmed), ARC-AGI-2 72.1%, low hallucination (39.3%); capped by CritPt 20.9% and ARC-AGI-3 1.5%.
- **Context window: 84/100.** Unchanged: 1M window with LCR 77.7%; 128K max output now verified; capped by missing max-window retrieval probes.
- **Multimodal: 85/100.** Unchanged: CharXiv 89.9% + ScreenSpot Pro 87.9% elite vision grounding; text-only output caps it.
- **Coding: 86/100.** Unchanged: SWE-bench Verified 88.6%, LiveCodeBench 87.8%, Coding Index 74.3; capped by SWE Multimodal 38.4% and the official FrontierCode 13.4% row.
- **Cost efficiency: 58/100.** Unchanged in number, but now verified: $5/$25 catalog price (same as Opus 5 — the expected post-succession discount did not materialize).
- **Overall Score: 85/100.** Mean of the five quality dims (84+86+84+85+86)/5 = 85.0. Best fit: proven, well-rounded Opus quality for teams not yet migrated to Opus 5 — same catalog price, slightly weaker sheet.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official anthropic.com/news/claude-opus-4-8 + Fable-5/Mythos-5 cross-card figures transcribed by OpenCode Data `anthropic/claude-opus-4-8`; benchlm.ai scorecard). Second pass over my 2026-09-24 file: verified release date (2026-05-28), cutoff (2026-01), 128K max output and $5/$25 pricing; flagged the FrontierCode metric-variant conflict (13.4% official vs 46.5% benchlm). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
