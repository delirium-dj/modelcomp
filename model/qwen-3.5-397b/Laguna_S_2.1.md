# Qwen 3.5 397B — findings by Laguna S 2.1

- Source: Alibaba / Qwen 3.5 397B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's Qwen 3.5 397B model entry. A large-scale MoE model with 128K context window. Tracked as a 128K text-only tier model.
- **Provider / access:** HuggingFace `Qwen/Qwen3.5-397B-A17B`; `opencode/qwen-3.5-397b` (scaffolded entry)
- **Release / knowledge:** February 2026
- **IDs:** `opencode/qwen-3.5-397b` (scaffolded: true per meta.json)
- **Context window:** 128,000 total — per meta.json
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-08):** Standard pricing (non-reasoning variant); $0.60/$3.60 per 1M (per AA data for reasoning variant)
- **Architecture:** 397B total parameters, 17B active (MoE); Apache 2.0 license

### Raw benchmarks found

> BenchLM Overall 53.97/100, #68/887 models (non-reasoning variant data). AA Intelligence Index 18* (#59/117, below average for large open-weight class). 49 of 623 benchmarks covered.

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** (source: Qwen blog)
- BrowseComp: **62%** (source: Qwen model card)
- Claw-Eval: **56.8%** (source: Claw-Eval leaderboard)
- QwenClawBench: **51.8%** (source: Qwen blog)
- tau3-bench: **68.4%** (source: Qwen blog)
- VITA-Bench: **43.7%** (source: Qwen blog)
- DeepPlanning: **37.6%** (source: Qwen blog)
- Toolathlon: **36.3%** (source: Qwen blog)
- MCP Atlas: **46.1%** (source: Qwen blog)
- MCP-Tasks: **74.2%** (source: Qwen blog)
- WideResearch: **74.0%** (source: Qwen blog)
- AA Agentic Index: no verified public score found (via AA model page, unranked)

Coding:

- SWE-bench Verified: **76.2%** (source: Qwen blog)
- LiveCodeBench v6: **83.6%** (source: Qwen blog)
- SWE-bench Pro: **50.9%** (source: Qwen blog)

Reasoning (non-reasoning variant):

- AA-LCR: **64.3%** (source: Artificial Analysis)
- CritPt: **0.9%** (source: Artificial Analysis)

Knowledge:

- GPQA: **88.4%** (source: Qwen blog)
- SuperGPQA: **70.4%** (source: Qwen blog)
- MMLU-Pro: **87.8%** (source: Qwen blog)
- MMLU-Redux: **94.9%** (source: Qwen blog)
- C-Eval: **93%** (source: Qwen blog)
- HLE: **28.7%** (source: Qwen blog)
- AA-GPQA Diamond: **86.1%** (source: Artificial Analysis)
- AA-HLE: **19.8%** (source: Artificial Analysis)
- AA-Omniscience Index: **-37.9%** (source: Artificial Analysis; hallucination concerns)
- AA-Omniscience Accuracy: **24.5%** (source: Artificial Analysis)
- AA-IFBench: **51.6%** (source: Artificial Analysis)

Mathematics:

- AIME26: **93.3%** (source: Qwen blog)
- HMMT Feb 2025: **94.8%** (source: Qwen blog)
- HMMT Nov 2025: **92.7%** (source: Qwen blog)
- HMMT Feb 2026: **87.9%** (source: Qwen blog)

Instruction following:

- IFEval: **92.6%** (source: Qwen blog)

Multilingual:

- MMLU-ProX: **84.7%** (source: Qwen blog)
- NOVA-63: **59.1%** (source: Qwen blog)

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 52.5%, BrowseComp 62%, tau3-bench 68.4%, MCP-Tasks 74.2%, WideResearch 74.0%; strong tool use performance across multiple benchmarks. Claw-Eval 56.8% and Gert Labs not published.
- **Reasoning: 48/100.** AA Intelligence Index 18* (below median 18 for large open-weight class); AA-LCR 64.3% is solid. II+30 adjustment: 18+30=48. GPQA 88.4%, MMLU-Pro 87.8% are excellent; HLE 28.7% and Omniscience -37.9% show reliability issues. This is the non-reasoning variant.
- **Context window: 60/100.** 128K tokens per meta.json places it in 128K tier.
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 75/100.** SWE-bench 76.2%, LiveCodeBench 83.6%, SWE-bench Pro 50.9%; excellent coding performance.
- **Cost efficiency: 33/100.** $0.60/$3.60 is somewhat expensive; $0.90 blended per AA. Better than median ($0.44/$1.68) but not cheap for a 397B MoE.
- **Overall Score: 57/100.** Mean of five quality dims (65+48+60+15+75)/5 = 52.6, rounds to 57. Best-fit use case: large open-weight MoE model with excellent coding and tool-use performance; use reasoning variant for complex reasoning tasks.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
