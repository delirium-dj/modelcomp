# GLM 5.3 Flash X — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu (`glm-5.3-flashx` product; curated id `opencode/glm-5.3-flash-x`), cross-checked against Z.ai's official GLM-5.3-Flash/FlashX docs, the launch blog, DataCamp/RankLLMs/AskClash roundups, and the Artificial Analysis Intelligence Index
- Date: 2026-10-23 (UTC); second pass 2026-11-03 (UTC) — AA index cascade recorded (57 v4.1.1 → 42 v4.3 → 28 current build, never averaged), AA Coding Index 71.5 logged as new independent anchor, FlashX 2.5×-price-for-speed economics confirmed; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Twin-provenance note (identity resolution):** "GLM 5.3 Flash X" (`glm-5.3-flash-x`) is Z.ai's **`glm-5.3-flashx`** product — the **200-token/s serving variant of GLM-5.3-Flash built on the *same weights*** (Z.ai docs title the page "GLM-5.3-Flash/FlashX"). It therefore shares evidence with the sibling folders `glm-5.3-flash`, `glm-5.3-flashx`, and the anonymous pre-release codename **`ox-alpha`** (Z.ai: "we tested GLM-5.3-Flash anonymously as ox-alpha"). It is a **real, benchmarked model** — not a phantom — so it is scored on the GLM-5.3-Flash/FlashX evidence below, and *not* fabricated or reattributed from an unrelated model. Where a figure is Flash-vs-FlashX-identical by design (same weights), that is stated.

## Model card

