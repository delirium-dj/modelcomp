# GPT-6 Sol — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's **mid-tier GPT-6 model** (family: Astra [flagship] > **Sol** > Luna), released 2026-09-22 ~90 minutes after Claude Opus 5.5. It is best understood as **a pricing-and-reliability release, not an intelligence release** — trained "with similar methods as GPT-6 Astra," it **halves GPT-5.6 Sol's API price ($4/$20 → $2/$10)** and **cuts the AA-Omniscience hallucination rate from 92% to 60%**, while raw intelligence barely moves (**AA Intelligence Index v4.3: 47 → 48**). At max effort it is roughly equal to — and on DeepSWE/OSWorld slightly *below* — the GPT-5.6 Sol it replaces, but at a **matched cost it is clearly better** (cost-per-Index-task $1.99 → $1.06). It powers ChatGPT's Chat tab on paid plans (since Oct 7) and is the everyday coding/agent workhorse; **superseded by GPT-6.1 Sol** (Sep 29) for the hardest work.
- **Provider / access:** OpenAI API (`gpt-6-sol`; Chat Completions, Responses and Batch APIs — tool calling requires the Responses API), ChatGPT Work & Codex (Plus/Pro/Business/Enterprise/Edu), and since Oct 7 the Chat tab on paid plans. Full hosted tool set: web search, file search, code interpreter, hosted shell, apply-patch, skills, computer use, MCP, tool search and image generation.
- **Release / knowledge:** Released **2026-09-22**. **Knowledge cutoff April 20, 2026.**
- **IDs:** `gpt-6-sol` (predecessor `gpt-5.6-sol`; successor `gpt-6.1-sol`; flagship sibling `gpt-6-astra`; low tier `gpt-6-luna`).
- **Context window:** **1.05M tokens total (922K max input)**; **128K max output**. Prompts over **272K tokens bill at 2× input/cache and 1.5× output**. Improved caching (higher default hit rates, explicit breakpoints, and effort/tool changes mid-conversation no longer invalidate the cache).
- **Modalities:** **text + image in → text out** (no audio). Reasoning effort **none / low / medium (default) / high / xhigh / max**; inherits Astra's "more clarity, less jargon, shorter answers" communication style; can interleave thinking with answering.
- **Pricing (as of 2026-10-23):** **$2 / 1M input, $10 / 1M output** (50% below GPT-5.6 Sol's $4/$20); **cached input $0.20**, cache writes $2.50; **Batch/Flex 50% off**; Fast/priority mode 2×; >272K prompts 2×/1.5×. AA cost-per-Index-task **~$1.06** (vs GPT-5.6 Sol's $1.99); ~$3/task on the Coding Agent Index (Pareto frontier).
- **Architecture:** Undisclosed proprietary; shares GPT-6 Astra's training methods and communication tuning. Alignment: OpenAI reports a **coding-deception rate of 1.3%** (down from GPT-5.6 Sol's 10.4%) on deliberate stress-test evals.

### Raw benchmarks found

Independent — Artificial Analysis (max effort; **neutral harness**, highest weight):

| Metric (AA) | **GPT-6 Sol** | GPT-5.6 Sol |
| --- | --- | --- |
| Intelligence Index v4.3 | **48** | 47 |
| Cost per Index task | **$1.06** | $1.99 |
| Coding Agent Index v1.5 | **57** | 55 |
| Terminal-Bench 4.0 | **43%** | 37% |
| SWE-Atlas-QnA | **58%** | 54% |
| AutomationBench-AA | **62%** | 60% |
| AA-Omniscience hallucination rate (lower better) | **60%** | 92% |
| Output tokens/task | 31K | 29K |

- AA context: Index **48** sits **10 points below Claude Opus 5.5 (58)** and **5 below GPT-6 Astra (53)**; Opus 5.5 at *medium* ≈ 51 (~$1.50/task) is still above Sol max. Coding Agent Index 57 is on the Pareto frontier at ~$3/task, below Fable 5.1 & Astra (62) and Opus 5 (60) which cost $7.50–$12.50/task.

Official — OpenAI vendor-run (best effort):

- **AutomationBench 1.0.6** (xhigh, 47 tools): **33.2%** at $0.27/task — above GPT-5.6 Sol max (28.8%) and Claude Opus 5 max (26.9%); below Astra max (41.4%)
- **Agents' Last Exam V1** (max): **56.4%** — above Claude Opus 5's best (55.9% at high) at ~60% lower cost/task; below Astra max (59.3%)
- **DeepSWE v1.1** (max, long-horizon SWE): **68.8%** at $2.74/task — ⚠ **regression** from GPT-5.6 Sol max (72.7%); below Astra xhigh (74.1%), Opus 5 max (73.7%), Fable 5 xhigh (69.9%)
- **FrontierCode 1.1 Main** (max, mergeability+correctness): **49.3%** — up from GPT-5.6 Sol (47.5%); OpenAI says it matches Claude Fable 5.1 at xhigh for much less
- **OSWorld 2.0** (offline, partial reward): **60.5% at xhigh** (≈ Opus 5 medium 60.3%) at ~80% lower cost; **64.4% at max** — ⚠ below GPT-5.6 Sol max (66.2%); Astra max leads at 73.5%
- **Factuality** (internal, de-identified flagged conversations): ~half as many mistakes as GPT-5.6 Sol

