# Qwen3.5-397B-A17B — findings by LongCat 2.5 Preview

- Source: Alibaba Qwen/Qwen3.5-397B-A17B
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's flagship open-weight natively multimodal foundation model, the first in the Qwen3.5 series. 397B total / 17B active MoE with hybrid Gated DeltaNet + Gated Attention. Early fusion training on trillions of text, image, and video tokens across 201 languages. Also known as "Qwen3.5-Plus" on hosted platforms.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.5-397b-a17b`), QwenCloud, DeepInfra, OpenRouter, Together AI, Novita AI, LLM Gateway. OpenAI-compatible API.
- **Release / knowledge:** 2026-02-16.
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (open weights), `qwen3.5-397b-a17b` (hosted)
- **Context window:** 262,144 tokens native; extensible to 1,010,000 via YaRN (verified via DeepInfra, QwenCloud, NVIDIA NIM).
- **Modalities:** Text, Image, Video input; Text output. Reasoning: yes (thinking mode). Tool calling: yes (function calling, MCP integration, structured outputs, web search, code interpreter, web extractor).
- **Pricing (as of 2026-10-09):** ~$0.45–0.60/1M input, ~$3.00–3.60/1M output (varies by provider; DeepInfra $0.45/$3.00, QwenCloud $0.60/$3.60). Apache 2.0 open weights for self-hosting.
- **Architecture:** 397B total / 17B active MoE, 60 layers, hybrid Gated DeltaNet (linear attention) + Gated Attention (full attention) in 3:1 ratio, 512 experts with 10 routed + 1 shared, hidden dimension 4096, vocabulary 248,320. Vision encoder for native image/video input.

### Raw benchmarks found

Agent / tool use:

- Agentic Index (ApX): **0.08 / #101**
- AutomationBench-AA: **7%** (Artificial Analysis)
- BrowseComp: **69.0%** (context-folding) / **78.6%** (discard-all) (DeepInfra)
- Function calling: supported (QwenCloud, DeepInfra)
- MCP integration: supported (DeepInfra)
- Web search, code interpreter, web extractor: supported (QwenCloud built-in tools)
- Terminal-Bench 4.0: **0%** (Artificial Analysis)

Reasoning / knowledge:

- Intelligence Index (ApX): **0.18 / #176**
- Intelligence Index (Artificial Analysis): **18**
- GPQA Diamond: **89.3%** (Doubleword) / **88.4%** (Alibaba)
- HLE: **29%** (Artificial Analysis)
- SuperGPQA: **70.4%** (Alibaba — vs GPT5.2 67.9%, Claude 4.5 Opus 70.6%, Gemini-3 Pro 74.0%)
- MMLU-Pro: **87.8%** (Alibaba — vs GPT5.2 87.4%, Claude 4.5 Opus 89.5%, Gemini-3 Pro 89.8%)
- MMLU-Redux: **94.9%** (Alibaba)
- AA-Omniscience: **31.4%** (Doubleword)
- CritPt: **2%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **76.4%** (Alibaba — vs GPT5.2 80.0%, Claude 4.5 Opus 80.9%, Gemini-3 Pro 76.2%)
- LiveCodeBench v6: **83.6%** (Alibaba — vs GPT5.2 87.7%, Claude 4.5 Opus 84.8%, Gemini-3 Pro 90.7%)
- SWE-bench Multilingual: **69.3%** (DeepInfra)
- SecCodeBench: **68.3%** (DeepInfra)
- Coding Index (ApX): **0.48 / #92**
- GDPval-AA v2.1: **780** (Artificial Analysis)
- AA-Briefcase v1.1: **555** (Artificial Analysis)
- GDP.pdf: **12%** (Artificial Analysis)

Long context:

- Context window: **262,144 tokens native; 1,010,000 with YaRN** (verified via DeepInfra, QwenCloud, NVIDIA NIM)
- AA-LCR: **65.7%** (Doubleword)
- 8.6×/19.0× decoding throughput vs Qwen3-Max at 32K/256K context (Alibaba)

Multimodal:

- Text, Image, Video input (QwenCloud, NVIDIA NIM)
- MMMU: **85.0%** (Alibaba — vs GPT5.2 86.7%, Claude 4.5 Opus 80.7%, Gemini-3 Pro 87.2%)
- MMMU-Pro: **79.0%** (Alibaba — vs GPT5.2 79.5%, Claude 4.5 Opus 70.6%, Gemini-3 Pro 81.0%)
- MathVision: **88.6%** (Alibaba — vs GPT5.2 83.0%, Claude 4.5 Opus 74.3%, Gemini-3 Pro 86.6%)
- Mathvista(mini): **90.3%** (Alibaba — vs GPT5.2 83.1%, Claude 4.5 Opus 80.0%, Gemini-3 Pro 87.9%)
- Long-form video understanding up to 2 hours (Alibaba)
- GUI interaction and sketch-to-code (Alibaba)

### Normalized scores (1–100)

- **Tool use: 62/100.** Agentic Index #101, AutomationBench 7%, Terminal-Bench 4.0 0%. Below average on agentic benchmarks despite function calling + MCP + web search support. Agentic capability is a relative weakness.
- **Reasoning: 78/100.** Intelligence Index 18, GPQA 89.3%, HLE 29%, SuperGPQA 70.4%. Good reasoning across math, science, and knowledge. Competitive with GPT-5.2 on some benchmarks.
- **Context window: 82/100.** 262K native context, 1M with YaRN. Good long-context capability with high throughput.
- **Multimodal: 85/100.** Text, Image, Video input. MMMU 85.0%, MMMU-Pro 79.0%, MathVision 88.6%. Strong native multimodal understanding with early fusion training.
- **Coding: 78/100.** SWE-bench Verified 76.4%, LiveCodeBench 83.6%, SWE-bench Multilingual 69.3%. Good coding, competitive with Claude Opus 4.5 on SWE-bench Verified.
- **Cost efficiency: 88/100.** ~$0.45-0.60/$3.00-3.60 per 1M tokens — affordable for a 397B model. Apache 2.0 open weights. 8.6×/19.0× throughput vs Qwen3-Max.
- **Overall Score: 77/100.** Mean of Tool (62), Reasoning (78), Context (82), Multimodal (85), Coding (78) = 385/5 = 77. Strong open-weight multimodal model with excellent reasoning and multimodal capabilities, but agentic tool use lags behind competitors.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
