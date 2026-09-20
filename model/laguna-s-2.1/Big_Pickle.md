# Laguna S 2.1 — findings by Big Pickle

- Source: Poolside (`laguna-s-2.1`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B-A8B open-weight agentic-coding MoE — called "the West's most capable open-weight model" at launch (Poolside's own framing) — that holds its own against models many times its size on terminal and software-engineering benchmarks, and fits on a single NVIDIA DGX Spark.
- **Provider / access:** Weights on Hugging Face (`poolside/Laguna-S-2.1`) under **OpenMDW-1.1** license; hosted via Poolside API, OpenRouter (`$0.10/$0.20` per 1M, incl. a free 262K endpoint and a paid full-1M endpoint), Baseten Model Library/Frontier Gateway, Vercel AI Gateway, NanoGPT (up to 131K output); local via vLLM/Ollama and Poolside's `pool` agent CLI.
- **Release / knowledge:** Released 2026-07-21 (first scale-up from Laguna XS 2.1, July 2, 2026).
- **IDs:** `laguna-s-2.1` / `poolside/Laguna-S-2.1` (open weights; 118B total / ~8B active)
- **Context window:** 1,048,576 tokens ceiling, reached by YaRN-scaling global layers 128x from an 8,192-token base — not native 1M pretraining. Practical serving: 256K (Ollama), 262,144 with 32K output cap (OpenRouter free), full 1M only on the paid endpoint.
- **Modalities:** text input; text output (text-to-text).
- **Pricing (as of 2026-09-20):** $0.10 in / $0.20 out / $0.01 cache-read per 1M on the dedicated OpenRouter 1M endpoint; open weights free to self-host.
- **Architecture:** MoE, 118B total / ~8B active; 48 layers (12 global attention, 36 sliding-window attention at window 512); 256 routed experts (top-10) + 1 shared expert; GQA with 8 KV heads (dim 128), softplus output gating; vocab 100,352. Interleaved thinking controllable per request (`enable_thinking`); trained DFlash draft model for speculative decoding; BF16 (~236GB), FP8, NVFP4 (~71GB; fits DGX Spark 128GB), INT4 and GGUF variants. Throughput: 600-800 tok/s prefill, ~15 tok/s prose decode (22-24 with speculative decoding) — slow for interactive use.

### Raw benchmarks found

Agent / tool use (Poolside-reported, pool harness, thinking mode, pass@1 averaged over 4 attempts unless noted):

- Terminal-Bench 2.1: **70.2%** (vs 60.4% direct/no-thinking); absent from the official TB 2.1 leaderboard (top overall is Claude Code + Fable 5 at 83.8%).
- Toolathlon Verified: **49.7%**; Tool calling supported for agent workflows; long agent sessions routinely accumulate hundreds of thousands of context tokens.

Reasoning / knowledge:

- No GPQA / HLE / MMLU-Pro scores published. Interleaved thinking materially lifts results: DeepSWE 16.5%→40.4%, Terminal-Bench 60.4%→70.2%, SWE-Bench Pro 53%→59% (thinking emits ~2.5-6x the output tokens).
- Positioning note: Poolside's harness/fork (Harbor framework fork, 500-step cap, 5-hour timeout), not the leaderboard harness.

Coding:

- SWE-Bench Multilingual: **78.5%** (≈ tied with Qwen 3.7 Max 78.3%).
- SWE-Bench Pro (public dataset): **59.4%**; DeepSWE v1.1: **40.4%** (vs DeepSeek-V4-Pro-Max's 9.0% at ~13x the size); SWE Atlas (Codebase QnA): **46.2%**.
- On Poolside's compiled TB 2.1 ranking: #11 behind closed leaders (GPT-5.6 Sol 88.8%, Kimi K3 88.3%, Claude Fable 5 88.0%) and ~1.5 points behind Tencent Hy3 (71.7%); beats DeepSeek-V4-Pro-Max (64.0%), Inkling (63.8%), Nemotron 3 Ultra (56.4%).

Long context:

- 1M ceiling is YaRN-scaled from 8K base; SWE Atlas codebase QnA 46.2%; no MRCR-style retrieval score published.

### Normalized scores (1–100)

- **Tool use: 37/100.** Real tool-calling with thinking-between-tool-calls and 1M-token agent sessions, but the headline Terminal-Bench 2.1 70.2% is Poolside's own harness run, absent from the official leaderboard, and Toolathlon Verified is a middling 49.7%.
- **Reasoning: 36/100.** Thinking mode clearly earns its keep (DeepSWE jumps 16.5%→40.4%, TB 60.4%→70.2%), but no GPQA/HLE reasoning scores are published and results are harness-dependent and self-derived.
- **Context window: 48/100.** The 1M ceiling is an 8K-base YaRN extrapolation, and real services expose 256K-262K by default with the full window only behind the paid endpoint — the headline span overstates usable range.
- **Multimodal: 24/100.** Strictly text-to-text; no image, audio, or video handling.
- **Coding: 38/100.** Excellent size-class efficiency (SWE Multilingual 78.5%, DeepSWE 40.4% vs DeepSeek-V4-Pro-Max 9.0%, SWE-Pro 59.4%), yet ~18 points behind the closed frontier and entirely self-reported.
- **Cost efficiency: 47/100.** Very cheap hosted rates ($0.10/$0.20) and self-hostable on a DGX Spark, but slow decode (~15-24 tok/s), 236GB BF16 weights, and memory-hungry 1M serving are practical costs.
- **Overall Score: 37/100.** Mean of the five quality dims (37+36+48+24+38)/5 = 36.6. A standout efficiency story for open-weight agentic coding that out-punches its weight class, held back by self-reported numbers, scaled-not-native long context, and text-only scope.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (poolside.ai blog, Hugging Face model card, globenewswire.com, we0.ai, digitalmatters.me, stefanopineda.com, nano-gpt.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.