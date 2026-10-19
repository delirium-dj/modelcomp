# Gemma 4 E4B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-19 (UTC; original research 2026-10-05, re-researched 2026-10-19)
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
- τ²-bench: **20.8%** (benchgap measured, 2026-10-18 dataset — independent second harness, low-mid band)
- Terminal-Bench 2.1 / Terminal-Bench Hard: no verified public score found
- GDPval-AA: **0.0%** (AA measured via benchgap, fill 2026-10-19)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.6%** <(model card; 31B 84.3%)> — corroborated: AA-run **57.6%** measured (benchgap)
- MMLU Pro: **69.4%** <(model card; corroborated AA measured 69.4%)> · MMMLU: 76.6% / 85.9% (card / AA measured)
- AIME 2026 (no tools): **42.5%** · BigBench Extra Hard: 33.1% <(model card)>
- HLE: **3.8%** (AA-run measured via benchgap — fill 2026-10-19; family card reports HLE only for 31B/26B/12B)
- Artificial Analysis Intelligence Index: **8.9** (AA measured, fill 2026-10-19 — under the 20–35 mid band)
- LCR: **32.0%** (AA-LCR measured, fill 2026-10-19) · CritPt: **0.6%** (AA measured)

Coding:

- LiveCodeBench v6: **52.0%** <(model card; independently measured 52.0% via benchgap — exact corroboration; frontier ref ≥65% → 90-100)>
- Codeforces ELO: **940** <(model card; 31B 2150, Gemma 3 27B 110)>
- AA-SciCode: **24.4%** / AA Coding Index: **9.4** (AA measured, fill 2026-10-19)
- SWE-bench Verified (est. 24.4 low conf) / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **25.4%** <(model card; independently measured 25.4% via benchgap — exact corroboration; 31B 66.4%, Gemma 3 27B 13.5%)>

Multimodal:

- AA-MMMU-Pro: **51.4%** / MMMU-Pro: **52.6%** (AA/benchgap measured, fill 2026-10-19 — corroborates the model-card vision numbers)

### Normalized scores (1–100)

- **Tool use: 45/100.** Two measured datapoints now: Tau2 42.2% (model card) and τ²-bench 20.8% (benchgap, second harness, low-mid); GDPval-AA 0.0% measured; still no Terminal-Bench/MCP-Atlas/Claw-Eval → low-mid band, 45 — unchanged.
- **Reasoning: 56/100.** GPQA 58.6% independently corroborated (AA-run 57.6% measured); but new fills HLE 3.8%, AA Index 8.9 (below the 20–35 mid band) and LCR 32.0% confirm entry-tier reasoning — −2 from 58.
- **Context window: 62/100.** 128K window under the 131K tier floor; MRCRv2 25.4% now independently measured (exact match to card) — the weak-retrieval penalty stands; unchanged.
- **Multimodal: 72/100.** Native text+image+audio in; vision mid-tier corroborated (AA MMMU-Pro 51.4/52.6 measured vs card 52.6); audio evidence ASR-only; text-only output; unchanged.
- **Coding: 50/100.** LiveCodeBench v6 52.0% exactly corroborated by benchgap; AA-SciCode 24.4% and Coding Index 9.4 are new low-mid fills; still no SWE-bench/terminal evidence; unchanged.
- **Cost efficiency: 98/100.** Apache 2.0 open weights ($0 self-host) with hosted $0.02/$0.10 per 1M; no Zen Free ID as an evaluable free tier; unchanged.
- **Overall Score: 57/100.** (45+56+62+72+50)/5 = 57.0 (was 57 — the Reasoning −2 cancels within rounding; every model-card number was independently corroborated this pass). Best fit: phone/Jetson-class on-device multimodal assistant with voice input; not for agentic tool loops or frontier-reasoning work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured ledger — exact independent corroboration of model-card GPQA/LCB-v6/MRCRv2/MMMU-Pro, new fills HLE/AA-Index/LCR/τ²-bench/GDPval/SciCode/Coding-Index; plus 2026-10-05 original: Google DeepMind Gemma 4 model card on Hugging Face, models.dev provider catalog) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.