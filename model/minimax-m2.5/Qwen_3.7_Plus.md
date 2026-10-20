# MiniMax M2.5 — findings by Qwen 3.7 Plus

- Source: MiniMax (`minimax-m2.5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5
- **Short description:** MiniMax's open-weight 230B/10B-active sparse MoE with 192K native context. Text-only, optimized for agentic coding, tool use, and office work via deep RL training. SWE-bench Verified 80.2%. Modified-MIT license. Released February 12, 2026.
- **Provider / access:** Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`); MiniMax API platform; OpenRouter; OpenCode Zen `opencode/minimax-m2.5`.
- **Release / knowledge:** 2026-02-12; knowledge cutoff not publicly stated.
- **IDs:** `opencode/minimax-m2.5` (OpenCode Zen).
- **Context window:** 196,608 tokens (192K) native (per config.json and SemiAnalysis).
- **Modalities:** Text in/out only; reasoning mode enabled; tool calling supported; no multimodal input.
- **Pricing (as of 2026-10-20):** M2.5 standard: $0.15/M input, $0.60/M output; M2.5-Lightning: $0.30/M input, $2.40/M output; Modified-MIT open weights (self-host with conditions).
- **Architecture:** Sparse MoE, 229.9B total / 9.8B active per token; 256 routed experts with 8 active; 62 layers; GQA (48 query / 8 KV heads); RoPE θ=5M; FP8 weights; multi-token prediction; Lightning Attention; trained via deep RL in 200K+ real-world environments.

### Raw benchmarks found

> Sources: MiniMax M2.5 official announcement (minimax.io, 2026-02-12), MiniMax-M2 series technical report (arXiv:2605.26494), SemiAnalysis InferenceX, Vibe Code Bench (arXiv:2603.04601), OpenRouter. Coverage: 18+ benchmarks — excellent coverage.

Agent / tool use:

- BrowseComp: **76.3%** with context management (MiniMax announcement — excellent)
- Wide Search: **70.3%** (MiniMax technical report Table 4)
- Toolathlon: **38.3%** (MiniMax technical report Table 4 — moderate)
- GDPval-AA: **35.0%** (MiniMax technical report Table 4)
- GDPval-MM: **59.0%** avg win rate vs mainstream models (MiniMax announcement)
- τ²-bench: not reported for M2.5

Reasoning / knowledge:

- AIME 2026: **87.2%** (MiniMax technical report Table 4 — exceptional math)
- GPQA Diamond: **85.2%** (MiniMax technical report Table 4 — strong)
- MMLU-Pro: **85.2%** (MiniMax technical report Table 4 — strong)
- HLE (no tools): **19.0%** (MiniMax technical report Table 4 — weak)
- IFBench: **70.0%** (MiniMax model card appendix)
- AA-LCR: **69.5%** (MiniMax model card appendix — decent long-context reasoning)
- SciCode: **44.4%** (MiniMax model card appendix)

Coding:

- SWE-bench Verified: **80.2%** Claude Code scaffold (MiniMax announcement — frontier-level)
- SWE-bench Verified (Droid): **79.7%** (MiniMax announcement)
- SWE-bench Verified (OpenCode): **76.1%** (MiniMax announcement)
- SWE-bench Pro: **55.4%** (MiniMax technical report Table 4)
- SWE-bench Multilingual: **74.1%** (MiniMax technical report Table 4)
- Multi-SWE-bench: **51.3%** (MiniMax technical report Table 4)
- Terminal-Bench 2.0: **51.7%** (MiniMax technical report Table 4)
- VIBE-Pro: **54.2%** (MiniMax technical report Table 4)
- Vibe Code Bench: **14.85%** ±2.95% (Vals AI arXiv paper — low)
- MLE Bench Lite: **51.5%** medal rate (MiniMax technical report Table 4)
- NL2Repo: **26.6%** (MiniMax technical report Table 4)

Multimodal & Grounded:

- Text-only model. No multimodal benchmarks.

Long context:

- AA-LCR: **69.5%** at 192K context (MiniMax model card appendix)
- BrowseComp uses context management (discards history when >30% of max context)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 72/100.** BrowseComp 76.3% is excellent. Wide Search 70.3% is strong. GDPval-MM 59.0% win rate is solid. However, Toolathlon 38.3% and GDPval-AA 35.0% are weak. Capped by weak Toolathlon and GDPval-AA.
- **Reasoning: 65/100.** AIME 2026 87.2% is exceptional. GPQA Diamond 85.2% and MMLU-Pro 85.2% are strong. IFBench 70.0% is solid. However, HLE 19.0% is very weak and AA-LCR 69.5% is only decent. Capped by very poor HLE.
- **Context window: 70/100.** 192K native tokens — solid but not top tier. AA-LCR 69.5% confirms decent long-context reasoning. Docked 30 for not reaching 256K+ tier.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input.
- **Coding: 78/100.** SWE-bench Verified 80.2% is frontier-level (top 5 globally). SWE-bench Multilingual 74.1% is excellent. Terminal-Bench 2.0 51.7% is moderate. SWE-bench Pro 55.4% is strong. VIBE-Pro 54.2% is moderate. However, Vibe Code Bench 14.85% is catastrophically low and NL2Repo 26.6% is weak. Capped by extremely poor Vibe Code Bench and weak NL2Repo.
- **Cost efficiency: 85/100.** M2.5 standard $0.15/$0.60 per 1M is extremely cheap. M2.5-Lightning $0.30/$2.40 is still affordable. Modified-MIT license adds conditions vs plain Apache 2.0.
- **Overall Score: 60/100.** Mean of five non-cost dims: (72 + 65 + 70 + 15 + 78) / 5 = 60.0, half-up = 60. Strong open-weight coding model: SWE-bench Verified 80.2% (frontier-level), BrowseComp 76.3%, AIME 2026 87.2%, 192K context — at very low cost ($0.15/$0.60 per 1M). However, held back by text-only modality, catastrophically low Vibe Code Bench (14.85%), very poor HLE (19.0%), and weak Toolathlon (38.3%). Best fit for: cost-sensitive agentic coding workflows, SWE-bench-style issue resolution, and high-volume API usage where speed (100 tok/s Lightning) and price matter.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-20
- Method: public internet research across MiniMax official announcement, MiniMax-M2 series technical report on arXiv, SemiAnalysis InferenceX, Vibe Code Bench paper on arXiv, and OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
