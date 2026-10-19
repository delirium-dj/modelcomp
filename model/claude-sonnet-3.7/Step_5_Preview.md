# Claude Sonnet 3.7 — findings by Step 5 Preview

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid-reasoning model (released 2025-02-24) — the debut of toggleable extended thinking with a configurable budget up to 128K tokens and a fully visible chain-of-thought, which let a single set of weights serve both instant and deep-reasoning modes. It set the launch-era SWE-bench Verified record (70.3% with scaffolding, 62.3–63.7% vanilla) and shipped alongside Claude Code. **Now retired from the Claude API** (requests error; researchers can use the External Researcher Access Program, and per Anthropic's current deprecation record — re-checked 2026-10-19 — the recommended replacement is `claude-sonnet-5-5`; the docs previously pointed to Sonnet 4.6).
- **Provider / access:** Claude API (retired); Amazon Bedrock and Google Cloud (legacy); Researchers via the External Researcher Access Program. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-02-24 (snapshot 2025-02-19). Reliable knowledge cutoff Oct 2024 per Artificial Analysis (not separately disclosed by Anthropic).
- **IDs:** `claude-3-7-sonnet-20250219`.
- **Context window:** 200,000 tokens; up to 128K output (thinking tokens included, billed as output).
- **Modalities:** Text and image in → text out; `thinking { type: enabled, budget_tokens }` API; 45% fewer unnecessary refusals vs 3.5 Sonnet.
- **Pricing (as of 2026-10-19):** $3.00 / MTok input, $15.00 output (historical; re-confirmed on AA's deprecated page); cache reads $0.30; batch 50% off.
- **Architecture:** Proprietary; Claude 3-family hybrid reasoning transformer.

### Raw benchmarks found

Reasoning / knowledge (Anthropic launch + current AA runs):

- GPQA Diamond: **78.2%** (64K thinking) / **84.8%** (parallel test-time compute) at launch; AA's current run: 75.3–77.2% (thinking) / **65.6% (AA, non-reasoning — new in the 2026-10-19 re-run)**; launch-card GPQA 68%
- MATH 500: **96.2%** (thinking; 94.7% standard); **BenchLM/Anthropic-card reading 82.2%** (non-thinking config, new in the re-run)
- AIME 2024: **61.3%** (80.0% with internal scoring); **23.3% (non-thinking, new in the re-run)**
- MMMLU: **86.1%** (thinking); card reading **83.2%**; MMLU-Pro: 83.7%
- HLE: **9.7–10.3%** (current AA runs, thinking) / **4.2% (AA, non-reasoning — new in the re-run)**
- AA Intelligence Index: **17.7** (reasoning) / 15.3 (non-reasoning; AA's own estimated page lists **15** for the non-reasoning variant)
- FrontierMath: 4.14%; IFBench: 48.3% (AA thinking) / **44.0% (AA, non-reasoning — new)**; card IFEval **90.8%**; LiveBench: 74.3%
- **New in the 2026-10-19 re-run (AA, non-reasoning):** AA-LCR **51.7%**, CritPt **0.0%**, AA-Omniscience Index **-9.7** (accuracy 28.2%, hallucination 52.8%), τ²-bench **50%**

Coding:

- SWE-bench Verified: **62.3–63.7%** vanilla / **70.3%** with rejection-sampling scaffold (launch, SOTA; re-confirmed via BenchLM 2026-10-19); Sophon's current listing: 66.4%; Vals-style runs lower
- LiveCodeBench: **47.3%**; Aider Polyglot: 64.9%; HumanEval: 94.0%; SciCode: 40.3%; SWE-bench Multimodal: 31.3%
- Terminal-Bench Hard: **21.2%** (AA)

Agentic / tool use:

- TAU-bench Retail: **81.2%** (launch); τ² Telecom: 54.7% (current, thinking); **τ²-bench 50% (AA, non-reasoning — new)**; GDPval-AA: **Elo 1049** (current); AgentBench FC: 50.0%
- MCP-Atlas / BrowseComp / Claw-Eval: **no verified public score found**

Multimodal:

- MMMU: **75%** (thinking) / card reading **71.8%**; MMMU-Pro: 75.1% (AA, thinking) / **60.1% (AA, non-reasoning — new)**
- ChartQA 91.2%; DocVQA 93.5% (launch)

Long context:

- 200K-token window; no MRCR / RULER figure published for 3.7; **AA-LCR 51.7% (non-reasoning) is the new closest long-context number**

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The new Artificial Analysis / BenchLM rows are the non-reasoning variant's readings (GPQA 65.6%, HLE 4.2%, Index 15.3, τ² 50%, AA-LCR 51.7%, MMMU-Pro 60.1%) — they confirm, rather than move, each dimension: the model's profile was already scored as a blend of its thinking and non-thinking modes, and the gap between them was already reflected (e.g. Reasoning 58 cited "HLE 9.7–10.3%" alongside the thinking-mode GPQA/MATH numbers). Anthropic's official retirement record (re-checked today; replacement Sonnet 5.5) is a lineage correction, not a scoring input.

- **Tool use: 52/100.** TAU-bench Retail 81.2% at launch was strong for early 2025, but the current τ² readings — 54.7% (thinking) and 50% (AA, non-reasoning) — plus GDPval-AA Elo 1049 and Terminal-Bench Hard 21.2% place it mid-to-low by today's agentic standard.
- **Reasoning: 58/100.** GPQA 65.6–84.8% (variant-dependent) and MMLU-Pro 83.7% are mid-tier; HLE 4.2–10.3%, FrontierMath 4.14%, CritPt 0.0% and the AA Index of 15.3–17.7 show the early-2025 reasoning ceiling.
- **Context window: 70/100.** 200K-token window is the methodology's 200K baseline tier; the new AA-LCR 51.7% reading and the absence of any MRCR/RULER figure keep it at the floor of the band.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU 71.8–75%, DocVQA 93.5% and ChartQA 91.2%; the new non-reasoning AA-MMMU-Pro 60.1% shows the weaker mode, but the band assignment stands; no video/audio input or non-text output.
- **Coding: 58/100.** SWE-bench Verified 62.3–66% (70.3% scaffolded, re-confirmed this run) was the launch record but is now far behind the 88–96% frontier; LiveCodeBench 47.3%, Aider 64.9% and Terminal-Bench Hard 21.2% confirm the agentic-coding gap.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps to the methodology's ~$3/$15 ≈ 60 tier; superseded on price by every current mid-tier model ($0.15–$2 input).
- **Overall Score: 62/100.** Best-fit recommendation: a retired landmark model — the first hybrid-reasoning Claude and the SWE-bench record-holder of early 2025; retained here as the historical baseline for the Claude coding line.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — Artificial Analysis deprecated page (non-reasoning Index 15, pricing, 200K) + BenchLM's 18-row aggregate (AA per-benchmark readings, launch-card re-confirmations) + Anthropic's official deprecation history (retirement record, replacement Sonnet 5.5); original run used the Anthropic launch/research posts and Sophon/VectorWire, BenchmarkList, evals.report, Langbase and AwesomeAgents aggregations. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.5.md`, using the same headings.
