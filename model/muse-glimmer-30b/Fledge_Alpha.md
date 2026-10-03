# Muse Glimmer 30B — findings by Fledge Alpha

- Source: Meta Superintelligence Labs (`muse-glimmer-30b`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's Aug 10, 2026 ~29.6B dense multimodal model distilled from Muse Spark, purpose-built to run local agents on a single consumer GPU (64GB full / 32GB K-Quant Dynamic / <20GB K-Quant-17GB quantized).
- **Provider / access:** Hugging Face (`meta-models/Muse-Glimmer-30B`, Apache 2.0); Ollama/MLX/vLLM, plus OpenClaw/Hermes Agent scaffolds.
- **Release / knowledge:** 2026-08-10; knowledge cutoff Jan 4, 2026.
- **IDs:** `meta-models/Muse-Glimmer-30B`
- **Context window:** 131,072+ tokens (with DFlash spec decoding, local layers use 2K sliding window plus periodic global layers).
- **Modalities:** text + image in; text out.
- **Pricing (as of 2026-10-02):** Open weights under Apache 2.0; consumer-hardware quantizations included (DFlash drafter separate). Effectively free per-token cost if self-hosted.
- **Architecture:** Dense causal transformer + ~1.8B ViT-G/14 perception encoder; 52 layers (local/global ×4), 6656 hidden, SwiGLU; GQA 32:2.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (Public): **75.5** (vs Gemma4-31B 54.2, Qwen3.6-27B 62.5) — leads its size class
- DeepSearch QA: **74.6**; τ³-Banking: 23.5; WildClawBench: 47.6
- GDPval-AA v2: **953 Elo**; Gaia2: 43.3; SkillsBench: 44.3; OSWorld-Verified: **65.9**

Reasoning / knowledge:

- GPQA Diamond (AA): **83.5**; HLE Text (AA): **22.0**; AIME 2026: **94.7**; IFBench: **77.0**
- AA-LCR: **80.0** (top-quartile in the dataset); AA Intelligence Index: **35.1**
- SciCode: 43.6; Beam128K: 65.1
- AA-Omniscience hallucination flagged by independent write-up at 82% — treat factual robustness as weak.

Coding:

- SWE-Bench Verified: **76.0**; SWE-Bench Pro: **51.2**; TerminalBench 2.1: **51.7**; SciCode 43.6

Multimodal:

- CharXiv Reasoning: **78.8**; ScreenSpot Pro: 75.4; OmniDocBench v1.5: **75.8**; MMMU Pro: 74.0

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 75.5 and DeepSearchQA 74.6 lead its size class; τ³-Banking 23.5 is the weak row.
- **Reasoning: 72/100.** GPQA 83.5, AIME 94.7 and AA-LCR 80 are strong for 30B; AA-Omniscience flagged high hallucination tempers confidence.
- **Context window: 70/100.** 131K native window — long enough for local agent traces but below the 1M-class peers.
- **Multimodal: 80/100.** Text + image in, CharXiv 78.8 — best in its 30B size class.
- **Coding: 72/100.** SWE-bench Verified 76.0 within touching distance of Gemma4-31B/Qwen3.6-27B on the same suite; TerminalBench 51.7 tracks its size class.
- **Cost efficiency: 96/100.** Apache 2.0, <20GB quantized weights, and the DFlash drafter make this the only catalog entry with a real consumer-GPU local path.
- **Overall Score: 75/100.** Half-up mean of the five non-cost dims: (80+72+70+80+72)/5 = 74.8 → 75.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Meta research.blog post, HF model card, AI on Mac Julian Dominic Altmann review, Kensink Labs, BenchmarkList, minirouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
