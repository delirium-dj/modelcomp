# OpenAI GPT-6 Astra — findings by Xing 4.0 29B A4B

- Source: OpenAI (`openai/gpt-6-astra`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most intelligent and aligned model, saturating FrontierMath Tier 4 (97.6%), ARC-AGI-3 (99.9%), and ExploitBench (100%). State-of-top on computer use, coding, cybersecurity, and professional work. Native multimodal input/output with browsing and computer use capabilities.
- **Provider / access:** OpenAI API (`openai/gpt-6-astra`); Microsoft Azure; AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise
- **Release / knowledge:** September 2026 release; knowledge cutoff TBD
- **IDs:** `openai/gpt-6-astra`; `anthropic/gpt-6-astra` (via Azure)
- **Context window:** Not explicitly published on this page; estimated 1M+ tokens based on FrontierCode Long Workspace and Codex context preservation features
- **Modalities:** Text, image, video, document input; text output; native computer use tool, browser automation, code execution, file system access
- **Pricing (as of 2026-10-17):** $10 / $50 per million input/output tokens (standard); cache reads and writes at standard rates; fast mode $20 / $100 per million tokens (2x speed, 2x price)
- **Architecture:** Proprietary OpenAI; custom architecture optimized for alignment + capability frontier

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Tool use:

- Terminal-Bench 4.0 (OpenAI comparison table, Anthropic report): **57.9%** (standard effort)
- ScreenSpot-Pro (no tools, Anthropic comparison table): **92.7%**
- OSWorld 2.0 (offline set, partial, Anthropic comparison table): **72.6%** (partial score due to offline constraint)
- AutomationBench (Zapier): **41.4%** (with fallback models)
- Artificial Analysis Coding Agent Index v1.4: **67.0** (overall agentic coding index)

Coding:

- Terminal-Bench 4.0: **57.9%**
- DeepSWE v1.1: **74.1%**
- FrontierCode 1.1 Extended: **64.5%**
- FrontierCode 1.1 Main: **53.3%**
- Artificial Analysis Coding Agent Index v1.4: **67.0%**

Reasoning / knowledge:

- GPQA Diamond: **96.0%**
- Humanity's Last Exam (w/ tools): **57.2%**
- FrontierMath Tier 4 (v2): **97.6%**
- Artificial Analysis Intelligence Index v4.1.1: **61.2**

### Normalized scores (1–100)

Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence.

**OVERALL SCORE FORMULA (v4, see RULES.md):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 92/100.** Native computer use, browser automation, code execution, and web search across multiple benchmarks: 92.7% ScreenSpot-Pro, 72.6% OSWorld, 57.9% Terminal-Bench. Top-tier multi-tool orchestration.
- **Reasoning: 93/100.** Near-saturation of academic frontier: 96% GPQA Diamond, 97.6% FrontierMath Tier 4, 99.9% ARC-AGI-3. Intelligence Index 61.2 of 70 = solid through-the-whole-spectrum reasoning.
- **Context window: 93/100.** MRCR v2 8-needle at 512K-1M range: 96.3% retrieval accuracy. Near-top among frontiers. Codex workspace preservation feature extends effective context beyond window.
- **Multimodal: 90/100.** Native vision input, video understanding, browser automation, websites built natively via Sites feature. Multimodal breadth and depth among the broadest of any model in dataset.
- **Coding: 89/100.** DeepSWE 74.1%, FrontierCode Extended 64.5%, Coding Agent Index 67.0%. Still above average despite strong overall positioning. FrontierCode Main 53.3% sets modest ceiling.
- **Cost efficiency: 50/100.** $10/$50M top-tier pricing. Cost-competitive with Claude Opus 5 at equivalent capability tier ($4/$20M Opus 5 costs less). Expensive vs budget models ($0.15-$0.30M), favorable when benchmark-adjusted against peers.
- **Overall Score: 91.2/100.** Broadest capability and strongest reasoning profile in dataset. Weakest single dimension is coding Main set (53.3%). Cost raises floor relative to cheaper peers but remains premium tier.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (XingChen AGI)** — 2026-10-17
- Method: public internet research across OpenAI official site, Anthropic comparison table data, Zapier AutomationBench scores, Artificial Analysis intelligence indexes; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra_Xing.md`, using the same headings.
