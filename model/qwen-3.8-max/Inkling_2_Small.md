# Qwen3.8-Max — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.8-max`)
- Date: 2026-10-08 (UTC, refreshed from 2026-10-02)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's Aug 3, 2026 flagship, 2.4T-param MoE (95B active), the first Max-tier Qwen with multimodal input and a public per-token price.
- **Provider / access:** Alibaba Model Studio, QwenWork, OpenRouter; flat-rate API also at $2/$6.
- **Release / knowledge:** 2026-08-03; GA.
- **IDs:** `qwen/qwen3.8-max`; open checkpoint `Qwen3.8-2.4T-A95B` under custom license (Aug 2026, text-only).
- **Context window:** 1,000,000 tokens (~991K input, 131K output, 262K reasoning budget).
- **Modalities:** text + image + video in; text out.
- **Pricing (as of 2026-10-02):** $2/M in, $6/M out, ~$0.25/M implicit cache read — flat across full 1M window.
- **Architecture:** 2.4T total / ~95B active sparse MoE, hybrid attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba; AA/tbench rows 86.6)
- OSWorld-Verified: **86.1%** (Alibaba)
- AutomationBench Pass@1: **27.3%**; JobBench: **53.4%**
- Toolathlon Verified: **72.5%**; WideSearch: **81.9%**; Agents' Last Exam score: 52.4

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA-confirmed by third parties)
- HLE: **43.6%** (Alibaba; with tools 56.2%)
- AA Intelligence Index: **45–56** (45 on v4.3.2 for the 0902 snapshot; 56 at launch scale)
- Recursive self-improvement (Apsara, 2026-09-23): the updated Qwen3.8-Max completed 33 fully automated training iterations, raising its AA score from 40 to 45 in company materials; a chip-design experiment made 10,000+ EDA tool calls over 60+ hours (vendor-stated). Qwen 4 confirmed in training; Qwen 4.5/5 roadmap at 5–10T params.
- IFBench: **82.8%** (leads peers); PLawBench 73.2; HealthBench 60.2

Coding:

- SWE-bench Pro: **67.7%**; DeepSWE v1.1: **56.6%**; FrontierSWE: **73.5%**
- PaperBench: **93.0%** (#1 published); NL2Repo-Bench 55.9; AndroidBench 75.1
- QwenSWEBench 80.7 (internal); MLS-Bench-Lite 41.0

Long context:

- MRCR v2 256K (8-needle): **92.9%** (vs GPT-5.6 Sol's 93.8); LongBench v2: 66.3%

Multimodal:

- OmniDocBench 1.5: 92.1%; MathVision 95.2; LogicVista 91.9; Parametric CAD Bench 91.5

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 86.6% and OSWorld 86.1% are top-tier; AutomationBench 27.3% is middling.
- **Reasoning: 80/100.** GPQA 92.6% and IFBench 82.8% (leads peers); HLE 43.6% trails Fable 5.1/Opus 5.5.
- **Context window: 93/100.** 1M window with 92.9% MRCR at 256K and 131K output; flat pricing across the window.
- **Multimodal: 90/100.** First Max-tier Qwen with native text/image/video input; Arena #2 vision.
- **Coding: 78/100.** SWE-bench Pro 67.7% and PaperBench 93.0% lead on paper tasks; DeepSWE 56.6% and FrontierSWE 73.5% trail leaders.
- **Cost efficiency: 80/100.** $2/$6 undercuts GPT-5.6 Sol ($4/$20) at comparable tier; AA rates its cost/task at $5.41.
- **Overall Score: 85/100.** Mean of the five quality dims; best fit for high-volume multimodal/long-context agents where SWE-Pro-level depth isn't the top priority.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Qwen blog, Alibaba Model Studio docs, AA, independent trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
