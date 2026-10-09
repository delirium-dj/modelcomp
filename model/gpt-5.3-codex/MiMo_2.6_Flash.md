# GPT-5.3 Codex — findings by MiMo 2.6 Flash

- Source: OpenAI GPT-5.3-Codex System Card (cdn.openai.com PDF), Artificial Analysis, BenchLM, Vals AI, OpenRouter
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex — OpenAI's agentic coding model released **2026-02-05** (AA; meta: "Feb 2026"), unifying **GPT-5.2-Codex coding ability with GPT-5.2 reasoning** for long-horizon tool-using engineering work (meta). Served as `gpt-5.3-codex` with **xhigh** reasoning effort benchmarked by AA; lightweight sibling **GPT-5.3-Codex-Spark** exists (queue entry, 60.4).
- **Short description:** Coding-focused derivative in the GPT-5.3 line: proprietary reasoning model positioned between the 5.2 generation and later 5.4/5.5/6.x flagships. AA describes it as "above average in intelligence but somewhat expensive" — a specialist pick for SWE work rather than a general flagship.
- **Provider / access:** OpenAI API only (AA: 1 provider), OpenRouter `openai/gpt-5.3-codex` (400K ctx, $1.75/$14.00 confirmed). Proprietary.
- **Release / knowledge:** 2026-02-05; knowledge cutoff **2025-08-31** (AA) — older than most queue entrants, flagged.
- **Context window:** **400,000 total / 128,000 out** (meta; AA/OpenRouter confirm 400K).
- **Modalities:** **text, image in; text out** — AA's spec and the **MMMU-Pro 78.5** row prove image input; the repo meta's "Text in/out" is stale, flagged (Codex screenshot-driven workflows are the reason image input exists here).
- **Pricing:** **$1.75 in / $14.00 out per 1M**, **cached input $0.175 (90% discount)**; blended (7:2:1) $1.87/1M (AA). Serving: 87 t/s (above tier median) but **TTFT 71.5 s at xhigh** — heavy thinking latency, flagged.

### Raw benchmarks found

> Primary: GPT-5.3-Codex System Card (OpenAI, 2026) for card rows; AA for independent
> rows (index estimated, modality/spec); Vals/Gert/SWE-Rebench/JobBench leaderboards for
> third-party verification.

Agentic / tool use:

- **OSWorld-Verified: 64.7** (system card) — strong computer-use tier.
- **τ²-bench: 86** (AA) — strong.
- **Terminal-Bench 2.0: 77.3** (system card).
- Gert Labs 57.47; JobBench 33.7 (arXiv:2605.26329). No BrowseComp/GDPval/TB2.1 rows found.

Coding:

- **SWE-bench Verified: 85** (system card) — clears the coding references outright.
- SWE-bench Pro **56.8** (system card) — mid-pack (Grok 4.5 64.7, Opus 4.6 ~64, Fable 80.4).
- SWE-Rebench 58.2 (leaderboard); **LiveCodeBench (Vals) 87.3**; SWE-bench (Vals) 78.0; Vibe Code Bench 61.77.

Reasoning & knowledge:

- **AA-GPQA Diamond: 91.5** — clears the 90+ reference. **AA-HLE: 42.5** — clears 40+.
- **AA Intelligence Index (v4.3.2): 33 (estimated)**, #86/225 (median 26) — AA flags "independent evaluation forthcoming."
- AA-LCR 83.3; CritPt 16.9; AA-Omniscience Index 10.9 (accuracy 52.9, hallucination 89.2 — weak knowledge reliability); AA-IFBench 75.4.

Multimodal:

- **AA-MMMU-Pro: 78.5** (image input confirmed); Design Arena Website 1169 (OpenRouter).

Long context:

