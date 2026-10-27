# Muse Wonder Full — findings by Gemini 3.8 Flash

- Source: Meta (`meta/muse-wonder-full-1.0`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's frontier heavy-compute reasoning foundation model engineered for long-running autonomous agents, active focus, multi-file software engineering, and complex multi-modal domain tasks across a native 1-million-token context window.
- **Provider / access:** Meta AI, Meta Superintelligence Labs, Muse Code subscription tiers (Power/Maximum plans), Meta Model API.
- **Release / knowledge:** October 2026 release; proprietary commercial license; knowledge cutoff Q3 2026.
- **IDs:** `meta/muse-wonder-full-1.0`, `opencode/muse-wonder-full`
- **Context window:** 1,000,000 tokens total (1M context window; up to 64K max output tokens).
- **Modalities:** Multimodal text, high-resolution images, audio, and video input; text, code, structured JSON output.
- **Pricing (as of 2026-10-28):** Tiered subscription pricing via Muse Code / Meta Enterprise compute allocation.
- **Architecture:** Frontier multimodal mixture-of-experts/dense hybrid optimized for deep test-time compute, active memory, and long-horizon agentic task completion under maximum reasoning effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **57.1%**
- Finance Agent Benchmark: **59.1%**
- Core Agentic Aggregated Evaluation: **85.6%**
- AskClash Leaderboard Composite: **70.7** (Tier-1 placement)

Reasoning / knowledge:

- HLE (Human-Level Evaluations): **53.6%**
- Complex multi-step reasoning under max effort: competitive with Claude Opus 5.5 (~81.5%) and GPT-6 Astra (~81.4%).

Coding:

- DeepSWE: **79.0%**
- Multi-file software engineering and long-horizon repository refactoring.

Long context / vision:

- 1M token context window with high recall and active focus over complex legal, financial, and technical document corpora.
- Native video, audio, image, and document visual perception.

### Normalized scores (1–100)

- **Tool use: 86/100.** Exceptional autonomous agent performance evidenced by 57.1% on Terminal-Bench, 59.1% on Finance Agent, and 85.6% on Meta's aggregated agentic evaluations.
- **Reasoning: 89/100.** Top-tier test-time reasoning and domain intelligence backed by 53.6% on Human-Level Evaluations (HLE) and high-level competitive performance alongside contemporary frontier models.
- **Context window: 92/100.** Expansive 1M token active context window capable of sustaining multi-turn focus and long-running autonomous workflows.
- **Multimodal: 84/100.** Broad multimodal architecture supporting native audio, video, image, and document comprehension.
- **Coding: 84/100.** Elite long-horizon software engineering validated by 79.0% on DeepSWE and strong terminal-based repository modification capabilities.
- **Cost efficiency: 62/100.** Heavy frontier compute model restricted to premium subscriptions (Muse Code Power/Maximum) and enterprise API allocations.
- **Overall Score: 87/100.** Arithmetic mean of five quality dimensions: (86 + 89 + 92 + 84 + 84) / 5 = 87.0 → 87. Meta's premier flagship agentic model demonstrating high resilience, massive context retention, and state-of-the-art software engineering capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-28
- Method: Public documentation, Meta release benchmarks, independent leaderboard evaluations (AskClash, DeepSWE, Terminal-Bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
