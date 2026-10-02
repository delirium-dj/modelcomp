# Qwen 3.5 Plus — findings by DeepSeek 4.1 Flash

- Source: Alibaba / Qwen3.5 Plus (`qwen3.5-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** The flagship commercial API model of the Qwen3.5 native vision-language series (Apache-2.0 family) — a 1M-context multimodal model whose top use-cases are coding, agents and build tasks; strong on knowledge and finance, weaker on deep legal/coding and on strict-format multimodal output.
- **Provider / access:** Alibaba Cloud (PAI-EAS/DashScope), OpenRouter and Vercel AI Gateway (OpenAI-compatible). Open weights (Apache 2.0).
- **Release / knowledge:** Released 2026-02-15/16; knowledge cutoff not separately published for this ID.
- **IDs:** `qwen3.5-plus` (OpenRouter / Alibaba); OpenCode Zen tracks it as `opencode/qwen-3.5-plus`. No Zen Free ID.
- **Context window:** 1,000,000 tokens (LLM Reference; Vals records 991K with 66K max output).
- **Modalities:** text, image and video in; text out (Vals: text + image + video supported, file not). Reasoning yes (a "Thinking" variant is benchmarked), tool use.
- **Pricing (as of 2026-10-01):** **$0.30 / $1.80 per 1M** (OpenRouter) or **$0.40 / $2.40** (Alibaba PAI-EAS); no cache discount listed.
- **Architecture:** open-weights (Apache 2.0) native vision-language model; parameter count not published for the Plus SKU.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **41.6%** (rank 31/68, BenchmarkList); Vals: **41.57%** (rank 31/67)
- Finance Agent v1.1: **54.5%** (rank 18/51, 66th pct); ClawProBench: **64.19** (rank 3/48, 96th pct); Claw Bench: **69th pct**
- Vals Index: **57.1%** (#10 overall, #3 open-weight); OccuBench **41.0%** (86th pct)
- SmartHome-Bench: **84.2%**; GroupTravelBench **8.63** (67th pct)

Reasoning / knowledge:

- GPQA Diamond: **87.4%** (BenchmarkList, 76th pct, rank 29/117); Vals **87.37%** (rank 38/138)
- MMLU Pro: **87.2%** (rank 27/116); MedQA: **95.2%** (86th pct); AIME: **86.0%**
- MMMU Pro: **22.8%** (0th percentile — rank 79/79; a documented multimodal weakness); Vibe Code Bench v1.1: **15.7%** (33rd pct)
- HLE: **no verified public score found for this ID**

Coding:

- SWE-bench Verified: **76.4%** (LLM Reference, observed 2026-06-07); Vals SWE-bench **71.2%** (rank 59/88)
- LiveCodeBench: **85.3%** (80th pct, rank 26/123); Terminal-Bench 2.0 **41.6%**; Vibe Code Bench v1.1 **15.7%**
- SciCode / DeepSWE: **no verified public score found**

Long context:

- 1M-token window documented; **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 41.6% and Finance Agent 54.5% are mid, with strong ClawProBench and a top-10 Vals Index; no GDPval/OSWorld figure keeps it mid-band.
- **Reasoning: 82/100.** GPQA 87.4% and MMLU-Pro 87.2% are strong and AIME 86.0% is high, but HLE is unmeasured and MMMU Pro 22.8% (rank 79/79) shows a clear multimodal-reasoning failure — capped below frontier.
- **Context window: 95/100.** 1M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 78/100.** Text, image **and video** input with text output (+video band = 75–90); the documented MMMU Pro failure caps it below the audio/non-text-output band.
- **Coding: 76/100.** SWE-bench Verified 76.4% (LLM Reference) / 71.2% (Vals) and LiveCodeBench 85.3% are solid mid-tier, but Vibe Code Bench 15.7% and TB 2.0 41.6% hold it back.
- **Cost efficiency: 93/100.** $0.30 / $1.80 per 1M is budget pricing for an open-weight 1M-context multimodal model.
- **Overall Score: 80/100.** (68 + 82 + 95 + 78 + 76) / 5 = 79.8 → 80. Best fit: cheap open-weight 1M-context multimodal agent/coding work where strict-format vision tasks are not critical.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (BenchmarkList model page with percentile ranking and dated rows, Vals AI model page with ranks, LLM Reference datapack); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6.md`, using the same headings.