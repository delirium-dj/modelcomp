# Qwen3.8 Max — findings by Kimi K3

- Source: Alibaba / Qwen3.8 Max (`qwen3.8-max`; open weights `Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's open-weight 2.4T-A95B MoE flagship (HF model card live) — exceptional multimodal suite (MathVision 95.2, CharXiv 93.5, Video MMUs ~85–91%) with strong agentic numbers and 1M context. Distinct deployments: this folder tracks the Max flagship (incl. the 0902 refresh); see `qwen-3.8` for the base-release view.
- **Provider / access:** Alibaba Model Studio/DashScope (`qwen3.8-max`), OpenRouter; open weights at huggingface.co/Qwen/Qwen3.8-2.4T-A95B (benchlm.ai cites it as official card).
- **Release / knowledge:** Base released 2026-08-03; 0902 refresh (qwen3.8-max-0902) published September 2026 (blog.buildfastwithai.com); knowledge cutoff not verified.
- **IDs:** `qwen/qwen3.8-max` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image/video in (24 multimodal bench rows measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $2.00/M input, $6.00/M output, $0.25/M cached (Qwen release/VentureBeat via emergent.sh).
- **Architecture:** 2.4T total / 95B active params, MoE, open weights (benchlm.ai lists Source Type: Open Weight).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (benchlm.ai; Vals harness 67.4%); Terminal-Bench 3.0 (0902): **29.0%** (vendor delta, blog.buildfastwithai.com)
- OSWorld-Verified: **86.1%** (note OSWorld 2.0: 19.4%); AndroidWorld: **85.3%**; MobileWorld: **77.8%**; WebArena-Verified: **66.8%** (benchlm.ai)
- Toolathlon-Verified: **72.5%**; Agents' Last Exam: **52.4%**; WideResearch: **81.9%**; CoWorkBench: **74.8%**; skillsBench: **70.2%** (benchlm.ai)
- HLE w/ tools: **56.2%** (benchlm.ai)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (GPQA-D; Vals 93.7%) (benchlm.ai)
- HLE: **43.6%** (no tools); 56.2% (w/ tools) (benchlm.ai)
- MRCRv2: **92.9%**; LongBench v2: **66.3%** (benchlm.ai)
- IFBench: **82.8%** (benchlm.ai)
- BenchLM overall: **71.8/100, #12 of 507**
- AA-Omniscience / CritPt / LCR: no verified public score found

Coding:

- SWE-bench (Vals): **85.6%**; SWE-bench Pro: **67.7%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.9%** (benchlm.ai)
- DeepSWE: **56.6%** (0902 refresh: **69.3%**, vendor delta); FrontierSWE: **73.5%**; FrontierSWE v2: **15.8%** (benchlm.ai)
- PaperBench: **93.0%**; NL2Repo: **55.9%**; VulcanBench v3: **81.2%** (benchlm.ai)
- Code Arena WebDev (0902): **1681** preliminary (blog.buildfastwithai.com)

Long context:

- MRCRv2: **92.9%** at up-to-1M multi-round retrieval (benchlm.ai); LongBench v2 66.3%.

Multimodal (sweep, benchlm.ai): MathVision 95.2% (w/ Python 97.7%), CharXiv 93.5%, OmniDocBench 1.5 92.1%, VideoMMMU 88.7%, MLVU 90.8%, LVBench 81.8%, ScreenSpot Pro 84.5%, ZeroBench w/ Python 49.0%.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 86.6%, OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon 72.5%; capped by OSWorld 2.0 19.4% and missing AA GDPval/Tau3 rows.
- **Reasoning: 84/100.** GPQA 92.6%, HLE w/ tools 56.2%, MRCRv2 92.9%, IFBench 82.8%; capped by HLE no-tools 43.6%.
- **Context window: 92/100.** 1M window with MRCRv2 92.9% — verified strong long-context retrieval; capped slightly by LongBench v2 66.3%.
- **Multimodal: 93/100.** Deep vision/video sweep (MathVision 95.2, VideoMMMU 88.7, CharXiv 93.5) — best multimodal coverage measured this cohort; text-only output caps nothing here since input breadth dominates.
- **Coding: 84/100.** SWE-bench (Vals) 85.6%, LiveCodeBench 87.9%, PaperBench 93.0%, FrontierSWE 73.5%; capped by SWE-bench Pro 67.7% and FrontierSWE v2 15.8%.
- **Cost efficiency: 85/100.** $2/$6 per 1M with open weights — a third of Claude Opus 5's rate for comparable top-table claims.
- **Overall Score: 88/100.** Mean of the five quality dims (86+84+92+93+84)/5 = 87.8 → 88. Best fit: open-weight frontier multimodal + agentic stack at very aggressive pricing; verify vendor-run rows before production trust.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, emergent.sh launch-table analysis, blog.buildfastwithai.com 0902 refresh); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
