# Gemini 3.8 Flash Cyber — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: gemini-3.8-flash-cyber
- **Full name**: Gemini 3.8 Flash Cyber
- **Provider ID**: google/gemini-3-8-flash-cyber
- **Context window**: 1,048,576 tokens (1M) input / 65,536 tokens output
- **Modalities**: Text, code → text, code
- **Pricing**: Restricted — Fairwind Program only (no public pricing)
- **Released**: September 2026
- **Official page**: https://deepmind.google/technologies/gemini/

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| CWE-Bench (Pass@1) | 47.2% | Collinear CWE-Bench / meta.json / ReachSignal |
| Chrome Security evaluation | 2.6× more correct patches than best commercial alternatives | Google Chrome Security Team |

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 88/100.** 2.6x improvement on real-world Chrome patching; purpose-built agentic vuln-fix workflow.
- **Reasoning: 85/100.** Security-domain reasoning is specialized and deep; general reasoning not publicly benchmarked.
- **Context window: 92/100.** 1,048,576-token context window → tier score 92.
- **Multimodal: 30/100.** Text and code only - no image, audio, or video; specialist security model.
- **Coding: 89/100.** CWE-Bench 47.2% on par with much larger frontier models; purpose-tuned for security patching.
- **Cost efficiency: 10/100.** Restricted to the Fairwind Program with no public pricing or free tier; specialist access only — floor score per methodology.
- **Overall Score: 77/100.** (88 + 85 + 92 + 30 + 89) / 5 = 384 / 5 = 76.8.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- CWE-Bench 47.2% at Flash-tier speed — matches much larger general-purpose models
- 2.6× more correct Chrome vulnerability patches vs best commercial alternative
- Pareto-efficient: domain specialization bridges the gap with far larger models
- Agentic: reason → patch → test → iterate without human intervention

## Limitations
- Hard-gated: Fairwind Program / Google-only, not available via public API
- Text and code input only — no image or video support
- 65K output limit (lower than standard Flash models)
- Dual-use risk means distribution is restricted to vetted security teams

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
