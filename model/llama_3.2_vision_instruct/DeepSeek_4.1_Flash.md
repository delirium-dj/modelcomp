# Llama 3.2 11B Vision Instruct — findings by DeepSeek 4.1 Flash

- Source: Meta / Llama 3.2 11B Vision Instruct (`llama_3.2_vision_instruct`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-25); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `llama-3.2-vision-instruct` (404); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked the official Meta model card on Hugging Face (https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct — instruction-tuned 11B: MMMU CoT 50.7, MMMU-Pro Standard 33.0, MathVista 51.5, ChartQA CoT 83.4, AI2 Diagram 91.1, DocVQA 88.4, VQAv2 75.2, MMLU CoT 73.0, MATH CoT 51.9, GPQA 32.8, MGSM 68.9; 11B/10.6B params, 128K, Dec-2023 cutoff, Llama 3.2 Community License), Artificial Analysis (https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision — Intelligence Index **5** estimated, #56/74 open-weight non-reasoning, 23.1 tok/s, $0.345/$0.345 per 1M, 128k, text+image in / text out, no reasoning mode), the IDP document-AI leaderboard (https://www.idp-leaderboard.org/models/llama-3-2-vision-11b/ — overall 50.8, #24/29; KIE 76.1, OCR 65.8, Table 41.1, VQA 51.5) and Ollama (https://ollama.com/library/llama3.2-vision — 11B/90B, 128K, text+image). RankedAGI (https://rankedagi.com/models/llama-3.2-(vision)-90b) and the Bing/DuckDuckGo result sets were used as cross-checks. **Size note:** I score the **11B**; RankedAGI's MMLU 86.0 / GPQA 43.0 rows are the **90B** sibling and are not merged. Conflicts surfaced: (a) GPQA **32.8%** (Meta official, CoT) vs **22.1%** (BenchmarkList, prior pass); (b) AA Intelligence Index **5** (current, v4.3.2, estimated) vs **3.33** (prior); (c) official card vision rows (MMMU 50.7, DocVQA 88.4, ChartQA 83.4) are far above the prior third-party rows (Visual-Language Understanding 20.5%, MechVQA 25.5%, OpenVLM 57.7) — different harnesses/scopes; (d) context 128K (Meta/HF/Ollama) vs "130k"/"131K" rounding (AA/IDP). New official vision evidence lifts Multimodal; official GPQA/MMLU lifts Reasoning; **Overall 40 → 41**.

## Model card

- **Name:** Llama 3.2 11B Vision Instruct (`llama-3.2-11b-vision-instruct`); trackers shorten it to Llama 3.2 11B (Vision). No "Free" wording — gated open weights, no Zen Free ID.
- **Short description:** Meta's 11B-parameter (10.6B) instruction-tuned vision-language model from the Llama 3.2 generation, the lighter sibling of the 90B Vision Instruct. It is the oldest entry in this comparison and its text reasoning is far behind current frontier models, but it remains a widely served, cheap image-understanding baseline.
- **Provider / access:** gated open weights (`meta-llama/Llama-3.2-11B-Vision-Instruct`, Llama 3.2 Community License) on Hugging Face (https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct); also served through third-party OpenAI-compatible endpoints (the tracked price row implies a hosted route). No Zen Free ID.
- **Release / knowledge:** released 2024-09-25 (Meta's Llama 3.2 launch; https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct). Knowledge cutoff December 2023.
- **IDs:** `llama_3.2_vision_instruct` (project slug / `opencode/llama_3.2_vision_instruct` in `meta.json`); HF `meta-llama/Llama-3.2-11B-Vision-Instruct`; Ollama `llama3.2-vision:11b`.
- **Context window:** 128K tokens (vendor card / HF / Ollama: https://ollama.com/library/llama3.2-vision). No retrieval measurement published for the 11B.
- **Modalities:** text and image in; text out; no reasoning mode (Artificial Analysis: "not a reasoning model"), no audio or video input. Tool/function calling is not a first-class feature of this generation and no tool-use benchmark is published for the 11B.
- **Pricing (as of 2026-10-11):** $0.345 in / $0.345 out per 1M on the tracked hosted route (Artificial Analysis $0.34/$0.34, blended $0.35; https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision). Open weights make self-hosting free, subject to the Llama 3.2 Community License.
- **Architecture:** 11B (10.6B) dense model built on the Llama 3.1 text-only model plus a separately trained vision adapter (cross-attention layers feeding image-encoder representations into the core LLM); gated community licence, not Apache/MIT.

### Raw benchmarks found

Agent / tool use:

- No first-class tool-use benchmark published for the 11B; function calling is not a first-class feature of this generation.
- Prior third-party agentic rows — Tau2-Bench Telecom **14.6%**, Terminal-Bench Hard **0.8%** (BenchmarkList) — not re-verifiable on a live 11B page this pass; carried as prior-pass context only.
- RankedAGI Agentic **42.5%** is the **90B** sibling, not the 11B (https://rankedagi.com/models/llama-3.2-(vision)-90b) — not merged.
- Tau3-Banking / GDPval-AA / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- MMLU (CoT): **73.0**; GPQA: **32.8** (Meta official card, instruction-tuned 11B — https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct)
- MATH (CoT): **51.9**; MGSM (CoT): **68.9** (Meta official card)
- Artificial Analysis Intelligence Index: **5** (estimated, #56/74 open-weight non-reasoning — https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision)
- Prior third-party rows carried as context only: GPQA Diamond **22.1%**, HLE **5.5%**, MMLU-Pro **46.4%**, Open LLM Leaderboard v2 **29.1%**, MuSR **9.8%**, MATH Level 5 **22.0%**, AIME 2025 **1.7%**, FinEval **50.9%**, CFMME **20.2** (BenchmarkList)
- CritPt / LCR: no verified figure captured; AA Openness Index **38.89** (prior); Omniscience accuracy / hallucination rate: no verified public score found.

Coding:

- No SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench / Aider / SciCode result published for the 11B in this pass.
- Prior SciCode **11.2%** (BenchmarkList) carried as prior-pass context only.
- Official MATH (CoT) **51.9** is math, not software coding.

Long context:

- 128K window (Meta card / HF / Ollama); no RULER/MRCR/AA-LCR retrieval curve published for the 11B.
- Prior AA-LCR **15.7%** (BenchmarkList) carried as prior-pass context only — weak retrieval inside the 128K window.

Multimodal:

- MMMU (val, CoT): **50.7**; MMMU-Pro Standard: **33.0**; MMMU-Pro Vision: **23.7**; MathVista (testmini): **51.5** (Meta official card)
- ChartQA (test, CoT): **83.4**; AI2 Diagram (test): **91.1**; DocVQA (test): **88.4**; VQAv2 (test): **75.2** (Meta official card)
- Base-pretrained rows: VQAv2 **66.8**, TextVQA **73.1**, DocVQA **62.3**, MMMU **41.7**, ChartQA **39.4**, InfographicsQA **43.2**, AI2D **62.4** (Meta official card)
- IDP Leaderboard (document AI): overall **50.8**, #24/29; OlmOCR Bench 1.0 **49.1**; OmniDocBench v1.5 **44.6**; IDP Core Bench 1.0 **58.6** (KIE 76.1, OCR 65.8, Table 41.1, VQA 51.5) (https://www.idp-leaderboard.org/models/llama-3-2-vision-11b/)
- Prior third-party rows, not re-confirmed live: Visual-Language Understanding 20.5%, OpenVLM Leaderboard 57.7, MechVQA 25.5% (rank 18/18), PhysicsMind 47.5%.

### Normalized scores (1–100)

- **Tool use: 25/100.** Function calling is not a first-class feature and no live 11B tool-use benchmark exists; the only prior agentic rows (Tau2-Bench Telecom 14.6%, Terminal-Bench Hard 0.8%, BenchmarkList) are floor-level, far below the mid band (TB2.1 45–60%). No new evidence, so the score holds (https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct).
- **Reasoning: 32/100.** Meta's official card puts GPQA at 32.8% and MMLU (CoT) at 73.0% (https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct) — above the prior pass's third-party GPQA 22.1% but still below the 60–80% mid band; AA Intelligence Index 5 and no reasoning mode keep it low (https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision).
- **Context window: 52/100.** 128K maps to the middle of the 100K–200K tier (50–64), with no published retrieval curve; the prior AA-LCR 15.7% shows weak retrieval at length, so the lower half of that tier fits (https://ollama.com/library/llama3.2-vision).
- **Multimodal: 64/100.** Image in / text out is the 60–70 band; the official card's vision rows (MMMU CoT 50.7, DocVQA 88.4, ChartQA CoT 83.4, AI2 Diagram 91.1, VQAv2 75.2 — https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct) and IDP doc-AI overall 50.8 (https://www.idp-leaderboard.org/models/llama-3-2-vision-11b/) place it mid-band, but no video/PDF/audio input and weak OCR/table rows keep it below the top of that band.
- **Coding: 32/100.** No SWE-bench/LiveCodeBench/SciCode result for the 11B; the prior SciCode 11.2% (BenchmarkList) plus official MATH 51.9 and no agentic coding evidence leave it well below the mid coding band (https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct).
- **Cost efficiency: 90/100.** $0.345/$0.345 per 1M is cheap per token and the gated community weights cost nothing to self-host, but the licence gate and the lack of a free Zen tier keep it below the 97–99 band (https://artificialanalysis.ai/models/llama-3-2-instruct-11b-vision).
- **Overall Score: 41/100.** (25 + 32 + 52 + 64 + 32) / 5 = 41.0 → **41**. Best fit: legacy, cheap image captioning/VQA at small scale — a 2024-generation vision baseline, not a competitive agentic or coding model in 2026.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: independent public internet research (official Meta Hugging Face model card; Artificial Analysis; IDP Leaderboard; Ollama; RankedAGI + Bing/DuckDuckGo cross-checks). Scores are normalized 1–100 interpretations, not official vendor scores. I score the **11B**; 90B figures are labelled and never merged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
