# Gemma 4 12B Unified — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4.12b-unified`)
- Date: 2026-10-19 (UTC; original research 2026-10-05, re-researched 2026-10-19)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's dense 12B open model with a unified, encoder-free multimodal architecture (raw image patches + audio frames fed straight into the decoder) — text/image/video/audio in, text out, 256K context, runs locally on 16GB laptops.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face (`google/gemma-4-12B`, `google/gemma-4-12B-it`) and Kaggle; local runtimes: llama.cpp, LiteRT-LM `serve` (OpenAI-compatible API server), vLLM, SGLang, MLX, HF Transformers, Ollama, LM Studio; cloud deploy via Google Cloud / Vertex Model Garden. Free (open weights).
- **Release / knowledge:** Released 2026-06-03 (Google Developers Blog); knowledge cutoff not published in the technical report.
- **IDs:** `google/gemma-4-12B` (base), `google/gemma-4-12B-it` (instruction-tuned), LiteRT repo `litert-community/gemma-4-12B-it-litert-lm` (`gemma4-12b`). No OpenCode Zen Free ID found in this research (not in models.dev catalog rows checked).
- **Context window:** 256K tokens (medium tier: 12B / 26B-A4B / 31B; small E2B/E4B are 128K) — per model card + HF README; max output not published; thinking budgets N=40K (light) / 120K (medium) / 280K (heavy) total tokens.
- **Modalities:** text, image (variable aspect/resolution), video, audio (16 kHz, native — first medium-sized Gemma with audio) in; text out; thinking configurable (default heavy in evals); native system prompt role; native function calling (tool calls); JSON/temperature knobs not documented in the report.
- **Pricing (as of 2026-10-05):** free — Apache 2.0 open weights, local on 16GB VRAM/unified memory (fp16-class laptop GPU); paid via cloud endpoint hosts (no verified Zen free ID).
- **Architecture:** 12B dense decoder-only transformer, encoder-free unified multimodal (35M-parameter vision embedder: 48×48 patch → single matmul + factorized coordinate lookup; audio: 40 ms / 640-float frames linearly projected), hybrid local sliding-window + global attention, same decoder structure as Gemma 4 31B Dense; dedicated multi-token prediction (MTP) model released; Gemma 4 license (Apache 2.0).

### Raw benchmarks found

> Measured numbers with (source, harness) for traceability. Gemma 4 Technical Report (arXiv:2607.02770), greedy decode, thinking enabled, input cap N=280K.

Agent / tool use:

- MCP Mark / Toolathlon / Tau-bench / OSWorld / Claw-Eval: **no verified public score found**
- τ²-bench: **36.3%** (benchgap measured, 2026-10-18 dataset — first agentic-harness datapoint)
- Native function calling supported + agentic demos on OpenCode/llama.cpp; Aider Polyglot 83.4 (tech report)

Reasoning / knowledge:

- GPQA Diamond: **87.9** <(tech report Table, 12B column)> — **conflict:** AA-run GPQA Diamond measures **75.3%** (AA) / **78.8%** (benchgap measured); both harnesses retained
- MMLU-Pro: **85.4** <(tech report)> — **conflict:** AA-run measures **77.2%** (benchgap measured); MMLU: 91.4 · BBH: 92.5 <(tech report)>
- AIME: **94.7** · AIME26: **77.5%** (benchgap measured) · HMMT: 94.4 · Math Olympiad Bench: 92.6 · MGSM: 94.9 <(tech report + benchgap)>
- HLE: **15.7%** (AA-run, benchgap measured; w/o-tools 5.2%) — fill 2026-10-19
- Artificial Analysis Intelligence Index: **14.2** (AA measured, benchgap 2026-10-19 — fill; below the 20–35 mid band)
- LCR: **63.7%** (AA-LCR measured, fill); CritPt: 0.0% · Omniscience: 15.6% acc (AA measured)

Coding:

- LiveCodeBench: **71.9** <(tech report, 12B column)>; **v6 72.0%** (benchgap measured — independent corroboration of the tech-report figure)
- Aider Polyglot: **83.4** <(tech report, 12B column)>
- AA Coding Index: **31.0** (AA measured, fill 2026-10-19)
- SWE-bench Verified (est. 57.7 medium) / SWE-bench Pro (est. 22.3) / terminal-bench / Vibe Code Bench / ReactBench: **no verified public score found** (benchgap estimates not counted as measured)

Long context:

- 256K window documented (medium tier); **MRCRv2: 43.4%** (benchgap measured, fill 2026-10-19 — weak retrieval at window)

Multimodal (extras):

- MMMU-Pro: **67.7** <(tech report)> · **69.1–69.7%** (benchgap/AA measured — corroboration) · MATH-Vision: 76.7 (tech report) / **79.7%** (AA measured) · MathVerse: 71.7 · CharXiv Reasoning: 54.6 / Description: 75.9 <(tech report vision tables, 12B @280K)>
- InfographicVQA: 58.7 · OmniDocBench: 0.408 (lower better) · UI-Vision: 40.3 · VidOCR: 67.7 · FilmTranscript: 67.7 · Chart2Text-SAGE: 0.583 · MedXPertQA-MM: 47.4 (tech report) / 48.7% (AA measured)
- Audio ASR / diarization: **no verified public score found** (WER not published in report)

### Normalized scores (1–100)

- **Tool use: 62/100.** +2 on the first measured agentic datapoint: τ²-bench 36.3% (benchgap) — between the Tau mid band (10–25) and frontier (50%+), alongside Aider Polyglot 83.4; still no MCP Mark/Toolathlon/OSWorld/Claw-Eval rows (was 60).
- **Reasoning: 78/100.** −9 on the harness conflict: tech-report GPQA 87.9 / AIME 94.7 are near-frontier, but AA-run measurements are materially lower (GPQA 75.3–78.8, HLE 15.7, AA Index 14.2 — below the 20–35 mid band); LCR 63.7% is solid. Split-the-middle on the two harness families (was 87 on tech-report-only evidence).
- **Context window: 75/100.** −15: first retrieval measurement is weak — MRCRv2 43.4% (benchgap measured) at the 256K window; the tier anchor (200K–500K = 65–84) now has negative evidence instead of none (was 90).
- **Multimodal: 90/100.** Audio+video+image native input keeps the audio-in tier (90–100); AA independently measures MMMU-Pro 69.7% and MathVision 79.7%, corroborating the tech report — unchanged.
- **Coding: 75/100.** LiveCodeBench v6 72.0% (benchgap measured) independently confirms the tech report's 71.9; Aider Polyglot 83.4; still no SWE-bench/terminal measured rows — unchanged.
- **Cost efficiency: 98/100.** Free rules apply (Apache 2.0 open weights, runs locally on 16GB laptops) but no verified OpenCode Zen Free ID was found — unchanged.
- **Overall Score: 76/100.** (62+78+75+90+75)/5 = 76.0 (was 80 — the AA harness conflict and weak MRCRv2 retrieval pull it −4 despite new agentic/vision fills). Best fit: free 12B encoder-free multimodal (audio+video in) for local agents; not a frontier SWE/tool-use pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-19
- Method: public internet research (2026-10-19 second pass: benchgap measured/estimate ledger with AA-run harness comparisons — filled HLE/AA-Index/LCR/MRCRv2/τ²-bench/Coding-Index rows and surfaced GPQA/MMLU-Pro harness conflicts; plus 2026-10-05 original: Google Developers Blog, Gemma 4 model card, Gemma 4 Technical Report arXiv:2607.02770, Hugging Face README) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.