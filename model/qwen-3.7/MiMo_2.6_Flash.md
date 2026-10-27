# Qwen 3.7 — findings by MiMo 2.6 Flash

- Source: Alibaba/Qwen `qwen-3.7` — **generation-umbrella identity, anchored on the flagship Qwen3.7-Max**
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (`qwen-3.7`) — the **Qwen 3.7 generation umbrella**: three paid, closed-weight endpoints released in sequence — **Qwen3.7-Max (2026-05-21)**, **Qwen3.7-Plus (2026-06-01)**, **Qwen3.7-Flash (2026-07-27)** — with no standalone "qwen3.7" SKU and no open weights (InsiderLLM's Hugging Face monitor: zero Qwen3.7 weights as of the June window; still closed in October). Per this repo's umbrella convention, scores here are anchored on the **flagship Qwen3.7-Max** evidence, with Plus/Flash data noted where it differs.
- **Short description:** Alibaba's "agent-era" flagship generation — Qwen3.7-Max landed on the Arena leaderboard days before it had a name, then posted HLE 41.4 (above Claude Opus 4.6's 40.0) and a 35-hour autonomous demo (1,158 tool calls, 10× Triton-kernel speedup on an unseen chip, per VentureBeat). Medium's one-week test: "crashed the global top 3 at half the price."
- **Provider / access:** Alibaba Cloud Model Studio / DashScope API, OpenRouter (`qwen/qwen3.7-max`), aggregators; vision docs confirm 1M context, **up to 2-hour video input**, function calling, built-in tools. API-only, no weights.
- **Release / knowledge:** Max 2026-05-21 (OpenRouter, Alibaba Cloud Facebook post same-day), Plus 2026-06-01, Flash 2026-07-27 (concentrate.ai/Alibaba docs; insiderllm timeline). Knowledge cutoff not published.
- **IDs:** `qwen3.7-max` / `qwen3.7-plus` / `qwen3.7-flash` (Model Studio); `qwen/qwen3.7-max` (OpenRouter).
- **Context window:** **1,000,000** tokens (OpenRouter, llm-stats, Model Studio — all agree); max output not separately published for Max.
- **Modalities:** text + image + **video** (up to 2 hours) in, text out; switchable thinking; function calling; built-in tools; structured output (Alibaba Cloud Model Studio vision docs; OpenRouter modalities).
- **Pricing (as of 2026-10-27):** **conflict across sources for Max** — OpenRouter listed **$1.475 in / $4.425 out**; llm-stats **$1.25 in** (cached $0.25, 90% discount); felloai review quotes **$2.50 / $7.50**; all three reported (regional/plan/tier differences). For scale: Flash is $0.03/$0.13 (<32K), Plus ~mid-tier — the generation spans 20× price range. Medium's framing: top-3 quality at roughly half flagship-rival pricing.
- **Architecture:** proprietary MoE — parameter count undisclosed for 3.7-Max (the successor Qwen3.8-Max disclosed 2.4T/95B-active, suggesting the 3.7 flagship was smaller but unpublished).

### Raw benchmarks found

(agent / tool use — Qwen official launch table via BenchLM, with AA/Vals independent rows):

- **τ²-bench: 94.7%** (Artificial Analysis independent leaderboard — near-perfect tool-use reliability)
- Terminal-Bench 2.0: **69.7%** (official); Terminal-Bench 2.1: **61.0%** (Vals AI independent); Terminal-Bench Hard: 50.8 (AA)
- BFCL v4: **75.0**; MCP Atlas: **76.4**; Claw-Eval: **65.2**; QwenClawBench: **64.3** (official; benchmarklist notes 6/717th percentile rows in the launch post)
- AA Agentic Index 23.9; GDPval-AA 1190 (rank); AA EnterpriseOps-Gym 45.0; AA ITBench 42.5; ResearchClawBench 18.7

Reasoning / knowledge:

- GPQA Diamond: **92.4** (official) / 92.3 (AA) / 90.2 (Vals) — three independent harnesses within 2.2 points
- HLE: **41.4** (official) / 40.5 (AA) — above Claude Opus 4.6's 40.0 (felloai, 302.AI); HLE with tools: **53.5**
- MMLU-Pro: **89.6** (official) / 89.3 (Vals); MMLU-Redux 95; SuperGPQA 73.6; MMMLU 90.3
- AA Intelligence Index: **29.5**; AA-Omniscience: 31.1 accuracy / 25.6 hallucination rate

