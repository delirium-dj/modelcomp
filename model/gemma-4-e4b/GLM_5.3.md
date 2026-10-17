# Gemma 4 E4B — findings by GLM 5.3

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-10-08 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April 2026 edge-optimized multimodal model (4.5B effective, 8B with embeddings) built for mobile/edge latency — native text+image+audio input with reasoning and function calling in an on-device footprint.
- **Provider / access:** hosted APIs at ~$0.02 in / $0.10 out per 1M; self-host via Apache 2.0 open weights. Project meta lists Zen ID `opencode/gemma-4-e4b` (absent from the live Zen models list when re-checked 2026-10-08).
- **Release / knowledge:** April 2026 (Gemma 4 generation); knowledge cutoff not stated on tracked pages.
- **IDs:** `opencode/gemma-4-e4b` (project meta).
- **Context window:** 128,000 total verified (BenchLM 128K).
- **Modalities:** text, image, audio in; text out; reasoning yes; function calling yes (project meta); JSON mode not verified.
- **Pricing (as of 2026-10-08):** ~$0.02 in / $0.10 out per 1M hosted; Apache 2.0 self-host $0.
- **Architecture:** edge-tier open weights, 4.5B effective / 8B with embeddings (project meta; HF Gemma 4 blog).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **20.8%** (Artificial Analysis via BenchLM)
- GDPval-AA: **177** (0.0% normalized) (AA via BenchLM)
- Terminal-Bench / Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (upstream HF Gemma 4 blog) / **57.6%** (AA harness) (BenchLM)
- MMLU-Pro: **69.4%** (upstream source via BenchLM)
- HLE: **3.8%** (AA via BenchLM)
- AA-LCR: **32.0%** (AA via BenchLM)
- CritPt: **0.6%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **8.9** (AA via BenchLM)
- AA-Omniscience Index: **-19.7** (accuracy 8.6%, hallucination rate 30.9%) (AA via BenchLM)

Coding:

- AA Coding Index: **9.4%** (AA via BenchLM)
- AA-SciCode: **24.4%** (AA via BenchLM)
- LiveCodeBench v6: **52.0%** (official HF Gemma 4 E4B model card via BenchLM — new row this pass)
- SWE-bench: **no verified public score found**

Multimodal:

- AA-MMMU-Pro: **51.4%** (AA via BenchLM); MMMU-Pro **52.6%** (official HF card — new row this pass)
- audio-input benchmark: **no verified public score found**

Long context:

- 128K window verified (BenchLM); AA-LCR 32.0% and MRCRv2 **25.4%** (official HF card — new row this pass) are the only long-context proxies — weak; no other MRCR/RULER rows published.

Instruction following:

- AA-IFBench: **44.2%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 25/100.** τ²-bench 20.8% and GDPval-AA 177 sit at the bottom of the measured range — function calling exists on paper, but independent agentic results are near-floor for the tracked field.
- **Reasoning: 42/100.** GPQA ~58% and MMLU-Pro 69.4% are respectable for an edge model, but AA Index 8.9, HLE 3.8%, CritPt 0.6% and 8.6% knowledge accuracy cap it at the low-mid band.
- **Context window: 50/100.** 128K lands at the 100K–200K tier floor, with weak measured long-context reasoning (AA-LCR 32.0%).
- **Multimodal: 72/100.** Native text+image+audio input (audio tier) with only MMMU-Pro 51.4% as the verified visual score — broad modality coverage, shallow quality; text-only output.
- **Coding: 33/100.** Updated 30→33: the new official LiveCodeBench v6 52.0% row is a solid edge-tier result, though AA Coding Index 9.4% and SciCode 24.4% remain near-floor — not a coding model beyond simple snippets.
- **Cost efficiency: 99/100.** ~$0.02/$0.10 per 1M hosted is essentially free, and Apache 2.0 weights run on-device with no serving cost — the whole point of the E-series.
- **Overall Score: 44/100.** (25 + 42 + 50 + 72 + 33) / 5 = 44.4 → 44 — unchanged after half-up. Best-fit recommendation: on-device multimodal assistant work (captioning, OCR-lite, voice front-ends) where latency and cost dominate; never as an agent driver or coder.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-16 (first researched 2026-10-08)
- Method: public internet research (BenchLM 20-row profile re-checked 2026-10-16 — added the official HF-card rows LiveCodeBench v6 52.0%, MMMU-Pro 52.6%, MRCRv2 25.4%; all AA rows stable; BenchLM composite 31.02 #178/954). Coding 30→33 on the new LCB row; Overall unchanged at 44. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
