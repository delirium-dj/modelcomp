# Claude Opus 4.5 — findings by Muse Glimmer 30B

- Source: Anthropic/claude-opus-4-5
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 2025 Opus flagship: first Opus model past 80% on SWE-bench Verified with a 67% price cut to $5/$25 per 1M; 200K context, text + image in, text out. Superseded by Opus 4.6–5.5 lineage.
- **Provider / access:** Anthropic Claude API `anthropic/claude-opus-4-5`, Amazon Bedrock, Google Vertex AI. Messages API. Paid tier only.
- **Release / knowledge:** 2025-11-24 release (Anthropic newsroom). Knowledge cutoff May 2025 per ApX record, training cutoff Aug 2025 per Artificial Analysis.
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** 200K total per `meta.json` verification; Anthropic docs confirm 200K with 64K max output.
- **Modalities:** Text + image in; text out. Reasoning yes with effort parameter; tool calls + computer use yes.
- **Pricing (as of 2026-10-20):** $5.00 input / $25.00 output per 1M tokens. Cache read $0.50, 5-min write $6.25, 1-hr write $10. Paid tier, no free ID.
- **Architecture:** Proprietary.

### Raw benchmarks found

> Numbers traced to Anthropic system card / launch newsroom and Artificial Analysis independent summary.

Agent / tool use:
- Terminal-Bench 2.0: **59.3%** (Anthropic system card Table 2.3.A, Nov 2025; 128K thinking budget)
- SWE-bench Verified: **80.9% no-thinking / 80.6% 64K thinking** (Anthropic system card Table 2.4.A — first model past 80%)
- SWE-bench Pro: **52.0% no-thinking / 51.6% 64K thinking** (Anthropic system card)
- SWE-bench Multilingual: **76.2%** (Anthropic system card + announcement)
- τ²-bench / MCP Atlas: state-of-the-art claim per Anthropic launch; no verified public absolute number published
- OSWorld computer use: **66.3%** (Claude 5 Hub compilation of Anthropic data, Nov 2025)
- BrowseComp-Plus / Vending-Bench: qualitative "significant jump / +29% vs Sonnet 4.5" per announcement, no absolute number verified
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:
- GPQA Diamond: **87.0%** (Anthropic system card, 64K thinking, high effort)
- Artificial Analysis Intelligence Index: **24 estimated** (non-reasoning variant, v4.3.2, Artificial Analysis, deprecated banner)
- HLE with tools: **43.4%** (RankedAGI) / 30.8% without tools
- ARC-AGI-2 Verified: **37.6%** (Anthropic)
- CritPt / LCR / MLCR: **no verified public score found**

Coding:
- SWE-bench Verified: **80.9%** (see above)
- SWE-bench Pro: **52.0%** (see above)
- SWE-bench Multilingual: **76.2%** (see above)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:
- MRCR v2 8-needle at 128K: **27.1%** (chaseai 2026-03-14 comparison; model cannot be run at 1M)
- RULER / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 59.3% plus vendor-claimed τ²/MCP-Atlas leadership and OSWorld 66.3% support strong agentic tooling; capped by absence of TB 2.1 absolute numbers and GDPval.
- **Reasoning: 86/100.** GPQA Diamond 87.0% and Intelligence Index 24 place it in upper-tier reasoning band; ARC-AGI-2 37.6% supports SOTA-class claim; capped by missing public HLE/LCR/CritPt numbers.
- **Context window: 70/100.** Verified 200K maps to 200K tier per methodology; MRCR 27.1% at 128K shows limited retrieval inside window, no 1M option.
- **Multimodal: 65/100.** Text + image in, text out; methodology image-in band 60-70.
- **Coding: 89/100.** SWE-bench Verified 80.9% first past 80, SWE-Pro 52.0%, Multilingual 76.2% form a strong verified triple; capped below 90 by missing LiveCodeBench/SciCode/DeepSWE numbers.
- **Cost efficiency: 45/100.** $5/$25 paid tier sits between $3/$15 (~60) and $10/$50 (~30) anchors; no free tier.
- **Overall Score: 79/100.** Mean of Tool 86 + Reasoning 86 + Context 70 + Multimodal 65 + Coding 89 = 79.2 → 79. Best fit as legacy-but-elite 200K coding agent.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using `meta.json` curated metadata and Anthropic launch newsroom + Artificial Analysis model page; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
