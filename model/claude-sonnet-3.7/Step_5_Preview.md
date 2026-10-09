# Claude Sonnet 3.7 — findings by Step 5 Preview

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid-reasoning model (released 2025-02-24) — the debut of toggleable extended thinking with a configurable budget up to 128K tokens and a fully visible chain-of-thought, which let a single set of weights serve both instant and deep-reasoning modes. It set the launch-era SWE-bench Verified record (70.3% with scaffolding, 62.3–63.7% vanilla) and shipped alongside Claude Code. **Now retired from the Claude API** (requests error; Anthropic points researchers to its External Researcher Access Program and users to Sonnet 4.6).
- **Provider / access:** Claude API (retired); Amazon Bedrock and Google Cloud (legacy); Researchers via the External Researcher Access Program. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-02-24 (snapshot 2025-02-19). Knowledge cutoff not disclosed.
- **IDs:** `claude-3-7-sonnet-20250219`.
- **Context window:** 200,000 tokens; up to 128K output (thinking tokens included, billed as output).
- **Modalities:** Text and image in → text out; `thinking { type: enabled, budget_tokens }` API; 45% fewer unnecessary refusals vs 3.5 Sonnet.
- **Pricing (as of 2026-10-09):** $3.00 / MTok input, $15.00 output (historical; same as Sonnet 3.5); cache reads $0.30; batch 50% off.
- **Architecture:** Proprietary; Claude 3-family hybrid reasoning transformer.

### Raw benchmarks found

Reasoning / knowledge (Anthropic launch + current AA runs):

- GPQA Diamond: **78.2%** (64K thinking) / **84.8%** (parallel test-time compute) at launch; AA's current run: 75.3–77.2%
- MATH 500: **96.2%** (thinking; 94.7% standard)
- AIME 2024: **61.3%** (80.0% with internal scoring)
- MMMLU: **86.1%** (thinking); MMLU-Pro: 83.7%
- HLE: **9.7–10.3%** (current AA runs — the generation's ceiling)
- AA Intelligence Index: **17.7** (reasoning) / 15.3 (non-reasoning)
- FrontierMath: 4.14%; IFBench: 48.3% (AA); LiveBench: 74.3%

Coding:

- SWE-bench Verified: **62.3–63.7%** vanilla / **70.3%** with rejection-sampling scaffold (launch, SOTA); Sophon's current listing: 66.4%; Vals-style runs lower
- LiveCodeBench: **47.3%**; Aider Polyglot: 64.9%; HumanEval: 94.0%; SciCode: 40.3%; SWE-bench Multimodal: 31.3%
- Terminal-Bench Hard: **21.2%** (AA)

Agentic / tool use:

- TAU-bench Retail: **81.2%** (launch); τ² Telecom: 54.7% (current); GDPval-AA: **Elo 1049** (current); AgentBench FC: 50.0%
- MCP-Atlas / BrowseComp / Claw-Eval: **no verified public score found**

Multimodal:

- MMMU: **75%** (thinking); MMMU-Pro: 75.1% (AA); ChartQA 91.2%; DocVQA 93.5% (launch)

Long context:

- 200K-token window; no MRCR / RULER / AA-LCR figure published for 3.7

### Normalized scores (1–100)

- **Tool use: 52/100.** TAU-bench Retail 81.2% at launch was strong for early 2025, but the current τ² Telecom reading is 54.7%, GDPval-AA sits at Elo 1049 and Terminal-Bench Hard at 21.2% — mid-to-low band by today's agentic standard.
- **Reasoning: 58/100.** GPQA 75.3–77.2% and MMLU-Pro 83.7% are mid-tier; HLE 9.7–10.3%, FrontierMath 4.14% and the AA Index of 17.7 show the early-2025 reasoning ceiling.
- **Context window: 70/100.** 200K-token window is the methodology's 200K baseline tier; no MRCR/RULER/AA-LCR figure exists to lift it.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 75.1% and DocVQA 93.5%; no video/audio input or non-text output.
- **Coding: 58/100.** SWE-bench Verified 62–66% (70.3% scaffolded) was the launch record but is now far behind the 88–96% frontier; LiveCodeBench 47.3%, Aider 64.9% and Terminal-Bench Hard 21.2% confirm the agentic-coding gap.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps to the methodology's ~$3/$15 ≈ 60 tier; superseded on price by every current mid-tier model ($0.15–$2 input).
- **Overall Score: 62/100.** Best-fit recommendation: a retired landmark model — the first hybrid-reasoning Claude and the SWE-bench record-holder of early 2025; retained here as the historical baseline for the Claude coding line.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Claude 3.7 Sonnet launch/research posts + release notes, Artificial Analysis via Sophon/VectorWire, BenchmarkList, evals.report, Langbase, AwesomeAgents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_3.5.md`, using the same headings.
