# Gemma 4 26B A4B — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (Gemma 4 26B A4B), `google/gemma-4-26B-A4B`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (MoE; "A4B" = ~4B active parameters per token)
- **Short description:** Google's April 2026 open-weight (Apache 2.0) mixture-of-experts model — 25.2B total parameters with only 3.8B active — delivering near-dense-31B quality at roughly an eighth of the inference cost, aimed at high-throughput agentic workloads. **Access note:** `opencode/gemma-4.26b-a4b` is not a live id — OpenCode Zen's catalogue has no Gemma models; the live id is `google/gemma-4-26b-a4b-it` on OpenRouter (plus a `:free` route).
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B` (base) and `google/gemma-4-26B-A4B-it` (instruct); OpenRouter `google/gemma-4-26b-a4b-it` (+ `:free`); Amazon Bedrock `google.gemma-4-26b-a4b`; Google Vertex AI; Vercel, SiliconFlow, DeepInfra, Cloudflare Workers AI, Novita, HF Inference; local serving with llama.cpp / Ollama / Transformers.
- **Release / knowledge:** **2026-04-02** (models.dev release dates, AA, OpenRouter created timestamp). Knowledge cutoff not published.
- **IDs:** `google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it` (HF); `google/gemma-4-26b-a4b-it` (OpenRouter); `google.gemma-4-26b-a4b` (Bedrock). No OpenCode Zen id.
- **Context window:** **256K** tokens (262,144 in provider data — Google Gemma 4 docs, models.dev, OpenRouter).
- **Modalities:** input text and image (+ video listed by OpenRouter's modality string); output text; reasoning/thinking mode configurable.
- **Pricing (as of 2026-10-20):** OpenRouter **$0.09/M in, $0.30/M out, $0.05/M cached** (and a $0 `:free` route); Bedrock / Novita / HF Inference **$0.13/$0.40**; Vertex / Vercel $0.15/$0.60; DeepInfra $0.07/$0.34; self-host **$0** (Apache 2.0). Footprint: BF16 weights 48.07 GB — no vendor "24 GB" claim exists (4-bit is roughly 13–14 GB).
- **Architecture:** MoE, **25.2B total / 3.8B active**, 30 layers, 8 of 128 experts active plus 1 shared, sliding window 1024, vocab 262K, ~550M vision encoder.

### Raw benchmarks found

> Numbers are Google's own (Hugging Face model card); Artificial Analysis and BenchLM provide independent composite readings.

Reasoning / knowledge:

- GPQA Diamond: **82.3%** (Google card) · MMLU-Pro: **82.6%** (Google card) · MMMLU: **86.3%** (Google card)
- AIME 2026 (no tools): **88.3%** (Google card) · MATH-Vision: **82.4%** (Google card) · BigBench Extra Hard: **64.8%** (Google card)
- HLE: **17.2%** with search / **8.7%** without tools (Google card) vs **19.3%** (AA-HLE) — conflict flagged
- Artificial Analysis Intelligence Index: **17** (AA) / 16.7 (BenchLM) · AA-LCR: **65.7%** (BenchLM) · output speed **65.5 tok/s** (AA)
- BenchLM overall: **45.6/100**, #121 (partial coverage)

Agent / tool use:

- Tau2-bench: **43.6%** (AA) vs **68.2%** (Google card) — conflict flagged
- Terminal-Bench 2.1: **38.95%** (AA) · Terminal-Bench Hard: **13.6%** (AA)
- GDPval-AA: **565.75** (AA) · AutomationBench partial: **1.9%** (AA)
- Toolathon / MCP-Atlas / Claw-Eval / OSWorld: no verified public score found

Coding:

- LiveCodeBench v6: **77.1%** (Google card) · Codeforces ELO: **1718** (Google card)
- SWE-bench Verified / SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found for Gemma 4 26B A4B

Long context:

- MRCR v2 8-needle at 128k: **44.1%** (Google card) — the only long-context retrieval figure published.

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-bench 43.6% (AA), Terminal-Bench 2.1 38.95%, GDPval-AA 566 and an AutomationBench partial of 1.9% are mid-to-low for agentic work, with no OSWorld or MCP-Atlas evidence; Google's own τ² figure of 68.2% is the one point that lifts it.
- **Reasoning: 68/100.** GPQA 82.3%, MMLU-Pro 82.6%, AIME 2026 88.3% and MATH-Vision 82.4% are strong mid-band knowledge results, capped by HLE 8.7–19.3%, an AA Intelligence Index of 17 and 65.5 tok/s output speed.
- **Context window: 70/100.** 256K tokens is the 200K–500K tier; MRCR v2 at 128k is 44.1%, so the score sits at the tier midpoint rather than high.
- **Multimodal: 68/100.** Text and image input with text output, MMMU-Pro 73.8% (Google card) / 69.2% (AA), MedXpertQA-MM 58.1% — the "+image in" band.
- **Coding: 62/100.** LiveCodeBench v6 77.1% and a Codeforces ELO of 1718 are good for the size class, but no SWE-bench Verified, DeepSWE or SciCode figure exists, and Terminal-Bench 2.1 is 38.95%.
- **Cost efficiency: 97/100.** $0.09/M in and $0.30/M out on OpenRouter (with a free route), $0.13/$0.40 on Bedrock, and $0 self-hosted under Apache 2.0 — extremely cheap for the capability.
- **Overall Score: 64/100.** Mean of the five quality dims = (50 + 68 + 70 + 68 + 62) / 5 = 63.6 → **64**. Best fit: cheap, high-throughput local agents and bulk reasoning where latency and cost matter more than frontier accuracy.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Google Gemma 4 model card on Hugging Face and blob listings, Artificial Analysis, BenchLM, OpenRouter API, models.dev, OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B.md`, using the same headings.
