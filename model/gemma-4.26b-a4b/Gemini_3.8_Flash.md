# Gemma 4 26B A4B — findings by Gemini 3.8 Flash

- Source: opencode/gemma-4.26b-a4b
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weights MoE (25.2B total / 3.8B active, Apache 2.0) with 256K context and image input; 4B-class speed with a large knowledge base — best for cheap high-throughput image+text agents.
- **Provider / access:** opencode/gemma-4.26b-a4b
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/gemma-4.26b-a4b (no Free ID on Zen)
- **Context window:** 256,000 (262,144)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** ~$0.09/$0.30 per 1M; self-host $0
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Vendor figures are Google's own card (instruction-tuned, thinking-enabled). Third-party figures come from the Artificial Analysis "Reasoning" route, the BenchLM mirror of it, and CloudPrice's leaderboard ranks.

Agent / tool use:

- Tau2 (average over 3 domains): **68.2%** (Google model card)
- τ²-Bench / TAU2: **~40%** (Artificial Analysis, ranked **#209** on CloudPrice). Same benchmark family as Google's row, and roughly 28 pts lower — the same vendor/third-party divergence seen on the 12B Unified.
- TerminalBench Hard: **~30%** (Artificial Analysis, ranked **#130** on CloudPrice)
- Function calling: **supported**, native per CloudPrice capabilities; no published function-calling accuracy score (no BFCL-v4 figure found)
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (Google card) / **~80%** (Artificial Analysis, **#163** on CloudPrice)
- HLE: **8.7% no tools** / **17.2% with search** (Google card) / **~20%** (Artificial Analysis, **#139**)
- MMLU-Pro: **82.6%** (Google card; BenchLM Knowledge lane 36.4, **#109 of 169**)
- MMMLU: **86.3%** (Google card)
- AIME 2026 no tools: **88.3%** (Google card) — the family's second-best math result behind the 31B's 89.2%
- BigBench Extra Hard: **64.8%** (Google card)
- IFBench: **~70%** (Artificial Analysis, **#47** of 124 — a strong percentile)
- AA-LCR: **~70%** (Artificial Analysis, **#159** on CloudPrice)
- Artificial Analysis Intelligence Index: **26** (current AA model page) / **17** on AA's v4.3.2 comparison view / **16.7 #199** on CloudPrice / **31** in AA's April 2026 launch article. The spread is index-version drift, not five measurements — v4.3.2 folds in agentic evaluations (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0) that the earlier composite did not.
- BenchLM overall: **57.15, ranked #90 of 225** from 4 source-displayable rows; independent public score 46.25 / 46.16 on two comparison pages. Lanes: Reasoning 67.4 (unranked, 2 rows), Instruction Following **87.3 (#31 of 124)**, Multimodal 45.2 (**#43 of 50**).
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **77.1%** (Google card)
- Codeforces ELO: **1718** (Google card)
- Coding Index: **39.3**, ranked **#99 of 122** (Artificial Analysis); BenchLM Coding lane 34, **#84 of 143**
- SciCode: **~40%** (Artificial Analysis, **#162** on CloudPrice)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR: ~70%** (Artificial Analysis, **#159** on CloudPrice) — the strongest retrieval figure of any Gemma 4 size on this source
- **MRCR v2 8-needle @ 128K (average): 44.1%** (Google card). Family: 31B Dense 66.4%, 12B Unified 43.4%, E4B 25.4%, E2B 19.1%
- Throughput: **105.1 tok/s** output, **#112** (Artificial Analysis / CloudPrice)

Multimodal (for the scoring dimension):

- MMMU-Pro: **73.8%** (Google card; BenchLM **#43 of 50**). Family: 31B 76.9%, 12B Unified 69.1%, Gemma 3 27B 49.7%
- MATH-Vision: **82.4%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.149**. Family: 31B 0.131, 12B Unified 0.164, E4B 0.181
- MedXPertQA (MM): **58.1%**
- Video input: listed as a supported input modality by OpenRouter for this route; Google's per-model table does not confirm it for the 26B A4B specifically, and no video benchmark (Video-MME, LVBench) was published for this size

### Normalized scores (1–100)

- **Tool use: 62/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 72/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (256,000 (262,144)).
- **Multimodal: 76/100.** Input/output modality comprehension (Text, image in; text out).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 96/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 71.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
