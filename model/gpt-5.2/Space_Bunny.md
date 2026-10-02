# GPT-5.2 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.2`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Availability caveat, stated up front:** GPT-5.2 was **deprecated from the OpenAI
> API on 2026-05-08** and **retired from ChatGPT on 2026-06-12**, with active
> conversations auto-migrating to the GPT-5.5 tier. GitHub Copilot deprecated it and
> GPT-5.2-Codex on 2026-06-05, retaining GPT-5.2 only for Copilot code review. The
> successor is **GPT-5.5** (with GPT-5.4 as the other migration target). This file is
> therefore a historical record; every figure below was published while the model was
> live, and integration guidance should point at GPT-5.5.

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's December 2025 flagship — the first GPT-5-family model to reach **400K context with full multimodal input**, and the strongest model OpenAI had shipped at that point. It shipped in three service tiers: **Instant** (low latency, no extended reasoning), **Thinking** (standard and extended chain-of-thought), and **Pro** (maximum quality, unlimited thinking budget), plus a same-day coding-specialised companion, **GPT-5.2-Codex**. OpenAI positioned the Pro and Thinking tiers as "the world's best models for assisting and accelerating scientists." Not a variant or alias of another entry in this dataset. Scored here on **GPT-5.2 Thinking**, the configuration Artificial Analysis tracks as `Xhigh` and the one carrying the published launch table.
- **Provider / access:** OpenAI API — **Responses API and Chat Completions**. ChatGPT (Instant, Thinking, Pro). Codex (CLI & IDE) via the Codex variant. Third-party: Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter, GitHub Copilot (code review only, post-2026-06-05).
- **Release / knowledge:** released **2025-12-10** on the API, announced **2025-12-11**. Knowledge cutoff **2025-08-31** — eleven months fresher than GPT-5.1's, and the single largest quality jump between the two flagships.
- **IDs:** `gpt-5.2`. Sibling IDs `gpt-5.2-pro`, `gpt-5.2-codex`. OpenRouter: `openai/gpt-5.2`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI model documentation, corroborated by docsbot and HokAI). **Discrepancy noted:** Artificial Analysis's GPT-5.2 (Xhigh) record lists **400k**, matching first-party, while its GPT-5.1 record lists 272k — so on this model the two sources agree.
- **Modalities:** **text and image in; text out**, with **full multimodal input** on the 400K window (HokAI describes this as the family's first 400K-plus-full-multimodal configuration). Reasoning: yes — tiered Instant / Thinking / Pro, with Pro running an unlimited thinking budget. Tool calling, function calling, web search, structured output, prompt caching, and native compaction (introduced with GPT-5.2-Codex, extended to the family).
- **Pricing (as of 2026-10-01, historical list price):** **$1.75 / MTok input, $14.00 / MTok output** (OpenAI pricing docs). Cache hit **$0.175**. Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$1.8725 / MTok**. No free tier. OpenAI's stated successor rationale names **reduced output token pricing** as one of the two main developer complaints GPT-5.5 addressed — $14.00 was the complaint.
- **Architecture:** proprietary, MoE-family transformer by HokAI's inference from routing cost patterns; OpenAI has not published a parameter count and no MoE claim is treated here as specification.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1 (agentic real-world work tasks, Elo): **813** (Artificial Analysis, GPT-5.2 Xhigh) — up from GPT-5.1's unreported figure; the same evaluation puts GPT-5.1 (High) at an Intelligence Index of 25 against GPT-5.2's 30.
- SWE-Lancer IC Diamond (real freelance-engineering tasks): **74.6%** (OpenAI launch table, GPT-5.2 Thinking) — GPT-5.1 Thinking 69.7%
- SWE-bench Pro (public, four languages, contamination-resistant): **55.6%** — **state of the art at launch** (OpenAI); GPT-5.1 Thinking 50.8%
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** for the base GPT-5.2. (GPT-5.2-**Codex** is reported by OpenAI as state-of-the-art on SWE-Bench Pro and Terminal-Bench 2.0, but those are Codex-variant figures and are not transferred to this model.)

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (GPT-5.2 Thinking) / **93.2%** (GPT-5.2 Pro) — OpenAI launch table. GPT-5.1 Thinking 88.1%.
- Artificial Analysis Intelligence Index: **30** (estimated, Xhigh, current v4.3.2 index family); GPT-5.1 (High) 25
- Humanity's Last Exam: **34.5%** (Thinking, no tools) / **45.5%** (Thinking, with search + Python); **36.6% / 50.0%** for Pro — OpenAI. Artificial Analysis independently records **38%**.
- CritPt: **12%** (Artificial Analysis)
- AA-Omniscience Index: **−15** (deeply negative — still wrong more often than right on knowledge it lacks)
- AA-LCR v1.1 (long-context reasoning): **83%** (Artificial Analysis)
- MMLU: **89.6%** (Thinking) / 89.5% (GPT-5.1)
- AIME 2025 (no tools): **100.0%** (Thinking and Pro) — OpenAI; GPT-5.1 Thinking 94.0%
- HMMT Feb 2025 (no tools): **99.4%** (Thinking) / **100.0%** (Pro)
- FrontierMath Tier 1–3 (with Python): **40.3%** — ahead of Claude Opus 4.5 at 37.6% and Gemini 3 Pro at 31.1%; GPT-5.1 Thinking 31.0%. **Tier 4: 14.6%** (GPT-5.1 12.5%).
- **ARC-AGI-1 (Verified): 86.2%** (GPT-5.1 72.8%) and **ARC-AGI-2 (Verified): 52.9%** (GPT-5.1 **17.6%**) — the single most dramatic generation-over-generation improvement in the launch table: a ~3× gain on the abstract-reasoning benchmark that GPT-5.1 had largely failed.
- Output speed **75.0 tokens/s** (Artificial Analysis Xhigh; HokAI cites 71 t/s), **TTFT 123.10s**, end-to-end **129.76s** — both latency figures are poor next to GPT-5.1's 37.19s, the cost of the xhigh thinking budget.
- LMArena Elo **1402**, **#3** as of May 2026, behind Claude Opus 4.6 (1418) and Gemini 3.1 Pro (1406) — with overlapping confidence intervals across the top tier, meaning OpenAI's own read was that selection should be driven by cost and latency rather than leaderboard position.

Coding:

- SWE-bench Verified: **80.0%** — OpenAI's new high, and explicitly *not plotted* on their release chart (Python-only, unlike SWE-bench Pro). GPT-5.1 Thinking 76.3%.
- SWE-bench Pro (public): **55.6%** — SOTA at launch (see above)
- SWE-Lancer IC Diamond: **74.6%** (see above)
- DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench / Aider Polyglot: **no verified public score found** for GPT-5.2.

Long context:

- AA-LCR v1.1: **83%** at the 400K window (Artificial Analysis) — the highest long-context reasoning figure in this dataset's GPT-5.1/GPT-5.2 pair, and up from GPT-5.1's 80%.
- No MRCR, RULER or GraphWalks measurement was found.

Vision / multimodal:

- CharXiv Reasoning (scientific figure questions, with Python): **88.7%** (OpenAI) — GPT-5.1 80.3%. OpenAI states visual reasoning on chart interpretation **roughly halved its error rate versus GPT-5.1**.
- LMArena human preference: Elo **1402**, #3 (May 2026).
- MMMU / MMMU-Pro / DocVQA: **no verified public score found** for GPT-5.2 (GPT-5.1's MMMU 84.2% is not transferred).

### Normalized scores (1–100)

- **Tool use: 76/100.** The strongest agentic evidence of the GPT-5.1/GPT-5.2 pair, and the clearest reason to have upgraded. **SWE-bench Pro 55.6% at launch SOTA** on the four-language, contamination-resistant harness; **SWE-Lancer IC Diamond 74.6%** on real freelance-engineering tasks; **GDPval-AA v2.1 Elo 813** on real-world professional work. All three gains over GPT-5.1 are substantial. Capped at 76 rather than higher for one specific reason: **no Terminal-Bench 2.1, Tau3-Banking, Tau2-Bench, Toolathon, MCP-Atlas or Claw-Eval figure exists for the base model.** OpenAI's Terminal-Bench 2.0 SOTA claim belongs to **GPT-5.2-Codex**, a different checkpoint, and is not transferable. 123.10s TTFT is a further practical drag on multi-step agent loops.
- **Reasoning: 88/100.** Frontier band on almost every axis, and the number that justifies the generation. **GPQA Diamond 92.4%** clears the methodology's 90% frontier threshold (93.2% on Pro), **AIME 2025 100.0%**, **HMMT 99.4%**, **MMLU 89.6%**, **FrontierMath Tier 1–3 40.3%** ahead of Claude Opus 4.5, **ARC-AGI-1 86.2%**, **HLE 34.5% without tools / 45.5% with search**, and an Intelligence Index of **30**. The decisive evidence is **ARC-AGI-2 at 52.9% against GPT-5.1's 17.6%** — a ~3× gain that closes the abstract-reasoning gap rather than papering over it. Held at 88 rather than 90+ by FrontierMath Tier 4 (**14.6%**), **CritPt 12%**, an **AA-Omniscience Index of −15**, and HLE still under 36% without tools.
- **Context window: 84/100.** **400,000 tokens in, 128,000 out**, the first GPT-5-family model to pair a 400K window with full multimodal input, and — unlike GPT-5.1 — **Artificial Analysis's own record agrees at 400k**. **AA-LCR v1.1 at 83%** is the strongest long-context reasoning measurement in this pair and sits at the top of the methodology's 200K–500K band. Not scored into the 85–94 band for 500K–1M because the window is 400K, and not into the 95–100 band because there is **no ≥98% retrieval result at 512K+** — no MRCR, RULER or GraphWalks figure exists.
- **Multimodal: 70/100.** **Text and image in; text out**, with full multimodal input on the 400K window. Scored at the top of the methodology's "+image in = 60–70" band on measured quality: **CharXiv Reasoning 88.7%** with Python, and OpenAI's statement that chart-interpretation error **roughly halved versus GPT-5.1** (80.3%). That is a real, measured, frontier-adjacent multimodal result on the hardest kind of image input — scientific figures. Capped at 70 by the methodology's own ceiling for image-only input: **no MMMU, MMMU-Pro or DocVQA figure exists for this model** (GPT-5.1's 84.2% MMMU is not transferred), and no audio or video input is documented, so the 75–90 and 90–100 bands are unreachable on the available evidence.
- **Coding: 84/100.** **SWE-bench Verified 80.0%** (OpenAI's new high) and **SWE-bench Pro 55.6%** at launch SOTA — the two benchmarks that matter most, on the Python-only and the four-language contamination-resistant harness respectively — plus **SWE-Lancer IC Diamond 74.6%**. Held at 84 rather than higher by the complete absence of DeepSWE, SciCode, Vibe Code Bench and LiveCodeBench figures for this model, and by SWE-bench Pro itself: 55.6% is a frontier *lead* on a hard benchmark, not a frontier *score*. The deeper agentic coding capability OpenAI claims sits in GPT-5.2-Codex.
- **Cost efficiency: 62/100.** **$1.75 / MTok input, $14.00 / MTok output**, cache hit $0.175, Artificial Analysis blended rate **$1.8725 / MTok**. This sits just above the methodology's **$3/$15 ≈ 60** anchor — the output rate is higher than that anchor's and the input rate is lower, netting out slightly above 60 on the printed card. The 90% cache discount helps on repeated context. Two documented offsets on the other side, both from OpenAI's own successor rationale: **$14.00 output was one of the two main developer complaints GPT-5.5 was built to fix**, and **123.10s TTFT** on a reasoning model means output tokens dominate the bill. Scored on list price at the time it was live, not on any successor's discount.
- **Overall Score: 80/100.** (76 + 88 + 84 + 70 + 84) / 5 = 80.4 → **80**. Best fit, stated historically: a **frontier general-purpose model for scientific reasoning and multi-language software engineering at 400K context**, where the ARC-AGI-2 and FrontierMath gains over GPT-5.1 are worth the price. **Today its practical best fit is none** — deprecated 2026-05-08, ChatGPT-retired 2026-06-12, successor **GPT-5.5**. What this record is worth now is the baseline: it shows what eleven months of knowledge-cutoff freshness bought — GPQA 88.1% → 92.4%, ARC-AGI-2 17.6% → 52.9%, GDPval Elo 813 — and it shows what OpenAI itself judged insufficient, at $14.00 output and 123s TTFT.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.2 launch post (`openai.com/index/introducing-gpt-5-2/`), which carries the full GPT-5.2 Thinking / Pro / GPT-5.1 Thinking comparison tables, OpenAI's GPT-5.2-Codex announcement (used only to establish which Terminal-Bench claim belongs to which checkpoint), OpenAI API model documentation and pricing pages, Artificial Analysis's GPT-5.2 (Xhigh) model record and the GPT-5.2 vs GPT-5.1 comparison table, docsbot.ai's spec comparison, HokAI's model record (source of the deprecation timeline, the FrontierMath cross-model comparison and the LMArena Elo), and There's An AI For That's benchmark profiles. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; every launch-table figure is labelled vendor-reported, and Codex-variant Terminal-Bench claims are explicitly excluded from this model.
- Future sources: add a new file next to this one, e.g. `GPT_5_2_Codex.md` or `GPT_5_5.md`, using the same headings — the Pro tier and the Codex variant are distinct enough to warrant their own files.