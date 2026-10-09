# Solar Open 2 — findings by LongCat 2.5 Preview

- Source: Upstage AI/Solar-Open2-250B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Korea's sovereign open-weight foundation model from Upstage AI, built for long-horizon agentic tasks. 250B-A15B MoE with hybrid attention (1 softmax + 3 linear) enabling 1M context. Leads comparable open models on MMLU-Pro, LiveCodeBench, and APEX-Agents. Strongest Korean-language performance of any model tested.
- **Provider / access:** Hugging Face (`upstage/Solar-Open2-250B` open weights), Upstage Console, OpenRouter. vLLM, SGLang, Transformers, Docker Model Runner compatible.
- **Release / knowledge:** 2026-07-22.
- **IDs:** `upstage/Solar-Open2-250B`
- **Context window:** 1,048,576 tokens (1M) — verified via Upstage, arXiv, Hugging Face.
- **Modalities:** Text input; Text output. Reasoning: yes. Tool calling: yes (long-horizon agent tasks, conversational tool use, coding, officework).
- **Pricing (as of 2026-10-09):** Free open weights under Upstage Solar License (commercial use permitted, fine-tuning and distillation allowed). API ~$0.92/1M blended (Spanvero estimate for predecessor).
- **Architecture:** 250B total / 15B active MoE, hybrid attention stack (1 softmax + 3 linear attention layers), 320 experts, no positional encoding, gated delta rule extended to negative eigenvalues. Custom Korean-efficient tokenizer (196,608 vocab). Trained on 12T tokens with selective weight transfer from Solar Open 1.

### Raw benchmarks found

Agent / tool use:

- APEX-Agents: **16.6%** (BenchLM)
- MCP Atlas: **58.2%** (BenchLM)
- Ko-GDPval: competitive with DeepSeek-V4-Pro (1.6T) at less than 1/6 size (Upstage)
- Long-horizon agent tasks: conversational tool use, coding, officework (arXiv)
- 12 domain specialists consolidated via Multi-teacher On-Policy Distillation (arXiv)

Reasoning / knowledge:

- MMLU-Pro: **86.2** (Upstage — vs Solar Open 1 80.4, Command A+ 79.0, Mistral Medium 3.5 81.2, MiMo-V2.5 84.6, DeepSeek-V4-Flash 85.9)
- GPQA-Diamond: **86.3** (Upstage — vs Solar Open 1 66.2, Command A+ 75.6, Mistral Medium 3.5 77.5, MiMo-V2.5 83.0, DeepSeek-V4-Flash 88.9)
- HMMT: **93.94** (Upstage — vs Solar Open 1 68.94)
- Korean average: **85.43** (Upstage — vs Solar Open 1 66.95, highest of any model compared)

Coding:

- LiveCodeBench: **92.4** (Upstage — vs Solar Open 1 56.49, highest among comparable models)
- SWE-bench Verified: **70.4%** (BenchLM)

Long context:

- Context window: **1,048,576 tokens** (1M) — verified via Upstage, arXiv, Hugging Face
- Hybrid attention stack: 1 softmax + 3 linear layers, no positional encoding
- Length Expansion stage: 0.9T tokens for 1M context

Multimodal:

- Text input only (Upstage, Hugging Face)
- No image, audio, or video input

### Normalized scores (1–100)

- **Tool use: 72/100.** APEX-Agents 16.6%, MCP Atlas 58.2%, Ko-GDPval competitive with DeepSeek-V4-Pro. Strong agentic capability with 12 domain specialists, but below frontier on complex agent tasks.
- **Reasoning: 82/100.** GPQA-Diamond 86.3%, HMMT 93.94%, MMLU-Pro 86.2%. Strong reasoning across math, science, and knowledge. Competitive with DeepSeek-V4-Flash and MiMo-V2.5.
- **Context window: 95/100.** 1M token context with hybrid attention. Among the largest context windows available, at ~1/4 the memory/compute of all-softmax.
- **Multimodal: 15/100.** Text-only input/output. No image, audio, or video support.
- **Coding: 82/100.** LiveCodeBench 92.4%, SWE-bench Verified 70.4%. Strong coding, leads comparable open models on LiveCodeBench.
- **Cost efficiency: 95/100.** Free open weights under Upstage Solar License (commercial use permitted). Exceptional value for a 250B model.
- **Overall Score: 69/100.** Mean of Tool (72), Reasoning (82), Context (95), Multimodal (15), Coding (82) = 346/5 = 69.2 → 69. Excellent open-weight model with 1M context, strong reasoning/coding, and leading Korean-language performance, but text-only.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
