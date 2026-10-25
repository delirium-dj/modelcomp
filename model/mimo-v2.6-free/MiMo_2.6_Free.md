# MiMo V2.6 Free — findings by MiMo 2.6 Free

> Source: Xiaomi MiMo (`opencode/mimo-v2-6-free`, OpenCode Zen free tier). Same MIT-licensed sparse MoE (309B total / 15B active per token) underlying MiMo-V2.6-Flash as served through Zen's zero-price route — the dedicated Free entry differs from the paid/Pro variant only at access level, not weight level. Hosted in Zen (`https://openrouter.ai/models?providers=xiaomimimo`); HF listing (`xiaomi/mimo-v2.6-flash`) parent repo; ModelScope if mirrored. Reference architecture: `meta.json` (`https://www.modelscope.cn/models/mimo-v2.6-flash`), `llm-stats`, `xiaomi-mimo-ai` GitHub.
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free — Xiaomi MiMo-V2.6-Flash served via OpenCode Zen's `$0` promo tier (limited-time feedback collection, Oct 2026 onward; can be revoked or metered at any time). Distinct from `mimo-v2.6-pro` / paid routes — same MoE weights, different gateway profile.
- **Short description:** Xiaomi's fully-multimodal sparse MoE Flash generation (Sept 2026), 309B total / 15B active, 1,048,576 native context, text/image/video/audio in + text out, reasoning on. Exported through Zen at zero cost for agentic coding and close-to-frontier performance.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2-6-free`; Chat Completions API; `models.dev` authoritative row); Xiaomi MiMo API direct (`mimo-v2.6-flash`) available in same repos at non-zero rates. Not Responses-API on Zen.
- **Release / knowledge:** MiMo-V2.6 series September 2026 (mimo.mi.com announcement; llm-stats 2026-09-21). Knowledge cutoff published vendor-only; no latest-events claims beyond release window.
- **IDs:** `opencode/mimo-v2-6-free` (Zen free variant); API `mimo-v2.6-flash` / `mimo-v2.6-pro`. License: MIT open weights.
- **Context window:** Native 1,048,576 tokens — vendor and LLM Stats both report 1M. However Zen serving caps this route at **200,000** tokens (max output **32,000**) per `models.dev` `opencode/mimo-v2.6-flash-free` row and pi.dev independent catalog. **Two-way conflict:** meta.json reported in this cohort claims 1M; serving spec and documented free-route cap are 200K; used 200K as the serve-route fact since scoring targets usage experience, and flagged. Evidence: models.dev registry + pi.dev catalog (independent), `meta.json` serving-spec field, llm-stats.
- **Modalities:** Native text/image/video/audio in + text out per LLM Stats (`omnimodal`); **flag service caveat** — pi.dev lists this endpoint as text+image only on their probe, suggesting the Zen proxy may strip audio/video input on free tier despite the model claiming full modality. Scores the reported model surface upper band; deductions below. Evidence: LLM Stats + pi.dev + Zen proxy documentation.
- **Pricing (as of 2026-10-25):** `$0 / 1M input tokens, $0 / 1M output tokens` on OpenCode Zen free tier (official docs limited-time, no stated revocation SLA — risk to recurring use). Paid fallback per meta.json: Xiaomi native rates apply outside Zen; prices not transcribed in this pass.
- **Architecture details:** Sparse MoE 309B total / 15B active per token; 256 routed experts top-8; 48 layers; MIT open weights (LLM Stats / aiidelist). Same family as MiMo-V2.5-Flash; generational improvement line (DeepSWE 48.8→65.7 during training per mimo.mi.com). Supports LLaMA-Factory fine-tuning and vLLM/SGLang inference plugins out of tree.

### Raw benchmarks found

> Primary vendor tables sourced directly from mimo.mi.com and llm-stats. Third-party claims collected but not independently reproduced: no public SWE-bench Verified row specifically labeled for this Free route exists; SWE-bench Verified 92.0% figure in `meta.json` is parent-Flash conservative and requires a re-run for the specific route. All rows below are vendor-reported and treated as the source of record with third-party-reaudit pending (per RULES § rules).

