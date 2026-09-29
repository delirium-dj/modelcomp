# GPT-5.6 Luna — findings by Pixel Canary

- Source: OpenAI (`openai/gpt-5.6-luna`, aka `gpt-5.6-luna` / `gpt-5.6-luna-pro` on resellers)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna — OpenAI's cost-sensitive, high-volume tier of the GPT-5.6 family (no OpenCode Zen Free ID).
- **Short description:** The budget "Luna" member of the GPT-5.6 generation, positioned under Terra/Sol: a 1.05M-context reasoning model tuned for cheap, high-throughput agent and coding workloads.
- **Provider / access:** OpenAI first-party; resold via nano-gpt (`openai/gpt-5.6-luna`, `gpt-5.6-luna-pro`); OpenAI-compatible Chat Completions with tool calling and structured output.
- **Release / knowledge:** 2026-07-09 (models.dev `release_date`); BenchLM profile refreshed 2026-09-28. Knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-luna`; reseller variants `gpt-5.6-luna`, `gpt-5.6-luna-pro`.
- **Context window:** 1,050,000 input / 128,000 max output (models.dev; BenchLM lists 1.05M).
- **Modalities:** Text + image in; text out. Reasoning model; tool use, function calling, structured output, web search, long context catalogued.
- **Pricing (as of 2026-09-29):** $0.20 / 1M input, $1.20 / 1M output, $0.02 cached reads, $0.25 cache writes → blended (4:1) ≈ $0.40/1M.
- **Architecture:** Proprietary; parameter count and weights undisclosed.

### Raw benchmarks found

BenchLM profile `gpt-5-6-luna` (updated 2026-09-28; 56 of 486 benchmarks covered — coverage-flagged conservative composite **65.55/100, rank #28 / 512**):

- Agentic: Terminal-Bench 2.1 **84.7%** (Vals 79.0%); Terminal-Bench 3.0 **14.3%**; AA Terminal-Bench 4.0 **11.6%**; Toolathlon **53.4%**; AA AutomationBench **50.2%**; GDPval-AA **Elo 1582 / 47.2%**; AA Briefcase **1342**; AA Tau3-Banking **31.1%**; OSWorld 2.0 **45.6%**; CyberGym **77.9%**; ExploitGym **12.4%**; APEX-Agents-AA **35.8%**; BrowseComp **83.3%**; AA Agentic Index **42.7%**
- Coding: SWE-bench Pro **62.7%**; DeepSWE **67.2%**; SWE-bench (Vals) **93.0%**; AA-SciCode **53.6%**; AA Coding Index **71.5%**
- Reasoning / knowledge: AA Intelligence Index **51.2**; GPQA Diamond **92.3%** (Vals 91.7%); ARC-AGI-2 **59.5%**; AA-LCR **83.7%**; AA-Omniscience accuracy **42.7%** with hallucination rate **92.6%** (index −10.3)
- Multimodal: MMMU-Pro **78.4%** (79.5% with Python; AA 78.6%); GDP.pdf **24.0%**
- SWE-bench Verified, LiveCodeBench, Terminal-Bench 2.0, IFEval, MRCRv2/RULER: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.1 84.7%, CyberGym 77.9% and GDPval Elo 1582 are solid, but the independent-harness picture thins out fast (AA Agentic Index 42.7, Terminal-Bench 3.0 14.3%, AA Terminal-Bench 4.0 11.6%, Tau3-Banking 31.1%) — a cheap executor, not an autonomous agent.
- **Reasoning: 66/100.** AA Intelligence Index 51.2 and GPQA Diamond 92.3% are strong for a budget tier, offset by ARC-AGI-2 59.5% and a pathological honesty profile (42.7% accuracy against 92.6% hallucination rate, Omniscience index −10.3).
- **Context window: 84/100.** 1.05M input / 128K output with AA-LCR 83.7% is a genuinely usable long-context tier; capped because document-grounded work stays weak (GDP.pdf 24.0%) and no MRCR/RULER retrieval-depth curve is published.
- **Multimodal: 62/100.** Text+image in / text out only, MMMU-Pro 78.4% mid-pack and GDP.pdf 24.0% weak; no video, audio, or image-generation path.
- **Coding: 76/100.** AA Coding Index 71.5, SWE-bench (Vals) 93.0%, SWE-bench Pro 62.7% and DeepSWE 67.2% put it near the top of the budget tiers; capped by AA-SciCode 53.6% and missing Verified/LiveCodeBench rows.
- **Cost efficiency: 90/100.** $0.20/$1.20 with $0.02 cached reads (~$0.40 blended per 1M) is exceptional value; capped only because there is no OpenCode Zen Free ID for this ID (a $0 tier would score 100).
- **Overall Score: 70.8/100.** (66 + 66 + 84 + 62 + 76) / 5 = 70.8 — the right pick for high-volume cheap 1M-context coding and tool loops where unsupervised factual judgment is not required.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `gpt-5-6-luna` refreshed 2026-09-28, models.dev provider/pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
