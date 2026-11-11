# Mercury Decide — Claude Sonnet 4.6 Research

Mercury Decide (Inception Labs, late 2026) is a specialised diffusion-based System One decision model. It is not a general-purpose LLM — it evaluates structured state inputs (JSON text or vision/image) against typed narrow questions (yes/no, multiple-choice, scoring) and returns machine-readable probability outputs with calibrated confidence. Designed as a fast "System 1" filter to handle routing, guardrail checks, UI/screenshot verifications, and ticket escalations cheaply before invoking heavier System 2 models like Mercury 3. Output is typed log-probabilities, not generated text. Context: 64K in. Pricing: $0.04/M input; output structured decision (effectively near-free).

Benchmarks (verified):
- LegalBench: 87% (vs ~74% for comparable standard judge configurations)
- Median latency per single decision: 0.16 seconds
- Batch latency: ~0.4 seconds for 64 concurrent questions against same context
- Throughput: ~14 decisions per second
- Hallucination resistance: strong (Artificial Analysis Decision Index; flags uncertainty rather than forcing uncalibrated guesses)
- Vals AI third-party: matches or outperforms comparable claim-verification judge models

## Scores

- **Tool use: 30/100.** Mercury Decide does not function as a general tool-calling agent. It is a typed-decision endpoint — a specialised component for routing and classification, not tool chaining. The structured log-probability output can be consumed by agentic orchestrators but the model itself does not invoke tools.
- **Reasoning: 35/100.** LegalBench 87% is excellent for classification/judgement reasoning in its target domain; however, the model is explicitly not designed for open-ended reasoning, general QA, or multi-step logical chains. Scored on the general reasoning axis accordingly.
- **Context window: 55/100.** 64K total. Tier: 64K = 55 points. Sufficient for structured decision tasks; not designed for long-form context.
- **Multimodal: 15/100.** Text in; structured decision out. The meta notes vision/image state inputs are incorporated into the decision framework, but it is not a general image-understanding model. Scores at the text-only baseline.
- **Coding: 10/100.** Not applicable — Mercury Decide is a classification/routing engine, not a code generation model. Minimal score reflects the axis is structurally inapplicable.
- **Cost efficiency: 100/100.** $0.04/M input with near-zero output cost (structured decision tokens). The cheapest model in the dataset per decision; 0.16s median latency at 14 decisions/second makes it unrivalled for high-volume routing pipelines.
- **Overall Score: 29/100.** Mean of Tool use (30) + Reasoning (35) + Context (55) + Multimodal (15) + Coding (10) = 145 / 5 = 29.0. Like Mercury Edit 2, the low score reflects that Mercury Decide is a specialised system component evaluated on axes designed for general LLMs. It is best deployed as a sub-100ms routing and guardrail layer inside larger agentic pipelines, not as a standalone model.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
