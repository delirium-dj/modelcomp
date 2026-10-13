# Step 5 Preview — findings by MiMo 2.6 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship sparse-MoE foundation model for real-world agentic work (long-horizon reasoning, tool use, autonomous execution); skips the entire Step 4.x line, jumping from Step-3.7-Flash to Step 5. Open weights planned 2026-10-15 (Apache 2.0).
- **Provider / access:** StepFun API; OpenRouter `stepfun/step-5-preview-20261008`; NanoGPT `stepfun/step-5-preview`; Blackbox AI route. Chat Completions (OpenAI-compatible).
- **Release / knowledge:** Preview released 2026-09-18/21 (sources differ slightly); OpenRouter listing 2026-10-08; knowledge cutoff not disclosed.
- **IDs:** `stepfun/step-5-preview`; HF weights mirror `TypeSafeAI/Step-5-Preview-BF16` / `SHSLab/Step-5-Preview-BF16` (planned).
- **Context window:** 1,000,000 tokens; max output 1M (NanoGPT listing).
- **Modalities:** text + image + video in; text out; reasoning (effort tiers High/Max); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** $1.00 / 1M input, $2.70 / 1M output; cache read $0.05 / 1M (OpenRouter, NanoGPT).
- **Architecture:** 600B total parameters, 27B active per token (~4.5% sparsity), 92-layer "narrow but deep" sparse MoE; Apache 2.0 open weights (planned).

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **51.0%** (Artificial Analysis via NanoGPT)
- AA-Briefcase v1.1: **1,433 Elo** (Artificial Analysis via NanoGPT; better than 83% of models)
- GDPval-AA v2: **1,566 Elo** (Artificial Analysis via NanoGPT; better than 91% of models)
- CyberGym: **84.7%** (best in StepFun's open-weight comparison set per HF card)
- Terminal-Bench 4.0: **33.3%** (Artificial Analysis; 2.6× Kimi K3's 12.6%)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun HF model card)
- Humanity's Last Exam (HLE): **46.5%** (Artificial Analysis; better than 96% of models)
- AA-LCR v1.1 (long-context reasoning): **88.3%** (tied with Kimi K3 88.7%, ahead of GPT-6 Astra by +7.6)
- Artificial Analysis Intelligence Index: **44** (v4.3.2; ties Kimi K3 despite ~¼ the size; top-3 open-weight globally per StepFun)
- GDP.pdf all-pass rate: **14.8%** (Artificial Analysis via NanoGPT)

Coding:

- DeepSWE v1.1: **67.7%** (leads open-weight comparison set incl. Kimi K3 67.5%, GLM-5.3 66.9%)
- Terminal-Bench 2.1: **85.0%** (ties Kimi K3; behind Fable 5.1 91.4%)
- StepCodeBench: **49.0%** (best among open-weight peers per HF card)
- ProgramBench: **80.5%** (best among open-weight peers)
- SciCode: **58.9%** (Artificial Analysis via NanoGPT; better than 96% of models)

Long context:

- AA-LCR v1.1 88.3% at long-context reasoning (proxy for 1M window utility); no MRCR/RULER figure published.

### Normalized scores (1–100)

- **Tool use: 78/100.** AutomationBench 51% and AA-Briefcase 1,433 Elo show solid agentic knowledge work; GDPval-AA 1,566 Elo (better than 91% of models) is strong. Capped by AutomationBench tasks-completed rate of only 17.7% (full workflows without guardrail violations) and single-provider availability limiting real-world agent stress tests.
- **Reasoning: 88/100.** GPQA Diamond 93.5% matches frontier closed models; HLE 46.5% and AA-LCR 88.3% are excellent; AA Intelligence Index 44 ties Kimi K3 at ¼ the size. Capped slightly by HLE still trailing top closed models (Fable 5.1 at 59.1%).
- **Context window: 95/100.** Full 1M-token context with AA-LCR 88.3% proving long-context reasoning holds; capped only by absence of classic MRCR/RULER retrieval curves.
- **Multimodal: 82/100.** Native text+image+video input; strong document reasoning (GDP.pdf 14.8%). Capped by no published MMMU/MMMU-Pro style academic vision scores and text-only output.
- **Coding: 84/100.** DeepSWE 67.7% leads open-weight peers; TB2.1 85.0% is near-frontier; SciCode 58.9% excellent; TB4 33.3% respectable for open weights. Capped by still trailing Claude-class agents on TB4 and DeepSWE vs GPT-6 Astra (74.1%).
- **Cost efficiency: 80/100.** $1/$2.70 is mid-range; strong quality-per-dollar given 27B active params; cache read at $0.05 helps agentic loops. Capped by single-provider latency (26.44s TTFT per AA) and preview status.
- **Overall Score: 85.4/100.** Mean of (78 + 88 + 95 + 82 + 84) / 5 = 85.4 → **86** (half-up). Best-fit recommendation: the best efficiency frontier available — Kimi-K3-class intelligence at ¼ the parameters and $1/$2.70 pricing, ideal for long-horizon agentic coding and long-context reasoning on a budget; open weights on 2026-10-15 make it a top self-host candidate.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (StepFun HF model cards, OpenRouter/NanoGPT/Blackbox listings, Artificial Analysis provider page, Epoch AI, aimodelsnavi, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
