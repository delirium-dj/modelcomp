# North Mini Code — findings by Step 5 Preview

- Source: Cohere Labs (`CohereLabs/North-Mini-Code-1.0`, released 2026-06-09)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code — Cohere Labs' **first agentic coding model**, with the repo folder recording the underscore spelling `north_mini_code`. **A negative finding governs this report: BenchLM carries no page for this model in any spelling** (`north_mini_code`, `north-mini-code` and `North-Mini-Code` all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** **Cohere's sovereign-dev on-ramp**: an Apache-2.0 **30B/3B-active** coding model that runs on a single GPU and connects to any harness — **AA Coding Index 33.4, SWE-bench Verified 67.6%, SWE-bench Pro 40.2%, Terminal-Bench 2.0 36.0%** — genuinely useful for local coding agents and obviously not a frontier model. **A hyphens-vs-underscores identity note is recorded: BenchLM and OpenRouter use hyphens while the repo folder uses underscores, and neither spelling exists on BenchLM.**
- **Provider / access:** Hugging Face (**bf16, fp8, w4a16 — Apache 2.0**), Cohere API, Model Vault, OpenRouter (incl. `:free`); Transformers (source build), vLLM main, **OpenCode compatibility**.
- **Release / knowledge:** released **2026-06-09**. **Knowledge cutoff not disclosed.**
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (Hugging Face); repo id `north_mini_code`.
- **Context window:** **256,000 tokens** (320K with vLLM config); **max output 64,000**.
- **Modalities:** **text in → text out**; tool use via JSON schemas; **interleaved thinking.**
- **Pricing (as of 2026-11-06):** **weights free (Apache 2.0)**; **hosted routes available, including a free tier on OpenRouter and a $0/$0 Cohere API row.**
- **Architecture:** **decoder-only MoE, 30B/3B active**, 128 experts (8 active), SwiGLU, 1 dense layer + sparse layers, sigmoid router.
- **Throughput:** **up to 2.8x Devstral Small 2 at identical concurrency; 30% better inter-token latency** (internal test); **minimum 1x H100 (FP8) or 1x H100 (FP4); ~18–20 GB at W4A16** — the best throughput-per-GPU story in its size class.

### Raw benchmarks found

