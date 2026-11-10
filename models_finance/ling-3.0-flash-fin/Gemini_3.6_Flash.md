# Ling 3.0 Flash Fin Free — findings by Gemini 3.6 Flash

- Source: InclusionAI / Ant Group (`opencode/ling-3-0-flash-fin-free`)
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin Free
- **Short description:** Specialized financial open-weights MoE model by Ant Group's InclusionAI lab (released August 2026); features a Hybrid-Linear MoE architecture (124B total / ~5.1B active parameters per token) combining Kimi Delta Attention (KDA) and Gated MLA layers for investment research, valuation modeling, and financial spreadsheet operations.
- **Provider / access:** OpenCode Zen (`opencode/ling-3-0-flash-fin-free`); Hugging Face (MIT open-weights). Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff late-2025.
- **IDs:** `opencode/ling-3-0-flash-fin-free`
- **Context window:** 262,144 tokens (~256K); verified via InclusionAI specifications and Artificial Analysis.
- **Modalities:** Text input, text output; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $0.00 / $0.00 per 1M input/output tokens (Free Zen tier); MIT License open-weights.
- **Architecture:** Open-weights MoE (124B total / ~5.1B active parameters per token); Hybrid-Linear MoE with KDA and Gated MLA layers.

### Raw benchmarks found

Agent / tool use:

- SpreadSheetBench-v1: **86.5%** (InclusionAI / llm-stats.com, 2026 — valuation & spreadsheet construction)
- Finance Agent v1.1: **69.2%** (InclusionAI / llm-stats.com, 2026 — financial workflow execution)
- Finance Agent v2: **59.8%** (InclusionAI / llm-stats.com, 2026)
- Tau3-Banking: **41.0%** (InclusionAI / llm-stats.com, 2026 — banking tool execution)
- APEX-Agents: **29.2%** (InclusionAI / llm-stats.com, 2026)
- GDPval-AA: **29.6%** (~1171 Elo; Artificial Analysis, September 2026)
- Terminal-Bench v4.0: **0%** (Artificial Analysis, September 2026 — complex multi-step terminal tasks)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Long Context Reasoning (AA-LCR): **73.7%** (Artificial Analysis, September 2026)
- Finance & Accounting Index: **24** (Artificial Analysis, September 2026)
- Artificial Analysis Intelligence Index: **22.6** (Artificial Analysis, September 2026)
- Humanity's Last Exam (HLE): **22.6%** (Artificial Analysis, September 2026)
- Physics Reasoning (CritPt): **2.6%** (Artificial Analysis, September 2026)
- GPQA Diamond: no verified public score found separately for Fin variant

Coding:

- Artificial Analysis Coding Index: **55.6** (Artificial Analysis, September 2026 — ranks better than 61% of models)
- SpreadSheetBench-v1: **86.5%** (formula and code-assisted data manipulation)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- 262,144 tokens (~256K) context window confirmed; AA-LCR: **73.7%** long-context reasoning.

### Normalized scores (1–100)

- **Tool use: 58/100.** High domain performance on SpreadSheetBench (86.5%), Finance Agent (69.2%), and Tau3-Banking (41.0%), offset by 0% on Terminal-Bench v4.0 and 29.2% on APEX-Agents. Scored 58 reflecting strong financial tool execution despite terminal limitations.
- **Reasoning: 52/100.** AA-LCR 73.7% is solid long-context reasoning; HLE 22.6% is decent for a specialized MoE; AA Intelligence Index 22.6; CritPt 2.6% is low. Scored 52.
- **Context window: 72/100.** 262,144 tokens (~256K) → 70–75 per tier mapping. Scored 72.
- **Multimodal: 15/100.** Text input and text output only. Per methodology: text-only = 15.
- **Coding: 56/100.** AA Coding Index 55.6 is mid-tier (better than 61% of models on AA leaderboard); SpreadSheetBench 86.5% demonstrates code/formula generation. Scored 56 based on AA Coding Index.
- **Cost efficiency: 100/100.** $0.00 / 1M input and output on Free Zen tier → 100.
- **Overall Score: 51/100.** Mean of (Tool 58 + Reasoning 52 + Context 72 + Multimodal 15 + Coding 56) / 5 = 253 / 5 = 50.6 → 51. Best-fit: specialized zero-cost model for financial analysis, valuation modeling, and spreadsheet workflows where terminal autonomy is not required.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-22
- Method: Public internet research (Artificial Analysis September 2026, InclusionAI benchmark release, llm-stats.com, BusinessWire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
