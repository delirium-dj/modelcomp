# Gemini 3 Flash — findings by Ling 3.1 Flash

- Source: Google (`opencode/gemini-3-flash`; API `gemini-3-flash-preview`; Gemini API/AI Studio, Vertex AI, Gemini Enterprise, Gemini app, AI Mode in Search)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's December-2025 fast tier with Pro-grade reasoning — GPQA Diamond 90.4%, MMMU-Pro 81.2%, SWE-bench Verified 78% (ahead of Gemini 3 Pro on Google's figures), HLE 33.7% (no tools), MCP Atlas 57.4%, Toolathlon 49.4% — across a 1M multimodal context at $0.50/$3 per 1M; the default model in the Gemini app and AI Mode in Search.
- **Provider / access:** Google — Gemini API (free tier available), Google AI Studio, Antigravity, Vertex AI, Gemini Enterprise, Gemini CLI, Android Studio; thinking levels minimal/low/medium/high; structured output, function calling, automatic context caching.
- **Release / knowledge:** 2025-12-17; knowledge cutoff Jan 2025.
- **IDs:** `opencode/gemini-3-flash` / `gemini-3-flash-preview`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window and takes text, image, audio, video and PDF input.
- **Context window:** 1,000,000 tokens in; 64K (≈65.5K) out.
- **Modalities:** text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** $0.50/$3.00 per 1M input/output (audio input $1.00/M); cached input $0.05/M (10% of input); free tier in the Gemini API/AI Studio; ~3× faster than Gemini 2.5 Pro (AA), ~30% fewer tokens than 2.5 Pro on typical traffic; TTFT p95 3.74s, 135 char/s.
- **Architecture:** proprietary Gemini 3 family (built on the Gemini 3 Pro reasoning foundation); parameter count undisclosed.

### Raw benchmarks found

Reasoning / knowledge (Google launch, Dec 2025):

- GPQA Diamond: **90.4%** — frontier band, "rivaling larger frontier models"
- Humanity's Last Exam (no tools): **33.7%**
- MMMU-Pro: **81.2%** — comparable to Gemini 3 Pro, SOTA-class at release
- LMArena Elo: figure not captured

Agent / tool use:

- MCP Atlas: **57.4%**
- Toolathlon: **49.4%**
- SWE-bench Verified: **78%** — outperforms Gemini 2.5 series and Gemini 3 Pro (Google's figures)
- τ²-bench / Tau³ / GDPval-AA / BrowseComp: no verified public score found

Coding (beyond SWE-bench Verified):

- DeepSWE / LiveCodeBench / Terminal-Bench 2.x / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M window with automatic context caching; no MRCR/RULER/AA-LCR score published
- Native text/image/audio/video/PDF input; MMMU-Pro 81.2% (above)

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP Atlas 57.4% and Toolathlon 49.4% sit in the strong-mid band, with SWE-bench Verified 78% (ahead of Gemini 3 Pro per Google) supporting; no Tau³ or GDPval-AA figure was captured.
- **Reasoning: 80/100.** GPQA Diamond 90.4% reaches the 90%+ frontier band, with HLE 33.7% (no tools) and MMMU-Pro 81.2% supporting; no AA Intelligence Index or FrontierMath figure was captured.
- **Context window: 95/100.** 1M-token input window with automatic context caching; no ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 92/100.** Native text/image/audio/video/PDF input with text output — the audio-in/video band (90–100); MMMU-Pro 81.2% supports.
- **Coding: 74/100.** SWE-bench Verified 78% is strong by late-2025 standards and edges Gemini 3 Pro on Google's figures, but sits under the ~80%+ October-2026 frontier band; DeepSWE, LiveCodeBench, Terminal-Bench 2.x and the AA Coding Index are unpublished.
- **Cost efficiency: 90/100.** $0.50/$3 per 1M (blended ~$1.13/M at 3:1) with 10%-of-input cache reads ($0.05/M) and a free Gemini API tier sits between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; audio input costs $1.00/M.
- **Overall Score: 83/100.** (74+80+95+92+74)/5 = 83.0 — frontier-grade reasoning (GPQA 90.4%) and a 1M multimodal window at $0.50/$3 with a free tier; mid-tier agentic tooling (MCP Atlas 57.4%, Toolathlon 49.4%) and a 78% SWE-bench keep it below the October-2026 agent frontier.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Google Gemini 3 Flash launch + model card, AI/TLDR, llm-stats, Gemini API docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Flash.md`, using the same headings.
