# GLM-5.3-Flash — findings by Kimi K3

- Source: Z.AI / GLM-5.3-Flash (`glm-5.3-flash`; open weights `zai-org/GLM-5.3-Flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI (Zhipu) open-weight Flash reasoning model of the GLM-5 line — a surprisingly strong agentic package (GDPval-AA 1773 Elo, Toolathlon 78.4%, TB 2.1 84.3%) with 1M context; the #9 model by weekly tokens on OpenCode (~$0.04 avg session cost). Model card: huggingface.co/zai-org/GLM-5.3-Flash.
- **Provider / access:** Z.AI API (z.ai) + open weights on Hugging Face; OpenCode Zen route `opencode/glm-5.3-flash` live (OpenCode Data, 19.4M completed sessions over 2 months); OpenAI-compatible.
- **Release / knowledge:** Released 2026-08-26 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff not stated.
- **IDs:** `zai/glm-5.3-flash`, `zhipuai/glm-5.3-flash` (OpenCode Data); no Free-tier ID (the sibling GLM-5.3 has a separate free-tier listing elsewhere in this repo).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **131K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/PDF in (OpenCode Data — full familial coverage, confirmed this pass; prior pass had text/image only); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.15/M input, $0.50/M output, $0.03/M cached input, $0.00 cache write (OpenCode Data catalog — verified now; extremely cheap for its tier; open weights allow free self-hosting).
- **Architecture:** open weights (HF card + OpenCode Data); params undisclosed in card data I retrieved.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** pass@1 (official HF card via OpenCode Data; matches benchlm.ai; Vals 62.9% divergence noted)
- Tau3-Banking (AA): **47.2%** (benchlm.ai)
- GDPval-AA: **1773 Elo** — top-tier (official HF card via OpenCode Data; matches benchlm.ai)
- Toolathlon-Verified: **78.4%**; AA AutomationBench: **60.4%**; AutomationBench: **48.8%** pass@1 (official HF card; matches benchlm.ai); HLE w/ tools: **55.3%** (official; matches); AA Briefcase: **1459** (benchlm.ai)
- Agents' Last Exam: **26.3** score (official HF card — new this pass)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA); 86.4% (Vals) (benchlm.ai)
- HLE: no dedicated row; HLE w/ tools **55.3%** accuracy (official HF card; matches benchlm.ai)
- MLCR-AA: **51.1%** — strong multi-lingual/long reasoning (benchlm.ai)
- LCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **41.8**; BenchLM overall **58.01/100, #47 of 507**
- MMLU-Pro (Vals): **86.1%** (benchlm.ai)
- Omniscience Accuracy / Hallucination: no verified public score found

Coding:

- SWE-bench (Vals): **92.0%** — top-tier (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **80.5%** (benchlm.ai)
- DeepSWE: **63.4%** resolved (official HF card via OpenCode Data; matches benchlm.ai); NL2Repo: **56.3%**; OpenHarmony Bench: **57.3%** (benchlm.ai)
- SciCode / Coding Index: no verified public score found

Long context:

- 1M window with 131K max output verified (OpenCode Data); MLCR 51.1% is positive but no MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv: **89.4%**; Chartography (tools): **78.0%**; OfficeQA Pro: **62.4%**; MMVU: **80.5%**; BabyVision: **53.4%**; Design Arena Website: **1282 Elo** (benchlm.ai); video + PDF input officially listed (OpenCode Data)

### Normalized scores (1–100)

- **Tool use: 86/100.** Unchanged: GDPval-AA 1773 + Toolathlon 78.4% + TB 2.1 84.3% form an elite agentic stack (all official-confirmed); capped by Vals TB 62.9% divergence and ALE 26.3.
- **Reasoning: 78/100.** Unchanged: GPQA 91.2%, HLE w/ tools 55.3%, MLCR 51.1%; capped by missing LCR/CritPt rows and modest AA Index (41.8).
- **Context window: 84/100.** Unchanged: 1M window, 131K output verified; capped by missing max-window retrieval measurements.
- **Multimodal: 82/100.** Raised from 78: the official modality list now confirms video + PDF input (previously text/image only), on top of CharXiv 89.4% / MMVU 80.5%; text-only output and no audio rows still cap it.
- **Coding: 82/100.** Unchanged: SWE-bench (Vals) 92.0% excellent; capped by DeepSWE 63.4% (official) and missing SciCode/Verified rows.
- **Cost efficiency: 92/100.** Raised from provisional 85: verified catalog price $0.15/$0.50 (cache $0.03, free cache writes) is among the cheapest flagship-adjacent API tiers, and MIT-class open weights enable free self-hosting; Zen usage telemetry (61.6% weekly retention) confirms real-world economics.
- **Overall Score: 82/100.** Mean of the five quality dims (86+78+84+82+82)/5 = 82.4 → 82. Best fit: open-weights agentic tool use at Flash cost; underrated by headline indices relative to its measured agentic suite.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data model page `zhipuai/glm-5-3-flash` incl. usage, catalog pricing and official HF-card benchmark rows; huggingface.co/zai-org/GLM-5.3-Flash card; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date (2026-08-26), pricing, 131K max output, video/PDF input coverage and Zen availability; added Agents' Last Exam row. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
