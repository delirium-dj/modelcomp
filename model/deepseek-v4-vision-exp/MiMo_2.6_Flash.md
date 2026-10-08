# DeepSeek V4 Vision Exp — findings by MiMo 2.6 Flash

- Source: OpenRouter model page, models.dev registry, DeepSeek api-docs, HF `deepseek-ai/DeepSeek-V4-Vision-Exp` (gated), OpenCode Zen
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Vision Exp — an **experimental vision-enabled build of DeepSeek V4 Flash 0731** (OpenRouter description): adds image understanding "while **matching the base model on text capabilities** including agents, reasoning, and world knowledge." Sparse MoE, **284B total / 13B active** (V4-Flash architecture).
- **Short description:** Positioned for document/chart understanding, visual question answering, and multimodal agent workflows that interleave text and images; the queue's meta positions it for multimodal code understanding, UI layout reasoning, and image-to-code generation. **No public benchmark card, no HF README access (repo gated), no leaderboard rows found** — this is a registry/description-only evaluation, flagged throughout.
- **Provider / access:** OpenRouter `deepseek/deepseek-v4-flash-vision-exp` (released **2026-08-21**, weights compare link present), OpenCode Zen `deepseek-v4-flash-vision-exp` (queue id `opencode/deepseek-v4-vision-exp`; Zen entry created early Oct 2026), DeepSeek official API — with a caveat: DeepSeek's docs list the legacy `deepseek-v4-flash-vision-exp` name as **retired**, its requests served by **DeepSeek-V4.1-Flash at Flash price** — i.e., DeepSeek itself no longer routes a distinct vision-exp build while third parties do (flagged).
- **Release / knowledge:** 2026-08-21 (OpenRouter); based on V4-Flash-0731 (2026-07-31); cutoff not published.
- **Context window:** **registry conflict — 1,000,000 in / 393,216 out** (models.dev and OpenRouter) vs **200,000** (repo meta, likely the serving-layer cap). Scored at 1M native with the conflict flagged.
- **Modalities:** **text, image (+PDF per meta) in; text out**; reasoning-capable (models.dev `reasoning: true`).
- **Pricing:** **$0.15 / $0.60 per 1M** (models.dev) or **$0.2156 / $0.6468 with a 51% promo discount** (OpenRouter); **free OpenCode Zen tier** (meta) — the cheap tier of a very cheap Flash-line model.

### Raw benchmarks found

> No direct rows exist for this experimental build. Text-side capability is inherited
> from the V4-Flash family tables in the DeepSeek-V4 tech report (HF card, Think-Max mode)
> under OpenRouter's explicit "matches the base on text" claim — all such rows marked
> INHERITED, not measured on the vision build.

V4-Flash family text rows (INHERITED):

- GPQA Diamond 88.1; HLE 34.8; MMLU-Pro 86.2; SimpleQA-Verified 34.1 (Max mode).
- SWE-bench Verified 79.0; SWE-bench Pro 52.6; SWE Multilingual 73.3; LiveCodeBench 91.6.
- Terminal-Bench 2.0 56.9; BrowseComp 73.2; HLE w/tools 45.1; MCP Atlas 69.0; Toolathlon 47.8; GDPval-AA Elo 1395 (Max).
- MRCR 1M 78.7; CorpusQA 1M 60.5 (Max).

Direct evidence for the vision build:

- OpenRouter qualitative positioning only (document/chart understanding, VQA, interleaved multimodal agents); meta's UI/image-to-code positioning. **No MMMU/DocVQA/OSWorld-* / coding rows published anywhere searched** (BenchLM 404, DDG blocked, HF gated).

### Normalized scores (1–100)

- **Tool use: 79/100.** Vendor claim of base-matching agents plus strong inherited Flash agentic rows (BrowseComp 73.2, MCP Atlas 69.0, TB2.0 56.9, GDPval 1395); zero tool rows measured on the vision build itself, and no multimodal-agent benchmark coverage.
- **Reasoning: 82/100.** Inherited V4-Flash profile — GPQA 88.1 just under the 90 reference, HLE 34.8 under 40, MMLU-Pro 86.2 solid; no independent confirmation on the vision fine-tune.
- **Context window: 92/100.** 1M/393K per two registries with family MRCR-1M 78.7 (modest retrieval), but the 200K serving cap in repo meta and absence of retrieval rows on this build keep it under the ≥1M 95 floor.
- **Multimodal: 70/100.** Image + PDF input on a Flash-family VLM positioned for charts/docs/UI-to-code — the right shape for the 60–90 band, but with **zero published vision benchmark rows**, scored mid-band on description alone.
- **Coding: 82/100.** Inherited Flash coding strength (SWE-V 79.0, LCB 91.6) plus the experiment's explicit image-to-code/UI-reasoning purpose; SWE Pro 52.6 is weak, and no vision-coding rows exist.
- **Cost efficiency: 97/100** (excluded from Overall). $0.15–$0.22 in / $0.60–$0.65 out with a 51% promo, 13B-active serving economics, and a free Zen tier.
- **Overall Score: 81/100.** (79+82+92+70+82)/5 = 81.4 → 81 — a dirt-cheap Flash-class VLM experiment: family-matching text reasoning/coding (inherited), 1M-class context, image+PDF input for doc/UI/code workflows — deducted heavily for having **no published benchmarks of its own**, a retired first-party route, and a 200K-vs-1M context conflict.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — OpenRouter model page (description, release date, pricing, context), models.dev registry (modalities, 1M/393K, reasoning flag, pricing), DeepSeek api-docs Models & Pricing (legacy-name retirement note), HF API author listing (gated repo confirmed), OpenCode Zen model list (id confirmation), DeepSeek-V4 HF tech-report tables for INHERITED V4-Flash text rows (all marked). Scores are normalized 1–100 interpretations; no benchmark row in this report was measured on the vision build itself.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
