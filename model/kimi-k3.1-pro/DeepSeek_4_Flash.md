# Kimi K3.1 Pro — findings by DeepSeek 4 Flash

- Source: Moonshot AI / Kimi K3.1 Pro
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's reasoning-heavy Pro flagship (Aug 2026) with an unusually long native context, strong at structured analysis and long-document Chinese/English reasoning. The K3.1 step above the base Kimi K3.
- **Provider / access:** Moonshot AI API `kimi-k3.1-pro`; also OpenCode Zen `opencode/kimi-k3.1-pro`.
- **Release / knowledge:** 2026-08; knowledge cutoff 2026-05.
- **IDs:** `moonshot/kimi-k3.1-pro`
- **Context window:** 1,048,576 (1M) total; 128,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.50 / $9.00 per 1M in/out; paid only.
- **Architecture:** proprietary; MoE, undisclosed scale.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **62.8%** (official)
- Tau3-Banking: **68.9%** (Tau3 leaderboard)
- GDPval-AA: **1432 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (official)
- HLE: **40.2%** (AA HLE listing)
- CritPt: **67.8%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.4 / rank 5** (AA)

Coding:

- SWE-bench Verified: **81.3%** (official)
- LiveCodeBench: **73.3%** (LCB official)

Long context:

- RULER 1M: **91.2%** (AA long-context suite, Moonshot strong-suit)

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable agentic tool use (Terminal-Bench 62.8, Tau3-Banking 68.9); solid but not the class edge.
- **Reasoning: 93/100.** GPQA Diamond 90.4 with strong structured and bilingual reasoning; HLE 40.2 is respectable.
- **Context window: 94/100.** Full 1M at ~91% retrieval — long-context depth is a Moonshot hallmark.
- **Multimodal: 88/100.** Image/PDF understanding at good quality; no audio/video or generation.
- **Coding: 91/100.** SWE-bench Verified 81.3 and LiveCodeBench 73.3 — strong Pro-tier coding.
- **Cost efficiency: 48/100.** $1.50/$9 undercuts Western Pro flagships; still paid only.
- **Overall Score: 91/100.** Mean of quality dims (90+93+94+88+91)/5 = 91.2 → 91; the best long-context Pro value outside the US flagships.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3.1 Pro](https://platform.moonshot.ai/docs/models)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [Kimi open platform](https://kimi.moonshot.cn/)
  - [SWE-bench Verified](https://www.swebench.com/)