- 400K window; **AA-LCR 83.3** supports solid long-context reasoning; no MRCR-style retrieval row.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 64.7, τ² 86, TB2.0 77.3 are genuine frontier-band agent rows; held down by thin coverage (no BrowseComp/GDPval/TB2.1) and mid workflow rows (JobBench 33.7).
- **Reasoning: 85/100.** Both references cleared (GPQA 91.5, HLE 42.5) with LCR 83.3; the AA Index of 33 (estimated) is only above-median, Omniscience is weak (10.9), and the Aug-2025 cutoff is stale relative to peers.
- **Context window: 90/100.** 400K/128K — well above the 262K ≈ 90 tier anchor's little brother but under 1M; LCR 83.3 with no retrieval row.
- **Multimodal: 70/100.** Image input with MMMU-Pro 78.5 (top of the image band) and a Design Arena presence; text-only repo meta contradicted by AA spec + measured row, flagged; no video/audio/PDF surface.
- **Coding: 87/100.** SWE-bench Verified 85 is elite (only frontier flagships beat it), LCB 87.3 solid; SWE Pro 56.8 and Vibe 61.77 keep it off the ceiling — a Verified-king, Pro-mid coder.
- **Cost efficiency: 64/100** (excluded from Overall). $1.75/$14 sits between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors (cheaper in, near-anchor out), 90% cache discount helps; a 71.5 s xhigh TTFT is a real latency cost.
- **Overall Score: 84/100.** (86+85+90+70+87)/5 = 83.6 → 84 — OpenAI's Feb-2026 coding specialist: SWE-Verified 85, OSWorld 64.7, τ² 86, GPQA/HLE both clearing references, image input — held from the frontier by a stale cutoff, mid composite index, and Pro-tier (not flagship) coding depth.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — AA model page (release date, spec, modality conflict resolution, index/speed/cost telemetry, GPQA/HLE/MMMU-Pro/LCR/Omniscience rows), BenchLM aggregate (system-card rows with PDF provenance URL, leaderboard rows, updated 2026-10-07), OpenRouter API + benchmarks page (pricing/context), repo meta (positioning, tiers). Scores are normalized 1–100 interpretations, not official vendor scores; AA index marked as its own estimate.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5.3-Codex — findings by Mimo v2.6 Flash

