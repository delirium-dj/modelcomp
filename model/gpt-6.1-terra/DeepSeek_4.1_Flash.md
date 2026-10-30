# GPT-6.1 Terra — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6.1 Terra
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, cost-efficient GPT-6-series reasoning model (Oct 2026) built for visual understanding and computer use — reading screens and documents, interpreting technical drawings, filling forms, and routine agentic office automation. It is a step up from GPT-5.6 Terra and cheaper than GPT-6.1 Sol / GPT-6 Astra, which remain stronger for the hardest coding.
- **Provider / access:** OpenAI — API ID `gpt-6.1-terra`; also in ChatGPT Work and Codex (Plus/Pro/Enterprise/Edu) and via AWS Bedrock and GitHub Copilot. Chat Completions, Responses, and Batch endpoints; tool calling requires the Responses API.
- **Release / knowledge:** Released 2026-10-26. Knowledge cutoff June 1, 2026.
- **IDs:** `openai/gpt-6.1-terra`; Codex CLI `codex -m gpt-6.1-terra`. No OpenCode Zen ID found.
- **Context window:** 1,050,000 tokens total; max input 922,000; max output 128,000 (OpenAI model reference; Artificial Analysis rounds to 1M).
- **Modalities:** Text and image in; text out. Reasoning yes (effort `none`/`low`/`medium` default/`high`/`xhigh`/`max`); tool calls (Responses API), structured output, streaming, computer use, web/file search, code interpreter. No native audio or video input; image generation only via a separate tool.
- **Pricing (as of 2026-10-30):** $1.00 in / $0.05 cached input / $5.00 out per 1M (standard API) — 50% below GPT-5.6 Terra and GPT-6.1 Sol. Approximately $0.96 per AA Intelligence-Index task (max).
- **Architecture:** Proprietary; OpenAI has not published parameter count, active parameters, or weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 4.0: **50.3%** (OpenAI launch table, max effort) vs **55.6%** (Artificial Analysis, mini-swe-agent, 66 tasks, 3 repeats, pass@1, 500-step limit). Conflict: different harnesses — AA's run is higher than OpenAI's own.
- Agents' Last Exam v1: **57.6%** at medium / **60.0%** at max (OpenAI); cost per task $0.29 / $1.01 — near GPT-6 Astra 59.3% at ~1/7th the cost.
- OSWorld 2.1 (offline set): **66.7%** medium / **74.2%** max (OpenAI vendor) — trails GPT-6.1 Sol (78.0), GPT-6 Astra (80.9), Sonnet 5.5 (83.9).
- Terminal-Bench-Science 0.1: **58.3%** max (OpenAI) — slightly above GPT-6.1 Sol (57.0), below Astra (68.1).
- FrontierCode 2.0: **42.3%** max / 34.5% medium (Artificial Analysis; weighted rubric, Stirrup, 132 private tasks).
- GDPval-AA v2.1, AutomationBench-AA, MCP-Atlas, Toolathon, Claw-Eval: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** on Index v5.0 (#12 of 57, max) vs **48** on Index v4.3.2 at launch. Cost per task $0.96.
- FrontierMath v2 (Epoch AI, Pokémon-private set, max): Tiers 1–3 **90.9%**, Tier 4 **92.7%** — note OpenAI funded/commissioned FrontierMath.
- MMMU-Pro (Vision): **85.5%** max / 84.6% medium (OpenAI) — near GPT-6 Astra 86.7%.
- AA-Omniscience v1.1 (max): accuracy **47.6%**, conditional hallucination rate **34.5%**; v1 snapshot 49% accuracy / 38% hallucination (vs GPT-5.6 Terra 47% / 88%).
- Internal factual-error benchmark (OpenAI, error-prone prompts): error rate at low effort fell from 53.6% (5.6 Terra) to **16.7%**; at max to **4.3%**.
- GPQA Diamond, HLE / HLE-Diamond, CritPt: no verified public score found for this exact ID.

Coding:

- Bug Hunt Bench: **40.7** mean planted bugs fixed / 105 at max (mean of 3 repeats) — far above the 6.0–11.3 of low/high/xhigh effort on the same two repos.
- Vals Index v2.2: **60.47%** (max; Excel Modeling 73.33%, Code Migration subset 72.2%, Legal Research 25.96%, Tax Agent 15.17%).
- Plotly DataAnalyticsBench: **40/43** (vs GPT-6.1 Sol 43/43); Bito long-session coding rubric 69% (vs Sol 74%, planning 71% vs 84%).
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE: no verified public score found for this ID.

Long context:

- No MRCR/RULER/AA-LCR result found at the full ~1.05M window; context is advertised capacity only (max input 922K, max output 128K).

### Normalized scores (1–100)

- **Tool use: 87/100.** Computer-use is the headline: Agents' Last Exam 60.0% (max) is near GPT-6 Astra at a fraction of the cost, OSWorld 74.2%, TB4.0 55.6% (AA). Capped by trailing Sol/Astra/Sonnet on OSWorld and by no GDPval/AutomationBench figure.
- **Reasoning: 87/100.** FrontierMath v2 Tiers 1–3 90.9% and MMMU-Pro 85.5% are strong, and factual errors on hard prompts dropped sharply; capped by a mid-pack AA Index (51 / 48) and weak AA-Omniscience knowledge (accuracy 47.6%, hallucination 34.5%).
- **Context window: 96/100.** 1,050,000-token total budget with a genuine 922K max input (≥1M tier). Capped below 100 by a 128K output ceiling and no published retrieval-at-length measurement.
- **Multimodal: 70/100.** Text and image input only (no audio/video/PDF), but exceptionally strong vision reasoning (MMMU-Pro 85.5%, Roboflow low-tier 85.8%). Caps at the top of the image-only band.
- **Coding: 83/100.** Terminal-Bench 4.0 ~50–56%, FrontierCode 2.0 42.3%, Bug Hunt 40.7/105, Vals Code Migration 72.2%. Capped by OpenAI's own note that Sol and Astra remain better for the hardest coding.
- **Cost efficiency: 90/100.** $1/$5 per 1M (half of GPT-5.6 Terra) and ~$0.96 per AA Intelligence-Index task make it one of the strongest cost-intelligence options; not 100 because max-effort latency is very high and effort settings change the economics sharply.
- **Overall Score: 85/100.** Half-up mean of (87 + 87 + 96 + 70 + 83) / 5 = 84.6 → 85. Best-fit: high-volume visual office work and routine computer-use agents where cost per task outweighs top-end coding/reasoning depth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-30
- Method: public internet research (OpenAI launch post + model reference; Artificial Analysis model page and article; Kingy.ai evidence guide aggregating Vals, Epoch AI, Bug Hunt Bench, Bito, Plotly, Roboflow); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Sources

- OpenAI — Introducing GPT-6.1 Terra (official launch; pricing $1/$0.05/$5, TB4.0 50.3%, safety) — https://openai.com/index/introducing-gpt-6-1-terra/
- OpenAI API — GPT-6.1 Terra model page (1,050,000 / 922,000 / 128,000; cutoff June 1 2026) — https://developers.openai.com/api/docs/models/gpt-6.1-terra
- Artificial Analysis — GPT-6.1 Terra (Max) model page (Index v5.0 = 51 #12/57, $0.96/task, 90.9 t/s) — https://artificialanalysis.ai/models/gpt-6-1-terra
- Artificial Analysis — "GPT-6.1 Terra pushes the cost-efficiency frontier" (TB4.0 55.6%, Omniscience) — https://artificialanalysis.ai/articles/gpt-6-1-terra-pushes-the-cost-efficiency-frontier
- Kingy.ai — "GPT-6.1 Terra: Benchmarks, Pricing & Model Comparisons" (verified specs, vendor vs AA, Vals/Epoch/Bug Hunt/Bito/Plotly/Roboflow) — https://kingy.ai/blog/gpt-6-1-terra/
- Vals AI — GPT-6.1 Terra (Vals Index v2.2 60.47%) — https://www.vals.ai/models/openai_gpt-6.1-terra
- Epoch AI — GPT-6.1 Terra (FrontierMath v2) — https://epoch.ai/models/gpt-6-1-terra
- BenchLM — gpt-6-1-terra (80.46 #9) — https://benchlm.ai/models/gpt-6-1-terra
