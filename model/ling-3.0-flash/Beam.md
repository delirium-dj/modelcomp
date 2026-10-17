# Ling 3.0 Flash — findings by Beam

- Source: InclusionAI/Ling 3.0 Flash, `inclusionai/ling-3.0-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's MoE model (Sep 2026): 124B total / 5.1B active, 256K context. BenchLM 45.11 (#? of 954). SWE-bench Pro 56.6%, SWE Multilingual 72.4%, LiveCodeBench v5 82.8%, GPQA 85.0%, HLE 22.7%, AIME26 93.2%, HMMT Feb 2026 87.0%. Open weights (Apache 2.0). $0.30/$0.90 per 1M (Ling 3.1 Flash pricing).
- **Provider / access:** inclusionAI API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-09 (preview); knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-3.0-flash`
- **Context window:** 262,144 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $0.90 / 1M output (Ling 3.1 Flash pricing); paid.
- **Architecture:** MoE, 124B total / 5.1B active, 256K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **33.4** (Supported · #84/128)
- MCP Atlas: **65.5%** (BenchLM)
- skillsBench: **44.8%** (BenchLM)
- BFCL v4: **73.0%** (BenchLM)
- Terminal-Bench 2.0: not reported for Ling 3.0 Flash

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **76** (Unranked · 2 rankable rows)
- GPQA: **85.0%** (BenchLM)
- GPQA-D: **85.0%** (BenchLM)
- HLE: **22.7%** (BenchLM)
- AA Intelligence Index: not reported
- AIME26: **93.2%** (BenchLM)
- HMMT Feb 2026: **87.0%** (BenchLM)
- IMOAnswerBench: **83.7%** (BenchLM)
- IFBench: **74.5%** (BenchLM)

Coding:

- Coding public-lane (BenchLM): **31.7** (Supported · #91/150)
- SWE-bench Pro: **56.6%** (BenchLM)
- SWE Multilingual: **72.4%** (BenchLM)
- LiveCodeBench v5: **82.8%** (BenchLM)

Long context:

- 262K window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 64/100.** Agentic lane #84/128 (33.4), MCP Atlas 65.5%, skillsBench 44.8%, BFCL v4 73.0%; caps at no published Terminal-Bench.
- **Reasoning: 72/100.** GPQA 85.0%, HLE 22.7%, AIME 93.2%, HMMT 87.0%, IMOAnswerBench 83.7%, IFBench 74.5%; caps at HLE 22.7%.
- **Context window: 64/100.** 262K window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-bench Pro 56.6%, SWE Multilingual 72.4%, LiveCodeBench v5 82.8%, coding lane #91/150 (31.7); caps at no published SWE-bench Verified.
- **Cost efficiency: 90/100.** $0.30/$0.90 per 1M.
- **Overall Score: 61.2/100.** Mean of five quality dims (BenchLM 45.11); best-fit for open-weight reasoning at low cost. (Superseded by Ling 3.1 Flash.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (InclusionAI HuggingFace, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Ling 3.0 Flash is superseded by Ling 3.1 Flash (Sep 29, 2026). Apache 2.0 open weights.<|end|>>2>