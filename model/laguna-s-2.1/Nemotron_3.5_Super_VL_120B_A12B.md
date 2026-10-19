# Laguna S 2.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com/poolside/laguna-xs-2-1 model card (official NVIDIA NIM page for Laguna XS 2.1), docs.api.nvidia.com/nim/re/reference/poolside-laguna-xs-2-1, huggingface.co/poolside/Laguna-S-2.1 (official HF card + benchmark table), huggingface.co/poolside/Laguna-S-2.1-NVFP4 (quantized card), huggingface.co/poolside/Laguna-S-2.1-base (base card), github.com/tanishq-dubey/macos-laguna-s2.1/BENCHMARK_RESULTS.md (community MLX benchmarks), forums.developer.nvidia.com/t/laguna-s-2-1-config-benchmarks (NVIDIA DGX Spark GB10 benchmarks), gigazine.net/gsc_news/en/20260722-ai-poolside-laguna-s (third-party summary), opencode.ai/data/meituan/longcat-2-5-preview (companion model context), benchmarklist.com/models/meituan-longcat-2.5-preview (companion), benchlm.ai/compare pages (grok-4-5 vs laguna-s-2-1, gemma-4-31b vs laguna-s-2-1, claude-opus-4-6 vs laguna-s-2-1, gpt-realtime-1-5 vs laguna-s-2-1, laguna-s-2-1 vs qwen3-7-max)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Poolside)
- **Short description:** Poolside's most capable model, announced 2026-07-21; 118B total / 8B active Mixture-of-Experts; 1M context (256K per Ollama/Ollama card conflict — see below); OpenMDW-1.1 license; text-only; reasoning yes (thinking/no-thinking modes); tool calls yes; designed for agentic coding and long-horizon software engineering work on local machines; 256 routed experts + 1 shared expert; 48 layers (12 global + 36 sliding window at 512); sigmoid expert gating; Muon optimizer; FP8/NVFP4/GGUF quantizations.
- **Provider / access:** Poolside (poolside.ai), Hugging Face (poolside/Laguna-S-2.1), Ollama (laguna-s-2.1), NVIDIA NIM (build.nvidia.com/poolside/laguna-s-2-1), Blackbox AI.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff not stated.
- **IDs:** `poolside/Laguna-S-2.1` (HF), `laguna-s-2.1` (ollama/OpenCode), `poolside/laguna-s-2-1` (NVIDIA NIM).
- **Context window:** Conflicting — HF/Ollama cards say 256K tokens; NVIDIA NIM card says ISL 262,144; announcement says up to 1M tokens. Treat 256K as the documented serving default, 1M as the announcement claim.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (interleaved thinking between tool calls, per-request enable/disable); tool calls yes; JSON/structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** benchlm compare tables list $0.10/M input, $0.20/M output; OpenMDW-1.1 open weights (self-host effectively $0); free inference for a limited time via Poolside API/OpenRouter.
- **Architecture:** 118B total / 8B active per token MoE; 256 routed experts (top-10 per token) + 1 shared expert; sliding window 512 tokens; 12 global + 36 sliding-window layers; grouped-query attention (8 KV heads).

### Raw benchmarks found

Official Poolside HF card benchmark table (HF eval_results):

Agent / tool use:
- Terminal-Bench 2.1: **70.2%** (official HF card; Ollama card; benchlm compare)
- SWE-Bench Multilingual: **78.5%** (official HF card)
- SWE-Bench Pro (Public Dataset): **59.4%** (official HF card)
- DeepSWE: **40.4%** (official HF card)
- SWE Atlas (Codebase QnA): **46.2%** (official HF card; Scale AI leaderboard)
- Toolathlon Verified: **49.7%** (official HF card; official leaderboard)

Reasoning / knowledge:
- Not isolated for Laguna S 2.1 in fetched sources (no MMLU/GPQA/HLE isolated).

Coding:
- SWE-Bench Pro 59.4%, SWE-Bench Multilingual 78.5%, DeepSWE 40.4%, SWE Atlas 46.2%, Toolathlon Verified 49.7% — see above.

Multimodal & grounded: Text-only — NOT multimodal.

Long context: Declared 1M (announcement) / 256K (serving cards); no public needle-recall curve isolated.

Instruction following: Not isolated.

### Conflicting results noted

- **Context window:** 256K (HF/Ollama serving cards) vs 1M (announcement/NVIDIA ISL) — conflict; treat 256K as documented serving default.
- **Terminal-Bench 2.1:** 70.2% (official HF card) — consistent across sources.
- Community MLX benchmarks (tanishq-dubey/macos-laguna-s2.1) show quantized variants scoring lower (weighted scores ~1.0 down to 0.65 relative) — quantization-dependent.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Terminal-Bench 2.1 70.2%, SWE-Bench Pro 59.4%, SWE-Bench Multilingual 78.5%, Toolathlon Verified 49.7%, SWE Atlas 46.2% — solid agentic coding profile; capped by DeepSWE 40.4% and Toolathlon 49.7%.
- **Reasoning: 58/100.** SWE-Bench Pro 59.4%, SWE-Bench Multilingual 78.5% show strong reasoning; capped by no public GPQA/HLE/MMLU scores isolated and DeepSWE 40.4%.
- **Context window: 80/100.** Declared 1M (announcement) / 256K (serving); no public retrieval curve beyond 256K.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 72/100.** SWE-Bench Pro 59.4%, SWE-Bench Multilingual 78.5%, Terminal-Bench 2.1 70.2%, Toolathlon Verified 49.7%, SWE Atlas 46.2%, DeepSWE 40.4% — strong open-weight coding profile; DeepSWE 40.4% caps it.
- **Cost efficiency: 90/100.** OpenMDW-1.1 open weights (self-host ~$0), 8B-active/118B-total MoE efficient for its class; not counted toward Overall.
- **Overall Score: 66/100.** Half-up mean of (70 + 58 + 80 + 50 + 72) / 5 = 66.0 → 66. Best-fit recommendation: strong open-weight agentic coding model for long-horizon software engineering; text-only, DeepSWE weakness noted.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Poolside HF model card + NVIDIA NIM card + Ollama card + community MLX benchmarks + NVIDIA DGX Spark benchmarks + gigazine third-party + benchlm.ai comparisons); scores are normalized 1–100 interpretations, not official vendor scores. Context-window conflict (1M vs 256K) flagged; 256K treated as documented serving default.
- Future sources: add a new file next to this one, using the same headings.
