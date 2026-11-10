# Grok 4.3 — findings by Fledge Alpha

- Source: xAI (`grok-4.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's April 30, 2026 reasoning GA model, a cheaper cost-efficiency play that leads on legal/finance domain evals and τ²-Bench Telecom; GA Apr 30, 2026.
- **Provider / access:** Grok API (`grok-4.3`); superseded in the xAI lineup by Grok 4.6 (Aug 12) and 4.7 (Sept 21).
- **Release / knowledge:** 2026-04-30; knowledge cutoff Dec 2025.
- **IDs:** `x-ai/grok-4.3`
- **Context window:** 1,000,000 tokens; >200K prompt surcharge.
- **Modalities:** text + image (incl. video frames) in; text out; reasoning none/low/medium/high/xhigh.
- **Pricing (as of 2026-10-02):** $1.25/M in, $0.20/M cache, $2.50/M out; >200K tokens raises input to $2.50/$5.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **97.7%** (#1 of tracked at launch); GDPval-AA: **1500 Elo**
- Terminal-Bench Hard: **38.0%**; LCR: **64.3–74%**
- AA-Briefcase/CaseLaw v2: **79.3%** (#1, +25 pts vs 4.20); CorpFin: #1

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (AA); HLE: **35–37.2%**
- AA Intelligence Index: **53** (v4.0 basis; above Muse Spark and Sonnet 4.6; 4 pts clear of Grok 4.20)
- SciCode: **47.3%**; IFBench: **81.0–81.3%**

Coding:

- AA Coding Index: **41–42.2** — notably weak for the family
- No published SWE-bench Verified/Pro row independent of AA's coding index.

Long context:

- 1M window documented; AA-LCR 64–74%.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-Telecom 97.7% and GDPval-AA 1500 Elo (awarded best agentic gain Apr 2026) lead the tier; Terminal-Bench Hard 38% is middling.
- **Reasoning: 78/100.** GPQA 90.1% and AA Index 53 for $1.25/$2.50 is clear value; HLE ~36%.
- **Context window: 85/100.** 1M window with a >200K surcharge; AA-LCR ~70% mid-tier.
- **Multimodal: 72/100.** Text + image/video-frame input; no full audio/video understanding.
- **Coding: 58/100.** AA Coding Index ~42 is the weakest documented coding signal of any current catalog entry.
- **Cost efficiency: 92/100.** $1.25/$2.50 — one of the most aggressive rates in the dataset, at a frontier-adjacent intelligence tier.
- **Overall Score: 75/100.** Mean of the five quality dims; best fit for tool-heavy legal/finance and instruction-following agents; avoid for coding-centric work.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (docs.x.ai, OfficeChai, Dataconomy AA table, ARMES summary, AA leaderboard rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
