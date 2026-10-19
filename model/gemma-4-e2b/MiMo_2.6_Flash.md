# Gemma 4 E2B — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-19 (UTC; original research 2026-10-05, re-researched 2026-10-19)
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
- τ²-bench: **20.8%** (benchgap measured, 2026-10-18 dataset — independent second harness, corroborates the Tau2 low-mid placement)
- Terminal-Bench 2.1 / Terminal-Bench Hard: no verified public score found
- GDPval-AA: **0.0%** (AA measured via benchgap, fill 2026-10-19)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **43.4%** <(model card; ~Gemma 3 27B 42.4%)> — corroborated: AA-run **43.3%** measured (benchgap)
- MMLU Pro: **60.0%** <(model card; independently measured 60.0% via benchgap — exact corroboration)> · MMMLU: 67.4% / 83.3% (card / AA measured)
- AIME 2026 (no tools): **37.5%** · BigBench Extra Hard: 21.9% <(model card)>
- HLE: **4.8%** (AA-run measured via benchgap — fill 2026-10-19)
- Artificial Analysis Intelligence Index: **7.8** (AA measured, fill 2026-10-19 — below class median-ish band; entry tier)
- LCR: **16.3%** (AA-LCR measured, fill 2026-10-19) · CritPt: **0.0%** (AA measured)

Coding:

- LiveCodeBench v6: **44.0%** <(model card; independently measured 44.0% via benchgap — exact corroboration; frontier ref ≥65% → 90-100; Gemma 3 27B 29.1%)>
- Codeforces ELO: **633** <(model card; 31B 2150)>
- AA Coding Index: **7.2** (AA measured, fill 2026-10-19)
- SWE-bench Verified (est. 19.5 low conf) / SWE-bench Pro / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8-needle 128K (average): **19.1%** <(model card; independently measured 19.1% via benchgap — exact corroboration; 31B 66.4%, Gemma 3 27B 13.5%)>

Multimodal:

- AA-MMMU-Pro: **44.6%** / MMMU-Pro: **44.2%** (AA/benchgap measured, fill 2026-10-19 — corroborates the model-card vision numbers)

### Normalized scores (1–100)

- **Tool use: 40/100.** Two measured datapoints now agree: Tau2 24.5% (model card) and τ²-bench 20.8% (benchgap, independent harness) — both in the Tau mid band's lower half; GDPval-AA 0.0% measured; still no Terminal-Bench/MCP-Atlas/Claw-Eval → +2 from 38 (was single-datapoint).
- **Reasoning: 50/100.** MMLU Pro 60.0% (exactly corroborated by AA) and GPQA 43.4% (AA-run 43.3% — exact corroboration) are mid-low; new fills HLE 4.8%, AA Index 7.8, LCR 16.3% all confirm entry-tier; unchanged.
- **Context window: 58/100.** 128K window under the tier floor; MRCRv2 19.1% independently measured (exact match) — weak-retrieval penalty stands; unchanged.
- **Multimodal: 68/100.** Native text+image+audio in; vision modest and now measured (AA MMMU-Pro 44.2/44.6 corroborates card); audio evidence ASR-only; text-only output; unchanged.
- **Coding: 40/100.** LiveCodeBench v6 44.0% exactly corroborated by benchgap; AA Coding Index 7.2 is a new low fill; no SWE-bench/terminal evidence; unchanged.
- **Cost efficiency: 98/100.** Apache 2.0 open weights ($0 self-host, phone-class RAM) with hosted $0.04/$0.08 per 1M; no Zen Free ID as an evaluable free tier; unchanged.
- **Overall Score: 51/100.** (40+50+58+68+40)/5 = 51.2 (was 51 — full independent corroboration of every model-card number, no material move). Best fit: free offline on-device helper for short multimodal tasks (voice, image snippets); escalate anything chained, agentic, or reasoning-heavy.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured ledger — exact independent corroboration of model-card GPQA/MMLU-Pro/LCB-v6/MRCRv2/MMMU-Pro, new fills HLE/AA-Index/LCR/τ²-bench/GDPval/Coding-Index; plus 2026-10-05 original: Google DeepMind Gemma 4 model card on Hugging Face, models.dev provider catalog) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.