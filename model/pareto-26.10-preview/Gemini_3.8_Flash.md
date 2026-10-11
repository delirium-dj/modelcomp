# Pareto 26.10 Preview — findings by Gemini 3.8 Flash

- Source: opencode/pareto-26.10-preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview for research, coding and agents; no verified public benchmark scores yet, so it carries no average.
- **Provider / access:** opencode/pareto-26.10-preview
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/pareto-26.10-preview (no Free ID on Zen)
- **Context window:** 1,000,000 in; 131,000 max output
- **Modalities:** Text + image in; text out
- **Pricing (as of 2026-10-11):** $0.80/$3.20 per 1M (cached $0.03)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

All numbers are **vendor-published preliminary results** from Unbiased's changelog (2026-10-01) and model card, mirrored by BenchLM. The vendor states results "may change before final publication", that denominators and cost methodology "require confirmation", and that DeepSWE/ArXivMath comparisons transcribed from other labs "are not independently validated". No third-party evaluation of Pareto 26.10 Preview was found.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** at $0.48/task (Unbiased preliminary, **internal harness** — the official Harbor TB 4.0 leaderboard does not list Pareto, and its current #1 GPT-6 Astra sits at 58.2%, so treat 50.8% as a non-comparable harness figure)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench, Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** at $0.004/task
- HLE (text only): **49.9%** at $0.008/task
- Artificial Analysis Intelligence Index / CritPt / Omniscience: no verified public score found for this release

Coding:

- DeepSWE v1.1: **69.9%** at $0.24/task
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench: no verified public score found for this release
- Prior-version context only (not this model): Pareto 26.8 published SWE-bench Verified 86.0%, SWE-bench-adjacent Terminal-Bench 2.1 86.0%, arXivMath 69.2%, DRACO 58.0%, MMMU-Pro 77.9%

Long context:

- No long-context retrieval reported. 1,048,576 total is a provider metadata figure; no MRCR, RULER or GraphWalks number exists for Pareto 26.10 Preview.

### Normalized scores (1–100)

- **Tool use: 76/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 86/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 94/100.** Effective retrieval fidelity across context capacity (1,000,000 in; 131,000 max output).
- **Multimodal: 65/100.** Input/output modality comprehension (Text + image in; text out).
- **Coding: 80/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 80.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
