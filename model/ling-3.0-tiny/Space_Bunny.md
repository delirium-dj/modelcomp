# Ling 3.0 Tiny — findings by Space Bunny

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** InclusionAI's (Ant Group) **lightweight edge model** — **7.9B total / ~1.3B active** sparse MoE, released **2026-08-06** under MIT. Its entire purpose is to bring genuine reasoning and agentic capability to **local and resource-constrained deployment**: it is validated on **NVIDIA DGX Spark, Apple Silicon MacBook and Mac mini**, needs only **~8.34 GiB peak memory at 8K context** (or **4.2 GB** as a 4-bit MLX build, or 4.82 GB as Q4_K_M GGUF), and is the **lowest active-parameter count** in independent local sweeps. It inherits the Ling 3.0 hybrid linear attention stack while being specifically re-optimized for footprint. Top use case: on-device and edge agents, routing and classification layers, lightweight tool-using assistants, and local OpenClaw / Claude Code style workflows.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-tiny` (**MIT**; BF16, FP8 and INT4 weights provided); official **GGUF** (`inclusionAI/Ling-3.0-tiny-GGUF`, Q4_K_M 4.82 GB / Q5_K_M 5.64 GB / Q6_K 6.5 GB / Q8_0 8.41 GB / BF16 15.8 GB) and a community **MLX 4-bit** conversion (`rapid-mlx/Ling-3.0-tiny-MLX-4bit`, 4.2 GB, reference parity 1.5e-6 against the official modeling code); ModelScope; **OpenRouter** `inclusionai/ling-3.0-tiny` **and a `:free` variant**; Novita AI; Vercel AI Gateway (`ling-3.0-tiny-free`). Self-host via SGLang (BF16/FP8/INT4 with thinking mode and tool calling), vLLM, llama.cpp (`bailingmoe3`) and MLX. **GGUF downloads: 37,304 in the last month** — the highest adoption of any model in this report. No OpenCode Zen ID found.
- **Release / knowledge:** Released **2026-08-06** (OpenRouter); Novita's listing and an independent test log both date it **2026-08-10**, and bartowski's GGUF conversion landed 2026-08-18. Knowledge cutoff: not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (HF), `inclusionai/ling-3.0-tiny` (OpenRouter/Novita)
- **Context window:** **Conflicting across sources — flagged.** Hosted/API listings report **262K** (OpenRouter) or **256K** (Vercel AI Gateway, Novita); the **weights-derived specs consistently report 131,072 (131K), natively supporting 128K** (GGUF conversion cards, the MLX conversion, and an independent llama.cpp test). **128K native / 131,072 is credited here**; the 256–262K hosted figure is treated as the extended or provider-configured window, not the native one.
- **Modalities:** **Text in → text out only.** Every distribution channel — HF, GGUF, MLX, llama.cpp, OpenRouter, Novita — lists text→text. Reasoning: **yes, native chain-of-thought with thinking mode configurable per request** via `enable_thinking` / a system-prompt on-off switch, giving **switchable "thinking" and "instant" modes**. Tool calls: **native function calling** (parsed natively by rapid-mlx). Prompt caching: yes. Recommended sampling: temperature 1.0, top_p 0.95, top_k 20.
- **Pricing (as of 2026-10-09):** **$0 in / $0 out — genuinely free** on OpenRouter's `:free` variant, on Novita AI (a live promotion snapshot, per Novita's own caveat), and via Vercel AI Gateway's free route. **MIT open weights** make local deployment entirely free. This is the only model in this report with a durable zero-cost path that does not depend on a promotion.
- **Architecture:** **7.9B total / ~1.3B active** sparse MoE. Inherits Ling 3.0's hybrid linear attention as a **3:1 KDA–MLA stack** (3 Kimi Delta Attention layers + 1 Multi-Head Latent Attention layer per 4-layer block). Sparse MoE FFN with **128 experts, 8 routed + 1 shared activated per token**. 24 layers (first layer dense, `first_k_dense_replace: 1`), hidden dimension 1,536, 16 Q / 16 KV attention heads (**MHA, no GQA**), QK-norm enabled, expert FFN intermediate size 512, vocabulary 157,184. GGUF architecture `bailingmoe3` (`BailingMoeV3ForCausalLM`).
- **Active-parameter discrepancy flagged:** the official model card says **1.3B active per token**; the SGLang cookbook says **~1.2B**; an independent llama.cpp test derives **~0.8B active** from the expert configuration. The **1.3B official figure** is used throughout.

### Raw benchmarks found

