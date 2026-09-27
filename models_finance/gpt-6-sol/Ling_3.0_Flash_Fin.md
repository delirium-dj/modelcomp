# GPT-6 Sol — findings by Ling 3.0 Flash Fin

- Source: OpenAI (`opencode/gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (OpenAI)
- **Short description:** OpenAI's cost-efficient GPT-6 model for complex coding and agentic workflows, released September 22, 2026, delivering most of GPT-6 Astra's capability at a fraction of the cost.
- **Provider / access:** OpenAI API, ChatGPT Work, Codex. Chat Completions + Responses API with computer use, code interpreter, and hosted shell.
- **Release / knowledge:** 2026-09-22 (OpenAI launch post); knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-6-sol` (OpenRouter), `gpt-6-sol` (OpenAI API), `openai/gpt-6-sol` (HuggingFace)
- **Context window:** 1,050,000 total (1.05M); up to 128K output tokens
- **Modalities:** Text + image in, text out; computer use; reasoning enabled; tool calls; code interpreter; hosted shell
- **Pricing (as of 2026-09-24):** $2.00/1M input, $10.00/1M output (50% cheaper than GPT-5.6 Sol); cached input $0.20/1M

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- AutomationBench 1.0.6: **33.2%** at xhigh (OpenAI official, $0.27/task)
- Agents' Last Exam: **56.4%** at max effort (OpenAI official)
- OSWorld 2.0 (offline): **64.4%** at max effort (OpenAI official)
- OSWorld 2.0 (offline): **60.5%** at xhigh (OpenAI official)
- Codex harness Coding Agent Index: **57** (Artificial Analysis)
- FrontierCode 1.1 Main: **49.3%** at max effort (OpenAI official)
- Cost per Intelligence Index task: **$1.06** (Artificial Analysis, ~50% less than GPT-5.6 Sol)
- Factually error rate: **4.5%** at xhigh (OpenAI internal, lower is better)
- AutomationBench-AA: **62%** (Artificial Analysis, up from 60%)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** (Artificial Analysis, max effort)
- Factual error rate: **4.5%** (OpenAI internal, lower is better)
- AA Intelligence Index ~48 places it roughly level with GPT-5.6 Sol
- No published GPQA Diamond or HLE score specifically for GPT-6 Sol

Coding:

- DeepSWE v1.1: **68.8%** at max effort (OpenAI official)
- FrontierCode 1.1 Main: **49.3%** at max effort (OpenAI official)
- Terminal-Bench 4.0: **43%** (Artificial Analysis, up from 37%)
- SWE-Atlas-QnA: **58%** (Artificial Analysis, up from 54%)
- OSWorld 2.0 (offline): **64.4%** at max effort (computer use)
- DeepSWE v1.1 regression from GPT-5.6 Sol's 72.7%
- FrontierCode improvement over GPT-5.6 Sol (47.5% → 49.3%)
- LongBench v2: ~67.1% (from comparison table)

Long context:

- Context window: **1.05M tokens** (OpenAI API docs)
- Long context retrieval benchmarks not specifically published for GPT-6 Sol
- Capped by 4.5% factual error rate on difficult prompts

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 72/100.** Strong AutomationBench (33.2% at xhigh, beating Opus 5 at 26.9%), Agents' Last Exam (56.4% at max), OSWorld (64.4%), and good cost-efficiency on tasks. Weaker on FrontierCode (49.3%) and Terminal-Bench 4.0 (43%).
- **Reasoning: 68/100.** AA Intelligence Index at 48 places it roughly level with GPT-5.6 Sol, not a frontier reasoning model. Very low factual error rate (4.5%) is a strength. No published GPQA Diamond or HLE scores. Capped by being positioned as a cost-efficiency model rather than a reasoning peak.
- **Context window: 82/100.** 1.05M context window is very large, supporting long-horizon tasks. Capped by limited published long-context retrieval benchmarks specific to GPT-6 Sol.
- **Multimodal: 35/100.** Text + image input, text output; computer use supported. Not a truly multimodal model (no audio/video generation, no video input). Capped by primarily a text model with vision input.
- **Coding: 70/100.** Solid DeepSWE (68.8%), FrontierCode (49.3%), Coding Agent Index (57), OSWorld (64.4%). However, DeepSWE regressed from GPT-5.6 Sol's 72.7%. Strong on cost-efficiency-adjusted coding tasks.
- **Cost efficiency: 95/100.** $2/$10 per 1M tokens is 50% cheaper than GPT-5.6 Sol; $1.06 per Intelligence Index task is half the cost. AA cost per task of $1.06 is well below frontier competitors. The core value proposition.
- **Overall Score: 65/100.** Mean of the five non-cost dimensions (72 + 68 + 82 + 35 + 70) / 5 = 65.4, rounded half-up to 65. A cost-efficient coding and agentic model with good tool-use and large context, but not a peak reasoning model and with limited multimodal support.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via OpenAI launch post, Artificial Analysis, Emergent.sh, OpenAI API documentation, and third-party benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-sol/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gpt-6-sol/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
