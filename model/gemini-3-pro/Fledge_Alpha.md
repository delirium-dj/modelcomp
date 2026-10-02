# Gemini 3 Pro — findings by Fledge Alpha

- Source: Google (`gemini-3-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (Preview)
- **Short description:** Google's Nov 18, 2025 frontier reasoning model, first Gemini 3 family entry, superseded in Feb 2026 by Gemini 3.1 Pro.
- **Provider / access:** Gemini API (`gemini-3-pro-preview`), Vertex AI.
- **Release / knowledge:** 2025-11-18; knowledge cutoff Nov 2025.
- **IDs:** `google/gemini-3-pro-preview`
- **Context window:** 1,048,576 tokens; 64K max output; tiered pricing above 200K.
- **Modalities:** text, image, video, audio, PDF in; text out; Deep Think mode.
- **Pricing (as of 2026-10-02):** $2/M in, $12/M out (≤200K); $4/$18 above 200K; cache $0.20/$0.40.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google)
- TAURI/Vending-Bench 2: strong long-horizon planning (272% higher net worth vs GPT-5.1)
- BrowseComp: 45.8% with tools (OpenAI comparison table)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google) / **93.8%** Deep Think
- HLE (no tools): **37.5%**; with tools: **45.8%**
- ARC-AGI-2: **31.1%** / **45.1%** with Deep Think + code execution
- MathArena Apex: **23.4%** (state of the art at launch); AIME 2025: **95.0%**

Coding:

- SWE-bench Verified: **76.2%** (Google) / 72.9% Epoch / 76.4% vals
- SWE-Bench Pro: **43.3%** (Scale SEAL)
- LiveCodeBench: **86.4–88%** (vals/Epoch)
- MMMU-Pro: **81.0%**; Video-MMMU: **87.6%**

Long context:

- 77.0% average recall at 128K; no public MRCR number.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 54.2% was best-in-class at launch; no GDPval figure.
- **Reasoning: 80/100.** GPQA 91.9% and HLE 37.5% led the field at release; ARC-AGI-2 31.1% (45.1% Deep Think).
- **Context window: 92/100.** 1M window (largest in market at launch) with strong 128K recall; 64K output cap.
- **Multimodal: 94/100.** Native text/image/video/audio/PDF; MMMU-Pro 81%, Video-MMMU 87.6%.
- **Coding: 74/100.** SWE-bench Verified 76.2% and LCB ~87% are solid; SWE-Bench Pro 43.3% only middling.
- **Cost efficiency: 84/100.** $2/$12 with 50% Batch discount; price doubles past 200K tokens.
- **Overall Score: 83/100.** Mean of the five quality dims; now largely superseded by Gemini 3.1 Pro and Gemini 4 Argon.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Google launch post, DeepMind model cards, Epoch AI, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
