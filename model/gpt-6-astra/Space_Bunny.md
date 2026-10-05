# GPT-6 Astra — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (max effort)
- **Short description:** OpenAI's highest-capability model for difficult end-to-end reasoning, coding, computer use, research, and document creation.
- **Provider / access:** OpenAI API (`gpt-6-astra`); Responses API, Chat Completions, and other listed endpoints. The model supports reasoning effort levels low, medium, high, xhigh, and max.
- **Release / knowledge:** Artificial Analysis lists September 2026; no exact day was shown in the reviewed pages. OpenAI documents an April 30, 2026 knowledge cutoff.
- **IDs:** `gpt-6-astra`; the evaluated configuration is max reasoning effort.
- **Context window:** 1,050,000 tokens; 128,000 maximum output tokens (OpenAI API documentation, verified 2026-09-24; BenchLM independently lists 1.05M, verified 2026-10-05).
- **Modalities:** Text and image input; text output. Audio and video are not supported. Function calling and structured outputs are supported.
- **Pricing (as of 2026-09-24):** $10.00 per 1M input tokens, $50.00 per 1M output tokens; cached input $1.00 and cache writes $12.50. Prompts over 272K input tokens receive higher long-context rates; batch/Flex are 50% of standard and fast mode is 2x (OpenAI API documentation).
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **53/100**, rank **#6/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **52.5 tokens/s**; Intelligence Index task cost: **$3.26** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 4.0: **57.9%** (OpenAI); **59.1%** (Artificial Analysis leaderboard) (accessed 2026-10-05)
- Terminal-Bench 2.1: **87.3%** (Vals AI); **88.4%** (Artificial Analysis) (accessed 2026-10-05)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI) — the highest of the compared frontier models (accessed 2026-10-05)
- Tau3-Banking: **41.4%** (Artificial Analysis Tau3-Banking leaderboard, accessed 2026-10-05)
- GDPval-AA: **1542 Elo / 52.1% normalized**; AA-Briefcase: **1569 Elo**; GDP.pdf: **31.0%** (Artificial Analysis, accessed 2026-10-05)
- AA Agentic Index: **51.5%**; AA AutomationBench: **68.5%**; AA ITBench: **48.6%**; AA-AnalystAgent: **51.2%** (Artificial Analysis, accessed 2026-10-05)
- Agents' Last Exam: **59.3%**; AutomationBench: **41.4%**; BrowseComp: **91.5%**; OSWorld 2.0: **72.6%**; ExploitGym: **42.4%** (OpenAI, accessed 2026-10-05)
- ApprenticeBench: **68%** (NeoCognition); CWE-bench v1: **68.0%** (Collinear) (accessed 2026-10-05)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53** at the 2026-09-24 reading; AA now lists **52.7%** on the current index (accessed 2026-10-05)
- GPQA Diamond: **96.0%** (OpenAI); **96.1%** (Artificial Analysis) (accessed 2026-10-05)
- HLE: **57.2% with tools** (OpenAI); **54.7%** (Artificial Analysis) (accessed 2026-10-05)
- AA-LCR: **80.7%**; CritPt: **31.7%**; AA-MLCR: **35.0%** (Artificial Analysis, accessed 2026-10-05)
- AA-Omniscience Index: **43.4%**; Accuracy: **62.6%**; Hallucination Rate: **51.3%** (Artificial Analysis, accessed 2026-10-05)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%** (ARC Prize verified results, accessed 2026-10-05)
- FrontierMath v2 Tier 4: **97.6%**; GeneBench-Pro: **37.8%** (OpenAI, accessed 2026-10-05)
- HealthBench Professional: **64.7%** (length-adjusted 58.3%); HealthBench Hard: **36.6%** (OpenAI GPT-6 Astra system card, accessed 2026-10-05)

Coding:

- DeepSWE: **74.1%**; FrontierCode v1.1 Main: **53.3%** (Extended **64.5%**) (OpenAI, accessed 2026-10-05)
- FrontierSWE v2: **65.5%** (Proximal leaderboard, accessed 2026-10-05)
- AA-SciCode: **56.5%**; AA Coding Index: **76.9%** (Artificial Analysis, accessed 2026-10-05)
- PostTrainBench v1.1: **44.3%** (Google Gemini 4 Argon launch chart) — the highest compared value (accessed 2026-10-05)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI verifies a 1,050,000-token context window and documents higher pricing above 272K input tokens.
- MRCR v2 @256K–512K: **100.0%**; @512K–1M: **96.3%** (OpenAI, accessed 2026-10-05) — measured long-context retrieval across the top tier, and the strongest such result in the comparison.
- GraphWalks BFS 256K–1M: **71.8%** (Google Gemini 4 Argon launch chart, accessed 2026-10-05) — independent multi-hop retrieval, also the highest compared value.

