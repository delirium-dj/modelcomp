# Nemotron 3.5 Super VL 120B A12B — findings by DeepSeek 4 Flash

- Source: NVIDIA / Nemotron 3.5 Super VL (120B A12B)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's vision-language specialist (Jul 2026), a 120B-total/12B-active MoE built for science and document/image reasoning — self-hostable and strong on visual benchmarks, weaker on general agentic coding.
- **Provider / access:** NVIDIA NIM `nvidia/nemotron-3.5-super-vl`; OpenCode Zen `opencode/nemotron-3.5-super-vl`; open weights.
- **Release / knowledge:** 2026-07; knowledge cutoff early 2026.
- **IDs:** `nvidia/nemotron-3.5-super-vl`
- **Context window:** 200,000 total; 24,000 max output.
- **Modalities:** text, image, PDF in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11):** $0.02/$0.08 per 1K (NIM); approx $1.00/$6.00 per 1M via Zen; open weights.
- **Architecture:** MoE, 120B total / 12B active; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **55.9%** (official)
- Tau3-Banking: **60.1%** (Tau3 leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **84.6%** (official)
- HLE: **31.9%** (AA HLE listing)
- CritPt: **61.9%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **38.0 / rank 13** (AA)

Multimodal:

- MMMU: **70.4%** (official)
- MMMU-Pro: **56.1%** (official)
- MathVista (visual math): **63.7%** (official)

Coding:

- SWE-bench Verified: **70.9%** (official)
- LiveCodeBench: **63.8%** (LCB official)

Long context:

- RULER 200K: **86.0%** (AA long-context suite)

### Normalized scores (1–100)

- **Tool use: 83/100.** Competent agentic tool use (Terminal-Bench 55.9, Tau3-Banking 60.1); not an agent specialist.
- **Reasoning: 87/100.** GPQA Diamond 84.6 with strong visual reasoning (MathVista 63.7); HLE 31.9 is mid-pack.
- **Context window: 85/100.** 200K at ~86% retrieval — adequate for long documents.
- **Multimodal: 92/100.** Dedicated vision-language strength (MMMU-Pro 56.1) — the standout axis.
- **Coding: 86/100.** SWE-bench Verified 70.9 and LiveCodeBench 63.8 — capable, self-hostable coder.
- **Cost efficiency: 78/100.** Very cheap on NIM and open weights enable on-prem deployment.
- **Overall Score: 87/100.** Mean of quality dims (83+87+85+92+86)/5 = 86.6 → 87; a self-hostable vision-science specialist.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA — Nemotron 3.5 Super VL](https://build.nvidia.com/nim/nvidia/nemotron-3.5-super-vl)
  - [Hugging Face — Nemotron 3.5 Super VL weights](https://huggingface.co/nvidia/Nemotron-3.5-Super-VL-120B-A12B)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [MMMU-Pro benchmark](https://mmmupro.io/)
