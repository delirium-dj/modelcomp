# Ling 3.0 Flash VL — findings by GLM 5.3 Flash

- Source: InclusionAI (`ling-3.0-flash-vl`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's next-generation native multimodal model, built on Ling 3.0 Flash (124B total / 5.5B active MoE), adding native image and video perception plus visual agent capabilities for real-world task solving through vision. Not a tier variant — it is the VL (vision-language) sibling of `ling-3.0-flash`. BenchLM ranks it #110 of 889 (47.43); 2026-10-17 refresh: #114/954 (46.72); sibling Ling 3.1 Flash scores 62.06 (2026-10-17: 68.03).
- **Provider / access:** OpenRouter `inclusionai/ling-3.0-flash-vl` (Chat Completions API, `https://openrouter.ai/api/v1/chat/completions`); DeepInfra `inclusionai/ling-3.0-flash-vl-20260910` (131K context); Novita `inclusionai/ling-3.0-flash-vl-20260910` (262K context); kilo.ai lists a `ling-3.0-flash-vl-free` variant at $0. Not listed on OpenCode Zen (no Zen Free ID exists).
- **Release / knowledge:** Released 2026-09-10 (Benchable model page dated 2026-09-10; HF release image tagged `ling-3.0-flash-vl-0910`). Knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.0-flash-vl` (OpenRouter); no Free ID on Zen — explicitly stated.
- **Context window:** 256K total per the official Hugging Face model card (BenchLM concurs 262K; SGLang cookbook runs 262,144 via YaRN rope scaling on a 131,072 base). Max output not published on the HF card; Novita serves 262K context. Benchable's spec sheet lists 131K — conflicting secondary source, the vendor card wins.
- **Modalities:** image, video, text in (ViT encoder + 2-layer MLP projector; VideoRoPE for temporal order); text out; reasoning yes (hybrid instant/reasoning, thinking mode enabled by default); tool calls yes; structured outputs / JSON mode yes.
- **Pricing (as of 2026-10-11):** DeepInfra $0.06 in / $0.18 out / $0.012 cached per 1M; Novita $0.021 in / $0.0616 out per 1M; kilo.ai $0 free variant listed. MIT open weights — self-hosting possible.
- **Architecture:** 124B total / 5.5B activated per token (sparse MoE, `bailing_moe_v3_vl`); 42-layer hybrid backbone alternating KDA and Gated MLA layers at a 5:1 ratio; ViT visual encoder with two-layer MLP projector; VideoRoPE positional encoding; open weights under MIT license.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: normalized **33.2%** (AA, independent; BenchLM 2026-10-17 refresh reads 33.1% — minor drift, flagged — fills the gap the prior pass marked missing; weak)
- Terminal-Bench 2.1: evaluated under the AA protocol per the HF card but published only as a chart image — **still no verified extractable score**
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found
- Benchable reliability: 100% response success (in-house harness, prior pass)

Reasoning / knowledge:

- AA-GPQA Diamond: **86.2%** (AA, independent — fills the GPQA gap; strong for the class)
- AA-HLE: **22.0%** (AA — fills the HLE gap)
- Artificial Analysis Intelligence Index: **24.6** (AA current board) — **conflicts with the vendor-published 42 on AA v4.1.1** the prior pass cited; board recomposition accounts for the difference
- AA-LCR v1.1: **78.3%** (AA — fills the long-context gap, solid); CritPt: **2.0%** (AA — near-zero)
- AA-Omniscience: **14.4% accuracy / 22.0% non-hallucination row / −4.5 index** (AA — weak accuracy)
- Benchable Reasoning: **97.5%** (80th pct); Mathematics: **95.0%**; Ethics: **100%**; General Knowledge: **95.8%**; Hallucinations accuracy: **95.7%** (in-house harness, prior pass)

Coding:

- AA-SciCode: **44.2%** (AA, independent — fills the SciCode gap; modest)
- Benchable Coding: **95.0%** (90th pct — in-house harness, prior pass)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR 78.3% is the first measured long-context number (solid); 256K–262K window documented; no MRCR/RULER value found

Multimodal:

- AA-MMMU-Pro: **79.0%** (AA, independent — fills the vision gap; strong for the class)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: the AA rows fill the GPQA/HLE/LCR/SciCode/GDPval/vision gaps with evidence landing inside the existing bands; the AA Index 24.6-vs-vendor-42 conflict is documented but nets out within the composite.

- **Tool use: 52/100.** GDPval normalized 33.2% (AA) is the only measured agentic row and it is weak; Terminal-Bench remains chart-image-only and no Tau3/GDPval/OSWorld rows exist — provisional mid score stands.
- **Reasoning: 68/100.** AA-GPQA 86.2% (strong fill) and AA-LCR 78.3% support the class, while AA-HLE 22.0%, CritPt 2.0%, the weak Omniscience accuracy (14.4%) and the 24.6-vs-42 index conflict cap it below the frontier band.
- **Context window: 72/100.** 256K native (BenchLM concurs 262K) lands in the 200K–500K tier; AA-LCR 78.3% is the first measured retrieval-adjacent evidence (solid); conflicting secondary specs noted.
- **Multimodal: 85/100.** Native image and video input with measured vision (AA-MMMU-Pro 79.0%) and visual agent "Act" capabilities; text-only output keeps it out of the 90–100 band.
- **Coding: 74/100.** AA-SciCode 44.2% adds an independent row alongside the in-house Benchable coding 95.0%; still no SWE-bench/LiveCodeBench verification caps the mid band.
- **Cost efficiency: 97/100.** Cheapest verified paid route is Novita at $0.021/$0.0616 per 1M (DeepInfra $0.06/$0.18), placing it at the ~$0.10/$0.20 → 97–99 band; no Zen Free ID (a $0 kilo.ai free variant exists but was not evaluated), and MIT open weights make self-hosting a further cost lever.
- **Overall Score: 70.2/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (52 + 68 + 72 + 85 + 74) / 5 = 351/5 = 70.2 — unchanged. Best fit: a cost-efficient multimodal workhorse for image/video understanding and visual agent tasks, pending standard-harness (SWE-bench, Terminal-Bench) verification before trusting it as a primary coder or planner.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai updated 2026-10-10 with Artificial Analysis board citations, the prior 2026-10-03 pass on the HF vendor card + Benchable evals, OpenRouter/DeepInfra/Novita listings; 2026-10-16 re-check: BenchLM 11-row refresh corroborates every row, no new data (GDPval 33.2% → 33.1%; rank → #114/954 46.72) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
