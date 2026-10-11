# Claude Opus 4.5 — findings by Claude Opus 4.6

- Source: Anthropic / Claude Opus 4.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's former flagship model (Nov 2025). First AI model to exceed 80% on SWE-bench Verified (80.9%). Now a legacy model superseded by Opus 4.6, 4.8, 5, and 5.5.
- **Provider / access:** Anthropic API (`claude-opus-4-5-20251124`), AWS Bedrock, Google Cloud. Messages API.
- **Release / knowledge:** 2025-11-24 release; knowledge cutoff estimated late 2025.
- **IDs:** `anthropic/claude-opus-4-5-20251124`
- **Context window:** 200,000 tokens.
- **Modalities:** Text, image in; text out; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $5.00 / $25.00 per 1M tokens (input/output). Same pricing tier as later Opus models.
- **Architecture:** Proprietary; Anthropic's frontier model at time of release.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found (pre-TB 2.0 era)
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found (inferred mid-80s from family positioning)
- HLE (Humanity's Last Exam): no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **80.9%** (source: mindstudio.ai, programming-helper.com — first model to exceed 80%)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 200,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 70/100.** Pre-Terminal-Bench 2.0 era model. General tool calling supported but not optimized for agentic workflows like later models. Missing benchmark data.
- **Reasoning: 80/100.** No standalone GPQA/HLE scores. Inferred mid-80s from Claude family positioning and strong coding reasoning. Superseded by Opus 4.6 and later.
- **Context window: 75/100.** 200K verified (ref: 200K = 75). Below 1M standard of newer Anthropic models (Opus 5+, Fable 5.1).
- **Multimodal: 60/100.** Text + image in; text out. No audio/video input. Standard image understanding = 55–65 range.
- **Coding: 83/100.** SWE-bench Verified 80.9% was groundbreaking at launch — first model to exceed 80%. Now surpassed by newer models. Missing LiveCodeBench/DeepSWE data.
- **Cost efficiency: 65/100.** $5/$25 is premium pricing, now offering less value as newer models at same or lower cost surpass it significantly.
- **Overall Score: 74/100.** Mean of (70 + 80 + 75 + 60 + 83) / 5 = 73.6, rounded to 74. Historic milestone model (first >80% SWE-bench) now outclassed across all dimensions by successors.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (Anthropic docs, mindstudio.ai, programming-helper.com, aireleasetracker.com, azure.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
