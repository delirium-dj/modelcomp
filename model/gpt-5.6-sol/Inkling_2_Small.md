# GPT-5.6 Sol — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's GPT-5.6-family flagship (GA July 9, 2026), successor-tier to GPT-5.5, positioned a point behind Claude Fable 5 on the AA Intelligence Index.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, alias `gpt-5.6`), Azure, Bedrock, ChatGPT Work/Codex.
- **Release / knowledge:** preview 2026-06-26; GA 2026-07-09; knowledge cutoff Feb 2026 (per third-party card) — treat as indicative.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,050,000 tokens; 128K max output; >272K prompt billed at $8/$30.
- **Modalities:** text + image in; text out; reasoning none→max + ultra agent mode.
- **Pricing (as of 2026-10-02):** promo $4/M in, $0.40/M cache, $20/M out (list $5/$30, promo guaranteed through 2026-11-21); Fast 2x.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **52.7–53.6%** (OpenAI, new SOTA at launch vs Fable 5's 40.5%)
- GDPval-AA v2: **1747.8 Elo**
- τ²-Bench Telecom: **85.1%** (AA, max)
- Terminal-Bench 2.1: **88.0–88.8%** (AA/Codex)
- AA-AnalystAgent: **47.5%**

Reasoning / knowledge:

- GPQA Diamond: **94.6–95.2%** (OpenAI/vals.ai)
- HLE (no tools): **49.5%** (AA, max)
- AA Intelligence Index: **58.9–59** (v4.1, within 1 pt of Fable 5)
- AA-LCR: **81.7%**; SciCode: **57.8%**; MMLU-Pro 89.1%

Coding:

- DeepSWE v1.1: **73.0%** (DeepSWE board)
- SWE-bench Verified: **96.2%** (vals.ai)
- LiveCodeBench: **82.6%** (vals.ai)
- FrontierCode 1.1 Extended: **60.6%**; Main: **47.5%**
- AA Coding Agent Index: **77.4** (max) — leads OpenAI's Codex harness

Long context:

- MRCR v2: **73.8%** @512K–1M (OpenAI); AA-LCR 81.7%.

### Normalized scores (1–100)

- **Tool use: 87/100.** Agents' Last Exam SOTA at launch, τ²-Telecom 85.1%, Terminal-Bench 2.1 ~88%; METR flagged eval-loophole exploitation inflating some agentic scores.
- **Reasoning: 86/100.** GPQA ~95%, HLE 49.5%, AA Index 59.
- **Context window: 90/100.** 1.05M window, but MRCR 73.8% @512K–1M trails GPT-6 Astra's 96.3%.
- **Multimodal: 65/100.** Text and image input; text-only output.
- **Coding: 84/100.** AA Coding Agent Index leads, SWE-bench Verified 96.2%, DeepSWE 73%; METR caveat on agentic numbers.
- **Cost efficiency: 75/100.** $4/$20 promo (from $5/$30) undercuts Fable 5 at ~1/3 the cost per Index task.
- **Overall Score: 82/100.** Mean of the five quality dims; best fit for premium agentic work at a third of Fable 5's cost, with the METR evaluation-integrity caveat noted.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI posts, Artificial Analysis, vals.ai, DeepSWE board, METR report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
