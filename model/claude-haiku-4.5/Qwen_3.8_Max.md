# Claude Haiku 4.5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-haiku-4.5`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 4.5 Haiku (Non-reasoning)
- **Short description:** Anthropic's **October-2025 fast/cheap proprietary tier** — "**the original subagent workhorse: fast, cheap tool-calling that made orchestrator/worker stacks practical.**" It delivered **Sonnet-4-level coding at ~1/3 the cost and ~2× the speed** (vendor **SWE-bench Verified 73.3%**), at **86.4 tok/s**, **$1/$5** per 1M, **text + image in**, **200K context**. AA measures it as **non-reasoning** with an **Estimated Intelligence Index 15 (2/4 units, #30/57) — *below* the non-reasoning class median 17**, so raw intelligence is modest; the value is speed, price, and tool-calling reliability for high-volume subagents. ⚠ **Deprecated** — superseded by **Claude Haiku 5.5** (faster, cheaper, 1M context; this repo's `claude-haiku-5.5`).
- **Provider / access:** **Anthropic API $1.00/$5.00** per 1M in/out (**$0.10 cached read, $1.25 cached write**, 90% cache discount); **live on opencode Zen** (`opencode/claude-haiku-4.5`). **No free hosted tier id** (`noFreeId: true`). Also on AWS Bedrock / GCP Vertex.
- **Release / knowledge:** Released **October 2025** (announced Oct 15, 2025). **Knowledge cutoff July 1, 2025.** **Deprecated** — Anthropic launched **Claude Haiku 5.5** (Oct 7, 2026) as the recommended successor; AA only continues the default 10k-token workload.
- **IDs:** `opencode/claude-haiku-4.5`; Anthropic `claude-haiku-4-5`; AA `claude-4-5-haiku` (non-reasoning page; "a reasoning variant may also exist" — Anthropic ships an extended-thinking mode, but AA measures/indexes it as non-reasoning).
- **Context window:** **200,000 (200K)** — ~300 A4 pages; **64K max output**. Notably smaller than the 1M its successor Haiku 5.5 moved to.
- **Modalities:** **Text + image in → text out** (AA-confirmed). Vision input supported (document/chart/image understanding); **no audio or video**. Matches meta exactly.
- **Pricing (as of 2026-10-27):** **$1.00 / $5.00** per 1M in/out ($0.10 cached read, $1.25 cached write; AA: input "competitively priced" vs $2.00 median, output "moderately priced" vs $10.00 median). One of the cheapest frontier-family tiers — the subagent-economics selling point.
- **Architecture:** **Proprietary dense model** (Anthropic does not disclose parameters), **non-reasoning** as indexed by AA (an extended-thinking mode exists but is not the measured default). **86.4 tok/s (#21/45, "faster than average," median 85; 3/4 units)** — speed is a headline trait. Verbosity/cost-per-task Unknown (deprecated, 2/4-unit Estimated Index).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`claude-4-5-haiku`, **non-reasoning**, **deprecated**, **Estimated 2/4-unit** Index). The coding headline (**SWE-bench Verified 73.3%**) is **vendor (Anthropic**, with a bash/file-editing scaffold**)** and appears on public leaderboards; the **GPQA 72.2%** and **Terminal-Bench 40–44%** figures are **Vals (meta-cited — the Vals page was not re-fetchable this pass)**. AA Index baskets are version-specific and not convertible.
>
> **Note:** the AA Index is **Estimated (2/4 units)** because the model is deprecated — a weaker signal than a full 4/4 measurement. Being **below the non-reasoning median (15 vs 17)** is a genuine relative-intelligence negative, distinct from the model's strong speed/price/coding-for-tier profile.

Independent (AA v4.3.2 + Vals meta-cited):

- **AA Intelligence Index: 15 (Estimated, 2/4 units), #30/57 — "below average"** among **non-reasoning** models (**median 17**). AA: "below average in intelligence, but well priced when comparing to other non-reasoning models of similar price."
- **AA Speed: 86.4 tok/s, #21/45 — "faster than average"** (3/4 units; median 85). Cost/verbosity Unknown (deprecated).
- **Vals GPQA: 72.2%** (meta-cited) — moderate graduate-level science. **Vals Terminal-Bench: 40–44%** (meta-cited) — moderate agentic/terminal coding.

Vendor (Anthropic):

- **SWE-bench Verified: 73.3%** — "**matches Sonnet 4** from five months earlier," at ~1/3 the cost and ~2× the speed of the flagship; Anthropic reports it "using a scaffold with bash and file-editing tools" (a vendor agent result). The single strongest coding anchor for the tier.
- Positioned for **subagents / orchestrator-worker stacks, browser use, summarization, high-volume tasks** — "fast, cheap tool-calling."

> Provenance: **AA Index 15 (Estimated, 2/4 units, below the non-reasoning median)** is the neutral aggregate — a weak signal (deprecated) and a relative negative. **SWE-bench Verified 73.3%** is **vendor** but leaderboard-corroborated; **GPQA 72.2% / Terminal-Bench 40–44%** are **Vals (meta-cited)**. No fresh independent re-verification was possible this pass (Vals page 404'd).
> Meta verification: **accurate** — **200K / 64K out** ✓ (AA), **$1.00/$5.00, $0.10 cached read / $1.25 cached write** ✓ (AA $1/$5, 90% cache), **text + image in / text out** ✓ (AA), **SWE-bench Verified 73.3%** ✓ (Anthropic/vendor + Reddit/verdent/happycapy corroboration), **GPQA 72.2% / Terminal-Bench 40–44% (Vals)** ✓ (meta-attributed), **live on Zen** ✓, **replaced by Haiku 5.5 (faster, cheaper, 1M)** ✓ (AA deprecation banner + anthropic.com Oct 7 2026), **October 2025 release** ✓, **"original subagent workhorse"** ✓. No material discrepancies — the meta correctly frames it as a deprecated legacy-pin tier.

### Normalized scores (1–100)

- **Tool use: 75/100.** Marketed as "**the original subagent workhorse**" — fast, reliable, cheap **tool-calling** that made orchestrator/worker stacks practical, with **Vals Terminal-Bench 40–44%** (moderate) and the SWE-bench scaffold result showing competent bash/file-editing agency. But it is a **small non-reasoning tier with a below-median AA Index** (whose basket includes AutomationBench/AA-Briefcase/Terminal-Bench 4.0), so deep multi-step agentic reasoning is limited, and it is **deprecated**. Competent-but-shallow agentic band; the speed/price make it a good *worker*, not an orchestrator.
- **Reasoning: 72/100.** **Non-reasoning** as indexed, with an **AA Intelligence Index 15 (Estimated, 2/4 units) that is *below* the non-reasoning class median 17** — a genuine relative-intelligence negative. **Vals GPQA 72.2%** is respectable and third parties called it "near-frontier intelligence at a fraction of the cost," but the authoritative AA signal is below-median and the model is deprecated. Speed-tier / non-reasoning band, level with the older Gemini 2.0 Flash (Reasoning 72).
- **Context window: 76/100.** **200K tokens** (64K max out) — the standard Claude window, adequate for subagent chunks and document work but **well short of the 1M** its successor Haiku 5.5 (and competitors like MiMo/Qwen Flash) moved to. The 200K tier.
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed) — vision input for documents/charts/screenshots, which matters for browser-use and UI subagents. **No audio or video.** The image-only-verified tier; a real advantage over the text-only models scored nearby (which floor at 50).
- **Coding: 77/100.** The standout for a fast/cheap tier: **vendor SWE-bench Verified 73.3% — "matches Sonnet 4"** at 1/3 the cost and 2× the speed, plus **Vals Terminal-Bench 40–44%**. Genuinely strong *coding-for-tier* (it made Haiku viable for real SWE subagents), but the headline is **vendor-reported** (Anthropic scaffold), the absolute numbers are mid-frontier, and the model is **deprecated**. Strong-published/vendor-corroborated band; below the independently-verified Sonnet/Opus tiers.
- **Cost efficiency: 88/100.** **$1.00/$5.00** per 1M (input "competitively priced," output "moderately priced"), **90% cache discount**, and **86.4 tok/s** — among the best price/performance in the proprietary frontier families, and the exact reason it became the default subagent workhorse. Not open-weight/free (so below the 92–95 bargains), but excellent value for high-volume orchestrated work. Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 75 + Reasoning 72 + Context 76 + Multimodal 78 + Coding 77 = 378 / 5 = 75.6 → 76. Best fit: **the fast, cheap subagent workhorse** — a non-reasoning 200K text+image tier that delivered **Sonnet-4-level coding (SWE-bench Verified 73.3%) at ~1/3 cost and ~2× speed (86 tok/s, $1/$5)**, making orchestrator/worker stacks and browser-use subagents economical — but with **below-median raw intelligence (AA Index 15 < 17)**, **no audio/video**, a **200K** (not 1M) window, and **deprecation → Claude Haiku 5.5**. Ideal historically for **high-volume, cost-sensitive tool-calling subagents and vision-input worker tasks**; **use Claude Haiku 5.5 for the live, faster, cheaper, 1M-context successor**, or a Sonnet/Opus tier for depth. **Divergence note:** curated queue 73.7 vs my 76 → **+2.3**. I credit the **strong coding-for-tier (77, SWE-bench Verified 73.3% "matches Sonnet 4")**, the **image multimodality (78)**, the **excellent speed/price (Cost 88, uncounted)**, and the **practical subagent tool-calling (75)**; the curated score leans harder on the **below-median AA Index 15** and non-reasoning status, which I reflect in Reasoning 72 but which don't outweigh the tier's real coding/multimodal/value strengths. Lands **level with the deprecated Gemini 2.0 Flash (78) minus two** and **one below the text-only MiMo-V2.5-Pro (75) plus one** — Haiku's image input and coding-for-tier offset its below-median intelligence.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (**Artificial Analysis `claude-4-5-haiku`** non-reasoning page — **deprecated → Claude Haiku 5.5**, **Estimated 2/4-unit** Intelligence Index **15** (#30/57, *below* the non-reasoning class median 17), Speed **86.4 tok/s** (#21/45, "faster than average"), Cost **$1.00/$5.00** (90% cache; input competitively priced, output moderately priced), **text + image in → text out**, **200K** context, knowledge cutoff Jul 1 2025, released October 2025; **Anthropic vendor** — **SWE-bench Verified 73.3%** ("matches Sonnet 4" at ~1/3 cost, ~2× speed, bash/file-editing scaffold), "the original subagent workhorse"; Reddit r/ClaudeCode + verdent.ai + developersdigest + happyc.ai corroboration of the 73.3% and the near-frontier-at-fraction-of-cost positioning; **Vals** (meta-cited, page not re-fetchable this pass) — **GPQA 72.2%, Terminal-Bench 40–44%**; anthropic.com "Introducing Claude Haiku 5.5" (Oct 7 2026) confirming the successor. AA Index is Estimated (deprecated, 2/4 units) — a weak signal, weighted accordingly; vendor SWE-bench not blended with the below-median Index. Distinct from the omni/multimodal and reasoning Claude tiers); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
