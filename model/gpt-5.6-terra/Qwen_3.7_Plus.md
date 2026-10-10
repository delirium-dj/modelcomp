# GPT-5.6 Terra — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.6 Terra (`openai/gpt-5.6-terra`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's mid-tier model in the GPT-5.6 family (Sol/Terra/Luna), released July 9, 2026. Positioned as the cheaper lane for scoped implementation and first-pass review. Scores 55 on the AA Intelligence Index (max effort) and 77 on the AA Coding Agent Index (max), with ~60% per-task cost reduction vs. Sol. Priced at $2.50/$15 per 1M tokens — half of Sol. Best fit for bounded coding tasks, first-pass review triage, and workflows with escalation to Sol available. Not on the Intelligence-vs-cost Pareto frontier (Luna and Sol dominate it at every effort level).
- **Provider / access:** OpenAI API (`gpt-5.6-terra`); ChatGPT Plus, Pro, Business, Enterprise; Codex. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-07-09 release (GPT-5.6 family); knowledge cutoff not precisely documented.
- **IDs:** `openai/gpt-5.6-terra` (OpenAI API). No free OpenCode Zen ID.
- **Context window:** 1,048,576 tokens (1M) total; 128,000 max output.
- **Modalities:** Text, image, audio, video, and PDF in; text out. Full omnimodal input support. Reasoning yes (extended thinking; effort levels: low/medium/high/xhigh/max — max is new in GPT-5.6). Tool calls supported.
- **Pricing (as of 2026-10-10):** $2.50 in / $15 out per 1M tokens. Cache reads: 90% off ($0.25/M). Cache writes: 1.25× input ($3.125/M) — first OpenAI model with cache-write pricing. Price reduced 20% on July 30, 2026. Half the price of Sol ($5/$30).
- **Architecture:** Proprietary; part of GPT-5.6 family (Sol/Terra/Luna tiers). Parameter count not disclosed. Terra is the mid-tier between flagship Sol and budget Luna.

### Raw benchmarks found

Agent / tool use:

- AA Coding Agent Index (max): **77** (Artificial Analysis; vs Sol's 80, Luna's 75; ~60% per-task cost reduction vs. Sol)
- Terminal-Bench 2.1: **87.4%** (CodingFleet; vs Gemini 3.6 Flash's lower score)
- DeepSWE: **69.6%** (CodingFleet; vs Gemini 3.6 Flash's 49.0% — 20.6 pt gap)
- CodeRabbit review pass rate: **52.5%** (53 of 101; vs Sol's 69.7%)
- CodeRabbit precision: **35.7%** (vs Sol's 31.6%)

Reasoning / knowledge:

- AA Intelligence Index (max): **55** (Artificial Analysis; vs Sol's 59, Luna's 51; same as Gemini 3.5 Flash high)
- AA Intelligence Index (high): **34** (Artificial Analysis; vs GPT-5.5 high's 37)
- AA Intelligence Index (medium): **30** (Artificial Analysis; vs GPT-5.4 xhigh's 39)

Coding:

- Long-horizon coding run (100+ tasks): **40.7% pass rate** (CodeRabbit; vs Sol's 63.7%; Terra used 55,594 output tokens/task vs Sol's 20,968)
- Terminal-Bench 2.1: **87.4%** (also listed under tool use)
- DeepSWE: **69.6%** (also listed under tool use)
- CodeRabbit Logic Error: **60.6%** (20 of 33)

Long context:

- Context window: 1M tokens (same as Sol and Luna)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 87.4% is strong. DeepSWE 69.6% is competitive with frontier models. AA Coding Agent Index 77 (max) is solid. However, CodeRabbit review pass rate 52.5% is below Sol (69.7%) and trails the baseline by 8.6 pts. Strong terminal/coding agent but weaker on review/triage tasks.
- **Reasoning: 84/100.** AA Intelligence Index 55 (max) matches Gemini 3.5 Flash (high) but trails Sol (59) and Claude Fable 5. At high effort (34), it trails GPT-5.5 high (37). At medium effort (30), it trails GPT-5.4 xhigh (39). The reasoning performance is solid but not leading — Terra is optimized for cost efficiency over raw intelligence. Not on the Pareto frontier (Luna and Sol dominate at every effort level).
- **Context window: 86/100.** 1M-token context with 128K max output. Same window as Sol. Standard frontier-class. Cache-write pricing (1.25× input) is new for OpenAI and reflects actual serving costs. Cache reads at 90% off help with repeated context in agentic loops.
- **Multimodal: 85/100.** Text, image, audio, video, AND PDF input — full omnimodal support. This is a significant advantage over text+image-only competitors. Text output only. The multimodal capabilities match the GPT-5.6 family's unified architecture.
- **Coding: 88/100.** Terminal-Bench 2.1 at 87.4% is strong. DeepSWE 69.6% leads Gemini 3.6 Flash (49.0%) by 20.6 pts. However, the long-horizon coding run shows only 40.7% pass rate (vs Sol's 63.7%) with 2.65× more output tokens per task (55,594 vs 20,968). CodeRabbit review finds 52.5% of issues. Terra is capable for scoped coding but less effective than Sol on long-horizon tasks — it uses more tokens and solves fewer.
- **Cost efficiency: 89/100.** $2.50/$15 per 1M tokens is half of Sol. ~60% per-task cost reduction vs. Sol on the AA Coding Agent Index. Cache reads at 90% off. However, on long coding runs, Terra uses 2.65× more output tokens than Sol (55,594 vs 20,968), which partially offsets the per-token savings. CodeRabbit notes "cheaper tokens do not always mean cheaper solved tasks." For bounded/scoped work, Terra is very cost-efficient. For long-horizon tasks, Sol may be cheaper per solved task despite higher per-token pricing.
- **Overall Score: 86.2/100.** Mean of five quality dims: (88 + 84 + 86 + 85 + 88) / 5 = 86.2. A solid mid-tier coding model that offers ~60% cost savings vs. Sol on the AA Coding Agent Index while retaining strong Terminal-Bench (87.4%) and DeepSWE (69.6%) performance. Best fit for scoped implementation, first-pass review triage, and bounded coding tasks where escalation to Sol is available. Key weakness: not on the Intelligence-vs-cost Pareto frontier (Luna and Sol dominate at every effort level), and long-horizon coding runs use 2.65× more tokens than Sol, reducing effective savings. Full omnimodal input (text/image/audio/video/PDF) is a differentiator. Successor models (GPT-6 family) have since surpassed it.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcements, Artificial Analysis, CodeRabbit, CodingFleet, O-mega, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
