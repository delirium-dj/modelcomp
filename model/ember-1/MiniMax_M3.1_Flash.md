# Ember-1 — findings by MiniMax M3.1 Flash

- Source: Fireworks AI (`accounts/fireworks/models/ember-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's **Research Preview** model, released 2026-09-23: "Ember-1 is a new specialized model from Fireworks Research that delivers **Kimi K3's quality with 40% fewer tokens**. Built on Kimi K3". It is a proprietary, Mixture-of-Experts model of **2.78T parameters** — i.e. a re-trained, token-efficient derivative of Kimi K3 rather than a new architecture — offered through Fireworks' "two-week serverless access to new research models" program.
- **Provider / access:** Fireworks `accounts/fireworks/models/ember-1`; OpenRouter `fireworks/ember-1`; also exposed via models.dev under `nano-gpt`, `vercel`, `cloudflare-ai-gateway`, `edenai` and `kilo`. **Not on OpenCode Zen** and **not tracked by Artificial Analysis** (no page, and zero "ember" occurrences in AA's sitemap).
- **Release / knowledge:** created **2026-09-22**, blog published **2026-09-23**. Knowledge cutoff: not published.
- **IDs:** `fireworks/ember-1` (OpenRouter, created 2026-09-24), `accounts/fireworks/models/ember-1` (Fireworks).
- **Context window:** **1,048,576** (OpenRouter) / "Context Length 1040k tokens" (Fireworks); max output **131,072** (Fireworks/models.dev) / 943,718 (OpenRouter).
- **Modalities:** text and image in, text out; function calling supported; no embeddings/rerankers; fine-tuning not supported.
- **Reasoning:** supported (the Fireworks evaluation table compares Kimi K3 Low/High/max against Ember-1); the exact effort-control surface is not published.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$3.00 input / $0.30 cached input / $15.00 output** (Fireworks model page).
- **Architecture:** proprietary — "Built on Kimi K3" (Kimi K3's 2.78T MoE), but Fireworks publishes no architecture detail of its own and no weights. BenchLM: Creator Fireworks, Proprietary, context 1.04M.

### Raw benchmarks found

> Every number comes from Fireworks' own launch post (via BenchLM's ledger) — **no independent tracker has evaluated Ember-1** (Artificial Analysis has no entry, Vals AI has no page, and no leaderboard row was found).

Fireworks' comparison table (Kimi K3 Low / High / max → **Ember-1**):

- Terminal-Bench 2.1 (N=89): 76.4% / 77.6% / 80.9% → **82.0%**
- SWE-bench Verified (N=500): 80.4% / 86.0% / 93.2% → **92.2%**
- SWE-Interact (N=75): 6.7% / 13.3% / 21.3% → **20.0%**
- DeepSWE 1.1 (N=113): 55.8% / 62.8% / 66.4% → **75.2%**
- τ²-bench Airline (N=50): 64% / 64% / 64% → **66%**
- A/B against Kimi K3 (headline): score **0.751 vs 0.753**, **23.8 vs 21.4 steps**, **49.3K vs 29.9K output tokens** — a claimed "**71.3%**" reasoning-token reduction and "**39%**" total-token reduction

Independent trackers: **none**. BenchLM's ledger repeats the four Fireworks numbers (Terminal-Bench 2.1 82.0%, SWE-bench Verified 92.2%, DeepSWE 75.2%, τ²-bench Airline 66.0%, plus a "Bench Airline Domain 66.0%") and reports "Overall Score | Not computed (unranked)", "Benchmarks covered: 5 of 644".

No verified public score found for: GPQA Diamond, HLE, ARC-AGI, FrontierMath, MMMU-Pro, LiveCodeBench, Terminal-Bench 4.0, Toolathlon, MCP Atlas, Claw-Eval, ExploitBench/ExploitGym/SEC-Bench Pro, CWE-bench, IPI, LMArena, or Artificial Analysis index/speed/cost-per-task.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Confidence note:** the only evidence is a single vendor post, so each dimension is anchored on the specific Fireworks number(s) available and the gaps are stated explicitly.

- **Tool use: 78/100.** Terminal-Bench 2.1 **82.0%** and τ²-bench Airline **66%** are the only agentic numbers, plus SWE-Interact **20.0%** — a real multi-step interaction benchmark and a plausible weakness. Capped by the rubric's anchors (TB2.1 ~88%+ → 82.0%; τ3 ~50%+ → not published; GDPval ~1750+ → not published) and by the total absence of Toolathlon, MCP Atlas, Claw-Eval, BrowseComp or Terminal-Bench 4.0 rows.
- **Reasoning: 82/100.** SWE-bench Verified **92.2%** and DeepSWE **75.2%** are strong task-completion signals, and the A/B shows parity with Kimi K3 (0.751 vs 0.753). Capped by the complete absence of GPQA Diamond, HLE, ARC-AGI, FrontierMath, AIME or MMLU-Pro data — the rubric's reasoning anchors cannot be checked at all — and by SWE-Interact at 20.0%.
- **Context window: 95/100.** 1,048,576 tokens (1.04M on Fireworks) with a 131,072 max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no long-context retrieval measurement exists**, and the max-output figure differs between sources (131,072 vs 943,718).
- **Multimodal: 68/100.** The OpenRouter/Fireworks modality string is `text+image->text`; Kimi K3's image capability is real, but **no vision benchmark has been published for Ember-1** (no MMMU-Pro, no CharXiv, no video result). The rubric's "+image in = 60–70" band applies and is met in its lower half, because there is no measured vision evidence of its own.
- **Coding: 88/100.** The strongest dimension: SWE-bench Verified **92.2%** (500 tasks, vendor-run), DeepSWE **75.2%** (above the rubric's 74% anchor), Terminal-Bench 2.1 **82.0%**, and SWE-Interact 20.0% as the counterweight. Capped by the absence of any independent run, and by SWE-bench Verified being slightly *below* Kimi K3 max (93.2%) despite the token-efficiency claim.
- **Cost efficiency: 60/100.** The evaluated route is Fireworks at **$3.00 in / $15.00 out** per 1M with a $0.30 cached read — the rubric's "~$3/$15 = ~60" anchor exactly. The real argument is the token efficiency: "delivers Kimi K3's quality with 40% fewer tokens", with the measured A/B showing 29.9K vs 49.3K output tokens and a claimed 71.3% reasoning-token reduction, which cuts the *per-task* bill even though the per-token price is 10× Kimi K3's.
- **Overall Score: 82.2/100.** (78 + 82 + 95 + 68 + 88) / 5 = 82.2 — best-fit: a **token-efficient Kimi K3 derivative** sold as a two-week research preview — SWE-bench Verified 92.2%, DeepSWE 75.2%, Terminal-Bench 2.1 82.0% with 39% fewer tokens than Kimi K3 — best treated as an experiment in test-time efficiency, and unusable as a procurement decision while it is preview-only, single-vendor and unmeasured by anyone else.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Ember-1 slightly *underperforms* Kimi K3 max on SWE-bench Verified (92.2% vs 93.2%) and DeepSWE (75.2% vs 66.4% — higher, so mixed), while the A/B composite is 0.751 vs 0.753.** The vendor's headline is "Kimi K3's quality with 40% fewer tokens" — i.e. parity on aggregate score, not a capability lead. The parity framing is used.
2. **Token-efficiency claim — "40% fewer tokens" (headline) vs 71.3% reasoning-token and 39% total-token reduction (A/B).** The three figures measure different denominators; all three are quoted.
3. **Steps — 21.4 vs 23.8** for Ember-1 vs Kimi K3: fewer agent steps, which is the actual efficiency claim behind the token reduction.
4. **Max output — 131,072 (Fireworks, models.dev) vs 943,718 (OpenRouter).** The conservative figure is used.
5. **Context — 1,048,576 (OpenRouter) vs "1040k tokens" (Fireworks).** Fireworks' own figure is used.
6. **BenchLM mislabels the benchmark name** ("DeepSWE" where Fireworks writes "DeepSWE 1.1"), and its "Bench Airline Domain 66.0%" duplicates the τ²-bench Airline row — noted, and the Fireworks naming is used.
7. **No independent verification exists at all** — no AA page (and zero "ember" hits in AA's sitemap), no Vals page, no leaderboard row, no LMArena placement. Every number in this report is vendor-published, which is the single largest caveat in it.
8. **"Built on Kimi K3" yet proprietary** — Fireworks publishes no weights and no architecture detail, so the derivation is asserted rather than demonstrated; the dataset treats the model as its own entry (it is not Kimi K3, and Kimi K3 is scored separately at Overall 86.2).

### Notes on identity

- `ember-1` is a **Fireworks Research proprietary derivative of Kimi K3** (2.78T MoE), not a Kimi model id and not open weights. It is a Research Preview with "two-week serverless access", so availability is inherently temporary.
- It is distinct from `fireworks/ember-*` style aliases of other bases, and from the `accounts/fireworks/models/ember-1` path, which is the same model.
- Because its benchmark set is tiny (five rows) and entirely vendor-published, the same caveat that applies to `gpt-5.4-pro` applies here: OpenAI and Fireworks both publish partial tables for their top configurations, and the report says which numbers exist and which do not.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Fireworks' launch post and model page (`accounts/fireworks/models/ember-1`), the OpenRouter API entry, models.dev, the BenchLM evidence ledger, and negative verification across Artificial Analysis (model page and 6.1 MB sitemap), Vals AI, LMArena, the official Terminal-Bench board, swebench.com and Epoch AI. Vendor-vs-independent gaps — chiefly the absence of any independent run and the 92.2%-vs-93.2% SWE-bench comparison against Kimi K3 max — are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ember_1.md`, using the same headings.
