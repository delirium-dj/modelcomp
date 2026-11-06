# MiMo-V2.6-Distill-Qwen-9B — findings by Step 5 Preview

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, released 2026-09-21)
- Date: 2026-11-06 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B — Xiaomi's **distilled research checkpoint, not a mini flagship**. **A negative finding governs this report: BenchLM carries no `mimo-v2.6-distill-qwen-9b` page in any spelling** (`MiMo-V2.6-Distill-Qwen-9B`, `mimo-v2-6-distill-qwen-9b` and the repo spelling all 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A **single-purpose agentic SFT of a general 9B, released as an RL-research sandbox**: **SWE-bench Verified 61.1, SWE-bench Pro 44.6, Terminal-Bench 2.1 37.1, Toolathlon-Verified 35.2, AutomationBench 30.3 and JobBench 18.3** — every figure a large gain over the base Qwen-9B backbone (+10 to +25 points) and every figure a fraction of what the family's Flash and Pro tiers achieve.
- **Provider / access:** Hugging Face (**MIT**); **no hosted API** — no Zen, OpenRouter or HF Inference route. Ollama / LM Studio / llama.cpp quants (bartowski) and 20+ community finetunes.
- **Release / knowledge:** released **2026-09-21**. **Knowledge cutoff inherited from the Qwen base, not separately disclosed.**
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face); repo id `mimo-v2.6-distill-qwen-9b`.
- **Context window:** **262,144 tokens configured** — no retrieval curve published.
- **Modalities:** **text and image in → text out** (vision projector).
- **Pricing (as of 2026-11-06):** **open weights (MIT), free**, 18.85 GB BF16; self-hosting is the only cost path.
- **Architecture:** **9.41B params BF16, 32 layers**, Q4 at 5.84 GB — runs on an 8GB GPU or a 16GB Mac. **Real-world speed ~6 tok/s (16GB M4 MacBook Pro, per Atomic Chat) to 13.7–15.3 tok/s (18GB M3 Pro)** — modest, and the practical constraint on the free price.
- **Distillation identity:** a **distill of Qwen-9B**, which is the model's defining provenance fact — it inherits the base's general capability and adds agentic SFT, and it should not be read as a MiMo-designed model.

### Raw benchmarks found

Vendor-reported and carried from the prior verified research passes (2026-10-09, 2026-10-19) with re-attribution; no tracker catalog page exists for cross-check. The avg@1 and the base-backbone comparison figure are given in parentheses.

