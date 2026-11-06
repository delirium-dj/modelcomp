# Mistral Small 4 — findings by Step 5 Preview

- Source: Mistral AI (`mistral-small-4`, model ID `mistral-small-2603`, version 26.03)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4 (`mistral-small-2603`)
- **Short description:** Mistral's March 2026 open-weight hybrid model — the first Mistral model to unify instruct (Mistral Small), reasoning (Magistral), multimodal (Pixtral) and agentic coding (Devstral) in one set of weights, with a configurable `reasoning_effort` parameter (`none` ≈ Small 3.2 chat speed; `high` ≈ Magistral depth). MoE with 119B total / 6B active per token (8B incl. embedding + output layers), 128 experts / 4 active, text + image in, Apache 2.0, at $0.15/$0.60 per 1M — positioned as the efficiency-tier workhorse, not a frontier replacement.
- **Provider / access:** Mistral API and AI Studio (`mistral-small-2603`), OpenRouter (`mistralai/mistral-small-2603`, incl. EU in-region routing), Hugging Face open weights (Apache 2.0; vLLM, llama.cpp, SGLang, Transformers), free prototyping on NVIDIA build (`build.nvidia.com/mistralai/mistral-small-4-119b-2603`) and day-0 NVIDIA NIM; Mistral is a founding member of the NVIDIA Nemotron Coalition. Min self-host hardware: 4× HGX H100 / 2× HGX H200 / 1× DGX B200. Verified 2026-11-06: **no `opencode/mistral-small-4` route in the OpenCode Console catalog** (the scaffolded `meta.json` id does not resolve).
- **Release / knowledge:** 2026-03-16 (GA). Knowledge cutoff not published.
- **IDs:** `mistral-small-2603` (Mistral API), `mistralai/mistral-small-2603` (OpenRouter). No Free ID on Zen.
- **Context window:** **256K tokens** (docs + launch post).
- **Modalities:** Text and image in → text out; configurable reasoning effort; function calling, structured outputs, predicted outputs, Document QnA, prefix, batching, Agents/Conversations + built-in tools.
- **Pricing (as of 2026-11-06):** **$0.15/M input, $0.60/M output** (docs + OpenRouter; EU in-region $0.165/$0.66). Self-hostable free under Apache 2.0.
- **Architecture:** MoE, 128 experts / 4 active per token; 119B total / 6B active (8B with embeddings/output); hybrid instruct+reasoning+multimodal training; NVFP4-class deployment guidance from Mistral + NVIDIA.

### Raw benchmarks found

Artificial Analysis composite (via BenchmarkList, sampled 2026-07-21):

- Intelligence Index: **19.56** (rank 162/324, 50th pct); Coding Index 26.64; Agentic Index 4.7; AA-Omniscience −29.9; CritPt 0.3%; GDPval-AA 587.99 (Elo); cost per task $0.098, time per task 105.6 s

Agentic / tool use (BenchmarkList, agentic median 25th pct):

- GDPval-AA: **Elo 862** (rank 144/358, 60th pct)
- PinchBench: **76.8%** best / 71.3% average (rank 55/76); CorpBench Work 1.3: **74.8** (72/100 workflows passed, rank 11/16)
- ClawProBench: **45.26** (pass@3 48.9%, tool use 48.0%, rank 43/48); ContractBench 42.4%; AA-Briefcase Elo 241 (rank 126/160); AutoBench quality 2.69 (rank 26/32)
- Terminal-Bench 2.1: **21.0%** (rank 132/196); Terminal-Bench 2.0: 16.9% (rank 63/68); Terminal-Bench Hard: 10.6% (rank 154/326)
- Tau2-Bench Telecom: **18.4%** (rank 271/337); Tau3-Banking: **5.2%** (rank 151/183)

Coding (BenchmarkList, coding median 29th pct):

- BLXBench: **75.2%** (rank 9/25, 67th pct; 283/373 tests, 217 tok/s decode)
- SAKE (software architectural knowledge): **92.5%** zero-shot (rank 8/11)
- SciCode: **38.8%** (rank 141/311); ALE-Bench: **497.63** (self-refine ×1, rank 63/83; ×16: 861.9)
- **Vibe Code Bench v1.1: 0.0%** (rank 75/75 — dead last)

Reasoning / knowledge:

- GPQA Diamond: **76.9%** (Epoch AI harness, rank 164/478, 66th pct)
- HLE: **9.9%** (rank 216/491)
- Altered Riddles: conditioned override rate 0.3487 (altered accuracy 0.35 vs original 0.88)
- ObviousBench answer pass³: **37.5%** (rank 264/275, 4th pct)

