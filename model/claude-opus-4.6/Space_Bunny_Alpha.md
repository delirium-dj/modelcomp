# Claude Opus 4.6 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-6`; adaptive reasoning, high/max configurations)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's frontier model for careful planning, long-running agentic coding, large codebases, research, and professional knowledge work. Now a legacy Opus model superseded within the same family.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-6`); available on claude.ai, Anthropic's API, and major cloud platforms. Adaptive thinking and effort controls are documented.
- **Release / knowledge:** Anthropic announced Opus 4.6 on 2026-02-05. Anthropic's model documentation lists a reliable knowledge cutoff of **May 2025** and a training-data cutoff of **January 2026** for this model.
- **IDs:** `claude-opus-4-6`; max/high are effort configurations.
- **Context window:** 1M tokens in beta; **128K maximum output** tokens (Anthropic models overview, re-verified 2026-09-29). The output limit was not shown in the original announcement and is now filled in from the model documentation.
- **Modalities:** Text and image input; text output; vision, tool use, adaptive thinking, computer-use workflows, and document/spreadsheet tasks supported. Audio/video are not listed.
- **Pricing (as of 2026-09-29):** $5 per 1M input tokens and $25 per 1M output tokens.
- **Lifecycle:** Artificial Analysis now flags Claude Opus 4.6 as **deprecated** and points to its successor **Claude Opus 4.7** (Anthropic's own migration guidance for current work is to move to Opus 5.5). Anthropic's deprecations page lists `claude-opus-4-6` as active but **not sooner than 2027-02-05** for retirement, so the endpoint remains serviceable.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **81.42%** with prompt modification; Anthropic's standard result was averaged over 25 trials (Anthropic announcement/system-card footnotes)
- MCP Atlas: **62.7%** at high effort; Opus 4.6 was run at max effort for the reported evaluation (Anthropic announcement)
- BrowseComp: **86.8%** with a multi-agent harness; Anthropic describes a no-thinking max-effort setup with web search, web fetch, programmatic tool calling, and compaction (Anthropic announcement)
- Artificial Analysis Intelligence Index v4.3.2, max effort: **32**, rank **#80/216** (Artificial Analysis, accessed 2026-09-29; composite benchmark, and it supersedes the earlier non-reasoning-high figure of 26, which is not directly comparable)
- Output speed at max effort: **38.5 tokens/s**; time to first token **16.95s** (Artificial Analysis, accessed 2026-09-29)
- GDPval-AA: Anthropic says Opus 4.6 leads the next-best model by about **144 Elo** and its predecessor by **190 Elo**, but the absolute Elo is not shown in the reviewed text.
- Terminal-Bench 2.0: **no verified public exact value found** in the announcement text.
- Tau3-Banking, Claw-Eval, Toolathon, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- HLE with tools: **53.0%** after Anthropic's updated cheating-detection pipeline; an earlier **53.1%** value was corrected (Anthropic announcement, February 23, 2026 update)
- ARC-AGI 2: Anthropic documents a max-effort, 120K-thinking-budget run but does not expose the absolute score in the reviewed text.
- GPQA Diamond, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact values found**

Coding:

- SWE-bench Verified: **81.42%** with prompt modification; 25-trial standard score is referenced but its absolute value is not exposed in the fetched text.
- MCP Atlas: **62.7%** at high effort (Anthropic)
- Artificial Analysis Intelligence Index v4.3.2 (max effort): **32** (Artificial Analysis)
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact values found**

Long context:

- No public retrieval-at-length result for Opus 4.6 was found. Anthropic verifies a 1M-token context window in beta and a 128K maximum output limit.

Sources consulted: [Anthropic Opus 4.6 announcement](https://www.anthropic.com/news/claude-opus-4-6), [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview), [Anthropic model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), and [Artificial Analysis Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 93/100.** SWE-bench 81.42%, MCP Atlas 62.7%, BrowseComp 86.8% with a multi-agent harness, and Anthropic's agentic-work positioning provide strong direct evidence. The v4.3.2 max-effort index of 32 is lower than current-generation peers, but the configurations differ, so the score is not a claim that all values are directly comparable.
- **Reasoning: 90/100.** HLE with tools is 53.0%, and Anthropic reports state-of-the-art HLE and professional reasoning; exact GPQA, ARC-AGI, and hallucination values are unavailable. The May 2025 knowledge cutoff limits very recent-fact reasoning.
- **Context window: 98/100.** Anthropic verifies 1M input tokens and 128K max output; no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 92/100.** SWE-bench and MCP Atlas results plus Anthropic's large-codebase and long-horizon coding claims support a frontier score; exact LiveCodeBench/SciCode/DeepSWE values are missing.
- **Cost efficiency: 50/100.** The $5/$25 paid price is expensive; effort controls and context compaction can reduce realized cost. Per-task cost is high relative to cheaper Flash-tier routes.
- **Overall Score: 87.6/100.** (93 + 90 + 98 + 65 + 92) / 5 = 438 / 5 = 87.6. Best fit: existing Opus 4.6 deployments that need continuity through at least early 2027. New builds should migrate to Opus 4.7 or Opus 5.5.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's official announcement, model documentation, and deprecations page plus Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
