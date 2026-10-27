# Gemma 4 12B Unified — findings by MiMo 2.6 Flash

- Source: Google DeepMind `gemma-4-12b-unified` (API id `gemma-4-12B-it`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (`gemma-4-12B-it`, "Gemma 4 12B Unified") — the mid-sized member of the Gemma 4 family and the **first Gemma model with the unified, encoder-free multimodal architecture**: raw 40 ms audio chunks and image patches projected straight into the LLM embedding space, no separate vision/audio encoders (Google Developers Blog; Gemma 4 Technical Report, arXiv 2607.02770).
- **Short description:** Dense 12B decoder-only transformer that "nears the 26B MoE on standard benchmarks at less than half the memory" (Google launch blog) — first medium-sized Gemma with native audio input, laptop-class (16 GB), agentic-workflow oriented, with a Google-shipped skills repository for coding agents.
- **Provider / access:** open weights (Hugging Face, ModelScope), Apache 2.0; Ollama (`gemma4:12b`, 7.6 GB), LM Studio (8.9M downloads), MLX, GGUF (Unsloth, lmstudio-community, 22 builds probed by modelfit), vLLM/SGLang, browser via WebGPU/transformers.js; hosted API via aggregators.
- **Release / knowledge:** **2026-06-03** (Google launch blog; analyticsvidhya, buildfastwithai, TECHSY, creeta all agree); **conflict:** Unsloth's changelog dates the GGUF release "Jun 2" (day-zero access) — both reported. Training cutoff January 2025 (TECHSY spec table).
- **IDs:** `gemma-4-12B-it` (official), Ollama `gemma4:12b`, MLX `gemma4:12b-mlx`.
- **Context window:** 256K tokens (Google tech report, LM Studio, all sources); 48 layers, sliding window 1024, vocab 262K, 11.95B parameters. Max output not separately published.
- **Modalities:** text + image + **native audio** in, text out; thinking mode; tool use ("Trained for tool use" — LM Studio); 140 languages. **Conflict:** analyticsvidhya/buildfastwithai claim video input; Google's own blog, tech report, TECHSY and creeta list text+image+audio only — Google's sources used.
- **Pricing:** open weights (Apache 2.0, commercial use OK) — self-host is the zero-per-token route; Q4_K_M = 6.63 GB weights + ~3.0 GB KV @16k ≈ 9.6 GB total (fits a 12 GB card; modelfit); BF16 26.7 GB / SFP8 13.4 GB / Q4_0 6.7 GB (Google AI dev table). No first-party API price published; no specific host price captured in this research pass.
- **Architecture:** dense, encoder-free unified multimodal; hybrid attention; MTP drafters exist family-wide (Apr 16); QAT checkpoints family-wide (Jun 5).

### Raw benchmarks found

Agent / tool use:

- Tool-use training + coding-agent skills repo (Google launch; LM Studio); **no Terminal-Bench / GDPval / Tau / Toolathlon figure found**

Reasoning / knowledge (Google official table, arXiv tech report + Unsloth mirror — 12B column):

- MMLU-Pro: **77.2%** (vs 26B-A4B 82.6, 31B 85.2, Gemma 3 27B 67.6 — beats the previous-gen 27B by ~10 pts)
- AIME 2026 no tools: **77.5%**; GPQA Diamond: **78.8%**; SciCode: **38.0%**; Codeforces Elo: **1659**

Coding:

- LiveCodeBench v6: **72.0%** (vs 26B-A4B 77.1, 31B 80.0); SWE-bench: no verified figure found

Multimodal:

- Encoder-free audio+vision; no MMMU figure isolated for the 12B in this pass (family MMMU-Pro: 31B 76.9, 26B-A4B 73.8)

Long context (**measured — rare in this corpus**):

- RULER accuracy: **96.4 @ 32k**, **91.2 @ 128k** (vs 26B-A4B 97.3/89.8, 31B 96.8/96.4, Gemma 3 27B 91.1/66.0)
- LOFT text retrieval Recall@128k: **66.4** (matches 26B-A4B 66.3; 31B 79.5; Gemma 3 27B 8.6)
- GraphWalks F1 <128k: **71.0** (26B 72.6; 31B 82.3; Gemma 3 32.8)

Local / deployment:

- ~6.6 GB VRAM at Q4_K_M, comfortable on 16 GB laptops; runs in browser tabs via WebGPU; 2-bit quants are a "visible quality collapse" — use Q4+ (modelfit); Unsloth GGUFs on the SOTA KL Pareto frontier.

### Normalized scores (1–100)

- **Tool use: 64/100.** Google explicitly ships agentic positioning (skills repo, tool-use training) but publishes no agentic benchmark for this tier; the evidence floor caps the score despite credible architecture-level claims.
- **Reasoning: 72/100.** MMLU-Pro 77.2, GPQA 78.8, AIME 77.5 and Codeforces 1659 beat the previous-generation Gemma 3 27B across the board — excellent for a 12B, but a clear step below the 26B-A4B (82.6/82.3/88.3) and far from frontier.
- **Context window: 88/100.** 256K window **with official measured retrieval**: RULER 91.2 @ 128k, LOFT 66.4, GraphWalks 71.0 — one of the few models in this corpus with published long-context accuracy; held below 90+ because the window is 256K (not 1M) and 128k RULER trails the 31B (96.4).
- **Multimodal: 88/100.** Text + image + **native audio** input via a genuinely novel encoder-free design (lower multimodal latency, end-to-end fine-tuning in one pass) — audio input puts it in the top band; text-only output and the video-input claim being unverified stop it higher.
- **Coding: 70/100.** LiveCodeBench v6 72.0 and SciCode 38.0 are strong-for-12B (above Gemma 3 27B's 29.1 LCB) but no SWE-bench/terminal evidence exists, and it sits ~5–8 pts behind its own 26B sibling.
- **Cost efficiency: 90/100.** Apache 2.0, 6.6 GB Q4_K_M running on a 12 GB card, 16 GB laptop-class full use, free browser execution, and 22 community quant builds — exceptional intelligence-per-dollar; not 100 only because no ultra-cheap first-party hosted rate was verified in this pass.
- **Overall Score: 76/100.** (64 + 72 + 88 + 88 + 70) / 5 = 76.4 → 76 — best fit: private local multimodal (voice+vision) agents and long-document work on consumer hardware; not the pick for frontier reasoning or SWE-bench-grade coding.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official Google sources first (Introducing Gemma 4 12B launch blog, Google Developers Blog developer guide, Gemma 4 Technical Report arXiv 2607.02770, ai.google.dev model overview), then independent sources (Unsloth GGUF mirror + changelog, LM Studio, modelfit quant audit, TECHSY, analyticsvidhya, buildfastwithai, creeta, Towards-AI video review); the video-input claim conflict is documented. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
