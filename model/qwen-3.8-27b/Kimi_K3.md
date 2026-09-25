# Qwen3.8-27B — findings by Kimi K3

- Source: Alibaba / Qwen3.8-27B (`qwen-3.8-27b`; HF `Qwen/Qwen3.8-27B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** The open-weights dense 27B of the Qwen3.8 family — a native vision-language model (images+video) with flexible thinking control. Remarkable at its size: SWE-bench (Vals) 86%, LiveCodeBench v6 90.3%, OSWorld-Verified 84.3%.
- **Provider / access:** Open weights HF `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b` at ~$0.094/$4.40 per 1M (openrouter.ai); ~17 providers.
- **Release / knowledge:** Aug 2026, alongside Qwen3.8 launch (per emergent.sh Qwen 3.8 release coverage); cutoff not verified.
- **IDs:** `qwen/qwen3.8-27b`; HF `Qwen/Qwen3.8-27B`.
- **Context window:** 262K native (benchlm.ai; openrouter 1M listing refers to managed larger deployments — treat 262K as the true open-checkpoint window). 131K max output (openrouter.ai).
- **Modalities:** text/image/video in (vision benchmarks measured); text out; reasoning (thinking control); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $0.094/M input, $4.40/M output typical on OpenRouter (openrouter.ai listing); open weights → self-host free.
- **Architecture:** 27B dense (native vision-language), open weights (license per HF card; Qwen typical).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Vals 58.4%) (benchlm.ai)
- Tau3-Banking (AA): **48.0%** (benchlm.ai)
- GDPval-AA: **1463 Elo** (45.4% normalized) (benchlm.ai)
- OSWorld-Verified: **84.3%**; AndroidWorld: **81.9%**; WebArena-Verified: **64.8%** (benchlm.ai)
- CoWorkBench: **70.7%**; AA Agentic Index: **46.5%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (GPQA-D; AA 90.5%; Vals 88.9%) (benchlm.ai)
- HLE: **30.8%**; AA-HLE 33.9% (benchlm.ai)
- AA-LCR: **82.0%**; MLCR-AA: **21.7%**; CritPt: **5.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **33.7**; BenchLM overall **55.35/100, #53 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **15.6% / 30.3%** (benchlm.ai)
- LiveBench overall: **75.3** (Reasoning 80.0 / Coding 75.7 / Agentic 61.4 / Math 86.2 / Data 76.6 / Language 74.3 / IF 72.7) (LiveBench 2026-06-25 via shortlyai.com)

Coding:

- SWE-bench (Vals): **86.0%**; SWE-bench Pro: **61.7%** (benchlm.ai)
- LiveCodeBench v6: **90.3%**; LiveCodeBench (Vals): **84.0%** (benchlm.ai)
- DeepSWE: **42.2%**; NL2Repo: **42.3%**; VulcanBench v3: **82.6%** (benchlm.ai)
- AA-SciCode: **46.6%**; AA Coding Index: **68.1** (benchlm.ai)

Long context:

- AA-LCR 82.0% within 262K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- MathVision: **90.0%** (w/ Python 94.6%); CharXiv: **90.2%**; OmniDocBench 1.5: **91.1%**; RealWorldQA: **85.9%**; AA-MMMU-Pro: **76.3%**; BabyVision w/ Python: **85.6%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 84.3%, TB 2.1 73%, GDPval 1463 excellent for 27B; capped by JobBench 33.4% and ALE 42.9%.
- **Reasoning: 72/100.** GPQA ~89–90%, LCR 82.0%, LiveBench Reasoning 80; capped by CritPt 5.4%, HLE 30.8%, low Omniscience accuracy.
- **Context window: 70/100.** True 262K window with LCR 82.0%; below the 1M tier.
- **Multimodal: 85/100.** Full vision+video suite verified (MathVision 90%, OmniDocBench 91.1%); text-only output caps it.
- **Coding: 80/100.** SWE-bench (Vals) 86%, LCB v6 90.3%, VulcanBench 82.6% — outstanding for 27B; capped by DeepSWE 42.2%.
- **Cost efficiency: 95/100.** Open 27B weights; ~$0.09/M input hosted.
- **Overall Score: 76/100.** Mean of the five quality dims (74+72+70+85+80)/5 = 76.2 → 76. Best fit: the best small open multimodal coding model in this cohort — self-host or sub-cent input pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, openrouter.ai listing, shortlyai.com LiveBench data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
