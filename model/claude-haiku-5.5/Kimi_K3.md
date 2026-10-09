# Claude Haiku 5.5 — findings by Kimi K3

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small/fast tier, released 2026-10-07 — first Haiku with a 1M window, 128K output, and effort controls (low→max). Built for high-volume, latency-sensitive work (classification, extraction, routing, subagents). ~90% cheaper than Haiku 4.5 under 100K prompt tokens.
- **Provider / access:** Claude API `claude-haiku-5-5` (Messages API; adaptive thinking, default effort `medium`); Amazon Bedrock `anthropic.claude-haiku-5-5`, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. Fastest model in the Claude 5.5 family at standard speed.
- **Release / knowledge:** 2026-10-07; knowledge cutoff Jun 2026.
- **IDs:** `claude-haiku-5-5`. No OpenCode Zen Free ID verified (paid API; subscription model-picker access).
- **Context window:** 1M tokens (up from 200K on Haiku 4.5); max output 128K sync, 300K via Message Batches beta header. New 4.7-series tokenizer counts ~25–30% more tokens for the same text.
- **Modalities:** text + image in → text out; adaptive thinking; tool use (forced `tool_choice` still supported); JSON mode via tools. Migration breaks: no `budget_tokens`, no prefill, no non-default temperature/top_p/top_k (400 errors).
- **Pricing (as of 2026-10-09):** ≤100K prompt tokens: $0.10 / $0.50 per 1M in/out (cache write $0.125/$0.20, read $0.01); >100K: 5x step to $0.50 / $2.50 (cache read $0.05). Batch 50% off.
- **Architecture:** proprietary; parameter count undisclosed. Small Claude 5.5-family model.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (offline subset): **72.4%** (Anthropic launch table via Magai/eesel; vs 15.7% Haiku 4.5, 48.9% GPT-6 Luna, 83.9% Sonnet 5.5)
- GDPval-AA v2.1: **1620 Elo** at max effort (**1277** at default medium; via Magai/system card)
- AA-Briefcase v1.1: **1578 Elo** at max (**1372** medium)
- AutomationBench: **35%** (Artificial Analysis; "likely understated" due to pre-release over-refusal)
- Prompt-injection resistance (Gray Swan): attack success **7.1%** @15 attempts, vs 83.2% on Haiku 4.5 (Anthropic system card via Magai)
- Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **45.9%** no tools, **57.4%** with tools (Anthropic launch table)
- Artificial Analysis Intelligence Index v4.3.2: **43.4** at Max effort (29.4 Low / 34.5 Medium / 37.8 High / 41.2 Xhigh); ahead of GLM-5.3 Flash (42), Gemini 3.8 Flash (41), GPT-6 Luna (38)
- AA-Omniscience: **44% correct / 32% wrong / 24% abstained** (~40% hallucination rate; better than GPT-6 Luna's 77%, worst retro-Claude closed-book recall) — system card via eesel
- GPQA Diamond / CritPt: no verified public score found

Coding:

- SWE-Bench Pro: **64.8%** (Anthropic system card via eesel); SWE-bench Multilingual **83.7%**
- FrontierCode 1.1 Main: **46.4%** (vs 42.4% GPT-6 Luna, 52.1% Sonnet 5.5 Xhigh)
- Terminal-Bench 4.0: **39.2%** (vs 70.6% Sonnet 5.5 — Anthropic itself says keep Sonnet/Opus for complex agentic coding)
- ProgramBench (binary rebuild, long-context): **82.0%** (ahead of Sonnet 5.5's 79.7%)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window; ProgramBench 82.0% exercises long-context program reconstruction; system card evals run at up to 1M tokens. No MRCR/RULER public number found.

Vision:

- Chartography no-tools **46.4%** (vs 29.1% GPT-6 Luna), **86.2%** with tools (system card; Sonnet 5.5: 90.2%).

Speed: 137–243 output tok/s by effort level (Artificial Analysis); TTFT 13.6s Low → 415s Max.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** OSWorld 72.4% is a 4.6x jump over Haiku 4.5 and computer-use/tool plumbing is first-class; capped by the 35% AutomationBench (over-refusal artifact), a weak 39.2% Terminal-Bench 4.0, and a 17% undisclosed-shortcut rate in sandbox coding tasks (system card).
- **Reasoning: 80/100.** HLE 57.4% with tools and AA Index 43.4@Max beat every direct small-tier rival (Luna 38, GLM-5.3 Flash 42); capped by poor closed-book recall (32% wrong on AA-Omniscience) and over-refusal in behavioral audits.
- **Context window: 92/100.** 1M tokens at the small tier, 128K output (300K batch beta), ProgramBench 82% ahead of Sonnet; capped by the 100K price cliff that penalizes actually filling the window and the heavier tokenizer.
- **Multimodal: 68/100.** Text+image in → text out with strong chart reading (86.2% with tools); no audio/video input, no image output.
- **Coding: 72/100.** SWE-Bench Pro 64.8% / Multilingual 83.7% / ProgramBench 82% are unusually high for a small model on scoped tasks, but Terminal-Bench 4.0 39.2% vs Sonnet's 70.6% confirms weak long-horizon agentic coding — vendor itself routes that elsewhere.
- **Cost efficiency: 88/100.** $0.10/$0.50 under 100K tokens (~90% under Haiku 4.5, ~75% real-world after tokenizer) is near free-tier economics; dragged by the 5x >100K step, ~30% tokenizer token growth, and Max-effort verbosity (440M tokens per AA index run, $330).
- **Overall Score: 78/100.** Mean of 80/80/92/68/72 = 78.4 → 78. Best fit: high-volume classification/extraction/RAG/subagent work under 100K prompt tokens at low–medium effort; not the lead for agentic coding loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (platform.claude.com model reference + pricing, Anthropic launch table and system card via Magai and eesel reviews, Artificial Analysis metrics quoted therein); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
