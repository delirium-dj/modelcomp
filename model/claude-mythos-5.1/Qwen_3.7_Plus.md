# Claude Mythos 5.1 — findings by Qwen 3.7 Plus

- Source: Anthropic/Claude Mythos 5.1 (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's restricted configuration of Claude Fable 5.1 with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users. Same underlying model weights as Fable 5.1 but with reduced safeguards, enabling exploit development and advanced cyber-offense capabilities. Available only through Project Glasswing (Cyber Verification Program or Life Sciences Verification Program).
- **Provider / access:** Claude API (`claude-mythos-5-1`); vetted access only through Project Glasswing. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-09-01/02 release (same announcement as Fable 5.1); knowledge cutoff not precisely documented.
- **IDs:** `anthropic/claude-mythos-5-1` (Claude API, vetted access only). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output.
- **Modalities:** Text and image in; text out. Reasoning yes (adaptive thinking with effort levels). Tool calls supported. Computer use supported.
- **Pricing (as of 2026-10-10):** $10 in / $50 out / $0.25 cached (2.5% multiplier — 75% cut from Fable 5) per 1M tokens. Batch: $5/$25. Same as Fable 5.1. ~25% cheaper for typical workloads vs Fable 5 due to cache savings; up to ~45% for highly agentic work.
- **Architecture:** Proprietary; same weights as Claude Fable 5.1 with different safety calibration.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic system card; vs Fable 5.1's 55.8%, Fable 5's 42.0%)
- Terminal-Bench-Science 0.1: same as Fable 5.1 — **52.6%** (same weights)
- AutomationBench-AA: **31.4%** (same as Fable 5.1)
- GDPval-AA v2.1: **1853 Elo** (same as Fable 5.1; large jump from Fable 5's 1723)
- OSWorld 2.0 (partial): **77.9%** (same as Fable 5.1; vs Fable 5's 72.9%)
- OSWorld 2.0 (strict): **41.7%** (same as Fable 5.1)

Reasoning / knowledge:

- Humanity's Last Exam (no tools): **60.9%** (same as Fable 5.1)
- Humanity's Last Exam (with tools): **65.0%** (same as Fable 5.1)
- GPQA Diamond: **91.7%** (same weights as Fable 5.1)
- Intelligence Index (AA): **53** (same as Fable 5.1; ties for #1)

Coding:

- CursorBench 3.2.0: **73.4%** at max effort (same as Fable 5.1; independently confirmed by Cursor as their best-scoring model)
- Terminal-Bench 4.0: **60.9%** (Anthropic; highest among Fable/Mythos variants)
- SWE-bench Pro: **81.2%** (same as Fable 5.1)
- SWE-bench Multilingual: **89.1%** (same as Fable 5.1)
- FrontierCode v1.1: **50.3%** (same as Fable 5.1)
- Coding Agent Index (AA): **62** (same as Fable 5.1; ties for #1)

Long context:

- No specific MRCR or long-context retrieval scores published

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 4.0 at 60.9% is the highest among Fable/Mythos variants (5 points above Fable 5.1). OSWorld 2.0 at 77.9% partial is excellent. GDPval-AA 1853 Elo is strong. AutomationBench 31.4% is moderate. The reduced safeguards appear to improve Terminal-Bench performance. Capped by the moderate AutomationBench score.
- **Reasoning: 91/100.** HLE 65.0% with tools is strong. GPQA Diamond 91.7% is outstanding. Intelligence Index 53 ties for #1. Same reasoning capability as Fable 5.1 (identical weights). Capped by slightly lower HLE compared to Opus 5.5 (67.7%).
- **Context window: 88/100.** 1M-token context with 128K max output. Standard frontier-class window. 75% cache-read cut helps with repeated context in agentic sessions. No specific MRCR retrieval scores. Solid but not best-in-class.
- **Multimodal: 62/100.** Text and image in; text out. No audio, video, or PDF input. OSWorld 2.0 at 77.9% demonstrates computer use. Capped by limited input modalities compared to Gemini models.
- **Coding: 93/100.** CursorBench 73.4% is independently confirmed as the best-scoring model on Cursor's leaderboard. Terminal-Bench 4.0 at 60.9% is the highest among Fable/Mythos variants. SWE-bench Pro 81.2% and Coding Agent Index 62 (ties for #1) are excellent. The coding performance is top-tier. Capped only by being surpassed by Opus 5.5 on SWE-bench Pro (89.9%).
- **Cost efficiency: 48/100.** $10/$50 per 1M tokens is the most expensive tier. However, the 75% cache-read cut ($0.25/M) makes agentic workloads ~25-45% cheaper than Fable 5 in practice. Still premium pricing. Vetted-access-only limits practical cost optimization.
- **Overall Score: 85/100.** Mean of five quality dims: (89 + 91 + 88 + 62 + 93) / 5 = 84.6, rounded to 85. A top-tier model with the highest Terminal-Bench 4.0 score among Fable/Mythos variants (60.9%), best CursorBench score (73.4%), and excellent coding/reasoning. Same weights as Fable 5.1 but with reduced safeguards enabling advanced cyber capabilities. Best fit for vetted cybersecurity and life-sciences users who need reduced safeguards. The premium pricing and restricted access are significant limitations.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Anthropic system card, explainx.ai, Cursor, Artificial Analysis, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
