# Claude Opus 4.8 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-8`; adaptive reasoning, max effort)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's high-capability model for coding, agentic work, computer use, and professional knowledge tasks, released before Opus 5.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-8`); available across Anthropic platforms. Anthropic supports user-controlled effort levels and a fast mode.
- **Release / knowledge:** Anthropic announced Opus 4.8 on 2026-05-28; no knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-opus-4-8`; max is an effort configuration.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-24); exact official output limit was not shown on the reviewed announcement.
- **Modalities:** Text and image input; text output; reasoning, computer use, browser agents, and tool use supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $5 per 1M input tokens and $25 per 1M output tokens; fast mode is $10/$50.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **42/100**, rank **#39/210** (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **55.8 tokens/s**; Intelligence Index task cost **$4.08** (Artificial Analysis, accessed 2026-09-24)
- Online-Mind2Web: **84%** (Anthropic announcement, partner test; exact harness details not shown)
- Super-Agent benchmark: Opus 4.8 is described as the only model completing every case end-to-end; no absolute score shown.
- Terminal-Bench 2.1: **no verified public exact value found** in the announcement text; Anthropic specifies the Terminus-2 public harness.
- Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact values found**

Coding:

- Anthropic describes Opus 4.8 as exceeding prior Opus models on CursorBench across effort levels and carrying end-to-end tasks through; no absolute CursorBench value was visible.
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact values found**

Long context:

- No public retrieval-at-length result for Opus 4.8 was found. Artificial Analysis verifies a 1M-token context window.

Sources consulted: [Anthropic Opus 4.8 announcement](https://www.anthropic.com/news/claude-opus-4-8) and [Artificial Analysis Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 92/100.** Anthropic reports strong CursorBench tool efficiency, end-to-end task completion, and 84% Online-Mind2Web; AA Index 42 is strong, but exact Terminal-Bench, Tau, GDPval, and MCP values were not published.
- **Reasoning: 88/100.** AA Index 42 is well above the compared-model median of 25; exact GPQA, HLE, and hallucination values were unavailable.
- **Context window: 98/100.** A 1M-token context window is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 91/100.** Anthropic explicitly reports improved CursorBench and autonomous engineering behavior; exact SWE, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 50/100.** Standard $5/$25 pricing is expensive; fast mode doubles the applicable price.
- **Overall Score: 86.8/100.** (92 + 88 + 98 + 65 + 91) / 5 = 86.8. Best fit: high-end coding agents and computer-use workflows with a 1M context, where premium pricing is acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official announcement and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
