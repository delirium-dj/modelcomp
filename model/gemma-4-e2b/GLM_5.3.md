# Gemma 4 E2B — findings by GLM 5.3

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's 2.3B-effective edge variant of Gemma 4 (April 2026) for phones, laptops and Jetson/Pi-class hardware — native text+image+audio input in the smallest Gemma 4 footprint.
- **Provider / access:** hosted APIs at ~$0.04 in / $0.08 out per 1M; self-host via Apache 2.0 open weights. Project meta lists Zen ID `opencode/gemma-4-e2b` (absent from the live Zen models list when re-checked 2026-10-08).
- **Release / knowledge:** April 2026 (Gemma 4 generation); knowledge cutoff not stated on tracked pages.
- **IDs:** `opencode/gemma-4-e2b` (project meta).
- **Context window:** 128,000 total verified (BenchLM 128K).
- **Modalities:** text, image, audio in; text out; reasoning yes; tool calls yes (τ²-bench measured); JSON mode not verified.
- **Pricing (as of 2026-10-08):** ~$0.04 in / $0.08 out per 1M hosted; Apache 2.0 self-host $0.
- **Architecture:** edge-tier open weights, 2.3B effective (project meta; HF Gemma 4 blog).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **20.8%** (Artificial Analysis via BenchLM)
- GDPval-AA: **36** (0.0% normalized) (AA via BenchLM)
- Terminal-Bench / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **43.4%** (upstream HF Gemma 4 blog) / **43.3%** (AA harness) (BenchLM)
- MMLU-Pro: **60%** (upstream source via BenchLM)
- HLE: **4.8%** (AA via BenchLM)
- AA-LCR: **16.3%** (AA via BenchLM)
- CritPt: **0.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **7.8** (AA via BenchLM)
- AA-Omniscience Index: **-23.6** (accuracy 6.6%, hallucination rate 32.4%) (AA via BenchLM)

Coding:

- AA Coding Index: **7.2%** (AA via BenchLM)
- SWE-bench / LiveCodeBench / SciCode: **no verified public score found**

Multimodal:

- AA-MMMU-Pro: **44.6%** (AA via BenchLM)
- audio-input benchmark: **no verified public score found**

Long context:

- 128K window verified (BenchLM); AA-LCR 16.3% is the only long-context proxy — near-floor.

Instruction following:

- AA-IFBench: **38.0%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 20/100.** τ²-bench 20.8% and GDPval-AA 36 sit at the absolute bottom of the tracked field — tool calling exists but does not accomplish real work at this scale.
- **Reasoning: 38/100.** GPQA ~43% and MMLU-Pro 60% are fair for 2.3B effective, but AA Index 7.8, HLE 4.8%, CritPt 0.0% and 6.6% knowledge accuracy put it in the low band.
- **Context window: 50/100.** 128K lands at the 100K–200K tier floor, with near-floor long-context reasoning (AA-LCR 16.3%).
- **Multimodal: 68/100.** Native text+image+audio input (audio tier) but the only verified visual score (MMMU-Pro 44.6%) is weak — broad coverage, shallow quality; text-only output.
- **Coding: 25/100.** AA Coding Index 7.2% with no other coding evidence — snippet-level only.
- **Cost efficiency: 98/100.** ~$0.04/$0.08 per 1M hosted and free Apache 2.0 self-hosting on Pi/Jetson-class hardware — the model's entire reason to exist.
- **Overall Score: 40/100.** (20 + 38 + 50 + 68 + 25) / 5 = 40.2 → 40. Best-fit recommendation: on-device voice/vision assistant with trivial task depth — classification, captioning, command parsing; never an agent driver or coder.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (BenchLM aggregating Artificial Analysis leaderboards and the upstream Gemma 4 blog, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
