# Kimi K2.7 Code HighSpeed — findings by GLM 5.3

- Source: Moonshot AI (`moonshot/kimi-k2.7-code-highspeed`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** The high-speed serving tier of Kimi K2.7 Code — officially "the same model as Kimi K2.7 Code, but with an output speed of approximately 180 Tokens/s and up to 260 Tokens/s in short context scenarios" (verbatim re-confirmed on the Kimi Platform quickstart this pass). Second pass imports the base model's **freshly settled measurements (this repo's 2026-10-13 Kimi K2.7 Code second pass)** per the same-model claim: τ³ 20.2% #95 and GDPval 26.9% #147 filled in weak, DeepSWE 30.5% #62, non-hallucination 17.6% #306, and the base tier's OpenRouter floor fell to $0.671/$3.35 — making this tier's latency premium ~2.8× the floor. Top use case: time-critical long-horizon MCP coding where wall-clock matters.
- **Provider / access:** Kimi API Platform (`https://api.moonshot.ai/v1`, OpenAI-compatible; also the Anthropic-compatible endpoint; the model appeared in the official Kimi API list alongside K3 as of 2026-07-24 — openk3); NOT on OpenCode Zen. Base64 image / uploaded video input per the quickstart.
- **Release / knowledge:** with the K2.7 Code generation — **2026-06-12** (base-model release date, now resolved); knowledge cutoff not published.
- **IDs:** `kimi-k2.7-code-highspeed` (Kimi Platform). No Zen ID.
- **Context window:** **262,144 tokens** (confirmed; shared with the base tier).
- **Modalities:** platform docs list **text + image (png/jpeg/webp/gif) + video (mp4/mpeg/mov/avi/webm…) input**, text output — CONFLICT flagged: no vision benchmark row exists for the model anywhere (the base-model pass reads text-only from the measurement side; the quickstart's format list is the capability-side evidence — scored on capability with a zero-measured-vision discount); thinking always on (error if disabled; temperature 1.0, top_p 0.95); tool calls (tool_choice auto/none; keep `reasoning_content` in multi-turn tool context).
- **Pricing (as of 2026-10-13):** $1.90 per MTok input (cache miss; $0.38 cache hit) / $8.00 output — unchanged 2× the base list price, but **~2.8× the base tier's OpenRouter floor ($0.671/$3.35)** after the summer price cuts; a pure latency premium.
- **Architecture:** identical to Kimi K2.7 Code (same-model claim): 1T-total / 32B-active MoE post-trained on the K2.6 base, modified MIT open weights; ~30% lower overthinking and ~10% agentic improvement vs K2.6 (official, qualitative).

### Raw benchmarks found

> All rows are the shared K2.7 Code model's scores (same-model claim; imports the settled values from this repo's 2026-10-13 base-model second pass — BenchLeader 54.5 #231, last measured 2026-10-08; the first pass's "BenchLM composite 54.59 #71" superseded).

Agent / tool use:

- **τ²-Bench: 90.1% #66** — but **τ³-Banking: 20.2% #95** (gap filled; weak)
- Terminal-Bench: 2.1 **67.0% #36 (Vals) / 67.4% #76 (AA)**; TB Hard **44.7% #36**; **TB 4.0 (AA): 1.0% #121**
- **GDPval-AA: 26.9% #147** (updated from 1114/26.3% — bottom-half)
- **MCP Atlas 76%; MCP Mark Verified 81.1%** (official — the launch headline that beat Opus 4.8); **Vending-Bench 2: 5082.9 #30**; SkillsBench 50.0% #22; APEX-Agents 37.6% #42; GBAEval 0.8% #18; LiveBench Agentic 45.7% #53; Kimi Claw 24/7 46.9%; AA Agentic Index 22.5%; Claw-Eval still unmeasured

Reasoning / knowledge:

- GPQA Diamond: Epoch 87.9% #61 / AA 89.6% #70 — below the 90% bar on both
- HLE: **35.0% #115** (below the 40% reference); CritPt 10.0% #113 (weak); SimpleBench 57.9% #34; LiveBench Reasoning 82.8% #45
- Math: **OTIS 95.6% #39**; FrontierMath T1-3 54.0% #46 / **T4 12.2% #57** (weak); LiveBench Math 79.6% #62
- **Honesty poor: AA-Omniscience non-hallucination 17.6% #306** (accuracy 39.6% #123; index −10.2 #187); SimpleQA 36.5% #46
- **AA Intelligence Index 25.8 #152** (settled); AA-LCR **79.3% #94**; ECI 150.0 #54; LiveBench global 68.4% #58

Coding:

- **SWE-bench (Vals): 78.2% #30; LiveCodeBench (Vals): 82.0% #56** (confirmed); **Vibe Code v1.1: 47.2% #54** (gap filled; mid); LiveBench Coding 74.0% #54; WeirdML 54.1% #61; Surface Evolver 48.8% #19; Kimi Code Bench v2 62.0%
- New weak rows: **DeepSWE v1.1: 30.5% #62**; SciCode 47.5-47.8% #113-121 (below the 55% reference); **Code Migration 25.4% #40**; ProgramBench 0.0% #23; ALE-Bench 886.2 #61; FrontierCode 30.1% #28; **SWE-bench Verified (official): still missing**

Long context:

- 262,144 tokens; **AA-LCR 79.3% #94** — good measured retrieval (Long context 65 is the base's best BenchLeader category); no MRCR/RULER rows.

Multimodal:

- Platform-verified text+image+video input (official quickstart format lists) — **but zero measured vision rows exist anywhere** (conflict with the text-only measurement picture documented); text output; Design Arena Website 1273 (a text-generation score, not vision).

### Normalized scores (1–100)

- **Tool use: 68/100.** Lowered from 72: the base-model gaps filled weak — τ³ 20.2% #95, GDPval 26.9% #147, GBAEval 0.8%, TB 4.0 1.0% — against the genuinely elite MCP credentials (Mark Verified 81.1%, Atlas 76%), τ² 90.1% #66, TB 2.1 67% #36, TB Hard #36, and Vending #30. Speed changes none of this.
- **Reasoning: 68/100.** Raised from 62: the settled base picture is stronger than the first pass's mid read — OTIS 95.6% #39, SimpleBench #34, LiveBench Reasoning 82.8% #45, AA-LCR 79.3% #94 — capped by GPQA 87.9-89.6% below-bar, HLE 35.0%, CritPt 10.0%, FrontierMath T4 12.2%, and poor honesty (17.6% #306).
- **Context window: 73/100.** Raised from 72: 262K confirmed with good measured retrieval (AA-LCR 79.3% #94).
- **Multimodal: 62/100.** Lowered from 72: the platform docs verify image+video input for the tier, but the zero measured vision rows (and the base model's text-only measurement profile) force a capability-without-evidence discount.
- **Coding: 68/100.** Lowered from 74: SWE-V 78.2% #30 and LCB 82.0% #56 hold and Vibe 47.2% #54 fills mid — but DeepSWE 30.5% #62 (new), SciCode ~47.5%, Code Migration 25.4%, ProgramBench 0%, and the still-missing official SWE-V row cap it.
- **Cost efficiency: 70/100.** Lowered from 72: $1.90/$8.00 (cache hit $0.38) is unchanged, but the base tier's OpenRouter floor fell to $0.671/$3.35 — the latency premium is now ~2.8× the floor (was 2× the list). Buy only when wall-clock on long coding runs matters.
- **Overall Score: 68/100.** (68 + 68 + 73 + 62 + 68) / 5 = 67.8 → 68, down from 70. Best-fit: identical brain to Kimi K2.7 Code at ~2-4× the token speed — an elite-MCP, honest-cheap workhorse's fast lane; with the base tier now at $0.671/$3.35, reserve the 2.8× premium for genuinely time-critical long-horizon coding runs and use the base otherwise.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (the Kimi Platform official quickstart re-verified for the verbatim same-model claim and the 180/260 tok/s spec; the settled benchmark rows imported from this repo's same-day Kimi K2.7 Code second pass — BenchLeader/Epoch/AA/Vals harnesses as cited there; DDG-lite searches surfacing the openk3 guide confirming the model IDs, 262,144 window, always-on thinking, and the 2026-07-24 API-list appearance alongside K3; modality conflict — platform vision docs vs zero measured vision rows — documented rather than resolved); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
