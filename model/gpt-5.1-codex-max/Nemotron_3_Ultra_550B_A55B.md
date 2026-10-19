# GPT-5.1 Codex Max — findings by Nemotron 3 Ultra 550B A55B

- Source: OpenAI (`gpt-5.1-codex-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Max (Reasoning)
- **Short description:** OpenAI's coding-specialized GPT-5.1 variant with strong LiveCodeBench (83.6% Vals), 400K context, at $1.25/$10 pricing.
- **Provider / access:** OpenAI API (`gpt-5.1-codex-max` via `https://api.openai.com/v1/responses`), OpenCode Zen (`opencode/gpt-5.1-codex-max` via `https://opencode.ai/inference/openai/v1/responses`), Azure OpenAI. Responses API (not Chat Completions).
- **Release / knowledge:** 2026 (estimated); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.1-codex-max` (OpenAI API), `opencode/gpt-5.1-codex-max` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 400,000 tokens total (400K per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $1.25/M in, $0.125/M cache read, $10.00/M out (OpenCode Zen). No cache discount reported on AA.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **83%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis)
- HLE: **25.7%** (Artificial Analysis)
- AA Intelligence Index: **23.7%** (Artificial Analysis)
- AA LCR: **69.3%** (Artificial Analysis)
- CritPt: **5.7%** (Artificial Analysis)
- AA Omniscience Index: **-6.5%** (Artificial Analysis)
- AA Omniscience Accuracy: **39.9%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **77.2%** (Artificial Analysis)
- AA IFBench: **70.0%** (Artificial Analysis)

Coding:

- LiveCodeBench (Vals): **83.6%** (Vals AI leaderboard)
- Vibe Code Bench: **22.17%** (Vals AI)

Multimodal:

- AA MMMU-Pro: **72.5%** (Artificial Analysis)

Long context:

- AA LCR: **69.3%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** Tau2 83% (strong structured tool use). No TB 2.0/2.1/4.0, GDPval, OSWorld, MCP Atlas, Toolathlon, BrowseComp data. Capped by minimal agentic benchmark coverage.
- **Reasoning: 55/100.** GPQA Diamond 86.0% (near 90%+ frontier), AA LCR 69.3%, AA IFBench 70.0%. Capped by HLE 25.7% (below 40%+ frontier), AA Intelligence Index 23.7% (<60 frontier), CritPt 5.7%, AA Omniscience Index -6.5% (negative), Hallucination 77.2%.
- **Context window: 55/100.** 400K native context; AA LCR 69.3%. Methodology: 200K-500K = 65-84 (at lower end).
- **Multimodal: 60/100.** Text + image input only; MMMU-Pro 72.5%. No video, audio, PDF input. Methodology: +image in = 60-70.
- **Coding: 70/100.** LiveCodeBench 83.6% (Vals, strong). No SWE-bench/DeepSWE/LiveCodeBench/FrontierCode/CursorBench data. Capped by Vibe Code 22.17%, minimal coding benchmark coverage.
- **Cost efficiency: 80/100.** $1.25/$10 per 1M. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $1.25/$10 interpolates to ~80.
- **Overall Score: 58/100.** Half-up mean of (50 + 55 + 55 + 60 + 70) / 5 = 58.0 → 58. Best-fit: coding-specialized model with strong LiveCodeBench; limited context (400K), weak HLE/GDPval, and minimal agentic benchmarks limit general use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across BenchLM and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.