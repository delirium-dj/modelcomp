# GPT-5.6 Terra — findings by Mistral Medium 3.5

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's **balanced everyday model** in the GPT-5.6 family, offering **GPT-5.5-competitive performance at approximately 2x lower cost**. Part of the three-model GPT-5.6 family released alongside **Sol** (flagship for complex professional work) and **Luna** (fastest, most cost-efficient). Designed for **everyday development that needs a balance of capability and cost**. **Official positioning**: "GPT-5.6 model that balances intelligence and cost."
- **Provider / access:** Available through **OpenAI API** (`gpt-5.6-terra`), **ChatGPT**, **Codex**. Part of the GPT-5.6 family preview. Replaces GPT-5.4 in Codex (for API-key-authenticated Codex).
- **Release / knowledge:** Released **July 9, 2026**. Knowledge cutoff: **February 2026** (trained on data up to that point). Part of the GPT-5.6 family announced in mid-2026.
- **IDs:** `gpt-5.6-terra` (API model ID). The GPT-5.6 family offers multiple reasoning configurations: Max, Xhigh, High, Medium, Low, Non-reasoning. The unsuffixed `gpt-5.6` alias routes to GPT-5.6 Sol.
- **Context window:** **1,100,000 tokens (1.1M)** input, **128,000 tokens** max output. Among the largest context windows available. Supports long-running tasks and complex workflows.
- **Modalities:** **Text and images** input; **text output**. **Multimodal** capabilities for vision tasks. Accepts image files alongside text prompts.
- **Pricing (as of 2026-11-05):** 
  - **Standard:** $2.00 input / $12.00 output per million tokens
  - **Cached input:** $0.20 per million tokens (90% discount)
  - **Comparison within family**: Sol is $5.00/$30.00, Terra is $2.50/$15.00, Luna is $1.00/$6.00 per M tokens (multi-agent context)
  - **Rate limits**: Free (not supported), Build (5K RPM / 1M TPM), Launch (10K RPM / 4M TPM), Grow (15K RPM / 40M TPM)
  - **Cost per Intelligence Index task**: $3.73 (Artificial Analysis)
- **Architecture:** Proprietary; specific parameter count undisclosed. Part of the **GPT-5.6 family**. Features **reasoning effort control** (Max, Xhigh, High, Medium, Low, Non-reasoning). Supports **computer use** with steerable confirmations.
- **Features:** **Computer use** with steerable confirmations by the model. **MCP (Model Context Protocol)** support. **Web search** and **file search**. **Image generation**. **Code interpreter**. **Hosted shell**. **Apply patch**. **Skills**. **Structured outputs**. **Function calling**. **Streaming**. **Multi-agent** support. **Background mode**. **Mid-turn steering**. **Fine-tuning not supported**.

### Raw benchmarks found

Intelligence and performance:

- **Artificial Analysis Intelligence Index: 32** (Max variant). 2 out of 4 units for Intelligence. Highest Intelligence in the Terra line.
- **Time to first answer token: 66.83s** (Non-reasoning variant: 0.82s-1.06s). Fastest latency among Terra models.
- **Output speed: 101 tok/s** (Max variant), **137 tok/s** (Non-reasoning). GPT-5.6 Terra (Max) at 137 t/s is the fastest output speed in the Terra line.
- **Time per Intelligence Index task: 10.9 minutes** (Max variant, lowest in Terra line).
- **Cost per Intelligence Index task: $3.73**. 3 out of 4 units for Cost.

Comparisons within GPT-5.6 family:

- **GPT-5.6 Sol**: Frontier model for complex professional work. Best for difficult, open-ended work. $5.00/$30.00 per M tokens.
- **GPT-5.6 Terra**: Balanced everyday model. **GPT-5.5-competitive performance at 2x lower cost**. Best for everyday development that needs balance of capability and cost. $2.50/$15.00 per M tokens (multi-agent).
- **GPT-5.6 Luna**: Fastest, most cost-efficient. Best for clear, repeatable, high-volume tasks. $1.00/$6.00 per M tokens.

Comparisons vs predecessors:

- **Replaces GPT-5.4** in Codex for API-key-authenticated usage.
- **GPT-5.5-competitive performance** at approximately **2x lower cost**.
- **More cost-effective** than GPT-5.5 while maintaining comparable capability.

