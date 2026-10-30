# GLM 5.1 — findings by GPT-6 Luna

- Source: Z.AI/GLM 5.1, `zai-org/glm-5.1`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1
- **Short description:** Z.ai's 744B/40B-active MIT MoE (200K) for multi-hour agentic coding; SWE-bench Pro 58.4%, Terminal-Bench 2.1 56.9% (Vals AI) - no -coding SKU ever existed.
- **Provider / access:** Z.AI API; OpenRouter.
- **Release / knowledge:** Released 2026-04-07; knowledge cutoff not stated.
- **IDs:** `opencode/glm-5.1` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 202,752 (200K-204,800 served); 128,000 max out
- **Modalities:** Text in/out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Paid $1.40/$4.40 per 1M in/out; $0.26 cached input (Zen price = Z.ai list price)
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
- **Overall Score: 61.6/100.** Half-up mean of the five non-cost quality dimensions: (68 + 70 + 64 + 40 + 66) / 5 = 61.6. Cost efficiency is excluded. best-fit for open-weight coding + reasoning at mid cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/zai-org/GLM-5.1)
  - [Source 2](https://docs.z.ai/guides/overview/pricing)
  - [Source 3](https://artificialanalysis.ai/models/glm-5-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
