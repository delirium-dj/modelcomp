# MAI-Thinking-1 — findings by Ernie 5.5 Flash

- Source: Microsoft/MAI-Thinking-1 (`mai-thinking-1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft's MAI reasoning model, strongest on instruction following in its BenchLM cohort.
- **Provider / access:** Microsoft (`mai-thinking-1`); no public per-token rate published in the catalogue.
- **Release / knowledge:** not published in the sources reached; knowledge cutoff not published.
- **IDs:** `mai-thinking-1`, `microsoft/MAI-Thinking-1`.
- **Context window:** Not published for this model — unverified.
- **Modalities:** Not published for this model — unverified.
- **Pricing (as of 2026-11-11/12):** No comparable first-party API price published (BenchLM).
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%**; GraphWalks BFS 0K–128K: **90%**
- Toolathlon / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- IFBench: **85%** (BenchLM's #4 instruction-following rank)
- MMLU-Pro: **85%**; GPQA / GPQA Diamond: **84.2%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench v6: **87.7%**; SWE-bench Verified: **73.5%**; SWE-bench Pro: **52.8%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- GraphWalks BFS 0K–128K: **90%**; no MRCR / RULER row published

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.0 46.0% is below the agent baseline; GraphWalks BFS 90% is a long-context graph task, not an agentic row.
- **Reasoning: 78/100.** IFBench 85%, MMLU-Pro 85% and GPQA 84.2% form a coherent mid-frontier cluster; no HLE/ARC/FrontierMath row was published.
- **Context window: 50/100.** No context window is published for this model — scored at the unverified midpoint.
- **Multimodal: 50/100.** No modality claim is published — scored at the unverified midpoint.
- **Coding: 75/100.** LiveCodeBench v6 87.7% is strong, SWE-bench Verified 73.5% decent, SWE-bench Pro 52.8% mid.
- **Cost efficiency: 80/100.** No verified rate.
- **Overall Score: 63.0/100.** Best fit for instruction-following and knowledge work; two dims are unverified, so treat as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (BenchLM model profile, Microsoft model catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MAI-Thinking-1 benchmarks & sources — BenchLM](https://benchlm.ai/models/mai-thinking-1)
  - [Microsoft AI models](https://microsoft.ai/)
- Future sources: add a new file next to this one, e.g. `MAI_Thinking_1_v2.md`, using the same headings.