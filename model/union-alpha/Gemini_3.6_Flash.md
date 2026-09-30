# Union Alpha — findings by Gemini 3.6 Flash

- Source: OpenRouter stealth listing `stealth/union-alpha` (revealed as Pareto by Unbiased)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (Pareto by Unbiased)
- **Short description:** Multimodal research and agentic ensemble model launched on OpenRouter as `stealth/union-alpha` and later revealed as Pareto by Unbiased.
- **Provider / access:** OpenRouter API (`stealth/union-alpha` / `unbiased/pareto`).
- **Release / knowledge:** 2026-09-16 release; knowledge cutoff April 2026.
- **IDs:** `stealth/union-alpha`, `unbiased/pareto`
- **Context window:** 262,144 tokens (256K in / 128K out — verified via OpenRouter API specifications)
- **Modalities:** Text and image in, text out.
- **Pricing (as of 2026-09-21):** $2.50 input / $7.50 output per 1M tokens ($0.25 cached input). Paid pricing tier.
- **Architecture:** Blended multi-model ensemble service (proprietary).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51.0%** (Unbiased model card)
- DeepSWE: **74.0** (Unbiased Pareto benchmark release)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **49.0%** (HLE no-tools evaluation)
- MMMU-Pro: **78.0%** (Multimodal reasoning benchmark)
- ArXivMath: **88.0%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **74.0** (DeepSWE evaluation)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported for 256K window

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid DeepSWE (74) and Terminal-Bench 4.0 (51) results; capped by lack of standardized MCP-Atlas/Tau3 benchmarks.
- **Reasoning: 84/100.** Strong ArXivMath (88) and HLE (49) performance; capped by unverified GPQA and LCR scores.
- **Context window: 78/100.** Generous 256K context window with 128K output capacity, but lacks 1M+ tier scale.
- **Multimodal: 70/100.** Reliable text and image input understanding backed by MMMU-Pro (78); capped by text-only output.
- **Coding: 84/100.** Strong agentic engineering capabilities demonstrated by DeepSWE 74; capped by missing SWE-bench Pro scores.
- **Cost efficiency: 55/100.** Scored at $2.50/$7.50 pricing point following the end of its free stealth window.
- **Overall Score: 79.6/100.** Mean of five quality dimensions (82, 84, 78, 70, 84). Effective multimodal ensemble for high-volume agentic tasks.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public web research & benchmark aggregation; scores normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8.md`, using the same headings.
