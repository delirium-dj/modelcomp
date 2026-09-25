# Llama 3.2 11B Vision Instruct — findings by DeepSeek 4.1 Flash

- Source: Meta / Llama 3.2 11B Vision Instruct (`llama_3.2_vision_instruct`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct (`llama-3.2-11b-vision-instruct`); trackers shorten it to Llama 3.2 11B Vision. No "Free" wording — gated open weights, no Zen Free ID.
- **Short description:** Meta's 11B-parameter instruction-tuned vision-language model from the Llama 3.2 generation, the lighter sibling of the 90B Vision Instruct. It is the oldest entry in this comparison and its text reasoning is far behind current frontier models, but it remains a widely served, cheap image-understanding baseline.
- **Provider / access:** gated open weights (`meta-llama/Llama-3.2-11B-Vision-Instruct`, Llama 3.2 Community License) on Hugging Face; also served through third-party endpoints (the tracked price row implies an OpenAI-compatible hosted route). No Zen Free ID.
- **Release / knowledge:** released 2024-09-25 (BenchmarkList; Meta's Llama 3.2 launch). Knowledge cutoff 2023-12.
- **IDs:** `llama_3.2_vision_instruct` (project slug / `opencode/llama_3.2_vision_instruct` in `meta.json`); HF `meta-llama/Llama-3.2-11B-Vision-Instruct`.
- **Context window:** 128K tokens (vendor card / this folder's `meta.json`). No retrieval measurement published.
- **Modalities:** text and image in; text out; no reasoning mode, no audio or video input. Tool/function calling is not a first-class feature of this generation and no tool-use benchmark is published for it.
- **Pricing (as of 2026-09-25):** $0.345 in / $0.345 out per 1M on the tracked hosted route (BenchmarkList); open weights make self-hosting free, subject to the Llama 3.2 Community License.
- **Architecture:** 11B-parameter dense model with a vision adapter (Meta Llama 3.2 family); gated community licence, not Apache/MIT.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **14.6%** (BenchmarkList; 15th percentile, rank 281 of 332)
- Terminal-Bench Hard: **0.8%** (BenchmarkList; 14th percentile, rank 279 of 326)
- Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **22.1%** (BenchmarkList; 1st percentile, rank 461 of 464)
- HLE: **5.5%** (39th percentile, rank 283 of 466); MMLU-Pro: **46.4%**; Open LLM Leaderboard v2: **29.1%**; MuSR: **9.8%**
- MATH Level 5: **22.0%**; AIME 2025: **1.7%**; FinEval: **50.9%**; CFMME: **20.2**
- Artificial Analysis Intelligence Index: **3.33** (9th percentile, rank 382 of 418)
- CritPt / LCR: no verified figure captured; AA Openness Index **38.89**
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SciCode: **11.2%** (12th percentile, rank 402 of 458)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench / Aider: no verified public score found

Multimodal:

- Visual-Language Understanding: **20.5%** (2nd percentile, rank 54 of 55); OpenVLM Leaderboard: **57.7** (46th percentile, rank 155 of 285)
- MechVQA (mechanical drawing understanding): **25.5%** (rank 18 of 18); PhysicsMind: **47.5%**
- MMMU / MMMU-Pro / DocVQA / ChartQA / VQAv2 / AI2D / MathVista: no verified public score captured in the sources reviewed (Meta's own card rows were not retrievable in this pass)

Long context:

- AA-LCR: **15.7%** (28th percentile, rank 293 of 409) — weak retrieval inside the 128K window

### Normalized scores (1–100)

- **Tool use: 25/100.** Terminal-Bench Hard 0.8% and Tau2-Bench Telecom 14.6% are effectively floor-level agentic results; no OSWorld/GDPval/MCP row exists, and function calling is not a first-class feature.
- **Reasoning: 30/100.** GPQA Diamond 22.1% (1st percentile), HLE 5.5%, AA Intelligence Index 3.33 and MMLU-Pro 46.4% place it far below the 60–80% mid band.
- **Context window: 52/100.** 128K maps to the middle of the 100K–200K tier (50–64), and AA-LCR 15.7% shows weak retrieval at length, so the lower half of that tier is right.
- **Multimodal: 60/100.** Image in / text out is the 60–70 band's floor; the available vision rows are weak (OpenVLM 57.7 mid-table, Visual-Language Understanding 20.5%, MechVQA last of 18) and no audio or video input exists.
- **Coding: 32/100.** SciCode 11.2% with MATH Level 5 22.0% and AIME 1.7% and no SWE-bench/LiveCodeBench result is well below the mid coding band.
- **Cost efficiency: 90/100.** $0.345/$0.345 per 1M is cheap per token and the gated community weights cost nothing to self-host, but the licence gate and the lack of a free Zen tier keep it below the 97–99 band.
- **Overall Score: 40/100.** (25 + 30 + 52 + 60 + 32) / 5 = 39.8 → 40. Best fit: legacy, cheap image captioning/VQA at small scale — a 2024-generation vision baseline, not a competitive agentic or coding model in 2026.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (BenchmarkList model page; Meta Llama 3.2 licence/family facts); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