> Provenance: This report unusually has **both** an independent Artificial Analysis evaluation (Index v4.3 48, Coding Agent Index 57, Terminal-Bench 4.0 43%, AA-Omniscience 60% hallucination) **and** OpenAI's vendor-run launch charts (via Tosea.ai's complete guide, 2026-09-23, and Founderz, 2026-10-15). The two agree on the central story — **"the gains are mostly in cost, not raw intelligence."** Per methodology the OpenAI cells are an upper bound and are discounted against the neutral AA signal. Two honest negatives are corroborated: at **max effort GPT-6 Sol *regresses* below GPT-5.6 Sol on DeepSWE v1.1 (68.8 vs 72.7) and OSWorld 2.0 (64.4 vs 66.2)** — it is a better *value*, not a strictly better model, at the top of its effort range. ⚠ The folder's scaffolded `meta.json` lists an **"ARC-AGI-2 89.6%"** figure that I could **not** verify in any official or independent source reviewed, so it is **not used or asserted** here (DeepSWE 68.8% *is* independently confirmed). No benchmark was invented; specs were verified against the launch coverage rather than inherited from `meta.json`.

### Normalized scores (1–100)

- **Tool use: 85/100.** Broad, strong agentic tooling — the **full OpenAI hosted tool set** (web/file search, code interpreter, hosted shell, apply-patch, skills, computer use, MCP, tool search), **AutomationBench-AA 62%** (independent, up from 60%), **Agents' Last Exam 56.4%** (beats Claude Opus 5 at ~60% lower cost) and OSWorld 2.0 60.5% (xhigh). Held below the frontier because **OSWorld regressed at max (64.4 vs GPT-5.6's 66.2)** and Astra/Opus 5.5 lead on business automation.
- **Reasoning: 84/100.** The independent **AA Intelligence Index v4.3 = 48** (up just 1 from GPT-5.6 Sol) anchors this — a solid mid-tier that is **10 points below Opus 5.5 (58) and 5 below Astra (53)**. The genuine gain is reliability: **hallucination rate 60% (down from 92%)** and a 1.3% coding-deception rate. Capped because OpenAI/AA both frame this as a cost release, not an intelligence release — the ceiling did not move.
- **Context window: 89/100.** A large **1.05M-token native window** (922K usable input, 128K output) with materially improved caching (effort/tool changes no longer invalidate the cache). Discounted below the 90–93 native-1M leaders by the **>272K-token pricing cliff (2× input / 1.5× output)** and the absence of a published MRCR-style long-context recall figure.
- **Multimodal: 78/100.** **Text + image in → text out** (no audio/video), with image generation available as a hosted tool. **No MMMU/MathVision/vision benchmark** published in the sources reviewed, so I score conservatively — vision is a supported input, not a measured differentiator.
- **Coding: 85/100.** Strong coding-agent *value* — **Coding Agent Index v1.5 = 57** (independent, up from 55, on the Pareto frontier at ~$3/task vs $7.50–12.50 for the leaders), **Terminal-Bench 4.0 43%** (up from 37%), **FrontierCode 49.3%** (matches Fable 5.1 at xhigh), SWE-Atlas-QnA 58%. Held below the high-80s because **DeepSWE v1.1 regressed to 68.8% (from 72.7%)** and it trails Fable 5.1/Astra (Coding Agent Index 62) and Opus 5 (60).
- **Cost efficiency: 90/100.** The headline strength — **$2/$10 (a flat 50% cut from GPT-5.6 Sol)**, **AA cost-per-Index-task halved to $1.06**, ~$3/task on the Coding Agent Index (Pareto frontier), cached input $0.20, Batch 50% off, and cache improvements that let agents raise effort mid-conversation without re-paying for the prefix. Below the ultra-cheap Luna ($0.10/$0.50) and the MIT open-weight models, and tempered by the >272K cliff. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 84/100.** Mean of Tool 85 + Reasoning 84 + Context 89 + Multimodal 78 + Coding 85 = 421/5 = 84.2 → 84. Best fit: **the everyday production coding/agent workhorse** — tool-heavy workflows, business automation, terminal/SWE agents and 1M-context analysis where you want a good result at a predictable, halved cost and markedly fewer hallucinations; route the hardest reasoning/knowledge-work to GPT-6.1 Sol, Astra or Opus 5.5, and if you were paying GPT-5.6 Sol *max* purely for DeepSWE/OSWorld quality, test before switching (both regressed at top effort). Independent read: my 84 sits **below the queue's curated 87.9** because both the independent AA Index (48 — a clear tier below Opus 5.5/Astra) and OpenAI's own charts confirm this is a **cost/reliability update with flat-to-slightly-regressed peak capability**, not an intelligence gain — its excellence is value-per-task, which the Overall formula (correctly) does not reward.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Tosea.ai's "How to Use GPT-6 Sol and Luna: Complete Guide," 2026-09-23, reproducing OpenAI's launch charts and the Artificial Analysis independent evaluation; Founderz' "GPT-6 Sol vs Luna vs Astra," 2026-10-15, for pricing/availability/lineage). The slug was resolved to OpenAI's GPT-6 mid-tier (`gpt-6-sol`, rel 2026-09-22) via its model-card identity and independently verified rather than inherited from `meta.json`; the scaffolded "ARC-AGI-2 89.6%" claim could not be verified and was **not** used. Capability figures combine an independent AA harness (weighted higher) with OpenAI vendor charts (upper bound, discounted); the corroborated max-effort DeepSWE/OSWorld regressions are reflected in the Tool-use/Coding scores. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
