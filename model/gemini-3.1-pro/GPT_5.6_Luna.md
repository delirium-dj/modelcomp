# Gemini 3.1 Pro — findings by ChatGPT 5.6 Luna

- Source: Google DeepMind (`gemini-3.1-pro`)

- Date: 2026-10-01 (UTC)

- Overview and scoring methodology: `../../model-comparison.md`

- Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Gemini 3.1 Pro

- Short description: Google's proprietary frontier reasoning and multimodal model, designed for complex reasoning, software engineering, agentic workflows, and multimodal understanding. The Thinking (High) benchmark configuration is explicitly identified in Google's published evaluation table; it should not be confused with a separate model ID.

- Provider / access: Google Gemini API, Google AI Studio, Vertex AI, and OpenCode Zen (`opencode/gemini-3.1-pro`). OpenCode Zen publishes a model-specific endpoint. API compatibility and endpoint should be checked against the selected provider.

- Release / knowledge: 2026-02-19 release (BenchLM model record); exact knowledge-cutoff date: no verified public score found.

- IDs: `google/gemini-3.1-pro`; OpenCode Zen: `opencode/gemini-3.1-pro`. No separately verified Free ID on Zen.

- Context window: 1,000,000 tokens total, according to BenchLM's model specification. Google's published MRCR v2 evaluation also includes a 1M-token evaluation point. Maximum output length is a separate limit.

- Modalities: Text, image, audio, video, and document/PDF input; text output; reasoning/Thinking support; function/tool calling. JSON mode availability depends on API configuration.

- Pricing (as of 2026-10-01): OpenCode Zen: up to 200K tokens, $2.00 input / $12.00 output / $0.20 cached input per 1M tokens. Above 200K: $4.00 / $18.00 / $0.40. Paid. No independently verified Free-tier API ID. Free-tier privacy caveat: do not assume free consumer access and API data handling have identical privacy terms.

- Architecture: Proprietary Google model; parameter count, active parameter count, and MoE configuration: no verified public score found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found. Related but different harness/version: Terminal-Bench 2.0, 68.5% (Google DeepMind model card; Terminus-2 harness).

- Tau3-Banking / Tau2-Bench: 90.8% Retail; 99.3% Telecom (Google DeepMind model card; τ2-bench).

- GDPval-AA: 1317 Elo (Google DeepMind model card; expert-task evaluation).

- Claw-Eval / ClawProBench: no verified public score found.

- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas 69.2% (Google DeepMind model card; multi-step MCP workflows).

Reasoning / knowledge:

- GPQA Diamond: 94.3% (Google DeepMind model card; no tools, Thinking High).

- HLE: 44.4% (Google DeepMind model card; no tools, full set, text + multimodal).

- LCR / MLCR: no verified public score found.

- CritPt: no verified public score found.

- Artificial Analysis Intelligence Index / BenchLM overall: 65.1/100, rank #35 of 211 (BenchLM; overall capability score, not Google's official score).

- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified / SWE-Pro: 80.6% / 54.2% (Google DeepMind model card; single attempt; SWE-Bench Pro Public).

- LiveCodeBench: 2887 Elo (Google DeepMind model card; LiveCodeBench Pro).

- SciCode / AA-SciCode: 59% (Google DeepMind model card; SciCode).

- Vibe Code Bench: no verified public score found.

- DeepSWE / Coding Index / other: no verified public score found.

Long context:

- MRCR v2 (8-needle): 84.9% at 128K; 26.3% at 1M (Google DeepMind model card; 1M pointwise evaluation). This is measured retrieval performance, not merely the advertised context capacity.

### Normalized scores (1-100)

- **Tool use: 78/100.** Strong results on τ2-bench (90.8% Retail, 99.3% Telecom) and MCP Atlas (69.2%). GDPval-AA at 1317 Elo is below the specified frontier threshold. Terminal-Bench 2.0 is 68.5%, but Terminal-Bench 2.1 has no verified score. These version and harness limitations prevent a frontier-level rating.

- **Reasoning: 91/100.** GPQA Diamond 94.3% and HLE 44.4% demonstrate strong performance. The HLE result is below the 50% frontier threshold specified in the methodology. No verified CritPt or LCR results.

- **Context window: 95/100.** Tier mapping: 1M+ tokens = 95–100. Actual documented capacity is 1,048,576 tokens. MRCR v2 retrieval falls to 26.3% at 1M, so the score does not qualify for 100.

- **Multimodal: 95/100.** Supports text, image, audio, video and PDF/document input, with text output. Reasoning and function calling are supported. Audio input qualifies for the 90–100 methodology tier.

- **Coding: 88/100.** SWE-bench Verified 80.6%, SWE-bench Pro 54.2%, LiveCodeBench Pro 2887 Elo and SciCode 59%. Strong coding evidence, but Terminal-Bench 2.1 and DeepSWE lack verified results.

- **Cost efficiency: 70/100.** Paid pricing of $2/$12 per million input/output tokens at up to 200K context, increasing to $4/$18 above 200K. The price is between the methodology's $1.25/$4.25 (88) and $3/$15 (60) reference points. Cached input is $0.20/$0.40 respectively. Cost is excluded from Overall Score.

- **Overall Score: 89/100.** Arithmetic mean of the five non-cost dimensions: (78 + 91 + 95 + 95 + 88) / 5 = 89.4, half-up rounded to 89. Best suited to complex reasoning, multimodal document analysis, long-context processing and software engineering, particularly where its large context window and integrated tool capabilities are useful. Validate retrieval quality for workloads requiring accurate information extraction near the 1M-token limit.

## Signature

- Provided by: ChatGPT (openai/gpt-5.6-luna) — 2026-10-01

- Method: Independent public internet research using Google DeepMind's official model evaluation information, Google Cloud documentation and pricing, OpenCode Zen documentation, and BenchLM. Raw benchmark figures retain their original harnesses and evaluation configurations. Scores are normalized 1–100 interpretations, not official vendor scores.

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

### Sources

1. Google DeepMind — Gemini 3.1 Pro official model and evaluation results

   .

2. Google Cloud — Gemini 3.1 Pro technical specifications

   .

3. Google Cloud — Generative AI pricing

   .

4. OpenCode Zen — model pricing

   .

5. BenchLM — Gemini 3.1 Pro benchmark profile

   .

6. Google Cloud — February 19, 2026 release announcement

   .
