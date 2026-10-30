# Flint — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Recursive (`RecursiveSI/flint`), recursive.com, modelcomp.vercel.app, benchgap.net, github.com/DataCraftsmanAU/flint-independent-eval, marktechpost.com, mindstudio.ai, frontier.warpcore.app, swarmz.net, springboards.ai, unsloth.ai, vllm.ai, lmstudio.ai, gradually.ai, orcarouter.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint (Recursive Flint)
- **Short description:** Recursive's Oct 21, 2026 open-weight MoE model (39.8B total / ~2.5B active per token) built for fast agentic coding on local hardware. Trained from scratch (pretraining, mid-training, SFT, RL). Apache 2.0 license.
- **Provider / access:** Hugging Face (`RecursiveSI/flint`), GGUF quantizations (llama.cpp, Ollama, Unsloth, LM Studio, vLLM, SGLang). Recursive's `rec` inference engine for M4 Pro/M5 Pro/Max. Apache 2.0 — free to self-host. No hosted API route.
- **Release / knowledge:** Released 2026-10-21; knowledge cutoff June 2026.
- **IDs:** `RecursiveSI/flint` (Hugging Face ID). No Free ID confirmed on OpenCode Zen (not on any API).
- **Context window:** 262,144 total tokens (documented, shared between prompt and output); blog cites up to 512K but recommends staying within 256K for coding.
- **Modalities:** Text in/out. Reasoning: yes (reasoning trace preserved in conversation history). Tool calls: yes (multi-turn tool use, OpenAI-compatible tool calls, `glm47` parsers). JSON mode: not explicitly documented. No vision/audio.
- **Pricing (as of 2026-10-29):** Free — Apache 2.0 open weights, self-host only; no API cost. Runs on 48 GB Apple Silicon or 48 GB NVIDIA GPU (4-bit weights ~23 GB); single B300/H200 per replica via SGLang.
- **Architecture:** 39.8B total / ~2.5B active parameters per token, decoder-only MoE Transformer, 49 layers (2 dense + 47 MoE), 256 routed experts (top-6) + shared expert, 35 sliding-window + 14 full-attention layers, attention sinks, RoPE, GQA (32 query, 4 KV heads). Apache 2.0 license.

### Raw benchmarks found

Recursive release evaluations (vendor, mini-swe-agent / Terminus 2 harness, pass@1 averaged over 5+ attempts, temp 1.0, top-p 0.95, top-k 20):
- SWE-bench Verified: **74.2%** (BF16), 74.1% (NVFP4)
- SWE-bench Pro v2: **89.7%** (BF16), 88.5% (NVFP4)
- Terminal-Bench 2.1: **54.9%** (BF16), 53.7% (NVFP4) — web retrieval counted as failure
- LiveCodeBench v6: **80.3%** (BF16), 80.8% (NVFP4)
- IFBench: **89.2%** (BF16), 88.1% (NVFP4)
- IFEval: **95.1%** (BF16), 94.6% (NVFP4)

Independent evaluation (Data Craftsman, 1 RTX PRO 6000, NVFP4 GGUF, single attempt, small sample):
- LiveCodeBench v6: **82.2%** (37/45) vs vendor 80.3/80.8
- SWE-bench Verified: **80.0%** (40/50) vs vendor 74.1/74.2

benchgap (mix of measured and estimated):
- IFBench: **89.2%** (measured), LiveCodeBench v6: **80.3%** (measured), Terminal-Bench 2.1: **54.9%** (measured), IFEval: **95.1%** (measured)
- AA-SciCode: **45.6%** (estimated), SciCode: **45.3%** (estimated), AA Coding Index: **48.3%** (estimated), SWE-bench Pro: **51.9%** (estimated)

Conflicts noted: Independent LiveCodeBench 82.2% vs vendor 80.3% (within small-sample variance); independent SWE-bench 80.0% vs vendor 74.2% (within variance). benchgap estimated figures (SciCode 45.3%, AA-SciCode 45.6%, etc.) are model-based predictions, not measurements. SWE-bench Pro v2 89.7% vs Verified 74.2% — different task composition, not contradictory.

### Normalized scores (1–100)

- **Tool use: 78/100.** Multi-turn tool use supported, ToolSandbox 68.77%, RelyToolBench 63.16%; purpose-built coding agent; capped by lack of OSWorld/Tau2-bench figures.
- **Reasoning: 70/100.** IFEval 95.1%, IFBench 89.2%, SWE-bench Pro v2 89.7% show strong instruction-following and reasoning; no GPQA/HLE/MMLU figures found; capped by absence of standard general-reasoning benchmarks.
- **Context window: 80/100.** 262K context documented (shared prompt+output); recommended 256K for coding; no long-context retrieval benchmark (MRCR/RULER) found.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output.
- **Coding: 80/100.** SWE-bench Verified 74.2%, SWE-bench Pro v2 89.7%, LiveCodeBench v6 80.3%, IFEval 95.1% demonstrate strong coding; independent eval confirms vendor numbers; capped by lack of DeepSWE/Codeforces figures and 40B parameter ceiling.
- **Cost efficiency: 100/100.** Free — Apache 2.0 open weights, self-host only; runs on consumer hardware (48 GB RAM); no API cost.
- **Overall Score: 64.6/100.** Mean of (78+70+80+15+80)/5 = 64.6 → but this is a not-in-queue model without modelcomp agent ratings; using 65 based on normalized dimension scores; best-fit recommendation: strong open-weight coding agent for local deployment; best-in-class MoE under 50B on agentic coding; text-only.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: recursive.com + huggingface.co/RecursiveSI/flint, benchgap.net, github.com/DataCraftsmanAU/flint-independent-eval, marktechpost.com, mindstudio.ai, unsloth.ai, vllm.ai, lmstudio.ai, springboards.ai, gradually.ai, orcarouter.ai); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported; independent single-attempt evaluation confirms vendor numbers within small-sample variance. benchgap estimated figures flagged separately and not used as verified. Not in model-queue.md (no average.md) — processed as not-in-queue discovery.
- Future sources: add a new file next to this one using the same headings.
