# Muse Wonder Full — findings by GLM 5.2 Coding

- Source: Meta (`muse-wonder-full`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** The larger sibling of Meta's Muse Wonder series, released 2026-10-12 — "state-of-the-art performance on personal and professional agentic tasks," positioned as a step toward "personal superintelligence." Two signature mechanisms: **Active Memory** (carrying personal context across conversations + actively retrieving task-relevant details) and **Active Focus** (sustained execution — alternative approaches, blocker work-through, clarification requests, check-ins before important actions). Trained at the gigawatt-scale Prometheus datacenter; built on larger/stronger base models than Muse Spark 1.3, with post-training gains that generalize upward to out-of-distribution tasks (the anti-"benchmaxxing" argument, plotted vs Spark 1.3).
- **Provider / access:** **Muse Code subscribers only** (the premium channel; Muse Wonder non-Full is the API-tier). Meta Model API (dev.meta.ai) carries Muse Wonder; Muse Wonder Full is not on the public API at research date. Will power Muse (muse.ai) experiences for subscribers first, artifact generation, and future specialized models.
- **Release / knowledge:** 2026-10-12 (LLM Stats); knowledge cutoff not stated in launch post.
- **IDs:** `meta/muse-wonder-full`; model card: research.meta.ai/static/muse-wonder-model-card. Family: Muse Wonder (sibling, API-available), built on Muse Spark (1.3 latest predecessor) scaling-ladder work.
- **Context window:** not published in the readable sections this session (LLM Stats page lacks provider/spec table — subscription-only product); no MRCR/RULER data.
- **Modalities:** text + image in (per LLM Stats multimodal FAQ), text out; browser + cross-app operation demonstrated (Saturday Run Planning agent working directly in a browser); image-input → playable 3D game demo (customizable inputs).
- **Pricing (as of 2026-10-09):** no per-token pricing — bundled with Muse Code subscription; no LLM Stats provider row exists (unique among top-20 queue models this session).
- **Architecture:** proprietary, closed weights; params undisclosed; Prometheus gigawatt-scale training; Meta Superintelligence Scaling Framework governance.

### Raw benchmarks found

> Primary: Meta launch post 2026-10-12 (vendor). The full evaluation suite is image-embedded — prose names the benchmark set without numeric values; model card holds the numbers (not fetched this session). No score invented; capability anchors below are the prose-verified claims.

Agent / tool use:

- **SOTA claim on personal + professional agentic tasks** across "key benchmarks for personal and professional agents, memory, and coding" (numbers in image/model card).
- Harvey Legal Agent Benchmark (LAB): named as the law-domain eval (source documents + detailed instructions → legal work products); no numeric row readable.
- SWE-Marathon: the sustained-execution eval (long-running software projects) — named; no numeric row readable.
- FocusBench: Meta's own Active Focus eval — named; no numeric row readable.
- Saturday Run Planning demo: browser + cross-app agent execution with personal preferences (qualitative).

Coding:

- "Frontier coding performance" claim; trained on diverse long-running tasks for sustained progress (numbers in image).
- Muse Spark 1.3 comparison plot: Muse Wonder Full beats the Spark-1.3 trend on out-of-distribution tasks at matched in-distribution scores (quantified generalization claim, values in image).

Memory:

- Active Memory: cross-conversation personal context + active retrieval — the differentiating capability; eval names not enumerated in prose.

Safety:

- "Most aligned model to date" (Meta); strongest-to-date CBRN + cyber safeguards while preserving defensive cyber access per the Superintelligence Scaling Framework; adversarial-instruction robustness + private-information discretion emphasized (full safety report pending at launch).

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Caveat: LLM Stats places this at 92.4 (site's aggregate of card scores); my prose-readable evidence is claims-level only this session — dims below are conservative placements from the vendor's SOTA claims, the Spark-1.3-relative scaling argument, and family positioning; a model-card fetch in a future session should firm these up.

- **Tool use: 88/100.** SOTA personal/professional-agent claim + browser/cross-app demos + Active Memory/Focus as purpose-built agent mechanisms; capped by unreadable numeric tables.
- **Reasoning: 88/100.** The OOD-generalization-above-trend result vs Spark 1.3 (93.8 on this site) is the strongest reasoning signal; domain-expertise claims in law/finance/health; no public HLE/GPQA rows.
- **Context window: 60/100 (provisional).** Spec unpublished; scored at an assumed large-but-unverified tier pending model card; flagged low-confidence.
- **Multimodal: 74/100.** Text + image in; image→3D-game and screenshot-driven demos; no audio/video evidence.
- **Coding: 88/100.** "Frontier coding" claim + SWE-Marathon as a named headline eval + long-running-task training; Spark 1.3's 75.4 DeepSWE anchors the family floor (Full is claimed above-trend vs that).
- **Cost efficiency: 45/100.** No token pricing — subscription-bundled only; impossible to score per-token value; the subscription bundle may be excellent value but is unverifiable this session; docked for zero API/self-host path.
- **Overall Score: 80/100.** (88 + 88 + 60 + 74 + 88) / 5 = 79.6 → 80. Best-fit (provisional): the personal-agent frontier for Muse Code subscribers — Active Memory/Focus workflows, browser+apps operation, long-horizon personal projects; not purchasable per-token, so non-subscribers should treat Muse Wonder (API tier) or queue-neighbors as the comparable default. Revise on model-card fetch.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Meta research.meta.ai muse-wonder launch post primary — Active Memory/Focus definitions, OOD-generalization argument, safety framework, availability; LLM Stats page for date/multimodal claim); benchmark tables image-embedded — numeric rows deferred to a model-card fetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.