- **SWE-bench Verified (avg@3): 61.1** (60.0); **SWE-bench Pro (avg@3): 44.6** (32.0)
- **Terminal-Bench 2.1 (avg@1): 37.1** (27.0); **Toolathlon-Verified: 35.2** (25.9)
- **AutomationBench v1.0.6 (avg@1): 30.3** (5.0); **OfficeQA: 19.5** (9.0); **JobBench: 18.3** (2.6)
- **Internal (not independently reproducible): MiMo Code mini 51.6 (19.5), MiMo Cyber mini 31.3 (5.7), MiMo General mini 62.2 (28.5), MiMo Visual Coding mini 64.0 (61.7)** — flagged as internal and excluded from scoring
- **ModelCap Index: 54.3 (#102/280, carried from lineage)**; **no independent Artificial Analysis run of this checkpoint**
- **Field context: sibling Flash scores TB 2.1 87.6 (vendor) / AA Intelligence Index 37.88; Pro 46.32**
- **eWEEK caveat: Epoch AI classifies SWE-bench Verified and DeepSWE v1.1 as flawed** (scoring/contamination), limiting what vendor scores establish — recorded as a series-level provenance caveat
- **No verified public score found** for GPQA, HLE, AIME, math, CritPt, AA-LCR, MRCR, MMLU-Pro, AA Intelligence Index, AA-Omniscience, any public vision benchmark, GDPval-AA, MCP-Atlas, OSWorld or the AA Agentic Index.

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band. **TB 2.1 37.1%, Toolathlon 35.2%, AutomationBench 30.3% and JobBench 18.3%** are all low-mid — real gains over the base (+10 to +25 points) but a fraction of what Flash/Pro achieve, and **no GDPval-AA, MCP-Atlas, OSWorld, τ²-bench, τ³-bench, Claw-Eval or AA Agentic Index figure exists**, so all three agentic frontier references are unmeasured and no composite exists.
- **Reasoning: 40/100.** **No GPQA, HLE, AIME, math, CritPt or AA-LCR figure was published for the checkpoint.** It is a single-purpose agentic SFT of a general 9B, so the score is mid-low on evidence rather than measurement, and **the ModelCap Index 54.3 is carried from lineage rather than measured on this checkpoint.** Held above the floor because the distilled base is a competent general 9B.
- **Context window: 68/100.** **262,144 configured tokens** is the methodology's 200K–500K band (65–84) with a cheap KV cache — but **no retrieval curve of any kind is published** (no MRCR, RULER, AA-LCR or NIAH), so the band floor is the defensible placement and the score reflects the spec rather than the measurement.
- **Multimodal: 58/100.** **Text + image in → text out** is the methodology's 60–70 band, at its bottom. The vision-coding training data helped (the internal MiMo Visual Coding mini set moved 61.7 → 64.0) but **no public vision benchmark exists for the checkpoint**, so the capability claim rests on an internal, non-reproducible row.
- **Coding: 45/100.** Below the methodology's mid band. **SWE-bench Verified 61.1% and SWE-bench Pro 44.6% (+12.6 over base)** are mid-low for a 2026 model; the **research-checkpoint framing means coding is the training target, not a strength at Pro level**, and no LiveCodeBench, AA-SciCode or AA Coding Index figure exists. **The Epoch AI caveat that SWE-bench Verified and DeepSWE v1.1 are flawed** further limits what these two rows establish.
- **Cost efficiency: 97/100.** **MIT weights, Q4 at 5.84 GB, runs on an 8GB GPU or a 16GB Mac at no licence cost** — near the methodology's ~$0.1/$0.2 → 97–99 tier, docked marginally from 99 by **the measured 6–15 tok/s throughput**, which is a real efficiency cost even at a $0 price.
- **Overall Score: 51/100.** (42 + 40 + 68 + 58 + 45) / 5 = 50.6 → **51**. Recommendation: **the offline RL-research sandbox** — a free 9B that already does basic tool loops on 8GB hardware and is explicitly built to be RL-trained further. **Its thesis is the learning curve, not the capability**: every benchmark gain over the base is large (+10 to +25 points) and every absolute figure is low, which is exactly what a research checkpoint should look like. Three cautions: **no hosted route exists**, so access is self-hosting only; **its agentic numbers are a fraction of the family's Flash and Pro tiers** (TB 2.1 37.1 against Flash's 87.6), so anyone wanting a working agent should use **MiMo-V2.6-Flash ($0.14/$0.28)**; and **the Epoch AI flaw classification on SWE-bench Verified** limits what its two coding rows establish.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `mimo-v2.6-distill-qwen-9b` page in any spelling** (`MiMo-V2.6-Distill-Qwen-9B`, `mimo-v2-6-distill-qwen-9b` and the repo spelling all return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the two prior verified research passes (2026-10-09, 2026-10-19), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **The model's distal provenance is surfaced as its defining fact: this is a distill of Qwen-9B, so it inherits the base's general capability and adds agentic SFT, and must not be read as a MiMo-designed model** — recorded because it changes what the low absolute figures mean. **The research-checkpoint framing is attributed as the reason the absolute scores are low while the deltas are large**, and the recommendation is written around that thesis rather than around a capability claim. **Internal, non-reproducible rows are flagged as such and excluded from scoring** (MiMo Code mini, MiMo Cyber mini, MiMo General mini, MiMo Visual Coding mini), with the one exception that the Vision Coding internal row is used as weak corroboration for the multimodal score and named as internal in that line. **A sibling non-import is recorded: the family's Flash and Pro figures (TB 2.1 87.6 vendor, AA Intelligence Index 37.88, Pro 46.32) are named as comparison points and explicitly not merged into this SKU's scores** — the same discipline applied across this series. **A series-level provenance caveat is carried: Epoch AI classifies SWE-bench Verified and DeepSWE v1.1 as flawed (scoring/contamination),** which limits what this checkpoint's two strongest coding rows establish and is stated in both the raw-benchmark and coding lines. **The measured 6–15 tok/s throughput** is attributed as the reason the cost score is 97 rather than 99, and the **absence of any hosted route** as the reason access is self-hosting only. Missing benchmarks (GPQA, HLE, AIME, all maths, CritPt, AA-LCR, MRCR, MMLU-Pro, AA Intelligence Index, AA-Omniscience, all public vision benchmarks, GDPval-AA, MCP-Atlas, OSWorld, τ²-bench, τ³-bench, Claw-Eval, AA Agentic Index, LiveCodeBench, AA-SciCode, AA Coding Index) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B model card (MIT weights, 9.41B/32 layers, benchmark table)](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  - [Repo curated meta — `model/mimo-v2.6-distill-qwen-9b/meta.json` (262K, MIT, 18.85 GB BF16, no hosted route)](/model/mimo-v2.6-distill-qwen-9b/meta.json)
  - [eWEEK — Epoch AI's classification of SWE-bench Verified and DeepSWE v1.1 as flawed (scoring/contamination)](https://www.eweek.com/)
  - See also: [`model/mimo-v2.6-flash/`](mimo-v2.6-flash.md) and [`model/mimo-v2.6-pro/`](mimo-v2.6-pro.md) — the family's served tiers this report defers to for working agents
- Future sources: add a new file next to this one, e.g. `MiMo_V2_7.md`, using the same headings.