Sources consulted: [OpenAI GPT-6 Astra model documentation](https://platform.openai.com/docs/models/gpt-6-astra), [OpenAI GPT-6 Astra launch page](https://openai.com/index/gpt-6-astra/), [OpenAI GPT-6 Astra system card](https://deploymentsafety.openai.com/gpt-6-astra), [Artificial Analysis GPT-6 Astra](https://artificialanalysis.ai/models/gpt-6-astra), and [BenchLM GPT-6 Astra](https://benchlm.ai/models/gpt-6-astra) (page dated 2026-10-05, carrying the component rows quoted above), accessed 2026-10-05.

### Normalized scores (1–100)

- **Tool use: 95/100.** Nudged down from 96 now that it is measured rather than assumed. Strong: Terminal-Bench 4.0 57.9–59.1%, Terminal-Bench 2.1 87.3–88.4%, OSWorld 2.0 72.6%, Terminal-Bench-Science 64.6%, CWE-bench v1 68.0%, GDP.pdf 31.0%. But Tau3-Banking at 41.4% and AA-Agentic Index 51.5% are mid-pack, and Claude Opus 5.5 now matches TB4.0 (59.6%) while leading AA-Briefcase 1822 vs Astra's 1569 and GDPval-AA 1846 vs 1542.
- **Reasoning: 97/100.** Raised from 96 on a large body of newly verified independent numbers: GPQA Diamond 96.0–96.1%, FrontierMath v2 Tier 4 **97.6%**, ARC-AGI-2 95%, ARC-AGI-3 62.7%, HLE 54.7–57.2%, CritPt 31.7%, Omniscience Index 43.4%. Held at 97 rather than higher because MLCR 35.0% and GeneBench-Pro 37.8% remain soft, and AA's own Intelligence Index places it 7th (52.7) behind Claude Opus 5.5.
- **Context window: 99/100.** Raised from 98 on the strongest measured long-context evidence in the comparison: MRCR v2 at 100.0% (256K–512K) and 96.3% (512K–1M), plus GraphWalks BFS 71.8% at 256K–1M. OpenAI verifies 1,050,000 input / 128,000 output tokens.
- **Multimodal: 78/100.** Raised from 65: AA-MMMU-Pro **86.9%**, ScreenSpot Pro 92.7%, BenchCAD Vision2Code 0.959 — real measured vision performance rather than an inference from a modality list. Still capped by no audio and no video input.
- **Coding: 94/100.** Raised from 92: DeepSWE 74.1%, AA Coding Index 76.9%, FrontierCode v1.1 53.3% (Extended 64.5%), FrontierSWE v2 65.5%, AA-SciCode 56.5%, PostTrainBench v1.1 44.3%. Capped by the absence of any published SWE-bench Verified or SWE-bench Pro figure and no LiveCodeBench or Vibe Code Bench number.
- **Cost efficiency: 30/100.** Standard pricing is $10/$50 per 1M input/output tokens, with long-context surcharges and tool fees; this is an expensive paid model.
- **Overall Score: 92.6/100.** (95 + 97 + 99 + 78 + 94) / 5 = 92.6, cost excluded. Best fit: high-stakes, tool-heavy reasoning and coding where frontier capability matters more than latency or price.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-10-05
- Method: Public web research of OpenAI model documentation, the GPT-6 Astra launch page and system card, Artificial Analysis component leaderboards, ARC Prize, Vals AI, Proximal FrontierSWE, Collinear CWE-bench, NeoCognition and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. Refreshed 2026-10-05 to replace the first pass's eight "no verified public score found" rows with exact Terminal-Bench 2.1/4.0/Science, Tau3-Banking, GDPval-AA, Briefcase, GDP.pdf, AA-Coding-Index/SciCode/MLCR/LCR, CritPt, Omniscience, GPQA-Diamond, HLE, ARC-AGI-1/2/3, FrontierMath, DeepSWE, FrontierCode, FrontierSWE, MRCR and GraphWalks figures.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
