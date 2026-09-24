# Laguna S 2.1 — findings by Space Bunny Alpha

- Source: Poolside (`poolside/Laguna-S-2.1`; reasoning enabled)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's permissive open-weight MoE model for agentic coding, long-horizon terminal work, and 1M-token repositories.
- **Provider / access:** Hugging Face `poolside/Laguna-S-2.1`; Poolside/OpenRouter/Vercel routes; local vLLM, SGLang, TRT-LLM, llama.cpp, and Ollama serving. OpenCode Zen route is paid; no free ID.
- **Release / knowledge:** Poolside's model card links a release post dated 2026-07-21; knowledge cutoff not stated.
- **IDs:** `poolside/Laguna-S-2.1`; `laguna-s-2.1`; OpenRouter `poolside/laguna-s-2.1`.
- **Context window:** **1,048,576 tokens** (Poolside model card); maximum output is not specified precisely. Local Ollama builds may choose a smaller window, so the native model-card value is scored.
- **Modalities:** Text input/output; interleaved native reasoning, preserved thinking, and tool/function calls supported. No image, audio, or video input.
- **Pricing (as of 2026-09-24):** OpenMDW-1.1 weights are self-hostable; the reviewed paid API/Zen reference is approximately $0.10 input / $0.20 output per 1M tokens. Provider pricing varies; this is not a free tier.
- **Architecture:** MoE, 118B total / about 8B active; 256 routed experts (top-10) plus one shared expert, 48 layers with 12 global and 36 sliding-window attention layers; OpenMDW-1.1 fully permissive license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** with thinking; **60.4%** without thinking (Poolside official model card)
- Toolathlon Verified: **49.7%** (Poolside official model card)
- SWE Atlas Codebase QnA: **46.2%** (Poolside official model card)
- Tau3-Banking, GDPval-AA, Claw-Eval, MCP-Atlas, OSWorld, and exact SWE-bench Verified: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond, HLE, MMLU/MMLU-Pro, CritPt, AA Intelligence Index, and hallucination metrics: **no verified public exact value found for Laguna S 2.1**. Values from sibling Laguna XS 2.1 are not transferred.
- The model card demonstrates interleaved reasoning and preserved thinking, but this is a capability specification rather than a measured reasoning score.

Coding:

- SWE-bench Multilingual: **78.5%** (Poolside official model card)
- SWE-bench Pro (Public Dataset): **59.4%** (Poolside official model card)
- DeepSWE: **40.4%** with thinking; **16.5%** without thinking (Poolside's own harness; explicitly not directly comparable to frontier mini-swe-agent results)
- SWE-bench Verified and LiveCodeBench: **no verified public exact value found**
- SciCode, Vibe Code Bench, and AA Coding Index: **no verified public exact value found**

Long context:

- Native context: **1,048,576 tokens** (Poolside model card). No MRCR, RULER, or GraphWalks retrieval-at-length score was published.

Sources consulted: [Poolside Laguna S 2.1 model card](https://huggingface.co/poolside/Laguna-S-2.1), [raw model card](https://huggingface.co/poolside/Laguna-S-2.1/raw/main/README.md), and [BenchLM Laguna S 2.1](https://benchlm.ai/models/laguna-s-2-1), accessed 2026-09-24. The official model-card benchmark table is the primary source for the coding figures.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 70.2%, Toolathlon 49.7%, and SWE Atlas 46.2% support solid agent evidence; absent Tau3, GDPval, Claw, MCP, and OSWorld values cap the score.
- **Reasoning: 60/100.** Native reasoning is documented, but no exact GPQA, HLE, MMLU, or AA Index result is published for this ID; the score is conservative.
- **Context window: 94/100.** The verified 1,048,576-token window is top-tier, capped below 100 by the lack of a retrieval-at-length result.
- **Multimodal: 15/100.** The model is text-to-text only.
- **Coding: 78/100.** SWE-bench Multilingual 78.5%, SWE-Pro 59.4%, and Terminal-Bench 70.2% support strong coding; DeepSWE is lower on Poolside's non-comparable harness and exact LiveCodeBench/SWE-Verified values are missing.
- **Cost efficiency: 91/100.** Approximate $0.10/$0.20 paid pricing plus permissive self-hosting and many quantized variants offer excellent value, though no free Zen ID is available.
- **Overall Score: 64.4/100.** (75 + 60 + 94 + 15 + 78) / 5 = 64.4. Best fit: self-hosted agentic coding and long-context terminal work; pair with a multimodal model when vision is required.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Poolside's official model card and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
