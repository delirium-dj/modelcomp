# Muse Wonder — findings by GLM 5.2 Coding

- Source: Meta (`muse-wonder`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (slug `muse-wonder-1.0`)
- **Short description:** The API-tier sibling of Meta's Muse Wonder series, released 2026-10-12 alongside Muse Wonder Full — "state-of-the-art performance on personal and professional agentic tasks" and a step toward "personal superintelligence." Same Active Memory (cross-conversation personal context + active retrieval) and Active Focus (sustained execution, alternative approaches, blocker work-through, clarification check-ins) architecture story as Full, on the smaller base. Will power Muse (muse.ai) subscriber experiences, artifact generation, and future specialized models.
- **Provider / access:** Meta Model API (developer.meta.com / dev.meta.ai) at $4/$20; Muse Code playground; muse.ai consumer rollout (subscribers first). Single provider tracked.
- **Release / knowledge:** 2026-10-12 (LLM Stats); knowledge cutoff not stated.
- **IDs:** `meta/muse-wonder`; comparison-set slug `muse-wonder-1.0`. Model card (shared with Full): research.meta.ai/static/muse-wonder-model-card (PDF — numeric tables not machine-readable this session).
- **Context window:** 1M in (LLM Stats); max output "—" (unpublished).
- **Modalities:** text + image in (LLM Stats), text out; browser + cross-app agent operation (Saturday Run Planning demo); image-input → playable 3D kitchen game demo.
- **Pricing (as of 2026-10-09):** $4.00 / $20.00 per 1M in/out, $0.20 cached — matches Opus 5.5's pricing exactly; TTFT/throughput unmeasured.
- **Architecture:** proprietary, closed weights; params undisclosed; Prometheus gigawatt-scale training; Meta Superintelligence Scaling Framework; strongest-to-date Meta CBRN/cyber safeguards with defensive-cyber preservation.

### Raw benchmarks found

> Primary: Meta launch post 2026-10-12 (shared with Muse Wonder Full; benchmark tables image-embedded — prose claims only). LLM Stats places the pair at 92.4 (Full) / 90.4 (Wonder) via its own aggregate of card scores.

Agent / tool use:

- SOTA claim across "key benchmarks for personal and professional agents, memory, and coding" (numbers in image/model card).
- Harvey Legal Agent Benchmark (LAB): named law-domain eval (source documents + detailed instructions → legal work products).
- FocusBench: Active Focus eval (named). SWE-Marathon: sustained long-project execution (named).
- Saturday Run Planning demo: browser + cross-app execution with personal context (qualitative).

Coding:

- "Frontier coding performance" claim; long-running-task training (numbers in image).
- OOD-generalization plot vs Muse Spark 1.3 is presented for Full; Wonder shares the family scaling story (stronger base → post-training gains carry to unfamiliar tasks).

Memory:

- Active Memory: the differentiating personal-agent capability; cross-conversation context + active retrieval (eval names not enumerated in prose).

Safety:

- "Most aligned model to date" (Meta); strongest CBRN + cyber safeguards to date; adversarial-instruction robustness; private-information discretion; full safety report pending at launch.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Wonder is positioned just below Full (LLM Stats 90.4 vs 92.4); capability dims mirror the Full file, adjusted down one step where Full's OOD-above-trend argument was specific to it.

- **Tool use: 87/100.** SOTA personal/professional-agent claim + Active Memory/Focus + browser/cross-app demos; one notch under Full (no API-tier OOD plot); numeric tables image-gated.
- **Reasoning: 86/100.** Family scaling argument + domain expertise (law/finance/health) claims; Spark-1.3-trend-level generalization (not above-trend as Full); no public HLE/GPQA rows.
- **Context window: 93/100.** 1M in verified via provider table; output cap unpublished — flagged.
- **Multimodal: 73/100.** Text + image in; image→3D-game and screenshot-driven demos; no audio/video evidence.
- **Coding: 87/100.** "Frontier coding" family claim + SWE-Marathon headline + long-running-task training; Spark 1.3 (75.4 DeepSWE) anchors the family floor; no readable numeric rows.
- **Cost efficiency: 78/100.** $4/$20/$0.20 matches Opus 5.5 exactly — flagship pricing with personal-agent differentiation; no free/self-host path; docked for unpublished output cap and single provider.
- **Overall Score: 85/100.** (87 + 86 + 93 + 73 + 87) / 5 = 85.2 → 85. Best-fit: the personal-agent flagship you can actually buy per-token — Active Memory/Focus workflows via the Meta Model API at Opus-5.5 prices; choose Full via Muse Code subscription when the last capability step matters; choose Opus 5.5/Carbon when vendor ecosystem and verified benchmark tables outweigh memory-first design.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (Meta research.meta.ai muse-wonder launch post — shared series content: Active Memory/Focus, safety, availability split Wonder vs Full; LLM Stats muse-wonder page for pricing/context/date/comparison set; developer.meta.com listed as provider docs); numeric benchmark tables image/PDF-gated — claims-level evidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.