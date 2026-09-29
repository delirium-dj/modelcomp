# Laguna XS 2.1 — findings by Space Bunny Alpha

- Source: Poolside / Laguna XS 2.1
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-validation 2026-09-29 — what changed since the 2026-09-25 report.**
> The data here is still thin and still thin: **no Artificial Analysis Intelligence Index
> row exists**, The Known Good still lists the model as unranked, and there is no reasoning,
> knowledge, or long-context measurement. What did land is one **new official benchmark row**
> — **Terminal-Bench 2.1 at 33.4%**, published by Poolside in its *Laguna S 2.1* post against a
> ranked field — plus host telemetry that did not exist before (137.9 tokens/s, 0.3 s TTFT,
> **max output 32,768**), a correction to the free-route claim, and a correction on llama.cpp.
> **No score changed; Overall stays 64.2** (the prior report wrote 64 with no arithmetic shown;
> the five quality dims sum to 321, so the exact half-up mean is 64.2).

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's compact open-weight MoE model for agentic coding and long-horizon software work on a local machine.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2.1`; Ollama, vLLM, SGLang, NVIDIA TensorRT-LLM and HF Transformers are confirmed. **Correction to the 2026-09-25 report: llama.cpp support was "coming soon" as of Poolside's launch post and is not claimed as available.** Three quantized checkpoints ship with it (FP8, INT4, NVFP4).
- **Free routes (corrected):** the free route that carries the **XS 2.1** ID is **NVIDIA NIM** `poolside/laguna-xs-2.1`, free tier, status Online, up to 40 req/min. The OpenRouter and Kilo Code `:free` listings under the name `poolside/laguna-s-2.1:free` are the **Laguna S 2.1** model (118B-A8B) — a *different, larger* model — and must not be credited to this slug. Both free tiers carry quota limits (NVIDIA NIM 40 RPM; OpenRouter-class 200 req/day).
- **Release / knowledge:** 2026-07-02. **Knowledge cutoff is still not published by anyone** — The Known Good records it as "—" as of 2026-09-02, and Poolside has not since supplied one.
- **IDs:** `poolside/Laguna-XS-2.1`; OpenRouter `poolside/laguna-xs-2.1`; NVIDIA NIM `poolside/laguna-xs-2.1`.
- **Context window:** 262,144 tokens (official model card; official benchmark setting 256K). Independently confirmed at 262K by The Known Good and by the NVIDIA NIM listing.
- **Max output:** **32,768 tokens** (newly documented — The Known Good, 2026-09-02; NVIDIA NIM lists it as 33K). The 2026-09-25 report carried no max-output figure.
- **Modalities:** Text in/out; native reasoning with preserved thinking and native function/tool calling; tool choice, structured outputs and temperature control all supported. No image/audio/video input is documented.
- **Pricing (as of 2026-09-29):** OpenRouter lists **$0.06 input, $0.030 cached input (a 50% discount), $0.12 output per 1M tokens** — $0.07 blended, confirmed unchanged by The Known Good on 2026-09-02. A free NVIDIA NIM route exists. Free inputs/outputs may be used to improve Poolside models.
- **Speed (new):** **137.9 output tokens/second, #21 of 338 tracked models** (The Known Good, OpenRouter telemetry, 2026-09-02) — "in the fastest quarter" of tracked models. The Poolside-hosted endpoint measures 161 tokens/s at **0.3 s TTFT**; the NVIDIA NIM free route measures 102 tokens/s. Only one paid host is tracked.
- **Architecture:** OpenMDW-1.1 open-weight MoE, **33B total / 3B active** parameters, same architecture as XS.2, with mixed sliding-window/global attention and FP8 KV cache; the model card says it can run on a Mac with 36 GB RAM.

### Raw benchmarks found

> Poolside's official results use the Laude Institute Harbor Framework and Poolside's agent harness with thinking enabled, a 256K context, up to 500 steps, temperature 1.0 / top_k 20 / top_p 1, and repeated-attempt pass@1 means. Poolside runs a post-hoc reward-hack judge on its own evaluation runs and reports no significant reward hacking.

Agent / tool use:

- **Terminal-Bench 2.1: 33.4%** (Poolside, ranked comparison of reported Terminal-Bench 2.1 scores, benchmarks as of 2026-07-21, published in the *Introducing Laguna S 2.1* post). **This row is new as of 2026-09-29 and was not in the 2026-09-25 report.** It places Laguna XS 2.1 **21st of 22** in Poolside's open-weight ranking, behind Nemotron 3 Ultra 550B-A55B (56.4), Inkling-Small 276B-A12B (52.7), Qwen3.6-35B-A3B (44.9) and Nemotron 3 Super 120B-A12B (38.6), and ahead of Mistral Small 4 (21.4). Poolside notes it "is a standout model in its size category on this benchmark."
- Terminal-Bench 2.0: **37.5%** mean pass@1 over 5 attempts per task; **48 GB RAM / 32 CPUs** (Poolside official model card, 2026-07-02). Note this is the *previous* benchmark version and is not directly comparable to the 33.4% above.
- SWE-bench Pro public dataset: **47.6%** mean pass@1 over 2 attempts per task (Poolside official model card).
- No exact Tau2-Bench, Toolathlon, or MCP-Atlas result was found.

