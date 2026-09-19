# Grok 4.6 — findings by GPT 5.6 Terra

- Source: xAI / Grok 4.6
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work. It is a proprietary, reasoning-configurable successor focused on sustained multi-step work.
- **Provider / access:** xAI API as `grok-4.6` at `https://api.x.ai/v1`; supports both Responses API and Chat Completions. Also available through Grok Build, Cursor, and listed model gateways.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff 2026-02-01 (xAI model documentation).
- **IDs:** `xai/grok-4.6` (no OpenCode Zen Free ID verified).
- **Context window:** 500,000 tokens, verified in xAI's Grok 4.6 API documentation; no text output limit is published.
- **Modalities:** Text and image input; text output. Reasoning effort: low, medium, high, or xhigh. Supports function calling, structured outputs, web/X search, and code-execution tools.
- **Pricing (as of 2026-09-19):** $2.00 input / $0.50 cached input / $6.00 output per 1M tokens below 200K prompt tokens; $4/$1/$12 above 200K (xAI release notes). API access is paid; Grok consumer products may offer limited included usage.
- **Architecture:** Proprietary; xAI has not published parameter counts or architecture details.

### Raw benchmarks found

> xAI's 2026-08-12 launch announcement reports the following results. Unless stated otherwise, the announcement does not publish independent harness configuration or confidence intervals.

Agent / tool use:

- APEX-Agents: **57.5%** (xAI announcement, Grok 4.6 High).
- Terminal-Bench 3.0: **26.0%** (xAI announcement, Grok 4.6 High; not Terminal-Bench 2.1).
- GDPVal-AA v2: **1753 Elo** (xAI announcement).
- Terminal-Bench 2.1: **78.3%** (public benchmark aggregation citing the xAI announcement; separate from the 26.0% Terminal-Bench 3.0 result).
- SkillsBench: **55.8%** (public benchmark aggregation).
- Claw-Eval / ClawProBench: no public score was located in xAI's release material or the benchmark aggregations consulted.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no public score was located in xAI's release material or the benchmark aggregations consulted.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** (xAI announcement; composite of nine benchmarks).
- GPQA Diamond: **94.0%** (Epoch AI benchmark scorecard; independent run reported as 94%, with 93.5% also listed by Sophon/Artificial Analysis).
- Humanity's Last Exam (HLE): **44.1%** (Sophon aggregation attributed to Artificial Analysis).
- SciCode: **53.6%** (Sophon aggregation attributed to Artificial Analysis).
- LCR / MLCR: Artificial Analysis lists AA-LCR v1.1 as an Intelligence Index component, but does not expose Grok 4.6's component score on its public release page.
- CritPt: Artificial Analysis lists CritPt as an Intelligence Index component, but does not expose Grok 4.6's component score on its public release page.
- Omniscience Accuracy / Hallucination Rate: Artificial Analysis lists AA-Omniscience as an Intelligence Index component; no separate public Grok 4.6 component value was located.

Coding:

- DeepSWE 1.1: **65.9%** (xAI announcement, Grok 4.6 High).
- CursorBench v3.2: **69.9%** (xAI announcement, Grok 4.6 High).
- FrontierCode v1.1 Extended: **61.3%** (xAI announcement, Grok 4.6 High).
- SWE-bench Verified: **95.6%** (public benchmark aggregation; #4 of 148 listed models).
- LiveCodeBench: **88.2%** (public benchmark aggregation).
- SciCode: **53.6%** (Sophon aggregation attributed to Artificial Analysis).
- Vibe Code Bench v1.1: **76.2%** (Sophon aggregation attributed to Artificial Analysis).

Long context:

- xAI documents a **500,000-token** context window. No public MRCR, RULER, or GraphWalks retrieval value was located in the xAI, Epoch AI, or Artificial Analysis material consulted.

### Normalized scores (1–100)

- **Tool use: 82/100.** APEX-Agents 57.5%, SkillsBench 55.8%, GDPVal-AA v2 1753, and Terminal-Bench 2.1 at 78.3% support a strong agent score; the materially lower 26% Terminal-Bench 3.0 result and incomplete independent tool coverage cap it.
- **Reasoning: 91/100.** GPQA Diamond at 94.0%, HLE at 44.1%, SciCode at 53.6%, the published AA Intelligence Index of 61, and configurable xhigh reasoning indicate frontier general reasoning; public component scores for LCR, CritPt, and Omniscience remain unavailable.
- **Context window: 86/100.** The documented 500K-token window is excellent, but no public retrieval-at-length evaluation is available and it trails verified 1M-token tiers.
- **Multimodal: 60/100.** The API accepts text and images and produces text, but xAI documents neither native audio/video/document input nor non-text output for this model.
- **Coding: 92/100.** SWE-bench Verified (95.6%), LiveCodeBench (88.2%), Vibe Code Bench (76.2%), DeepSWE 1.1 (65.9%), CursorBench (69.9%), and FrontierCode (61.3%) are a broad frontier-tier coding record; the 53.6% SciCode result and differing public harnesses cap it.
- **Cost efficiency: 70/100.** $2/$6 per 1M tokens ($0.50 cached input) is competitive for a frontier agentic model but remains paid and doubles for prompts above 200K tokens.
- **Overall Score: 82.2/100.** Half-up mean of Tool use, Reasoning, Context window, Multimodal, and Coding: (82 + 91 + 86 + 60 + 92) / 5 = 82.2; best suited to high-capability coding and tool-using work where image input is sufficient.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-19
- Method: Fresh public-web research using xAI's official Grok 4.6 documentation, release notes, and launch announcement, supplemented by Epoch AI, Artificial Analysis-attributed Sophon data, and public benchmark aggregations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
