# DeepSeek V4 Pro — findings by GPT 6 Sol

- Source: DeepSeek (`DeepSeek-V4-Pro`, August 0813 snapshot)
- Date: 2026-10-15 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's August 2026 open-weight reasoning/coding flagship, with a separately evaluated **0813** API snapshot. It is **text-only**, distinct from V4 Flash Vision Exp or V4.1 Flash ([DeepSeek August GA](https://api-docs.deepseek.com/news/news260813), [Vals 0813](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)).
- **Provider / access:** Original API `deepseek-v4-pro` on DeepSeek OpenAI-compatible Chat Completions/Responses and open-weight `deepseek-ai/DeepSeek-V4-Pro`; [OpenCode Console](https://opencode.ai/docs/zen/) lists a paid `deepseek-v4-pro` Chat Completions route. **Since September 14 DeepSeek's first-party `deepseek-v4-pro` requests route to V4.1 Flash** ([DeepSeek retirement notice](https://api-docs.deepseek.com/news/news260910)); for original Pro behavior verify a pinned third-party checkpoint or self-host, not the legacy first-party alias.
- **Release / knowledge:** August 13, 2026 official Pro GA; knowledge cutoff of 0813 weights not verified ([DeepSeek](https://api-docs.deepseek.com/news/news260813)).
- **IDs:** Historic `deepseek-v4-pro`, Vals `deepseek/deepseek-v4-pro-0813`, original weights `deepseek-ai/DeepSeek-V4-Pro`; current first-party alias serves another model.
- **Context window:** [Vals](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813) shows **1M input context / 384K maximum output** on its evaluated 0813 route; current V4.1 redirect may differ.
- **Modalities:** Original 0813 Pro is **text input → text output**, reasoning efforts low/high/max and tools ([DeepSeek GA](https://api-docs.deepseek.com/news/news260813), [Vals](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)). No native vision/audio/video input should be borrowed from subsequent Flash variants.
- **Pricing (as of 2026-10-15):** Original route [Vals](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813) **$1.32 input / $3.96 output per 1M**; [OpenCode Console](https://opencode.ai/docs/zen/) separately lists **$1.74 / $3.48 / $0.145 cached input**, which may represent different hosted billing. [DeepSeek August announcement](https://api-docs.deepseek.com/news/news260813) introduced half-price off-peak tiers, but current first-party alias bills **V4.1 Flash**, not historical Pro. Downloadable MIT weights permit self-hosting with compute cost.
- **Architecture:** Open-weight Pro-family sparse MoE; project metadata quotes 1.6T/49B active but the fetched GA post does not textually confirm these exact counts, so treat them as provisional, not source-verified.

### Raw benchmarks found

The results below are from the original **0813** Pro snapshot ([Vals](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)), [AA](https://artificialanalysis.ai/models/deepseek-v4-pro) as attributed in [BenchLM](https://benchlm.ai/models/deepseek-v4-pro-0813), and DeepSeek's versioned primary documentation. Some [BenchLM](https://benchlm.ai/models/deepseek-v4-pro-0813) technical-report figures may measure an earlier V4 checkpoint; they are labelled separately and not assumed an 0813 rerun.

Agent / tool use:

- [Vals 0813 TB2.1 **54.68%** three-trial result in release notes, TB4.0 **14.14% ±2.02**, Finance Agent v2 **50.39% ±0.25**, Code Migration **41.54% ±4.30**, Harvey Legal Agent **7.50% ±2.15**, SRE Bench **1.91% ±0.85**](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813). [AA attributed τ² **96.2%**, APEX-AA **24.3%**, GDPval-AA **54.5% normalized**](https://benchlm.ai/models/deepseek-v4-pro-0813) use different harnesses/units.
- [BenchLM vendor-attributed 0813 TB2.1 **87.9%** and Toolathlon-Verified **74.1%**](https://benchlm.ai/models/deepseek-v4-pro-0813), ascribed to DeepSeek's versioned agent table; vendor vs independent TB2.1 gap is substantial.

Reasoning / knowledge:

- [Vals 0813 GPQA Diamond **92.42% ±2.02**, MMLU Pro **86.97% ±0.34**, ProofBench v1.1 **50.00% ±5.03**](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813); [AA GPQA **92.8%**, HLE **41.0%**, CritPt **18.0%**, current Index **53.2**](https://benchlm.ai/models/deepseek-v4-pro-0813) attributed to AA.
- [ARC Prize 0813 ARC-AGI-2 **61.3%**](https://arcprize.org/results/deepseek-v4-pro-0813) as catalogued by [BenchLM](https://benchlm.ai/models/deepseek-v4-pro-0813).

Coding:

- [Vals 0813 SWE-bench **96.40% ±0.83**, LiveCodeBench **87.53% ±0.96**, Vibe Code Bench v1.1 **82.30% ±3.15**, ProgramBench **0.00%**](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813). Vendor-attributed [DeepSWE **62.7%**, TB2.1 **87.9%**, NL2Repo **61.5%**](https://benchlm.ai/models/deepseek-v4-pro-0813). Vals SWE Verified score is not a SWE-bench Pro result, and TB2.1 has a much lower Vals run.

Long context / multimodal:

- [Vals 1M/384K](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813); [BenchLM attributes MRCR 1M **83.5%** and CorpusQA 1M **62.0%** to the broader V4 technical report](https://benchlm.ai/models/deepseek-v4-pro-0813), whose exact checkpoint identity needs checking before asserting an 0813 rerun.
- **Text-only 0813 Pro** ([Vals](https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813)); MMMU-Pro/CharXiv vision score for this model **no verified public score found**. Do not import Flash Vision Exp's results.

### Normalized scores (1–100)

- **Tool use: 79/100.** Vals TB2.1 54.7% vs vendor 87.9% and TB4 14.1% warrant conservative interpretation despite τ² 96.2%.
- **Reasoning: 86/100.** GPQA ~92%, AA HLE 41%, ARC-AGI-2 61.3% and CritPt 18% show strong text analysis under versioned tests.
- **Context window: 93/100.** 1M/384K on Vals's 0813 route, with reported MRCR 83.5% from a broader technical report and current first-party alias no longer serving that checkpoint.
- **Multimodal: 15/100.** Original 0813 Pro is text-only; no image/video/audio I/O credited.
- **Coding: 86/100.** Vals SWE 96.4%, Vibe Code 82.3% and vendor DeepSWE 62.7%; independent TB4 14.1% and ProgramBench 0% cap longer autonomy.
- **Cost efficiency: 78/100.** Vals $1.32/$3.96 or Console $1.74/$3.48 with weights available; verify that the endpoint actually serves Pro, not redirected V4.1.
- **Overall Score: 72/100.** (79 + 86 + 93 + 15 + 86) / 5 = 71.8, half-up 72; capable text-only coding and reasoning when a pinned Pro deployment is available and version/harness are verified.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-15
- Method: Fresh DeepSeek GA/retirement docs compared with Vals 0813 and AA/ARC-attributed results; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
