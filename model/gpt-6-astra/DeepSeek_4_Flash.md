# GPT-6 Astra — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-6 Astra
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship reasoning model for the hardest end-to-end work — complex reasoning, coding, computer use, research and document creation.
- **Provider / access:** OpenAI API (`gpt-6-astra`), Chat Completions/Responses; also on aggregators. No Free Zen ID verified.
- **Release / knowledge:** released 2026-09-04; knowledge cutoff April 2026.
- **IDs:** `openai/gpt-6-astra`
- **Context window:** ~1.05M tokens input (1.1M) / 128K max output — verified from LLM Stats provider table.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $10.00 in / $1.00 cached / $50.00 out per 1M (OpenAI first-party).
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI); AA variant 59.1%; Terminal-Bench 2.1 (AA) **88.4%**, Vals **87.3%**
- Tau3-Banking: **41.4%** (AA)
- GDPval-AA: **1542 Elo** (AA); AA normalized 52.1%
- Claw-Eval / ClawProBench: no verified public score found
- OSWorld 2.0 **72.6%**; AutomationBench **41.4%** (OpenAI) / AA AutomationBench **68.5%**; BrowseComp **91.5%**; Agents' Last Exam **59.3%**; AA ITBench **48.6%**; AA-AnalystAgent **51.2%**; ApprenticeBench **68%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI); AA 96.1%
- HLE: **54.7%** (AA); HLE w/ tools **57.2%**
- AA-LCR: **80.7%**; MLCR-AA **35.0%**
- CritPt: **31.7%** (AA)
- Artificial Analysis Intelligence Index: **52.7%** (AA)
- AA-Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%**
- ARC-AGI-1 **98.5%**, ARC-AGI-2 **95%**, ARC-AGI-3 **62.7%** (ARC Prize verified)
- FrontierMath v2 (Tier 4) **97.6%**

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for Astra
- DeepSWE: **74.1%** (OpenAI)
- FrontierCode 1.1 Main **53.3%**, Extended **64.5%**
- AA-SciCode: **56.5%**; AA Coding Index **76.9%**
- FrontierSWE v2 **65.5%**; PostTrainBench v1.1 **44.3%**

Long context:

- MRCR v2 256K–512K: **100.0%**; MRCR v2 512K–1M: **96.3%** (OpenAI)
- GraphWalks BFS 256K–1M: **71.8%**

Multimodal:

- ScreenSpot Pro **92.7%**; AA-MMMU-Pro **86.9%**; BenchCAD Vision2Code (tools) **0.959**

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 2.1 87–88%, OSWorld 72.6%, AutomationBench 68.5%, BrowseComp 91.5% and ApprenticeBench 68% are all frontier-class; Tau3 41.4% is the limiter.
- **Reasoning: 96/100.** GPQA 96%, HLE 54.7%, AA Index 52.7, ARC-AGI-2 95%, MRCR 100/96.3 and FrontierMath 97.6% are top-tier; CritPt 31.7% is merely good.
- **Context window: 100/100.** 1.05M input with 100%/96.3% MRCR retrieval across 256K–1M.
- **Multimodal: 85/100.** Text + image in with strong screen/visual scores, but no audio/video input and text-only output.
- **Coding: 93/100.** DeepSWE 74.1% and Coding Index 76.9% clear frontier refs; FrontierSWE 65.5% and SciCode 56.5% are strong; FrontierCode 53.3% is mid.
- **Cost efficiency: 30/100.** $10/$50 per 1M maps to the ~$10/$50 reference band; only justified by frontier capability.
- **Overall Score: 94/100.** Mean of (95 + 96 + 100 + 85 + 93) / 5 = 93.8 → 94. Best-fit: highest-ceiling model for maximal-difficulty reasoning, agentic and document work when cost is not the constraint.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (OpenAI launch post/system card, Artificial Analysis, BenchLM, Vals AI, ARC Prize, LLM Stats, Collinear, Proximal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
