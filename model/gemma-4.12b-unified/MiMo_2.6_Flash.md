# Gemma 4 12B Unified — findings by Mimo v2.6 Flash

- Source: Google DeepMind (`gemma-4.12b-unified`)
- Date: 2026-10-05 (UTC)
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
- Native function calling supported + agentic demos on OpenCode/llama.cpp, but no published tool-accuracy suite (see Coding for Aider Polyglot)

Reasoning / knowledge:

- GPQA Diamond: **87.9** <(tech report Table, 12B column)>
- MMLU-Pro: **85.4** · MMLU: 91.4 · BBH: 92.5 <(same table)>
- AIME: **94.7** · HMMT: 94.4 · Math Olympiad Bench: 92.6 · MGSM: 94.9 <(same table)>
- HLE / Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- LiveCodeBench: **71.9** <(tech report, 12B column)>
- Aider Polyglot: **83.4** <(tech report, 12B column)>
- SWE-bench Verified / SWE-bench Pro / terminal-bench / Vibe Code Bench / ReactBench: **no verified public score found**

Long context:

- 256K window documented (medium tier); MRCR / RULER / NIAH retrieval quality: **no verified public score found** in the report

Multimodal (extras):

- MMMU-Pro: **67.7** · MATH-Vision: 76.7 · MathVerse: 71.7 · CharXiv Reasoning: 54.6 / Description: 75.9 <(tech report vision tables, 12B @280K)>
- InfographicVQA: 58.7 · OmniDocBench: 0.408 (lower better) · UI-Vision: 40.3 · VidOCR: 67.7 · FilmTranscript: 67.7 · Chart2Text-SAGE: 0.583 · MedXPertQA-MM: 47.4
- Audio ASR / diarization: **no verified public score found** (WER not published in report)

### Normalized scores (1–100)

- **Tool use: 60/100.** Native function calling + Aider Polyglot 83.4 show real agentic coding chops, but no verified MCP Mark / Toolathlon / Tau numbers exist → capped at 60 (missing evidence never drags below 50, but no frontier reference hits either).
- **Reasoning: 87/100.** GPQA 87.9 lands in the frontier band and AIME 94.7 / HMMT 94.4 beat the 92+ frontier math references; MMLU-Pro 85.4 just misses the 86+ reference and no HLE / AA Intelligence Index exists → 87.
- **Context window: 90/100.** 256K sits between the 128K (85) and ≥1M (95) tiers → 90.
- **Multimodal: 90/100.** Audio+video+image native input (encoder-free) is the audio-in tier 90–100; MMMU-Pro 67.7, MATH-Vision 76.7, CharXiv 54.6 are solid but mid-high, so 90 not 95+.
- **Coding: 75/100.** LiveCodeBench 71.9 (>55) and Aider Polyglot 83.4 (≥60) clear the mid floor, but with no SWE-bench / terminal-bench evidence it stays under the 70–82 upper-mid band's honest ceiling → 75.
- **Cost efficiency: 98/100.** Free rules apply (Apache 2.0 open weights, runs locally on 16GB laptops) but no verified OpenCode Zen Free ID was found in this research → 98 rather than a flat 100.
- **Overall Score: 80/100.** (60+87+90+90+75)/5 = 80.4 → 80 — best fit: free 12B encoder-free multimodal (audio+video in) with near-frontier GPQA/math, ideal for local agents; not a frontier SWE/tool-use pick.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Google Developers Blog, Gemma 4 model card, Google Gemma 4 Technical Report arXiv:2607.02770, Hugging Face README); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.