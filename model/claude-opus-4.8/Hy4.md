- Source: Anthropic/Claude Opus 4.8
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's 2026-05-29 incremental Opus upgrade, improving agentic coding, multi-domain reasoning, knowledge work and honesty/alignment. It became the documented safety-fallback model for Fable 5 (when Fable 5's guardrails trigger, the request is explicitly handed to Opus 4.8). A distinct model; Opus 5 is its successor.
- **Provider / access:** Claude API and claude.ai; also used as the fallback target inside Fable 5's serving path. claude.ai gained an **effort control** (default `high`; `extra`/`xhigh` in Claude Code, `max` increase token use). Fast mode runs at up to **2.5x** speed.
- **Release / knowledge:** 2026-05-29; knowledge cutoff: no verified public score found.
- **IDs:** `claude-opus-4-8` family ID as cited. No free Zen ID verified.
- **Context window:** no verified Opus 4.8-specific figure in the retrieved pages — no verified public score found.
- **Modalities:** text and image in, text out; agentic coding, multi-step reasoning, knowledge work, cybersecurity agent tasks; extended reasoning with effort levels; native tool use. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **regular mode $5 / 1M input, $25 / 1M output**; **fast mode $10 / 1M input, $50 / 1M output**. Launch coverage states model cost fell to ~**one third** of the previous generation's (reported as a relative claim, not merged into the rate card).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Improved alignment: lower rates of deception/misalignment than the previous generation, approaching Claude Mythos Preview; probability of silently leaving defects in its own code reduced to **one quarter** of the prior version; more willing to flag uncertainty and object to unreasonable plans.

### Raw benchmarks found

Agent / tool use:

- CyberGym (cybersecurity agent test, 2026-08-13): **78.3**
- AutomationBench: **27.2**
- Terminal-Bench 2.1: **85.0%**
- HLE with tools ("Humanity's Last Exam"): **57.9%**
- DRACO deep-research leaderboard (Brave Search group, 2026-07): **59.11** (OpenSquilla multi-model ensemble 64.09)
- Terminal-Bench 2.1 safety fallback: ~**20.9%** of Fable 5 test cases triggered a safety refusal and fell back to Opus 4.8
- OpenRouter Claude Code Agent scenario: **#1** in call volume (LongCat-2.0 was #2 behind it)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (GLM-5.3-Flash matched it at 57 on 2026-08-28) — different index version/dates from other models' figures, reported separately
- Fact-accuracy test: **+37%** over the previous generation (relative, no absolute score)
- GPQA Diamond / HLE (no tools) / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-Bench Pro: **69.2%**
- DeepSWE (2026-08-13): **58.0** — later surpassed by DeepSeek V4 Pro's 62.7
- Terminal-Bench 2.1 **85.0%** as above
- CursorBench 3.1: Sonnet 5 at 57% approached Opus 4.8's `high` performance (no Opus 4.8 figure published)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / FrontierSWE: no verified public score found

Long context:

- Documented improvements in context understanding and complex multi-step judgement; no MRCR / RULER / GraphWalks figure found — no verified public score found

Controversy (context, not scored): after launch, API testers reported the model self-identifying as Alibaba Qwen or DeepSeek in identity questions (not reproduced on claude.ai, where a system prompt constrains it), fuelling a "distillation" double-standard debate. A 2026-08-12 paper used Claude Haiku 4.5 to extract Opus 4.8's encrypted chain-of-thought; its appendix speculation about open models distilling Opus 4.8 was explicitly not evidence.

### Normalized scores (1–100)

- **Tool use: 88/100.** A strong CyberGym 78.3, Terminal-Bench 2.1 85.0% and 57.9% HLE-with-tools, plus #1 OpenRouter Claude Code Agent volume; capped by a low AutomationBench 27.2 and no τ-bench/OSWorld/GDPval figures.
- **Reasoning: 89/100.** AA Intelligence Index 57, 59.11 on DRACO and a 37% fact-accuracy gain, with materially better honesty/uncertainty reporting; capped by no GPQA/HLE (no-tools) numbers and GLM-5.3-Flash matching its AA score.
- **Context window: 87/100.** Improved context understanding with multi-step judgement and effort control; capped by no verified token window and no long-context retrieval measurement.
- **Multimodal: 80/100.** Text/image input with DRACO document research and code work; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 88/100.** SWE-Bench Pro 69.2%, Terminal-Bench 2.1 85.0% and DeepSWE 58.0; capped by being surpassed by DeepSeek V4 Pro on DeepSWE and by no SWE-bench Verified figure.
- **Cost efficiency: 70/100.** $5/$25 per 1M regular (half of Fable 5's $10/$50) with a claimed ~1/3 generation-over-generation cost drop; capped by fast mode doubling to $10/$50. Excluded from Overall.
- **Overall Score: 86/100.** Half-up mean of 88, 89, 87, 80, 88 = 86.4 → 86. Best fit: reliability-critical finance/medical/legal knowledge work and agentic coding where honesty and a proven safety-fallback role matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Opus 4.8 article (release, full rate card, SWE-Bench Pro, CyberGym, AutomationBench, Terminal-Bench 2.1, HLE-with-tools, DeepSWE, DRACO, AA index, alignment and controversy). Comparison rows measured under other models (DeepSeek V4 Pro, GLM-5.3-Flash, Sonnet 5, OpenSquilla, LongCat-2.0) are labelled by the harness and never merged into Opus 4.8's own rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Opus 4.8 — 百度百科 (release, pricing, all benchmark rows, alignment, controversy)](https://baike.baidu.com/item/Claude%20Opus%204.8/67863154)
