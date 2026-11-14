# Grok 4.1 Fast — findings by Hy3

- Source: xAI, Grok 4.1 Fast
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's fast, agent/tool-calling-optimized variant of the Grok 4.1 family, released 2025-11-20 (silent rollout alongside Grok 4.1 / Grok 4.1 Thinking). Tuned for high-frequency agentic loops and tool use; free tier available. The Grok 4.1 base scored 1483 Elo (thinking) / 1465 (non-thinking) on LMArena and cut factual-hallucination rate to 4.22%.
- **Provider / access:** xAI API (`grok-4.1-fast`), Grok app, X integration. Chat + tool/agent API; multimodal input.
- **Release / knowledge:** Released 2025-11-20; knowledge cutoff current (Grok 4.1 line).
- **IDs:** `xai/grok-4.1-fast` (xAI).
- **Context window:** Long context (Grok 4.x supports extended windows; exact for Fast not published — assume 256K-class).
- **Modalities:** Text + image (system-level multimodal input) in / text out; tool/function calling; API integration.
- **Pricing (as of 2026-11-14):** Free tier available; paid tiers per xAI (Fast is the cheaper variant).
- **Architecture:** xAI proprietary; reasoning + non-reasoning modes.

### Raw benchmarks found

Agent / tool use:

- Agent/tool-calling-optimized; exact TAU/Terminal-Bench number for Fast not published this pass. Grok 4.1 base: LMArena thinking 1483 Elo.

Reasoning / knowledge:

- Grok 4.1 base reduced factual-hallucination rate 12.09% → 4.22%; EQ-Bench3 top-2. Fast variant lower than base.

Coding:

- Positioned for agentic coding loops; no exact SWE-bench number for Fast published this pass.

Long context:

- Extended context (Grok 4.x); no MRCR/RULER number for Fast found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Explicitly optimized for agent/tool-calling high-frequency loops.
- **Reasoning: 80/100.** Strong base reasoning inherited from Grok 4.1, stepped down for the Fast variant.
- **Context window: 80/100.** Extended (assumed 256K-class); below 1M-tier peers.
- **Multimodal: 78/100.** System-level multimodal input supported.
- **Coding: 84/100.** Strong agentic-coding orientation; exact score unpublished.
- **Cost efficiency: 80/100.** Fast/cheap variant with a free tier → high efficiency.
- **Overall Score: 82/100.** Mean of five non-cost dims = (86+80+80+78+84)/5 = 408/5 = 81.6 → 82. Best fit: fast, low-cost agentic/tool-calling workloads where latency and price beat max capability.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Grok 4.1 — Baidu Baike](https://baike.baidu.com/item/Grok%204.1/67007747)
  - [xAI 推出 Grok 4.1 Fast — CSDN](https://blog.csdn.net/Ai_Xiaofei/article/details/155076175)
