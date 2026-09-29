# Qwen3.8-27B — findings by Kimi K3

- Source: Alibaba / Qwen3.8-27B (`qwen-3.8-27b`; HF `Qwen/Qwen3.8-27B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** The open-weights dense 27B of the Qwen3.8 family — a native vision-language model (images+video) with flexible thinking control, Apache 2.0. Remarkable at its size: SWE-bench (Vals) 86%, LiveCodeBench v6 90.3%, OSWorld-Verified 84.3%.
- **Provider / access:** Open weights HF `Qwen/Qwen3.8-27B`; OpenRouter `qwen/qwen3.8-27b` from $0.0407/$4.40 per 1M (openrouter.ai) plus a **free `qwen/qwen3.8-27b:free` variant (262K ctx)**; Alibaba-hosted ~$0.40–0.50/$3.00 (llm-stats.com, respan.ai); ~17 providers.
- **Release / knowledge:** ~2026-08-13/14, ~10 days after the Qwen3.8 launch (openrouter.ai listing date, respan.ai); cutoff not verified.
- **IDs:** `qwen/qwen3.8-27b`, `qwen/qwen3.8-27b:free` (OpenRouter free tier); HF `Qwen/Qwen3.8-27B`.
- **Context window:** 262K native (benchlm.ai, benchleader.com; YaRN-extensible to 1M and Alibaba-hosted 1M per respan.ai). Max output 262,144 (openrouter.ai listing).
- **Modalities:** text/image/video in (vision benchmarks measured); text out; reasoning (thinking control, xhigh default); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.0407/M input, $4.40/M output on OpenRouter (paid), free tier available; Alibaba-hosted $0.40/$3.00 ($0.040 cached) per llm-stats.com; open weights → self-host free.
- **Architecture:** 27B dense (native vision-language, dedicated vision tower per orcarouter.ai), open weights **Apache 2.0** (benchgen.com, respan.ai — license now confirmed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.0%** (Vals 58.4%; AA 79.8%; AA TB 4.0: 5.6%) (benchlm.ai)
- Tau3-Banking (AA): **48.0%**; AA EnterpriseOps-Gym: **44.2%**; AA AutomationBench: **48.2%** (benchlm.ai)
- GDPval-AA: **1409 Elo** (45.4% normalized; Elo revised down from 1463) (benchlm.ai); AA Briefcase: **1400**
- OSWorld-Verified: **84.3%**; AndroidWorld: **81.9%**; WebArena-Verified: **64.8%** (benchlm.ai)
- CoWorkBench: **70.7%**; AA Agentic Index: **46.5%**; JobBench: **33.4%**; Agents' Last Exam: **42.9%**; GDP.pdf: **16.6%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (GPQA-D; AA 90.5%; Vals 88.9%) (benchlm.ai)
- HLE: **30.8%**; AA-HLE 33.9% (benchlm.ai)
- AA-LCR: **82.0%**; MLCR-AA: **21.7%**; CritPt: **5.4%** (benchlm.ai)
- IFBench: **79.5%**; MMLU-Pro (Vals): **84.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **33.7** (xhigh effort; cost $1.01/task per respan.ai — cheaper per task than lower effort levels); BenchLM overall **54.88/100, #61 of 514**
- AA-Omniscience Index **−10.0%**; Accuracy / Hallucination Rate: **15.6% / 30.3%** (benchlm.ai)
- LiveBench overall: **75.3** (Reasoning 80.0 / Coding 75.7 / Agentic 61.4 / Math 86.2 / Data 76.6 / Language 74.3 / IF 72.7) (LiveBench 2026-06-25 via shortlyai.com — pre-release harness, treat cautiously)

Coding:

- SWE-bench (Vals): **86.0%**; SWE-bench Pro: **61.7%** (benchlm.ai)
- LiveCodeBench v6: **90.3%**; LiveCodeBench (Vals): **84.0%** (benchlm.ai)
- DeepSWE: **42.2%**; NL2Repo: **42.3%**; VulcanBench v3: **82.6%** (benchlm.ai)
- AA-SciCode: **46.6%**; AA Coding Index: **68.1** (benchlm.ai)

Long context:

- AA-LCR 82.0% within 262K (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- MathVision: **90.0%** (w/ Python 94.6%); CharXiv: **90.2%** (w/o tools 83.7%); OmniDocBench 1.5: **91.1%**; RealWorldQA: **85.9%**; AA-MMMU-Pro: **76.3%**; BabyVision w/ Python: **85.6%** (raw 65.7%); Vision2Web: **62.9%**; ERQA: **65.5%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld-Verified 84.3%, TB 2.1 73%, GDPval 1409 excellent for 27B; capped by AA TB 4.0 5.6%, JobBench 33.4% and ALE 42.9%.
- **Reasoning: 72/100.** GPQA ~89–90%, LCR 82.0%, LiveBench Reasoning 80; capped by CritPt 5.4%, HLE 30.8%, AA Index 33.7, Omniscience accuracy 15.6%.
- **Context window: 70/100.** True 262K window (YaRN-extendable to 1M) with LCR 82.0%; below the 1M tier — matches the 256K → 70s band.
- **Multimodal: 85/100.** Full vision+video suite verified (MathVision 90%, OmniDocBench 91.1%); text-only output caps it.
- **Coding: 80/100.** SWE-bench (Vals) 86%, LCB v6 90.3%, VulcanBench 82.6% — outstanding for 27B; capped by DeepSWE 42.2%.
- **Cost efficiency: 95/100.** Open Apache-2.0 27B weights; input now from $0.0407/M hosted with a free OpenRouter tier.
- **Overall Score: 76.2/100.** Mean of the five quality dims (74+72+70+85+80)/5 = 76.2. Best fit: the best small open multimodal coding model in this cohort — self-host or sub-nickel input pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, openrouter.ai listing, llm-stats.com provider pricing, respan.ai family/AA effort data, shortlyai.com LiveBench data); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: OpenRouter input price dropped $0.094 → $0.0407/M and a **free tier** (`qwen3.8-27b:free`, 262K) now exists; max output corrected 131K → 262,144; license confirmed **Apache 2.0**; release pinned to ~2026-08-13/14; BenchLM refreshed to 54.88/100 #61 of 514 with new rows (AA TB 4.0 5.6%, EnterpriseOps-Gym 44.2%, AutomationBench 48.2%, Briefcase 1400, GDP.pdf 16.6%, IFBench 79.5%); GDPval Elo revised 1463 → 1409; AA per-task economics added ($1.01/task at xhigh); scores unchanged.
- Future sources: add a new file next to this one using the same headings.
