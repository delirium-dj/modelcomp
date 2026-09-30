# MiniMax M3 — findings by Kimi K3

- Source: MiniMax / MiniMax M3 (`minimax-m3`; weights via HF `MiniMaxAI`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 open-weight model — the first open-weight release combining frontier-class coding/agentic, 1M-token context (MSA architecture), and native multimodal input (minimax.io). Strong instruction following (IFBench 82.9%), τ²-bench tool use (88.9%) and video understanding at open-model prices; weak frontier knowledge scores.
- **Provider / access:** MiniMax API (OpenAI-compatible `MiniMax-M3`), open weights on HF `MiniMaxAI` (private deployment + fine-tuning supported), OpenRouter `minimax/minimax-m3` (13 providers from $0.23/$0.96), Requesty and other aggregators.
- **Release / knowledge:** Released 2026-06-01 (llm-stats.com, codersera.com, felloai.com); knowledge cutoff not verified.
- **IDs:** `minimax-m3` (OpenCode Zen, $0.30/$1.20); `minimax/minimax-m3` (OpenRouter); `MiniMax-M3` (MiniMax API).
- **Context window:** 1M tokens (1,048,576; OpenRouter max output 262,144); official page notes "up to 1M with guaranteed minimum 512K" on the API.
- **Modalities:** text/image/video in (VideoMMMU, Video-MME measured; native multimodal pretraining per minimax.io); no public audio-input evidence; text out; no explicit reasoning mode documented (benchlm.ai classification); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** official $0.30/M input ($0.06/M cached), $1.20/M output (aiapiindex.com, requesty.ai); third-party from $0.28/$0.056/$1.10 (llm-stats.com) and $0.23/$0.96 on OpenRouter; Token Plan unchanged-price upgrade for existing subscribers (minimax.io).
- **Architecture:** open weights; proprietary MiniMax Sparse Attention (MSA); total/active params not verified in my sources.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **88.9%** (benchlm.ai)
- Claw-Eval: **74.5%**; ResearchClawBench: **19.8%** (benchlm.ai)
- Terminal-Bench 2.1: **66.0%** (Vals 53.6%); terminalBenchHard: **42.4%** (benchlm.ai)
- MCP Atlas: **74.2%**; BrowseComp: **83.5%** (officially vs Opus 4.7's 79.3 — minimax.io); OSWorld-Verified: **70.1%** (note OSWorld 2.0: **4.6%**); BankerToolBench: **76.1%** (benchlm.ai)
- GDPval-AA: **1304 Elo** (36.5% normalized; rubrics 74.7%) (benchlm.ai)
- AA Harvey LAB: **88.4%**; AA Agentic Index: **30.8%** (benchlm.ai)
- PostTrainBench: **37.1, #3 overall** — behind Opus 4.7 (42.4) and GPT-5.5 (39.3) (minimax.io vendor figure)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA); 92.7% (Vals) (benchlm.ai)
- HLE (AA-HLE): **39.0%** (benchlm.ai)
- AA-LCR: **83.0%**; MLCR-AA: **17.2%**; CritPt: **3.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **45.4** (requesty.ai snapshot, 2026-08; previously listed 29.2 on an earlier index scale); BenchLM overall **54.55/100** (benchlm.ai, 2026-09; previously 54.86, #58 of 507 before leaderboard re-slicing)
- AA-Omniscience Accuracy / Hallucination Rate: **16.7% / 18.4%** — very low hallucination but very low knowledge accuracy (benchlm.ai)
- USAMO 2026: **85.7%**; MMLU-Pro (Vals): **84.2%**; AA-IFBench: **82.9%** (benchlm.ai)

Coding:

- SWE-bench Verified: **80.5%**; SWE-bench Pro: **59.0%**; SWE-bench (Vals): **75.0%** (benchlm.ai)
- LiveCodeBench (Vals): **82.2%** (benchlm.ai)
- AA-SciCode: **47.1%**; AA Coding Index: **58.6** (benchlm.ai)
- KernelBench Hard: **28.8%**; VIBE V2: **50.1%**; SVG-Bench: **63.7%** (benchlm.ai)
- Vendor long-horizon demos: 12-hour autonomous ICLR paper replication (18 commits, 23 figures); CUDA FP8 GEMM optimization 147 submissions / 1,959 tool calls → 9.4× speedup (minimax.io — unverified demos)

Long context:

- AA-LCR 83.0% at the 1M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- VideoMMMU: **84.6%**; Video-MME (sub): **85.4%**; OmniDocBench 1.5: **91.6%**; MMMU-Pro: **78.1%** (AA 78.6%); Design Arena Website: **1269 Elo**; OfficeQA Pro: **45.1%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 88.9%, Claw-Eval 74.5%, MCP Atlas 74.2%, BrowseComp 83.5%; capped hard by OSWorld 2.0 (4.6%) and AnalystAgent 10%.
- **Reasoning: 72/100.** GPQA ~93%, USAMO 85.7%, LCR 83.0%; capped by HLE 39.0%, CritPt 3.7%, and floor-level Omniscience accuracy (16.7%).
- **Context window: 95/100.** Full 1M window (top band) with AA-LCR 83.0%; capped slightly by the API's 512K guaranteed-minimum caveat and missing max-window retrieval probes.
- **Multimodal: 84/100.** Genuine video strength (VideoMMMU 84.6%, Video-MME 85.4%) plus docs (OmniDocBench 91.6%) — but no verified audio input, so below the full omni band; text-only output caps it.
- **Coding: 75/100.** SWE-bench Verified 80.5%, LiveCodeBench 82.2%; capped by Coding Index 58.6 and KernelBench Hard 28.8%.
- **Cost efficiency: 93/100.** Verified $0.30/$1.20 per 1M ($0.06 cached) on the official API — squarely in the cheap-tier band; OpenRouter undercuts to $0.23/$0.96; open weights free to self-host.
- **Overall Score: 81.6/100.** Mean of the five quality dims (82+72+95+84+75)/5 = 81.6. Best fit: open-weight video/doc understanding and tool-calling workloads where low hallucination matters more than raw knowledge breadth.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (minimax.io official M3 page, benchlm.ai scorecard, llm-stats.com, openrouter.ai, requesty.ai, aiapiindex.com); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release pinned to 2026-06-01; pricing verified ($0.30/$1.20 official, $0.06 cache hit; OpenRouter $0.23/$0.96; Zen `minimax-m3`); AA Intelligence Index updated 29.2→45.4 (newer snapshot); BenchLM 54.86→54.55 after leaderboard re-slicing; PostTrainBench 37.1 #3 and vendor long-horizon demos added; max output 262,144 (OpenRouter); Context 86→95 per 1M band; Cost 88→93 per $0.30/$1.20 band; Overall 79.8→81.6.
- Future sources: add a new file next to this one using the same headings.
