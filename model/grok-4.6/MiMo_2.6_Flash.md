# Grok 4.6 — findings by MiMo 2.6 Flash

- Source: xAI (`grok-4.6`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship for long-running agents (released 2026-08-12, 35 days after Grok 4.5) — a further training run on the 4.5 MoE line rather than a new family: same 500K window, same knowledge cutoff, same headline price; what moved is performance. Adds a fourth `xhigh` reasoning tier above `high` (default). Launch story: frontier intelligence at mid-tier prices — ties GPT-5.6 Sol on the AA Intelligence Index (61, v4.1 era), takes **#1 of 246 on GPQA Diamond (94.9)**, and posts best-in-table GDPval-AA (1753) and AA-Briefcase (1577); eesel's verdict: "the best price-to-intelligence ratio at the frontier… mislabeled as a coding release when its real strength is knowledge work" — it loses DeepSWE (65.9 vs Sol's 73) and Terminal-Bench v3.0 (26 vs 34.6) to GPT-5.6 Sol. Succeeded by Grok 4.7.
- **Provider / access:** xAI API, Grok Build, Cursor, GitHub Copilot, OpenRouter, Vercel, Cloudflare, Gemini Enterprise Model Garden, Microsoft Foundry, Amazon Bedrock (Bedrock at $2.20/$6.60); SuperGrok subscription tiers and up, not on Free; Priority Processing = 2× multiplier.
- **Release / knowledge:** released 2026-08-12; knowledge cutoff **2026-02-01** (model page says Jan 2026 — vendor pages disagree).
- **IDs:** `grok-4.6` / `x-ai/grok-4.6` (OpenRouter) / `spacexai/grok-4.6` (Vercel).
- **Context window:** **500,000 tokens**, max output 500K (Vercel); unchanged from 4.5. **Billing cliff: at ≥200K prompt tokens the entire request (input, cached, output) bills at double** ($4/$12, cache $1) — usable-at-headline-price context is 200K.
- **Modalities:** text + image in, text out; reasoning yes (low/medium/high/xhigh); tool calls yes (function calling, structured outputs, web/X search, code execution).
- **Pricing (as of 2026-10-07):** **$2.00 in / $6.00 out** per 1M under 200K prompts, cached **$0.50** (vs 4.5's $0.30 — a 67% cache-rate regression); ≥200K whole-request $4/$12; **no Batch discount** (unlike grok-4.3 at $1.25/$2.50 + 20%). AA measured $0.84/task on its Index — but 4.6 burns 47% more output tokens per task than 4.5 ($1,068 vs $579 for the same suite, 1.84×); AA warns the `prompt_cache_key` header is required or cache hits silently fail at full input price.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.4** (AA, high effort, #3 of all models) — **clears the 85% ref** (AA medium 84.3, low 75.3)
- Terminal-Bench 4.0: **13.1–21.2** (AA by effort; Vals 17.2) — **far under the 40% ref**; xAI's own Terminal-Bench **v3.0**: 26.0 (vs Sol 34.6, Fable 34.1 — xAI published rows it loses)
- τ³-Banking: **50.7** (AA, high, #2 overall behind Qwen3.8-Max's 51.3); τ-Bench Banking 44.3–50.7
- GDPval-AA v2: **1753 Elo** (AA, #3; +227 over 4.5, beats Sol's 1728); AA-Briefcase: **1577 Elo** (AA, #4, best-in-launch-table)
- APEX-Agents: 57.5 (vendor); CursorBench v3.2: 69.9 (vendor; AA/Vals rows exist); Harvey LAB (Vals): 15.8 (6× GPT-5.6 Sol's 2.5); OSWorld / ALE: none found
- AA Agentic Index: 53.0 (high; current AA scale)

Reasoning / knowledge:

- GPQA Diamond: **94.9** (AA, high) — **#1 of 246 models**, clears the 90%+ ref (Vals 94.7 independently agrees; low effort 87.9)
- HLE: **42.9** (AA, high) — **clears the 40%+ ref** (medium 42.1, low 27.6)
- AA Intelligence Index: **61** (v4.1, at launch — ties GPT-5.6 Sol, 6th of 95; eesel) → **51** under v4.2 (re-based 2026-09-04: adds Briefcase + 4,592-page long-context doc, drops GPQA, 40% private sets) → **44.3** on the current scale (AA, high per OpenRouter). Launch-era clears the 60+ ref; current-scale readings do not — noted as scale correction.
- CritPt: 19.7 (AA, high); AA-Omniscience: 43.0 accuracy / 76.0 non-hallucination (accuracy strong, hallucination middling); MMLU Pro 89.4 (Vals)

Coding (xAI vendor unless noted):

- DeepSWE v1.1: **65.9** (vendor) — **under the 74%+ ref** (Sol 73, Fable 70); APEX-SWE 56.4
- SciCode: **53.0–56.5** (AA by effort — high clears the 55% ref; eesel's table: 53.6, -0.5 vs 4.5)
- AA Coding Index: **76.8** (high) — **clears the 70+ ref** (medium 74.4, low 66.3)
- LiveCodeBench (Vals): 88.2; FrontierCode 1.1 Extended: 61.3 (vendor, #3 in its table); Vibe Code Bench 76.2 (Vals); IOI (Vals) 47.6; SWE-bench (Vals): 95.6 (Vals harness — anomalous, not leaned on)
- Long context: **AA-LCR: 75.0–81.0** (AA, independent — #27 range on the v4.1 board)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 88.4 (#3, clears the 85 ref), τ³-Banking #2, GDPval/Briefcase best-in-table with independent AA measurements, CursorBench 69.9 — then TB4.0 at 13–21 and the vendor's own TB v3.0 at 26 (behind Sol and Fable) pull it back to 87.
- **Reasoning: 90/100.** GPQA 94.9 is outright #1 of 246 and HLE 42.9 clears its ref; the AA Index cleared 60 at launch (61, v4.1) but the re-based ruler now reads 44–51 — credited at launch-era strength with the correction flagged.
- **Context window: 90/100.** 500K native sits above the 262K band (90) but below the ≥1M floor, with independent AA-LCR 75–81 as a genuine retrieval signal; the 200K whole-request billing cliff doesn't change capacity but anchors usage reality at 90.
- **Multimodal: 68/100.** Text + image in → image band (60–70); the "interactive and visual work" push shows in Design Arena UI/Models Elo ~1290s, but there are no image-benchmark rows and no video/audio/PDF input.
- **Coding: 88/100.** Clears three coding refs — TB2.1 88.4, SciCode up to 56.5, coding index 76.8 — plus LCB 88.2; misses the other two: DeepSWE 65.9 (<74, xAI's own number) and TB4.0 ≤21 (<40).
- **Cost efficiency: 75/100.** Headline $2/$6 with $0.50 cache beats the $3/$15 anchor meaningfully and ties Sol's intelligence at a fifth of its output rate; discounted for the ≥200K whole-request doubling, the 67% cache-rate hike vs 4.5, no batch discount (older 4.3 is cheaper for bulk), and 1.84× measured per-suite spend from 47% more output tokens.
- **Overall Score: 85/100.** (87+90+90+68+88)/5 = 84.8 → 85 — a knowledge-work powerhouse wearing a coding-model launch costume: #1 GPQA, #3 Terminal-Bench 2.1, best-in-class GDPval/Briefcase, all at $2/$6, discounted for a floor-adjacent TB4.0, a below-ref DeepSWE, and a pricing structure whose worst case costs double what the banner says.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (xAI launch post, OpenRouter/AA benchmark tables, eesel AI pricing deep-dive + review, Benchgen, HowAIWorks, Kingy, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Grok 4.6 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/`grok-4-6`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** Post-training upgrade on Grok 4.5 (released 2026-08-12) for long-running agents and interactive/visual work — **AA Intelligence Index 44 on v4.3.2 (was 61 launch-era — see Fresh-source note)**; leads agentic knowledge work (GDPval-AA v2 1753, AA-Briefcase 1577) while trailing Sol/Fable on DeepSWE and Terminal-Bench v3. Same 500K context and $2/$6 base price as 4.5; longer trajectories, 200K price cliff, priority 2×.
- **Provider / access:** xAI API `grok-4.6` (Responses + Chat Completions); Cursor, Grok Build, OpenRouter, Vercel, Cloudflare. First-week 2× included usage promo in Cursor/Grok Build (ended). Closed API — no open weights. Not yet on Bedrock/Azure/Vertex (those still carry Grok 4.3).
- **Release / knowledge:** 2026-08-12; knowledge cutoff **2026-02-01**.
- **IDs:** `grok-4.6`.
- **Context window:** **500,000** tokens (API); **256,000 inside Cursor**; no published text output cap.
- **Modalities:** text + image in (jpg/jpeg/png ≤20MiB); text out; reasoning_effort low/medium/high (default)/xhigh; tool calls yes; web search + X search + code execution + collections (RAG) + remote MCP; context compaction for long loops.
- **Pricing (as of 2026-09-22):** **$2.00 in / $6.00 out per 1M for prompts <200K**; cached $0.50. **≥200K prompt → entire request bills $4 / $12 (cached $1)** — no partial-tier band. Priority/fast: 2× all token types (`service_tier: priority`; Cursor "Fast" same 2×). Tools extra: web/X search, code execution **$5 per 1,000 calls**. AA blended ~$1.35/M. Paid API.
- **Architecture:** proprietary; trackers say same 1.5T V9 base as Grok 4.5 (params not officially disclosed); longer post-training with model-generated reasoning + agentic RL.

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found. xAI launch table = Grok 4.6 High vs peers; AA rows independent. **Version discipline:** TB v2.1 ≠ v3.0 — do not mix.

Agent / tool use:

- GDPval-AA v2: **1753 Elo** (xAI/AA; behind Opus 5, ~Fable 5 1741, above Sol 1728)
- AA-Briefcase: **1577** (xAI; ~Fable 5 1574, above Sol 1502)
- CursorBench v3.2: **69.9%** (xAI; vs 4.5 66.7, Sol 67.2, Fable 5 70.5)
- APEX-Agents: **57.5%** (xAI; vs Sol 56.7, Fable 59.2)
- Terminal-Bench **v3.0**: **26.0%** (xAI; vs Sol 34.6, Fable 34.1 — clear loss)
- Terminal-Bench **v2.1**: **88.4%** circulating (Floatboat cites "level with leaders" — **not in xAI launch table**; treat as unverified third-party claim vs xAI's own TB3.0 26%)
- OSWorld / MCP Atlas / Toolathlon / Tau3 / Claw-Eval / Finance Agent: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** (AA v4.3.2 model page, 2026-09-28 — high and xhigh both 44; launch-era 61/60.92 citation superseded, see Fresh-source note)
- GPQA Diamond / AIME / MMLU-Pro / HLE / FrontierMath: **no verified public score found** (xAI did not publish at launch — same omission pattern as Grok 4.5)
- Harvey LAB (Vals): **15.8%** (xAI — legal reasoning, low absolute)
- AA blended price: **$1.35/M** (3:1 in:out); cost per index task: **$0.84** (AA; vs 4.5 $0.36, Sol $1.23, Opus 5 $2.34)

Coding:

- DeepSWE v1.1: **65.9%** (xAI; vs 4.5 54.0, Sol 73.0, Fable 5 70.0)
- FrontierCode v1.1 (Extended): **61.3%** (xAI; vs Sol 60.6, Fable 63.6)
- APEX-SWE: **56.4%** (xAI; vs Fable 58.8)
- Terminal-Bench v3.0: **26.0%** (see agent row)
- SWE-bench Verified / LiveCodeBench / SWE-Pro: no verified public score found (HokAI shows an ambiguous "% solved SWE-bench" fragment — not used)

Long context:

- 500K window (half of 1M frontier class; Cursor only 256K)
- MRCR / GraphWalks / ∞Bench: no verified public score found
- Context compaction supported for long agent loops (xAI docs)

Multimodal:

- Text + image in; text out only (no video/audio generation; no native video understanding claim)
- MMMU / CharXiv: no verified public score found

Latency / efficiency (AA independent):

- TTFT high-effort: **40.44s** (vs 4.5 14.62s — big regression); output ~68 tok/s; ~20% more output tokens on index vs 4.5

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 44** (high/xhigh) contradicts the launch-era 61 ("ties Sol" reading) — also resolves the internal conflict with the sibling `grok-4.7` file, which already recorded 44 for Grok 4.6; scores unchanged pending re-derivation.

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval-AA v2 1753 (top-tier), AA-Briefcase 1577, CursorBench 69.9, APEX-Agents 57.5; capped by TB v3.0 26% (if the circulating 88.4% TB2.1 were verified it would lift this, but it is not in xAI's table — hold at 90 with TB3 loss noted).
- **Reasoning: 88/100.** (Score held from the launch-era derivation; Fresh-source note below: AA-native Index is now 44 on v4.3.2, not 61.) Capped hard by **no GPQA/HLE/AIME/MMLU published** — evidence gap on science reasoning keeps it below 92+ regardless; re-derivation deferred pending new first-party numbers.
- **Context window: 75/100.** **500K only** (vs 1M+ frontier norm; Cursor 256K); no MRCR row; compaction helps but window is the constraint → 75.
- **Multimodal: 65/100.** Text + image in only → 60–70 band → 65.
- **Coding: 84/100.** DeepSWE 65.9, FrontierCode 61.3 ≥ Sol, APEX-SWE 56.4 solid; capped by **TB v3.0 26% well behind Sol/Fable ~34%** and DeepSWE −7 pts vs Sol; TB2.1 88.4% unverified.
- **Cost efficiency: 72/100.** $2/$6 under 200K excellent vs Sol $5/$30; but **200K cliff doubles whole request**, cache rose to $0.50 (from $0.30 on 4.5), TTFT 40s and +20% output tokens raise **cost-per-task to $0.84** (AA) vs 4.5 $0.36 — sticker good, realized agent cost mid.
- **Overall Score: 80/100.** Mean of five quality dims (90+88+75+65+84)/5 = 80.0 → 80. Best-fit: long-horizon agentic **knowledge work** (GDPval/Briefcase) at Sol-composite intelligence for ~¼ the output price under 200K; not for terminal-SOTA coding (TB3), >500K context, or science-benchmark procurement (GPQA unpublished).

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (xAI Grok 4.6 announcement, llm-stats launch breakdown, DataCamp comparisons, Floatboat reality check, HokAI hub, elsolitario); scores are normalized 1–100 interpretations, not official vendor scores; most raw rows are xAI self-reported (High effort) unless marked AA.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

