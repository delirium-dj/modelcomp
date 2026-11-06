# Ling-2.6-1T — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-2.6-1t`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T — the **trillion-parameter flagship of the Ling 2.6 family**, and the **non-reasoning "instant" tier** (the reasoning companion is Ring-2.6-1T, refreshed earlier in this session). **A negative finding governs this report: BenchLM carries no `ling-2.6.1t` page in any spelling** (both hyphen and dotted variants 404), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** A genuinely large open-weight MoE with a solid, well-spread measured record: **BFCL-V4 70.64, τ²-bench 78.36, PinchBench 85.24, IFBench 57.62, AIME 87.40, HMMT 81.93, IMO-AnswerBench 65.81, GPQA 76.17, SWE-V 72.20, LiveCodeBench 65.58, MRCR 80.37** — beating non-thinking GPT-5.4 and DeepSeek-V3.2 on maths. Its caps are **HLE 10.06, bbeh 52.37, LongBenchV2 48.31, Terminal-Bench 2.0 40.45 and ClawEval 51.0**.
- **Provider / access:** **MIT weights** on Hugging Face / ModelScope (Ling-2.6-1T + `-base`); Ant Ling platform (OpenAI/Anthropic-compatible API); **formerly OpenRouter (Novita, 92.7 tok/s) — now delisted.**
- **Release / knowledge:** released **2026-04-29** (Ant Ling changelog v1.0.1; AA lists 2026-04-23 — a date conflict recorded rather than reconciled). **Knowledge cutoff not disclosed.**
- **IDs:** `inclusionai/ling-2.6-1t` (Hugging Face, repo id); MIT self-host free.
- **Context window:** **262,144 tokens** — docs note support up to 1M, but **the official API opened at 256K**; the 1M claim is unrealised.
- **Modalities:** **text in; text out** — non-reasoning/instant; the reasoning sibling is Ring-2.6-1T.
- **Pricing (as of 2026-11-06):** **$0.30/M input, $2.50/M output, $0.06/M cached read** (blended ~$0.52/M at AA's 7:2:1 ratio); **MIT weights free to self-host.**
- **Architecture:** `BailingMoeV2_5ForCausalLM` (`bailing_hybrid`), **1,025B total / 63B active**, 80 layers, 8-active-of-256 experts, 7:1 Lightning:MLA.

### Raw benchmarks found

Vendor-reported throughout, carried from the prior verified research pass (2026-10-09) and re-attributed; no tracker catalog page exists for cross-check.

- Agentic: BFCL-V4 70.64; τ²-bench 78.36; PinchBench 85.24; IFBench 57.62; ClawEval 51.0; Terminal-Bench 2.0 40.45
- Reasoning: AIME 87.40; HMMT 81.93; IMO-AnswerBench 65.81; GPQA 76.17; HLE 10.06; bbeh 52.37
- Context: MRCR 80.37; LongBenchV2 48.31
- Coding: SWE-V 72.20; LiveCodeBench 65.58 (sibling Ring-2.6-1T is stronger at SWE-V 74.0)
- **No verified public score found** for AA-LCR, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR 1M-native, MMMU-Pro or Design Arena.

### Normalized scores (1–100)

- **Tool use: 66/100.** Mid-band. BFCL-V4 70.64, τ²-bench 78.36 and PinchBench 85.24 are solid upper-mid agentic results for a non-reasoning tier; ClawEval 51.0 and Terminal-Bench 2.0 40.45 pull it below the top band. No GDPval-AA, MCP-Atlas or AA Agentic Index figure exists.
- **Reasoning: 72/100.** Mid-band. AIME 87.40, HMMT 81.93, IMO-AnswerBench 65.81 and GPQA 76.17 are upper-mid — beating non-thinking GPT-5.4 and DeepSeek-V3.2 on maths — while HLE 10.06 and bbeh 52.37 cap it below the frontier tier.
- **Context window: 72/100.** 262K in the 200K–500K band (65–84), with **MRCR 80.37 and LongBenchV2 48.31 confirming real long-horizon retention**; docs claim 1M support that the API never opened.
- **Multimodal: 12/100.** **Text-only** — the methodology's text-only band (10–20).
- **Coding: 68/100.** Mid-band. SWE-V 72.20 edges non-reasoning GPT-5.4 and LiveCodeBench 65.58 leads the non-thinking comparison set; the reasoning sibling Ring-2.6-1T is stronger (SWE-V 74.0), which is where the coding crown sits.
- **Cost efficiency: 68/100.** $0.30/$2.50 with $0.06 cached reads and MIT self-host weights — the methodology's ~$0.3/$2.5 → 63–68 tier — offset by **63B active parameters that make self-hosting expensive**, and its ~16M-token evaluation footprint which is genuinely efficient.
- **Overall Score: 58/100.** (66 + 72 + 72 + 12 + 68) / 5 = 58.0 → **58**. Recommendation: the **non-reasoning trillion-parameter workhorse** — GPT-5.4-class instant responses with SWE-V 72.2 and AIME 87.4 at a third of the price, MIT-licensed. Superseded by the Ling 3.0 generation and **delisted on OpenRouter**. Prefer **Ling 3.1 Flash (65.57, refreshed in this same session)** for the current generation.

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `ling-2.6.1t` page in any spelling** (both hyphen and dotted variants return 404), so the 2026-11-06 pass had no catalog to check against. The evidence base is the repo's curated `meta.json` plus the prior verified research pass (2026-10-09), with figures re-attributed and **the absence of any independent cross-check from a 2026-11-06 source stated plainly**. **A date conflict is recorded rather than reconciled: release 2026-04-29 per Ant Ling's changelog v1.0.1 against 2026-04-23 per Artificial Analysis.** **An unrealised spec claim is surfaced: the docs note 1M support but the official API opened at 256K**, so the context score rests on 262K. **A sibling non-import is recorded: Ring-2.6-1T's stronger coding figure (SWE-V 74.0) is named as the comparison point and explicitly not merged into this SKU's scores.** The **63B active parameter count** is surfaced as making MIT self-hosting expensive, which is the reason the cost score sits at 68 rather than higher. Missing benchmarks (AA-LCR, CritPt, AA Intelligence Index, AA-Omniscience, ARC-AGI, native-1M MRCR, MMMU-Pro, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — inclusionai/ling-2.6-1T model card (MIT weights)](https://huggingface.co/inclusionai/ling-2.6-1t)
  - [Ant Ling platform — API documentation and changelog v1.0.1](https://ling.ant.ai/)
  - [Repo curated meta — `model/ling-2.6.1t/meta.json`](/model/ling-2.6.1t/meta.json)
  - See also: [`model/ring-2.6.1t/`](ring-2.6.1t.md) — the reasoning companion, refreshed earlier in this session; [`model/ling-3.1-flash/`](ling-3.1-flash.md) (65.57) — the current generation
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