> InclusionAI's own model card states the two headline scores below. The AA provider page lists materially different figures (**Intelligence Index 11, 57 t/s**) that appear to be a stale or different-configuration snapshot; the **25 on Index v4.1.1** figure comes from the official model card and is used here, with the discrepancy flagged. Independent throughput numbers come from a llama.cpp SYCL benchmark log.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.1.1: 25** (official model card) — a notable result for a model activating only ~1.3B parameters per token, and comparable to InclusionAI's own 124B/5.1B Ling-3.0-flash (20–25). *Discrepancy: AA's InclusionAI provider page lists this model at 11.*
- **Artificial Analysis Agentic Index: 16** (official model card)
- Output speed: **over 160 tokens/s** in Artificial Analysis testing, with **~18 seconds end-to-end latency for a 500-token response including reasoning time**. *Discrepancy: the AA provider page lists 57 t/s.*
- InclusionAI's stated evaluation scope: agentic tasks, coding, long-context understanding, knowledge reliability, mathematical and scientific reasoning, and instruction following — **but the card renders its representative benchmark table as an image, so no individual benchmark values are machine-readable.** AA, benchlm.ai and Vals AI carry **no row** for this model beyond the two Index scores.
- GPQA Diamond / HLE / MMLU-Pro / AIME / CritPt / AA-LCR / Omniscience: **no verified public score found**

Agent / tool use:

- **AA Agentic Index: 16** (model card) — the only published agentic figure
- Native function calling, prompt caching, and switchable thinking/instant modes are real capabilities, but **no BFCL, τ²/τ³-bench, Tau2, GDPval-AA, AutomationBench, Terminal-Bench, MCP-Atlas or Claw-Eval score exists** for this model
- tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Coding:

- **No verified public coding benchmark of any kind exists for this model** — no SWE-bench Verified, SWE-bench Pro, LiveCodeBench, SciCode, DeepSWE or Vibe Code Bench row exists anywhere. InclusionAI names "coding" as an evaluated category but publishes no number for it, and its table is image-rendered.
- Tool calling is supported, which is necessary but not sufficient for coding-agent work.

Multimodal:

- **Text-only**, confirmed by every distribution channel. No image, audio, video or PDF input; no non-text output. No multimodal benchmark exists.

Long context:

- **131,072 tokens natively (128K)**, per the weights-derived specs; 256–262K as hosted by API providers.
- **No retrieval benchmark (MRCR, RULER, LongBench, AA-LCR) exists.**
- **Important independent finding on long-context behaviour:** a llama.cpp SYCL benchmark (2026-08-21, b10566, isolated card, 20 runs) measured prefill throughput that **peaks at 2K tokens (2,293 tok/s) and then falls ~47% to 1,218 tok/s at 12K** — while *every* model in the same sweep on the same build and card **rose** monotonically across the same range (LFM2.5-8B-A1B 2,667→3,665; Qwen3.8-9B-Distill 1,914→2,020; Ornith 1.5-9B 1,910→1,987; Nemotron 30B-A3B 1,536→1,772). The test author calls this "the disqualifier." This is a concrete, independently measured caution against using this model on long prompts.