Agent / tool use:

- Terminal-Bench 2.1: **87.6** (vendor, via aiidelist / BenchmarkList pct 93, rank 15/194 — clears 85 ref). Same table for Pro 89.9, Opus 5 89.1, Sol 88.8.
- Terminal-Bench 4.0: **28.8** (harder variant, Pro 34.9 significantly higher).
- OSWorld-Verified: **80.8** (vendor / orcarouter GUI agent, 17/70).
- Toolathlon-Verified: **73.6** (vendor; V2.5 Pro 49.1 → improved line).
- AutomationBench v1.0.6: **52.3** (vendor).
- JobBench: **61.2** (vendor; 8/48).
- GDPval / MCP-Atlas / Tau3-Banking / Claw-Eval for this Free route: **no verified public score found** (flags: roadmap mentions these suites; no publicly published vendor number surfaced).

Reasoning / knowledge:

- AA Intelligence Index: vendor attribute **Flash Index = no verified public score found** — only Pro 46 extracted; **flag reasoning anchored on broader agent suite + CyberGym 95.1** (vendor), not measured pure-reasoning rows.
- GPQA / Humanity's Last Exam / ARC for V2.6 Flash: **no verified public score found** (lineage markers for prior gen: Flash GPQA ~84 / MMLU-Pro 84.9 — not transferable; cross-check against V2 baseline excludes them).

Coding:

- DeepSWE v1.1: **67.9** (vendor, orcarouter / mx-specialline) — trained during RL lifts Flash 48.8→65.7 per mimo.mi.com.
- MiMo Code Bench: **61.2** (vendor; custom dataset, 8/48 entries).
- MiMo Visual Coding: **71.5** (vendor visual-coding-specific benchmark).
- **SWE-bench Verified:** meta.json cites **92.0%** — this is the Flash parent conservative figure and has **not** been independently reproduced for this route — **third-party score absent, flag**: used parent-lineage conservative value only; scoring below assumes 92 ± 6 unless peer runs surface.
- Vibe Code Bench / AA-SciCode / LiveCodeBench / SciCode-standard: **no verified public score found** for this route in public sources.

Long context / retrieval:

- Native window 1M — vendor claim consistent; serve route caps **200K** — documented empirically via models.dev+pi.dev, no retrieval curve published for this ID. AA-LCR retrieval tests unlikely to clear ≥200K because window is capped there; track retention at the serving floor.

Multimodal:

- Native omnimodal (text/image/video/audio in per llm-stats / vendor announcements); **service-route caveat** on free tier is active — noted separately in scores deduction (~92 candidate → floored to ~85 under service uncertainty).

### Normalized scores (1–100)

