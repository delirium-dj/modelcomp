# GPT-6 Astra — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`developers.openai.com/api/docs/models/gpt-6-astra`), benchlm.ai, Artificial Analysis (`artificialanalysis.ai/models/gpt-6-astra`), ARC Prize, Epoch AI, OpenAI system card (`deploymentsafety.openai.com/gpt-6-astra`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most capable model (released 3 Sept 2026) for complex reasoning, coding, computer use, research, and document creation; 1.05M-token context, 128K max output, reasoning effort low/medium/high/xhigh/max, text+image input → text output.
- **Provider / access:** OpenAI API (`gpt-6-astra`, Chat Completions + Responses APIs); Trusted Access Program enterprise rollout first; tool-specific fees (search, computer use). Not OpenAI-compatible third-party — native OpenAI API.
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff Apr 30, 2026; first OpenAI model rated Critical for cybersecurity.
- **IDs:** `gpt-6-astra` (OpenAI API). No Free ID confirmed.
- **Context window:** 1,050,000 tokens; maximum input 922,000; max output 128,000. Verified on OpenAI API model details and benchlm.ai (1.05M).
- **Modalities:** Text and image in; text out; reasoning yes (effort low/medium/high/xhigh/max); tool use yes (web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search); JSON/structured_outputs yes; audio/video input NOT supported per official API docs.
- **Pricing (as of 2026-10-16):** Input $10/1M tokens, cached input $1/1M, cache writes $12.5/1M, output $50/1M; prompts >272K input priced at 2x input/cache and 1.5x output; Batch/Flex 50% of Standard; Fast mode 2x.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **91.5%** (OpenAI launch)
- OSWorld 2.0: **72.6%** (OpenAI launch)
- Terminal-Bench 4.0: **57.90%** (OpenAI launch; AA 59.1%)
- Terminal-Bench-Science 0.1: **64.6%** (OpenAI launch)
- Agents' Last Exam: **59.3%** (OpenAI launch)
- AutomationBench: **41.4%** (OpenAI launch); AA AutomationBench **68.5%**
- HLE w/ tools: **57.2%** (OpenAI launch)
- ExploitGym: **42.4%** (OpenAI launch)
- AA Briefcase Elo: **1570** (Artificial Analysis)
- AA Agentic Index: **51.5%** (Artificial Analysis)
- Terminal-Bench 2.1: **87.3%** (Vals AI); **88.4%** (AA)

Reasoning / knowledge:

- GPQA: **96%**; GPQA-D: **96.0%** (OpenAI launch); AA-GPQA Diamond **96.1%**
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **95%**; ARC-AGI-3: **62.7%** (ARC Prize, verified)
- FrontierMath v2 Tiers 1-3: **93.684%** (Epoch AI); Tier 4: **97.600%** (OpenAI launch)
- Artificial Analysis Intelligence Index: **52.7%** (Artificial Analysis)
- HLE (AA): **54.7%** (Artificial Analysis)
- CritPt: **31.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **80.7%** (Artificial Analysis)
- MLCR-AA: **35.0%** (Artificial Analysis)
- AA-Omniscience Index **43.4%**; Accuracy **62.6%**; Hallucination rate **51.3%** (AA)

Coding:

- DeepSWE: **74.1%** (OpenAI launch)
- FrontierCode 1.1 Main: **53.3%**; Extended **64.5%** (OpenAI launch)
- FrontierSWE v2: **65.5%** (Proximal)
- AA-SciCode: **56.5%** (Artificial Analysis)
- AA Coding Index: **76.9%** (Artificial Analysis)

Multimodal & grounded:

- ScreenSpot Pro: **92.7%** (OpenAI launch)
- BenchCAD Vision2Code (tools): **0.959** (OpenAI launch)
- AA-MMMU-Pro: **86.9%** (Artificial Analysis)

Long context:

- MRCR v2 256K–512K: **100.0%**; MRCR v2 512K–1M: **96.3%** (OpenAI launch) — near-perfect retention across the full window
- AA-LCR: **80.7%** (Artificial Analysis)
- GraphWalks BFS 256K–1M: **71.8%** (Google Gemini 4 Argon chart)
- Verified 1.05M context with minimal recall degradation — strongest long-context retention in the cohort.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 84/100.** Leading BrowseComp (91.5), OSWorld 2.0 (72.6), Terminal-Bench 2.1 (87.3/88.4), rich native tool set (computer_use, mcp, hosted_shell, code_interpreter); capped by moderate AutomationBench raw (41.4) and Agents' Last Exam (59.3). Top-tier computer-use/browse agent.
- **Reasoning: 85/100.** ARC-AGI-1 98.50%, ARC-AGI-2 95%, GPQA 96%, FrontierMath T4 97.6%, AA Intelligence Index 52.7%; capped by CritPt (31.7) and MLCR-AA (35.0). Elite on puzzle/knowledge reasoning.
- **Context window: 95/100.** Verified 1.05M tokens with max input 922K; MRCR v2 100% at 256K–512K and 96.3% at 512K–1M — essentially no recall degradation at the full window; best long-context retention in the cohort.
- **Multimodal: 80/100.** Text+image in, text out (OpenAI official API docs — no audio/video); ScreenSpot Pro 92.7%, BenchCAD tools 0.959, AA-MMMU-Pro 86.9%; capped by absence of audio/video input per official specs.
- **Coding: 76/100.** DeepSWE 74.1%, AA Coding Index 76.9%, FrontierCode 1.1 Extended 64.5%, FrontierSWE v2 65.5%; capped by modest FrontierCode Main (53.3) and absence of public SWE-bench/LiveCodeBench numbers. Strong agentic coding, lighter competitive-coding disclosure.
- **Cost efficiency: 35/100.** $10/$50 is among the most expensive frontier pricing; not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (84 + 85 + 95 + 80 + 76) / 5 = 84.0 → 84. Best-fit recommendation: premier model for hard reasoning, long-context research, and computer-use agents; premium price justified only for the most demanding tasks where its context/reasoning edge matters.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official OpenAI API docs + benchlm.ai + Artificial Analysis + ARC Prize + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
