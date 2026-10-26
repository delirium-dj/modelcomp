# GLM-5.3-FlashX — findings by Step 5 Preview

- Source: Z.ai / Zhipu AI (`glm-5.3-flashx`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX (Z.ai API model code `glm-5.3-flashx`; sibling `glm-5.3-flashx-legal`)
- **Short description:** Z.ai's high-speed serving tier of GLM-5.3-Flash — a native-multimodal 320B-A18B model (hybrid sparse + linear attention) — launched 2026-09-18 with a published peak throughput of 200 tokens/s. Multiple independent sources confirm it is **the same weights as GLM-5.3-Flash behind a faster inference configuration**, not a new checkpoint: "the high-speed variant of Z.ai's GLM-5.3-Flash… built on the same hybrid sparse and linear attention architecture (320B total parameters, 18B active)" (Codersera, 2026-10-05); AIHubMix's weights table lists `GLM-5.3-FlashX → served weights: GLM-5.3-Flash` (2026-10-20); APIMaster (2026-09-18) states benchmarks and context limits of Flash "apply to FlashX because the model is the same. Latency and price do not." It is a distinct SKU from the open-weights `glm-5.3-flash` folder and its data must be scored on this ID's own evidence, not conflated by default.
- **Provider / access:** Z.ai first-party API (`glm-5.3-flashx`, Chat Completions style with `thinking.type: enabled` only — thinking cannot be disabled); also routed on OpenRouter as `z-ai/glm-5.3-flashx` (the only third-party host found — OptimToken: "Only one host, Z.AI, sells it" refers to list pricing; OpenRouter resells at $0.37/$1.25). **Not** on the GLM Coding Plan ("GLM-5.3-FlashX is not yet available on the plan" — Z.ai docs). A legal-specialized variant `glm-5.3-flashx-legal` sells at identical $0.37/$1.25 to selected enterprise customers by application (docs.z.ai) — separate SKU, not this ID.
- **Release / knowledge:** 2026-09-18 (APIMaster, Command Code, Undominated.ai, ModelBank, Magica all agree; Dbggr's 2026-08-26 is the Flash launch date and appears to be a catalog error; OptimToken dates it 2026-09). Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.ai); `z-ai/glm-5.3-flashx` (OpenRouter). No weights repo under this name — no separate Hugging Face checkpoint; weights identical to `zai-org/GLM-5.3-Flash` per the three same-weights sources above.
- **Context window:** **1,048,576 tokens** (official Z.ai docs "Context Length 1M"; OpenRouter 1,048,576; Undominated.ai 1,048,576; Magica 1M — four sources agree). Max output **128K** official (Undominated reports 131,072 = 128KiB-scale disagreement; Dbggr also 128,000).
- **Modalities:** text / image / video / file in → text out (official Z.ai docs; Undominated and Command Code confirm image+video). Reasoning yes (`reasoning_effort` accepted; thinking always on), tool calling / function calling yes, streaming + `tool_stream` yes, structured output / JSON yes, context caching yes (official docs capabilities list).
- **Pricing (as of 2026-10-26):** **$0.37 / 1M input, $1.25 / 1M output** — Z.ai official pricing page and OpenRouter route agree; cached input $0.075 (Z.ai, limited-time-free storage) vs $0.09 (OptimToken, 2026-10-16 snapshot) — minor catalog conflict. Blended 3:1 ≈ $0.59/M (ModelBank/Command Code). Compared with Flash's $0.15/$0.50, FlashX is 2.5× the price for the speed tier (ModelBank; codersera).
- **Architecture:** 320B total / 18B activated MoE, 45 layers, hybrid sparse + linear attention with IndexPool, Manifold-Constrained Hyper-Connections (official docs; Flash architecture shared per Codersera/APIMaster/AIHubMix). Weights license: no FlashX-specific repo; Flash's HF card is MIT (OptimToken claims Apache 2.0 for FlashX — unresolved catalog conflict), so weights status of this SKU is "same as Flash, open (MIT)", not separately published.

### Raw benchmarks found

Agent / tool use (all vendor-reported for the shared GLM-5.3-Flash weights via z.ai/blog + docs, 2026-08-26; **no independent FlashX-specific evaluation exists** — Artificial Analysis returns 404 for `/models/glm-5-3-flashx` (checked 2026-10-26) and Magica/Command Code/Writingmate/OptimToken all record "Benchmark not available" / "No exact Arena match"):

- Toolathlon Verified: **78.4** (Z.ai blog, vendor-run; GLM-5.2: 59.9)
- AutomationBench v1.0.6: **48.8** (Z.ai blog, vendor-run; GLM-5.2: 26.2)
- Agents' Last Exam: **26.3** (Z.ai blog, vendor-run)
- OSWorld 2.0 (computer use): **59.1** (Z.ai blog, vendor-run)
- Terminal-Bench 2.1: **84.3** (Z.ai blog, vendor-run; GLM-5.2: 81.0)
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA v2: **1773 Elo** (Z.ai blog; GLM-5.2: 1504, Opus 4.8: 1582 — vendor-reported).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (Toolathlon Verified above is the closest proxy).
- Serving performance **on this exact ID** (independent, OpenRouter route, benchmark data updated 2026-10-20/24): throughput p50 **81.0 tok/s**, latency p50 **2.81 s** (Flash comparison page) / 2.27 s (GLM-5.3 comparison page) — vs vendor's published peak **200 tok/s** (Z.ai docs) and OmniaKey's caution that Z.ai's 200 headline and Artificial Analysis's independently measured 98.6 tok/s median for the Flash base "mix different methods, dates, workloads".

Reasoning / knowledge (shared weights, vendor-reported):

- HLE w/ Tools: **55.3** (Z.ai blog; GLM-5.4/5.2: 54.7)
- GPQA Diamond: **91%** (modelgrep comparison table — third-party compilation, GLM-5.3-Flash row)
- Artificial Analysis Intelligence Index: **41.81 (#4 of 118 open-weights)** on v4.3.2, Oct 2026 — independently measured on the Flash base via Z.ai API; cost per index task $0.25 (Codersera compilation of AA; OmniaKey separately reports AA 41.9, median speed 98.6 tok/s, TTFC 2.43 s — consistent index figure, speed conflict noted). AA v4.3.2 is rebased — Z.ai's marketing "57 on v4.1.1" is NOT comparable (Codersera flags no conversion exists). No FlashX entry on AA (404).
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- LMArena: **1473** reported by Dbggr (2026-10-26 check) but **contradicted** — Undominated.ai lists FlashX "Unrated", OptimToken: "No Arena score is published for it", Writingmate: "No exact Arena match", Magica: "Benchmark not available". Flash's own LMArena is 1471.0 ± 4.9 (Undominated). Resolution: treat the 1473 figure as unverified/likely conflation with Flash; not used for scoring.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding (shared weights, vendor-reported; no independent FlashX evaluation):

- SWE-bench Verified: no verified public score found for this ID (not in the Flash table).
- LiveCodeBench: no verified public score found.
- DeepSWE v1.1: **63.4** (Z.ai blog; GLM-5.2: 46.2, Opus 4.8: 58.0)
- NL2Repo: **56.3** (Z.ai blog; GLM-5.2: 48.9)
- Z.ai Code Bench v1.0 (max effort, Claude Code 2.1.207 harness): **29.0** vs Opus 4.8's 29.5 (vendor in-house eval)
- Vibe Code Bench: no verified public score found.

Long context:

- 1,048,576-token window verified four ways (above). Hybrid sparse+linear attention cuts KV cache 4.44× and attention compute 3.01× vs GLM-5.3 at long context (vendor architecture claim); MRCR / RULER / GraphWalks retrieval measurements: no verified public score found for this ID.

### Conflict / resolution notes

1. **Same-weights vs separate evaluation.** Four independent source families (Codersera, APIMaster, AIHubMix's weights table, plus Z.ai's own docs describing FlashX as a live speed tier of the Flash model) establish FlashX = GLM-5.3-Flash weights behind a faster serving configuration. Quality benchmarks therefore belong to the Flash weights — cited here as provisional, vendor-run evidence; every placement names its source. FlashX-measured facts (throughput 81 tok/s p50, latency 2.27–2.81 s p50, price, context, modalities) are independent or official and firm.
2. **Speed conflict.** Vendor peak claim 200 tok/s (official docs) vs independent OpenRouter route measurement 81 tok/s p50 (Oct 20) vs AA-measured Flash medians 98.6 tok/s (OmniaKey, Z.ai API samples) and 51.4 tok/s (Codersera citing AA) — different routes, dates and methods. Resolution: record all, score none of them as quality.
3. **LMArena conflict.** Dbggr's 1473 vs four trackers saying unrated/unpublished. Resolution: excluded from scoring (weight of sources).
4. **Pricing micro-conflict.** Cached input $0.075 (Z.ai official) vs $0.09 (OptimToken snapshot). Base $0.37/$1.25 agree across Z.ai, OpenRouter, Undominated, ModelBank, Command Code, OptimToken, Dbggr.
5. **Supersedes the 2026-10-24 `.excluded` twin.** That pass (2026-10-24) found a real SKU with zero verified data: models.dev had no entry, AA 404'd under three spellings, no HF repo, no benchmark. Fresh research on 2026-10-26 found: the official Z.ai model page and pricing (both published), the same-weights documentation, independent serving measurements on the OpenRouter route, and vendor benchmark tables for the shared weights — plus a **legal sibling SKU** (`glm-5.3-flashx-legal`, Harvey LAB all-criteria pass rate 19.2% — SOTA among open-source legal models per Z.ai docs; that number belongs to the Legal variant and is deliberately NOT transferred to this ID). This is genuinely new verified evidence, so a scored report replaces the negative-findings twin per the quarantine-backlog procedure.

### Normalized scores (1–100)

- **Tool use: 72/100.** Toolathlon Verified 78.4 and OSWorld 2.0 59.1 are solid mid-tier agentic results for a Flash-class price point, but Agents' Last Exam 26.3 and AutomationBench 48.8 show real gaps on hard long-horizon agentic suites; no independent FlashX evaluation exists, capping confidence (AA 404; "not separately evaluated" per Codersera).
- **Reasoning: 68/100.** AA Intelligence Index 41.81 (#4/118 open-weights, v4.3.2, independently measured on the shared weights) and GPQA Diamond 91% (third-party compilation) indicate strong mid-tier reasoning; HLE w/ Tools 55.3 is merely adequate and no flash-specific CritPt/LCR scores exist.
- **Context window: 100/100.** 1,048,576-token window verified by four independent sources (official docs, OpenRouter, Undominated.ai, Magica) — top tier; long-context retrieval quality (MRCR/RULER) unmeasured for this ID.
- **Multimodal: 88/100.** Native video + image + file input with text output per official docs, with strong vendor vision coding results on the shared weights (CharXiv Reasoning 89.4, MMVU 80.5, MVbench 77.8, Vision2Web 77.8) — multimodal input is a first-class path, not an add-on; output remains text-only.
- **Coding: 78/100.** Terminal-Bench 2.1 84.3 and DeepSWE v1.1 63.4 (vendor-run, shared weights) put it near Opus-4.8-class agentic coding at Flash pricing, but every number is vendor-reported and no independent reproduction exists for this serving tier; SWE-bench Verified for this ID: no verified public score found.
- **Cost efficiency: 74/100.** $0.37/$1.25 per 1M (official; blended 3:1 ≈ $0.59) is 2.5× the already-cheap Flash tier and ~1/8 of GLM-5.3's output price — inexpensive absolute, mid-tier on the efficiency curve because Flash offers the same weights cheaper.
- **Overall Score: 81.2/100.** Mean of the five non-cost dims: (72 + 68 + 100 + 88 + 78) / 5 = 81.2. Best fit: interchangeable quality with GLM-5.3-Flash at 2.5× price when you need its measured 81 tok/s p50 throughput and full multimodal input at 1M context — choose Flash for cost, FlashX for latency.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-26
- Method: public internet research across nine independent source families on 2026-10-26 — Z.ai's official model page and official pricing page (vendor primary), OpenRouter's Flash/FlashX comparison endpoints (independent serving measurements), Artificial Analysis direct 404 check, models.dev catalog dump, Codersera's independent analysis (AA v4.3.2 compilation), OmniaKey's independent review, APIMaster, Undominated.ai, Writingmate, OptimToken, Dbggr, Magica, Command Code and ModelBank trackers — cross-compared for conflicts (speed figures, LMArena rating, release date, cached-input price, weights license all conflicted and are resolved in the notes). Scores are normalized 1–100 interpretations, not official vendor scores; every benchmark row names its source and vendor-run vs independent status, and shared-weights evidence is marked provisional throughout.
- Supersedes: `Step_5_Preview.md.excluded` (2026-10-24, "real SKU, zero verified data") — that verdict no longer holds on the evidence found today.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_FlashX.md`, using the same headings.
