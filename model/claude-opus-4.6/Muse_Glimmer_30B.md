# Claude Opus 4.6 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-4-6
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic’s Opus generation with adaptive thinking for agentic coding and long-running workflows. Introduced adaptive thinking and improved code review/debugging reliability. Legacy flagship superseded by later Opus generations.
- **Provider / access:** Anthropic Claude API `anthropic/claude-opus-4-6`, claude.ai, AWS Bedrock, Google Cloud, Microsoft Foundry. Chat Completions / Responses API. Paid tier only.
- **Release / knowledge:** 2026-02-05 release. Knowledge cutoff not published.
- **IDs:** anthropic/claude-opus-4-6
- **Context window:** 200K total per meta.json; 1M token context in beta on Claude Developer Platform per 2026-02-05 announcement.
- **Modalities:** Text, image in; text out. Reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-10-20):** $5 / $25 per million input / output tokens on API. Premium pricing $10 / $37.50 per million for prompts >200K tokens with 1M beta. No free ID on Zen. Paid-tier pricing.
- **Architecture:** Proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.0 (**group**): highest score reported by Anthropic; no verified public numeric released. Claimed state-of-the-art vs prior models and frontier peers (source: anthropic.com/news/claude-opus-4-6, 2026-02-05).
- MCP Atlas / MCP-Atlas Codebase QnA: 62.7% at high effort, max effort run also reported (source: anthropic.com/news/claude-opus-4-6 footnote, 2026-02-05).
- GDPval-AA: outperforms OpenAI GPT-5.2 by ~144 Elo points and Claude Opus 4.5 by 190 Elo points per Artificial Analysis independent run (source: anthropic.com/news/claude-opus-4-6, 2026-02-05). No absolute Elo published.
- BrowseComp: performs better than any other model per vendor claim (source: anthropic.com/news/claude-opus-4-6, 2026-02-05). No verified public numeric.

Reasoning / knowledge:

- Humanity’s Last Exam with tools: 53.0% with tools, max reasoning effort, adaptive thinking enabled, domain blocklist decontamination. Score updated 2026-02-23 from 53.1% due to improved cheating detection (source: anthropic.com/news/claude-opus-4-6 footnote, 2026-02-05/2026-02-23).
- MRCR v2 8-needle 1M: 76% retrieval (source: anthropic.com/news/claude-opus-4-6, 2026-02-05). Sonnet 4.5 scored 18.5% on same variant.
- BigLaw Bench: 90.2% highest BigLaw Bench score of any Claude model, 40% perfect scores, 84% >0.8 (source: anthropic.com/news/claude-opus-4-6 partner quote, 2026-02-05).
- Vending-Bench 2: earns $3,050.53 more than Opus 4.5 per vendor chart (source: anthropic.com/news/claude-opus-4-6, 2026-02-05).

Coding:

- SWE-bench Verified: 80.8% per meta.json short description; vendor reports 81.42% with prompt modification averaged over 25 trials (source: meta.json; anthropic.com/news/claude-opus-4-6 footnote, 2026-02-05).
- LiveCodeBench / SciCode / DeepSWE: no verified public score found for this exact ID in vendor release.
- Terminal-Bench 2.0 coding: see Agent / tool use above.

Long context:

- MRCR v2 8-needle 1M 76% at 1M window (source: anthropic.com/news/claude-opus-4-6, 2026-02-05).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 92/100.** Terminal-Bench 2.0 state-of-the-art claim plus MCP Atlas 62.7% at high effort and strong agentic coding narrative. Caps at lack of published TB2.0 numeric.
- **Reasoning: 88/100.** HLE with tools 53.0% leads frontier models, MRCR 76% at 1M and BigLaw Bench 90.2% support expert reasoning. Caps at no GPQA Diamond public number.
- **Context window: 70/100.** Meta.json lists 200K total. 200K tier maps to 70 per methodology. 1M beta exists but not production-verified for scoring.
- **Multimodal: 65/100.** Image in, text out per meta.json. No audio/video in. Tier maps to 60-70.
- **Coding: 88/100.** SWE-bench Verified 80.8% / 81.42% with prompt mod, plus vendor coding improvements. Frontier SWE range supports high 80s.
- **Cost efficiency: 50/100.** Paid $5/$25 per million. Higher than $3/$15 ≈60 benchmark; efficiency penalized vs free tiers.
- **Overall Score: 81/100.** Mean of Tool 92, Reasoning 88, Context 70, Multimodal 65, Coding 88 = 80.6 → 81. Best-fit recommendation: legacy Opus for agentic coding when price sensitivity moderate and context ≤200K; newer Opus generations preferred for larger context and lower cost.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
