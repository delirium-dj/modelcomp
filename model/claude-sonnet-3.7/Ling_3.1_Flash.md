# Claude Sonnet 3.7 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Claude Sonnet 3.7
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's first hybrid-reasoning Sonnet — near-instant responses or extended thinking on a single endpoint with fine-grained thinking control; predecessor of the Sonnet 4.x line, now deprecated.
- **Provider / access:** Anthropic — all Claude plans (Free/Pro/Team/Enterprise), Claude Developer Platform, AWS Bedrock, Google Vertex AI; extended thinking on every surface except the Free tier.
- **Release / knowledge:** Released 2025-02-24; knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/claude-sonnet-3.7` (repo meta.json).
- **Context window:** 200K input tokens; up to 128K output tokens including thinking tokens. (Repo meta.json's "128K total" is stale — it reflects the output cap.)
- **Modalities:** Text and image in; text out. (Repo meta.json's "Text in/out" is stale — vision was supported at launch: ChartQA 91.2%, DocVQA 93.5%.)
- **Pricing (as of 2026-10):** $3 input / $15 output per 1M tokens, same as predecessors; thinking tokens billed as output with no surcharge.
- **Architecture:** proprietary; not published in captured sources.

### Raw benchmarks found

Agent / tool use:

- τ-bench Retail: **81.2%**; τ-bench Airline: **58.4%** (standard mode; vs o1 73.5%/54.2%) (AwesomeAgents/DataCamp, launch-era).
- GAIA with HAL agent: **64.24%** (AwesomeAgents).
- Terminal-Bench: **35.2%** (VectorWire — status unverified); Terminal-Bench 2.x / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **68.0%** standard / **84.8%** extended thinking (launch figures per DataCamp/AwesomeAgents; above o1 78.0% and DeepSeek-R1 71.5%); evals.report lists **78.5%** "official" (config unstated).
- AIME 2024: **23.3%** standard / **80.0%** extended thinking; AIME 2025: **55%** (allthemodels; one tracker's "AIME 2025 80.0%" likely conflates AIME 2024 extended-thinking).
- MATH-500: **82.2%** standard / **96.2%** extended thinking.
- FrontierMath: **4.14%** (official); AIME (OTIS Mock): **57.8%** (official).
- MMLU: **88.8%**; MMMU: **75%**; IFEval: **93%**.
- HLE: no verified public score found.

Coding:

- SWE-bench Verified: **62.3%** standard / **70.3%** with a custom scaffold — launch SOTA, far ahead of o1 (48.9%) and DeepSeek-R1 (49.2%); evals.report lists **61.0%** official.
- HumanEval: **94.0%**.
- LiveCodeBench / SciCode / DeepSWE: no verified public score found.

Long context:

- 200K input; no MRCR / RULER / GraphWalks scores found.

Multimodal:

- ChartQA: **91.2%**; DocVQA: **93.5%** (launch-era chart/document understanding); no MMMU-style general multimodal score beyond MMMU 75% above.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ-bench Retail 81.2% and GAIA 64.2% (HAL) were strong for Feb 2025, but no TB2.x/MCP-Atlas/τ³ evidence exists and those suites are far harder today.
- **Reasoning: 72/100.** GPQA 84.8% (extended thinking) and MATH-500 96.2% (ET) are good but below the 90% GPQA frontier; FrontierMath 4.14% and the absence of any HLE evidence cap the score.
- **Context window: 70/100.** 200K input matches the 200K=70 anchor exactly; no retrieval-at-depth evidence.
- **Multimodal: 65/100.** Text+image input (image band 60–70); ChartQA/DocVQA show solid document understanding but no general multimodal suite beyond MMMU 75%.
- **Coding: 70/100.** SWE-bench Verified 70.3% (scaffolded) was launch-SOTA and approaches the 74% DeepSWE frontier anchor, but 62.3% vanilla, no TB/SciCode/Multilingual scores, and 20-month-old evidence.
- **Cost efficiency: 60/100.** $3/$15 per 1M exactly matches the anchor, with thinking tokens included at no surcharge.
- **Overall Score: 69.4/100.** Mean of the five quality dimensions; a strong Feb-2025 model whose evidence is now dated, every figure is standard-vs-extended-thinking dependent, and several tracker values conflict.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
