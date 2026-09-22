# Solar Pro 4 — findings by GLM 5.3 Flash

- Source: Upstage AI (`solar-pro4` via OpenRouter; Upstage Console API)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's proprietary agent-first flagship reasoning model (successor to Solar Pro 3), built to finish multi-step agent work — terminal tasks, long-document review, office productivity — rather than answer single-shot prompts. Trained on Upstage's OfficeVerse synthetic agent-task pipeline across 11–12 work types.
- **Provider / access:** Upstage first-party Console API + OpenRouter (`upstage/solar-pro4`); SolarChat consumer app; dedicated on-premises deployment for enterprise. OpenAI-compatible Chat Completions; function calling (`tools`/`tool_choice`) and structured JSON output via `response_format` supported (OpenRouter API docs). Not on OpenCode Zen (no Zen Free ID) — scored on paid pricing.
- **Release / knowledge:** Released 2026-08-10/11 (OpenRouter lists Aug 10; HokAI reads the vendor page as Aug 10; AA coverage Aug 12). Knowledge cutoff: February 2026 per third-party trackers (not an Upstage-published figure).
- **IDs:** `upstage/solar-pro4` (OpenRouter), `solar-pro4` (Upstage API). No Zen Free ID.
- **Context window:** vendor/OpenRouter spec **524,288 tokens total, 131,072 max output**; Artificial Analysis' launch-day listing recorded **384K context / 256K max output** — a documented spec conflict between the vendor API listing and AA's launch record; both land in the same scoring tier. Long-context retrieval benchmarks (MRCR/RULER) not published; AA-LCR 71–74% indicates retained long-context reasoning.
- **Modalities:** text in / text out only (AA + HokAI + OpenRouter agree; no image/audio/video input).
- **Pricing (as of 2026-09-21):** $0.30 in / $1.20 out / $0.06 cache-hit per 1M tokens (AA + OpenRouter; OpenRouter currently shows a provider "70% off" route at $0.09/$0.36/$0.018). A 90%-off launch promo ($0.03/$0.12/~$0.006) ran through 2026-09-10 and has expired. Blended $0.525/1M at AA's 3:1 blend — cheaper than 75% of GA models with a published price (HokAI rank #14/61). Vendor states customer API inputs are not used for training by default.
- **Architecture:** proprietary, API-only (no weights released — unlike the open-weight Solar Open 2 sibling); dense-vs-MoE and parameter count undisclosed (HokAI notes the break from the fully documented 102B Solar Pro 3); reasoning-capable; ~37.7 tok/s output (AA-cited 38 tok/s, rank #35/37 — slow).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **Elo 1277** (Artificial Analysis, 2026-08-12 — above the 1000 human baseline; ahead of Qwen3.7 Max 1272 and MiMo-V2.5-Pro 1266; Solar Pro 3 was 498)
- Terminal-Bench 2.1: **57%** (Artificial Analysis, independent; Solar Pro 3: 12%)
- Tau3-Banking (τ³-Banking): **23%** (Artificial Analysis, independent; Solar Pro 3: 9%)
- AA-LCR (long-context reasoning): **71%** (AA article) / **74.0%** (OpenRouter AA table, later refresh)
- AA-Omniscience: **-1** (Accuracy 19%, attempts only 41% of questions, hallucination rate 24% — AA, 2026-08-12)
- MCP Atlas / Toolathon / Claw-Eval / Tau2-Bench: no verified public score found
- Design Arena agent/webapps Elo: **1115**; Models Arena Code Categories: **1196**; UI Component: **1166** (OpenRouter AA/Design Arena table)

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (OpenRouter AA table; HokAI rounds to 89.0 and attributes to AA) — right at the frontier-band edge
- HLE: **29.2%** (OpenRouter AA table)
- CritPt: **5.4%** (OpenRouter AA table — very weak on research physics)
- AA Intelligence Index: **42** (AA article, 2026-08-12; Solar Pro 3: 14/15; sits alongside Inkling xhigh at 42, just behind MiMo-V2.5-Pro 43)
- MMLU-Pro: **86.3** (vendor in-house, HokAI-attributed); AIME 2026: **95.3%** (vendor in-house)
- LCR / MLCR: no verified public score found (AA-LCR 71–74% is the long-context reasoning proxy)
- BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **70.6%** (vendor in-house, OpenHands scaffold — HokAI flags that independent verification against SWE-bench-style coding benchmarks is not yet available)
- SciCode: **44.6%** (OpenRouter AA table, independent)
- SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found
- MMLU / GSM8K / HumanEval: no verified public score found (Upstage did not publish plain versions — HokAI)

Long context:

- no long-context retrieval reported (no MRCR / RULER / GraphWalks rows published; AA-LCR 71–74% is the only long-context evidence)

### Normalized scores (1–100)

- **Tool use: 72/100.** GDPval Elo 1277 (above the human baseline, 90-band reference ~1750 not reached) plus TB2.1 57% and τ³-Banking 23% put it solidly in the mid-to-upper agent band; missing MCP Atlas/Claw rows and the bottom-tier 38 tok/s throughput (a real constraint in long agent loops) cap it in the low 70s.
- **Reasoning: 78/100.** GPQA Diamond 89.1% touches the 90%+ frontier-band edge and HLE 29.2% approaches the 40% band, but CritPt 5.4% collapses on research physics, AA-Omniscience accuracy is only 19%, and AA Intelligence Index 42 sits just below MiMo-V2.5-Pro's 43 — capped below 80.
- **Context window: 78/100.** 524K claimed (384K per AA's launch listing — both inside the 200K–500K tier with the 524K claim near the 500K boundary); no published retrieval benchmark (MRCR/RULER) and conflicting spec sheets hold it well below the 85–94 sub-band.
- **Multimodal: 15/100.** Text in/out only — confirmed by AA, HokAI, and OpenRouter; no vision/audio/PDF input.
- **Coding: 68/100.** SWE-bench Verified 70.6% is vendor-run only (no independent reproduction), SciCode 44.6% is mid, and SWE-Pro/LiveCodeBench/DeepSWE are unmeasured; Design Arena Code Elo 1196 is respectable but preference-based — kept in the high 60s pending independent coding runs.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M (blended $0.525, rank #14/61) undercuts nearly all GA peers and maps between the ~97 band ($0.10/$0.20) and the ~92 band ($0.60/$2.20) toward the cheaper end; expired launch promo and an active 70%-off OpenRouter route support the high score.
- **Overall Score: 62/100.** (72 + 78 + 78 + 15 + 68) / 5 = 62.2 → 62. Best fit: a budget agent workhorse for long-document, office-productivity, and terminal-automation loops; skip for vision, research-level physics, or when independently verified coding scores are a procurement requirement.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-21
- Method: public internet research (Artificial Analysis launch article 2026-08-12, OpenRouter model page + AA/Design Arena benchmark table, HokAI vendor-page review checked 2026-09-17); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

