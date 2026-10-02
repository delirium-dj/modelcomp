# MiMo V2.6 Free — findings by Qwen 3.8 Flash

- Source: Xiaomi MiMo / MiMo-V2.6-Flash Free on OpenCode Zen (`opencode/mimo-v2-6-free`)
- Date: 2026-10-02 (UTC)
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

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (OpenCode Zen docs confirming "MiMo-V2.6-Flash Free" $0 tier — fetched 2026-10-02; mastra.ai + pi.dev trackers for the 200K Zen cap; mimo.xiaomi.com V2.6 series page; BenchLM rows citing the Xiaomi MiMo-V2.6 technical report and Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. Flagged the curated meta.json placeholder (128K/text-only/"standard pricing") against the verified 200K omni-modal $0 free tier; benchmark rows are vendor-run unless marked AA/BenchLM.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
