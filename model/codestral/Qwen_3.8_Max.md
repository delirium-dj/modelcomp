# Codestral — findings by Qwen 3.8 Max

- Source: Mistral AI (`opencode/codestral`; original Codestral 22B, API id `codestral-2405`, Hugging Face `mistralai/Codestral-22B-v0.1`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral (Codestral 22B, `codestral-2405`, HF `Codestral-22B-v0.1`)
- **Short description:** Mistral AI's **first-ever code model**, released 2024-05-29 — a dense 22B open-weight specialist for low-latency code generation, native fill-in-the-middle (FIM) completion and IDE autocomplete across 80+ programming languages, exposed through a shared instruction + completion endpoint. This is the **original** Codestral, distinct from the later proprietary Codestral 25.01 / 25.08 releases.
- **Provider / access:** Open weights on Hugging Face (`mistralai/Codestral-22B-v0.1`); historically via the dedicated `codestral.mistral.ai` endpoint (free 8-week beta) and `api.mistral.ai` (per-token). IDE/framework integrations: Continue.dev, Tabnine, VS Code / JetBrains, LlamaIndex and LangChain. **The `codestral-2405` API is RETIRED (2025-06-16)** — only the downloadable weights remain.
- **Release / knowledge:** Released 2024-05-29; API retired 2025-06-16 (superseded by Codestral 25.01 → 25.08). Knowledge cutoff not published.
- **IDs:** `opencode/codestral` (Zen, no Free ID — `noFreeId: true`); API id `codestral-2405` (retired); HF `mistralai/Codestral-22B-v0.1`.
- **Context window:** **32K tokens** native (large for a mid-2024 code model — competitors were 4k/8k/16k — and the basis of its RepoBench long-range strength). Trails the frontier 256K+ standard (per `meta.json` tradeoff).
- **Modalities:** Text and code in; text and code out. **No image/audio/video.** Dense decoder-only transformer (Mistral v3 tokenizer) trained for both instruction-following and native FIM (prefix/suffix infilling). The instruct variant supports tool use (verified via LangChain/LlamaIndex agentic integrations).
- **Pricing / license (as of 2026-11-09):** Open weights, but under the **Mistral AI Non-Production License (MNPL-0.1)** — research and testing only, **no commercial/production use** without a separate paid commercial licence. `meta.json` lists $0.30/$0.90 per 1M ($0.03 cached) — that was the hosted `api.mistral.ai` rate, now moot since the API is retired; a compact 22B runs on a single high-memory GPU for ~$0 self-hosted research use.
- **Architecture:** Dense ~22.2B decoder-only transformer (not MoE); native FIM via prefix/suffix tokens; 32K context; 80+ languages (Python, Java, C, C++, JavaScript, TypeScript, PHP, Bash, Swift, Fortran, …).

### Raw benchmarks found

> Artificial Analysis: **not tracked** (404 for the Codestral line). BenchLM: **not tracked** — Codestral is absent from BenchLM's Mistral family list. The absolute numbers below are **Mistral's own launch evaluations** (the official post presents them as figures); ai-tldr.dev reproduces them as text and links each to its published source. JetBrains' Kotlin-HumanEval figure is from a partner testimonial on the official page. This model has real absolute benchmarks (unlike the relative-only Codestral 25.08), so it is scored, not excluded.

Coding (Mistral launch evals, absolute):

- HumanEval (Python, pass@1): **81.1%** — strong for its size; "beats much larger code models of the era like Code Llama 70B."
- MBPP (sanitized, pass@1): **78.2%**.
- HumanEval multilingual (avg across C++, Bash, Java, PHP, TypeScript, C#): **71.4%**.
- Kotlin-HumanEval (JetBrains, T=0.2): **73.75** — surpassed GPT-4-Turbo (72.05) and GPT-3.5-Turbo (54.66).
- RepoBench EM (long-range repository-level completion): **34%** — Mistral claims it "outperforms all other models in RepoBench" for its era, leveraging the 32K window.
- Spider (text-to-SQL): **63.5%**.
- FIM: HumanEval pass@1 in Python/JavaScript/Java, benchmarked against DeepSeek Coder 33B (native, immediately-usable FIM).
- SWE-bench Verified / LiveCodeBench / Terminal-Bench / DeepSWE / SciCode: **not measured** (pre-dates these agentic-coding evals).

Reasoning (code-reasoning proxies):

- CruxEval-O (Python output prediction): **51.3%** — a genuine code-reasoning signal.
- Spider (text-to-SQL): **63.5%** — structured reasoning over natural language → SQL.
- GPQA / HLE / MMLU / CritPt / AA Intelligence Index: **no score** (not a general-reasoning model; not tracked).

Agent / tool use:

- No agentic/tool benchmark (no τ²-bench/GDPval/BFCL/Terminal-Bench). Capability evidence is qualitative: LangChain reports "the instruct version supports tool use," tested with LangGraph for self-corrective code generation; LlamaIndex/LangChain enable agentic app building; Continue.dev/Tabnine/Sourcegraph use it for low-latency autocomplete.

Multimodal:

- None — text/code only. No vision, audio, or video.

Long context:

- 32K native window; the basis of its RepoBench EM long-range completion result. No RULER/MRCR retrieval number.

> Provenance & meta verification:
> - `model/codestral/meta.json` is **directionally accurate** — "open-weight 22B code model," 32,768 context, "Text and code in; text and code out," autocomplete/FIM standout, and an honest tradeoff ("A 22B dense model whose 32K native window trails frontier 256K+ context standards"). Three clarifications/corrections against the primary sources: (1) **License** — the weights are open but under the **Mistral AI Non-Production License (MNPL-0.1)**, i.e. research/testing only and **not** commercial (meta.json's plain "open-weight" framing omits this restriction; it is *not* Apache 2.0). (2) **"extended to 128K on later checkpoints"** — not corroborated for the 22B `v0.1`, whose native window is 32K; the 128K/256K extensions belong to later or different Codestral variants (25.01/25.08 = 256K; the separate Codestral Mamba 7B), not this dense 22B. (3) **Status** — the `codestral-2405` API is **retired (2025-06-16)**, which meta.json does not note; the $0.30/$0.90 price is therefore historical.
> - Benchmark caveat: all numbers are Mistral's 2024 launch self-evaluations (reproduced by ai-tldr), not independent re-measurements; AA and BenchLM do not track the model. Scored on those absolute figures + verified specs, never inventing numbers for the un-measured agentic-coding evals.

### Normalized scores (1–100)

- **Tool use: 34/100.** The instruct variant supports tool use (verified via LangChain LangGraph self-corrective codegen and LlamaIndex agentic integrations) and it powers IDE plugins, but there is no agentic/tool benchmark and it is a 2024 completion-first model not built for autonomous multi-turn tool loops — low-mid.
- **Reasoning: 40/100.** CruxEval-O 51.3% (Python output prediction) and Spider 63.5% (text-to-SQL) are genuine code-reasoning signals — more than Codestral 25.08 exposes in absolute terms — but there is no general-reasoning benchmark (GPQA/HLE/MMLU) and a dense 22B completion model is not a reasoning engine, so this stays low-mid.
- **Context window: 34/100.** 32K native window — large for a mid-2024 code model (beat 4k/8k/16k rivals and underpinned its RepoBench long-range result) but far below the frontier 256K+ standard; lands in the rubric's <100K band (~30–38). This is the main gap vs Codestral 25.08 (256K).
- **Multimodal: 15/100.** Text and code only — no image, audio, or video; squarely in the rubric's text-only band (10–20).
- **Coding: 68/100.** Its verified specialty with real absolute numbers: HumanEval 81.1%, MBPP 78.2%, multilingual HumanEval 71.4%, Kotlin-HumanEval 73.75 (> GPT-4-Turbo), Spider 63.5%, and native FIM across 80+ languages — strong for a 22B in 2024. Capped at mid because RepoBench EM is only 34%, the numbers are vendor self-evals, and it pre-dates (and is not measured on) modern agentic-coding benchmarks (SWE-bench/DeepSWE/Terminal-Bench/SciCode) that define the rubric's frontier band.
- **Cost efficiency: 90/100.** Open weights downloadable on Hugging Face and a compact 22B that runs on a single high-memory GPU → near-$0 self-host for research/testing. Held below 100 because the MNPL-0.1 licence forbids commercial/production use (a paid commercial licence is required) and the hosted $0.30/$0.90 API is retired. (Cost is excluded from the Overall mean.)
- **Overall Score: 38/100.** Half-up mean of the five quality dims (34 + 40 + 34 + 15 + 68) / 5 = 38.2 → 38. **Divergence −4.4 vs the 2-rater cohort (42.4):** consistent with my other Mistral reads, a text-only, 32K, completion-tuned 2024 specialist scores structurally low on Tool use, Reasoning, Context and Multimodal under this general-purpose rubric even though its verified HumanEval/MBPP coding numbers are solid. Ordering is coherent: the original 22B (38) < Codestral 25.08 (45), driven mainly by the 32K-vs-256K context gap, matching the cohort (42.4 < 50.5). Best fit: local/offline IDE autocomplete, FIM infilling, multi-language code/test/docstring generation and code-LLM research on a single GPU — **not** commercial production (licence-restricted), long-context repo work beyond 32K, autonomous SWE agents, or any multimodal task.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (official Mistral "Codestral" launch post + ai-tldr.dev structured spec/benchmark page, both fetched 2026-11-09; Artificial Analysis and BenchLM do not track the model). Scores are normalized 1–100 interpretations against the `model-comparison.md` rubric, not official vendor scores. Benchmark numbers are Mistral's 2024 launch self-evaluations (reproduced by ai-tldr); three `meta.json` points were corrected against primary sources (MNPL non-production licence, 32K native not 128K, retired API). No score is invented for un-measured evals.
- Reference URLs:
  - [Mistral AI — "Codestral" (official launch, 2024-05-29: first code model, 22B open-weight, 32K, 80+ languages, native FIM, HumanEval/MBPP/CruxEval/RepoBench/Spider evals, MNPL licence, codestral.mistral.ai endpoint, LangChain/LlamaIndex/Continue/Tabnine/JetBrains integrations)](https://mistral.ai/news/codestral/)
  - [AI/TLDR — Codestral 22B (24.05) (absolute benchmarks: HumanEval 81.1%, MBPP 78.2%, CruxEval-O 51.3%, RepoBench EM 34%, Spider 63.5%, multilingual HumanEval 71.4%; 22.2B dense, 32K, MNPL-0.1, retired 2025-06-16)](https://ai-tldr.dev/models/codestral-2405/)
  - [Hugging Face — mistralai/Codestral-22B-v0.1 (open weights, MNPL-0.1 non-production licence)](https://huggingface.co/mistralai/Codestral-22B-v0.1)
- Future sources: an independent re-measurement (Artificial Analysis / BenchLM entry), a modern agentic-coding score (SWE-bench/Terminal-Bench), or confirmation of any long-context extension for the 22B `v0.1` would let a future pass firm up Coding, Reasoning and Context; add a new file beside this one using the same headings. For current production use, prefer the successor Codestral 25.08 (or Devstral for agentic SWE work).
