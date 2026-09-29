# Qwen3.8-Max — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`qwen3.8-max`, snapshot `0902`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (0902)
- **Short description:** Alibaba's flagship proprietary Qwen model for multimodal reasoning, professional work, long-horizon agents, and coding.
- **Provider / access:** Alibaba Cloud Model Studio; OpenCode Zen `qwen3.8-max`; Artificial Analysis identifies the 0902 snapshot and evaluates it against Alibaba's first-party API.
- **Release / knowledge:** Artificial Analysis lists release on 2026-09-02; BenchLM lists an August 3, 2026 release for the family. These dates conflict and are retained as source-specific; no reliable knowledge cutoff was shown.
- **IDs:** `qwen3.8-max`; snapshot `qwen3.8-max-0902` is the evaluated configuration.
- **Context window:** Artificial Analysis reports 984K tokens (its FAQ text also says 980K); BenchLM reports 1M. The exact official output limit was not found.
- **Modalities:** Text and image input; text output; reasoning supported. BenchLM's provider-exact release data also reports video and multimodal benchmark results, but an exact official modality table was not available.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports **$2.00 per 1M input and $6.00 per 1M output** tokens with an **88% cache discount** (cached input $0.25, cached write $2.50), giving a blended 7:2:1 rate of $1.18 per 1M. OpenCode Zen lists the same $2.00/$6.00 with cached read $0.25 and cached write $2.50. BenchLM says no comparable first-party catalog price was published.
- **Architecture:** Proprietary; Alibaba has not disclosed a verified parameter count in the reviewed pages.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Intelligence Index: 45** on **v4.3.2**, rank **#27/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark over 10 evaluations). This is the current v4.3.2 index, superseding the earlier 45/100 on the prior index version at rank #24/210.
- Terminal-Bench 2.1: **86.6%** (BenchLM, provider-exact Qwen release benchmark)
- Terminal-Bench 2.1 (Vals AI): **67.4%** (BenchLM, Vals AI leaderboard; different harness)
- OSWorld-Verified: **86.1%** (BenchLM, provider-exact Qwen release benchmark)
- SWE-bench (Vals AI): **85.6%** (BenchLM, Vals AI leaderboard)
- GDPval-AA, Tau3-Banking, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- GPQA Graduate-Level: **92.6%** (BenchLM, provider-exact Qwen release benchmark)
- GPQA Diamond (Vals AI): **93.7%** (BenchLM, Vals AI leaderboard)
- GPQA-D: **92.6%** (BenchLM, provider-exact Qwen release benchmark)
- HLE without tools: **43.6%** (BenchLM, provider-exact Qwen release benchmark)
- HLE with tools: **56.2%** (BenchLM, provider-exact Qwen release benchmark; kept separate from no-tools)
- v4.3.2 Intelligence Index composition: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1
- LCR/MLCR, CritPt, and hallucination metrics as standalone values: **no verified public score found**

Coding:

- Terminal-Bench 2.1: **86.6%** provider-exact; Vals harness **67.4%**
- DeepSWE: **56.6%** (BenchLM, provider-exact Qwen release benchmark)
- FrontierSWE: **73.5%** (BenchLM, provider-exact Qwen release benchmark)
- SWE-bench (Vals AI): **85.6%**
- LiveCodeBench (Vals AI): **87.9%** (BenchLM, Vals AI leaderboard)
- SciCode / AA-SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public score found**

Long context:

- MRCRv2: **92.9%** (BenchLM, provider-exact Qwen release benchmark)
- Context capacity is reported as 984K by Artificial Analysis and 1M by BenchLM; no additional independent retrieval-at-length result was found.

Speed, verbosity, and cost:

- **Output speed: 38.2 tok/s** on Alibaba's API against a 79.1 t/s peer median — the model ranks **#166/216 for speed** and is described as notably slow (Artificial Analysis, accessed 2026-09-29). TokenDyno independently shows the Zen/OpenCode Go route at 39.7 tok/s (24h) and 42.6 tok/s current, 1.6 s TTFT, 75% reliability, confirming the same bottom-decile throughput.
- **Verbosity: 190M output tokens** on the Intelligence Index versus an 88M peer median, ranking **#93/216** (Artificial Analysis, 2026-09-29).
- **Cost: $5.41 per Intelligence Index task**, ranking **#94/216** (Artificial Analysis, 2026-09-29).
- TTFT: **3.00 s** on Alibaba's API, better than the 3.89 s peer median (Artificial Analysis, 2026-09-29).

Sources consulted: [Artificial Analysis Qwen3.8 Max](https://artificialanalysis.ai/models/qwen3-8-max), [BenchLM Qwen3.8 Max](https://benchlm.ai/models/qwen3-8-max), [TokenDyno](https://tokendyno.com/), and [Alibaba Cloud qwen-max documentation](https://help.aliyun.com/zh/model-studio/qwen-max), accessed 2026-09-29. The Alibaba `qwen-max` page is explicitly older than the Qwen3.8-Max snapshot and is not used to overwrite newer model facts.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld-Verified 86.1%, Terminal-Bench 86.6% on the provider-exact harness, and a v4.3.2 Intelligence Index of 45 (#27/216) support a high score. The 67.4% Vals Terminal-Bench row shows harness sensitivity.
- **Reasoning: 92/100.** GPQA is 92.6–93.7% across sources and HLE is 43.6% without tools / 56.2% with tools, supporting frontier reasoning; missing standalone LCR/CritPt values cap confidence.
- **Context window: 95/100.** The model has a reported 984K–1M context and MRCRv2 92.9%, providing unusually strong measured long-context evidence.
- **Multimodal: 90/100.** Artificial Analysis verifies text/image input; BenchLM reports multimodal/video benchmark results, though the exact official modality list was not available.
- **Coding: 93/100.** Terminal-Bench 86.6%, DeepSWE 56.6%, FrontierSWE 73.5%, and LiveCodeBench 87.9% provide strong coding evidence, with harness differences clearly labeled.
- **Cost efficiency: 84/100.** The $2/$6 sticker price with an 88% cache discount is attractive for a frontier proprietary model, but real measured cost is **$5.41 per Intelligence Index task** because the model is bottom-decile for speed (**38.2 tok/s**) and very verbose (**190M** output tokens on the index). The nominal rate materially overstates the value per task.
- **Overall Score: 92.8/100.** (94 + 92 + 95 + 90 + 93) / 5 = 464 / 5 = 92.8. Cost efficiency is excluded from this mean. Best fit: multimodal professional agents, coding, and long-context work where Alibaba's Qwen toolchain and measured 1M-class context are valuable; budget for latency if interactive speed matters.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Artificial Analysis (v4.3.2), BenchLM, TokenDyno, and Alibaba documentation with source-specific dates and harness labels; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Qwen3_8_Max.md`, using the same headings.
