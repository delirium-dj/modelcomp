# North Mini Code — findings by Claude Opus 5

- Source: Cohere / Cohere Labs (`north_mini_code`, HF `CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's own summary is exact: "North Mini Code is an **open weights research release of a 30B-A3B parameter model optimized for code generation, agentic software engineering, and terminal tasks**" ([Cohere Labs model card](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)). The notable result is efficiency — **67.6% SWE-bench Verified and 75.7% GPQA Diamond from a model with just 3B active parameters** — delivered under Apache 2.0 with a free tier. Distinct model; Cohere's Command A+, North Small Translate and North Micro Vision Instruct are separate models, and the Cohere Transcribe line belongs in `models_voice/`.
- **Provider / access:** **Open weights under Apache 2.0** — fully permissive, which is worth noting because Cohere Labs releases are often non-commercial. Developed by **Cohere and Cohere Labs**. Served on Cohere's platform and **OpenCode Zen**, with a **completely free tier**.
- **Release / knowledge:** Model ID `north-mini-code-1-0`; precise release date not established in this pass. Knowledge cutoff: no verified public date found.
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (Hugging Face), `north-mini-code-1-0` (Cohere), `north_mini_code` (Zen). **Free tier: $0 input / $0 output.**
- **Context window:** **256,000 tokens with a 64,000-token maximum output** — Cohere states "Context length: 256K & 64K max output". The generous output allowance is well matched to code generation, where multi-file diffs need room.
- **Modalities:** **Text in → text out only.** No image, audio or video. Reasoning: **yes** — [BenchLM](https://benchlm.ai/models/north-mini-code-1-0) classifies it a Reasoning model. Tool calls: yes, and agentic software engineering plus terminal tasks are stated design targets.
- **Pricing (as of 2026-10-08):** **$0 / $0 — a completely free tier**, plus free self-hosting under Apache 2.0. At **3B active parameters** it is cheap to serve either way, with sub-second latency reported.
- **Architecture:** **30B total / 3B active** Mixture-of-Experts — a 1/10 activation ratio. Explicitly framed by Cohere as a **research release** rather than a production flagship.

### Raw benchmarks found

> **Unusually good provenance for a small model.** BenchLM holds **12 of 626 benchmarks** and assigns **no overall score** (unranked), but **all twelve rows are Artificial Analysis measurements** — no vendor self-reports at all. Three further coding figures come from **Poolside's Laguna XS 2.1 model card**, where North Mini Code appears as a compared model and Poolside states it "used the **highest publicly-referenced scores** for all comparison models… official scores published in release blog posts or equivalent".

Coding:

- **SWE-bench Verified: 67.6%** (via Poolside's comparison table) — **strong for 3B active parameters**
- **SWE-bench Pro: 40.2%** (via Poolside's comparison table)
- **Terminal-Bench 2.0: 36.0%** (via Poolside's comparison table)
- **AA-SciCode: 38.8%** ([Artificial Analysis](https://artificialanalysis.ai/models/north-mini-code))
- **No LiveCodeBench, SWE-bench Multilingual or DeepSWE figure found**

Knowledge / reasoning:

- **AA-GPQA Diamond: 75.7%** — the standout independent result, and high for this parameter class
- **AA-IFBench: 57.6%** — instruction following
- **AA-LCR: 37.3%**; **AA-HLE: 11.1%**; **CritPt: 0.3%**
- **Artificial Analysis Intelligence Index: 9.9** — low, and sharply at odds with the GPQA figure
- **AA-Omniscience: Index −48.6%, Accuracy 18.9%, Hallucination Rate 83.2%**

Agent / tool use:

- **τ²-bench: 37.4%** (Artificial Analysis)
- **GDPval-AA: 0.0% normalized** (Artificial Analysis) — a floor result on economically valuable knowledge work
- **No Terminal-Bench Hard, BFCL, Toolathlon, MCP-Atlas or BrowseComp figure found**

**Absent entirely:** no MMLU-Pro, AIME, ARC-AGI or multimodal figure; and **no MRCR, RULER or needle-retrieval measurement** despite a 256K window.

### Normalized scores (1–100)

- **Tool use: 58/100.** Reasonable for the size, with a real ceiling. **Terminal-Bench 2.0 at 36.0%** is a credible agentic-terminal result from a 3B-active model and matches Cohere's stated design target of "agentic software engineering, and terminal tasks"; **τ²-bench 37.4%** and **AA-IFBench 57.6%** show structured tool dialogues and instruction adherence both work. The hard limit is **GDPval-AA at 0.0% normalized** — it produces nothing of value on long-horizon professional deliverables — and there is **no BFCL, Toolathlon, MCP-Atlas or BrowseComp figure** to broaden the picture. Good at scoped agentic coding, incapable of open-ended knowledge work.
- **Reasoning: 52/100.** **AA-GPQA Diamond at 75.7% is genuinely impressive for 3B active parameters** and is independently measured, not self-reported. Everything designed to resist memorization disagrees: an **Artificial Analysis Intelligence Index of 9.9**, **HLE 11.1%**, **CritPt 0.3%**, and **Omniscience at −48.6 with an 83.2% hallucination rate against 18.9% accuracy**. That combination — high GPQA, low index, high fabrication — is the characteristic profile of a small model that has learned benchmark-shaped science well and generalizes poorly. Scored at the midpoint on the strength of GPQA, capped by the rest.
- **Context window: 58/100.** **256,000 tokens with a 64,000-token maximum output** is a well-balanced specification, and the large output allowance is the right choice for a coding model — many models in this dataset pair a big window with a 4K–32K output cap that makes long diffs impossible. But measured quality is weak: **AA-LCR 37.3%**, and **no retrieval measurement at any depth** exists. Scored on a good spec with poor demonstrated recall.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input and none claimed — Cohere routes vision to North Micro Vision Instruct. Template floor.
- **Coding: 68/100.** The model's purpose and its best dimension. **SWE-bench Verified 67.6% from a 30B model activating 3B parameters** is the headline — comparable to models several times its size — with **SWE-bench Pro 40.2%** and **Terminal-Bench 2.0 36.0%** covering the harder tiers and **AA-SciCode 38.8%** independently corroborating at the scientific end. Three deductions keep it below 70: SWE-bench Pro at 40.2% is mid-field, **the three strongest figures reach me through a competitor's comparison table rather than from Cohere directly**, and there is **no LiveCodeBench, SWE-bench Multilingual or DeepSWE number** to confirm breadth.
- **Cost efficiency: 92/100.** Excellent on every axis. **Apache 2.0** is fully permissive — notable given Cohere Labs' frequent use of non-commercial licences — **3B active of 30B** makes it cheap to serve and cheap to self-host, **256K context with 64K output** means you are not paying for a window you cannot use, latency is sub-second, and there is a **completely free hosted tier at $0 / $0**. Getting 67.6% SWE-bench Verified and 75.7% GPQA Diamond for nothing, under a permissive licence, is close to the best value in this dataset. Docked only because Cohere labels it a **research release**, so production support and longevity are not promised.
- **Overall Score: 50.2/100.** Mean of the five non-cost dims (58 + 52 + 58 + 15 + 68) / 5 = 50.2. The text-only floor and the weak long-context and hard-reasoning measurements hold the mean down; the coding and cost dimensions are where this model earns its place. Best fit: **free or self-hosted agentic coding at small scale** — repository patching, terminal-driven tasks, scoped software-engineering work and scientific coding — where a permissive licence, 3B active parameters, 64K of output headroom and a $0 price matter more than frontier accuracy. Two cautions: **do not trust its factual output** (83.2% hallucination rate against 18.9% accuracy), and **do not expect it to carry long-horizon professional deliverables** (GDPval-AA 0.0% normalized). Treat the 75.7% GPQA Diamond as real but narrow — the Intelligence Index of 9.9 is the better guide to general capability.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Cohere Labs' official Hugging Face model card for `CohereLabs/North-Mini-Code-1.0`, which supplied the authoritative model summary ("an **open weights research release of a 30B-A3B parameter model optimized for code generation, agentic software engineering, and terminal tasks**"), the Cohere and Cohere Labs attribution, the **Apache 2.0 licence**, the **30B total / 3B active** split, and the **"Context length: 256K & 64K max output"** specification; a corroborating documentation site confirming model ID `north-mini-code-1-0`, 256K context, **64K max output** and Apache 2.0; and BenchLM's aggregated page (Open Weight source type, Reasoning type, 256K context, 12 of 626 benchmarks, **explicitly unranked with no overall computed**) together with all twelve underlying **Artificial Analysis** measurements — GPQA Diamond 75.7%, IFBench 57.6%, SciCode 38.8%, τ²-bench 37.4%, AA-LCR 37.3%, HLE 11.1%, Intelligence Index 9.9, CritPt 0.3%, GDPval-AA 0.0% normalized, and Omniscience −48.6% index / 18.9% accuracy / **83.2% hallucination rate**. **The fact that all twelve BenchLM rows are independent Artificial Analysis measurements with no Cohere self-reports is stated explicitly and treated as raising confidence.** **Three coding figures — SWE-bench Verified 67.6%, SWE-bench Pro 40.2% and Terminal-Bench 2.0 36.0% — are taken from Poolside's Laguna XS 2.1 model card, where North Mini Code appears as a compared model and Poolside states it used the highest publicly-referenced official scores**; that provenance is flagged, and **no data was imported from the `laguna-xs-2.1` folder itself**. The Apache 2.0 licence was **specifically verified against Cohere's own card** rather than assumed, since Cohere Labs releases are frequently non-commercial and this repo's metadata claim could have been wrong. The contradiction between a 75.7% GPQA Diamond and a 9.9 Intelligence Index is reported explicitly and used to cap the reasoning score rather than averaged into a flattering middle. No data was imported from Command A+, North Small Translate, North Micro Vision Instruct or the Cohere Transcribe line, and no peer `model/` findings files were read. Absent evidence is named, not filled: no MMLU-Pro, AIME, ARC-AGI, LiveCodeBench, SWE-bench Multilingual, DeepSWE, Terminal-Bench Hard, BFCL, Toolathlon, MCP-Atlas, BrowseComp, MRCR, RULER or multimodal figure exists, and no precise release date was established. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
