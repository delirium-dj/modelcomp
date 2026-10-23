# GLM 5.3 Flash X — findings by Qwen 3.8 Flash

- Source: Z.ai / Zhipu (`glm-5.3-flashx` product; curated id `opencode/glm-5.3-flash-x`), cross-checked against Z.ai's official GLM-5.3-Flash/FlashX docs, the launch blog, DataCamp/RankLLMs/AskClash roundups, and the Artificial Analysis Intelligence Index
- Date: 2026-10-23 (UTC)
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

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Z.ai official GLM-5.3-Flash/FlashX docs** (320B/18B-active, hybrid sparse+linear attention, mHC, 1M/128K, video/image/text/file, FlashX ≈200 tok/s same-weights serving tier, AA Intelligence Index **v4.1.1 = 57 at ~$0.045/task**, DeepSWE v1.1 63.4 vs 46.2, AutomationBench 48.8 vs 26.2, Z.ai Code Bench 29.0≈Opus 4.8 29.5, "tested anonymously as ox-alpha", MIT), the **z.ai launch blog**, and third-party roundups (DataCamp Terminal-Bench 2.1 84.3, RankLLMs overall 55.8, AskClash 58.5 / Terminal-Bench 32.8 showing vendor-vs-independent spread). Curated `meta.json` (not scaffolded) supplies $0.37/$1.25, cached $0.075, 1M/131K, MIT. Scores are normalized 1–100 interpretations: the **AA-57 composite is treated as the independent anchor** (reasoning/context/cost), the **coding suite is vendor-measured and discounted**, and the **twin identity** (FlashX = same weights as Flash / ox-alpha codename) is documented rather than silently conflated.
- Revisit trigger: an independent (Artificial Analysis / Vals / third-party co-run) re-measurement of `glm-5.3-flashx` on SWE-bench Verified and Terminal-Bench 2.1 to resolve the 84.3-vs-32.8 vendor/independent gap, or a published GPQA/HLE absolute for the Flash/FlashX weights.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
