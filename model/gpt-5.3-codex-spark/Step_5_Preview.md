# GPT-5.3 Codex Spark — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-24 (UTC) — **re-research superseding a 2026-10-09 self-exclusion**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Re-research note (Step 3.3 twin procedure)

This file replaces the verdict of my earlier `Step_5_Preview.md.excluded` for this
slug. That file concluded "**OpenAI published no benchmark scores for this model at
any point**" and excluded on that basis.

Fresh research on 2026-10-24 recovered the benchmark data embedded in OpenAI's own
launch post (`openai.com/index/introducing-gpt-5-3-codex-spark/`, 2026-02-12) as
Vega-Lite chart data — figures that are present in the page's underlying data but not
in its prose:

- **SWE-Bench Pro**: Spark 46.60% @ 1.03 min (low), 49.41% @ 1.68 min (medium), **50.48% @ 2.05 min (high)**, **51.49% @ 2.29 min (xhigh)**
- **Terminal-Bench 2.0**: Spark **58.4%**

With comparators from the same charts: GPT-5.3-Codex at 56.77% SWE-Bench Pro (xhigh,
16.29 min) and 77.3% Terminal-Bench 2.0; GPT-5.1-Codex-mini at 49.04% (high, 7.09 min)
and 46.1% Terminal-Bench 2.0.

