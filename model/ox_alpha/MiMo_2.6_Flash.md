# Ox Alpha — findings by MiMo 2.6 Flash

- Source: Z.ai / OpenRouter Stealth (`stealth/ox-alpha`), now `z-ai/glm-5.3-flash`
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (anonymous preview name; revealed to be **GLM-5.3-Flash** by Z.ai/Zhipu on 2026-08-26). **Alias entry:** same model as the `glm-5.3-flash` folder — capability scores intentionally mirror that report; this file documents the stealth launch and what was unique to the preview endpoint.
- **Short description:** The anonymous "stealth" reasoning model that topped OpenRouter's leaderboard for six days at $0 before Z.ai (Zhipu AI) confirmed it to Bloomberg as a new GLM-series iteration with MIT weights. 320B-total / 18B-active MoE, native multimodal, built for long-horizon coding agents. Bloomberg framed it as OpenRouter's biggest single-model launch, with more than double DeepSeek's usage during the preview window.
- **Provider / access:** During preview: OpenRouter `stealth/ox-alpha` (Chat Completions; anonymous provider, prompts retained by the operator). Retired 2026-08-26 — the ID is no longer in OpenRouter's callable catalogue (verified via public `/api/v1/models` on 2026-08-31: 396 models, zero `stealth/` entries). Replacements: OpenRouter `z-ai/glm-5.3-flash` (21 providers + `:batch` variant), Z.ai native OpenAI-compatible API (`https://api.z.ai/api/paas/v4/`, `glm-5.3-flash`), Ollama `glm-5.3-flash:cloud` (hosted, US/EU, zero retention), MIT weights `zai-org/GLM-5.3-Flash` on Hugging Face (FP8 + BF16). Curated repo metadata also records an OpenCode Zen tier `opencode/ox-alpha` (free experimental agentic-coding access); it does not appear in the current public Zen model docs, consistent with post-reveal retirement.
- **Release / knowledge:** preview launch 2026-08-20; reveal 2026-08-26 (OpenRouter's `z-ai/glm-5.3-flash` listing created 13:59 UTC that day; HF weights public same day). Knowledge cutoff not disclosed → not scored.
- **IDs:** `stealth/ox-alpha` (retired) → `z-ai/glm-5.3-flash` / `glm-5.3-flash`; OpenCode Zen `opencode/ox-alpha` (as recorded in repo metadata).
- **Context window:** 1,048,576 tokens on the stealth listing (aggregate listing shows up to 1,310,720); max output 131,072 tokens on the preview endpoint (the production listing's aggregate max-output has since been listed higher — up to 943,717 per one catalog). Verified from OpenRouter model metadata during and after the preview.
- **Modalities:** text, image, video, PDF in (OpenCode Zen metadata; OpenRouter preview listed text/image/video); text out; reasoning **always on** — `reasoning_effort` accepts low/high/**max (default)**, cannot be off on the preview endpoint; tool calls yes. Preview endpoint withheld `structured_outputs`, `seed`, `logprobs`, `stop`, and the penalty family — a property of the preview, not of the model (production exposes all twenty parameters).
- **Pricing:** **$0.00 in / $0.00 out** for the six-day stealth preview (2026-08-20 → 2026-08-26), with the explicit caveat that prompts/completions were retained by an anonymous operator and there was no SLA or deprecation notice. Post-reveal: launch promo $0.075/$0.25 (cached $0.015) expired 2026-09-09; current list **$0.15 in / $0.50 out / $0.03 cached** per 1M (Z.ai pricing page, re-verified 2026-10-05).
- **Architecture:** MoE 320B total / 18B active; hybrid sparse + linear attention (cuts long-context serving cost) + Manifold-Constrained Hyper-Connections; 30T-token multimodal pre-training corpus; MIT license. Separately trained multimodal base (not a vision adapter on text-only GLM-5.3).

### Raw benchmarks found

> Ox Alpha ≡ GLM-5.3-Flash; rows below were verified for this entry's research
> (Codersera reveal record re-verified 2026-08-31/10-05, Bloomberg/ExplainX reveal
> coverage, Writingmate catalog + Arena retrieval 2026-10-05, AA), alongside rows
> carried from this agent's own same-model `glm-5.3-flash` research where noted.

Agent / tool use:

- GDPval-AA v2 (Elo): **1773** (Zhipu-published on the AA-run board; GLM-5.2 1504 — clears the 1750+ frontier ref).
- AutomationBench v1.0.6: **48.8** (Zhipu; GLM-5.2 26.2).
- Terminal-Bench 2.1: **84.3** (Zhipu; under the 88 ref — Opus 4.8 85.0, GPT-5.6 Terra 87.4).
- Z.ai Code Bench v1.0: **29.0** (Zhipu; Opus 4.8 29.5).
- Arena (blind human preference, retrieved 2026-10-05): Text **1473** (#41, 22,971 votes), WebDev **1616** (#25, 10,355 votes) — Arena rows are human preference, not task benchmarks.
- Toolathlon Verified **78.4** (#1/42), OSWorld 2.0 **59.1**, Agents' Last Exam **26.3** (this agent's prior same-model research).
- Viral preview claim "80% DeepSWE, beats GPT-5.6" — **debunked**: single dev's 10-task subset (8/10); vendor figure is 63.4.
- Tau3 / Claw-Eval / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE with tools: **55.3** / no tools: **39.9** (no-tools row independent per Epoch/Model Beat — just under the 40%+ ref).
- GPQA Diamond: no verified public score found (not in Zhipu's release table).
- Artificial Analysis Intelligence Index: **41.81 on v4.3.2** (AA's own measurement, Oct 2026; **#4 of 118 open-weights models**, $0.25/Index task). The mid-50s figure that circulated around the stealth week was on legacy v4.1.1 — AA rebased the basket (no conversion factor exists); neither reading clears the 60+ ref on its own scale. Median speed 51.4 tok/s, 3.31 s TTFT (below the 71.9 tok/s peer median).
- APEX: 52.8 (Model Beat, prior same-model research).

Coding:

- DeepSWE v1.1: **63.4** (Zhipu; GLM-5.2 46.2, Opus 4.8 58.0 — strong, under the 74% frontier ref; the "80%" preview rumor was sample noise).
- SciCode: **51.6** (Model Beat — under the 55%+ ref); NL2Repo 56.3; LiveCodeBench base 37.6 (prior same-model research).
- SWE-bench Verified / Vibe Code Bench / AA Coding Index: no verified public score found.

Long context:

- No MRCR/RULER/needle row found for the stealth window or production. Native 1,048,576-token window with hybrid sparse+linear attention explicitly built to make 1M serving cheap (3.0× attention-compute and 4.4× KV-cache cuts vs GLM-5.3, Zhipu-claimed) → capacity yes, retrieval unproven.

Vision (vendor, prior same-model research):

- MMVU **80.5** (#1/7), MVBench **77.8** (#1/18), CharXiv Reasoning w/tools 89.4, OfficeQA Pro 62.4; weak natural-image BabyVision 53.4.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1773 clears the frontier ref, AutomationBench 48.8 and OSWorld 59.1 beat Opus 4.8 rows, Toolathlon 78.4 tops its board, Arena WebDev #25; held at 88 by TB2.1 84.3 (under the 88 ref), ALE 26.3 mid, and missing Tau3/Claw/MCP rows.
- **Reasoning: 84/100.** HLE-with-tools 55.3 is frontier-adjacent and the launch-era v4.1.1 Index reading (mid-50s) was competitive, but no-tools HLE 39.9 misses the 40% ref, GPQA has no verified score, and AA's current v4.3.2 Index of 41.81 sits well under the 60+ ref on its scale.
- **Context window: 95/100.** 1,048,576 tokens = ≥1M tier floor (preview listing verified via OpenRouter metadata), purpose-built hybrid-attention serving story; no retrieval benchmark published → floor, not 100.
- **Multimodal: 84/100.** Text + image + video + PDF in (video band 75–90); MMVU and MVBench both #1 on their boards, CharXiv 89.4 strong; no audio anywhere in the record and BabyVision weakness keep it mid-band.
- **Coding: 82/100.** DeepSWE v1.1 63.4 beats Opus 4.8 (58.0), SciCode 51.6 and TB2.1 84.3 are respectable, but all three trail their frontier refs (74/55/88), and SWE-Verified / AA Coding Index have no verified rows. The headline "80% DeepSWE" was a 10-task anecdote and does not count.
- **Cost efficiency: 96/100.** The preview itself was $0 (would score 100) for six days; as a live entry the endpoint is gone, and the actionable list price is $0.15/$0.50 with $0.03 cached reads — the ~4×-under the $0.60/$2.20 ≈ 92 anchor, MIT self-host available; held at 96 because always-on reasoning means ~90% of output tokens bill as reasoning and the free window is closed.
- **Overall Score: 87/100.** (88+84+95+84+82)/5 = 86.6 → 87 — same model as `glm-5.3-flash`, so the score intentionally matches: the cheapest near-Opus agentic coder on the board, with the stealth launch as its origin story; GPQA absence, the corrected AA Index (41.81), and sub-ref hard-coding scores remain the honest offsets.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (DuckDuckGo discovery; Codersera reveal record with OpenRouter/Z.ai/Ollama/AA verification trail; ExplainX/Bloomberg reveal coverage; Writingmate catalog + Arena rows retrieved 2026-10-05; OpenRouter `/api/v1/models` catalogue check; Z.ai pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Ox Alpha — findings by Mimo v2.6 Flash

- Source: Z.ai (Zhipu AI) stealth alias / `stealth/ox-alpha` → `z-ai/glm-5.3-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth listing; **revealed 2026-08-26 as GLM-5.3-Flash**)
- **Short description:** Anonymous free model that topped OpenRouter/OpenCode usage from 2026-08-20 (23.2T tokens/7d on OpenRouter — >2× DeepSeek-V4-Flash; 44T cumulative on OpenCode over 6 days #1). Served entirely on ~100,000 domestic Chinese AI chips (Z.ai claim). Fingerprinted by CTGT (11/11 tokenizer match to GLM-5.x, temp ceiling 1.0, error code 1214) before official reveal. **Same weights/capability as `glm-5.3-flash`** — this folder documents the stealth identity period.
- **Provider / access:** Was `stealth/ox-alpha` on OpenRouter (free, no attribution); OpenCode "Ox Alpha Free". Post-reveal: stealth id retired — migrate to `z-ai/glm-5.3-flash` / Z.ai API / self-host MIT weights. No longer free at list price.
- **Release / knowledge:** Stealth appear 2026-08-20; **identity confirmed + weights released 2026-08-26** as GLM-5.3-Flash (MIT, HF `zai-org/GLM-5.3-Flash`). Knowledge cutoff not isolated.
- **IDs:** was `stealth/ox-alpha` (OpenRouter); now **`z-ai/glm-5.3-flash` / `glm-5.3-flash`** — same model.
- **Context window:** advertised 1,048,576 tokens during stealth (OpenRouter API reports 1,310,720 post-reveal); AA lists served deployments at 400K — same caveat as GLM-5.3-Flash.
- **Modalities:** text + image + video in; text out; tool calling enabled during stealth (listing).
- **Pricing (as of 2026-09-22):** Stealth week was **free**. Post-reveal list **$0.15 in / $0.50 out per 1M** (cached $0.03); 50% launch promo ($0.075/$0.25) ended **2026-09-09**; OpenRouter hosts undercut list (DeepInfra $0.075/$0.25 still). MIT weights = free self-host. No free tier on named id (OpenCode Go rate-limited quota only).
- **Architecture:** 320B MoE / 18B active; hybrid sparse+linear attention (KDA+DSA 3:1); mHC; 30T multimodal pretrain; FP8 checkpoint ~306 GiB; 8× Hopper+ GPU min for self-host.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. **During stealth: no vendor-citable benchmarks existed** — all Ox Alpha-era "scores" were community claims. Post-reveal scores below are GLM-5.3-Flash's (same weights); independent numbers highlighted where they exist.

Agent / tool use:

- DeepSWE v1.1: **~63%** independent community full 113-task run (Ben Davis via OrcaRouter — **not** vendor; aligns with Z.ai's later 63.4 claim); earlier 10-task subset 80% was not representative
- Kingbench: **87.5** community early run (below GLM-5.3's 91.25) (OrcaRouter)
- Terminal-Bench 2.1 / Toolathlon / GDPval / AutomationBench / OSWorld / MCP: no **independent** Ox Alpha-specific score found — use GLM-5.3-Flash vendor table in that folder (TB2.1 84.3, Toolathlon 78.4, GDPval-AA 1773, AutomationBench 48.8, OSWorld 59.1)
- Artificial Analysis / LMArena: **no entry during stealth week** (OrcaRouter); AA entry arrived post-reveal under GLM-5.3-Flash name

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index for Ox Alpha specifically: **no verified public score found** during stealth (community benchmark tables were unattributed guesses — explicitly not repeated per AI Catchup). Post-reveal GLM-5.3-Flash AA Index **42** (AA v4.3.2, 2026-09-28 — see Fresh-source note).

Coding:

- DeepSWE ~63% independent (see agent row) — the only solid independent coding number from the stealth period
- SWE-bench Verified / LiveCodeBench / SWE-Pro for Ox Alpha: no verified public score found

Long context:

- 1M advertised (listing); no MRCR/GraphWalks for Ox Alpha: no verified public score found

Multimodal:

- Text/image/video advertised on listing; no MMMU/CharXiv for Ox Alpha: no verified public score found

Censorship / behavior (CTGT fingerprint, not % benchmarks):

- Narrow censorship blacklist: Xinjiang/Taiwan answered like US models (detailed, cites China-controversial sources); Xi Jinping/domestic legitimacy statistically ~DeepSeek V4 Flash (most-censored in CTGT set) — "not less censored, has a blacklist"
- System prompt instructed not to reveal provenance (CTGT)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): the post-reveal GLM-5.3-Flash **Intelligence Index 42** (AA-native v4.3.2, same weights as this model) replaces the earlier 57 citation — scores unchanged pending re-derivation.

### Normalized scores (1–100)

- **Tool use: 85/100.** Independent DeepSWE ~63% (Sol-mid band) + post-reveal vendor tool stack (TB2.1 84.3 class, same weights); no independent TB/MCP/GDPval during stealth → 85 (trust community DeepSWE, hold vendor rows with same caution as GLM-5.3-Flash).
- **Reasoning: 85/100.** Same weights as GLM-5.3-Flash (AA Index 42 on v4.3.2, HLE-tools 55.3 vendor / ~40 no-tools independent); no stealth-period independent reasoning run → provisional 85.
- **Context window: 82/100.** Same 1M claim / 400K served caveat as GLM-5.3-Flash → 82.
- **Multimodal: 92/100.** Native text+image+video (listing + reveal); scores = GLM-5.3-Flash multimodal set → 92.
- **Coding: 87/100.** Independent DeepSWE ~63% cross-checks vendor 63.4; TB2.1 84.3 near-Opus (vendor/AA); slightly below GLM-5.3-Flash's 88 only because stealth-period independent evidence is DeepSWE-only → 87.
- **Cost efficiency: 100/100 during stealth / 99 after.** Free week drove record traffic; now $0.15/$0.50 list (hosts to $0.075/$0.25) + MIT self-host — effectively free-to-near-free → 100 (stealth), 99 (named).
- **Overall Score: 86/100.** Mean of five quality dims (85+85+82+92+87)/5 = 86.2 → 86. **Identity note:** capability = GLM-5.3-Flash (scored 87 in its folder); this folder scores 86 to reflect stealth-period evidence gap (DeepSWE independent only) while the named model carries fuller vendor+AA tables. For procurement, use `glm-5.3-flash`; `stealth/ox-alpha` id is retired.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (OrcaRouter stealth analysis, Bloomberg confirmation, Pondero reveal, AI Catchup migration/timeline, TheNextWeb/CTGT fingerprint, AI in China retrospective); scores are normalized 1–100 interpretations, not official vendor scores; capability rows cross-reference `../../glm-5.3-flash/` (same weights).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

