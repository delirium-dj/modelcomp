# Claude Sonnet 4.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-sonnet-4-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sep 29, 2025 Sonnet flagship; first Sonnet-tier model to beat GPT-5 on SWE-bench Verified; default free/Pro model in Feb 2026 before Sonnet 4.6/5.
- **Provider / access:** Claude API (`claude-sonnet-4-5`), Bedrock, Vertex AI, Foundry; superseded as the default by Sonnet 4.6 / Sonnet 5.
- **Release / knowledge:** 2025-09-29.
- **IDs:** `anthropic/claude-sonnet-4-5`
- **Context window:** 200,000 tokens standard, expandable to 1M with prompt tier ≥4 (tiered by organization); 64K max output.
- **Modalities:** Text + image in; text out; hybrid reasoning with up-to-64K thinking budget.
- **Pricing (as of 2026-10-02):** $3/M in, $15/M out; cached read $0.30/$0.60; >200K: $6/$22.50.
- **Architecture:** Proprietary; supports multi-agent orchestration (orchestrator lists at 85.4% on Anthropic's bench vs itself running alone).

### Raw benchmarks found

Agent / tool use:

- τ²-bench Airline: **70.0%**; τ²-bench Telecom: **98.0%**
- Terminal-Bench 2.1: **55.8%** (vs GPT-5's 35.2%, Gemini 2.5 Pro's 32.6% class)
- OSWorld-Verified: **61.4%**
- SWE-bench Multilingual: **67%**

Reasoning / knowledge:

- GPQA Diamond: **83.4%**; AIME 2025: **87%** (no tools), **100%** (with Python tools)
- HLE: not published independently at launch; BullshitBench v2: 79%

Coding:

- SWE-bench Verified: **77.2%** (Anthropic, 10-trial mean, 200K thinking budget) / **82.0%** with parallel compute — highest verified score at launch
- SWE-Bench Pro: **43.6%**; SWE-bench bash-only: 71.4
- Terminal-Bench 2.0: **50.0%**; orchestration benchmark: 85.4%

Long context:

- 200K standard with a 1M beta option for tier-4 organizations; >200K pricing tier is the practical cap for most teams.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Telecom 98% and Terminal-Bench 2.1 55.8% lead the Sept-2025 field; OSWorld 61.4%.
- **Reasoning: 76/100.** GPQA 83.4% and AIME-with-Python 100% — strong for the era, superseded since.
- **Context window: 70/100.** Standard 200K window is the limiting line item; 1M beta exists but tier-gated and >200K sits on a 2x pricing tier.
- **Multimodal: 62/100.** Text + image in; no audio/video.
- **Coding: 80/100.** SWE-bench Verified 77.2% (82% with parallel compute) was the first Sonnet to top GPT-5's 74.9%.
- **Cost efficiency: 76/100.** $3/$15 standard, >200K doubles to $6/$22.50; Batch and caching still help.
- **Overall Score: 73/100.** Mean of the five quality dims; preserved 2025 vintage for comparison research. New work should target Sonnet 5/5.5 or current Flash/Pro tiers.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, AIReleaseTracker, VectorWire, llm-stats.com, ChatForest); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