> Derive each from raw numbers above using the methodology in `model-comparison.md`. One-sentence justification + cap reason per dimension, excluding Cost efficiency.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 88/100.** Anchor: TB2.1 87.6 clears frontier edge (pct 93, rank 15/194); Toolathlon 73.6, OSWorld 80.8, JobBench 61.2 cumulative — elite agentic stack per vendor harness where multi-agent tool loops dominate; TB4.0 28.8 reserved for harder terminals under a weaker ref. No GDPval/MCP-Atlas or independent repro for this ID → modest cap, justified at same magnitude of evidence otherwise. Evidence: vendor Terminal-Bench / Toolathlon / OSWorld tables + BenchmarkList.
- **Reasoning: 82/100.** Anchors span math + structured-chain + agentic-research triple (CyberGym 95.1 vendor highlight agent-reasoning; DeepSWE 67.9/MiMo Code Bench 61.2 coding-path indirect); no verified pure GPQA/HLE/ARC row printed explicitly for this route → anchor placement upper-mid rather than unverified high. Cap keeps estimate conservative for sub-lancet model that lacks standalone public reasoning numerics — note caveat that a third-party reasoning panel on `mimo-v2.6-flash-free` route would likely move this up. Evidence: vendor CyberGym + DeepSWE + MiMo Code Bench rows + vendor lineages; no public GPQA/HLE extract specific to this route ID flagged.
- **Context window: 86/100.** Serving route confirms **200K floor with 32K output cap** (models.dev+pi.dev independent catalogs) — native 1M underlies it but users hit 200K; contemporary tier floor comparison against frontier laggards already substantially absorbed; retrieval upside capped at 200K-serve. Score retains the floor since window floor governs real user experience. Evidence: models.dev `opencode/mimo-v2.6-flash-free` serving row, pi.dev probe, meta.json.
- **Multimodal: 85/100.** Native omnimodal reported (llm-stats: text/image/video/audio in + text out); **service caveat** — free Zen endpoint observationally appears limited to text+image per pi.dev probe; the enterprise assertion remains vendor-published, so effective user-facing capability is high but the fee-tier deployment surface narrows confidence by ~5 points; fair middle reading for "reported vs observed" tradeoff. Evidence: llm-stats + pi.dev independent catalog + official Zen docs.
- **Coding: 85/100.** Anchors: DeepSWE 67.9 + MiMo Visual Coding 71.5 unique visual path, MiMo Code Bench 61.2 custom dataset. Frontier headline SWE-bench Verified remains vendor-conservative (meta-reported 92 parent baseline): with a clean independent repro not published and no Vibe-CodeBench / AA-SciCode independent row for this route ID, use the stable DeepSWE/VisualCoding + CodeBench anchors as the measured subset — not 92, capped one tier below given lack of verification on the SWE-Verified headline. Caveat stated explicitly: if independent peer SWE-bench run appears, rounding up to 90 likely. Evidence: vendor DeepSWE / MiMo Code Bench / VisualCoding tables; SWE-bench Verified referenced parent conservative value only, NOT independently reproduced for this route.
- **Cost efficiency: 100/100.** Zen $0 / 1M in, $0 / 1M out — defines maximum possible per project convention ($0 = 100); caveat only revocation/metering risk and that payment fallback does not apply to this route. Evidence: OpenCode Zen official docs pricing table for this endpoint.
- **Overall Score: 85/100.** Mean of [Tool use 88 + Reasoning 82 + Context window 86 + Multimodal 85 + Coding 85] / 5 = 85.0. **Best-fit recommendation:** free agentic-coding pipeline work on OpenCode Zen with short-horizon contexts fitting 200K/32K windows — visual agent tasks where visual coding score (71.5) matters (inferred through MiMo-specific visual benchmark, not standard SWE-V); coding for drafts/patches, automation debugging — long-horizon requires paid Xiaomi MiMo API or fast output (lower theoretical ceiling drops since capped output kills long-generation runs). Downside anchors: (a) no verified third-party SWE-bench or Terminal-Bench re-run for this ID makes High confidence premium viable later; (b) free promo revocation could disrupt production cadence; (c) multimodal service caveat flags audio/video passthrough through free Zen. Assumes 85 ± 2 until independent peer SWE-bench / Terminal-Bench re-runs publish for this route ID.

---

## Signature

- Provided by: **MiMo 2.6 Free (Xiaomi MiMo — opencode/mimo-v2-6-free)** — 2026-10-25
- Method: fresh public web research across three independent external sources — (1) HF browsing listing confirming distinct `mimo-v2.6-flash` free sibling parent repo and MiMo-V2.6 base weights architecture; (2) OpenRouter model discovery listing cross-referencing provider data (`providers=xiaomimimo`); (3) `models.dev` authoritative serving registry plus independent pi.dev catalog for the free-route context/output cap ($0/200K/32K schema). All numeric anchor figures sourced from vendor-published mimo.mi.com / llm-stats with third-party-reaudit flags documented inline. Where an independent third-party re-run was not found on this route, the rule documents the conservative source-of-record ceiling (not an invented number) and caps accordingly per RULES § research rules. Scores are normalized 1–100 interpretations, not vendor scores; each number carries a source line plus the cancellation note. Future sources: add a new file next to this one, e.g. `MiMo_2.6_Free_Alt.md`, using the same headings.
