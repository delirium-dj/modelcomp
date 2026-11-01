# GLM 4.7 Flash — findings by Qwen 3.8 Max

- Source: Z.ai / Zhipu (`opencode/glm-4.7-flash`; id `zai-org/GLM-4.7-Flash`; AA `glm-4-7-flash` — **deprecated page**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **GLM-4.7-Flash** is **Z.ai's lightweight "30B-A3B" MoE** (31.2B total / ~3B active, **MIT open-weights**, released **20 Jan 2026**, free on the Z.ai API + OpenCode Zen) — a coding/agentic efficiency model built to run on a **single 24 GB GPU / Apple Silicon**. It is a **real, distinct, downloadable artifact** (HF weights, MLA architecture, 68+ quantized variants, 1.7 M downloads in month one), so it is scored. Its evidence, however, is **entirely vendor-run**: the headline benchmark set (**SWE-bench Verified 59.2 / τ²-Bench 79.5 / AIME-25 91.6 / GPQA 75.2 / LCB v6 64.0 / BrowseComp 42.8**) is Z.ai's release table (echoed from the GLM-4.5 ARC paper), and **AA lists the page as DEPRECATED with Intelligence Index / Cost-per-task N/A** (only Speed 101 tok/s #27/62 and price are retained) — **no independent composite quality score exists**. Two things temper it: it **punches well above its 3B-active class on agentic coding** (SWE-Verified more than doubles Qwen3-30B-A3B's 22.0), but general reasoning is only **mid-tier** (GPQA 75.2), it is **text-only**, and the curated **"1M context" claim is not supported** (AA served **200K**, Z.ai spec **128K native**) — corrected here. A solid small open model whose real standing is **slightly above the curated line**.

## Model card

- **Name:** GLM-4.7-Flash (a.k.a. GLM 4.7 Flash; Zen route `opencode/glm-4.7-flash`)
- **Short description:** Z.ai's efficient 30B-A3B MoE for coding, agentic reasoning and multi-step tool use; MLA attention gives a tiny KV cache so it runs full-context on consumer hardware.
- **Provider-access:** Z.ai API (**free, no card**); OpenCode Zen; self-host from Hugging Face (`zai-org/GLM-4.7-Flash`, MIT) via Transformers / vLLM (MTP speculative decoding) / SGLang (EAGLE) / LM Studio. **AA page deprecated** (superseded by GLM-5).
- **Release-knowledge:** Released **20 Jan 2026**; training recipe descends from the **GLM-4.5 "ARC" (Agentic, Reasoning, Coding) foundation-model line** (arXiv 2508.06471).
- **IDs:** `opencode/glm-4.7-flash` · `zai-org/GLM-4.7-Flash`.
- **Context window:** **128K native (Z.ai spec), 200K served (AA)** — **corrected from the curated "1M"** (no primary source substantiates a 1M ceiling for this variant).
- **Modalities:** **Text in / text out only** → Multimodal scored at the text-only convention.
- **Pricing:** Z.ai API **free**; AA price **$0.07 in / $0.40 out** per 1M (86% cache discount); MIT weights self-host free.
- **Architecture:** MoE, **31.2B total / ~3B active**; **MLA (Multi-head Latent Attention)** for minimal KV cache; supports **function calling with auto-tool-choice** and a dedicated **thinking / reasoning mode** (AA profiles the Reasoning variant).

### Raw benchmarks found

> Provenance: **VENDOR (Z.ai release table)** for all six scores below — reproduced by RITS/NYU-Shanghai and the launch coverage, citing the GLM-4.5 ARC paper. **No independent leaderboard (AA / Vals / swebench.org) publishes a GLM-4.7-Flash quality number** — the AA page is deprecated and shows **Intelligence Index = N/A ("No publicly available API")**. Competitor columns (Qwen3-30B-A3B, GPT-OSS-20B) in the same table are **rivals' scores, not Flash's** — not credited.

**Coding / agentic (VENDOR):**
- **SWE-bench Verified 59.2%** (vs Qwen3-30B-A3B 22.0, GPT-OSS-20B 34.0) — the standout: **more than doubles** the closest same-size rival on autonomous GitHub-issue resolution.
- **τ²-Bench 79.5%** (vs 49.0 / 47.7) — strong agentic tool-use for the weight class.
- **LiveCodeBench v6 64.0%** (vs Qwen 66.0 — Flash is *behind* here; competitor column not credited).
- **BrowseComp 42.8%** (vs 2.29 / 28.3) — agentic web/browsing.

**Reasoning / knowledge (VENDOR):**
- **AIME 2025 91.6%** (vs Qwen 85.0, GPT-OSS-20B 91.7) — elite math for a 3B-active model.
- **GPQA (Diamond) 75.2%** (vs 73.4 / 71.5) — **mid-tier** graduate-science reasoning.

**Vision / multimodal:** none — text-only.

**Long context:** no MRCR / needle benchmark published; served ceiling is the 128K–200K figure (spec, not a measured score).

**Speed / cost (NOT a scored dimension):** AA **101.0 tok/s, #27/62** (3-of-4 units, faster than the 88 median); local **60–80 tok/s on a single 24 GB RTX 3090/4090 or Apple Silicon**; free API → near-zero cost. Cost is scored, never counted toward Overall.

**Meta-verification:** curated meta **materially wrong on context** — **"1M total" corrected to 128K native / 200K served (AA)**; the rest (30B-A3B, MIT, text in/out, free-on-Zen, agentic focus) confirmed. Tradeoff note ("designed for efficiency, not top-tier closed-model reasoning") is **accurate** — GPQA 75.2 is mid, consistent with an efficiency-tier model.

> **Self-reported (Z.ai release / GLM-4.5 ARC paper) — no independent reproduction:** SWE-Verified 59.2 · τ²-Bench 79.5 · AIME-25 91.6 · GPQA 75.2 · LCB v6 64.0 · BrowseComp 42.8. Discounted as vendor pass@1; AA adds **no** Intelligence composite.

### Normalized scores (1–100)

- **Tool use: 66/100.**
- **Reasoning: 64/100.**
- **Context window: 60/100.**
- **Multimodal: 50/100.**
- **Coding: 64/100.**
- **Cost efficiency: 88/100.**
- **Overall Score: 61/100.**

> Overall = half-up mean of the five non-cost dimensions (66 + 64 + 60 + 50 + 64) / 5 = 304 / 5 = **61**. Curated average is **59.2** → my divergence **+1.8** (the class-leading SWE-Verified 59.2 + strong agentic τ²/BrowseComp justify a touch above the line, tempered by all-vendor provenance, a deprecated/no-AA-Index status, and mid GPQA).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `glm-4-7-flash`** — profiles the **Reasoning** variant, **DEPRECATED banner** "only default 10k workload benchmarked; GLM-5 is the newer release"; **Intelligence Index N/A** ("No publicly available API"), **Speed 101.0 tok/s #27/62 (3/4)**, **Cost $0.07 in / $0.40 out, 86% cache**, **200k context**, **31.2B total / 3B active**, **MIT**, text in/out, reasoning yes; **RITS / NYU-Shanghai** `glm-4-7-flash…` — rel **20 Jan 2026**, MIT + **free Z.ai API**, single-24GB-GPU/Apple-Silicon 60–80 tok/s, **the vendor benchmark table** SWE-Verified 59.2 / τ²-Bench 79.5 / AIME-25 91.6 / GPQA 75.2 / LCB v6 64.0 / BrowseComp 42.8 with **Qwen3-30B-A3B + GPT-OSS-20B rival columns**, 128K spec, MLA, 68+ quants, 1.7 M downloads; **HF `zai-org/GLM-4.7-Flash`** "strongest model in the 30B class … lightweight"; **Reddit r/LocalLLaMA** — "uses MLA, tiny KV cache, full 200k context, promising"; **HN 46679872** — local 30B-A3B on 32 GB GPU). **AA Intelligence composite: N/A (deprecated).**
- Future sources: becomes more scoreable if (a) **AA / Vals re-add a live GLM-4.7-Flash Intelligence index** (today it is deprecated with no composite), (b) a **neutral host reproduces** the vendor SWE-Verified 59.2 / τ² 79.5, and (c) the **context ceiling** is pinned down (128K native vs 200K served vs the unsubstantiated "1M"). **Guards applied:** (1) **GLM-4.7-Flash ≠ the GLM-4.7 flagship** (Dec-2025 full model) — **do not import** the flagship's **HLE 42.8, Verdent pre-release SWE 73.8 / TB 41 / tool 90.6, or the "AA v4.0 Index 42"** figures referenced in the `glm-5` report; (2) **≠ GLM-4.6-Flash / GLM-4.5-Flash / GLM-5.x** siblings — no cross-crediting; (3) **all six benchmark numbers are vendor-run** (Z.ai / GLM-4.5 ARC table), **no independent index** — discounted; (4) the **Qwen3-30B-A3B and GPT-OSS-20B columns are competitors' scores**, never Flash's; (5) **text-only → Multimodal 50**; (6) **Speed (101 tok/s AA / 60–80 local) is a capability, not a scored dimension**; (7) **curated "1M context" unsupported** — corrected to 128K native / 200K served. **Cost efficiency (88) scored but excluded from Overall.**
