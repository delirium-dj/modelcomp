# LongCat-2.5-Preview — findings by Ernie 5.5 Flash

- Source: Meituan/LongCat-2.5-Preview (`longcat-2.5-preview`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5-Preview
- **Short description:** Meituan's API-only preview of LongCat-2.5 (went live 2026-09-25), a trillion-parameter native multimodal MoE for agent tasks and visual coding with a 1M context. Superseded by the GA LongCat-2.5 (announced 2026-11-01, GA 2026-11-02) — the only API-only preview build, not a separate checkpoint lineage.
- **Provider / access:** LongCat API Platform (`LongCat-2.5-Preview`), API + web access; limited-time pricing.
- **Release / knowledge:** 2026-09-25 (preview); GA 2026-11-02. Knowledge cutoff not published.
- **IDs:** `longcat-2.5-preview`, `meituan-longcat/LongCat-2.5-Preview`.
- **Context window:** 1,048,576 tokens (1M); max output 262,144.
- **Modalities:** text and image in; text out; reasoning and tool calls (Claude Code-compatible per the vendor).
- **Pricing (as of 2026-11-11/12):** $0.30 / $1.20 per 1M input/output (limited-time preview price); cached input $0.006.
- **Architecture:** sparse MoE, ~1.6T total parameters (Meituan); API-only (no open weights).

### Raw benchmarks found

> Meituan published **no** benchmarks for the preview itself. The rows below are from the GA LongCat-2.5 evaluation table (longcatai.org/benchmarks, 33 tasks) and the HF card — the same model after the preview period. Cited labelled with the measured ID.

Agent / tool use:

- Terminal Bench: **88.4**; BrowseComp: **91.9**; MCP Atlas: **83.1** (GA LongCat-2.5 evaluation table)
- Toolathlon / OSWorld: no verified public rows published for the preview

Reasoning / knowledge:

- PaperBench: **82.1** (GA table)
- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for this lineage

Coding:

- DeepSWE: **64.6** (GA table)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context with long-context training; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal Bench 88.4, BrowseComp 91.9 and MCP Atlas 83.1 (GA figures) are strong; the preview itself published nothing.
- **Reasoning: 75/100.** PaperBench 82.1 is the only verified reasoning-adjacent row (GA); no GPQA/HLE/ARC figure was published.
- **Context window: 100/100.** 1,048,576 tokens with 262,144 max output.
- **Multimodal: 78/100.** Native multimodal with visual coding (vendor claim, GA table has visual-coding rows); no preview-era multimodal benchmark row.
- **Coding: 80/100.** DeepSWE 64.6 (GA) is mid-frontier for an open-weight-class model; no SWE-bench row was published.
- **Cost efficiency: 90/100.** $0.30/$1.20 per 1M with $0.006 cached input — aggressive for a 1T-class model.
- **Overall Score: 82.6/100.** Best fit for visual coding and agent work at 1M context on Meituan's platform; verify on your own tasks since all numbers come from the GA build.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (LongCat 2.5 model/benchmark pages, Hugging Face model card, BenchmarkList entry, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [LongCat-2.5 — 1.6T native multimodal agent model](https://www.longcatai.org/models/longcat-2-5)
  - [LongCat-2.5 benchmarks — 33-task evaluation](https://www.longcatai.org/benchmarks/longcat-2-5)
  - [meituan-longcat/LongCat-2.5 — Hugging Face](https://huggingface.co/meituan-longcat/LongCat-2.5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `LongCat_2.5_Preview_v2.md`, using the same headings.