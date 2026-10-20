# DeepSeek V3.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's V3.2 model (128K context). Queue Overall 64.2. BenchLM shows 50.19 (rank 114). V3.2 has "Thinking" variant. Open-weight.
- **Provider / access:** DeepSeek API, Hugging Face (`deepseek-ai/DeepSeek-V3.2`), OpenCode Zen (`opencode/deepseek-v3.2`). Open-weight, free on HuggingChat.
- **Release / knowledge:** 2026 release; knowledge cutoff not explicitly stated.
- **IDs:** `deepseek-ai/DeepSeek-V3.2` (Hugging Face), `deepseek-v3.2` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** 128,000 tokens; max output not explicitly stated.
- **Modalities:** Text in/out; reasoning yes (Thinking variant); tool calls yes; JSON mode yes. No vision/audio.
- **Pricing (as of 2026-10-20):** Free on HuggingChat; self-host near-zero marginal; DeepSeek API ~$0.14/M in, $0.28/M out (est.); inference providers ~$0.20-0.50/M in, $0.40-1.00/M out.
- **Architecture:** Open-weight (DeepSeek V3 family); parameter count not explicitly stated.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**BenchLM** (Overall 50.19, rank 114/959):
- No detailed benchmark rows displayed on page

**Sibling models on BenchLM:**
- DeepSeek V3.2 (Thinking): not computed
- DeepSeek V3.1: 40.76
- DeepSeek V3.1 (Reasoning): 39.14
- DeepSeek V3 0324: 36.46
- DeepSeek V3: 31.86

**Proxy from DeepSeek V3.1** (similar tier):
- Overall: 40.76

**DeepSeek V4 family** (stronger):
- V4.1 Flash: 65.67
- V4 Pro: 63.2

V3.2 expected between V3.1 and V4 family.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 50/100.** No direct agentic benchmarks. V3.2 overall 50.19 suggests moderate agentic. Capped by no TB, BrowseComp, OSWorld, GDPval.
- **Reasoning: 55/100.** V3.2 overall 50.19 suggests moderate reasoning. V4.1 Flash GPQA ~88%+; V3.2 expected lower. Capped by no GPQA, HLE, FrontierMath, AA Intelligence Index.
- **Context window: 60/100.** 128K native. Methodology: 128K = 55-65.
- **Multimodal: 30/100.** Text-only (DeepSeek V3 family). Methodology: text-only = 20-30.
- **Coding: 55/100.** V3.2 overall 50.19 suggests moderate coding. V3.1/V3 similar. Capped by no LiveCodeBench, SWE-bench, AA Coding Index.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 50/100.** Half-up mean of (50 + 55 + 60 + 30 + 55) / 5 = 50 → 50. Using six incl. cost: (50+55+60+30+55+95)/6 = 345/6 = 57.5 → 58. Model-queue says 64.2; discrepancy due to limited public benchmarks. Best-fit: mid-tier open-weight model; public benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-20
- Method: Public internet research across major benchmark aggregators; limited direct benchmarks for V3.2. Proxy from DeepSeek V3.1/V4 family (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V3.md`, using the same headings.