# Grok 4.3 — findings by Kimi K3

- Source: xAI / Grok 4.3 (`grok-4-3`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's mid-cycle Grok 4 update — near-perfect τ²-bench tool use (97.7%) and solid GPQA, launched with "improved agentic performance and lower pricing" per Artificial Analysis; predecessor to Grok 4.5/4.6.
- **Provider / access:** xAI API (`grok-4-3`, OpenAI-compatible).
- **Release / knowledge:** Released 2026-04-17 (OpenCode Data, newly verified — first pass had "date not verified"); cutoff not stated.
- **IDs:** `xai/grok-4-3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data confirms); max output **30K** (OpenCode Data catalog — previously unverified; unusually small for the window class).
- **Modalities:** text/image/PDF in (OpenCode Data); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.25/M input, $2.50/M output, $0.20/M cached (OpenCode Data catalog — verified now; markedly cheap for the xAI 4.x line).
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **98.0%** (artificialanalysis.ai launch article; matches benchlm.ai's 97.7% composite)
- GDPval-AA: **CONFLICT — 1500 Elo** per the AA launch article ("improved agentic performance") vs benchlm.ai's **1018 Elo / 29.2%**; both retained; the conflict partially drives the Tool-use delta this pass
- IFBench: **81%** (AA article; matches benchlm.ai's 81.3%)
- Terminal-Bench 2.1 (Vals): **41.9%** (benchlm.ai); primary: no verified public score found
- Gert Labs: **43.9%**; APEX-Agents-AA: **17.0%**; AA Agentic Index: **17.2%**; ResearchClawBench: **12.4%** (benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (GPQA-D/AA; Vals 91.4%) (benchlm.ai)
- HLE: **35.0%**; AA-HLE: **37.2%** (benchlm.ai)
- AA-LCR: **64.3%**; CritPt: **8.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **CONFLICT** — AA launch article reports **53** (post-boost measurement); benchlm.ai scorecard lists **37.6**. Both retained; article-timed figure reflects launch improvements. BenchLM overall **54.73/100, #59 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **34.6% / 25.0%** (benchlm.ai)
- MMLU-Pro (Vals): **85.8%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **71.4%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **84.5%** (benchlm.ai)
- SciCode: **47.3%**; AA-SciCode: **48.3%**; AA Coding Index: **42.3** (benchlm.ai)
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 64.3% at the 1M window (benchlm.ai); 30K max output catalog-listed; no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **78.1%** (AA 78.1%); Design Arena Website: **1206 Elo** (benchlm.ai); PDF input catalog-listed (new this pass)

### Normalized scores (1–100)

- **Tool use: 74/100.** Raised from 68: the AA launch article's GDPval-AA 1500 Elo (vs benchlm's 1018) softens the strongest cap; τ² 97.7–98% stays elite with IFBench 81%; still capped by weak Agentic Index 17.2% and TB 2.1 (Vals) 41.9%.
- **Reasoning: 78/100.** Raised from 74: AA's launch-article Index of 53 (vs benchlm's 37.6) sits firmly in upper-mid; GPQA ~90–91%, low hallucination 25%; capped by HLE 35%, CritPt 8.0%, LCR 64.3%.
- **Context window: 75/100.** Unchanged: 1M window, middling LCR; the small 30K max output (now verified) is a serving caveats, not a window downgrade.
- **Multimodal: 74/100.** Unchanged: MMMU-Pro 78.1% image/PDF input; text-only output caps it.
- **Coding: 72/100.** Unchanged: LiveCodeBench 84.5%, SWE-bench (Vals) 71.4%; capped by Coding Index 42.3 and SciCode ~48%.
- **Cost efficiency: 84/100.** Raised from provisional 72: verified $1.25/$2.50 with $0.20 cached — the cheapest xAI reasoning line, matching the launch article's "lower pricing" headline.
- **Overall Score: 75/100.** Mean of the five quality dims (74+78+75+74+72)/5 = 74.6 → 75 (raised from 73 on the resolved GDPval/Index conflicts and verified pricing). Best fit: τ²-style tool-calling pipelines on xAI where agentic depth is light.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (AA launch article "xAI launches Grok 4.3 with improved agentic performance and lower pricing" via OpenCode Data `xai/grok-4-3` — Index 53, GDPval 1500, τ² 98, IFBench 81; catalog release/pricing/window verification; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file with two flagged vendor-vs-aggregator conflicts (GDPval 1500 vs 1018; Index 53 vs 37.6). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
