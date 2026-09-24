# DeepSeek V4.1 Flash — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4.1-Flash`; max reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (Reasoning, Max Effort)
- **Short description:** DeepSeek's fast, open-weight, multimodal reasoning model for coding, tool use, and million-token agent workloads.
- **Provider / access:** Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`; DeepSeek API and multiple inference providers. Provider features include tool calling and, on several routes, structured output.
- **Release / knowledge:** Hugging Face metadata shows repository creation on 2026-09-10; no reliable knowledge cutoff was shown.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash`; API routes commonly use `deepseek-v4.1-flash` or provider-specific variants.
- **Context window:** 1M tokens (Artificial Analysis, accessed 2026-09-24). Exact output limit was not shown in the reviewed sources.
- **Modalities:** Text and image input; text output; reasoning and tool calls supported. Artificial Analysis explicitly reports no audio/video input for this model.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $0.30 per 1M input and $1.20 per 1M output tokens, with a 98% cache discount; provider pricing varies.
- **Architecture:** Open-weights MoE, approximately 552B total parameters and 16B active; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek V4.1 Flash model-card eval metadata, provider-exact)
- Toolathlon: **54.8%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- HLE with tools: **63.9%** (BenchLM, provider-exact DeepSeek V4.1 Flash model card)
- Agents' Last Exam: **31.8%**; CyberGym: **88.1%** (BenchLM, provider-exact model-card sources)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek V4.1 Flash Hugging Face model-card eval metadata)
- GPQA Graduate-Level: **90.9%** (BenchLM, provider-exact model-card source)
- HLE with tools: **63.9%**
- Artificial Analysis Intelligence Index: **39/100**, rank **#7/113** (Artificial Analysis, accessed 2026-09-24)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- DeepSWE: **74.2%** (DeepSeek V4.1 Flash model-card eval metadata; DeepSWE v1.1, official mini-swe-agent harness)
- Terminal-Bench 2.1: **90.6%**
- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- No independent retrieval-at-length result for this exact model was found. Artificial Analysis verifies a 1M-token context window.

Sources consulted: [DeepSeek V4.1 Flash Hugging Face model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash), [Artificial Analysis DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash), and [BenchLM DeepSeek V4.1 Flash](https://benchlm.ai/models/deepseek-v4-1-flash), accessed 2026-09-24. Benchmark harness and configuration labels are retained.

### Normalized scores (1–100)

- **Tool use: 95/100.** Terminal-Bench 90.6%, Toolathlon 54.8%, and explicit tool-call support provide strong agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 91/100.** GPQA 90.9%, HLE with tools 63.9%, and AA Index 39 support strong reasoning; missing LCR/CritPt values prevent a higher score.
- **Context window: 95/100.** The 1M-token context is verified, but no exact-model retrieval-at-length result was found.
- **Multimodal: 65/100.** Artificial Analysis verifies text and image input with text output; audio/video are not supported.
- **Coding: 93/100.** DeepSWE 74.2% and Terminal-Bench 90.6% are strong direct coding-agent measurements; exact SWE-bench, LiveCodeBench, and SciCode values are missing.
- **Cost efficiency: 90/100.** The reported $0.30/$1.20 price and 98% cache discount are excellent for a 1M-context reasoning model, though provider routes differ.
- **Overall Score: 87.8/100.** (95 + 91 + 95 + 65 + 93) / 5 = 87.8. Best fit: fast, low-cost coding agents and long-context multimodal workflows where image input is useful but text-only infrastructure is simpler.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official Hugging Face model-card metadata, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
