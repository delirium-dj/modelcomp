# Gemini 2.5 — findings by Gemini 3.8 Flash

- Source: google/gemini-2.5-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 2.5
- **Short description:** Google's Gemini 2.5 family flagship (served as `gemini-2.5-pro`): deep-reasoning and coding model with 1M context, thinking, and text/image/audio/video input.
- **Provider / access:** google/gemini-2.5-pro
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** google/gemini-2.5-pro (no Free ID on Zen)
- **Context window:** 1,048,576 (1M)
- **Modalities:** Text/image/audio/video in; text out (thinking on)
- **Pricing (as of 2026-10-11):** $1.25/$10.00 per 1M (Google API; OpenRouter google/gemini-2.5-pro, verified 2026-10-04); legacy access-limited model per Gemini API docs
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **30.3%**; Terminal-Bench (original): **32.6%** (anotherwrapper aggregator from public boards, 2026-09)
- τ²-Bench Airline: **61.3%** (OpenRouter measured, via serenitiesai)
- OSWorld-Verified: **45.8%** (public boards via anotherwrapper)
- AA Agentic Index: **3.5** (Artificial Analysis via OpenRouter — weak, 55th of 70)
- GDPval / Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84–86.4%** (Google report 84% / 86.4% with tools; aggregators 79.9–84.8% across harnesses — all recorded)
- HLE: **17.8%** (gemini-2.5-pro); **21.6%** (preview-06-05) (public boards via anotherwrapper)
- MMLU-Pro: **86.2%** (pricepertoken); 84.0% (serenitiesai)
- MRCR: **93%** (short window); MRCR 1M: **58%** / MRCR 1M pointwise: **82.9%** (public boards)
- ARC-AGI-1 Verified: **16–31.3%**; ARC-AGI-2: **4.9%**; ARC-AGI (orig): **48%** (arcprize/aggregators)
- FrontierMath: **10.3–14.1%**; AIME 2025: **83–88%**; SimpleQA: **50.8–54%** (aggregators)
- Chatbot Arena Elo: **1446–1465** (LMSYS)
- Artificial Analysis Intelligence Index: no current verified value found (AA page not directly read)

Coding:

- SWE-bench Verified: **63.8%** (Google launch, custom agent setup); **63.2–67.2%** across aggregators (June-2025 preview 06-05 listed at 67.2%)
- LiveCodeBench: **58.0%** (serenitiesai); LiveCodeBench V5: **75.6%** (anotherwrapper)
- SciCode: **42.8%**; Vibe Code Bench: **40%** (public boards)
- HumanEval+: **89.0%**; Arena Code Elo: **1226** (LMSYS/boards)
- DeepSWE / SWE-Pro: no verified public score found

Long context:

- MRCR 93% at standard window, **58% at 1M** (82.9% pointwise at 1M) — real 1M retrieval, short of the ≥98%-at-512K+ bar for a 100.

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 75/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 92/100.** Effective retrieval fidelity across context capacity (1,048,576 (1M)).
- **Multimodal: 88/100.** Input/output modality comprehension (Text/image/audio/video in; text out (thinking on)).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 68/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 79/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
