- Source: Meituan/LongCat-2.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.5
- **Short description:** Meituan's 2026-11-02 natively multimodal long-horizon agent model, a major iteration of LongCat-2.0 with stronger native vision and agentic programming; fully trained on domestic Chinese compute. A distinct model; `longcat-2.0` is its predecessor and the `-Preview` spelling was renamed to this canonical GA folder (2026-11-12) per the project identity roster.
- **Provider / access:** Meituan open weights under **MIT** (released 2026-11-09/10, commercial inference and secondary training without extra authorisation); domestic accelerator deployment.
- **Release / knowledge:** GA 2026-11-02, open-sourced 2026-11-09/10; knowledge cutoff: no verified public score found.
- **IDs:** `longcat-2.5`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** native multimodal (text and image in, text/code out); complex codebase development, long-horizon agent tasks. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** free MIT open weights; no API rate card in the retrieved pages — no verified public price found.
- **Architecture:** MoE, **1.6 trillion total / ~48B active** parameters; native multimodal; training entirely on domestic compute; W4A4 quantisation benchmark report exists (secondary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **88.4** for the **W4A4 quantised** build, vs LongCat-2.0's **70.8** (secondary CSDN benchmark-report analysis) — labelled as the W4A4 variant, not the full-precision GA
- Vendor self-test: results on several mainstream benchmarks fall between Claude Opus 4.8 and Claude Opus 5, with some exceeding Opus 5 (directional, no exact scores)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench v2.1 **88.4** (W4A4 variant, secondary) as above; complex codebase development focus
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M window with long-horizon agent design; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 90/100.** 88.4 Terminal-Bench v2.1 (W4A4 variant), a 1M window, long-horizon agent design and vendor results between Opus 4.8 and Opus 5; capped by the Terminal-Bench figure being a quantised variant from a secondary report and vendor self-tests being directional.
- **Reasoning: 86/100.** 1.6T/48B MoE with strong vendor-relative benchmark standing; capped by no named numeric reasoning benchmark for this exact ID.
- **Context window: 93/100.** 1M context purpose-built for long-horizon agents with efficient MoE activation; capped by no retrieval benchmark.
- **Multimodal: 87/100.** Native (not bolt-on) vision with agentic programming; capped by text/code-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 90/100.** 88.4 Terminal-Bench v2.1 and a codebase-development focus at 48B active params; capped by the W4A4-variant provenance and no SWE-bench figure.
- **Cost efficiency: 94/100.** Free MIT weights, commercial-use permission, 48B active params from 1.6T and domestic-compute support. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 90, 86, 93, 87, 90 = 89.2 → 89. Best fit: self-hosted long-horizon multimodal coding agents on domestic hardware; validate the W4A4 numbers on the full-precision build.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike LongCat-2.5 article retrieved via public web search excerpt (GA release, 1.6T/48B MoE, native multimodal, domestic compute, vendor benchmark positioning, MIT open source), the Baidu Baike 美团大模型 excerpt for the 1M context and 2.0 lineage, plus secondary CSDN / 快科技 coverage for Terminal-Bench v2.1 88.4 (W4A4 variant) and the MIT licence — labelled secondary. Identity handling follows the project's generated roster: `longcat-2.5-preview` was renamed to this canonical GA folder and must never be re-scaffolded; `longcat-2.0` and the `owl-alpha` stealth alias are separate/resolved. Vendor self-test comparisons are directional and not assigned scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [LongCat-2.5 — 百度百科 (retrieved via search excerpt; specs, release, vendor positioning)](https://baike.baidu.com/item/LongCat-2.5/69582445)
  - [LongCat-2.5-W4A4 基准测试报告 — CSDN (retrieved via search excerpt; Terminal-Bench 88.4)](https://blog.csdn.net/gitblog_00312/article/details/170536829)
