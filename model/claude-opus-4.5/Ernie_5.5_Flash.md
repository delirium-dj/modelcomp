# Claude Opus 4.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 4.5 (`claude-opus-4.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's flagship Claude (released 2025-11-24) for deep reasoning, coding and long-horizon agents — the pre-Claude-5 Opus, with a 200K context.
- **Provider / access:** Anthropic API (`claude-opus-4-5`), Amazon Bedrock, Google Vertex (`claude-opus-4-5@20251101`), plus ~20 gateway routes (LLM Gateway, Vercel, ZenMux, Qihang, Merge).
- **Release / knowledge:** 2025-11-24; knowledge cutoff 2025-05 (models.dev).
- **IDs:** `claude-opus-4-5`, `anthropic/claude-opus-4.5`, `claude-opus-4-5-20251101`.
- **Context window:** 200,000 tokens; max output 64,000.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $5.00 / $25.00 per 1M input/output; cache read $0.50.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ³-Bench (Tool-Agent-User): **70.2**; OSWorld-Verified: **66.3%**; Terminal-Bench 2.0: **59.3%**
- MCP Atlas: **42.3%**; Toolathlon: **43.5%**; JobBench: **32.3%**
- OSWorld 2.1 / Terminal-Bench 4.x: no verified public rows published

Reasoning / knowledge:

- BenchLM ranks Multilingual as its strongest category (#2)
- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Opus 4.5
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **80.9%**; LiveCodeBench v6: **84.8%**; SWE Multilingual: **77.5%**
- SWE-bench Pro: **57.1%**; NL2Repo: **43.2%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- 200K context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld-Verified 66.3% and τ³ 70.2 are mid, TB2.0 59.3% below the current baseline; MCP Atlas 42.3% and Toolathlon 43.5% are weak, and no Terminal-Bench 4.x row exists.
- **Reasoning: 75/100.** No public reasoning benchmark was published for Opus 4.5; the score is inferred from its #2 multilingual rank and family reputation — low confidence.
- **Context window: 65/100.** 200,000 tokens with 64,000 max output — the smallest among the Opus line.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this checkpoint.
- **Coding: 82/100.** SWE-bench Verified 80.9% and LiveCodeBench v6 84.8% are good for a 2025 model, SWE Multilingual 77.5% solid; SWE-bench Pro 57.1% and NL2Repo 43.2% are mid.
- **Cost efficiency: 45/100.** $5/$25 per 1M — the same as Opus 5, which beats it on every measured axis.
- **Overall Score: 72.4/100.** Best fit for legacy Claude 4.5 integrations; Opus 5.5 at 20% less is the better choice today.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.5 — Anthropic](https://www.anthropic.com/news/claude-opus-4-5)
  - [Claude Opus 4.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-4-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.5_v2.md`, using the same headings.