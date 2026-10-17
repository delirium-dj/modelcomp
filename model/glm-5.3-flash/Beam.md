# GLM 5.3 Flash — findings by Beam

- Source: Z.AI/GLM 5.3 Flash, `zai-org/glm-5.3-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.AI's first natively multimodal GLM-5 model (Aug 26, 2026): 320B total / 18B active MoE, hybrid sparse+linear attention, 1M context, strong coding/agentic at very low cost. Approaches Claude Opus 4.8 on coding/agentic.
- **Provider / access:** Z.AI API `glm-5.3-flash`; OpenRouter; HuggingFace (open weights, MIT); NVIDIA NIM.
- **Release / knowledge:** Released 2026-08-26; knowledge cutoff not stated.
- **IDs:** `zai-org/glm-5.3-flash`
- **Context window:** 1,000,000 tokens; max output 131,072 (default 65,536).
- **Modalities:** text, image, video, file in; text out; reasoning yes (low/high/max); tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.15 / 1M input, $0.50 / 1M output (B.AI); $0.07/$0.25 (Vals). Very cheap.
- **Architecture:** 320B total / 18B active, MoE, hybrid sparse+linear attention, mHC, MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **57.2** (#36/128)
- Terminal-Bench 2.1: **84.3%**
- Toolathlon-Verified: **78.4%**
- AutomationBench v1.0.6: **48.8%**
- Agents' Last Exam: **26.3%**
- HLE w/ tools: **55.3%**
- GDPval-AA v2: **1773 Elo**
- OSWorld: not reported
- MCP Atlas: not reported

Reasoning / knowledge:

- Reasoning lane (BenchLM): **60.4** (unranked, 2 rows)
- HLE w/ tools: **55.3%**
- ARC-AGI / GPQA / MRCR: not individually reported
- AA Intelligence Index: not reported

Coding:

- Coding public-lane (BenchLM): **48.3** (#46/150)
- DeepSWE v1.1: **63.4%**
- NL2Repo: **56.3%**
- Terminal-Bench 2.1: **84.3%**
- SWE-bench: **92.00%** (Vals)
- LiveCodeBench: **80.51%** (Vals)
- Vibe Code Bench v1.1: **30.76%**
- Z.ai Code Bench v1.0: nearly matches Opus 4.8 (29.0 vs 29.5)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- OfficeQA Pro: **62.4%**
- CharXiv Reasoning with Tools: **89.4%**
- Chartography with Tools: **78.0%**
- BabyVision: **53.4%**
- MVBench: **77.8%**
- MMVU: **80.5%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #36/128 (57.2), Terminal-Bench 2.1 84.3%, Toolathlon-Verified 78.4%, AutomationBench 48.8%, GDPval 1773, HLE w/tools 55.3%; caps at Agents' Last Exam 26.3%.
- **Reasoning: 72/100.** HLE w/tools 55.3%; caps at no published ARC-AGI/GPQA/HLE (w/o tools).
- **Context window: 80/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 82/100.** Text/image/video/file in; CharXiv 89.4%, Chartography 78.0%, OfficeQA Pro 62.4%; caps at BabyVision 53.4%.
- **Coding: 76/100.** DeepSWE 63.4%, NL2Repo 56.3%, Terminal-Bench 2.1 84.3%, SWE-bench 92.0% (Vals); coding lane #46/150 (48.3).
- **Cost efficiency: 98/100.** Extremely cheap $0.07-$0.15 / 1M input.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 58.51); best-fit for cost-efficient agentic + multimodal coding.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Z.AI blog, Lambda, NVIDIA NIM, B.AI, Vals AI, BenchLM, AutoClaw); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.