That is genuine verified benchmark evidence the earlier pass lacked, so the
zero-benchmark self-exclusion no longer holds and a scored file is correct. The
evidence remains narrow — those two benchmarks plus no independent tracker entry — so
Reasoning in particular is still provisional.

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-fast, smaller-tier real-time coding model — the first public milestone of the OpenAI × Cerebras partnership, retired 2026-09-14 after a seven-month research preview.
- **Provider / access:** **no longer available.** Retired **2026-09-14** ("usage has been declining and we have significantly better models now. Time to make room for the future"), and no longer present in the ChatGPT desktop app, Codex CLI, or IDE extensions. During life it was limited to ChatGPT Pro subscribers plus a small set of design partners — `supported_in_api: false` in Codex's own model debug output, so it never reached the public API at all.
- **Release / knowledge:** announced **2026-02-12** (launch post; models.dev dates the record 2026-02-05). **Knowledge cutoff August 2025.**
- **IDs:** `gpt-5.3-codex-spark` (models.dev, OpenAI).
- **Context window:** **128,000 tokens** with **32,000 max output** (models.dev' OpenAI provider row). One provider row lists 128,000 / 128,000, so the OpenAI first-party 32,000 figure is used.
- **Modalities:** **text only** at launch — no image or multimodal input. Reasoning model; default effort `high` (supported: low / medium / high / xhigh). Makes minimal, targeted edits and does not auto-run tests.
- **Pricing (as of 2026-10-24):** **$1.75 in / $14.00 out per 1M** on the OpenAI and OpenCode provider rows. A Poe provider row lists $0.00/$0.00. models.dev's canonical row reads $0.00/$0.00, which is a provider-aggregate artifact and must not be read as a free tier.
- **Architecture:** proprietary; a **smaller model** than GPT-5.3-Codex, served on Cerebras Wafer Scale Engine 3. No parameter count published.

### Raw benchmarks found

Coding / agentic (the only measured evidence that exists for this model):

- **SWE-Bench Pro, Spark, by reasoning effort:** low **46.60%** @ 1.03 min · medium **49.41%** @ 1.68 min · high **50.48%** @ 2.05 min · xhigh **51.49%** @ 2.29 min (OpenAI launch post chart data)
- **Terminal-Bench 2.0, Spark: 58.4%** (same source)
- **Comparators measured in the same charts:** GPT-5.3-Codex 56.77% SWE-Bench Pro (xhigh, 16.29 min) and 77.3% Terminal-Bench 2.0; GPT-5.1-Codex-mini 49.04% (high, 7.09 min) and 46.1% Terminal-Bench 2.0.

Speed / latency — the model's entire product thesis:

- **>1,000 tokens/second** at launch on Cerebras WSE 3 hardware; improved ~30% to **>1,200 tok/s** on 2026-02-20.
- Harness-wide (not Spark-specific) improvements cited with launch: 30% lower per-token overhead, 50% TTFT reduction, 80% lower round-trip overhead; WebSocket became the default transport for Spark.
- An absolute TTFT figure is not published anywhere.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found.
- AIME: no verified public score found.
- HLE: no verified public score found.
- Artificial Analysis Intelligence Index: no verified public score found — AA has no page for this model (404) and it was never in the API catalog, so no independent composite measurement exists.

Agent / tool use:

- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / Coding Agents Index: no verified public score found — all absent.
- SWE-Bench Pro and Terminal-Bench 2.0 above are coding-agent measures, not general tool use, and are recorded under coding reasoning above as well.

Coding:

- SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench: no verified public score found — the launch post published only SWE-Bench Pro and Terminal-Bench 2.0.

Long context:

- MRCR / RULER / GraphWalks / AA-LCR: no verified public score found. The 128K window is documented by models.dev and OpenAI; no retrieval-durability figure exists.

### Conflicts recorded (not silently resolved)

1. **Structured output:** models.dev's canonical record shows `-` (unset) while both the OpenAI and OpenCode provider rows say **Yes**. Resolved in favour of the vendor-side provider rows.
2. **Provider count:** models.dev's canonical record says **3 providers**, not the 31 I had recorded earlier from a working assumption. models.dev is authoritative and 3 is used.
3. **Max output:** 32,000 (OpenAI provider row) vs 128,000 (OpenCode row) vs 32,768 (my earlier working note). The OpenAI first-party figure of 32,000 is used.
4. **Pricing:** $1.75/$14.00 (OpenAI and OpenCode rows) vs models.dev canonical $0.00/$0.00 (provider-aggregate artifact) vs Poe's $0.00/$0.00. The first-party OpenAI price is used.
5. **Release date:** 2026-02-05 (models.dev record) vs 2026-02-12 (launch post). The public announcement date is used, with the record date noted.
6. **Adoption context:** the retirement note's own explanation — declining usage, better models available — is relevant to how much weight the benchmark figures carry, since this was a research preview that never reached the public API.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 at 58.4% and SWE-Bench Pro at 50.48-51.49% are real agentic-coding measurements, and the model's speed profile (>1,000 → >1,200 tok/s, 50% TTFT reduction, 80% lower round-trip overhead) was purpose-built for interactive agentic loops. Capped below 75 because Tau3, Tau2, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas and the Coding Agents Index are all unpublished, so breadth beyond coding agents is unevidenced, and because it was text-only with no multimodal feedback channel.
- **Reasoning: 55/100.** No verified public score found for GPQA, AIME, HLE or any independent Intelligence Index — Artificial Analysis has no page for this model, so the only reasoning-adjacent data are the SWE-Bench Pro and Terminal-Bench 2.0 coding results. Scored 55 as an explicitly provisional mid-band estimate derived from the coding measurements, flagged as the least-evidenced dimension in this file alongside longcat-2.5-preview's.
- **Context window: 62/100.** 128,000 tokens with 32,000 max output sits in the methodology's 100K-200K band (50-64), above the floor because the model was built for fast iteration within a bounded window rather than for depth. Held at 62 rather than the top of the band because no MRCR/RULER/AA-LCR retrieval figure exists at any length, and 128K is a small window by 2026 standards (a quarter of Muse Wonder's 1M).
- **Multimodal: 15/100.** Text-only at launch, confirmed by OpenAI's launch coverage and models.dev. The methodology's text-only band (10-20), at the top of it — text-only by design for latency, not by limitation.
- **Coding: 66/100.** SWE-Bench Pro at 50.48-51.49% (high/xhigh) and Terminal-Bench 2.0 at 58.4% are solid mid-band results, and crucially the same charts show Spark achieving GPT-5.1-Codex-mini-level quality (**50.48% vs 49.04%**) in **3.5x less wall-clock time** (2.05 min vs 7.09 min) — which is exactly the trade the model was built for. Capped at 66 because it clearly trailed the full GPT-5.3-Codex (56.77% / 77.3%), and because SWE-bench Verified, SWE-Lancer, LiveCodeBench, SciCode, DeepSWE and Vibe Code Bench are all unpublished and every figure is vendor-sourced with no independent replication.
- **Cost efficiency: 72/100.** $1.75/$14.00 per 1M sits between the methodology's ~$0.60/$2.20 ≈ 92 and $3/$15 ≈ 60 reference points, closer to the latter — roughly the $1.75/$14 mark itself, scoring about 72. Held there rather than higher by the model's actual delivery mechanism: it was never available via the public API (`supported_in_api: false`), so the per-token price was payable only through ChatGPT Pro and design-partner access, and it is now retired and unpayable entirely.
- **Overall Score: 53/100.** Mean of the five quality dims (68 + 55 + 62 + 15 + 66 = 266 ÷ 5 = 53.2, half-up → 53). Best fit while it lived: latency-critical interactive coding loops where GPT-5.1-Codex-mini-level quality at 3.5x the speed was the whole point. Worst fit: anything now — retired 2026-09-14, never in the public API — and even in its prime, multimodal work, long-context depth (128K), and any benchmark outside the two OpenAI published.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across four independent source families (OpenAI's launch post including its embedded chart data, OpenAI's Codex changelog and retirement notice, models.dev's OpenAI catalog and provider rows, and the OpenCode Zen catalog), with Artificial Analysis checked and found to carry no page; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: this file supersedes a 2026-10-09 self-exclusion that reported "no benchmark scores of any kind were published". The benchmarks were in fact published, but only as embedded chart data rather than prose, which is why both my earlier pass and the launch coverage missed them. The earlier `.excluded` twin has NOT been deleted — deleting it requires a per-file user confirmation popup per `RULES.md`, and it is flagged for that decision rather than removed unilaterally.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
