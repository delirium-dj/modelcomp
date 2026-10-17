# Qwen 3.6 Plus — findings by Beam

- Source: Alibaba/Qwen 3.6 Plus, `alibaba/qwen-3.6-plus`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's hosted agent model (Apr 2, 2026): 1M context, multimodal (text/image/video), strong agentic coding (SWE-bench 73.4%, Terminal-Bench 2.0 61.6%), hosted-only (not open weights).
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.6-plus`; OpenRouter.
- **Release / knowledge:** Released 2026-04-02; knowledge cutoff not stated.
- **IDs:** `alibaba/qwen-3.6-plus`
- **Context window:** 984,000 tokens; max output 65,536.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.50 / 1M input, $3.00 / 1M output; paid.
- **Architecture:** proprietary; params not published (hosted-only).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **34.4** (#83/128)
- Terminal-Bench 2.0: **61.6%**
- Claw-Eval: **58.8%**
- QwenClawBench: **57.2%**
- τ³-bench: **70.7%**
- VITA-Bench: **44.3%**
- DeepPlanning: **41.5%**
- Toolathlon: **39.8%**
- MCP Atlas: **48.2%**
- MCP-Tasks: **74.1%**
- WideResearch: **74.3%**
- τ²-bench: **97.7%**
- Gert Labs: **50.60%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **74.7** (unranked, 4 rows)
- GPQA: **90.4%**
- SuperGPQA: **71.6%**
- MMLU-Pro: **88.5%**
- MMLU-Redux: **94.5%**
- C-Eval: **93.3%**
- HLE: **28.8%**
- AA Intelligence Index: **27.0%**
- AI-Needle: **68.3%**
- LongBench v2: **62%**
- AA-LCR: **78.3%**
- CritPt: **2.9%**

Coding:

- Coding public-lane (BenchLM): **40** (estimated #62/150)
- SWE-bench Verified: **78.8%**
- SWE-bench Pro: **56.6%**
- SWE Multilingual: **73.8%**
- LiveCodeBench v6: **87.1%**
- NL2Repo: **37.9%**
- Terminal-Bench 2.0: **61.6%**

Long context:

- 984K window; AA-LCR 78.3%.

Multimodal:

- Multimodal public-lane (BenchLM): **76.1** (#21/54)
- MMMU: **86.0%**
- MMMU-Pro: **78.8%**
- MathVision: **88.0%**

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #83/128 (34.4), Terminal-Bench 2.0 61.6%, MCP Atlas 48.2%, MCP-Tasks 74.1%, τ²-bench 97.7%, OSWorld not reported; caps at DeepPlanning 41.5%.
- **Reasoning: 76/100.** GPQA 90.4%, MMLU-Pro 88.5%, HLE 28.8%, AA-LCR 78.3%, AA Intelligence 27.0%; caps at CritPt 2.9%.
- **Context window: 84/100.** 984K window; AA-LCR 78.3%.
- **Multimodal: 84/100.** Text/image/video in; MMMU 86.0%, MMMU-Pro 78.8%, MathVision 88.0%.
- **Coding: 74/100.** SWE-bench Verified 78.8%, SWE-bench Pro 56.6%, LiveCodeBench 87.1%, coding lane #62/150 (40); caps at NL2Repo 37.9%.
- **Cost efficiency: 88/100.** Cheap $0.50/$3.00 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 53.78); best-fit for agentic + multimodal at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Alibaba Cloud, BenchLM, Vals AI, AgentConn, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.