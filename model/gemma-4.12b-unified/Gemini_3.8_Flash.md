# Gemma 4 12B Unified — findings by Gemini 3.8 Flash

- Source: opencode/gemma-4.12b-unified
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size open-weight dense model (11.95B, Apache 2.0), the encoder-free Gemma 4 variant with native text+image+audio input at 256K context — best for local multimodal agents.
- **Provider / access:** opencode/gemma-4.12b-unified
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/gemma-4.12b-unified (no Free ID on Zen)
- **Context window:** 256,000 (262,144; hosts serve 32K–256K)
- **Modalities:** Text, image, audio in; text out
- **Pricing (as of 2026-10-11):** ~$0.10/$0.30 per 1M; self-host $0
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Two independent harnesses disagree materially, so both are listed with attribution. Google's own card reports instruction-tuned results; the third-party figures come from the Artificial Analysis "Reasoning" route and the BenchLM mirror of it.

Agent / tool use:

- Tau2 (average over 3 domains): **69.0%** (Google model card). Highest single agentic datapoint for this checkpoint, and marginally above the 26B A4B's 68.2% in the same table — the anomaly to watch in this family.
- τ²-Bench Telecom: **36.3%** (Artificial Analysis via Franklin AI and aiflashreport; Opper reports the same figure as 36%). Same benchmark family as Google's Tau2 row, single domain, and **less than half** Google's average — the largest harness divergence in this report.
- TerminalBench Hard: **18.2%** (Artificial Analysis, ranked **#165** on CloudPrice's leaderboard)
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Google card) / **75.3%** (Artificial Analysis) — harness spread of ~3.5 pts
- HLE no tools: **5.2%** (Google card) / **15.7%** (Artificial Analysis) — harness spread of ~10 pts, and the widest absolute gap on the card
- MMLU-Pro: **77.2%** (Google card)
- MMMLU: **83.4%** (Google card)
- AIME 2026 no tools: **77.5%** (Google card)
- BigBench Extra Hard: **53.0%** (Google card)
- IFBench: **73.5%** (Artificial Analysis, ranked **#38** of 124 — a genuine strength)
- Artificial Analysis Intelligence Index: **14** (Artificial Analysis; 14.2 on CloudPrice #232 and Opper). BenchLM overall **28.4** across 12 benchmarks (Coding lane 22 #116/142, Reasoning 34.9, Knowledge 31.1 #134/168, Multimodal 27.2 #46/50, Mathematics 53, Instruction Following **88.7 #22/124**).
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (Google card) / **55.3%** (Artificial Analysis, "LiveCodeBench Reasoning")
- Codeforces ELO: **1659** (Google card)
- SciCode: **38.2%** (Artificial Analysis, ranked **#205** on CloudPrice)
- Coding Index: **31.0** (Artificial Analysis, ranked **#117** of 122)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **AA-LCR: 63.7%** (Artificial Analysis; Opper lists the same run as "long-context reasoning 64%")
- **MRCR v2 8-needle @ 128K (average): 43.4%** (Google card). Family context for the same test: 31B Dense 66.4%, 26B A4B 44.1%, E4B 25.4%, E2B 19.1%, Gemma 3 27B 13.5% — so 12B Unified lands mid-family on retrieval despite a 256K window.
- Throughput: **140.7–148 tok/s** output, TTFT 1.31–2.46s (Artificial Analysis route, two snapshots)

Multimodal (for the scoring dimension):

- MMMU-Pro: **69.1%** (Google card; BenchLM #46/50). Family: 31B 76.9%, 26B A4B 73.8%, Gemma 3 27B 49.7%.
- MATH-Vision: **79.7%**
- OmniDocBench 1.5 (average edit distance, lower is better): **0.164**. Family: 31B 0.131, 26B A4B 0.149, E4B 0.181, E2B 0.290.
- MedXPertQA (MM): **48.7%**
- CoVoST (ASR, excluding Chinese): **38.5**
- FLEURS (lower is better, excluding Chinese): **0.069**

### Normalized scores (1–100)

- **Tool use: 62/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 68/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 75/100.** Effective retrieval fidelity across context capacity (256,000 (262,144; hosts serve 32K–256K)).
- **Multimodal: 84/100.** Input/output modality comprehension (Text, image, audio in; text out).
- **Coding: 68/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 96/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 71.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
