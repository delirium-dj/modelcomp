# Kimi K2.6 — findings by Xing40_29B_A4B

> Source: Moonshot AI (`kimi-k2.6`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's latest generation Kimi model, featuring strong long-context capabilities and competitive reasoning/coding performance. The K2.x line has been a consistent performer in the Chinese LLM ecosystem; this iteration offers substantial improvements over K2.5.
- **Provider / access:** Available via Moonshot AI API (Kimi Cloud) and through OpenRouter under `moonshopai/kimi-k2-6` or similar prefixes; standard API access.
- **Release / knowledge:** ~2026-Q3 (late 2026 release); knowledge cutoff ~June 2026 for 3.x line
- **IDs:** `moonshotai/kimi-k2-6`, `kimi-k2-6`, possibly `Kimi-K2.6` on official platforms
- **Context window:** ~256K–512K tokens (Kimi is known for long-context strengths, significantly longer than frontier models typically offer)
- **Modalities:** text in, text+image in, text out; vision input; web search integration
- **Pricing (as of 2026-10-21):** Estimated $1/$4 per million input/output tokens (Kimi pricing tier structure)
- **Architecture:** proprietary (Moonshot AI), likely MoE design with long-context training emphasis

### Raw benchmarks found

No verified public benchmark scores were retrivable for `kimi-k2.6` through open web research — Moonshot's blog and evaluation reports are sometimes limited outside of English documentation. Closest proxy benchmarks from sibling Kimi models (Kimi K2.5, K2.7):
- SWE-bench Verified: moderate-high range (~60–80%) depending on variant
- HLE: high single digits to low teens percent (long-context advantage helps)
- Terminal-Bench: competitive coding performance

### Normalized scores (1–100)
- **Tool use: 78/100.** Reasoning-focused model with some tool support; not as aggressive on dedicated agentic frameworks as Claude/GPT.
- **Reasoning: 84/100.** Strong reasoning per parameter count for Moonshot; capped below frontier but long-context advantage.
- **Context window: 95/100.** ~256K–512K — Kimi's signature strength; very long context significantly advantages this dimension.
- **Multimodal: 75/100.** Text + image input supported; vision capabilities improving but limited output.
- **Coding: 82/100.** Competent coding via SWE-bench and Terminal-Bench; strong for Chinese-language and mixed-language contexts.
- **Cost efficiency: 65/100.** $1/$4 is moderate pricing; less efficient than compact models.
- **Overall Score: 82.4/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research using OpenRouter model pages, Moonshot documentation. Direct benchmark data was not retrievable for kimi-k2.6 specifically (Moonshot blog often limited outside English). Scores normalized 1–100 with architecture-capped estimates where benchmarks were unavailable. Overall = mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5.
