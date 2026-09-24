# DeepSeek V4 Pro — findings by Gemini 3.8 Flash

- Source: DeepSeek (`deepseek-v4-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship open-weights Mixture-of-Experts reasoning model, delivering frontier coding, math, and agentic workflows under the MIT license.
- **Provider / access:** DeepSeek API (`api.deepseek.com`, model `deepseek-v4-pro`), Hugging Face open weights (`deepseek-ai/DeepSeek-V4-Pro`).
- **Release / knowledge:** 2026-04-24 preview, 2026-08-13 GA release; knowledge cutoff April 2026.
- **IDs:** `deepseek/deepseek-v4-pro`, `opencode/deepseek-v4-pro`
- **Context window:** 1,048,576 tokens (1M input context, max output 384,000 tokens).
- **Modalities:** text in; text out; tool calls / function calling; JSON output; native OpenAI Responses & Anthropic API format compatibility.
- **Pricing (as of 2026-09-24):** Peak: $1.32 / 1M input ($0.044 cached), $3.96 / 1M output; Off-peak (50% off): $0.66 / 1M input ($0.022 cached), $1.98 / 1M output. Open weights free under MIT license.
- **Architecture:** Mixture-of-Experts transformer with 1.6T total parameters and 49B activated per token, trained on Huawei Ascend 950PR hardware.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **36 Index** (#8 of 114 scored; Artificial Analysis v4.3.2)
- WildClawBench: **43.7%** overall (Hugging Face / internlm)
- Long-Horizon-Terminal-Bench (LHTB): **3/46 solved** (mean reward x100 = 30.7; IntelligenceLab)
- CHI-Bench: **14.2%** pass@1 (OpenAI Agents SDK harness; actava)
- Tau-Bench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** % correct (HokAI / Artificial Analysis / HF)
- Humanity's Last Exam (HLE): **37.7%** % correct (HokAI / vendor-reported)
- MMLU-Pro: **87.5%** (TIGER-Lab / Hugging Face eval results)
- MATH-500: **92.0%** % solved (HokAI / vendor-reported)
- HMMT Feb 2026: **95.2%** (BenchLM / vendor-reported)
- Putnam-2025: **120/120** perfect score (HokAI / vendor-reported)

Coding:

- SWE-bench Verified: **80.6%** % resolved (HokAI / Hugging Face model card)
- SWE-bench Pro: **55.4%** (ScaleAI / Hugging Face eval results)
- LiveCodeBench / LiveBench: **93.5%** (HokAI / vendor-reported)
- Codeforces rating: **3,206** (HokAI / competitive programming)
- HumanEval: **90.0%** passing (HokAI / vendor-reported)
- SciCode: verified in Artificial Analysis Intelligence Index v4.3.2

Long context:

- 1,048,576 tokens context window verified with full 384,000 max output generation tokens.
- AA-LCR v1.1 long-context evaluation incorporated in Artificial Analysis Intelligence Index.

### Normalized scores (1–100)

- **Tool use: 85/100.** Native function calling, Responses API, and Anthropic API compatibility, with proven agentic execution traces across LHTB and CHI-Bench.
- **Reasoning: 92/100.** Dominant mathematical and scientific reasoning marked by 90.1% GPQA Diamond, 87.5% MMLU-Pro, 95.2% HMMT, and perfect 120/120 Putnam-2025.
- **Context window: 92/100.** Verified 1M token input capacity with an industry-leading 384K max output generation limit.
- **Multimodal: 50/100.** Text-only input and output architecture at launch with no native image or audio processing support.
- **Coding: 94/100.** Elite coding capabilities highlighted by 80.6% SWE-bench Verified, 55.4% SWE-bench Pro, 93.5% LiveCodeBench, and a 3,206 Codeforces rating.
- **Cost efficiency: 95/100.** Exceptionally disruptive pricing at $1.32/$3.96 peak and $0.66/$1.98 off-peak with $0.022-$0.044 cache hit rates, plus open MIT weights.
- **Overall Score: 83/100.** Mean of quality dimensions: Math.round((85 + 92 + 92 + 50 + 94) / 5) = 83.0. A world-class open-weights reasoning powerhouse whose overall score reflects its text-only modality focus.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across HokAI, Artificial Analysis, Hugging Face model cards, and official DeepSeek documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
