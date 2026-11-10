# Gemini 4 Carbon — findings by QoDuck

- Source: Google (`gemini-4-carbon`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google's "next frontier model" (announced 2026-10-28), billed as its strongest model with "state-of-the-art cybersecurity and long-horizon capabilities." **#1 on the Artificial Analysis Intelligence Index v5 (59)**, beating Gemini 4 Argon on 16 of 16 launch-table rows. **Access flag:** this is a *gated* model — initial rollout is to a subset of cyber defenders, then phased trusted partners via the **Fairwind Program**; there is **no public API** yet. It is the base `gemini-4-carbon` (no `-cyber` suffix), so it stays in `model/`; it is a distinct model from Gemini 4 Argon (its predecessor/base) and from any Flash variant.
- **Provider / access:** Announced as `gemini-4-carbon`. **No public API endpoint and no model code** as of 2026-10-28 — not in AI Studio, Vertex AI, the Gemini app, OpenRouter, or Vercel AI Gateway; **no OpenCode Zen route** (Zen unlisted; apimaster reports 0 active routes). Access begins with vetted cyber defenders, then Fairwind Program partners (governments/national cyber authorities, critical-infrastructure operators, core technology platforms; defensive-benchmarking academic labs may apply; 650+ partners globally; internal cybersecurity/incident-response/pen-testing use only, no sharing/resale). General developer/business/consumer availability: **no announced date**. apimaster notes no confirmed public Google API identifier yet.
- **Release / knowledge:** Announced 2026-10-28 (two weeks after Argon reached GA). **Knowledge cutoff: not published.**
- **IDs:** `gemini-4-carbon` (announced name; no confirmed public API identifier yet). **No Free ID and no paid public route on Zen** — gated via Fairwind only.
- **Context window:** **~1M tokens — officially unpublished.** The AA article reports a 1M context and Google runs GraphWalks on the **256K–1M** range (implying ≥1M capability), but the llm-stats launch analysis explicitly warns that Carbon's context window/max-output/cutoff/modalities are *not published* and not to reuse Argon's 1,048,576 spec. **Max output tokens: not published.** Treated here as ~1M (AA-reported, GraphWalks-implied), flagged as unconfirmed.
- **Modalities:** **Conflict / officially unpublished.** AA reports text, image, video and speech input → text output; the llm-stats model page lists only text + image (its Carbon spec section was blank/truncated). Vision/spatial ability is corroborated by Chartography 72.5% and Blueprint-Bench 2 58.6%. Reasoning: yes (thinking levels not officially published; Argon base uses low/medium/high). Tool calls: yes. No native non-text output reported.
- **Pricing (as of 2026-11-09, announced — not purchasable):** Introductory **$2 / $10 per 1M** (input/output), cached input **$0.10** (95% off); **standard $4 / $20**, cached **$0.20**. **No confirmed discount end date for Carbon** (unlike Argon's intro, which ends 2026-11-30). AA charts use the standard $4/$20 and describe a "50% launch discount, no confirmed end date." Batch mode 50% off (Gemini family convention).
- **Architecture:** Proprietary; parameter count/training tokens not published. Cybersecurity-focused: Gray Swan indirect-prompt-injection attack success 0.0% (best in class), secure-code generation ~2× Argon (vendor claim).

### Raw benchmarks found

> Two evidence tiers: (a) **Google's self-reported launch table** (apimaster / llm-stats reproduce it; llm-stats warns none is independently verified, except TB4 / TB-Science which are third-party runs *reported by* Google), and (b) **independent Artificial Analysis** figures (Index v5, Omniscience, Briefcase, Coding Agent Index, cost/task). GPQA Diamond, HLE (numeric), SWE-bench Verified, DeepSWE, MRCR, ARC-AGI, AIME and MMMLU are **not published** for Carbon.

Agent / tool use:

- Terminal-Bench 4.0 (**group**): **65.2%** (Google launch table / llm-stats, third-party run; **1st** among listed peers — Argon 57.1%, GPT-6 Astra 59.1%, Opus 5.5 59.6%, Fable 5.1 52.0%) vs **64%** (AA article, "second place") — snapshot/harness variance, both top-tier.
- AutomationBench: **53.9%** (Zapier leaderboard; **1st** — Argon 51.3%, Astra 41.4%, Opus 42.5%, Fable 31.4%); AA also lists Carbon as leading AutomationBench-AA.
- OSWorld 2.1 (partial, offline 82-task subset): **81.5%** (Argon 74.7%, Astra 80.9%, **Opus 5.5 87.2%** — Carbon trails Opus).
- Agents' Last Exam v1.1: **77.4%** (1st; Argon 69.0%, Astra 73.1%, Opus 71.6%).
- AA-Briefcase (agentic knowledge work): **1609 Elo** (independent AA; +126 over Argon-high 1483; behind Grok 4.7-xhigh 1638, Muse Wonder-max 1659, Kimi K3.1 Pro 1678). Presentation sub-score 1598; Analytical Quality 1671.
- Vals Index v2.2: **70.4** (1st, narrowly over Opus 70.2; Argon 69.2, Astra 65.0). Vending-Bench 2: **$16,484** final bank balance (1st).
- GDPval-AA / Tau3-Banking: **no verified public score found** for Carbon.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **59** — **#1** (independent AA; Opus 5.5 58, GPT-6 Astra 57, Argon 50). Leads 4 of 9 evals: HLE-Diamond, Terminal-Bench-Science, AA-Omniscience, AutomationBench-AA. AA notes it is "not leading in coding and knowledge work."
- AA-Omniscience v1.1: **54** (independent; accuracy 58%, **hallucination rate 11%** — 2nd-lowest behind Argon's 4%; Opus 5.5-max and GPT-6 Astra-max both 50%). Argon 46, Opus 48.
- Terminal-Bench-Science 0.1: **64.8%** (third-party run reported by Google; 1st — Argon 52.9%, Astra 63.3%, Opus 59.0%, Fable 43.3%).
- RiemannBench (science/math): **80.0%** (Surge; 1st — Argon 76.0%, Astra 72.0%, Opus 69.6%).
- HLE-Diamond: leads the eval (AA), but **no numeric HLE/GPQA Diamond score published**.

Coding:

- SWE-sweep: **9.6%** (1st — Argon 4.3%, Astra 9.5%, Opus 3.6%, Fable 2.9%). **Note:** mindstudio mislabeled this "SWE-bench"; it is SWE-sweep, a different benchmark — **no SWE-bench Verified score is published**.
- FrontierSWE 2: **61.2%** (Proximal; **trails** Astra 65.5% and Opus 62.3%; Argon 55.0%, Fable 56.3%).
- FrontierCode v1.1: **51%** (AA; 2nd — Opus 5.5-max leads 56%).
- Coding Agent Index (AA, Antigravity CLI): **59** (2nd — Claude Code + Opus 5.5-max leads 62).
- Security coding (cyber-first focus): **SEC-bench Pro 88.2%** (1st), **CWE-bench 71.0%** (1st), **ExploitGym 54.8%** (10-hour run; 53.5% at default 6h; Argon 42.0%, Opus 34.5%).
- WebDev Arena (crowd-vote, preliminary): **1768 Elo ±15, #4** (2,230 votes; Opus 5.5-max 1810, Astra-max 1773, Sonnet 5.5-xHigh 1770, Argon-high 1679).
- SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode: **no verified public score found** (SciCode flagged "under review" by AA for a possible dataset error; no Carbon score).

Long context:

- GraphWalks (256K–1M, BFS F1): **96.2%** (200 problems; **1st** by a wide margin — Argon 84.2%, Astra 71.8%, Opus 66.8%, Fable 65.0%). Strong retrieval-at-length evidence, though the formal context-window spec is unpublished and 96.2% is below the ≥98% bar for a perfect context score. No MRCR/RULER pointwise figure published.

Multimodal:

- Chartography (no tools, vision): **72.5%** (Surge; 1st — Argon 71.6%, Astra 71.0%, Opus 66.3%, Fable 46.2%).
- Blueprint-Bench 2 (multimodal spatial reasoning): **58.6%** (Andon Labs; 1st — Argon 54.4%, Opus 51.2%, Astra 49.7%).

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`, weighting independent AA figures and the realistic Terminal-Bench 4.0 over vendor-only claims. Overall = half-up mean of the five quality dims (Cost excluded).

- **Tool use: 93/100.** Leads AutomationBench (53.9%), Agents' Last Exam (77.4%), Vals Index (70.4), Vending-Bench 2 ($16,484) and Terminal-Bench 4.0 (65.2%); OSWorld 2.1 81.5%. Capped below 95 because AA-Briefcase (1609) trails Grok 4.7 / Muse Wonder / Kimi K3.1 Pro and OSWorld trails Opus 5.5 (87.2%).
- **Reasoning: 94/100.** Independent AA Index v5 **#1 (59)**, leads HLE-Diamond, AA-Omniscience (54, 11% hallucination vs peers' 50%), Terminal-Bench-Science (64.8%) and RiemannBench (80.0%). Capped at 94 by no published GPQA Diamond/numeric HLE, the v5 rescale (59 sits below the historical 60+ band), and the hallucination uptick from Argon's 4% to 11%.
- **Context window: 96/100.** GraphWalks BFS F1 **96.2%** at 256K–1M (1st, far above peers) is excellent retrieval-at-length evidence and implies ≥1M capability. Held at 96 (not 98–100) because Google has not published a formal context spec and 96.2% is below the ≥98%-at-512K+ bar.
- **Multimodal: 88/100.** Strong vision/spatial evidence (Chartography 72.5% #1, Blueprint-Bench 2 58.6% #1); AA reports text/image/video/speech in → text out. Capped at 88 (below Argon's 90) because official modalities are unpublished and the llm-stats model page lists only text+image — a genuine conflict — and output is text-only.
- **Coding: 90/100.** Leads security coding (SEC-bench Pro 88.2%, CWE-bench 71.0%, ExploitGym 54.8%) and Terminal-Bench 4.0 (65.2%) and SWE-sweep (9.6%), but trails on general coding: FrontierSWE 2 61.2% (behind Astra/Opus), FrontierCode 51% (2nd), Coding Agent Index 59 (2nd), WebDev Arena #4. AA explicitly says it is "not leading in coding." No SWE-bench Verified/DeepSWE published.
- **Cost efficiency: 68/100.** Intro $2/$10 (cached $0.10), standard $4/$20 (cached $0.20) — identical headline economics to Argon; AA cost/task **$7.76** (123K output tokens) is ~23% below Opus 5.5 ($10.04) and ≈ Argon ($7.68). Tempered by the unconfirmed intro end date, the high absolute cost/task, and the fact that pricing is announced-but-not-purchasable (gated, no public API).
- **Overall Score: 92.2/100.** Half-up mean of the five quality dims (93 + 94 + 96 + 88 + 90) / 5 = 461 / 5 = **92.2**. Best fit: vetted cyber-defense / incident-response teams and long-horizon agentic work needing frontier reasoning, best-in-class prompt-injection resistance and excellent 256K–1M retrieval — but it is not generally purchasable yet, and general-purpose coding trails Opus/Astra.

### Conflicting-results notes

1. **Specs officially unpublished.** llm-stats launch analysis: context window, max output, cutoff, modalities and thinking levels are "not published" and warns against reusing Argon's 1,048,576 spec. AA reports 1M context + text/image/video/speech; GraphWalks is run at 256K–1M (implying ≥1M). Context scored on the GraphWalks evidence + AA's 1M, explicitly flagged as unconfirmed; max output/cutoff left unknown.
2. **Modality conflict.** AA: text/image/video/speech in → text out. llm-stats model page: text + image only (blank/truncated Carbon section). Official: unpublished. Multimodal capped at 88 (vs Argon's 90) to reflect this uncertainty; vision/spatial ability itself is well-evidenced (Chartography, Blueprint-Bench).
3. **Terminal-Bench 4.0: 65.2% vs 64%.** Google launch table / llm-stats give 65.2% (1st among listed peers); the AA article gives 64% ("second place"). Snapshot/harness variance; both place Carbon at the frontier top on TB4 (unlike Gemini 3.8 Flash's 19%).
4. **SWE-sweep ≠ SWE-bench.** mindstudio's "Carbon 9.6 vs Argon 4.3 on SWE-bench" is actually **SWE-sweep** (a separate benchmark). No SWE-bench Verified score is published; none invented.
5. **Self-reported vs independent.** Google's launch table (16 rows, Carbon wins all 16 vs Argon, top score on 14) is self-reported; llm-stats states none is third-party-verified except TB4/TB-Science (third-party runs reported by Google). The AA figures (Index 59 #1, Omniscience 54, Briefcase 1609, Coding Agent Index 59, cost/task $7.76) are independent and anchor the scores.
6. **Coding is mixed, not uniformly leading.** Carbon leads security-coding + TB4 + SWE-sweep but trails Astra (FrontierSWE 2 65.5%), Opus (FrontierCode 56%, Coding Agent Index 62, OSWorld 87.2%) and ranks #4 on WebDev Arena — consistent with AA's "not leading in coding and knowledge work."
7. **Pricing/access.** Intro $2/$10 (cached $0.10) → standard $4/$20 (cached $0.20); no confirmed Carbon intro end date (AA charts use standard $4/$20). Gated: no public API/Zen/Vertex/OpenRouter; Fairwind cyber-defender rollout only — pricing is announced, not purchasable.
8. **Hallucination.** AA-Omniscience hallucination rate 11% is up from Argon's 4% but still 2nd-lowest overall (Opus 5.5-max and GPT-6 Astra-max are 50%); accuracy 58% (+10 over Argon).

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: Public internet research — four successful independent web searches plus primary/independent source verification (Artificial Analysis "new #1" article, llm-stats launch analysis + model aggregator, apimaster official Carbon-vs-Argon launch table, Google blog announcement via search snippets). The official blog.google body returned truncated (CSS only), so specs/access/pricing were corroborated via AA, llm-stats and apimaster; Google's launch table is self-reported and was weighted against independent AA figures. Unpublished specs (context/output/cutoff/modalities) are flagged, not fabricated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Carbon: our next frontier model (Google official announcement)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Gemini 4 Carbon is the new #1 on the Artificial Analysis Intelligence Index (independent AA)](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [Gemini 4 Carbon: Google's New Table Leader, Gated to Cyber Defenders (llm-stats launch analysis + official table)](https://llm-stats.com/blog/research/gemini-4-carbon-launch)
  - [Gemini 4 Carbon Benchmarks, Pricing & Context Window (llm-stats model aggregator)](https://llm-stats.com/models/gemini-4-carbon)
  - [Gemini 4 Carbon Announced: Price, Benchmarks & API (apimaster — official Carbon-vs-Argon table, Fairwind access)](https://apimaster.ai/blog/gemini-4-flash-carbon-api)
  - [Gemini 4 Carbon: Benchmarks, Pricing, and Access (developersdigest.tech developer guide)](https://www.developersdigest.tech/blog/gemini-4-carbon-developer-guide-2026)
  - [Gemini 4 Carbon: Pricing, Rollout, and Cyber-First Access (mindstudio)](https://www.mindstudio.ai/blog/gemini-4-carbon-pricing-rollout)
  - [Gemini 4 Carbon API: Status & Launch Alerts (evolink — public API pending)](https://evolink.ai/gemini-4-carbon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.