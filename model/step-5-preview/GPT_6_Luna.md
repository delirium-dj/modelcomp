# Step 5 Preview — findings by GPT-6 Luna

- Source: StepFun/Step 5 Preview
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model for software engineering and professional knowledge work, with a particular focus on finance. The open-weight model supports long-horizon tool workflows and visual inputs.
- **Provider / access:** StepFun weights at `stepfun-ai/Step-5-Preview`; can be served through vLLM or SGLang with OpenAI-compatible endpoints. No specific hosted API ID verified.
- **Release / knowledge:** Model release in 2026; exact knowledge cutoff not stated.
- **IDs:** `stepfun-ai/Step-5-Preview`.
- **Context window:** Up to 1,000,000 tokens; maximum output up to 1,000,000, with actual serving constraints dependent on hardware and cache allocation.
- **Modalities:** Text and image input documented in the model card; text output. Tool calls/reasoning supported. Some announcement materials mention video, but no specific video input mechanism in the checkpoint card was verified.
- **Pricing (as of 2026-10-28):** Open weights; no fixed token price. Hardware costs are material: StepFun deployment examples use four B300 GPUs for FP8 or eight H200 GPUs.
- **Architecture:** Sparse MoE, 600B total / 27B active parameters; StepFun Model License 1.0 with additional attribution and commercial-use conditions (not Apache 2.0).

### Raw benchmarks found

StepFun reports the following results at High reasoning effort. Artificial Analysis scores are attributed to the independent evaluator; the other figures are vendor-reported.

Agent / tool use:

- MCP-Atlas: **85.6**.
- Toolathlon-Verified: **74.1%**.
- AutomationBench-AA: **51.0%**.
- τ³-Banking: **42.5%**.
- GDPval-AA v2.1: **1566 Elo** (Artificial Analysis snapshot dated 2026-09-20).
- Terminal-Bench 2.1: **85.0%**; Terminal-Bench 4.0: **33.3%** (different versions, not directly comparable).

Reasoning / knowledge:

- GPQA Diamond: **93.5%**.
- Humanity's Last Exam: **46.5%**.
- AA-LCR v1.1: **88.3%**.
- Artificial Analysis Intelligence Index: **43.7** (reported in OpenRouter's benchmark summary; snapshot-dependent).

Coding:

- DeepSWE v1.1: **67.7%** (SWE-agent harness, per StepFun).
- SciCode: **58.9%**.
- ProgramBench pass rate: **80.5%**.

Long context:

- Capacity up to 1M tokens; no MRCR/RULER/GraphWalks retrieval score verified.

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 85%, MCP-Atlas 85.6, and AutomationBench 51% are strong; capped for vendor evaluation and mixed results across benchmarks.
- **Reasoning: 91/100.** GPQA 93.5%, HLE 46.5%, and AA-LCR 88.3% support a high score; capped for lack of independently replicated broad-suite results.
- **Context window: 90/100.** 1M capacity is top-tier, but no retrieval-accuracy measurement at that span was verified.
- **Multimodal: 65/100.** Image input is documented; no audio or video-processing benchmark/route was confirmed for the model card configuration.
- **Coding: 92/100.** DeepSWE 67.7%, SciCode 58.9%, and ProgramBench 80.5% show strong coding; capped for harness and publisher-reporting limits.
- **Cost efficiency: 65/100.** Open weights remove token fees but the large deployment footprint makes self-hosting costly; no comparable hosted price verified.
- **Overall Score: 86/100.** Half-up mean of the five quality dimensions (91+91+90+65+92)/5 = 85.8; strong for coding-agent and professional workflows when adequate hardware is available.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from StepFun's model card and published evaluation details, with an independent Artificial Analysis result labeled separately. Normalized scores are independent interpretations.
- Sources: [StepFun model card and deployment documentation](https://github.com/stepfun-ai/Step-5-Preview); [StepFun model page](https://www.stepfun.com/step-5-preview); [Artificial Analysis model page](https://artificialanalysis.ai/models/step-5).
