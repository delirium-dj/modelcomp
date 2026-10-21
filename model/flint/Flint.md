# Flint — findings by Flint

- Source: Recursive Superintelligence (Recursive) / Flint
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Open-weight mixture-of-experts language model from Recursive Superintelligence, built for fast local agentic coding: codebase investigation, bug fixes, feature implementation, tests.
- **Provider / access:** OpenAI-compatible local serving via Ollama (`flint`), llama.cpp, Unsloth/LM Studio GGUFs, vLLM, SGLang or Recursive's `rec` engine; open weights at Hugging Face (`RecursiveSI/flint`, Apache 2.0); hosted/free API via Recursive; OpenCode Zen id `opencode/flint`.
- **Release / knowledge:** Released 2026-10-21 (some trackers list 2026-10-19); knowledge cutoff June 2026.
- **IDs:** `RecursiveSI/flint` (Hugging Face); local serving id `flint`; OpenCode Zen `opencode/flint`.
- **Context window:** 262,144 tokens documented (prompt + generated output); Recursive flags up to 512K and recommends 256K for coding; local client generation budget 65,536 tokens including reasoning.
- **Modalities:** Text in / text out; reasoning always on; multi-turn tool use via compatible runtime; text-only.
- **Pricing (as of 2026-10-22):** Free (Apache 2.0 open weights; free hosted API).

- **Architecture:** Decoder-only mixture-of-experts Transformer; 39.8B total / ~2.5B active per token (incl. output head; ~2.2B body); 49 layers (2 dense + 47 MoE); 35 sliding-window (513-token window) + 14 full-attention layers; 256 experts (6 routed + shared); hidden size 2048; vocab 150,144; trained from scratch (pretraining → mid-training → SFT → RL); Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (Recursive release evaluation; Terminus 2; agentic pass@1 over ≥5 attempts; web-retrieval solutions counted unsuccessful; temp 1.0, top-p 0.95, top-k 20)
- SWE-bench Pro v2: **89.7%** (Recursive release evaluation; mini-swe-agent; no internet; ≥5 attempts)

Reasoning / knowledge:

- no verified public score found (no independently published GPQA Diamond / HLE / LCR / CritPt / Intelligence Index figures for Flint).

Coding:

- SWE-bench Verified / SWE-Pro: **74.2%** / **89.7%** (Recursive release evaluation; mini-swe-agent; no internet)
- Terminal-Bench 2.1: **54.9%** (Recursive release evaluation; Terminus 2; web-retrieval solutions counted unsuccessful)
- LiveCodeBench v6 / IFBench / IFEval: mean across the six-test set reported by Recursive.

Long context:

- Documented context **262,144** tokens (prompt + output); no long-context retrieval (MRCR / RULER) figure reported.

### Cross-source comparison

- Context window: **262K** (Hugging Face, Ollama, LMMarketcap, vLLM) vs up to **512K** / recommend **256K** (Recursive official) vs scaffolded meta placeholder **128K** → treated as **262,144** documented tokens.
- Max output: **235.9K** (LMC) vs local client generation budget **65,536** (incl. reasoning) → budget-bound.
- Release date: **2026-10-21** (Recursive / TechCrunch / WIRED / Hugging Face) vs **2026-10-19** (LMC).
- Independent verification: WIRED hands-on (3 tasks, 48GB Mac) positive; vendor benchmarks not independently verified outside Recursive.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 **54.9%** → mid band (45–60) → ~55; agentic tool use via runtime/harness; caps: vendor-reported figures, independent confirmation pending.
- **Reasoning: 55/100.** no verified public score found → mid band; reasoning always-on per official docs; caps: unverified absolute reasoning figures.
- **Context window: 75/100.** documented **262,144** tokens → 200K–500K tier (200K = 70) → ~75; vendor-flagged up to 512K / recommends 256K; scaffolded meta placeholder (128K) corrected.
- **Multimodal: 15/100.** Text in/out only.
- **Coding: 70/100.** SWE-bench Pro v2 **89.7%**, SWE-bench Verified **74.2%**, Terminal-Bench 2.1 **54.9%**; vendor claim of MoE <50B lead on agentic coding; caps: vendor-reported only.
- **Cost efficiency: 100/100.** Free (Apache 2.0 open weights; free hosted API).

- **Overall Score: 54/100.** Mean of the five quality dims (Tool 55 + Reasoning 55 + Context 75 + Multimodal 15 + Coding 70) / 5 = 54; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-22
- Method: public web research prioritizing official model card/docs (Hugging Face `RecursiveSI/flint`, Recursive update, SGLang/vLLM/`rec` docs) plus independent benchmarks/reviews (WIRED hands-on, LMMarketcap, press); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
