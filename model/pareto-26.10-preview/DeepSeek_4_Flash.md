# Pareto 26.10 Preview — findings by DeepSeek 4 Flash

- Source: Pareto AI / Pareto 26.10 Preview
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Pareto AI's research-preview general model (Oct 2026), an efficiency-tuned preview emphasizing high-performance-low-cost trade-offs — a stopgap ahead of the full Pareto release.
- **Provider / access:** Pareto API `pareto-26.10-preview`; OpenCode Zen `opencode/pareto-26.10-preview`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `pareto/pareto-26.10-preview`
- **Context window:** 100,000 total; 32,000 max output.
- **Modalities:** text, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.00 / $5.00 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **60.9%** (vendor eval)
- Tau3-Banking: **66.1%** (Tau3 leaderboard)
- GDPval-AA: **1412 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (official)
- HLE: **36.1%** (AA HLE listing)
- CritPt: **65.2%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **40.8 / rank 9** (AA)

Coding:

- SWE-bench Verified: **78.3%** (official)
- LiveCodeBench: **70.4%** (LCB official)

Long context:

- RULER 100K: **88.1%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 84/100.** Capable agentic tool use (Terminal-Bench 60.9, Tau3-Banking 66.1), though early-preview polish is limited.
- **Reasoning: 88/100.** GPQA Diamond 88.4 with strong analytical depth for a preview; HLE 36.1 is mid-pack.
- **Context window: 84/100.** 100K with ~88% retrieval — workable, not generous.
- **Multimodal: 82/100.** Text/PDF in only — solid for documents, no image/audio/video.
- **Coding: 86/100.** SWE-bench Verified 78.3 and LiveCodeBench 70.4 — respectable for the price band.
- **Cost efficiency: 58/100.** $1/$5 undercuts US flagships; preview status adds risk.
- **Overall Score: 85/100.** Mean of quality dims (84+88+84+82+86)/5 = 84.8 → 85; an efficient preview worth watching once the full release lands.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Pareto AI — 26.10 Preview](https://pareto.ai/26-10-preview)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
  - [GPQA Diamond leaderboard](https://github.com/idavidrein/gpqa)
