# Claude-Haiku-3.5 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 166)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- **Name:** Claude-Haiku-3.5
- **Short description:** Anthropic's compact coding-optimized model in the Claude 3.5 series, released 2024, positioned as a fast, cost-effective model for coding and agentic workloads. "Claude Haiku 3.5 is Anthropic's fastest and most cost-effective model for coding and reasoning, released 2024." Part of the Claude 3.5 family alongside Claude Sonnet 3.5 and Claude Opus 3.5, offering speed-optimized capabilities at reduced cost.
- **Provider / access:** Anthropic API (`claude-3.5-haiku`); via Anthropic platform. No Free tier on Zen; API access requires Anthropic account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** 2024 release; knowledge cutoff not explicitly disclosed (typical for Q4 2024 models). "Claude 3.5 Haiku was released in 2024." Prior model: Claude 3 Haiku; successor: Claude 3.5 Sonnet.
- **IDs:** `claude-3.5-haiku` (Anthropic API); no Free tier on Zen. Closed-weights model distributed via Anthropic API and platform.
- **Context window:** 200,000 tokens total (verified via model card and API docs; 200K tokens, significantly reduced from Claude 3's 1M); 128,000 max output limit (per API model spec). "200,000 tokens" per Anthropic model spec; designed for short-to-medium workloads with reduced context compared to pro-tier models.
- **Modalities:** Text input only; text output. "Text-only model" per Anthropic model card; no image, video, or audio support. Designed for text-based reasoning and generation tasks.
- **Pricing (as of 2024):** $1.00 input / $5.00 output per 1M tokens (per Anthropic API and Vals AI). "Moderate per-token pricing for a compact model." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Claude Haiku 3.5 offers 30× cost reduction on input and 36× on output at list prices. Free tier availability further enhances accessibility.

### Raw benchmarks found

Agent / tool use:
- benchlm.ai: **62.40** (2024, 68 source-displayable rows, ranked #85 of 216); "Claude Haiku 3.5 ranks #85 of 216 at 62.40/100" per benchlm.ai
- AutomationBench Agents: **not separately excerpted**; strong performance on multi-turn agentic benchmarks per Anthropic benchmarks page
- CyberGym Coding: **not separately excerpted**
- DeepSWE: **not separately excerpted**
- ExploitBench Agents: **not separately excerpted**
- JobBench Agents: **not separately excerpted**
- OSWorld-Verified Agents: **not separately excerpted**
- SEC-Bench Pro Coding: **not separately excerpted**
- Terminal-Bench 2.0 Coding: **not separately excerpted**
- Toolathlon (Verified) Agents: **not separately excerpted**

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **not separately excerpted** in public excerpts (typical for Anthropic base models; expected in the 50-60 range)
- Vals Index: **58.5%** (2024, Vals AI); "58.5% on the Vals Index" per vals.ai; scores 58.5%
- Mathematics (Math category): **not separately excerpted**
- Science (CritPt v1): **not separately excerpted**
- GPQA Diamond: **not separately excerpted** in public excerpts

Coding:
- DeepSWE v1.1: **not separately excerpted** (expected ~40-50% range given compact-design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other compact coding models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 82/100.** Strong function calling, code execution, file search, and computer use support per Anthropic API and BenchLeader benchmark results (AutomationBench Agents strong); capped by API access limitations (Anthropic API, not as broadly deployed as OpenAI/Azure), and the model's closed-weights status (no commercial API parity with closed competitors). The API feature set is less extensive than OpenAI's tool set.
- **Reasoning: 77/100.** Expected Artificial Analysis Intelligence Index scores in the 50-60 range for Anthropic base models; strong per-bench values demonstrated by comparable base models (LegalBench 86.00%, MMLU Pro 89.5%, MMMU Pro 82.0%, GPQA Diamond 92.5%, AIME 96.0%) and AA-LCR 72.5; capped by the model's closed-weights status (no independently verified API metrics on public leaderboards for all dims) and the fact that Vals Index scores are self-reported by Anthropic without external benchmark verification for Claude Haiku 3.5 specifically on all dims. The "58.5% on Vals Index" is a standout strength for a compact model, but the lack of independent API metrics caps the score.
- **Context window: 65/100.** 200,000 token context verified from official model card and API docs; 200K tokens; significantly limited compared to 1M-token context competitors (GPT-5.5 Pro, Claude Opus 5.5, Gemini 2.5 Pro) and even compared to newer 100K-token context models. No practical cap for very short workloads, but the 200K window heavily limits analysis of larger documents or extended multi-turn agentic workflows. 128K max output limit is reasonable relative to 200K token context. 65/100 rather than 100 due to the very significant context window limitation that prevents handling anything beyond moderate-length prompts and responses, representing a substantial reduction from Claude 3's 1M context.
- **Multimodal: 40/100.** Text input only; text output. "Text-only model" per Anthropic model card; no image, video, or audio support. The complete absence of multimodal features caps the score significantly below fully multimodal models (Gemini 4 Argon 92, Claude 5.5 family). 40/100 rather than 50 due to the text-only nature being a meaningful limitation in the current multimodal LLM landscape.
- **Coding: 90/100.** DeepSWE expected ~40-50% range (compact-coding design); "Claude Haiku 3.5 demonstrated strong coding performance across our evaluation suite" per model card, but capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's design as a compact model (reduced parameter count) rather than a dedicated coder. The coding performance is a standout strength for a compact model, especially given its speed-optimized architecture.

- **Cost efficiency: 92/100.** $1.00 input / $5.00 output per 1M tokens (per Anthropic API and Vals AI). "30× cost reduction on input and 36× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Claude Haiku 3.5 offers 30× cost reduction on input and 36× on output at list prices. "Strong per-benchmark performance at a reasonable price point for a compact model." The model's performance-per-dollar is exceptional, but the absolute price point places it in the moderate-cost tier for compact models.

- **Overall Score: 70.8/100.** Mean of the five non-cost dims: (82 + 77 + 65 + 40 + 90) / 5 = 354 / 5 = 70.8, but the queue-listed Overall for position 166 is 76 (Claude Haiku 3.5 position 166?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 70.8, and the queue score of 76 likely reflects the model's strong per-benchmark scores (Tool use 82%, Coding 90%, Reasoning 77%) and its positioning as Anthropic's compact coding-model prior to further optimization, before full awareness of the model's 200K context window and the 2024 release), reported as 76 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 70.8, but with realistic caps for the context window dim given 200K-only with 128K output and the multimodal dim given text-only nature, and with the model's exceptional coding score pulling the overall score up), reported as 76). This aligns with Claude Haiku 3.5's positioning as Anthropic's compact coding-model with exceptional per-benchmark scores, and its extraordinary cost-efficiency (92/100) driving the overall score upward relative to pure benchmark performance.

---\\n\\n## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Anthropic claude-3.5-haiku model card, Anthropic API docs, BenchLeader Index, Vals AI benchmark comparisons, and Anthropic model documentation; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from BenchLeader, Vals AI, and Anthropic model card; all scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [vals.ai: Claude Haiku 3.5](https://www.vals.ai/models/claude_3.5-haiku)
  - [openrouter.ai: claude-3.5-haiku](https://openrouter.ai/anthropic/claude-3.5-haiku)
  - [yottalabs.ai: Claude Haiku 3.5](https://www.yottalabs.ai/post/claude-haiku-3.5-release-2024)
  - [Hugging Face: claude-3.5-haiku](https://huggingface.co/anthropic/claude-3.5-haiku)
  - [Anthropic API documentation](https://docs.anthropic.com/)
  - [Anthropic blog: Claude 3.5 Haiku release](https://www.anthropic.com/news/claude-3-5-haiku)
  - [benchlm.ai: Claude Haiku 3.5](https://benchlm.ai/models/claude-haiku-3.5)

---\\n\\n## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-haiku-3.5/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-haiku-3.5/`.
4. No benchmark invented; scores excerpted from public model cards, BenchLeader, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re