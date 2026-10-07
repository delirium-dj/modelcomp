# Gemma 4 12B Unified — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma (curated id `opencode/gemma-4.12b-unified`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (card style "Gemma 4 12B Unified"; weights `google/gemma-4-12B`, instruction-tuned `google/gemma-4-12B-it`)
- **Short description:** Google's encoder-free mid-size multimodal open model — the first Gemma 4 with **native audio and video input** at laptop size (16 GB VRAM / unified memory). "Unified" means the vision and audio encoders were **removed**: images go through one matrix multiply + positional embedding + normalizations, and raw audio is projected straight into the text-token space, so a single decoder handles everything. Sits between E4B and the 26 B MoE; DeepMind positions its reasoning as "nearing our 26B model" at under half the memory.
- **Provider / access:** open weights (Apache 2.0) on Hugging Face and Kaggle; runs locally via Transformers, llama.cpp, MLX, vLLM, SGLang, Ollama, LM Studio, LiteRT-LM; production endpoints on Google Cloud (Gemini Enterprise Agent Platform Model Garden, Cloud Run, GKE). Ships with Multi-Token Prediction (MTP) drafters for lower speculative-decode latency. Native function calling.
- **Release / knowledge:** announced 2026-06-03 (Google blog), family weights 2026-04-02; pretrained on 140+ languages. No knowledge-cutoff figure disclosed.
- **IDs:** `google/gemma-4-12B` / `google/gemma-4-12B-it` (HF), `gemma-4-12b` (Artificial Analysis/BenchLM), Vertex/Gemini API `gemma-4-12b-it`, curated id `opencode/gemma-4.12b-unified`.
- **Context window:** 262,144 tokens (256 K) — card and Artificial Analysis ("262k") agree; 262 K vocabulary, 48 layers, 1024-token sliding window. Max output not disclosed on the pages I read.
- **Modalities:** text + image + **audio (speech)** + video in; text out. AA's spec block explicitly lists "text, image, speech, and video input"; the family card restricts native audio to E2B/E4B/12B, and this is the model that carries it at mid size. Output is text-only (no image/audio generation).
- **Pricing (as of 2026-10-07):** Artificial Analysis: $0.10 in / $0.30 out per 1M (blended route pricing); self-hosting is $0 under Apache 2.0, and AA rates that hosted price "somewhat expensive" for an open-weight model of this size (medians $0.03 / $0.15). Throughput **115.6 output tokens/s, #17 of 142** in AA's speed table.
- **Architecture:** 12 B dense (card table: 11.95 B), 48 layers, decoder-only, unified/encoder-free multimodal input, hybrid local(1024)-global attention with p-RoPE, MTP drafter heads.

### Raw benchmarks found

