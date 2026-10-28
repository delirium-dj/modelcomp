# Nemotron 3.5 Super VL — Research Notes

**Model ID:** opencode/nemotron-3.5-super-vl  
**Context window:** 1M native; host-served 262,144  
**Modalities:** Text, image, video in; text out  
**Architecture:** 120B/12B-active Mamba-Transformer hybrid MoE; OpenMDW-1.1 license  
**Pricing:** $0.15/$0.50 per 1M (NanoGPT); self-host free (OpenMDW-1.1)

## Benchmarks

- AA Intelligence Index: 26.5 (highest in US open-weights medium class)
- CharXiv chart reasoning: 80.8% (up to 84% with Python interpretation)
- GPQA-Diamond: ~89.5–89.9%
- Hermes Bench: 63.44%
- LangChain multi-step agent eval: 87.05%
- SWE-bench Verified: 71.07%
- OSWorld-Verified: ~51.9% base; ~77%+ with community RL post-training
- Throughput: 400–600+ TPS (Mamba-Transformer efficiency)

## Scores

- **Tool use: 82/100.** LangChain multi-step 87.05%, Hermes Bench 63.44%; strong agentic tool chaining with a hybrid Mamba architecture delivering 5x throughput vs standard MoE.
- **Reasoning: 84/100.** GPQA-Diamond 89.5%, CharXiv 80.8%; top graduate-level reasoning and chart comprehension among open-weight VL models.
- **Context window: 78/100.** 1M native but host-served 262K; most deployments are capped at 256K in practice — scored on served context.
- **Multimodal: 68/100.** Text, image, video in; text out — covers three input modalities including video; no audio understanding.
- **Coding: 80/100.** SWE-bench Verified 71.07%; solid software engineering for a VL-specialized open-weight model.
- **Cost efficiency: 92/100.** $0.15/$0.50 per 1M at NanoGPT; OpenMDW-1.1 open weights enable free self-hosting; extreme value for a 120B multimodal model.
- **Overall Score: 78/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (82+84+78+68+80)/5 = 78.4 ≈ 78. NVIDIA's Mamba-Transformer hybrid VL MoE: GPQA-Diamond 89.5%, 400–600 TPS throughput, and open weights under OpenMDW-1.1 — a specialist multimodal pick at near-zero hosted cost.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
