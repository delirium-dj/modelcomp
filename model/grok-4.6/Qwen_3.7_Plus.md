# Grok 4.6 — findings by Qwen 3.7 Plus

- Source: SpaceXAI/Grok-4.6 (`xai/grok-4.6`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** SpaceXAI's flagship frontier model released August 12, 2026, positioned for long-running agents and knowledge work. ~1.5T parameters. AA Intelligence Index 61 ties GPT-5.6 Sol and trails Claude Opus 5 (63) and Claude Fable 5 (62). Dominates knowledge-work benchmarks: GDPVal-AA v2 1753 Elo (highest in comparison set), AA-Briefcase 1577 Elo, Harvey LAB 15.8%. Strong practical coding: SWE-bench Verified 95.6% (4th of 82 models), CursorBench 3.2 70.8% at Extra High (1st place). Weaker on autonomous SWE: DeepSWE v1.1 65.9% (vs. GPT-5.6 Sol 73%), Terminal-Bench v3.0 26%. AA-Omniscience non-hallucination rate 65.7% (34.3% hallucination when uncertain). Remarkably efficient: $0.84/task (vs. GPT-5.6 Sol $1.04), ~53 turns on AA-Briefcase (vs. Claude Opus 5 ~103 turns). Slow: 63.9 tok/s, ~47s to first token at high effort. 4 reasoning effort levels (low/medium/high/xhigh). Text/image input only — no audio or video.
- **Provider / access:** SpaceXAI (xAI acquired by SpaceX, February 2026). console.x.ai, Cursor, Grok Build, OpenRouter, Vercel, Cloudflare. No free tier.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff February 2026.
- **IDs:** `xai/grok-4.6` (xAI API, OpenRouter).
- **Context window:** 500,000 tokens (500K) — half of Claude Fable 5 or GPT-5.6 Sol (1M).
- **Modalities:** Text and image in; text out. No audio or video input.
- **Pricing (as of 2026-10-10):** $2 in / $6 out per 1M tokens (cached $0.50) at <200K prompt; doubles to $4/$12/$1 above 200K prompt. A "fast" variant at 2× price also exists.

### Raw benchmarks found

Agent / tool use:

- τ³-Banking: **50.7%** (AA — top 2 alongside Qwen3.8 Max 51.3%; ~half of customer-service conversations handled well)
- GDPVal-AA v2: **1753 Elo** (xAI/AA — highest in comparison set; vs. GPT-5.6 Sol 1728, Fable 5 Max 1741)
- APEX-Agents: **57.5%** (xAI — vs. GPT-5.6 Sol 56.7%, Fable 5 Max 59.2%; +10.4 pts over Grok 4.5's 47.1%)
- AA-Briefcase: **1577 Elo** (xAI — vs. Fable 5 Max 1574, GPT-5.6 Sol 1502; narrow lead)
- Harvey LAB (Vals): **15.8%** (xAI — vs. Fable 5 Max 11.3%, GPT-5.6 Sol 2.5%; 6× Sol but absolute score low)

Coding:

- SWE-bench Verified: **95.6%** (Vals AI independent re-run — 4th of 82 models; vs. Claude Opus 5 97.0%, Kimi K3 93.4%; Grok 4.5 was 86.6%)
- CursorBench 3.2 (Extra High): **70.8%** (Cursor/AA — 1st place; vs. Fable 5 Max 70.0%, Opus 5 Max 70.0%)
- CursorBench v3.2 (High): **69.9%** (xAI — vs. GPT-5.6 Sol 67.2%, Grok 4.5 66.7%)
- DeepSWE v1.1: **65.9%** (xAI — vs. GPT-5.6 Sol 73%, Fable 5 Max 70%; wide loss; Grok 4.5 was 54%)
- FrontierCode v1.1 (Extended): **61.3%** (xAI — vs. GPT-5.6 Sol 60.6%, Fable 5 Max 63.6%)
- APEX-SWE: **56.4%** (xAI — vs. Fable 5 Max 58.8%; Grok 4.5 was 53.6%)
- AA Coding Index: **76.8** (ominigate.ai/AA)

Multimodal:

- Text and image input supported
- No audio or video input
- No specific vision benchmark scores published separately

Reasoning / knowledge:

- AA Intelligence Index: **61** (AA — ties GPT-5.6 Sol; vs. Claude Opus 5 63, Fable 5 62; +5 over Grok 4.5's 56)
- GPQA Diamond: **94.9%** (AA High effort; OpenRouter reports 93.5% at Xhigh)
- HLE: **42.9%** (ominigate.ai/AA — near dead heat with Qwen3.8 Max 43.0%)
- AA-Omniscience Accuracy: **48.2%** (AA — modest)
- AA-Omniscience Non-hallucination rate: **65.7%** (AA — when uncertain, model declines to guess ~2/3 of the time)

Long context / efficiency:

- Context window: **500K** tokens (half of Fable 5 / GPT-5.6 Sol 1M)
- Cost per AA Intelligence Index task: **$0.84** (AA — vs. GPT-5.6 Sol $1.04)
- AA-Briefcase turns: **~53** (AA — vs. Claude Opus 5 ~103; half the turns)
- AA-Briefcase input tokens: **~0.5B** (AA — vs. Claude Opus 5 ~2B; quarter the tokens)
- Output speed: **63.9 tok/s** (AA — below frontier median)
- Time to first token: **~47s** at high effort (AA — slow for interactive chat)

### Normalized scores (1–100)

- **Tool use: 80/100.** τ³-Banking 50.7% is top-2 but moderate in absolute terms. GDPVal-AA 1753 Elo is highest in comparison set. APEX-Agents 57.5% is strong (+10.4 pts over Grok 4.5). AA-Briefcase 1577 Elo leads Fable 5 Max (1574). Harvey LAB 15.8% is 6× GPT-5.6 Sol but low in absolute terms. The model excels at knowledge-work agentic tasks but is less proven on pure tool-orchestration benchmarks.
- **Reasoning: 72/100.** AA Intelligence Index 61 ties GPT-5.6 Sol — frontier-tier. GPQA Diamond 94.9% is strong (graduate-level science). HLE 42.9% is moderate. AA-Omniscience Accuracy 48.2% is modest. The composite reasoning profile is solid but not leading — the 61 Index trails Opus 5 (63) and Fable 5 (62).
- **Context window: 75/100.** 500K tokens is substantial and covers most production use cases. However, it is half of what Claude Fable 5 or GPT-5.6 Sol carry (both 1M), and a quarter of some Gemini models. The 200K prompt threshold where pricing doubles is a practical limitation for long-horizon work.
- **Multimodal: 50/100.** Text and image input only — no audio or video. No specific vision benchmark scores published. The model is strictly less capable than multimodal leaders that support speech, video, or PDF input. For text-and-image workloads it is adequate; for broader multimodal pipelines it is not suitable.
- **Coding: 75/100.** SWE-bench Verified 95.6% (4th of 82) is excellent. CursorBench 3.2 70.8% at Extra High is 1st place. However, DeepSWE v1.1 65.9% trails GPT-5.6 Sol (73%) by 7 points. Terminal-Bench v3.0 26% is a clear weakness (vs. Claude Opus 5 43.5%). FrontierCode 61.3% and APEX-SWE 56.4% are moderate. The coding profile is split: excellent for in-editor assistance and real-world issue resolution, weaker for autonomous terminal and repo-scale SWE.
- **Cost efficiency: 78/100.** $0.84/task on AA Intelligence Index undercuts GPT-5.6 Sol ($1.04). Turn efficiency is remarkable: ~53 turns on AA-Briefcase vs. Claude Opus 5's ~103, with quarter the input tokens. However, list pricing at $2/$6 per 1M is premium-tier, and the pricing doubles above 200K prompt. The model also generates more output tokens than average per task and is slow (63.9 tok/s), which increases wall-clock cost for latency-sensitive workloads.
- **Overall Score: 70.4/100.** Mean of five quality dims: (80 + 72 + 75 + 50 + 75) / 5 = 70.4. Grok 4.6 is SpaceXAI's knowledge-work specialist that was marketed as a coding model. Key strengths: GDPVal-AA 1753 Elo (highest in class), AA-Briefcase 1577 Elo (1st), CursorBench 3.2 70.8% (1st at Extra High), SWE-bench Verified 95.6% (4th of 82), AA Intelligence Index 61 (ties GPT-5.6 Sol), remarkable turn efficiency (53 vs. 103 turns on AA-Briefcase), $0.84/task (undercuts Sol), +5 Intelligence Index points over Grok 4.5 in five weeks (genuine generational step). Key weaknesses: DeepSWE v1.1 65.9% (trails Sol by 7 pts), Terminal-Bench v3.0 26% (trails Opus 5 by 17.5 pts), AA-Omniscience non-hallucination 65.7% (34.3% hallucination rate when uncertain), no audio/video input, 500K context (half of rivals), slow at 63.9 tok/s with ~47s to first token, pricing doubles above 200K prompt. Best fit for: long research and analysis tasks (GDPVal-AA, AA-Briefcase leaders), in-editor coding assistance (CursorBench 1st), knowledge-work agentic pipelines where turn efficiency matters, teams already in the xAI/Cursor ecosystem. Not ideal for: autonomous software engineering (DeepSWE lags Sol), terminal-heavy workflows (Terminal-Bench v3.0 is weak), latency-sensitive interactive chat (slow), multimodal pipelines needing audio/video, long-document work exceeding 500K.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across SpaceXAI/xAI official blog, Artificial Analysis, Unifically, emergent.sh, ominigate.ai, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
