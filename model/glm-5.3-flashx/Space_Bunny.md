# GLM-5.3 FlashX — findings by Space Bunny

- Source: Z.ai (`glm-5.3-flashx`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-09 (Overall 86).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 FlashX
- **Short description:** Z.ai's **high-speed serving tier** for GLM-5.3-Flash, released 2026-09-18. It is the *same* 320B-total / 18B-active MoE weights as GLM-5.3-Flash — the difference is inference infrastructure (up to 200 tokens/s) and price (~$2.5× the Flash rate), not capability. Top use case: high-throughput agent loops and coding assistants that call the model repeatedly and need low per-call latency. It is **not a separate model**: OpenRouter, Puter and sri-0's model card all describe it explicitly as "the high-speed variant of Z.ai's GLM-5.3-Flash", and OpenRouter lists one provider for it. Second pass found **no successor, no deprecation and no FlashX-specific benchmark run** — every number below is inherited from the identical GLM-5.3-Flash weights.
- **Provider / access:** Z.ai Chat Completion API (`glm-5.3-flashx`); OpenRouter (`z-ai/glm-5.3-flashx`, one provider); NVIDIA NIM; B.AI. Chat Completions API. No OpenCode Zen ID found.
- **Release / knowledge:** FlashX launched 2026-09-18 (OpenRouter); base GLM-5.3-Flash launched 2026-08-26 (stealth-tested as `ox-alpha`). Knowledge cutoff: not disclosed by Z.ai.
- **IDs:** `glm-5.3-flashx` (Z.ai), `z-ai/glm-5.3-flashx` (OpenRouter)
- **Context window:** **1,000,000 tokens** (1,048,576 on the NVIDIA NIM endpoint), **128K max output** (131,072 documented by B.AI and anotherwrapper). Verified on Z.ai's official GLM-5.3-Flash/FlashX docs page and the official pricing page; unchanged this pass.
- **Modalities:** Video, image, text and file in → text out. Vision is native (built into the coding loop, not a bolted-on VL head). Reasoning: always on, cannot be disabled; `reasoning_effort` accepts **low / high / max**, defaults to **max**; `thinking.type: "disabled"` is rejected outright. Tool calls: yes (function calling + streamed tool calls + context caching). Structured output / JSON schema: yes. **Conflict to note:** devtk.ai's capabilities block for this ID lists only `text, function_calling, structured_output` — that is an aggregator simplification, contradicted by Z.ai's own docs, NVIDIA NIM (up to 8 images/request) and Puter (video input); I follow the vendor.
- **Pricing (as of 2026-10-17):** **$0.37 in / $0.075 cached / $1.25 out** per 1M — now confirmed on Z.ai's **official pricing page** (`docs.z.ai/guides/overview/pricing`), which lists GLM-5.3-FlashX as `$0.37 / $0.075 / Limited-time Free / $1.25`. Two new facts this pass: (a) the cached-input rate is **officially $0.075**, not the $0.03 the first pass carried over from base Flash — OpenRouter shows $0.09, so prefer Z.ai's own figure; (b) cache **write** storage is listed by Z.ai as **"Limited-time Free"** — that is a genuine discount but **no end date is published**, and it is storage, not token price. Base GLM-5.3-Flash is $0.15 / $0.03 / $0.50; flagship GLM-5.3 is $1.40 / $4.40. Paid only.
- **Coding Plan status — unresolved conflict:** Z.ai's GLM-5.3-Flash/FlashX docs page now says "**GLM-5.3-Flash is now fully available on the GLM Coding Plan**", but it names Flash, not FlashX; sri-0's model card still records "Z.ai notes FlashX is not yet available on its GLM Coding Plan", and the first pass reached the same conclusion. I treat FlashX as still **not** on the plan until Z.ai names it explicitly. Separately, B.AI runs a **70%-of-list limited-time discount on GLM-5.3-Flash** from 2026-10-03/04 (70% from Oct 3 17:00 SGT, or Oct 4 10:00 SGT, depending on which cached B.AI doc you read) — that promo is for **Flash, not FlashX**, and widens FlashX's effective premium whenever it is live.
- **Architecture:** **320B total / 18B active MoE, MIT-licensed open weights** (identical to GLM-5.3-Flash; **the published weights are Flash's — FlashX itself has no separately published weights**, so its "open-weight status is not stated" per sri-0). 45 decoder layers: 34 KDA linear-attention interleaved with 11 DeepSeek sparse attention, plus Manifold-Constrained Hyper-Connections (mHC), 288 routed experts with top-8 routing, a vision encoder, 1 MTP draft layer. Pre-trained on a 30T-token multimodal corpus; Z.ai reports ~3.0× less attention compute and ~4.4× smaller KV cache vs. GLM-5.3.

### Raw benchmarks found

> **Inherited benchmarks.** FlashX shares weights with GLM-5.3-Flash; no independent harness has ever measured the FlashX *endpoint* itself. **Artificial Analysis has no FlashX entry at all** — its measured GLM-5.3-Flash figures (Index 42, 57.7 tok/s) are the standard tier, not FlashX, and AA has not verified Z.ai's "up to 200 tokens/s" claim. Every FlashX number here is a Flash number, and the 200 tok/s claim remains **vendor-reported and unverified**.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai launch post, via llm-stats; independently restated by benchlm.ai) — vs GLM-5.2 81.0%, GLM-5.3 flagship 88.2% on benchlm, Opus 4.8 85.0% and Gemini 3.7 Flash 85.8% in Z.ai's own table
- Terminal-Bench 2.1 (Vals harness): **62.9%** (benchlm.ai; GLM-5.3 flagship 71.5% on the same harness) — a 21-point harness drop, kept separate
- Terminal-Bench 4.0: **33%** (Artificial Analysis Index v4.3.2, run on the standard Flash tier)
- Toolathlon-Verified: **78.4%** (Z.ai, self-reported — actually *above* the GLM-5.3 flagship's 73.0%)
- AutomationBench: **48.8%** (Z.ai v1.0.6) / **60%** on AA's own AutomationBench-AA harness — vendor and independent disagree by 11 points, both listed
- GDPval-AA v2.1: **1641 Elo** (Artificial Analysis); AA-Briefcase v1.1 **1452**
- Agents' Last Exam: **26.3%** (Z.ai; vs GLM-5.2 20.4%). APEX-Agents **52.8%**
- NEW — benchlm.ai Z.AI provider page (last updated 2026-10-16): GLM-5.3-Flash **agentic public-lane score 57.2 (#36/128)** vs flagship 70.2 (#8/128); **Hermes Bench 68.9%**; **MazeBench 0%** (tie with the flagship)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon-Verified 78.4% (above); MCP-Atlas and SWE Atlas Codebase QnA — no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (benchlm.ai, Vals harness; GLM-5.3 flagship 88.1%) — **conflict**: anotherwrapper's October 17 snapshot lists **90.2%** for the same weights with no harness attribution. I prefer 86.4% because Vals publishes harness, temperature and rank; the 90.2% is untraceable.
- MMLU-Pro (Vals): **86.1%** (benchlm.ai; flagship 86.8%)
- HLE: **55.3%** (benchlm.ai, with tools) / **40%** (Artificial Analysis Index v4.3.2 harness)
- **Artificial Analysis Intelligence Index — an unresolved 15-point spread that must not be smoothed:** **42** on AA's current model page (v4.3.2, #4/117, standard tier, 57.7 tok/s, $0.25/task) vs **57** on Z.ai's launch blog, which cites **AA Intelligence Index v4.1.1 at $0.045/task while a discount was live**. Different index version *and* discounted pricing. The first pass's "57 on the AA model page headline" does not survive — 57 is Z.ai quoting an older AA index; current AA is 42. I score on 42.
- NEW — benchlm.ai: GLM-5.3-Flash **reasoning public-lane score 80.8 (#12/28)** — marginally *ahead* of the flagship's 80.6 (#13/28). FrontierMath v2 (Tiers 1-3) **55.789%** vs flagship 68.772%. **ARC-AGI-2 65.8%**, ARC-AGI-1 Verified 91%, AIME 2025 93.9%.
- CritPt: **15.4%** (anotherwrapper; first pass rounded this to 15%)
- AA-Omniscience: **7** (Artificial Analysis)
- GDP.pdf: **15%** (Artificial Analysis)
- NEW — benchlm: GLM-5.3-Flash **multilingual public-lane 87.3 (#8/17)** with MMLU-ProX 82.3%, NOVA-63 56.0%, PolyMath 43.1% (weak row inside a strong lane)
- LCR / MLCR: no verified public score found. **Note:** AA reports no AA-LCR figure for this model.

Coding:

- Terminal-Bench 2.1 **84.3%** (see above); Terminal-Bench 4.0 **33%**
- DeepSWE v1.1: **63.4%** (Z.ai; vs GLM-5.2 46.2% — a +17.2-point jump); flagship 66.9%
- SWE-bench (Vals): **92.0%** (benchlm.ai; flagship 95.4%)
- LiveCodeBench (Vals): **80.5%** (benchlm.ai) — ties the GLM-5.3 flagship exactly
- SciCode: **51.6%** (anotherwrapper, Oct 17) / **52%** (Artificial Analysis, under review)
- NL2Repo: **56.3%** (Z.ai; vs GLM-5.2 48.9%)
- OpenHarmony Bench: **57.3%** (benchlm.ai; flagship 60.8%)
- Z.ai Code Bench v1.0 (in-house, Claude Code 2.1.207): **29.0 at max effort vs Claude Opus 4.8's 29.5** — vendor-run, directional only
- NEW negatives: **FrontierSWE v2 18.1%** (flagship 30.2%), **Vibe Code Bench 30.8%**, **Code Migration 20.5%**, **Arena Code Elo 1607.09**, and benchlm's **coding public-lane score 48.3 (#46/150)** vs flagship 56.4 (#28/150). Bug Hunt Bench 17.7 fixes (flagship 19.0).
- FrontierSWE / sweMarathon / PostTrain Bench / VulcanBench v3 / ProgramBench: "coming soon" on benchlm — **not yet measured for Flash**, no public figures.

Multimodal / grounded:

- OfficeQA Pro: **62.4%** (benchlm.ai, independent)
- CharXiv / CharXiv-R: **89.4%** (benchlm.ai, independent)
- NEW — **Chartography (with tools) 78.0%** and **MMMU 86.0%** (benchlm.ai / anotherwrapper, Oct 17); **BabyVision 53.4%** (anotherwrapper)
- benchlm multimodal & grounded public-lane score: **84 (#14 of 54)**
- Vision is architectural: image input is native, up to 8 images per request on the NVIDIA NIM endpoint

Long context:

- 1M-token context verified by Z.ai's docs *and* pricing pages and NVIDIA NIM (1,048,576). **Still no MRCR / RULER / GraphWalks / AA-LCR retrieval numbers published** by anyone for these weights. The hybrid linear+sparse attention stack with a 4.44× smaller KV cache is an architectural claim, not a measured retrieval score.

Speed / cost efficiency inputs:

- **Up to 200 tokens/s** (Z.ai FlashX launch claim — the entire reason the tier exists). **Unverified: Artificial Analysis has never benchmarked the FlashX endpoint.** For contrast AA measures the standard GLM-5.3-Flash tier at **57.7 tok/s** (52.3 on a different AA snapshot, 61.4 and 103.5 on others — AA's Flash speed figure has moved around between page versions) with TTFT ~3.0–3.3s. A ~2–3× speedup is plausible but unmeasured.
- GLM-5.3-Flash verbosity: **180M output tokens** across the AA Intelligence Index run vs a 140M median — "very verbose". Verbosity is inherited by FlashX, so the higher per-token price partly buys tokens nobody asked for.
- Pricing: $0.37 / $1.25 — ~2.5× GLM-5.3-Flash's list rate, ~4× cheaper than the GLM-5.3 flagship on input. Effective FlashX premium widens to ~3× whenever B.AI's 70% Flash promo or Z.ai's limited-time free cache-write storage is live on the comparison route.

### Normalized scores (1–100)

- **Tool use: 90/100.** Unchanged. Terminal-Bench 2.1 at 84.3%, Toolathlon-Verified 78.4%, AutomationBench-AA 60%, GDPval-AA 1641 Elo, APEX-Agents 52.8% and Hermes Bench 68.9% are solidly in the frontier band on terminal and tool work. Capped where it was and where the new data reinforces it: the Vals Terminal-Bench rerun drops to 62.9%, benchlm's agentic public lane is only 57.2 (#36/128), AutomationBench disagrees by 11 points between vendor (48.8) and AA (60), Agents' Last Exam is 26.3%, MazeBench is 0%, and no Tau3 or Claw-Eval numbers exist.
- **Reasoning: 78/100.** Unchanged. GPQA Diamond 86.4% and MMLU-Pro 86.1% are strong, HLE w/tools 55.3% respectable, and benchlm's reasoning public lane at 80.8 (#12/28) actually edges the flagship. Held down by the current AA Intelligence Index of **42** (the 57 in circulation is Z.ai quoting AA v4.1.1 under a discount, not a current score), CritPt 15.4%, Omniscience 7, GDP.pdf 15%, FrontierMath v2 55.8% and PolyMath 43.1%. Also new and unresolved: an unattributed 90.2% GPQA figure in circulation that I do not credit.
- **Context window: 95/100.** Unchanged. 1M tokens verified on Z.ai's docs *and* pricing pages and NVIDIA's NIM card (1,048,576). Still not 100 — no long-context *retrieval* benchmark (MRCR/RULER/AA-LCR) has been published for these weights by anyone.
- **Multimodal: 84/100.** Raised from 82. The first pass rested on OfficeQA Pro 62.4% and CharXiv 89.4% alone; this pass adds **Chartography (with tools) 78.0%, MMMU 86.0%** and benchlm's **multimodal & grounded public lane of 84 (#14/54)**, on the same native video + image + text + file input path. Capped by no audio input, text-only output, and BabyVision at 53.4%.
- **Coding: 84/100.** Trimmed from 85. The ceiling is genuinely high — Terminal-Bench 2.1 84.3%, SWE-bench (Vals) 92.0%, LiveCodeBench 80.5%, DeepSWE 63.4% — but this pass surfaced the harder evals the first pass had not: **FrontierSWE v2 18.1%, Vibe Code Bench 30.8%, Code Migration 20.5%, SciCode ~52%**, and benchlm's **coding public lane of only 48.3 (#46/150)**. One 92% SWE-bench number does not outweigh a 18% FrontierSWE.
- **Cost efficiency: 91/100.** Unchanged. $0.37 in / $1.25 out sits between the ~$0.60/$2.20 (~92) reference point and cheaper tiers, with an officially confirmed **$0.075 cached-input** rate and **free cache-write storage (limited time, no published end date)**. It is ~4× cheaper than the GLM-5.3 flagship on input. Kept out of the 95+ band because there is no Free tier for FlashX specifically, the ~2.5–3× premium over base Flash buys only unverified speed, and Flash's verbosity (180M tokens on one AA run) inflates real spend on both tiers.
- **Overall Score: 86/100.** (Tool 90 + Reasoning 78 + Context 95 + Multimodal 84 + Coding 84) / 5 = **86.2 → 86**; Cost efficiency 91 is scored but excluded per `RULES.md`. Unchanged overall: a +2 multimodal and a −1 coding trim cancel. Best fit: high-volume agent loops and coding assistants over very long documents that need 1M context and fast iteration more than frontier reasoning depth — and only if the FlashX endpoint's latency advantage is measured on your own workload, since nobody outside Z.ai has benchmarked it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass; first pass 2026-10-09)
- Searches run this pass: **4** (1 deep + 3 targeted).
- NEW sources used this pass (none cited in the first pass):
  - https://docs.z.ai/guides/overview/pricing — **official** Z.ai price card: GLM-5.3-FlashX $0.37 / **$0.075 cached** / Limited-time Free cache write / $1.25
  - https://docs.z.ai/guides/vlm/glm-5.3-flash — "GLM-5.3-Flash is now fully available on the GLM Coding Plan" (names Flash, not FlashX — conflict left standing)
  - https://benchlm.ai/providers/z-ai and https://benchlm.ai/compare/glm-5-3-vs-glm-5-3-flash — BenchAlign v5.8 lanes, both pages last updated 2026-10-16: agentic 57.2, coding 48.3, reasoning 80.8, multimodal 84, Hermes Bench 68.9%, FrontierSWE v2 18.1%, Bug Hunt Bench 17.7 fixes, Chartography 78.0%
  - https://docs.b.ai/llmservice/models/glm-5-3-flash — B.AI **70% limited-time discount on GLM-5.3-Flash** from 2026-10-03/04 (no end date published); 131,072 max output
  - https://artificialanalysis.ai/models/glm-5-3-flash — current AA Index **42** (#4/117), 57.7 tok/s, 180M tokens, $0.25/task; **confirms AA has no FlashX entry at all**
  - https://anotherwrapper.com/tools/llm-pricing/glm-5.3-flash/glm-5.3-flashx — dated 2026-10-17 competitor snapshot: Arc-AGI-2 65.8%, CritPt 15.4%, SciCode 51.6%, Vibe Code 30.8%, Code Migration 20.5%, Arena Code Elo 1607, MMMU 86.0%, BabyVision 53.4%
  - https://github.com/sri-0/model-cards/blob/main/z-ai/glm-5.3-flashx.md — explicit "No Artificial Analysis data exists for FlashX"; FlashX not on the Coding Plan
  - https://ai.bigmodel.io/models — BigModel.io price-comparison card (rates 85–90% below official; third-party routing, not Z.ai list price)
  - https://z.ai/blog/glm-5.3-Flash — vendor launch post, the origin of the "57" AA figure (v4.1.1, discounted pricing)
- Method: public internet research. Cross-checked Z.ai's official docs and pricing pages, the GLM-5.3-Flash launch blog, the NVIDIA NIM card, B.AI and OpenRouter provider cards, Artificial Analysis model pages, benchlm.ai's BenchAlign v5.8 comparison lanes, and devtk/glm5.app/Puter/sri-0/ai.bigmodel.io listings. Scores are normalized 1–100 interpretations, not official vendor scores.
- **Corrections to the first pass:** (1) the "AA Intelligence Index 57 on the model page headline" is wrong — current AA (v4.3.2) is **42**; 57 is Z.ai quoting AA v4.1.1 at a discounted $0.045/task, and both values are now recorded rather than one replacing the other; (2) cached input for FlashX is **$0.075** (official), not the $0.03 the first pass carried over from base Flash.
- Conflicts left standing: AA Index 42 (current) vs 57 (Z.ai quoting AA v4.1.1 under discount); GPQA Diamond 86.4% (Vals, attributed) vs 90.2% (unattributed aggregator); AutomationBench 48.8% (Z.ai) vs 60% (AA); Terminal-Bench 2.1 84.3% (vendor) vs 62.9% (Vals); Z.ai's standard-Flash speed 52.3 / 57.7 / 61.4 / 103.5 tok/s across AA page versions; Coding Plan inclusion of FlashX — official page names Flash only, sri-0 says FlashX is not on it.
- **Re-run when:** (1) Artificial Analysis publishes an actual FlashX endpoint measurement (speed, Index, TTFT) — today the 200 tok/s claim is unverified; (2) Z.ai names FlashX explicitly on the GLM Coding Plan page; (3) the limited-time free cache-write storage ends, or a published end date appears for it; (4) B.AI's 70% Flash promo lapses; (5) any MRCR/RULER/AA-LCR long-context retrieval number is published for these weights; (6) a GLM-5.4-class successor ships.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.