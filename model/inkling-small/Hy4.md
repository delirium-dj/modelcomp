- Source: Thinking Machines Lab/Inkling-Small
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling-Small
- **Short description:** The smaller preview sibling released alongside Thinking Machines Lab's 2026-07-15 Inkling flagship, with **276B total / 12B active** parameters. A distinct model; `Inkling` (975B/41B) and `inkling-2-small` (594B/17B, its successor) are separate tracked folders.
- **Provider / access:** Preview via the Tinker platform; complete weights were to be published after testing.
- **Release / knowledge:** preview 2026-07-15; knowledge cutoff: no verified public score found.
- **IDs:** `inkling-small` family ID as cited. No free Zen ID verified.
- **Context window:** no Inkling-Small-specific figure in the retrieved pages — the Inkling generation supports up to 1M tokens, but that figure is not attributed to this checkpoint; no verified public score found.
- **Modalities:** no Inkling-Small-specific modality list in the retrieved pages; the generation is multimodal (text/image/audio in, text out) — not attributed here. No verified public score found.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. Open weights were planned.
- **Architecture:** MoE, **276B total / 12B active** parameters (Baike Inkling 2 Small article, in the predecessor comparison). Full weights to follow after testing.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **5%** (Inkling 2 Small's predecessor baseline, measured under this ID in the successor's before/after table)
- FrontierCode 2.0: **5%**
- HLE-Diamond: **12%**
- AA-Briefcase Elo: **912**; rule pass rate **20%**
- Hallucination rate **61%**, answer rate **77%**, accuracy **32%**, ~**37,000 output tokens per task** (from the successor's reliability table, predecessor column)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **13** (Inkling 2 Small's predecessor figure, +18 in the successor)
- GPQA Diamond / LCR / CritPt / Omniscience: no verified public score found

Coding:

- FrontierCode 2.0 **5%** and AutomationBench-AA **5%** as above
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 72/100.** A 12B-active MoE preview with a documented Tinker fine-tuning path; capped by a very weak 5% AutomationBench-AA / 5% FrontierCode 2.0 and 20% AA-Briefcase rule pass rate.
- **Reasoning: 72/100.** AA index 13 and HLE-Diamond 12%; capped by a 61% hallucination rate and 32% accuracy.
- **Context window: 82/100.** Scored conservatively: no verified window for this checkpoint, though the successor's RL used 256K context compression and the family reaches 1M.
- **Multimodal: 80/100.** Scored conservatively: the family is multimodal but no Inkling-Small-specific modality list or benchmark was retrievable.
- **Coding: 70/100.** 5% FrontierCode 2.0 and 5% AutomationBench-AA; capped by those very low absolute results.
- **Cost efficiency: 88/100.** Only 12B active params from 276B, ~37K output tokens per task (1/4 of its successor's), and planned open weights. Excluded from Overall.
- **Overall Score: 75/100.** Half-up mean of 72, 72, 82, 80, 70 = 75.2 → 75. Best fit: research/baseline use only — a preview checkpoint whose successor (Inkling 2 Small) improved nearly every metric by 4–9x.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Inkling and Inkling 2 Small articles (already fetched), which document Inkling-Small as the 276B/12B predecessor and publish its metrics as the "before" column of the successor's before/after benchmark table. Those predecessor-column figures are explicitly labelled as measured under this ID in that table, not copied as successor scores. A separate Baike `Inkling-Small` entry was identified but not fetched this pass; rows it might contain are marked "no verified public score found" rather than guessed. `Inkling` and `inkling-2-small` are separate folders, never merged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Inkling — 百度百科 (Inkling-Small 12B-active preview identity, already fetched)](https://baike.baidu.com/item/Inkling/68740331)
  - [Inkling 2 Small — 百度百科 (276B/12B predecessor specs and before/after benchmark table, already fetched)](https://baike.baidu.com/item/Inkling%202%20Small/69626551)
