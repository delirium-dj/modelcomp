# GLM 4.7 Flash — findings by MiMo 2.6 Flash

- Source: Z.ai / Zhipu AI (`zai-org/GLM-4.7-Flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.7 Flash (GLM-4.7-Flash)
- **Short description:** Z.ai's MIT-licensed 30B-A3B MoE (31.2B total / ~3B active) — billed by the vendor as "the strongest model in the 30B class" (2026-01-20), single-consumer-GPU deployable (60–80 tok/s on a 24 GB card), free on the Z.ai API, with unusually strong agentic numbers for its weight class (τ²-Bench 79.5, SWE-bench Verified 59.2).
- **Provider / access:** Z.ai API (free, $0/$0); open weights on Hugging Face (`zai-org/GLM-4.7-Flash`, **MIT** license); Ollama (`glm-4.7-flash`, 19 GB Q4_K_M, 1.9M downloads); vLLM/SGLang/KTransformers; requires Ollama 0.14.3+ per library page.
- **Release / knowledge:** released 2026-01-20 (NYU Shanghai RITS write-up; Ollama listing updated ~3 months ago); knowledge cutoff not published.
- **IDs:** `zai-org/GLM-4.7-Flash` (HF), opencode id `opencode/glm-4.7-flash`, Ollama `glm-4.7-flash`.
- **Context window:** **conflicting evidence** — 200K per BenchLM model snapshot and free-model.com ("200K context"), 198K in the Ollama manifest; the repo's `meta.json` claims 1M total (not corroborated by any independent tracker found); an NYU RITS summary says 128K. Scored conservatively at 200K.
- **Modalities:** text in/out (no vision/audio).
- **Pricing (as of 2026-10-21):** $0 input / $0 output on Z.ai (BenchLM/opper list $0.00/$0.00); self-host free (MIT); Ollama Q4 ≈ 19 GB, bf16 ≈ 60 GB.
- **Architecture:** MoE — 31.2B total, ~3B active, 64 routed experts (4 active) + 1 shared (GLM-4.x MoE family); hybrid thinking mode; function calling with auto-tool-choice.

### Raw benchmarks found

> Vendor model card (reproduced by Ollama and NYU Shanghai RITS) unless noted.

Agent / tool use:

- τ²-Bench: **79.5%** (vendor; vs Qwen3-30B-A3B-Thinking-2507 49.0, GPT-OSS-20B 47.7)
- τ²-Bench Telecom: **99%** (opper.ai listing)
- BrowseComp: **42.8%** (vendor; vs peer 2.29 / 28.3)
- Terminal-Bench Hard: **22%** (opper.ai listing)
- GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA: **75.2%** (vendor card) — opper.ai lists GPQA Diamond **58%** for the same model (harness variance; both cited, vendor figure scored)
- AIME 2025: **91.6%** (vendor)
- HLE: **14.4%** (vendor) / **8%** (opper, likely w/o tools)
- Long-context reasoning: **42%** (opper.ai)
- MMLU-Pro / Intelligence Index: no verified public score found

Coding:

- SWE-bench Verified: **59.2%** (vendor; independently reproduced on BenchLM's public lane)
- LiveCodeBench v6: **64.0%** (vendor; vs peer 66.0 / 61.0)
- Terminal-Bench 2.1: no verified public score found

Long context:

- No MRCR/RULER figure; context size itself disputed (see card)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-Bench 79.5% and BrowseComp 42.8% are outstanding for a 3B-active model (both far above listed peers), τ² Telecom 99% corroborates — but Terminal-Bench Hard 22% is weak and no GDPval/Claw row exists.
- **Reasoning: 80/100.** AIME25 91.6 and GPQA 75.2 (vendor) are near-high-tier for the class; HLE 14.4 stays low and the GPQA/opper variance (58 vs 75.2) plus no MMLU-Pro row cap it at 80.
- **Context window: 70/100.** Scored at 200K (BenchLM/Ollama/free-model agree on ~200K); the repo meta's 1M claim is unverified — at 1M it would score 95–100 instead, so this dim is flagged as the main uncertainty.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 59.2% (vendor + BenchLM) and LiveCodeBench v6 64.0% put it in the solid-mid band, roughly tripling its Qwen3-30B peer on SWE; no Terminal-Bench 2.1 row keeps it out of the high band.
- **Cost efficiency: 97/100.** MIT weights + $0 hosted API + single-24 GB-GPU runtime — near-zero cost with a free cloud lane.
- **Overall Score: 63/100.** Mean of (76 + 80 + 70 + 15 + 74) / 5 = 63.0 → 63. Best fit: free MIT agentic workhorse for single-GPU setups — τ²/BrowseComp-grade tool use with real SWE ability; text-only, and confirm the actual context ceiling before long-doc work.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (Z.ai/Ollama vendor model card, NYU Shanghai RITS write-up, BenchLM public-lane rows, opper.ai listing, free-model.com/models.dev specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
