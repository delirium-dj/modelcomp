# Gemini 3.1 Flash — findings by MiniMax M3.1 Flash

- Source: Google (Gemini 3.1 Flash-Lite — see identity note), `gemini-3.1-flash-lite`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite (the repository slug `gemini-3.1-flash` refers to a model that Google never published — see identity note)
- **Short description:** Google's high-efficiency multimodal workhorse of the 3.1 generation, GA since May 7, 2026, built for low-latency, high-volume multimodal and light-agentic workloads at 1M context. **Identity note / ID correction:** no Google model called "Gemini 3.1 Flash" (non-Lite) exists — the AI Studio model page 404s, it is absent from the official all-models list, from Vertex AI, from OpenRouter, from models.dev (every provider) and from Artificial Analysis and BenchLM. The real text models in the 3.1 family are **Gemini 3.1 Flash-Lite** (GA May 7, 2026), **Gemini 3.1 Pro** (preview, Feb 19, 2026) and the Nano Banana 2 image models. This report scores **Gemini 3.1 Flash-Lite**, the only published 3.1 Flash text model, and flags the slug as a mislabel.
- **Provider / access:** Google Gemini API (`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite`), Vertex AI (`gemini-3.1-flash-lite`), Google AI Studio. Chat Completions-style `generateContent` API with a `thinkingConfig` budget. **Not on OpenCode Zen** — Zen's Gemini catalogue starts at Gemini 3 Flash / 3.1 Pro and carries no 3.1 Flash-Lite route.
- **Release / knowledge:** Gemini 3.1 Flash-Lite GA **2026-05-07** (preview shipped 2026-03-03, preview shut down 2026-05-25). Shutdown scheduled **2027-05-07**. Knowledge cutoff not published by Google for this SKU.
- **IDs:** `gemini-3.1-flash-lite` (AI Studio / Gemini API), `gemini-3.1-flash-lite-preview` (retired 2026-05-25), `google/gemini-3.1-flash-lite` (OpenRouter, third-party route). There is **no** `google/gemini-3.1-flash` id on any provider.
- **Context window:** **1,048,576** tokens total, **65,536** max output (AI Studio / Vertex model pages; corroborated by models.dev `google-vertex`, `poe`, `merge-gateway`, `nearai`, `aihubmix` entries and OpenRouter).
- **Modalities:** input text, image, **audio**, **video**, PDF; output text; thinking supported (reasoning budgets, none/minimal/low/medium/high); native tool calling and structured outputs; no image generation on this SKU (separate `gemini-3.1-flash-image` / Nano Banana 2).
- **Pricing (as of 2026-10-20):** AI Studio paid **$0.25/M input** (text, image, video), **$0.50/M** audio input, **$1.50/M output**; cached input **$0.025/M** (audio $0.05/M). Free tier available with standard rate limits. Vertex: $0.25 standard / $0.45 priority / $0.125 flex-batch.
- **Architecture:** proprietary (closed weights), multimodal, Google DeepMind.

### Raw benchmarks found

> Google model card (March 2026) vs Artificial Analysis independent run vs BenchLM/Vals AI — the two families disagree slightly because of harness and thinking-budget differences; both are listed.

Agent / tool use:

- Terminal-Bench 2.1: **31.1%** (Artificial Analysis, non-reasoning/default effort — https://artificialanalysis.ai/models/gemini-3-1-flash-lite-preview)
- Terminal-Bench 2.1 (Vals AI run): **34.1%** (BenchLM ledger — https://benchlm.ai/models/gemini-3-1-flash-lite)
- Terminal-Bench Hard: **24.2%** (AA) · Terminal-Bench 4.0: **0.51%** (AA)
- Tau2-bench: **31.3%** (AA) · Tau3-Banking: **9.7%** (AA)
- GDPval-AA: **430.8** (AA) · GDPval-AA all-pass: **7.8%** (AA)
- AutomationBench partial score: **6.8%** (AA) · Apex-Agents: **12.2%** (AA)
- IFBench: **77.2%** (AA)
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found for this SKU

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (Google model card) vs **82.2%** (AA) vs **81.1%** (Vals AI / BenchLM)
- HLE: **16.0%** (Google card, text-only) vs **17.2%** (AA)
- AA-LCR: **74.3%** (AA) · MLCR: **6.1%** (AA)
- CritPt: **1.1%** (AA)
- Artificial Analysis Intelligence Index: **15.55** (AA) / **47.0/100** composite, #1xx of 226 (BenchLM — https://benchlm.ai/models/gemini-3-1-flash-lite)
- MMLU-Pro: **86.2%** (Vals AI / BenchLM) · MMMLU: **88.9%** (Google card)
- FrontierMath v2 Tiers 1–3: **27.7%** (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **36.3% / 82.7%** (AA)

Coding:

- SWE-bench Verified: **62.8%** (Vals AI run, via BenchLM) — Google publishes no SWE-bench number for this SKU
- LiveCodeBench: **72.0%** (Google card) vs **80.1%** (Vals AI / BenchLM)
- SciCode: **43.4%** (AA) · Vibe Code Bench v1.1: **0.00%** (Vals AI / BenchLM)

Long context:

- MRCR v2 128k: **60.1%** · MRCR v2 1M: **12.3%** (Google model card) — measured retrieval collapses at the top of the advertised window
- LOCA / RULER / GraphWalks at 1M: no verified public score found

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 31.3%, Terminal-Bench 2.1 31.1–34.1%, GDPval-AA 430.8 and AutomationBench 6.8% put this model in the lower-middle of the agentic band, well under the 45–60% Terminal-Bench midpoint; IFBench 77.2% is the one bright spot (instruction following, not tool success).
- **Reasoning: 62/100.** GPQA 81–87% and MMLU-Pro 86.2% sit at the top of the mid band, but HLE 16–17%, MLCR 6.1%, CritPt 1.1%, FrontierMath 27.7% and an AA Intelligence Index of 15.6 (median 8, but far below the 20–35 "mid" band) cap it: good knowledge recall, weak hard multi-step reasoning.
- **Context window: 80/100.** A genuine 1,048,576-token window (65,536 max output) earns the ≥1M tier, but MRCR v2 falls from 60.1% at 128k to 12.3% at 1M and Terminal-Bench 4.0 is 0.51%, so the advertised ceiling is not retrieval-real; scored in the 500K–1M band rather than 95+.
- **Multimodal: 92/100.** Text, image, audio, video and PDF in with text out — audio and video input put it in the top multimodal tier (MMMU-Pro 76.8% on Google's card, 75.5% on AA).
- **Coding: 62/100.** SWE-bench Verified 62.8% and LiveCodeBench 72–80% are mid-band, but Vibe Code Bench is 0.00%, SciCode 43.4% and Terminal-Bench 2.1 31.1% — competitive on contest-style code, weak on repo-scale engineering.
- **Cost efficiency: 95/100.** $0.25/M in, $1.50/M out, $0.025/M cached is among the cheapest paid routes for a 1M-context multimodal model; a free AI Studio tier exists (would score 100).
- **Overall Score: 68/100.** Mean of the five quality dims = (45 + 62 + 80 + 92 + 62) / 5 = 68.2 → **68**. Best fit: cheap high-volume multimodal processing and lightweight agentic work — not long-horizon planning or repo-scale coding.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google AI Studio / Vertex model pages and model card, Artificial Analysis, BenchLM + Vals AI, OpenRouter API, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash_Lite.md`, using the same headings.
