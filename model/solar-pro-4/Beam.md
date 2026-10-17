# Solar Pro 4 — findings by Beam

- Source: Upstage/Solar Pro 4, `upstage/solar-pro-4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's closed commercial flagship (Aug 6, 2026): 512K context. AA Intelligence Index 42. GPQA Diamond 89.0%, MMLU-Pro 86.3%, LiveCodeBench 87.8%, AA-LCR 71.0%. Terminal-Bench 2.1 57.0%. $0.30/$1.20 per 1M.
- **Provider / access:** Upstage Console; OpenRouter; Hermes Agent.
- **Release / knowledge:** Released 2026-08-06 (training cutoff Feb 2026); knowledge cutoff Feb 2026.
- **IDs:** `upstage/solar-pro-4`
- **Context window:** 512,000 tokens; max output 128,000.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Proprietary (closed).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $1.20 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM not computed for Solar Pro 4)
- Terminal-Bench 2.1: **57.0%** (Upstage comparison)
- GDPval-AA v2: **38.8%** (Upstage comparison)
- BrowseComp: **49.2%** (Upstage comparison)
- SWE-Bench Verified (OpenHands): **70.6%** (Upstage comparison)
- MCP-Atlas: **61.4%** (Upstage comparison)
- APEX-Agents: **18.7%** (Upstage comparison)
- τ³-Banking: **23.0%** (Upstage comparison)
- Agent Arena: on par with Nemotron 3 Ultra (Upstage)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond: **89.0%** (Upstage comparison)
- MMLU-Pro: **86.3%** (Upstage comparison)
- AA Intelligence Index: **42** (Artificial Analysis)
- AA-LCR: **71.0%** (Upstage comparison)
- HLE: not reported
- AIME 2026: **95.3%** (Upstage comparison)
- KMMLU-Pro: **79.2%** (Upstage comparison)
- KBL (law): **77.5%** (Upstage comparison)

Coding:

- Coding public-lane (BenchLM): not individually reported
- LiveCodeBench: **87.8%** (Upstage comparison)
- SWE-bench Verified (OpenHands): **70.6%** (Upstage comparison)

Long context:

- 512K window; AA-LCR **71.0%** (Upstage); MRCR not reported.

Multimodal:

- Text-only (English/Korean/Japanese). Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 57.0%, GDPval-AA 38.8%, BrowseComp 49.2%, MCP-Atlas 61.4%, APEX 18.7%, τ³-Banking 23.0%, SWE-bench 70.6%; caps at τ³-Banking 23.0%.
- **Reasoning: 74/100.** GPQA 89.0%, MMLU-Pro 86.3%, AA Intelligence 42, AA-LCR 71.0%, AIME 95.3%; caps at no published HLE/CritPt.
- **Context window: 70/100.** 512K window; AA-LCR 71.0%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only (English/Korean/Japanese).
- **Coding: 72/100.** LiveCodeBench 87.8%, SWE-bench 70.6%, Terminal-Bench 2.1 57.0%; caps at no published SWE-bench Pro.
- **Cost efficiency: 92/100.** Cheap $0.30/$1.20 per 1M.
- **Overall Score: 64.8/100.** Mean of five quality dims (AA Intelligence 42); best-fit for agentic document work at low cost. AA Intelligence 42 (on par with frontier models).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Upstage official blog, Artificial Analysis, Seoul Economic Daily, Herald Business); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Solar Pro 4 is the closed commercial sibling of Solar Open 2 (open weights, free).<|end|>>2>