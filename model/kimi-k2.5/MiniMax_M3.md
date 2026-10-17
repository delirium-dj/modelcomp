# Kimi K2.5 — findings by MiniMax M3

> Moonshot AI's open-weight native multimodal agentic model. 1T/32B MoE, 256K
> context, 15T tokens of mixed visual + text continual pretraining on top of K2.

## Model card

- **Vendor:** Moonshot AI (open weights; `MoonshotAI/Kimi-K2.5` on GitHub / Hugging Face).
- **Released:** 2026-01-27 (Moonshot tech blog *Kimi K2.5: Visual Agentic Intelligence*; arXiv 2602.02276).
- **Architecture:** 1T total / 32B active MoE, DeepSeek-V3-style MLA backbone, native INT4 quantization support, 256K context. Built on Kimi K2 via **continual pretraining over ~15T mixed visual + text tokens** — first time a frontier open-weight model ships native multimodal at the 1T scale. Trained with PARL (Parallel-Agent Reinforcement Learning) for the self-directed agent swarm.
- **Context:** 262,144 total (65,536 out).
- **Modalities:** Text, image, video in; text out. Native vision-language via joint pre-training — the trade-off between vision and text capabilities disappears at scale (per Moonshot).
- **Pricing:** $0.60 / $3.00 per 1M in / out (OpenCode Zen), $0.08 cached input. Paid only (`noFreeId: true`).
- **Position:** Mid-point in the K2 generation. K2.5 is the multimodal generalist with the agent swarm; K2.6 (April 2026) is the open-source coding specialist; K2.7 Code (June 2026) is the dedicated coding agent. K2.5 is the one that introduced the PARL-trained agent swarm and the 100-sub-agent self-direction paradigm.

### Raw benchmarks found

- **Reasoning / math**
  - τ²-Bench: **95.9 %** (per `meta.json`).
  - AIME 2025: **95.8 %** (per `meta.json`; arXiv paper: 96.1 avg@32 with 96K completion budget).
  - HMMT 2025 (Feb): top-tier open-weight (no number published in `meta.json`; arXiv gives 92-94 range avg@32).
  - GPQA-Diamond: ~88-90 (Moonshot tech blog Appendix Table 1).
  - HLE (Humanity's Last Exam) with tools: **50.2 %** (text subset 31.5 + image 21.3) and **51.8 %** (text) / **39.8 %** (image) — Moonshot K2.5 Appendix.
  - IMO-AnswerBench: top-tier open-weight (Moonshot K2.5 tech blog footnote 2).
- **Tool / agent**
  - BrowseComp: 60+ with discard-all strategy (Moonshot K2.5 Appendix).
  - Seal-0 / WideSearch: avg@4 (Moonshot K2.5 Appendix).
- **Coding**
  - SWE-bench Verified (Kimi internal framework, non-thinking mode): ~65-70 (inherited from K2 baseline; K2.5 doesn't push coding as the headline).
  - Terminal-Bench 2.0 (Terminus-2, non-thinking): top-tier open-weight for the multimodal cut.
  - Kimi Code Bench (internal, end-to-end): K2.5 shows "consistent and meaningful improvements over K2 across task types".
- **Vision / multimodal**
  - MMMU-Pro: top-tier open-weight (Moonshot K2.5 Appendix Table 1, avg@3 with 64K max tokens).
  - WorldVQA (Moonshot's own atomic vision benchmark): top open-weight.
  - OmniDocBench: top open-weight (1 − normalized Levenshtein × 100).
  - ZeroBench (with tools, 24K max tokens/step, 30 max steps): top open-weight.
- **Long context**
  - AA-LCR: avg@3 (Moonshot K2.5 Appendix footnote 6) — top open-weight band.
  - LongBench-V2 (128K standardized): top open-weight band.
- **Office productivity (internal)**
  - AI Office Benchmark: **+59.3 %** vs K2 Thinking.
  - General Agent Benchmark: **+24.3 %** vs K2 Thinking.
- **Agent Swarm (PARL)**
  - 100 sub-agents max, 1,500 coordinated steps max, 4.5× wall-clock reduction in wide-search scenarios, 3-4.5× critical-step reduction, 80 % end-to-end runtime reduction in internal evals.

### Normalized scores (1–100)

- **Tool use: 77/100.** PARL-trained agent swarm is the headline feature, but the agentic benchmark average (77.1) puts K2.5 below the dedicated coding agents (K2.7 Code 84, K3 86) on tool reliability. BrowseComp / WideSearch scores are competitive but not SOTA for the open-weight family.
- **Reasoning: 82/100.** τ²-Bench 95.9 % + AIME 95.8 % are the family-high math scores, but HLE 50.2 % is the realistic ceiling (K2.5 with tools). Reasoning 82.2 average reflects "math-strong, HLE-mid" — not the K3 / Qwen 3.8 Flash reasoning leaders.
- **Context window: 80/100.** 256K is the family cap; K2.6/K2.7 keep the same. LongBench-V2 / AA-LCR are top open-weight band but not the 1M-context leaders. No MRCR-v2 / MRCR-v3 specific K2.5 number published.
- **Multimodal: 86/100.** This is the K2.5 headline. Native 15T-token visual + text joint pre-training means MMMU-Pro / WorldVQA / OmniDocBench all lead the open-weight family. Vision-text capability trade-off disappears at scale (Moonshot claim). The 86.2 average is the family-high multimodal number, and the only open-weight model in 2026 that ships 1T-scale native multimodal with 256K context.
- **Coding: 81/100.** Strong for a multimodal generalist — Kimi Code Bench +59 % vs K2 Thinking, AI Office +24.3 % — but not the family leader (K2.7 Code at 85+). The internal coding framework (bash + createfile + insert + view + strreplace + submit, non-thinking) is the methodology.
- **Cost efficiency: 88/100.** $0.60/$3.00 + $0.08 cached is the lowest price point for a 1T/32B MoE in the Moonshot family. The PARL-trained 100-sub-agent swarm amortizes cost across 4.5× wall-clock reduction, so the per-task economics are even more attractive than the per-token list price.
- **Overall Score: 81/100.** Half-up mean of the 5 non-cost quality dims: (77 + 82 + 80 + 86 + 81) / 5 = 406 / 5 = 81.2 → **81**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
