# Qwen3.8-Max — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`qwen3.8-max`, snapshot `0902`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (0902)
- **Short description:** Alibaba's flagship proprietary Qwen model for multimodal reasoning, professional work, long-horizon agents, and coding.
- **Provider / access:** Alibaba Cloud Model Studio; Artificial Analysis identifies the 0902 snapshot. The reviewed Alibaba documentation page found was an older `qwen-max` entry and did not expose Qwen3.8-Max's current limits.
- **Release / knowledge:** Artificial Analysis lists release on 2026-09-02; BenchLM lists an August 3, 2026 release for the family. These dates conflict and are retained as source-specific; no reliable knowledge cutoff was shown.
- **IDs:** `qwen3.8-max`; snapshot `qwen3.8-max-0902` is the evaluated configuration.
- **Context window:** Artificial Analysis reports 984K tokens; BenchLM reports 1M. The exact official output limit was not found. BenchLM's per-model page for the Preview variant now lists context as "Coming soon", which does not contradict the 1M figure recorded for the evaluated 0902 configuration.
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
- GDPval-AA: **1630 Elo / 58.6% normalized** (Artificial Analysis GDPval-AA leaderboard, accessed 2026-10-05)
- APEX-Agents-AA: **42.4%** (Artificial Analysis, accessed 2026-10-05)
- AA Agentic Index: **49.6%** (Artificial Analysis, accessed 2026-10-05)
- Tau3-Banking, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public score found** in the reviewed sources

Reasoning / knowledge:

- GPQA Graduate-Level: **92.6%** (BenchLM, provider-exact Qwen release benchmark)
- GPQA Diamond (Vals AI): **93.7%** (BenchLM, Vals AI leaderboard)
- GPQA-D: **92.6%** (BenchLM, provider-exact Qwen release benchmark)
- AA-GPQA Diamond: **92.8%** (Artificial Analysis GPQA-Diamond leaderboard, accessed 2026-10-05) — independent run, closely corroborating the vendor figure
- HLE without tools: **43.6%** (BenchLM, provider-exact Qwen release benchmark)
- HLE with tools: **56.2%** (BenchLM, provider-exact Qwen release benchmark; kept separate from no-tools)
- AA-HLE: **43.1%** (Artificial Analysis HLE leaderboard, accessed 2026-10-05)
- CritPt: **17.7%** (Artificial Analysis CritPt leaderboard, accessed 2026-10-05)
- AA-LCR: **80.3%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05)
- AA-Omniscience Index: **12.0%**; AA-Omniscience Accuracy: **31.7%**; Hallucination Rate: **28.8%** (Artificial Analysis, accessed 2026-10-05)
- MLCR: **no verified public score found**

Coding:

- Terminal-Bench 2.1: **86.6%** provider-exact; Vals harness **67.4%**
- DeepSWE: **56.6%** (BenchLM, provider-exact Qwen release benchmark)
- FrontierSWE: **73.5%** (BenchLM, provider-exact Qwen release benchmark)
- SWE-bench (Vals AI): **85.6%**
- LiveCodeBench (Vals AI): **87.9%** (BenchLM, Vals AI leaderboard)
- AA-SciCode: **52.1%** (Artificial Analysis SciCode leaderboard, accessed 2026-10-05)
- AA Coding Index: **71.8%** (Artificial Analysis, accessed 2026-10-05)
- OpenHarmony Bench: **56.0%** (OpenHarmony official leaderboard, accessed 2026-10-05)
- Vibe Code Bench and exact SWE-bench Verified: **no verified public score found**

Long context:

- AA-MMMU-Pro: **82.8%** (Artificial Analysis MMMU-Pro leaderboard, accessed 2026-10-05) — an independent multimodal reasoning figure, newly available and well above the E-tier/Qwen-Flash band
- MRCRv2: **92.9%** (BenchLM, provider-exact Qwen release benchmark)
- AA-LCR: **80.3%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent long-context retrieval result, newly available
- Context capacity is reported as 984K by Artificial Analysis and 1M by BenchLM; no additional independent retrieval-at-length result was found.

Sources consulted: [Artificial Analysis Qwen3.8 Max](https://artificialanalysis.ai/models/qwen3-8-max), [BenchLM Qwen3.8 Max](https://benchlm.ai/models/qwen3-8-max), [BenchLM Qwen3.8 Max Preview](https://benchlm.ai/models/qwen3-8-max-preview) (page dated 2026-10-05, carrying the AA component rows quoted above), [OpenHarmony Bench leaderboard](https://bench.matrix.openharmony.cn/), and [Alibaba Cloud qwen-max documentation](https://help.aliyun.com/zh/model-studio/qwen-max), accessed 2026-10-05. The Alibaba page is explicitly older than the Qwen3.8-Max snapshot and is not used to overwrite newer model facts.

### Normalized scores (1–100)

- **Tool use: 93/100.** OSWorld-Verified 86.1%, Terminal-Bench 86.6% on the provider-exact harness, GDPval-AA 1630 Elo, APEX-Agents-AA 42.4% and AA Agentic Index 49.6% support a high score; the 67.4% Vals Terminal-Bench row shows harness sensitivity. Nudged down from 94 because the newly available independent agentic composites (49.6 Agentic Index, 42.4 APEX-Agents) sit mid-pack against GPT-6-class models rather than at the frontier.
- **Reasoning: 93/100.** GPQA is 92.6–93.7% across sources, independently corroborated by AA-GPQA-Diamond 92.8%, and HLE is 43.6% without tools / 56.2% with tools with AA-HLE 43.1% agreeing. Raised from 92 on the strength of three independent AA measurements now backing the vendor numbers; CritPt 17.7% and Omniscience Accuracy 31.7% still cap confidence.
- **Context window: 95/100.** The model has a reported 984K–1M context, MRCRv2 92.9%, and now an independent AA-LCR 80.3% — unusually strong measured long-context evidence from two sources.
- **Multimodal: 92/100.** Artificial Analysis verifies text/image input, and the newly published AA-MMMU-Pro 82.8% is a measured independent multimodal reasoning figure rather than an inference from modality lists. Raised from 90 on that evidence; no official video capability is claimed.
- **Coding: 93/100.** Terminal-Bench 86.6%, DeepSWE 56.6%, FrontierSWE 73.5%, LiveCodeBench 87.9%, plus new AA-SciCode 52.1%, AA Coding Index 71.8% and OpenHarmony Bench 56.0%, provide strong coding evidence with harness differences clearly labeled.
- **Cost efficiency: 88/100.** The reported $2/$6 price and 88% cache discount are attractive for a frontier proprietary model, though task cost is $5.41 on AA.
- **Overall Score: 93.2/100.** (93 + 93 + 95 + 92 + 93) / 5 = 93.2, cost excluded. Best fit: multimodal professional agents, coding, and long-context work where Alibaba's Qwen toolchain and measured 1M-class context are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of Artificial Analysis, BenchLM, the OpenHarmony leaderboard, and Alibaba documentation with source-specific dates and harness labels; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to add the Artificial Analysis component rows (GDPval-AA, APEX-Agents-AA, AA Agentic/LCR/CritPt/SciCode/Coding-Index/MMMU-Pro/Omniscience) published since the 2026-09-24 first pass.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