Long context:

- AA-LCR: **49.7%** (rank 216/423, 49th pct)
- Context Arena (GDM-MRCRv2, thinking mode): average 25.4%, AUC 128K 16.1%, 1M 2.3% — multi-needle retrieval at length is weak despite the 256K window

Multimodal:

- IDP Leaderboard (document AI): **71.5** overall (rank 15/30, 52nd pct; OlmOCR 69.6, OmniDocBench 76.41, IDP KIE 78.3, IDP VQA 77.9)

Vendor/launch claims (labelled; three key numbers are published in the launch post, the rest are figures): "matching or surpassing GPT-OSS 120B on all three benchmarks" with reasoning on; **AA LCR 0.72 with just 1.6K output characters** (vs Qwen3.5 needing 5.8–6.1K); **LiveCodeBench outperforms GPT-OSS 120B with 20% less output**; 40% lower end-to-end completion time and 3× requests/sec vs Mistral Small 3. No absolute GPQA/HLE/SWE-bench table published by the vendor.

### Normalized scores (1–100)

- **Tool use: 48/100.** The strongest agentic showing in Mistral's efficiency tier: GDPval-AA Elo 862 (60th pct), CorpBench 74.8 with a 72% strict workflow pass rate, PinchBench 76.8% best — but Tau2 18.4%, Tau3 5.2%, TB2.1 21.0% and ClawProBench 45.26 keep it below the methodology's mid band (50–70).
- **Reasoning: 57/100.** GPQA Diamond 76.9% (upper mid band) and hybrid `reasoning_effort="high"` depth are real strengths, but HLE 9.9%, Intelligence Index 19.56, ObviousBench 37.5% (4th pct) and AA-Omniscience −29.9 cap it at mid band.
- **Context window: 67/100.** 256K sits at the bottom of the 200K–500K band; AA-LCR 49.7% is mid-pack and Context Arena retrieval (AUC 128K 16.1%, 1M 2.3%) is weak at length, so the bottom-of-band reading holds despite the big nominal window.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band; the IDP document-AI leaderboard (71.5, OmniDocBench 76.41) is genuine evidence for vision-document work, but no MMMU-class general vision score exists, so it stays in the image-input band.
- **Coding: 44/100.** Split evidence: BLXBench 75.2% (rank 9/25) and SAKE 92.5% show real code knowledge, but Terminal-Bench 21.0%/16.9%, SciCode 38.8%, ALE-Bench rank 63/83 and **Vibe Code Bench 0.0% (75/75, dead last)** show it cannot build apps end-to-end — a knowledge-strong, execution-weak coder.
- **Cost efficiency: 94/100.** $0.15/$0.60 per 1M sits near the cheap end of the methodology's anchors (~$0.10/$0.20 = 97–99), with Apache 2.0 weights and a free NVIDIA build endpoint for evaluation.
- **Overall Score: 56/100.** Mean of the five non-cost dims (48+57+67+62+44)/5 = 55.6. Best-fit recommendation: the best-value Apache-2.0 hybrid in Mistral's lineup when you want instruct + reasoning + image understanding + document AI in one self-hostable 119B/6B-active deployment at $0.15/$0.60 — but route hard agentic coding to a specialist (Devstral/Codex-class) and never trust it for app-scale generation (Vibe 0.0%).

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: public internet research (Mistral docs model page + launch blog, OpenRouter model page, BenchmarkList's 27-benchmark profile, NVIDIA build listing, OpenCode Console catalog for route verification); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Mistral Small 4 (`mistral-small-2603`) model page](https://docs.mistral.ai/models/mistral-small-4-0-26-03)
  - [Mistral Blog — Introducing Mistral Small 4 (2026-03-16)](https://mistral.ai/news/mistral-small-4)
  - [BenchmarkList — Mistral: Mistral Small 4 (27 benchmarks)](https://benchmarklist.com/models/mistralai-mistral-small-2603)
  - [OpenRouter — mistralai/mistral-small-2603](https://openrouter.ai/mistralai/mistral-small-2603)
  - [Hugging Face — Mistral Small 4 collection (Apache 2.0 weights)](https://huggingface.co/collections/mistralai/mistral-small-4)
  - [NVIDIA build — mistralai/mistral-small-4-119b-2603 (free prototype)](https://build.nvidia.com/mistralai/mistral-small-4-119b-2603)
  - [OpenCode Console models + pricing (Mistral Small 4 absent — no Zen route)](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `North_Mini_Code.md`, using the same headings.
