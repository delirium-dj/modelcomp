# GPT-5.3 Codex — findings by Beam

- Source: OpenAI/GPT-5.3 Codex, `openai/gpt-5.3-codex`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's agentic coding model (Feb 24, 2026): 400K context, 128K output. SWE-bench Verified 85%, SWE-bench Pro 56.8%, Terminal-Bench 2.0 77.3%, LiveCodeBench 87.31%. BenchLM 60.47 (#54 of 954). AA Intelligence Index not reported. $1.75/$14.00 per 1M.
- **Provider / access:** OpenAI API `gpt-5.3-codex`; OpenRouter.
- **Release / knowledge:** Released 2026-02-24; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $1.75 / 1M input, $14.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **55.5** (Estimated · #41/128)
- Terminal-Bench 2.0: **77.3%** (OpenAI system card)
- OSWorld-Verified: **64.7%** (OpenAI system card)
- τ²-bench: **86%** (Artificial Analysis)
- Gert Labs: **57.47%** (Gert Labs)
- JobBench: **33.7%** (JobBench paper)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **83.1** (Unranked · 2 rankable rows)
- GPQA Diamond (Vals): not reported
- MMLU-Pro (Vals): not reported
- HLE: not reported
- AA Intelligence Index: not reported
- Vals Index: **68.99%** (Vals AI)

Coding:

- Coding public-lane (BenchLM): **53.5** (Supported · #35/150)
- SWE-bench Verified: **85%** (OpenAI system card)
- SWE-bench Pro: **56.8%** (OpenAI system card)
- SWE-Rebench: **58.2%** (SWE-Rebench leaderboard)
- Terminal-Bench 2.0: **77.3%** (OpenAI system card)
- Vibe Code Bench: **61.77%** (Vals AI)
- LiveCodeBench: **87.31%** (Vals AI)
- SWE-bench (Vals): **78.00%** (Vals AI)
- Terminal-Bench 2.0 (Vals): **64.05%** (Vals AI)

Long context:

- 400K window; MRCR: not reported.

Multimodal:

- Text/image in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic lane #41/128 (55.5), Terminal-Bench 2.0 77.3%, OSWorld 64.7%, τ²-bench 86%, Gert Labs 57.47%, JobBench 33.7%; caps at JobBench 33.7%.
- **Reasoning: 72/100.** Vals Index 68.99%; caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 70/100.** 400K window; caps at no published MRCR.
- **Multimodal: 68/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 74/100.** SWE-bench 85%, SWE-bench Pro 56.8%, LiveCodeBench 87.31%, Vibe Code 61.77%, Terminal-Bench 2.0 77.3%, coding lane #35/150 (53.5); caps at Vibe Code 61.77%.
- **Cost efficiency: 82/100.** Mid $1.75/$14.00 per 1M.
- **Overall Score: 71.2/100.** Mean of five quality dims (BenchLM 60.47); best-fit for mid-cost coding at mid cost. (Superseded by GPT-5.4 Codex.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI system card, BenchLM, Vals AI, LM Market Cap); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. GPT-5.3 Codex is superseded by GPT-5.4 Codex (Mar 2026). Sibling: GPT-5.3-Codex-Spark (ultra-fast, Cerebras).<|end|>>2>