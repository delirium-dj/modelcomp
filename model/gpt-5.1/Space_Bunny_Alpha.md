# GPT-5.1 — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November 2025 flagship — a usability-driven revision of GPT-5 rather than a raw capability jump. It replaced GPT-5's opaque router with explicit **Instant** and **Thinking** variants plus a new default **"no reasoning"** mode, added **adaptive reasoning** that spends thinking tokens only where they help, **24-hour prompt caching**, and **native `apply_patch` and shell tools**. OpenAI describes it as handling complex agentic and coding workloads while responding faster on everyday tasks. It held the flagship slot for just under a month before GPT-5.2 arrived on 2025-12-11. Not a variant or alias of another entry in this dataset. Scored here on the **`high` / Thinking** configuration, which is the strongest published variant and the one Artificial Analysis tracks.
- **Provider / access:** OpenAI API — **Responses API and Chat Completions**. Also ChatGPT (Instant & Thinking) and Codex (CLI & IDE). Third-party: Azure OpenAI, AWS Bedrock, Google Vertex AI, OpenRouter.
- **Release / knowledge:** released **2025-11-12** on the API, announced **2025-11-13**. Knowledge cutoff **2024-09-30** — nine months older than GPT-5.2's, and the most consequential regression in this model card.
- **IDs:** `gpt-5.1`. No separate dated snapshot ID is in circulation for the base model. OpenRouter: `openai/gpt-5.1`.
- **Context window:** **400,000 tokens input, 128,000 tokens max output** (OpenAI API documentation, corroborated by docsbot and OpenAI's model page). **Discrepancy noted:** Artificial Analysis's GPT-5.1 (High) record lists **272k**, materially below the first-party 400K. The first-party figure is used here; the AA number is most likely a measured effective limit rather than the advertised ceiling.
- **Modalities:** **text and image in; text out**, plus **image generation** for product mockups and visual handoffs — a capability the GPT-5 nano tier does not have. Reasoning: yes, adaptive, with `minimal` / `low` / `medium` / `high` effort and a default no-reasoning mode. Native `apply_patch` and shell tools; tool calling, function calling, web search, structured output / JSON schema, prompt caching and computer use all supported. No documented audio or video input; PDF input is not documented for this model.
- **Pricing (as of 2026-10-01):** **$1.25 / MTok input, $10.00 / MTok output** (OpenAI pricing docs). Cache hit **$0.125** (90% off). Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$1.3375 / MTok**. No free tier. Pricing is identical to GPT-5, so GPT-5.1's pitch was latency and control, not cost.
- **Architecture:** proprietary. Parameter count not disclosed. HokAI's MoE claim for the GPT-5 family (2–5T total parameters inferred from routing cost patterns) is inference from price behaviour, not an OpenAI publication, and is not treated as specification.

### Raw benchmarks found

Agent / tool use:

- SWE-Lancer IC Diamond (real freelance-engineering tasks): **69.7%** (OpenAI GPT-5.2 launch comparison table, GPT-5.1 Thinking)
- GDPval (knowledge-work tasks, wins or ties): **38.8%** (OpenAI launch table, GPT-5.1 Thinking)
- AssetOpsBench (asset-management agentic operations, official leaderboard, 2025-11-29): **62.9%**
- ITBench (agentic, official leaderboard, 2025-12-02): **55.2%**
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** for GPT-5.1 at any effort level.

Reasoning / knowledge:

- GPQA Diamond (no tools): **88.1%** (OpenAI launch table)
- Humanity's Last Exam: **25.7%** (no tools) / **42.7%** (with search + Python) — OpenAI
- Artificial Analysis Intelligence Index: **25** (estimated, `high` variant, current v4.3.2 index family)
- Artificial Analysis Intelligence Index — **CritPt 5%**, **AA-Omniscience −15** (deeply negative: on knowledge it lacks, it is wrong more often than right), **AA-LCR v1.1 80%**
- MMLU: **89.5%** (OpenAI)
- ARC-AGI-1 (Verified): **72.8%**; **ARC-AGI-2 (Verified): 17.6%** (OpenAI). The ARC-AGI-2 number is the model's weakest frontier-adjacent result and the one GPT-5.2 fixed most dramatically.
- FrontierMath Tier 1–3: **31.0%**; Tier 4: **12.5%** (with Python) — OpenAI
- AIME 2025 (no tools): **94.0%**; HMMT Feb 2025 (no tools): **96.3%** — OpenAI. (There's An AI For That records the same model's AIME 2025 as **94.6%**; both are vendor-reported, likely different thinking budgets.)
- Output speed **105.1 tokens/s**, TTFT **37.19s**, end-to-end **41.94s** (Artificial Analysis, OpenAI first-party API)

Coding:

- SWE-bench Verified: **76.3%** (OpenAI launch table). There's An AI For That's independent evaluation records **74.9%**; both figures are in circulation and the OpenAI number is used here.
- SWE-bench Pro (public, four languages, contamination-resistant): **50.8%** (OpenAI)
- Aider Polyglot: **88.0%** (OpenAI, diff-based multi-language assessment)
- SWE-Lancer IC Diamond: 69.7% (see above)
- DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench: **no verified public score found**

Long context:

- AA-LCR v1.1 (long-context reasoning): **80%** (Artificial Analysis) — one of the stronger long-context retrieval results at this price point, and the main reason the context score sits high in its band.
- No MRCR, RULER or GraphWalks measurement was found.

Vision / multimodal:

- MMMU: **84.2%** (OpenAI) — a notably strong result for an image-in/text-out model; GPT-5 nano manages 57.6% on the same benchmark.
- CharXiv Reasoning (scientific figure questions, with Python): **80.3%** (OpenAI)
- LMArena Elo (human preference): GPT-5.1 is not separately ranked on the current board; the family comparison available places GPT-5.2 at 1402.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid upper-mid agentic: **SWE-Lancer IC Diamond 69.7%** on real freelance-engineering tasks, AssetOpsBench 62.9% and ITBench 55.2% on independent agentic leaderboards, GDPval 38.8% wins-or-ties on knowledge work, plus native `apply_patch` and shell tools that remove a parsing layer other models need. Held to 68 rather than pushed higher because the score cannot be anchored on Terminal-Bench 2.1, Tau3-Banking, Toolathlon or MCP-Atlas at all — **no verified figure exists for any of them** — and because SWE-bench Pro at 50.8% is the multi-language, contamination-resistant version of the coding benchmark, where the model is mid-tier rather than leading.
- **Reasoning: 76/100.** Above the methodology's mid-band and short of the frontier band, with the reasoning that GPT-5.1's headline is strong-but-not-leading. **GPQA Diamond 88.1%** sits just under the 90% frontier threshold, **AIME 2025 94.0%** and **HMMT 96.3%** are frontier-grade competition maths, **MMLU 89.5%** is solid, and **AA-LCR 80%** shows genuine long-context reasoning. Capped by **HLE 25.7% without tools**, **CritPt 5%**, FrontierMath Tier 4 at 12.5%, and **ARC-AGI-2 at 17.6%** — the last is the decisive one: a model at 86.2% on ARC-AGI-1 and 17.6% on ARC-AGI-2 has a narrow, not general, notion of abstract reasoning. The **2024-09-30 knowledge cutoff** is the root cause of the weak knowledge-side numbers.
- **Context window: 82/100.** **400,000 tokens in, 128,000 out** places it in the methodology's 200K–500K band, and it scores near the top of that band because the evidence supports the spec rather than merely asserting it: **AA-LCR v1.1 at 80%** is a real long-context retrieval measurement, and the 128K output ceiling is joint-largest in its price class. Not scored higher because the band tops out at 84 and because Artificial Analysis's own record lists 272k rather than 400K — the first-party ceiling is used, but the discrepancy is real and unresolved.
- **Multimodal: 70/100.** **Text and image in, text out**, plus **image generation** for mockups and visual handoffs — the output side is generative but not a non-text *input* modality, so it does not lift the score out of the "+image in" band. Scored at the **top of that band on measured quality**: **MMMU 84.2%** is well above what the 60–70 band assumes of an image-capable model, and **CharXiv reasoning 80.3%** shows it reads scientific figures rather than merely describing them. Capped at 70 by the methodology's own ceiling for image-only input — there is no documented audio or video input, so the 75–90 and 90–100 bands are unreachable.
- **Coding: 82/100.** Genuinely strong and this is where GPT-5.1 earned its flagship slot. **SWE-bench Verified 76.3%**, **SWE-bench Pro 50.8%** on the harder four-language harness, **Aider Polyglot 88.0%**, and **SWE-Lancer IC Diamond 69.7%** cover patch generation, multi-language repository work, diff-format instruction following and real freelance tasks. Capped below the 90–100 frontier band by SWE-bench Pro — the contamination-resistant benchmark where OpenAI's own numbers put it five points behind its successor — and by the complete absence of a DeepSWE, SciCode or LiveCodeBench figure.
- **Cost efficiency: 70/100.** **$1.25 / $10.00 per MTok** with a cache hit at **$0.125** and an Artificial Analysis blended rate of **$1.3375 / MTok**. The input rate is cheap — comfortably inside the methodology's ~$1.25 anchor — but **$10.00 output is 2.35× the $4.25 paired with that anchor** and sits much closer to the $3/$15 ≈ 60 band, landing the blended figure between the two. Caching and 24-hour prompt caching pull the real number down on repeated context; the offsetting risk is that this is a reasoning model with a 37s TTFT, so output volume and thinking tokens dominate the bill. Scored on the printed rate card, not the best-case cached rate.
- **Overall Score: 76/100.** (68 + 76 + 82 + 70 + 82) / 5 = 75.6 → **76**. Best fit: a **general-purpose production flagship for mixed agentic and coding workloads at 400K context**, valued for controllable adaptive reasoning and 24-hour caching as much as for raw scores. Not the pick for abstract reasoning (ARC-AGI-2 17.6%), for knowledge freshness after 2024-09-30, or for output-heavy generation at $10/MTok — GPT-5.2 fixed the first two of those and is the successor to reach for.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.2 launch post (which carries the full GPT-5.1 Thinking comparison table), OpenAI's API model documentation and pricing pages, Artificial Analysis's GPT-5.1 (High) model record and the GPT-5.2 vs GPT-5.1 comparison table, docsbot.ai's GPT-5.2/GPT-5.1 spec comparison, There's An AI For That's benchmark profiles for both models, AssetOpsBench and ITBench official leaderboard entries, and AI Release Tracker's release record. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; vendor-reported launch figures are labelled as such, and where an independent evaluation disagrees (SWE-bench Verified 74.9% vs 76.3%) both are listed with the first-party figure used.
- Future sources: add a new file next to this one, e.g. `GPT_5_1_Codex_Max.md`, using the same headings — the GPT-5.1-Codex-Max variant is a distinct model.