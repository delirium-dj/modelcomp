# GPT-5.6 Sol — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** Flagship member of OpenAI's GPT-5.6 family built for complex production workflows with stronger quality, token efficiency and visual/design judgment; designed for coding, knowledge work, cybersecurity and science.
- **Provider / access:** OpenAI API `openai/gpt-5.6-sol`, Chat Completions / Responses API via https://developers.openai.com/api/docs/models/gpt-5.6-sol
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff February 2026
- **IDs:** openai/gpt-5.6-sol
- **Context window:** 1.1M input tokens / 128K output tokens; BenchLM reports 1.05M context window. Verified via llm-stats and BenchLM.
- **Modalities:** Input text, image; output text; reasoning enabled; tool calls supported; JSON mode supported
- **Pricing (as of 2026-09-24):** $5.00 per 1M input, $0.50 per 1M cached input, $30.00 per 1M output via OpenAI
- **Architecture:** Proprietary; parameters undisclosed

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (benchlm.ai/models/gpt-5-6-sol, last updated 2026-09-23)
- Tau3-Banking / Tau2-Bench: τ²-bench **85.1%** (benchlm.ai/models/gpt-5-6-sol); AA Tau3 Banking **44.3%** (benchlm.ai/models/gpt-5-6-sol)
- GDPval-AA: **1735** Elo (benchlm.ai/models/gpt-5-6-sol; normalized 54.4%)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **58%** (benchlm.ai/models/gpt-5-6-sol); no verified public score found for MCP-Atlas / SWE Atlas Codebase QnA

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (benchlm.ai/models/gpt-5-6-sol)
- HLE: **54.5%** HLE-Verified (benchlm.ai/models/gpt-5-6-sol)
- LCR / MLCR: AA-LCR **84.0%** (benchlm.ai/models/gpt-5-6-sol); MLCR-AA **26.1%** (benchlm.ai/models/gpt-5-6-sol)
- CritPt: **32.3%** (benchlm.ai/models/gpt-5-6-sol)
- Artificial Analysis Intelligence Index / BenchLM overall: Artificial Analysis Intelligence Index **59** points max (artificialanalysis.ai/articles/gpt-5-6-has-landed, 2026-07-09); BenchLM overall **80.44/100** rank #5 of 507 (benchlm.ai/models/gpt-5-6-sol, 2026-09-23)
- Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (benchlm.ai/models/gpt-5-6-sol AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Pro **64.6%** (benchlm.ai/models/gpt-5-6-sol)
- LiveCodeBench: LiveCodeBench (Vals) **82.6%** (benchlm.ai/models/gpt-5-6-sol)
- SciCode / AA-SciCode: AA-SciCode **57.1%** (benchlm.ai/models/gpt-5-6-sol)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **72.7%** (benchlm.ai/models/gpt-5-6-sol); AA Coding Index **77.4%** (benchlm.ai/models/gpt-5-6-sol); SWE-bench (Vals) **96.2%** (benchlm.ai/models/gpt-5-6-sol)

Long context:

- no long-context retrieval reported (MRCR / RULER / GraphWalks not published for this exact ID)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 92/100.** Terminal-Bench 2.1 91.9% at frontier and GDPval Elo 1735 near frontier 1750+; capped by AA Tau3 Banking 44.3% <50% frontier.
- **Reasoning: 94/100.** GPQA Diamond 94.6%, HLE-Verified 54.5%, AA-LCR 84.0%, AA Intelligence Index 59 points; capped by CritPt 32.3% low.
- **Context window: 95/100.** 1.1M input ≥1M tier per llm-stats and BenchLM; no verified ≥98% retrieval at 512K+ published, so capped at 95.
- **Multimodal: 65/100.** Text + image in, text out; no video/audio input. Per methodology +image in =60-70.
- **Coding: 90/100.** DeepSWE 72.7% near frontier 74%+, AA-SciCode 57.1% ≥55%, AA Coding Index 77.4%; capped by SWE-bench Pro 64.6% <70% frontier.
- **Cost efficiency: 48/100.** $5/$30 pricing vs reference $3/$15≈60 and $10/$50≈30.
- **Overall Score: 87/100.** Mean of Tool 92 + Reasoning 94 + Context 95 + Multimodal 65 + Coding 90 = 87.2 → 87. Best-fit for high-capability professional work at premium price.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
