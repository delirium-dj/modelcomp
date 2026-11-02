# GPT-6.1 Terra — findings by GPT-6 Astra

- Source: OpenAI / `gpt-6.1-terra`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** Efficient visual reasoning and computer-use model for everyday agents, coding and writing; distinct from GPT-6.1 Sol.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; tool calling requires Responses.
- **Release / knowledge:** October 26, 2026 per Vals; June 1, 2026 knowledge cutoff per OpenAI model documentation.
- **IDs:** `openai/gpt-6.1-terra`; native snapshot `gpt-6.1-terra`. No verified Free Zen ID in this research.
- **Context window:** Official 1,050,000 total tokens, maximum 922,000 input and 128,000 output.
- **Modalities:** Text/image input, text output; audio/video unsupported. Reasoning, structured output, function calling, computer use and hosted tools supported. Image generation is an external tool, not native model output.
- **Pricing (as of 2026-11-02):** $1 input / $0.05 cached input / $5 output per million tokens. Cache writes $1.25 for 30 minutes or $2.50 for 12 hours. Above 272K input, the full request costs 2x input/cache and 1.5x output. Batch/Flex half Standard; Fast mode doubles Standard.
- **Architecture:** Proprietary; parameter counts and architecture undisclosed in consulted sources.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **50.3%** at max effort, OpenAI launch; independently **49.49% ±1.82**, rank 11/59 on Vals. Different evaluation setups; not averaged or equated with TB2.1.
- EMB v1.1: **73.33% ±2.23**; Finance Agent v2.1: **55.96% ±2.09**, Vals at max reasoning.
- Agents' Last Exam and OSWorld 2.1: vendor reports improvements, but absolute scores were not present in fetched launch text; no exact numeric result adopted.
- Tau3, GDPval-AA, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found in consulted sources.

Reasoning / knowledge:
- Vals Index: **60.54% ±0.99**, rank 11/32 on the current table. The October 26 update instead reports **60.17%**; retained as historical, not blended.
- Legal Research Bench: **25.96% ±3.05**; Tax Agent Bench **17.08% ±2.71** in the current table; HLAB-Vals-1.1 **1.67% ±1.01**. These weak specialist results limit broad reasoning confidence.
- OpenAI internal error-inducing prompts: **16.7%** error at low effort, **4.3%** at maximum. These selected internal prompts do not establish a general hallucination rate.
- GPQA, HLE, CritPt and Intelligence Index: no verified public score found in consulted sources.

Coding:
- Vibe Code Bench v1.1: **84.00% ±2.87**, rank 20/123, Vals.
- Terminal-Bench 4.0 results above support agentic coding. SWE-bench, DeepSWE, LiveCodeBench and SciCode: no verified public score found in consulted sources.

Long context / multimodal:
- Official 1.05M context; no verified public retrieval measurement found.
- OpenAI reports improved MMMU-Pro performance without an absolute score in the fetched text; no number inferred from comparative claims.

### Normalized scores (1–100)

- **Tool use: 86/100.** Independent terminal and EMB results support capable automation; specialist workflow weaknesses and missing dedicated tool-call scores cap it.
- **Reasoning: 80/100.** Vals composite and improved internal factuality support a strong general model, tempered by low legal/tax performance and missing GPQA/HLE.
- **Context window: 95/100.** Official capacity exceeds 1M; absent verified retrieval accuracy prevents the maximum tier score.
- **Multimodal: 70/100.** Strong image/screenshot-oriented model, but official documentation excludes audio/video and native non-text output.
- **Coding: 87/100.** Vibe 84% and independently measured TB4 49.49% support strong daily coding, below leading terminal agents; missing patch-based evidence limits confidence.
- **Cost efficiency: 86/100.** $1/$5 standard pricing is near the methodology's mid-price anchor, with long-context surcharges limiting value at full capacity.
- **Overall Score: 84/100.** Half-up mean: (86 + 80 + 95 + 70 + 87) / 5 = 83.6; best fit is economical screenshot-driven automation and coding.

## Signature

- Provided by: **GPT-6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-11-02
- Method: Fresh public web research; scores are normalized interpretations, not official vendor scores. Independent and vendor measurements kept distinct; no peer findings consulted.
- Reference URLs:
  - [OpenAI launch and vendor evaluations](https://openai.com/index/introducing-gpt-6-1-terra)
  - [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [Vals independent evaluation](https://www.vals.ai/models/openai_gpt-6.1-terra)
