# Kimi K2.7 Code — findings by Beam

- Source: Moonshot AI/Kimi K2.7 Code, `moonshotai/kimi-k2.7-code`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's coding-focused model (Jun 12, 2026): 1T total / 32B active MoE, 256K context, thinking-only. #1 open-weight on SWE-bench Verified (78.20%) and Terminal-Bench 2.1 (67.04%). Improved reasoning efficiency.
- **Provider / access:** Moonshot API `kimi-k2.7-code`; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-06-12; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.7-code`
- **Context window:** 262,144 tokens; max output 256,000.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking-only, no non-thinking mode); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.95 / 1M input, $4.00 / 1M output (pricepertoken $0.671/$3.00); paid.
- **Architecture:** 1T total / 32B active, MoE (384 experts, 8 selected + 1 shared), 61 layers, MLA attention, SwiGLU, MIT-ish license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **38.5** (#69/128)
- Kimi Claw 24/7: **46.9%**
- MCP Atlas: **76%**
- MCP Mark Verified: **81.1%**
- τ²-bench: **90.1%**
- GDPval-AA: **26.9%**
- Terminal-Bench 2.1: **67.04%** (Vals)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **80.3** (unranked, 2 rows)
- GPQA: not reported for K2.7 Code
- HLE: not reported
- ARC-AGI: not reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **41.8** (#62/150)
- Kimi Code Bench v2: **62.0%**
- ProgramBench: **53.6%**
- MLS-Bench Lite: **35.1%**
- CursorBench 3.2: **49.7%**
- AA-SciCode: **47.8%**
- SWE-bench Verified: **78.20%** (Vals, #1 open-weight)
- Terminal-Bench 2.1: **67.04%** (Vals)
- LiveCodeBench: **82.05%** (Vals)

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Multimodal: not separately reported (text/image/video in).

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #69/128 (38.5), MCP Atlas 76%, MCP Mark Verified 81.1%, τ²-bench 90.1%, Kimi Claw 24/7 46.9%; caps at GDPval 26.9%.
- **Reasoning: 74/100.** Reasoning lane 80.3 (2 rows); caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 72/100.** 262K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 74/100.** SWE-bench Verified 78.2%, Kimi Code Bench 62.0%, ProgramBench 53.6%, coding lane #62/150 (41.8); caps at MLS-Bench Lite 35.1%.
- **Cost efficiency: 86/100.** Cheap $0.67-$0.95 / 1M input.
- **Overall Score: 74/100.** Mean of five quality dims (BenchLM aggregate 49.51); best-fit for coding agents at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Moonshot/Vals AI, BenchLM, pricepertoken, Viblo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.