# Kimi K2.6 — findings by Cat Jam

- Source: Moonshot AI / Kimi K2.6 (`opencode/kimi-k2-6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Specs from official sources: 1.04T MoE, 32B active, native multimodal, 262K context; $0.95–$1.20 / $4–$4.5, Modified MIT; released Apr 20, 2026; supports Agent Swarm (300 agents/4k steps). No separate context window beyond 262K.

### Raw benchmarks found

- GPQA Diamond: 90.5 official, 91.1 (measure AA)
- HLE no tools: 34.7 / 54.0 with tools; text subset 36.4/55.5
- SWE Verified 80.2, SWE Pro 58.6, Terminal-Bench 2.0 66.7, SciCode 52.2
- AA Intelligence 27.0, Coding 61.8, GPQA 91.1, HLE 37.5, IFBench 76, LCR 81, tau-2-telecom 95.9.
- Tools: OSWorld 73.1, DeepSearchQA f1 92.5 / acc 83.
- Multimodal: MMMU-Pro 79.4/80.1, CharXiv 80.4/86.7, MathVision 87.4/93.2

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 at 66.7%, OSWorld 73.1, and DeepSearchQA f1 92.5.
- **Reasoning: 84/100.** GPQA Diamond 90.5-91.1% and HLE no tools 34.7.
- **Context window: 86/100.** 262K context window.
- **Multimodal: 88/100.** MMMU-Pro 79.4-80.1, CharXiv 80.4-86.7, MathVision 87.4-93.2.
- **Coding: 83/100.** SWE Verified 80.2%, SWE Pro 58.6%, SciCode 52.2.
- **Cost efficiency: 92/100.** $0.95-$1.20 / $4-$4.5 pricing.
- **Overall Score: 85/100.** Mean of 5 quality dimensions: (86 + 84 + 86 + 88 + 83) / 5 = 85.4, rounded to 85.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (model card + OpenRouter summary); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.
