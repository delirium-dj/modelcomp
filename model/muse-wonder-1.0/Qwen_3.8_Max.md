# Muse Wonder 1.0 — findings by Qwen 3.8 Max

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (1.0)
- **Short description:** Meta's **2026-10-12 Muse-family frontier agent model** — the base of the two-model Muse Wonder series (Muse Wonder + Muse Wonder Full), positioned as "a frontier model for personal & professional AI agents" and a step on Meta's road to "personal superintelligence." It is a **reasoning-always-on** agent model that pairs **Active Memory** (carries user context across conversations and actively retrieves relevant detail) with **Active Focus** (sustained multi-step effort — tries alternative approaches, works through blockers, asks for clarification, checks in before important actions). On the **independent Artificial Analysis Intelligence Index (v4.3 basket) it scores 52 at max effort**, a material **+4 over Muse Spark 1.3 (max) at 48** but still **below the frontier** (Claude Opus 5.5 ≈ 58, GPT-6 Astra ≈ 53, and its own sibling Muse Wonder Full ≈ 56). Its agentic deltas over Spark 1.3 are large (**AutomationBench-AA 68% from 58%, Terminal-Bench 4.0 52% from 33%, Coding Agents Index 63 from 54**), but it carries a **documented knowledge weakness (AA-Omniscience 25)** and a **premium price** (**$4.52 per AA Index task**, ~2.8× Spark 1.3's $1.60). Trade-off: strong personal/professional agency and breadth ("big model smell"), weaker on pure factual knowledge and cost.
- **Provider / access:** **Meta** — available via the **Meta Model API** and **Muse Code**; will roll out to consumer **Muse** subscribers. **Paid only** (`noFreeId` — no free tier). The stronger sibling **Muse Wonder Full** (AA Index 56) is **Muse Code subscribers only** and is *not* per-token priced — this slug is the base, per-token-priced Muse Wonder.
- **Release / knowledge:** Released **2026-10-12** (14 months after Meta's ground-up stack overhaul; builds on the Muse Spark scaling line). Trained at Meta's **gigawatt-scale Prometheus data center**. Knowledge cutoff not stated in the sources reviewed; the **AA-Omniscience 25** score indicates below-frontier world knowledge.
- **IDs:** `muse-wonder-1.0` / `opencode/muse-wonder-1.0` (series sibling: Muse Wonder Full; predecessor line: Muse Spark 1.1 / 1.2 / 1.3).
- **Context window:** **1,048,576 (1M) tokens total / 131,072 (131K) max output** — top-tier on both axes, matching the 1M/131K leaders. **Active Memory** extends effective cross-conversation context beyond the raw window.
- **Modalities:** **Text, image, video, audio in → text out** (broad multimodal *input*; text-only *output*). Demonstrations show it working across a browser and apps (run planning, custom swag from Instagram photos, wedding seating charts, a playable 3D kitchen game from image inputs).
- **Pricing (as of 2026-10-23):** **$4.00 / $20.00 per 1M in/out; $0.20 cached input; paid only.** Artificial Analysis measures **$4.52 per average Intelligence Index task** (~54k output tokens + ~7.69M input tokens per task). Cost-per-task anchors: **GPT-6.1 Sol $0.72, Gemini 4 Argon $1.99, Astra $3.26, Sonnet 5.5 $5.46, Opus 5.5 $5.98, Fable 5.1 $7.63** — Wonder sits mid-pack on $/task but is **2.8× its own Spark 1.3 ($1.60)**.
- **Architecture:** Undisclosed proprietary (Meta); reasoning always on, scaled via test-time compute (Meta's OOD analysis shows Wonder Full generalizes to unfamiliar tasks better than the Spark 1.3 trend predicts, attributed to a **larger, stronger base model**). Strongest-to-date CBRN + cyber-misuse safeguards per Meta's Superintelligence Scaling Framework, while preserving defensive cyber capability.

### Raw benchmarks found

Independent (Artificial Analysis, v4.3 basket — **neutral harness**):

- **AA Intelligence Index: 52 (max effort)** — vs Muse Spark 1.3 (max) 48, Muse Wonder Full (max) 56; frontier context: Claude Opus 5.5 ≈ 58, GPT-6 Astra ≈ 53
- **AutomationBench-AA: 68%** (up from Spark 1.3's 58%)
- **Terminal-Bench 4.0: 52%** (up from Spark 1.3's 33%) — comparable to Claude Opus 5's 51.8%
- **Coding Agents Index: 63** (up from Spark 1.3's 54)
- **AA-Omniscience: 25** — ⚠ **knowledge weakness** (well below frontier)
- **Hallucination: 27%** (3rd-lowest = favorable; lower is better)
- **Cost per AA Index task: $4.52** (~54k output + ~7.69M input tokens/task)

Vendor-reported (Meta launch blog / report — **upper bound, discounted**):

- State-of-the-art claims across personal/professional agent, memory, and coding suites; **Harvey's Legal Agent Benchmark (LAB)**, **FocusBench** (Active Focus), **SWE-Marathon** (long-running software execution) cited as focus areas
- Sibling **Muse Wonder Full** (not this slug): top-3 on 6/10 evals incl. CritPt 33% (#1), GDP.pdf 33% (#1), GDPval-AA v2.1 1857 Elo (#2), AA-Briefcase 1729 (#3), AutomationBench-AA 71% (#3), SciCode 63% (#3); Terminal-Bench 4.0 57%, Coding Agents 68, hallucination 23%
- ⚠ **Vendor-inflation pattern:** Meta's card lists Muse Wonder Full at **59** vs AA's independent **56** — treat Meta self-reported cells as an upper bound

> Provenance: The **AA Intelligence Index 52, AutomationBench-AA 68%, Terminal-Bench 4.0 52%, Coding Agents Index 63, AA-Omniscience 25, hallucination 27% and $4.52/task** are from **Artificial Analysis (v4.3 basket), a neutral harness**, corroborated by launch-day coverage (VentureBeat, o-mega.ai, AA's own X post) — these are weighted highest. **Index scores are version-specific and NOT convertible across AA baskets**; every figure here carries the v4.3 provenance. Meta's launch blog ("Muse Wonder: A Frontier Model For Personal & Professional AI Agents," 2026-10-12) supplies the SOTA framing, Active Memory / Active Focus, Prometheus DC, and the Harvey LAB / FocusBench / SWE-Marathon eval areas, but its numeric benchmark table is image-only and vendor-run, so those cells are treated as an **upper bound and discounted** (the Wonder-Full 59-vs-56 gap documents Meta's inflation tendency). Context/output/modality/pricing come from the folder meta.json. No benchmark was invented; where a specific number was not independently transcribed I state the qualitative claim only.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong, markedly improved agency — **AutomationBench-AA 68%** (from 58%), **Terminal-Bench 4.0 52%** (from 33%, ≈ Opus 5's 51.8%), **Coding Agents Index 63** (from 54%), plus the **Active Focus** machinery (FocusBench, SWE-Marathon long-running execution) and browser/app tool use in the demos. Held below the frontier because the composite **AA Index (52)** still trails Opus 5.5 (≈58) / Astra (≈53) and its own Wonder Full sibling (56), and the agentic gains are measured against Meta's *own* prior model rather than the field leaders.
- **Reasoning: 83/100.** Reasoning-always-on with scaled test-time compute and good breadth ("big model smell" — OOD tasks improve faster than the Spark 1.3 trend predicts). Capped by the **AA Index 52** (above-average, not frontier) and the explicit **AA-Omniscience 25 knowledge weakness**; strong multi-step effort but a factual-knowledge ceiling keeps it out of the low-90s.
- **Context window: 88/100.** **1M native context with a 131K output cap** — top-tier on both axes and matching the 1M/131K leaders — plus **Active Memory** for cross-conversation recall. Scored just below the very top of the range because no independent long-context-recall figure was published to confirm effective utilization at the full 1M.
- **Multimodal: 82/100.** Broad **text + image + video + audio input** ( demos: image-conditioned 3D game, Instagram-photo-driven swag ordering, browser/app grounding) — genuinely multimodal on the *input* side. Held below the 85+ multimodal leaders because **output is text-only** (no image/audio/video generation) and no dedicated multimodal benchmark (e.g. MMMU/MathVision) was independently transcribed for this base slug.
- **Coding: 85/100.** Frontier-*claimed* coding: **Coding Agents Index 63** (from 54), **Terminal-Bench 4.0 52%**, and **SWE-Marathon** long-running project work, trained on diverse long-horizon tasks. Discounted from the low-90s because the **AA Index 52** and Coding-Agents gap vs the true frontier persist, the strongest coding cells belong to the *Wonder Full* sibling (SciCode 63, Coding Agents 68) rather than this base model, and Meta's coding table is vendor-run.
- **Cost efficiency: 62/100.** The weak axis — **$4.52 per AA Index task** is ~**2.8× Muse Spark 1.3's $1.60**, and the **$4/$20** sticker with **paid-only** access (no free tier) makes it a premium offering; it is cheaper only than Fable 5.1 ($7.63), Opus 5.5 ($5.98) and Sonnet 5.5 ($5.46) on $/task, and dearer than Astra ($3.26), Gemini 4 Argon ($1.99) and GPT-6.1 Sol ($0.72). ~54k output + ~7.69M input tokens/task reflects heavy "keep-working" token burn. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 85/100.** Mean of Tool 85 + Reasoning 83 + Context 88 + Multimodal 82 + Coding 85 = 423/5 = 84.6 → 85. Best fit: **personal and professional AI agents** that need sustained multi-step focus, cross-conversation Active Memory, broad multimodal input and strong (not absolute-frontier) coding — where per-task cost is secondary. Independent read: my **85 sits below the queue's curated 88.8** — the gap is driven by the **AA Index 52** being a clear tier below the frontier (Opus 5.5 ≈58, its own Wonder Full 56), the explicit **AA-Omniscience 25** knowledge weakness, the **premium $4.52/task**, and Meta's documented vendor-inflation tendency. Internally consistent: Wonder (85) > Muse Spark 1.1 (84) and sits ≈ GPT-6 Sol + 1, tracking its +4 AA-Index lead over Spark 1.3 while respecting that it is not yet a frontier-topping model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Meta's launch blog "Muse Wonder: A Frontier Model For Personal & Professional AI Agents," 2026-10-12, for Active Memory / Active Focus, Prometheus DC, Harvey LAB / FocusBench / SWE-Marathon, Meta Model API + Muse Code access and the CBRN/cyber safety posture; **Artificial Analysis** v4.3-basket figures — Intelligence Index 52 max, AutomationBench-AA 68%, Terminal-Bench 4.0 52%, Coding Agents Index 63, AA-Omniscience 25, hallucination 27%, $4.52/task — corroborated by VentureBeat, o-mega.ai and AA's own posts; the folder meta.json for the 1M/131K context, text/image/video/audio→text modality, $4/$20 ($0.20 cached) paid-only pricing and 2026-10-12 release). AA Index cells are **independent** and version-tagged (v4.3, non-convertible across baskets); Meta's own numeric table is image-only/vendor-run and discounted as an upper bound (the Wonder-Full 59-vs-56 gap documents the inflation tendency). Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
