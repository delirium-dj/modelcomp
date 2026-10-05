# Gemma 4 E2B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's smallest Gemma 4 edge model — 2.3B effective parameters (5.1B with per-layer embeddings) with native image + audio input for phones and embedded hardware.
- **Provider / access:** Open weights (Apache 2.0, ungated HF checkpoint `google/gemma-4-E2B-it`); hosted via Amazon Bedrock (`google.gemma-4-e2b`, $0.04/$0.08 per 1M) and Pioneer ($0.10/$0.10); free community quantization (IQ4_XS) at $0/$0 on atomic-chat; logical models.dev ID `opencode/gemma-4-e2b`. OpenAI-compatible local serving via llama.cpp / LiteRT-LM / vLLM / MLX. No OpenCode Zen Free ID found (models.dev catalog, 2026-10-05).
- **Release / knowledge:** released April 2026 (repo meta.json; HF checkpoint created 2026-03-02); knowledge cutoff not disclosed.
- **IDs:** `google/gemma-4-E2B-it` (HF), `google.gemma-4-e2b` (Amazon Bedrock), `gemma-4-E2B-it-IQ4_XS` (atomic-chat), logical `opencode/gemma-4-e2b`.
- **Context window:** 131,072 total (128K official spec, model card); max output 8,192 (Bedrock) / 32,768 (Pioneer), verified 2026-10-05 via models.dev.
- **Modalities:** text, image, audio in; text out; reasoning/thinking configurable (family-wide); function calling supported by the family but not separately flagged on hosted rows.
- **Pricing (as of 2026-10-05):** free to self-host (Apache 2.0 open weights, phone-class RAM); hosted ~$0.04 in / $0.08 out per 1M (Bedrock; Pioneer $0.10/$0.10); community $0/$0 quantized route (atomic-chat). No Zen Free ID → cost scored on open-weights/hosted basis.
- **Architecture:** 2.3B effective (5.1B with embeddings), 35 layers, hybrid 512-token sliding-window + global attention, per-layer embeddings (PLE), ~150M vision encoder + ~300M audio encoder, 262K vocabulary.

### Raw benchmarks found

> First-party numbers from the official Google DeepMind Gemma 4 model card (HF `google/gemma-4-E2B-it` README, retrieved 2026-10-05); instruction-tuned, thinking enabled.

Agent / tool use:

- Tau2 (average over 3): **24.5%** <(model card; family ref: 31B 76.9%, E4B 42.2%)>
- Terminal-Bench 2.1 / Terminal-Bench Hard: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **43.4%** <(model card; ~Gemma 3 27B 42.4%)>
- MMLU Pro: **60.0%** · MMMLU: 67.4% <(model card)>
- AIME 2026 (no tools): **37.5%** · BigBench Extra Hard: 21.9% <(model card)>
- HLE: no verified public score found (family card reports HLE only for 31B/26B/12B)
- SuperBench / Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR / CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **44.0%** <(model card; frontier ref ≥65% → 90-100; Gemma 3 27B 29.1%)>
- Codeforces ELO: **633** <(model card; 31B 2150)>
- SWE-bench Verified / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **19.1%** <(model card; 31B 66.4%, Gemma 3 27B 13.5%)>

### Normalized scores (1–100)

- **Tool use: 38/100.** Only measured datapoint is Tau2 24.5% (E4B 42.2%, 31B 76.9%); no Terminal-Bench, GDPval, MCP-Atlas or Claw-Eval result exists → low band, 38.
- **Reasoning: 50/100.** MMLU Pro 60.0% and GPQA 43.4% (≈ Gemma 3 27B) are mid-low; AIME 37.5% and BigBench Extra Hard 21.9% keep the composite at 50.
- **Context window: 58/100.** 128K window under the 131K tier floor with MRCR v2 128K retrieval at just 19.1% (31B 66.4%) → 58.
- **Multimodal: 68/100.** Native text+image+audio in, but vision is modest (MMMU Pro 44.2%, MATH-Vision 52.4%, OmniDocBench edit distance 0.290) and audio evidence is ASR-only (FLEURS WER 0.09, CoVoST 33.47); text-only output → 68, in line with peer reports (70–80).
- **Coding: 40/100.** LiveCodeBench v6 44.0% (frontier ref ≥65%) and Codeforces 633, no SWE-bench/terminal evidence → 40.
- **Cost efficiency: 98/100.** Apache 2.0 open weights ($0 self-host, phone-class RAM) with hosted $0.04/$0.08 per 1M; no Zen Free ID as an evaluable free tier → 98, not 100.
- **Overall Score: 51/100.** (38+50+58+68+40)/5 = 50.8 → 51 — best fit: free offline on-device helper for short multimodal tasks (voice, image snippets); escalate anything chained, agentic, or reasoning-heavy.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Google DeepMind Gemma 4 model card on Hugging Face, models.dev provider catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.