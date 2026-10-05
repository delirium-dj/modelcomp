# GPT-5.6 Luna — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.6-luna`; max reasoning)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna (max)
- **Short description:** OpenAI's cost-sensitive GPT-5.6 model for high-volume coding, tool use, and reasoning, available through Chat Completions and Responses endpoints.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); Chat Completions `v1/chat/completions` and Responses `v1/responses`; OpenCode Zen `opencode/gpt-5.6-luna` Responses route.
- **Release / knowledge:** OpenAI model documentation gives a February 16, 2026 knowledge cutoff. Artificial Analysis and BenchLM list release on July 9, 2026.
- **IDs:** `gpt-5.6-luna`; OpenCode Zen ID `gpt-5.6-luna`.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API model documentation, verified 2026-09-24). BenchLM reports 1.05M.
- **Modalities:** Text and image input; text output; reasoning effort supports none, low, medium, high, xhigh, and max. Function calling, structured outputs, web search, file search, code interpreter, hosted shell, apply patch, skills, computer use, MCP, and tool search are supported through Responses.
- **Pricing (as of 2026-09-24):** $0.20 per 1M input tokens, $0.02 cached input, and $1.20 per 1M output tokens. Prompts over 272K input tokens are charged at 2x input and 1.5x output; cache writes are 1.25x uncached input.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **37/100**, rank **#5/173** (Artificial Analysis, accessed 2026-09-24)
- BenchLM overall: **64.9/100**, rank **#30/196** (BenchLM, accessed 2026-09-24; composite score with different methodology)
- OSWorld 2.0: **45.6%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- Terminal-Bench 2.1: **84.7%** provider-exact; **79.0%** on Vals AI harness (BenchLM)
- BrowseComp: **83.3%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- Toolathlon: **53.4%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- CyberGym: **77.9%**; ExploitGym: **12.4%**; ApprenticeBench: **7%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- GDPval-AA: **1582 Elo / 48.2% normalized** (OpenAI + Artificial Analysis, accessed 2026-10-05)
- APEX-Agents-AA: **35.8%**; AA Agentic Index: **42.7%** (Artificial Analysis, accessed 2026-10-05)
- Terminal-Bench 3.0: **14.3%** (FrontierBench leaderboard, accessed 2026-10-05) — a notably weak result on the older-generation suite, recorded as measured.
- Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Graduate-Level: **92.3%**; GPQA-D: **92.3%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- GPQA Diamond (Vals AI): **91.7%**; MMLU-Pro (Vals): **86.0%** (BenchLM, independent leaderboards)
- Artificial Analysis Intelligence Index: **37** at the 2026-09-24 reading; AA now lists **51.2%** on the current index (accessed 2026-10-05) — a large upward revision to the composite.
- AA-GPQA Diamond: **91.1%**; AA-HLE: **39.5%** (Artificial Analysis, accessed 2026-10-05)
- CritPt: **20.6%**; AA-LCR: **83.7%** (Artificial Analysis, accessed 2026-10-05)
- AA-Omniscience Index: **-10.3%**; Accuracy: **42.7%**; Hallucination Rate: **92.6%** (Artificial Analysis, accessed 2026-10-05). The 92.6% hallucination rate is the **worst in this refresh** and the negative index signals poorly calibrated knowledge — a material caution against the high AA composite.
- ARC-AGI-1: **88.0%** (max, ARC Prize verified); ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%** (ARC Prize verified, accessed 2026-10-05)
- FrontierMath v2 Tier 4: **58.5%**; Tiers 1–3: **78.6%** (OpenAI, accessed 2026-10-05)
- HealthBench Professional: **55.7%**; HealthBench Hard: **32.0%** (OpenAI, accessed 2026-10-05)
- MLCR: **no verified public exact value found**

Coding:

- SWE-bench Pro: **62.7%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- DeepSWE: **67.2%** (BenchLM, provider-exact OpenAI GPT-5.6 source)
- SWE-bench (Vals AI): **93.0%** (BenchLM, Cognition GPT-5.6 models in Devin source; harness-specific)
- Terminal-Bench 2.1: **84.7%** provider-exact; **79.0%** Vals harness
- CursorBench 3.2: **61.1%**; CursorBench 4.0: **35.9%**; FrontierCode 1.1 Extended: **55.1%** (BenchLM, provider/exact or independent source labels; CursorBench 4.0 accessed 2026-10-05)
- AA-SciCode: **53.6%**; AA Coding Index: **71.5%**; VulcanBench v3: **85.5%** (accessed 2026-10-05)
- LiveCodeBench and Vibe Code Bench: **no verified public exact value found**

