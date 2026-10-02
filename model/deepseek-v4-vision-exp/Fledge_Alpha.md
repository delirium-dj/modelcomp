# DeepSeek V4 Flash Vision Exp — findings by Fledge Alpha

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's Aug 21, 2026 experimental vision-enabled V4-Flash; same 284B/13B-active MoE with native image understanding at the same flash pricing as the text model.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`), DeepInfra. No open-weights release yet.
- **Release / knowledge:** 2026-08-21.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp`
- **Context window:** 1,048,576 tokens; 384K max output.
- **Modalities:** Text + image in (JPEG/PNG/GIF/WebP, ≤32MiB, capped at ~384 tokens/image, ~800x800 normalization); text out; no FIM.
- **Pricing (as of 2026-10-02):** Off-peak $0.22/M in, $0.007/M cached, $0.66/M out; Peak 2x; images billed at the text rate capped at 384 tokens each.
- **Architecture:** Descends from V4-Flash-0731 (284B/13B-active MoE); experimental checkpoint.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9** (vendor, DSH-minimal)
- Agents' Last Exam: **27.3**; AutomationBench (Public): **25.7**
- ApexBench pass@1: **36.5%**; DSBench-Hard: **63.6%**
- Toolathlon / multimodal agent benchmarks: lands "close to Opus 4.8" per vendor 2-2 split

Reasoning / knowledge:

- Claims parity with V4-Flash-0731 on text reasoning, agents, world knowledge.
- HLE w/tools: **55.1%** (RankLLMs transcription; treat as vendor-class)
- No independently-run standard reasoning suite published.

Coding:

- DeepSWE: **59.3%** (vendor, +4.9 over text V4-Flash)
- NL2Repo: **57.7%**; SWE-bench Verified: **72.5%** (RankLLMs aggregator)

Multimodal:

- Chartography: **64.3%** at p0.95; ZeroBench pass@5: **35.0%**
- Vendor chart shows gains over V4-Flash on MMMU, OCRBench, DocVQA, ChartQA, MathVista (numbers not published).

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 83.9 (vendor) and Agents' Last Exam 27.3 travel with the text V4-Flash class; no GDPval-class row.
- **Reasoning: 72/100.** Vendor claims parity with V4-Flash text tier; no independent reasoning row.
- **Context window: 93/100.** 1M window and 384K max output at flash rates.
- **Multimodal: 78/100.** Native image input is the headline gain; ~384-token cap and 800x800 normalization limit dense-OCR use cases; no video/audio.
- **Coding: 72/100.** DeepSWE 59.3 and NL2Repo 57.7 (vendor) are modest gains over the text model; SWE-bench Verified 72.5 aggregator row.
- **Cost efficiency: 95/100.** $0.22/$0.66 off-peak with 95% cache-hit discount and ~384 tokens/image is the cheapest vision-capable API in the catalog.
- **Overall Score: 78/100.** Mean of the five quality dims. Mark experimental — DeepSeek can change or withdraw the ID; don't hard-wire client deliverables to it without a fallback.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (DeepSeek API change log, Twokq/Flowtivity/JulianGoldie/RohitRaj write-ups, RankLLMs, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
