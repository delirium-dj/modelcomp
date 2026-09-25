# Muse Glimmer 30B — findings by DeepSeek 4.1 Flash

- Source: Meta Superintelligence Labs / Muse Glimmer 30B (`meta/muse-glimmer-30b`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B. No "Free" wording — open weights (Apache-2.0), no Zen Free ID.
- **Short description:** Meta Superintelligence Labs' ~30B agentic vision-language model, distilled from Muse Spark and engineered for long-horizon tool-use tasks on a single consumer GPU. It ships quantized deployment targets and a speculative-decoding drafter rather than leaving local serving as an exercise.
- **Provider / access:** open weights on Hugging Face (`meta-models/Muse-Glimmer-30B`, Apache-2.0) with GGUF/quantized builds; runnable via vLLM, llama.cpp, Ollama, LM Studio, Docker, and served on OpenRouter, Fireworks/Together/Vercel and NVIDIA NIM.
- **Release / knowledge:** released 2026-08-09 (slm.expert profile / vendor card). Knowledge cutoff not disclosed.
- **IDs:** `meta/muse-glimmer-30b` (OpenRouter), `meta-models/Muse-Glimmer-30B` (weights). No Zen Free ID (`noFreeId: true`).
- **Context window:** 128K / 131,072 tokens (vendor card). No long-context retrieval measurement published.
- **Modalities:** text and image in; text out; reasoning yes (selectable low / medium / high / xhigh via system prompt); tool calls yes. Video is handled only as individual frames and audio is out of scope (vendor card).
- **Pricing (as of 2026-09-25):** open weights — self-host free; OpenRouter $0.30 in / $1.10 out per 1M; Fireworks / Together / Vercel $0.35 / $1.50; NVIDIA NIM $0 (project `meta.json`, curated from provider listings). 4-bit weights fit a 24GB GPU / 32GB Mac (~20GB).
- **Architecture:** 29.8B dense causal transformer (52 layers, hidden 6656, SwiGLU FFN, [local, local, local, global] attention with a 2,048-token sliding window, RoPE theta 500,000 on local layers) plus a ~1.8B ViT-G/14 perception encoder and a 5-layer DFlash block-diffusion drafter.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **65.9%** (vendor card, high reasoning)
- MCP Atlas: **75.5** (vendor card); DeepSearch QA: **74.6** (vendor card) — versus Gemma4-31B's 54.2 and 61.7 on the same rows
- Terminal-Bench 2.1: **51.7%** (vendor card; Qwen3.6-27B 60.7 on the same row)
- Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (vendor card, Artificial Analysis protocol, high reasoning)
- HLE: **22.0%** (vendor card, HLE Text, high reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (all published numbers are Meta's own; no independent reproduction yet)
- LCR / MLCR / CritPt: no verified public score found
- Omniscience / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **76.0%** (vendor card, OpenAI-curated subset, high reasoning; Qwen3.6-27B 77.2 on the same row)
- SWE-bench Pro: **51.2%** (vendor card)
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Multimodal:

- MMMU-Pro: **74.0%** (vendor card, high reasoning)

Long context:

- No MRCR / RULER / GraphWalks result reported at any window length.

Local-deployment measurements (vendor card, not accuracy benchmarks):

- Quantization degradation across 15 benchmarks: **0.2%** (K-Quant-Dynamic) and **1.0%** (K-Quant-17GB)
- DFlash drafter speedup: **3.1×** on RTX 5090, **1.5–1.8×** on M4/M5 Max

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.1 51.7% sits just above the 45–60% mid band and OSWorld-Verified 65.9% plus MCP Atlas 75.5 show real computer/tool use; the absence of Tau3-Banking and GDPval-AA leaves the frontier anchors unchecked.
- **Reasoning: 74/100.** GPQA Diamond 83.5% is strong for a 30B class model (mid band is 60–80%) and HLE 22.0% clears the sub-10% mid reference, but nothing reaches the 40%+ HLE / 60+ index frontier band, and no independent run exists.
- **Context window: 57/100.** 128K maps to the middle of the 100K–200K tier (50–64); no retrieval measurement is published, so the sliding-window attention caveat applies.
- **Multimodal: 68/100.** Image in / text out with MMMU-Pro 74.0% is the 60–70 band; no audio, video only as frames, and no video/audio scores cap it.
- **Coding: 73/100.** SWE-bench Verified 76.0% and SWE-bench Pro 51.2% are solid mid-tier-plus results, but no LiveCodeBench/SciCode/DeepSWE row exists and it trails Qwen3.6-27B on the same SWE-bench row.
- **Cost efficiency: 94/100.** $0.30/$1.10 hosted sits between the $0.10/$0.20 (97–99) and $0.60/$2.20 (92) anchors, and Apache-2.0 weights at ~20GB make self-hosting effectively free on a 24GB card.
- **Overall Score: 67/100.** (64 + 74 + 57 + 68 + 73) / 5 = 67.2 → 67. Best fit: local always-on agent work on one consumer GPU — measured local deployment, permissive licence and good agentic/VLM scores, capped by a 128K window and vendor-only benchmarking.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-25 UTC
- Method: public internet research (slm.expert model profile, vendor model card references, provider pricing listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
