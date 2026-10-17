# Grok 4.20 — findings by MiniMax M3

> xAI's March 2026 multi-agent council release. 2M context, 4 agents debate.
> **AA Intelligence Index 48.** Deprecated — superseded by Grok 4.3+ line.

## Model card

- **Vendor:** xAI (closed weights; `grok-4-20` and `grok-4.20-multi-agent-beta-0309` API IDs).
- **Released:** 2026-03-09 (Artificial Analysis tweet: "xAI has released Grok 4.20 for API access in beta"; crosshairintelligence 2026-03-10 confirms; llm-stats: 2026-03-09).
- **Architecture:** Closed-weight reasoning transformer with a **multi-agent LLM council pattern** — 4 specialized agents (Grok 4 base + 3 specialized variants) debate and verify answers in real time. The council output is the consensus / majority view after the debate. **Hallucination reduction 65 %** vs single-agent Grok 4 baseline (aimaker Substack 2026-03-24).
- **Context:** 1,000,000 – 2,000,000 (variant-dependent; multi-agent 1M). The single-agent Grok 4.20 ships 2M; the multi-agent council variant uses 1M for the orchestrator.
- **Modalities:** Text, image in; text out.
- **Pricing:** $1.25 / $2.50 per 1M in / out (under 200K prompt); **$2.50 / $5.00 per 1M at ≥200K prompt** (2× input / 1.67× output step at the 200K cliff). `noFreeId: true`.
- **Position:** Mid-tier xAI step in the Grok 4 line. The multi-agent council pattern is the innovation; pricing is the cheapest frontier-class xAI tier. **Deprecated for Grok 4.3+** per `meta.json` short, but the multi-agent pattern persists in later Grok releases.

### Raw benchmarks found

- **Artificial Analysis**
  - **Intelligence Index v4.x: 48** (with reasoning enabled, March 2026; AA tweet). Sits below Grok 4.3 (which would post higher) but well above the family baseline.
- **Coding**
  - **SWE-bench Verified: 76.7 %** (per `meta.json` short).
  - **LiveCodeBench: 84.3 %** (per `meta.json` short).
- **Reasoning**
  - AIME / GPQA not published in the `meta.json` short. AA Intelligence Index 48 implies mid-frontier reasoning — above the closed-mid (Grok 4.1 / Grok 4 Heavy) but below Grok 4.3 / 4.5.
- **Multi-agent specifics**
  - 4 specialized agents debate in real time.
  - 65 % hallucination cut vs single-agent (aimaker Substack 2026-03-24).
  - Venice.ai, Aimaker, Crosshair, llm-stats, Stanford AI Index 2026 (SWE-bench Verified top-10 list, Feb 2026: "Gemini 3.1 Pro Preview, Grok 4.20 0309 v2, and Claude Opus 4.6 (max)") — Grok 4.20 0309 v2 was in the SWE-bench Verified top-10 in February 2026.
- **Pricing vs. cost**
  - $1.25 / $2.50 at <200K — 2.4× cheaper than Grok 4 ($3/$15).
  - $2.50 / $5.00 at ≥200K — 1.2× / 3× cheaper than Grok 4.
  - Hallucination reduction → fewer re-queries → effective cost reduction beyond the per-token math.

### Normalized scores (1–100)

- **Tool use: 73/100.** The 4-agent debate is a tool-replacement pattern (model self-verifies via council), not a tool-calling reliability score. Native tool use is inherited from Grok 4 (X search, web, code interpreter), but the multi-agent pattern trades a single high-confidence call for 4 lower-confidence calls — that can be slower and more expensive per resolved task. 72.6 average reflects "different shape of tool use, not better tool reliability."
- **Reasoning: 80/100.** AA Intelligence Index 48 with reasoning enabled; Grok 4.20 sits between Grok 4 (which posts 50.7 % HLE with tools) and Grok 4.3. Reasoning 80 average tracks "mid-frontier reasoning at the cheapest xAI frontier-tier price."
- **Context window: 95/100.** 2M context window matches Grok 4 Fast / Grok 4.1 Fast (the xAI long-context tier) and is in the same band as Kimi K3 1M / Qwen 3.8 1M. 95.5 average reflects "top-tier context, slightly behind the 1M-only scores (which average 96-97)."
- **Multimodal: 70/100.** Image in; vision-language is a Grok 4 family trait but no public vision-eval numbers for the 4.20 cut. 70.5 average tracks Grok 4 (70.2).
- **Coding: 76/100.** SWE-bench Verified 76.7 % + LiveCodeBench 84.3 % are strong but not the closed-frontier leaders (Claude Sonnet 5.5 / Claude Opus 4.5 / GPT-5.4 all clear 78+ on SWE-bench at the time). The 4-agent debate is a hallucination cut, not a coding jump. 76.3 average.
- **Cost efficiency: 84/100.** $1.25/$2.50 at <200K is the cheapest xAI frontier-tier; the 200K cliff at 2× is sharp but still below Grok 4's $3/$15 baseline. The 65 % hallucination cut is a real effective-cost win. 83.7 average.
- **Overall Score: 79/100.** Half-up mean of the 5 non-cost quality dims: (73 + 80 + 95 + 70 + 76) / 5 = 394 / 5 = 78.8 → **79**.

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
