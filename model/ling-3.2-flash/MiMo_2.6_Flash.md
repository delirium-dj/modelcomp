# Ling 3.2 Flash — findings by MiMo 2.6 Flash

- Source: Ant Group (Ant Ling / Ant Bailian) — `ling-3.2-flash`
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's latest native multimodal Ling-series MoE (560B total / 25B active, 1M context) targeting complex visual understanding, multimodal long-horizon agents, 3D interaction and medical multimodal work; released 2026-11-05. A distinct new SKU in the tracked Ling line (Ling 3.0 / 3.1 are separate entries) — not an alias or tier.
- **Provider / access:** Ant Bailian platform API (OpenAI- and Anthropic-protocol compatible, per official docs and launch coverage); not listed on OpenRouter or the OpenCode Zen catalog as of 2026-11-06 (live catalog checks).
- **Release / knowledge:** 2026-11-05 (official Ant Ling docs evolution table: "2026.11 Ling 3.2 Series"; launch coverage dated 2026-11-06). Knowledge cutoff: not published.
- **IDs:** `ling-3.2-flash` (Ant Bailian); no OpenCode Zen free ID found (absent from the Zen model catalog).
- **Context window:** 1,000,000 total (official docs: "the context window is capped at 1M"); max output not published.
- **Modalities:** text, image and video in; text out; agent/tool-use positioning per official docs (no formal capability spec published); JSON mode: no verified public statement.
- **Pricing (as of 2026-11-06):** $0.30 / $0.90 per 1M input/output tokens (launch coverage); limited-time free trial for the first two weeks after launch — time-limited promo, standing terms not published.
- **Architecture:** 560B total / 25B activated parameters, Mixture-of-Experts with vision and language fused at the architecture level (no external vision module). Open-weights status for 3.2-flash itself is not confirmed on the official page — the Ling series is open-sourced by Ant Group, but only Ling-3.0-flash / -VL are explicitly listed as open on Hugging Face/ModelScope.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2-Tau3 / GDPval / OSWorld: no verified public score found (no leaderboard entry for `ling-3.2-flash` in any catalog checked 2026-11-06)

Reasoning / knowledge:

- ZEROBench (Sub): **43.71** vs Claude Opus 5 (max) 39.52 (vendor-released eval relayed by AIBase launch coverage, 2026-11-06) — visual reasoning, not a text GPQA/HLE substitute
- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: no verified public score found

Coding:

- Vision2Web: **85.86** vs Claude Opus 5 (max) 80.20 (vendor-released eval via launch coverage) — image-to-frontend generation
- DesignArena image-to-frontend arena: **Elo 1238**, top-10, tied with entries from Meta, DeepSeek and Anthropic (DesignArena leaderboard cited in launch coverage)
- SWE-bench Verified / LiveCodeBench / Terminal-Bench: no verified public score found

Document / vision understanding:

- OmniDocBench 1.5: **92.21** vs Claude Opus 5 (max) 90.56 (vendor-released eval via launch coverage) — document parsing and understanding

Long context:

- no long-context retrieval reported (MRCR/RULER figures not published; the official cap is 1M)

All three head-to-head figures above are Ant's own released evaluations relayed by launch coverage — single-source, not independently replicated as of 2026-11-06.

### Normalized scores (1–100)

- **Tool use: 60/100.** The vendor positions the model on multimodal long-horizon agent work, but no Terminal-Bench, Tau, GDPval or OSWorld number exists for it — capped low-mid by the complete absence of agent benchmarks (missing-data penalty per methodology).
- **Reasoning: 65/100.** ZEROBench (Sub) 43.71 beats Claude Opus 5 (max) 39.52, a frontier-beating visual-reasoning proxy, but no GPQA/HLE/text-reasoning score is published — capped at the mid-tier ceiling.
- **Context window: 95/100.** The official 1M window lands in the ≥1M tier (95–100); no ≥98% retrieval measurement at 512K+ exists to justify 100.
- **Multimodal: 88/100.** Native image and video input with text out, beating Claude Opus 5 (max) on OmniDocBench 1.5, ZEROBench (Sub) and Vision2Web — capped just below the 90 band because there is no audio input or non-text output.
- **Coding: 78/100.** Vision2Web 85.86 (> Opus 5 max 80.20) and DesignArena image-to-frontend Elo 1238 (top-10) show strong vision-to-frontend code generation, but no SWE-bench/LiveCodeBench/terminal score exists — capped in the upper-mid band.
- **Cost efficiency: 95/100.** $0.30/$0.90 per 1M is well below the ~$0.60/$2.20 ≈ 92 reference point on both axes; the two-week launch free trial is time-limited and does not count as a standing free tier.
- **Overall Score: 77/100.** Half-up mean of the five quality dims (60+65+95+88+78)/5 = 77.2 → 77 — best fit: a cheap, frontier-beating vision/document model whose text-reasoning, coding-agentic and tool-use sides remain unmeasured in public.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-11-06
- Method: public internet research (official Ant Ling developer docs, launch coverage, aggregator model pages, live OpenRouter/Zen catalog checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Ling official docs — Ling models (Ling-3.2-flash specs)](https://developer.ant-ling.com/en/docs/models/ling/)
  - [AIBase — Ant Bailing releases Ling 3.2 Flash: benchmarks vs Claude Opus 5 and pricing (2026-11-06)](https://news.aibase.com/news/32130)
  - [aicoder.com — Ant Ling launches Ling-3.2-flash: 560B/25B native multimodal MoE, 1M context, free 2 weeks](https://aicoder.com/news/news-20261105-ant-ling-ling-3-2-flash-560b-a25b-native-multimodal-1m-free-2-weeks)
  - [NavXD — Ling-3.2-flash model page (release date, specs)](https://navxd.com/navigation/en/model/ling-3-2-flash/)
  - [freeanswers.io — Ling-3.2-flash guide: multimodal API, vision, video](https://www.freeanswers.io/ling-3-2-flash/)
- Future sources: add a new file next to this one, using the same headings, when new verified benchmarks for this model appear.
