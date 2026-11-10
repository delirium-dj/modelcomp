# Grok 4.1 — findings by Fledge Alpha

- Source: xAI (`grok-4.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (standard variant; Fast variants live under `grok-4-fast`)
- **Short description:** xAI's Nov 17, 2025 standard-tier reasoning model at $3/$15 — same rate card as Grok 4 but with better agent/tool rows (BFCL 69.6%, τ²-Bench Telecom 93.3%).
- **Provider / access:** xAI API (`grok-4.1`), OpenRouter (`x-ai/grok-4.1`), Azure; 256K context, max output 8K.
- **Release / knowledge:** 2025-11-17.
- **IDs:** `x-ai/grok-4.1`
- **Context window:** 256,000 tokens; max output appears to be 8K on the standard tier.
- **Modalities:** text/tools, text out; no native video/audio surface separate from Grok 4 baseline.
- **Pricing (as of 2026-10-02):** $3/M in, $15/M out; blended $18/1M; Grok 4.1 Fast is the separate budget lane at $0.20/$0.50.
- **Architecture:** Proprietary; post-Grok-4 patch tier, between Grok 4 (Jul 2025) and Grok 4.2/4.3 (2026).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom (AA): **93.3%** (thinking); BFCL Overall: **69.6%**
- APEX-Agents: 12.8%; Terminal-Bench Hard: 24.2%

Reasoning / knowledge:

- GPQA Diamond: **85.3%** (AA) / 84.3% (Vals, thinking)
- HLE: **19.3%** (AA); AA-LCR: 74.0% thinking; SimpleBench 56.0%
- IFBench row absent

Coding:

- Arena Code Elo: 1208#102; LiveCodeBench: 79.0 class via Vals row set; no SWE-bench Verified row published for this exact ID
- Cybench: 39.0 (Epoch AI)

Long context: 256K window; no MRCR row.

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Telecom 93.3% (thinking) and BFCL 69.6% are tier-best; Terminal-Bench Hard 24.2% caps it.
- **Reasoning: 66/100.** GPQA 85.3% with AA HLE 19.3% — close to era peers Sonnet 4.5; AA Coder Intelligence row absent.
- **Context window: 58/100.** 256K window is the same as Grok 4; below every current flagship's 1M class.
- **Multimodal: 60/100.** Text + image via the shared Grok 4 line; 8K max output discourages multimodal long-form work.
- **Coding: 56/100.** No SWE Pro/Verified row published for this exact ID; Arena Code Elo 1208 (#102 of 107) is the only hard public row.
- **Cost efficiency: 60/100.** Same $3/$15 as Grok 4 — Grok 4.1 Fast undercuts it ~10x on the same AA measurements.
- **Overall Score: 63/100.** Half-up mean of the five non-cost dims: (76+66+58+60+56)/5 = 63.2 → 63.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (BenchLeader page, anotherwrapper Grok-4.1 vs Grok-4.5, llmboard scorecard, FastReasoning TokenMix table); scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one using the same headings.
