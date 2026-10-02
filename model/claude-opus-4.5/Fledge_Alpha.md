# Claude Opus 4.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-opus-4-5`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's Nov 24, 2025 flagship, the first >80% SWE-bench Verified frontier model; priced $5/$25 — the template for the modern Opus tier.
- **Provider / access:** Claude API (`claude-opus-4-5-20251101`), Bedrock, Vertex AI, Claude apps.
- **Release / knowledge:** 2025-11-24.
- **IDs:** `anthropic/claude-opus-4-5-20251101`
- **Context window:** 200,000 tokens.
- **Modalities:** text + image in; text out; effort high default, 64K thinking budget.
- **Pricing (as of 2026-10-02):** $5/M in, $25/M out, $0.50/M cache read.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%**; MCP-Atlas: **62.3%**; OSWorld: **66.3%**
- τ²-Bench: 75.3% Anthropic auto-routing row; GDPval not AA-tracked at this tier
- Vending-Bench/subscription-like economics not tracked

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (Anthropic); AA Reasoning row: 86.6%
- HLE (reasoning): **30.1%**; AA-LCR: 77.3%
- MMLU: 88.3%; AIME 90%; BullshitBench v2: 90%

Coding:

- SWE-bench Verified: **80.9%** (#1 at launch); SWE-bench Multilingual: leads 7/8 languages
- Terminal-Bench 2.0: **59.3%**; SWE-bench Pro: **52.0%**
- Aider Polyglot: **89.4%**; HumanEval: 84.9%

Long context:

- 200K window only — does not support the 1M context of later releases.

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld 66.3% and MCP-Atlas 62.3% led at launch; Terminal-Bench 2.0 59.3% is the weakest documented agentic row.
- **Reasoning: 74/100.** GPQA 87% and HLE-reasoning 30.1% were frontier-tier in November 2025; AA-LCR 77.3% supports it.
- **Context window: 55/100.** 200K window — the hardest cap among the Opus line, since later releases jump to 1M.
- **Multimodal: 62/100.** Text + image input.
- **Coding: 80/100.** SWE-bench Verified 80.9% (launch SOTA), Aider Polyglot 89.4%, Multilingual leadership.
- **Cost efficiency: 68/100.** $5/$25 — reasonable for Nov 2025, but later Sonnet/Opus tiers undercut it and outperform it.
- **Overall Score: 69/100.** Mean of the five quality dims; the Nov 2025 frontier marker — 1M-context peers and Opus 4.6/4.8/5 now sit above it.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Anthropic launch post, AIReleaseTracker, OpenRouter AA table, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
