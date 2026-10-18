# North Mini Code — findings by GLM 5.3 Flash

- Source: Cohere (`north-mini-code-1.0`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (1.0)
- **Short description:** Cohere's first agentic coding model and the debut of its North family — a small, efficient open-weights MoE built for code generation, agentic software engineering, terminal tasks, and private/local deployment in the sovereign developer ecosystem. BenchLM lists 12 rows but assigns **no public overall score (unranked)**. The Zen Free ID `north-mini-code-free` is its $0 tier.
- **Provider / access:** Cohere API (dashboard key, Chat Completions); OpenRouter `cohere/north-mini-code:free` ($0 in / $0 out); OpenCode Zen `north-mini-code-free` (models.dev: `cohere/north-mini-code-1-0`); Cohere Model Vault (managed inference); Hugging Face weights `CohereLabs/North-Mini-Code-1.0` (bf16, fp8, w4a16). Specifically trained for OpenCode compatibility.
- **Release / knowledge:** Announced 2026-06-09 (Cohere blog); OpenRouter lists the model release as 2026-06-17. Knowledge cutoff not published.
- **IDs:** `cohere/north-mini-code-1.0` (Cohere API); Zen Free ID `north-mini-code-free` exists.
- **Context window:** 256K total context (BenchLM concurs); 64K max generation.
- **Modalities:** text in/out only; reasoning yes; tool calls yes; structured outputs / JSON mode yes.
- **Pricing (as of 2026-10-11):** $0 in / $0 out per 1M on the OpenRouter `:free` route and the Zen Free ID; paid Cohere API / Model Vault pricing applies to production routes. Apache 2.0 open weights — self-hosting on 1× H100 @ FP8/FP4 minimum.
- **Architecture:** 30B total / 3B active sparse Mixture-of-Experts; Apache 2.0 open-weights license; minimum hardware 1× H100.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM page (updated 2026-10-10, still unranked with 12 of 625 rows) reveals a major AA recomposition — the prior BenchmarkList-sourced AA Index of 20.2 now reads **9.9** on the current AA board, and GDPval normalizes to **0.0%**. These corrections move the scores down materially.

Agent / tool use:

- GDPval-AA: **normalized 0.0%** (AA, independent) — **conflicts with the 543 Elo / 37th percentile reading the prior pass cited**; the AA board now treats the score as floor-class
- τ²-bench Telecom: **37.4%** (AA — corroborated); AA Agentic rows generally weak
- Terminal-Bench Hard: **31.1%** (78th percentile, prior pass); Terminal-Bench 2.1: **35.6%** (50th percentile, prior pass)
- Tau3-Banking: **6.4%** Pass@1 (prior pass); AA-Briefcase: **240 Elo** (13th percentile, prior pass)
- DuelLab GameBench 2: **27.0** (6th percentile, prior pass)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (AA — corroborated)
- HLE: **11.1%** (AA — corroborated); Artificial Analysis Intelligence Index: **9.9** (AA current board, 2026-10-10) — **conflicts with the 20.2 BenchmarkList reading the prior pass cited**; recomposition accounts for the difference
- AA-LCR v1.1: **37.3%** (AA — corroborates the prior 36.0); CritPt: **0.3%** (AA — floor)
- AA-Omniscience: **18.9% accuracy / 83.2% non-hallucination row / −48.6 index** (AA — repo-worst tier)
- AA-IFBench: **57.6%** (AA — new)
- BenchmarkList ECI: **110.74** (#195/397; prior pass)

Coding:

- AA-SciCode: **38.8%** (AA — corroborates the prior 38.2)
- AA Coding Index: not surfaced on the current BenchLM page (the prior 33.4 stands as vendor-linked)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 37.3% at window length (45th percentile — corroborated); no MRCR/RULER value reported

### Normalized scores (1–100)

- **Tool use: 42/100.** (Was 48 on the prior pass.) GDPval normalizes to 0.0% on the current AA board (floor-class), τ² 37.4% and TB2.1 35.6% sit below the mid band, and Tau3 6.4%/Briefcase 240 are weak — two bands down on the recomposed evidence.
- **Reasoning: 54/100.** (Was 62 on the prior pass.) The AA Index recomposes from the cited 20.2 to 9.9 — well below the 20–35 mid band the prior score mapped to — with GPQA 75.7% the sole bright spot and the −48.6 Omniscience index confirming the class ceiling.
- **Context window: 72/100.** 256K total (BenchLM concurs; 64K max out) lands in the 200K–500K tier; AA-LCR 37.3% is weak measured long-context retrieval.
- **Multimodal: 15/100.** Text-only input and output per the Cohere snapshot and models.dev.
- **Coding: 56/100.** (Was 62 on the prior pass.) SciCode 38.8% is corroborated but the AA Coding data is absent/weak on the current board, and the recomposed Index undermines the prior mid-band placement — one band down.
- **Cost efficiency: 100/100.** $0 in / $0 out per 1M on the OpenRouter `:free` route and the Zen Free ID; Apache 2.0 self-hosting on a single H100 makes it one of the cheapest agentic coders to run.
- **Overall Score: 47.8/100.** (Was 52 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (42 + 54 + 72 + 15 + 56) / 5 = 239/5 = 47.8 — lowered on the 2026-10-11 second pass as the AA recomposition (Index 20.2→9.9, GDPval→0.0%) corrects the launch-era framing. Best fit: a free, fast, self-hostable execution-layer coder for small agentic tasks — not a primary planner and not competitive on measured reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai North Mini Code page with AA board citations, the prior 2026-10-03 pass on BenchmarkList/AA verified evals, Cohere launch blog; 2026-10-16 re-check: BenchLM 12-row refresh corroborates every row, still unranked, no new data — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
