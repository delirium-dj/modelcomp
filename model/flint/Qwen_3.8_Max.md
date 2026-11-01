# Flint — findings by Qwen 3.8 Max

- Source: Recursive Superintelligence (`opencode/flint`; id `RecursiveSI/flint`; AA `no AA page` — 404)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Flint** is the **first shipping model from Recursive Superintelligence** (Richard Socher's lab), an **Apache-2.0 open-weight MoE built purely for fast local agentic coding** — **39.8B total / ~2.5B active per token** (6-of-256 routed experts + 1 always-on shared), **text-only, always-on reasoning + native tool use**, released **21 Oct 2026**, free on OpenCode Zen as `flint-40b-free`. Its headline is a real niche: **best-performing MoE under 50B total on agentic coding**, with **vendor-reported SWE-bench Verified 74.2 / Pro v2 89.7 / Terminal-Bench 2.1 54.9**, and **>125 tok/s on an M4 Pro laptop**. The whole evidence base is **self-reported** — **no AA page** (Intelligence Index / Speed / Cost all absent) and **no independent leaderboard has reproduced a single number** — so every score is discounted. Reasoning is also **unbenchmarked** (no GPQA / AIME / HLE / MMLU ever published), and the "first RSI coding model" framing is a **lab-narrative** (Eureka Machine *assisted* a "team of people and agents"), not a capability claim. It is a **genuine, distinct, downloadable artifact** (HF weights, license, arch, three coding benchmarks) — scored, not excluded — but as a **narrow domain-specialist with an all-vendor evidence base**, sitting just above the curated line.

## Model card

- **Name:** Flint (Recursive Flint; served free as `flint-40b-free` on OpenCode Zen)
- **Short description:** Recursive's first model — a decoder-only MoE coding agent built with an automated-research system ("Eureka Machine"); fast local inference, strong-for-size agentic coding, always-on reasoning + tool use.
- **Provider-access:** OpenCode Zen (free `flint-40b-free`); self-host from Hugging Face (`RecursiveSI/flint`, Apache 2.0); runs under llama.cpp / Ollama / Unsloth / LM Studio / vLLM / SGLang + Recursive's `rec` engine. **No AA page**; **no third-party API host with published independent evals.**
- **Release-knowledge:** Released **21 Oct 2026**; **knowledge cutoff June 2026** (per model card, via CellCog).
- **IDs:** `opencode/flint` · `RecursiveSI/flint` · Zen route `flint-40b-free`.
- **Context window:** **Up to 512K supported, 262,144 (≈256K) recommended and served**; **65,536 max output** (meta) — vendor recommends **≥32,768-token output budget** for hard problems. Hybrid attention: **35 sliding-window layers (current + 512 preceding) + 14 full-attention layers (no positional encoding)**, per-head QK RMSNorm + learned attention sinks. *(Meta under-reports the 512K native ceiling; corrected here.)*
- **Modalities:** **Text in / text out only** (no image/audio/video) → Multimodal scored at the text-only convention.
- **Pricing:** **$0 / $0** on OpenCode Zen free route; **Apache-2.0 weights self-host free** (BF16 checkpoint ~80 GB, one B300/H200; quantized NVFP4 for laptop/Apple-Silicon/RTX-Spark).
- **Architecture:** 39.8B total / ~2.5B active; 49 layers (2 dense + 47 MoE), each MoE 256 routed experts, 6 active + 1 shared; NVFP4 quantization quantizes `lm_head` to 4-bit (within 0.7 pts of BF16).

### Raw benchmarks found

> Provenance: **100% vendor self-report** from Recursive's launch post + model card (mini-swe-agent for SWE-bench, Terminus 2 for Terminal-Bench; temp 1.0 / top-p 0.95 / top-k 20; avg pass@1 over ≥5 attempts). **CellCog states plainly: "no independent leaderboard has published Flint results yet." AA: no page** → no Intelligence Index / Speed / Cost composite. All figures discounted accordingly.

**Coding / agentic (VENDOR only):**
- **SWE-bench Verified 74.2%** (mini-swe-agent, no internet) — strong for a 2.5B-active model; Recursive's claim = best MoE <50B total.
- **SWE-bench Pro v2 89.7%** (mini-swe-agent) — *higher than Verified by benchmark composition/difficulty, not a contradiction; the two suites are non-interchangeable (Recursive presents them side-by-side, does not claim equivalence).*
- **Terminal-Bench 2.1 54.9%** (Terminus 2 XML, internet allowed, **web-retrieval solutions counted as failures — a stricter bar than most dev-reported TB scores**, so cross-model comparisons must carry this caveat).
- Launch chart reports a **mean over TB 2.1 / SWE-Pro v2 / SWE-Verified / LiveCodeBench v6 / IFBench / IFEval** — individual **LiveCodeBench / IFBench / IFEval values exist only inside a chart image** (untranscribable, not credited).

**Reasoning / knowledge:** **none published** — no GPQA, AIME, HLE, MMLU-Pro, MMMU, or ARC. Coding-specialist release; general reasoning is **unbenchmarked**.

**Long context:** no MRCR / needle / long-context benchmark published (512K supported is a spec, not a measured score).

**Speed / cost (NOT a scored dimension):** >125 tok/s on M4 Pro MacBook Pro, >150 tok/s on 64 GB NVIDIA RTX Spark at short contexts (quantized); "5×+ faster than comparable dense 25–40B coding models". Free hosted + free self-host → near-perfect cost, but Cost is scored and never counted.

**Meta-verification:** curated meta **broadly accurate** — corrected only the context ceiling (native **512K supported** vs meta's 262,144 total; meta records the *recommended/served* figure). Params "40B/2.5B-active", 65,536 max-out, always-on reasoning, tool use, text-only, free Zen route, Apache 2.0 — all confirmed against the launch post, CellCog spec table, and MindStudio teardown.

> **Self-reported (Recursive model card / launch blog) — no independent reproduction:** SWE-Verified 74.2 · SWE-Pro v2 89.7 · TB 2.1 54.9 · >125/150 tok/s · "best MoE <50B on agentic coding" · "rivals dense 25–40B at 5× speed." Treated as the vendor's own pass@1 averages.

### Normalized scores (1–100)

- **Tool use: 62/100.**
- **Reasoning: 58/100.**
- **Context window: 66/100.**
- **Multimodal: 50/100.**
- **Coding: 70/100.**
- **Cost efficiency: 92/100.**
- **Overall Score: 61/100.**

> Overall = half-up mean of the five non-cost dimensions (62 + 58 + 66 + 50 + 70) / 5 = 306 / 5 = **61**. Curated average is **59.2** → my divergence **+1.8** (a genuine, distinct open artifact with credible vendor coding scores earns a touch more than the curated line, tempered by zero independent measurement).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Recursive launch post `recursive.com/updates/introducing-recursive-flint`** — primary: 40B/2.5B MoE, SWE-Pro v2 / TB 2.1 / SWE-Verified leadership claim in <50B MoE class, ≥125/150 tok/s, 512K supported / 256K recommended, Apache 2.0 on HF `RecursiveSI/flint`, Eureka-Machine automated research; **CellCog `cellcog.ai/blog/recursive-flint`** — independent summary: rel 21 Oct 2026, cutoff June 2026, 256 routed/6 active + shared expert, TB 54.9 / Pro v2 89.7 / Verified 74.2, **explicit "no independent leaderboard has published Flint results yet,"** laptop speeds from quantized ckpt; **MindStudio `recursive-flint-benchmark-coding-scores`** — 49-layer arch (2 dense + 47 MoE), 35 sliding-window + 14 full-attn layers, per-head QK RMSNorm, mini-swe-agent / Terminus-2 harness detail, TB retrieval-penalized methodology, NVFP4 within 0.7 pts of 16-bit). **AA page: 404 — no composite.** WebSearch (recursive.com, Reddit r/machinelearningnews, ai-tldr.dev, Facebook launch clip) corroborates the 74.2/89.7/54.9 triple.
- Future sources: Flint becomes materially more scoreable when (a) **Artificial Analysis or Vals adds a page** (Intelligence Index / independent SWE-bench), (b) any **neutral leaderboard reproduces** the 74.2 SWE-Verified under a standard harness, and (c) **general-reasoning benchmarks** (GPQA / AIME / HLE) ever appear — today Reasoning is inferred from a coding-only evidence base. **Guards applied:** (1) **all three headline numbers are vendor pass@1 self-reports, no independent run** — discounted, not fact; (2) **SWE-Pro v2 89.7 > Verified 74.2 is benchmark composition, not a contradiction** (different suites), and **TB 2.1 54.9 uses a stricter retrieval-as-failure rule** than most dev-reported TB scores; (3) **text-only → Multimodal 50**, not a vision score; (4) **Speed (125–150 tok/s) is a capability, never a scored dimension**; (5) the **"first RSI coding model" / Eureka-Machine framing is lab narrative, not a measured capability** — not credited to any score; (6) **LiveCodeBench v6 / IFBench / IFEval** exist only inside a chart image — not transcribed or credited; (7) distinct artifact from other OpenCode-Zen free routes and from Recursive's stated future local models. **Cost efficiency (92) scored but excluded from Overall.**