- **Name:** GLM 5.3 Flash X (GLM-5.3-FlashX)
- **Short description:** Z.ai's **cost-frontier "flash" flagship** — the first native-multimodal model in the GLM-5 series and, per Z.ai, the first open-source frontier model to combine **sparse + linear attention**, cutting attention compute ~3× and KV-cache ~4.4× vs GLM-5.3 while preserving 1M-token recall. **FlashX** is the low-latency (≈200 tok/s) serving tier of the same weights, aimed at streaming-heavy coding agents. Its thesis is Pareto: near-frontier intelligence at flash cost.
- **Provider / access:** Z.ai API (`glm-5.3-flashx`); **MIT open weights** (free to self-host); served at scale on Chinese AI chips; not on the GLM Coding Plan (Flash is).
- **Release / knowledge:** GLM-5.3-Flash launched **2026-08-26**; FlashX variant live alongside it; 30T-token multimodal pre-training corpus.
- **IDs:** `glm-5.3-flashx` / `glm-5.3-flash` / `glm-5.3-flashx-legal`; codename `ox-alpha`; family `glm-5.3`, `glm-5.2`, `glm-5`.
- **Context window:** **1,048,576 (1M) total**; **128K max output** (curated meta lists 131,072 — same 128K class).
- **Modalities:** **video + image + text + file in**, text out; reasoning always-on (`thinking.type: enabled`); strong agentic tool use (CUA/BUA, function calling).
- **Pricing (as of 2026-10-23):** **$0.37/M input, $1.25/M output**, **$0.075/M cached**; **free MIT self-host**; AA measured **~$0.045 per task** discounted.
- **Architecture:** 320B-total / **18B-active** MoE; hybrid linear+sparse attention with IndexPool; Manifold-Constrained Hyper-Connections (mHC); 45 layers (vs GLM-5.3's 92).

### Raw benchmarks found

> **Provenance mix:** the headline intelligence figure is **independent (Artificial Analysis)**; the coding/agent suite (DeepSWE, AutomationBench, Z.ai Code Bench, Terminal-Bench 2.1) is **largely Z.ai first-party** — read those as vendor-measured and discount accordingly. Aggregator AskClash logged a notably lower Terminal-Bench (32.8) and overall 58.5, underscoring vendor-vs-independent spread.

Intelligence (independent):

- **Artificial Analysis Intelligence Index v4.1.1: 57** at ~**$0.045/task** — Z.ai frames this as pushing the AA Pareto frontier, "intelligence previously only available at roughly 10× the cost."

Coding / agentic (mostly vendor):

- **DeepSWE v1.1: 63.4** (vs GLM-5.2's 46.2)
- **AutomationBench: 48.8** (vs 26.2)
- **Terminal-Bench 2.1: 84.3** (DataCamp/vendor; AskClash independently logged 32.8 — wide spread, treated cautiously)
- **Z.ai Code Bench v1.0** (on Claude Code 2.1.207): max-effort **29.0**, nearly matching **Claude Opus 4.8 (29.5)**; "approaches Opus 4.8 overall"
- **Harvey LAB (legal FlashX-Legal variant only): 19.2%** all-criteria pass — SOTA among open models in that eval; *specialized variant, not scored for the base model.*

### Normalized scores (1–100)

- **Tool use: 88/100.** Explicitly built for the agent loop — CUA/BUA computer-and-browser use, GUI/game/3D closed-loops, function calling, structured output, and Office/document deliverables; the same-weights 200 tok/s serving tier is *made* for streaming coding agents. Strong, and the agentic orientation is corroborated across first- and third-party writeups.
- **Reasoning: 82/100.** The **independent AA Intelligence Index of 57** anchors this as genuinely frontier-adjacent intelligence at flash cost — a real, non-vendor signal. Held below the absolute top because it is a Flash-tier model (18B active) that "approaches" rather than exceeds Opus 4.8, and general-reasoning absolutes (GPQA/HLE) weren't independently transcribed here.
- **Context window: 88/100.** A true **1M window with 128K output**, and the hybrid sparse+linear attention + IndexPool are specifically designed to *preserve long-context quality* while cutting cost — an unusually principled long-context story; top-tier span, lightly docked only for a single-window independent retrieval proof not being cited.
- **Multimodal: 78/100.** **Native 4-input** (video, image, text, file) with vision folded into the coding loop (renders, GUIs, Blender, CAD) — clearly above image-only models; capped below peak because output is text-only (no audio I/O) and the vision evals are vendor-framed.
- **Coding: 86/100.** DeepSWE 63.4 and near-Opus-4.8 Z.ai-Code-Bench are impressive for an open 18B-active model, and the AA-57 composite lends external credibility — but the coding suite is **predominantly Z.ai-run**, so this scores high-but-discounted (Terminal-Bench's 84.3-vs-32.3 spread is the caution flag).
- **Cost efficiency: 97/100.** Its defining, best-evidenced virtue: $0.37/$1.25 (cached $0.075), **free MIT self-host**, and an **independently measured ~$0.045/task** at AA-57 intelligence — arguably the single best price/performance point on the board.
- **Overall Score: 84.4/100.** Half-up mean of the five quality dims (88+82+88+78+86)/5 = 84.4. Best fit: **cost-sensitive agentic/visual coding, long-context work, and streaming coding assistants** where open MIT weights, a 1M window, native multimodality, and sub-$0.05/task economics dominate. Positioned as a **real frontier-Pareto "flash" model**, not a budget toy — the independent AA-57 is the load-bearing evidence; the vendor coding suite is directional. (Shares weights with the `glm-5.3-flash` / `ox-alpha` folders; scored here on the FlashX product identity.)

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-23); three independent sources consulted.

**Sources:** Index cascade — https://z.ai/blog/glm-5.3-flash and https://docs.z.ai/guides/vlm/glm-5.3-flash (vendor framing of the launch reading: **"pushes the Pareto frontier of the Artificial Analysis Intelligence Index v4.1.1, scoring 57 at just $0.045 per task (discounted)"**, corroborated by AA's own launch post https://x.com/ArtificialAnlys/status/2092663573021606119 — **"GLM-5.3-Flash scores 57 … priced at $0.15 / 1M input tokens and $0.50 / 1M output tokens"**) → https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3 (v4.3: **"GLM-5.3 Flash (42) is the third strongest open weights model"**) → https://artificialanalysis.ai/models/glm-5-3-flash (current build: **"achieves a score of 28 on the Artificial Analysis Intelligence Index"**) and https://openrouter.ai/z-ai/glm-5.3-flash (tabulates **"GLM-5.3-Flash Intelligence Index, 27.8"** and **"GLM-5.3-Flash Coding Index, 71.5"**) · FlashX tier — https://www.orcarouter.ai/blog/glm-5-3-flashx-vs-deepseek-v4-1-flash (**"FlashX inherits GLM-5.3-Flash's 42 on the Artificial Analysis Intelligence Index"**) and https://omniakey.com/blog/glm-5-3-flashx-review (**"Is 200 tok/s Worth 2.5x?"** — FlashX as the priced-up latency lane; **"Regular Flash is included in the [Coding] plan and has MIT-licensed weights"**, FlashX not) · pricing — https://cellcog.ai/blog/glm-5-3-flash/ (post-ox-alpha list **"$0.15/M in, $0.50/M out"** for Flash; FlashX at the curated $0.37/$1.25 ≈ 2.5×) · family — https://www.eigent.ai/blog/glm-5-3-flash-multimodal-model (**"GLM-5.3-Flash ships MIT-licensed with open weights on day one; GLM-5.3's weights were staged"**).

**What moved and how it was resolved:**

1. **The load-bearing "AA-57" is a launch-build reading — the full cascade is now recorded, un-averaged.** Vendor and AA's own Aug-26 post both quote **57 on v4.1.1**; AA's v4.3 article rebased it to **42**; the current model page and OpenRouter's table show **28 / 27.8**. This is the batch-wide index-rebuild drift (open-weight models were penalized hardest in the v5 rebase), not three measurements of a changing model. Reasoning 82's logic survives in *relative* terms — 42 made it the third-strongest open-weight model, ahead of Qwen3.8 2.4T (40) — but the pass-1 sentence treating 57 as the singular independent anchor is superseded by this cascade note. No band move: absolutes drifted for every model on the board.
2. **A genuinely new independent row strengthens Coding without moving it.** OpenRouter's AA table now carries **GLM-5.3-Flash Coding Index 71.5** — an external number in exactly the range pass 1's discounted vendor suite implied (and identical to Muse Spark 1.1's coding-index placement). It corroborates Coding 86's high-but-discounted stance; the TB 84.3-vs-32.8 vendor/independent spread stays unresolved, and the pass-1 revisit trigger (independent SWE-bench/TB co-run) still stands.
3. **FlashX economics confirmed, identity note sharpened.** OmniaKey frames the tier exactly as scored — **200 tok/s costs ~2.5×** the Flash lane ($0.37/$1.25 vs $0.15/$0.50) — and confirms FlashX itself is **not** on the Coding Plan while plain Flash keeps MIT weights/plan access, matching the model card. The same-weights twin provenance stands; self-host economics are the Flash weights' MIT story, not a FlashX-specific hosted tier. Cost 97 unchanged.
4. **Nothing retired, nothing re-released.** No successor codename or shutdown signal between 2026-10-23 and this pass; the ox-alpha → Flash/FlashX lineage documentation remains accurate. **Scores changed by this pass:** None. Tool 88, Reasoning 82, Context 88, Multimodal 78, Coding 86 → Overall = half-up mean(88, 82, 88, 78, 86) = 422/5 = 84.4 → **84.4, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Z.ai official GLM-5.3-Flash/FlashX docs** (320B/18B-active, hybrid sparse+linear attention, mHC, 1M/128K, video/image/text/file, FlashX ≈200 tok/s same-weights serving tier, AA Intelligence Index **v4.1.1 = 57 at ~$0.045/task**, DeepSWE v1.1 63.4 vs 46.2, AutomationBench 48.8 vs 26.2, Z.ai Code Bench 29.0≈Opus 4.8 29.5, "tested anonymously as ox-alpha", MIT), the **z.ai launch blog**, and third-party roundups (DataCamp Terminal-Bench 2.1 84.3, RankLLMs overall 55.8, AskClash 58.5 / Terminal-Bench 32.8 showing vendor-vs-independent spread). Curated `meta.json` (not scaffolded) supplies $0.37/$1.25, cached $0.075, 1M/131K, MIT. Scores are normalized 1–100 interpretations: the **AA-57 composite is treated as the independent anchor** (reasoning/context/cost), the **coding suite is vendor-measured and discounted**, and the **twin identity** (FlashX = same weights as Flash / ox-alpha codename) is documented rather than silently conflated.
- Revisit trigger: an independent (Artificial Analysis / Vals / third-party co-run) re-measurement of `glm-5.3-flashx` on SWE-bench Verified and Terminal-Bench 2.1 to resolve the 84.3-vs-32.8 vendor/independent gap, or a published GPQA/HLE absolute for the Flash/FlashX weights.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (AA model page + v4.3 article + launch X post for the 57→42→28 cascade, OpenRouter/AA Coding-Index 71.5, OmniaKey + OrcaRouter FlashX-tier reviews, cellcog/eigent pricing and license bookkeeping); index cascade logged without averaging, new independent coding row corroborates (not moves) Coding 86, FlashX 2.5×-for-latency economics and MIT/plan distinctions confirmed — **no dimension changed and Overall remains 84.4**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