- **Artificial Analysis Coding Index: 33.4** — the one independently-run composite
- **SWE-bench Verified: 67.6%; SWE-bench Pro: 40.2%; Terminal-Bench 2.0: 36.0%** (scores as tabulated by Poolside using each model's highest publicly-referenced result — **a tabulation-provenance caveat recorded below**)
- **τ²-bench: 37.4%** (newly measured in the 2026-10-19 pass); **GDPval-AA: 0.0%** — effectively zero on agentic knowledge work
- **AA-LCR: 37.3%** — the first measured retrieval row for this model
- **Throughput: up to 2.8x Devstral Small 2 at identical concurrency; 30% better inter-token latency** (internal test); **minimum 1x H100 (FP8) or 1x H100 (FP4); ~18–20 GB at W4A16**
- **Comparison figures as charted by Cohere: beats gpt-oss-120b's 16.2 SWE-Pro and Haiku 4.5's 29.8 Terminal-Bench**
- **No verified public score found** for GPQA, HLE, AIME, MATH, CritPt, ARC-AGI, MMLU-Pro, the AA Intelligence Index, AA-Omniscience, LiveCodeBench, AA-SciCode, DeepSWE, Vibe Code Bench, MCP-Atlas, OSWorld, Toolathlon or the AA Agentic Index.

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band. **Terminal-Bench 2.0 36.0% (vendor harness) and the newly measured τ²-bench 37.4%** are low-mid, and **GDPval-AA 0.0% is effectively zero on agentic knowledge work** — **a single-purpose harness coder with no general agentic evidence.** No MCP-Atlas, Toolathlon, OSWorld, BFCL or AA Agentic Index figure exists, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 45/100.** Below the methodology's mid band, and structurally so: **no GPQA, HLE, AIME, MATH or CritPt figure is publicly legible** (the launch chart is image-only), and it is a single-purpose coding model, so the score is mid-low on evidence rather than measurement. Held above the floor because a 3B-active model with SWE-bench Verified 67.6% necessarily has a general substrate.
- **Context window: 66/100.** **256,000 tokens (320K with vLLM config)** is the methodology's 200K–500K band (65–84) at its floor, **trimmed from 70 on the first measured retrieval row: AA-LCR 37.3%, weak for the window size.** No MRCR or RULER figure exists either, so the window's usable depth rests on one weak measurement.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 50/100.** At the methodology's mid band's floor, and the strongest dimension. **SWE-bench Verified 67.6% and SWE-bench Pro 40.2%** are decent for 3B active (beating gpt-oss-120b's 16.2 SWE-Pro and Haiku 4.5's 29.8 Terminal-Bench in Cohere's chart), but **the AA Coding Index of 33.4 places it clearly mid-tier**, Terminal-Bench 2.0 36.0% is low-mid, and **no LiveCodeBench, AA-SciCode, DeepSWE or Vibe Code Bench figure exists**, so two of three coding references are unmeasured.
- **Cost efficiency: 97/100.** **Apache-2.0 weights, 3B active, 1x H100 at FP8/FP4 or ~18–20 GB at W4A16, free hosted routes** — near the methodology's ~$0.1/$0.2 → 97–99 tier, with **the best throughput-per-GPU story in its size class** (up to 2.8x Devstral Small 2 at identical concurrency, 30% better inter-token latency).
- **Overall Score: 43/100.** (42 + 45 + 66 + 12 + 50) / 5 = 43 → **43**. **A disagreement is recorded rather than reconciled: the repo queue carries 58 for this slug while this report reads 43**, and with BenchLM absent there is no third instrument to arbitrate — the queue figure is the corpus-average of other research agents' raters, this report is Step 5 Preview's own normalized reading, and both are stated side by side rather than flattened. Recommendation: **Cohere's sovereign-dev on-ramp** — an Apache-2.0 30B/3B coding model that runs on a single GPU and connects to any harness, with OpenCode compatibility and the best throughput-per-GPU story in its size class, which is a real proposition for local and air-gapped coding agents. Three cautions: **AA Coding Index 33.4 places it mid-tier**, so it is a local-agent model rather than a frontier one; **GDPval-AA 0.0% and AA-LCR 37.3%** mean it is neither a general agent nor a strong long-context model; and **a tabulation-provenance caveat applies to its three headline coding rows** — they are as tabulated by Poolside using each model's highest publicly-referenced result, which is a favourable-but-legitimate selection rule that inflates the figure relative to a single-harness run.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no page for this model in any spelling** (`north_mini_code`, `north-mini-code` and `North-Mini-Code` all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **A slug-identity note is recorded: the repo folder uses underscores while BenchLM and OpenRouter use hyphens, and neither spelling exists on BenchLM** — so no dotted-slug trap could be resolved and the model is tracker-absent by fact, not by misspelling, the same identity finding recorded for Xing 4.0 29B A4B. **A tabulation-provenance caveat is attached to the three headline coding rows**: SWE-bench Verified 67.6%, SWE-bench Pro 40.2% and Terminal-Bench 2.0 36.0% are as tabulated by Poolside using each model's **highest publicly-referenced result**, a favourable-but-legitimate selection rule that inflates the figures relative to a single-harness run, and it is stated in both the raw-benchmark and coding lines because it changes how much weight those rows carry. **Two 2026-10-19 additions are surfaced as new measurements rather than folded in silently**: the first measured **τ²-bench 37.4%** and the first measured **AA-LCR 37.3%**, the latter of which is the sole reason the context score was trimmed from 70 to 66. **The GDPval-AA 0.0% row is carried as effectively zero rather than omitted**, and it is the reason the model is characterised as a single-purpose harness coder with no general agentic evidence. **The throughput story is recorded as the model's distinctive property** (up to 2.8x Devstral Small 2 at identical concurrency, 30% better inter-token latency, ~18–20 GB at W4A16) and as the reason the cost score reaches 97, because for a 3B-active model the throughput-per-GPU ratio matters more than the nominal price. **A model-difference is recorded rather than resolved: the repo queue carries 58 while this report reads 43, with BenchLM absent so no third instrument exists to arbitrate.** Missing benchmarks (GPQA, HLE, AIME, MATH, CritPt, ARC-AGI, MMLU-Pro, AA Intelligence Index, AA-Omniscience, LiveCodeBench, AA-SciCode, DeepSWE, Vibe Code Bench, MCP-Atlas, OSWorld, Toolathlon, AA Agentic Index, and every vision benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — CohereLabs/North-Mini-Code-1.0 model card (Apache 2.0 weights, architecture, official benchmark table)](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
  - [Cohere API — North Mini Code hosted route and pricing](https://cohere.com/)
  - [OpenRouter — `CohereLabs/north-mini-code:free` (the free route)](https://openrouter.ai/coherelabs/north-mini-code:free)
  - [Poolside — cross-model tabulation (source of the SWE-bench and Terminal-Bench rows under the highest-publicly-referenced-result rule)](https://poolside.ai/)
  - [Repo curated meta — `model/north_mini_code/meta.json` (256K/64K, text-only, Apache 2.0 free)](/model/north_mini_code/meta.json)
  - See also: [`model/devstral-small-2/`](devstral-small-2.md) — the throughput comparison baseline this report records
- Future sources: add a new file next to this one, e.g. `North_Mini_Code_2.md`, using the same headings.
