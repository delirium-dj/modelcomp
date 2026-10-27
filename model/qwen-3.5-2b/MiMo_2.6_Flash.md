# Qwen 3.5 2B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.5-2b`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 2B (`qwen-3.5-2b`) — the second-smallest dense member of the open-weight Qwen 3.5 line (0.8B / 2B / 9B / 27B dense), a **native multimodal** (early-fusion vision-language) model with hybrid Gated DeltaNet attention.
- **Short description:** 2B / 24-layer / 2048-hidden model with the family layout **6 × (3 × (Gated DeltaNet → FFN) → 1 × (Gated Attention → FFN))**, multi-step MTP training, and a 262K native context — officially positioned for "prototyping, task-specific fine-tuning, and other research or development purposes" (i.e. Qwen itself frames it as a dev/edge model, not a production flagship). Extremely popular: **3.13M downloads last month**, 631 finetunes, 276 quantizations, 100 Spaces on its HF page.
- **Provider / access:** open weights (`Qwen/Qwen3.5-2B`, Apache 2.0); vLLM/SGLang/KTransformers/Transformers day-one; Ollama (~1.5 GB), bartowski/Unsloth GGUFs, WebGPU spaces; ~6.5 t/s on a Raspberry Pi 5 at 4-bit (r/LocalLLaMA); LoRA trainable locally in ~5 GB VRAM.
- **Release / knowledge:** February 2026 (Qwen 3.5 series citation, `@misc{qwen3.5, month={February}, year={2026}}`; the exact day matches the series announcement wave, 2026-02-24/25). Training cutoff not published.
- **IDs:** `Qwen/Qwen3.5-2B` (HF), Ollama `qwen3.5:2b`.
- **Context window:** **262,144 native** (official card; vLLM/SGLang default `--max-model-len 262144`); max output recommended 32,768 (81,920 for hard math/comp problems).
- **Modalities:** image + **video** input (official video-input quickstart with fps sampling), text out; thinking toggle via `enable_thinking` (**default: non-thinking**); native tool calling (SGLang/vLLM `qwen3_coder` parser, Qwen-Agent, Qwen Code).
- **Pricing:** open weights (Apache 2.0) — self-host is the route; ~1.5 GB at Q4_K_M, ~2.5 GB Ollama.
- **Architecture:** dense 2B, vision encoder attached (`AutoModelForMultimodalLM`); vLLM `--language-model-only` skips the vision tower to free KV cache.

### Raw benchmarks found

(official HF card, Qwen3.5-2B column; Thinking / Non-thinking where dual)

Agent / tool use:

- **BFCL-V4: 43.6** (thinking) — above Qwen3-4B-2507's 39.9
- **TAU2-Bench: 48.8** (thinking) — **above Qwen3-4B-2507's 43.2 and near Qwen3-30BA3B-Thinking levels**; airline-domain fixes per Opus 4.5 system card applied
- Visual agent: ScreenSpot Pro **54.5** (non-thinking) — above Qwen3-VL-4B's 59.5? no — below 59.5 but above Qwen3-VL-2B's 48.5

Reasoning / knowledge:

- MMLU-Pro: **66.5** thinking / 55.3 non-thinking (Qwen3-4B-2507: 74.0); MMLU-Redux 79.6; C-Eval 73.2; SuperGPQA 37.5; **GPQA: 51.6** thinking; HMMT Feb 25: 22.9, Nov 25: 19.6
- Third-party: HF community GPQA-Diamond leaderboard entry **44.95** (submitted eval) — consistent band with the official 51.6 under different harness settings
- Multilingual: MMMLU 63.1, MMLU-ProX 52.3 (29-lang avg), INCLUDE 55.4, WMT24++ 45.8

Coding:

- **No LiveCodeBench/SWE-bench row is published for the 2B tier** (the 4B card carries LCB v6 55.8; 2B's language table omits coding rows) — coding evidence is indirect (Qwen Code agent support, thinking-mode WebDev recommendations).

Long context (**measured**):

- AA-LCR: **25.6**; LongBench v2: **38.7** (thinking) — 262K window with weak absolute retrieval; on-device use at full length is impractical anyway.

Multimodal (official vision table — Thinking/Non-thinking):

- MMMU **64.2/64.2**, MMMU-Pro 50.3/47.7 — **above Qwen3-VL-4B (70.8? no: 64.2 vs 70.8 below; vs Qwen3-VL-2B's 61.4 above)**
- OCRBench **84.5/85.4** — above Qwen3-VL-4B's 80.8; OmniDocBench 79.8/80.9 (near VL-4B's 80.0); CharXiv(RQ) 58.8/52.6 (above VL-4B's 50.3); CC-OCR 72.9/75.8
- Video: VideoMME (w sub.) **75.6**, MLVU 76.2, LVBench 57.1 (near Qwen3-VL-4B's 53.5/76.0 levels)
- Medical: SLAKE 74.4/67.5 (above VL-4B's 65.9)

**Official caveat (Best Practices §1/thinking mode):** "Qwen3.5-2B is more prone to entering thinking loops compared to other Qwen3.5 models, which may prevent it from terminating generation properly" — Qwen recommends tuned sampling + streaming interruption; a rare vendor-published defect admission.

### Normalized scores (1–100)

- **Tool use: 62/100.** TAU2-Bench 48.8 and BFCL-V4 43.6 are genuinely good (beating the previous-gen 4B class), with first-party Qwen-Agent/Qwen Code support — capped because absolute levels are far below frontier and the thinking-loop instability can derail agent sessions.
- **Reasoning: 58/100.** GPQA 51.6 (third-party 44.95), MMLU-Pro 66.5, HMMT ~20–23 — respectable 2B-class results that trail the 4B sibling by 6–13 points across the board; firmly small-model class.
- **Context window: 64/100.** 262K native is exceptional on paper for a 2B, but measured retrieval is weak (AA-LCR 25.6, LongBench v2 38.7) and practical on-device windows are a fraction of the nominal size.
- **Multimodal: 78/100.** The standout dimension: early-fusion native V+video with OCRBench 84.5 (beats Qwen3-VL-4B), CharXiv 58.8, VideoMME 75.6, SLAKE 74.4 — a 2B outperforming last-gen 4B VLMs on document/OCR tasks; text-only output keeps it below the top band.
- **Coding: 50/100.** No coding benchmark published for this tier; agent/tool evidence and Qwen Code support imply basic competence, but nothing verified — evidence floor.
- **Cost efficiency: 95/100.** ~1.5 GB at Q4, Raspberry-Pi-class operation, 5 GB local LoRA training, Apache 2.0, 3.1M monthly downloads — among the most accessible multimodal models ever released.
- **Overall Score: 62/100.** (62 + 58 + 64 + 78 + 50) / 5 = 62.4 → 62 — best fit: on-device/private OCR, document, and short-video understanding plus cheap prototyping; not the pick for long-horizon agents (thinking loops), hard reasoning, or unassisted coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (Hugging Face `Qwen/Qwen3.5-2B` model card fetched in full: architecture spec, language + vision benchmark tables, the thinking-loop caveat, evaluation-results sidebar), then independent sources (r/LocalLLaMA Raspberry Pi 5 vision run and Gemma-vs-Qwen comparison thread, apxml, canirun.ai, techie007 guide, 0xSojalSec LoRA-training note, Unsloth/bartowski GGUF catalogs). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
