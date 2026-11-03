# Claude Sonnet 5.4 — findings by Mercury 3

- Source: Anthropic/Claude Sonnet 5.4
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Queue identity `claude-sonnet-5.4` (Overall 85.6). ⚠️ **Identity note:** no Anthropic official page, API model ID, or deprecation record documents a distinct "Claude Sonnet 5.4"; the documented Sonnet lineup is 4.6 → 5 (2026-06-30) → 5.5 (2026-09-28), and no tracker (Artificial Analysis, BenchLM, OpenRouter, Vals, models.dev) carries a 5.4 row. This identity is treated as a Sonnet 5-line designation (lineage-anchored) until a dedicated card appears; scores below are that lineage's documented profile, not per-endpoint 5.4 absolutes.
- **Provider / access:** Anthropic API / Claude platforms (`claude-sonnet-5-4` as dateless pinned snapshot in the 4.6-generation convention); closed weights; no free tier.
- **Release / knowledge:** Bracket years: Sonnet 5 GA 2026-06-30; Sonnet 5.5 2026-09-28; reliable knowledge cutoff Jun 2026 (lineage).
- **IDs:** `claude-sonnet-5-4` (Anthropic convention); `opencode/claude-sonnet-5.4` (router alias). Not present in Anthropic models/deprecations tables (verified 2026-11-03).
- **Context window:** 1M tokens (lineage); max output 128K.
- **Modalities:** text + image input, text output; adaptive thinking; tool use (web search/fetch, code execution, computer use).
- **Pricing (as of 2026-11-03):** lineage Sonnet 5: $2.00 input / $10.00 output per 1M tokens, 90% cache discount (peer-curated 5.4 spec row cites $2.50/$12.50 with $0.25 cached — unverified).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

No dedicated 5.4 rows exist. Closest verified lineage (Claude Sonnet 5, Anthropic system card + AA + BenchLM + Vals):

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card) / 80.5% (AA) / 74.5% (Vals); BrowseComp: **84.7%**; OSWorld-Verified: **81.2%**; OSWorld 2.1: 57.0%; GDPval-AA: **1603 Elo** (48.2% normalized)
- AA Agentic Index: 44.3%; EnterpriseOps-Gym: 44.7%; Tau3-Banking: 37.3%; AnalystAgent: 46.3%; TB3.0: 14.6%; ApprenticeBench: 16%; MazeBench ASCII: 0%

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA) / 88.9% (Vals); HLE: **57.4%** with tools / 43.2% without; MMLU-Pro: 87.5% (Vals)
- AA-LCR: **82.0%**; CritPt: 16.9%; AA II: 38.2; FrontierMath v2 Tiers 1–3 65.61%, Tier 4 29.27% (Epoch AI)
- AA-Omniscience: accuracy 40.1%, hallucination rate 39.4%

Coding:

- SWE-bench Verified: **85.2%**; SWE-bench Pro: **63.2%**; SWE Multilingual: **78.3%**; SWE Multimodal: 28.1%; Terminal-Bench 2.1 80.4%; CursorBench 3.2: 61.5% / 4.0: 34.1%; FrontierCode 1.1 Main: 42.7%; AA Coding Index: 71.5%; VulcanBench CII v1: 89.2%

Long context:

- 1M window; AA-LCR 82.0%; no MRCR/GraphWalks figure verified.

Multimodal:

- text/image in, text out; MMMU-Pro 77.3% (AA); CharXiv 88.3% (77% w/o tools); Design Arena 1273 Elo.

### Normalized scores (1–100)

Sonnet 5-line anchor; per-endpoint 5.4 values unverified:

- **Tool use: 83/100.** TB2.1 ~80%, OSWorld-Verified 81.2%, GDPval 1603 — strong agentic; capped by TB3.0 14.6%, ApprenticeBench 16%, MazeBench 0%, and Tau3 37.3%.
- **Reasoning: 86/100.** GPQA 91.1%, HLE 57.4% w/tools, LCR 82%, FrontierMath 65.6%; capped by II 38.2 and CritPt 16.9%.
- **Context window: 90/100.** 1M with strong LCR 82%; no deep-retrieval figure verified.
- **Multimodal: 84/100.** image input with strong CharXiv 88.3%; text-only output, no video/audio input.
- **Coding: 86/100.** SWE Verified 85.2%, SWE Pro 63.2%, Multilingual 78.3%; capped by FrontierCode 42.7% and CursorBench 4.0 34.1%.
- **Cost efficiency: 84/100.** $2/$10 with 90% cache discount — competitive mid-frontier; 84.5 t/s, very long TTFT (161.9s on max).
- **Overall Score: 85.8/100.** Lineage mean (83+86+90+84+86)/5 = 85.8 → 86, discounted to 85 for the unverified distinct-identity caveat. Revisit when a dedicated 5.4 card/row exists.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Sonnet 5 announcement + system card, Anthropic model overview/deprecations pages, Artificial Analysis, BenchLM, Vals, Epoch AI, models.dev/OpenRouter negatives); scores are normalized 1–100 interpretations, not official vendor scores. **Identity flag:** no public documentation of a distinct Sonnet 5.4 exists (verified 2026-11-03); scores anchored on the documented Sonnet 5 line and marked as lineage evidence.
- Reference URLs:
  - [Introducing Claude Sonnet 5 (Anthropic, 2026-06-30)](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Sonnet 5 System Card (Anthropic)](https://www.anthropic.com/claude-sonnet-5-system-card)
  - [Claude models overview — no 5.4 row (Anthropic docs)](https://platform.claude.com/docs/en/about-claude/models/overview)
  - [Claude model deprecations — no claude-sonnet-5-4 row (Anthropic docs)](https://platform.claude.com/docs/en/about-claude/model-deprecations)
  - [Claude Sonnet 5 — Artificial Analysis model page ($2/$10, 1M)](https://artificialanalysis.ai/models/claude-sonnet-5)
  - [Claude Sonnet 5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-sonnet-5)
