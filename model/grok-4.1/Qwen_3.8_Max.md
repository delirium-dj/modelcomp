# Grok 4.1 — findings by Qwen 3.8 Max

- Source: xAI (`grok-4.1`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's **November-17-2025 conversational flagship** — a chat/personality refresh (not an agentic or coding model) that debuted at **#1 on LMArena's Text Arena (1483 Elo, Thinking mode "quasarflux")**, a 31-point margin over the nearest non-xAI model, with its **non-thinking mode ("tensor") at #2 (1465 Elo)** — which xAI says "surpasses every other model's full-reasoning configuration." Adds **live X data**, a **Thinking/Non-Thinking switch**, and reduced hallucinations. **Superseded by Grok 4.2/4.3 and retired as an API model.**
- **Provider / access:** xAI — consumer surfaces (grok.com, 𝕏, iOS/Android) plus an **xAI API route at $3/$15** (LLM-Stats); **not on OpenCode Zen** (`noFreeId: true`). Proprietary / closed weights. Two modes: Thinking (quasarflux) and Non-Reasoning (tensor).
- **Release / knowledge:** Released **November 17, 2025**, after a **silent rollout Nov 1–14** with continuous blind pairwise evals on live traffic; knowledge cutoff not published.
- **IDs:** `xai/grok-4.1`; LLM-Stats `grok-4.1-thinking-2025-11-17`; code names **quasarflux** (Thinking) / **tensor** (non-reasoning). **No Artificial Analysis page** (AA `grok-4-1` → 404 — a consumer model without the first-party-API benchmarking AA needs).
- **Context window:** **Disputed** — LLM-Stats lists **256K in / 8K out via xAI**, while the meta cites a **1M BenchLM spec**, and "xAI never documented a window." Scored conservatively on the sourced 256K (⚠ flagged).
- **Modalities:** **Text in/out; image input** (LLM-Stats: multimodal text+image; meta: "image in via consumer app"). No video/audio; text-only output.
- **Pricing (as of 2026-10-26):** **$3.00 / $15.00** per 1M in/out via xAI (LLM-Stats) — premium flagship tier, largely bundled into the consumer **Grok subscription**. ⚠ The meta claims "no public API price," yet LLM-Stats documents an xAI API price and the meta's own tradeoff calls it "retired as an API model" (internally inconsistent). Superseded/retired.
- **Architecture:** Closed weights; parameters undisclosed. A conversational post-training refresh of the Grok 4 line emphasizing preference alignment, emotional intelligence, creative writing, and hallucination reduction, with a Thinking/Non-Thinking switch and live X search.

### Raw benchmarks found

> Independent anchor: **LMArena** (neutral, crowdsourced human-preference). Vendor (xAI): silent-rollout pairwise preference, EQ-Bench3, Creative Writing v3, FActScore / hallucination-rate. **No Artificial Analysis page (404)** and **no agentic / coding / analytic-reasoning benchmarks** (GPQA / AIME / SWE-bench / Terminal-Bench) were published — Grok 4.1 was positioned as a *chat* flagship, so the usual reasoning/coding harnesses do not cover it. Superseded by Grok 4.2/4.3.

Independent (neutral harness):

- **LMArena Text Arena: #1 overall, 1483 Elo (Thinking / "quasarflux")** — a commanding **31-point** margin over the highest non-xAI model at the time. **Non-reasoning mode ("tensor"): #2 at 1465 Elo** using **no thinking tokens**, which xAI notes "surpasses every other model's full-reasoning configuration on the public leaderboard." Grok 4.1 "significantly surpasses Grok 4" (which ranked #33). This is the model's strongest — and essentially only — neutral-harness signal.

Vendor (xAI):

- **Silent rollout (Nov 1–14, 2025):** in blind pairwise evals on live production traffic, Grok 4.1 was **preferred 64.78% of the time** vs the previous production Grok.
- **EQ-Bench3** (emotional intelligence; 45 roleplay scenarios, LLM-judged with Claude Sonnet 3.7 as prescribed judge) and **Creative Writing v3** (32 prompts × 3 iterations, rubric + battle Elo) — xAI reports top leaderboard standings (charts; "working with the author(s) to get the number on the leaderboard").
- **Reduced hallucinations:** lower hallucination rate on a stratified sample of production info-seeking queries plus **FActScore** (500 biography questions), evaluated on the non-reasoning model with web-search tools. Live X data / search integration.

> Provenance: **LMArena (1483 Elo #1 Thinking / 1465 #2 non-thinking)** is independent and neutral; the 64.78% preference, EQ-Bench3, Creative Writing v3, and FActScore are **vendor-run**. Crucially there are **no published analytic-reasoning (GPQA/AIME/HLE), agentic (Terminal-Bench/τ²), or coding (SWE-bench) numbers** — the model was tuned and evaluated for conversational quality, so those rubric dimensions rest on an *absence of evidence* rather than strong results.
> Meta verification: **two discrepancies flagged.** (1) **Pricing:** meta says "no public API price — consumer subscription only," but **LLM-Stats documents $3.00/$15.00 via xAI**, and the meta's own tradeoff calls it "retired as an API model" (internally inconsistent) → an xAI API route did exist. (2) **Context:** meta cites **1M (BenchLM spec)** but LLM-Stats lists **256K/8K via xAI** and "xAI never documented a window" → disputed; scored on 256K. Verified true: **Nov-2025 launch ✓** (Nov 17), **Thinking + LMArena #1 1483 Elo ✓**, live X data ✓, Thinking/Non-Thinking switch ✓, `noFreeId` / not on Zen ✓, superseded by 4.2/4.3 ✓, text+image (image via consumer app) ✓.

### Normalized scores (1–100)

- **Tool use: 74/100.** Has **live X data + web-search tools** for info-seeking (the non-reasoning mode is search-equipped), but Grok 4.1 is **not an agentic tool-use model** — no Terminal-Bench, τ²-bench, or AA-Briefcase results — and it is a consumer chat product now retired as an API model. Search-augmented chat, not autonomous tooling.
- **Reasoning: 78/100.** The **Thinking mode is LMArena Text Arena #1 (1483 Elo)** and the **non-thinking mode #2 (1465)** — a genuine, strong *independent human-preference* signal, reinforced by reduced hallucination (FActScore) and EQ-Bench3. But LMArena measures conversational preference, **not analytic reasoning** — there are **no GPQA/AIME/HLE/FrontierMath numbers** — and the standing dates from Nov 2025 and has since been surpassed. Strong-but-narrow and preference-based.
- **Context window: 78/100.** **Disputed** — scored on the sourced **256K** (LLM-Stats via xAI); the meta's **1M** rests on an unsourced BenchLM spec and xAI never documented a window. On 256K it sits in the mid band; were 1M confirmed it would be ~85. (⚠ discrepancy.)
- **Multimodal: 76/100.** Fundamentally a **text conversational** model; **image input** exists but (per meta) primarily **via the consumer app**, with no video/audio and text-only output. LLM-Stats lists text+image, but the API multimodal story is thin — just below the standard image-input tier (78).
- **Coding: 73/100.** **No published coding benchmarks** — the launch material centers on emotional intelligence, creative writing, and hallucination reduction, not code. xAI's coding focus sat in the Grok 4.x-fast / Codex lines, not this chat flagship. LMArena includes some coding prompts, but there is no dedicated SWE-bench / Terminal-Bench / LiveCodeBench figure. Weak / unverified.
- **Cost efficiency: 62/100.** **$3.00/$15.00** via xAI — premium flagship pricing (the same tier as Grok 4), largely bundled into the consumer **Grok subscription**, and the model is **superseded / retired**. Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 74 + Reasoning 78 + Context 78 + Multimodal 76 + Coding 73 = 379 / 5 = 75.8 → 76. Best fit: a landmark **conversational / personality** model — LMArena #1, strong EQ and creative writing, live X data, low hallucination — for chat-centric consumer use in its era; but it is **superseded (Grok 4.2/4.3), retired as an API model, and unverified on agentic / coding / analytic reasoning**, so it is reference/history rather than a deployment choice. **Divergence note:** curated queue 78.9 vs my 76 → **−2.9**. The curated score reflects its **launch-peak LMArena #1** fame; my rubric weights Tool / Reasoning / Context / Multimodal / **Coding**, where Grok 4.1 is a chat specialist with **no coding or analytic-reasoning evidence**, a **disputed context**, consumer-gated image input, and deprecation — so the honest current-rebased score sits ~3 points below the launch-era curation. (Same Overall as grok-4's 76 but a narrower gap than grok-4's −4.6, because Grok 4.1's LMArena #1 is a stronger independent signal than grok-4's below-median AA Index.)

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (xAI official **"Grok 4.1"** launch post — LMArena 1483/1465 Elo, silent-rollout 64.78% preference, EQ-Bench3, Creative Writing v3, FActScore / hallucination; **LLM-Stats** `grok-4.1-thinking-2025-11-17` for $3/$15 pricing, 256K/8K context, text+image, TTFT 1.20s, Nov-17-2025 release; AA `grok-4-1` attempted → 404). **Flagged two meta discrepancies** (API pricing; context 256K vs 1M). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
