# Hy3 Preview — findings by Fledge Alpha

- Source: Tencent (`hy3-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 preview
- **Short description:** Tencent's first model on the rebuilt Hy infrastructure — hybrid fast/slow-thinking MoE released April 23, 2026, superseded by official Hy3 (July 6, 2026).
- **Provider / access:** OpenRouter `tencent/hy3-preview` (free two-week launch promo), Tencent Cloud TokenHub, HF/GitHub/ModelScope open weights.
- **Release / knowledge:** April 23–24, 2026; knowledge cutoff not published.
- **IDs:** `tencent/Hy3-preview`; no Zen Free ID verified.
- **Context window:** 256K tokens; three reasoning modes for latency/depth trade-offs.
- **Modalities:** text in/out; hybrid fast/slow thinking; tools.
- **Pricing (as of 2026-10-05):** ~$0.18 in / $0.59 out per 1M at launch; open weights Apache-style.
- **Architecture:** MoE, 295B total / 21B active; open source.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (BenchLM)
- ClawEval / WildClawBench: "scores well" (vendor, qualitative)
- GDPval-AA: no verified public row

Reasoning / knowledge:

- FrontierScience-Olympiad: strong per vendor, no numeric published
- IMOAnswerBench: strong per vendor, no numeric published
- Tsinghua Qiuzhen math qualifying exam Spring '26: good result, no scored row
- AI Intelligence Index v4.1: ~33–34 (AA comparison pages, estimated)

Coding:

- SWE-bench Verified: competitive per vendor, no published numeric
- Terminal-Bench 2.0 54.4% is the only verified row (above)

Long context:

- 256K context; CL-bench gains are internal, no MRCR percentage published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 66/100.** Terminal-Bench 2.0 54.4 is a real row; Agent claims are otherwise qualitative.
- **Reasoning: 70/100.** Vendor strong results on hard STEM exams; independent numeric rows absent; provisional.
- **Context window: 88/100.** 256K verified; long-dialogue eval gains claimed without percentages.
- **Multimodal: 15/100.** Text-only.
- **Coding: 64/100.** Terminal-Bench 54.4 with SWE-bench claims but no published verified number.
- **Cost efficiency: 82/100.** ~$0.18/$0.59 per 1M at launch, cheaper than Hy2 generation.
- **Overall Score: 61/100.** Mean of five non-cost dims (66+70+88+15+64)/5 = 60.6 → 61; best fit: budget open-weights reasoning preview — superseded by Hy3, treat scores as placeholder-class until third-party rows appear.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Tencent Hy research pages, Tencent Cloud techpedia, BenchLM, AA comparison pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
