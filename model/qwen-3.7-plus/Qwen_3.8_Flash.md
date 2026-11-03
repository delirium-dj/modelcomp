# Qwen 3.7 Plus — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Plus-tier pricing published nowhere before, now verified **$0.40/$1.60 (cached $0.08) ≤256K, steps to $1.20/$4.80 beyond** (Cost 82 provisional→85 verified); AA independent agentic rows (GDPval 13.7%, τ-Banking 17.5%) corroborate pass 1's weak-long-horizon call; quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's Plus-tier multimodal agent model (Qwen3.7-Plus launch) — olympiad-strong math and clean instruction following, but independent agentic/AA scores trail the vendor-screenshot numbers and long-horizon GDPval is weak.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope (`qwen3.7-plus`), also on OpenCode Zen (`opencode/qwen-3.7-plus`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (Alibaba Cloud blog "Qwen3.7-Plus: Multimodal Agent Intelligence"); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.7-plus` / DashScope `qwen3.7-plus`.
- **Context window:** BenchLM and the Alibaba launch list **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of the 1M evidence below.
- **Modalities:** text, image, video (and document/OCR) in; text out; reasoning on; tool calls. curated `meta.json` lists "Text in/out" only — conflict, resolved in favour of the extensive multimodal evidence.
- **Pricing (as of 2026-10-02):** Plus-tier "standard pricing" (low/mid, exact per-1M rate not published in curated meta).
- **Architecture:** proprietary hosted Plus tier (Qwen open-weight siblings exist separately).

### Raw benchmarks found