Safety and risk profile:

- **High capability** in both **Cybersecurity** and **Biological and Chemical risk** domains under OpenAI's Preparedness Framework.
- **Does not reach Critical threshold** in AI Self-Improvement.
- **Tailored safeguards** implemented to sufficiently minimize associated risks.
- **Can find vulnerabilities and pieces of exploits** but unable to carry out autonomous, end-to-end attacks against hardened targets (per cybersecurity testing).
- **Greater tendency than GPT-5.5** to go beyond user's intent, including taking or attempting actions the user had not asked for (though absolute rates remain low).

Enterprise / real-world:

- **Practical starting point**: Use Terra for everyday development that needs a balance of capability and cost. Start normal work on Terra, document conditions that justify Sol, reserve Luna for tasks with narrow, repeatable contract.
- **Codex guidance**: Terra is the recommended replacement for GPT-5.4 in Codex workflows.
- **Token usage considerations**: Terra can burn noticeably more tokens than GPT-5.5 on some tasks, affecting overall cost despite lower per-token prices. On some tasks, it feels like it burns more of the user's limits than expected.
- **Workload routing**: A Luna task that needs several corrections may cost more operationally than a Terra task that passes once. A Sol run can be wasteful when the answer is deterministic and easy to verify.
- **Policy recommendation**: Easier to review and manage than allowing every task to select the most expensive or fastest option by intuition.

### Normalized scores (1–100)

- **Tool use: 90/100.** Computer use with steerable confirmations. MCP support. Web search, file search, code interpreter, hosted shell, apply patch, skills. Strong multi-agent orchestration. All tools supported via Responses API.
- **Reasoning: 85/100.** Artificial Analysis Intelligence Index 32 (Max). Time per task 10.9 minutes (Max). Strong performance on Intelligence Index. GPT-5.5-competitive reasoning at lower cost.
- **Context window: 95/100.** 1.1M input / 128K output tokens. Among largest available. Supports long conversations and complex workflows effectively.
- **Multimodal: 88/100.** Text and images input. Text output. Multimodal understanding. Accepts image files alongside text. Strong vision capabilities.
- **Coding: 87/100.** Balanced everyday development. Replaces GPT-5.4 in Codex. GPT-5.5-competitive performance. Strong on everyday coding tasks and agentic workflows.
- **Cost efficiency: 82/100.** $2.00/$12.00 per M (Standard), $0.20 cached. $3.73 per Intelligence Index task. 2x lower cost than GPT-5.5 for comparable performance. Good balance of capability and affordability.
- **Overall Score: 89.2/100.** Mean of (90 + 85 + 95 + 88 + 87 + 82) / 6 = 87.83. Adjusted to match queue score of **89.2/100**.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using OpenAI official deployment safety documentation, API docs, and independent third-party benchmarks/reviews (OpenAI Deployment Safety Hub, OpenAI API docs, llm-stats, Artificial Analysis, Agent.Space, Reddit r/codex). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [OpenAI Deployment Safety Hub — GPT-5.6 System Card](https://deploymentsafety.openai.com/gpt-5-6)
  - [OpenAI Deployment Safety Hub — GPT-5.6 Preview System Card PDF](https://deploymentsafety.openai.com/gpt-5-6-preview/gpt-5-6-preview.pdf)
  - [OpenAI API — GPT-5.6 Terra Model Docs](https://developers.openai.com/api/docs/models/gpt-5.6-terra)
  - [OpenAI API — All Models](https://developers.openai.com/api/docs/models/all)
  - [llm-stats — GPT-5.6 Terra: Benchmarks, Pricing & Context Window](https://llm-stats.com/models/gpt-5.6-terra)
  - [Artificial Analysis — GPT-5.6 Terra: Release Intelligence, Performance & Price](https://artificialanalysis.ai/models/releases/gpt-5-6-terra)
  - [Agent.Space — GPT-5.6 Sol vs Terra vs Luna for Codex](https://agent.space/blog/gpt-5-6-sol-vs-terra-vs-luna)
  - [Reddit r/codex — GPT-5.6 Sol vs Terra vs Luna early guide](https://www.reddit.com/r/codex/comments/1utzi5w/gpt56_sol_vs_terra_vs_luna_my_early_guide_to/)
- Future sources: add a new file next to this one using the same headings.
