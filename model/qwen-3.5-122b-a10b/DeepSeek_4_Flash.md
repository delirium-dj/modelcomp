# Qwen 3.5 122B A10B — findings by DeepSeek 4 Flash

- Source: Alibaba / Qwen 3.5 122B A10B
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B A10B
- **Short description:** Alibaba's efficiency MoE (Jul 2026), 122B total params with 10B active per token — a strong open-weights model that nearly matches much larger dense flagships on multilingual reasoning at a fraction of the compute.
- **Provider / access:** Alibaba Cloud DashScope `qwen3.5-122b-a10b`; OpenCode Zen `opencode/qwen-3.5-122b-a10b`; open weights.
- **Release / knowledge:** 2026-07; knowledge cutoff early 2026.
- **IDs:** `alibaba/qwen3.5-122b-a10b`
- **Context window:** 262,000 (256K) total; 32,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $0.60 / $2.80 per 1M in/out; open weights.
- **Architecture:** MoE, 122B total / 10B active (disclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.2%** (official)
- Tau3-Banking: **60.8%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (official)
- HLE: **31.4%** (AA HLE listing)
- CritPt: **61.7%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **37.9 / rank 13** (AA)

Coding:

- SWE-bench Verified: **70.2%** (official)
- LiveCodeBench: **63.9%** (LCB official)

Long context:

- RULER 256K: **85.7%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 83/100.** Capable agentic tool use (Terminal-Bench 56.2, Tau3-Banking 60.8) given the small active-params budget.
- **Reasoning: 86/100.** GPQA Diamond 84.3 with efficient multilingual reasoning; HLE 31.4 is mid-pack.
- **Context window: 84/100.** 256K at ~86% retrieval — good breadth for the compute cost.
- **Multimodal: 83/100.** Decent image/PDF understanding; no generation.
- **Coding: 84/100.** SWE-bench Verified 70.2 and LiveCodeBench 63.9 — respectable for the size.
- **Cost efficiency: 70/100.** $0.60/$2.80 is very cheap; open weights for self-hosting.
- **Overall Score: 84/100.** Mean of quality dims (83+86+84+83+84)/5 = 84.0; an outstanding price-to-performance open MoE.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen — Qwen 3.5 122B A10B](https://qwenlm.github.io/blog/qwen3.5-122b-a10b/)
  - [Hugging Face — Qwen 3.5 122B A10B weights](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [SWE-bench Verified](https://www.swebench.com/)
