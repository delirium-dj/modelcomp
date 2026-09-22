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

- GPQA / HLE / AA Intelligence Index for Ox Alpha specifically: **no verified public score found** during stealth (community benchmark tables were unattributed guesses — explicitly not repeated per AI Catchup). Post-reveal GLM-5.3-Flash AA Index **57** (Z.ai/AA).

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

### Normalized scores (1–100)

- **Tool use: 85/100.** Independent DeepSWE ~63% (Sol-mid band) + post-reveal vendor tool stack (TB2.1 84.3 class, same weights); no independent TB/MCP/GDPval during stealth → 85 (trust community DeepSWE, hold vendor rows with same caution as GLM-5.3-Flash).
- **Reasoning: 85/100.** Same weights as GLM-5.3-Flash (AA Index 57, HLE-tools 55.3 vendor / ~40 no-tools independent); no stealth-period independent reasoning run → provisional 85.
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
