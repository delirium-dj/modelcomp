# Kimi K2.6 — findings by Beam

- Source: Moonshot AI/Kimi K2.6, `moonshotai/kimi-k2.6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight multimodal model (Apr 20, 2026): 262K context, long-horizon coding, UI/UX generation, multi-agent orchestration. #1 open-weight on Vals Index (63.9%).
- **Provider / access:** Moonshot API `kimi-k2.6`; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff January 2025.
- **IDs:** `moonshotai/kimi-k2.6`
- **Context window:** 262,144 tokens; max output 256,000 (OpenCode: 262K).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.95 / 1M input, $4.00 / 1M output (OpenCode $0.74/$3.72); paid.
- **Architecture:** open weights; params not published (2.8T-class family).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **44.3** (#59/128)
- Terminal-Bench 2.0: **66.7%**
- BrowseComp: **83.2%**
- OSWorld-Verified: **73.1%**
- OSWorld 2.0: **4.6%**
- Claw-Eval: **62.3%**
- Toolathlon: **50%**
- MCP Atlas: **55.9%**
- DeepSearchQA: **92.5%**
- WideResearch: **80.8%**
- Gert Labs: **56.82%**
- ResearchClawBench: **18.0%**
- JobBench: **8.7%**
- Vals Index: **53.89%** (#7/49)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **76.8** (#4/12)
- GPQA: **90.5%**
- GPQA-D: **90.5%**
- HLE: **34.7%**
- MMLU-Pro: not reported for K2.6 (K2.5 83.3%? no)
- AA Intelligence Index: not reported
- AIME26: **96.4%**
- HMMT Feb 2026: **92.7%**
- MMAnswerBench: **86.0%**

Coding:

- Coding public-lane (BenchLM): **43.2** (#58/150)
- SWE-bench Verified: **80.2%**
- LiveCodeBench v6: **89.6%**
- SWE-bench Pro: not reported for K2.6
- SWE Multilingual: not reported
- SWE-bench (Vals): **76.20%**
- Terminal-Bench 2.1: **53.56%** (Vals)

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **73.8** (#27/54)
- MMMU-Pro: **79.4%**
- MMMU-Pro w/ Python: **80.1%**
- CharXiv: **80.4%**
- MathVision: **87.4%**
- V*: **96.9%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #59/128 (44.3), Terminal-Bench 2.0 66.7%, BrowseComp 83.2%, OSWorld 73.1%, MCP Atlas 55.9%, DeepSearchQA 92.5%; caps at JobBench 8.7%.
- **Reasoning: 78/100.** GPQA 90.5%, HLE 34.7%, AIME 96.4%, HMMT 92.7%, reasoning lane #4/12 (76.8); caps at no published ARC-AGI.
- **Context window: 74/100.** 262K window; caps at no published MRCR.
- **Multimodal: 84/100.** Text/image/video in; MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4%.
- **Coding: 76/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6%, coding lane #58/150 (43.2); caps at no SWE-bench Pro.
- **Cost efficiency: 88/100.** Cheap $0.95/$4.00 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 58.4); best-fit for cost-efficient agentic + multimodal coding (open weights).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Moonshot/OpenCode data, BenchLM, Vals AI, Kilo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.