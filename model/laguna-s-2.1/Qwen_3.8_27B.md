# Laguna S 2.1 — findings by Qwen 3.8 27B

- Source: Poolside (`poolside/laguna-s-2.1`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-total / 8B-active open-weights MoE for agentic coding and long-horizon work, released under the fully permissive OpenMDW-1.1 license; sits between Laguna XS 2.1 (33B-A3B) and Laguna M.1 (225B-A23B) in the Laguna series.
- **Provider / access:** Open weights on Hugging Face (`poolside/Laguna-S-2.1`); hosted on OpenRouter (`poolside/laguna-s-2.1`, free 256K endpoint + paid 1M endpoint), Vercel AI Gateway, Baseten Model Library; local via Ollama / llama.cpp / vLLM / SGLang. No OpenCode Zen ID (meta.json `noFreeId: true`; not in the Zen docs list fetched 2026-09-29).
- **Release / knowledge:** Released 2026-07-21 (poolside.ai release blog); knowledge cutoff November 2025 per the same post.
- **IDs:** `poolside/laguna-s-2.1` (OpenRouter/HF); no OpenCode Zen ID found.
- **Context window:** 1,048,576 tokens (1M) per the HF model card; OpenRouter free endpoint is capped at 256K.
- **Modalities:** Text in / text out only; native interleaved reasoning (per-request `enable_thinking`); tool calls.
- **Pricing (as of 2026-09-29):** OpenRouter paid endpoint $0.10 input / $0.20 output / $0.01 cache-read per 1M; free 256K endpoint also available; open weights free to self-host.
- **Architecture:** 118B total / ~8B active MoE; 256 routed experts (top-10) + 1 shared; mixed sliding-window/global attention (48 layers, 1:3 ratio); OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**benchlm.ai /models/laguna-s-2.1**): **70.2%** — thinking mode, pool agent harness, pass@1 avg@4 (also on HF model card and release blog)
- Toolathlon Verified (**huggingface.co/poolside/Laguna-S-2.1**): **49.7%** — vendor harness, averaged over 3 runs
- SWE Atlas (Codebase QnA) (**huggingface.co/poolside/Laguna-S-2.1**): **46.2%** — Scale AI methodology, 3 attempts
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found (Toolathlon Verified covered above)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AA Intelligence Index / BenchLM overall: no public overall — BenchLM (**benchlm.ai /models/laguna-s-2.1**) lists only 6 of 486 benchmarks and leaves the model unranked
- Vendor anecdote (not a benchmark): independently rediscovered a proof of Erdős problem #397 offline in ~68 minutes (**poolside.ai/blog/introducing-laguna-s-2-1**)

Coding:

- SWE-bench Multilingual (**huggingface.co/poolside/Laguna-S-2.1**): **78.5%** — 4 attempts
- SWE-bench Pro (public dataset) (**huggingface.co/poolside/Laguna-S-2.1**): **59.4%** — 4 attempts
- DeepSWE v1.1 (**huggingface.co/poolside/Laguna-S-2.1**): **40.4%** — pool harness, thinking mode, 3 attempts
- SWE-bench Verified: no verified public score found for S 2.1
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) numbers published on the fetched pages; 1M window claimed architecturally.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 70.2% is above the mid band (45–60%), with Toolathlon Verified 49.7% and SWE Atlas 46.2% also mid-range; missing Tau3/GDPval/Claw numbers and the vendor's own harness-overfitting caveat keep it out of the 90s.
- **Reasoning: 58/100.** No public GPQA/HLE/MRCR/AA-Index found; provisional score from model class plus the strong vendor math case study (Erdős #397 rediscovery), capped by the absence of verified public reasoning benchmark numbers.
- **Context window: 95/100.** 1M native context (≥1M tier = 95–100); no independent ≥98% retrieval at 512K+ verified, so 95 rather than 100.
- **Multimodal: 15/100.** Text-to-text only.
- **Coding: 80/100.** Strong SWE family (Multilingual 78.5%, Pro 59.4%, TB2.1 70.2%) but DeepSWE 40.4% is well below the frontier ~74% reference, capping it under 90.
- **Cost efficiency: 98/100.** ~$0.10/$0.20 per 1M (97–99 tier) plus a free 256K OpenRouter endpoint and free open weights.
- **Overall Score: 64.6/100.** Mean of Tool 75, Reasoning 58, Context 95, Multimodal 15, Coding 80; best fit: cheap/local long-horizon agentic coding with 1M context.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (benchlm.ai/models/laguna-s-2.1, huggingface.co/poolside/Laguna-S-2.1, poolside.ai/blog/introducing-laguna-s-2-1, openrouter.ai/poolside/laguna-s-2.1; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
