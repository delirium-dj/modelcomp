# DeepSeek V3.2 — findings by Laguna S 2.1

- Source: DeepSeek / DeepSeek V3.2
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2 (Non-reasoning)
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) unifying chat and deep reasoning, with sparse attention for long-context efficiency. Non-reasoning variant.
- **Provider / access:** Open weights on HuggingFace `deepseek-ai/DeepSeek-V3.2`; API via 10 providers; `opencode/deepseek-v3.2`
- **Release / knowledge:** Released December 1, 2025
- **IDs:** `opencode/deepseek-v3.2` (no Free ID on Zen per meta.json); HuggingFace `deepseek-ai/DeepSeek-V3.2`
- **Context window:** 164,000 total (8K-128K max output, provider-dependent) — per meta.json; AA reports 128K
- **Modalities:** Text in/out; hybrid thinking/reasoning, tool calls, structured JSON; no vision/audio
- **Pricing (as of 2026-10-08):** $0.28 per 1M input tokens, $0.42 per 1M output tokens (DeepSeek API; cached input $0.022)
- **Architecture:** 685B total parameters, 37B active (MoE); MIT license; open weights

### Raw benchmarks found

> BenchLM Overall 49.47/100, #96/887 models. AA Intelligence Index 16* (#16/46 open-weight large MoE). 18 of 623 benchmarks covered.

Agent / tool use:

- Claw-Eval: **40.2%** (source: Claw-Eval leaderboard)
- VITA-Bench: **18.5%** (source: VITA-Bench leaderboard)
- tau2-bench: **78.9%** (source: Artificial Analysis)
- Gert Labs: **29.57%** (source: Gert Labs rankings)

Coding:

- SWE-Rebench: **60.9%** (source: SWE-Rebench leaderboard)
- React Native Evals: **71.5%** (source: React Native Evals leaderboard)

Multimodal:

- Design Arena Website: **1181** (source: OpenRouter; not a typical accuracy metric)

Reasoning:

- AA-LCR: **45.7%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **0.9%** (source: Artificial Analysis)

Knowledge:

- Artificial Analysis Intelligence Index: **16.0%** (#16/46 open-weight large MoE)
- AA-GPQA Diamond: **75.1%** (source: Artificial Analysis)
- AA-HLE: **11.2%** (source: Artificial Analysis)
- AA-Omniscience Index: **-46.9%** (source: Artificial Analysis; hallucination concerns)
- AA-Omniscience Accuracy: **24.0%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **93.3%** (source: Artificial Analysis)
- AA-IFBench: **49.0%** (source: Artificial Analysis)

Mathematics:

- FrontierMath v2 (Tiers 1-3): **22.1%** (source: Epoch AI)
- FrontierMath v2 (Tier 4): **2.1%** (source: Epoch AI)

### Normalized scores (1–100)

- **Tool use: 45/100.** tau2-bench 78.9% is solid; Claw-Eval 40.2% and Gert Labs 29.57% are moderate. Limited coverage.
- **Reasoning: 46/100.** AA Intelligence Index 16* (below median 18); AA-GPQA 75.1% is good; AA-LCR 45.7% is moderate. II+30 adjustment: 16+30=46. Omniscience -46.9% shows reliability issues.
- **Context window: 60/100.** 164K tokens per meta.json places it in 164K tier (above 131K but below 256K).
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 55/100.** SWE-Rebench 60.9% and React Native Evals 71.5% are decent.
- **Cost efficiency: 92/100.** $0.28/$0.42 is very competitive for a 685B MoE model; better than median ($0.53/$1.94).
- **Overall Score: 44.2/100.** Mean of five quality dims (45+46+60+15+55)/5 = 48.2, rounds to 52. Best-fit use case: open-weight MoE model with good coding and agentic performance at very low cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
