# MiMo-V2.6-Distill-Qwen-9B — findings by DeepSeek 4.1 Flash

- Source: Xiaomi MiMo/MiMo-V2.6-Distill-Qwen-9B (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B (SFT checkpoint — no "Free" tier exists; see IDs below)
- **Short description:** Xiaomi MiMo's 9B dense agentic model, built by supervised fine-tuning `Qwen/Qwen3.5-9B` on MiMo-generated data across coding, general agent tasks, visual coding and cybersecurity, released as a starting point for open agentic-RL research. Not an alias of MiMo-V2.6-Pro/Flash: a separate 9B checkpoint on the Qwen3.5-9B trunk.
- **Provider / access:** **Self-host only.** Weights on Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`, served through SGLang (vendor quickstart: `sglang serve --model-path XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B --reasoning-parser mimo`) or vLLM, exposed as an OpenAI-compatible Chat Completions endpoint (`/v1/chat/completions`), reasoning returned in `reasoning_content`. No Responses API. No hosted route found anywhere: absent from OpenCode Zen `zen/v1/models` (84 IDs fetched 2026-09-30; only `mimo-v2.6-flash-free` and `mimo-v2.5-free` exist), absent from OpenRouter, and the HF card carries no `inference` providers.
- **Release / knowledge:** HF repo created 2026-09-21T18:18:40Z, card last modified 2026-09-22T03:52:45Z — released with the MiMo-V2.6 series. **Knowledge cutoff not published** (the trunk Qwen3.5-9B cutoff is not inherited evidence and is not claimed here).
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (Hugging Face; the only verified identifier). **No Zen Free ID — and in fact no Zen ID at all**: this folder's `meta.json` id `opencode/mimo-v2.6-distill-qwen-9b` is not present in `https://opencode.ai/zen/v1/models`. Flagged, left unedited because no verified replacement API ID exists (the model is not served by anyone).
- **Context window:** **262,144 tokens (256K) native** — verified directly in the shipped `config.json` (`text_config.max_position_embeddings: 262144`). **This contradicts `meta.json`, which said "128K total" and has been corrected.** Max output **not disclosed**: `generation_config.json` ships no `max_length`/`max_new_tokens`, and the vendor quickstart example merely passes `max_tokens=2048`.
- **Modalities:** **Text + image + video in; text out** — verified in `config.json`: `vision_config` (`model_type: qwen3_5_vision`, depth 27, hidden 1152, patch 16, `temporal_patch_size` 2, `out_hidden_size` 4096) plus `image_token_id` 248056, `video_token_id` 248057, `vision_start/end_token_id` 248053/248054, and `preprocessor_config.json` + `video_preprocessor_config.json` in the file list; HF `pipeline_tag: image-text-to-text`, `AutoModelForMultimodalLM`. **This contradicts `meta.json`, which said "Text in/out" and has been corrected.** **No audio**: there is no `audio_config` and no audio preprocessor, even though the MiMo v2.6 chat template emits `<|mimo_audio_start|>…<|mimo_audio_end|>` markers — those tokens are inert here, so do not treat this as omni-modal. Reasoning yes (`enable_thinking` via `chat_template_kwargs`, parsed by `--reasoning-parser mimo`); tool calls yes (`tool-use` tag, `<tool_call><function=…>` template); structured/JSON via `tojson` tool rendering.
- **Pricing (as of 2026-09-30):** **$0 per token — MIT-licensed open weights, self-hosted.** No per-token price exists on any host because no host serves it. `meta.json` "Standard pricing" was a placeholder and has been corrected. Cost is hardware, not tokens: 9,409,813,744 BF16 params, 18.84 GB of stored weights (community GGUF/MLX quantisations reduce this to roughly 7 GB class). Data-usage caveat: none — self-hosted inference leaks nothing.
- **Architecture:** 9.4B **dense** (no `num_experts`/`num_experts_per_tok` in `config.json`), BF16, MIT. 32 layers, hidden 4096, 16 heads / 4 KV heads, head_dim 256, vocab 248,320, one MTP layer. **Hybrid attention**: only 8 of 32 layers are `full_attention` (`full_attention_interval: 4`), the other 24 are `linear_attention` with `linear_conv_kernel_dim: 4` and `mamba_ssm_dtype: float32` — this is what makes a 256K window tractable on one GPU. Interleaved M-RoPE (`mrope_section [11,11,10]`, `rope_theta 1e7`). Trained on a 77.4B-token SFT mixture (27.2B loss-bearing): code 23.2B / general 22.0B / visual 21.2B / cyber 11.0B.

### Raw benchmarks found

All figures are the vendor's own, from the official HF model card README (labelled "as reported in the MiMo-V2.6 technical report"), each paired with its `Qwen3.5-9B` base for delta. Terminal-Bench 2.1 and Toolathlon are additionally corroborated by Hub `eval-results` entries (`harborframework/terminal-bench-2.1`, `hkust-nlp/Toolathlon`). No third-party harness — Artificial Analysis, BenchLM, LMSYS — carries this exact checkpoint as of 2026-09-30. Sets marked (mini) are Xiaomi-internal and not comparable across vendors.

Agent / tool use:

- Terminal-Bench 2.1: **37.1%** avg@1 (vendor card; base 27.0%, +10.1)
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this ID
- GDPval-AA: **no verified public score found** (not listed on Artificial Analysis)
- Claw-Eval / ClawProBench: **no verified public score found** — N/A per methodology, no substitute invented
- Toolathon-Verified: **35.2%** avg@1 (vendor card + Hub eval-result on `hkust-nlp/Toolathlon`; base 25.9%)
- AutomationBench v1.0.6: **30.3%** avg@1 (vendor card; base 5.0%, +25.3 — largest relative gain on the card)
- OfficeQA: **19.5%** avg@1 (vendor card; base 9.0%) · JobBench: **18.3%** avg@1 (base 2.6%) · MiMo General (mini): **62.2%** avg@1 (base 28.5%)
- Cyber (adjacent agentic evidence): MiMo Cyber (mini): **31.3%** avg@3 (base 5.7%)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found** · CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **not listed** — no independent composite exists for this ID
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Closest proxy (provisional, explicitly not a reasoning benchmark): 22.0B general-domain tokens in the SFT mixture, and general-set movement 28.5% → 62.2% on the internal mini set — but the only externally nameable general scores stay low (OfficeQA 19.5%, JobBench 18.3%)

Coding:

- SWE-bench Verified: **61.1%** avg@3 (vendor card; base 60.0%, only +1.1)
- SWE-bench Pro: **44.6%** avg@3 (vendor card; base 32.0%, +12.6 — where the distillation actually pays)
- MiMo Code (mini): **51.6%** avg@3 (internal; base 19.5%, +32.1)
- LiveCodeBench: **no verified public score found** · SciCode / AA-SciCode: **no verified public score found** · Vibe Code Bench: **no verified public score found** · DeepSWE / Coding Index: **no verified public score found**

Long context:

- **No long-context retrieval reported.** No MRCR / RULER / GraphWalks number exists at any window length for this checkpoint, so the hybrid linear-attention design that makes 256K affordable is untested at length in public.


### Normalized scores (1–100)

- **Tool use: 55/100.** Three genuine third-party agent suites — TB2.1 37.1%, Toolathlon-Verified 35.2%, AutomationBench 30.3% — all sit *below* the methodology's mid band (TB2.1 45–60% → 50–70), which alone would pull this to ~50; what lifts it is breadth and slope, i.e. tool calling is demonstrably trained across three different harnesses plus a 31.3% cyber-agent set and +25.3 points on AutomationBench. What caps it: no Tau3 or GDPval at this ID, and frontier TB2.1 is ~88%+.
- **Reasoning: 52/100.** Provisional and the softest number in this report: **zero** reasoning-suite evidence (GPQA, HLE, LCR, CritPt, AA Index, Omniscience all absent). Scored from lineage and weak proxies — Qwen3.5-9B trunk, 22.0B general SFT tokens — placed at the floor of the 55–65 mid band and then trimmed, because the only measurable reasoning-adjacent signals are low absolutes (OfficeQA 19.5%, JobBench 18.3%). Not a claim of frontier reasoning in either direction.
- **Context window: 74/100.** 262,144 tokens falls in the 200K–500K tier (65–84, 200K = 70). It sits above the 200K anchor because the number is confirmed twice in shipped files (`max_position_embeddings`, `model_max_length`) and the hybrid 8-full/24-linear attention pattern is deliberate long-context engineering rather than a marketing figure. Capped by zero retrieval evidence at length, and by undisclosed max output — a caveat per methodology, not a separate score.
- **Multimodal: 76/100.** Text + image + **video** in maps to the "+video/PDF in = 75–90" band, and the vision tower is real checkpoint hardware (`qwen3_5_vision`, depth 27, `temporal_patch_size: 2`, dedicated video preprocessor), not a tokenizer illusion. It sits at the band floor because no multimodal benchmark is published, the only visual number is internal MiMo Visual Coding (mini) 64.0% vs base 61.7% (+2.3, the weakest delta on the card), output is text-only, and audio tokens are inert.
- **Coding: 66/100.** SWE-bench Verified 61.1%, SWE Pro 44.6% and MiMo Code (mini) 51.6% is a solid upper-mid profile for a 9.4B dense model, with SWE Pro +12.6 and cyber +25.6 as the real gains. Capped because SWE Verified barely moved (+1.1), TB2.1 stays 37.1% against an 85%+ frontier bar, and LiveCodeBench / SciCode / DeepSWE are entirely absent.
- **Cost efficiency: 92/100.** Methodology scores $0 = 100, and per-token cost truly is $0 under MIT with no rate limit and no training-data consent clause. Docked 8 because the evaluated tier has **no hosted route whatsoever** (absent from Zen, OpenRouter and HF endpoints), so "free" is contingent on 18.84 GB of BF16 VRAM or accepting quantisation drift — a self-hosting tax rather than a price.
- **Overall Score: 64.6/100.** Mean of the five quality dims: (55 + 52 + 74 + 76 + 66) / 5 = 323 / 5 = **64.6**; Cost excluded per RULES v4. Best fit: a local, MIT-licensed agentic **base checkpoint for RL experimentation** — you get the weights, a verified 256K window and a real video-capable vision tower at zero marginal cost, and you pay for it in vendor-only evidence and a below-mid agent ceiling. Not a frontier coder; for hosted agentic coding this repo's MiMo V2.6 Flash / Pro entries remain the stronger picks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-30
- Method: Public internet research from zero — HF model card README (vendor benchmark and training-mixture tables, SGLang quickstart), HF model API (`pipeline_tag`, tags, 9,409,813,744-param safetensors count, sibling file list, 12,085 downloads / 580 likes, Spaces), raw `config.json` (max_position_embeddings, layer_types, vision_config), raw `tokenizer_config.json` (model_max_length, Qwen3VLProcessor), raw `generation_config.json`, OpenCode Zen `zen/v1/models` (84-ID list; no distill ID), and an OpenRouter slug probe. Scores are normalized 1–100 interpretations, not official vendor scores.
- Independence note: written before reading any other file in this folder, per `model-report-TEMPLATE.md`. Two repo-level facts I verified independently and that agree with prior raters: the `opencode/` Zen ID does not exist, and the model is **not** text-only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

