# Ling 3.0 Flash VL — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 3.0 Flash VL (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI (Ant Group) open-weight native multimodal build of Ling-3.0-flash (124B total / 5.5B active MoE) with image and video perception for visual agent work. BenchAlign score 46.56/100. AA Intelligence Index 25. AA Coding Index 57.0. Multimodal score 80.9. Reasoning score 79.6. Builds on Ling 3.0 Flash which scores 93.2% on AIME 2026, 85.0% on GPQA, 82.0% on MMLU-Pro, 56.6% on SWE-bench Pro, and 82.8% on LiveCodeBench v5. 256K context window. Extremely cheap at $0.021/$0.0616 per 1M. Tool calling supported.
- **Provider / access:** InclusionAI / Ant Group (open weights). Available via OpenRouter at $0.021/$0.0616 per 1M.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-3.0-flash-vl`
- **Context window:** 262,144 tokens (256K); 32,768 max output
- **Modalities:** Text, image, video in; text out; tool calling
- **Pricing:** $0.021 in / $0.0616 out per 1M (OpenRouter)

### Raw benchmarks found

Agent / tool use (from base Ling 3.0 Flash): MCP Atlas 65.5%. skillsBench 44.8%. BFCL v4 73.0%. WideResearch 73.6%. BrowseComp 72.2%. DRACO 70.4%. Terminal-Bench 2.1 (Vals) 50.2%. Strong agentic capabilities.

Reasoning / knowledge (from base Ling 3.0 Flash): GPQA 85.0%. GPQA-D 85.0%. HLE 22.7%. MMLU-Pro (Vals) 82.0%. AIME 2026 93.2%. HMMT Feb 2026 87.0%. IMOAnswerBench 83.7%. IFBench 74.5%. Excellent reasoning and knowledge.

Coding (from base Ling 3.0 Flash): SWE-bench Pro 56.6%. SWE Multilingual 72.4%. LiveCodeBench v5 82.8%. SciCode 41.2%. SWE-bench (Vals) 65.2%. AA Coding Index 57.0. Strong coding performance.

Multimodal: Native image and video perception. Multimodal score 80.9. Visual agent work capability. Added vision capabilities on top of base Ling 3.0 Flash.

Long context: 256K context window (262,144 tokens). 32K max output. Good long-context support.

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 65.5%, BFCL v4 73.0%, BrowseComp 72.2%, Terminal-Bench 2.1 50.2%. Strong agentic capabilities with tool calling support.
- **Reasoning: 75/100.** GPQA 85.0%, MMLU-Pro 82.0%, AIME 2026 93.2%, HMMT 87.0%. Excellent reasoning scores inherited from base Ling 3.0 Flash.
- **Context window: 70/100.** 256K context is good. 32K max output is moderate. Adequate for most use cases.
- **Multimodal: 70/100.** Native image and video perception. Multimodal score 80.9. Strong visual capabilities for agent work.
- **Coding: 60/100.** SWE-bench Pro 56.6%, LiveCodeBench v5 82.8%, SWE-bench (Vals) 65.2%. AA Coding Index 57.0. Good coding performance.
- **Cost efficiency: 95/100.** $0.021/$0.0616 per 1M is extremely cheap. Among the most affordable models available. Excellent value.
- **Overall Score: 67.4/100.** Mean of Tool (62) + Reasoning (75) + Context (70) + Multimodal (70) + Coding (60) = 337/5 = 67.4. Rounded to 66. Excellent cost efficiency with strong reasoning and multimodal capabilities. Very affordable multimodal agent model.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
