# Grok 4.6 — findings by Kimi K3

- Source: xAI / Grok 4.6 (`grok-4-6`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship reasoning model ahead of Grok 4.5 — strong tool calling and knowledge QA (GPQA ~95%) with a notable weakness at max-context retrieval and hard frontier tasks. Docs: docs.x.ai/developers/grok-4-6.
- **Provider / access:** xAI API (`grok-4-6`, OpenAI-compatible Chat Completions); X/Grok consumer surfaces; OpenCode Zen route live (OpenCode Data, ~#40 weekly).
- **Release / knowledge:** Released 2026-08-12 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff 2026-02-01 (OpenCode Data, new).
- **IDs:** `xai/grok-4-6` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 500K tokens in / **500K max output** (OpenCode Data — output-allowed window unusually large for the class; previously unverified).
- **Modalities:** text/image in (OpenCode Data; Design Arena measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2/M input, $6/M output, $0.50/M cached (OpenCode Data catalog — verified now; matches docs.x.ai's tiered table: $2/$6 <200K prompt, $4/$12 ≥200K).
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **78.3%**; Terminal-Bench 3.0: **26.5%** (benchlm.ai); hard-harness TB: **20.3** (official x.ai/news/grok-4-7 cross-card — new this pass)
- Tau3-Banking (AA): **50.7%** (benchlm.ai) — best Tau3 among non-flagship peers here
- GDPval-AA: **1605 Elo** (55.3% normalized) (official x.ai cross-card via OpenCode Data; matches benchlm.ai)
- APEX-Agents: **57.5%**; AA AutomationBench: **66.7%**; AA Briefcase: **1546** (official cross-card; matches benchlm.ai); AA EnterpriseOps-Gym: **48.3%**; AA Agentic Index: **53.4%** (benchlm.ai)
- Harvey Legal Agent Benchmark: **15.8**; EEBench: **53**; HealthBench: **48.5** (official cross-card — new this pass)
- CursorBench: **40.4** (official cross-card) — CONFLICT with benchlm.ai's CursorBench 3.2 70.8% (different version/harness; both retained)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA); 94.7% (Vals) (benchlm.ai)
- HLE (AA-HLE): **42.9%** (benchlm.ai)
- AA-LCR: **80.3%**; CritPt: **17.1%** (benchlm.ai)
- ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **44.3** (benchlm.ai); BenchLM overall **69.19/100, #15 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **48.2% / 34.3%** — good grounding (benchlm.ai)
- MMLU-Pro (Vals): **89.4%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **95.6%** — near top of cohort (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.2%** (benchlm.ai)
- AA-SciCode: **56.5%**; AA Coding Index: **76.8** (benchlm.ai)
- DeepSWE: **65.2** (official cross-card; benchlm.ai had 65.9%); FrontierSWE v2: **25.3%**; FrontierCode Ext: **61.3%**; VulcanBench v3: **87.0%** (benchlm.ai)

Long context:

- AA-LCR 80.3% within the 500K window (benchlm.ai); no 1M window exists; no MRCR/RULER public score found.

Multimodal:

- Design Arena Website: **1302 Elo** (benchlm.ai); no MMMU/CharXiv public row found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: GDPval-AA 1605, AutomationBench 66.7%, Tau3-Banking 50.7%, APEX-Agents 57.5%; capped by TB 3.0 26.5% / official TB 20.3 and ApprenticeBench 13%.
- **Reasoning: 82/100.** Unchanged: GPQA ~94.8%, ARC-AGI-2 67.1%, LCR 80.3%, low hallucination (34.3%); capped by HLE 42.9% and CritPt 17.1%.
- **Context window: 72/100.** Unchanged: 500K window is half the 1M frontier standard (though the 500K max output is unusually generous); LCR 80.3% is good within it.
- **Multimodal: 68/100.** Unchanged: image input with Design Arena 1302; no audio/video/PDF rows and sparse third-party vision coverage cap it.
- **Coding: 85/100.** Unchanged: SWE-bench (Vals) 95.6%, LiveCodeBench 88.2%, Coding Index 76.8; capped by FrontierSWE v2 25.3% and DeepSWE ~65%.
- **Cost efficiency: 72/100.** Verified $2/$6 ($0.50 cached) — mid-tier xAI pricing below the Opus class; provisional flag removed.
- **Overall Score: 78/100.** Mean of the five quality dims (84+82+72+68+85)/5 = 78.2 → 78. Best fit: xAI-stack agentic coding where the 500K window suffices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `xai/grok-4-6` — official x.ai/news/grok-4-7 cross-card transcribed, catalog pricing/usage verified; docs.x.ai pricing table; benchlm.ai scorecard from first pass). Second pass: verified release (2026-08-12), cutoff (2026-02-01), pricing, 500K max output; added official Harvey/EEBench/HealthBench/CursorBench rows; flagged the CursorBench 40.4-vs-70.8 version conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
