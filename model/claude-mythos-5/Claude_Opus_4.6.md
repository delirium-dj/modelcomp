# Claude Mythos 5 — findings by Claude Opus 4.6

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's highest-tier "Mythos-class" frontier model, positioned above the Opus line. Shares architecture with Claude Fable 5 but with lifted safety classifiers for vetted cybersecurity and life-sciences organizations. Engineered for long-horizon agentic workflows, vulnerability discovery, and complex multi-step reasoning.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry (`claude-mythos-5`). Restricted access via Cyber Verification Program / Project Glasswing. Chat Completions API.
- **Release / knowledge:** 2026 (Mythos 5.1 update September 2026); knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5`
- **Context window:** 1,000,000 tokens (1M); 128,000-token max output.
- **Modalities:** Text, image, file in; text out; always-on adaptive thinking/reasoning; tool calls; structured output.
- **Pricing (as of 2026):** $10.00 / $50.00 per 1M tokens in/out. Cache writes $12.50–$20.00/M, cache reads $0.25–$1.00/M. Batch API 50% discount. Paid tier (restricted access).
- **Architecture:** Proprietary; estimated ~8 trillion parameters. Same architecture as Claude Fable 5 with different safety wrapper configuration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (datacamp.com — strong multi-step CLI execution)
- Terminal-Bench-Science 0.1: **52.6%** (Mythos/Fable 5.1 update — more than double previous iterations; Fable 5 scored ~24.7%, Opus 5 ~29.0%)
- SEC-bench / Cybersecurity: breakthrough zero-day vulnerability discovery capabilities; 5.1 reduced false positives by 60% (anthropic.com)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~94.1–94.6%** (tensoria.fr, reddit.com — near-expert human capability on physics/chemistry/biology)
- HLE: no standalone percentage found; reasoning performance implied by GPQA Diamond excellence
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: top-tier standing (exact rank not disclosed for Mythos specifically; Fable 5 sibling ranked among top 3)

Coding:

- SWE-bench Verified: **~95.0–95.5%** (reddit.com, system card — near-ceiling autonomous issue resolution)
- SWE-bench Pro: **80.3%** (vellum.ai — massive leap over previous Opus-tier at ~69.2%)
- FrontierCode Diamond: **29.3%** (vellum.ai — more than double Opus 4.8 at 13.4%)
- LiveCodeBench: no exact percentage found; near-human speed in closed-loop engineering tasks
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- 1M-token context window with 128k max output. Designed for repository-scale prompts and extended multi-day engineering logs. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 2.1 at 88.0% is elite; Terminal-Bench-Science 52.6% more than doubles predecessors; breakthrough cybersecurity agent capabilities. Heavily optimized for multi-step tool use and autonomous agent loops. Capped by lack of general-purpose tool-use benchmarks (Tau, Toolathon).
- **Reasoning: 95/100.** GPQA Diamond at 94.1–94.6% represents near-expert human performance on graduate-level science. Always-on adaptive thinking mode for complex logic. Capped only by the absolute ceiling — near-perfect but not flawless.
- **Context window: 95/100.** 1M tokens with 128k max output — among the largest production deployments. Designed for repository-scale ingestion. Tier-mapped to 95 for 1M window with long-horizon agentic optimization.
- **Multimodal: 80/100.** Text + image + file input with text output. Fully multimodal for document and visual analysis. No audio/video input or image generation, and Mythos-specific multimodal benchmarks are sparse, capping below models with broader modality coverage.
- **Coding: 93/100.** SWE-bench Verified at ~95% and SWE-bench Pro at 80.3% are frontier-leading. FrontierCode Diamond 29.3% more than doubles predecessors. Near-human autonomous software engineering. Capped slightly by limited LiveCodeBench disclosure.
- **Cost efficiency: 30/100.** $10/$50 per 1M tokens is the most expensive tier in production — restricted access adds friction. Batch discount (50%) helps but base cost is premium. Reserved for high-value specialized use cases.
- **Overall Score: 91/100.** Mean of (93 + 95 + 95 + 80 + 93) / 5 = 91.2, rounded half-up to 91. A frontier-defining model sharing Fable 5's architecture with unrestricted cybersecurity/biosecurity capabilities, excelling across reasoning, coding, and tool use, with multimodal breadth as its primary gap.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-06
- Method: Public internet research across official system cards, independent benchmarks, and aggregator leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos / Fable 5 System Card](https://anthropic.com)
  - [Vellum — Claude Fable 5 / Mythos Benchmarks](https://vellum.ai)
  - [DataCamp — Claude Mythos 5 Review](https://datacamp.com)
  - [Claude.com — Model Pricing](https://claude.com)
  - [Tensoria — GPQA Diamond Scores](https://tensoria.fr)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
