# Gemini 1.5 Pro — findings by Qwen 3.8 27B

- Source: Google (`google/gemini-1.5-pro`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's 1.5-generation multimodal model with a 2M-token context window (text/image/audio/video in). Legacy status — deprecated on the current paid API and superseded by the 2.x/3.x generations; strong on long-context and multimodal understanding, below current mid-tier on reasoning and coding.
- **Provider / access:** Google Gemini API / Google AI Studio, model ID `gemini-1.5-pro` (REST Chat-style API); not listed on OpenCode Zen (no Free or paid Zen ID as of 2026-09-29); free tier available via Google AI Studio.
- **Release / knowledge:** Released 2024-09-24 (Artificial Analysis); knowledge cutoff Aug 1, 2024 (Artificial Analysis).
- **IDs:** `google/gemini-1.5-pro` (no Free ID on OpenCode Zen)
- **Context window:** 2,000,000 tokens total (verified: Artificial Analysis model page, BenchLM model page, Google API docs)
- **Modalities:** Text, image, speech, video in; text out; non-reasoning (direct responses, no extended chain-of-thought); tool calls supported via API.
- **Pricing (as of 2026-09-29):** Legacy model. Free tier available (Google AI Studio, free of charge). Last published paid tier (archived Gemini API docs, capture 2025-02-28): $1.25 / $5.00 per 1M in/out for prompts ≤128K, $2.50 / $10.00 for >128K; cached reads $0.3125 / $0.625. Artificial Analysis now lists $0.00/$0.00 (deprecated on the paid API).
- **Architecture:** Proprietary; parameter count not disclosed by Google (per Artificial Analysis model page).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.9%** (BenchLM, AA harness)
- HLE: **4.6%** (BenchLM, AA harness)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **7.9 / #185 of 514** (BenchLM overall 27.98/100; AA page lists Index 8, estimated, #123/299 within its non-reasoning class)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- AA-MMMU-Pro (multimodal knowledge): **55.0%** (BenchLM, AA harness)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- AA Coding Index: **23.6%** (BenchLM, AA harness)

Long context:

- No long-context retrieval numbers (MRCR / RULER) found on the pages fetched in this session.

### Normalized scores (1–100)

- **Tool use: 30/100.** No verified agent-benchmark scores found (Terminal-Bench 2.1, Tau3, GDPval all absent from fetched pages); weak BenchLM composite (27.98/100) and non-reasoning design cap this.
- **Reasoning: 45/100.** GPQA Diamond 58.9% sits just under the mid band, HLE 4.6% and AA Intelligence Index 7.9–8 are far below mid (20–35); legacy non-reasoning model.
- **Context window: 95/100.** 2M context is in the ≥1M tier (95–100); no verified retrieval-quality data at 512K+ found on fetched pages, so it does not reach 100.
- **Multimodal: 90/100.** Verified text + image + speech + video in, text out (Artificial Analysis); audio input lands in the 90–100 band.
- **Coding: 30/100.** AA Coding Index 23.6% is far below the mid band and no SWE-bench/LiveCodeBench/SciCode numbers were verified on fetched pages; caps the score.
- **Cost efficiency: 100/100.** Evaluated tier is $0 (legacy free tier via Google AI Studio); caveats: legacy/deprecated model, limited-time access, and free-tier content may be used by Google to improve its products; last published paid equiv. was ~$1.25/$5.00 per 1M.
- **Overall Score: 58.0/100.** (30+45+95+90+30)/5 = 58.0; best fit: legacy long-context and multimodal document understanding jobs, not current coding or agentic workloads.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (benchlm.ai model page, artificialanalysis.ai model page, Google Gemini API pricing docs via web.archive.org capture of 2025-02-28); retrieved 2026-09-29; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
