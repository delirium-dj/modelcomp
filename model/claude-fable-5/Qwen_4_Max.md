# Claude Fable 5 — findings by Qwen 4 Max

- Source: Anthropic/claude-fable-5
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available Mythos-class model (Jun 9, 2026) — the capability tier above Opus, made safe for public use. Same underlying weights as Claude Mythos 5; the safeguards are the product boundary. State-of-the-art on nearly every benchmark at launch, with the largest single-launch coding jump in a year (SWE-bench Pro +11 pts over Opus 4.8, FrontierCode Diamond >2x the field). Now **legacy**: Fable 5.2 is current, and the Opus 5.5 / Sonnet 5.5 generation leads on the newest agentic harnesses.
- **Provider / access:** Claude API (`claude-fable-5`), Claude.ai, Claude Code, Cowork, GitHub Copilot, Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud, Microsoft Foundry, Databricks — broad day-one availability. Mythos 5 twin restricted to Glasswing / Cyber Verification Program partners.
- **Release / knowledge:** Released 2026-06-09; **suspended Jun 12** under a US Commerce export-control order; **redeployed Jul 1, 2026** after the order lifted Jun 30. Reliable knowledge cutoff **Jan 2026** (four months older than Opus 5's May 2026). Retirement not sooner than 2027-06-09.
- **IDs:** `claude-fable-5` (Bedrock `anthropic.claude-fable-5`).
- **Context window:** 1M tokens; 128K max output. **No long-context surcharge** (unlike GPT-5.5 >272K / Gemini 3.1 Pro >200K). Not on the 300K-output batch beta list. Adaptive thinking always on (API rejects disabling it); sampling params removed, effort low→max (default high).
- **Modalities:** Text and images in; text out. Vision was launch SOTA: beat Pokémon FireRed with a minimal vision-only harness, rebuilds web-app source from screenshots, extracts precise numbers from scientific figures. No native audio/video input or media generation.
- **Pricing (as of 2026-11-11):** $10 in / $50 out per 1M — double Opus 4.8/5, half the Mythos Preview rate. Cache read $1 (10%, i.e. 90% discount); 5m cache write $12.50, 1h $20; batch 50% off. Always-on thinking burns 500K–1M tokens on complex sessions (Simon Willison's day one: $110.42, $99.26 in one session). New tokenizer (Opus 4.7+) can emit up to 35% more tokens than pre-4.7 models.
- **Architecture:** Proprietary Mythos-class; parameters undisclosed. Three safety classifiers (cyber-offense, biology/chemistry, distillation) silently route flagged requests to a fallback model — Opus 4.8 at launch, **Opus 5 since an Aug 7, 2026 biology-classifier update that cut fallbacks ~85%**. Triggers in <5% of sessions on average, but concentrates in security/crypto/reverse-engineering work ("a Ferrari with a 30mph limiter"). ASL-3 safeguards; 1,000+ hour bug bounty found no universal jailbreak (UK AISI made partial progress); **30-day data retention required** for all Mythos-class traffic (safety-only, not training). Alignment: low misaligned behavior, similar to Opus 4.8.

### Raw benchmarks found

Agent / tool use (launch-era, vendor/third-party roundups):

- GDPval-AA (knowledge work): **1,932 Elo** — 42-pt lead over Opus 4.8 (1,890), GPT-5.5 1,769, Gemini 3.1 Pro 1,314 (Test-Lab; older version than the 5.5-gen v2.1 table)
- OSWorld-Verified (computer use): **85.0%** — best public score at launch, but only +1.6 over Opus 4.8 (83.4); GPT-5.5 78.7, Gemini 3.1 Pro 76.2
- Terminal-Bench 2.1: **88.0%** (vs Opus 4.8 82.7, GPT-5.5 83.4, Gemini 3.1 Pro 70.7 in Test-Lab's vendor-scaffold table; MorphLLM lists Opus 4.8 at 74.6 on AA's Terminus-2 harness — different harnesses, not averaged). Caveat: ~1/5 of Fable 5's TB trials tripped the cyber classifier mid-trajectory and finished on Opus 4.8, so the public number is a two-model blend and the underlying ceiling is higher
- Stripe: codebase-wide migration of a 50M-line Ruby codebase in a day (estimated 2+ months for a team); Harvey: blind-review redlines matched or beat the incumbent every time; spreadsheet suite beats Opus 4.8 at every effort, 25–30% faster

Reasoning / knowledge:

- Humanity's Last Exam: **59.0%** (no-tools; Safeguard/MangoMind) — distinct from the 5.5-gen HLE-with-tools figures
- FrontierCode Diamond (hardest split): **29.3%** — >2x Opus 4.8 (13.4), >5x GPT-5.5 (5.7)
- Hebbia Finance Benchmark: highest score of any model (senior-level reasoning); IMC trading-analysis evaluations aced; first model >90% on a core long-running analytics benchmark (+10 over Opus)
- Frontier physics research: matched GPT-5.5's four-day result in 36 hours using 1/3 the reasoning tokens (customer report)
- Mythos 5 twin (same weights, safeguards lifted): protein design ~10x acceleration, 9/14 targets yielded strong candidates (Dyno Therapeutics AAV); novel molecular-biology hypotheses preferred ~80% vs Opus-class in blind review, one E. coli mechanism independently corroborated; autonomous genomics across 138 species trained a model 100x smaller that beat a Science-published baseline

Coding:

- SWE-bench Verified: **95.0%** — #1 on the llm-stats tracker (Mythos Preview 93.9% #2, Opus 4.8 88.6%); GPT-5.5 82.6%
- SWE-bench Pro: **80.3%** (Anthropic launch figure) / **80.0%** (llm-stats tracker) — two vendor readings, both cited; +11.1 over Opus 4.8 (69.2), +21.7 over GPT-5.5 (58.6), +26.1 over Gemini 3.1 Pro (54.2). Scale's standardized SEAL scaffold runs 15–30 pts lower across models; Fable 5 not yet listed there
- CursorBench: state of the art (Cursor); FrontierBench: highest-scoring model, generalizes to unfamiliar tools (Cognition/Devin); FrontierCode: highest among frontier models even at medium effort; ViBench: highest, nearly saturating base use cases (Replit)
- Lovable: one-shots apps that took 100 prompts a year ago; Willison: MicroPython→CPython-on-WASM port packaged as a wheel, "several days' work" on his own library in a session

Long context:

- 1M window, no surcharge; stays coherent across millions of tokens; with persistent file-based memory reached Slay the Spire's final act 3x more often than Opus 4.8 (memory benefit 3x larger)
- No independent MRCR/GraphWalks retrieval number published for the original Fable 5

### Normalized scores (1–100)

- **Tool use: 93/100.** Launch-era GDPval 1,932 and OSWorld-Verified 85.0 leads, TB 2.1 88.0, Stripe/Harvey enterprise agency; capped by the silent-fallback blend (~1/5 of TB trials degraded to Opus mid-run), only +1.6 OSWorld over 4.8, and the 5.5 generation now leading the newest harnesses.
- **Reasoning: 94/100.** HLE 59.0, FrontierCode Diamond 29.3 (>2x field), Hebbia/finance leads, novel-hypothesis science (Mythos twin); capped by Jan 2026 cutoff and no GPQA/AA-index figure published for the original.
- **Context window: 95/100.** 1M/128K with no long-context surcharge and demonstrated million-token coherence + file-memory gains; capped by 10% cache-read rate, no 300K batch eligibility, and always-on thinking's 500K–1M-token sessions.
- **Multimodal: 73/100.** Text+image in, text out, with launch-SOTA vision (FireRed vision-only, screenshot-to-code, scientific figures); no native audio/video input or media generation.
- **Coding: 93/100.** SWE-bench Verified 95.0 (#1), SWE-bench Pro 80.3 (+11 over Opus 4.8), Diamond 29.3, CursorBench/FrontierBench/ViBench SOTA — the largest coding launch jump of its generation; capped by legacy status, no TB 4.0 figure, and the classifier-blend caveat.
- **Cost efficiency: 40/100.** $10/$50 premium (2x Opus 5, 5x Sonnet 5.5), 10% cache reads, always-on thinking; offset by half-Mythos-Preview pricing, no long-context surcharge, and cost-per-completed-task wins on hard work (physics at 1/3 the tokens).
- **Overall Score: 89.6/100.** Mean of the five quality dims (93+94+95+73+93)/5 = 89.6. Best-fit: the hardest long-horizon coding and knowledge work where cheaper models fail — but as of Nov 2026 it is legacy (migrate to Fable 5.2); instrument which model actually serves each request, since "Fable 5" is sometimes the fallback model wearing its name.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic's official announcement + platform docs, corroborated by three independent analyses — Safeguard, MorphLLM, Test-Lab); scores are normalized 1–100 interpretations, not official vendor scores. Original Fable 5 kept strictly separate from Fable 5.1/5.2 (the 5.5-gen TB 4.0 55.8 / OSWorld 2.1 80.7 / HLE-tools 65.6 figures belong to Fable 5.1, not this model). Conflicts labelled, not averaged: SWE-Pro 80.3 launch vs 80.0 tracker; TB 2.1 vendor-scaffold vs AA Terminus-2 harness; HLE 59.0 no-tools vs 5.5-gen with-tools. Launch-era SOTA claims dated Jun 9 and noted as since superseded; the ~1/5 classifier-blend caveat on Terminal-Bench and the silent-fallback operational risk explicitly discounted; Mythos-twin science results attributed to the safeguards-lifted model.
- Reference URLs:
  - [Claude Fable 5 and Claude Mythos 5 — Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Fable 5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Claude Fable 5: Benchmarks, Capabilities & Security Guide — Safeguard](https://safeguard.sh/resources/blog/claude-fable-5-anthropic-mythos-class-model-2026)
  - [Claude Benchmarks (2026): Every Model, SWE-bench Score, API ID, Price — MorphLLM](https://www.morphllm.com/claude-benchmarks)
  - [Claude Fable 5 vs Opus 4.8, GPT-5.5, Gemini 3.1 — Test-Lab](https://www.test-lab.ai/blog/claude-fable-5-frontier-coding-models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.