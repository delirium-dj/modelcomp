# GLM 5.1 — findings by Beam

- Source: Z.AI/GLM 5.1, `zai-org/glm-5.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1
- **Short description:** Z.AI's reasoning model (Apr 7, 2026): 203K context. BenchLM 56.29 (#62 of 954). SWE-bench Pro 58.4%. Strong agentic (Terminal-Bench 2.0 63.5%, MCP Atlas 71.8%). Open weights (MIT). $1.40/$4.40 per 1M.
- **Provider / access:** Z.AI API; OpenRouter.
- **Release / knowledge:** Released 2026-04-07; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5.1`
- **Context window:** 203,000 tokens; max output 131,072.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $1.40 / 1M input, $4.40 / 1M output; paid.
- **Architecture:** MoE, 203K context, MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **43.5** (Estimated · #62/128)
- Terminal-Bench 2.0: **63.5%** (Z.AI)
- BrowseComp: **68%** (Z.AI)
- τ³-bench: **70.6%** (Z.AI)
- MCP Atlas: **71.8%** (Z.AI)
- CyberGym: **68.7%** (CyberGym leaderboard)
- Gert Labs: **60.11%** (Gert Labs)
- Claw-Eval: **62.3%** (BenchLM)
- HLE w/ tools: **52.3%** (Z.AI)
- DeepPlanning: **18.2%** (BenchLM)
- ResearchClawBench: **18.2%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **56.9%** (Vals AI)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **76.5** (Unranked · 2 rankable rows)
- GPQA-D: **86.2%** (Z.AI)
- GPQA Diamond (Vals): **84.5%** (Vals AI)
- MMLU-Pro (Vals): **86.9%** (Vals AI)
- HLE: **31%** (Z.AI)
- AA Intelligence Index: **26.1%** (Artificial Analysis)
- AA-GPQA Diamond: **86.8%** (Artificial Analysis)
- AA-HLE: **30.1%** (Artificial Analysis)
- AIME26: **95.3%** (Z.AI)
- HMMT Nov 2025: **94.0%** (Z.AI)
- HMMT Feb 2026: **82.6%** (Z.AI)
- MMAnswerBench: **83.8%** (Z.AI)
- FrontierMath v2 (Tiers 1-3): **36.842%** (Epoch AI)
- AA-IFBench: **76.3%** (Artificial Analysis)

Coding:

- Coding public-lane (BenchLM): **47.2** (Supported · #50/150)
- SWE-bench Pro: **58.4%** (BenchLM)
- Vibe Code Bench: **31.46%** (BenchLM)
- LiveCodeBench (Vals): **81.4%** (Vals AI)
- SWE-Rebench: **62.7%** (BenchLM)
- NL2Repo: **42.7%** (BenchLM)

Long context:

- 203K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 68/100.** Agentic lane #62/128 (43.5), Terminal-Bench 2.0 63.5%, BrowseComp 68%, MCP Atlas 71.8%, τ³-bench 70.6%, CyberGym 68.7%, HLE w/ tools 52.3%; caps at DeepPlanning 18.2%.
- **Reasoning: 70/100.** GPQA 86.8%, MMLU-Pro 86.9%, HLE 31%, AIME 95.3%, HMMT 82.6%, AA Intelligence 26.1%, FrontierMath 36.8%; caps at AA Intelligence 26.1%.
- **Context window: 64/100.** 203K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-bench Pro 58.4%, LiveCodeBench 81.4%, Vibe Code 31.46%, SWE-Rebench 62.7%, NL2Repo 42.7%, coding lane #50/150 (47.2); caps at Vibe Code 31.46%.
- **Cost efficiency: 86/100.** $1.40/$4.40 per 1M.
- **Overall Score: 61.6/100.** Mean of five quality dims (BenchLM 56.29); best-fit for open-weight coding + reasoning at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Z.AI official blog, BenchLM, Vals AI, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>