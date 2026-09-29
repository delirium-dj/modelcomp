# Laguna XS 2.1 — findings by Qwen 3.8 27B

- Source: Poolside (`opencode/laguna-xs-2.1` per meta.json)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's compact 33B-total / 3B-active open-weights MoE for agentic coding and long-horizon work on local machines, released under the fully permissive OpenMDW-1.1 license (upgraded Laguna XS.2).
- **Provider / access:** Open weights on Hugging Face (`poolside/Laguna-XS-2.1`); Poolside API and OpenRouter (`poolside/laguna-xs-2.1`, free and paid endpoints); Ollama / llama.cpp / vLLM / SGLang local. meta.json lists an OpenCode ID `opencode/laguna-xs-2.1`, but the ID was not present in the Zen docs model list or `zen/v1/models` fetched 2026-09-29.
- **Release / knowledge:** Released 2026-07-02 (poolside.ai release blog); knowledge cutoff not stated on the fetched pages.
- **IDs:** `poolside/laguna-xs-2.1` (OpenRouter/HF); `opencode/laguna-xs-2.1` per meta.json (not verified on the current Zen list).
- **Context window:** 262,144 tokens native (HF model card); served at 256K on Poolside's API and OpenRouter.
- **Modalities:** Text in / text out only; interleaved reasoning with per-request enable/disable; tool calls.
- **Pricing (as of 2026-09-29):** Free endpoint (limited-time) plus paid endpoints at $0.10 input / $0.20 output / $0.05 cache-read per 1M (release blog; matches XS.2 pricing); open weights free to self-host. meta.json notes $0.06/$0.12 on OpenRouter — not re-verified on a fetched page this session.
- **Architecture:** 33B total / 3B active MoE; 256 experts + 1 shared; mixed SWA/global attention (40 layers, 3:1 ratio); FP8 KV cache; OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**huggingface.co/poolside/Laguna-XS-2.1**): **37.5%** — 5 attempts, 48GB RAM/32 CPUs
- Terminal-Bench 2.1 (**poolside.ai/blog/introducing-laguna-s-2-1** leaderboard table): **33.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MRCR: no verified public score found
- CritPt: no verified public score found
- AA Intelligence Index / BenchLM overall: no public overall — BenchLM (**benchlm.ai/models/laguna-xs-2.1**) lists only 5 of 486 benchmarks and leaves the model unranked

Coding:

- SWE-bench Verified (**huggingface.co/poolside/Laguna-XS-2.1**): **70.9%** — 4 attempts
- SWE-bench Multilingual (**huggingface.co/poolside/Laguna-XS-2.1**): **63.1%** — 4 attempts, +5.4 over XS.2
- SWE-bench Pro (public dataset) (**huggingface.co/poolside/Laguna-XS-2.1**): **47.6%** — 2 attempts
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index: no verified public score found for XS 2.1 (S 2.1 blog lists XS 2.1 at **0.3%** DeepSWE, **poolside.ai/blog/introducing-laguna-s-2-1**)

Long context:

- No long-context retrieval (MRCR/RULER) numbers published on the fetched pages; 256K/262K window claimed.

### Normalized scores (1–100)

- **Tool use: 45/100.** TB2.1 33.4% and TB2.0 37.5% are below the mid band (TB2.1 45–60% → 50–70), and no Tau/GDPval/Claw numbers exist; agentic-coding focus but weak terminal/tool scores cap it.
- **Reasoning: 45/100.** No public GPQA/HLE/MRCR/AA-Index found; native reasoning support exists but with zero verified public reasoning numbers this is a provisional low score.
- **Context window: 72/100.** 262,144 tokens native, served at 256K — in the 200K–500K tier (65–84).
- **Multimodal: 15/100.** Text-to-text only.
- **Coding: 68/100.** SWE-bench Verified 70.9% and Multilingual 63.1% are solid for a 3B-active local model, but Pro 47.6% and terminal scores of 33–38% keep it in the mid-60s.
- **Cost efficiency: 98/100.** $0.10/$0.20 per 1M paid tier (97–99 band), a free endpoint, and free open weights for local deployment.
- **Overall Score: 49.0/100.** Mean of Tool 45, Reasoning 45, Context 72, Multimodal 15, Coding 68; best fit: fast local agentic-coding helper when running on a single Mac/GPU.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (benchlm.ai/models/laguna-xs-2.1, huggingface.co/poolside/Laguna-XS-2.1, poolside.ai/blog/introducing-laguna-xs-2-1, poolside.ai/blog/introducing-laguna-s-2-1; retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
