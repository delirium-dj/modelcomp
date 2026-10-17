# Solar Open 2 — findings by Beam

- Source: Upstage/Solar Open 2, `upstage/solar-open-2`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight MoE (Jul 22, 2026): 250B total / 15B active, 1M context (extendable). Text in; text out. BenchLM not computed (14 rows). MMLU-Pro 86.2%, GPQA Diamond 86.3%, LiveCodeBench 92.42%. Korean-optimized tokenizer. Open weights (Upstage Solar License).
- **Provider / access:** HuggingFace `upstage/Solar-Open-2`; Upstage Console; OpenRouter.
- **Release / knowledge:** Released 2026-07-22; knowledge cutoff not stated.
- **IDs:** `upstage/solar-open-2`
- **Context window:** 1,000,000 tokens (extendable); max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Upstage Solar License).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** MoE, 250B total / 15B active, 1M context, Korean-efficient tokenizer, Upstage Solar License.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- APEX-Agents: **16.6%** (BenchLM)
- Terminal-Bench 2.1: **43.2%** (Solar Pro 4 comparison, Upstage)
- GDPval-AA v2: **31.4%** (Upstage comparison)
- BrowseComp: **37.3%** (Upstage comparison)
- MCP-Atlas: **58.2%** (Upstage comparison)
- τ³-Banking: **18.1%** (Upstage comparison)
- Ko-GDPval: competitive with DeepSeek-V4-Pro (1.6T) (Upstage)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- MMLU-Pro: **86.2%** (Upstage official)
- GPQA Diamond: **86.3%** (Upstage official)
- AA Intelligence Index: not reported
- HLE: not reported
- AIME 2026: **95.7%** (Upstage comparison)
- AA-LCR: **62.7%** (Upstage comparison)
- Korean benchmarks: KMMLU-Pro 78.4, CLIcK 90.7, HAE-RAE v1.1 73.8 (Upstage)

Coding:

- Coding public-lane (BenchLM): Coming soon
- LiveCodeBench: **92.42%** (Upstage official)
- SWE-bench Verified (OpenHands): **69.2%** (Upstage comparison)
- SWE-bench Verified: **70.4%** (BenchLM, vs Inkling)

Long context:

- 1M window; AA-LCR **62.7%** (Upstage); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 62/100.** APEX-Agents 16.6%, Terminal-Bench 2.1 43.2%, GDPval-AA 31.4%, BrowseComp 37.3%, MCP-Atlas 58.2%, τ³-Banking 18.1%; caps at τ³-Banking 18.1%.
- **Reasoning: 72/100.** MMLU-Pro 86.2%, GPQA 86.3%, AIME 95.7%, AA-LCR 62.7%; caps at no published HLE/AA Intelligence.
- **Context window: 76/100.** 1M window; AA-LCR 62.7%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 74/100.** LiveCodeBench 92.42%, SWE-bench 69.2%/70.4%; caps at no published SWE-bench Pro/Terminal-Bench.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 64.8/100.** Mean of five quality dims (BenchLM not computed); best-fit for open-weight coding + Korean at zero cost. Strong Korean performance (highest average among comparably sized models).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Upstage official blog, arXiv technical report, BenchLM, Chosun, Seoul Economic Daily); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Solar Open 2 is the open-weight sibling of Solar Pro 4 (closed, $0.30/$1.20 per 1M).<|end|>>2>