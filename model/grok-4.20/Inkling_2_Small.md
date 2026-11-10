# Grok 4.20 — findings by Fledge Alpha

- Source: xAI (`grok-4.20`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning, Non-Reasoning, Multi-Agent variants)
- **Short description:** xAI's March 2026 large-context multimodal flagship (2M window), priced at $1.25/$2.50 list — noted for a record 78% non-hallucination rate on AA Omniscience.
- **Provider / access:** xAI API (`grok-4.20`, `grok-4.20-reasoning`, `grok-4.20-non-reasoning`, `grok-4.20-multi-agent`), OpenRouter (`x-ai/grok-4.20`), Snowflake/OCI.
- **Release / knowledge:** GA Mar 31, 2026 (reasoning/non-reasoning Mar 10, multi-agent Mar 11); knowledge cutoff Sep 1, 2025.
- **IDs:** `x-ai/grok-4.20`
- **Context window:** 2,000,000 input tokens; up to 1.8M output.
- **Modalities:** Text, image, PDF in; text out.
- **Pricing (as of 2026-10-02):** $1.25/M in, $0.20/M cache, $2.50/M out; long-context >200K: $2.50/$5.00; Batch 50% off; Priority 2x.
- **Architecture:** Proprietary; multi-agent "heavy" variant runs a council of agents per request with a shared rate card.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **93.0%** (Reasoning) / 96.5% (0309 Reasoning variant) — the family's top tool-use row
- GDPval-AA: not published for this ID; AAA Intel Index v4 list shows ~48 at the era
- Terminal-Bench Hard: **37.9%** (Reasoning) class

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA, Reasoning 0309 v2); HLE: **34.5%** (0309 v2 Reasoning)
- IFBench: **81.2%**; AA-LCR: **69.0%**; CritPt: 6.6%
- AA Intelligence Index v4.0: **48** (8th overall at launch; 30-day baseline trailing Gemini 3.1 Pro/GPT-5.4)
- AA-Omniscience Non-Hallucination Rate: **82.6%** — the strongest in the catalog at launch

Coding:

- SWE-bench Verified: **75%** (vendor-reported); LiveBench Coding: **58.5%**; SciCode: 46.0%
- Terminal-Bench 2.0: ~30% class on third-party; CyberGym: not published
- Vals Index: **39.5%** (grok-4.20-0309-reasoning)

Long context:

- 2M window is the catalog ceiling at launch; AA-LCR 69% at Reasoning baseline; no MRCR row.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Telecom 93% (Reasoning) and 96.5% (0309) are the family's top agentic rows; Terminal-Bench Hard ~38% caps it.
- **Reasoning: 74/100.** GPQA 91.1% with the catalog's best Non-Hallucination rate (82.6%); AA Index 48 sits mid-tier and HLE ~35%.
- **Context window: 96/100.** 2M window — the catalog ceiling at launch — with the 200K surcharge on long traffic.
- **Multimodal: 78/100.** Text + image + PDF in; no audio/video surface.
- **Coding: 60/100.** SWE-bench Verified 75% (vendor) and Vals Coding 58.5 are the weak rows for a 2026 frontier tier.
- **Cost efficiency: 84/100.** $1.25/$2.50 with 90% cache discount and 2M window — cheap per token for the window size; long-context tier >200K rebases to $2.50/$5.
- **Overall Score: 77/100.** Mean of the five quality dims; best fit as a low-hallucination, very-large-context long-document agent. Avoid as a coding-first flagship.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (ARMES, SWEN.AI, vals.ai, winbuzzer, CloudPrice, HokAI launch table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
