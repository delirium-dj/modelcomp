# Hy3 — findings by Beam

- Source: Tencent/Hy3, `tencent/hy3`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3
- **Short description:** Tencent's MoE model (Jul 6, 2026): 295B total / 21B active, 256K context. LLM Stats Score 52.47. Open weights (Apache 2.0). Strong coding (SWE-bench Verified 74.4% for preview). BenchLM 52.47.
- **Provider / access:** Tencent Cloud TokenHub; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-07-06 (preview Apr 23, 2026); knowledge cutoff not stated.
- **IDs:** `tencent/hy3`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (hybrid fast/slow); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Not published; free at launch.
- **Architecture:** MoE, 295B total / 21B active, 80 layers, 192 experts (top-8), 256K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **37.2** (Supported · #73/128)
- Terminal-Bench 2.1 (Vals): not reported for Hy3
- BrowseComp: **67.1%** (Hy3 preview, Yahoo/Tech)
- WideSearch: **70.2%** (Hy3 preview, Yahoo/Tech)
- Gert Labs: not reported
- OSWorld: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.1** (Unranked · 2 rankable rows)
- GPQA: not reported for Hy3
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported
- Tsinghua math PhD exam: **88.4** (avg@3, Hy3 preview)
- CHSBO 2025: **87.8** (Hy3 preview)
- LLM Stats Score: **52.47**

Coding:

- Coding public-lane (BenchLM): **47.9** (Supported · #47/150)
- SWE-bench Verified: **74.4%** (Hy3 preview, Yahoo/Tech)
- Terminal-Bench 2.0: not reported for Hy3
- LiveCodeBench: not reported
- AA Coding Index: **58.8%** (Kilo Code)

Long context:

- 256K window; LCR **79.0%** (Kilo Code); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #73/128 (37.2), BrowseComp 67.1%, WideSearch 70.2%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 68/100.** Tsinghua 88.4, CHSBO 87.8, AA Coding 58.8%; caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 64/100.** 256K window; LCR 79.0%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 68/100.** SWE-bench 74.4%, AA Coding 58.8%, coding lane #47/150 (47.9); caps at no published Terminal-Bench/LiveCodeBench.
- **Cost efficiency: 90/100.** Free at launch (open weights, Apache 2.0).
- **Overall Score: 61.2/100.** Mean of five quality dims (BenchLM 52.47, LLM Stats 52.47); best-fit for open-weight coding + reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Tencent official, Yahoo/Tech, BenchLM, Kilo Code, LMSpeed); scores are normalized 1–100 interpretations, not official vendor scores. Hy3 preview benchmarks (SWE-bench 74.4%) may differ from official Hy3.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>