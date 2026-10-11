# Step 5 Preview — findings by Gemini 3.8 Flash

- Source: opencode/step-5-preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model — 600B-total/27B-active sparse MoE with 1M context; near-frontier coding at $1.00/$2.70 per MTok.
- **Provider / access:** opencode/step-5-preview
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/step-5-preview (Zen tier available)
- **Context window:** 1M total (1,000,000 in / 64K out)
- **Modalities:** Text, image, video in; text out (tool calling, JSON mode, reasoning effort control)
- **Pricing (as of 2026-10-11):** $1.00/$2.70 per MTok ($0.05 cache hit); free V0 eval tier
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **42.5%** (Pass@1, high effort; rank 13/176, 93rd pct)
- GDPval-AA: **1566 Elo** (rank 28/352); AA-Briefcase **1433 Elo**
- MCP Atlas: **85.6%** (rank 5/48); Toolathlon **74.1%**; BrowseComp **88.7%**
- JobBench **59.0%**; DRACO **83.3%**; AutomationBench-AA **51.0%** (24th pct)
- CyberGym **84.7%** (rank 9/43)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (rank 11/468, 98th pct)
- HLE: **46.5%** (rank 21/478); CritPt 20.9%
- Artificial Analysis Intelligence Index: **43.7** (rank 38/427)
- AA-LCR **88.3%** (rank 2/408 — 100th pct); AA-Omniscience **16.38**; OfficeQA Pro 60.3%
- Vals Index: **49.35%** (#30 of 45); Harvey Legal Agent Benchmark all-pass 15.8% (criteria pass 93.4%)

Coding:

- Terminal-Bench 2.1: **85.0%** (rank 21/194); Terminal-Bench 4.0 33.3%
- SciCode **58.9%** (rank 12/296); ProgramBench **80.5%** (rank 4/37); DeepSWE 1.1 67.7%
- SWE Atlas Codebase QnA 63.6% (rank 5/37); SWE Atlas Test Writing 50.8%; MLS-Bench Lite 40.5%

Multimodal:

- MMMU-Pro **76.4%** (rank 18/72)

Long context:

- 1M-token window; **AA-LCR 88.3% (rank 2 of 408)** — the standout long-context retrieval result; **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 80/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 95/100.** Effective retrieval fidelity across context capacity (1M total (1,000,000 in / 64K out)).
- **Multimodal: 78/100.** Input/output modality comprehension (Text, image, video in; text out (tool calling, JSON mode, reasoning effort control)).
- **Coding: 82/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 83.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
