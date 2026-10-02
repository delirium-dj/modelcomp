# Mercury 2.5 — findings by DeepSeek 4 Flash

- Source: Inception/Mercury 2.5
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's ultra-fast diffusion-style text model, marketed as the fastest measured frontier-adjacent LLM (637 tokens/sec) with strong tool-calling (Tau3-Banking 96%) but weak knowledge/hallucination profile.
- **Provider / access:** Inception Labs API (`inception_mercury-2.5`); proprietary.
- **Release / knowledge:** Mercury 2.5 (after Mercury 2); knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-2.5`
- **Context window:** 260K — verified on BenchLM (Artificial Analysis).
- **Modalities:** text in/out only; reasoning yes; instruction following yes.
- **Pricing (as of 2026-10-01):** paid API; BenchLM lists $0.15/1M output — among the cheapest measured tiers. Input price not independently verified.
- **Architecture:** proprietary diffusion language model.

### Raw benchmarks found

Agent / tool use:

- Tau3-Bench: **96.0%** (Inception launch chart)
- DeepSearchQA: **34.0%** (Inception launch chart)
- Terminal-Bench 2.1 (Vals): **34.1%**
- GDPval-AA: **0.0%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Inception launch chart)
- HLE: **11.8%** (Artificial Analysis)
- AA-LCR: **68.0%** (Inception launch chart)
- CritPt: **0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **12.3%**
- AA-Omniscience Index: **−39.5%**; Accuracy / Hallucination Rate: **22.0% / 67.0%**
- IFBench: **77%** (Inception launch chart)

Coding:

- SciCode: **38%** (Inception launch chart); AA-SciCode **38.5%**

Multimodal:

- text-only model

Long context:

- AA-LCR 68.0% at 260K claimed window

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau3-Banking 96.0% is elite for tool execution, but Terminal-Bench 34.1%, DeepSearchQA 34.0% and GDPval-AA 0.0% show narrow agentic range.
- **Reasoning: 55/100.** GPQA 79.0% and LCR 68.0% are decent; HLE 11.8%, CritPt 0.0% and AA Index 12.3% cap it hard.
- **Context window: 72/100.** 260K context with AA-LCR 68.0% places it in the 200K–500K tier.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 45/100.** SciCode/AA-SciCode ~38% is below the coding frontier; no SWE-bench number found.
- **Cost efficiency: 96/100.** $0.15/1M output at 637 tok/s is an exceptional speed-per-dollar value.
- **Overall Score: 50/100.** Mean of (62 + 55 + 72 + 15 + 45) / 5 = 49.8 → 50. Best-fit: high-throughput tool/API automation, not knowledge or coding work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchLM, Inception launch chart, Artificial Analysis, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