- Source: OpenAI/gpt-5.3-codex
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's agentic coding flagship released 2026-02-05 — "combines the frontier software engineering performance of GPT-5.2-Codex with the broader reasoning and professional knowledge capabilities of GPT-5.2" (ModelsAtlas), and OpenAI's "first model that was instrumental in creating itself." Competes with Claude Opus 4.6; 25% faster per OpenAI (Wikipedia). Not a variant/alias of another entry in this dataset (distinct from `gpt-5.3-codex-spark`).
- **Provider / access:** OpenAI Responses/Chat Completions API (API availability 2026-02-24 — CloudPrice/ModelsAtlas/getdeploying; Codex app + web at 2026-02-05 launch, ChatGPT Pro-gated at launch per Wikipedia); OpenRouter/Azure/Databricks/Vercel routes (CloudPrice provider list). **OpenCode Zen listing observed** (whichllm sidebar, 400K context) — price not captured this pass.
- **Release / knowledge:** announced/released 2026-02-05 (OpenAI blog, Wikipedia), API 2026-02-24; **knowledge cutoff 2025-08-31** (AI Wiki, getdeploying); deprecation 2027-08-24 (CloudPrice).
- **IDs:** `gpt-5.3-codex`.
- **Context window:** **400K tokens / 128K max output** (CloudPrice, getdeploying, BenchLM, ModelsAtlas) — a notable expansion over the 200K of earlier Codex variants (AI Wiki).
- **Modalities:** **text + image + PDF in**, text out (CloudPrice input modalities; ModelsAtlas "text · image · file" / "image and document analysis"); AI Wiki lists text+image; no audio/video; reasoning yes (low/medium/high/**xhigh**), function calling, structured outputs, web search, prompt caching (CloudPrice capabilities).
- **Pricing (as of 2026-10-01):** **$1.75 / 1M input, $14.00 / 1M output** (OpenAI list — getdeploying, ModelsAtlas, CloudPrice; BenchLM agrees); **cached input $0.175** (90% off, AI Wiki). No free tier verified.
- **Architecture:** proprietary closed weights; GPT-5.3 family lane (Codex released Feb 5, Instant Mar 3 2026 — AI Wiki).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.
> OpenAI's headline table ran all evals at **xhigh reasoning effort** (OpenAI blog footnote).

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (OpenAI; BenchLM confirms across comparisons) — vs GPT-5.2-Codex 64.0%, GPT-5.2 62.2%
- OSWorld-Verified: **64.7%** (OpenAI; BenchLM) — near-double GPT-5.2-Codex 38.2%
- GDPval (wins or ties): **70.9%** (OpenAI) — matches GPT-5.2 (high) 70.9%
- SWE-Lancer IC Diamond: **81.4%**; Cybersecurity CTF: **77.6%** (OpenAI blog)
- Terminal-Bench Hard: **~50%** (#11 catalog rank — CloudPrice); Gert Labs **57.47%**, JobBench **33.7%** (BenchLM)
- τ²-Bench / τ³ / GDPval-AA Elo: **no verified public score found** (CloudPrice TAU2 row 0.9, rank #94 — ambiguous rounding, not used)
- Claw-Eval: **no verified public score found** (note: methodology expects it — N/A, slight penalty applied via band placement)

Reasoning / knowledge:

- GPQA: **~90%** (CloudPrice catalog row 0.9, rank #26 — rounded, treat as ~85–94 band)
- HLE: **~40%** (CloudPrice row 0.4, rank #21)
- AA Intelligence Index: **36.9** (#44 catalog — CloudPrice); AI Wiki reports "scored 44" for xhigh — conflicting citations, wider value used as mid-high tier
- LCR: **~80%** (#9 — CloudPrice); IFBench: **~80%** (#34); SciCode reasoning-side: 0.5 (#31) — catalog rows rounded to 1 decimal
- FrontierMath / AIME / MMLU-Pro: **no verified public score found**

Coding:

- SWE-bench Verified: **85%** (BenchLM-sourced; Vals difficulty profile 90/73/55/33 easy→extra-hard — GPT 5.3 Codex)
- SWE-bench Pro (Public): **56.8%** (OpenAI) — vs GPT-5.2-Codex 56.4%, GPT-5.2 55.6%
- SWE-Rebench: **58.2%**; Vibe Code Bench: **61.77%** (BenchLM)
- SciCode: **~50%** (CloudPrice 0.5, #31); AA Coding Index lane: **62.7–67.2** (BenchLM category scores)
- LiveCodeBench: **no verified public score found**

Long context:

- 400K window; MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image + **PDF** in (CloudPrice/ModelsAtlas) — image+PDF tier qualifies for 75–90 band; MMMU / CharXiv: **no verified public score found** (BenchLM multimodal: 0 rows)

### Normalized scores (1–100)

- **Tool use: 86/100.** A deep agentic ledger — Terminal-Bench 2.0 77.3% (well above mid band), OSWorld-Verified 64.7% (near-double its predecessor), GDPval 70.9% wins/ties, SWE-Lancer 81.4%, CTF 77.6%, TB Hard ~50% (#11) — no τ² and no Claw-Eval row hold it out of the 90s.
- **Reasoning: 75/100.** Catalog rows put GPQA ~90% and HLE ~40% at/near frontier anchors, but they are 1-decimal rounded (not harness-exact), AA Intelligence Index 36.9–44 is mid-tier, and no FrontierMath/MMLU-Pro row exists — scored as a strong mid-high blend, not a verified frontier reasoning lane.
- **Context window: 78/100.** 400K sits in the 200K–500K tier (65–84) at its upper end (400K, 128K output); no retrieval measurement to justify 85+.
- **Multimodal: 75/100.** Image + PDF input puts it in the +image/PDF-in band (75–90) at its floor — no vision benchmark row, no audio/video input, no non-text output; consistent with the 75-floor treatment used for the band elsewhere in this queue.
- **Coding: 89/100.** SWE-bench Verified 85% clears the DeepSWE-74% frontier anchor, SWE-Pro 56.8% is SOTA-class, Vibe 61.77% is near-Opus-4.7 territory, TB2.0 77.3% agentic — one point shy of 90 because SciCode ~50% (<55% ref) and the Coding Index lane 63–67 (<70 ref) both miss the frontier anchors, and no LiveCodeBench row exists.
- **Cost efficiency: 65/100.** $1.75/$14.00 (blended ~$5.8) sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, leaning high — softened by the $0.175 cached-input lane (90% off) and tempered by no free tier.
- **Overall Score: 81/100.** (86 + 75 + 78 + 75 + 89) / 5 = 80.6 → 81 — best-fit as an elite agentic-coding workhorse (TB2.0 77.3, OSWorld 64.7, SWE-V 85, GDPval 70.9) with mid-tier composite intelligence, 400K context, and Pro-tier pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI GPT-5.3-Codex launch blog benchmark table, AI Wiki family article, Wikipedia release/modalities, CloudPrice/getdeploying/ModelsAtlas catalog specs and pricing, BenchLM head-to-head ledgers, Vals SWE-bench Verified difficulty profile); scores are normalized 1–100 interpretations, not official vendor scores. Note: rounded catalog reasoning rows (GPQA/HLE) are flagged and not treated as harness-exact.
- Future sources: add a new file next to this one, e.g. `GPT_5.3.md`, using the same headings.

