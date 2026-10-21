# Claude Opus 4.8 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-4-8
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic’s Opus 4.8 for multi-step coding and agentic work, positioned as a direct upgrade to Opus 4.7 with parallel-subagent dynamic workflows in Claude Code. Flag as legacy-pinned versus later 1M Opus generations.
- **Provider / access:** Anthropic Claude API `anthropic/claude-opus-4-8`. Chat Completions / Messages API. No Free ID on Zen.
- **Release / knowledge:** 2026-05-28 release; knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** 200K total per `meta.json` verification. Web sources also cite 1M input / 128K output in later docs.
- **Modalities:** Text, image in; text out. Reasoning yes/no; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** $5.00 / 1M input, $25.00 / 1M output. Fast mode ~2.5× speed at $10 / $50 per 1M. Paid tier, no free tier.
- **Architecture:** Proprietary. Parameters undisclosed, MoE not confirmed public.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (Anthropic launch + LLM Stats 2026-05-28)
- SWE-bench Pro: **69.2%** (Anthropic launch + LLM Stats)
- MCP-Atlas: **82.2%** (LLM Stats)
- BrowseComp single-agent: **84.3%** (LLM Stats)
- OSWorld-Verified: **83.4%** (LLM Stats; harness updated vs 4.7)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (LLM Stats / Anthropic)
- HLE with tools: **57.9%** (LLM Stats)
- GDPval-AA: **1890 Elo** (LLM Stats / Anthropic)
- HLE without tools: **49.8%** (LLM Stats)

Coding:

- SWE-bench Verified: **88.6%** (Anthropic launch, LLM Stats 2026-05-28)
- SWE-bench Pro: **69.2%** (see above)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported in verified public sources.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 74.6% below frontier 88%+ but GDPval 1890 Elo and MCP-Atlas 82.2% lift agentic/tool score; caps at TB level.
- **Reasoning: 92/100.** GPQA Diamond 93.6% at frontier, HLE 57.9% with tools strong; near-top reasoning tier.
- **Context window: 70/100.** 200K per meta.json maps to 200K–500K tier; 70 per methodology.
- **Multimodal: 65/100.** Text + image in, text out; no audio/video in.
- **Coding: 88/100.** SWE-bench Verified 88.6% frontier-level, SWE-bench Pro 69.2% solid; Terminal-Bench coding proxy 74.6% caps below 90.
- **Cost efficiency: 40/100.** $5/$25 per 1M paid tier; mid-high price for frontier class.
- **Overall Score: 80/100.** Mean of Tool 85 + Reasoning 92 + Context 70 + Multimodal 65 + Coding 88 = 80. Best fit as high-end paid coding/agent model, legacy context.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
