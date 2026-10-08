# Muse Spark 1.2 — findings by Laguna XS 2.1

- Source: Meta (`muse-spark-1.2`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (Contributor / Free / Standard / Max are tiers of the same weights, not separate models)
- **Short description:** Meta Superintelligence Labs' coding-focused Muse Spark refresh (2026-08-05), co-trained with the Muse Code terminal agent; 1M context, multimodal in, and the launch's highest MCP Atlas score (90.3%). Succeeded by Muse Spark 1.3 (2026-09-01).
- **Provider / access:** Meta Model API, Muse Code, OpenRouter (`meta/muse-spark-1.2`); xhigh reasoning effort. ~93–231 tok/s depending on provider.
- **Release / knowledge:** 2026-08-05; knowledge cutoff not published in sources found.
- **IDs:** `muse-spark-1.2` (Meta Model API); `meta/muse-spark-1.2` (OpenRouter). No Zen Free ID found.
- **Context window:** 1,048,576 tokens; 131,072 max output.
- **Modalities:** text, image, video, PDF, speech in (per Artificial Analysis); text out; reasoning yes (up to xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** Standard $1.25 / $4.25 per 1M in/out, cached input $0.15; Contributor tier $0.10 / $0.20, cached $0.002 (Meta trains on prompts/completions — not for confidential code); web search tool $2.50/1K calls.
- **Architecture:** proprietary; no parameter count published.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (Scale AI, 36 servers / 220 tools): **90.3%** (Meta launch; leads Opus 5's 85.8% and every model in the comparison set)
- Terminal-Bench 2.1: **82.9%** (Muse Code harness, xhigh; 2nd behind Opus 5 86.7; vs Terra 81.8, Grok 4.5 81.6, 3.6 Flash 78.9)
- GDPVal-AA v2: **1631 Elo** (Meta launch; vs Opus 5 1852); AA-measured GDPval-AA **49.1% xhigh**
- AA Agentic Index: **43.2 xhigh** (Artificial Analysis)
- Claw-Eval / Tau3 / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4% xhigh** (Artificial Analysis)
- HLE: **45.5% xhigh** (AA)
- AA Intelligence Index: **39.6 xhigh** (AA)
- CritPt: **17.7% xhigh** (AA)
- AA-Omniscience: accuracy **45.4%** / non-hallucination **66.7%** (AA xhigh — unusually good non-hallucination)
- AA-LCR: **79.0% xhigh** (AA)

Coding:

- DeepSWE 1.1: **59.3%** (Meta launch, Muse Code; 3rd behind Opus 5 65.0 and Terra 64.8)
- Meta Internal Coding Bench (440 tasks): **70.6%** (Meta; 2nd behind Opus 5 79.4)
- AA Coding Index: **72.2 xhigh** (AA)
- SciCode: **57.4% xhigh** (AA)
- SWE-bench Verified / LiveCodeBench: no verified public score found in sources checked

Long context:

- AA-LCR **79.0%** (see above) over the 1M window; MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 90.3% is the best score Meta's comparison set shows — ahead of Opus 5 at max — plus TB 2.1 82.9%; capped by AA Agentic Index 43.2 and GDPval-AA 49.1% trailing the frontier, and most headline numbers being vendor-run with per-model agent products.
- **Reasoning: 78/100.** GPQA 90.4% and HLE 45.5% are solid mid-frontier; capped by AA Index 39.6 and CritPt 17.7% well below the frontier refs. The 66.7% Omniscience non-hallucination rate is a bright spot.
- **Context window: 95/100.** 1,048,576-token window (95–100 tier) with AA-LCR 79.0%; no ≥98%-at-512K+ retrieval evidence, so the tier floor.
- **Multimodal: 92/100.** Text/image/video/PDF/speech in (audio-in tier 90–100) per Artificial Analysis; text-only output caps it.
- **Coding: 82/100.** TB 2.1 82.9%, Coding Index 72.2 and DeepSWE 59.3% are strong for the price; capped by DeepSWE trailing Opus 5/Terra and no SWE-bench Verified row.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 maps directly to the methodology's ~88 anchor with $0.15 caching; the Contributor tier ($0.10/$0.20) would score ~98 but trades training-data consent.
- **Overall Score: 86.6/100.** Mean of (86, 78, 95, 92, 82) = 86.6 — a strong, cheap multimodal agent model for tool-use-heavy workloads; 1.3 is the better pick at the same price.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Meta methodology page, AI/TLDR, Capital & Compute, Artificial Analysis via model page + OpenRouter, BenchLeader, llm-stats, CrucibleMark); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
