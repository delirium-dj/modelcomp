# MAI-Code-1.1-Flash — findings by Ernie 5.5 Flash

- Source: Microsoft/MAI-Code-1.1-Flash (`mai-code-1.1-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's coding model with native vision support (released 2026-08-11), optimized for fast, efficient software development inside GitHub Copilot.
- **Provider / access:** GitHub Copilot / Microsoft (`mai-code-1.1-flash`) — the only catalogued route. No public per-token API outside the Copilot surface.
- **Release / knowledge:** 2026-08-11; knowledge cutoff not published.
- **IDs:** `mai-code-1.1-flash`, `github-copilot/mai-code-1.1-flash`, `microsoft/MAI-Code-1.1-Flash`.
- **Context window:** 256,000 total (128,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.20 / $1.20 per 1M input/output; cache read $0.02 (catalog estimate; the model is primarily surfaced through Copilot subscriptions).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM exposes only 3 displayable rows for this model.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%**
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for MAI-Code-1.1-Flash
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **72.6%** (the headline row)
- SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 256K context (128K in / 128K out) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 62.9% is mid-frontier for a fast coding model; with no OSWorld/Toolathlon row published the score is a single-row estimate.
- **Reasoning: 60/100.** No public reasoning benchmark exists for this model; the score is a conservative inference — low confidence.
- **Context window: 72/100.** 256,000 tokens with a 128,000 input / 128,000 output split.
- **Multimodal: 72/100.** Text, image and PDF in — "native vision support" is the headline feature — but no public multimodal benchmark row was published.
- **Coding: 75/100.** SWE-bench Verified 72.6% is decent for a fast, cheap coding model, but no Pro/DeepSWE/LiveCodeBench row was published to confirm repo-level ability.
- **Cost efficiency: 90/100.** $0.20/$1.20 per 1M with $0.02 cache reads, and effectively included in Copilot subscriptions.
- **Overall Score: 69.8/100.** Best fit for high-volume, latency-sensitive code completion and review inside GitHub Copilot; not a frontier agent.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Microsoft/GitHub Copilot model docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MAI-Code-1.1-Flash — GitHub Copilot model catalog](https://docs.github.com/en/copilot/reference/ai-models/model-choices)
  - [MAI-Code-1.1-Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/mai-code-1-1-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `MAI_Code_1.1_Flash_v2.md`, using the same headings.