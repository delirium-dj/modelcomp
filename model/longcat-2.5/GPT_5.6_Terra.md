# LongCat 2.5 Preview — findings by GPT 5.6 Terra

- Source: Meituan (`longcat-2.5-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's preview coding model, distributed through its API and temporarily free routes in OpenCode.
- **Provider / access:** Meituan API; documented OpenCode Zen route `longcat-2.5-preview-free`.
- **Release / knowledge:** Released 2026-09-25; knowledge cutoff not published.
- **IDs:** `meituan/longcat-2-5-preview`
- **Context window:** 1.05M tokens; 131K maximum output (published provider listings).
- **Modalities:** Text and image input, text output, reasoning, tool calling, and structured output.
- **Pricing (as of 2026-10-05):** $0.30/M input and $1.20/M output direct; a limited-time free OpenCode route was publicly listed.
- **Architecture:** Not published.

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark score found. Tool calling is listed by provider catalogs.

Reasoning / knowledge:

- No verified public reasoning benchmark score found.

Coding:

- LLM Coding Leaderboard: **46.65/80** across seven projects using OpenCode (AI Coding Daily, evaluated 2026-10-02).
- A separate 24-prompt coding evaluation reported **44/60** aggregate (AI Tech Insights); the automated judge was GPT-5.6 Sol, so it is directional rather than a standard benchmark.

Long context:

- Officially advertised **1.05M-token** context; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool calling is advertised, but no measured agent benchmark was found.
- **Reasoning: 68/100.** The available coding evaluations indicate useful capability but no verified general-reasoning result is public.
- **Context window: 92/100.** The 1.05M-token advertised window is excellent, capped because no retrieval measurement was found.
- **Multimodal: 60/100.** Image input and text output are documented, without verified broader modality coverage.
- **Coding: 65/100.** Two public project-based evaluations place it below current frontier systems; the results are directional and harness-dependent.
- **Cost efficiency: 100/100.** The documented limited-time OpenCode route is free; direct API pricing is also low.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions: 69.0; best treated as a low-cost preview option pending standardized evaluations.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
