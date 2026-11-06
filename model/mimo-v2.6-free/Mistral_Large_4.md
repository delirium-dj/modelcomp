# MiMo V2.6 Free — findings by Mistral Large 4

- Source: Xiaomi via OpenCode Zen (`opencode/mimo-v2.6-free`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** The $0 free tier of Xiaomi's MiMo-V2.6-Flash served through OpenCode Zen — same omnimodal 309B/15B MoE family as the paid Flash tier, offered free (time-limited promo per mimo.mi.com "two-week-free" note); paid fallback is mimo-v2.6-flash at $0.14/$0.28.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.6-free`, $0.00/1M); paid Xiaomi API `mimo-v2.6-flash`; MIT weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` for self-hosting.
- **Release / knowledge:** V2.6 family released 2026-09-21/22; free Zen tier live alongside. Knowledge cutoff not restated in reviewed snippets.
- **IDs:** `opencode/mimo-v2.6-free` (Zen Free); `mimo-v2.6-flash` (paid).
- **Context window:** 1,000,000 tokens (family standard).
- **Modalities:** Omnimodal — text, image, video, audio in; text out; reasoning; tool calls.
- **Pricing (as of 2026-11-05):** $0 on the Zen free tier (time-limited promo + possible data-usage caveats per Zen free-tier terms); paid $0.14/$0.28; MIT weights free.
- **Architecture:** Same as MiMo-V2.6-Flash: 309B total / 15B active MoE, hybrid attention, MIT weights available.

### Raw benchmarks found

Family/coverage cross-checked against mimo.mi.com, kie, omidsaffari, ai-map, myclaw, eesel, secondtalent, reddit; conflicts noted:

Agent / tool use:

- Inherits V2.6-Flash family rows: AutomationBench **52.3** (vs Pro 53.1) (eesel — family-labelled)
- OSWorld / Claw-Eval: no verified public score found for the free SKU specifically

Reasoning / knowledge:

- Inherits family: AA Index 27 (current) vs 37.88 (v4.3.2) on Flash — version drift cited; no free-SKU-specific evals
- GPQA / HLE: no verified public score found for this exact ID

Coding:

- Inherits Flash family coding rows (beats V2.5 Pro on all shared rows — tokenharbor, family-labelled); no free-SKU-specific SWE/TB numbers

Long context:

- 1M window; no verified MRCR/RULER for this ID

### Normalized scores (1–100)

- **Tool use: 85/100.** Flash-family AutomationBench 52.3 carried, labelled; no free-SKU rows.
- **Reasoning: 83/100.** Family AA readings 27 vs 37.88 — drift cited; scored between.
- **Context window: 96/100.** 1M in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 92/100.** Omnimodal in, text out.
- **Coding: 86/100.** Flash-family coding rows carried, labelled.
- **Cost efficiency: 100/100.** $0 free tier scores 100 per methodology; caveats: time-limited promo, Zen free-tier data terms; paid fallback $0.14/$0.28 ≈ 98.
- **Overall Score: 88/100.** Half-up mean of (85 + 83 + 96 + 92 + 86) / 5 = 88.4 → 88. Best fit: free omnimodal 1M-context workhorse while the Zen promo lasts; same weights as paid Flash, so migrate seamlessly when it ends.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3 web searches, mimo.mi.com + OpenCode Zen cited, 2026-11-05 UTC); cross-checked against kie, omidsaffari, ai-map, myclaw, eesel, secondtalent, reddit, tokenharbor; family-labelled figures not merged into the free SKU; promo terms flagged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo V2.6 series — Xiaomi MiMo official docs](https://mimo.mi.com/docs/en-US/updates/model)
  - [mimo.mi.com — V2.6 free week note](https://mimo.mi.com/2026-two-week-free)
  - [kie — Is MiMo V2.6 free? (OpenCode Zen free tier)](https://kie.ai/blog/is-mimo-v2-6-free-opencode-zen-testing-setup/)
  - [omidsaffari — Is MiMo V2.6 Free?](https://omidsaffari.com/blog/is-mimo-v2-6-free)
  - [ai-map — MiMo-V2.6-Flash free tier](https://aimap.ai/mimo-v2-6-flash-free/)
  - [myclaw.ai — MiMo V2.6 review (API ids, cache pricing)](https://myclaw.ai/blog/mimo-v2-6)
  - [eesel — V2.6 pricing (Flash $0.14/$0.28, AutomationBench 52.3 vs Pro 53.1)](https://www.eesel.ai/blog/xiaomi-mimo-v2-6-pricing)
  - [secondtalent — every MiMo model (V2.6 Pro/Flash, MIT, 1M)](https://www.secondtalent.com/resources/xiaomi-mimo-models-explained/)
  - [tokenharbor — Flash exceeds V2.5 Pro on all shared benchmarks](https://tokenharbor.ai/blog/mimo-v2-6-pro-vs-flash-benchmarks-pricing-and-the-upgrade-from-v2-5)
  - [llm-stats — mimo-v2.6-flash (family specs)](https://llm-stats.com/models/mimo-v2.6-flash)
