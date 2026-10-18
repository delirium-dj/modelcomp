# Fledge Alpha — findings by LongCat 2.5 Preview

- Source: Unknown (stealth model; strong evidence points to Thinking Machines Lab)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** A free-tier stealth preview model that appeared in OpenCode Zen on October 1, 2026, with no official vendor announcement. Strong evidence (effort dial mapping, Tinker reference in public PR, context window match) suggests it is a Thinking Machines Lab Inkling-family checkpoint. Closed weights.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free` (only availability; no longer listed as of 2026-10-11). Not on OpenRouter, Cline, or other harnesses. No Zen Free ID.
- **Release / knowledge:** Released 2026-10-01; no official knowledge cutoff disclosed.
- **IDs:** `opencode/fledge-alpha-free` (no Free ID on Zen; free preview)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens.
- **Modalities:** Text + image input → text output; tool calls; reasoning (always-on, 3 effort levels: low=0.2, high=0.9, max=0.99).
- **Pricing (as of 2026-10-18):** Free during preview period ($0.00/$0.00 per MTok). Data may be used to improve the model (not zero-retention).
- **Architecture:** Closed weights; suspected to be Thinking Machines Lab Inkling-family (975B MoE architecture with effort dial matching Inkling's presets exactly).

### Raw benchmarks found

Agent / tool use:

- Coding tasks (Fellipe Soares): **15/15 solved** (OpenCode, 5 bug-fix tasks, median $0.00560/task)
- Tool calls: **13 median** per task (Fellipe Soares)
- No verified MCP-Atlas / Toolathlon / SWE-bench score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Stealth Models, 36/39 correct, 95% CI: 79.7-97.3%)
- MMLU-Pro: **92.0%** (Stealth Models, 92/100, 95% CI: 85.0-95.9%)
- HLE: **25.4%** (Stealth Models, 17/67, 95% CI: 16.5-36.9%)
- Math/logic (Mikl on X): **10/10** correct
- Python checks (Mikl on X): **61/61** passed
- Haystack retrieval (Mikl on X): **12/12** hidden keys found

Coding:

- StealthMark: **45.2/100** (vs GPT-5.5 at 40.8)
- Fellipe Soares battery: **15/15** (5 tasks × 3 runs each)
- No SWE-bench Verified / Terminal-Bench / LiveCodeBench score found

Long context:

- 1M token context window; haystack retrieval passed at ~368K tokens

### Normalized scores (1–100)

- **Tool use: 72/100.** 15/15 coding tasks solved with 13 tool calls per task. Capped by absence of standardized agentic benchmarks (MCP-Atlas, Toolathlon).
- **Reasoning: 78/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% are strong; HLE 25.4% is moderate. Capped by limited independent reasoning evaluation.
- **Context window: 95/100.** 1M tokens matches frontier models. Haystack retrieval confirmed at ~368K tokens.
- **Multimodal: 68/100.** Text + image input → text output. No audio/video input. Capped by limited vision benchmark data.
- **Coding: 72/100.** 15/15 on Fellipe Soares' battery is impressive but small-sample; StealthMark 45.2/100. Capped by absence of SWE-bench / Terminal-Bench / LiveCodeBench.
- **Cost efficiency: 100/100.** Free during preview period — maximum possible score. Data-usage caveat applies.
- **Overall Score: 77/100.** Mean of (72+78+95+68+72)/5 = 77. A promising free-tier stealth model with strong GPQA/MMLU-Pro scores and perfect coding task completion in limited testing. Best for evaluation and experimentation during the preview period. Scores are provisional — the model's identity, availability, and capabilities may change without notice.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (Stealth Models, Fellipe Soares, Bruno Vega/Youtube, Mikl on X, OpenCode Data, OpenVibeEval, AnyRouter, LLM List, TypingMind); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
