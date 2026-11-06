# Mistral Small 4 — findings by Qwen 3.8 Flash

- Source: Mistral AI (`mistral-small-2603`, curated id `opencode/mistral-small-4`), cross-checked against Mistral's launch post, OpenRouter, and NVIDIA/community coverage
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** the curated `meta.json` is a **scaffolded placeholder** ("128K / Text in-out / Standard pricing"). First-party evidence overrides it: Mistral Small 4 is a **119B-total / ~6B-active** Apache‑2.0 MoE with a **256K** window, **native text+image** input, and **configurable reasoning** — the first Mistral model unifying Magistral (reasoning), Pixtral (multimodal) and Devstral (agentic coding). Distinct from `mistral-large-4` / `mistral-medium-3.5`.

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's efficient "one-model-does-three" hybrid (released **2026-03-16**) — a 119B/6B-active MoE (128 experts, 4 active/token) that collapses instruct chat, on-demand reasoning, vision and agentic coding into a single Apache-2.0 open-weights model, with best-in-class latency/token efficiency. Founding-model participation in the NVIDIA Nemotron Coalition.
- **Provider / access:** Mistral **API + AI Studio**; Hugging Face weights (**Apache 2.0**); day-0 NVIDIA NIM; runs on vLLM, llama.cpp, SGLang, Transformers. OpenRouter id `mistralai/mistral-small-2603`. Chat Completions with `reasoning_effort` (none/high).
- **Release / knowledge:** released **2026-03-16**; knowledge cutoff not published.
- **IDs:** `mistral-small-2603`.
- **Context window:** **256K tokens** (official). No published MRCR/RULER retrieval absolute for this exact ID.
- **Modalities:** **text + image in; text out** (native multimodal); reasoning toggle; tool/agentic support.
- **Pricing (as of 2026-11-06):** **$0.15 / $0.60 per 1M** in/out + free Apache-2.0 self-host; ~40% lower end-to-end completion time and ~3× requests/sec vs Mistral Small 3.
- **Architecture:** 119B total / ~6B active (8B incl. embed+output) sparse MoE, 128 experts, 4 active per token.

### Raw benchmarks found

> Provenance: capability rows are **vendor-reported by Mistral referencing the Artificial Analysis harness** (AA-LCR) and head-to-head vs GPT-OSS 120B; Mistral's own efficiency/latency claims are directional. No independent composite AA Intelligence Index absolute located for this exact ID on the AA page.

Coding / reasoning:

- AA-LCR (Artificial Analysis LiveCodeBench-style): **0.72 (72%)** with only ~1.6K-char outputs (Mistral, citing AA)
- LiveCodeBench: **outperforms GPT-OSS 120B while producing ~20% less output** (Mistral)
- Cross-benchmark: **matches or surpasses GPT-OSS 120B on all three** measured tasks with significantly shorter outputs (Mistral)

Agent / tool use:

- Unified Devstral agentic-coding lineage; `reasoning_effort=high` for deep step-by-step; **no standalone Terminal-Bench/τ/GDPval absolute located** for this exact ID

Long context / Multimodal:

- 256K window (official); **no MRCR/RULER retrieval absolute**
- Vision: native image input (Pixtral lineage); **no MMMU-Pro absolute located**

### Normalized scores (1–100)

- **Tool use: 68/100.** Devstral-class agentic-coding behavior plus function calling in a unified model is a real strength at 6B active; capped by the absence of an independent Terminal-Bench/τ/GDPval absolute for this exact ID.
- **Reasoning: 70/100.** On-demand Magistral-grade reasoning at a fraction of the active compute — competitive with GPT-OSS 120B (queue ~61) on the measured tasks — is exceptional for a 6B-active MoE; provisional because no independent composite Index is published here.
- **Context window: 78/100.** **256K** is strong for long-form/document analysis and above the class median; docked for no published retrieval-quality absolute.
- **Multimodal: 58/100.** Native **text + image** perception (Pixtral heritage), text out — solid vision, but no audio/video input and no generation, and no published MMMU-Pro absolute.
- **Coding: 72/100.** AA-LCR 72% + beating GPT-OSS 120B on LiveCodeBench with 20% shorter outputs is genuinely good coding; held below frontier coders because the absolutes are vendor-cited (AA harness) rather than independently reproduced here.
- **Cost efficiency: 93/100.** Standout: **$0.15/$0.60**, Apache-2.0 self-host, and ~6B-active compute at 3× Small 3 throughput — among the best price/performance in the field.
- **Overall Score: 69.2/100.** Half-up mean of the five quality dims (68+70+78+58+72)/5 = 69.2 (Cost excluded). Best fit: teams wanting a **cheap, fast, Apache-licensed all-rounder** — reasoning + vision + coding in one 6B-active model — with frontier-adjacent AA-LCR at a fraction of the compute. Vendor/AA-cited provenance caps reasoning/tool/coding confidence; the efficiency story is the headline.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Mistral "Introducing Mistral Small 4" launch post (2026-03-16: 119B/6B-active MoE, 128 experts/4-active, 256K ctx, native text+image, configurable reasoning_effort, Apache 2.0, $0.15/$0.60, AA-LCR 0.72, beats/matches GPT-OSS 120B on LCB/cross-benchmark with ~20% shorter output, 40% faster / 3× throughput vs Small 3, NVIDIA NIM day-0) plus OpenRouter listing (`mistralai/mistral-small-2603`) and community coverage. The scaffolded `meta.json` (128K/text/Standard) is overridden with first-party specs. Vendor/AA-cited benchmark provenance is flagged inline; no composite AA Intelligence Index absolute is asserted for this ID. Scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Mistral AI — Introducing Mistral Small 4](https://mistral.ai/news/mistral-small-4/)
  - [OpenRouter — Mistral Small 4 (mistral-small-2603)](https://openrouter.ai/mistralai/mistral-small-2603)
  - [NYU Shanghai — Mistral Small 4: four models unified in one open-source MoE](https://rits.shanghai.nyu.edu/ai/mistral-small-4-four-models-unified-in-one-open-source-moe/)
- Revisit trigger: an independent Artificial Analysis composite Intelligence Index row for `mistral-small-2603`, or third-party same-harness SWE-bench Verified / Terminal-Bench / GPQA / MMMU-Pro absolutes replacing the vendor-cited numbers.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
