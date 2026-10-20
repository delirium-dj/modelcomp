# Gemma 4 12B Unified — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (Gemma 4 12B / 12B Unified), `google/gemma-4-12B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (also published as Gemma 4 12B / `gemma-4-12B-it`)
- **Short description:** Google's June 2026 open-weight (Apache 2.0) 11.95B dense "unified" multimodal model — encoder-free, so image patches and raw audio are projected straight into the LLM embedding space instead of through separate vision/audio towers. It is the small end of Gemma 4 for local multimodal agents on a 16 GB laptop. **Access note:** `opencode/gemma-4.12b-unified` is not a live id — OpenCode Zen's catalogue contains no Gemma models at all, and OpenRouter only lists the 26B A4B and 31B instruct variants.
- **Provider / access:** Hugging Face `google/gemma-4-12B` (base) and `google/gemma-4-12B-it` (instruct), plus Google AI Studio / Vertex "Gemma 4" guides; hosted at SiliconFlow, nano-gpt and other OpenAI-compatible hosts; local serving with Transformers, llama.cpp, Ollama.
- **Release / knowledge:** **2026-06-03** (Google launch blog and developer guide; AA agrees). Knowledge cutoff not published. Technical report arXiv 2607.02770.
- **IDs:** `google/gemma-4-12B`, `google/gemma-4-12B-it` (HF); `google/gemma-4-12B-it` (SiliconFlow / nano-gpt). No OpenCode Zen or OpenRouter id for the 12B.
- **Context window:** **256K** tokens (262,144 in provider data — Google Gemma 4 docs, models.dev, BenchLM spec sheet).
- **Modalities:** input text, **image**, **audio** (≤30 s) and video (≤60 s at 1 fps, as frames); output text; audio is input-only.
- **Pricing (as of 2026-10-20):** hosted from **$0.10/M in, $0.30/M out** (SiliconFlow; AA's blended reference $0.12/M); cheapest hosts $0.05/$0.25. Self-host **$0** (Apache 2.0). Footprint: 16 GB VRAM per Google (BF16 weights 22.28 GB; Google's QAT Q4_0 GGUF is 6.50 GB) — the repo's "~9GB" figure is not supported by any source.
- **Architecture:** dense, 11.95B parameters, 48 layers, hidden sliding window 1024, vocab 262K, hybrid local/global attention with p-RoPE, encoder-free multimodal projection (35M vision embedder, linear audio projection).

### Raw benchmarks found

> Google publishes the numbers on the Hugging Face model card; Artificial Analysis and BenchLM give independent composite readings.

Reasoning / knowledge:

- GPQA Diamond: **78.8%** (Google card) · MMLU-Pro: **77.2%** (Google card) · MMMLU: **83.4%** (Google card)
- AIME 2026 (no tools): **77.5%** (Google card) · MATH-Vision: **79.7%** (Google card)
- HLE (no tools): **5.2%** (Google card) vs **15.7%** (AA-HLE) — conflict flagged
- Artificial Analysis Intelligence Index: **14** (AA) / 14.2 (BenchLM) · AA-LCR: **63.7%** (BenchLM) · output speed **114.0 tok/s** (AA)
- BenchLM overall: **36.3/100**, #157 (partial coverage)

Agent / tool use:

- Tau2-bench: **36.3%** (AA) vs **69.0%** (Google card) — conflict flagged
- Terminal-Bench 2.1: **27.3%** (AA) · Terminal-Bench Hard: **18.2%** (AA)
- GDPval-AA: **427.31** (AA) · AutomationBench: no verified public score found
- Toolathon / MCP-Atlas / Claw-Eval / OSWorld: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (Google card) · Codeforces ELO: **1659** (Google card)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found for Gemma 4 12B

Long context:

- MRCR v2 8-needle at 128k: **43.4%** (Google card) — the only long-context retrieval figure published.

### Normalized scores (1–100)

- **Tool use: 45/100.** τ²-bench 36.3% (AA), Terminal-Bench 2.1 27.3% and GDPval-AA 427 are below the mid band, and no OSWorld, MCP-Atlas or AutomationBench number exists — the model is a capable generalist, not a proven tool runner.
- **Reasoning: 60/100.** GPQA 78.8%, MMLU-Pro 77.2%, AIME 2026 77.5% and MATH-Vision 79.7% sit at the mid band, capped by HLE 5.2–15.7%, an AA Intelligence Index of 14 and a BenchLM composite of 36.3.
- **Context window: 70/100.** 256K tokens is the 200K–500K tier; MRCR v2 at 128k is only 43.4%, so retrieval at the top of the window is unproven and the tier midpoint applies.
- **Multimodal: 92/100.** Text, image **and audio** input (plus video-as-frames) with text out, MMMU-Pro 69.1%, MathVision 79.7% and MedXpertQA-MM 48.7% — audio input puts it in the top multimodal tier.
- **Coding: 58/100.** LiveCodeBench v6 72.0% and a Codeforces ELO of 1659 are respectable for 12B, but there is no SWE-bench Verified, DeepSWE or SciCode figure at all, and Terminal-Bench 2.1 is 27.3%.
- **Cost efficiency: 97/100.** ~$0.10/M in and $0.30/M out hosted, $0 on your own 16 GB machine under Apache 2.0 — one of the cheapest capable multimodal models to run anywhere.
- **Overall Score: 65/100.** Mean of the five quality dims = (45 + 60 + 70 + 92 + 58) / 5 = 65.0 → **65**. Best fit: private, offline multimodal assistants and light agentic loops on a single laptop — pair with a stronger planner.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google launch blog and developer guide, Hugging Face model card and file listings, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B.md`, using the same headings.
