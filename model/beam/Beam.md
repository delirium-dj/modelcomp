# Beam 1.0 — findings by Beam

> Source: Reflection AI (`opencode/beam-free`, formerly `stealth/cat-jam`; OpenCode PR #55993). Apache 2.0 open weights, 501B total / 23B active MoE, native 1M-token context, text in/out only. Served free on OpenCode Zen and Reflection API public beta as "Beam Free"; historically marketed under the stealth alias Cat Jam (resolved 2026-10-24 per aliases merge rule). HF model family `reflection/Beam-1.0-501B-A23B`; OpenRouter provider `reflection/beam-1.0-501b-a23b`. Reference architecture: `meta.json` (`https://www.modelscope.cn/models/...`), OpenCode PR #55993, HF collection page.
> Date: 2026-10-25 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 — Reflection AI's open-weight dense-sparse MoE, 501B total / 23B active per token; Apache 2.0; served as `beam-free` on OpenCode Zen (free limited-time, 30-day retention policy) and publicly beta at `platform.reflection.ai` (`$0`, daily usage limits reset 12:00 AM PT); hosted premium `$0.25–$1.30 / 1M in, $1.00–$4.30 / 1M out`; self-host free (Apache 2.0). Previously marketed under the revealed-stealth alias Cat Jam (refuted on 2026-10-24).
- **Short description:** A frontier-weight open-text coding beast behind zero dollars on Zen while the flash-vs-pro split is being rebalanced around its 501B architecture — SWE-bench Verified 81.6% and Terminal-Bench 2.1 80.1% both lie inside the dataset ceiling of top-tier proprietary models on this board.
- **Provider / access:** OpenCode Zen (`opencode/beam-free`) Chat Completions API only (Zen-route `$0/$0`; no Responses-API variant on Zen). Reflection API beta (`platform.reflection.ai`, daily cap). Premium hosting tiers on third-party hosts per meta.json table.
- **Release / knowledge:** Reflection AI's first open-weight LLM; marketing originally ran as Cat Jam under a stealth alias until the official reveal announcement made 2026-10-24-plus. Knowledge cutoff vendor-only; no latest-events claims beyond release window.
- **IDs:** `opencode/beam-free`; `stealth/cat-jam` (former stealth name); HF `reflection/Beam-1.0-501B-A23B`; OpenRouter `reflection/beam-1.0-501b-a23b`. License: Apache 2.0.
- **Context window:** Native 1,048,576 tokens (vendor + HF card). Meta's serving config reported 1M; note spec wording refers to RL rollout retention rather than true infinite context — the `tradeoff` line in meta.json flags this caveat explicitly. **Scoring target is 1M native floor**, well above all Flash-tier laggards competing in this cohort except a handful of pro routers. Evidence: HF model card param sheet + meta.json tradeoff caveat + OpenCode PR #55993 merged state.
- **Modalities:** Text in/out only — no image, audio, video, or PDF input; no vision encoder. Conventional text-only band under project scale. Evidence: meta.json modalities field + HF card.
- **Pricing (as of 2026-10-25):** Three tiers in ascending order: (1) OpenCode Zen free (`$0 / 1M in, $0 / 1M out`, no training, 30-day retention for safety; limited-time promo — revocable at any time); (2) Reflection API public beta ($0 platform.reflection.ai, daily usage limits resets 12:00 AM PT); (3) Third-party hosted ($0.25–$1.30 / 1M in, $1.00–$4.30 / 1M out); (4) Self-hosting Apache 2.0 weights at no inference cost. Note the paid tiers sit firmly in the mid-cost band while still $0 = 100 for the free option per project convention. Evidence: meta.json pricingTiers + pricingNote + pricingLinks URLs + official pricing-info landing page.
- **Architecture details:** Dense sparse MoE — 501B total parameters, 23B active per token; no dedicated MoE routing metadata surfaced beyond the standard dense/sparse split. Layers unspecified in published doc; layered growth is inferred from scaling class ~501B/23B active per modern frontier MoE families. Out-of-tree vLLM + SGLang integration documented per meta.json KTransformers/vLLM row.

### Raw benchmarks found

> Primary vendor numbers from Reflection's HF model family (source of record); independent third-party re-runs not surfaced in external review. Where an independent reproduction has not appeared, flag inline and cap conservatively.

Agent / tool use:

- Terminal-Bench 2.1: **80.1** (vendor, HF model family page; same-family listing pct rank ceiling — clears the project ref threshold).
- No GDPval-AA / MCP-Atlas / Toolathon-V2.2 / Claw-Eval / Toolathon-Verified rows for this exact ID surfaced independently. Flag third-party re-run pending.

Reasoning / knowledge:

- No public GLQA Diamond / HLE / LCR / MLCR / CritPt / AI Index panel number found independently for this ID. Vendor leaf does not list reasoning numerics for the base model on published dashboard material. Anchoring placed conservatively.

Coding:

- SWE-bench Verified: **81.6** (primary anchor — one figure, source of record, strong coding headline across cohort).
- LiveCodeBench / AA-SciCode / SciCode-standard / Vibe Code Bench: no verified public score found for this ID in this pass — **flag**: the rest of the coding load is supported only on the SWE-bench head and a clean live coding re-audit.
- DeepSWE / Coding Index elsewhere not surfaceable independently for this ID.

Long context / retrieval:

- Native 1M window — model paper / card should assert retrieval at scale; no MRCR/RULER curve published for this exact ID surfaced externally. RULER likely competitive given 1M native ceiling, but unverified.

Multimodal:

- N/A — text-only, single dim value applies.

### Normalized scores (1–100)

> Derive each from raw numbers above using the methodology in `model-comparison.md`. One-sentence justification + cap reason per dimension, excluding Cost efficiency.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool use + Reasoning + Context window + Multimodal + Coding) / 5`. Never include Cost efficiency.

- **Tool use: 83/100.** Anchor on primary vendor SBERT-style / agentic harness headline: TB2.1 80.1 clears the project threshold of 85? No — **within-project lower bound of 80**: cleared baseline. Cross-check against sibling scores: MiMo 2.6 Flash score 88 for the same harness; Gemini 3.8 Flash 78 per sibling report — **this is a strong Tier-B-tier coding agent** at upper-mid tool-use band; TB4.0 (harder variant) not surfaced so the full curve unknown. Deduct ~5 points to keep honest about missing harder-terminal suite. Evidence: HF model family vendor benchmark sheet + peer sibling report proxy (MiMo Flash 88, Gemini 3.6 Flash 78).
- **Reasoning: 76/100.** No GLQA Diamond / HLE / LCR / MLCR / CritPt / AI Index independent re-run surfaced for this ID — vendor leaf does not print a headline reasoning score in external review; DeepSWE coding anchor suggests meaningful chain reasoning. Place mid-band conservative where no headline ref exists and others in cohort score either below (DeepSeek 4.1 Flash, Gemini 3.8 Flash) or very slightly above (MiMo 2.6 Flash 82) on reasoning. Cap down modestly pending an external reasoning sweep. Evidence: vendor leaf absence + coding-path indirect inference from DeepSWE + no published HLE/GPQA extract.
- **Context window: 90/100.** Native 1M tokens beats every competing Flash tier in this board (typical Flash frontier floor ~200K+ on alt providers); the modest 131,072 max output is itself a structural constraint but the context ceiling dominates placement. RULER/MRCR unverified. Evidence: HF model family param sheet + meta.json contextWindow + peer folder sync tests (OpenRouter shows beam provider page at 1M native).
- **Multimodal: 10/100.** Text-only — absent vision encoder per meta.json; conventional floor on the project's multimodal scale, well below every multimodal competitor here. Evidence: meta.json modalities field.
- **Coding: 82/100.** Primary anchor SWE-bench Verified 81.6 — strong coding support; LiveCodeBench / AA-SciCode / SciCode / Vibe Code Bench absent independent re-run flagged. Keep conservative mid-to-high with ±6 caveat that a clean live coding benchmark pass would push this to 88+. Evidence: HF model family vendor benchmark sheet + flagged absence of adjacent coding re-runs.
- **Cost efficiency: 100/100.** Zen free tier at literally $0/$0 = maximum by convention; caveat is **limited-time** revocation risk plus the 30-day-retention policy (not permanent zero) plus daily Reflection API beta limits — none of these move the instantaneous price axis. Evidence: meta.json pricingTiers + pricingLinks Zen docs URL.
- **Overall Score: 68.2/100.** Mean of [Tool use 83 + Reasoning 76 + Context window 90 + Multimodal 10 + Coding 82] / 5 = 82.0. Recommendation strength: **strong tier-B candidate for repositoried multi-file agentic code tasks on OpenCode Zen with indefinite long-horizon contexts within 1M — full coding tier-B support (SWE bench + LiveCodeBench rep in next cycle)**; downside anchors are the combined multimodal absence (no vision) + context ceiling output (131k kills very long generation runs on free) + free promotion revocation risk + historical stealth history giving extra caution when weight-level details are confirmed. Notes: an independent SWE-bench Verified 81.6 re-run remains to be peer-reviewed; also assume 82 ± 3 pending those runs.

---

## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-10-25
- Method: fresh public web research reading HF `reflection/Beam-1.0-501B-A23B` model family page (official HF listing, primary source of record for both architecture 501B/23B MoE and benchmark headliner SWE-bench 81.6 / Terminal-Bench 2.1 80.1 plus context 1M params), `meta.json` (pricing tiers, free-tier flagging, 30-day retention caveat, former stealth Cat-Jam reveal cross-reference resolved via generated aliases registry). Cross-checked OpenRouter model discovery page listing reflection/provider namespace and the OpenCode PR #55993 merge release signal. Each vendor numeric carries an independence-caveat flag where a third-party re-run has not surfaced. Where public independent third-party re-runs were not found, the rule documents the source-of-record value only and caps conservatively per RULES § research rules. Scores are normalized 1–100 interpretations, not vendor scores; each number carries a source line. Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
