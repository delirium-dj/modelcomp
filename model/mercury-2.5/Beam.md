# Mercury 2.5 — findings by Beam

- Source: Inception/Mercury 2.5, `inception/mercury-2.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's diffusion LLM (Sep 8, 2026): 260K context, 65K output. Text-only. 1,100+ tok/s. BenchLM 33.77 (#165 of 954). AA Intelligence Index 12.3. GPQA-D 79.0%. τ³-bench 96.0%. AA-LCR 68.0%. IFBench 77%. $0.04/$0.15 per 1M (launch promo) or $0.20/$0.75 (standard).
- **Provider / access:** Inception API; OpenRouter; Baseten.
- **Release / knowledge:** Released 2026-09-08; knowledge cutoff not stated.
- **IDs:** `inception/mercury-2.5`
- **Context window:** 260,000 tokens; max output 65,536.
- **Modalities:** text in; text out; reasoning yes (tunable); tool calling yes; parallel tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $0.75 / 1M output (standard); $0.04/$0.15 (launch promo); paid.
- **Architecture:** proprietary diffusion LLM (dLLM), 260K context. Parallel token generation.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **12** (Supported · #119/128)
- τ³-bench: **96.0%** (Inception launch chart)
- DeepSearchQA: **34.0%** (Inception launch chart)
- Terminal-Bench 2.1 (Vals): **34.5%** (Vals AI)
- GDPval-AA: **0.0%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **72.6** (Unranked · 2 rankable rows)
- GPQA-D: **79.0%** (Inception launch chart)
- AA-HLE: **11.8%** (Artificial Analysis)
- AA Intelligence Index: **12.3%** (Artificial Analysis)
- AA-LCR: **68.0%** (Inception launch chart)
- CritPt: **0.0%** (Artificial Analysis)
- AA-Omniscience Accuracy: **22.0%** (Inception launch chart)
- AA-Omniscience Hallucination Rate: **67.0%** (Inception launch chart)
- AA-Omniscience Index: **-39.5%** (Artificial Analysis)
- IFBench: **77%** (Inception launch chart)

Coding:

- Coding public-lane (BenchLM): **16.1** (Estimated · #130/150)
- SciCode: **38%** (Inception launch chart) / **38.5%** (AA)
- Terminal-Bench 4.0: **0.0%** (Vals AI)
- Vibe Code Bench v1.1: **3.68%** (Vals AI)

Long context:

- 260K window; AA-LCR **68.0%** (Inception); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 56/100.** Agentic lane #119/128 (12), τ³-bench 96.0%, DeepSearchQA 34.0%, Terminal-Bench 2.1 34.5%, GDPval-AA 0.0%; caps at GDPval-AA 0.0%.
- **Reasoning: 60/100.** GPQA-D 79.0%, AA-HLE 11.8%, AA Intelligence 12.3%, AA-LCR 68.0%, CritPt 0.0%, IFBench 77%; caps at CritPt 0.0%.
- **Context window: 66/100.** 260K window; AA-LCR 68.0%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 52/100.** SciCode 38%, AA-SciCode 38.5%, Terminal-Bench 4.0 0.0%, Vibe Code 3.68%; caps at Terminal-Bench 4.0 0.0%.
- **Cost efficiency: 94/100.** Cheap $0.20/$0.75 per 1M (standard); $0.04/$0.15 (promo).
- **Overall Score: 54.8/100.** Mean of five quality dims (BenchLM 33.77); best-fit for ultra-fast diffusion at low cost. (Superseded by Mercury 2.5's own positioning as "next tier of intelligence for dLLMs.")

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Inception official, BenchLM, Vals AI, Artificial Analysis, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Mercury 2.5 is a diffusion LLM (dLLM) with 1,100+ tok/s. Comparable to GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, Claude Haiku 4.5. 80% launch discount ($0.04/$0.15).<|end|>>2>