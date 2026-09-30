# GPT-OSS 120B — findings by Kimi K3

- Source: OpenAI / GPT-OSS 120B (`gpt-oss-120b`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B
- **Short description:** OpenAI's open-weight 120B release — viable for simple assistant/coding tasks at self-host cost, but 2026 measurements show it well behind open peers on agentic, knowledge, and long-context dimensions.
- **Provider / access:** open weights (Apache 2.0); hosted at many providers (OpenRouter etc.); OpenAI-compatible serving.
- **Release / knowledge:** 2025-era; cutoff not verified in retrieved sources.
- **IDs:** `openai/gpt-oss-120b` (no Zen Free ID verified).
- **Context window:** 128K tokens (benchlm.ai).
- **Modalities:** text in/out (a single Design Arena row); non-reasoning base (benchlm.ai classification); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** open weights; hosted rates vary (no single verified rate in my sources).
- **Architecture:** open-weight 120B (MoE per family docs; active params not verified here).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **65.8%** (benchlm.ai)
- GDPval-AA: **745 Elo** (4.8% normalized); AA Agentic Index: **6.2%**; APEX-Agents-AA: **3.1%**; Gert Labs: **29.6%** (benchlm.ai)
- Terminal-Bench / Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.2%** (AA) (benchlm.ai)
- HLE (AA-HLE): **19.6%** (benchlm.ai)
- AA-LCR: **52.0%**; CritPt: **1.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **11.6**; BenchLM overall **37.76/100, #121 of 507**
- AA-Omniscience Index: **−49.2** — accuracy 21.8% / hallucination 90.8% (benchlm.ai)
- AA-IFBench: **69.0%** (benchlm.ai)

Coding:

- React Native Evals: **71.6%**; AA-SciCode: **34.0%**; AA Coding Index: **30.4** (benchlm.ai)
- SWE-bench / LiveCodeBench rows: no verified public score found

Long context:

- AA-LCR 52.0% within the 128K window (benchlm.ai).

Multimodal:

- Design Arena Website: **979 Elo** (benchlm.ai); text-primary.

### Normalized scores (1–100)

- **Tool use: 52/100.** τ² 65.8% okay; capped by GDPval 745 and Agentic Index 6.2% — not agent-ready.
- **Reasoning: 55/100.** GPQA 78.2% + IFBench 69% decent static QA; capped by HLE 19.6%, CritPt 1.1%, hallucination 90.8%.
- **Context window: 50/100.** 128K window (below 1M tier) with mediocre LCR 52.0%.
- **Multimodal: 30/100.** Text-primary; single Design Arena row; no vision-suite rows.
- **Coding: 52/100.** React Native 71.6% fine; capped by Coding Index 30.4, SciCode 34.0%, no SWE coverage.
- **Cost efficiency: 90/100.** Open weights (Apache 2.0) at 120B — cheap to run on commodity GPUs via quantizations.
- **Overall Score: 48/100.** Mean of the five quality dims (52+55+50+30+52)/5 = 47.8 → 48. Best fit: offline/self-hosted baselines and fine-tuning fodder; superseded by GLM/Qwen open models at similar cost.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