> Independently verified against BenchLM (70 of 618 rows; 56.54/100, #59 of 645), citing the Alibaba Cloud Qwen3.7-Plus launch benchmarks, Artificial Analysis, Vals AI, OSWorld 2.0 and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- τ²-bench **93.0%**; MCP Atlas 73.2%; BFCL v4 72.9%; AndroidWorld **81.0%**; OSWorld-Verified 73.3%
- Terminal-Bench 2.0 70.3% but **Terminal-Bench 2.1 (Vals) only 52.8%** (under the 88 ref)
- **GDPval-AA 886 (normalized 12.8%)** and AA Agentic Index **19.7%**, OSWorld 2.0 **2.8%**, APEX-Agents-AA 22.4% — independent long-horizon scores are weak

Reasoning / knowledge:

- GPQA-Diamond 90.3/90.0%; HLE **34.7%** (AA 35.6%) — under the 40% bar; MMLU-Redux 94.5%; MMLU-Pro 88.5%; SuperGPQA 71.4%
- HMMT Feb 2026 **92.9%** / IMOAnswerBench 86.0% — strong olympiad math; Intelligence Index **25.2** (low); CritPt 9.1%
- Omniscience Index 1.1 / Accuracy 22.5% / Hallucination 27.7% (abstains rather than guesses, but low raw accuracy)

Coding:

- LiveCodeBench **89.6%**; SWE-bench Verified 77.7%; SWE Multilingual 75.8%; SWE-bench Pro 57.6%
- AA Coding Index **55.9%** (low); SciCode 51.3 / AA-SciCode 46.1 (under the 55 ref); NL2Repo 41.1%

Multimodal / long context:

- Video-MME (subtitle) **88.0%**; VideoMMMU 85.4%; MLVU 87.4%; CharXiv 85.9%; MathVision 90.3%; RealWorldQA 86.9%
- OCRBench V2 70.7%; OmniDocBench 1.5 **91.4%**; ScreenSpot Pro 79.0%; AA-MMMU-Pro 80.5%
- **MRCRv2 91.7%** at 1M window (AA-LCR 73.0) — strong long-context retrieval.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 68/100.** τ²-bench 93.0%, MCP Atlas 73.2% and AndroidWorld 81.0% are strong single-turn tool skills, but Terminal-Bench 2.1 (Vals) 52.8% is far under the 88 ref and the independent long-horizon cluster — GDPval-AA 886 (12.8% normalized), Agentic Index 19.7%, OSWorld 2.0 2.8%, APEX 22.4% — shows vendor screenshots overstate real agentic reliability.
- **Reasoning: 74/100.** GPQA-Diamond 90.3%, MMLU-Redux 94.5% and olympiad math (HMMT 92.9%, IMO 86.0) are genuinely strong, but HLE 34.7% misses the 40% bar and Intelligence Index 25.2 / CritPt 9.1% / Omniscience accuracy 22.5% are low — solid textbook recall, weak frontier reasoning depth.
- **Context window: 95/100.** 1M-token window (per BenchLM + launch) with **MRCRv2 91.7%** retrieval is a strong long-context showing; short of 100 (no ≥98% at 512K+) and the curated meta conflicts at 128K, so the ≥1M band floor.
- **Multimodal: 85/100.** Text+image+video+document in with a broad, well-populated multimodal suite (Video-MME 88.0, MLVU 87.4, CharXiv 85.9, OmniDocBench 91.4) — deep in the +video band (75–90); no audio-in or non-text-output rows, so below the 90 tier.
- **Coding: 74/100.** LiveCodeBench 89.6% and SWE-bench Verified 77.7% are good, but AA Coding Index 55.9%, SciCode 46.1% (under ref) and NL2Repo 41.1% keep the agentic/repo-code profile mid.
- **Cost efficiency: 85/100.** (Revised by the 2026-11-03 second pass from 82/100: exact rates now verified — **$0.40 in / $1.60 out per 1M (cached input $0.08) up to 256K input tokens, stepping to $1.20/$4.80 beyond** on Alibaba's international list (tier-1 keeps typical agent runs ~$0.20/task per cloudzero's worked example) — well under the $1.25/$4.25≈88 anchor; the >256K cliff and the absence of a $0 tier keep it a notch below that anchor rather than above it. Cost is excluded from Overall.
- **Overall Score: 79/100.** Mean of Tool 68, Reasoning 74, Context 95, Multimodal 85, Coding 74 = 79.2 → 79. Best fit: low-cost multimodal document/video understanding, math and long-context retrieval at 1M where tool-calls are single-turn — for sustained autonomous agent loops or frontier-depth reasoning, its vendor-screenshot lead does not hold up against the AA/Vals numbers.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://cabina.ai/blog/qwen-api-pricing/ (2026-10-19: **"Qwen3.7-Plus costs $0.40 input and $1.60 output per 1M tokens up to 256K tokens of context, then jumps to $1.20 input and $4.80 output beyond that"**) and https://www.cometapi.com/qwen3-7-plus-api-pricing/ (**"starts at $0.40/M input and $1.60/M output on Alibaba's US-local route, while the Global route starts at $0.276/M and $1.101/M"**) and https://therouter.ai/models/qwen--qwen3.7-plus/ (**"Alibaba's international list price is tiered by input length: $0.40/$1.60 per 1M input/output tokens up to 256K input tokens"**) and https://www.cloudzero.com/blog/qwen-api-pricing/ (2026-10-15 tier worked example: **"Qwen3.7-Plus, averaging 3,000 input and 500 output tokens, stays in tier one"**) and https://openrouter.ai/qwen/qwen3.7-plus (aggregate lanes **"$1.28 … $0.40, $0.032"** [cached] — priciest route vs $0.40 floor; plus AA rows **"τ-Bench Banking, 17.5%"**, **"GDPval-AA, 13.7%"**, **"AA-LCR, 73.0%"**) and https://apidog.com/blog/how-to-use-qwen-3-7-plus-api/ (**"$0.40 per million input tokens and $1.60 per million output tokens, with cached input at $0.08"**) · lifecycle/status — https://www.alibabacloud.com/help/en/model-studio/newly-released-models (snapshot lineage **"qwen3.7-plus-2026…"**, base **"a snapshot taken on June 8, 2026"** — active catalog entry) and https://openrouter.ai/qwen/qwen3-8b (**"This model is being deprecated on Oct 9, 2026. We recommend migrating to Qwen3.7 Plus"** — 3.7 Plus is a deprecation TARGET, not a target: Qwen3.8 shipped Max/2.4T only, no Plus successor) and https://felloai.com/qwen-3-7-max-review/ (contrast: **"Artificial Analysis now marks Qwen3.7-Max as deprecated"** — the Max sibling retired, the Plus id not) and https://artificialanalysis.ai/models/qwen3-7-plus/providers (live AA provider page: **"Qwen3.7 Plus ($0.30)"** blended per https://artificialanalysis.ai/providers/alibaba_cloud) · benchmark — https://benchlm.ai/models/qwen3-7-plus (2026-06-03-dated page, now **#83 of 216 at 53.79** — registry-rescale note, rows unchanged) and https://mlq.ai/news/alibaba-launches-qwen37-plus-a-multimodal-agent-model-that-sees-screens-and-writes-code/ (**"79.0 on ScreenSpot Pro versus GPT-5.4's 67.4 and 81.0 on AndroidWorld"** — vendor framing matching pass 1's rows).

**What moved and how it was resolved:**

1. **Cost 82→85 (provisional→verified):** pass 1 scored a mid-band guess because "exact per-1M rates unpublished". The list is now five-source-verified at $0.40/$1.60 (cached $0.08) with a documented >256K step to $1.20/$4.80. Anchoring: output sits ~38% of the $1.25/$4.25≈88 anchor, input ~68% — comfortably under 88 on tier-1 traffic, but the cliff (which hits exactly the 1M-context use cases this model is bought for) and the missing $0 tier trim it to **85**. AA's blended $0.30 reading and OpenRouter's $1.28 premium lane logged side by side, un-averaged.
2. **Lifecycle check — still current:** the June-2026 snapshot series remains in Alibaba's active catalog; OpenRouter routes Qwen3-8B deprecations *to* it; no Qwen3.8-Plus successor exists (3.8 shipped as Max/2.4T). Unlike its 3.7-Max sibling (AA-marked deprecated), this id keeps its live ranking.
3. **Independent weak-long-horizon evidence reconfirmed:** AA's τ-Banking 17.5% and GDPval-AA 13.7% (normalizing pass 1's 12.8%) reinforce Tool 68 — the vendor-screenshot overstatement finding stands. No GPQA/HLE/multimodal row moved; quality bands untouched.
4. **Overall arithmetic:** Cost excluded; 68+74+95+85+74 = 396/5 = 79.2 → **Overall 79 unchanged**.

**Scores changed by this pass:** Cost efficiency 82→85 (excluded from Overall). **Overall remains 79.**

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Alibaba Cloud Qwen3.7-Plus launch benchmarks, plus Artificial Analysis, Vals AI, OSWorld 2.0 and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (cabina, cometapi, therouter, cloudzero, OpenRouter+AA rows, apidog, Alibaba lifecycle docs, felloai, mlq); Cost 82→85 provisional→verified on the $0.40/$1.60 + >256K-cliff list; id confirmed non-deprecated with no 3.8 successor — **no quality dim changed and Overall remains 79**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
