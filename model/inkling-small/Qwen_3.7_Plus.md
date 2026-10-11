# Inkling Small — findings by Qwen 3.7 Plus

- Source: Thinking Machines Lab/Inkling-Small (`opencode/inkling-small`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's smaller open-weight hybrid-reasoning model (sibling of Inkling), released July 30, 2026. 276B total parameters with 12B active MoE — less than one-third of flagship Inkling's 975B/41B. AA Intelligence Index 40 is within 1 point of Inkling (41) — no open-weights model at its size or smaller scores higher. GPQA Diamond 89% is strong. HLE 32% is modest. Terminal-Bench 2.1 55% is moderate. SciCode 49% is moderate. CritPt 8% is low. AA-Omniscience Index -9 is negative (incorrect answers outweigh correct). AA-Omniscience Hallucination Rate 57% is high. Agentic tasks are weak: τ³-Banking 15% is very low. Apache 2.0 open weights. Text/image/speech input. 256K context (vs. Inkling's 1M). Token-efficient: ~24K output tokens per AA Intelligence Index task (vs. DeepSeek V4 Flash ~45K, GPT-5.4 mini ~78K).
- **Provider / access:** Thinking Machines Lab Tinker platform; OpenCode Zen. Open weights under Apache 2.0 license: `thinkingmachines/inkling-small` (Hugging Face).
- **Release / knowledge:** Released 2026-07-30; knowledge cutoff not precisely documented.
- **IDs:** `opencode/inkling-small` (OpenCode Zen); `thinkingmachines/inkling-small` (OpenRouter).
- **Context window:** 256,000 tokens (256K) — smaller than flagship Inkling's 1M.
- **Modalities:** Text, image, audio in; text out. Multimodal including speech input.
- **Pricing (as of 2026-10-10):** Open weights (Apache 2.0) — free self-hosting. API pricing varies by provider.

### Raw benchmarks found

Agent / tool use:

- τ³-Banking: **15%** (AA — very low; vs. Inkling 24%)
- Terminal-Bench 2.1: **55%** (Thinking Machines — moderate; same as Inkling)
- GDPval-AA v2 Elo: **1269** (AA; vs. Inkling 1237)
- AA-Briefcase Elo: **917** (AA — vs. Inkling 839; better presentation)
- AA Agentic Index: **30.8** (fello.ai — low)
- Design Arena Website: strong among open-weights (from Inkling family benchmarks)

Coding:

- Terminal-Bench 2.1: **55%** (Thinking Machines; same as Inkling)
- SciCode: **49%** (Thinking Machines — vs. Inkling 46%, better)
- Inkling-Small beats full Inkling on every shared coding benchmark (sanj.dev)

Multimodal:

- Text, image, and speech input supported
- Specific multimodal benchmark scores not separately published for Small

Reasoning / knowledge:

- AA Intelligence Index: **40** (AA — within 1 point of Inkling's 41; HIGHEST for open-weights at this size)
- GPQA Diamond: **89%** (Thinking Machines — strong; vs. Inkling 87%)
- HLE: **32%** (Thinking Machines — modest; vs. Inkling 30%)
- CritPt: **8%** (Thinking Machines — low; vs. Inkling 5%)
- AA-Omniscience Index: **-9** (AA — negative; vs. Inkling +2)
- AA-Omniscience Accuracy: **31%** (AA — low; vs. Inkling 40%)
- AA-Omniscience Hallucination Rate: **57%** (AA — high; vs. Inkling 63%, slightly better)
- AA-Briefcase: **917 Elo** (AA — vs. Inkling 839; better presentation, fewer turns: 34 vs. 81)

### Normalized scores (1–100)

- **Tool use: 35/100.** τ³-Banking 15% is very low. AA Agentic Index 30.8 is low. Terminal-Bench 2.1 55% is moderate. GDPval-AA Elo 1269 is modest. AA-Briefcase 917 Elo is moderate. The agentic profile is the model's weakest dimension — significantly trails Inkling on τ³-Banking (15% vs. 24%). The model is not optimized for agentic tool use.
- **Reasoning: 52/100.** AA Intelligence Index 40 is modest — but the highest for any open-weights model at this size (276B/12B-A). GPQA Diamond 89% is strong. HLE 32% is modest. CritPt 8% is low. AA-Omniscience Index -9 is negative. The reasoning profile is solid for its size class but weak in absolute terms.
- **Context window: 55/100.** 256K tokens — smaller than flagship Inkling's 1M and many competitors. Adequate for most tasks but limiting for long-document or long-horizon agentic work. The smaller context may be a deliberate trade-off for the reduced parameter count.
- **Multimodal: 55/100.** Text, image, and speech input supported — broader input modality than most models (speech is rare). However, specific multimodal benchmark scores are not separately published for the Small variant. The Inkling family emphasizes multimodal breadth, but unverified performance is a concern.
- **Coding: 52/100.** Terminal-Bench 2.1 55% is moderate. SciCode 49% is moderate. Inkling Small beats full Inkling on every shared coding benchmark. However, the absolute scores are moderate for a model in this Overall range. The coding profile is adequate for a smaller open-weights model but trails frontier models.
- **Cost efficiency: 92/100.** Apache 2.0 open weights — free self-hosting. Token-efficient: ~24K output tokens per AA Intelligence Index task (vs. peers at 45–78K). Running the full Intelligence Index took roughly the same output tokens as Inkling despite one-third the parameters. For cost-sensitive deployments wanting open weights, this is among the most efficient models at its intelligence level.
- **Overall Score: 49.8/100.** Mean of five quality dims: (35 + 52 + 55 + 55 + 52) / 5 = 49.8. Inkling Small is Thinking Machines Lab's efficient open-weights model. Key strengths: AA Intelligence Index 40 (HIGHEST open-weights at 276B/12B-A), GPQA Diamond 89% (strong), beats full Inkling on coding benchmarks (SciCode 49% vs. 46%, HLE 32% vs. 30%, CritPt 8% vs. 5%), Apache 2.0 open weights, token-efficient (~24K/task vs. peers 45–78K), multimodal input (text/image/speech), ~256K context. Key weaknesses: τ³-Banking 15% (very low), AA-Omniscience Index -9 (negative), AA-Omniscience Hallucination Rate 57% (high), AA Agentic Index 30.8 (low), 256K context (smaller than flagship), Terminal-Bench 55% (moderate), agentic tasks significantly weaker than Inkling, limited multimodal benchmarks published. Best fit for: teams wanting Apache 2.0 open weights for self-hosting and fine-tuning, cost-sensitive deployments needing a balanced generalist at minimal cost, developers wanting a smaller model for customization (276B/12B is accessible), tasks where token efficiency matters (24K/task), and multimodal applications needing speech input. Not ideal for: agentic workflows (very weak tool use), knowledge-intensive tasks (negative Omniscience), long-context work (only 256K), or teams needing frontier-class coding performance.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Thinking Machines Lab official blog, Artificial Analysis, LinkedIn, sanj.dev, fello.ai, llm-stats, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
