# Claude 3.5 Haiku — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude 3.5 Haiku (`claude-haiku-3.5`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's legacy fast model (released 2024-10-22), retained for compatibility with older integrations — the pre-Claude-4 Haiku.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), OpenCode Zen legacy route (`opencode/claude-3-5-haiku`), plus ~2 routes.
- **Release / knowledge:** 2024-10-22; knowledge cutoff 2024-07-31 (models.dev).
- **IDs:** `claude-haiku-3.5`, `claude-3-5-haiku-20241022`, `anthropic/claude-3.5-haiku`.
- **Context window:** 200,000 tokens; max output 8,192.
- **Modalities:** text, image and PDF in; text out; tool calls; reasoning off (models.dev: `reasoning: false`).
- **Pricing (as of 2026-11-11/12):** $0.80 / $4.00 per 1M input/output; cache read $0.08.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> BenchLM has no profile for this checkpoint (404); the row below is an aggregator figure labelled with its source.

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows found for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows found for this checkpoint

Coding:

- SWE-bench Verified: **22.0%** (serenitiesai aggregation of the vendor figure)
- LiveCodeBench / DeepSWE: no verified public rows found

Long context:

- 200K context with an 8,192 max output; no MRCR / RULER / GraphWalks row found

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified agentic row was found; the score is a conservative floor for a 2024 legacy tier.
- **Reasoning: 50/100.** No public reasoning benchmark was found for this checkpoint; scored conservatively — low confidence.
- **Context window: 60/100.** 200,000 tokens with only an 8,192 max output.
- **Multimodal: 65/100.** Text, image and PDF in; no public multimodal benchmark row.
- **Coding: 45/100.** SWE-bench Verified 22.0% is far below the current baseline.
- **Cost efficiency: 85/100.** $0.80/$4.00 per 1M — cheap in absolute terms, but Haiku 4.5 is $1/$5 with far more capability.
- **Overall Score: 52.0/100.** Best fit for maintaining legacy Claude 3.5 integrations; there is no reason to start new work on it.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Anthropic model documentation, serenitiesai benchmark summary, models.dev, BenchLM); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude 3.5 Haiku — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude 3.5 Haiku benchmarks — serenitiesai](https://serenitiesai.com/benchmark/models/claude-3-5-haiku)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Claude_Haiku_3.5_v2.md` next to this file.