# Qwen3.8-Max — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`qwen3.8-max`, snapshot `0902`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (0902)
- **Short description:** Alibaba's flagship proprietary Qwen model for multimodal reasoning, professional work, long-horizon agents, and coding.
- **Provider / access:** Alibaba Cloud Model Studio; Artificial Analysis identifies the 0902 snapshot. The reviewed Alibaba documentation page found was an older `qwen-max` entry and did not expose Qwen3.8-Max's current limits.
- **Release / knowledge:** Artificial Analysis lists release on 2026-09-02; BenchLM lists an August 3, 2026 release for the family. These dates conflict and are retained as source-specific; no reliable knowledge cutoff was shown.
- **IDs:** `qwen3.8-max`; snapshot `qwen3.8-max-0902` is the evaluated configuration.
- **Context window:** Artificial Analysis reports 984K tokens; BenchLM reports 1M. The exact official output limit was not found.
- **Modalities:** Text and image input; text output; reasoning supported. BenchLM's provider-exact release data also reports video and multimodal benchmark results, but an exact official modality table was not available.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $2.00 per 1M input and $6.00 per 1M output tokens, with an 88% cache discount; BenchLM says no comparable first-party catalog price was published.
- **Architecture:** Proprietary; Alibaba has not disclosed a verified parameter count in the reviewed pages.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **45/100**, rank **#24/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
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
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

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

Sources consulted: [Artificial Analysis Qwen3.8 Max](https://artificialanalysis.ai/models/qwen3-8-max), [BenchLM Qwen3.8 Max](https://benchlm.ai/models/qwen3-8-max), and [Alibaba Cloud qwen-max documentation](https://help.aliyun.com/zh/model-studio/qwen-max), accessed 2026-09-24. The Alibaba page is explicitly older than the Qwen3.8-Max snapshot and is not used to overwrite newer model facts.

### Normalized scores (1–100)

- **Tool use: 94/100.** OSWorld-Verified 86.1%, Terminal-Bench 86.6% on the provider-exact harness, and strong agent orientation support a high score. The 67.4% Vals Terminal-Bench row shows harness sensitivity.
- **Reasoning: 92/100.** GPQA is 92.6–93.7% across sources and HLE is 43.6% without tools / 56.2% with tools, supporting frontier reasoning; missing LCR/CritPt values cap confidence.
- **Context window: 95/100.** The model has a reported 984K–1M context and MRCRv2 92.9%, providing unusually strong measured long-context evidence.
- **Multimodal: 90/100.** Artificial Analysis verifies text/image input; BenchLM reports multimodal/video benchmark results, though the exact official modality list was not available.
- **Coding: 93/100.** Terminal-Bench 86.6%, DeepSWE 56.6%, FrontierSWE 73.5%, and LiveCodeBench 87.9% provide strong coding evidence, with harness differences clearly labeled.
- **Cost efficiency: 88/100.** The reported $2/$6 price and 88% cache discount are attractive for a frontier proprietary model, though task cost is $5.41 on AA.
- **Overall Score: 92.8/100.** (94 + 92 + 95 + 90 + 93) / 5 = 92.8. Best fit: multimodal professional agents, coding, and long-context work where Alibaba's Qwen toolchain and measured 1M-class context are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis, BenchLM, and Alibaba documentation with source-specific dates and harness labels; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
