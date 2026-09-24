# Gpt 6 Sol — findings by Big Pickle

- Source: OpenAI/GPT-6 Sol (`gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's high-end "Sol" flagship within the GPT-6 family (with `gpt-6-astra` above it and a low-cost Luna sibling); a September 2026 refresh that cuts API prices ~50% vs GPT-5.6 Sol while holding close to its agentic-coder performance. Distinct entry from `gpt-5.6-sol` (Jul 2026) and `gpt-6-astra` (Sep 3, 2026).
- **Provider / access:** OpenAI API / Responses API (`gpt-6-sol`); on OpenCode Zen `opencode/gpt-6-sol` (Chat Completions-style endpoint).
- **Release / knowledge:** ~2026-09-21/22 (price-cut launch alongside `gpt-6-luna`, per The Decoder and Artificial Analysis); knowledge cutoff not publicly confirmed.
- **IDs:** `openai/gpt-6-sol`, `opencode/gpt-6-sol`
- **Context window:** 1,050,000 tokens input (~1.05M); max output 128,000 (family spec confirmed on the 5.6 Sol sibling and OpenAI catalog).
- **Modalities:** text + image input (file input supported); text output; reasoning by effort level; native tool calling. Video input not supported.
- **Pricing (as of 2026-09-24):** $2.00 / $10.00 per 1M input/output tokens (llm-stats); cached input $0.20/1M (90% cache-read discount, OpenAI). Paid only.
- **Architecture:** proprietary; weights private, parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **43%** (Artificial Analysis Coding Agent Index, Codex harness; up from 37% for GPT-5.6 Sol)
- SWE-Atlas-QnA: **58%** (AA Coding Agent Index harness; up from 54% for GPT-5.6 Sol)
- Artificial Analysis Coding Agent Index: **57** (Codex harness, max effort; +2 vs GPT-5.6 Sol)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt: no verified public score found for GPT-6 Sol
- Proxy (provisional, sibling model): GPT-5.6 Sol GPQA Diamond **94.6%** (BenchLM) — OpenAI did not publish general-reasoning numbers for the 5.6 line either

Coding:

- DeepSWE v1.1: **68.8%** at max effort (The Decoder, OpenAI-reported layout); **66.6%** at "xhigh" for ~$1.00/task
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for GPT-6 Sol
- Proxy (provisional, sibling model): GPT-5.6 Sol SWE-bench Verified **96.2%** (Vals), Terminal-Bench 2.1 **85.8%** (Vals) / **91.9%** (BenchLM), Vibe Code Bench **80.5%** (Vals)

Long context:

- No verified long-context retrieval (MRCR/RULER/GraphWalks) for GPT-6 Sol; sibling GPT-5.6 Sol MRCR **91.5%** at ~1M (provisional). 1.05M window documented in OpenAI catalog.

### Normalized scores (1–100)

- **Tool use: 85/100.** Verified Terminal-Bench 4.0 43% (newer/harder than TB 2.1 generational jump) plus SWE-Atlas-QnA 58% and Coding Agent Index 57 place it at the frontier agent tier; no GDPval/Tau3 to polish it to the 90+ band.
- **Reasoning: 82/100.** No GPT-6 Sol general-reasoning rows published; scored off the family's standing reasoning/agentic results (5.6 Sol GPQA 94.6% proxy) and its #1-ranked agent reasoning — explicitly provisional until GPQA/HLE rows exist for this exact ID.
- **Context window: 98/100.** Full 1.05M window with 128K output (≥1M tier); not 100 because GPT-6 Sol has no independently verified ≥98% retrieval at 512K+.
- **Multimodal: 68/100.** Text + image/file input with text output (image-in per methodology 60–70); no video input, no non-text output.
- **Coding: 82/100.** DeepSWE 68.8% at max effort is strong but below the 74%+ DeepSWE frontier; Coding Agent Index 57 and TB 4.0 43% are elite-tier agentic-coding credentials, so a high-mid score rather than frontier.
- **Cost efficiency: 82/100.** $2.00/$10.00 per 1M with $0.20 cached reads, plus ~$2.99/task on the Coding Agent Index (~50% cheaper than GPT-5.6 Sol max) — a strong Pareto-lead value proposition (methodology: ~$3/$15 ≈ 60, adjusted up for the per-task lead).
- **Overall Score: 83/100.** Mean of five quality dims (85+82+98+68+82)/5 = 83.0. Best fit: affordable high-end agentic coder where GPQA/HLE haven't been published yet — verify against first-party eval cards as they land.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (The Decoder, Artificial Analysis, llm-stats, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.