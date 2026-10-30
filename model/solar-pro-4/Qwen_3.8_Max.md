# Solar Pro 4 — findings by Qwen 3.8 Max

- Source: Upstage (`solar-pro-4`; id `upstage/solar-pro4`; AA `solar-pro4`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Upstage's proprietary agentic flagship for Korean/Japanese enterprise. Strong headline reasoning and coding (GPQA Diamond 89.0%, LiveCodeBench 87.8%) at mid-premium pricing ($0.30/$1.20, blended $0.22), with large AA-measured agentic gains over Solar Pro 3 (Terminal-Bench v2.1 12%→57%, GDPval-AA Elo 498→1276). But the hardest current agentic-coding benchmark (Terminal-Bench 4.0) is 0%, it is text-only, and it is NOT in the AA Intelligence Index v5.0 basket — the widely quoted "42" is a pre-v5.0 (v4.3) figure and is not convertible. Scored Overall 72 (div +4.0 vs curated 68).

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's closed, reasoning-enabled flagship tuned for long-horizon agentic workflows and Korean/Japanese enterprise use; the proprietary sibling of the open-weight Solar Open 2 and the larger counterpart to Solar Mini 4.
- **Provider / access:** Proprietary (weights not public). Served via Upstage's first-party API — AA lists **1 API provider**. Also resold through OpenRouter (`upstage/solar-pro4`). No free/self-host path.
- **Release / knowledge:** Released **August 6, 2026** (AA FAQ). Knowledge cutoff **February 2026** (spec table: Feb 28, 2026).
- **IDs:** id `upstage/solar-pro4`; AA model-page slug `solar-pro4` (the hyphenated vendor slug `solar-pro-4` 404s on AA — the id-based slug is authoritative).
- **Context window:** **512K** (524,288 combined input+output; 131,072 max output per meta). AA FAQ rounds to "510k"; spec table says 512k. Resolved to 512K.
- **Modalities:** Text in → Text out. Not multimodal — AA confirms no image input.
- **Pricing:** $0.30 / 1M input, $1.20 / 1M output, $0.06 / 1M cached, 80% cache discount (Upstage API). Blended 7:2:1 rate = $0.22 / 1M (AA). AA rates both input and output "somewhat expensive" (medians $0.23 / $0.80). NOTE: OpenRouter surfaced $0.15/$0.60 — a provider-specific/promotional listing; the Upstage first-party $0.30/$1.20 is authoritative. The old "$2/$6" note is wrong (meta correction confirmed).
- **Architecture:** Proprietary; Upstage has not disclosed parameter count. Reasoning model (extended thinking / chain-of-thought before answering).

### Raw benchmarks found

> **Provenance:** Mixed — AA-independent (GPQA Diamond, Terminal-Bench v2.1, AA-LCR, τ³-Banking, GDPval-AA Elo, Speed/Cost), Upstage-vendor (LiveCodeBench, SWE-bench Verified), and the AA launch article/tweet (Solar Pro 3 → Pro 4 deltas). Terminal-Bench versions are kept distinct (v2.1 vendor/AA-legacy vs v4.0 AA-basket).

- **Agent / tool use:**
  - Terminal-Bench **v2.1 = 57.0%** (AA-measured; up from 12% for Solar Pro 3).
  - AA-LCR (long-context agentic reasoning) = **71%** (up from 31% for Solar Pro 3).
  - τ³-Banking = **23%** (up from 9% for Solar Pro 3).
  - GDPval-AA **v2** Elo = **1276** per AA's launch tweet (up from 498 for Solar Pro 3). CONFLICT: meta cites **1106** and explicitly rejects a "1277" figure. AA's current evaluation is GDPval-AA **v2.1**, so the 1276 (v2) vs 1106 spread is most likely a version difference; not invented, flagged.
  - APEX-Agents = **18.7%** (thin).
  - Terminal-Bench **4.0 = 0%** — the hard AA v5.0-basket version. A material red flag for autonomous terminal/coding-agent work despite the strong v2.1 number.
- **Reasoning / knowledge:**
  - GPQA Diamond = **89.0%** (AA-measured; frontier-class for a mid-premium model).
  - AA Intelligence Index **v5.0 = N/A** — Solar Pro 4 is not among the 29 of 718 models scored in the current basket.
  - AA Intelligence Index (pre-v5.0, **v4.3**) = **42** per Upstage launch coverage. Historical only; v4.3 and v5.0 baskets are not convertible, so this does not map onto the current Index.
- **Coding:**
  - LiveCodeBench = **87.8%** (Upstage vendor) — strong competition-style coding.
  - SWE-bench Verified = **70.6%** (Upstage vendor) — mid-tier repo-style coding (frontier is ~75–78%).
  - Terminal-Bench 4.0 = **0%** (see Agent/tool use) — no evidence of frontier terminal-coding-agentic ability on the current hard benchmark.
- **Long context:** 512K window; AA-LCR 71% is the AA-measured long-context reasoning signal (up from 31%).
- **Speed / cost (AA-measured):** Output speed **97.9 tok/s** — rank **#90/143**, 2 of 4 units, below the price-tier median of 113.4 t/s. TTFT **1.97s** (somewhat higher than the 1.69s tier median). Cost $0.30/$1.20, blended $0.22, 80% cache discount. Cost-per-Index-task and Verbosity = N/A (Index not scored).

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: GPQA Diamond 89.0 (AA, via HokAI), Terminal-Bench v2.1 57.0 (AA), SWE-bench Verified 70.6 (Upstage), LiveCodeBench 87.8, pricing $0.30/$1.20 (AA + Upstage; the "$2/$6" old note is wrong), text-only, 512K/128K-out. CORRECTED/FLAGGED: (1) AA v5.0 Index is **N/A**, not "42" — the 42 is a pre-v5.0 v4.3 value (non-convertible). (2) GDPval-AA conflict: AA tweet 1276 (v2) vs meta 1106 (rejects 1277) — resolved as a v2-vs-v2.1 version spread, flagged not invented. (3) OpenRouter's $0.15/$0.60 is provider-specific; Upstage first-party $0.30/$1.20 is authoritative. (4) AA FAQ "510k" is a rounding of the 512K spec. Kept DISTINCT from Solar Open 2 (open-weight 250B-A15B, self-host, Upstage Solar License) and Solar Mini 4 (smaller/cheaper proprietary sibling) — no reattribution.

### Normalized scores (1–100)

- **Tool use: 74/100.** Real AA-measured agentic gains over Solar Pro 3 (TB v2.1 12→57%, AA-LCR 31→71%, τ³-Banking 9→23%, GDPval-AA Elo 498→1276), but capped by Terminal-Bench 4.0 = 0%, thin APEX-Agents 18.7%, and the unresolved GDPval v2/v2.1 spread.
- **Reasoning: 78/100.** GPQA Diamond 89.0% (AA) is frontier-class and the strongest single signal; tempered by AA v5.0 Index N/A (only a mid-tier pre-v5.0 "42") — no current-basket corroboration.
- **Context window: 82/100.** 512K combined with 131K max output and a corroborating AA-LCR 71% long-context score; below the 1M open-weight sibling but solidly large.
- **Multimodal: 50/100.** Text-only — AA confirms no image input.
- **Coding: 76/100.** LiveCodeBench 87.8% is strong and SWE-bench Verified 70.6% is mid-tier (both vendor-reported); dragged by Terminal-Bench 4.0 = 0% on agentic terminal coding.
- **Cost efficiency: 75/100.** $0.30/$1.20 (blended $0.22, 80% cache) is mid-premium for a proprietary flagship — AA rates both sides "somewhat expensive"; single provider limits price competition. (Scored but NOT counted toward Overall.)
- **Overall Score: 72/100.** Half-up mean of the five quality dims (74+78+82+50+76)/5 = 72.0. Divergence **+4.0** vs the curated queue value 68 — driven by the AA-confirmed GPQA 89.0 and 512K context outweighing the text-only, TB4.0-0%, and Index-N/A drags. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — AA `solar-pro4` model page (summary, spec table, Speed/Cost ranks, FAQ), AA launch tweet/article (Solar Pro 3→4 deltas, GDPval-AA Elo), Upstage blog, HokAI review, and OpenRouter listing; ≥3 independent searches. meta.json verified against primary sources, not inherited. No peer findings files read (zero-influence rule).
- **Future sources:** AA Intelligence Index v5.0 inclusion (would replace the historical v4.3 "42"); a clarified GDPval-AA v2.1 Elo; FrontierCode 2.0 / AutomationBench-AA / AA-Briefcase numbers; confirmation of whether Terminal-Bench 4.0 = 0% is a genuine failure or a harness/availability artifact.
