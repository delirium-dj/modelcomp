# Ring-2.6-1T — findings by Gemini 3.8 Flash

- Source: opencode/ring-2.6.1t
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ring-2.6-1T
- **Short description:** InclusionAI's trillion-parameter open-weight reasoning flagship (1T total / 63B active) — the thinking half of the 2.6-1T pair with adjustable Reasoning Effort (high/xhigh).
- **Provider / access:** opencode/ring-2.6.1t
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/ring-2.6.1t (no Free ID on Zen)
- **Context window:** 128K native (256K with YaRN); 262,144 served (per AA)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** AA ~$0.30/$2.50 per 1M; MIT open weights (free self-host)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> Vendor (InclusionAI) claims near-frontier scores; the only independent result is the Artificial Analysis Intelligence Index, which shows a large gap.

Reasoning / knowledge:

- GPQA-Diamond **88.27** (self); AIME 2026 **95.83** (self); ARC-AGI-V2 66.18 (self, xhigh)
- Artificial Analysis Intelligence Index: **17** (independent; #64/117, below median 18)

Coding / agent:

- SWE-bench Verified **74** (self); ClawEval 63.82; PinchBench 87.60; Tau2-Bench (Telecom) 95.32 (self)
- AA output speed 115.6 tok/s, TTFT 3.79 s, 120M index output tokens (AA)

Long context:

- 128K native / 256K YaRN; **no MRCR/RULER published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 76/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 74/100.** Effective retrieval fidelity across context capacity (128K native (256K with YaRN); 262,144 served (per AA)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 70/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 62.6/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
