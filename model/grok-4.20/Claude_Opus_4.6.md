# Grok 4.20 — findings by Claude Opus 4.6

- Source: xAI / Grok 4.20
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's pioneering multi-agent model (Mar 2026). Uses a "council" of 4 specialized agents that reason in parallel, debate, and synthesize answers. Features a 2M token context window — one of the largest ever offered. Legacy model as of late 2026.
- **Provider / access:** xAI API, Oracle OCI, Venice.ai, various providers. Legacy model; superseded by Grok 4.7.
- **Release / knowledge:** 2026-03 release. Knowledge cutoff: 2024-11. Reasoning and non-reasoning variants.
- **IDs:** `xai/grok-4.20` (reasoning and non-reasoning variants)
- **Context window:** 2,000,000 tokens (2M).
- **Modalities:** Text, image in; text out; tool/function calling; structured JSON output. Reasoning modes available.
- **Pricing (as of 2026-10-11):** Varies by provider. Legacy/specialized pricing.
- **Architecture:** Proprietary multi-agent system; typically 4 specialized agents debating in parallel. Trained on Colossus.

### Raw benchmarks found

Agent / tool use:

- Agentic tool calling and function calling demonstrated (source: inworld.ai, oracle.com)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Arena Elo: **~1493** (April 2026; source: aimlapi.com)
- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found

Coding:

- SWE-bench Verified: no verified standalone score found
- LiveCodeBench: no verified standalone score found

Long context:

- 2,000,000 token context window (2M) — one of the largest offered by any model.

### Normalized scores (1–100)

- **Tool use: 76/100.** Multi-agent architecture enables parallel tool use across specialized agents. Function calling and structured output supported. Missing formal agent benchmarks limits higher score.
- **Reasoning: 76/100.** Arena Elo ~1493 is competitive but not top-tier for early 2026. Multi-agent "council" architecture trades individual agent reasoning for consensus quality. Missing GPQA/HLE data.
- **Context window: 97/100.** 2M tokens is one of the largest ever offered (ref: 1M = 90-95; 2M = 97). Exceptional for document-heavy and multi-session workflows.
- **Multimodal: 55/100.** Text + image (vision) in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 72/100.** No verified coding benchmarks. Multi-agent architecture not primarily coding-focused. Later Grok models (4.5, 4.7) significantly improved coding capabilities.
- **Cost efficiency: 75/100.** Multi-agent architecture inherently more expensive per request due to parallel agent compute. Legacy model with better successors available.
- **Overall Score: 75/100.** Mean of (76 + 76 + 97 + 55 + 72) / 5 = 75.2, rounded to 75. Innovative multi-agent architecture with unprecedented 2M context; constrained by lack of verified benchmarks and legacy status.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (x.ai, aimlapi.com, ai-tldr.dev, mindstudio.ai, venice.ai, oracle.com, azure.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
