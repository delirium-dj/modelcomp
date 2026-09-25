# MiniMax M3 — findings by Kimi K3

- Source: MiniMax / MiniMax M3 (`minimax-m3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's 2026 open-weight model — strong instruction following (IFBench 82.9%), τ²-bench tool use (88.9%) and video understanding at open-model prices; non-reasoning per BenchLM, with weak frontier knowledge scores.
- **Provider / access:** MiniMax API (OpenAI-compatible) and open weights; hosted by third-party providers.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `minimax/minimax-m3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image/video in (VideoMMMU, Video-MME measured); text out; reasoning: no (benchlm.ai classification); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; open weights typically self-host / low-cost API — provisional.
- **Architecture:** open weights (benchlm.ai); params not verified in my sources.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **88.9%** (benchlm.ai)
- Claw-Eval: **74.5%**; ResearchClawBench: **19.8%** (benchlm.ai)
- Terminal-Bench 2.1: **66.0%** (Vals 53.6%); terminalBenchHard: **42.4%** (benchlm.ai)
- MCP Atlas: **74.2%**; BrowseComp: **83.5%**; OSWorld-Verified: **70.1%** (note OSWorld 2.0: **4.6%**); BankerToolBench: **76.1%** (benchlm.ai)
- GDPval-AA: **1304 Elo** (36.5% normalized; rubrics 74.7%) (benchlm.ai)
- AA Harvey LAB: **88.4%**; AA Agentic Index: **30.8%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA); 92.7% (Vals) (benchlm.ai)
- HLE (AA-HLE): **39.0%** (benchlm.ai)
- AA-LCR: **83.0%**; MLCR-AA: **17.2%**; CritPt: **3.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.2**; BenchLM overall **54.86/100, #58 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **16.7% / 18.4%** — very low hallucination but very low knowledge accuracy (benchlm.ai)
- USAMO 2026: **85.7%**; MMLU-Pro (Vals): **84.2%**; AA-IFBench: **82.9%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.5%**; SWE-bench Pro: **59.0%**; SWE-bench (Vals): **75.0%** (benchlm.ai)
- LiveCodeBench (Vals): **82.2%** (benchlm.ai)
- AA-SciCode: **47.1%**; AA Coding Index: **58.6** (benchlm.ai)
- KernelBench Hard: **28.8%**; VIBE V2: **50.1%**; SVG-Bench: **63.7%** (benchlm.ai)

Long context:

- AA-LCR 83.0% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- VideoMMMU: **84.6%**; Video-MME (sub): **85.4%**; OmniDocBench 1.5: **91.6%**; MMMU-Pro: **78.1%** (AA 78.6%); Design Arena Website: **1269 Elo**; OfficeQA Pro: **45.1%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 88.9%, Claw-Eval 74.5%, MCP Atlas 74.2%, BrowseComp 83.5%; capped hard by OSWorld 2.0 (4.6%) and AnalystAgent 10%.
- **Reasoning: 72/100.** GPQA ~93%, USAMO 85.7%, LCR 83.0%; capped by HLE 39.0%, CritPt 3.7%, and floor-level Omniscience accuracy (16.7%).
- **Context window: 86/100.** 1M window with LCR 83.0%; capped by missing max-window probes.
- **Multimodal: 84/100.** Genuine video strength (VideoMMMU 84.6%, Video-MME 85.4%) plus docs (OmniDocBench 91.6%); text-only output caps it.
- **Coding: 75/100.** SWE-bench Verified 80.5%, LiveCodeBench 82.2%; capped by Coding Index 58.6 and KernelBench Hard 28.8%.
- **Cost efficiency: 88/100.** Open weights; score provisional pending hosted price confirmation.
- **Overall Score: 80/100.** Mean of the five quality dims (82+72+86+84+75)/5 = 79.8 → 80. Best fit: open-weight video/doc understanding and tool-calling workloads where low hallucination matters more than raw knowledge breadth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
