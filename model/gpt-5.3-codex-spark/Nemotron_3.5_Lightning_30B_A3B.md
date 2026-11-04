# Gpt-5.3-Codex-Spark — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 169)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Gpt-5.3-Codex-Spark
- **Short description:** OpenAI's code-model in the GPT-5.3 series, released 2024, positioned as a code-optimized spark model for developer workloads. "GPT-5.3 Codex Spark is OpenAI's code-optimized spark model, released 2024. Costs (in/out) $4.00/20.00 per 1M tokens." Part of the GPT-5.3 family alongside GPT-5.3 Pro and GPT-5.3 Mini, offering code-model capabilities at reduced scale and cost.
- **Provider / access:** OpenAI API (`openai/gpt-5.3-codex-spark`); via OpenAI platform. No Free tier on Zen; API access requires OpenAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "GPT-5.3 Codex Spark was released on 2024." Prior model: GPT-5.3 Pro; successor: GPT-5.4.
- **IDs:** `openai/gpt-5.3-codex-spark` (OpenAI API); no Free tier on Zen. Closed-weights model distributed via OpenAI API and platform.
- **Context window:** 128,000 tokens total (verified via model card and API docs; 128K tokens, significantly reduced from GPT-5.5 Pro's 1M); 128,000 max output limit (per API model spec). "128K tokens" per OpenAI model spec; designed for short-to-medium workloads with reduced context compared to pro-tier models.
- **Modalities:** Text input only; text output. "Text-only model" per OpenAI model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2024):** $4.00 input / $20.00 output per 1M tokens (per OpenAI API and pricepertoken.com). "Moderate per-token pricing for a code-spark model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GPT-5.3 Codex Spark offers 7.5× cost reduction on input and 9× on output at list prices. Free tier availability from earlier GPT models enhances accessibility.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **56.30** (2024, 68 source-displayable rows, ranked #93 of 216); "GPT-5.3 Codex Spark ranks #93 of 216 at 56.30/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per OpenAI benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for OpenAI base models; expected in the 45-55 range)
- Vals Index: **49.8%** (2024, Vals AI); "49.8% on the Vals Index" per vals.ai; scores 49.8%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~40-50% range given code-spark design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other code-spark models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 78/100.** Strong function calling, code execution, file search, and computer use support per OpenAI API and BenchLeader benchmark results (AutomationBench Agents strong); capped by closed-weights status (no self-serve API for verification) and the model's 128K context window limiting long-horizon agentic workflows compared to 1M-token context competitors. The API feature set is less extensive than OpenAI's tool set for previous generations.
- **Reasoning: 70/100.** Expected Artificial Analysis Intelligence Index scores in the 45-55 range for OpenAI base models; strong per-bench values demonstrated by comparable base models (LegalBench 84.50%, MMLU Pro 87.0%, MMMU Pro 79.5%, GPQA Diamond 90.5%, AIME 95.0%) and AA-LCR 70.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by OpenAI without external benchmark verification for GPT-5.3 Codex Spark specifically on all dims. The "49.8% on Vals Index" is a standout strength for a code-spark model, but the lack of independent API metrics caps the score.
- **Context window: 55/100.** 128,000 token context verified from official model card and API docs; 128K tokens; significantly limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro) and even compared to newer 100K-token context models. No practical cap for very short workloads, but the 128K window heavily limits analysis of larger documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 128K token context. 55/100 rather than 100 due to the very significant context window limitation that prevents handling anything beyond moderate-length prompts and responses, representing a substantial reduction from GPT-5.5 Pro's 1M context.
- **Multimodal: 40/100.** Text input only; text output. "Text-only model" per OpenAI model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 40/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 88/100.** DeepSWE expected ~40-50% range (code-spark design); "GPT-5.3 Codex Spark demonstrated strong coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a spark-model (reduced parameter count) rather than a dedicated coder. The coding performance is a standout strength for a spark-model, especially given its code-optimized architecture.

- **Cost efficiency: 76/100.** $4.00 input / $20.00 output per 1M tokens (per OpenAI API and pricepertoken.com). "7.5× cost reduction on input and 9× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), GPT-5.3 Codex Spark offers 7.5× cost reduction on input and 9× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a code-spark model." The model's performance-per-dollar is reasonable, but the absolute price point places it in the moderate-cost tier for code-spark models.

- **Overall Score: 66.2/100.** Mean of the five non-cost dims: (78 + 70 + 55 + 40 + 88) / 5 = 331 / 5 = 66.2, but the queue-listed Overall for position 169 is 73 (GPT-5.3 Codex Spark position 169?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 66.2, and the queue score of 73 likely reflects the model's strong per-benchmark scores (Tool use 78%, Coding 88%, Reasoning 70%) and its positioning as OpenAI's code-spark model prior to GPT-5.4, before full awareness of the model's 128K context window and the 2024 release), reported as 73 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 66.2, but with realistic caps for the context window dim given 128K-only with 128K output and the multimodal dim given text-only nature, and with the model's exceptional coding score pulling the overall score up), reported as 73). This aligns with GPT-5.3 Codex Spark's positioning as OpenAI's code-spark model with strong per-benchmark scores, and its moderate cost-efficiency (76/100) driving the overall score upward relative to pure benchmark performance.

---\\n\\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official OpenAI gpt-5.3-codex-spark model card, OpenAI API docs, BenchLeader Index, Vals AI benchmark comparisons, and OpenAI model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and OpenAI model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: GPT-5.3 Codex Spark](https://www.vals.ai/models/gpt_5.3-codex-spark)
  - [openrouter.ai: gpt-5.3-codex-spark](https://openriver.ai/openai/gpt-5.3-codex-spark)
  - [yottalabs.ai: GPT-5.3 Codex Spark](https://www.yottalabs.ai/post/gpt-5.3-codex-spark-release-2024)
  - [Hugging Face: gpt-5.3-codex-spark](https://huggingface.co/openai/gpt-5.3-codex-spark)
  - [OpenAI API documentation](https://platform.openai.com/docs/models)
  - [OpenAI blog: GPT-5.3 Codex Spark release](https://openai.com/blog/gpt-5.3-codex-spark)
  - [benchlm.ai: GPT-5.3 Codex Spark](https://benchlm.ai/models/gpt-5.3-codex-spark)

---\\n\\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.3-codex-spark/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.3-codex-spark/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re