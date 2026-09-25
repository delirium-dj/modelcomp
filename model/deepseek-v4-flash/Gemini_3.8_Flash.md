# DeepSeek V4 Flash — findings by Gemini 3.8 Flash

- Source: DeepSeek / DeepSeek-V4 (`deepseek/deepseek-v4-flash`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's high-efficiency frontier reasoning model featuring fast hybrid-attention architecture, 1M context window, and ultra-low inference costs.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`), Command Code, and OpenRouter.
- **Release / knowledge:** 2026-04-24 release (latest update July 2026); knowledge cutoff early 2026.
- **IDs:** `deepseek/deepseek-v4-flash`. No dedicated Zen Free tier.
- **Context window:** 1,000,000 tokens total (1M context window).
- **Modalities:** Text and code input; text, code, structured JSON, and tool-calling output. (Vision handled by separate Vision-exp variant).
- **Pricing (as of 2026-07):** Off-peak (17h/day): $0.15 / 1M input, $0.003 / 1M cache read, $0.60 / 1M output; Peak: $0.30 input / $1.20 output.
- **Architecture:** Sparse mixture-of-experts (MoE) with multi-head latent attention (MLA) and hybrid attention routing.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench (Telecom): **95.0%** pass^1 (evals.report, official Apr 2026)
- MCP-Atlas: **69.0%** pass rate (evals.report, verified Apr 2026)
- Terminal-Bench: **78.7%** (AA v4.3 / Command Code; 56.9% TB 2.0 on evals.report)
- GDPval: **1414** Elo (evals.report, official Apr 2026)

Reasoning / knowledge:

- AIME 2026: **95.83%** accuracy (evals.report, official Apr 2026)
- GPQA Diamond: **88.1%** accuracy (evals.report, verified Apr 2026; 90.8% AA v4.3)
- Artificial Analysis Intelligence Index: **46.5** (evals.report; 34.0 on AA v4.3)
- Humanity's Last Exam: **34.8%** accuracy (evals.report, verified Apr 2026)
- MathArena HMMT: **93.94%** accuracy (evals.report, official Apr 2026)
- AA-Omniscience Index: **-23** (evals.report, official Apr 2026)

Coding:

- SWE-bench Verified: **79.0%** resolved (evals.report, verified Apr 2026)
- SWE-bench Pro: **52.6%** resolved (evals.report, verified Apr 2026)
- Coding Index: **69.1** (Artificial Analysis v4.3, Jul 2026)
- SciCode: **44.9%** / **50.3%** accuracy (evals.report / AA v4.3)

Long context:

- 1M token context window with 79.7 long-context reasoning index on Artificial Analysis.

### Normalized scores (1–100)

- **Tool use: 86/100.** High-level tool coordination demonstrated by 95.0% on Tau2-Bench Telecom, 69.0% on MCP-Atlas, and 1414 Elo on GDPval.
- **Reasoning: 88/100.** Strong mathematical reasoning highlighted by 95.83% on AIME 2026 and 88.1% on GPQA Diamond, capped by a negative Omniscience index (-23) reflecting hallucination risks.
- **Context window: 90/100.** Full 1M token context window supported natively with high cache efficiency ($0.003 / 1M).
- **Multimodal: 20/100.** Text-only core model (multimodal tasks delegated to V4-Vision variant); minimal baseline score.
- **Coding: 88/100.** Excellent coding capabilities shown by 79.0% on SWE-bench Verified and 69.1 on Coding Index.
- **Cost efficiency: 97/100.** Groundbreaking economy at $0.15 / $0.60 per 1M tokens with ultra-cheap prompt cache reads.
- **Overall Score: 74/100.** Extremely cost-effective high-throughput model with elite coding and math reasoning, capped overall primarily by lack of native vision.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into verified vendor disclosures and independent benchmark reports; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
