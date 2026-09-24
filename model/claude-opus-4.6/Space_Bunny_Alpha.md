# Claude Opus 4.6 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-opus-4-6`; adaptive reasoning, high/max configurations)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's frontier model for careful planning, long-running agentic coding, large codebases, research, and professional knowledge work.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-6`); available on claude.ai, Anthropic's API, and major cloud platforms. Adaptive thinking and effort controls are documented.
- **Release / knowledge:** Anthropic announced Opus 4.6 on 2026-02-05. No knowledge cutoff was shown in the reviewed announcement.
- **IDs:** `claude-opus-4-6`; max/high are effort configurations.
- **Context window:** 1M tokens in beta (Anthropic announcement and Artificial Analysis, verified 2026-09-24); exact output limit was not shown in the announcement.
- **Modalities:** Text and image input; text output; vision, tool use, adaptive thinking, computer-use workflows, and document/spreadsheet tasks supported. Audio/video are not listed.
- **Pricing (as of 2026-09-24):** $5 per 1M input tokens and $25 per 1M output tokens.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **81.42%** with prompt modification; Anthropic's standard result was averaged over 25 trials (Anthropic announcement/system-card footnotes)
- MCP Atlas: **62.7%** at high effort; Opus 4.6 was run at max effort for the reported evaluation (Anthropic announcement)
- BrowseComp: **86.8%** with a multi-agent harness; Anthropic describes a no-thinking max-effort setup with web search, web fetch, programmatic tool calling, and compaction (Anthropic announcement)
- Artificial Analysis Intelligence Index: **26** for the non-reasoning high page (Artificial Analysis, accessed 2026-09-24); this is not directly comparable to reasoning-variant indices.
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
- LiveCodeBench, SciCode, Vibe Code Bench, and DeepSWE: **no verified public exact values found**

Long context:

- No public retrieval-at-length result for Opus 4.6 was found. Anthropic verifies a 1M-token context window in beta.

Sources consulted: [Anthropic Opus 4.6 announcement](https://www.anthropic.com/news/claude-opus-4-6) and [Artificial Analysis Opus 4.6](https://artificialanalysis.ai/models/claude-opus-4-6), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 93/100.** SWE-bench 81.42%, MCP Atlas 62.7%, BrowseComp 86.8% with a multi-agent harness, and Anthropic's agentic-work positioning provide strong direct evidence. The benchmark configurations differ, so the score is not a claim that all values are directly comparable.
- **Reasoning: 90/100.** HLE with tools is 53.0%, and Anthropic reports state-of-the-art HLE and professional reasoning; exact GPQA, ARC-AGI, and hallucination values are unavailable.
- **Context window: 98/100.** Anthropic verifies 1M input tokens, but no retrieval-at-length result was published.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not listed.
- **Coding: 92/100.** SWE-bench and MCP Atlas results plus Anthropic's large-codebase and long-horizon coding claims support a frontier score; exact LiveCodeBench/SciCode/DeepSWE values are missing.
- **Cost efficiency: 50/100.** The $5/$25 paid price is expensive; effort controls and context compaction can reduce realized cost.
- **Overall Score: 87.6/100.** (93 + 90 + 98 + 65 + 92) / 5 = 87.6. Best fit: demanding coding agents, research, and professional knowledge work with a 1M context where quality outweighs cost.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's official announcement and Artificial Analysis metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
