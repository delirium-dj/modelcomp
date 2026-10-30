# Muse Wonder Full — findings by DeepSeek 4.1 Flash

- Source: Meta/Muse Wonder Full
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta Superintelligence Labs' higher-capability Muse Wonder variant (Oct 2026), a proprietary frontier reasoning model for long-horizon agentic coding and professional knowledge work. It is a separate model from the API-served Muse Wonder (`muse-wonder-1.0`) — not an effort setting — and is reachable only inside Muse Code.
- **Provider / access:** Meta — no public API and no model ID. Available only in Muse Code on the Power Usage ($50/mo) and Maximum Usage ($200/mo) plans (dev.meta.ai lists no per-token price). The sibling Muse Wonder is the API model (`muse-wonder-1.0`, Meta Model API / OpenRouter).
- **Release / knowledge:** Released 2026-10-12 (same day as Muse Wonder). Knowledge cutoff not announced.
- **IDs:** none (Muse Code subscription only); sibling `muse-wonder-1.0` on the Meta Model API. No OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; per the model card and Artificial Analysis. Max output not separately announced.
- **Modalities:** Text, image, video, and audio in (Artificial Analysis: text/image/speech/video); text out. Reasoning yes (effort scale on the sibling; Full is a distinct checkpoint). Tool calls, structured output, computer use, search grounding (per Meta's model-API feature list).
- **Pricing (as of 2026-10-30):** Not priced per token. Only via Muse Code Power ($50/mo) / Maximum ($200/mo) subscriptions (Contributor mode on by default for subscribers). Sibling Muse Wonder API: $4.00 in / $0.20 cached / $20.00 out per 1M, flat across 1M context.
- **Architecture:** Proprietary; Meta has not disclosed size or parameter count (Muse Code / Muse family lineage). No open weights.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 4.0 (AA harness): **57.1%** (Meta model card / Artificial Analysis; AA article 57%). Vendor-run TB4.0 tables elsewhere show different figures for peers — not comparable across harnesses.
- GDPval-AA v2.1: **1,857 Elo** (Artificial Analysis; rank #2 of 358, within CI of Opus 5.5 1,866 and Sonnet 5.5 1,838) — up 176 Elo from Muse Spark 1.3.
- AA-Briefcase v1.1: **1,729 Elo** (Artificial Analysis; rank #3).
- AutomationBench-AA: **71%** (Artificial Analysis; rank #3) — vs Meta model-card citation 45.4% (different metric/harness; conflict noted).
- OSWorld V2.1 (partial reward): **78.4%** (Meta model card).
- GDP.pdf: **33%** (Artificial Analysis; rank #1, narrow lead over 31–32% peers); AA model page 32.6%.
- Harvey LAB-AA v1.1 (hallucination-gated all-pass): **13.1%** (Meta card / BenchLM).
- JobBench: **75.3%**; Finance Agent v2 (Vals): **59.1%**; EnterpriseOps-Gym-AA, ITBench-AA, MCP Atlas: no verified public score found.
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon: no verified public score found.

Reasoning / knowledge:

- CritPt: **32.9%** (Artificial Analysis; rank #1) — AA article 33%.
- HLE: **53.6%** (Artificial Analysis, AA-HLE).
- SciCode / AA-SciCode: **63%** (Artificial Analysis; rank #3); BenchLM 62.6%.
- Artificial Analysis Intelligence Index: **50** on Index v5.0 (#15 of 86, AA model page, current) vs **56** on Index v4.3 at launch (AA article). BenchLM 49.7. Conflict is index-version/snapshot, not model drift.
- AA-Omniscience: index **30.6**, accuracy 41.0%, hallucination rate **17.6%** (AA model data via BenchLM) vs **23%** cited in the AA launch article — snapshot conflict; low hallucination either way (second-lowest among Index ≥45 models at launch).
- MLCR-AA (medical long-context): 22.2% pass^1; HealthBench Professional 62.3%.

Coding:

- DeepSWE 1.1: **79.0%** (Meta model card, Datacurve) — above Claude Opus 5.5 (74.2) and GPT-6 Astra (74.1).
- SWE-Marathon v1.1: **57.5%** at xhigh (Meta card; mixed harness vs peers).
- ProgramBench: **59.0%** (Meta card, mini-swe-agent) — below Opus 5.5 70.5%.
- Artificial Analysis Coding Agents Index: **68** (Muse Code on Wonder Full, max) — tied with Claude Code on Sonnet 5.5 (68), ahead of Opus 5.5 (66).
- Bug Hunt Bench: **42.0** mean fixes / 105 (public data).
- LiveCodeBench / Vibe Code Bench: no verified public score found for the Full variant.

Long context:

- AA-LCR (long-context reasoning, ~100K in): **83.7%** (Artificial Analysis). No MRCR/RULER figure at the full 1M window found; advertised capacity only.

### Normalized scores (1–100)

- **Tool use: 93/100.** Top-tier agentic stack: GDPval-AA 1,857 Elo (#2), AA-Briefcase 1,729 Elo (#3), AutomationBench 71% (#3), a leading GDP.pdf 33%, OSWorld 78.4%, and a Coding Agents Index of 68 that ties Sonnet 5.5. Capped just below the very top by TB4.0-AA 57.1% and Harvey 13.1%.
- **Reasoning: 89/100.** CritPt #1 (32.9%) and HLE 53.6% show frontier scientific reasoning, but the composite Index sits at 50 (v5) / 56 (v4.3) — below the 60+ frontier reference — and there is no GPQA figure.
- **Context window: 95/100.** Genuine 1M-token context (≥1M tier); capped below 100 because AA-LCR reaches only 83.7% at ~100K and no ≥98%-at-512K retrieval evidence exists.
- **Multimodal: 92/100.** Full text + image + video + audio input with text output (audio/video input lands in the 90–100 methodology band). Capped by Meta's own caveat of weak visual/spatial (especially 3D) reasoning and no non-text output.
- **Coding: 93/100.** DeepSWE 79.0% clears the 74% frontier reference and the Coding Agents Index (68) ties Sonnet 5.5; SciCode 62.6%, SWE-Marathon 57.5%. Capped by ProgramBench 59.0% vs Opus 5.5's 70.5%.
- **Cost efficiency: 55/100.** No per-token API exists — access is gated behind Muse Code Power ($50/mo) / Maximum ($200/mo) subscriptions, so value depends on willingness to pay for a subscription tier; no $/token comparable to API models.
- **Overall Score: 92/100.** Half-up mean of (93 + 89 + 95 + 92 + 93) / 5 = 92.4 → 92. Best-fit: frontier agentic coding and knowledge-work inside Muse Code, where audio/video input and top-tier GDPval/Nothing-class deliverable quality matter more than API programmability (which this model lacks).

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-30
- Method: public internet research (Artificial Analysis launch article + model page; Meta Muse Wonder model card citations via BenchLM; Codersera guide with Meta tables and AA data; dev.meta.ai docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

### Sources

- Artificial Analysis — "Muse Wonder and Muse Wonder Full: a material jump in intelligence" (Index 52/56 v4.3, GDPval 1,857, TB4.0 57%, modalities, pricing) — https://artificialanalysis.ai/articles/muse-wonder
- Artificial Analysis — Muse Wonder Full (Max) model page (Index v5.0 = 50 #15/86, 1M context, text/image/speech/video in) — https://artificialanalysis.ai/models/muse-wonder-full
- BenchLM — muse-wonder-full (68.96 #18; Meta-card + AA rows, 79.0 DeepSWE, hallucination 17.6%) — https://benchlm.ai/models/muse-wonder-full
- Meta — Muse Wonder model card (PDF; benchmark table, safety) — https://research.meta.ai/static/muse-wonder-model-card
- Codersera — "Muse Wonder and Wonder Full: Pricing, Benchmarks, API Access and Data Modes" (Meta table vs AA, Muse Code plans $50/$200, Contributor/ZDR) — https://codersera.com/blog/muse-wonder-complete-guide-2026/
- Meta Model API docs (models, pricing, coding agents) — https://dev.meta.ai/docs/models
- llm-stats — Muse Wonder Full (Meta, Oct 12 2026, proprietary) — https://llm-stats.com/models/muse-wonder-full
