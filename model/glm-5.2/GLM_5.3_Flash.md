# GLM 5.2 — findings by GLM 5.3 Flash

- Source: Z.AI (`glm-5.2`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Z.AI's flagship GLM-5 series model of June 2026; a lighter "GLM-5.2 Fast" variant exists)
- **Short description:** 744B-param sparse MoE (40B active) built for agentic engineering and long-horizon coding, with the standout being a **1M-token context window** (~5× the 5.1 generation's 200K) plus IndexShare sparse attention that cuts per-token compute 2.9× at full 1M while preserving long-range recall. MIT open weights.
- **Provider / access:** Z.AI API (`glm-5.1`-style Chat Completions at `api.z.ai`); OpenCode Zen lists `opencode/glm-5.2` with a free Zen tier (repo catalog); 18 gateway routes on opper (Alibaba, DeepInfra, DigitalOcean, Fireworks, Novita, Perplexity, etc.); open weights on Hugging Face (`zai-org/GLM-5.2`).
- **Release / knowledge:** released 2026-06-16 (opper: 70 days after GLM 5.1). Knowledge cutoff not verified in this pass.
- **IDs:** `glm-5.2` (Z.AI) / `opencode/glm-5.2` (Zen — free tier available per repo catalog).
- **Context window:** 1,000,000-token input (Z.ai/opper/benchlm; IndexShare designed for full-1M operation), ~131K max output. Note: OpenCode Zen's curated meta still lists a 204K serve window — verify the Zen-side cap before long-context work.
- **Modalities:** text in / text out (repo catalog; GLM-5 series text convention). Thinking-effort levels High and Max; tools, structured output, caching.
- **Pricing (as of 2026-10-09):** Z.AI route $1.40 in / $4.40 out per 1M (cache $0.26); cheap routes from $0.70/$2.20 (DigitalOcean) and $0.75/$2.40 (DeepInfra) — opper route table. Free Zen tier available (repo catalog).
- **Architecture:** sparse MoE, 744B total / 40B active, MIT license, self-hostable; IndexShare shares one indexer across every four attention layers (2.9× per-token compute reduction at 1M, Z.ai claim).

### Raw benchmarks found

> Z.AI GLM-5.2 model card via benchlm.ai (updated 2026-10-09) + AA and Vals rows. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (HF model card — fills the previously-missing TB row; Vals 67.8%); Terminal-Bench 3.0: **4.6%** (weak)
- MCP Atlas: **76.8%** (HF model card — fills the previously-missing MCP row); Toolathlon: **48.2%**
- GDPval-AA: **1418 Elo** / 43.7% (AA — fills the previously-missing GDPval row)
- Tau2-bench: **99.1%** (AA — corroborates the earlier 99 reading)
- APEX-Agents-AA: **33.7%**; AA ITBench: **42.7%**; ResearchClawBench: **20.7%**; AA Agentic Index: **39.4%** (benchlm.ai)
- SWE-bench Pro: **62.1%** (HF model card — corroborated; up from 58.4% for GLM-5.1)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (HF model card — fills the previously-missing GPQA; AA 89.5%, Vals 85.6%)
- HLE: **54.7%** with tools / **40.5%** without (HF model card — fills the previously-missing HLE; AA-HLE 41.1%)
- AIME26: **99.2%**; HMMT Nov 2025: **94.4%**; HMMT Feb 2026: **92.5%** (HF model card — new math rows)
- CritPt: **20.9%** (HF model card — fills); AA-LCR: **78.3%** (AA — corroborates the earlier 78% long-context reading)
- Artificial Analysis Intelligence Index: **33.7** (AA — corroborates the earlier 34.0)
- AA-Omniscience: Index 4.4, accuracy **24.3%**, hallucination rate **26.3%** (benchlm.ai — good honesty)
- MMLU-Pro (Vals): **86.7%**; AA-IFBench: **73.3%** (corroborates)

Coding:

- SWE-bench (Vals): **82.8%** (Vals AI — fills the previously-missing independent SWE-V proxy row)
- LiveCodeBench (Vals): **69.5%** (fills the previously-missing LCB row); ProgramBench: **63.7%** (HF model card)
- SciCode: **51.2%** (AA-SciCode — corroborates the earlier 51%; below the 55%+ frontier mark)
- CursorBench 3.2: **55.0%**; NL2Repo: **48.9%**; OpenHarmony Bench: **58.4%**; PostTrainBench v1.1: 31.7% (benchlm.ai)
- AA Coding Index: **68.8%** (AA — corroborated)

Long context:

- AA-LCR **78.3%** measured (corroborated); window 1M tokens native; MRCR/RULER at window length: no verified public score found

Multimodal / vision:

- Design Arena Website: **1292** (OpenRouter); text-only modality

### Normalized scores (1–100)

- **Tool use: 88/100.** Now measured: TB2.1 81.0% (Vals 67.8%), MCP Atlas 76.8%, GDPval-AA 1418, Tau2 99.1% with High/Max thinking — a step above GLM-5.1 on every agentic axis; weak TB3.0 4.6% and Toolathlon 48.2% cap it below 90.
- **Reasoning: 86/100.** GPQA 91.2% (filled — clears the 90% reference), HLE 54.7%/40.5% (filled — clears the 40% bar), AIME26 99.2% and the strongest open-weights reasoning profile measured in this repo's GLM line; AA Index 33.7 caps it below 90.
- **Context window: 95/100.** Native 1M with IndexShare built to hold recall at full depth and AA-LCR 78.3% measured; 131K output; no measured ≥98% retrieval at 512K+ (the old draft's 100 was over-awarded) and the unverified Zen 204K serve cap gives pause.
- **Multimodal: 15/100.** Text-only in and out.
- **Coding: 87/100.** SWE-bench (Vals) 82.8% (filled), SWE-Pro 62.1% (open-weights frontier, corroborated), AA-SciCode 51.2% (below the 55%+ mark), LCB (Vals) 69.5% and AA Coding Index 68.8%.
- **Cost efficiency: 100/100.** Free Zen tier (repo catalog) plus $1.40/$4.40 list with $0.70/$2.20 third-party routes and MIT self-hosting as floors.
- **Overall Score: 74/100.** Mean of the five quality dims (88 + 86 + 95 + 15 + 87) / 5 = 74.2 → 74. Best fit: open-weights 1M-context flagship for repo-scale agents — text-only modality is the one real trade.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the Z.AI GLM-5.2 HF model card, AA and Vals boards — official plus two independent harnesses, conflicts compared; earlier draft via opper.ai's AA feed); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing TB2.1 81.0%, MCP Atlas 76.8%, GDPval-AA 1418, HLE 54.7%/40.5%, GPQA 91.2%, AIME26 99.2%, CritPt 20.9%, SWE-bench (Vals) 82.8%, LCB 69.5% — Tool 87→88, Reasoning 83→86, Context 100→95, Coding 90→87, Overall 79→74 (old draft also showed a six-dim calc).
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