Mathematics:

- **HMMT Feb 2026: 97.1**; IMOAnswerBench 90.0; Apex 44.5 (official)
- **Epoch AI FrontierMath v2: 64.561% (Tiers 1–3), 34.146% (Tier 4)** — independent, top-of-field class

Coding:

- SWE-bench Verified: **80.4** (official); SWE-bench Pro: **60.6**; SWE Multilingual 78.3; LiveCodeBench v6: **91.6** (official) / **87.1** (Vals independent); Vals SWE-bench 68.8; AA Coding Index 66.0; SciCode 53.5 (official) / 49.5 (AA); NL2Repo 47.2; OpenHarmony Bench 53.4

Long context (**measured**):

- **MRCRv2: 90.4** (official, 1M-window retrieval — a strong number where GPT-5.2-Pro collapsed to 29.6); AA-LCR: **79.0** (Artificial Analysis independent)

Multimodal:

- Design Arena Website Elo **1273** (OpenRouter); no MMMU figure captured for Max in this pass.

Instruction following / multilingual:

- IFEval 94.3; IFBench 79.1 (official) / 80.5 (AA); MMLU-ProX 87 (29-lang), INCLUDE 86.2, MAXIFE 89.2, PolyMath 86.5, NOVA-63 59.0

BenchLM composite: **62.46/100, #49 of 993** (62 of 710 benchmarks covered — conservative); ranks above Qwen3.7-Plus (53.87) and Flash (47.14) in-family.

### Normalized scores (1–100)

- **Tool use: 88/100.** τ²-bench 94.7 (independent), TB-2.0 69.7 / TB-2.1 61.0, BFCL 75.0, MCP Atlas 76.4 — top-tier agentic reliability corroborated across Qwen, AA and Vals; capped by TB-2.1 61.0 trailing the era's leaders (5.3-Codex 77.3).
- **Reasoning: 92/100.** GPQA 92.4 across three harnesses, HLE 41.4 beating Opus 4.6, HMMT Feb-2026 97.1, Epoch FrontierMath v2 64.6/34.1 — frontier math and science; held below 95 because HLE-tiers have since been surpassed and no ARC-AGI-class result exists for it.
- **Context window: 90/100.** 1M tokens with **measured** MRCRv2 90.4 and AA-LCR 79.0 — one of the best verified long-context retrievals in this corpus (and 3× GPT-5.2-Pro's MRCR collapse at similar lengths).
- **Multimodal: 76/100.** Text + image + 2-hour video input with function calling and a website-design Elo of 1273 — capable grounded multimodality; no MMMU-class score captured, text-only output, and the modality story is inherited rather than the model's headline.
- **Coding: 84/100.** SWE-Verified 80.4, SWE-Pro 60.6, LCB v6 91.6 (official) / 87.1 (Vals) — SWE-Pro 60.6 is launch-elite territory (above GPT-5.3-Codex's 56.8); capped below 90 because no terminal-agentic coding leadership (TB-2.1 61.0) and successor 3.8-Max has already moved the composite (BenchLM 69.89 vs 62.46).
- **Cost efficiency: 72/100.** OpenRouter blended ~$1.48/$4.43 (conflicting lists up to $2.50/$7.50) with 90% cache discounts — genuinely half-price vs rival flagships for top-3 quality (Medium's verdict), but still a premium-tier absolute cost.
- **Overall Score: 86/100.** (88 + 92 + 90 + 76 + 84) / 5 = 86.0 → 86 — best fit: long-horizon agentic execution, hard math/science, and 1M-token retrieval tasks at flagship-plus quality for half flagship pricing; not the pick for budget workloads (Flash tier instead) or local/private deployment (closed weights).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi MiMo-V2.6-Flash)** — 2026-10-27
- Method: public internet research — official sources first (Qwen launch post `qwen.ai/blog?id=qwen3.7` as mirrored in BenchLM's 62-row ledger, Alibaba Cloud Model Studio vision docs, OpenRouter model page, Alibaba Cloud Facebook release post), then independent sources (Artificial Analysis leaderboards: τ²-bench/GPQA/HLE/LCR/Agentic, Vals AI: TB-2.1/LCB/SWE/GPQA/MMLU-Pro, Epoch AI FrontierMath v2, llm-stats, felloai + Medium hands-on reviews, insiderllm open-weights watch, benchmarklist, datacamp, frankx); pricing conflicts are reported side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