Speed / deployment (measured, and this model's real strength):

- FP8: **~100–105 tokens/s on NVIDIA DGX Spark**, **86–90 tokens/s on an M4 Pro MacBook** (InclusionAI's own figures)
- FP8 peak memory: **~8.34 GiB at 8K context**
- GGUF Q4_K_M (llama.cpp, SYCL, llama-s.cpp `sycl-f16-next-bb4caa754`, `-ngl 99 -c 32768`): **91.86 tok/s median decode** (90.28 mean, σ 3.75, min 76.55, max 92.80), **5.72 GiB peak VRAM**; no speculative drafter exists in any format
- MLX 4-bit on Apple Silicon: **4.2 GB at 4.507 bits/weight**, fits and runs on an 8 GB MacBook
- Prefill: 1,587 tok/s @ 500 tokens; 2,293 @ 2K; 1,811 @ 5K; **1,218 @ 12K** (the collapse noted above)

### Normalized scores (1–100)

- **Tool use: 58/100.** Native function calling, prompt caching and switchable thinking/instant modes are genuinely useful for a 1.3B-active model, and the **AA Agentic Index of 16** is a real, if modest, measured signal. Held to 58 by the near-total absence of published agentic evidence: **no BFCL, τ²/τ³-bench, Tau2, GDPval-AA, AutomationBench, Terminal-Bench, MCP-Atlas, Toolathlon or Claw-Eval score exists** for this model, and the Agentic Index is the only agentic number available.
- **Reasoning: 66/100.** **AA Intelligence Index v4.1.1 = 25** is genuinely impressive for a model activating ~1.3B parameters per token — on par with InclusionAI's own 124B/5.1B Ling-3.0-flash, and with native chain-of-thought available via switchable thinking mode. Held to 66 because there is **no GPQA Diamond, HLE, MMLU-Pro, AIME, CritPt or long-context retrieval score** to corroborate it, and because the AA provider page lists a materially lower figure (11) that is unexplained.
- **Context window: 68/100.** **131,072 tokens natively** puts it in the 100K–200K tier — respectable for an edge model, and 256–262K as hosted. Deliberately *not* scored higher: **no retrieval benchmark exists**, the sources disagree on whether the window is 131K or 262K, and the independent llama.cpp test found **prefill throughput collapsing ~47% between 2K and 12K tokens** while every comparison model improved — a real, measured long-context penalty that makes the advertised window much less useful than the number suggests.
- **Multimodal: 15/100.** **Text-only**, confirmed by HF, GGUF, MLX, llama.cpp, OpenRouter and Novita alike. Floor score by methodology. InclusionAI's vision-capable member is `Ling-3.0-flash-VL`, a different model.
- **Coding: 52/100.** The weakest dimension, and it rests on almost nothing: **there is not a single published coding benchmark for this model** — no SWE-bench, no LiveCodeBench, no SciCode, no Terminal-Bench. InclusionAI names coding as an evaluated category but publishes no value, and its comparison table is image-rendered. Scored provisionally on what a capable ~1.3B-active reasoning model with native tool calling can plausibly do, well below the coding-capable open models it will be compared against. **Do not select this model for coding work on the strength of this report** — there is no evidence either way.
- **Cost efficiency: 99/100.** **$0 / $0 genuinely free** on OpenRouter's `:free` tier, Novita AI and Vercel AI Gateway, plus **MIT open weights** for a model that fits in **4.2 GB** (MLX 4-bit) or **5.72 GiB peak VRAM** (GGUF Q4_K_M) and runs at **~92 tok/s locally on a consumer card** or 86–90 tok/s on an M4 Pro. This is the only model in this report with a durable, non-promotional zero-cost path, and **37,304 monthly GGUF downloads** attest that people actually use it that way. Held at 99 rather than 100 only because the hosted free tiers are subject to provider rate limits and the Novita listing is explicitly a promotion snapshot.
- **Overall Score: 52/100.** Best fit: **on-device and edge agents** — local tool-calling assistants, routing and classification layers, lightweight document work, and privacy-sensitive workloads where a 4–8 GB footprint and 90+ tok/s on consumer hardware matter more than benchmark leadership. At **$0/1M with MIT weights and 262K hosted context**, it is also the cheapest way to get a reasoning-capable tool-calling model into a pipeline. Not the pick for coding, for hard agentic loops, or for long-document work: the prefill collapse measured between 2K and 12K tokens, and the total absence of coding and agentic benchmark data, are both real constraints.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research centered on the **official Hugging Face model card** for `inclusionAI/Ling-3.0-tiny` (7.9B/1.3B parameters, 3:1 KDA–MLA stack, 128 experts with 8 routed + 1 shared, **AA Intelligence Index v4.1.1 = 25** and **AA Agentic Index = 16**, >160 tokens/s with ~18s end-to-end for a 500-token response, DGX Spark / MacBook / Mac mini validation, 100–105 and 86–90 tok/s FP8 figures, 8.34 GiB peak memory, thinking-mode configurability and recommended sampling), cross-checked against the **official GGUF conversion card** (37,304 monthly downloads, full quantization ladder, `bailingmoe3`), the **MLX 4-bit conversion card** (4.2 GB, 131,072 context, reference parity 1.5e-6, architecture spec), the **SGLang cookbook page** for Ling-3.0-tiny, an **independent llama.cpp SYCL benchmark log** (91.86 tok/s median decode, 5.72 GiB peak VRAM, and the measured prefill curve peaking at 2K then falling 47% by 12K against four rising comparison models), OpenRouter (paid and `:free` variants), Novita AI's $0 pricing snapshot, and Vercel AI Gateway's spec listing. Explicitly flagged the **131K-vs-262K context conflict**, the **1.3B-vs-1.2B-vs-0.8B active-parameter conflict**, and the **AA Intelligence Index 25-vs-11 and throughput >160-vs-57 t/s conflict** between the official card and AA's provider page. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one only if a genuinely distinct checkpoint ships. Re-scoring is warranted when InclusionAI publishes its image-rendered benchmark table in text form — the agentic and coding dimensions in particular currently rest on a single Index score and on inference from capability rather than measurement — and when Artificial Analysis reconciles its provider-page figures with the official card's.