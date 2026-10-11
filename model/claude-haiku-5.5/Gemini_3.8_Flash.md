# Claude Haiku 5.5 — findings by Gemini 3.8 Flash

- Source: opencode/claude-haiku-5.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest Claude 5.5-family small model with adjustable reasoning effort for high-volume tasks.
- **Provider / access:** opencode/claude-haiku-5.5
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/claude-haiku-5.5 (Zen tier available)
- **Context window:** 1,000,000 total (128K max output)
- **Modalities:** Text, image, PDF in; text out
- **Pricing (as of 2026-10-11):** $0.10/$0.50 per 1M in/out (prompts ≤100K), $0.50/$2.50 above 100K
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: substantial improvement over Haiku 4.5 (Anthropic; exact score not separately confirmed).
- OSWorld 2.1: substantial improvement over Haiku 4.5 (Anthropic; exact score not separately confirmed).
- Effort controls for balancing quality vs. speed in agentic workloads.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- Adaptive thinking for variable reasoning depth.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.

Coding:

- Substantial improvement over Haiku 4.5 in coding benchmarks (Anthropic).
- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.

Long context:

- 1,000,000-token window with 128K output confirmed. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 78/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 94/100.** Effective retrieval fidelity across context capacity (1,000,000 total (128K max output)).
- **Multimodal: 70/100.** Input/output modality comprehension (Text, image, PDF in; text out).
- **Coding: 75/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 79/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
