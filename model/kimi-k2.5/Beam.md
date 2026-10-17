# Kimi K2.5 — findings by Beam

- Source: Moonshot AI/Kimi K2.5, `moonshotai/kimi-k2.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight multimodal model (Jan 26, 2026): 1.04T total / 32B active, 256K context, native multimodal (text/image/video), strong coding + finance. #1 open-weight on Vals Index (63.9%).
- **Provider / access:** Moonshot API `kimi-k2.5`; AWS Bedrock; OpenRouter; HuggingFace (open weights).
- **Release / knowledge:** Released 2026-01-26; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.5`
- **Context window:** 262,144 tokens; max output 128,000 (Vals) / 256,000 (AWS).
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes; structured output yes. Open weights.
- **Pricing (as of 2026-10-17):** $0.60 / 1M input, $3.00 / 1M output; paid.
- **Architecture:** 1.04T total / 32B active, MoE, native multimodal (text/image/video), modified MIT license.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **40.7** (estimated #66/128)
- Terminal-Bench 2.0: **50.8%**
- BrowseComp: **60.6%**
- OSWorld-Verified: **63.3%**
- OSWorld 2.0: not reported
- Claw-Eval: **52.3%**
- QwenClawBench: **54.3%**
- τ³-bench: **65.7%**
- DeepSearchQA: **77.1%**
- DeepPlanning: **14.4%**
- Toolathlon: **27.8%**
- MCP Atlas: **29.5%**
- MCP-Tasks: **59.1%**
- WideResearch: **72.7%**
- Gert Labs: **45.88%**
- ResearchClawBench: **14.0%**
- JobBench: **8.7%**
- Vals Index: **47.81%** (#?/49) / 53.89%? (K2.6 is 53.89)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **72.2** (unranked, 3 rows)
- GPQA: **87.6%**
- MMLU-Pro: **87.1%**
- HLE: not reported (K2.5 Thinking 30.7% AA-HLE)
- AA Intelligence Index: **23.5%**
- AA-HLE: **30.7%**
- AIME 2025: **96.1%**
- AIME26: **95.8%**
- HMMT Feb 2025: **95.4%**
- HMMT Feb 2026: **87.1%**
- MMAnswerBench: **81.8%**
- LongBench v2: **61%**
- AA-LCR: **78.0%**
- CritPt: **3.1%**

Coding:

- Coding public-lane (BenchLM): **38.5** (estimated #68/150)
- SWE-bench Verified: **76.8%**
- SWE-bench Pro: **50.7%**
- LiveCodeBench v6: **85.0%**
- SWE Multilingual: **73%**
- SWE Multimodal: **28.1%**
- Vibe Code Bench: **17.54%**
- AA Coding Index: **46.8%**

Long context:

- 256K window; LongBench v2 61%, AA-LCR 78.0%.

Multimodal:

- Multimodal public-lane (BenchLM): **51.4** (estimated #75/184)
- MMMU: **84.3%**
- MMMU-Pro: **78.5%**
- RealWorldQA: **81.0%**
- OmniDocBench 1.5: **88.8%**
- Video-MME: **87.4%**
- Video-MME (w/o subtitle): **83.2%**
- MathVision: **84.2%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic lane #66/128 (40.7), Terminal-Bench 2.0 50.8%, BrowseComp 60.6%, OSWorld 63.3%, MCP Atlas 29.5%, DeepSearchQA 77.1%; caps at JobBench 8.7%.
- **Reasoning: 76/100.** GPQA 87.6%, MMLU-Pro 87.1%, HLE (AA 30.7%), AIME 96.1%, AA Intelligence 23.5%, AA-LCR 78.0%; caps at CritPt 3.1%.
- **Context window: 74/100.** 256K window; LongBench v2 61%, AA-LCR 78.0%.
- **Multimodal: 82/100.** Text/image/video in; MMMU 84.3%, MMMU-Pro 78.5%, Video-MME 87.4%, MathVision 84.2%.
- **Coding: 72/100.** SWE-bench Verified 76.8%, SWE-bench Pro 50.7%, LiveCodeBench 85.0%, Vibe Code 17.54%, coding lane #68/150 (38.5).
- **Cost efficiency: 86/100.** Cheap $0.60/$3.00 per 1M.
- **Overall Score: 75/100.** Mean of five quality dims (BenchLM aggregate 53.04); best-fit for cost-efficient multimodal agentic.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Moonshot/Kimi blog, BenchLM, Vals AI, AWS Bedrock, HuggingFace); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>