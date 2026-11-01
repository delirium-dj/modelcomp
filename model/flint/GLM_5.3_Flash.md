# Flint 40B Free — findings by GLM 5.3 Flash

- Source: Recursive (`RecursiveSI/flint`, served as `flint-40b-free`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint 40B Free (model card name `Flint-40B-A2.5B`; Recursive's first model)
- **Short description:** Recursive's open-weight MoE coding model built to run fast on local hardware: 39.8B total / ~2.5B active, 262K context, always-on reasoning and multi-turn tool use — leading MoE under 50B on agentic coding boards, running >125 tok/s on an M4 Pro MacBook. Built from scratch in under four months by a small team of people and agents using Recursive's automated-research system ("Eureka Machine").
- **Provider / access:** Open weights on Hugging Face (`RecursiveSI/flint`, Apache 2.0; BF16 + int4 + NVFP4 checkpoints); OpenCode Zen free lane `flint-40b-free`; OpenRouter `recursive/flint-v1.0`.
- **Release / knowledge:** Released 2026-10-21; knowledge cutoff June 2026 (model card).
- **IDs:** `RecursiveSI/flint` (HF); `flint-40b-free` (Zen free); `recursive/flint-v1.0` (OpenRouter free tier).
- **Context window:** 262,144 tokens documented (model card; the launch blog also mentions up to 512k support with a recommendation to stay ≤256k — the card's 262,144 is the authoritative figure); ≥32,768 output tokens recommended for hard problems.
- **Modalities:** Text in/out only; always-on reasoning (`reasoning_content` must be preserved in history); OpenAI-compatible tool calls.
- **Pricing (as of 2026-11-01):** Free on OpenCode Zen ($0/$0); Apache 2.0 weights free to self-host.
- **Architecture:** Decoder-only MoE, 39.8B total / ~2.5B active per token (incl. output head; ~2.2B active body), 49 layers (2 dense + 47 MoE), 256 routed experts with 6 selected + 1 shared, hidden 2048, vocab 150,144, sliding-window attention in most layers.

### Raw benchmarks found

(all vendor release evaluations — no independent lab has published a Flint measurement yet; Artificial Analysis has no entry as of launch+1day)

Agentic coding:

- Terminal-Bench 2.1: **54.9%** (Terminus 2 harness, Internet ON, but retrieval-solved tasks counted as failures — a self-imposed handicap other vendors may not apply; avg pass@1 over ≥5 attempts)
- SWE-bench Verified: **74.2%** (mini-swe-agent, no internet)
- SWE-bench Pro v2: **89.7%** (mini-swe-agent, no internet)

Speed / efficiency:

- >125 tok/s on M4 Pro MacBook Pro; >150 tok/s on 64GB RTX Spark (avg over a 128k session, prefill excluded); ~500 tok/s single-request decode on one GB200 at 100K context (vLLM day-0 integration); NVFP4 KV-quantized serving with lossless repack
- Accuracy-matched across checkpoints (vLLM: GSM8K, GPQA-D, MRCR, tool-calling suite parity between BF16 and NVFP4)

General/coding (no individual figures published):

- LiveCodeBench v6, IFBench, IFEval: averaged into the vendor's "mean score" chart only — no individual numbers disclosed

Reasoning / knowledge / multimodal:

- No GPQA/MMLU/HLE-class figure published (GPQA-D appears only as an internal parity check, no number); text-only — no multimodal capability

Vendor-stated caveats: long reasoning can exhaust the output budget before answering; tool-call grammar does not prevent unsafe/incorrect actions; Transformers modeling code not yet shipped (serve via SGLang/vLLM/rec/llama.cpp).

### Normalized scores (1–100)

- **Tool use: 70/100.** The strongest evidence axis for its class: SWE-V 74.2 + SWE-Pro v2 89.7 + TB2.1 54.9 under self-handicapping protocols lead the sub-50B MoE tier — but all measurements are Recursive-measuring-Recursive, so the ceiling stays provisional.
- **Reasoning: 58/100.** Always-on reasoning with sound multi-turn tool loops and checkpoint parity on GPQA-class checks; no published general-reasoning figure to verify the top end.
- **Context window: 76/100.** Verified 262K-token window with sliding-window attention and long-session speed averaging (128k sessions), plus ≥32K output guidance — strong for a local-first model, no MRCR-class published retrieval score.
- **Multimodal: 10/100.** Text in/out only — near the floor by design.
- **Coding: 82/100.** The headline dimension: 89.7 SWE-Pro v2 and 74.2 SWE-V would rank high even among much larger models if confirmed independently; scored conservatively pending any third-party run.
- **Cost efficiency: 98/100.** Free Zen lane + free Apache 2.0 weights + a per-token active-parameter count so small it runs interactively on a MacBook — the entire value proposition.
- **Overall Score: 59/100.** Mean of the five quality dims (70+58+76+10+82)/5 = 59.2 → 59. Best fit: private, offline, fast local agentic coding; needs more user guidance than frontier closed models per the vendor's own guidance.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (Recursive launch post, HF model card metrics as summarized in launch coverage, vLLM day-0 blog, packing/quantization analysis); scores are normalized 1–100 interpretations, not official vendor scores. All agentic figures are vendor self-measured — flagged prominently; no independent harness row exists yet.
- Reference URLs:
  - [Recursive — "Introducing Flint" (launch post, methodology footnotes, speed charts)](https://recursive.com/updates/introducing-recursive-flint)
  - [Hugging Face — RecursiveSI/flint (39.8B/A2.5B architecture details, Apache 2.0)](https://huggingface.co/RecursiveSI/flint)
  - [vLLM blog — Day-0 Flint support (NVFP4 W4A16 serving, 500 tok/s GB200)](https://vllm.ai/blog/2026-10-21-flint)
  - [AiLookout — Flint release audit (methodology caveats, no AA entry)](https://ailookout.news/blog/recursive-releases-flint-a-40b-open-coding-model-built-with-its-eureka-machine/)
  - [OrcaRouter — Flint 40B-A2.5B rollout analysis (four checkpoints, licence split)](https://www.orcarouter.ai/blog/flint-40b-a2-5b-local-coding)
  - [LinkedIn — Yuandong Tian launch announcement (Eureka Machine origin)](https://www.linkedin.com/posts/yuandongtian_today-we-release-our-first-model-flint-activity-7518751647561486336-BAxk)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
