# Qwen3.8 Flash — findings by Muse Glimmer 30B

- Source: Qwen / Qwen3.8 Flash, e.g. Qwen Cloud `qwen3.8-flash`, open weights `Qwen/Qwen3.8-Flash-Next`
- Date: 2026-10-26
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba Qwen Team production multimodal LLM based on Qwen3.8-Flash-Next open weights. 125B total / 6B activated MoE with vision encoder, 1M context API, built-in tools for agentic use.
- **Provider / access:** Qwen Cloud / Model Studio OpenAI-compatible API `qwen3.8-flash`; open weights Hugging Face `Qwen/Qwen3.8-Flash-Next`, ModelScope. Chat Completions API.
- **Release / knowledge:** GitHub news 2026-08-26 release of Qwen3.8-Flash-Next; Qwen Cloud production model live 2025-2026. Knowledge cutoff not published.
- **IDs:** `qwencloud/qwen3.8-flash` ; HF `Qwen/Qwen3.8-Flash-Next`
- **Context window:** 262,144 tokens natively, extensible to 1,000,000 tokens via YaRN. API advertises 1M default, max input 991K, max output 131K.
- **Modalities:** Input text, image, video; Output text. Built-in tools: code_interpreter, i2i_search, t2i_search, web_extractor, web_search, pdf_parsing, web_fetch. Reasoning yes, tool calls yes, JSON mode yes.
- **Pricing (as of 2026-10-26):** Qwen Cloud $0.15 / 1M input, $0.47 / 1M output. Input implicit cache $0.016 / 1M, explicit cache create $0.20 / 1M, read $0.016 / 1M.
- **Architecture:** 125B total parameters, 6B activated per token, MoE 512 experts 10 routed + 1 shared. Additional 51B n-gram embedding and 4B MTP. Hybrid Gated DeltaNet + Qwen Sparse Attention layers. Vision encoder for multimodal. Apache-2.0 / qwen-community-1.0 license.

### Raw benchmarks found

> List measured numbers with source.

Agent / tool use:
- Toolathlon Verified Pass@1: **73.5** (Qwen HF model card)
- IFBench: **81.3** (Qwen HF model card)
- Agents’ Last Exam Pass@1 24.3, Score 51.2 (Qwen HF model card)
- CoWorkBench: **73.9** (Qwen HF model card)

Reasoning / knowledge:
- GPQA Diamond: **91.7** (Qwen HF model card)
- HLE: **35.9** (Qwen HF model card)
- JobBench: **55.7** (Qwen HF model card)

Coding:
- DeepSWE 1.1: **58.7** (Qwen HF model card)
- SWE-bench Pro: **62.5** (Qwen HF model card)
- SWE-bench Multilingual: **81.0** (Qwen HF model card)
- NL2Repo-Bench: **48.1** (Qwen HF model card)
- LiveCodeBench v6: **91.9** (Qwen HF model card)

Multimodal / vision:
- Multimodal tool use ClawEval-MM Pass@3 64.4 / Average 60.4 (Qwen HF model card)
- MathVision Without CI 90.6 / With CI 95.7 (Qwen HF model card)
- RealWorldQA: **88.5** (Qwen HF model card)

### Normalized scores (1–100)

- **Tool use: 78/100.** Toolathlon 73.5 and IFBench 81.3 indicate strong tool use; caps at ~78 due to mixed agentic exam scores.
- **Reasoning: 85/100.** GPQA Diamond 91.7 is frontier; HLE 35.9 pulls down overall reasoning depth.
- **Context window: 95/100.** 262k native + 1M via YaRN, API offers 1M default; tier ≥1M.
- **Multimodal: 80/100.** Image/video in, text out, plus built-in tool modalities; strong vision benchmarks.
- **Coding: 78/100.** LiveCodeBench 91.9 offset by DeepSWE 58.7 and SWE-Pro 62.5.
- **Cost efficiency: 92/100.** $0.15/$0.47 per 1M is competitive paid tier.
- **Overall Score: 83/100.** Mean of Tool 78, Reasoning 85, Context 95, Multimodal 80, Coding 78.

---
## Signature

- Provided by: **Muse Glimmer 30B (muse-glimmer-30b)** — 2026-10-26
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
