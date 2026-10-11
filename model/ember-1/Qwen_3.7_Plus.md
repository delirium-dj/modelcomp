# Ember 1 — findings by Qwen 3.7 Plus

- Source: Fireworks Research/Ember-1 (`opencode/ember-1`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's first specialized model, released September 23, 2026 as a Research Preview. Built on Kimi K3 via post-training to produce shorter reasoning traces — 40% fewer tokens at matching quality. The key innovation is not higher benchmark scores but dramatically better token efficiency: DeepSWE 1.1 75.2% (vs. K3-max 66.4% — Ember-1 is BETTER), Terminal-Bench 2.1 82.0% (vs. K3-max 80.9% — also better), SWE-bench Verified 92.2% (vs. K3-max 93.2% — nearly matching). τ-2 Bench Airline 66% (vs. K3-max 64%). Sits on or near the Pareto frontier for cost/task across 5+ industry benchmarks, beating GPT-6 Astra, Claude Opus 5, and GLM 5.3 on cost efficiency. Live A/B tests confirmed ~39% total token reduction with matching quality (0.753 vs. 0.751). Fireworks' own developers "didn't notice" the switch from K3 internally. Not a general-purpose flagship — a specialized efficiency layer on top of K3. Research Preview status (two-week serverless window, made permanent based on demand).
- **Provider / access:** Fireworks AI serverless API; OpenCode Zen. Not open weights (derived from Kimi K3).
- **Release / knowledge:** Released 2026-09-23 as Research Preview; knowledge cutoff inherited from Kimi K3.
- **IDs:** `opencode/ember-1` (OpenCode Zen); `fireworks/ember-1` (OpenRouter).
- **Context window:** 1,048,576 tokens (1M); 131K output.
- **Modalities:** Text, image in; text out.
- **Pricing (as of 2026-10-10):** $3.00/$15.00 per 1M in/out; $0.30 cached input. Same as Kimi K3 API pricing, but effective cost per task is ~40% lower due to token reduction. No free tier (noFreeId: true).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks — vs. K3-max 80.9%, Ember-1 is BETTER; 51.9% fewer tokens)
- τ-2 Bench Airline: **66%** (Fireworks — vs. K3-max 64%)
- SWE-Interact: **20.0%** (Fireworks — vs. K3-max 21.3%, close match; 32.5% fewer tokens)

Coding:

- DeepSWE v1.1: **75.2%** (Fireworks — vs. K3-max 66.4%, Ember-1 is MUCH BETTER; 23.7% fewer tokens)
- SWE-bench Verified: **92.2%** (Fireworks — vs. K3-max 93.2%, nearly matching; 15.5% fewer tokens)

Multimodal:

- Image input supported (inherited from Kimi K3)
- Specific multimodal benchmark scores not separately published

Reasoning / knowledge:

- Inherited from Kimi K3 base (GPQA Diamond, HLE, etc. — see K3 benchmarks)
- Specialized Intelligence Index (SII): Pareto frontier on Doximity Bedside Bench (physician-validated clinical benchmark) — beats GPT-6 Astra, Claude Opus 5, GLM 5.3 on cost/task
- Live A/B production metrics: Score **0.753** (vs. K3 0.751), Steps **21.4** (vs. K3 23.8), Output tokens **29.9K** (vs. K3 49.3K), reasoning token reduction **71.3%**, total token reduction **39%**

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal-Bench 2.1 82.0% is excellent — and BETTER than K3-max (80.9%) while using 51.9% fewer tokens. τ-2 Bench Airline 66% is solid. The tool-use profile matches or exceeds K3-max while being dramatically more token-efficient. For agentic coding loops where context grows quadratically with turns, the token reduction compounds into major quality-per-dollar gains.
- **Reasoning: 75/100.** DeepSWE 75.2% is not only better than K3-max (66.4%) — it's among the highest in the dataset. SWE-bench Verified 92.2% is elite (nearly matching K3-max 93.2%). The reasoning profile is enhanced by post-training: Ember-1 actually IMPROVES on K3-max for DeepSWE while cutting tokens by 23.7%. SWE-Interact 20.0% is close to K3-max 21.3%. The Pareto frontier positioning across 5+ benchmarks confirms consistent reasoning quality at lower token cost.
- **Context window: 82/100.** 1M tokens with 131K output, inherited from Kimi K3. The 1M context window is standard for frontier models. The key advantage is that with 40% fewer reasoning tokens, the effective context budget stretches further in multi-turn agentic workloads — less context consumed per turn means more turns before hitting the window.
- **Multimodal: 62/100.** Text and image input supported (inherited from Kimi K3). Specific multimodal benchmark scores not separately published for Ember-1. The base K3 has strong multimodal capabilities, but Ember-1's post-training for token efficiency may affect multimodal reasoning differently. Limited published evidence.
- **Coding: 82/100.** DeepSWE 75.2% is among the highest in the dataset (vs. K3-max 66.4%, +8.8 points). SWE-bench Verified 92.2% is elite. Terminal-Bench 2.1 82.0% is excellent. The coding profile is outstanding — Ember-1 actually IMPROVES coding performance over K3-max while cutting tokens by 15–52% across benchmarks. For agentic coding at scale, this is the most cost-effective high-coding model available.
- **Cost efficiency: 88/100.** $3/$15 per 1M is premium pricing on paper, but effective cost per task is ~40% lower than K3 due to token reduction. In production A/B tests: 29.9K output tokens (vs. K3 49.3K) — 39% total reduction. At K3 pricing ($3/$15), the per-task cost drops from ~$0.74 to ~$0.45. Pareto frontier leader vs. GPT-6 Astra, Claude Opus 5, GLM 5.3 on cost/task. For high-volume agentic coding where reasoning tokens compound across turns, the effective savings are even larger than 40%.
- **Overall Score: 75.2/100.** Mean of five quality dims: (75 + 75 + 82 + 62 + 82) / 5 = 75.2. Ember-1 is Fireworks Research's specialized efficiency model. Key strengths: DeepSWE 75.2% (BETTER than K3-max 66.4%, among highest in dataset), SWE-bench Verified 92.2% (elite, nearly matching K3-max 93.2%), Terminal-Bench 2.1 82.0% (BETTER than K3-max 80.9%), 40% fewer tokens at matching quality, Pareto frontier leader on cost/task across 5+ benchmarks, live A/B validated in production (39% token reduction, matching quality), 1M context with 131K output, Fireworks developers "didn't notice" the switch internally. Key weaknesses: Research Preview status (not permanent), not open weights, $3/$15 pricing (premium — savings come from token reduction, not lower rates), no free tier, multimodal benchmarks not separately published, derived from Kimi K3 (inherits K3's limitations), limited independent verification beyond Fireworks' own evaluations, SWE-Interact 20.0% slightly below K3-max 21.3%. Best fit for: high-volume agentic coding workflows where reasoning tokens compound across turns, teams already using Kimi K3 wanting 40% cost reduction with no quality loss, production coding pipelines needing Pareto-optimal cost/task, enterprises wanting to fine-tune Ember-1 on proprietary data (Fireworks offers training support), and cost-sensitive deployments where effective per-task cost matters more than raw token price. Not ideal for: teams needing permanent model availability (Research Preview status), multimodal-heavy workflows (limited published multimodal benchmarks), tasks where K3's longer reasoning traces are beneficial (Ember-1 optimizes for brevity), or teams wanting open weights for self-hosting.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Fireworks AI official blog, MarkTechPost, OpenRouter, llm-stats, OrcaRouter, LLM Releases, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
