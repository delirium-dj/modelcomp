# Mercury 2.5 — findings by Qwen 3.8 Max

- Source: Inception Labs (`inception/mercury-2.5`; AA `mercury-2-5` — page **exists but Intelligence / Speed / Cost / Verbosity ALL N/A "No publicly available API"**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Mercury 2.5** is a **real, named, dated proprietary model** — Inception Labs' **September-2026 diffusion LLM (dLLM)** (released **2026-09-08**), billed by the lab as *"the most capable diffusion LLM on the market"* and *"the largest diffusion language model ever trained."* It is a **parallel-decoding / masked-diffusion** architecture rather than autoregressive, which is the source of its headline trait — **780–1,107 tokens/sec with sub-300 ms (median ~170 ms) TTFT** on NVIDIA GPUs — but **speed is NOT a scored dimension** in this dataset. Substance for scoring: **text-only** (AA explicitly: *"does not support image input … not multimodal"*), **260K context / 65,536 max output**, **tunable reasoning**, **parallel tool calls**, schema-aligned JSON, **$0.20 / $0.75 per M** (blended ~$0.13; launch **80 %-off $0.04 / $0.15**), proprietary (params undisclosed), **1 API provider** (Inception / Baseten / OpenRouter). **It is closed to new users after 2026-10-19** (Mercury 3 is the successor), and **Artificial Analysis shows every quality metric as N/A "No publicly available API"** — so there is **no independent Intelligence Index, no AA benchmark cell, and no Vals/benchlm measurement** of Mercury 2.5. The **entire quality signal is vendor**: a **τ³-bench (tau3) 96.0 %** self-report (its lone hard number), a claimed **"40 % intelligence increase over Mercury 2,"** and a **comparability claim** to *"cost-optimized frontier models"* **GPT-5.6 Luna (Low) / Gemini 3.5 Flash-Lite / Claude Haiku 4.5**. The lab's own `meta` tradeoff is blunt: **"no code benchmark at all."** Scored with **heavily-discounted vendor evidence** and explicit gaps; **Overall 58 (div +4.2)** — a latency champion whose *quality* is essentially **unmeasured**, so the score rests on one elite-but-unverified agentic number, a mid-tier vendor comparability claim, genuine 260K context, and the hard **text-only** cap.

## Model card

- **Vendor / type:** Inception Labs — **proprietary diffusion LLM (dLLM)**; parallel / masked decoding (not autoregressive). **Largest diffusion LM ever trained** (lab claim). Parameters **undisclosed**.
- **Lifecycle:** released **2026-09-08**; **closed to new users 2026-10-19**; **Mercury 3** (Oct 19 2026) is the successor. Also spawned **Mercury Voice** (TTFT <170 ms) and **Mercury Router** previews.
- **Context:** **260,000** total; **65,536 max output**.
- **Modalities:** **text in → text out ONLY** (AA FAQ: no image, not multimodal).
- **Reasoning:** **yes** — tunable reasoning / chain-of-thought (AA profiles the reasoning version; a non-reasoning variant may exist).
- **Capabilities:** parallel tool calls, schema-aligned JSON.
- **Price:** **$0.20 in / $0.75 out per M** (Inception list, 90 % cache discount, blended ~$0.13); **launch promo $0.04 / $0.15** still shown on OpenRouter / Vercel. `noFreeId: true`.
- **Providers:** Inception API, Baseten, OpenRouter (AA counts **1**).
- **Positioning (vendor):** latency champion for **search/RAG agents, voice agents, and coding *sub*-agents** (context compaction, routing, MCP tool search) — **support-calls roles, not primary code generation.**

### Raw benchmarks found

> Provenance: **Artificial Analysis `mercury-2-5`** — page exists but **Intelligence Index / Speed / Cost-per-task / Verbosity ALL "N/A — No publicly available API"**; **no AA evaluation cell** is populated (model closed to new users). **Inception official blog** "Introducing Mercury 2.5" (Oct 29 2026) + curated `meta`. **Every quality figure below is VENDOR self-report** — none independently reproduced. Competitor comparables (Luna / Flash-Lite / Haiku 4.5) are named only as the lab's positioning target, **NOT** credited as Mercury's own scores.

**Agentic / tool use (vendor)**
- **τ³-bench (tau3-bench) 96.0 %** — the **only hard number** published for Mercury 2.5 (`meta` standout). τ³ is an agentic multi-turn tool-use benchmark; 96 % is **elite-tier if accurate**, but it is a **single self-reported figure with zero independent reproduction**, so it is discounted.
- **Parallel tool calls + schema-aligned JSON** (vendor capability claim, unbenchmarked).

**Reasoning / intelligence (vendor, qualitative)**
- **"40 % increase in intelligence from Mercury 2"** (relative lab claim, no absolute benchmark).
- **"Comparable to cost-optimized frontier models like GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, and Claude Haiku 4.5"** — a **budget/fast-tier** comparability claim; **no GPQA / AIME / HLE / MMLU / LiveCodeBench number** is published for Mercury 2.5.

**Production / latency evidence (vendor testimonials — speed, NOT a scored dim)**
- **1,107 tok/s** headline; OpenCall voice agents: P99 minutes → ~1 s, P50 0.4 s → <0.2 s; Augment Code context compaction latency **−82 %** (150 s → 27 s), cost **−90 %**. These measure **speed/cost on supporting tasks**, not raw intelligence or code quality.

**Coding**
- **None.** `meta` tradeoff verbatim: **"no code benchmark at all."** Used in coding *pipelines* (compaction/routing/tool-search) but never scored on SWE-bench / LiveCodeBench / Terminal-Bench.

**Not measured (no AA page values, no independent run)**
- **AA Intelligence Index v5.0 · Speed · Cost-per-task · Verbosity: ALL N/A.** **No Vals / benchlm / LMArena cell found** for the `mercury-2.5` id.

### Normalized scores (1–100)

- **Tool use: 70/100.**
- **Reasoning: 58/100.**
- **Context window: 68/100.**
- **Multimodal: 50/100.**
- **Coding: 45/100.**
- **Cost efficiency: 78/100.**
- **Overall Score: 58/100.**

> **Overall = half-up mean of the FIVE quality dims** (70 + 58 + 68 + 50 + 45) / 5 = **291 / 5 = 58.2 → 58**. Cost efficiency is recorded but **NOT counted**. Curated `average.md` = **53.7** → **div +4.2**. (Tool 70 credits the elite τ³ 96.0 % but discounts it heavily for being a lone unverified vendor number; Coding 45 reflects the *explicit* "no code benchmark at all"; Multimodal pinned at the **text-only floor**.)

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `mercury-2-5`** — proprietary dLLM, released **Sep 8 2026**, text-in/text-out, **260K ctx**, **$0.20/$0.75** blended ~$0.13 (90 % cache), **reasoning model: Yes**, **params undisclosed**, **1 API provider**, **Intelligence Index / Speed / Cost-per-task / Verbosity ALL N/A "No publicly available API"** — no AA eval cell; **Inception official blog "Introducing Mercury 2.5"** (Oct 29 2026) — *"most capable diffusion LLM on the market … largest diffusion language model ever trained,"* **"40 % increase in intelligence from Mercury 2,"** *"comparable to … GPT-5.6 Luna (Low), Gemini 3.5 Flash-Lite, and Claude Haiku 4.5,"* **1,107 tok/s**, **260K ctx**, **$0.20/$0.75** (launch 80 %-off **$0.04/$0.15**), **tunable reasoning / parallel tool calls / schema JSON**, production testimonials OpenCall (~170 ms P50) & Augment Code (−82 % latency / −90 % cost on compaction); **`meta`** — **τ³-bench 96.0 %** (standout), **"no code benchmark at all"** (tradeoff), **closed to new users 2026-10-19**, **Mercury 3 successor**, `noFreeId: true`.)
- Future sources: this becomes far more certain if an independent tracker (**AA / Vals / benchlm / LMArena**) measures Mercury 2.5 under its id once API access permits, or if Inception publishes an **absolute** reasoning/coding benchmark table (GPQA / HLE / SWE-bench / LiveCodeBench) rather than a relative *"40 % over Mercury 2"* claim and third-party comparability names. **Guards applied:** (1) **all quality figures are VENDOR** — **AA shows every metric N/A** and no independent reproduction exists, so confidence is **low** and the τ³ 96.0 % is treated as an **unverified cherry-pick** (Tool 70, not 90); (2) the comparability names **GPT-5.6 Luna (Low) / Gemini 3.5 Flash-Lite / Claude Haiku 4.5** are **positioning targets, NOT Mercury scores** — do **not** import their benchmarks; (3) **speed (1,107 tok/s / sub-300 ms TTFT) is NOT a scored dimension** and cannot lift the Overall mean — the model's marketing is latency-led while its *quality is unmeasured*; (4) **text-only → Multimodal = 50 floor** (AA FAQ confirms no image input); (5) **Coding 45** reflects the lab's own *"no code benchmark at all"* — production coding-*pipeline* usage (compaction/routing) is **not** code-generation capability; (6) **do NOT cross-credit Mercury 2 (predecessor) or Mercury 3 (successor) numbers** onto this label; (7) **Cost 78 recorded but NOT counted**; `noFreeId` — the "free tier" pitch is a 100 M-token signup grant, not $0. **Overall rests on a strong single agentic signal + genuine 260K context, offset by absent reasoning/coding evidence.**
