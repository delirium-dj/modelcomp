# Claude Sonnet 3.7 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude 3.7 Sonnet (`anthropic/claude-3.7-sonnet`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's Feb-2025 model that introduced hybrid reasoning — a choice between fast answers and extended step-by-step thinking. Notable improvements in coding (front-end and full-stack) and agentic workflows; a generation behind the current Claude 4.x/5.x line and now API-only.
- **Provider / access:** Anthropic API (`claude-3-7-sonnet`, Bedrock, Vertex AI), OpenRouter. API-only; not open weights.
- **Release / knowledge:** Released 2025-02-24; knowledge cutoff 2024-10-31.
- **IDs:** `claude-3.7-sonnet` (Anthropic/OpenRouter); OpenCode Zen tracks it as `opencode/claude-sonnet-3.7`. No Zen Free ID.
- **Context window:** 200,000 tokens (OpenRouter).
- **Modalities:** text, image and file/PDF in; text out. Hybrid reasoning (standard + extended thinking), tool use, computer use.
- **Pricing (as of 2026-10-01):** **$3 / $15 per 1M** in/out.
- **Architecture:** proprietary decoder-only. Not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **21.2%** (BenchmarkList); Tau2-Bench Telecom: **54.7%**; GDPval-AA: **1049** (74th pct)
- OSWorld: **35.8%**; OSWorld-Verified: **35.8%**; AgentBench FC **53.2%**; GAIA **56.4%**; MCP-Universe **24.2%**
- The Agent Company **52.7%** (rank 1/8, 100th pct); VeriTrip **66.2%**

Reasoning / knowledge:

- GPQA Diamond: **77.2%** (Reasoning lane, 69th pct) / **75.3%** (Intelligence lane); MMLU-Pro: **83.7%**
- HLE: **10.3%**; AA-LCR: **62.3%**; Artificial Analysis Intelligence Index: **27.6**; SimpleBench: **46.4%** (9th pct)
- Math: MGSM **93.0%**, MATH-500 **91.6%**, AIME 2025 **56.3%**; ECI: **106.44** (#174/354)

Coding:

- SWE-bench Verified (Bash Only): **52.2%**; SWE-bench Lite **48.0%**; Multi-SWE-Bench **19.3%**
- SciCode: **40.3%**; LiveCodeBench: **60.4%**; Aider Polyglot: **64.9%**; BigCodeBench-Hard **32.4%**; Defects4J **47.8%**; Natural Language to Mongosh **0.9** (rank 1/28, 100th pct)
- SWE-bench Pro: **no verified public score found**

Long context:

- 200K-token window documented; AA-LCR **62.3%** is the only long-context figure found; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench Hard 21.2% and a GDPval-AA of 1049 are mid/low, but Tau2-Bench 54.7%, GAIA 56.4% and 100th-percentile The Agent Company (52.7%) show real agentic competence on older harnesses — scored mid-tier, well below current frontier.
- **Reasoning: 72/100.** GPQA 75.3–77.2% and MMLU-Pro 83.7% are respectable but below frontier; HLE 10.3% and an Intelligence Index of 27.6 cap the band.
- **Context window: 70/100.** 200K tokens = 70 on the methodology's 200K–500K scale.
- **Multimodal: 75/100.** Text, image **and PDF** input with text output (+PDF band = 75–90).
- **Coding: 70/100.** SWE-bench Verified 52.2% (bash-only), SciCode 40.3%, LiveCodeBench 60.4% and Aider Polyglot 64.9% are solid mid-tier for a 2025 model; capped well below current frontier coders.
- **Cost efficiency: 60/100.** $3 / $15 per 1M matches the methodology's ~$3/$15 reference point.
- **Overall Score: 69/100.** (60 + 72 + 70 + 75 + 70) / 5 = 69.4 → 69. Best fit: legacy/PDF-document workflows and cheaper fallback agentic use; superseded for new work by Claude 4.x/5.x.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (BenchmarkList Claude 3.7 Sonnet and 3.7 Sonnet (thinking) pages with percentiles, ranks and dated rows; OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.