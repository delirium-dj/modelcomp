# Grok 4 — findings by Fledge Alpha

- Source: xAI (`grok-4`, api id `grok-4-0709`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July 9, 2025 frontier reasoning model — first to top AA's Intelligence Index at launch; now a legacy flagship four iterations behind the current 4.7.
- **Provider / access:** xAI API (`grok-4-0709`), OpenRouter (`x-ai/grok-4`); legacy.
- **Release / knowledge:** 2025-07-09; knowledge cutoff Dec 31 / Nov 2024 depending on source.
- **IDs:** `x-ai/grok-4`
- **Context window:** 256,000 tokens; 8,000 max output.
- **Modalities:** text + image in; text out; reasoning baked in; Heavy variant runs 16 parallel agents.
- **Pricing (as of 2026-10-02):** $3/M in, $15/M out; cache read $0.75; >128K tokens billed at $6/$30.
- **Architecture:** Proprietary, Colossus-trained, natively RL-trained for tool use.

### Raw benchmarks found

Agent / tool use:

- Agents & tools: not on AA v4 tier rows in the catalog; τ²-Bench class numbers are from the July 2025 launch table only.
- Terminal-Bench: not in the public launch table.

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (xAI, later comparison table, no tools)
- HLE: **25.4%** (no tools) / **41.0%** (with tools) for standard Grok 4; the 50.7% text-subset/50%-with-tools numbers at launch belong to Grok 4 Heavy
- AIME 2025: **91.7%** (no tools); Heavy 100%; HMMT 2025: 90.0%
- ARC-AGI-2: **15.9–16.2%** (xAI verified)
- AA Intelligence Index at launch: **73** (Jul 2025), then AA v4 reframe removes this from today's tier rows.

Coding:

- SWE-bench Verified: **72.5%** (vendor-reported)
- LiveCodeBench (Jan–May 2025): **79%**; USAMO 2025: 37.5% (standard), 61.9% (Heavy)

Long context:

- 256K window with 8K max output; no MRCR row published.

### Normalized scores (1–100)

- **Tool use: 62/100.** Native tool-calling training row of July 2025, but no current Terminal-Bench row published for this ID.
- **Reasoning: 72/100.** GPQA 87.5%, AIME 91.7%, HLE 25.4/41.0 — strong for Jul 2025, top-of-leaderboard that month.
- **Context window: 60/100.** 256K window with a 128K-token price tier reset at $6/$30.
- **Multimodal: 60/100.** Text + image in; 8K max output; no published MMMU class row.
- **Coding: 70/100.** SWE-bench Verified 72.5% at launch; no current vendor row.
- **Cost efficiency: 60/100.** $3/$15 list, no Batch tier surfaced in current docs; long-context output drops to $30/1M.
- **Overall Score: 65/100.** Mean of the five quality dims. Legacy tier preserved for the 2025 reference set; current xAI flagships (Grok 4.7) sit above this on every published row.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (xAI launch post, kingy.ai explainer, aimeodelsnavi, aimodelsnavi, awesomeagents, ZeroTwo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
