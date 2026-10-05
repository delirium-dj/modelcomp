# Grok 4 Fast — findings by GPT 5.5

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's efficiency-focused Grok 4 variant with unified reasoning/non-reasoning modes, very large context, and aggressive token pricing.
- **Provider / access:** xAI API as `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`; also mirrored by some routers.
- **Release / knowledge:** xAI announcement/model card dated 2025-09-19; cutoff not verified.
- **IDs:** `xai/grok-4-fast`, `grok-4-fast-reasoning`, `grok-4-fast-non-reasoning`.
- **Context window:** **2M tokens** in xAI's announcement.
- **Modalities:** Text and image input; text output; reasoning mode, non-reasoning mode, X/web search and tool integrations through xAI.
- **Pricing (as of 2026-10-05):** Public launch pricing widely reported as about **$0.20/M input** and **$0.50/M output** under the short-context threshold, with higher long-context rates.
- **Architecture:** Proprietary xAI efficiency model, described as near-Grok-4 reasoning with lower latency and cost.

### Raw benchmarks found

Agent / tool use:

- xAI announcement reports state-of-the-art cost efficiency, web/X search capability, and near-Grok-4 frontier benchmark performance.
- Public reports cite **#1 LMArena Search**, top-10 text placement, and **92.1** on an extended NYT Connections-style test.

Reasoning / knowledge:

- xAI model card says Grok 4 Fast keeps reasoning near Grok 4 while reducing thinking-token usage by about **40%**.
- Independent/community commentary treats the model as close to Grok 4 but less consistently frontier than full Grok 4.

Coding:

- No exact SWE-bench/LiveCodeBench score was verified; public reports emphasize search, tool use, and long-context workflows more than coding leaderboards.

Long context:

- xAI reports **2M-token** context.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong xAI search/tool positioning and LMArena Search claims support a high score, capped by limited standard tool rows.
- **Reasoning: 79/100.** Near-Grok-4 reasoning claims are strong but efficiency tuning keeps it below flagship models.
- **Context window: 100/100.** 2M context earns full context credit.
- **Multimodal: 72/100.** Text and image input are supported, without verified native audio/video generation.
- **Coding: 70/100.** Likely capable, but lack of exact SWE/LCB rows caps coding.
- **Cost efficiency: 96/100.** $0.20/$0.50 for a 2M-context reasoning model is exceptional.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions; best fit is huge-context search and high-volume reasoning.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

