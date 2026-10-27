# Qwen 3.5 0.8B — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.5-0.8b`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B (`qwen-3.5-0.8b`) — the **smallest** member of the open-weight Qwen 3.5 dense line (0.8B / 2B / 9B / 27B), a native early-fusion multimodal model the size of a phone app.
- **Short description:** A ~500 MB (Q4_K_M) vision-language model that runs **client-side in the browser via WebGPU** (real-time video analysis demos), on Android phones, and everywhere else — with **2.88M Hugging Face downloads in a single month** (r/LocalLLaMA). Official framing (Qwen 3.5-2B card, which tabulates the 0.8B as its comparison tier): intended for prototyping, task-specific fine-tuning, and research.
- **Provider / access:** open weights (`Qwen/Qwen3.5-0.8B`, Apache 2.0); Ollama (`qwen3.5:0.8b`), vLLM/SGLang, llama.cpp/GGUF (Unsloth, bartowski, mlx-community 4-bit), WebGPU runtimes (transformers.js, gerbil npm, yzma-wasm), Docker Model Runner; ~510–533 MB at Q4_K_M.
- **Release / knowledge:** February 2026 (Qwen 3.5 series citation; latent.space AINews logged "Qwen3.5-0.8B / 2B / 4B / 9B released (Base + Instruct)" in the series wave). Training cutoff not published.
- **IDs:** `Qwen/Qwen3.5-0.8B` (HF), Ollama `qwen3.5:0.8b`, `mlx-community/Qwen3.5-0.8B-4bit`.
- **Context window:** 262,144 native (family spec; the HF card's serving recipes use `--max-model-len 262144`) — but see retrieval measurements below: effective context is a tiny fraction of that.
- **Modalities:** image + video input (official video quickstart on the family card; WebGPU real-time video analysis demo), text out; thinking toggle (default non-thinking); tool calling via `qwen3_coder` parser.
- **Pricing:** open weights (Apache 2.0) — free self-host; ~0.5 GB at Q4.
- **Architecture:** dense 0.8B in the family hybrid Gated DeltaNet layout (6-block pattern scaled down), vision encoder attached, MTP-trained.

### Raw benchmarks found

(official Qwen 3.5-2B HF card, which publishes the 0.8B column side by side; Thinking / Non-thinking where dual)

Agent / tool use:

- BFCL-V4: **25.3** (thinking); TAU2-Bench: **11.6** — functional but near the floor; ScreenSpot Pro (visual agent): **46.5** (non-thinking) — surprisingly respectable for a sub-billion model

Reasoning / knowledge:

- MMLU-Pro: **42.3** thinking / 29.7 non-thinking; MMLU-Redux 59.5; C-Eval 50.5; SuperGPQA 21.3; **GPQA: 11.9**; HMMT: not attempted (`--`, correctly — competition math is far out of class)
- Independent class check: Liquid AI's LFM2.5-230M comparison table includes Qwen3.5-0.8B alongside Gemma 3 1B IT, with the 0.8B ahead on most shared lanes — consistent with best-in-sub-1B positioning

Coding:

- No LiveCodeBench/SWE-bench row published for the 0.8B tier (coding rows start at the 4B).

Long context (**measured**):

- AA-LCR: **4.7**; LongBench v2: **26.1** — the 262K window is nominal only; practical retrieval collapses almost immediately.

Multimodal (official vision table, Thinking/Non-thinking):

- MMMU **49/47.4**; MathVista(mini) 62.2/58.6; OCRBench **74.5/79.1**; OmniDocBench 61.0/70.6; MMBench 69.9/68.0; CharXiv(RQ) 41.3/38.2
- Video: VideoMME (w sub.) **63.8**, MLVU 65.6, LVBench 45.1 — actual video understanding at 0.8B
- Medical: SLAKE 62.6/59.5

Community/hands-on:

- WebGPU browser chat at Q4_K_M (533 MB) "answered coherently"; Q2_K_XL (418 MB) degraded visibly (Nearform runtime review) — use Q4+;
- Runs real-time video analysis client-side (LinkedIn demo); Android-local guides list it at ~500 MB (getoffgridai).

### Normalized scores (1–100)

- **Tool use: 40/100.** BFCL-V4 25.3 and TAU2 11.6 show tool calling technically works, but failure rates at those levels make it unsuitable for real agent loops; ScreenSpot Pro 46.5 is the one bright spot (visual pointing at sub-1B scale).
- **Reasoning: 38/100.** GPQA 11.9 and MMLU-Pro 42.3 are near-floor absolute numbers — fine for routing trivial classification, unusable as a reasoning model; best-in-sub-1B class does not lift the absolute band.
- **Context window: 48/100.** 262K nominal but AA-LCR 4.7 / LongBench v2 26.1 measured — effectively a short-context model wearing a long-context spec sheet; the honest score reflects measured retrieval, not the datasheet.
- **Multimodal: 66/100.** The class-defining achievement: native video + image understanding in 0.5 GB (OCRBench 79.1 non-thinking, VideoMME 63.8, MMMU 49) — features that required a 4B model a generation ago; absolute accuracy is still well below production VLM needs.
- **Coding: 40/100.** No coding benchmark published; tool-call numbers suggest light script assistance at best — evidence floor.
- **Cost efficiency: 97/100.** ~500 MB, browser/phone execution, Apache 2.0, 2.88M monthly downloads — effectively free intelligence at the margin; among the most cost-efficient models in this corpus.
- **Overall Score: 46/100.** (40 + 38 + 48 + 66 + 40) / 5 = 46.4 → 46 — best fit: fully offline/on-device micro-tasks — OCR-lite, captioning, privacy-sensitive short documents, browser-embedded perception, classification/routing — where sending tokens anywhere is worse than a 0.8B answer; not the pick for anything needing reliable reasoning, long context, or coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (Hugging Face `Qwen/Qwen3.5-2B` full card fetched directly, whose benchmark tables publish the 0.8B column alongside; Qwen 3.5 series blog citation), then independent sources (r/LocalLLaMA WebGPU thread with download counts, latent.space AINews release log, Nearform Web-AI runtime comparison with two quant levels, getoffgridai Android guide, hybridgroup yzma-wasm + gerbil npm WebGPU examples, LinkedIn real-time-video demo, Liquid AI LFM2.5 comparison table). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
