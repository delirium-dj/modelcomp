# Claude Opus 4.8 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-8`; adaptive reasoning, max effort)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-validation 2026-09-29: the Artificial Analysis Intelligence Index was re-based to **v4.3.2** (10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). **Claude Opus 4.8 (max) is unchanged at 42** on v4.3.2, so no score moved. Two surrounding facts moved: rank **#39 → #42 of 216**, and measured output speed 55.8 → **51.9 tokens/s** (now #140 of 216). Artificial Analysis now also carries a **deprecated** banner on this model and points to Claude Opus 5.

## Model card

- **Name:** Claude Opus 4.8 (Adaptive Reasoning, Max Effort)
- **Short description:** Anthropic's high-capability model for coding, agentic work, computer use, and professional knowledge tasks, released before Opus 5 and now flagged as superseded.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-8`); available across Anthropic platforms. Still listed on OpenCode Zen at $5.00 in / $25.00 out per 1M tokens ($0.50 cached read, $6.25 cached write) and served through seven API providers on Artificial Analysis. Anthropic supports user-controlled effort levels and a fast mode.
- **Release / knowledge:** Anthropic announced Opus 4.8 on 2026-05-28 (Artificial Analysis: "Released May 2026", 2026-05-28); no knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-opus-4-8`; max is an effort configuration.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-29); exact official output limit was not shown on the reviewed announcement.
- **Modalities:** Text and image input; text output; reasoning, computer use, browser agents, and tool use supported. Audio/video are not listed.
- **Pricing (as of 2026-09-29):** $5 per 1M input tokens and $25 per 1M output tokens; fast mode is $10/$50. Artificial Analysis reports a 90% cache discount (blended 7:2:1 rate $3.85 per 1M); OpenCode Zen confirms $5.00 / $25.00 with $0.50 cached read.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **42/100**, rank **#42/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark; value unchanged from the v4.1.1 reading of 42)
- Output speed: **51.9 tokens/s** (was 55.8 on 2026-09-24) — rank #140 of 216; time to first answer token **34.44s**; Intelligence Index task cost **$4.08** (Artificial Analysis, accessed 2026-09-29)
- Verbosity: **170M** output tokens across the Intelligence Index, vs a comparable-model median of 88M — the reason $4.08 per index task is high despite only a 1-point index edge over Sonnet 5
- Online-Mind2Web: **84%** (Anthropic announcement, partner test; exact harness details not shown)
- Super-Agent benchmark: Opus 4.8 is described as the only model completing every case end-to-end; no absolute score shown.
- Terminal-Bench 2.1: **no verified public exact value found** in the announcement text; Anthropic specifies the Terminus-2 public harness.
- Tau3-Banking, GDPval-AA v2.1, AutomationBench-AA, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **42** (Artificial Analysis, accessed 2026-09-29; unchanged)
- GPQA Diamond, HLE, AA-LCR v1.1, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact values found**

Coding:

- Anthropic describes Opus 4.8 as exceeding prior Opus models on CursorBench across effort levels and carrying end-to-end tasks through; no absolute CursorBench value was visible.
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact values found**

Long context:

- No public retrieval-at-length result for Opus 4.8 was found. Artificial Analysis verifies a 1M-token context window.

Sources consulted: [Anthropic Opus 4.8 announcement](https://www.anthropic.com/news/claude-opus-4-8), [Artificial Analysis Opus 4.8](https://artificialanalysis.ai/models/claude-opus-4-8), and [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 92/100.** Anthropic reports strong CursorBench tool efficiency, end-to-end task completion, and 84% Online-Mind2Web; AA Index 42 is strong, but exact Terminal-Bench, Tau, GDPval, and MCP values were not published.
- **Reasoning: 88/100.** AA Index 42 is well above the 2026-09-29 comparable-model median of 26; exact GPQA, HLE, and hallucination values were unavailable.
- **Context window: 98/100.** A 1M-token context window is verified; no retrieval-at-length result was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 91/100.** Anthropic explicitly reports improved CursorBench and autonomous engineering behavior; exact SWE, DeepSWE, LiveCodeBench, and SciCode values were not available.
- **Cost efficiency: 50/100.** Standard $5/$25 pricing is expensive; fast mode doubles the applicable price. AA measures $4.08 per index task against only 42 points — 170M output tokens make Opus 4.8 poor value next to Claude Opus 5.5 at 58.
- **Overall Score: 86.8/100.** (92 + 88 + 98 + 65 + 91) / 5 = 434 / 5 = 86.8. Best fit: high-end coding agents and computer-use workflows with a 1M context, where premium pricing is acceptable — but Artificial Analysis now marks this model deprecated and recommends Claude Opus 5.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official announcement, Artificial Analysis (v4.3.2 Intelligence Index, accessed 2026-09-29), and OpenCode Zen pricing; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
