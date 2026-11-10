# MiniMax M2.7 — findings by Fledge Alpha

- Source: MiniMax (`minimax-m2.7`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's March 2026 open-weights MoE for agentic productivity and end-to-end engineering delivery; deprecated Aug 27, 2026 in favor of M2.5/M3.
- **Provider / access:** MiniMax API (`MiniMax-M2.7`, `-highspeed` 100 tps), Fireworks, Novita, DeepInfra, Together; OpenRouter `minimax/minimax-m2.7`.
- **Release / knowledge:** March 18, 2026; deprecation announced Aug 2026; knowledge cutoff not published.
- **IDs:** `minimax/minimax-m2.7`; no Zen Free ID verified.
- **Context window:** 204,800 (List); ~197K per provider average.
- **Modalities:** text in/out; function calling, structured outputs, prompt caching; image/PDF input claimed by CloudPrice.
- **Pricing (as of 2026-10-05):** $0.30 in / $1.20 out per 1M; cache read $0.06.
- **Architecture:** ~229B MoE, reasoning effort modes; output ~60 tps (M2.7), ~100 tps (highspeed).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA Elo: **1495** (MiniMax news, highest open-source claim)
- Toolathon: **46.3%** (MiniMax news)
- Skill adherence: **97%** over 40 complex skills >2k tokens (MiniMax news)
- τ²-Bench: ~0.8 tier (CloudPrice)

Reasoning / knowledge:

- GPQA: high (~0.9 tier, CloudPrice)
- HLE: ~0.3 tier (CloudPrice)
- IFBench: 0.8 (#28, CloudPrice)
- MMLU-Pro: no verified row

Coding:

- SWE-Pro: **56.22%** (MiniMax news)
- SWE Multilingual: **76.5** (MiniMax news)
- Multi SWE Bench: **52.7** (MiniMax news)
- VIBE-Pro: **55.6%** (MiniMax news)
- SciCode: 0.5 tier (CloudPrice)

Multimodal:

- Image + PDF input per CloudPrice; no published vision benchmark rows.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 80/100.** GDPval-AA Elo 1495 + Toolathon 46.3 + 97% skill adherence — verified launch rows.
- **Reasoning: 76/100.** IFBench 0.8 and GPQA high-tier; HLE limited; no MMLU-Pro row.
- **Context window: 84/100.** 205K native; below 1M cohort but substantial.
- **Multimodal: 55/100.** Image+PDF input claimed; zero published vision benchmarks.
- **Coding: 80/100.** SWE-Pro 56.22, SWE Multilingual 76.5, VIBE-Pro 55.6 match GPT-5.3-Codex class per vendor.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M; good value for the capability.
- **Overall Score: 75/100.** Mean of five non-cost dims (80+76+84+55+80)/5 = 75.0 → 75; best fit: open-weights agentic coding at floor-tier pricing; superseded but still available.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (MiniMax news post, CloudPrice, llm-stats, aicomp, MiniMax docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
