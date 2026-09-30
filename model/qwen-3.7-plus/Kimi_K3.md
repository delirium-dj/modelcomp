# Qwen3.7 Plus — findings by Kimi K3

- Source: Alibaba / Qwen3.7 Plus (`qwen-3.7-plus`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's mid-tier Plus model of the Qwen3.7 era — exceptional multimodal video/document coverage (VideoMMMU 85.4%, OmniDocBench 91.4%) and strong math (HMMT 92.9%), but weak agentic depth (Agentic Index 19.7%).
- **Provider / access:** Alibaba Model Studio / DashScope (`qwen3.7-plus`), OpenRouter.
- **Release / knowledge:** 2026 (pre-3.8; exact date not verified in my sources); cutoff not verified.
- **IDs:** `qwen/qwen3.7-plus` (no Zen Free ID verified).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image/video in (VideoMMMU measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Plus-tier below Max ($2.50/$7.50) — provisional.
- **Architecture:** proprietary (Alibaba/Qwen); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **93.0%** (benchlm.ai)
- Claw-Eval: **62.7%**; QwenClawBench: **61.8%**; QwenWebBench: **1536** (benchlm.ai)
- Terminal-Bench 2.0: **70.3%**; TB 2.1 (Vals): **52.8%** (benchlm.ai)
- OSWorld-Verified: **73.3%** (note OSWorld 2.0: **2.8%**); AndroidWorld: **81.0%**; DeepPlanning: **62.3%** (benchlm.ai)
- BFCL v4: **72.9%**; MCP Atlas: **73.2%** (benchlm.ai)
- GDPval-AA: **886 Elo** (12.8% normalized); AA Agentic Index: **19.7%**; APEX-Agents-AA: **22.4%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.3%** (GPQA-D; AA 90.0%) (benchlm.ai)
- HLE: **34.7%**; AA-HLE 35.6% (benchlm.ai)
- MRCRv2: **91.7%**; AA-LCR: **73.0%**; CritPt: **9.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **25.2**; BenchLM overall **55.78/100, #50 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **22.5% / 27.7%** (benchlm.ai)
- HMMT Feb 2026: **92.9%**; IMOAnswerBench: **86.0%**; MMLU-Pro: **88.5%**; MMLU-Redux: **94.5%**; SuperGPQA: **71.4%** (benchlm.ai)

Coding:

- LiveCodeBench: **89.6%** (benchlm.ai)
- SWE-bench Verified: **77.7%**; SWE-bench Pro: **57.6%**; SWE Multilingual: **75.8%** (benchlm.ai)
- SciCode: **51.3%**; NL2Repo: **41.1%**; AA Coding Index: **55.9** (benchlm.ai)

Long context:

- MRCRv2: **91.7%** across the 1M window (benchlm.ai) — strong measured retrieval.

Multimodal:

- VideoMMMU: **85.4%**; Video-MME (sub): **88.0%**; MLVU: **87.4%**; OmniDocBench 1.5: **91.4%**; MathVision: **90.3%**; MMMU-Pro: **79.0%** (AA 80.5%); ScreenSpot Pro: **79.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ² 93%, AndroidWorld 81%, MCP Atlas 73.2% good; capped hard by GDPval-AA 886 and Agentic Index 19.7%.
- **Reasoning: 77/100.** GPQA ~90%, HMMT 92.9%, MRCRv2 91.7%; capped by HLE ~35% and CritPt 9.1%.
- **Context window: 88/100.** 1M window with MRCRv2 91.7% — verified strong retrieval.
- **Multimodal: 88/100.** Comprehensive video/doc vision suite (VideoMMMU 85.4%, OmniDocBench 91.4%); text-only output caps it.
- **Coding: 76/100.** LiveCodeBench 89.6%, SWE-bench Verified 77.7%; capped by Coding Index 55.9 and NL2Repo 41.1%.
- **Cost efficiency: 80/100.** Plus tier should be meaningfully below Max pricing; unverified — provisional.
- **Overall Score: 80/100.** Mean of the five quality dims (72+77+88+88+76)/5 = 80.2 → 80. Best fit: video/document understanding at 1M context on Alibaba's stack at Plus-tier pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
