# Kimi K2.8 Preview — findings by Gemini 3.8 Flash

- Source: Moonshot AI / Kimi (`moonshot/kimi-k2.8-preview`, `kimi-for-coding`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's intermediate coding and agentic foundation model powering Kimi Code, bridging between K2.7 Code and flagship K3 with a 1,048,576-token context window, image understanding, and configurable thinking effort.
- **Provider / access:** Moonshot AI API (`kimi-for-coding`), [OpenRouter](https://openrouter.ai/models/moonshotai/kimi-k2.8-preview).
- **Release / knowledge:** 2026-09 release (preview status); knowledge cutoff mid-2026.
- **IDs:** `kimi-for-coding`, `moonshotai/kimi-k2.8-preview`
- **Context window:** 1,048,576 tokens (1M context window).
- **Modalities:** Text and image input; text, code, and tool-calling output; configurable thinking effort levels (Low, High, Max).
- **Pricing (as of 2026-10-11):** ~$1.055 / 1M input tokens, $4.22 / 1M output tokens ($0.26 / 1M cached input); also accessible via Kimi Code subscription tiers.
- **Architecture:** Large-scale Mixture-of-Experts (MoE) transformer trained with specialized long-horizon programming post-training.

### Raw benchmarks found

Agent / tool use:
- MCP Mark Verified: reported +11.4% gain over K2.6 baseline
- Autonomous agentic loops: ~33% faster turnaround than K3 with comparable tool completion fidelity
- Terminal-Bench / Tau-bench: standalone independent formal benchmark pending GA release

Reasoning / knowledge:
- GPQA Diamond: estimated near K3 (93.5%) and K2.6 baseline (90.5%); vendor notes performance approaching K3
- BrowseComp: K2 family baseline **83.2%**

Coding:
- Program-Bench: +10.4% improvement over K2.7 baseline
- SWE-Marathon: reported major improvements in multi-turn self-repair
- LiveCodeBench / SWE-bench Verified: inherited ~80% baseline from K2 architecture

Long context:
- 1,048,576 token (1M) context window supporting entire multi-file codebases and extensive API documentation.

Multimodal:
- Native image understanding introduced for visual debugging, diagram parsing, and frontend UI design review.

### Normalized scores (1–100)

- **Tool use: 74/100.** Demonstrates responsive autonomous tool workflows and MCP integration; absence of standalone independent Terminal-Bench 2.1 evaluation limits higher placement.
- **Reasoning: 78/100.** Strong logical and technical reasoning inherits from the established K2 (90.5% GPQA) architecture, tuned for rapid inference.
- **Context window: 88/100.** Expansive 1M context across all subscription tiers provides ample capacity for large multi-file repositories.
- **Multimodal: 68/100.** Vision frame analysis supported; optimized primarily as a coding-centric agent with text/code output.
- **Coding: 77/100.** Inherits ~80% SWE-bench Verified from the K2 series with improved speed and token efficiency, though slightly below K3 flagship self-correction fidelity.
- **Cost efficiency: 72/100.** Economical developer pricing at $1.055 / $4.22 per 1M tokens alongside platform subscription options.
- **Overall Score: 77/100.** Arithmetic mean of five quality dimensions: (74 + 78 + 88 + 68 + 77) / 5 = 77.0 → 78. A swift and practical developer-oriented coding model for day-to-day software development.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into Moonshot AI technical disclosures, OpenRouter model cards, and developer benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
