# Qwen 3.8 Max — findings by Mercury 3

- Source: Alibaba Qwen/Qwen3.8-Max
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (API flagship; a separate checkpoint refresh `qwen3.8-max-0902` shipped 2026-09-02)
- **Short description:** Alibaba Qwen's 2.4T-parameter MoE flagship (released 2026-08-03): the API version of the Qwen3.8 open family with vision input, non-thinking support, 1M context, and built-in tools; autonomously codes long projects and handles professional-work workflows. Strong coding/agentic profile at ~$2/$6.
- **Provider / access:** Qwen Cloud `qwen3.8-max` (OpenAI/DashScope-compatible), Alibaba Model Studio, plus 39 providers per models.dev (incl. OpenCode, Cloudflare, Novita, Fireworks, etc.).
- **Release / knowledge:** Released 2026-08-03 (0902 refresh 2026-09-02); knowledge cutoff not published.
- **IDs:** `qwen3.8-max` (Qwen Cloud; `alibaba/qwen3.8-max` canonical; thinking/non-thinking modes).
- **Context window:** 1,000,000 tokens (1M) total; max input 991K (983K thinking), max output 131K, max reasoning 262K.
- **Modalities:** text + image + video input, text output; reasoning (extended thinking, `reasoning_effort`); tool calls; structured outputs; built-in tools (code interpreter, web search/extract, PDF parsing, image search); context cache.
- **Pricing (as of 2026-11-03):** $2.00 input / $6.00 output per 1M tokens; implicit cache $0.25, explicit cache $2.50/$0.17; token-plan/free routes on some providers.
- **Architecture:** 2.4T total MoE (closed weights for Max; the open 2.4T-A95B checkpoint is the separate `qwen-3.8` folder).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen launch table); Agents' Last Exam: **27.0% / 52.4%** (pass/score); Automation-Bench (Pass@1): **27.3%**; Toolathlon Verified (Pass@1): **72.5%**; WideSearch: **81.9%**; CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%** (Qwen launch table)
- GDPval-AA: no published Elo found in sources reviewed (sparse AA coverage)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen launch table); HLE: **43.6%** (table; 56.2% with tools); IFBench: **82.8%**; OneMillion-Bench (expert): 52.5%; HealthBench: 60.2%; PLawBench: 73.2%; PRBench-Legal 57.6% / Finance 58.3%
- MRCR v2 256K (8-needle): **92.9%**; LongBench v2: 66.3% (Qwen launch table)
- No AA Intelligence Index/ARC figure verified in sources reviewed (sparse third-party coverage)

Coding:

- Terminal-Bench 2.1 86.6%; SWE-bench Pro: **67.7%**; DeepSWE v1.1: **56.6%**; FrontierSWE: **73.5%**; NL2Repo-Bench: **55.9%**; MLS-Bench-Lite: 41.0%; PaperBench: **93.0%**; AndroidBench: **75.1%**; QwenSWEBench: 80.7%; QwenQoderBench: 58.4%; QwenReactBench 1724 / QwenSVGBench 1713 Elo (Qwen launch table)

Long context:

- 1M context; MRCR v2 256K 92.9% (8-needle); LongBench v2 66.3%.

Multimodal:

- text/image/video in (native vision incl. extended video per Qwen Cloud), text out; no verified video benchmark row found (Vision-adjacent rows not published separately).

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 86.6%, CoWorkBench 74.8%, Toolathlon 72.5%, SkillsBench 70.2% — strong agentic; capped by Automation-Bench 27.3% and no GDPval/AA-index verification.
- **Reasoning: 87/100.** GPQA 92.6%, IFBench 82.8%, MRCR 92.9% @256K — solid; capped by HLE 43.6% and no ARC/II figures.
- **Context window: 91/100.** 1M with good MRCR 92.9% @256K; no ≥98%-retrieval figure at 1M depth.
- **Multimodal: 84/100.** Image + video input (native vision, extended video per Qwen Cloud) — above the image-only band; text-only output.
- **Coding: 88/100.** PaperBench 93%, TB2.1 86.6%, FrontierSWE 73.5%, AndroidBench 75.1%, SWE-Pro 67.7%; capped by DeepSWE 56.6% and no FrontierCode figure.
- **Cost efficiency: 82/100.** $2/$6 with aggressive cache pricing ($0.25 implicit) — competitive for a 2.4T flagship.
- **Overall Score: 87/100.** Mean of (87+87+91+84+88)/5 = 87.4 → 87. A strong API flagship; thin third-party benchmark coverage (mostly Qwen's own table) flagged.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Qwen Cloud official model page, Qwen3.8 launch table via the 2.4T model card, models.dev registry); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: API flagship vs the open Qwen3.8-2.4T-A95B folder; 0902 checkpoint refresh noted; most benchmark rows are Qwen-published (AA/BenchLM coverage sparse).
- Reference URLs:
  - [Qwen3.8-Max — Qwen Cloud model page](https://www.qwencloud.com/models/qwen3.8-max)
  - [Qwen3.8 open model card (launch benchmark table incl. Max) (Hugging Face)](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [Qwen3.8 blog (Qwen)](https://qwen.ai/blog?id=qwen3.8)
  - [Qwen3.8 Max — models.dev registry (39 providers, $2/$6)](https://models.dev/models/alibaba/qwen3.8-max)
