# DiffusionGemma 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/diffusiongemma-26b-a4b-it`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind's experimental open-weights **text diffusion** model built on the Gemma 4 26B-A4B Mixture-of-Experts architecture — it denoises 256-token canvases in parallel instead of autoregressive decoding; a research probe, not a frontier chat model.
- **Provider / access:** Google DeepMind. Hugging Face / third-party routes: Nvidia `google/diffusiongemma-26b-a4b-it` (250K) and Pioneer `google/diffusiongemma-26B-A4B-it` ($0.50/$0.50, 262.1K). Open weights (Apache 2.0). No OpenCode Zen ID.
- **Release / knowledge:** Released 2026-06-10; knowledge cutoff January 2025.
- **IDs:** `google/diffusiongemma-26b-a4b-it`; no Free ID.
- **Context window:** 256K tokens (third-party catalogues list 250K–262.1K); no official first-party figure published.
- **Modalities:** Text and image in; text out. Non-autoregressive discrete-diffusion generation (256-token canvas), not classic reasoning/tool-call chat.
- **Pricing (as of 2026-10-05):** No official vendor PAYG price; lowest tracked third-party route $0.50 in / $0.50 out per 1M (Pioneer). Self-host free under Apache 2.0.
- **Architecture:** MoE, ~25.2B total (llm-stats cites 4B active on the Gemma 4 26B-A4B base; llmboard cites 8B active) using discrete diffusion over parallel 256-token canvases. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **554 Elo / 2.4% normalized** (rank 223/352, 37th pct; Artificial Analysis)
- Tau3-Banking: **6.6%** (rank 119/176, 33rd pct; Artificial Analysis)
- Terminal-Bench 2.1: **12.4%** (rank 147/194, 24th pct; Artificial Analysis)
- t2-bench: **56.20%** (llmboard)
- Agentic Index: **2.2** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **66.9%** AA / **73.2%** (llmboard); MMLU-Pro **77.60%**
- AIME 2026: **69.10%** (llmboard)
- HLE: **10.8%** AA / **11.9%** (llmboard)
- Artificial Analysis Intelligence Index: **13.45** (rank 226/427, 47th pct)
- BIG-Bench Extra Hard: **47.60%** (llmboard)
- AA-IFBench: **59.46%** (llmboard)
- AA-Omniscience: **−59.03 points**, Accuracy **16.58%**
- CritPt: **0.29%**

Coding:

- LiveCodeBench v6: **69.10%** (llmboard)
- CodeForces: **47.63%** (llmboard)
- SciCode: **34.3%** (Artificial Analysis)
- Coding Index: **19.66** (Artificial Analysis)
- SWE-bench Verified / DeepSWE: no verified public score found

Long context:

- AA-LCR: **19.7%** (rank 288/408, 29th pct)
- MRCR v2: **32.00%** (llmboard)
- No RULER reported

Multimodal:

- MMMU-Pro: **54.30%** (llmboard)
- MathVision: **70.50%** (llmboard)
- MedXpertQA: **49.00%**; OmniDocBench 1.5: **31.90%**

### Normalized scores (1–100)

- **Tool use: 45/100.** GDPval-AA 554 Elo, Tau3 6.6%, Terminal-Bench 2.1 12.4% and Agentic Index 2.2 are all far below the frontier band — consistent with a diffusion research model not tuned for tool/agent loops, despite a passable t2-bench 56.2%.
- **Reasoning: 62/100.** MMLU-Pro 77.6%, GPQA ~67% and AIME 2026 69.1% are mid-pack, but HLE ~11%, AA Index 13.45 and CritPt 0.29% cap it well short of frontier.
- **Context window: 74/100.** 256K sits in the upper 200K–500K band, but MRCR v2 32% and AA-LCR 19.7% show weak retrieval at depth, so it scores the band's lower reach rather than near the top.
- **Multimodal: 64/100.** Text + image in with text out is the +image band; MMMU-Pro 54.3% and MathVision 70.5% are modest and there is no video/audio.
- **Coding: 62/100.** LiveCodeBench v6 69.1% is solid, but CodeForces 47.63%, SciCode 34.3%, Coding Index 19.66 and TB2.1 12.4% show the diffusion path lags on realistic engineering.
- **Cost efficiency: 94/100.** Apache 2.0 self-host plus a $0.50/$0.50 third-party route is excellent value; absence of an official PAYG rate and runtime overhead of iterative denoising keep it under 100.
- **Overall Score: 61/100.** Mean of (45 + 62 + 74 + 64 + 62) / 5 = 61.4 → **61**. Best-fit: diffusion-architecture research, parallel canvas generation and cheap self-hosted experiments — not production agents or frontier reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (BenchmarkList/Artificial Analysis evidence rows, llmboard.ai, Benchmark Heaven, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
