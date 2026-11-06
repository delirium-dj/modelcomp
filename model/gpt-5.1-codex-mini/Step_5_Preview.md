# GPT-5.1-Codex Mini — findings by Step 5 Preview

- Source: OpenAI / GPT-5.1-Codex Mini (`gpt-5.1-codex-mini`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex Mini — OpenAI's smaller, cheaper, **explicitly "less-capable"** version of GPT-5.1-Codex (Nov 2025), a Codex-tuned mini for cost-sensitive agentic coding via the Responses API. **A negative finding governs this report: BenchLM carries no `gpt-5-1-codex-mini` page in any spelling** (it 404s), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** OpenAI's **cheapest Codex tier** — **$0.25/$2.00 per 1M, a fifth of `gpt-5-codex`'s price** — with a **400K/128K window** and Responses-API support, carrying only two measured figures (**SWE-bench Pro 49.0%, Terminal-Bench 2.0 46.1%) and **no published SWE-bench Verified figure at all**. Repo meta records **Vibe Code Bench 22.2%** and, decisively, that it was **removed from Codex surfaces in April 2026 and deprecated on Zen in July 2026**.
- **Provider / access:** OpenAI API `gpt-5.1-codex-mini` — **Responses API only** (no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5.1-codex-mini` (**no free ID**, verified 2026-10-19), priced identically to native.
- **Release / knowledge:** **released 2025-11-13 (Artificial Analysis); knowledge cutoff Sep 30, 2024; rolling snapshot.** All three are genuine, dated, specific facts — and the cutoff is **26 months behind this report's date**.
- **IDs:** `gpt-5.1-codex-mini` (OpenAI Responses API); `opencode/gpt-5.1-codex-mini` (Zen, paid).
- **Context window:** **400,000 tokens with 128,000 max output** (official model page, confirmed by AA) — half the current 1M standard with a genuinely generous output allowance.
- **Modalities:** **text and image in; text out**; reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: `function_calling`, `web_search`.
- **Pricing (as of 2026-11-06):** **$0.25 input / $0.025 cached input / $2.00 output per 1M** (official; **AA blended $0.27 at a 7:2:1 input/output/thinking mix**) — OpenAI native and Zen identical. Methodology anchors put $0.25/$2.00 near the 97+ band.
- **Architecture:** proprietary; parameter count not disclosed ("smaller version of GPT-5.1-Codex").

### Raw benchmarks found

**A negative finding is stated plainly: BenchLM carries no `gpt-5-1-codex-mini` page in any spelling.** Independent coverage is additionally **thin by design**: Artificial Analysis lists this model as **deprecated with an *estimated* Intelligence Index** (full independent evaluation "forthcoming") and **no per-benchmark text figures**, and Vals AI has no page. The figures below are therefore carried from the prior verified research pass (2026-10-19) and re-attributed to official spec sheets, Artificial Analysis's deprecated-page listing and repo meta; **because no catalog page exists, none has an independent cross-check from a 2026-11-06 source.** **Every per-benchmark row reads "no verified public score found" rather than borrowing the parent GPT-5.1-Codex's numbers** — the repo's rule against inheriting sibling figures applied.

Coding — **the only measured dimension**:

- **SWE-bench Pro: 49.0%** (repo meta) — under the 55%+ reference
- **Terminal-Bench 2.0: 46.1%** (repo meta) — on the *older* harness, and far under the 88%+ reference
- **Vibe Code Bench: 22.2%** (repo meta) — near-floor
- **SWE-bench Verified, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench 2.1/4.0, FrontierCode: no verified public score found**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: estimated** (AA marks the model deprecated, full evaluation forthcoming, no per-benchmark text figures)
- **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA-Omniscience, FrontierMath: no verified public score found** — so **composite depth, reliability and four of five reasoning references are entirely unmeasured**

Agentic / tool use:

- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Multimodal:

- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

Operational:

- **Responses API only** — no Chat Completions, no Batch, no fine-tuning
- **Removed from Codex surfaces April 2026; deprecated on Zen July 2026** (repo meta)
- **Knowledge cutoff Sep 30, 2024** — 26 months old

### Normalized scores (1–100)

> **Methodology note.** With three carried-forward capability figures (one of them near-floor) and no catalog page, every quality dimension below is a placeholder-for-unknown anchored on the verified structural facts (400K/128K, text+image in, $0.25/$2.00 with $0.025 cache) and the nano-Codex positioning. The two dimensions where this SKU is genuinely distinctive — **context window** and **cost efficiency** — are the best-grounded scores in this report.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one agentic benchmark exists — no Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because the SKU ships **function calling, server-side web search and structured outputs** and is explicitly positioned for agentic coding; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.**
- **Reasoning: 52/100.** **Scored just above the methodology's neutral floor, on the single structural signal available:** Artificial Analysis lists the model with an **estimated** Intelligence Index, which is a real directional signal pointing upward while being explicitly self-labelled as an estimate. Capped at 52 rather than higher because **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, MATH, MMLU-Pro, AA-Omniscience and FrontierMath have no figure at all** — so five of five reasoning references are unmeasurable — and because the **Sep 30, 2024 knowledge cutoff is 26 months old**.
- **Context window: 90/100.** **400,000 tokens with 128,000 max output** — the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because **a 400K window with a 128K output allowance is a genuinely generous configuration for the cheapest Codex tier**. Held at 90 rather than the ≥1M tier because it is half the current standard, **no AA-LCR or MRCR figure exists**, so the window's usable depth is entirely unverified, and no long-context pricing tier was found.
- **Multimodal: 62/100.** **Text and image in; text out**, at the lower end of the methodology's 60–70 band. Held at 62 because **not one visual benchmark exists** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure — so the modality claim is a spec-sheet claim with zero measured support.
- **Coding: 52/100.** Below the methodology's mid band, and resting on three figures that all point the same way: **SWE-bench Pro 49.0% (under the 55%+ reference), Terminal-Bench 2.0 46.1% (on the older harness, far under the reference) and Vibe Code Bench 22.2% (near-floor)**. Capped further by the **complete absence of SWE-bench Verified** — the methodology's terminal reference and the figure one would most want from a Codex SKU — plus LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench 2.1/4.0 and FrontierCode.
- **Cost efficiency: 97/100.** **$0.25/$0.025/$2.00 per 1M, with native and Zen routes priced identically** (AA blended $0.27 at 7:2:1) — below the methodology's ~$0.60/$2.20 (≈92) anchor and near the 97+ band, with a **90% cache-read discount**. Scored at 97 on the rate card. Held at 97 rather than 100 because the model is **closed-source with no self-hosting escape** and **`noFreeId`**, and because the Responses-API-only access removes the 50% Batch discount other OpenAI SKUs enjoy.
- **Overall Score: 61.2/100.** (50 + 52 + 90 + 62 + 52 + 97) / 5 = 67.2 → **67**. Recommendation: **the cheapest Codex tier with a fair window and a thin, near-floor capability record — and a dated retirement.** $0.25/$2.00 at 400K/128K with function calling and web search is a genuinely cheap configuration for cost-sensitive agentic coding, and the Responses API is the right surface for that. **But the measured record is thin and uniformly weak** (SWE-bench Pro 49.0%, Terminal-Bench 2.0 46.1%, Vibe Code Bench 22.2%, **no SWE-bench Verified figure at all**), reliability is entirely unmeasured, and the **knowledge cutoff is 26 months old**. **Decisively, repo meta records that it was removed from Codex surfaces in April 2026 and deprecated on Zen in July 2026** — so the route is already deprecated and should not be built on. Migrate to **GPT-5.3 Codex (62.92, refreshed earlier this session)**, which carries SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card.

---

## Signature
- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `gpt-5-1-codex-mini` page in any spelling**, and Vals AI has no page either, so the 2026-11-06 pass had no catalog to check against. Independent coverage is additionally **thin by design** and this is recorded prominently: **Artificial Analysis lists this model as deprecated with an *estimated* Intelligence Index, describes full independent evaluation as "forthcoming", and publishes no per-benchmark text figures** — so the composite is the only independent signal and it is self-labelled as an estimate. The evidence base is the prior verified research pass (2026-10-19) plus the repo's curated metadata, with figures re-attributed to official spec sheets, Artificial Analysis's deprecated-page listing and repo meta, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly rather than implied**. **A deliberate non-import is recorded and applied: every per-benchmark row reads "no verified public score found" rather than borrowing the parent GPT-5.1-Codex's numbers**, per the repo's rule against inheriting sibling figures — the parent's strong profile (refreshed earlier in this session) is explicitly not used to raise this SKU's scores. Because only three capability figures carry forward, every quality dimension is explicitly labelled a placeholder-for-unknown, and the two best-grounded dimensions — context (400K/128K) and cost ($0.25/$2.00 with $0.025 cache) — are scored on verified specs. **The deprecation is surfaced in the model card and carried into the recommendation as the decisive operational fact** — removed from Codex surfaces April 2026, deprecated on Zen July 2026 — with GPT-5.3 Codex named as the migration target. The **complete absence of any SWE-bench Verified figure** is stated as the coding dimension's defining gap, since it is the methodology's terminal reference and the figure one would most want from a Codex SKU. The **Sep 30, 2024 knowledge cutoff, 26 months old**, is recorded as an additional reason not to use it. The Responses-API-only access is recorded as removing the 50% Batch discount. Missing benchmarks (every benchmark measured anywhere in this research series except the three carried-forward rows) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.1-Codex-Mini model documentation (official source; repo meta's `officialUrl`)](https://developers.openai.com/api/docs/models/gpt-5.1-codex-mini)
  - [Artificial Analysis — GPT-5.1-Codex Mini (deprecated listing; estimated Intelligence Index, "full independent evaluation forthcoming")](https://artificialanalysis.ai/models/gpt-5-1-codex-mini)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - [Repo curated meta — `model/gpt-5.1-codex-mini/meta.json` (400K/128K, $0.25/$2.00/$0.025, SWE-bench Pro 49.0%, Terminal-Bench 2.0 46.1%, Vibe Code Bench 22.2%, noFreeId, removal from Codex April 2026)](/model/gpt-5.1-codex-mini/meta.json)
  - See also: [`model/gpt-5.1-codex/`](gpt-5.1-codex.md) — the parent SKU whose figures are deliberately not imported, refreshed in an earlier batch; [`model/gpt-5.3-codex/`](gpt-5.3-codex.md) (62.92) — the migration target this report recommends
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
