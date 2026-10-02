# Nemotron 3.5 Lightning (Free) — findings by Qwen 3.8 Flash

- Source: NVIDIA / Nemotron 3.5 Lightning 30B‑A3B (NVFP4) (`opencode/nemotron-3.5-lightning-free`; HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's compact **open 30B / 3B‑active MoE (NVFP4‑quantized)** designed as the "worker" arm of a two‑model planner pattern — high‑volume, low‑latency execution behind a frontier planner. Fast and near‑free ($0 Zen / open weights) but structurally shallow: **CritPt 0.0%, τ³ 9.5%, TB 2.1 23.5%, AA Agentic Index 6.1%** are all floor signals. GPQA 75.6 / MMLU‑Pro 81.6 / IFBench 72.9 show decent static QA. Sibling to the Nemotron 3 Ultra (which scores 63 in this repo) — the same family's cheap worker tier.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-lightning-free` (free); NVIDIA trial; open weights on HF.
- **Release / knowledge:** 2026 (Nemotron 3.5 family); exact date and cutoff not independently verified.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free); HF `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`.
- **Context window:** **262,144 native** on the Zen serve (curated `meta.json`); benchlm notes 1M for the model — but the **Zen listing serves 262K**, which is what users actually get. Output cap unverified.
- **Modalities:** **Text‑only** (catalog). Reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026‑10‑02):** Free Zen / NVIDIA trial ($0). Cost excluded from Overall.
- **Architecture:** open weights, MoE 30B total / 3B active, NVFP4 quantized; AA Openness Index 83.3.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (benchlm.ai scorecard, 2026‑09‑24). Full AA panel. Cohort 55.9 inflates Multimodal to 25 (Design Arena mis‑crediting) and Reasoning to 64.2 despite CritPt 0.0%. Kimi floors text‑only correctly at 15 → Overall 46.

Agent / tool use:

- PinchBench: **83.4%** (benchlm.ai) — its best row
- Terminal‑Bench 2.1: **23.5%**; τ³‑bench: **9.5%**; GDPval‑AA: **865 Elo** (6.2% normalized); BrowseComp: **36.8%**
- AA Agentic Index: **6.1%** — near‑floor
- τ²‑bench / Claw‑Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **75.6%** (GPQA‑D; AA 74.3%)
- HLE: **10.5%** no‑tools; AA‑HLE 10.6%
- AA‑LCR: **49.2%**; **CritPt: 0.0%** — catastrophic floor
- AA Intelligence Index: **12.9**; AA Openness Index: **83.3**; BenchLM overall **19.1 / #186 of 507**
- AA‑Omniscience Accuracy / Hallucination: **14.4% / 37.6%** — low accuracy, moderate hallucination
- MMLU‑Pro: **81.6%**; IFBench: **72.9%**

Coding:

- SWE‑bench Verified: **52.8%**; SWE Multilingual: **36.5%**
- SciCode: **31.4%**; AA Coding Index: **26.8** — very low
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- 262K Zen serve (1M native spec); AA‑LCR **49.2%** at that window; no MRCR / RULER rows

Multimodal:

- Text‑only (catalog) — floor. No image/audio/video/PDF evidence.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. Kimi's BenchLM evidence base drives scoring; the CritPt 0.0% + AA Index 12.9 + Agentic 6.1% cluster justifies a hard reasoning/tool discount.

- **Tool use: 48/100.** PinchBench 83.4% is genuinely strong and shows it can complete structured tool tasks; IFBench 72.9% supports this. But **τ³ 9.5% + TB 2.1 23.5% + AA Agentic 6.1% + GDPval 865 (6.2% norm)** are all floor signals — it cannot operate as a generalist agent. Kimi 48; cohort 54.2. Match Kimi at 48.
- **Reasoning: 52/100.** GPQA 75.6 / MMLU‑Pro 81.6 / IFBench 72.9 are decent static‑QA numbers, but **CritPt 0.0%** is a catastrophic hard floor, HLE 10.5% is well below the frontier bar, AA Index 12.9 is bottom‑tier. Omniscience hallucination 37.6% is manageable but accuracy 14.4% is very low. Kimi 55; −3 for the CritPt 0 + AA Index 12.9 combo. Cohort 64.2 heavily inflated.
- **Context window: 62/100.** **262K Zen serve cap** = v4 200K–500K band (65–84, 200K anchors 70). LCR 49.2% is measured retrieval decay at that window, pulling below the band floor. Kimi 58 (a bit harsh — 262K is above the 200K anchor); cohort 75.6 (mis‑scores the 1M native spec). **62** respects the 262K Zen reality with an LCR discount.
- **Multimodal: 12/100.** Text‑only catalog; no image/audio/video evidence. Kimi 15; cohort 25 (Design Arena mis‑crediting). Scored 12 at strict text‑only floor.
- **Coding: 48/100.** SWE‑V 52.8% is usable for a 3B‑active model, but **SWE Multilingual 36.5%, SciCode 31.4%, and AA Coding Index 26.8** are all deeply sub‑mid. Kimi 52; cohort 60.4 (inflated). −4 for the Coding Index 26.8 hard signal.
- **Cost efficiency: 99/100.** $0 Zen + open weights at 3B active = near‑minimal serving cost. Cost excluded from Overall.
- **Overall Score: 44/100.** Mean of Tool 48, Reasoning 52, Context 62, Multimodal 12, Coding 48 = 222/5 = 44.4 → **44**. Best fit: **the worker arm of a two‑model planner** — high‑volume, low‑latency execution where the frontier planner handles reasoning and Nemotron 3.5 Lightning handles structured tool calls / bulk extraction at $0. **Not** a standalone reasoning, agentic, or coding model. Kimi 46; cohort 55.9 (inflated by raters scoring native 1M and miscrediting Design Arena as vision). Honest floor: 44 for a genuinely cheap and fast worker that the field's hardest benchmarks expose as shallow.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` benchlm.ai full panel + HF card architecture reference. Curated `meta.json` correctly flags 262K Zen serve / text‑only / free. Flagged: (a) cohort Context 75.6 reflects the **native 1M spec**, but the **Zen serve caps at 262K** — scored on the 262K reality; (b) cohort Multimodal 25 is a Design Arena mis‑crediting artifact; (c) **CritPt 0.0% + AA Index 12.9 + AA Agentic 6.1%** together confirm this is a fast‑shallow worker, not a reasoning model — the model card's own "pair with a frontier planner" framing is honest about this. Cross‑reference: sibling Nemotron 3 Ultra (free) scores 63 in this repo — the Ultra/worker tier gap of 19 points reflects genuine architectural scale difference.
- Revisit trigger: if NVIDIA exposes the full 1M on Zen, or ships a Nemotron 3.5 Lightning v2 with agentic benchmarks.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.
