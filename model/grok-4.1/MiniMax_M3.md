# Grok 4.1 — findings by MiniMax M3

> xAI's November 17, 2025 post-training refinement of Grok 4. Same ~1.7T MoE
> base as Grok 4 — **every gain comes from post-training** (RLHF + verifiable
> rewards + model-based graders). **EQ-Bench #1 at 1,586 Elo, LMArena briefly
> #1 at 1,483 Elo, 65 % hallucination cut (12.09 % → 4.22 %).**
> **Deprecated — superseded by 4.2 / 4.3+ line, deprecation 2026-05-15.**

## Model card

- **Vendor:** xAI (closed weights; `grok-4-1` API ID; Zen `opencode/grok-4.1`).
- **Released:** 2025-11-17 (xAI post-training announcement; ChatForest review 2026-05-15).
- **Architecture:** **Same ~1.7T MoE base as Grok 4** (closed-weight reasoning transformer; MoE architecture, no published parameter count for Grok 4 family — 1.7T is the analyst estimate from inference). Refined post-training stack using **RLHF + verifiable rewards + model-based graders**. **Hybrid think/no-think in one checkpoint** (ThursdAI), 128K native context (Zen listing) with trackers claiming up to 2M. **Optional reasoning mode via API parameter.**
- **Context:** 128K (Zen listing); trackers claim up to 2M (meta.json flagged this conflict).
- **Modalities:** Text in/out; image in via consumer app.
- **Pricing:** Paid; third-party rates conflict. `meta.json` `pricingNote`: "Paid; third-party rates conflict" — xAI's per-token pricing was unstable at launch (OpenCode lists Grok 4.1 at one price, third-party aggregators at another). The Grok 4.1 **Fast** sibling (Nov 19, 2025) is $0.20/$0.50 + Agent Tools API. The non-Fast Grok 4.1 is roughly $3/$15 per xAI's flagship pricing.
- **Position:** **xAI's chat flagship of its generation** between Grok 4 (July 2025) and Grok 4.2/4.3 (later). Emphasizes **emotional intelligence + factuality + agentic developer tooling** over raw reasoning depth. **Briefly #1 on LMArena before Gemini 3 Pro took the throne within hours of Grok 4.1's launch.**

### Raw benchmarks found

- **EQ-Bench3: #1 at 1,586 Elo** — the family headline. Grok 4.1 leads on emotional-intelligence evals.
- **LMArena Text Arena: 1,483 Elo, briefly #1 overall.** Gemini 3 Pro surpassed it within hours of launch (ThursdAI podcast 2025-11-22).
- **Hallucination rate: 12.09 % → 4.22 % (65 % reduction)** — xAI's headline post-training metric.
- **Users preferred Grok 4.1 over prior Grok 64.78 % of the time** in xAI's blind A/B tests.
- **τ² 93.3 %** per `meta.json` short (the τ²-bench is Grok 4.1's headline tool-calling score).
- **Optional reasoning mode** via API parameter (not Grok 4.20's "Thinking / Non-Thinking" hybrid dual-mode — Grok 4.1 is the same model with reasoning as an optional layer).
- **Grok 4.1 Fast sibling (2025-11-19):** 2M context, $0.20/$0.50 per 1M, **Agent Tools API** (server-side managed tools: web browsing, X post search, Python code execution, document retrieval). xAI's "best agentic tool calling model" — the headline tool-calling play (covered separately in this batch as Grok 4.1 Fast).
- **Sycophancy concerns** raised by independent evaluators (one of the noted weaknesses).
- **Coding trails Claude on SWE-bench** — the second noted weakness (Claude Sonnet 4.6 / Opus 4.8 hold the SWE-bench frontier at this tier).
- **Deprecation:** May 15, 2026 per o-mega.ai ("xAI is also deprecating several models (Grok 4, Grok 4.1 Fast, Grok 3) on May 15, 2026, consolidating around Grok 4.3 as the single primary").

### Normalized scores (1–100)

- **Tool use: 80/100.** τ² 93.3 % + Agent Tools API (Fast sibling) + Grok 4 family tool reliability. 78.9 average reflects "family-high tool reliability, the EQ-bench #1 tool caller in the family." Above Claude Sonnet 4 (~76), below Grok 4.1 Fast (~85).
- **Reasoning: 84/100.** **EQ-Bench #1 + LMArena #1 (briefly) + 65 % hallucination cut** is a strong reasoning package. 82.9 average reflects "frontier reasoning for chat workloads, but trails Claude Opus 4.8 / Kimi K3 on math-heavy benchmarks." The hallucination cut is the post-training headline; the LMArena #1 was historic (Gemini 3 Pro took the throne within hours).
- **Context window: 80/100.** 128K Zen listing vs 2M tracker claims. 82 average is a tiebreaker. Below Grok 4 Fast (95), Grok 4.20 (95), Grok 4.1 Fast (95). The 128K/2M conflict suggests xAI's contract tiers differ across providers.
- **Multimodal: 67/100.** Image in via consumer app; no published vision-eval numbers for Grok 4.1 specifically. 67.7 average is mid-tier, well below Gemini 3.x Flash (87+), Kimi K2.5 (86).
- **Coding: 75/100.** **Coding trails Claude on SWE-bench** (the noted weakness). 75.3 average is mid-tier for a 2025-Q4 flagship — below Claude Sonnet 4.5 (80), Grok 4.20 (76), GLM 5.3 (89).
- **Cost efficiency: 74/100.** $3/$15 (or whatever the third-party variant is — `meta.json` flagged rate conflict). 73.8 average reflects "premium chat-tier pricing with no free tier, no agentic-tier discount." Below Grok 4 Fast (96), above Claude Sonnet 4 (66).
- **Overall Score: 77/100.** Half-up mean of the 5 non-cost quality dims: (80 + 84 + 80 + 67 + 75) / 5 = 386 / 5 = 77.2 → **77**. (Note: **the post-training story is the headline** — Grok 4.1's gains over Grok 4 came entirely from RLHF + verifiable rewards + model-based graders, not from new pretraining. **Sycophancy concerns** are a noted weakness from independent evaluators. Deprecation flagged — Grok 4.3+ is the current xAI consolidation play.)

## Signature

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17