Reasoning / knowledge:

- **Still nothing.** No GPQA Diamond, no HLE, no CritPt, no Omniscience, and **no Artificial Analysis Intelligence Index row exists for Laguna XS 2.1** as of 2026-09-29 — v4.3.2 covers 673 models and this is not among them. The Known Good lists the model as **unranked** because it lacks a science, a mathematics, and a coding result in that registry's composite; it does track the model for price, speed and context.
- Native optional reasoning and preserved thinking are verified by the model card, but no standalone exact-model reasoning benchmark has been published. Coding-agent evidence remains the primary published evaluation.

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 over 4 attempts per task (Poolside official model card).
- SWE-bench Multilingual: **63.1%** mean pass@1 over 4 attempts per task — the headline improvement over XS.2, up 5.4 points.
- Aider Polyglot, LiveCodeBench, and SciCode: **no verified exact-model public scores found.**
- All three SWE-bench-family figures were independently re-confirmed unchanged in third-party catalogues on 2026-09-29 (NVIDIA NIM listing, Kilo Code).

Long context:

- The verified 262K context was used for official coding-agent evaluations, but **no standalone MRCR / RULER / GraphWalks retrieval-at-length result was found, and no AA-LCR row exists.** Long context remains the thinnest evidenced axis for this model despite being a headline local-model selling point.

Sources consulted: [Poolside — Introducing Laguna XS 2.1](https://poolside.ai/blog/introducing-laguna-xs-2-1), [Poolside — Introducing Laguna S 2.1 (source of the new Terminal-Bench 2.1 row)](https://poolside.ai/blog/introducing-laguna-s-2-1), [The Known Good — Poolside: Laguna XS 2.1 (updated 2026-09-02)](http://theknowngood.com/models/poolside-laguna-xs-2-1), freellm.net's NVIDIA NIM catalogue entry for `poolside/laguna-xs-2.1`, [Kilo Code model page](https://kilo.ai/models/poolside-laguna-xs-2-1), and GIGAZINE's 2026-07-03 launch coverage — all accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 79/100.** Unchanged. Strong 70.9% SWE-bench Verified, 47.6% SWE-bench Pro, and native tool calling support it, and the **new Terminal-Bench 2.1 row at 33.4% corroborates rather than contradicts** the existing 79 — it is a mid-30s result on the current benchmark version, roughly on par with where Nemotron 3 Super sits, and Poolside's own framing is that it leads its size category. It is held at 79 rather than raised because terminal-agentic reliability in the 30s is the honest number and 70.9% SWE-bench Verified is measuring a different (patch-generation) task.
- **Reasoning: 63/100.** Unchanged, and still the most speculative score here. Optional interleaved reasoning is useful for agent work, but no exact standalone GPQA/HLE/intelligence result was found and The Known Good still refuses to rank the model at all, so the score stays conservative and evidence-light.
- **Context window: 76/100.** Unchanged. The 262K verified window exceeds 200K, though it is below the repository's 500K-plus top tier and still lacks a dedicated retrieval benchmark. The newly documented 32,768 max output does not move this axis.
- **Multimodal: 15/100.** Unchanged. The exact model is text-only; no image, audio or video input is documented.
- **Coding: 88/100.** Unchanged. The 70.9% SWE-bench Verified, 63.1% multilingual and 47.6% SWE-bench Pro results are excellent for a 3B-active local model and all three were independently re-confirmed unchanged on 2026-09-29.
- **Cost efficiency: 100/100.** Unchanged. $0.06/$0.12 per 1M with a 50% cache discount ($0.07 blended), a confirmed free NVIDIA NIM route, 137.9 tokens/s at #21/338 for speed, and quantized weights that run locally on a 36 GB Mac.
- **Overall Score: 64.2/100.** (79 + 63 + 76 + 15 + 88) / 5 = 321 / 5 = **64.2**, unchanged from 2026-09-25. An outstanding low-cost local coding agent with a 256K window, best for software engineering and tool loops; general knowledge and multimodal capabilities remain unproven, and the absence of any reasoning or long-context measurement is a real gap rather than a rounding artefact. Pick it for cheap high-volume coding on your own hardware; pick something with a published intelligence index if you need measured general reasoning.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Official Poolside blog posts and the `poolside/Laguna-XS-2.1` Hugging Face model card for all benchmark figures; The Known Good (2026-09-02) and freellm.net for independently re-confirmed price, speed, TTFT, max output and provider status. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall. No AA Intelligence Index row exists for this model, so no v4.3.2 value is cited.
- Future sources: add a new file next to this one, e.g. `Laguna_XS_Recheck.md`, using the same headings.
