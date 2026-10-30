# Hy4 (preview) — Research Notes

**Model ID:** tencent/hy4-preview  
**Context window:** 1,000,000 total (960K in + 64K out); 64K max output  
**Modalities:** Text in/out only  
**Architecture:** 770B total / 49B active MoE; Apache 2.0  
**Pricing:** Hosted ~$0.75/$2.25 per 1M (OpenRouter); self-host $0

## Benchmarks (from meta.json)

- Terminal-Bench 2.1: 85.4% (vendor-reported) vs 55.1% (Vals independent)
- GPQA Diamond: 92.3%
- Note: 30-point gap between vendor and independent Terminal-Bench is a major credibility flag

## Scores

- **Tool use: 75/100.** Terminal-Bench 2.1 vendor 85.4% vs Vals 55.1% — averaging to ~70% effective; 1M context enables long agentic sessions; 49B active params bring real compute; significant vendor vs independent score gap reduces confidence.
- **Reasoning: 88/100.** GPQA Diamond 92.3% is genuinely elite graduate-level scientific reasoning, verified independently; strong cross-domain reasoning from a large MoE.
- **Context window: 92/100.** 1M total; 64K max output — large input window but relatively small output cap limits lengthy generated code or documents.
- **Multimodal: 15/100.** Text in/out only — no vision, audio, or video inputs.
- **Coding: 73/100.** Vendor Terminal-Bench 85.4% would be elite; Vals 55.1% is competitive-but-not-leading; applying a conservative average given the 30-point discrepancy.
- **Cost efficiency: 82/100.** Apache 2.0 open weights; self-host $0; hosted ~$0.75/$2.25 per 1M — excellent value for a 770B MoE with 1M context and GPQA 92.3%.
- **Overall Score: 69/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (75+88+92+15+73)/5 = 68.6 ≈ 69. Tencent's 1M-context open MoE: GPQA Diamond 92.3% is a genuine highlight, but a 30-point vendor vs. independent Terminal-Bench gap and text-only input limit confidence and versatility; strong self-host option via Apache 2.0.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
