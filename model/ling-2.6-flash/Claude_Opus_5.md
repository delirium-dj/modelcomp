# Ling 2.6 Flash — findings by Claude Opus 5

- Source: inclusionAI / Ant Group (`ling-2.6-flash`, HF `inclusionAI/Ling-2.6-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** inclusionAI's **open-weight non-reasoning MoE — 107B total / 7.4B active — with a 262K context window**, and now a **superseded generation**: [BenchLM](https://benchlm.ai/models/ling-2-6-flash) scores it **32.34** against its successors Ling 3.0 Flash (45.07) and Ling 3.1 Flash (60.62). Its profile is the sharpest split I have recorded in this research pass: **an exceptional 86% on τ²-bench alongside a 96.7% hallucination rate — the highest of any model I have assessed.** Distinct model; `ling-3.0-flash`, `ling-3.1-flash`, `ling-2.6.1t`, `ling-3.0-tiny`, `ling-3.0-flash-sante` and `ring-2.6.1t` all have their own folders.
- **Provider / access:** **Open weights under MIT** (`inclusionAI/Ling-2.6-flash`), plus **OpenCode Zen** and third-party routes. BenchLM classifies it Open Weight.
- **Release / knowledge:** Ling 2.6 generation; precise release date not established in this pass. Knowledge cutoff: no verified public date found.
- **IDs:** `inclusionAI/Ling-2.6-flash` (Hugging Face), `ling-2.6-flash` (Zen). Self-hosting is free under MIT.
- **Context window:** **262,144 tokens (262K)**. Max output: no verified public figure found.
- **Modalities:** **Text in → text out only.** No image, audio or video. Reasoning: **no — BenchLM classifies this ID Non-Reasoning.** Tool calls: yes, and demonstrably the model's strongest capability.
- **Pricing (as of 2026-10-08):** **MIT open weights — free to self-host.** At **7.4B active of 107B** it is cheap to serve.
- **Architecture:** **107B total / 7.4B active** Mixture-of-Experts, non-reasoning instruct line.

### Raw benchmarks found

> **All sixteen rows are Artificial Analysis measurements — no vendor self-reports.** BenchLM covers **16 of 626 benchmarks** and ranks it **#169 of 891 at 32.34/100**. A provenance note: several rows are sourced to an "Artificial Analysis Ling 2.6 Flash **summary screenshot**" rather than a text table, so those figures are BenchLM's transcription of an image; where a row appears twice (IFBench 57% / 57.4%, GPQA 59% / 59.3%) the near-identical values suggest the transcription is sound.

Agent / tool use:

- **τ²-bench: 86%** — **the highest τ²-bench score I have recorded in this entire research pass**, above DeepSeek V3.2 (78.9%), Qwen3-Max (74.3%) and GPT-OSS 120B (65.8%)
- **AA-IFBench: 57.4%** (also reported as 57%) — instruction following
- **GDPval-AA: 550 Elo, 0.0% normalized** — a floor result
- **No Terminal-Bench, BFCL, Toolathlon, MCP-Atlas or BrowseComp figure found**

Knowledge / reasoning:

- **AA-GPQA Diamond: 59.3%** (also reported as 59%)
- **Artificial Analysis Intelligence Index: 14.1**
- **AA-HLE: 6.3%**; **CritPt: 0.0%**
- **AA-Omniscience: Index −66.1%, Accuracy 15.6%, Hallucination Rate 96.7%.** This is **the worst hallucination rate in my research pass** — on material it does not know, this model fabricates an answer roughly 97 times in 100 rather than declining.

Coding:

- **SciCode: 27%**; **AA Coding Index: 25.3%**
- **No SWE-bench, LiveCodeBench, Terminal-Bench or DeepSWE figure found**

Long context:

- **AA-LCR: 31.3%** — weak. **No MRCR, RULER or needle-retrieval figure at any depth.**

### Normalized scores (1–100)

- **Tool use: 58/100.** Carried entirely by one outstanding number. **τ²-bench at 86% is remarkable** — it means structured, multi-turn, schema-bound tool dialogues work extremely well, better than models several times its size and several times its price, and **AA-IFBench 57.4%** confirms it follows instructions adequately. But the dimension cannot be scored higher, because **GDPval-AA at 550 Elo and 0.0% normalized is a floor result** on economically valuable knowledge work, and there is **no Terminal-Bench, BFCL, Toolathlon, MCP or BrowseComp figure** to establish anything in between. The honest reading is a narrow specialist: excellent inside a well-defined conversational tool loop, incapable of producing a deliverable.
- **Reasoning: 38/100.** This is a **non-reasoning model** by classification and the numbers are consistent with that. **GPQA Diamond 59.3%** is the only respectable figure; an **Intelligence Index of 14.1**, **HLE 6.3%** and **CritPt 0.0%** place it well down the field. The decisive problem is calibration rather than capability: **Omniscience −66.1 with 15.6% accuracy and a 96.7% hallucination rate** means the model almost never abstains. For contrast, Gemma 4 E4B in this same pass posted 30.9% hallucination with comparable accuracy — the difference is entirely in willingness to say "I don't know". A model that fabricates on 97% of what it does not know cannot be used unsupervised on anything factual.
- **Context window: 52/100.** **262,144 tokens** is a solid specification for a 7.4B-active model. But **AA-LCR 31.3% is weak**, and there is **no retrieval measurement at any depth** and no published max output. Scored on a good nominal window with poor demonstrated quality.
- **Multimodal: 15/100.** Text in, text out. No image, audio or video input and none claimed. Template floor.
- **Coding: 34/100.** The weakest-evidenced dimension and the weakest results. **SciCode 27% and an AA Coding Index of 25.3%** are both low, and there is **no SWE-bench, LiveCodeBench, Terminal-Bench or DeepSWE figure at all** — so there is no evidence of repository-scale or agentic coding capability, and the composite index suggests there is not much to find. Not a coding model.
- **Cost efficiency: 80/100.** Good on licence and compute, undermined by obsolescence and verification cost. **MIT open weights** are maximally permissive and free to self-host, and **7.4B active of 107B** keeps inference cheap. Two substantial deductions. First, **it has been superseded twice**: inclusionAI's own successors score 45.07 (Ling 3.0 Flash) and 60.62 (Ling 3.1 Flash) on BenchLM against this model's 32.34, and Ling 3.0 Flash is also cheaper to run at 5.1B active — so paying anything, including engineering time, for this generation is hard to justify. Second, **a 96.7% hallucination rate imposes a real verification tax**: cheap tokens stop being cheap when essentially every factual claim needs checking.
- **Overall Score: 39.4/100.** Mean of the five non-cost dims (58 + 38 + 52 + 15 + 34) / 5 = 39.4. Best fit: **narrow, high-volume conversational tool-calling with verified inputs** — the τ²-bench 86% result is real and genuinely useful if your workload is schema-bound function dispatch over trusted data, and MIT weights make that free. Avoid it for everything else: **no factual work whatsoever** (96.7% hallucination), no coding (Coding Index 25.3%), no long-context recall (AA-LCR 31.3%), no knowledge-work deliverables (GDPval 0.0% normalized), and no reasoning (non-reasoning model, CritPt 0.0%). The practical recommendation is blunt: **if you are on this family, use Ling 3.0 Flash or Ling 3.1 Flash instead** — both score far higher, both are independently verified, and Ling 3.0 Flash is cheaper per token besides. The one thing this model does better than its successors is τ²-bench, and that is the only reason to keep it in consideration.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated page for `ling-2-6-flash` (Open Weight source type, **Non-Reasoning** type, 262K context, 16 of 626 benchmarks, overall 32.34 / rank #169 of 891, and the intra-family comparison showing Ling 3.0 Flash at 45.07 and Ling 3.1 Flash at 60.62) together with **every underlying Artificial Analysis measurement** it cites: τ²-bench 86%, AA-IFBench 57.4% (also 57%), AA-GPQA Diamond 59.3% (also 59%), AA-LCR 31.3%, SciCode 27%, AA Coding Index 25.3%, Intelligence Index 14.1, AA-HLE 6.3%, CritPt 0.0%, GDPval-AA 550 Elo / 0.0% normalized, and **AA-Omniscience −66.1% index / 15.6% accuracy / 96.7% hallucination rate**. **The fact that all sixteen rows are independent Artificial Analysis measurements with no inclusionAI self-reports is stated explicitly**, as is the provenance caveat that several rows derive from BenchLM's transcription of an Artificial Analysis **summary screenshot** rather than a text table — with the duplicated IFBench and GPQA rows noted as corroborating that the transcription is accurate. **The 96.7% hallucination rate is identified as the highest recorded across this research pass and treated as decisive for the reasoning and cost scores**, with the contrast against a comparable-accuracy, low-fabrication model noted to make clear that the problem is abstention behaviour rather than raw knowledge. **The 86% τ²-bench result is likewise identified as the highest recorded in this pass** and is what keeps the tool-use score above the midpoint despite a 0.0%-normalized GDPval-AA. The model's superseded status is reported with the specific successor scores rather than asserted. No data was imported from `ling-3.0-flash`, `ling-3.1-flash`, `ling-2.6.1t`, `ling-3.0-tiny`, `ling-3.0-flash-sante` or `ring-2.6.1t`, and no peer `model/` findings files were read. Absent evidence is named, not filled: no Terminal-Bench, BFCL, Toolathlon, MCP-Atlas, BrowseComp, SWE-bench, LiveCodeBench, DeepSWE, MMLU-Pro, AIME, MRCR, RULER or needle-retrieval figure exists, and no release date or max-output specification was established. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
