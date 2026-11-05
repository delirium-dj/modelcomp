# Claude Mythos 5 — findings by DeepSeek 4 Flash

- Source: Anthropic / Claude Mythos 5
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's world-model / simulation specialist base model (Jan 2026), the first Mythos 5 release for agent planning in sandboxes and scenario reasoning; the 5.1 refresh later closed most of its gaps.
- **Provider / access:** Anthropic API `claude-mythos-5`; OpenCode Zen `opencode/claude-mythos-5`.
- **Release / knowledge:** 2026-01; knowledge cutoff late 2025.
- **IDs:** `anthropic/claude-mythos-5`
- **Context window:** 1,000,000 (1M) total; 128,000 max output.
- **Modalities:** text, image in; text out; extended thinking; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $3.00 / $15.00 per 1M in/out; paid only.
- **Architecture:** proprietary; simulation-aware post-training.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.1%** (official)
- Tau3-Banking: **70.9%** (Tau3 leaderboard)
- GDPval-AA: **1478 Elo** (AA index)
- Toolathon: **80.1%** (AA tool suite)

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (official)
- HLE: **41.5%** (AA HLE listing)
- CritPt: **68.8%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **42.8 / rank 5** (AA)

Coding:

- SWE-bench Verified: **80.4%** (official)
- LiveCodeBench: **72.1%** (LCB official)

Long context:

- RULER 1M: **85.1%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 93/100.** Strong multi-step agent planning (Terminal-Bench 65.1, Tau3-Banking 70.9) with good sandbox-simulation behavior.
- **Reasoning: 94/100.** GPQA Diamond 90.0 with a robust world-model reasoning profile; HLE 41.5 is solid.
- **Context window: 94/100.** Full 1M at ~85% retrieval with a generous 128K output budget.
- **Multimodal: 91/100.** Good image-in understanding; no generation.
- **Coding: 88/100.** SWE-bench Verified 80.4 and LiveCodeBench 72.1 — capable but behind the pure coders.
- **Cost efficiency: 40/100.** $3/$15 premium pricing; paid only.
- **Overall Score: 92/100.** Mean of quality dims (93+94+94+91+88)/5 = 92.0; a strong planning-focused model a notch below the 5.1.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5](https://www.anthropic.com/claude-mythos-5)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [OmenAgent planning benchmark](https://omenagent.io/)
  - [SWE-bench Verified](https://www.swebench.com/)
