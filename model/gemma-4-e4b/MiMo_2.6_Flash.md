# Gemma 4 E4B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-optimized Gemma 4 model — 4.5B effective parameters (8B with per-layer embeddings), multimodal with native image + audio input for phones, laptops and Jetson-class hardware.
- **Provider / access:** Open weights (Apache 2.0, ungated HF checkpoint `google/gemma-4-E4B-it`); hosted via Deep Infra ($0.02/$0.10 per 1M), Pioneer ($0.20/$0.20); free community quantizations (MLX 4-bit, IQ4_XS) at $0/$0 on atomic-chat; logical models.dev ID `opencode/gemma-4-e4b`. OpenAI-compatible local serving via llama.cpp / LiteRT-LM / vLLM / MLX. No OpenCode Zen Free ID found (models.dev catalog, 2026-10-05).
- **Release / knowledge:** released April 2026 (repo meta.json; HF checkpoint created 2026-03-02); knowledge cutoff not disclosed.
- **IDs:** `google/gemma-4-E4B-it` (HF, Deep Infra, Pioneer), `gemma-4-E4B-it-MLX-4bit` / `-IQ4_XS` (atomic-chat), logical `opencode/gemma-4-e4b`.
- **Context window:** 131,072 total (128K official spec, model card); max output 8,192 (Deep Infra) / 32,768 (Pioneer), verified 2026-10-05 via models.dev.
- **Modalities:** text, image, audio in; text out; reasoning/thinking configurable; native function calling; structured-output/temperature not separately flagged on hosted rows.
- **Pricing (as of 2026-10-05):** free to self-host (Apache 2.0 open weights); hosted ~$0.02 in / $0.10 out per 1M (Deep Infra; Pioneer $0.20/$0.20); community $0/$0 quantized routes (atomic-chat). No Zen Free ID → cost scored on open-weights/hosted basis.
- **Architecture:** 4.5B effective (8B with embeddings), 42 layers, hybrid 512-token sliding-window + global attention, per-layer embeddings (PLE), ~150M vision encoder + ~300M audio encoder, 262K vocabulary.

### Raw benchmarks found

> First-party numbers from the official Google DeepMind Gemma 4 model card (HF `google/gemma-4-E4B-it` README, retrieved 2026-10-05); instruction-tuned, thinking enabled.

Agent / tool use:

- Tau2 (average over 3): **42.2%** <(model card; family ref: 31B 76.9%, 12B 69.0%)>
- Terminal-Bench 2.1 / Terminal-Bench Hard: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.6%** <(model card; 31B 84.3%)>
- MMLU Pro: **69.4%** · MMMLU: 76.6% <(model card; beats Gemma 3 27B no-think on both)>
- AIME 2026 (no tools): **42.5%** · BigBench Extra Hard: 33.1% <(model card)>
- HLE: no verified public score found (family card reports HLE only for 31B/26B/12B)
- SuperBench / Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR / CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **52.0%** <(model card; frontier ref ≥65% → 90-100)>
- Codeforces ELO: **940** <(model card; 31B 2150, Gemma 3 27B 110)>
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **25.4%** <(model card; 31B 66.4%, Gemma 3 27B 13.5%)>

### Normalized scores (1–100)

- **Tool use: 45/100.** Sole measured datapoint is Tau2 42.2% (family ref 31B 76.9%); no Terminal-Bench, GDPval, MCP-Atlas or Claw-Eval result exists for this checkpoint → low-mid band, 45.
- **Reasoning: 58/100.** MMLU Pro 69.4% and GPQA 58.6% are strong for an edge model but well under frontier refs (GPQA ≥90% → 100); AIME 42.5% and BigBench Extra Hard 33.1% hold the composite at 58.
- **Context window: 62/100.** 128K window sits just under the 131K tier floor, and MRCR v2 128K retrieval is only 25.4% (31B scores 66.4%) → 62.
- **Multimodal: 72/100.** Native text+image+audio in, but vision is mid-tier (MMMU Pro 52.6%, MATH-Vision 59.5%, MedXPertQA MM 28.7%) and audio evidence is ASR-only (FLEURS WER 0.08, CoVoST 35.54) with no audio-QA bench; text-only output → 72, in line with peer reports (68–78).
- **Coding: 50/100.** LiveCodeBench v6 52.0% (frontier ref ≥65%) plus Codeforces 940, with no SWE-bench or terminal evidence → 50.
- **Cost efficiency: 98/100.** Apache 2.0 open weights ($0 self-host) with hosted $0.02/$0.10 per 1M; no Zen Free ID available as an evaluable free tier → 98, not 100.
- **Overall Score: 57/100.** (45+58+62+72+50)/5 = 57.4 → 57 — best fit: phone/Jetson-class on-device multimodal assistant with voice input; not for agentic tool loops or frontier-reasoning work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Google DeepMind Gemma 4 model card on Hugging Face, models.dev provider catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.