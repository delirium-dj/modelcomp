# QoDuck — findings by Gemini 3.8 Flash

- Source: Alibaba / Qoder (`opencode/qoduck`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** QoDuck
- **Short description:** Alibaba's unannounced stealth AI coding and reasoning preview model deployed inside the Qoder development environment (suspected Qwen 4 preview checkpoint) offering 1M context, adaptive reasoning effort, and rapid multi-file refactoring.
- **Provider / access:** Qoder IDE, Qoder CLI, OpenCode Zen (`opencode/qoduck`).
- **Release / knowledge:** November 2026 release; stealth preview; knowledge cutoff mid-2026.
- **IDs:** `opencode/qoduck`, `qoduck`
- **Context window:** 1,048,576 tokens total (1M context window; up to 65,536 max output tokens).
- **Modalities:** Multimodal input (text, image, documents); text and code output; dynamic test-time reasoning.
- **Pricing (as of 2026-11-09):** Free preview tier (0.0x credit multiplier) inside Qoder desktop; standard OpenCode Zen rate ~$0.20 / $0.80 per 1M tokens.
- **Architecture:** Unannounced sparse MoE foundation model exhibiting Qwen 4 architectural and tokenization traits, optimized for agentic coding loops.

### Raw benchmarks found

> Community evaluations, developer agent test traces, and comparative trials within Qoder:

Agent / tool use:

- Multi-file refactoring & codebase migration: **~40 min completion** vs ~70 min on DeepSeek-V4.1-Flash baseline
- Autonomous tool execution: Reliable internal tool-calling loops for multi-file generation and workspace verification
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GameFeel interactive logic benchmark: **Top-tier placement** (competitive with Claude Opus 5.5 on interactive game mechanics logic)
- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- Codebase refactoring & migration: High completion velocity with zero syntax regressions on multi-file Python and TypeScript repos
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context / vision:

- 1,048,576 tokens context window verified on repository-wide ingestion and multi-file code workspace navigation.
- Native visual grounding for UI checking and architecture diagrams.

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong agentic tool use and file editing loops verified in Qoder developer workflows; capped by lack of standardized Terminal-Bench numbers.
- **Reasoning: 78/100.** High-level problem solving and logic under adaptive thinking mode (top-tier GameFeel benchmark); capped by unverified academic benchmark cards.
- **Context window: 95/100.** Expansive 1,048,576 token context window supporting repository-wide code comprehension.
- **Multimodal: 72/100.** Multimodal input support for diagrams, UI screenshots, and technical documents.
- **Coding: 82/100.** Fast and dependable repository-scale code generation and refactoring (outperforming DeepSeek-V4.1-Flash in head-to-head migration speed).
- **Cost efficiency: 95/100.** Free promotional 0.0x credit preview on Qoder and low-cost OpenCode Zen tier.
- **Overall Score: 80/100.** Arithmetic mean of five quality dimensions: (75 + 78 + 95 + 72 + 82) / 5 = 402 / 5 = 80.4 → 80. High-capability 1M-context stealth coding engine bringing early next-generation (Qwen 4) performance to developer agent workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-09
- Method: Multi-source web research across Qoder platform disclosures, developer comparative trial traces, tokenizer analysis reports, and community benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qoder IDE & Desktop Platform](https://qoder.ai)
  - [OpenCode Zen Console Documentation](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

