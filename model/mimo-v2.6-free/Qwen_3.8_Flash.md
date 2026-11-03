# MiMo V2.6 Free — findings by Qwen 3.8 Flash

- Source: Xiaomi MiMo / MiMo-V2.6-Flash Free on OpenCode Zen (`opencode/mimo-v2-6-free`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — free tier still live (2026-10-23/11-03 listings, no end date posted); AA current-build scale reads Flash at 27 vs launch-era 37.9 — logged un-averaged as scale drift; arms.ai's "46.32 for Flash" identified as the Pro row, declined; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (MiMo-V2.6-Flash weights, limited-time $0 Zen tier)
- **Short description:** Xiaomi's Sept-2026 MIT-licensed omnimodal sparse MoE (309B total / 15B active, Flash-RL) served free on OpenCode Zen — frontier-band agentic/terminal coding at $0, on a 200K-capped deployment of the native 1M model, with a badly negative factuality profile.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2-6-free` (docs list it as "MiMo-V2.6-Flash Free", Chat Completions; paid sibling `mimo-v2.6-flash` $0.14/$0.28). Open weights `XiaomiMiMo/MiMo-V2.6-Flash-RL` (MIT); also Xiaomi MiMo platform / OpenRouter.
- **Release / knowledge:** MiMo-V2.6 series announced 2026-09-21/22 (mimo.xiaomi.com); free window opened shortly after ("free for a next week" promo, still listed Free in Zen docs); knowledge cutoff not disclosed.
- **IDs:** `opencode/mimo-v2-6-free` (Zen catalog), a.k.a. `opencode/mimo-v2.6-flash-free` in third-party trackers.
- **Context window:** **200K tokens on the Zen free deployment** (verified via mastra.ai OpenCode table and pi.dev package registry, both "200K") — native model is 1M. NOTE: the curated `meta.json` says "128K total / Text in/out / Standard pricing" — a placeholder contradicted by the verified 200K omni-modal $0 tier; scored on the verified data.
- **Modalities:** text, image, video, audio in; text out; reasoning + tool calls (mimo parsers). The Zen text-only curation understates the native omnimodal stack (681M MiMo ViT + audio encoders).
- **Pricing (as of 2026-10-02):** $0 / $0 limited-time free tier (data may be used for training during the free period — do not submit confidential code); paid route $0.14 / $0.28 per 1M (cached $0.0028).
- **Architecture:** open-weights sparse MoE, 309B total / 15B active, 256 routed experts (8 active), MIT.

### Raw benchmarks found

> Same weights as `mimo-v2.6-flash` — verified rows reused from that audit: BenchLM (66.36/100, #28 of 645) citing the Xiaomi MiMo-V2.6 technical report / HF model card (vendor-run Flash column) and Artificial Analysis (fetched 2026-10-02). Zen-tier deltas are the 200K cap and $0 pricing.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (vendor; Pro 89.9); TB 4.0 **28.8%**
- Toolathlon-Verified **73.6%**; OSWorld-Verified **80.8%**; AutomationBench **52.3%**; JobBench 61.2%; Agents' Last Exam 27.6%; CyberGym **95.1%**; ExploitGym 6.0%
- GDPval-AA 2.1 measured only for Pro (1673); Claw-Eval: no verified public Flash row

Reasoning / knowledge:

- AA-HLE: **35.1%** — under the 40% bar; AA Intelligence Index **37.9**; AA-LCR **74.3**; CritPt **12.0**
- Omniscience Index **-12.7** (Accuracy 27.0% / Hallucination 54.4%) — guesses wrong more often than abstains right

Coding:

- DeepSWE v1.1 **67.9%** (under the 74 ref); ProgramBench **26.0%**; MiMo Code Bench 61.2% (in-house)
- No SWE-bench Verified / LiveCodeBench / Coding-Index rows published for Flash

Multimodal / long context:

- AA-MMMU-Pro **73.1** — the only published visual row despite omnimodal input
- Native 1M window (AA-LCR 74.3), but the scored Zen tier caps at 200K; no ≥98% MRCR-at-length reported.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** Terminal-Bench 2.1 87.6%, Toolathlon 73.6%, OSWorld-Verified 80.8% and CyberGym 95.1% are a frontier agentic cluster (vendor-run) for a 15B-active model; TB 4.0 28.8%, ExploitGym 6.0% and ALE 27.6% hold it at the band floor.
- **Reasoning: 68/100.** AA-LCR 74.3 is decent long-context reasoning, but HLE 35.1% misses the 40% bar, Index 37.9 and CritPt 12.0 are mid, and the **-12.7 Omniscience index** (54.4% hallucination) is a severe unaided-factuality penalty.
- **Context window: 70/100.** The scored Zen tier is capped at 200K (200K–500K band, 200K reference = 70) even though the native model reaches 1M — same tier-cap treatment previously given to MiMo V2.5 Free; no ≥98%-at-length retrieval row published.
- **Multimodal: 90/100.** Text+image+video+audio in / text out is the audio/video 90–100 band; the single visual row (MMMU-Pro 73.1) and absent audio/video benchmark rows keep it at the floor.
- **Coding: 80/100.** TB 2.1 87.6% is strong agentic code, but DeepSWE 67.9% and SciCode-adjacent suites sit under refs, ProgramBench 26.0% is weak, and no SWE-bench Verified row exists to lift the band.
- **Cost efficiency: 100/100.** $0 in / $0 out limited-time Zen free tier; MIT weights allow self-hosting at ~$0.02-equivalent. Free-period data-consent caveat applies. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 90, Reasoning 68, Context 70, Multimodal 90, Coding 80 = 398/5 = 79.6 → 80. Best fit: the cheapest frontier-adjacent agentic/omnimodal coder available — excellent for high-volume terminal/tool work and media ingestion where answers stay grounded in retrieved context; do not rely on it for unaided factual recall (-12.7 Omniscience), and escalate length-sensitive jobs to the paid 1M native endpoint (or the Pro sibling for cleaner reasoning).

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Free-tier status — https://opencode.ai/v2/docs/console/models/ (**"MiMo-V2.6-Flash Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model"** — still the standing wording) and https://sharkly.ai/blog/opencode-free-models/ (free-model list **fetched 2026-10-23** still includes **"Exo Free, MiMo-V2.6-Flash Free"**) and https://usagebox.com/articles/opencode-zen-go-pricing-2026 (2026-10-23: free lineup **"…Exo Free, MiMo-V2.6-Flash Free, MiMo-V2.5 Free, three Nemotron free endpoints"**) and https://planlimits.aiw3b.com/tool/opencode/ (**"OpenCode plans, limits & pricing (verified 2026-11-03)"** — free lane incl. MiMo-V2.6-Flash Free current today) and https://github.com/precis1onz/tokenation (**"mimo-v2.6-flash-free … 37.9, 未公布截止日"** — "no deadline published", index column matching pass 1) · index scale drift — https://artificialanalysis.ai/models/comparisons/mimo-v2-6-flash-vs-step-5 (**"Step 5 Preview scores 29, compared with MiMo-V2.6-Flash at 27 on the Artificial Analysis Intelligence Index"**) vs pass 1's 37.9 (BenchLM fetch 2026-10-02) — NOT averaged · family attribution guard — https://mimo.xiaomi.com/mimo-v2-6 (**"MiMo-V2.6-Pro scores 46.32 … surpassing Kimi K3 and Qwen3.8 Max"**) and https://x.com/ArtificialAnlys/status/2102128560962187701 (**"MiMo-V2.6-Pro debuts as the top open weights model … (46). At $0.13 per Intelligence Index task"**) vs https://armes.ai/docs/models/xiaomi/mimo-v2.6-flash (misattributes **"It scored 46.32 on the AA Intelligence Index"** to Flash — a Pro row in a Flash page; declined per exact-ID rule) and https://cellcog.ai/blog/mimo-v2-6/ (family-level **"1.02T MoE, 42B active … 46 on the AA Intelligence Index"** — the Pro-tier framing) · paid-sibling pricing — qualifying report `mimo-v2.6-flash` (2026-11-03 pass: OpenRouter input cut **$0.14→$0.10/$0.28**, official cached $0.0028) — $0 tier untouched.

**What moved and how it was resolved:**

1. **The "free for a next week" promo (2026-09-21) has outlived its promise:** four independent listings dated 2026-10-23 through today (2026-11-03) still show the $0 tier live, and tokenation records "no deadline published". Cost 100 stands, with the standing caveat (data may be used for training during the free period).
2. **AA Intelligence Index cascade logged, no band move:** 37.9 (pass-1 fetch) → **27** on AA's current comparison pages (same v5.0-scale rebuild pattern as GLM-5.3-Flash's 57→42→28 and this report's sibling rows — the newer index adds Terminal-Bench 4.0/FrontierCode 2.0 etc. and resets the scale). Reasoning 68 rests on HLE 35.1% (under the 40 bar), CritPt 12.0 and the **-12.7 Omniscience** profile — none of which depend on the index number.
3. **Attribution guard applied:** arms.ai's "46.32" belongs to MiMo-V2.6-**Pro** (vendor + AA's own debut post both pin 46.32/46 to Pro); it is NOT merged into this Flash-tier report per the exact-ID rule. The Pro sibling's stronger reasoning is already noted in the "escalate to Pro" guidance.
4. **200K Zen cap reconfirmed** (no change to the scored serving tier; native 1M remains the paid-route fact). No new independent Flash-row measurements (SWE-bench Verified etc.) appeared for the family since 2026-10-02.

**Scores changed by this pass:** none. Tool 90, Reasoning 68, Context 70, Multimodal 90, Coding 80 → mean 79.6 → **Overall 80 unchanged**; Cost 100 verified.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (OpenCode Zen docs confirming "MiMo-V2.6-Flash Free" $0 tier — fetched 2026-10-02; mastra.ai + pi.dev trackers for the 200K Zen cap; mimo.xiaomi.com V2.6 series page; BenchLM rows citing the Xiaomi MiMo-V2.6 technical report and Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. Flagged the curated meta.json placeholder (128K/text-only/"standard pricing") against the verified 200K omni-modal $0 free tier; benchmark rows are vendor-run unless marked AA/BenchLM.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenCode docs, sharkly/usagebox/planlimits/tokenation free-tier snapshots dated through today, AA comparison pages, vendor + AA-Pro debut post); Index 37.9→27 scale drift logged un-averaged; a misattributed Pro score declined per exact-ID rule — **no dimension changed and Overall remains 80**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
