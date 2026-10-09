# Ling 3.0 Flash — findings by DeepSeek 4.1 Flash

- Source: Ant Group / InclusionAI / Ling-3.0-flash (`inclusionAI/Ling-3.0-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** Ant Group's efficient open-weight native hybrid-reasoning MoE (released ~2026-07/08), a 124B/5.1B-active model with a 256K (scalable to 1M) context and very low API pricing. A separate `-VL` variant adds image+video; this slug is the text model.
- **Provider / access:** InclusionAI API, DeepInfra, Novita, OpenRouter; OpenAI-compatible. OpenCode Zen tracks `opencode/ling-3.0-flash`. MIT open weights.
- **Release / knowledge:** 2026-08-04 (AA) / 2026-07-23 (Vals) / press 2026-07-27; knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash`.
- **Context window:** 262,144 native (256K; scalable to 1M per press release); DeepInfra serves 131K. Max output not separately published.
- **Modalities:** text in; text out. Native hybrid reasoning (thinking on by default); tool/function calling.
- **Pricing (as of 2026-10-09):** **$0.07 in / $0.22 out** with ~$0.056 cached (InclusionAI); DeepInfra $0.06/$0.18/$0.012; Novita $0.021/$0.063. MIT open weights.
- **Architecture:** native hybrid-linear MoE, **124B total / 5.1B active**; 35 KDA + 7 Gated MLA (5:1), 512 routed experts (8 active + 1 shared); vocab 157,184; MIT.

### Raw benchmarks found

> "Model card" rows are InclusionAI self-reported; Vals AI / Artificial Analysis rows are independent.

Reasoning / knowledge:

- GPQA-Diamond **85.0** self / 85.5 (AA); HLE 22.7 self / 23.7 (AA)
- AIME 2026 **93.2**; HMMT Feb 2026 87.0; IMO-AnswerBench 83.7 (self)
- MMLU-Pro 82.01 (Vals); CritPt 1.7 (AA); AA Intelligence Index 20.1 (AA v4.3.2) — conflict: 38 claimed on v4.1.1

Coding / agent:

- SWE-bench Pro **56.6** self; SWE-bench Multilingual 72.4 self; SWE-bench Verified **65.2** (Vals)
- Terminal-Bench 2.1: 57.0 self / **50.19** (Vals); LiveCodeBench v5 82.8 self / **83.99** (Vals)
- SciCode 41.2 self / 42.0 (AA); BFCL-v4 73.0; MCP-Atlas 65.5; skillsBench 44.8 self / 27.95 (Vals)
- GDPval-AA 1107 self / normalized 22.4 (AA); BrowseComp 72.2; DRACO 70.4; IFBench 74.5 (self)
- Vals: Finance Agent v2 30.31; Vibe Code Bench v1.1 2.91; Harvey Legal Agent 1.25

Long context:

- 262K window; AA-LCR 73.0; **no MRCR/RULER published**.

### Normalized scores (1–100)

- **Tool use: 74/100.** MCP-Atlas 65.5, BFCL 73 and GDPval-AA 1107 are solid; DRACO 70.4 and IFBench 74.5 are self-reported.
- **Reasoning: 78/100.** GPQA 85.0–85.5%, AIME 93.2% are high; HLE 22.7%, CritPt 1.7 and AA Index 20 cap it.
- **Context window: 72/100.** 262K-token window (200K–500K band); no retrieval benchmark published.
- **Multimodal: 15/100.** Text-only (the VL variant is a separate model).
- **Coding: 76/100.** SWE-bench Verified 65.2% (Vals), LiveCodeBench 83–84%, Terminal-Bench 2.1 50.2–57% are strong for a 5B-active MoE.
- **Cost efficiency: 98/100.** $0.07/$0.22 per 1M (InclusionAI) is near the cheapest frontier-lab tier; MIT open weights.
- **Overall Score: 63/100.** (74 + 78 + 72 + 15 + 76) / 5 = 63.0 → 63. Best fit: high-volume cheap reasoning/coding and finance-agent prototypes; not a vision model.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face card, Artificial Analysis (including providers page), Vals AI, BenchLM, LLM Stats and the Ant Group press release. Self-reported vs independent rows are labelled; large card-vs-independent gaps (skillsBench, Index) are flagged. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