Vendor rows from the Gemma 4 12B card / launch blog (instruction-tuned, thinking enabled); independent rows from Artificial Analysis and BenchLM `gemma-4-12b` (overall **31.9/100, #163 of 887**, 26 of 623 benchmarks covered, coverage flagged partial/conservative; AA Intelligence Index **14**, "well above average" vs a median of 8 in its class).

Agent / tool use:

- τ²-bench (avg over 3): **69.0 %** (vendor) vs **36.3 %** (Artificial Analysis, standardized harness) — a 33-point gap, the same card-vs-harness pattern seen across the Gemma 4 family; I scored the independent number
- GDPval-AA: **591 Elo**, normalized **0.0 %** — it does not complete the 2026 cowork tasks
- AA-IFBench: **73.5 %** (instruction following); native function calling is documented
- Terminal-Bench 2.1 / 4.0, Toolathlon, AutomationBench, Claw-Eval: **no verified public score found for this ID**

Reasoning / knowledge:

- GPQA Diamond: **78.8 %** (vendor) / **75.3 %** (AA)
- HLE: **5.2 %** no tools (vendor) / **15.7 %** (AA)
- AIME 2026 (no tools): **77.5 %**; MMLU-Pro **77.2 %**; MMMLU **83.4 %**; BigBench Extra Hard **53.0 %**
- CritPt: **0.0 %** (AA); AA-LCR (long-context reasoning) **63.7 %**
- AA-Omniscience: accuracy **15.6 %**, hallucination rate **81.0 %**, index **−52.7** — the weakest knowledge calibration measured in this pass

Coding:

- LiveCodeBench v6: **72.0 %** (vendor); AA Coding Index: **31.0 %**
- SWE-bench Verified, DeepSWE, SciCode, SWE-Atlas, Terminal-Bench, NL2Repo: **no verified public score found for this ID**

Multimodal / long context:

- MMMU-Pro: **69.1 %** (vendor) / **69.7 %** (AA); MathVision **79.7 %**; MedXPertQA MM **48.7 %**; OmniDocBench 1.5 avg edit distance **0.164**
- Audio: CoVoST translation **38.5** (excluding Chinese); FLEURS CER **0.069** (lower better) — real ASR/translation ability, but far below the family's vision numbers
- MRCR v2 (8 needles, 128 K, average): **43.4 %** — vs 66.4 % for the dense 31B; retrieval at length is the family's disclosed weak spot

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling and IFBench 73.5 % are fine plumbing, but the independent agentic evidence is poor: τ²-bench 36.3 % on AA's harness and GDPval-AA 591 at 0.0 % normalized put it below the methodology's mid band (~900–1200 ⇒ 50–70), and no Terminal-Bench/Toolathlon/Claw-Eval row exists for the ID. Vendor τ² 69.0 % is recorded but not trusted as the score basis.
- **Reasoning: 62/100.** GPQA ~75–79 % and AIME 77.5 % are strong for 12 B dense, yet HLE 5.2 % (no tools) / 15.7 %, CritPt 0.0 %, Index 14 and an −52.7 Omniscience index with 81.0 % hallucination place it in the methodology's mid band (GPQA 60–80 %, HLE <10 %, Index 20–35 ⇒ 55–65).
- **Context window: 70/100.** A real 262,144-token window is the 200 K–500 K tier, and the tier's own reference point for 200 K is 70; AA-LCR 63.7 % earns the middle of the band while the disclosed MRCR 8-needle 128 K figure of 43.4 % blocks anything higher, and max output is undisclosed (caveat).
- **Multimodal: 90/100.** Text + image + **audio** + video input is the methodology's "+audio in" band (90–100) and this is one of very few open-weight models in the registry with native speech *and* video input at laptop size. It sits at the band floor rather than higher because the measured multimodal quality is mid-tier (MMMU-Pro 69.1 %, MedXPertQA 48.7 %) and the audio rows are weak in absolute terms (CoVoST 38.5), with text-only output.
- **Coding: 60/100.** LiveCodeBench v6 72.0 % is respectable competitive-style coding, but the independent AA Coding Index is 31.0 % and there is no repository-level (SWE-bench/DeepSWE/NL2Repo), scientific (SciCode) or terminal (Terminal-Bench) row for this ID at all — the "no hallucinated score, slight penalty" rule keeps this at the bottom of the mid band.
- **Cost efficiency: 96/100.** $0.10 in / $0.30 out plus 115.6 tokens/s (#17/142) is near the ~$0.10/$0.20 ≈ 97–99 anchor, and Apache 2.0 weights with MTP drafting make local deployment effectively free at 16 GB — the deduction is AA's own note that hosted open-weight pricing here is above its class median.
- **Overall Score: 66/100.** Mean of the five quality dimensions (50 + 62 + 70 + 90 + 60) / 5 = 66.4 → 66; Cost excluded per `RULES.md`. Best fit: local/edge multimodal agents that must see, hear and read video or microphone input without sending data anywhere — speech+video input at 12 B is the unique selling point. Not a coding agent or a factual answer engine: agentic and calibration numbers are the family's weakest here.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Google blog "Introducing Gemma 4 12B", Hugging Face Gemma 4 model-card README, Artificial Analysis `models/gemma-4-12b`, BenchLM `gemma-4-12b`, HF `google/gemma-4-12B-it`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
