# Qwen 3.8 — findings by Space Bunny Alpha

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-27B`; open-weight family)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (27B open-weight variant)
- **Short description:** Qwen's open model family for coding, professional work, research, and long-horizon agent execution, with native image/video input and configurable reasoning.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-27B`; OpenAI-compatible local serving through vLLM, SGLang, and TokenSpeed. A Qwen Cloud hosted version with 1M default context and built-in tools is announced as "coming soon" and was **not** available on 2026-09-29. The hosted model ID `qwen3.8`/`qwen3.8-max` is not interchangeable with the 27B checkpoint.
- **Release / knowledge:** The official Qwen repository identifies the 2026 Qwen3.8 series; the Hugging Face model card shows a publish date of 2026-08-13. No reliable knowledge cutoff was shown in the reviewed sources.
- **IDs:** `Qwen/Qwen3.8-27B`; family references include `Qwen3.8` and `Qwen3.8-Max`. Quantized community builds exist: `Qwen/Qwen3.8-27B-FP8`, `nvidia/Qwen3.8-27B-NVFP4`, `Inferact/Qwen3.8-27B-NVFP4`, `unsloth/Qwen3.8-27B-NVFP4`.
- **Context window:** **Changed since 2026-09-24.** The 2026-09-24 report cited only a 262,144-token serving example. The model card now states **262,144 tokens natively, extensible up to 1,000,000 tokens** via static YaRN RoPE scaling (`rope_type: yarn`, `factor: 4.0`, `original_max_position_embeddings: 262144`), supported by vLLM, SGLang, and TokenSpeed. Qwen advises halving `factor` to 2.0 for ~524K workloads, since static YaRN holds the scale factor constant and can hurt shorter inputs. Recommended within the 1M configuration: up to 262,144 reasoning tokens and 131,072 final-response tokens.
- **Modalities:** Text, image, and video input; text output; reasoning, tool calls, JSON/structured output, and OpenAI-compatible serving documented by the model card/repository.
- **Pricing (as of 2026-09-29):** Still no official per-token price for the self-hosted 27B checkpoint. The repository emphasizes local deployment; hosted Qwen3.8-Max pricing is not substituted for this checkpoint, and the Qwen Cloud hosted route remains unlaunched.
- **Architecture:** Open-weight 27B dense **hybrid-attention** model — linear attention on 48 of 64 layers, a vision tower, a built-in MTP (multi-token prediction) draft head, intermediate dimension 17,408, padded LM output 248,320. The 2026-09-24 report recorded it only as "dense model, parameter count approximately 27B by model name"; the architecture is now documented in the model card. An Apache-2.0 license was previously shown on Hugging Face; that was not re-confirmed in this pass.

### Raw benchmarks found

Agent / tool use:

- GPQA Diamond: **89.2%** (Qwen3.8-27B Hugging Face model-card eval result)
- DeepSWE: **42.2%** (Qwen3.8-27B Hugging Face model-card eval result)
- SWE-bench Pro: **61.7%** (Qwen3.8-27B Hugging Face model-card eval result)
- ExtractBench mean: **88.00%**; short **94.68%**, medium **87.54%**, long **38.45%** (Qwen3.8-27B model-card eval results)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathon, and MCP-Atlas: **no verified public exact value found**
- Artificial Analysis carries no page for this 27B checkpoint, so no AA v4.3.2 index, rank, output speed, or TTFT is available for it.

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen3.8-27B model-card eval result)
- Other exact HLE, LCR/MLCR, CritPt, AA-Omniscience, and hallucination values: **no verified public exact value found**

Coding:

- DeepSWE: **42.2%** (Qwen3.8-27B model-card eval result)
- SWE-bench Pro: **61.7%** (Qwen3.8-27B model-card eval result)
- ExtractBench mean: **88.00%** (structured extraction benchmark; not a substitute for code repair)
- LiveCodeBench, SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- **Changed since 2026-09-24.** Native context is **262,144** tokens, extensible to **1,000,000** with YaRN; serving guides show KV-cache headroom of roughly 377K–920K tokens at 262K context depending on precision and tensor-parallel degree. The extraction benchmark's long slice is the only published long-input datapoint and it is weak (**38.45%**), so extension to 1M is documented capacity, not validated retrieval quality. No independent retrieval-at-length score was found.

Sources consulted: [official Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8), [Qwen3.8-27B Hugging Face model card](https://huggingface.co/Qwen/Qwen3.8-27B), and [vLLM recipes — Qwen3.8-27B](https://recipes.vllm.ai/Qwen/Qwen3.8-27B), accessed 2026-09-29. Benchmark values are from the model's Hugging Face eval metadata; no peer findings were used.

### Normalized scores (1–100)

- **Tool use: 76/100.** Unchanged. The model supports tool calls and agent-oriented serving, and SWE-bench Pro 61.7% provides coding-agent evidence; exact Terminal-Bench, Tau, GDPval, and MCP values were unavailable.
- **Reasoning: 83/100.** Unchanged. GPQA Diamond 89.2% is strong for a 27B open model, while exact HLE, LCR, CritPt, and hallucination values were not found.
- **Context window: 90/100.** **Changed from 82.** Qwen now documents 262,144 native tokens extensible to 1,000,000 with a concrete YaRN configuration, which is a 1M-tier capacity. The score stops short of the top tier because the only published long-input result is weak (ExtractBench long 38.45%) and there is no independent retrieval-at-length measurement.
- **Multimodal: 90/100.** Unchanged. The official model card demonstrates image and video input examples with text output, and the architecture is now documented as carrying a vision tower.
- **Coding: 78/100.** Unchanged. SWE-bench Pro 61.7% and DeepSWE 42.2% support credible coding ability, but no SWE-bench Verified, LiveCodeBench, or SciCode value was found.
- **Cost efficiency: 88/100.** **Changed from 90.** Self-hosting/open weights still avoids a hosted token price, and the 27B dense footprint with a built-in MTP draft head keeps throughput reasonable. Reduced slightly because the Qwen Cloud 1M-context hosted route is still "coming soon" as of 2026-09-29, so no managed price is available and real infrastructure cost remains workload-dependent.
- **Overall Score: 83.4/100.** (76 + 83 + 90 + 90 + 78) / 5 = 83.4. **Changed from 81.8** — driven entirely by Context window 82 → 90 on the newly documented 1M extension. Best fit: self-hosted multimodal coding and agent workloads where open weights, local deployment, and Qwen tooling matter more than frontier hosted-model scores.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the official Qwen repository, Hugging Face model-card metadata, and vLLM serving recipes; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
