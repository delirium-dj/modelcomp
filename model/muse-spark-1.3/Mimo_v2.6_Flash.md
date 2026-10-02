# Muse Spark 1.3 (max) — findings by Mimo v2.6 Flash

- Source: Meta/Muse Spark 1.3 max reasoning tier (`muse-spark-1.3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (max) — the max reasoning-effort configuration of Meta Superintelligence Labs' Muse Spark 1.3
- **Short description:** Meta's agentic-coding point release (2026-09-02/03, fourth Muse Spark in five months), scored here in its **max reasoning configuration** — the config Meta used for its headline benchmark table and the one Artificial Analysis measured at Intelligence Index 62 (rank ~6/643). Important caveat: as of late September 2026 the **max tier is still in limited partner preview behind extra safety testing** — the generally callable API tier is `xhigh` (AA Index 61) — and Meta has not published a separate max-tier price.
- **Provider / access:** Meta Model API (public preview; ai.developer.meta.com), Muse Code terminal agent; free to consumers in Meta AI / meta.ai. Single API provider (Meta, per AA) — no OpenRouter/second-host row for max specifically. **No Zen Free ID.**
- **Release / knowledge:** model family 2026-04-08; 1.1 2026-07-09; 1.2 2026-08-05; **1.3 2026-09-03**; max tier preview-only (DataCamp/AA, 2026-09). Knowledge cutoff not published.
- **IDs:** `muse-spark-1.3` (reasoning_effort=max); contributor endpoint `muse-spark-1.3-contributor`.
- **Context window:** **1,048,576 tokens** (1.05M, AA/Meta); max output not published by Meta — LiteLLM says 131,072, OpenRouter top provider row 943,718 (conflicting third-party metadata).
- **Modalities:** text, image, **video** in; text out (Artificial Analysis model row; family listings also document file/audio input on 1.2 — audio gap noted as unclosed for 1.3 by OrcaRouter); reasoning yes (effort levels low→max); tool calls + web-search grounding ($2.50/1K queries) supported; JSON mode supported via API conventions.
- **Pricing (as of 2026-10-02):** Standard **$1.25 in / $4.25 out per 1M** (cached input $0.15, 88% off; identical rate card to 1.1/1.2, Meta's own pricing page) — **AA lists Muse Spark 1.3 (Max) at these same Meta-API rates**; a max-specific rate card has not been separately published (eesel). Contributor tier (Meta trains on your data): **$0.10 / $0.20** (cache $0.002). Per-task evaluation cost ~$1.60 (AA Index, max).
- **Architecture:** proprietary, closed weights (Meta's promised open weights still undated); params undisclosed. Open sibling: Muse Glimmer 30B (Apache 2.0, distilled from 1.2) — different model.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Meta's table figures are **vendor-reported** (max config vs 1.2 xhigh/Sol/Opus 5); AA figures are independent measurements of the max config in limited preview.

Agent / tool use:

- **Terminal-Bench 2.1: 88.8%** (Meta table, max; ties GPT-5.6 Sol 88.8, above Opus 5 86.7, above 1.2 xhigh 82.9)
- **GDPval-AA v2 Elo: 1754** (Meta table, max; vs Sol 1710, Opus 5 1824)
- AutomationBench: 49.6% (max) · JobBench 64.9% · OSWorld 2.0: 66.9% partial / 32.0 binary · Agentic IF Index (internal) 57.8% · SWE-Atlas CodeBase QnA 59.4% · DeepSearchQA 90.3% (Meta table, max)

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 62** (AA, max config, limited preview; rank ~6 of 643 tracked models — above GPT-6 Astra's 61; shipping xhigh scores 61) — AA/DataCamp via HokAI
- **GPQA Diamond: 94%** (Meta-via-HokAI, 2026-09-02)
- **HLE: 47%** (Meta-via-HokAI); LCR 79% (Dataconomy AA panel)
- SciCode: 57.3% (Dataconomy AA panel)

Coding:

- **DeepSWE v1.1: 75.4%** (Meta table, max; vs Opus 5 74.0, Sol 73.0, 1.2 xhigh 55.0)
- **Terminal-Bench 2.1: 88.8%** (above) · AA **Coding Index: 76.3** (Dataconomy/AA)
- SWE-bench Verified / LiveCodeBench: not published for any Muse Spark release (HokAI notes Meta never publishes these)

Long context:

- **MRCR v2 8-needle 256K–512K: 98.5%**; **512K–1M: 98.1%** (Meta table, max; vs GPT-5.6 Sol 73.8% at 512K–1M) — outstanding measured recall at the top of the 1M window

Multimodal:

- Image + video input (AA model row); MMMU-Pro 80.5% is a **family/original-release** vision figure (theairankings), not a max-config measurement — MMMU / CharXiv / Video-MME for max: no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 88.8% and GDPval-AA 1754 both clear the frontier anchors (TB 88%+, GDPval 1750+), reinforced by AutomationBench/JobBench/OSWorld in the table; capped just below the mid-90s by OSWorld-binary 32.0 and no Tau3/MCP-Atlas number.
- **Reasoning: 95/100.** Meets every reasoning frontier reference simultaneously — GPQA 94% (90+), HLE 47% (40+), MRCR 98%+ at 512K–1M (95+), AA Index 62 (60+) — plus independent AA confirmation of the index; not 100 only because the config is vendor-harness-heavy and the max tier itself is preview-gated.
- **Context window: 100/100.** ≥1M window (1,048,576) **and** ≥98% measured retrieval at 512K–1M (MRCR 98.1%) — the methodology's exact condition for 100.
- **Multimodal: 80/100.** Text + image + **video** input lands in the +video-in band (75–90); mid-band because no audio-in is confirmed for 1.3, text-only out, and no max-config MMMU/Video-MME score exists.
- **Coding: 96/100.** All coding frontier anchors cleared — DeepSWE 75.4% (74%+), TB2.1 88.8% (85%+), Coding Index 76.3 (70%+), SciCode 57.3% (55%+) — with the model beating Opus 5/Sol on DeepSWE in Meta's table; the only cap is the absence of SWE-bench Verified/LiveCodeBench numbers and vendor-run harnesses.
- **Cost efficiency: 88/100.** Methodology anchor: $1.25/$4.25 per 1M = ~88 (AA lists max at these Meta-API rates; ~$1.60/task on the Index); the $0.10/$0.20 contributor tier would score ~97 but trades data consent, and no separate max rate card has been published.
- **Overall Score: 93/100.** (92+95+100+80+96)/5 = 92.6 → 93 (half-up) — best-fit: preview-gated frontier long-context agentic/coding model with class-leading MRCR recall; note the max tier is partner-preview (shipping API = xhigh, AA 61) and all top numbers are Meta-run or AA-preview measurements.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-02
- Method: public internet research (Meta developer pricing/docs, Artificial Analysis model page, HokAI benchmark compilation, Dataconomy AA panel, Tokencost rate verification, OrcaRouter/TheAIRankings/eesel availability checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