Long context:

- OpenAI verifies a 1,050,000-token context window and 128K maximum output; long-context pricing changes above 272K input tokens.
- AA-LCR: **83.7%** (Artificial Analysis Long-Context Reasoning leaderboard, accessed 2026-10-05) — an independent retrieval result, newly available and strong.

Sources consulted: [OpenAI GPT-5.6 Luna model documentation](https://platform.openai.com/docs/models/gpt-5.6-luna), [OpenAI GPT-5.6 launch page](https://openai.com/index/gpt-5-6/), [OpenAI GPT-5.6 system card](https://deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf), [Artificial Analysis GPT-5.6 Luna](https://artificialanalysis.ai/models/gpt-5-6-luna), [BenchLM GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna) (page dated 2026-10-05, carrying the component rows quoted above), [ARC Prize](https://arcprize.org/results/openai-gpt-5-6), [FrontierBench](https://www.frontierbench.ai/) and [VulcanBench](https://vulcanbench.com/leaderboard.html), accessed 2026-10-05. Composite scores and benchmark harnesses are kept separate.

### Normalized scores (1–100)

- **Tool use: 91/100.** Cut from 93 on measured evidence. Solid: Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, CyberGym 77.9%, Toolathlon 53.4%, GDPval-AA 1582 Elo. But the newly available rows are weak where it matters: **Terminal-Bench 3.0 at 14.3%**, ApprenticeBench 7%, ExploitGym 12.4%, APEX-Agents-AA 35.8%, AA Agentic Index 42.7%, OSWorld 2.0 45.6%. It is a strong code agent, not a general computer-use agent.
- **Reasoning: 87/100.** Cut from 88. GPQA 92.3% (AA 91.1%), MMLU-Pro 86.0%, FrontierMath v2 Tier 4 **58.5%** and ARC-AGI-1 88.0% are solid. Offsetting: CritPt 20.6%, **AA-Omniscience Index -10.3% with a 92.6% hallucination rate** (worst measured in this refresh), ARC-AGI-2 59.5% and ARC-AGI-3 **0.2%**. Note the AA composite rose from 37 to 51.2 between the two readings, which the reliability figures do not support; the lower of the two readings is weighted here.
- **Context window: 99/100.** Raised from 98: 1.05M in / 128K out now backed by an independent AA-LCR **83.7%**, one of the strongest long-context retrieval results available.
- **Multimodal: 78/100.** Raised from 65: MMMU-Pro 78.4% (79.5% with Python) is a measured vision figure rather than an inference from a modality list. Still capped by no audio and no video input.
- **Coding: 90/100.** Cut from 91: DeepSWE 67.2%, SWE-bench Pro 62.7%, Terminal-Bench 2.1 84.7%, Vals SWE-bench 93.0%, VulcanBench v3 85.5%, AA Coding Index 71.5%, FrontierCode Extended 55.1%. CursorBench 4.0 at **35.9%** (down from 61.1% on 3.2) shows the harder current suite is a real weakness.
- **Cost efficiency: 96/100.** $0.20/$1.20 with a 90% cache discount is exceptionally inexpensive for a frontier tool-capable model, though long-context and cache-write surcharges apply.
- **Overall Score: 89.0/100.** (91 + 87 + 99 + 78 + 90) / 5 = 89.0, cost excluded. Best fit: high-volume coding and tool agents that need long context and multimodal image input at low token cost.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of OpenAI's official model documentation, the GPT-5.6 launch page and system card, Artificial Analysis, BenchLM, ARC Prize, FrontierBench and VulcanBench; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to fill the first pass's HLE/LCR/CritPt/MLCR/Omniscience/GDPval-AA/SciCode/Coding-Index rows with measured values, including Terminal-Bench 3.0 14.3%, CursorBench 4.0 35.9% and Omniscience Hallucination 92.6% as newly visible weaknesses, and the AA composite revision from 37 to 51.2.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
