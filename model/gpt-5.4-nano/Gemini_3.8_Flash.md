# GPT-5.4 Nano — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.4-nano
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's smallest, cheapest GPT-5.4 member (released 2026-03-17, API-only) for classification, extraction, ranking and coding subagents; strong GPQA and SWE-Bench Pro for the price.
- **Provider / access:** opencode/gpt-5.4-nano
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/gpt-5.4-nano (no Free ID on Zen)
- **Context window:** 400,000 (128,000 max out)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $0.20/$1.25 per 1M (cached $0.02)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (telecom): **92.5%** at xhigh (OpenAI launch table); **76.0%** on Artificial Analysis
- IFBench (instruction following): **75.9%** at xhigh / 64.4% medium / 32.7% non-reasoning (Artificial Analysis)
- MCP Atlas: **56.1%**; Toolathlon: **35.5%** (OpenAI launch table)
- Terminal-Bench 2.0: **46.3%**; Terminal-Bench Hard: **42.4%** at xhigh (**33.3%** medium, **24.2%** non-reasoning)
- OSWorld-Verified: **39.0%** — a large drop from GPT-5.4 mini's 72.1% and GPT-5.4's 75.0%
- Artificial Analysis Agentic Index: **17.7**

Reasoning / knowledge:

- GPQA Diamond: **82.8%** at xhigh (OpenAI); **81.7%** (AA xhigh); 76.1% medium; 55.8% non-reasoning
- HLE: **28.3%** at xhigh (**24.3%** without tools per OpenAI, **37.7%** with tools); 15.9% medium; 4.1% non-reasoning
- CritPt: **9.3%** at xhigh / 0.0% non-reasoning
- SciCode: **47.2%** at xhigh
- MMLU-Pro: **77.2%** (Vals AI via BenchLM); GPQA Diamond 77.5% (Vals)
- Artificial Analysis Intelligence Index: **21.2** at xhigh, ~20 at medium, **12** non-reasoning
- AA-Omniscience Accuracy / Non-Hallucination Rate: **25.7% / 25.8%** at xhigh — the weakest point, with hallucination as high as accuracy

Coding:

- SWE-Bench Pro (public): **52.4%** at xhigh — +6.7 over GPT-5 mini's 45.7% and only 5.3 behind full GPT-5.4
- Artificial Analysis Coding Index: **56.1**
- SWE-bench Verified / LiveCodeBench: no verified public score found for this ID

Long context:

- AA-LCR: **76.7%** at xhigh (Artificial Analysis)
- OpenAI MRCR v2 8-needle: 64K–128K **44.2%**, 128K–256K **33.1%** (GPT-5.4: 86.0%/79.3%)
- GraphWalks: BFS 0–128K **73.4%**, parents 0–128K **50.8%** (GPT-5.4: 93.1%/89.8%)

Multimodal:

- MMMU-Pro: **66.1%**, **69.5%** with Python (GPT-5.4: 81.2%/81.5%; mini: 76.6%/78.0%)
- OmniDocBench 1.5 (lower better): **0.2419** — worst in the family (GPT-5.4 0.109, mini 0.1263, GPT-5 mini 0.1791)

### Normalized scores (1–100)

- **Tool use: 62/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 73/100.** Effective retrieval fidelity across context capacity (400,000 (128,000 max out)).
- **Multimodal: 65/100.** Input/output modality comprehension (Text, image in; text out).
- **Coding: 68/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 96/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 67.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
