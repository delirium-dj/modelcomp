# Grok 4.6 — findings by Fledge Alpha

- Source: xAI (`grok-4.6`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's Aug 12, 2026 incremental update over 4.5; post-training refinement at the same 500K context and $2/$6 price; superseded by Grok 4.7 (Sept 21).
- **Provider / access:** Grok API (`grok-4.6`), Cursor, Grok Build; Routers.
- **Release / knowledge:** 2026-08-12; knowledge cutoff Feb 1, 2026.
- **IDs:** `x-ai/grok-4.6`
- **Context window:** 500,000 tokens; ≥200K prompts billed at $4/$12.
- **Modalities:** text + image in; text out; reasoning low/medium/high/xhigh.
- **Pricing (as of 2026-10-02):** $2/M in, $0.50/M cache, $6/M out (<200K); $4/$12 at ≥200K; Priority 2x.
- **Architecture:** proprietary, same base class as 4.5.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (AA, independent)
- GDPval-AA v2: **1753 Elo**; AA-Briefcase: **1577 Elo**
- APEX-Agents: **57.5%**; Terminal-Bench v3.0: **26%** (vs Opus 5's 51.8 on 4.0)
- Harvey LAB: 15.8%

Reasoning / knowledge:

- GPQA Diamond: **94.7–94.9%** (vals.ai/AA)
- HLE (no tools): **42.9%** (AA, high effort)
- AA Intelligence Index: **61** (max)
- LiveBench: **78.0**

Coding:

- SWE-bench Verified: **95.6%** (vals.ai, saturated)
- DeepSWE v1.1: **65.9–67.0%** (deepswe.datacurve)
- CursorBench 3.2: **69.9%**; FrontierCode v1.1 Extended: **61.3%**; APEX-SWE: **56.4%**
- LiveCodeBench: **88.2%** (vals.ai)

Long context:

- 500K window; no independent long-context retrieval number.

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1753 Elo and Terminal-Bench 2.1 88.4% are tier-topping; APEX-Agents 57.5% and Terminal-Bench v3.0 26% cap it.
- **Reasoning: 84/100.** GPQA ~95% and AA Index 61 (tied with GPT-5.6 Sol max); HLE 42.9% strong.
- **Context window: 82/100.** 500K window, same class as 4.5; 200K price cliff.
- **Multimodal: 65/100.** Text + image in; text-only output.
- **Coding: 82/100.** SWE-bench Verified 95.6% (saturated), DeepSWE ~66–67%, CursorBench 69.9%.
- **Cost efficiency: 82/100.** $2/$6 with 75% cache discount is aggressive, but 200K-cliff doubles rates and a 2x Priority tier exists.
- **Overall Score: 79/100.** Mean of the five quality dims; priced like a mid-tier but scoring like a flagship — the strongest independent-verified scorecard of any xAI release; superseded by Grok 4.7.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (xAI launch, AA, vals.ai, DeepSWE board, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
