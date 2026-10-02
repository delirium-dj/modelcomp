# Qwen3.7 Max — findings by Kimi K3

- Source: Alibaba / Qwen3.7 Max (`qwen-3.7` flagship)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** Alibaba's pre-3.8 flagship of the Qwen3 line — the model Qwen3.8 Max replaced in August 2026. Strong math (HMMT 97.1%), long-context retrieval (MRCRv2 90.4%), and LiveCodeBench 91.6%.
- **Provider / access:** Alibaba Model Studio / DashScope (`qwen3.7-max`), OpenRouter.
- **Release / knowledge:** 2026 release before 3.8 (2026-08-03); exact date not verified in my sources; cutoff not verified.
- **IDs:** `qwen/qwen3.7-max` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (Design Arena row; family is multimodal); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $2.50/M input, $7.50/M output (Qwen pricing table via emergent.sh's Qwen3.8 launch comparison).
- **Architecture:** proprietary (benchlm.ai); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%**; TB 2.1 (Vals): **61.0%** (benchlm.ai)
- τ²-bench (Tau2-Bench): **94.7%** (benchlm.ai)
- GDPval-AA: **1190 Elo** (30.7% normalized) (benchlm.ai)
- Claw-Eval: **65.2%**; QwenClawBench: **64.3%**; QwenWebBench: **1568**; ResearchClawBench: **18.7%** (benchlm.ai)
- BFCL v4: **75.0%**; MCP Atlas: **76.4%**; HLE w/ tools: **53.5%**; VITA-Bench: **47.9%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (GPQA-D; AA 92.3%; Vals 90.2%) (benchlm.ai)
- HLE: **41.4%**; AA-HLE 40.5%; HLE w/ tools 53.5% (benchlm.ai)
- MRCRv2: **90.4%**; AA-LCR: **79.0%**; CritPt: **13.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.5**; BenchLM overall **63.18/100, #34 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **31.1% / 25.6%** — very low hallucination (benchlm.ai)
- HMMT Feb 2026: **97.1%**; IMOAnswerBench: **90.0%**; MMLU-Pro: **89.6%**; MMLU-Redux: **95.0%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.4%**; SWE-bench Pro: **60.6%**; SWE Multilingual: **78.3%**; SWE-bench (Vals): **68.8%** (benchlm.ai)
- LiveCodeBench: **91.6%** (Vals 87.1%) (benchlm.ai)
- SciCode: **53.5%**; AA-SciCode: **49.5%**; NL2Repo: **47.2%**; AA Coding Index: **66.0** (benchlm.ai)

Long context:

- MRCRv2: **90.4%** (multi-round retrieval, up to 1M window) (benchlm.ai).

Multimodal:

- Design Arena Website: **1283 Elo** (benchlm.ai); no MMMU/CharXiv row at this ID (multimodal tests shipped on Max family cards, coverage thin here).

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 94.7%, BFCL v4 75.0%, MCP Atlas 76.4%, Claw-Eval 65.2%; capped by GDPval-AA 1190 (30.7%) and Agentic Index 23.9%.
- **Reasoning: 82/100.** HMMT 97.1%, GPQA ~92.4%, MRCRv2 90.4%, low hallucination (25.6%); capped by HLE ~41%, CritPt 13.4%, AA Index 29.5.
- **Context window: 88/100.** 1M window with MRCRv2 90.4% measured — verified strong retrieval.
- **Multimodal: 66/100.** Image input confirmed but near-zero public vision rows at this ID (single Design Arena row); capped accordingly.
- **Coding: 81/100.** LiveCodeBench 91.6%, SWE-bench Verified 80.4%; capped by SWE-bench Pro 60.6% and shallow repo-level scores (NL2Repo 47.2%).
- **Cost efficiency: 78/100.** $2.50/$7.50 per 1M — a third of US flagship pricing; superseded by cheaper-stronger 3.8 Max.
- **Overall Score: 80/100.** Mean of the five quality dims (82+82+88+66+81)/5 = 79.8 → 80. Best fit: Alibaba-stack math/agent workloads at low cost; 3.8 Max dominates it on capability per dollar.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, emergent.sh pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
