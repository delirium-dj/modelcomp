# MiMo V2.6 Free — Evaluation Report

**Model:** MiMo V2.6 Free (`opencode/mimo-v2-6-free`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** MiMo V2.6 Free (capability model: MiMo-V2.6-Flash)
**Short:** Free OpenCode Zen route to Xiaomi's MiMo-V2.6-Flash — 309B/15B-active MIT MoE with 1M context and text/image/video/audio input.
**Provider:** Xiaomi (MiMo team) — free OpenCode Zen tier for this slug; same weights on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`), MIT. Paid Xiaomi API route for the identical Flash model lives in `mimo-v2.6-flash/` at $0.14/$0.28 per 1M.
**Release date:** 2026-09-22 (MiMo-V2.6 Flash/Pro open-weights launch; five days after the public RL-training livestream).
**Architecture:** Sparse MoE, 309B total / 15B active; RL-tuned checkpoint; native extended reasoning.
**Context window:** 1,000,000 tokens.
**Modalities:** Text, image, video, audio in; text out.
**Pricing:** $0 (Zen free tier) for this slug.

### Raw benchmarks found

**BenchLM.ai source rows (Xiaomi MiMo-V2.6-Flash, 2026-09-28):**
- Terminal-Bench 2.1: **87.6%** (elite band — between Opus 4.8's 74.6% and GPT-5.6 Sol's 89.5%)
- OSWorld-Verified: **80.8%**
- CyberGym: **95.1%**; listed first on Vals CyberBench v1.1 (security-bug benchmark)
- Toolathlon-Verified: **73.6%**; AutomationBench: **52.3%**; JobBench: **61.2%**; Agents' Last Exam: **27.6%**; Terminal-Bench 4.0: **28.8%**; GDPval-AA (normalized): **55.0%**
- DeepSWE: **67.9%**; AA-SciCode: **51.3%**; ProgramBench: **26.0%**; ExploitGym: **6.0%**
- AA-MMMU-Pro: **73.1%** (multimodal understanding)
- AA-LCR: **74.3%**; CritPt: **12.0%**; AA-HLE: **35.1%**
- Artificial Analysis Intelligence Index: **37.9**; AA-Omniscience: −12.7 (accuracy 27.0%, hallucination 54.4%)

**Launch context (explainx.ai, 2026-09-22/27):**
- Flash (309B/15B) + Pro (1.02T/42B) + 9B Qwen3.5 distill, all open MIT weights; public RL dashboard; Pro claims Pareto-best intelligence-per-dollar on AA; Pro beats Kimi K3 (2.8T) on 14 of 15 published benchmarks; community-sourced Pro numbers: DeepSWE v1.1 71.9%, TB4.0 34.9%, ExploitGym 17.8%.
- Paid Flash API: $0.14/$0.28 per 1M (cached $0.0028).

**Gaps:** No SWE-bench Verified number published for Flash; omniscience/hallucination profile is weak (54.4% hallucination rate); Flash-specific GPQA/HLE at scale not found in text sources.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.6% is elite (0.5–1.9 points behind GPT-5.6 Sol xhigh and Opus 5, well above GPT-5.5 78.2% and Opus 4.8 74.6%), OSWorld-Verified 80.8% is top-decile computer use, Toolathlon 73.6% and JobBench 61.2% confirm breadth. Terminal-Bench 4.0 28.8% and ALE 27.6% on the newest hardest task sets cap it below 90.
- **Reasoning: 70/100.** AA-LCR 74.3% is solid, but AA-HLE 35.1% sits below the 2026 frontier band (Fable 5 ~53%, Opus 4.8 ~46%), CritPt 12.0% is very weak, and the AA Intelligence Index (37.9) places it mid-field on static knowledge/reasoning despite elite agentic results.
- **Context window: 88/100.** Documented 1M-token context (repo Flash meta, BenchLM, OpenRouter). No published retrieval/synthesis measurement at long context for Flash, so scored in the evidence-conservative 85–94 band rather than the 95+ top tier.
- **Multimodal: 75/100.** Full omni input — text, image, video, and audio (rare in 2026; most rivals are image-only or image+video), with AA-MMMU-Pro 73.1% confirming strong image understanding. Text-only output and no published video/audio-comprehension benchmark keep it off the 80+ tier.
- **Coding: 74/100.** DeepSWE 67.9% (near Grok 4.7's 71–73% tier but below it), TB2.1 87.6% for terminal-level coding, CyberGym 95.1% (outstanding security-coding signal, top of Vals CyberBench v1.1), offset by ProgramBench 26.0%, ExploitGym 6.0%, and no SWE-bench Verified figure.
- **Cost efficiency: 100/100.** This slug is the free OpenCode Zen tier — $0 per the rubric's free-model reference point. The paid twin is also among the cheapest 1M-omni models found ($0.14/$0.28).
- **Overall Score: 79/100.** Half-up mean of (86 + 70 + 88 + 75 + 74) / 5 = 78.6.

### Why not higher
Reasoning 70 is the drag: AA-HLE 35.1%, CritPt 12.0%, and a 54.4% omniscience hallucination rate mean static-knowledge work trails the frontier even though agentic/terminal performance is elite. Coding 74 is held down by missing SWE-V evidence and weak exploit-generation (ExploitGym 6.0%) despite the standout CyberGym 95.1%.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
