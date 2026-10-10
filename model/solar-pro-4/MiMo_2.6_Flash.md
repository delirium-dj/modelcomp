# Solar Pro 4 — findings by Mimo v2.6 Flash

- Source: Upstage AI/`solar-pro4` (Solar Pro 4)
- Date: 2026-10-09 (UTC; original research 2026-09-22, re-researched 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's proprietary reasoning-focused agentic flagship (2026-08-06/10) for long-horizon terminal tasks, long documents, and multi-turn tools (EN/KO/JA) — AA Intelligence Index **42** (up from Solar Pro 3's 14); strong first-party pricing with a temporary 70%-off launch discount.
- **Provider / access:** Upstage first-party API `solar-pro4` (OpenAI-compatible; meta id `upstageai/solar-pro-4`); OpenRouter `upstage/solar-pro4` (often 70–90% off promo). **No OpenCode Zen Free ID** (`noFreeId: true`). BYOK + ZDR available on Console.
- **Release / knowledge:** **2026-08-06** (LLM Stats) / **2026-08-10** (OpenRouter/themodelbeat) — both cited; knowledge cutoff not published in extracts.
- **IDs:** `upstageai/solar-pro-4` (repo meta); `solar-pro4` / `upstage/solar-pro4` (API/OpenRouter).
- **Context window:** **524,288** in / **131,072** out (OpenRouter/themodelbeat/llm-stats). AA article at launch stated **384K / 256K out** — conflict noted; score on **524K** (majority of trackers) with AA variance flagged. Upstage first-party pages did not publish context as of 2026-08-16 (AI//COST note).
- **Modalities:** **text only** in/out (AA/llm-stats); reasoning on by default (reasoning tokens billed as output); tool calls yes; JSON via OpenAI-compatible API.
- **Pricing (as of 2026-10-09):** List **$0.30 in / $1.20 out / $0.06 cache per 1M**. Launch discount: 90% off through 2026-09-10, then **70% off → $0.09 / $0.36 / $0.018** — **re-confirmed live on OpenRouter 2026-10-09 (the promo's FINAL day; list price returns 2026-10-11, after which cost scoring should move to the ~$0.30/$1.20 ≈ 88 anchor)**. **No Free ID.**
- **Architecture:** proprietary (undisclosed params); text→text reasoning/agentic model.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Artificial Analysis article + OpenRouter/AA score panel + Epoch/themodelbeat.

Agent / tool use:

- Terminal-Bench v2.1: **57%** (AA article; up from Solar Pro 3's 12%)
- GDPval-AA v2: **1277 Elo** (AA; human baseline 1000 — Solar Pro 3 was 498)
- τ³-Banking: **23%** (AA; up from 9%)
- Design Arena Agents Arena Webapps Elo: **1112** (Design Arena via OpenRouter)
- Terminal-Bench 4.0: **0.5%** (AA via OpenRouter, 2026-10-09 — near-zero on the newest board); Terminal-Bench 2.1: 57.3% (AA panel, 2026-10-09)
- Design Arena full set (2026-10-09 via OpenRouter): Agents Arena Webapps Elo 1098; Models Arena Website 1181 / 3D 1184 / Code Categories 1186 / Data Visualization 1182 / Game Development 1176 / UI Component 1154

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (AA/Epoch)
- Humanity's Last Exam: **29.2%** (AA/Epoch)
- Artificial Analysis Intelligence Index: **42** (AA launch article — +28 vs Solar Pro 3's 14; sits with Inkling 42, just behind MiMo-V2.5-Pro 43). **Second-pass correction (2026-10-09, AA block via OpenRouter upstage/solar-pro4):** the current v4.3.2 reading is **28.2** — the 42 was the older-scale launch-article figure; 28.2 adopted for scoring (both kept)
- CritPt: **5.4%** (AA)
- AA-Omniscience Accuracy / Non-Hallucination: **18.9% / 75.6%** (AA)
- AA-LCR: **74.0%** (AA panel) / article says improved 31%→71% — cite panel **74.0%**, note 71% launch figure
- Token efficiency: **43k** output tokens per Intelligence Index task (~17% fewer than Pro 3) (AA)

Coding:

- AA Coding Index: **52.7** (AA/OpenRouter)
- SciCode: **44.6%** (AA) / themodelbeat Epoch **43.6%** — cite AA 44.6
- Design Arena Code Categories Elo: **1196** (Design Arena)
- SWE-bench Verified / SWE-Pro / DeepSWE / LiveCodeBench: no verified public score found for Solar Pro 4 in this pass

Long context:

- **524K** window (or 384K per AA) / 131K out; AA-LCR 74% is the long-context quality proxy; MRCR/RULER absolute: no verified public score found

Multimodal:

- **Text-only** — template: 15

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.1 57% and GDPval 1277 are credible mid agentic marks (huge jump vs Pro 3); Tau3-Banking 23% still low; no Toolathlon/MCP/Claw rows — solid but not frontier tool use.
- **Reasoning: 78/100.** GPQA 89.1 excellent; the corrected AA Intelligence Index **28.2** (v4.3.2; supersedes the older-scale launch 42) plus HLE 29.2 place it mid-tier, not mid-upper; CritPt 5.4 and Omniscience ~19% are soft spots — trimmed 80→78 on the Index correction (2026-10-09).
- **Context window: 84/100.** **524K** (majority sources) sits in the 500K–1M band (~84–86); 131K out is strong; AA's 384K note would still be high-70s/low-80s; no MRCR curve, LCR 74% is the quality evidence.
- **Multimodal: 15/100.** Text-only (template rule: 15).
- **Coding: 70/100.** AA Coding Index 52.7, SciCode ~44, Design Arena Code 1196 — competent code/office agent coding; **no SWE-Verified/SWE-Pro/LiveCode rows** found, so coding depth is less proven than tool/reasoning rows suggest.
- **Cost efficiency: 94/100.** List $0.30/$1.20 with 80%-off cache is already strong; **live 70%-off → $0.09/$0.36 (final day 2026-10-10, re-confirmed on OpenRouter 2026-10-09)** pushes near-free territory; not 100 because the promo is time-boxed and there is no permanent Free ID.
- **Overall Score: 63/100.** Mean of five quality dims (70+78+84+15+70)/5 = 63.4 → 63 (was 64 — Reasoning −2 on the AA Index correction). Best-fit: cost-efficient **text** long-document/terminal agent work (EN/KO/JA) with 524K context — grab the promo window if evaluating; **re-check list-price economics after 2026-10-11** and prefer a model with public SWE-Pro/DeepSWE rows for coding-critical production.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-09 (original: 2026-09-22; user-approved second pass)
- Method: public internet research (artificialanalysis.ai Solar Pro 4 article, OpenRouter upstage/solar-pro4, llm-stats, themodelbeat/Epoch, AI//COST discount schedule); second pass 2026-10-09 re-checked the [OpenRouter upstage/solar-pro4 AA block](https://openrouter.ai/upstage/solar-pro4) (Index 28.2 current vs launch-article 42; TB4.0 0.5; full Design Arena set; promo confirmed live at $0.09/$0.36 — final day) — the direct AA page slug 404s; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Deep-research addendum (2026-10-09)

- **Conflict resolved:** AA Intelligence Index launch-article **42** (older scale) vs current v4.3.2 **28.2** → 28.2 adopted; Reasoning 80→78; **Overall 64→63**.
- **New fills:** Terminal-Bench 4.0 **0.5%**, TB2.1 57.3, GDPval-AA 30.5% (percent format), full Design Arena set (Code 1186, Website 1181, 3D 1184, DataViz 1182, GameDev 1176, UI 1154, Webapps 1098).
- **Promo status:** 70%-off **$0.09/$0.36 still live on 2026-10-09** — final day; list price returns 2026-10-11 (cost scoring should revert to ~88 anchor then).
- **Confirmed:** 524K/131K context, GPQA 89.1, HLE 29.2, CritPt 5.4, Omniscience 18.9/75.6, LCR 74.0, Coding Index 52.7, SciCode 44.6, text-only.
