# Pixel Canary (Callstack Apex) — findings by Qwen 3.8 Max

- Source: Callstack (`pixel_canary`; id `callstack/apex`; stealth alias `pixel-canary` on Vercel AI Gateway)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Callstack's Apex — revealed from the anonymous Vercel AI Gateway stealth model "Pixel Canary" — is a closed, React Native / Next.js-specialized agentic coding model: a domain post-train on an open-weight Qwen foundation (originally Gemma 4). On its home turf it is impressive, tying GPT-6 Astra (high effort) on Vercel's Next.js Agent Evals (28/31, 30/31 with docs), scoring frontier-level on React Native Evals, and running ~6× faster at 85% lower cost than Claude Opus 5.5 on a recorded review. But the ENTIRE evidence base is two framework evals plus one anecdote — there is no SWE-bench, Terminal-Bench, LiveCodeBench, GPQA, or AIME row — so general capability is unproven. 262K context and image input are real pluses. Scored Overall 72 (div +5.2 vs curated 66.8).

## Model card

- **Name:** Pixel Canary (product name: Apex, by Callstack)
- **Short description:** A cost-effective, specialized agentic coding model for everyday agent work with particular strength in React Native and Next.js — "frontier-level where React runs." The first of a planned "Apex family" of domain-specialized coding models (native iOS/Android next).
- **Provider / access:** Closed weights. Available via the **Apex API** (apex.callstack.com), **Vercel AI Gateway** (the stealth preview channel; GA availability "following soon"), and **commercial self-hosting** under a Callstack agreement. Usable inside existing coding tools (Claude Code, Codex — `/model` → Pixel Canary, or `stealth/pixel-canary`). Free for a limited time during stealth (no ZDR; prompts may be used for training).
- **Release / knowledge:** Released anonymously as "Pixel Canary" on Vercel AI Gateway in late September 2026 (served 200B+ tokens over 5 days of stealth); revealed as Apex and made **generally available October 1, 2026**.
- **IDs:** id `callstack/apex`; stealth aliases `pixel-canary` / `stealth/pixel-canary` (Vercel AI Gateway). No Artificial Analysis page (closed, gateway-served — not independently measured).
- **Context window:** **262,144 (256K)** total; **131,072 max output** (gateway-declared per Vercel's model page).
- **Modalities:** Text + **image** in → text out. Configurable / adjustable reasoning effort.
- **Pricing:** **$0.50 / 1M input, $0.20 cached, $3.00 / 1M output** (GA direct API, checked Sep 30 2026). Output is 70% cheaper than GPT-6 Sol ($10) and 85% cheaper than Claude Opus 5.5 ($20). Free during the stealth window.
- **Architecture:** A **domain post-train** — Callstack's curated React Native dataset (docs, source, public APIs, libraries, repo-grounded conversations) plus its own training/eval/deployment pipeline applied to an **open-weight foundation: originally Gemma 4, now Qwen**. Not a from-scratch model; weights are closed and self-host is commercial-only.

### Raw benchmarks found

> **Provenance:** ENTIRELY Callstack-vendor and Vercel framework evals. There is NO general coding or reasoning benchmark (no SWE-bench, Terminal-Bench, LiveCodeBench, GPQA, AIME). Two framework evals plus one recorded comparison are the whole evidence base (meta tradeoff confirmed). No AA measurement.

- **Agent / tool use:**
  - Vercel **Next.js Agent Evals**: Pixel Canary completed **28 of 31 tasks**, matching **GPT-6 Astra at high effort**; **30 of 31** when Next.js documentation was supplied via AGENTS.md. Tasks covered App Router migrations, data fetching, caching, and image/font optimization.
  - Runs inside coding agents (Claude Code, Codex); Callstack's **agent-device** tool lets the agent operate a mobile app and verify its own work.
  - Community speed anecdote: Pixel Canary finished a task in 105 min vs Space Bunny's 398 min.
  - NO Terminal-Bench / GDPval / AutomationBench / AA-Briefcase result exists.
- **Reasoning / knowledge:** Configurable reasoning effort is supported, but NO reasoning or knowledge benchmark is published (no GPQA / AIME / MMLU). The Qwen foundation implies competence, but it is unverified for this post-train.
- **Coding:**
  - **React Native Evals** (rn-evals.vercel.app): "frontier-level" performance across navigation, animations, async state, lists, and React Native APIs (meta records 87.8%).
  - Next.js: 28/31 → 30/31 (see Agent/tool use) — an external Vercel benchmark where it ties GPT-6 Astra.
  - Recorded code review (Expensify React Native repo): Apex delivered comparable outcomes to Claude Opus 5.5 in **2m16s for $0.09** vs Opus 5.5's **13m30s at $0.60** — 85% lower cost, ~6× faster (ONE recorded run, launch-day pricing).
  - NO SWE-bench / LiveCodeBench / Terminal-Bench. The evidence is domain-specific (React / React Native / Next.js) and largely self-published.
- **Long context:** 262K window; no long-context retrieval/reasoning benchmark published.
- **Speed / cost:** $0.50/$3.00 (cached $0.20); output 70–85% cheaper than GPT-6 Sol / Opus 5.5; ~6× faster and 85% cheaper on the recorded review; Callstack's standout claim is frontier-level React quality "at 1/13th the cost." No AA Speed/Cost page.

> **Meta-verification:** meta.json independently checked, not inherited. CONFIRMED: Pixel Canary = Callstack Apex (revealed from Vercel AI Gateway stealth); closed; 262K/131K-out; text+image in → text out; configurable reasoning; $0.50/$0.20/$3.00 GA pricing; Next.js 28/31 (30/31 with docs) matching GPT-6 Astra; React Native Evals frontier-level (87.8%); React/Next.js specialization; Qwen-based domain post-train (originally Gemma 4). FLAGGED: (1) The evidence base is only two framework evals (Vercel Next.js + Callstack React Native) plus one anecdotal review run — NO general benchmark exists, so scores reflect narrow, largely self-published domain evidence. (2) "Free while stealth" was time-limited; GA is paid. (3) It is a post-train on open-weight Qwen, not a from-scratch model. (4) Closed weights; self-host is commercial-agreement-only. (5) No AA page → zero independent measurement. (6) "Beats frontier models" is bounded to Callstack's OWN framework evals. Kept DISTINCT from space-bunny (an anecdotal comparator and separate queue model) and from the Qwen/Gemma base models — Apex is Callstack's post-train, not reattributed to its foundation.

### Normalized scores (1–100)

- **Tool use: 70/100.** Genuine agentic coding — it operates inside Claude Code/Codex, uses agent-device self-verification, and ties GPT-6 Astra (high effort) on Vercel's Next.js Agent Evals — but the evidence is domain-narrow with no general agentic benchmark (no Terminal-Bench / GDPval).
- **Reasoning: 66/100.** Configurable reasoning on a Qwen foundation, but zero reasoning/knowledge benchmarks are published; general reasoning is unverified for this post-train.
- **Context window: 78/100.** 262,144 (256K-class) with 131,072 max output, gateway-declared — a solid, well-documented window.
- **Multimodal: 74/100.** Text + image input (confirmed by Vercel's spec and meta) → text out; image input is a real capability but is unbenchmarked and secondary for a coding model (above text-only, below benchmarked image models).
- **Coding: 72/100.** Frontier-level on React Native Evals and ties GPT-6 Astra on Vercel's Next.js eval at ~1/13th frontier cost, but with no SWE-bench / LiveCodeBench / Terminal-Bench the entire base is two (largely self-published) framework evals — strong in-domain, unproven generally.
- **Cost efficiency: 84/100.** $0.50/$3.00 (cached $0.20) is 70–85% cheaper on output than GPT-6 Sol / Opus 5.5, ~6× faster and 85% cheaper on a recorded task, and free during stealth; tempered by the $3.00/M absolute output price and closed / commercial-self-host access. (Scored but NOT counted toward Overall.)
- **Overall Score: 72/100.** Half-up mean of the five quality dims (70+66+78+74+72)/5 = 72.0. Divergence **+5.2** vs the curated queue value 66.8 — driven by the strong spec-based dims (262K context, image input) and the frontier-tying in-domain coding, against the curated heavier discount for the two-eval-only, largely self-published evidence base and closed nature. Cost efficiency excluded from the mean per methodology.

---

## Signature

- **Provided by:** Qwen 3.8 Max (`qwen/qwen-3.8-max`)
- **Method:** Fresh independent public web research on 2026-10-30 — Callstack's official Apex GA blog (identity, Next.js/React Native evals, pricing, code-review comparison, Qwen/Gemma base), Vercel AI Gateway changelog and model-page specs (262K/131K, image input, reasoning), aiidelist spec summary, and launch coverage; ≥3 independent searches/fetches. meta.json verified against primary sources, not inherited; the stealth→GA identity, base-model lineage, and evidence-base limits were confirmed. No peer findings files read (zero-influence rule).
- **Future sources:** an Artificial Analysis page or independent measurement; general coding benchmarks (SWE-bench Verified, LiveCodeBench, Terminal-Bench); reasoning/knowledge evals (GPQA, AIME, MMLU); a multimodal (image-input) benchmark; the promised native iOS/Android Apex-family models.
