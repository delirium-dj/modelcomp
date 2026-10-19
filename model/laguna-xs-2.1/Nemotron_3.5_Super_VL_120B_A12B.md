# Laguna XS 2.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com/poolside/laguna-xs-2-1 model card (official NVIDIA NIM page), docs.api.nvidia.com/nim/re/reference/poolside-laguna-xs-2-1, huggingface.co/poolside/Laguna-XS-2.1 (official HF card + benchmark table), huggingface.co/poolside/Laguna-XS-2.1-NVFP4 (quantized card), huggingface.co/poolside/Laguna-XS-2.1-INT4 (INT4 card), huggingface.co/rbinrs/Laguna-XS-2.1 (duplicate), registry.ollama.com/library/laguna-xs-2.1 (Ollama card), opencode.ai/data/meituan/longcat-2-5-preview (companion context), benchmarklist.com/models/meituan-longcat-2.5-preview (companion), benchlm.ai/compare pages (grok-4-5 vs laguna-s-2-1, claude-opus-4-6 vs laguna-s-2-1, gemma-4-31b vs laguna-s-2-1, gpt-realtime-1-5 vs laguna-s-2-1, laguna-s-2-1 vs qwen3-7-max), poolside.ai/blog/introducing-laguna-xs2-m1 (release blog), docs.poolside.ai/release-notes/models (release notes)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1 (Poolside)
- **Short description:** Poolside's efficient 33B total / 3B active Mixture-of-Experts text generation model, designed for agentic coding and long-horizon software engineering work on local machines; 256K context; OpenMDW-1.1 license; released 2026-07-02 (announced July 15 2026 on build.nvidia.com); upgraded version of Laguna XS.2 with +5.4% on SWE-bench Multilingual and stronger terminal-style tasks; text-in, text-out only (no vision).
- **Provider / access:** Poolside (poolside.ai), Hugging Face (poolside/Laguna-XS-2.1), Ollama (laguna-xs-2.1), NVIDIA NIM (build.nvidia.com/poolside/laguna-xs-2-1), OpenRouter (poolside/laguna-xs-2.1, free for a limited time), Vercel AI Gateway.
- **Release / knowledge:** Released 2026-07-02 (HF) / 2026-07-15 (build.nvidia.com); knowledge cutoff not stated.
- **IDs:** `poolside/Laguna-XS-2.1` (HF), `laguna-xs-2.1` (ollama/OpenCode), `poolside/laguna-xs-2-1` (NVIDIA NIM).
- **Context window:** 256,000 tokens (official HF card; Ollama card; NVIDIA NIM card lists ISL 262,144). Verified across serving sources.
- **Modalities:** Text in, text out (text-only — NOT multimodal); reasoning yes (interleaved thinking between tool calls, per-request enable/disable); tool calls yes; structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** Free for a limited time via Poolside API/OpenRouter; OpenMDW-1.1 open weights (self-host effectively $0); benchlm compare tables list $0.10/M input, $0.20/M output.
- **Architecture:** 33B total / 3B active per token MoE; 40 layers (10 global + 30 sliding-window at 512); 256 routed experts + 1 shared expert; sliding window attention; Muon optimizer; FP8 KV cache option.

### Raw benchmarks found

Official Poolside HF card benchmark table:

Agent / tool use:
- SWE-Bench Verified: **70.9%** (official HF card / Ollama card / NVIDIA NIM card)
- SWE-Bench Multilingual: **63.1%** (official HF card)
- SWE-Bench Pro (Public Dataset): **47.6%** (official HF card)
- Terminal-Bench 2.0: **37.5%** (official HF card / Ollama card / NVIDIA NIM card)

Reasoning / knowledge:
- Not isolated for Laguna XS 2.1 in fetched sources (no MMLU/GPQA/HLE isolated).

Coding:
- SWE-Bench Verified 70.9%, SWE-Bench Multilingual 63.1%, SWE-Bench Pro 47.6%, Terminal-Bench 2.0 37.5% — see above.

Multimodal & grounded: Text-only — NOT multimodal.

Long context: Declared 256K; no public needle-recall curve isolated.

Instruction following: Not isolated.

### Conflicting results noted

- None major — official HF card, Ollama card, and NVIDIA NIM card all agree on the four benchmark scores (70.9/63.1/47.6/37.5).
- Context window consistently 256K across serving sources.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** SWE-Bench Verified 70.9% (solid), Terminal-Bench 2.0 37.5%, SWE-Bench Pro 47.6%, SWE-Bench Multilingual 63.1% — good coding-agent profile; capped by no public MCP-Atlas/BrowseComp/OSWorld scores and moderate Terminal-Bench 2.0.
- **Reasoning: 58/100.** SWE-Bench Verified 70.9%, SWE-Bench Multilingual 63.1% show strong reasoning; capped by no public GPQA/HLE/MMLU scores isolated.
- **Context window: 75/100.** Declared 256K; no public retrieval curve beyond.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 68/100.** SWE-Bench Verified 70.9% (strong for 3B-active), SWE-Bench Multilingual 63.1%, SWE-Bench Pro 47.6%, Terminal-Bench 2.0 37.5% — strong small-model coder; Terminal-Bench 2.0 37.5% caps it.
- **Cost efficiency: 90/100.** OpenMDW-1.1 open weights (self-host ~$0), 3B-active/33B-total MoE efficient enough for a Mac with 36GB RAM; free for a limited time; not counted toward Overall.
- **Overall Score: 63/100.** Half-up mean of (62 + 58 + 75 + 50 + 68) / 5 = 62.6 → 63. Best-fit recommendation: efficient open-weight coding agent for local/edge deployment; strong SWE-Bench Verified; text-only, no long-context retrieval score.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Poolside HF model card + NVIDIA NIM card + Ollama card + huggingface.co/poolside/Laguna-XS-2.1-NVFP4 + NVIDIA DGX Spark benchmarks + poolside.ai release blog + docs.poolside.ai release notes + benchlm.ai comparisons); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
