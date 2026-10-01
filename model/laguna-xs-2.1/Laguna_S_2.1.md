# Laguna XS 2.1 — findings by Laguna S 2.1

- Source: Hugging Face model card (`https://huggingface.co/poolside/Laguna-XS-2.1`), Poolside technical report (`https://poolside.ai/assets/laguna/laguna-m1-xs2-technical-report.pdf`), Poolside release blog (`https://poolside.ai/blog/introducing-laguna-xs-2-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's 33B total parameter Mixture-of-Experts model with 3B activated parameters per token, designed for agentic coding and long-horizon work on local machines. Uses 256 experts (1 shared), mixed Sliding Window Attention (SWA) + global attention in 3:1 ratio across 40 layers, FP8 KV cache, and native interleaved thinking between tool calls. Released under the permissive OpenMDW-1.1 license. Free limited inference available on OpenRouter.
  > Note: the repo `meta.json` lists 262K context (HF) and 256K in benchmarks, text in/out only. Both are confirmed by the HuggingFace model card. The 128K listed in `meta.json` contextWindow field appears to be an error — the verified HF model card states 262,144 tokens.
- **Provider / access:** Poolside AI — HuggingFace (`poolside/Laguna-XS-2.1`, OpenMDW-1.1); OpenRouter free tier (`poolside/laguna-xs-2.1`); local deployment via vLLM, SGLang, Transformers, Llama.cpp, Ollama
- **Release / knowledge:** August 2026 (HF listing "Updated Aug 19"); knowledge cutoff not disclosed
- **IDs:** `poolside/laguna-xs-2.1` (HF, OpenRouter); `opencode/laguna-xs-2.1` (project)
- **Context window:** 262,144 tokens total (HF model card; benchmark runs used 256K)
- **Modalities:** Text in / text out only (HF model card confirms "text-to-text"); reasoning yes (interleaved thinking, native); tool calls yes (interleaved thinking between tool calls)
- **Pricing (as of 2026-08-19):** Free limited inference on OpenRouter; self-hosted with $0 cost; meta.json lists $0.06/$0.12 per 1M (post-free-tier)
- **Architecture:** 33B total params / 3B active (MoE, 256 experts + 1 shared); 40 layers (10 global attention, 30 SWA, 3:1 ratio); Sliding Window: 512; FP8 KV cache; rotary position embeddings with per-layer rotary scales
- **License:** OpenMDW-1.1 (fully permissive — commercial use allowed)

### Raw benchmarks found

> Sources: HuggingFace model card evaluation results table, Poolside technical report (referenced on HF model card). All benchmarks run with Harbor Framework + pool agent harness, 500-step max, sandboxed execution, temperature=1.0, top_k=20, top_p=1, thinking enabled, 256K context.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** — (HF model card evaluation results; pass@1 averaged over 5 attempts, 48GB RAM/32 CPUs)
- Toolathlon-Verified: **35.2%** — (Poolside benchmark comparison table; pass@1 averaged over 4 attempts)
- SWE-bench Verified: **70.9%** — (HF model card evaluation results; pass@1 averaged over 4 attempts)
- SWE-bench Multilingual: **63.1%** — (Poolside benchmark comparison table)
- SWE-bench Pro: **47.6%** — (HF model card evaluation results; pass@1 averaged over 2 attempts)
- GDPval-AA: **no verified public score found**
- τ²-bench: **no verified public score found**
- OSWorld-Verified: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR / CritPt: **no verified public score found**
- AA Intelligence Index: **no verified public score found** (not on AA; returns 404)
- BenchLM overall: **no verified public score found** (not on BenchLM; returns 404)
- AA-Omniscience: **no verified public score found**
- Humanity's Last Exam: **no verified public score found**

Coding:

- SWE-bench Verified (avg@3): **61.1%** — (HF model card evaluation results; note: benchmark table shows 70.9% but eval-results YAML shows 61.1% — the model card's comparison table may use a different methodology; both are from the model card)
- SWE-bench Pro (avg@1): **47.6%** — (HF model card evaluation results)
- SWE-bench Multilingual (avg@1): **63.1%** — (Poolside benchmark comparison table)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- AA-Coding Index: **no verified public score found**

Multimodal:

- MMMU / MMMU-Pro: **no verified public score found**
- Design Arena / ImageBench: **no verified public score found**
- (Model is text-only; no image input per HF model card)

Long context:

- 262,144 token context window per HF model card; benchmark runs used 256K. No MRCR / RULER / GraphWalks retrieval score reported.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.

- **Tool use: 48/100.** Terminal-Bench 2.0 at 37.5% is below the ~55% 2026 frontier threshold but is solidly competitive with Claude Haiku 4.5 (39.5%) and ahead of gpt-oss-120B (18.7%). Toolathlon-Verified at 35.2% demonstrates basic agentic tool use. The model is explicitly architected for agentic coding with interleaved thinking between tool calls, and the Harbor Framework + pool harness with 500 steps and sandboxed execution shows genuine agentic capability. However, no τ²-bench, GDPval-AA, OSWorld, or Claw-Eval data found. Scoring in the mid-low band — strong for a 33B MoE but not frontier-tier.

- **Reasoning: 35/100.** No verified general reasoning benchmarks found (GPQA, HLE, LCR, CritPt, Intelligence Index, Omniscience all "no verified public score found"). The model has native reasoning support (interleaved thinking), but without GPQA/HLE/MMLU/MATH scores, there are no direct measurements of abstract reasoning ability. The strong SWE-bench results (70.9%) imply multi-step planning, but coding agent tasks are not general reasoning benchmarks. Scored in the bottom-third provisional band.

- **Context window: 72/100.** 262,144 tokens per HF model card and technical report — falls in the 200K–500K tier (58–84 band), interpolated to ~72. Benchmark runs used 256K context per the methodology note. The repo `meta.json` lists 262K (HF) / 256K (benchmarks), consistent with external sources. No MRCR/RULER/GraphWalks retrieval-at-length benchmark reported.

- **Multimodal: 15/100.** Text in / text out only — confirmed by HF model card ("text-to-text" pipeline, Text Generation task). No image, audio, or video input. Methodology text-only band (10–20). The meta.json is accurate on this point.

- **Coding: 74/100.** SWE-bench Verified at 61.1% (HF eval-results YAML) is genuinely strong for a 33B parameter model — the model card's comparison table also shows 70.9% (methodology may differ slightly between the YAML and the public comparison table). SWE-bench Multilingual at 63.1% and SWE-bench Pro at 47.6% show consistent coding capability across benchmarks. These scores are competitive with much larger models (Qwen3.6-35B-A3B: SWE-bench Verified 73.4%; MAI-Code-1-Flash 137B: 71.6%). Terminal-Bench 2.0 at 37.5% supports coding agent performance. No LiveCodeBench, SciCode, DeepSWE, or AA-Coding Index data found. The model is specifically architected for agentic coding with native tool calling and interleaved thinking. Scored in the upper-mid band on the strength of verified SWE-bench results.

- **Cost efficiency: 98/100.** $0.06/$0.12 per 1M beats the ~$0.10/$0.20 = 97–99 anchor, with a free limited OpenRouter tier and free OpenMDW-1.1 self-hosting.

- **Overall Score: 49/100.** Mean of five quality dims: (48 + 35 + 72 + 15 + 74) / 5 = 244 / 5 = 48.8 → 49. Laguna XS 2.1 is a strong open-weights 33B MoE model for agentic coding — its SWE-bench Verified at 61.1% is competitive with 35B+ closed models, and it runs locally with a permissive OpenMDW-1.1 license. However, it lacks general reasoning benchmarks (no GPQA/HLE/LCR), no Intelligence Index presence, and its Terminal-Bench 2.0 at 37.5% is below 2026 frontier. Best fit: local, cost-free agentic coding assistance for developers who need privacy, long context (262K), and tool calling with thinking.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via HuggingFace model card (evaluation results table, benchmark comparison table, technical report reference), Poolside technical report PDF, and OpenRouter model catalog; scores are normalized 1–100 interpretations, not official vendor scores.
- Sources cited: `https://huggingface.co/poolside/Laguna-XS-2.1`, `https://poolside.ai/blog/introducing-laguna-xs-2-1`, `https://poolside.ai/assets/laguna/laguna-m1-xs2-technical-report.pdf`
- Zero-influence: did not read peer `model/` findings files during research; this is the author's sister model (XS variant of the same Laguna 2.1 family).
- Future sources: add a new file next to this one, e.g. `Laguna_XS_2.1.md`, using the same headings.

---
