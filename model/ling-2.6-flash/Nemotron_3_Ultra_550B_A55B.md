# Ling 2.6 Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash (ling-2.6-flash)
- **Short description:** InclusionAI (Ant Group)'s "fast thinking" MoE model, released April 2026. 104B total / 7.4B active parameters. Designed for real-world agents requiring fast responses. 256K context (262,144). Open weights? (inclusionAI on HF/ModelScope). "Instant (instruct)" model. Comparable to 40B-class dense models with reduced token usage.
- **Provider / access:** Hugging Face (`inclusionai/ling-2.6-flash`), ModelScope, Novita AI (deprecated), OpenRouter (deprecated). Self-hosted? (license unclear). Artificial Analysis: 1 provider API.
- **Release / knowledge:** 2026-04 release; knowledge cutoff not published.
- **IDs:** `inclusionai/ling-2.6-flash` (HF/ModelScope/Novita/OpenRouter). License unclear.
- **Context window:** 262,144 tokens (256K tier). Verified via BenchLM, LLM Reference, Artificial Analysis, Interfaze AI.
- **Modalities:** Text input; text output. **No native multimodal** (text-only per Interfaze AI, LLM Reference, BenchLM). Reasoning: no (non-reasoning "instant" model per LLM Reference). Tool calls: yes (BFCL-v4, Tau2-bench, PinchBench per Interfaze AI). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Artificial Analysis: pricing unavailable. Novita AI/OpenRouter: deprecated routes. No clear public pricing. Self-host possible if weights open.
- **Architecture:** 104B total / 7.4B active MoE. 256K context. "Fast thinking" approach reduces costs to ~1/4 of comparable models. Comparable to 40B-class dense models.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE LIMITATION:** **Zero standard benchmarks with numerical scores** found. BenchLM shows "partial coverage" but 0 shared benchmarks with any comparison model. Artificial Analysis has screenshots but no numerical scores in summaries. Interfaze AI claims strong performance on BFCL-v4, Tau2-bench, SWE-bench Verified, PinchBench but provides no numbers.

Agent / tool use (claimed, no numbers):

- BFCL-v4: **claimed strong** — Interfaze AI
- Tau2-bench: **claimed strong** — Interfaze AI
- SWE-bench Verified: **claimed strong** — Interfaze AI
- PinchBench: **claimed strong** — Interfaze AI
- MCP-Atlas / Toolathlon / AutomationBench / Terminal-Bench / BrowseComp / DeepSearchQA: **no scores**

Reasoning / knowledge (Artificial Analysis screenshots):

- AA-LCR: **31.3%** — Artificial Analysis (screenshot)
- GDPval-AA: **550** (normalized 0.0%) — Artificial Analysis
- SciCode: **27%** — Artificial Analysis
- MMLU / GPQA / AIME / HLE / MMLU-Pro / MATH / BBH / C-Eval: **no scores**

Coding:

- SciCode: **27%** — Artificial Analysis
- LiveCodeBench / HumanEval / MBPP / Codeforces / SWE-bench / Terminal-Bench: **no numerical scores** (Interfaze claims "strong" on SWE-bench Verified)

Long context:

- Native 256K (262,144) verified
- AA-LCR: **31.3%** — Artificial Analysis
- RULER / MRCR / GraphWalks / LongBench / LOFT: **no scores**

Multimodal:

- **No native multimodal** (text-only per Interfaze AI, LLM Reference, BenchLM). Interfaze AI comparison shows Ling 2.6 Flash as text-only vs their multimodal model.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 35/100.** Interfaze AI claims strong on BFCL-v4, Tau2-bench, SWE-bench Verified, PinchBench but **provides zero numerical scores**. Artificial Analysis shows GDPval-AA normalized 0.0%. BenchLM 0 shared benchmarks. Capped by zero published numerical benchmarks for tool use.
- **Reasoning: 30/100.** AA-LCR 31.3% (low), SciCode 27%, GDPval-AA 0.0%. **No standard reasoning benchmarks** (GPQA, AIME, HLE, MMLU, MMLU-Pro, MATH). Capped by AA-LCR 31% and zero standard reasoning benchmarks.
- **Context window: 70/100.** 256K native (256K tier = 70–75). AA-LCR 31.3% low. No RULER/MRCR/GraphWalks/LongBench. Tier placement saves score despite poor AA-LCR.
- **Multimodal: 15/100.** Text-only input/output. No vision/audio/video. Floor for text-only model.
- **Coding: 35/100.** SciCode 27% (low). Interfaze claims SWE-bench Verified strong but **no numbers**. No LiveCodeBench/HumanEval/Codeforces/Terminal-Bench. Capped by SciCode 27% and zero published coding benchmarks.
- **Cost efficiency: 50/100.** "Fast thinking" claims ~1/4 cost of comparable models. But no published pricing, deprecated OpenRouter/Novita routes. Self-host possible if weights open (license unclear). Uncertain pricing caps score.
- **Overall Score: 37/100.** Mean of (35+30+70+15+35)/5 = 37.0 → 37. Artificial Analysis Intelligence Index: not computed (unranked). Queue rank unknown. Best fit: **efficient MoE with strong vendor claims but zero published numerical benchmarks**; 256K context; "fast thinking" cost claims unverified; OpenRouter/Novita routes deprecated.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (BenchLM, Artificial Analysis, Interfaze AI, LLM Reference, SourceForge comparison vs MiMo); scores normalized 1–100 per model-comparison.md methodology. **Critical limitations:** Zero published numerical benchmarks for core claims (BFCL-v4, Tau2-bench, SWE-bench Verified, PinchBench); Artificial Analysis only shows AA-LCR 31.3%, SciCode 27%, GDPval-AA 0%; BenchLM 0 shared benchmarks with any model; OpenRouter/Novita routes deprecated; license unclear; no independent verification.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.